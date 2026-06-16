import React, { useEffect, useRef } from 'react';
import { sharedAnimState } from '../shared/animationState';

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
  uniform vec2 u_mouse;
  uniform float u_intro;
  uniform float u_burst;
  uniform float u_scroll;

  float random(float n) { return fract(sin(n) * 43758.5453123); }

  void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      vec2 p = uv;
      vec2 center = vec2(0.55, 0.48);

      vec2 mouse = u_mouse / u_resolution.xy;
      mouse.y = 1.0 - mouse.y;

      vec3 color = vec3(0.0);

      float bgGlow = max(0.0, 1.0 - distance(p, vec2(-0.1, 0.5)));
      color += vec3(0.02, 0.12, 0.15) * pow(bgGlow, 2.0) * 0.5 * u_intro;

      float rightGlow = max(0.0, 1.0 - distance(p, vec2(1.08, 0.35)));
      color += vec3(0.02, 0.10, 0.12) * pow(rightGlow, 2.0) * 0.35;

      float particleNoise = fract(sin(dot(p + u_time * 0.015, vec2(12.9898, 78.233))) * 43758.5453);
      color += vec3(0.6, 0.8, 1.0) * pow(particleNoise, 90.0) * 0.2 * u_intro;

      float radial = distance(p, center);
      float radialBurst = smoothstep(0.55, 0.0, radial);
      color += vec3(0.05, 0.15, 0.18) * radialBurst * 0.4 * u_burst;

      float ring1 = abs(radial - (0.08 + u_burst * 0.26));
      float ring2 = abs(radial - (0.18 + u_burst * 0.32));
      float burstRing = smoothstep(0.035, 0.0, ring1) + smoothstep(0.05, 0.0, ring2);
      color += vec3(0.40, 0.90, 0.95) * burstRing * 0.22 * u_burst;

      float globalDriftY = sin(p.x * 2.0 - u_time * 0.4) * 0.15;
      float globalDriftX = cos(p.y * 1.5 + u_time * 0.3) * 0.05;

      p.y += globalDriftY * p.x;
      p.x += globalDriftX;
      p.y += sin((p.x + u_scroll * 0.65) * 8.0) * 0.015 * u_burst;

      float lineCount = 45.0;
      
      for(float i = 0.0; i < 45.0; i++) {
          float seed = i / lineCount;
          float speed = 0.05 + random(seed) * 0.1;
          float phase = seed * 6.2831;
          float startY = 0.5;

          float strandDelay = random(seed + 5.0) * 0.4; 
          float localIntro = clamp((u_intro - strandDelay) * 1.6, 0.0, 1.0);
          localIntro = localIntro * localIntro * (3.0 - 2.0 * localIntro);
          
          float spread = pow(p.x, 1.2) * 0.7 * localIntro; 
          
          float wave1 = sin(p.x * (1.8 + random(seed)*1.2) - u_time * speed + phase);
          float wave2 = cos(p.x * 2.5 + u_time * speed * 0.7 - phase * 1.1);
          float explosionWave = sin((p.x * 10.0) - u_time * 2.0 + seed * 14.0) * 0.08 * u_burst * pow(p.x, 1.4);
          
          float yPos = startY + (wave1 * 0.5 + wave2 * 0.3) * spread + explosionWave;

          vec2 linePoint = vec2(p.x, yPos);
          float distToMouse = distance(linePoint, mouse);
          float hoverInfluence = smoothstep(0.4, 0.0, distToMouse);
          
          float dy = mouse.y - yPos;
          float ripple = sin(distToMouse * 12.0 - u_time * 3.0) * 0.03 * hoverInfluence;
          yPos += dy * hoverInfluence * 0.4 * localIntro + ripple;

          float centerPush = smoothstep(0.38, 0.0, distance(vec2(p.x, yPos), center));
          yPos += (yPos - center.y) * centerPush * 0.45 * u_burst;

          float distToLine = abs(p.y - yPos);
          float thickness = 0.001 + p.x * 0.005 + u_burst * 0.002; 
          float intensity = 0.0007 / (distToLine + thickness);
          
          float edgeFade = smoothstep(1.0, 0.1, p.x);
          float lengthFade = smoothstep(u_intro * 1.5, (u_intro * 1.5) - 0.35, p.x);
          
          vec3 colDeepAqua = vec3(0.05, 0.60, 0.65);
          vec3 colTeal = vec3(0.10, 0.85, 0.75);
          vec3 colBrightCyan = vec3(0.20, 0.95, 0.85);
          
          vec3 lineColor = mix(colDeepAqua, colTeal, random(seed + 1.0));
          lineColor = mix(lineColor, colBrightCyan, random(seed + 2.0) * 0.4);
          lineColor += vec3(0.4, 0.9, 1.0) * centerPush * u_burst * 0.7;
          
          float coreGlow = smoothstep(0.015, 0.0, distToLine);
          lineColor += vec3(0.8, 0.9, 1.0) * coreGlow * 0.5;
          
          color += lineColor * intensity * edgeFade * lengthFade * localIntro;
      }

      gl_FragColor = vec4(color, 1.0);
  }
`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export default function WebGLBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) return;

    const program = gl.createProgram();
    gl.attachShader(program, compileShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, compileShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,  1, -1, -1,  1,
        -1,  1,  1, -1,  1,  1
    ]), gl.STATIC_DRAW);

    const posAttr = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posAttr);
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uTime = gl.getUniformLocation(program, "u_time");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uIntro = gl.getUniformLocation(program, "u_intro");
    const uBurst = gl.getUniformLocation(program, "u_burst");
    const uScroll = gl.getUniformLocation(program, "u_scroll");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e) => {
        targetMouseX = e.clientX;
        targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener('resize', resize);
    resize();

    const startTime = performance.now();

    const render = (time) => {
        mouseX += (targetMouseX - mouseX) * 0.04;
        mouseY += (targetMouseY - mouseY) * 0.04;

        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, (time - startTime) * 0.001);
        gl.uniform2f(uMouse, mouseX, mouseY);
        
        // Read directly from the shared mutable state object
        gl.uniform1f(uIntro, sharedAnimState.introValue);
        gl.uniform1f(uBurst, sharedAnimState.burstValue);
        gl.uniform1f(uScroll, sharedAnimState.scrollValue);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
        animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas 
      id="bg-canvas" 
      ref={canvasRef}
      className="fixed inset-0 w-full h-full scale-110 pointer-events-none z-0"
    />
  );
}