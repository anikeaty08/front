import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    function initPulsewave() {
      if (!window.gsap) {
        setTimeout(initPulsewave, 50);
        return;
      }
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const canvas = document.getElementById("webglLayer");
      const gl = canvas ? canvas.getContext("webgl", { antialias: false, alpha: true, powerPreference: "high-performance" }) : null;

      let webglTime = 0;
      let webglRunning = false;

      function resizeCanvas() {
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const rect = canvas.getBoundingClientRect();
        canvas.width = Math.max(1, Math.floor(rect.width * dpr));
        canvas.height = Math.max(1, Math.floor(rect.height * dpr));
        if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
      }

      if (gl) {
        const vertexSource = `
          attribute vec2 position;
          void main() {
            gl_Position = vec4(position, 0.0, 1.0);
          }
        `;

        const fragmentSource = `
          precision mediump float;
          uniform vec2 resolution;
          uniform float time;

          float line(vec2 uv, float y, float thickness) {
            float d = abs(uv.y - y);
            return smoothstep(thickness, 0.0, d);
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / resolution.xy;
            vec2 p = uv * 2.0 - 1.0;
            p.x *= resolution.x / resolution.y;

            float wave1 = sin((p.x * 2.2) + time * 1.15) * 0.18 + sin((p.x * 4.5) - time * 0.72) * 0.055;
            float wave2 = sin((p.x * 2.05) - time * 0.92 + 1.8) * 0.2 + sin((p.x * 5.0) + time * 0.68) * 0.045;
            float wave3 = sin((p.x * 2.8) + time * 1.55 + 3.2) * 0.13;

            float ribbonA = line(p, wave1 - 0.18, 0.035) + line(p, wave1 - 0.24, 0.014);
            float ribbonB = line(p, wave2 + 0.08, 0.032) + line(p, wave2 + 0.16, 0.013);
            float ribbonC = line(p, wave3 - 0.42, 0.042);

            float centerGlow = 1.0 - smoothstep(0.0, 1.25, length(vec2(p.x * 0.75, p.y + 0.06)));
            float sweep = smoothstep(-1.2, 0.45, p.x + sin(time * 0.4) * 0.25) * smoothstep(1.25, -0.2, p.x);

            vec3 lime = vec3(0.72, 1.0, 0.26);
            vec3 violet = vec3(0.86, 0.36, 1.0);
            vec3 cyan = vec3(0.1, 0.72, 1.0);

            vec3 color = vec3(0.0);
            color += lime * ribbonA * (0.85 + sweep * 0.55);
            color += violet * ribbonB * 1.15;
            color += cyan * ribbonC * 0.42;
            color += vec3(0.58, 0.18, 0.95) * centerGlow * 0.12;

            float alpha = clamp((ribbonA + ribbonB + ribbonC) * 0.75 + centerGlow * 0.14, 0.0, 0.92);
            gl_FragColor = vec4(color, alpha);
          }
        `;

        function compileShader(type, source) {
          const shader = gl.createShader(type);
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
          return shader;
        }

        const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);

        const position = gl.getAttribLocation(program, "position");
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

        const resolutionUniform = gl.getUniformLocation(program, "resolution");
        const timeUniform = gl.getUniformLocation(program, "time");

        function renderWebGL(now) {
          if (!webglRunning) return;
          webglTime = now * 0.001;
          gl.uniform2f(resolutionUniform, canvas.width, canvas.height);
          gl.uniform1f(timeUniform, webglTime);
          gl.clearColor(0, 0, 0, 0);
          gl.clear(gl.COLOR_BUFFER_BIT);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          requestAnimationFrame(renderWebGL);
        }

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas, { passive: true });
      }

      const stage = document.getElementById("filmStage");
      const introWord = document.getElementById("introWord");
      const mainTitle = document.getElementById("mainTitle");
      const altTitle = document.getElementById("altTitle");
      const resolveTitle = document.getElementById("resolveTitle");
      const phoneWrap = document.getElementById("phoneWrap");
      const phone = document.getElementById("phone");
      const cards = gsap.utils.toArray(".mediaCard");
      const flash = document.getElementById("flash");
      const metaRail = document.getElementById("metaRail");
      const sequenceLabel = document.getElementById("sequenceLabel");
      const abstractBase = document.getElementById("abstractBase");

      if (prefersReduced) {
        if (gl) {
          webglRunning = true;
          requestAnimationFrame(renderWebGL);
        }
        gsap.set([introWord, altTitle], { opacity: 0 });
        gsap.set(mainTitle, { opacity: 1 });
        gsap.set(phoneWrap, { opacity: 1, y: 0, scale: 1 });
        gsap.set(cards, { opacity: 1, y: 0, scale: 1 });
        gsap.set(metaRail, { opacity: 1 });
        gsap.set(abstractBase, { opacity: 0.35 });
      } else {
        if (gl) {
          webglRunning = true;
          requestAnimationFrame(renderWebGL);
        }

        gsap.set(stage, { scale: 0.985 });
        gsap.set(".titleChunk", { yPercent: 70, opacity: 0, filter: "blur(1rem)" });
        gsap.set(phoneWrap, { y: 120, scale: 0.78, rotation: -3, filter: "blur(.75rem)" });
        gsap.set(cards, { y: 160, scale: 0.72, filter: "blur(.7rem)" });
        gsap.set(abstractBase, { opacity: 0, scale: 1.35 });
        gsap.set(resolveTitle, { scale: 1.35, filter: "blur(1rem)" });

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2, defaults: { ease: "power3.out" } });

        tl.to(stage, { scale: 1, duration: 1.4, ease: "power2.out" }, 0)
          .to(metaRail, { opacity: 1, y: -4, duration: 0.9 }, 0.2)
          .to(introWord, { opacity: 1, y: -8, scale: 1, duration: 1.1 }, 0.25)
          .to(introWord, { opacity: 0.3, scale: 1.12, duration: 1.4, ease: "power2.inOut" }, 1.3)
          .to(mainTitle, { opacity: 1, duration: 0.1 }, 1.15)
          .to(".titleChunk", { yPercent: 0, opacity: 1, filter: "blur(0rem)", duration: 0.85, stagger: 0.07, ease: "back.out(1.35)" }, 1.18)
          .to(sequenceLabel, { opacity: 1, duration: 0.45 }, 1.25)
          .to(phoneWrap, { opacity: 1, y: 0, scale: 1, rotation: 0, filter: "blur(0rem)", duration: 1.15, ease: "expo.out" }, 2.05)
          .to(phone, { y: -10, rotationZ: 0.8, duration: 2.2, yoyo: true, repeat: 1, ease: "sine.inOut" }, 2.8)
          .to(cards, { opacity: 1, y: 0, scale: 1, filter: "blur(0rem)", duration: 0.9, stagger: { each: 0.08, from: "center" }, ease: "back.out(1.5)" }, 3.1)
          .to(cards, { x: (i) => [-38, -18, 0, 18, 38][i] || 0, y: (i) => [6, -12, 10, -8, 8][i] || 0, rotation: (i) => [-8, 4, -2, 3, 8][i] || 0, duration: 2.4, ease: "sine.inOut" }, 4.1)
          .to(mainTitle, { scale: 1.08, y: -22, duration: 2.1, ease: "power2.inOut" }, 4.2)
          .to(phoneWrap, { scale: 1.08, y: 18, duration: 2.1, ease: "power2.inOut" }, 4.2)
          .to(flash, { opacity: 0.78, duration: 0.08, ease: "none" }, 6.45)
          .to(flash, { opacity: 0, duration: 0.45, ease: "power2.out" }, 6.53)
          .set(sequenceLabel.querySelector("span:last-child"), { textContent: "Sequence 02" }, 6.52)
          .to(mainTitle, { opacity: 0, scale: 1.45, filter: "blur(.6rem)", duration: 0.7, ease: "power3.in" }, 6.5)
          .to(introWord, { opacity: 0, duration: 0.4 }, 6.5)
          .to(abstractBase, { opacity: 0.44, scale: 1.14, filter: "blur(.25rem)", duration: 1.1 }, 6.6)
          .to(altTitle, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: "expo.out" }, 6.82)
          .fromTo(altTitle, { y: 50, filter: "blur(.75rem)" }, { y: 0, filter: "blur(0rem)", duration: 0.8 }, 6.82)
          .to(cards, { scale: 1.22, y: -50, x: (i) => [-110, -54, 0, 54, 110][i] || 0, duration: 1.4, ease: "power2.inOut" }, 7.15)
          .to(phoneWrap, { scale: 0.72, y: 170, opacity: 0.62, filter: "blur(.12rem)", duration: 1.3, ease: "power2.inOut" }, 7.15)
          .to(cards, { x: (i) => [-210, -92, 0, 92, 210][i] || 0, y: (i) => [-26, 16, -12, 20, -24][i] || 0, rotation: (i) => [-12, 8, 0, -6, 12][i] || 0, duration: 2.6, ease: "sine.inOut" }, 8.45)
          .to(altTitle, { scale: 1.16, y: -20, duration: 2.6, ease: "sine.inOut" }, 8.45)
          .set(sequenceLabel.querySelector("span:last-child"), { textContent: "Sequence 03" }, 10.65)
          .to(flash, { opacity: 0.5, duration: 0.08 }, 10.65)
          .to(flash, { opacity: 0, duration: 0.35 }, 10.73)
          .to(altTitle, { opacity: 0, y: -80, scale: 1.35, filter: "blur(.8rem)", duration: 0.75, ease: "power3.in" }, 10.72)
          .to(phoneWrap, { opacity: 1, y: -10, scale: 1.2, filter: "blur(0rem)", duration: 1.1, ease: "expo.out" }, 10.78)
          .to(cards, { opacity: 0.82, scale: 0.92, y: 70, x: 0, rotation: 0, duration: 1.1, stagger: { each: 0.04, from: "edges" }, ease: "power3.out" }, 10.8)
          .to(phoneWrap, { x: -8, rotation: -1.2, duration: 0.18, repeat: 7, yoyo: true, ease: "power1.inOut" }, 12.1)
          .to(cards, { filter: "blur(.25rem)", opacity: 0.5, duration: 1.2 }, 12.25)
          .to(abstractBase, { opacity: 0.18, scale: 1.25, duration: 1.8 }, 12.3)
          .set(sequenceLabel.querySelector("span:last-child"), { textContent: "Resolve" }, 14.15)
          .to(flash, { opacity: 0.85, duration: 0.09 }, 14.15)
          .to(flash, { opacity: 0, duration: 0.5 }, 14.24)
          .to([phoneWrap, cards], { opacity: 0, scale: 0.7, y: 160, filter: "blur(1rem)", duration: 0.85, ease: "power3.in" }, 14.2)
          .to(resolveTitle, { opacity: 1, scale: 1, filter: "blur(0rem)", duration: 1.05, ease: "expo.out" }, 14.65)
          .to(resolveTitle, { scale: 1.04, duration: 2.7, ease: "sine.inOut" }, 15.8)
          .to(metaRail, { opacity: 0.55, duration: 1.2 }, 15.8)
          .to(resolveTitle, { opacity: 0, scale: 1.28, filter: "blur(.8rem)", duration: 0.9, ease: "power3.in" }, 19.0)
          .to(abstractBase, { opacity: 0, duration: 0.8 }, 19.0)
          .to(metaRail, { opacity: 0, duration: 0.5 }, 19.2)
          .to(stage, { scale: 0.985, duration: 0.9, ease: "power2.inOut" }, 19.1);
      }
    }
    initPulsewave();
  


      const setupCanvas = (id, renderFn) => {
          const canvas = document.getElementById(id);
          if (!canvas) return;
          const ctx = canvas.getContext('2d', { alpha: true });
          let w, h, time = 0;
          const resize = () => {
              const rect = canvas.parentElement.getBoundingClientRect();
              w = rect.width; h = rect.height;
              const dpr = window.devicePixelRatio || 1;
              canvas.width = w * dpr; canvas.height = h * dpr;
              ctx.scale(dpr, dpr);
          };
          window.addEventListener('resize', resize);
          resize();
          const loop = () => {
              time += 0.01;
              ctx.clearRect(0, 0, w, h);
              ctx.save();
              ctx.translate(w / 2, h / 2);
              renderFn(ctx, time, w, h);
              ctx.restore();
              requestAnimationFrame(loop);
          };
          loop();
      };

      setupCanvas('canvas-core', (ctx, t) => {
          const radius = 55;
          const sides = 6;
          const rings = 3;
          ctx.lineWidth = 1;

          for (let r = 1; r <= rings; r++) {
              const currentRadius = radius + (r * 18);
              ctx.save();
              const rotation = t * (r % 2 === 0 ? 0.3 : -0.2) * r;
              ctx.rotate(rotation);

              ctx.beginPath();
              for (let i = 0; i <= sides; i++) {
                  const angle = (i * 2 * Math.PI) / sides;
                  const x = currentRadius * Math.cos(angle);
                  const y = currentRadius * Math.sin(angle);

                  const scale = 1 + Math.sin(t * 2 + r) * 0.03;
                  const sx = x * scale;
                  const sy = y * scale;

                  if (i === 0) ctx.moveTo(sx, sy);
                  else ctx.lineTo(sx, sy);

                  if (i < sides) {
                      ctx.fillStyle = `rgba(99, 102, 241, ${0.3 + (r*0.1)})`;
                      ctx.fillRect(sx - 1, sy - 1, 2, 2);
                  }
              }
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 + (0.05 * r)})`;
              ctx.stroke();

              if (r > 1) {
                  ctx.beginPath();
                  for(let i=0; i<sides; i++) {
                      const angle = (i * 2 * Math.PI) / sides;
                      ctx.moveTo((currentRadius-18) * Math.cos(angle), (currentRadius-18) * Math.sin(angle));
                      ctx.lineTo(currentRadius * Math.cos(angle), currentRadius * Math.sin(angle));
                  }
                  ctx.strokeStyle = `rgba(99, 102, 241, 0.05)`;
                  ctx.stroke();
              }
              ctx.restore();
          }

          const corePulse = Math.abs(Math.sin(t * 2)) * 3;
          ctx.beginPath();
          ctx.arc(0, 0, 8, 0, Math.PI * 2);
          ctx.fillStyle = '#0a0a0a';
          ctx.fill();
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(0, 0, 3 + corePulse, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(99, 102, 241, 0.9)';
          ctx.shadowColor = 'rgba(99, 102, 241, 0.6)';
          ctx.shadowBlur = 12;
          ctx.fill();
          ctx.shadowBlur = 0;
      });

      const circuitLines = Array.from({length: 15}, () => ({
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          dir: Math.floor(Math.random() * 4),
          length: 40 + Math.random() * 60,
          speed: 0.6 + Math.random() * 1.2,
          offset: Math.random() * 100
      }));

      setupCanvas('canvas-network', (ctx, t, w, h) => {
          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
          ctx.beginPath();
          for(let i = -120; i <= 120; i += 24) {
              ctx.moveTo(i, -120); ctx.lineTo(i, 120);
              ctx.moveTo(-120, i); ctx.lineTo(120, i);
          }
          ctx.stroke();

          circuitLines.forEach((line) => {
              const progress = ((t * 50 * line.speed) + line.offset) % 250;
              let dx = 0, dy = 0;
              if(line.dir === 0) dy = -1;
              else if(line.dir === 1) dx = 1;
              else if(line.dir === 2) dy = 1;
              else dx = -1;

              ctx.beginPath();
              ctx.moveTo(line.x, line.y);
              ctx.lineTo(line.x + dx * line.length, line.y + dy * line.length);
              ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
              ctx.stroke();

              if (progress < line.length + 20) {
                  const startP = Math.max(0, progress - 20);
                  const endP = Math.min(line.length, progress);
                  if (startP < endP) {
                      ctx.beginPath();
                      ctx.moveTo(line.x + dx * startP, line.y + dy * startP);
                      ctx.lineTo(line.x + dx * endP, line.y + dy * endP);
                      ctx.strokeStyle = 'rgba(99, 102, 241, 0.9)';
                      ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
                      ctx.shadowBlur = 8;
                      ctx.stroke();
                      ctx.shadowBlur = 0;
                  }
              }
              ctx.fillStyle = '#0a0a0a';
              ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
              ctx.beginPath();
              ctx.arc(line.x + dx * line.length, line.y + dy * line.length, 2.5, 0, Math.PI*2);
              ctx.fill();
              ctx.stroke();
          });
      });

      setupCanvas('canvas-orbit', (ctx, t) => {
          const numOrbits = 5;
          ctx.lineWidth = 1;
          ctx.translate(20, 0);

          for(let i = 1; i <= numOrbits; i++) {
              const radius = i * 28;
              const speed = (numOrbits - i + 1) * 0.15;
              const angleOffset = t * speed * (i % 2 === 0 ? 1 : -1);

              ctx.save();
              ctx.rotate(angleOffset);

              ctx.beginPath();
              ctx.arc(0, 0, radius, 0, Math.PI * 2);
              ctx.strokeStyle = `rgba(99, 102, 241, ${0.03 + i*0.015})`;
              if (i % 2 !== 0) ctx.setLineDash([3, 5]);
              ctx.stroke();
              ctx.setLineDash([]);

              const fragments = i + 1;
              for(let f = 0; f < fragments; f++) {
                  const fAngle = (f / fragments) * Math.PI * 2;
                  const fx = radius * Math.cos(fAngle);
                  const fy = radius * Math.sin(fAngle);

                  ctx.beginPath();
                  ctx.arc(0, 0, radius, fAngle - 0.15, fAngle + 0.15);
                  ctx.strokeStyle = `rgba(99, 102, 241, ${0.2 + (Math.sin(t*2 + f)*0.3)})`;
                  ctx.lineWidth = 1.5;
                  ctx.stroke();
                  ctx.lineWidth = 1;

                  ctx.beginPath();
                  ctx.arc(fx, fy, 1.5, 0, Math.PI * 2);
                  ctx.fillStyle = 'rgba(99, 102, 241, 0.9)';
                  ctx.fill();
              }
              ctx.restore();
          }

          ctx.beginPath();
          for(let w = -20; w <= 20; w+=2) {
              const amp = Math.max(0, 12 - Math.abs(w)*0.6);
              const waveY = Math.sin(t*6 + w*0.4) * amp;
              if(w === -20) ctx.moveTo(w, waveY);
              else ctx.lineTo(w, waveY);
          }
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
          ctx.stroke();
      });
    


      // Initialize Lucide Icons
      lucide.createIcons();

      // Initialize Chart.js Telemetry Data
      document.addEventListener('DOMContentLoaded', function() {
        const canvas = document.getElementById('telemetryChart');
        if (canvas) {
          new Chart(canvas, {
            type: 'line',
            data: {
              labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
              datasets: [{
                label: 'Synaptic Load',
                data: [22, 38, 18, 70, 48, 85, 55],
                borderColor: '#6366F1',
                backgroundColor: 'rgba(99,102,241,0.1)',
                borderWidth: 1.5,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#000',
                pointBorderColor: '#6366F1',
                pointBorderWidth: 1.5,
                pointRadius: 4,
                pointHoverRadius: 6
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: 'rgba(24,24,27,0.95)',
                  titleFont: { family: 'JetBrains Mono', size: 11, weight: 'normal' },
                  bodyFont: { family: 'Inter', size: 13, weight: 'normal' },
                  borderColor: 'rgba(255,255,255,0.05)',
                  borderWidth: 1,
                  padding: 12,
                  displayColors: false,
                  callbacks: {
                    label: function(context) {
                      return context.parsed.y + ' TB/s';
                    }
                  }
                }
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: { color: 'rgba(255,255,255,0.03)', drawBorder: false },
                  ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#71717a', maxTicksLimit: 5, padding: 10 }
                },
                x: {
                  grid: { display: false, drawBorder: false },
                  ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#71717a', padding: 10 }
                }
              },
              interaction: {
                intersect: false,
                mode: 'index',
              },
            }
          });
        }
      });
    


      import { Renderer, Triangle, Program, Mesh } from 'https://esm.sh/ogl';

      function initPrism(container, options = {}) {
        const {
          height = 3.5,
          baseWidth = 5.5,
          animationType = 'rotate',
          glow = 1,
          offset = { x: 0, y: 0 },
          noise = 0.5,
          transparent = true,
          scale = 3.6,
          hueShift = 0,
          colorFrequency = 1,
          hoverStrength = 2,
          inertia = 0.05,
          bloom = 1,
          suspendWhenOffscreen = false,
          timeScale = 0.5
        } = options;

        const H = Math.max(0.001, height);
        const BW = Math.max(0.001, baseWidth);
        const BASE_HALF = BW * 0.5;
        const GLOW = Math.max(0.0, glow);
        const NOISE = Math.max(0.0, noise);
        const offX = offset?.x ?? 0;
        const offY = offset?.y ?? 0;
        const SAT = transparent ? 1.5 : 1;
        const SCALE = Math.max(0.001, scale);
        const HUE = hueShift || 0;
        const CFREQ = Math.max(0.0, colorFrequency || 1);
        const BLOOM = Math.max(0.0, bloom || 1);
        const RSX = 1;
        const RSY = 1;
        const RSZ = 1;
        const TS = Math.max(0, timeScale || 1);
        const HOVSTR = Math.max(0, hoverStrength || 1);
        const INERT = Math.max(0, Math.min(1, inertia || 0.12));

        const dpr = Math.min(2, window.devicePixelRatio || 1);
        const renderer = new Renderer({
          dpr,
          alpha: transparent,
          antialias: false
        });
        const gl = renderer.gl;
        gl.disable(gl.DEPTH_TEST);
        gl.disable(gl.CULL_FACE);
        gl.disable(gl.BLEND);

        Object.assign(gl.canvas.style, {
          position: 'absolute',
          inset: '0',
          width: '100%',
          height: '100%',
          display: 'block'
        });
        container.appendChild(gl.canvas);

        const vertex = `
          attribute vec2 position;
          void main() {
            gl_Position = vec4(position, 0.0, 1.0);
          }
        `;

        const fragment = `
          precision highp float;

          uniform vec2  iResolution;
          uniform float iTime;

          uniform float uHeight;
          uniform float uBaseHalf;
          uniform mat3  uRot;
          uniform int   uUseBaseWobble;
          uniform float uGlow;
          uniform vec2  uOffsetPx;
          uniform float uNoise;
          uniform float uSaturation;
          uniform float uScale;
          uniform float uHueShift;
          uniform float uColorFreq;
          uniform float uBloom;
          uniform float uCenterShift;
          uniform float uInvBaseHalf;
          uniform float uInvHeight;
          uniform float uMinAxis;
          uniform float uPxScale;
          uniform float uTimeScale;

          vec4 tanh4(vec4 x){
            vec4 e2x = exp(2.0*x);
            return (e2x - 1.0) / (e2x + 1.0);
          }

          float rand(vec2 co){
            return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453123);
          }

          float sdOctaAnisoInv(vec3 p){
            vec3 q = vec3(abs(p.x) * uInvBaseHalf, abs(p.y) * uInvHeight, abs(p.z) * uInvBaseHalf);
            float m = q.x + q.y + q.z - 1.0;
            return m * uMinAxis * 0.5773502691896258;
          }

          float sdPyramidUpInv(vec3 p){
            float oct = sdOctaAnisoInv(p);
            float halfSpace = -p.y;
            return max(oct, halfSpace);
          }

          mat3 hueRotation(float a){
            float c = cos(a), s = sin(a);
            mat3 W = mat3(
              0.299, 0.587, 0.114,
              0.299, 0.587, 0.114,
              0.299, 0.587, 0.114
            );
            mat3 U = mat3(
               0.701, -0.587, -0.114,
              -0.299,  0.413, -0.114,
              -0.300, -0.588,  0.886
            );
            mat3 V = mat3(
               0.168, -0.331,  0.500,
               0.328,  0.035, -0.500,
              -0.497,  0.296,  0.201
            );
            return W + U * c + V * s;
          }

          void main(){
            vec2 f = (gl_FragCoord.xy - 0.5 * iResolution.xy - uOffsetPx) * uPxScale;

            float z = 5.0;
            float d = 0.0;

            vec3 p;
            vec4 o = vec4(0.0);

            float centerShift = uCenterShift;
            float cf = uColorFreq;

            mat2 wob = mat2(1.0);
            if (uUseBaseWobble == 1) {
              float t = iTime * uTimeScale;
              float c0 = cos(t + 0.0);
              float c1 = cos(t + 33.0);
              float c2 = cos(t + 11.0);
              wob = mat2(c0, c1, c2, c0);
            }

            const int STEPS = 100;
            for (int i = 0; i < STEPS; i++) {
              p = vec3(f, z);
              p.xz = p.xz * wob;
              p = uRot * p;
              vec3 q = p;
              q.y += centerShift;
              d = 0.1 + 0.2 * abs(sdPyramidUpInv(q));
              z -= d;
              o += (sin((p.y + z) * cf + vec4(0.0, 1.0, 2.0, 3.0)) + 1.0) / d;
            }

            o = tanh4(o * o * (uGlow * uBloom) / 1e5);

            vec3 col = o.rgb;
            float n = rand(gl_FragCoord.xy + vec2(iTime));
            col += (n - 0.5) * uNoise;
            col = clamp(col, 0.0, 1.0);

            float L = dot(col, vec3(0.2126, 0.7152, 0.0722));
            col = clamp(mix(vec3(L), col, uSaturation), 0.0, 1.0);

            if(abs(uHueShift) > 0.0001){
              col = clamp(hueRotation(uHueShift) * col, 0.0, 1.0);
            }

            gl_FragColor = vec4(col, o.a);
          }
        `;

        const geometry = new Triangle(gl);
        const iResBuf = new Float32Array(2);
        const offsetPxBuf = new Float32Array(2);

        const program = new Program(gl, {
          vertex,
          fragment,
          uniforms: {
            iResolution: { value: iResBuf },
            iTime: { value: 0 },
            uHeight: { value: H },
            uBaseHalf: { value: BASE_HALF },
            uUseBaseWobble: { value: 1 },
            uRot: { value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) },
            uGlow: { value: GLOW },
            uOffsetPx: { value: offsetPxBuf },
            uNoise: { value: NOISE },
            uSaturation: { value: SAT },
            uScale: { value: SCALE },
            uHueShift: { value: HUE },
            uColorFreq: { value: CFREQ },
            uBloom: { value: BLOOM },
            uCenterShift: { value: H * 0.25 },
            uInvBaseHalf: { value: 1 / BASE_HALF },
            uInvHeight: { value: 1 / H },
            uMinAxis: { value: Math.min(BASE_HALF, H) },
            uPxScale: {
              value: 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE)
            },
            uTimeScale: { value: TS }
          }
        });
        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
          const w = container.clientWidth || 1;
          const h = container.clientHeight || 1;
          renderer.setSize(w, h);
          iResBuf[0] = gl.drawingBufferWidth;
          iResBuf[1] = gl.drawingBufferHeight;
          offsetPxBuf[0] = offX * dpr;
          offsetPxBuf[1] = offY * dpr;
          program.uniforms.uPxScale.value = 1 / ((gl.drawingBufferHeight || 1) * 0.1 * SCALE);
        };
        const ro = new ResizeObserver(resize);
        ro.observe(container);
        resize();

        const rotBuf = new Float32Array(9);
        const setMat3FromEuler = (yawY, pitchX, rollZ, out) => {
          const cy = Math.cos(yawY),
            sy = Math.sin(yawY);
          const cx = Math.cos(pitchX),
            sx = Math.sin(pitchX);
          const cz = Math.cos(rollZ),
            sz = Math.sin(rollZ);
          const r00 = cy * cz + sy * sx * sz;
          const r01 = -cy * sz + sy * sx * cz;
          const r02 = sy * cx;

          const r10 = cx * sz;
          const r11 = cx * cz;
          const r12 = -sx;

          const r20 = -sy * cz + cy * sx * sz;
          const r21 = sy * sz + cy * sx * cz;
          const r22 = cy * cx;

          out[0] = r00;
          out[1] = r10;
          out[2] = r20;
          out[3] = r01;
          out[4] = r11;
          out[5] = r21;
          out[6] = r02;
          out[7] = r12;
          out[8] = r22;
          return out;
        };

        const NOISE_IS_ZERO = NOISE < 1e-6;
        let raf = 0;
        const t0 = performance.now();
        const startRAF = () => {
          if (raf) return;
          raf = requestAnimationFrame(render);
        };
        const stopRAF = () => {
          if (!raf) return;
          cancelAnimationFrame(raf);
          raf = 0;
        };

        const rnd = () => Math.random();
        const wX = (0.3 + rnd() * 0.6) * RSX;
        const wY = (0.2 + rnd() * 0.7) * RSY;
        const wZ = (0.1 + rnd() * 0.5) * RSZ;
        const phX = rnd() * Math.PI * 2;
        const phZ = rnd() * Math.PI * 2;

        let yaw = 0,
          pitch = 0,
          roll = 0;
        let targetYaw = 0,
          targetPitch = 0;
        const lerp = (a, b, t) => a + (b - a) * t;

        const pointer = { x: 0, y: 0, inside: true };
        const onMove = e => {
          const ww = Math.max(1, window.innerWidth);
          const wh = Math.max(1, window.innerHeight);
          const cx = ww * 0.5;
          const cy = wh * 0.5;
          const nx = (e.clientX - cx) / (ww * 0.5);
          const ny = (e.clientY - cy) / (wh * 0.5);
          pointer.x = Math.max(-1, Math.min(1, nx));
          pointer.y = Math.max(-1, Math.min(1, ny));
          pointer.inside = true;
        };
        const onLeave = () => {
          pointer.inside = false;
        };
        const onBlur = () => {
          pointer.inside = false;
        };

        let onPointerMove = null;
        if (animationType === 'hover') {
          onPointerMove = e => {
            onMove(e);
            startRAF();
          };
          window.addEventListener('pointermove', onPointerMove, { passive: true });
          window.addEventListener('mouseleave', onLeave);
          window.addEventListener('blur', onBlur);
          program.uniforms.uUseBaseWobble.value = 0;
        } else if (animationType === '3drotate') {
          program.uniforms.uUseBaseWobble.value = 0;
        } else {
          program.uniforms.uUseBaseWobble.value = 1;
        }

        const render = t => {
          const time = (t - t0) * 0.001;
          program.uniforms.iTime.value = time;

          let continueRAF = true;

          if (animationType === 'hover') {
            const maxPitch = 0.6 * HOVSTR;
            const maxYaw = 0.6 * HOVSTR;
            targetYaw = (pointer.inside ? -pointer.x : 0) * maxYaw;
            targetPitch = (pointer.inside ? pointer.y : 0) * maxPitch;
            const prevYaw = yaw;
            const prevPitch = pitch;
            const prevRoll = roll;
            yaw = lerp(prevYaw, targetYaw, INERT);
            pitch = lerp(prevPitch, targetPitch, INERT);
            roll = lerp(prevRoll, 0, 0.1);
            program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);

            if (NOISE_IS_ZERO) {
              const settled =
                Math.abs(yaw - targetYaw) < 1e-4 && Math.abs(pitch - targetPitch) < 1e-4 && Math.abs(roll) < 1e-4;
              if (settled) continueRAF = false;
            }
          } else if (animationType === '3drotate') {
            const tScaled = time * TS;
            yaw = tScaled * wY;
            pitch = Math.sin(tScaled * wX + phX) * 0.6;
            roll = Math.sin(tScaled * wZ + phZ) * 0.5;
            program.uniforms.uRot.value = setMat3FromEuler(yaw, pitch, roll, rotBuf);
            if (TS < 1e-6) continueRAF = false;
          } else {
            rotBuf[0] = 1;
            rotBuf[1] = 0;
            rotBuf[2] = 0;
            rotBuf[3] = 0;
            rotBuf[4] = 1;
            rotBuf[5] = 0;
            rotBuf[6] = 0;
            rotBuf[7] = 0;
            rotBuf[8] = 1;
            program.uniforms.uRot.value = rotBuf;
            if (TS < 1e-6) continueRAF = false;
          }

          renderer.render({ scene: mesh });
          if (continueRAF) {
            raf = requestAnimationFrame(render);
          } else {
            raf = 0;
          }
        };

        if (suspendWhenOffscreen) {
          const io = new IntersectionObserver(entries => {
            const vis = entries.some(e => e.isIntersecting);
            if (vis) startRAF();
            else stopRAF();
          });
          io.observe(container);
          startRAF();
          container.__prismIO = io;
        } else {
          startRAF();
        }
      }

      const container = document.getElementById('prism-container');
      if (container) {
        initPrism(container, {
          animationType: 'rotate',
          glow: 1,
          scale: 3.6
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[-1] pointer-events-none w-full h-full opacity-60 mix-blend-screen" id="prism-container">
<canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas>
<canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas className="" height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="1426" style={{width: '912px', height: '713px', position: 'absolute', inset: '0px', display: 'block'}} width="1824"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="2042" style={{width: '1568px', height: '1021px', position: 'absolute', inset: '0px', display: 'block'}} width="3136"></canvas><canvas height="1994" style={{width: '1114px', height: '997px', position: 'absolute', inset: '0px', display: 'block'}} width="2228"></canvas><canvas height="1994" style={{width: '1594px', height: '997px', position: 'absolute', inset: '0px', display: 'block'}} width="3188"></canvas><canvas height="1994" style={{width: '1114px', height: '997px', position: 'absolute', inset: '0px', display: 'block'}} width="2228"></canvas></div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.08]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] rounded-full opacity-30 blur-[120px]" style={{background: 'radial-gradient(circle at center, #6366F1, transparent 60%)'}}></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center p-6 md:p-12 lg:p-24 opacity-20">
<div className="relative w-full max-w-7xl h-full border border-white/10">
<div className="absolute inset-y-0 left-[25%] border-l border-white/10"></div>
<div className="absolute inset-y-0 right-[25%] border-l border-white/10"></div>
<div className="absolute inset-x-0 top-[30%] border-t border-white/10"></div>
<div className="absolute inset-x-0 bottom-[30%] border-t border-white/10"></div>
</div>
</div>

<div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
<h1 className="text-7xl md:text-9xl tracking-tighter text-white font-light uppercase opacity-[0.02] select-none mix-blend-overlay">
        RESONANCE
      </h1>
</div>

<header className="fixed md:top-8 z-50 flex pointer-events-auto pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex items-center w-full md:w-auto max-w-4xl justify-between md:justify-center bg-[#18181B]/80 border-white/5 border rounded-full py-2 pr-2 pl-4 md:pl-6 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all">
<div className="flex items-center gap-2 pr-2 md:pr-6 md:border-r border-white/10 py-1">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon>
<span className="uppercase block cursor-pointer text-xs font-normal text-white tracking-tighter font-sans" onclick="window.location.href='/home'" role="button">
        SONIC.LINK
      </span>
</div>

<div className="hidden md:flex gap-6 px-6 items-center">
<button className="hover:text-white transition-colors cursor-pointer text-xs text-zinc-500 tracking-widest font-mono" onclick="window.location.href='/music'" role="button">Music</button>
<button className="hover:text-white transition-colors cursor-pointer text-xs text-zinc-500 tracking-widest font-mono" onclick="window.location.href='/models'" role="button">Models</button>
<button className="hover:text-white transition-colors text-xs text-zinc-500 tracking-widest font-mono" onclick="window.location.href='/studio'" role="button">Studio</button>
</div>

<div className="hidden md:flex items-center gap-4 pl-6 border-l border-white/10">
<button className="hover:text-white transition-colors cursor-pointer text-xs text-zinc-400 tracking-widest font-mono" onclick="window.location.href='/login'" role="button">
        Login
      </button>
<button className="hover:bg-indigo-400 transition-colors text-xs font-medium text-white tracking-tight bg-[#6366F1] rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-[0_0_12px_rgba(99,102,241,0.4)]" onclick="window.location.href='/signup'" role="button">
        Sign Up
      </button>
</div>

<div className="flex md:hidden items-center gap-3">
<button className="hover:bg-indigo-400 transition-colors text-[10px] font-medium text-white tracking-tight bg-[#6366F1] rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-[0_0_12px_rgba(99,102,241,0.4)]" onclick="window.location.href='/signup'" role="button">
        Sign Up
      </button>
<div className="w-px h-4 bg-white/10"></div>
<button className="text-zinc-400 hover:text-white transition-colors p-1.5 mr-0.5 rounded-full hover:bg-white/5 flex items-center justify-center" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="lucide lucide-menu" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</nav>

<div className="hidden md:hidden absolute top-[calc(100%+0.5rem)] left-4 right-4 bg-[#18181B]/95 backdrop-blur-xl border border-white/5 rounded-[1.5rem] p-6 shadow-2xl shadow-black/80 flex flex-col gap-5" id="mobile-menu">
<div className="flex flex-col gap-4">
<button className="text-left text-xs text-zinc-400 hover:text-white font-mono tracking-widest transition-colors" onclick="window.location.href='/music'">Music</button>
<button className="text-left text-xs text-zinc-400 hover:text-white font-mono tracking-widest transition-colors" onclick="window.location.href='/models'">Models</button>
<button className="text-left text-xs text-zinc-400 hover:text-white font-mono tracking-widest transition-colors" onclick="window.location.href='/studio'">Studio</button>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex flex-col gap-3">
<button className="text-left text-xs text-zinc-400 hover:text-white font-mono tracking-widest transition-colors" onclick="window.location.href='/login'">Login</button>
<button className="w-full mt-2 py-3 rounded-xl bg-[#6366F1] text-white text-sm font-medium tracking-tight shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:bg-indigo-400 transition-colors" onclick="window.location.href='/signup'">Sign Up</button>
</div>
</div>
</header>

<section aria-label="Pulsewave cinematic intro film" className="flex overflow-hidden antialiased selection:bg-lime-300 selection:text-black text-white w-full h-screen relative items-center justify-center" style={{fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div aria-hidden="true" className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0px, rgba(255, 255, 255, 0.45) 0.055rem, transparent 0.075rem)', backgroundSize: '0.7rem 0.7rem', maskImage: 'linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.15) 19%, rgba(0, 0, 0, 0.12) 81%, rgba(0, 0, 0, 0.85))'}}></div>
<div aria-hidden="true" className="opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative h-[91vh] w-[96vw] overflow-hidden rounded-[1.4rem] border border-white/10 bg-black shadow-2xl sm:rounded-[2rem] md:h-[89vh] md:w-[95vw]" id="filmStage" style={{boxShadow: '0 2rem 8rem rgba(0, 0, 0, .48), inset 0 0 0 .0625rem rgba(255,255,255,.08)'}}>
<canvas aria-hidden="true" className="absolute inset-0 h-full w-full opacity-90" height="1770" id="webglLayer" width="2112"></canvas>
<img alt="" className="absolute inset-0 h-full w-full scale-125 object-cover opacity-0 blur-xl" id="abstractBase" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg" style={{filter: 'blur(24px)'}}/>
<div aria-hidden="true" className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 56%, rgba(197,255,92,.22), transparent 18%), radial-gradient(circle at 63% 45%, rgba(210,111,255,.32), transparent 25%), linear-gradient(to bottom, rgba(0,0,0,.2), rgba(0,0,0,.12) 38%, rgba(0,0,0,.76))'}}></div>
<div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black via-black/70 to-transparent"></div>
<div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/75 to-transparent"></div>
<div aria-hidden="true" className="absolute inset-4 rounded-[1rem] border border-white/[.08] sm:inset-5 md:inset-7" style={{boxShadow: 'inset 0 0 0 .0625rem rgba(255,255,255,.035)'}}></div>
<div aria-hidden="true" className="absolute left-4 top-4 h-8 w-8 border-l border-t border-lime-200/60 border-t-lime-200/60 sm:left-5 sm:top-5 md:left-7 md:top-7"></div>
<div aria-hidden="true" className="absolute right-4 top-4 h-8 w-8 border-r border-t border-fuchsia-200/50 border-t-fuchsia-200/50 sm:right-5 sm:top-5 md:right-7 md:top-7"></div>
<div aria-hidden="true" className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-b-lime-200/40 border-l-lime-200/40 sm:bottom-5 sm:left-5 md:bottom-7 md:left-7"></div>
<div aria-hidden="true" className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-b-fuchsia-200/40 border-r-fuchsia-200/40 sm:bottom-5 sm:right-5 md:bottom-7 md:right-7"></div>
<div aria-hidden="true" className="absolute left-[8%] top-0 h-full w-px bg-white/[.07]">
<span className="absolute -left-1 top-[13%] h-2 w-2 bg-white/30"></span>
<span className="absolute -left-1 bottom-[16%] h-2 w-2 bg-lime-200/40"></span>
</div>
<div aria-hidden="true" className="absolute right-[8%] top-0 h-full w-px bg-white/[.07]">
<span className="absolute -left-1 top-[24%] h-2 w-2 bg-fuchsia-200/40"></span>
<span className="absolute -left-1 bottom-[22%] h-2 w-2 bg-white/25"></span>
</div>
<div aria-hidden="true" className="absolute left-0 top-[50%] h-px w-full bg-white/[.055]"></div>
<div className="absolute inset-x-4 top-[4%] z-10 text-center opacity-0 sm:top-[3%]" id="introWord">
<p className="tracking-tight text-white/20 text-[clamp(5rem,17vw,13rem)] leading-none" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '600'}}>Your Sound.</p>
</div>
<div className="absolute left-1/2 top-[17%] z-20 flex w-[92%] -translate-x-1/2 items-center justify-center gap-[clamp(.45rem,2vw,2rem)] text-center opacity-0 sm:top-[18%] md:top-[17%]" id="mainTitle" style={{filter: 'none'}}>
<span className="titleChunk inline-block tracking-tight text-white text-[clamp(4.7rem,13.5vw,13rem)] leading-[.78]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Your</span>
<span className="titleChunk inline-block tracking-tight text-white text-[clamp(4.7rem,13.5vw,13rem)] leading-[.78]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Crew.</span>
<span className="titleChunk inline-block tracking-tight text-white text-[clamp(4.7rem,13.5vw,13rem)] leading-[.78]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>One</span>
<span className="titleChunk inline-block tracking-tight text-white text-[clamp(4.7rem,13.5vw,13rem)] leading-[.78]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Pulse</span>
</div>
<div className="absolute left-1/2 top-[14%] z-20 w-[92%] -translate-x-1/2 text-center opacity-0" id="altTitle" style={{filter: 'blur(0.75rem)'}}>
<p className="tracking-tight text-white text-[clamp(5rem,15vw,14rem)] leading-[.76]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Listen Together</p>
</div>
<div className="absolute left-1/2 top-1/2 z-50 w-[92%] -translate-x-1/2 -translate-y-1/2 text-center opacity-0" id="resolveTitle" style={{filter: 'blur(1rem)'}}>
<p className="tracking-tight text-white text-[clamp(4.5rem,16vw,14rem)] leading-[.78]" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Pulsewave</p>
<p className="mx-auto mt-3 max-w-2xl text-xs font-normal uppercase tracking-[.32rem] text-lime-100/80 sm:text-sm">A shared music universe in motion</p>
</div>
<div className="absolute left-1/2 top-[34%] z-30 h-[49vh] min-h-[20rem] w-[min(25rem,58vw)] -translate-x-1/2 opacity-0 sm:top-[31%] md:w-[min(27rem,30vw)]" id="phoneWrap" style={{perspective: '80rem'}}>
<div className="relative mx-auto h-full w-full overflow-hidden rounded-[2.25rem] border border-white/15 bg-black shadow-2xl" id="phone" style={{boxShadow: '0 0 0 .45rem rgba(154, 134, 202, .45), 0 2rem 5rem rgba(0, 0, 0, .68), 0 0 3rem rgba(214,126,255,.28)'}}>
<div className="absolute inset-x-[18%] top-0 z-20 h-6 rounded-b-2xl bg-black"></div>
<div className="absolute inset-0 bg-black"></div>
<div aria-hidden="true" className="absolute inset-0 opacity-35" style={{background: 'radial-gradient(circle at 82% 12%, rgba(212,132,255,.45), transparent 16%), radial-gradient(circle at 12% 72%, rgba(196,255,96,.22), transparent 22%)'}}></div>
<div className="relative z-10 flex h-full flex-col p-5 sm:p-6">
<div className="flex items-center justify-between text-xs font-medium text-white/80">
<span>9:41</span>
<div className="flex items-center gap-1">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '.95rem', height: '.95rem'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '.95rem', height: '.95rem'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6.01 18H6"></path><path d="M10.01 18H10"></path><path d="M15 10v4"></path><path d="M17.84 7.17a4 4 0 0 0-5.66 0"></path><path d="M20.66 4.34a8 8 0 0 0-11.31 0"></path></svg>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '.95rem', height: '.95rem'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"></path><path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"></path><path d="m11 7-3 5h4l-3 5"></path><line x1="22" x2="22" y1="11" y2="13"></line></svg>
</div>
</div>
<div className="mt-6 flex items-start justify-between">
<h2 className="tracking-tight text-white text-5xl leading-none sm:text-6xl" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif', fontWeight: '700'}}>Discover</h2>
<div className="grid h-9 w-9 place-items-center rounded-full bg-fuchsia-300 text-sm font-medium text-black">P</div>
</div>
<div className="mt-7 flex gap-2 overflow-hidden">
<span className="rounded-full bg-lime-300 px-4 py-2 text-xs font-medium text-black">All</span>
<span className="rounded-full bg-white/12 px-4 py-2 text-xs font-medium text-white/70">Artists</span>
<span className="rounded-full bg-white/12 px-4 py-2 text-xs font-medium text-white/70">Mixes</span>
<span className="rounded-full bg-white/12 px-4 py-2 text-xs font-medium text-white/70">Live</span>
</div>
<p className="mt-5 text-xl font-medium tracking-tight text-white sm:text-2xl" style={{fontFamily: '\'Barlow Condensed\', Impact, sans-serif'}}>Popular Moods</p>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="h-24 rounded-2xl border border-white/10 bg-white/[.06] p-3">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '1.5rem', height: '1.5rem', color: 'rgba(190,255,93,.9)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<p className="mt-5 text-xs font-medium uppercase tracking-widest text-white/55">Neon soul</p>
</div>
<div className="h-24 rounded-2xl border border-white/10 bg-white/[.06] p-3">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '1.5rem', height: '1.5rem', color: 'rgba(233,171,255,.9)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<p className="mt-5 text-xs font-medium uppercase tracking-widest text-white/55">Late drive</p>
</div>
</div>
<div className="mt-auto rounded-3xl border border-white/10 bg-white/[.07] p-4">
<p className="text-xs font-medium uppercase tracking-widest text-white/40">Artists near you</p>
<div className="mt-3 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg"/>
<div>
<p className="text-sm font-medium text-white">Mira Vale</p>
<p className="text-xs text-white/45">Live room opened</p>
</div>
<svg className="ml-auto" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '1.5rem', height: '1.5rem', color: 'rgba(190,255,93,.8)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
</div>
</div>
</div>
</div>
<div aria-label="Animated music memory image sequence" className="absolute inset-0 z-40 pointer-events-none" id="cardsLayer">
<figure className="mediaCard absolute left-[8%] top-[55%] h-[21vh] w-[20rem] max-w-[36vw] overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl sm:left-[11%] sm:top-[55%]" style={{boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, .62), 0 0 2rem rgba(219,45,255,.2)'}}>
<img alt="Artist in magenta club light" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c920d31f-46c8-4f39-957b-9a8d8e511a1a_800w.jpg"/>
<div className="absolute inset-0 bg-fuchsia-600/25 mix-blend-screen"></div>
</figure>
<figure className="mediaCard absolute left-[29%] top-[50%] h-[14vh] w-[17rem] max-w-[31vw] overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl" style={{boxShadow: '0 1.5rem 4rem rgba(0,0,0,.55)'}}>
<img alt="Warm studio portrait in motion" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36420201-a4f1-4395-ad84-184870350dd7_800w.webp"/>
<div className="absolute inset-0 bg-orange-400/20 mix-blend-screen"></div>
</figure>
<figure className="mediaCard absolute left-1/2 top-[59%] h-[22vh] w-[30rem] max-w-[45vw] -translate-x-1/2 overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl" style={{boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, .62), 0 0 2.5rem rgba(197,255,90,.18)'}}>
<img alt="Hands forming a heart at a concert" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e1fbf28-831e-4d42-a71f-a33bc90ff8fc_800w.webp"/>
<div className="absolute inset-0 bg-lime-300/20 mix-blend-screen"></div>
</figure>
<figure className="mediaCard absolute right-[23%] top-[48%] h-[16vh] w-[17rem] max-w-[30vw] overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl" style={{boxShadow: '0 1.5rem 4rem rgba(0,0,0,.55)'}}>
<img alt="Performer under yellow studio lighting" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7cfb2bf-d3f2-4dfc-aa1e-e0ef5c561134_800w.webp"/>
<div className="absolute inset-0 bg-yellow-300/30 mix-blend-screen"></div>
</figure>
<figure className="mediaCard absolute right-[8%] top-[51%] h-[23vh] w-[21rem] max-w-[37vw] overflow-hidden rounded-xl border border-white/10 opacity-0 shadow-2xl sm:right-[11%]" style={{boxShadow: '0 1.5rem 4rem rgba(0, 0, 0, .62), 0 0 2rem rgba(44,193,255,.18)'}}>
<img alt="Producer working with headphones" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4a03f35-290f-42a3-b369-97df97142786_800w.webp"/>
<div className="absolute inset-0 bg-cyan-400/20 mix-blend-screen"></div>
</figure>
</div>
<div aria-hidden="true" className="bg-white opacity-0 z-[70] absolute top-0 right-0 bottom-0 left-0" id="flash"></div>
<div className="absolute bottom-6 left-1/2 z-[80] flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 opacity-0 backdrop-blur-md" id="metaRail">
<span className="h-1.5 w-1.5 rounded-full bg-lime-300"></span>
<span className="text-xs font-medium uppercase tracking-[.22rem] text-white/60">Intro film · 24 sec</span>
</div>
<div className="absolute left-7 top-7 z-[80] hidden items-center gap-2 text-xs font-medium uppercase tracking-[.28rem] text-white/45 sm:flex" id="sequenceLabel">
<span className="h-px w-8 bg-white/25"></span>
<span className="">Sequence 01</span>
</div>
</div>


</section>
<main className="overflow-hidden shadow-2xl bg-[#0a0a0a] w-full max-w-6xl h-[700px] border border-zinc-800 rounded-xl mx-auto relative flex flex-col mt-4 mb-20 text-zinc-300 antialiased">

<div className="flex bg-[#0f0f11] border-zinc-800 border-b items-center h-11 px-4 shrink-0">
<div className="flex gap-2 w-20 items-center">
<div className="w-3 h-3 rounded-full bg-zinc-700/80 border border-zinc-600/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/80 border border-zinc-600/50"></div>
<div className="w-3 h-3 rounded-full bg-zinc-700/80 border border-zinc-600/50"></div>
</div>
<div className="flex-1 text-center">
<span className="text-xs font-normal text-zinc-500">Neural.Audio Engine</span>
</div>
<div className="w-20"></div>
</div>

<div className="flex-1 flex overflow-hidden">

<aside className="w-64 flex flex-col bg-[#0f0f11] border-r border-zinc-800 shrink-0">

<div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-800">
<div className="w-6 h-6 rounded flex items-center justify-center bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
<svg className="lucide lucide-audio-waveform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 13h3v5h2v-5h2V8h2v5h2v-5h2v5h2V8h2v5h3"></path></svg>
</div>
<h1 className="font-medium text-sm text-zinc-100 tracking-wide">Neural.Audio</h1>
<button className="ml-auto p-1.5 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400">
<svg className="lucide lucide-settings" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="flex items-center gap-3 px-5 py-3">
<div className="w-7 h-7 rounded-full border flex items-center justify-center text-xs font-medium bg-zinc-800 border-zinc-700 text-zinc-300">AP</div>
<span className="text-sm font-normal text-zinc-300">Producer</span>
</div>

<div className="px-5 pb-3">
<div className="relative">
<input className="w-full rounded-md bg-[#0a0a0a] text-xs placeholder-zinc-600 py-1.5 pl-7 pr-3 border border-zinc-800 focus:outline-none transition-all focus:border-indigo-500/50 text-zinc-200 shadow-inner" placeholder="Search library..." type="text"/>
<svg className="lucide lucide-search absolute left-2.5 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 space-y-5 py-2">
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Workspace
          </h3>
<ul className="space-y-0.5">
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-xs text-zinc-400" href="#">
<svg className="lucide lucide-mic" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                Studio
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs font-normal bg-indigo-500/10 text-indigo-400" href="#">
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
                AI Co-Producer
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-xs text-zinc-400" href="#">
<svg className="lucide lucide-library" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path className="" d="M4 4v16"></path></svg>
                My Stems
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-xs text-zinc-400" href="#">
<svg className="lucide lucide-box" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
                Voice Models
              </a>
</li>
</ul>
</div>
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
            Recent Generations
          </h3>
<ul className="space-y-0.5 text-xs">
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-zinc-400" href="#">
                Dark techno bassline (130 BPM)
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-zinc-400" href="#">
                Ethereal vocal chops in C Minor
              </a>
</li>
<li>
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-zinc-400" href="#">
                Vintage breakbeat loop
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-zinc-800/50 transition-colors text-zinc-400" href="#">
                Cinematic strings swell
              </a>
</li>
</ul>
</div>
</nav>

<div className="p-3 bg-zinc-900/50 m-3 rounded-lg border border-zinc-800/80">
<h4 className="text-xs font-medium text-zinc-200 mb-1.5 flex items-center gap-1.5">
<svg className="lucide lucide-zap text-indigo-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          Pro Engine
        </h4>
<p className="text-[10px] text-zinc-500 mb-2 leading-relaxed">
          Unlock 32-bit float exports and multitrack stem separation.
        </p>
<button className="w-full text-center text-[10px] py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md text-zinc-200 transition-colors border border-zinc-700/50">
            Upgrade Tier
        </button>
</div>
</aside>

<section className="flex-1 flex flex-col bg-[#0a0a0a] relative">

<header className="px-6 py-4 border-b border-zinc-800 shrink-0 bg-[#0f0f11]/80 backdrop-blur-md absolute top-0 w-full z-10">
<h2 className="text-lg font-normal text-zinc-100 tracking-tight">
          Studio Assistant
        </h2>
<p className="text-[11px] text-zinc-500 mt-0.5">
          Specialized in generative composition, synthesis, and mixing
        </p>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-6 pt-24 pb-20">

<div className="flex flex-col items-end gap-2 group">
<span className="text-[10px] text-zinc-500 font-medium px-1">You</span>
<div className="bg-zinc-900 text-zinc-200 text-sm p-3.5 rounded-2xl rounded-tr-sm max-w-lg border border-zinc-800/80 shadow-sm leading-relaxed">
            Generate a 4-bar dark techno bassline at 130 BPM with a heavy sub layer. Make it sound analog and slightly saturated.
          </div>
</div>

<div className="flex gap-4 items-start group">
<div className="w-8 h-8 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
<svg className="lucide lucide-sparkles text-indigo-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div className="flex-1 flex flex-col items-start gap-3">
<div className="bg-transparent text-zinc-300 text-sm max-w-xl">
<p className="mb-3 text-zinc-300 leading-relaxed">Here is a 4-bar dark techno bassline at 130 BPM. I've added subtle tape saturation and widened the stereo field slightly on the upper harmonics, keeping the sub tight and mono.</p>

<div className="rounded-xl overflow-hidden border border-zinc-800/80 bg-[#0f0f11] p-3.5 flex flex-col gap-4 shadow-md w-full max-w-md">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-200 flex items-center gap-2">
<svg className="lucide lucide-file-audio text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M2 19v-3a6 6 0 0 1 12 0v3"></path><path d="M2 19h4v-6H2v6z"></path><path d="M14 19h-4v-6h4v6z"></path></svg>
                      techno_bassline_130bpm.wav
                    </span>
<span className="text-[10px] text-zinc-500 font-mono tracking-wider">0:00 / 0:07</span>
</div>
<div className="flex items-center gap-4">
<button className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-white flex items-center justify-center text-black shrink-0 transition-colors shadow-sm">
<svg className="lucide lucide-play ml-0.5" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>

<div className="flex-1 h-8 flex items-center gap-[2px]">
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-5 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-8 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-4 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-2 bg-indigo-500 rounded-full"></div>
<div className="w-1 h-7 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-5 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-8 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-5 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-2 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-4 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-7 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-2 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-5 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-8 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-4 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-5 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-7 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-8 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-4 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-2 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-3 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-6 bg-indigo-500/30 rounded-full"></div>
<div className="w-1 h-4 bg-indigo-500/30 rounded-full"></div>
</div>
</div>
<div className="flex gap-2 mt-1">
<button className="flex-1 py-1.5 bg-zinc-800/50 hover:bg-zinc-800 rounded border border-zinc-700/50 text-[10px] font-medium text-zinc-300 transition-colors flex items-center justify-center gap-1.5">
<svg className="lucide lucide-download" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                      WAV
                    </button>
<button className="flex-1 py-1.5 bg-zinc-800/50 hover:bg-zinc-800 rounded border border-zinc-700/50 text-[10px] font-medium text-zinc-300 transition-colors flex items-center justify-center gap-1.5">
<svg className="lucide lucide-layers" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
                      MIDI
                    </button>
</div>
</div>
</div>

<div className="flex gap-2">
<span className="inline-flex items-center gap-1.5 bg-zinc-900 rounded border border-zinc-800 px-2 py-1 text-[10px] text-zinc-400">
<svg className="lucide lucide-activity" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                  130 BPM
              </span>
<span className="inline-flex items-center gap-1.5 bg-zinc-900 rounded border border-zinc-800 px-2 py-1 text-[10px] text-zinc-400">
<svg className="lucide lucide-music" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                  C Minor
              </span>
<span className="inline-flex items-center gap-1.5 bg-zinc-900 rounded border border-zinc-800 px-2 py-1 text-[10px] text-zinc-400">
<svg className="lucide lucide-sliders-horizontal" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
                  Techno
              </span>
</div>
</div>
</div>
</div>

<div className="p-5 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent absolute bottom-0 w-full shrink-0">
<div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md rounded-xl px-3 border border-zinc-800 transition-colors focus-within:border-indigo-500/50 shadow-sm">
<button className="p-2 rounded-md hover:bg-zinc-800 transition-colors text-zinc-400">
<svg className="lucide lucide-paperclip" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<input className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder-zinc-500 text-zinc-100 py-3.5" placeholder="Describe the sound you want to create..." type="text"/>
<button className="p-1.5 rounded-lg text-white transition-colors bg-indigo-500 hover:bg-indigo-400 flex items-center justify-center h-8 w-8 shadow-sm">
<svg className="lucide lucide-arrow-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</section>

<aside className="bg-[#0f0f11] flex flex-col overflow-hidden w-64 border-zinc-800 border-l shrink-0">

<header className="px-5 py-4 border-b border-zinc-800 flex items-center gap-2">
<h3 className="text-sm font-medium text-zinc-100 flex-1">Inspector</h3>
<span className="text-[10px] px-2 py-0.5 rounded border bg-zinc-800/50 text-zinc-400 border-zinc-700 font-mono">v4.2</span>
</header>

<div className="flex border-b border-zinc-800">
<button className="flex-1 py-3 text-[10px] font-medium tracking-wider text-zinc-200 relative hover:bg-zinc-800/30 transition-colors">
                PARAMETERS
                <span className="absolute left-0 bottom-0 h-px w-full bg-indigo-500"></span>
</button>
<button className="flex-1 py-3 text-[10px] font-medium tracking-wider text-zinc-500 hover:bg-zinc-800/30 hover:text-zinc-300 transition-colors">
                STEMS
        </button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-8">

<div>
<h4 className="text-xs font-medium text-zinc-300 mb-4 flex items-center justify-between">
            Audio Settings
            <button className="text-zinc-500 hover:text-zinc-300 transition-colors"><svg className="lucide lucide-rotate-ccw" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg></button>
</h4>
<div className="space-y-5">

<div className="space-y-2">
<div className="flex justify-between text-[10px] font-medium">
<span className="text-zinc-400">Creativity</span>
<span className="text-indigo-400 font-mono">0.85</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden flex relative">
<div className="absolute h-full bg-indigo-500 w-[85%] rounded-full"></div>
<div className="absolute w-2 h-2 bg-white rounded-full left-[85%] top-1/2 -translate-y-1/2 -ml-1 shadow-sm"></div>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between text-[10px] font-medium">
<span className="text-zinc-400">Saturation</span>
<span className="text-indigo-400 font-mono">42%</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden flex relative">
<div className="absolute h-full bg-indigo-500 w-[42%] rounded-full"></div>
<div className="absolute w-2 h-2 bg-white rounded-full left-[42%] top-1/2 -translate-y-1/2 -ml-1 shadow-sm"></div>
</div>
</div>

<div className="space-y-2 pt-2">
<span className="text-[10px] font-medium text-zinc-400">Key Signature</span>
<button className="w-full flex items-center justify-between bg-[#0a0a0a] border border-zinc-800 rounded-md p-2 text-xs text-zinc-300 hover:border-zinc-700 transition-colors shadow-sm">
<span className="font-normal tracking-wide">C Minor</span>
<svg className="lucide lucide-chevron-down text-zinc-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>

<div className="flex items-center justify-between pt-3">
<span className="text-[10px] font-medium text-zinc-400">Analog Warmth</span>
<div className="w-8 h-4 bg-indigo-500 rounded-full relative cursor-pointer flex items-center px-[2px]">
<div className="w-3 h-3 bg-white rounded-full translate-x-4 shadow-sm transition-transform"></div>
</div>
</div>
</div>
</div>

<div className="pt-6 border-t border-zinc-800">
<h4 className="text-xs font-medium text-zinc-300 mb-3">
            DAW Link
          </h4>
<ul className="space-y-2 text-xs">
<li className="flex items-center justify-between p-2.5 rounded-md bg-[#0a0a0a] border border-zinc-800">
<div className="flex items-center gap-2.5">
<div className="w-5 h-5 rounded-[4px] bg-zinc-800 flex items-center justify-center">
<span className="text-[9px] font-bold text-zinc-300">AL</span>
</div>
<span className="text-zinc-300 font-normal">Ableton 11</span>
</div>
<div className="flex items-center gap-1.5">
<span className="text-[9px] text-emerald-400 font-medium uppercase tracking-widest">Sync</span>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)]"></div>
</div>
</li>
</ul>
</div>
</div>
</aside>
</div>
</main><main className="z-20 flex flex-col md:block gap-8 min-h-[800px] md:py-20 w-full max-w-6xl mx-auto px-4 py-12 relative gap-x-8 gap-y-8 items-center">

<div className="md:absolute md:top-1/2 md:left-1/2 md:w-0 md:h-0 flex flex-col items-center gap-8 md:block w-full max-w-sm md:max-w-none">

<article className="relative w-full md:w-80 md:absolute md:-translate-x-1/2 md:-translate-y-1/2 z-30 group transition-transform duration-500 hover:-translate-y-2">
<div className="p-[1px] rounded-[24px] bg-gradient-to-b from-[#6366F1]/30 via-white/5 to-transparent shadow-2xl shadow-black">
<div className="absolute inset-0 bg-[#6366F1]/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-6 rounded-[23px] bg-[#18181B]/95 backdrop-blur-2xl border border-white/5 relative overflow-hidden flex flex-col gap-6">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05),transparent_80%)] pointer-events-none"></div>
<div className="flex justify-between items-start relative z-10 px-1">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-black shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] flex items-center justify-center border border-white/5">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:soundwave-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-mono text-xs text-[#6366F1] tracking-widest">
                    MIXER_M9
                  </span>
</div>
<div className="px-2 py-0.5 rounded border border-[#6366F1]/20 bg-[#6366F1]/10 text-xs font-mono text-white tracking-widest">
                  SYNCHED
                </div>
</div>
<div className="w-full h-32 rounded-xl bg-black border border-white/5 overflow-hidden relative z-10">
<img alt="Structure" className="w-full h-full object-cover mix-blend-screen opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3c92c955-4639-430a-bead-f54dfa2618d5_800w.webp" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(3) brightness(0.9)'}}/>
<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(transparent, transparent 2px, #000 2px, #000 4px)'}}></div>
</div>
<div className="relative z-10">
<button className="w-full py-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all flex items-center justify-center gap-2 text-white">
<span className="font-sans font-normal text-sm tracking-tight">
                    Initiate Sync
                  </span>
<iconify-icon className="text-zinc-400" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</article>

<article className="relative w-full md:w-64 md:absolute md:-translate-x-[170%] md:-translate-y-[40%] group transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="p-[1px] rounded-[20px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/80">
<div className="h-auto md:h-80 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative overflow-hidden flex flex-col">
<div className="px-5 py-4 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="font-mono text-xs tracking-widest text-zinc-500 uppercase">
                  AUD.LOAD
                </span>
<iconify-icon className="text-zinc-500" icon="solar:pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-5 flex-1 flex flex-col gap-5">
<div className="w-full h-24 rounded-lg overflow-hidden border border-white/5 relative bg-black">
<img alt="Abstract Data" className="w-full h-full object-cover mix-blend-luminosity opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df8f0c8a-835c-4e5e-b48c-140108553d24_800w.webp" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(3)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#18181B] to-transparent"></div>
</div>
<div className="space-y-2">
<h3 className="text-lg font-normal text-white tracking-tight">
                    Master Hub
                  </h3>
<p className="text-xs font-light text-zinc-400 leading-relaxed">
                    Routing threaded audio packets with minimal sonic latency.
                  </p>
</div>
<div className="mt-auto pt-2">
<div className="flex justify-between items-end mb-2">
<span className="font-mono text-xs text-[#6366F1] font-normal">
                      SYNCH
                    </span>
<span className="font-mono text-xs text-white">92%</span>
</div>
<div className="h-1 w-full bg-black rounded-full border border-white/5 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-[92%] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="relative w-full md:w-60 md:absolute md:translate-x-[65%] md:-translate-y-[135%] group transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="p-[1px] rounded-[20px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/80">
<div className="p-5 rounded-[19px] bg-[#18181B]/95 backdrop-blur-xl border border-white/5 relative overflow-hidden">
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-b from-white/20 to-transparent flex-shrink-0">
<div className="w-full h-full rounded-full overflow-hidden bg-black">
<img alt="DJ" className="w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19460d3-0d95-499d-97fe-733c3af3d0f3_320w.webp" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(2)'}}/>
</div>
</div>
<div>
<h3 className="text-sm font-normal text-white tracking-tight">
                    DJ Apex
                  </h3>
<p className="font-mono text-xs text-[#6366F1] tracking-widest uppercase mt-1">
                    Session Lead
                  </p>
</div>
</div>
<div className="mt-5 pt-4 border-t border-white/5 flex justify-between items-center relative z-10">
<span className="font-mono text-xs text-zinc-500">QUANTIZE</span>

<div className="w-8 h-4 rounded-full bg-black border border-white/10 relative cursor-pointer group/toggle transition-colors hover:border-white/20">
<div className="absolute top-[1px] right-[1px] w-3 h-3 rounded-full bg-[#6366F1] shadow-[0_0_5px_rgba(99,102,241,0.8)] transition-transform group-hover/toggle:scale-110"></div>
</div>
</div>
</div>
</div>
</article>

<article className="relative w-full md:w-60 md:absolute md:-translate-x-[130%] md:translate-y-[60%] group transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="p-[1px] rounded-[16px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/80">
<div className="p-5 rounded-[15px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-zinc-600 uppercase">
                  Entry . 108
                </span>
</div>
<h4 className="text-sm font-normal text-white mb-2 tracking-tight">
                Sonic Topology
              </h4>
<p className="text-xs font-light text-zinc-400 leading-relaxed mb-5">
                Audio mesh stabilizing within nominal frequency bounds across
                active channels.
              </p>

<label className="flex items-center gap-3 cursor-pointer group/chk select-none">
<div className="w-4 h-4 rounded-[4px] border border-white/10 bg-black flex items-center justify-center transition-colors group-hover/chk:border-white/30">
<div className="w-2 h-2 rounded-[2px] bg-[#6366F1] shadow-[0_0_5px_rgba(99,102,241,0.8)] transition-transform group-active/chk:scale-90"></div>
</div>
<span className="font-mono text-xs text-zinc-400 group-hover/chk:text-zinc-300 transition-colors">
                  VERIFY HASH
                </span>
</label>
</div>
</div>
</article>

<article className="relative w-full md:w-52 md:absolute md:translate-x-[85%] md:translate-y-[20%] group transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="p-[1px] rounded-[20px] bg-gradient-to-br from-white/10 to-transparent shadow-2xl shadow-black/80">
<div className="h-52 rounded-[19px] bg-[#18181B]/80 backdrop-blur-md p-1.5 border border-white/5">
<div className="w-full h-full rounded-[14px] overflow-hidden relative border border-white/5 bg-black group-hover:border-white/10 transition-colors">
<img alt="Abstract Asset" className="w-full h-full object-cover mix-blend-luminosity opacity-50 transition-opacity duration-500 group-hover:opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a6468da-a7f7-450b-a982-3a9af56c6e5e_800w.webp" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(2)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div>
<div className="font-mono text-xs text-[#6366F1] mb-1 tracking-widest">
                      NODE
                    </div>
<div className="text-xs font-normal text-white tracking-tight">
                      Track.Schematic
                    </div>
</div>
<div className="w-6 h-6 rounded-md bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-zinc-300 text-xs" icon="solar:maximize-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</article>
<article className="relative w-full md:w-56 md:absolute md:translate-x-[115%] md:-translate-y-[60%] group transition-transform duration-500 hover:-translate-y-2 z-20">
<div className="p-[1px] rounded-[16px] bg-gradient-to-b from-white/10 to-transparent shadow-2xl shadow-black/80">
<div className="p-5 rounded-[15px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative">
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-full bg-black border border-white/5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] flex items-center justify-center">
<iconify-icon className="text-[#6366F1] text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-normal text-white tracking-tight">
                    Audio Engine
                  </h4>
<p className="font-mono text-[10px] text-[#6366F1] uppercase tracking-widest mt-0.5">
                    Sys.Active
                  </p>
</div>
</div>
<div className="space-y-4">
<div className="">
<div className="flex justify-between items-end mb-2">
<span className="font-mono text-xs text-zinc-400">THREADS</span>
<span className="font-mono text-xs text-white">128</span>
</div>
<div className="h-1 w-full bg-black rounded-full border border-white/5 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-[64%] bg-zinc-500 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="font-mono text-xs text-[#6366F1]">LOAD</span>
<span className="font-mono text-xs text-white">88%</span>
</div>
<div className="h-1 w-full bg-black rounded-full border border-white/5 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-[88%] bg-[#6366F1] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
</div>
</div>
</div>
</div>
</div>
</article>
</div>
</main>

<section className="z-20 flex flex-col gap-12 w-full max-w-6xl border-white/10 border-t mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative gap-x-12 gap-y-12">
<div className="w-full relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
<span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
            Generative Models
          </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-end">
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Neural Audio
            <br className="hidden md:block"/>
            Synthesis
          </h2>
<p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-lg lg:pb-2">
            Our multi-modal neural networks generate high-fidelity audio, isolating individual stems and composing complex arrangements in real-time.
          </p>
</div>
</div>
<div className="w-full relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<article className="md:col-span-7 bg-[#18181B]/90 backdrop-blur-xl border border-white/5 rounded-[19px] overflow-hidden relative group hover:border-white/10 transition-colors duration-700 flex flex-col md:flex-row shadow-2xl shadow-black/80">
<div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-between relative z-10">
<header className="mb-12">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-cpu text-xl text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
<span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                    GEN-01
                  </span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">
                  Latent Diffusion Grid
                </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                  Audio waveforms are synthesized from text and MIDI inputs using state-of-the-art latent diffusion models, generating pristine 32-bit float audio directly in your browser.
                </p>
</header>
<div className="mt-auto hidden md:block">
<div className="inline-flex items-center gap-2 text-xs font-mono text-[#6366F1] bg-[#6366F1]/10 border border-[#6366F1]/20 px-2.5 py-1.5 rounded-md">
<span className="w-1 h-1 rounded-full bg-[#6366F1]"></span>
                  Model Active
                </div>
</div>
</div>
<div className="h-64 md:h-auto md:w-1/2 relative bg-black/40 border-t md:border-t-0 md:border-l border-white/5">
<canvas className="absolute inset-0 w-full h-full" height="1032" id="canvas-core" style={{touchAction: 'none'}} width="619"></canvas>
<div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-[#6366F1]/30 opacity-50"></div>
<div className="absolute bottom-6 left-6 w-2 h-2 border-b border-l border-[#6366F1]/30 opacity-50"></div>
</div>
</article>
<article className="md:col-span-5 bg-[#18181B]/90 backdrop-blur-xl border border-white/5 rounded-[19px] overflow-hidden relative group hover:border-white/10 transition-colors duration-700 flex flex-col shadow-2xl shadow-black/80">
<div className="absolute inset-0 bg-gradient-to-b from-[#6366F1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="h-64 relative bg-black/40 border-b border-white/5">
<canvas className="absolute inset-0 w-full h-full" height="512" id="canvas-network" style={{touchAction: 'none'}} width="869"></canvas>
<div className="absolute top-6 left-6 w-2 h-2 border-t border-l border-[#6366F1]/30 opacity-50"></div>
<div className="absolute bottom-6 right-6 w-2 h-2 border-b border-r border-[#6366F1]/30 opacity-50"></div>
</div>
<div className="p-8 md:p-12 relative z-10 flex-1 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-layers text-xl text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
<span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  STM-02
                </span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">
                Source Separation
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Intelligent audio source separation isolates vocals, drums, bass, and melodies from any generated or uploaded track with zero noticeable artifacts.
              </p>
</div>
</article>
<article className="md:col-span-12 bg-[#18181B]/90 backdrop-blur-xl border border-white/5 rounded-[19px] overflow-hidden relative group hover:border-white/10 transition-colors duration-700 flex flex-col md:flex-row shadow-2xl shadow-black/80">
<div className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="p-8 md:p-12 md:w-5/12 lg:w-1/3 flex flex-col justify-center relative z-10">
<div className="flex items-center gap-3 mb-6">
<svg className="lucide lucide-music text-xl text-[#6366F1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
<span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
                  THY-03
                </span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-white mb-4">
                Musical Context Engine
              </h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">
                Continuous analysis of musical theory, key signatures, and rhythmic structures. The engine ensures generated stems lock perfectly in time and harmony with your existing session.
              </p>
</div>
<div className="h-64 md:h-80 md:w-7/12 lg:w-2/3 relative bg-black/40 border-t md:border-t-0 md:border-l border-white/5 overflow-hidden">
<div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#18181B] to-transparent z-10"></div>
<canvas className="absolute inset-0 w-full h-full" height="640" id="canvas-orbit" style={{touchAction: 'none'}} width="1439"></canvas>
<div className="absolute top-6 right-6 w-2 h-2 border-t border-r border-[#6366F1]/30 opacity-50 z-20"></div>
</div>
</article>
</div>
</div>
</section>



<section className="flex flex-col lg:gap-6 w-full max-w-6xl mr-auto ml-auto px-4 gap-x-4 gap-y-4">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">

<article className="ui-element relative rounded-2xl bg-zinc-900/90 border border-white/5 overflow-hidden group aspect-[4/3] md:aspect-auto md:h-64 flex flex-col justify-end p-6 lg:p-8 hover:border-white/10 transition-colors" style={{filter: 'blur(0px)'}}>
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity duration-700" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full flex justify-between items-start absolute top-6 left-6 right-6">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center">
<svg className="lucide lucide-cpu text-[#6366F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
</div>
<div className="relative z-10 mt-auto">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase flex items-center gap-2 mb-2 text-white">
                        Batch Synthesis <svg className="lucide lucide-arrow-up-right text-[#6366F1] opacity-80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h2>
<p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-[90%]">Process multiple audio channels simultaneously with zero latency.</p>
</div>
</article>

<article className="ui-element relative rounded-2xl bg-zinc-900/90 border border-white/5 overflow-hidden group aspect-[4/3] md:aspect-auto md:h-64 flex flex-col justify-end p-6 lg:p-8 hover:border-white/10 transition-colors" style={{filter: 'blur(0px)'}}>
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full flex justify-between items-start absolute top-6 left-6 right-6">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center">
<svg className="lucide lucide-box text-[#6366F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</div>
</div>
<div className="relative z-10 mt-auto">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase flex items-center gap-2 mb-2 text-white">
                        Neural Models <svg className="lucide lucide-database text-zinc-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</h2>
<p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-[90%]">Access thousands of pre-trained models for instant audio styling.</p>
</div>
</article>

<article className="ui-element relative rounded-2xl bg-zinc-900/90 border border-white/5 overflow-hidden group aspect-[4/3] md:aspect-auto md:h-64 flex flex-col justify-end p-6 lg:p-8 hover:border-white/10 transition-colors" style={{filter: 'blur(0px)'}}>
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity mix-blend-luminosity duration-700" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="relative z-10 w-full flex justify-between items-start absolute top-6 left-6 right-6">
<div className="w-6 h-6 rounded-full bg-[#6366F1]/20 flex items-center justify-center">
<svg className="lucide lucide-share-2 text-[#6366F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
</div>
<div className="relative z-10 mt-auto">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight uppercase flex items-center gap-2 mb-2 text-white">
                        Network Routing <svg className="lucide lucide-arrow-up-right text-[#6366F1] opacity-80" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</h2>
<p className="text-zinc-400 text-sm lg:text-base leading-relaxed max-w-[90%]">Map complex audio routing networks with custom node architectures.</p>
</div>
</article>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 gap-x-4 gap-y-4">

<article className="ui-element lg:col-span-5 relative rounded-2xl bg-zinc-900/90 border border-white/5 p-6 lg:p-8 flex flex-col" style={{filter: 'blur(0px)'}}>
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-[2px] bg-[#6366F1]"></div>
<h3 className="text-sm font-medium tracking-wide uppercase text-white flex items-center gap-1">Active Nodes <svg className="lucide lucide-arrow-up-right text-[#6366F1]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></h3>
</div>

<div className="grid grid-cols-[32px_1fr_40px_60px] gap-4 mb-4 text-[10px] font-normal text-zinc-500 uppercase tracking-widest px-2">
<span></span>
<span className="">Systems</span>
<span className="text-right">Ping</span>
<span className="text-right">Class</span>
</div>

<div className="flex flex-col gap-3">
<div className="list-item-animate grid grid-cols-[32px_1fr_40px_60px] gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-medium">1</div>
<div className="truncate">
<p className="text-sm font-medium text-white truncate group-hover:text-[#6366F1] transition-colors">Core_Synthesis_Engine</p>
<p className="text-xs text-zinc-500 truncate">System.Active</p>
</div>
<div className="text-xs font-medium text-white text-right">12ms</div>
<div className="text-xs font-medium text-[#6366F1] text-right">Synth</div>
</div>
<div className="list-item-animate grid grid-cols-[32px_1fr_40px_60px] gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-medium">2</div>
<div className="truncate">
<p className="text-sm font-medium text-white truncate group-hover:text-[#6366F1] transition-colors">Latent_Diffusion_v2</p>
<p className="text-xs text-zinc-500 truncate">Processing</p>
</div>
<div className="text-xs font-medium text-white text-right">8ms</div>
<div className="text-xs font-medium text-[#6366F1] text-right">Model</div>
</div>
<div className="list-item-animate grid grid-cols-[32px_1fr_40px_60px] gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-medium">3</div>
<div className="truncate">
<p className="text-sm font-medium text-white truncate group-hover:text-[#6366F1] transition-colors">Spatial_Audio_Matrix</p>
<p className="text-xs text-zinc-500 truncate">System.Active</p>
</div>
<div className="text-xs font-medium text-white text-right">1ms</div>
<div className="text-xs font-medium text-[#6366F1] text-right">Route</div>
</div>
<div className="list-item-animate grid grid-cols-[32px_1fr_40px_60px] gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-medium">4</div>
<div className="truncate">
<p className="text-sm font-medium text-white truncate group-hover:text-[#6366F1] transition-colors">Neural_Stem_Splitter</p>
<p className="text-xs text-zinc-500 truncate">Processing</p>
</div>
<div className="text-xs font-medium text-white text-right">15ms</div>
<div className="text-xs font-medium text-[#6366F1] text-right">Stem</div>
</div>
<div className="list-item-animate grid grid-cols-[32px_1fr_40px_60px] gap-4 items-center group hover:bg-white/5 p-2 rounded-lg transition-colors cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs font-medium">5</div>
<div className="truncate">
<p className="text-sm font-medium text-white truncate group-hover:text-[#6366F1] transition-colors">Waveform_Analyzer</p>
<p className="text-xs text-zinc-500 truncate">System.Active</p>
</div>
<div className="text-xs font-medium text-white text-right">4ms</div>
<div className="text-xs font-medium text-[#6366F1] text-right">Core</div>
</div>
</div>
</article>

<article className="ui-element lg:col-span-7 overflow-hidden group min-h-[400px] flex bg-zinc-900/90 border-white/5 border rounded-2xl relative items-center justify-center" style={{filter: 'blur(0px)'}}>
<img alt="Server Rack" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80" style={{filter: 'sepia(1) hue-rotate(240deg) saturate(2)'}}/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-black/60 absolute inset-0 flex flex-col justify-between p-6 md:p-8 pointer-events-none">
<div className="flex justify-between items-start w-full">
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase">Sys.Online</span>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
<svg className="lucide lucide-server text-zinc-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
            Node_US_E1
        </div>
</div>
<div className="flex justify-between items-end w-full">
<div className="flex flex-col gap-1">
<span className="text-3xl font-light text-white tracking-tight">99.9%</span>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Uptime SLA</span>
</div>
<div className="flex flex-col gap-1 items-end text-right">
<div className="flex items-center gap-1.5 text-white">
<svg className="lucide lucide-activity text-[#6366F1]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span className="text-xl font-normal tracking-tight">4.2 TB/s</span>
</div>
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Throughput</span>
</div>
</div>
</div>
<button className="relative z-10 bg-[#6366F1] hover:bg-indigo-400 text-white px-8 py-4 rounded font-medium text-sm tracking-wide uppercase transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] duration-300">
                    Initialize Protocol
                </button>
</article>
</div>

</section>

<section className="z-20 flex flex-col gap-12 w-full max-w-6xl border-white/10 border-t mr-auto ml-auto pt-24 pr-4 pb-24 pl-4 relative gap-x-12 gap-y-12">
<div className="flex flex-col gap-2 items-center text-center">
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-400 tracking-widest mb-2">
          PLAYBACK LOGS
        </div>
<h2 className="text-3xl font-normal text-white tracking-tight">
          Producer Feedback
        </h2>
<p className="text-zinc-400 text-sm font-light">
          Verified sync records from elite audio engineers.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80">
<iconify-icon className="absolute top-8 right-8 text-white/5 text-4xl" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-zinc-300 text-sm font-light leading-relaxed mb-8 relative z-10">
            "The latency reduction is unprecedented. We're maintaining beat
            match at 99.8% stability during high-load audio transfers. A
            monumental leap for sonic tech."
          </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-b from-white/20 to-transparent flex-shrink-0">
<div className="w-full h-full rounded-full overflow-hidden bg-black">
<img alt="Operator" className="w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(2)'}}/>
</div>
</div>
<div className="">
<div className="text-white text-sm font-normal tracking-tight">
                Sarah Vance
              </div>
<div className="text-[#6366F1] font-mono text-[10px] uppercase tracking-widest mt-1">
                Lead Producer
              </div>
</div>
</div>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80">
<iconify-icon className="absolute top-8 right-8 text-white/5 text-4xl" icon="solar:chat-round-line-linear"></iconify-icon>
<p className="text-zinc-300 text-sm font-light leading-relaxed mb-8 relative z-10">
            "Integration took less than two cycles. The frequency dashboards
            offer granular insight into sonic resonance without compromising our
            local audio engines."
          </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full p-[1px] bg-gradient-to-b from-white/20 to-transparent flex-shrink-0">
<div className="w-full h-full rounded-full overflow-hidden bg-black">
<img alt="Operator" className="w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a9a24d2-3644-4299-9ddf-51f6d35970e8_320w.webp" style={{filter: 'grayscale(1) sepia(1) hue-rotate(240deg) saturate(2)'}}/>
</div>
</div>
<div>
<div className="text-white text-sm font-normal tracking-tight">
                Elias Thorne
              </div>
<div className="text-[#6366F1] font-mono text-[10px] uppercase tracking-widest mt-1">
                Audio Architect
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 w-full max-w-6xl mx-auto px-4 py-24 flex flex-col gap-12 border-t border-white/10">
<div className="flex flex-col gap-2 items-center text-center">
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-400 tracking-widest mb-2">
          ALLOCATION
        </div>
<h2 className="text-3xl font-normal text-white tracking-tight">
          Sync Licensing
        </h2>
<p className="text-zinc-400 text-sm font-light">
          Select a bandwidth allocation suited to your operation.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 flex flex-col shadow-2xl shadow-black/80">
<div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Base Link
          </div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-light text-white">$49</span>
<span className="text-zinc-500 text-xs font-mono">/CYCLE</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              10TB Audio Data
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Single Mixer
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Standard Latency
            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm tracking-tight hover:bg-white/10 transition-colors">
            Initiate
          </button>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/95 backdrop-blur-xl border border-[#6366F1]/30 flex flex-col relative overflow-hidden transform md:-translate-y-4 shadow-[0_0_30px_rgba(99,102,241,0.15)]">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#6366F1] to-transparent"></div>
<div className="font-mono text-xs text-[#6366F1] uppercase tracking-widest mb-2 flex justify-between items-center">
<span>Nexus Node</span>
<span className="px-2 py-0.5 rounded border border-[#6366F1]/20 bg-[#6366F1]/10 text-[10px] text-white">
              POPULAR
            </span>
</div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-light text-white">$149</span>
<span className="text-zinc-500 text-xs font-mono">/CYCLE</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              50TB Bandwidth
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Multi-Mixer Mesh
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Low Latency Routing
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Priority Playback
            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#6366F1] text-white text-sm tracking-tight hover:bg-[#6366F1]/90 transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            Upgrade Link
          </button>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 flex flex-col shadow-2xl shadow-black/80">
<div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-2">
            Overlord
          </div>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-light text-white">$499</span>
<span className="text-zinc-500 text-xs font-mono">/CYCLE</span>
</div>
<ul className="flex flex-col gap-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Unlimited Bandwidth
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Global Channel Array
            </li>
<li className="flex items-center gap-3 text-sm text-zinc-400 font-light">
<iconify-icon className="text-[#6366F1] text-lg" icon="solar:check-circle-linear"></iconify-icon>
              Zero Latency Guarantee
            </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm tracking-tight hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
</div>
</div>
</section>
<section className="relative z-20 w-full max-w-6xl mx-auto px-4 py-24 flex flex-col gap-12 border-t border-white/10">
<div className="flex flex-col gap-2 items-center text-center">
<div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-400 tracking-widest mb-2">
          INQUIRIES
        </div>
<h2 className="text-3xl font-normal text-white tracking-tight">
          Frequently Asked Questions
        </h2>
<p className="text-zinc-400 text-sm font-light">
          Clarifications on protocol integration and channel arrays.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto w-full">
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80 hover:border-white/10 transition-colors">
<h3 className="text-white text-sm font-normal mb-3 tracking-tight">
            What is the baseline latency?
          </h3>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
            Our protocol guarantees under 12ms latency on standard regional
            links. Audio arrays can achieve sub-1ms routing depending on
            localized track nodes.
          </p>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80 hover:border-white/10 transition-colors">
<h3 className="text-white text-sm font-normal mb-3 tracking-tight">
            Can I integrate legacy cortices?
          </h3>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
            Yes, the Sonic protocol v2.0 features full backward compatibility
            through adaptive bridging layers for legacy analog audio hardware.
          </p>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80 hover:border-white/10 transition-colors">
<h3 className="text-white text-sm font-normal mb-3 tracking-tight">
            How is synchronization secured?
          </h3>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
            All active threads are secured via multi-phase entanglement
            encryption. Unsanctioned frequency intrusion attempts are
            immediately quarantined.
          </p>
</div>
<div className="p-8 rounded-[19px] bg-[#18181B]/90 backdrop-blur-xl border border-white/5 relative shadow-2xl shadow-black/80 hover:border-white/10 transition-colors">
<h3 className="text-white text-sm font-normal mb-3 tracking-tight">
            Is bandwidth genuinely unlimited on Overlord?
          </h3>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
            The Overlord tier removes all throttle caps, dynamically
            distributing audio load across global nodes to prevent any
            bottlenecks.
          </p>
</div>
</div>
</section>
<footer className="bg-[#000000] w-full z-20 border-white/10 border-t pt-16 pb-8 relative">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1 flex flex-col gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#6366F1] text-2xl" icon="solar:headphones-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-sans text-sm tracking-tighter uppercase text-white font-normal">
              SONIC.LINK
            </span>
</div>
<p className="text-zinc-400 text-xs font-light leading-relaxed">
            Deploy sonic meshes, stabilize frequencies, and route audio packets
            with zero latency.
          </p>
</div>
<div className="col-span-1 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-mono uppercase tracking-widest">
              Protocol
            </h4>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Documentation
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Telemetry
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Network Status
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-mono uppercase tracking-widest">
              Company
            </h4>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              About Sonic
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Careers
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Blog
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-xs font-mono uppercase tracking-widest">
              Legal
            </h4>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Privacy Policy
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Terms of Sync
            </a>
<a className="text-zinc-500 text-sm hover:text-[#6366F1] transition-colors font-light" href="#">
              Compliance
            </a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="font-sans text-xs tracking-tighter text-zinc-500 font-light uppercase">
          Sonic // Audio Synchrony © 2024
        </span>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-[#6366F1] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:mask-happly-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-[#6366F1] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-[#6366F1] transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:map-arrow-up-linear"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
