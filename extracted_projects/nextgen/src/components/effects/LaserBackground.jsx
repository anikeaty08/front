import { useEffect, useRef } from 'react';

export default function LaserBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec2 position;
      void main() {
          gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      float hash(float n) { return fract(sin(n) * 1e4); }
      float noise(float x) {
          float i = floor(x);
          float f = fract(x);
          float u = f * f * (3.0 - 2.0 * f);
          return mix(hash(i), hash(i + 1.0), u);
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          
          float centerOffset = noise(u_time * 0.1) * 0.1 - 0.05;
          float x = uv.x - 0.5 + centerOffset;
          float dist = abs(x);

          float core = 0.0005 / (dist + 0.0001);
          core = pow(core, 1.5);

          float halo = 0.015 / (dist + 0.005);

          float smokeNoise = noise(uv.y * 15.0 - u_time * 0.5 + noise(x * 50.0 + u_time));
          float smokeSpread = smoothstep(0.2, 0.0, dist);
          float smoke = smokeSpread * smokeNoise * 0.6;

          vec3 coreColor = vec3(1.0, 0.9, 1.0) * core;
          vec3 haloColor = vec3(0.6, 0.2, 0.9) * halo;
          vec3 smokeColor = vec3(0.4, 0.1, 0.6) * smoke;

          vec3 finalColor = coreColor + haloColor + smokeColor;

          float vignette = smoothstep(0.0, 0.2, uv.y) * smoothstep(1.0, 0.8, uv.y);
          float pulse = 1.0 + sin(u_time * 2.0) * 0.1;
          
          gl_FragColor = vec4(finalColor * vignette * pulse * 0.5, 1.0);
      }
    `;

    function compileShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
      -1.0,  1.0,  1.0, -1.0,  1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    }
    
    window.addEventListener('resize', resize);
    resize();

    let startTime = Date.now();
    function render() {
      const currentTime = (Date.now() - startTime) / 1000.0;
      gl.uniform1f(timeLocation, currentTime);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    }
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 w-full h-full pointer-events-none z-[0] opacity-70"
    />
  );
}