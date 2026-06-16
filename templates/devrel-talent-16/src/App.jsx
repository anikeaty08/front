import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



if (window.gsap && window.ScrollTrigger) {
document.documentElement.classList.add('gsap-loading');
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              (function() {
                const canvas = document.getElementById('wave-canvas-aura');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');

                let width, height;
                let mouseX = 0;
                let mouseY = 0;
                let targetMouseX = 0;
                let targetMouseY = 0;

                function resize() {
                  width = canvas.offsetWidth;
                  height = canvas.offsetHeight;
                  canvas.width = width * window.devicePixelRatio;
                  canvas.height = height * window.devicePixelRatio;
                  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                }

                window.addEventListener('resize', resize);
                resize();

                document.addEventListener('mousemove', (e) => {
                  targetMouseX = (e.clientX / window.innerWidth) - 0.5;
                  targetMouseY = (e.clientY / window.innerHeight) - 0.5;
                });

                let time = 0;

                function draw() {
                  time += 0.003;

                  // Smooth parallax interpolation
                  mouseX += (targetMouseX - mouseX) * 0.05;
                  mouseY += (targetMouseY - mouseY) * 0.05;

                  ctx.clearRect(0, 0, width, height);

                  // Volumetric cyan/blue glow backdrop
                  const centerX = width * 0.5 + mouseX * 200;
                  const centerY = height * 0.3 + mouseY * 150;
                  const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width * 0.7);
                  glow.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
                  glow.addColorStop(0.4, 'rgba(37, 99, 235, 0.08)');
                  glow.addColorStop(1, 'rgba(30, 58, 138, 0)');

                  ctx.globalCompositeOperation = 'source-over';
                  ctx.fillStyle = glow;
                  ctx.fillRect(0, 0, width, height);

                  // Layered smooth waves
                  const waves = [
                    { speed: 0.6, amp: 160, freq: 0.0012, offset: 0, colorStops: ['rgba(30, 58, 138, 0.20)', 'rgba(30, 58, 138, 0.02)'] },
                    { speed: 0.9, amp: 130, freq: 0.0016, offset: 2, colorStops: ['rgba(29, 78, 216, 0.18)', 'rgba(29, 78, 216, 0.02)'] },
                    { speed: 1.2, amp: 100, freq: 0.0022, offset: 4, colorStops: ['rgba(37, 99, 235, 0.20)', 'rgba(37, 99, 235, 0.02)'] },
                    { speed: 1.5, amp: 80,  freq: 0.0028, offset: 1, colorStops: ['rgba(59, 130, 246, 0.22)', 'rgba(59, 130, 246, 0.02)'] }
                  ];

                  ctx.globalCompositeOperation = 'screen';

                  waves.forEach((wave, i) => {
                    ctx.beginPath();
                    ctx.moveTo(-100, height);

                    const layerOffset = i * 40;

                    for (let x = -100; x <= width + 100; x += 15) {
                      // Distinct parallax speeds per layer
                      const parallaxX = mouseX * 60 * (i + 1);
                      const parallaxY = mouseY * 30 * (i + 1);

                      // Complex wave math for organic fluid feeling
                      const y = height * 0.6
                              + Math.sin(x * wave.freq + time * wave.speed + wave.offset) * wave.amp
                              + Math.cos(x * wave.freq * 0.7 - time * wave.speed * 0.6) * (wave.amp * 0.5)
                              + parallaxY
                              - layerOffset;

                      ctx.lineTo(x + parallaxX, y);
                    }

                    ctx.lineTo(width + 100, height);
                    ctx.closePath();

                    const grad = ctx.createLinearGradient(0, height * 0.2, 0, height);
                    grad.addColorStop(0, wave.colorStops[0]);
                    grad.addColorStop(1, wave.colorStops[1]);

                    ctx.fillStyle = grad;
                    ctx.fill();
                  });

                  ctx.globalCompositeOperation = 'source-over';

                  requestAnimationFrame(draw);
                }

                draw();
              })();
            


                      (id="aura-emog67fhb05qq9hv"]');
                          if (!el) return;
                          const section = el.closest('section');
                          if (!section) return;

                          const cards = section.querySelectorAll('.grid > div');
                          const titles = section.querySelectorAll('.s2-title-line, p, .mb-20 > div');

                          const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                              titles.forEach((t, i) => {
                                setTimeout(() => t.classList.add('fast-reveal-override-title'), i * 30);
                              });
                              cards.forEach((c, i) => {
                                setTimeout(() => c.classList.add('fast-reveal-override'), i * 40);
                              });
                              observer.disconnect();
                            }
                          }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

                          observer.observe(section);
                        };

                        if (document.readyState === 'loading') {
                          document.addEventListener('DOMContentLoaded', init);
                        } else {
                          init();
                        }
                      })();
                    


              (function() {
                const BouncingSystem = {
                  init: function() {
                    const containers = document.querySelectorAll('.js-bouncing-container');
                    containers.forEach(container => {
                      if (container.dataset.bouncingInitialized === 'true') return;
                      container.dataset.bouncingInitialized = 'true';

                      const items = Array.from(container.querySelectorAll('.js-bouncing-item'));
                      if (items.length === 0) return;

                      let isHovered = false;
                      const group = container.closest('.group');
                      if (group) {
                        group.addEventListener('mouseenter', () => isHovered = true);
                        group.addEventListener('mouseleave', () => isHovered = false);
                      }

                      const state = items.map((item, index) => {
                        const w = parseFloat(item.getAttribute('data-w') || item.offsetWidth || 48);
                        const h = parseFloat(item.getAttribute('data-h') || item.offsetHeight || 48);

                        let x = parseFloat(item.style.left);
                        let y = parseFloat(item.style.top);

                        if (isNaN(x) || isNaN(y)) {
                          const cw = container.clientWidth || 300;
                          const ch = container.clientHeight || 288;
                          x = Math.random() * (cw - w);
                          y = Math.random() * (ch - h);
                        }

                        return {
                          el: item,
                          w: w,
                          h: h,
                          x: x,
                          y: y,
                          vx: (Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 35),
                          vy: (Math.random() > 0.5 ? 1 : -1) * (25 + Math.random() * 35)
                        };
                      });

                      let lastTime = performance.now();

                      function step(time) {
                        const now = performance.now();
                        let dt = (now - lastTime) / 1000;
                        lastTime = now;

                        // Cap delta time to prevent massive jumps when switching tabs
                        if (dt > 0.5) dt = 0.016;

                        if (!isHovered && container.clientWidth > 0) {
                          const cw = container.clientWidth;
                          const ch = container.clientHeight;

                          state.forEach(obj => {
                            obj.x += obj.vx * dt;
                            obj.y += obj.vy * dt;

                            // Wall collision
                            if (obj.x <= 0) { obj.x = 0; obj.vx = Math.abs(obj.vx); }
                            else if (obj.x + obj.w >= cw) { obj.x = cw - obj.w; obj.vx = -Math.abs(obj.vx); }

                            if (obj.y <= 0) { obj.y = 0; obj.vy = Math.abs(obj.vy); }
                            else if (obj.y + obj.h >= ch) { obj.y = ch - obj.h; obj.vy = -Math.abs(obj.vy); }
                          });

                          // Item collision (AABB)
                          for (let i = 0; i < state.length; i++) {
                            for (let j = i + 1; j < state.length; j++) {
                              let a = state[i];
                              let b = state[j];

                              if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) {
                                let overlapX = Math.min(a.x + a.w - b.x, b.x + b.w - a.x);
                                let overlapY = Math.min(a.y + a.h - b.y, b.y + b.h - a.y);

                                if (overlapX < overlapY) {
                                  let sign = Math.sign(a.x - b.x) || 1;
                                  a.x += sign * (overlapX / 2 + 0.5);
                                  b.x -= sign * (overlapX / 2 + 0.5);

                                  // Only swap velocities if moving towards each other
                                  if ((a.vx - b.vx) * sign < 0) {
                                    let temp = a.vx; a.vx = b.vx; b.vx = temp;
                                  }
                                } else {
                                  let sign = Math.sign(a.y - b.y) || 1;
                                  a.y += sign * (overlapY / 2 + 0.5);
                                  b.y -= sign * (overlapY / 2 + 0.5);

                                  if ((a.vy - b.vy) * sign < 0) {
                                    let temp = a.vy; a.vy = b.vy; b.vy = temp;
                                  }
                                }

                                // Ensure we stay within bounds
                                a.x = Math.max(0, Math.min(a.x, cw - a.w));
                                a.y = Math.max(0, Math.min(a.y, ch - a.h));
                                b.x = Math.max(0, Math.min(b.x, cw - b.w));
                                b.y = Math.max(0, Math.min(b.y, ch - b.h));
                              }
                            }
                          }

                          // Render positions
                          state.forEach(obj => {
                            obj.el.style.left = obj.x + 'px';
                            obj.el.style.top = obj.y + 'px';
                          });
                        }

                        const rAF = window.requestAnimationFrame(step);

                        // Fallback for environments where requestAnimationFrame is disabled
                        if (rAF === -1) {
                           setTimeout(step, 105);
                        }
                      }

                      step(performance.now());
                    });
                  }
                };

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', BouncingSystem.init);
                } else {
                  BouncingSystem.init();
                }

                if (typeof MutationObserver !== 'undefined') {
                  const observer = new MutationObserver(BouncingSystem.init);
                  observer.observe(document.body, { childList: true, subtree: true });
                }

                setTimeout(BouncingSystem.init, 500);
                setTimeout(BouncingSystem.init, 2000);
              })();
            


                (function () {
                      const canvas = document.getElementById('strata-globe-canvas');
                      if (!canvas) return;

                      const ctx = canvas.getContext('2d');
                      if (!ctx) return;

                      let width = 0;
                      let height = 0;
                      let dpr = Math.min(window.devicePixelRatio || 1, 1.5);
                      let rafId = null;

                      const dots = [];
                      const total = 1200;
                      const phi = Math.PI * (3 - Math.sqrt(5));

                      for (let i = 0; i < total; i++) {
                        const y = 1 - (i / (total - 1)) * 2;
                        const r = Math.sqrt(1 - y * y);
                        const theta = phi * i;

                        const x = Math.cos(theta) * r;
                        const z = Math.sin(theta) * r;

                        const n1 = Math.sin(x * 3.2) * Math.cos(y * 3.4) + Math.sin(z * 3.5);
                        const n2 = Math.sin(x * 6.0) * Math.cos(y * 6.1) + Math.sin(z * 6.2);
                        const val = n1 + n2 * 0.42;

                        if (val > 0.28) {
                          dots.push({
                            x,
                            y,
                            z,
                            phase: Math.random() * Math.PI * 2,
                            baseSize: 0.85 + Math.random() * 0.8
                          });
                        }
                      }

                      function resize() {
                        const rect = canvas.getBoundingClientRect();
                        width = rect.width;
                        height = rect.height;

                        canvas.width = Math.floor(width * dpr);
                        canvas.height = Math.floor(height * dpr);

                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                        ctx.scale(dpr, dpr);
                      }

                      function project(x, y, z, rotY, rotX) {
                        const cx = width * 0.72;
                        const cy = height * 0.52;
                        const radius = Math.min(width, height) * 0.34;

                        const cosY = Math.cos(rotY);
                        const sinY = Math.sin(rotY);
                        const cosX = Math.cos(rotX);
                        const sinX = Math.sin(rotX);

                        let dx = x * cosY - z * sinY;
                        let dz = x * sinY + z * cosY;

                        let dy = y * cosX - dz * sinX;
                        dz = y * sinX + dz * cosX;

                        const scale = 1 / (1 + dz * 0.65);

                        return {
                          x: cx + dx * radius * scale,
                          y: cy + dy * radius * scale,
                          z: dz,
                          scale
                        };
                      }

                      function draw(t) {
                        ctx.clearRect(0, 0, width, height);

                        const rotY = t * 0.00022;
                        const rotX = Math.sin(t * 0.00014) * 0.16;

                        const projected = dots.map(dot => {
                          const p = project(dot.x, dot.y, dot.z, rotY, rotX);
                          return { ...p, phase: dot.phase, baseSize: dot.baseSize };
                        });

                        projected.sort((a, b) => a.z - b.z);

                        for (const p of projected) {
                          const alphaBase = p.z > 0 ? 0.78 : 0.12;
                          const pulse = 0.88 + Math.sin(t * 0.0016 + p.phase) * 0.18;
                          const size = p.baseSize * p.scale * 1.35;

                          ctx.beginPath();
                          ctx.fillStyle =
                            p.z > 0
                              ? `rgba(77,163,255,${alphaBase * pulse})`
                              : `rgba(77,163,255,${0.08 * pulse})`;
                          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                          ctx.fill();
                        }

                        rafId = requestAnimationFrame(draw);
                      }

                      function init() {
                        resize();
                        if (rafId) cancelAnimationFrame(rafId);
                        rafId = requestAnimationFrame(draw);
                      }

                      window.addEventListener('resize', resize);
                      init();
                    })();
              


                        (function() {
                          const el = document.getElementById('counter-aura-emnvymjfe1z0mkxyg');
                          if (!el) return;
                          const target = 50;
                          const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                              // Short stagger delay
                              setTimeout(() => {
                                const duration = 2000;
                                const start = performance.now();
                                const update = (currentTime) => {
                                  const elapsed = currentTime - start;
                                  const progress = Math.min(elapsed / duration, 1);
                                  // Smooth easeOutExpo
                                  const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                  el.innerText = Math.floor(ease * target);

                                  if (progress < 1) {
                                    requestAnimationFrame(update);
                                  } else {
                                    el.innerText = target;
                                  }
                                };
                                requestAnimationFrame(update);
                              }, 150);
                              // Ensure animation only triggers once
                              observer.disconnect();
                            }
                          }, { threshold: 0.1 });

                          observer.observe(el.parentElement);
                        })();
                      


                        (function() {
                          const el = document.getElementById('counter-aura-emnvyqpte0ptqkg9');
                          if (!el) return;
                          const target = 10000;
                          const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                              // Short stagger delay
                              setTimeout(() => {
                                const duration = 2000;
                                const start = performance.now();
                                const update = (currentTime) => {
                                  const elapsed = currentTime - start;
                                  const progress = Math.min(elapsed / duration, 1);
                                  // Smooth easeOutExpo
                                  const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                  el.innerText = Math.floor(ease * target).toLocaleString();

                                  if (progress < 1) {
                                    requestAnimationFrame(update);
                                  } else {
                                    el.innerText = target.toLocaleString();
                                  }
                                };
                                requestAnimationFrame(update);
                              }, 150);
                              // Ensure animation only triggers once
                              observer.disconnect();
                            }
                          }, { threshold: 0.1 });

                          observer.observe(el.parentElement);
                        })();
                      


                        (function() {
                          const el = document.getElementById('counter-aura-emnvz43ew1bek1jp');
                          if (!el) return;
                          const target = 3;
                          const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                              setTimeout(() => {
                                const duration = 2000;
                                const start = performance.now();
                                const update = (currentTime) => {
                                  const elapsed = currentTime - start;
                                  const progress = Math.min(elapsed / duration, 1);
                                  const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                  el.innerText = Math.floor(ease * target);
                                  if (progress < 1) {
                                    requestAnimationFrame(update);
                                  } else {
                                    el.innerText = target;
                                  }
                                };
                                requestAnimationFrame(update);
                              }, 150);
                              observer.disconnect();
                            }
                          }, { threshold: 0.1 });
                          observer.observe(el.parentElement);
                        })();
                      


                        (function() {
                          const el = document.getElementById('counter-aura-emnvzxe8k2el2bzw');
                          if (!el) return;
                          const target = 98;
                          const observer = new IntersectionObserver((entries) => {
                            if (entries[0].isIntersecting) {
                              setTimeout(() => {
                                const duration = 2000;
                                const start = performance.now();
                                const update = (currentTime) => {
                                  const elapsed = currentTime - start;
                                  const progress = Math.min(elapsed / duration, 1);
                                  const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                  el.innerText = Math.floor(ease * target);
                                  if (progress < 1) {
                                    requestAnimationFrame(update);
                                  } else {
                                    el.innerText = target;
                                  }
                                };
                                requestAnimationFrame(update);
                              }, 150);
                              observer.disconnect();
                            }
                          }, { threshold: 0.1 });
                          observer.observe(el.parentElement);
                        })();
                      


                    (function() {
                      const initCounters = () => {
                        const section = document.querySelector('[data-element-id="aura-emnt1b3k712lap77r"]');
                        if (!section) return;

                        const observer = new IntersectionObserver((entries) => {
                          entries.forEach(entry => {
                            if (entry.isIntersecting) {
                              const counters = entry.target.querySelectorAll('.counter-value');
                              counters.forEach((counter, index) => {
                                const target = +counter.getAttribute('data-target');
                                const suffix = counter.getAttribute('data-suffix') || '';
                                const prefix = counter.getAttribute('data-prefix') || '';
                                const isComma = counter.hasAttribute('data-comma');

                                // Reset to 0 visually before animating
                                counter.innerText = prefix + '0' + suffix;

                                setTimeout(() => {
                                  const duration = 2000;
                                  const start = performance.now();

                                  const update = (currentTime) => {
                                    const elapsed = currentTime - start;
                                    const progress = Math.min(elapsed / duration, 1);

                                    // Smooth easeOutExpo
                                    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                    let current = Math.floor(ease * target);

                                    let displayValue = current;
                                    if (isComma) displayValue = current.toLocaleString();

                                    counter.innerText = prefix + displayValue + suffix;

                                    if (progress < 1) {
                                      requestAnimationFrame(update);
                                    } else {
                                      counter.innerText = prefix + (isComma ? target.toLocaleString() : target) + suffix;
                                    }
                                  };
                                  requestAnimationFrame(update);
                                }, index * 150); // Stagger delay of 150ms between each counter
                              });

                              // Ensure animation only triggers once
                              observer.unobserve(entry.target);
                            }
                          });
                        }, { threshold: 0.1 });

                        observer.observe(section);
                      };

                      if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initCounters);
                      } else {
                        initCounters();
                      }
                    })();
                  


                  (function() {
                    const initCounters = () => {
                      const section = document.querySelector('[data-element-id="aura-emnt15g8anhj8rvb"]');
                      if (!section) return;

                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                          if (entry.isIntersecting) {
                            const counters = entry.target.querySelectorAll('.counter-value');
                            counters.forEach((counter, index) => {
                              setTimeout(() => {
                                const target = +counter.getAttribute('data-target');
                                const suffix = counter.getAttribute('data-suffix') || '';
                                const prefix = counter.getAttribute('data-prefix') || '';
                                const isComma = counter.hasAttribute('data-comma');
                                const duration = 2000;
                                const start = performance.now();

                                const update = (currentTime) => {
                                  const elapsed = currentTime - start;
                                  const progress = Math.min(elapsed / duration, 1);

                                  // Smooth easeOutExpo
                                  const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                                  let current = Math.floor(ease * target);

                                  let displayValue = current;
                                  if (isComma) displayValue = current.toLocaleString();

                                  counter.innerText = prefix + displayValue + suffix;

                                  if (progress < 1) {
                                    requestAnimationFrame(update);
                                  } else {
                                    counter.innerText = prefix + (isComma ? target.toLocaleString() : target) + suffix;
                                  }
                                };
                                requestAnimationFrame(update);
                              }, index * 150); // Short stagger
                            });

                            // Only trigger once
                            observer.unobserve(entry.target);
                          }
                        });
                      }, { threshold: 0.1 });

                      observer.observe(section);
                    };

                    if (document.readyState === 'loading') {
                      document.addEventListener('DOMContentLoaded', initCounters);
                    } else {
                      initCounters();
                    }
                  })();
                


        import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

          const canvas = document.getElementById("gl");
          const gl = canvas?.getContext("webgl2");

          if (!gl) console.warn("WebGL2 not available");

          const renderer = new THREE.WebGLRenderer({ canvas, antialias:true, alpha:true });
          renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
          renderer.setClearColor(0xffffff, 0);

          const scene = new THREE.Scene();

          const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
          camera.position.set(0, 1.2, 7.6);
          camera.lookAt(0, -0.4, 0);

          function resize(){
            if (!canvas) return;
            const r = canvas.getBoundingClientRect();
            const w = Math.max(2, Math.floor(r.width));
            const h = Math.max(2, Math.floor(r.height));
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          }
          new ResizeObserver(resize).observe(canvas);
          resize();

          const rimLight = new THREE.DirectionalLight(0xffffff, 0.7);
          rimLight.position.set(-2, 2, 4);
          scene.add(rimLight);

          const fillLight = new THREE.AmbientLight(0xffffff, 0.5);
          scene.add(fillLight);

          const planetGeom = new THREE.SphereGeometry(3.9, 96, 96);

          const planetMat = new THREE.ShaderMaterial({
            transparent: true,
            uniforms: {
              uColor: { value: new THREE.Color(0xf4f4f5) },
              uRim: { value: new THREE.Color(0x10b981) },
              uRim2: { value: new THREE.Color(0x059669) },
            },
            vertexShader: `
              varying vec3 vN;
              varying vec3 vV;
              void main(){
                vN = normalize(normalMatrix * normal);
                vec4 mv = modelViewMatrix * vec4(position,1.0);
                vV = normalize(-mv.xyz);
                gl_Position = projectionMatrix * mv;
              }
            `,
            fragmentShader: `
              varying vec3 vN;
              varying vec3 vV;
              uniform vec3 uColor;
              uniform vec3 uRim;
              uniform vec3 uRim2;
              void main(){
                float fres = pow(1.0 - max(dot(vN, vV), 0.0), 2.2);
                float fres2 = pow(1.0 - max(dot(vN, vV), 0.0), 5.0);
                vec3 col = uColor;
                col = mix(col, uRim, fres * 0.5);
                col = mix(col, uRim2, fres2 * 0.7);
                gl_FragColor = vec4(col, 0.96);
              }
            `
          });

          const planet = new THREE.Mesh(planetGeom, planetMat);
          planet.position.set(0.6, -3.1, 0);
          scene.add(planet);

          const PCOUNT = 9000;
          const pPos = new Float32Array(PCOUNT * 3);
          const pCol = new Float32Array(PCOUNT * 3);

          const tmp = new THREE.Vector3();
          for (let i=0;i<PCOUNT;i++){
            const u = Math.random();
            const v = Math.random();
            const theta = 2*Math.PI*u;
            const phi = (Math.PI * 0.25) + v * (Math.PI * 0.40);
            const r = 3.92;

            tmp.set(
              r * Math.sin(phi) * Math.cos(theta),
              r * Math.cos(phi),
              r * Math.sin(phi) * Math.sin(theta)
            );

            pPos[i*3+0] = tmp.x;
            pPos[i*3+1] = tmp.y;
            pPos[i*3+2] = tmp.z;

            const t = Math.random();
            const c1 = new THREE.Color("#059669");
            const c2 = new THREE.Color("#10b981");
            const c3 = new THREE.Color("#047857");
            const cc = t < 0.6 ? c1.clone().lerp(c2, t/0.6) : c2.clone().lerp(c3, (t-0.6)/0.4);

            pCol[i*3+0] = cc.r;
            pCol[i*3+1] = cc.g;
            pCol[i*3+2] = cc.b;
          }

          const pointsGeom = new THREE.BufferGeometry();
          pointsGeom.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
          pointsGeom.setAttribute("color", new THREE.BufferAttribute(pCol, 3));

          const pointsMat = new THREE.ShaderMaterial({
            uniforms: {
              uTime: { value: 0 },
              uMouse: { value: new THREE.Vector3(-999, -999, -999) },
              uSize: { value: 16.0 * renderer.getPixelRatio() },
              uOpacity: { value: 0.8 }
            },
            vertexShader: `
              uniform float uTime;
              uniform vec3 uMouse;
              uniform float uSize;
              attribute vec3 color;
              varying vec3 vColor;
              void main(){
                vColor = color;
                vec3 pos = position;
                pos.x += sin(uTime * 0.8 + pos.y * 2.0) * 0.04;
                pos.y += cos(uTime * 0.7 + pos.z * 2.0) * 0.04;
                pos.z += sin(uTime * 0.9 + pos.x * 2.0) * 0.04;

                vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                float dist = distance(worldPos.xyz, uMouse);
                float radius = 3.0;
                if(dist < radius){
                  vec3 dir = normalize(worldPos.xyz - uMouse);
                  float force = pow((radius - dist) / radius, 1.8);
                  worldPos.xyz += dir * force * 0.6;
                }

                vec4 mvPosition = viewMatrix * worldPos;
                gl_PointSize = uSize * (1.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }
            `,
            fragmentShader: `
              uniform float uOpacity;
              varying vec3 vColor;
              void main(){
                vec2 coord = gl_PointCoord - vec2(0.5);
                if(length(coord) > 0.5) discard;
                gl_FragColor = vec4(vColor, uOpacity);
              }
            `,
            transparent: true,
            blending: THREE.NormalBlending,
            depthWrite: false
          });

          const dust = new THREE.Points(pointsGeom, pointsMat);
          dust.position.copy(planet.position);
          scene.add(dust);

          const arcs = [];
          const travelers = [];

          function makeGlowSprite(){
            const geom = new THREE.SphereGeometry(0.05, 16, 16);
            const mat = new THREE.MeshBasicMaterial({
              color: 0x059669,
              transparent: true,
              opacity: 0.8,
              blending: THREE.NormalBlending,
              depthWrite: false
            });
            return new THREE.Mesh(geom, mat);
          }

          function arcCurve(a, b, height){
            const mid = a.clone().add(b).multiplyScalar(0.5);
            mid.y += height;
            return new THREE.QuadraticBezierCurve3(a, mid, b);
          }

          const endpoints = [
            [new THREE.Vector3(-3.6, -1.2, 0.4), new THREE.Vector3(3.2, -1.0, 0.9), 1.8],
            [new THREE.Vector3(-4.0, -1.4, 0.2), new THREE.Vector3(2.2, -0.6, -0.3), 2.4],
            [new THREE.Vector3(-2.8, -0.8, 1.2), new THREE.Vector3(4.0, -1.4, 0.1), 1.4],
            [new THREE.Vector3(-3.8, -1.0, -0.8), new THREE.Vector3(3.6, -0.8, -0.6), 2.0],
          ];

          endpoints.forEach((e, idx) => {
            const a = e[0].add(planet.position.clone().multiplyScalar(0));
            const b = e[1].add(planet.position.clone().multiplyScalar(0));
            const curve = arcCurve(a, b, e[2]);

            const pts = curve.getPoints(180);
            const g = new THREE.BufferGeometry().setFromPoints(pts);

            const mat = new THREE.LineBasicMaterial({
              color: idx % 2 === 0 ? 0x059669 : 0x047857,
              transparent: true,
              opacity: 0.6,
              blending: THREE.NormalBlending,
              depthWrite: false
            });

            const line = new THREE.Line(g, mat);
            line.renderOrder = 5;
            scene.add(line);

            arcs.push({ curve, line });

            const t = makeGlowSprite();
            t.userData.speed = 0.08 + Math.random()*0.06;
            t.userData.u = Math.random();
            scene.add(t);
            travelers.push(t);
          });

          const node1 = makeGlowSprite(); node1.position.set(1.3, -0.9, 0.6); node1.scale.setScalar(1.2);
          node1.material.opacity = 0.8; scene.add(node1);

          const node2 = makeGlowSprite(); node2.position.set(1.1, -0.7, 0.5); node2.scale.setScalar(0.9);
          node2.material.opacity = 0.6; scene.add(node2);

          const STAR = 900;
          const sPos = new Float32Array(STAR*3);
          for (let i=0;i<STAR;i++){
            sPos[i*3+0] = (Math.random()-0.5) * 28;
            sPos[i*3+1] = (Math.random()-0.2) * 18;
            sPos[i*3+2] = -10 - Math.random()*30;
          }
          const sGeom = new THREE.BufferGeometry();
          sGeom.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
          const sMat = new THREE.PointsMaterial({
            color: 0xa1a1aa,
            size: 0.03,
            transparent:true,
            opacity: 0.4,
            blending: THREE.NormalBlending,
            depthWrite:false
          });
          const stars = new THREE.Points(sGeom, sMat);
          scene.add(stars);

          const mouse = new THREE.Vector2(-999, -999);
          const raycaster = new THREE.Raycaster();
          const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
          const dummyTarget = new THREE.Vector3();

          window.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
          });

          window.addEventListener('mouseleave', () => {
            mouse.set(-999, -999);
          });

          const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          let t0 = performance.now();

          function animate(now){
            if (!prefersReduced){
              const t = (now - t0) / 1000;

              raycaster.setFromCamera(mouse, camera);
              const hit = raycaster.ray.intersectPlane(plane, dummyTarget);
              if (hit && mouse.x !== -999) {
                pointsMat.uniforms.uMouse.value.lerp(dummyTarget, 0.08);
              } else {
                pointsMat.uniforms.uMouse.value.lerp(new THREE.Vector3(-999, -999, -999), 0.05);
              }

              pointsMat.uniforms.uTime.value = t;
              pointsMat.uniforms.uOpacity.value = 0.7 + 0.10 * Math.sin(t*0.9);

              dust.rotation.y = t * 0.04;
              dust.rotation.z = t * 0.015;

              const sPositions = stars.geometry.attributes.position.array;
              for (let i = 0; i < STAR; i++) {
                sPositions[i*3+2] += 0.015;
                if (sPositions[i*3+2] > 6) {
                  sPositions[i*3+2] = -30;
                }
              }
              stars.geometry.attributes.position.needsUpdate = true;

              camera.position.x = 0.12 * Math.sin(t*0.18);
              camera.position.y = 1.2 + 0.06 * Math.cos(t*0.20);
              camera.lookAt(0.2, -0.6, 0);

              arcs.forEach((a, i) => a.line.material.opacity = 0.4 + 0.2 * Math.sin(t*0.8 + i));

              for (let i=0;i<travelers.length;i++){
                const tr = travelers[i];
                tr.userData.u = (tr.userData.u + tr.userData.speed * 0.016) % 1;
                const p = arcs[i].curve.getPoint(tr.userData.u);
                tr.position.copy(p);

                const s = 0.9 + 0.35 * Math.sin(t*3.2 + i);
                tr.scale.setScalar(s * (i===1 ? 1.4 : 1.0));
                tr.material.opacity = 0.5 + 0.3 * Math.sin(t*2.6 + i);
              }

              node1.material.opacity = 0.6 + 0.2*Math.sin(t*2.2);
              node2.material.opacity = 0.4 + 0.2*Math.sin(t*2.8);
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          }
          requestAnimationFrame(animate);
      


      document.addEventListener("DOMContentLoaded", () => {
        gsap.registerPlugin(ScrollTrigger);
        let mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const nav = document.querySelector("nav");
          const navItems = nav.querySelectorAll("a, .hidden.items-center.gap-8");
          const heroSection = document.querySelector("section:nth-of-type(1)");
          const heroEyebrow = heroSection.querySelector(".mb-8.inline-flex");
          const heroTitleLines = heroSection.querySelectorAll(".hero-title-line");
          const heroSubtitle = heroSection.querySelector("p");
          const heroCtas = heroSection.querySelector(".mt-10.flex");
          const heroVisual = heroSection.querySelector(".mt-16.w-full");

          gsap.set(nav, { y: -100, opacity: 0 });
          gsap.set(navItems, { opacity: 0, y: -10 });
          gsap.set([heroEyebrow, heroSubtitle, heroVisual], { opacity: 0 });
          if(heroCtas) gsap.set(heroCtas.children, { opacity: 0 });
          gsap.set(heroTitleLines, { yPercent: 100, rotate: 2 });

          document.documentElement.classList.remove('gsap-loading');

          const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });
          masterTl.to(nav, { y: 0, opacity: 1, duration: 1.2, ease: "expo.out", clearProps: "filter" }, 0.2)
          .to(navItems, { opacity: 1, y: 0, duration: 0.8, stagger: 0.05, ease: "power2.out" }, 0.6)
          .fromTo(heroEyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.8)
          .to(heroTitleLines, { yPercent: 0, rotate: 0, duration: 1, stagger: 0.15, ease: "power4.out" }, 1.0)
          .fromTo(heroSubtitle, { opacity: 0, y: 20, filter: "blur(4px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8 }, 1.4)
          .fromTo(heroCtas.children, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, 1.6)
          .fromTo(heroVisual, { opacity: 0, y: 40, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }, 1.8);

          gsap.to(heroSection.querySelector(".relative.z-10"), {
            y: -80, opacity: 0.2, ease: "none",
            scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
          });

          const s2 = document.querySelector("section:nth-of-type(2)");
          const s2Eyebrow = s2.querySelector(".mb-5.inline-flex");
          const s2TitleLines = s2.querySelectorAll(".s2-title-line");
          const s2Subtitle = s2.querySelector("p");
          const s2Cards = s2.querySelectorAll(".grid > div");

          gsap.set(s2TitleLines, { yPercent: 100 });
          const s2Tl = gsap.timeline({ scrollTrigger: { trigger: s2, start: "top 75%" } });
          s2Tl.fromTo(s2Eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(s2TitleLines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, "-=0.6")
          .fromTo(s2Subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
          .fromTo(s2Cards, { opacity: 0, y: 30, filter: "blur(3px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.1, ease: "power3.out" }, "-=0.4");

          const s3 = document.querySelector("section:nth-of-type(3)");
          const s3Eyebrow = s3.querySelector(".mb-5.inline-flex");
          const s3TitleLines = s3.querySelectorAll(".s3-title-line");
          const s3Subtitle = s3.querySelector("p");
          const s3Cards = s3.querySelectorAll(".grid > div");

          gsap.set(s3TitleLines, { yPercent: 100 });
          const s3Tl = gsap.timeline({ scrollTrigger: { trigger: s3, start: "top 75%" } });
          s3Tl.fromTo(s3Eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
          .to(s3TitleLines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, "-=0.6")
          .fromTo(s3Subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

          if (s3Cards.length >= 4) {
            s3Tl.fromTo(s3Cards[0], { opacity: 0, y: 40, scale: 0.98 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=0.4")
            .fromTo([s3Cards[1], s3Cards[2]], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out" }, "-=0.6")
            .fromTo(s3Cards[3], { opacity: 0 }, { opacity: 1, duration: 0.1 }, "-=0.4")
            .fromTo(s3Cards[3].children[0], { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.1")
            .fromTo(s3Cards[3].children[1], { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 0.9, ease: "power4.out" }, "-=0.6");
          }

          gsap.to(s3.querySelector(".relative.mx-auto"), {
            y: -30, ease: "none",
            scrollTrigger: { trigger: s3, start: "top bottom", end: "bottom top", scrub: true }
          });

          const s4 = document.querySelector("section:nth-of-type(4)");
          if (s4) {
            const s4Eyebrow = s4.querySelector(".mb-5.inline-flex");
            const s4TitleLines = s4.querySelectorAll(".s4-title-line");
            const s4Subtitle = s4.querySelector("p");
            const s4Cards = s4.querySelectorAll(".grid.gap-6 > div");
            const s4Features = s4.querySelectorAll(".grid.gap-10 > div, .grid.gap-8 > div");

            gsap.set(s4TitleLines, { yPercent: 100 });
            const s4Tl = gsap.timeline({ scrollTrigger: { trigger: s4, start: "top 75%" } });

            s4Tl.fromTo(s4Eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
            .to(s4TitleLines, { yPercent: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" }, "-=0.6")
            .fromTo(s4Subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
            .fromTo(s4Cards, { opacity: 0, y: 30, filter: "blur(3px)" }, { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.1, ease: "power3.out" }, "-=0.4")
            .fromTo(s4Features, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, "-=0.4");

            s4Cards.forEach((card, index) => {
              const tl = gsap.timeline({ scrollTrigger: { trigger: card, start: "top 85%" } });
              if (index === 0) {
                const toggles = card.querySelectorAll(".cursor-pointer.group");
                tl.fromTo(toggles, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.3 });
              } else if (index === 1) {
                const center = card.querySelector(".w-16.h-16");
                if (center) tl.fromTo(center, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.5)", delay: 0.3 });
              } else if (index === 2) {
                const regions = card.querySelectorAll(".w-full.bg-white\\/90");
                const sync = card.querySelector(".w-full.mt-auto");
                tl.fromTo(regions, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.3 })
                  .fromTo(sync, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
              } else if (index === 3) {
                const radar = card.querySelector("svg");
                const labels = card.querySelectorAll(".absolute.flex.flex-col");
                tl.fromTo(radar, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", delay: 0.3 })
                  .fromTo(labels, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "back.out(1.2)" }, "-=0.4");
              } else if (index === 4) {
                const rings = card.querySelectorAll("circle");
                const num = card.querySelector(".absolute.top-0.right-0");
                if (rings.length > 0) {
                  tl.fromTo(rings, { strokeDashoffset: 220 }, { strokeDashoffset: (i, target) => target.getAttribute('stroke-dashoffset') || 0, duration: 1, stagger: 0.1, ease: "power3.out", delay: 0.3 });
                }
                if (num) tl.fromTo(num, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" }, "-=0.5");
              } else if (index === 5) {
                const lines = card.querySelectorAll(".font-mono > div");
                tl.fromTo(lines, { opacity: 0, x: -5 }, { opacity: 1, x: 0, duration: 0.4, stagger: 0.1, ease: "power2.out", delay: 0.3 });
              }
            });
          }

          const s5 = document.querySelector("section:nth-of-type(5)");
          if (s5) {
            const s5Eyebrow = s5.querySelector(".mb-5.inline-flex");
            const s5TitleLines = s5.querySelectorAll(".s5-title-line");
            const s5Subtitle = s5.querySelector("p.max-w-2xl");
            const s5FeedbackCard = s5.querySelector(".max-w-3xl + div");
            const s5Marquee = s5.querySelector(".proof-mask");
            const s5Metrics = s5.querySelectorAll(".mt-10.grid > div");

            gsap.set(s5TitleLines, { yPercent: 100 });
            const s5Tl = gsap.timeline({ scrollTrigger: { trigger: s5, start: "top 75%" } });

            s5Tl.fromTo(s5Eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
            .to(s5TitleLines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, "-=0.6")
            .fromTo(s5Subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

            if(s5FeedbackCard) {
              s5Tl.fromTo(s5FeedbackCard, { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" }, "-=0.8");
              const s5FeedbackInner = s5FeedbackCard.querySelectorAll("p, .mt-6");
              s5Tl.fromTo(s5FeedbackInner, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");
            }

            if(s5Marquee) {
              gsap.fromTo(s5Marquee, { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: s5Marquee, start: "top 85%" }
              });
            }

            if(s5Metrics.length) {
              gsap.fromTo(s5Metrics, { opacity: 0, y: 20 }, {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: s5Metrics[0], start: "top 85%" }
              });
            }
          }

          const s6 = document.querySelector("section:nth-of-type(6)");
          if (s6) {
            const s6Eyebrow = s6.querySelector(".mb-5.inline-flex");
            const s6TitleLines = s6.querySelectorAll(".s6-title-line");
            const s6Subtitle = s6.querySelector("p.max-w-2xl");
            const s6Ctas = s6.querySelector(".mt-8.flex.flex-col");
            const s6Bullets = s6.querySelector(".border-t.border-white\\/10");
            const s6DeployCard = s6.querySelector(".relative > .relative.overflow-hidden.rounded-\\[28px\\]");

            gsap.set(s6TitleLines, { yPercent: 100 });
            const s6Tl = gsap.timeline({ scrollTrigger: { trigger: s6, start: "top 75%" } });

            s6Tl.fromTo(s6Eyebrow, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
            .to(s6TitleLines, { yPercent: 0, duration: 0.9, stagger: 0.1, ease: "power4.out" }, "-=0.6")
            .fromTo(s6Subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

            if(s6Ctas) s6Tl.fromTo(s6Ctas.children, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");
            if(s6Bullets) s6Tl.fromTo(s6Bullets.children, { opacity: 0 }, { opacity: 1, duration: 0.6, stagger: 0.1 }, "-=0.2");

            if(s6DeployCard) {
              s6Tl.fromTo(s6DeployCard, { opacity: 0, y: 30, scale: 0.985 }, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }, "-=1.2");
              const s6DeployInner = s6DeployCard.querySelectorAll(".border-b, .grid.gap-4 > div");
              s6Tl.fromTo(s6DeployInner, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.6");
            }
          }

          const footer = document.querySelector("footer");
          if (footer) {
            const footerBrand = footer.querySelector(".max-w-sm");
            const footerCols = footer.querySelectorAll(".grid-cols-1 > div:not(.max-w-sm)");
            const footerBottom = footer.querySelector(".mt-12.flex");

            const fTl = gsap.timeline({ scrollTrigger: { trigger: footer, start: "top 90%" } });
            if(footerBrand) fTl.fromTo(footerBrand, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
            if(footerCols.length) fTl.fromTo(footerCols, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.6");
            if(footerBottom) fTl.fromTo(footerBottom, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.2");
          }

        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav aria-label="Primary" className="fixed top-5 left-1/2 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2">
<div className="flex md:px-3 bg-[rgba(245,245,242,0.78)] h-16 border-black/10 border rounded-2xl pr-4 pl-4 relative shadow-[0_10px_40px_rgba(10,10,10,0.08)] backdrop-blur-xl items-center justify-between">
<div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/40"></div>

<a className="z-10 flex shrink-0 items-center gap-3 relative" href="#">
<div className="flex overflow-hidden w-9 h-9 border rounded-xl relative items-center justify-center">
<img alt="Company Logo" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dc9be9a-4299-4169-8e32-a5372eb0b0be_320w.jpg"/>
</div>
<div className="flex flex-col leading-none">
<span className="text-[1.6rem] leading-none text-[#0A0A0A] tracking-[0.04em] font-display" onclick="window.location.href='/home'" role="button">
              DevRel Talent
            </span>
<span className="-mt-0.5 hidden text-[10px] uppercase sm:block text-[#6B7280] tracking-[0.18em]">
              Developer Tools Hiring
            </span>
</div>
</a>

<div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
<a className="text-[11px] uppercase transition-colors hover:text-[#0A0A0A] text-[#6B7280] tracking-[0.16em]" href="#reviews">
            Reviews
          </a>
<a className="text-[11px] uppercase transition-colors hover:text-[#0A0A0A] text-[#6B7280] tracking-[0.16em]" href="#hiring">
            Hiring Focus
          </a>
<a className="text-[11px] uppercase transition-colors hover:text-[#0A0A0A] text-[#6B7280] tracking-[0.16em]" href="#"></a>
</div>

<div className="relative z-10 flex shrink-0 items-center gap-2 md:gap-3">
<a className="hidden text-[11px] uppercase transition-colors hover:text-[#0A0A0A] md:inline-flex text-[#6B7280] tracking-[0.16em]" href="https://join.slack.com/t/devrel-talent/shared_invite/zt-2kxur1u5c-SX5MbEIShobdtjXur3GDzg">
            Join Community
          </a>
<a className="inline-flex items-center justify-center text-[11px] uppercase transition-all hover:bg-[#17202B] hover:shadow-[0_0_0_1px_rgba(77,163,255,0.22),0_8px_24px_rgba(77,163,255,0.12)] md:px-5 text-[#F5F5F2] tracking-[0.16em] bg-blue-500 h-10 border-[#1A2130] border rounded-xl pr-4 pl-4" href="https://calendly.com/devreltalent/intro">
            Start Hiring
          </a>
</div>
</div>
</nav>
<main className="">

<section className="overflow-hidden md:pt-36 md:pb-32 pt-32 pr-6 pb-28 pl-6 relative">

<div className="z-0 bg-zinc-50 absolute top-0 right-0 bottom-0 left-0">
<div className="hero-globe-wrap motion-reduce:hidden">
<video autoplay="" className="h-full w-full object-cover opacity-50" loop="" muted="" playsinline="" src="https://pikaso.cdnpk.net/private/production/3711440833/be67b1ba-c989-4116-885c-a99674587bc1-0.mp4?token=exp=1774742400~hmac=f413251da710ad522bf066b29ee91b077aa47273de7a5e9a2f695aff6e16b84e" style={{maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)', WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'}}></video>
</div>
<div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.47]"></div>
<div className="hero-top-fade"></div>
<div className="hero-radial-overlay absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(760px 460px at 50% 32%, rgba(59, 130, 246, 0.22), transparent 56%), radial-gradient(560px 320px at 50% 38%, rgba(37, 99, 235, 0.12), transparent 62%), linear-gradient(to bottom, rgba(245, 245, 242, 0.08), rgba(245, 245, 242, 0.04) 36%, rgba(245, 245, 242, 0.16) 100%)', overflow: 'hidden', pointerEvents: 'none', zIndex: '1'}}>
<canvas className="absolute inset-0 w-full h-full opacity-90" height="544" id="wave-canvas-aura" width="2880"></canvas>

</div>
<div className="hero-bottom-fade"></div>
</div>
<div className="flex flex-col z-10 text-center w-full max-w-6xl mt-8 mr-auto ml-auto relative items-center">

<div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/10 bg-[rgba(255,255,255,0.68)] px-3.5 py-1.5 shadow-[0_8px_24px_rgba(10,10,10,0.04)] backdrop-blur-md">
<span className="relative flex h-2.5 w-2.5 items-center justify-center">
<span className="absolute inline-flex h-full w-full rounded-full bg-[#4DA3FF]/25 animate-ping"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-[#4DA3FF]"></span>
</span>
<span className="text-[11px] uppercase text-[#5E6673] tracking-[0.16em]">
              Developer Relations | developer marketing | developer community
            </span>
</div>

<h1 className="font-display text-[3.55rem] uppercase leading-[0.88] tracking-[0.005em] text-[#0A0A0A] sm:text-[4.5rem] md:text-[5.6rem] lg:text-[6.3rem]">
<span className="block overflow-hidden pb-1">
<span className="block hero-title-line">The #1 Hiring pARTNER</span>
</span>
<span className="block overflow-hidden pb-1">
<span className="block hero-title-line">for Developer TOOLS</span>
</span>
<span className="block overflow-hidden pb-1">
<span className="block hero-title-line">Companies</span>
</span>
</h1>


<div className="flex flex-col gap-4 sm:flex-row w-full mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="inline-flex min-w-[180px] items-center justify-center text-[11px] uppercase transition-all hover:bg-[#17202B] hover:shadow-[0_0_0_1px_rgba(77,163,255,0.22),0_8px_24px_rgba(77,163,255,0.12)] text-[#F5F5F2] tracking-[0.16em] bg-blue-500 h-11 border-[#1A2130] border rounded-xl pr-6 pl-6" href="https://calendly.com/devreltalent/intro">
              Start Hiring
            </a>
<a className="inline-flex min-w-[220px] items-center justify-center gap-2 text-[11px] uppercase transition-all hover:bg-white text-[#4F5661] tracking-[0.16em] bg-slate-50 h-11 border-black/10 border rounded-xl pr-6 pl-6 shadow-[0_8px_24px_rgba(10,10,10,0.04)] backdrop-blur-md" href="#case-study">
              Read case study
            </a>
</div>

</div>
</section>

<section className="overflow-hidden bg-[#F5F5F2] relative" id="hiring">

<div className="overflow-hidden z-20 bg-[#F5F5F2] w-full border-black/5 border-b pt-8 pr-0 pb-8 relative">
<div className="flex flex-col md:flex-row md:gap-6 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center">
<p className="text-[10px] uppercase whitespace-nowrap z-10 shrink-0 font-medium text-[#6B7280] tracking-[0.18em]">
              Trusted by THE FOUNDERS OF:
            </p>
<div className="flex-1 overflow-hidden relative w-full" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'}}>
<style className="">
                @keyframes scroll-marquee { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }
              </style>
<div className="flex opacity-70 w-max items-center" style={{animation: 'scroll-marquee 40s linear infinite'}}>


<div className="grid grid-rows-2 grid-flow-col md:gap-14 md:pr-14 flex-shrink-0 pr-14 gap-x-10 gap-y-10 items-center">
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca349bf-bbd1-469d-b145-a625e3e8b29a_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Qdrant
                    </span>
</div>
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff40a5fa-33a9-4a41-8ccf-fba71e1aeb6c_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Arize AI
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d16cba75-c4a6-4254-81ca-01bcd3792d47_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Superlinked
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97dc2a3d-b7c0-485e-a333-37c1fc8f11be_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Kilo Code
                    </span>
</div>
<div className="flex gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="flex flex-shrink-0 overflow-hidden bg-white w-8 h-8 border-black/10 border rounded-md shadow-sm gap-x-10 gap-y-10 items-center justify-center">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd792867-127e-4b1a-8b4e-a18a43cb7152_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Tavus
                    </span>
</div>
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="flex flex-shrink-0 overflow-hidden bg-white w-8 h-8 border-black/10 border rounded-md shadow-sm gap-x-10 gap-y-10 items-center justify-center">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/505dd611-5ffa-4fa8-9509-eb306703af94_320w.png)] bg-cover rounded-[4px] gap-x-10 gap-y-10"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      MUI
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a1c282e-e5e2-4b41-a798-68c33a635ef5_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Mintlify
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36caca0e-fac8-4ba0-9e3f-abd7443909ce_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Jentic
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abee80b1-1b8c-4c6d-9ae0-01fc879468a7_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      AG Grid
                    </span>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b9c70ec-106a-45f1-8c6b-ec67be447651_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Rootly
                    </span>
</div>
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca349bf-bbd1-469d-b145-a625e3e8b29a_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Qdrant
                    </span>
</div>
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff40a5fa-33a9-4a41-8ccf-fba71e1aeb6c_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Arize AI
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d16cba75-c4a6-4254-81ca-01bcd3792d47_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Superlinked
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97dc2a3d-b7c0-485e-a333-37c1fc8f11be_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Kilo Code
                    </span>
</div>
<div className="flex gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="flex flex-shrink-0 overflow-hidden bg-white w-8 h-8 border-black/10 border rounded-md shadow-sm gap-x-10 gap-y-10 items-center justify-center">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd792867-127e-4b1a-8b4e-a18a43cb7152_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Tavus
                    </span>
</div>
<div className="flex gap-3 gap-x-10 gap-y-10 items-center" style={{filter: 'blur(0px)'}}>
<div className="flex flex-shrink-0 overflow-hidden bg-white w-8 h-8 border-black/10 border rounded-md shadow-sm gap-x-10 gap-y-10 items-center justify-center">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/505dd611-5ffa-4fa8-9509-eb306703af94_320w.png)] bg-cover rounded-[4px] gap-x-10 gap-y-10"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      MUI
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a1c282e-e5e2-4b41-a798-68c33a635ef5_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Mintlify
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-[#0A0A0A] w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36caca0e-fac8-4ba0-9e3f-abd7443909ce_320w.jpg)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Jentic
                    </span>
</div>
<div className="flex items-center gap-3" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abee80b1-1b8c-4c6d-9ae0-01fc879468a7_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      AG Grid
                    </span>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center" style={{filter: 'blur(0px)'}}>
<div className="w-8 h-8 bg-white border border-black/10 rounded-md shadow-sm flex items-center justify-center flex-shrink-0 overflow-hidden">
<div className="bg-center bg-stone-50 w-4 h-4 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b9c70ec-106a-45f1-8c6b-ec67be447651_320w.png)] bg-cover rounded-[4px]"></div>
</div>
<span className="text-lg font-medium text-[#0A0A0A] tracking-tight">
                      Rootly
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="md:py-32 w-full pt-28 pr-6 pb-28 pl-6 relative">

<div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.18]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#F5F5F2] to-transparent"></div>
<div className="md:px-4 w-full max-w-[88rem] mr-auto ml-auto pr-2 pl-2 relative">
<style className="">
              @keyframes dvd-bounce-x {
                0% { left: 0%; }
                100% { left: calc(100% - var(--w)); }
              }
              @keyframes dvd-bounce-y {
                0% { top: 0%; }
                100% { top: calc(100% - var(--h)); }
              }
              .dvd-bounce {
                animation-name: dvd-bounce-x, dvd-bounce-y;
                animation-timing-function: linear, linear;
                animation-iteration-count: infinite, infinite;
                animation-direction: alternate, alternate;
                animation-duration: var(--dx, 4s), var(--dy, 5s);
                animation-delay: var(--delx, 0s), var(--dely, 0s);
                position: absolute;
                margin: 0 !important;
              }
              .group:hover .dvd-bounce {
                animation-play-state: paused;
              }
            </style>

<div className="mx-auto mb-20 max-w-4xl text-center md:mb-24">
<h2 className="font-display text-[3rem] uppercase leading-[0.9] tracking-tight text-[#0A0A0A] sm:text-[4rem] md:text-[5rem]">
<span className="block overflow-hidden pb-1">
<span className="block s2-title-line">tURNING TRACTION INTO</span>
</span>
<span className="block overflow-hidden pb-1">
<span className="block s2-title-line">rEAL growth</span>
</span>
</h2>
<p className="text-[1.02rem] leading-7 md:text-[1.1rem] text-[#5F6672] max-w-4xl mt-6 mr-auto ml-auto">
                We help developer tools companies make their most critical hires
                across Developer Relations, Developer Marketing, and Developer
                Community. These are often founding or first-of-their-kind
                roles—responsible for shaping how developers discover, adopt,
                and advocate for a product. By focusing on these hires early, we
                help teams build momentum that scales
              </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-y-0 max-w-6xl mr-auto ml-auto gap-x-y-16 gap-y-16">

<div className="lg:border-r lg:border-black/8 lg:pr-8 relative fast-reveal-override" id="hiring-card" style={{filter: 'blur(0px)'}}>
<div className="group flex flex-col overflow-hidden border-y sm:rounded-xl sm:border bg-white h-[18rem] border-black/8 mb-8 relative items-center justify-center cursor-pointer transition-all duration-500 hover:border-black/15" style={{backgroundImage: 'linear-gradient(to right, rgba(10,10,10,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.035) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none z-0"></div>
<div className="flex z-10 w-full h-full relative items-center justify-center" data-bouncing-initialized="true">

<div className="transform group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-700 ease-out flex z-20 dvd-bounce bg-white/70 w-14 h-14 border-white border rounded-2xl mt-0 mr-0 mb-0 ml-0 absolute shadow-[0_12px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl rotate-[12deg] items-center justify-center" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '8s', -Dy: '13s', -Delx: '-2s', -Dely: '-1s', animationPlayState: 'running !important'}}>
<svg className="w-7 h-7 text-slate-400/70" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M11.66 4.34c-1.3-1.3-3.41-1.3-4.71 0-2.43 2.42-3.8 6.45-2.2 9.4 1.25 2.27 3.59 4.26 6.9 4.26s5.66-1.99 6.9-4.26c1.6-2.95.23-6.98-2.2-9.4-1.29-1.3-3.4-1.3-4.69 0z"></path>
<circle cx="12" cy="14" r="3"></circle>
</svg>
</div>
<div className="group-hover:bg-blue-400/10 transition-colors duration-700 dvd-bounce bg-blue-400/5 w-40 h-40 rounded-full absolute blur-2xl" style={{-W: '10rem', -H: '10rem', -Dx: '16s', -Dy: '12s', -Delx: '0s', -Dely: '0s', animationPlayState: 'running !important'}}></div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-10deg] group-hover:rotate-[-5deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '11s', -Dy: '9s', -Delx: '-5s', -Dely: '-3s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="mdi:youtube"></iconify-icon>
</div>

<div className="transform group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 ease-out flex z-20 dvd-bounce bg-white/70 w-12 h-12 border-white border rounded-2xl mt-0 mr-0 mb-0 ml-0 absolute shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl rotate-[8deg] items-center justify-center" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '14s', -Dy: '10s', -Delx: '-1s', -Dely: '-7s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:file-text"></iconify-icon>
</div>

<div className="transform group-hover:rotate-[-20deg] group-hover:scale-110 transition-transform duration-700 ease-out flex z-20 dvd-bounce bg-white/70 w-12 h-12 border-white border rounded-2xl mt-0 mr-0 mb-0 ml-0 absolute shadow-[0_8px_24px_rgba(0,0,0,0.04)] backdrop-blur-xl rotate-[-15deg] items-center justify-center" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '9s', -Dy: '15s', -Delx: '-8s', -Dely: '-4s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:layout"></iconify-icon>
</div>

<div className="transform group-hover:rotate-[0deg] group-hover:scale-110 transition-transform duration-700 ease-out flex dvd-bounce bg-white/70 w-14 h-14 z-20 border-white border rounded-2xl mt-0 mr-0 mb-0 ml-0 absolute shadow-[0_12px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl rotate-[5deg] items-center justify-center" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '12s', -Dy: '11s', -Delx: '-4s', -Dely: '-6s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-[22px]" icon="lucide:mic"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[5deg] group-hover:rotate-[12deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '10s', -Dy: '14s', -Delx: '-6s', -Dely: '-2s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-xl text-slate-400/70" height="20" icon="lucide:message-square" style={{color: 'rgb(148, 163, 184)'}} width="20"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-[1.90rem] uppercase leading-[0.92] text-[#0A0A0A] tracking-tight font-display mb-4">
                  Developer Relations
                </h3>
<p className="leading-relaxed text-base text-[#5F6672] pr-4">
                  Focuses on technical education and product adoption. These
                  roles ensure developers have the tools, documentation, and
                  support they need to build successfully.
                </p>
<div className="border-black/5 border-t mt-6 pt-5 pr-4">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                    Example job titles (IC):
                  </span>
<ul className="space-y-2">
<li className="flex items-center gap-2.5 text-sm text-[#5F6672]">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Head of Developer Relations
                    </li>
<li className="flex items-center gap-2.5 text-sm text-[#5F6672]">
<span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Developer Advocate
                    </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Developer Relations Engineer
                    </li>
</ul>
<div className="mt-6">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                      Example job titles (Leadership):
                    </span>
<ul className="space-y-2">
<li className="flex items-center gap-2.5 text-sm text-[#5F6672]">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Head of Developer Relations
                      </li>
<li className="flex items-center gap-2.5 text-sm text-[#5F6672]">
<span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        VP Developer Relations
                      </li>
<li className="flex items-center gap-2.5 text-sm text-[#5F6672]">
<span className="h-1.5 w-1.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Director of Developer Relations
                      </li>
</ul>
</div>
</div>
</div>

<div className="lg:border-r lg:border-black/8 lg:px-8 relative fast-reveal-override" style={{filter: 'blur(0px)'}}>
<div className="group relative mb-8 flex h-[18rem] flex-col items-center justify-center overflow-hidden border-y border-black/8 bg-white sm:rounded-xl sm:border cursor-pointer transition-all duration-300 hover:border-black/15" style={{backgroundImage: 'linear-gradient(to right, rgba(10,10,10,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.035) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-white/90 pointer-events-none z-0"></div>
<div className="flex z-10 w-full h-full relative items-center justify-center">
<style>
                      .fast-reveal-override {
                        opacity: 1 !important;
                        transform: translate(0, 0) scale(1) !important;
                        filter: blur(0px) !important;
                        transition: opacity 0.2s ease-out, transform 0.2s ease-out, filter 0.2s ease-out !important;
                      }
                      .fast-reveal-override-title {
                        transform: translate(0, 0) rotate(0) !important;
                        opacity: 1 !important;
                        filter: blur(0px) !important;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                      }
                    </style>


<div className="group-hover:bg-blue-400/10 transition-colors duration-300 dvd-bounce bg-blue-400/5 w-48 h-48 rounded-full absolute blur-3xl" style={{-W: '12rem', -H: '12rem', -Dx: '12s', -Dy: '9s', -Delx: '0s', -Dely: '0s', animationPlayState: 'running !important'}}>
<style>
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:mail"] { color: #3b82f6 !important; }
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:newspaper"] { color: #8b5cf6 !important; }
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:message-circle"] { color: #ec4899 !important; }
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:dollar-sign"] { color: #10b981 !important; }
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:megaphone"] { color: #f59e0b !important; }
                        [data-element-id="aura-emntc1szc1kirh60x"] ~ div iconify-icon[icon="lucide:linkedin"] { color: #0ea5e9 !important; }
                      </style>
</div>

<div className="absolute m-0 w-14 h-14 bg-white/70 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-10deg] group-hover:rotate-[-18deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '6s', -Dy: '8s', -Delx: '-1s', -Dely: '-2s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-[22px]" icon="lucide:mail"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[12deg] group-hover:rotate-[8deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '8s', -Dy: '6s', -Delx: '-4s', -Dely: '-1s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:newspaper"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-5deg] group-hover:rotate-[5deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '7s', -Dy: '10s', -Delx: '-3s', -Dely: '-6s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:message-circle"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[15deg] group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '9s', -Dy: '7s', -Delx: '-2s', -Dely: '-3s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:dollar-sign"></iconify-icon>
</div>

<div className="absolute m-0 w-14 h-14 bg-white/70 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[0deg] group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '7s', -Dy: '9s', -Delx: '-2s', -Dely: '-5s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-[22px]" icon="lucide:megaphone"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-8deg] group-hover:rotate-[10deg] group-hover:scale-110 transition-transform duration-300 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '10s', -Dy: '6s', -Delx: '-5s', -Dely: '-7s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-slate-400/70 text-xl" icon="lucide:linkedin"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-[1.90rem] uppercase leading-[0.92] text-[#0A0A0A] tracking-tight font-display mb-4">
                  Developer Marketing
                </h3>
<p className="leading-relaxed text-base text-[#5F6672] pr-4">
                  Focuses on the unqiue strategies and playbooks to capture a
                  developer's attention without them feeling like they are being
                  sold to.
                </p>
<div className="border-black/5 border-t mt-6 pt-5 pr-4">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                    Example job titles (IC):
                  </span>
<ul className="space-y-2">
<li className="flex text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Content Marketing Manager
                    </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Product Marketing Manager
                    </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Growth Marketing Manager
                    </li>
</ul>
<div className="mt-6">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                      Example job titles (Leadership):
                    </span>
<ul className="space-y-2">
<li className="flex text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Head of Marketing
                      </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        VP Marketing
                      </li>
<li className="flex text-sm text-[#5F6672] gap-x-2.5 gap-y-2.5 items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Director of Marketing
                      </li>
</ul>
</div>
</div>
</div>

<div className="lg:pl-8 relative fast-reveal-override" style={{filter: 'blur(0px)'}}>
<div className="group flex overflow-hidden border-y sm:rounded-xl sm:border cursor-pointer transition-all duration-500 hover:border-black/15 bg-white h-[18rem] border-black/8 mb-8 relative items-center justify-center" style={{backgroundImage: 'linear-gradient(to right, rgba(10,10,10,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,10,10,0.035) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent,rgba(255,255,255,0.8))] pointer-events-none z-0"></div>
<div className="flex z-10 w-full h-full relative items-center justify-center" data-bouncing-initialized="true">

<div className="group-hover:bg-[#94a3b8]/10 transition-colors duration-700 dvd-bounce w-40 h-40 rounded-full absolute blur-2xl" style={{-W: '10rem', -H: '10rem', -Dx: '16s', -Dy: '12s', -Delx: '0s', -Dely: '0s', animationPlayState: 'running !important'}}></div>

<div className="absolute m-0 w-14 h-14 bg-white/70 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[12deg] group-hover:rotate-[20deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '8s', -Dy: '13s', -Delx: '-2s', -Dely: '-1s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-[#94a3b8] text-[22px]" icon="tabler:brand-slack"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-10deg] group-hover:rotate-[-5deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '11s', -Dy: '9s', -Delx: '-5s', -Dely: '-3s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-[#94a3b8] text-xl" icon="ri:twitter-x-fill"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[8deg] group-hover:rotate-[15deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '14s', -Dy: '10s', -Delx: '-1s', -Dely: '-7s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-[#94a3b8] text-xl" icon="simple-icons:reddit"></iconify-icon>
</div>

<div className="absolute m-0 w-12 h-12 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[-15deg] group-hover:rotate-[-20deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="48" data-w="48" style={{-W: '48px', -H: '48px', -Dx: '9s', -Dy: '15s', -Delx: '-8s', -Dely: '-4s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-[#94a3b8] text-[22px]" icon="tabler:brand-discord"></iconify-icon>
</div>

<div className="absolute m-0 w-14 h-14 bg-white/70 backdrop-blur-xl border border-white shadow-[0_12px_32px_rgba(0,0,0,0.04)] rounded-2xl transform rotate-[5deg] group-hover:rotate-[0deg] group-hover:scale-110 transition-transform duration-700 ease-out flex items-center justify-center z-20 dvd-bounce" data-h="56" data-w="56" style={{-W: '56px', -H: '56px', -Dx: '12s', -Dy: '11s', -Delx: '-4s', -Dely: '-6s', animationPlayState: 'running !important'}}>
<iconify-icon className="text-[#94a3b8] text-[22px]" icon="lucide:calendar-days"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-[1.90rem] uppercase leading-[0.92] text-[#0A0A0A] tracking-tight font-display mb-4">
                  developer community
                </h3>
<p className="leading-relaxed text-base text-[#5F6672] pr-4">
                  Focuses on the spaces where your users interact. This role
                  facilitates peer-to-peer support and keeps the human
                  connection alive within your technical user base.
                </p>
<div className="border-black/5 border-t mt-6 pt-5 pr-4">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                    Example job titles:
                  </span>
<ul className="space-y-2">
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Community Manager
                    </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Head of Community
                    </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                      Community Lead
                    </li>
</ul>
<div className="mt-6">
<span className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-3">
                      Example job titles (Leadership):
                    </span>
<ul className="space-y-2">
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Head of Community
                      </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        VP of Community
                      </li>
<li className="flex gap-2.5 text-sm text-[#5F6672] items-center">
<span className="h-1.5 w-1.5 bg-[#4DA3FF] rounded-full shadow-[0_0_8px_rgba(77,163,255,0.4)]"></span>
                        Director of Community
                      </li>
</ul>
</div>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="overflow-hidden md:py-32 bg-[#10141B] pt-28 pr-6 pb-28 pl-6 relative">

<div className="pointer-events-none absolute inset-0 bg-grid-pattern-dark opacity-[0.18]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C1016] to-transparent"></div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#10141B] to-transparent"></div>
<div className="md:px-4 w-full max-w-[88rem] mr-auto ml-auto pr-2 pl-2 relative">

<div className="md:mb-20 max-w-full mb-16">
<h2 className="font-display text-[3rem] uppercase leading-[0.9] tracking-[0.01em] text-white sm:text-[4rem] md:text-[5rem]">
<span className="block overflow-hidden pb-2">
<span className="block s3-title-line text-center">
                  Our COMMUNITY LED APPROACH
                </span>
</span>
<span className="block overflow-hidden pb-2"></span>
</h2>
<p className="text-[1.02rem] leading-7 md:text-[1.1rem] text-white/55 text-center max-w-6xl mt-6 mx-auto">
              Developer relations, developer marketing, and developer
              communities are small, highly connected worlds where reputation
              travels fast and trust matters. That’s why we focus on
              relationships first. Staying active in communities, leaning on
              trusted referrals, and having ongoing conversations with people
              who are already shaping these ecosystems. When needed, we add
              targeted sourcing to reach specific profiles, but the foundation
              is always the same: who do we know already &gt; who do they know
              &gt; who can we source
            </p>
</div>

<div className="grid grid-cols-1 gap-4 md:grid-cols-4">

<div className="group relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 bg-[#0C1016] p-6 transition-colors duration-300 hover:border-white/20 md:col-span-2 md:row-span-2">
<div className="transition-opacity duration-700 group-hover:opacity-100 opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<canvas className="pointer-events-none absolute inset-0 z-[1] h-full w-full" height="477" id="strata-globe-canvas" width="1005"></canvas>
<div className="relative z-10 mb-8 flex items-start justify-between">
<span className="text-[10px] uppercase text-white/45 tracking-[0.14em]">
                  40% of our hires come from:
                </span>
<span className="text-xs text-[#8FC4FF] font-mono"></span>
</div>
<div className="z-10 max-w-sm mt-auto relative">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white backdrop-blur-sm transition-colors group-hover:border-[#4DA3FF]/30">
<iconify-icon className="" height="20" icon="solar:earth-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<h3 className="text-[2rem] uppercase leading-[0.92] text-white tracking-[0.01em] font-display mb-2">
                  Community Driven Hiring
                </h3>
<p className="leading-relaxed text-sm text-white/55">
                  We find candidates through global communities
                </p>
</div>

</div>

<div className="group flex flex-col transition-colors duration-300 hover:border-white/20 md:col-span-2 bg-[#0C1016] border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="mb-6 flex items-start justify-between">
<span className="text-[10px] uppercase text-white/45 tracking-[0.14em]">
                  30% of our hires come from:
                </span>
<span className="text-xs text-white/35 font-mono"></span>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/80">
<iconify-icon className="" height="20" icon="solar:user-speak-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-[1.7rem] uppercase leading-[0.92] text-white tracking-[0.01em] font-display mb-2">
                    Network Referrals
                  </h3>
<p className="leading-relaxed text-sm text-white/55">
                    We find candidates through our close network of mutual
                    connections
                  </p>
</div>
</div>
</div>

<div className="group flex flex-col transition-colors duration-300 hover:border-white/20 md:col-span-2 bg-[#0C1016] border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex mb-6 items-start justify-between">
<span className="text-[10px] uppercase text-white/45 tracking-[0.14em]">
                  30% of our hires come from
                </span>
</div>
<div className="flex items-start gap-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-white/80">
<iconify-icon className="" height="20" icon="solar:magnifer-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</div>
<div className="">
<h3 className="text-[1.7rem] uppercase leading-[0.92] text-white tracking-[0.01em] font-display mb-2">
                    Talent Sourcing
                  </h3>
<p className="leading-relaxed text-sm text-white/55">
                    We find candidates through headhunting on every platform
                  </p>
</div>
</div>
</div>

<div className="group flex flex-col gap-8 transition-colors duration-300 hover:border-white/20 md:col-span-4 md:flex-row md:p-8 bg-[#0C1016] border-white/10 border rounded-xl mt-2 pt-6 pr-6 pb-6 pl-6 gap-x-8 gap-y-8 justify-between">
<div className="md:w-1/2">
<span className="block text-[10px] uppercase text-white/45 tracking-[0.14em] mb-4"></span>
<h3 className="text-[2rem] uppercase leading-[0.92] md:text-[2.4rem] text-white tracking-[0.01em] font-display">
                  The Results
                </h3>
<p className="leading-relaxed text-sm text-white/55 max-w-md mt-4">
                  A pipeline that is built on active community referrals and
                  long-standing industry relationships, connecting you with
                  talent that isn't looking at job boards or replying to cold
                  messages.
                </p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="text-[10px] uppercase text-white/55 tracking-[0.14em] border-blue-500 border rounded-full pt-1 pr-3 pb-1 pl-3">
                    Global Talent pool
                  </span>
<span className="text-[10px] uppercase text-white/55 tracking-[0.14em] border-blue-500 border rounded-full pt-1 pr-3 pb-1 pl-3">
                    Extensive relationships
                  </span>
<span className="text-[10px] uppercase text-white/55 tracking-[0.14em] border-blue-500 border rounded-full pt-1 pr-3 pb-1 pl-3">
                    DIVERSE PIPELINES
                  </span>
</div>
</div>
<div className="md:w-[32rem] w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full gap-x-4 gap-y-4">
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition-colors hover:bg-white/[0.05]">
<div className="text-[10px] uppercase text-blue-500 tracking-[0.16em]">
                      Companies worked with
                    </div>
<div className="text-[2.5rem] uppercase leading-none text-white tracking-[0.01em] font-display mt-3">
<span id="counter-aura-emnvymjfe1z0mkxyg">0</span>
                      +
                      
</div>
<p className="leading-relaxed text-xs text-white/55 mt-2">
                      Active partners
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition-colors hover:bg-white/[0.05]">
<div className="text-[10px] uppercase text-blue-500 tracking-[0.16em]">
                      Global talent pool
                    </div>
<div className="text-[2.5rem] uppercase leading-none text-white tracking-[0.01em] font-display mt-3" data-comma="true" data-suffix="+" data-target="10000">
<span className="" id="counter-aura-emnvyqpte0ptqkg9">0</span>
                      +
                      
</div>
<p className="leading-relaxed text-xs text-white/55 mt-2">
                      Worldwide
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition-colors hover:bg-white/[0.05]">
<div className="text-[10px] uppercase text-blue-500 tracking-[0.16em]">
                      Time to hire
                    </div>
<div className="text-[2.5rem] uppercase leading-none text-white tracking-[0.01em] font-display mt-3">
<span id="counter-aura-emnvz43ew1bek1jp">0</span>
                      weeks
                      
</div>
<p className="leading-relaxed text-xs text-white/55 mt-2">
                      Average placement
                    </p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition-colors hover:bg-white/[0.05]">
<div className="text-[10px] uppercase text-blue-500 tracking-[0.16em]">
                      Success rate
                    </div>
<div className="text-[2.5rem] uppercase leading-none text-white tracking-[0.01em] font-display mt-3">
<span id="counter-aura-emnvzxe8k2el2bzw">0</span>
                      %
                      
</div>
<p className="leading-relaxed text-xs text-white/55 mt-2">
                      Candidates pass probation
                    </p>
</div>

</div>

</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden md:py-32 pt-28 pr-6 pb-28 pl-6 relative">
<style>
          .proof-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          }

          .proof-marquee-track {
            display: flex;
            width: max-content;
            animation: proof-marquee 22s linear infinite;
          }

          @keyframes proof-marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }
        </style>
<div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.14]"></div>
<div className="md:px-4 w-full max-w-[88rem] mr-auto ml-auto pr-2 pl-2 relative">

<div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 gap-x-8 gap-y-8 items-start" id="reviews">
<div className="max-w-3xl">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 shadow-[0_8px_24px_rgba(10,10,10,0.04)] backdrop-blur-md">
<span className="h-2 w-2 rounded-full bg-[#4DA3FF] shadow-[0_0_12px_rgba(77,163,255,0.35)]"></span>
<span className="text-[10px] uppercase text-[#6B7280] tracking-[0.18em]">
                  Customer reviews
                </span>
</div>
<h2 className="font-display text-[3rem] uppercase leading-[0.9] tracking-[0.01em] text-[#0A0A0A] sm:text-[4rem] md:text-[5rem]">
<span className="block overflow-hidden pb-1">
<span className="block s5-title-line">
                    Recommended by founders &amp; leaders
                  </span>
</span>
<span className="block overflow-hidden pb-1"></span>
</h2>
<p className="text-[1.02rem] leading-7 md:text-[1.1rem] text-[#5F6672] max-w-2xl mt-6">
                Our reputation is built on the word-of-mouth of founders and
                technical leadership who have been in the trenches. We don't
                just fill roles; we become a trusted extension of the founding
                team, helping the industry's most ambitious companies scale.
              </p>
</div>

<div className="overflow-hidden border-[#4DA3FF]/18 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_16px_40px_rgba(10,10,10,0.06)]">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(77,163,255,0.12),transparent_36%)]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(77,163,255,0.45),transparent)]"></div>
<div className="relative z-10 mb-5 flex items-center gap-3">
<div className="flex text-[#4DA3FF] bg-[#F4F8FF] w-11 h-11 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddf1c6ca-e7db-423e-9f30-aa984e354db0_320w.jpg)] bg-cover bg-center border-[#4DA3FF]/18 border rounded-xl shadow-[0_6px_16px_rgba(77,163,255,0.08)] items-center justify-center"></div>
<div className="">
<div className="text-[10px] uppercase text-[#8B919B] tracking-[0.16em]">
                    Customer feedback
                  </div>
<div className="text-sm font-medium text-[#171A1F] mt-1">
                    Kilo Code
                  </div>
</div>
</div>
<p className="text-[1.18rem] leading-8 text-[#1E232B] z-10 relative">
                Working with DevRel Talent was a game-changer for Kilo Code.
                They built our hiring engine and process from scratch, then
                executed at “Kilo Speed” every step of the way. From DevRel and
                Engineering to Marketing and Support, they made over 10 key
                hires for us. If you're building a dev tools company, they are
                the only hiring partner you need.
              </p>
<div className="z-10 flex flex-wrap gap-2 mt-6 relative gap-x-2 gap-y-2 items-center">
<span className="text-[10px] uppercase text-[#5F6672] tracking-[0.14em] bg-white/80 border-blue-500/16 border rounded-full pt-1 pr-3 pb-1 pl-3">
                  Agentic AI
                </span>
<span className="text-[10px] uppercase text-[#5F6672] tracking-[0.14em] bg-white/80 border-[#4DA3FF]/16 border rounded-full pt-1 pr-3 pb-1 pl-3">
                  Open Source
                </span>
<span className="text-[10px] uppercase text-[#5F6672] tracking-[0.14em] bg-white/80 border-[#4DA3FF]/16 border rounded-full pt-1 pr-3 pb-1 pl-3">
                  Series A
                </span>
</div>
<div className="z-10 border-black/8 border-t mt-6 pt-5 relative flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<div className="font-medium text-[#171A1F]">
                    Scott Breitenother
                  </div>
<div className="text-sm text-[#6B7280] mt-1">CEO</div>
</div>
</div>
</div>
</div>

<div className="mt-14 md:mt-16">
<div className="proof-mask overflow-hidden">
<div className="proof-marquee-track flex w-max" style={{gap: '0', animationDuration: '40s'}}>

<div className="flex gap-6 shrink-0 pr-6 gap-x-6 gap-y-6">
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      Devrel + Marketing at MUI
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      "The team at DevRel Talent are proactive, they quickly
                      adapted to our hiring workflow. They were able to source
                      quality candidates for a diverse set of roles, allowing us
                      to have a higher-quality applicant pool"
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Olivier Tassinari
                        </span>
<span className="text-xs text-[#5F6672]">CEO</span>
</div>
</div>
</article>
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      Devrel at Tavus
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “It was great working with DevRel Talent. Not only did we
                      quickly secure a Developer Relations person in our
                      industry, a tough role to find, it was easy to work with
                      them. Highly recommend working with them!"
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Julia Szatar
                        </span>
<span className="text-xs text-[#5F6672]">
                          VP of Marketing
                        </span>
</div>
</div>
</article>
<article className="flex min-h-[18rem] shrink-0 flex-col bg-white w-[280px] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      community at Toolhouse
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “DevRel Talent is fantastic in understanding needs the
                      needs of your company. They’re not just a recruiting firm
                      – they’re a partner to your success, because they can give
                      you the best advice that goes beyond hiring the right
                      candidates.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Daniele Bernardi
                        </span>
<span className="text-xs text-[#5F6672]">CEO</span>
</div>
</div>
</article>
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      DevRel at Qdrant
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “Owen is very results-driven and he understands his
                      customers. As a result, his suggested candidates are of
                      very high quality. All of the interviews with Owen's
                      candidates yielded promising results.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          David Myriel
                        </span>
<span className="text-xs text-[#5F6672]">VP of DevRel</span>
</div>
</div>
</article>
<article className="flex w-[280px] min-h-[18rem] shrink-0 flex-col rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      DevRel at Jentic
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      "Working with DevRel Talent was a smooth and efficient
                      experience—they quickly understood what we needed and
                      introduced us to top-tier candidates. We were particularly
                      impressed with the speed of the process"
                    </p>
<div className="flex gap-3 border-black/5 border-t mt-auto pt-5 gap-x-3 gap-y-3 items-center">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Dorothy Creavan
                        </span>
<span className="text-xs text-[#5F6672]">
                          COO &amp; CO-Founder
                        </span>
</div>
</div>
</article>
<article className="flex w-[280px] min-h-[18rem] shrink-0 flex-col rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      COMMUNITY AT ag grid
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “I found working with DevRel Talent to be a pleasure. They
                      kept us updated throughout the process, managed our
                      expectations, and provided data on the state of the market
                      to better inform our strategy.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          James Swinton-Bland
                        </span>
<span className="text-xs text-[#5F6672]">DevRel Lead</span>
</div>
</div>
</article>
</div>

<div className="flex gap-6 shrink-0 pr-6 gap-x-6 gap-y-6">
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      Devrel + Marketing at MUI
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      "The team at DevRel Talent are proactive, they quickly
                      adapted to our hiring workflow. They were able to source
                      quality candidates for a diverse set of roles, allowing us
                      to have a higher-quality applicant pool"
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Olivier Tassinari
                        </span>
<span className="text-xs text-[#5F6672]">CEO</span>
</div>
</div>
</article>
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      Devrel at Tavus
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “It was great working with DevRel Talent. Not only did we
                      quickly secure a Developer Relations person in our
                      industry, a tough role to find, it was easy to work with
                      them. Highly recommend working with them!"
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Julia Szatar
                        </span>
<span className="text-xs text-[#5F6672]">
                          VP of Marketing
                        </span>
</div>
</div>
</article>
<article className="flex min-h-[18rem] shrink-0 flex-col bg-white w-[280px] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      community at Toolhouse
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “DevRel Talent is fantastic in understanding needs the
                      needs of your company. They’re not just a recruiting firm
                      – they’re a partner to your success, because they can give
                      you the best advice that goes beyond hiring the right
                      candidates.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Daniele Bernardi
                        </span>
<span className="text-xs text-[#5F6672]">CEO</span>
</div>
</div>
</article>
<article className="flex shrink-0 flex-col bg-white w-[280px] min-h-[18rem] border-black/8 border rounded-3xl p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      DevRel at Qdrant
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “Owen is very results-driven and he understands his
                      customers. As a result, his suggested candidates are of
                      very high quality. All of the interviews with Owen's
                      candidates yielded promising results.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          David Myriel
                        </span>
<span className="text-xs text-[#5F6672]">VP of DevRel</span>
</div>
</div>
</article>
<article className="flex w-[280px] min-h-[18rem] shrink-0 flex-col rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      DevRel at Jentic
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      "Working with DevRel Talent was a smooth and efficient
                      experience—they quickly understood what we needed and
                      introduced us to top-tier candidates. We were particularly
                      impressed with the speed of the process"
                    </p>
<div className="flex gap-3 border-black/5 border-t mt-auto pt-5 gap-x-3 gap-y-3 items-center">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          Dorothy Creavan
                        </span>
<span className="text-xs text-[#5F6672]">
                          COO &amp; CO-Founder
                        </span>
</div>
</div>
</article>
<article className="flex w-[280px] min-h-[18rem] shrink-0 flex-col rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
<h3 className="text-[1.55rem] uppercase leading-[0.92] text-[#171A1F] tracking-[0.01em] font-display">
                      COMMUNITY AT ag grid
                    </h3>
<p className="leading-6 text-sm text-[#5F6672] mt-3 mb-6">
                      “I found working with DevRel Talent to be a pleasure. They
                      kept us updated throughout the process, managed our
                      expectations, and provided data on the state of the market
                      to better inform our strategy.”
                    </p>
<div className="mt-auto pt-5 border-t border-black/5 flex items-center gap-3">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-50 border border-black/5">
<iconify-icon className="text-[#5F6672] text-lg" icon="lucide:user"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#171A1F]">
                          James Swinton-Bland
                        </span>
<span className="text-xs text-[#5F6672]">DevRel Lead</span>
</div>
</div>
</article>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="overflow-hidden md:py-32 bg-[#10141B] pt-2 pr-6 pb-28 pl-6 relative" id="case-study">

<div className="pointer-events-none absolute inset-0 bg-grid-pattern-dark opacity-[0.16]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0C1016] to-transparent"></div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0F14] to-transparent"></div>
<div className="relative mx-auto w-full max-w-[88rem] px-2 md:px-4">
<div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#11161D] shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
<div className="grid grid-cols-1 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:px-14 lg:py-14 pt-10 pr-8 pb-10 pl-8 gap-x-10 gap-y-10" id="case">

<div className="relative">
<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 backdrop-blur-md">
<span className="h-2 w-2 rounded-full bg-[#4DA3FF] shadow-[0_0_12px_rgba(77,163,255,0.45)]"></span>
<span className="text-[10px] uppercase text-white/60 tracking-[0.18em]">
                    Case Study
                  </span>
</div>
<h2 className="font-display text-[3rem] uppercase leading-[0.9] tracking-[0.01em] text-white sm:text-[4rem] md:text-[5rem]">
<span className="block overflow-hidden pb-2">
<span className="block s6-title-line text-6xl text-left">
                      Building a devtools company from scratch
                    </span>
</span>
<span className="block overflow-hidden pb-2">
<span className="block s6-title-line text-6xl text-yellow-200">
                      Kilo Code
                    </span>
</span>
</h2>
<p className="text-[1.02rem] leading-7 md:text-[1.1rem] text-white/80 max-w-2xl mt-6">
                  When the founder of Gitlab wanted to build a new Agentic AI
                  company from scratch, he called DevRel Talent, and we
                  answered. We spent the last 12 months supporting Kilo Code to
                  build out their technical functions and hiring engine from
                  scratch. In that time Kilo Code has scaled to 35 employees,
                  1.5 million downloads, no.1 on Open Router, 3x Product hunt
                  features, 12 new features and a platform that developers love.
                </p>
<div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-8 gap-x-4 gap-y-4 items-start"></div>
<div className="flex flex-wrap border-white/10 border-t mt-8 pt-6 gap-y-3 items-center gap-x-3">
<div className="flex text-sm text-white/80 gap-x-2 gap-y-2 items-center">
                    Global Hiring
                    <span className="text-left bg-[#4DA3FF] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(77,163,255,0.4)]"></span>
</div>
<div className="flex gap-2 text-sm text-white/80 gap-x-2 gap-y-2 items-center">
                    5 Functions Built
                    <span className="bg-[#4DA3FF] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(77,163,255,0.4)]"></span>
</div>
<div className="flex text-sm text-white/80 gap-x-2 gap-y-2 items-center">
                    Developer Tools
                  </div>
<span className="bg-[#4DA3FF] w-2 h-2 rounded-full shadow-[0_0_10px_rgba(77,163,255,0.4)]"></span>
</div>
</div>

<div className="relative">
<div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0C1016] shadow-[0_18px_50px_rgba(0,0,0,0.24)]">

<div className="flex items-center justify-between border-b border-white/10 px-4 py-3 md:px-5">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-white/70"></span>
<span className="h-2.5 w-2.5 rounded-full bg-white/40"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#4DA3FF] shadow-[0_0_8px_rgba(77,163,255,0.5)]"></span>
</div>
<span className="text-[10px] uppercase text-white/40 tracking-[0.16em]">
                      DevRel.talent
                    </span>
</div>
<div className="grid gap-4 md:p-5 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">
<div className="border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<div className="text-[10px] uppercase text-xs text-white/40 tracking-[0.14em]">
                            Project
                          </div>
<div className="text-lg font-medium text-white tracking-tight mt-2">
                            Hiring from scratch: Open-Source Agentic AI start up
                          </div>
</div>
<span className="rounded-full border border-[#4DA3FF]/20 bg-[#4DA3FF]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[#8FC4FF]">
                          live
                        </span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="text-[10px] uppercase text-white/40 tracking-[0.14em]">
                          Locations
                        </div>
<div className="text-lg font-semibold text-white tracking-tight mt-2">
                          5 Countries
                        </div>
</div>
<div className="border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="text-[10px] uppercase text-white/40 tracking-[0.14em]">
                          Headcount
                        </div>
<div className="text-lg font-semibold text-white tracking-tight mt-2">
                          35 Employees
                        </div>
</div>
</div>
<div className="border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 gap-x-1">
<div className="mb-3 flex items-center justify-between">
<div className="text-[10px] uppercase text-white/40 tracking-[0.14em]">
                          Founding TEAMS BUILT IN
                        </div>
<div className="flex gap-2 text-[10px] uppercase text-[#8FC4FF] tracking-[0.14em] gap-x-2 gap-y-2 items-center">
                          100% SUCCESS RATE
                        </div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
<span className="text-sm text-white/80">
                            Developer Relations
                          </span>
<span className="text-[10px] uppercase text-green-500 tracking-[0.14em]">
                            HIRED
                          </span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
<span className="text-sm text-white/80">
                            Developer Marketing
                          </span>
<span className="text-[10px] uppercase text-green-500 tracking-[0.14em]">
                            HIRED
                          </span>
</div>
<div className="flex border-white/5 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3 items-center justify-between bg-white/[0.02]">
<span className="text-sm text-white/80">
                            Software Engineering
                          </span>
<span className="text-[10px] uppercase text-green-500 tracking-[0.14em]">
                            HIRED
                          </span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
<span className="text-sm text-white/80">
                            Technical Support
                          </span>
<span className="text-[10px] uppercase text-green-500 tracking-[0.14em]">
                            HIRED
                          </span>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2.5">
<span className="text-sm text-white/80">
                            Technical Sales
                          </span>
<span className="text-[10px] uppercase text-green-500 tracking-[0.14em]">
                            HIRED
                          </span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between px-2">
<div className="text-[10px] uppercase text-white/35 tracking-[0.16em]"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative flex flex-col">

<div className="relative overflow-hidden bg-zinc-50 px-6 py-16 md:py-24 border-t border-black/5">
<div className="-top-[20%] -bottom-[20%] z-0 absolute right-0 left-0">
<style>
              [data-element-id="aura-emog6lgubctcobhr"] ~ div {
                margin-top: 4rem !important;
                margin-bottom: 4rem !important;
              }
              @media (min-width: 768px) {
                [data-element-id="aura-emog6lgubctcobhr"] ~ div {
                  margin-top: 8rem !important;
                  margin-bottom: 8rem !important;
                }
              }
            </style>
<div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-[0.47]"></div>
<div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-[1]" style={{background: 'radial-gradient(760px 460px at 50% 32%, rgba(77, 163, 255, 0.22), transparent 56%), radial-gradient(560px 320px at 50% 38%, rgba(77, 163, 255, 0.12), transparent 62%), linear-gradient(to bottom, rgba(245, 245, 242, 0.08), rgba(245, 245, 242, 0.04) 36%, rgba(245, 245, 242, 0.16) 100%)'}}></div>

<div className="hidden lg:flex absolute lg:left-4 xl:left-[calc(50%-520px)] top-1/2 -translate-y-1/2 flex-col z-20 transform transition-transform duration-500 hover:border-black/15 pointer-events-auto bg-white/70 w-[260px] border-black/8 border rounded-3xl p-6 shadow-[0_16px_40px_rgba(10,10,10,0.06)] backdrop-blur-xl">
<div className="flex items-center gap-3 mb-4">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-slate-50 text-blue-500 shadow-sm">
<iconify-icon className="text-2xl" icon="simple-icons:calendly"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-[#8B919B] tracking-[0.16em]">
                    Calendly
                  </span>
<span className="text-sm font-semibold text-[#171A1F] mt-0.5">
                    Discovery Call
                  </span>
</div>
</div>
<p className="leading-relaxed text-sm text-[#5F6672] mb-5">
                Book a quick 15-minute sync with our team to discuss your hiring
                roadmap.
              </p>
<div className="flex w-full justify-end"></div>
</div>

<div className="hidden lg:flex absolute lg:right-4 xl:right-[calc(50%-520px)] top-1/2 -translate-y-1/2 w-[260px] flex-col rounded-3xl border border-black/8 bg-white/70 backdrop-blur-xl p-6 shadow-[0_16px_40px_rgba(10,10,10,0.06)] z-20 transform transition-transform duration-500 hover:border-black/15 pointer-events-auto">
<div className="flex mb-4 gap-x-3 gap-y-3 items-center">
<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-black/5 bg-slate-50 text-[#E01E5A] shadow-sm">
<iconify-icon className="text-2xl" icon="simple-icons:slack"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-[10px] uppercase text-[#8B919B] tracking-[0.16em]">
                    Slack
                  </span>
<span className="text-sm font-semibold text-[#171A1F] mt-0.5">
                    Async Chat
                  </span>
</div>
</div>
<p className="leading-relaxed text-sm text-[#5F6672] mb-5">
                Prefer to speak Asnyc? send an email and we will set up a Slack
                connect
              </p>
<div className="flex w-full justify-start"></div>
</div>
</div>
<div className="flex flex-col z-10 text-center w-full max-w-4xl mr-auto ml-auto relative items-center">
<h2 className="font-display text-[3rem] uppercase leading-[0.88] tracking-[0.005em] text-[#0A0A0A] sm:text-[4rem] md:text-[4.5rem]">
<span className="block">Ready to scale?</span>
</h2>
<div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex min-w-[180px] items-center justify-center text-[11px] uppercase transition-all hover:bg-[#17202B] hover:shadow-[0_0_0_1px_rgba(77,163,255,0.22),0_8px_24px_rgba(77,163,255,0.12)] text-[#F5F5F2] tracking-[0.16em] bg-blue-500 h-11 border-[#1A2130] border rounded-xl pr-6 pl-6" href="https://calendly.com/devreltalent/intro">
                Calendly Call
              </a>
<div className="inline-block">
<button className="inline-flex min-w-[220px] gap-2 text-[11px] uppercase transition-all hover:bg-white cursor-pointer text-[#4F5661] tracking-[0.16em] bg-slate-50 h-11 border-black/10 border rounded-xl pr-6 pl-6 shadow-[0_8px_24px_rgba(10,10,10,0.04)] backdrop-blur-md gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='mailto:owen@devreltalent.io?subject=slack%20connect%20-%20DevRel%20Talent'" type="button">
                  Slack Connect
                </button>
<div className="hidden fixed inset-0 z-[100] flex items-center justify-center px-4 bg-zinc-900/40 backdrop-blur-sm transition-all duration-300" id="modal-aura-emod7u0655hp4xoe">
<div className="absolute inset-0 cursor-pointer" onclick="this.parentElement.classList.add('hidden')"></div>
<form action="https://formsubmit.co/owen@devreltalent.io" className="relative w-full max-w-sm bg-white rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.15)] border border-black/10 p-7 z-10 text-left" method="POST">
<div className="flex flex-col gap-4">
<div className="flex justify-between items-center mb-2">
<h4 className="text-lg font-semibold text-[#0A0A0A] tracking-tight">
                          Slack Connect Request
                        </h4>
<button className="flex h-8 w-8 items-center justify-center rounded-full text-[#5F6672] hover:bg-black/5 hover:text-[#0A0A0A] cursor-pointer transition-colors" onclick="document.getElementById('modal-aura-emod7u0655hp4xoe').classList.add('hidden')" type="button">
<svg className="lucide lucide-x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-2 ml-1">
                            Name
                          </label>
<input className="w-full h-11 px-4 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 placeholder:text-gray-400 text-gray-900 transition-all shadow-sm" name="name" required="" type="text"/>
</div>
<div>
<label className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-2 ml-1">
                            Title
                          </label>
<input className="w-full h-11 px-4 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 placeholder:text-gray-400 text-gray-900 transition-all shadow-sm" name="title" required="" type="text"/>
</div>
<div>
<label className="block text-[11px] uppercase text-[#6B7280] tracking-[0.16em] mb-2 ml-1">
                            Work Email
                          </label>
<input className="w-full h-11 px-4 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-slate-50 placeholder:text-gray-400 text-gray-900 transition-all shadow-sm" name="email" required="" type="email"/>
</div>
</div>
<input name="_captcha" type="hidden" value="false"/>
<input name="_subject" type="hidden" value="New Slack Connect Request"/>
<button className="w-full h-11 mt-4 bg-blue-500 hover:bg-blue-600 text-white text-[11px] uppercase tracking-[0.16em] rounded-xl transition-all font-medium shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)]" type="submit">
                        Send Request
                      </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div className="overflow-hidden bg-[#0B0F14] pt-16 pr-6 pb-10 pl-6 relative">
<div className="pointer-events-none absolute inset-0 bg-grid-pattern-dark opacity-[0.14]"></div>
<div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#10141B] to-transparent"></div>
<div className="md:px-4 w-full max-w-[88rem] mr-auto ml-auto pr-2 pl-2 relative">
<div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr] md:gap-10 border-white/10 border-t pt-12 gap-x-12 gap-y-12">

<div className="max-w-sm">
<a className="inline-flex items-center gap-3" href="#">
<div className="flex bg-[#10141B] w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8dc9be9a-4299-4169-8e32-a5372eb0b0be_320w.jpg)] bg-cover bg-center border-white/10 border rounded-xl relative shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] items-center justify-center"></div>
<div className="flex flex-col leading-none">
<span className="text-[1.7rem] leading-none text-white tracking-[0.04em] font-display">
                      DevrEL TALENT
                    </span>
<span className="text-[10px] uppercase text-white/40 tracking-[0.18em] mt-0.5">
                      dEVELOPER TOOLS HIRING
                    </span>
</div>
</a>
<p className="leading-6 text-sm text-white/50 mt-6">
                  We help devtools companies land their most critical early
                  hires. From founding DevRel to first-of-their-kind Marketing
                  and Community roles, we source the people who shape how your
                  product is discovered and adopted. By getting these hires
                  right today, we build the momentum you need to scale.
                </p>
<div className="flex gap-3 mt-6 gap-x-3 gap-y-3 items-center">
<a aria-label="LinkedIn" className="flex items-center justify-center transition-all hover:border-white/20 hover:bg-white/[0.05] hover:text-white text-white/70 w-10 h-10 border-white/10 border rounded-xl" href="https://www.linkedin.com/company/devreltalent">
<iconify-icon className="" height="16" icon="prime:linkedin" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<div className="text-[10px] uppercase text-white/35 tracking-[0.18em]">
                  Developer tools hiring
                </div>
<ul className="mt-5 space-y-3">
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="/home">
                      Developer Relations Hiring
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="#">
                      Developer Marketing Hiring
                    </a>
</li>
<li className=""></li>
</ul>
<a className="transition-colors hover:text-white text-sm text-white/55" href="#">
                  Developer Community Hiring
                </a>
</div>

<div className="">
<div className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Resources
                </div>
<ul className="mt-5 space-y-3">
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="#">
                      Developer Relations Salary Guide 2026 (Coming soon!)
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="https://www.stateofdeveloperrelations.com/">
                      The State of DevRel Report
                    </a>
</li>
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="#"></a>
</li>
</ul>
</div>

<div className="">
<div className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                  Company
                </div>
<ul className="mt-5 space-y-3">
<li className="">
<a className="transition-colors hover:text-white text-sm text-white/55" href="#">
                      Founder
                    </a>
</li>
<li className=""></li>
<li className=""></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between border-white/10 border-t mt-12 pt-6 gap-x-4 gap-y-4">
<p className="text-[10px] uppercase text-white/30 tracking-[0.18em]">
                © 2026 dEVREL TALENT. All rights reserved.
              </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-2">
<span className="text-[10px] uppercase text-white/30 tracking-[0.16em]">
                  Developer tools hiring
                </span>
<span className="text-[10px] uppercase text-white/30 tracking-[0.16em]">
                  developer relations
                </span>
<span className="text-[10px] uppercase text-white/30 tracking-[0.16em]">
                  developer marketing
                </span>
</div>
</div>
</div>
</div>
</footer>

</main>


    </>
  );
}
