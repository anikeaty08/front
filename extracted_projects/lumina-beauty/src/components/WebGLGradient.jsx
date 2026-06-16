import React, { useEffect, useRef } from 'react';

export default function WebGLGradient({ className }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const NUM_BLOBS = 11;
    const BLOB_RADIUS = 0.15;
    const GAUSSIAN_FACTOR = 0.8;
    const INITIAL_SPEED = 0.5;
    const VELOCITY_NOISE = 0.0005;

    const BLOB_COLORS = [
      [0.945, 0.878, 0.867, 1.0], [0.78, 0.651, 0.706, 1.0], [0.69, 0.463, 0.443, 1.0],
      [0.4, 0.188, 0.294, 1.0], [0.412, 0.557, 0.541, 1.0], [0.682, 0.722, 0.706, 1.0],
      [0.773, 0.855, 1.0, 1.0], [0.984, 0.882, 0.761, 1.0], [1.0, 0.808, 0.929, 1.0],
      [0.765, 0.698, 1.0, 1.0], [0.51, 0.545, 0.976, 1.0],
    ];

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main(void) {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 v_uv;
      uniform vec2  u_centers[${NUM_BLOBS}];
      uniform vec4  u_colors[${NUM_BLOBS}];
      uniform float u_radius;
      uniform float u_gaussianFactor;

      void main(void) {
        float sumWeight = 0.0;
        vec4  blendedColor = vec4(0.0);
        for(int i = 0; i < ${NUM_BLOBS}; i++) {
          float d = distance(v_uv, u_centers[i]);
          float w = exp(-u_gaussianFactor * (d * d) / (u_radius * u_radius));
          blendedColor += w * u_colors[i];
          sumWeight    += w;
        }
        blendedColor /= sumWeight;
        gl_FragColor  = vec4(blendedColor.rgb, blendedColor.a * 0.6); // slight transparency to blend with background
      }
    `;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    let animationFrameId;

    function resizeCanvas() {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function compileShader(source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return null;
      return shader;
    }

    const vs = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const aPositionLoc = gl.getAttribLocation(program, 'a_position');
    const uCentersLoc = Array.from({ length: NUM_BLOBS }, (_, i) => gl.getUniformLocation(program, `u_centers[${i}]`));
    const uColorsLoc = Array.from({ length: NUM_BLOBS }, (_, i) => gl.getUniformLocation(program, `u_colors[${i}]`));
    const uRadiusLoc = gl.getUniformLocation(program, 'u_radius');
    const uGaussianFactorLoc = gl.getUniformLocation(program, 'u_gaussianFactor');

    const quadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(aPositionLoc);
    gl.vertexAttribPointer(aPositionLoc, 2, gl.FLOAT, false, 0, 0);

    const blobPositions = [];
    const blobVelocities = [];

    for (let i = 0; i < NUM_BLOBS; i++) {
      blobPositions.push([Math.random(), Math.random()]);
      blobVelocities.push([(Math.random() - 0.5) * INITIAL_SPEED, (Math.random() - 0.5) * INITIAL_SPEED]);
    }

    gl.uniform1f(uRadiusLoc, BLOB_RADIUS);
    gl.uniform1f(uGaussianFactorLoc, GAUSSIAN_FACTOR);

    let lastTime = 0;
    function render(now) {
      now *= 0.001;
      const deltaTime = now - (lastTime || now);
      lastTime = now;

      for (let i = 0; i < NUM_BLOBS; i++) {
        blobVelocities[i][0] += (Math.random() - 0.5) * VELOCITY_NOISE;
        blobVelocities[i][1] += (Math.random() - 0.5) * VELOCITY_NOISE;
        blobPositions[i][0] += blobVelocities[i][0] * deltaTime;
        blobPositions[i][1] += blobVelocities[i][1] * deltaTime;
        for (let c = 0; c < 2; c++) {
          if (blobPositions[i][c] < 0) { blobPositions[i][c] = 0; blobVelocities[i][c] *= -1; }
          else if (blobPositions[i][c] > 1) { blobPositions[i][c] = 1; blobVelocities[i][c] *= -1; }
        }
      }

      for (let i = 0; i < NUM_BLOBS; i++) {
        gl.uniform2fv(uCentersLoc[i], blobPositions[i]);
        gl.uniform4fv(uColorsLoc[i], BLOB_COLORS[i % BLOB_COLORS.length]);
      }

      gl.clearColor(1, 1, 1, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 ${className}`} />;
}