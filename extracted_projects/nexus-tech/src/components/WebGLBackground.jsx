import React, { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    const vsSource = `
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
          vUv = position * 0.5 + 0.5;
          gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      varying vec2 vUv;
      uniform float u_time;
      uniform vec2 u_resolution;

      float dither4x4(vec2 position) {
          int x = int(mod(position.x, 4.0));
          int y = int(mod(position.y, 4.0));
          int index = x + y * 4;
          float limit = 0.0;
          if(index==0) limit=0.0625; else if(index==1) limit=0.5625; else if(index==2) limit=0.1875; else if(index==3) limit=0.6875;
          else if(index==4) limit=0.8125; else if(index==5) limit=0.3125; else if(index==6) limit=0.9375; else if(index==7) limit=0.4375;
          else if(index==8) limit=0.25; else if(index==9) limit=0.75; else if(index==10) limit=0.125; else if(index==11) limit=0.625;
          else if(index==12) limit=1.0; else if(index==13) limit=0.5; else if(index==14) limit=0.875; else if(index==15) limit=0.375;
          return limit;
      }

      float random (in vec2 st) { return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123); }
      float noise (in vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 aspectUv = uv;
          aspectUv.x *= u_resolution.x / u_resolution.y;

          vec3 bgBase = vec3(0.02, 0.02, 0.03); 
          float vignette = length(uv - 0.5) * 1.5;
          vec3 bgGrad = mix(vec3(0.1, 0.1, 0.12), bgBase, min(vignette, 1.0));
          
          float pixelSize = 4.0; 
          vec2 ditherCoord = floor(gl_FragCoord.xy / pixelSize);
          float ditherVal = dither4x4(ditherCoord);
          
          float brightness = dot(bgGrad, vec3(0.333));
          float ditheredMask = step(ditherVal, brightness * 3.0); 
          vec3 ditherBg = mix(vec3(0.01), vec3(0.15), ditheredMask);

          vec3 accentColor = vec3(0.86, 0.15, 0.15); 
          
          float linePos = 0.5 + sin(u_time * 0.2 + uv.y * 3.0) * 0.01;
          float distToLine = abs(uv.x - linePos);
          
          float coreThickness = 0.0005; 
          float core = smoothstep(coreThickness, 0.0, distToLine);
          float glow = 0.005 / (distToLine + 0.005); 
          
          vec2 noiseUv = vec2(uv.x * 5.0, uv.y * 2.0 - u_time * 0.1);
          float fogNoise = noise(noiseUv) * 0.5 + noise(noiseUv * 2.0) * 0.25;
          float smokeDensity = smoothstep(0.2, 0.0, distToLine) * fogNoise;
          
          vec3 laserFinal = core * vec3(1.0) + glow * accentColor * 0.8 + smokeDensity * accentColor * 0.3; 

          vec3 finalColor = ditherBg + laserFinal;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, 'u_time');
    const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');

    const render = (time) => {
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}