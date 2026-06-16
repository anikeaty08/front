import React, { useEffect, useRef } from 'react';

const WebGLBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported');
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
      void main() {
          gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;

      // Simple 2D Noise
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
      float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187,  0.366025403784439, -0.577350269189626,  0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i); 
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
      }

      float fbm(vec2 st) {
          float value = 0.0;
          float amplitude = .5;
          float frequency = 0.;
          for (int i = 0; i < 4; i++) {
              value += amplitude * snoise(st);
              st *= 2.;
              amplitude *= .5;
          }
          return value;
      }

      void main() {
          vec2 st = gl_FragCoord.xy/u_resolution.xy;
          st.x *= u_resolution.x/u_resolution.y;

          vec3 color = vec3(0.0);

          float linePos = u_resolution.x/u_resolution.y * 0.5;
          float waver = sin(st.y * 5.0 + u_time) * 0.02;
          float dist = abs(st.x - linePos + waver);
          
          float core = 0.001 / dist;
          float glow = 0.01 / (dist + 0.01);
          
          float smoke = fbm(vec2(st.x * 2.0, st.y * 2.0 - u_time * 0.1));
          smoke = smoothstep(0.0, 1.0, smoke) * 0.5;
          float smokeGlow = smoke * (0.05 / (dist + 0.05));

          vec3 laserCore = vec3(1.0, 0.9, 0.8) * core;
          vec3 laserGlow = vec3(0.8, 0.2, 0.1) * glow;
          vec3 laserSmoke = vec3(0.9, 0.3, 0.1) * smokeGlow;

          color += laserCore + laserGlow + laserSmoke;

          vec2 ditherUv = mod(gl_FragCoord.xy, 4.0);
          float dither = (ditherUv.x * 4.0 + ditherUv.y) / 16.0;
          color -= (dither - 0.5) * 0.05;

          color *= smoothstep(0.0, 0.2, st.x) * smoothstep(u_resolution.x/u_resolution.y, u_resolution.x/u_resolution.y - 0.2, st.x);
          
          gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
      }
    `;

    const createShader = (type, source) => {
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

    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, createShader(gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');

    let startTime = performance.now();
    const render = (time) => {
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, (time - startTime) * 0.001);
      
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
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
      className="fixed inset-0 w-full h-full z-0 pointer-events-none mix-blend-screen opacity-60"
    />
  );
};

export default WebGLBackground;