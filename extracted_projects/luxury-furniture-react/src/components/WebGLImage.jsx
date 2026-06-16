import React, { useRef, useEffect } from 'react';

export default function WebGLImage({ src, alt, className, style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      // Set internal resolution
      canvas.width = img.naturalWidth || 800;
      canvas.height = img.naturalHeight || 600;

      const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
      
      // Fallback if WebGL isn't supported
      if (!gl) {
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.drawImage(img, 0, 0);
        return;
      }

      const vsSource = `
        attribute vec2 aPosition;
        varying vec2 vUv;
        void main() {
            vUv = aPosition * 0.5 + 0.5;
            gl_Position = vec4(aPosition, 0.0, 1.0);
        }
      `;

      const fsSource = `
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D uImage;
        uniform float uProgress;

        void main() {
            float cols = 4.0;
            float colIndex = floor(vUv.x * cols);
            float stagger = 0.15;
            float delay = colIndex * stagger;
            float localProgress = clamp((uProgress * (1.0 + 3.0 * stagger) - delay), 0.0, 1.0);
            
            float f = localProgress - 1.0;
            float ease = f * f * f + 1.0;

            if (vUv.y < 1.0 - ease) {
                discard;
            }

            gl_FragColor = texture2D(uImage, vUv);
        }
      `;

      const compileShader = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
      };

      const program = gl.createProgram();
      gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
      gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
      gl.linkProgram(program);
      gl.useProgram(program);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
          -1, -1,  1, -1, -1,  1,
          -1,  1,  1, -1,  1,  1
      ]), gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, "aPosition");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      const uProgressLoc = gl.getUniformLocation(program, "uProgress");

      let startTime = null;
      const duration = 1200; 
      let animating = false;

      const render = (time) => {
        if (!startTime) startTime = time;
        let progress = (time - startTime) / duration;
        if (progress > 1.0) progress = 1.0;
        
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform1f(uProgressLoc, progress);
        gl.drawArrays(gl.TRIANGLES, 0, 6);

        if (progress < 1.0) {
            requestAnimationFrame(render);
        } else {
            animating = false;
        }
      };

      // Initial clear
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animating) {
                    animating = true;
                    startTime = null; 
                    requestAnimationFrame(render);
                }
                observer.unobserve(canvas);
            }
        });
      }, { threshold: 0.1 });

      observer.observe(canvas);

      return () => {
        observer.disconnect();
      };
    };
    
    img.src = src;
  }, [src]);

  return (
    <canvas 
        ref={canvasRef} 
        className={className} 
        style={style} 
        aria-label={alt} 
    />
  );
}