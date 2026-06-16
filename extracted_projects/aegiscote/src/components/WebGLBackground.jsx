import React, { useEffect, useRef } from 'react';

export default function WebGLBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    let animationFrameId;
    let startTime = Date.now();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const vsSource = `
      attribute vec4 aVertexPosition;
      void main() {
          gl_Position = aVertexPosition;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;

      // Simple pseudo-random
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      // 2D Noise
      float noise(vec2 st) {
          vec2 i = floor(st);
          vec2 f = fract(st);
          float a = random(i);
          float b = random(i + vec2(1.0, 0.0));
          float c = random(i + vec2(0.0, 1.0));
          float d = random(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      // FBM for smoke
      float fbm(vec2 st) {
          float v = 0.0;
          float a = 0.5;
          vec2 shift = vec2(100.0);
          mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
          for (int i = 0; i < 4; ++i) {
              v += a * noise(st);
              st = rot * st * 2.0 + shift;
              a *= 0.5;
          }
          return v;
      }

      // Procedural Bayer 4x4 logic approximation for WebGL 1.0
      float dither(vec2 pos) {
          vec2 p = mod(floor(pos), 4.0);
          float d = mod(p.x * 2.0 + p.y * 3.0, 4.0) / 4.0; 
          float d2 = mod(p.x * 1.0 + p.y * 2.0, 4.0) / 16.0;
          return d + d2;
      }

      void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 fragCoord = gl_FragCoord.xy;
          
          // Aspect correct UV for laser
          vec2 auv = uv;
          auv.x = auv.x * (u_resolution.x / u_resolution.y);
          float center = 0.5 * (u_resolution.x / u_resolution.y);

          // --- Dither Background (Organic dark waves) ---
          float pixelSize = 4.0;
          vec2 pixelatedCoord = floor(fragCoord / pixelSize);
          
          // Create slow moving cloud background
          vec2 bgUv = pixelatedCoord * 0.01;
          bgUv.y -= u_time * 0.05;
          float bgNoise = fbm(bgUv * 1.5);
          
          // Apply dither
          float threshold = dither(pixelatedCoord);
          float ditherVal = step(threshold, bgNoise * 0.8 + 0.1);
          
          // Colors for dither background
          vec3 colDark = vec3(0.01, 0.01, 0.015);
          vec3 colLight = vec3(0.08, 0.09, 0.1);
          vec3 bgColor = mix(colDark, colLight, ditherVal);
          // Add subtle vignette
          bgColor *= smoothstep(1.2, 0.2, length(uv - 0.5));

          // --- Laser Beam & Smoke ---
          vec3 brandColor = vec3(0.0, 0.9, 1.0); // Cyan
          
          // Beam line
          float distToLine = abs(auv.x - center);
          // Add slight sine wave wobble to the beam position
          distToLine = abs(auv.x - center + sin(uv.y * 10.0 + u_time) * 0.002);
          
          // Core (white hot, very thin)
          float core = 0.0005 / (distToLine + 0.0001);
          core = clamp(core, 0.0, 1.0);
          
          // Halo (brand color, wider)
          float halo = 0.002 / (distToLine + 0.001);
          halo = clamp(halo, 0.0, 1.0);
          
          // Smoke (FBM constrained by distance to line)
          vec2 smokeUv = uv * vec2(3.0, 1.0);
          smokeUv.y -= u_time * 0.2; // Smoke drifts up
          float smokeNoise = fbm(smokeUv * 4.0);
          
          // Concentrate smoke near the beam
          float smokeFalloff = smoothstep(0.3, 0.0, distToLine);
          float smoke = smokeNoise * smokeFalloff * 0.6;
          
          // Pulse glow
          float pulse = 0.8 + 0.2 * sin(u_time * 2.0);
          
          // Combine Laser elements
          vec3 laserColor = vec3(1.0) * core + brandColor * halo * pulse + brandColor * smoke * 0.5;

          // Composite
          vec3 finalColor = bgColor + laserColor;

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const loadShader = (gl, type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile failed: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);
    const shaderProgram = gl.createProgram();
    
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Shader init failed: ' + gl.getProgramInfoLog(shaderProgram));
      return;
    }

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
      },
      uniformLocations: {
        resolution: gl.getUniformLocation(shaderProgram, 'u_resolution'),
        time: gl.getUniformLocation(shaderProgram, 'u_time'),
      },
    };

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0,  1.0,
       1.0,  1.0,
      -1.0, -1.0,
       1.0, -1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const render = () => {
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

      gl.uniform2f(programInfo.uniformLocations.resolution, gl.canvas.width, gl.canvas.height);
      gl.uniform1f(programInfo.uniformLocations.time, (Date.now() - startTime) / 1000.0);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="glcanvas" className="fixed inset-0 z-0 pointer-events-none w-full h-full" />;
}