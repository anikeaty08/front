import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Initialize Icons
            lucide.createIcons();

            // Initialize Chart.js
            const canvas = document.getElementById('dashboardChart');
            if (canvas && typeof Chart !== 'undefined') {
                const ctx = canvas.getContext('2d');
                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                gradient.addColorStop(0, 'rgba(59, 130, 246, 0.25)');
                gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        datasets: [{
                            label: 'Revenue',
                            data: [32000, 41000, 38000, 52000, 48000, 61000, 74000],
                            borderColor: '#3b82f6',
                            backgroundColor: gradient,
                            borderWidth: 2,
                            pointBackgroundColor: '#050505',
                            pointBorderColor: '#3b82f6',
                            pointBorderWidth: 2,
                            pointRadius: 4,
                            pointHoverRadius: 6,
                            fill: true,
                            tension: 0.4
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                backgroundColor: '#111',
                                titleColor: '#fff',
                                bodyColor: '#fff',
                                borderColor: 'rgba(255,255,255,0.1)',
                                borderWidth: 1,
                                padding: 12,
                                displayColors: false,
                                callbacks: {
                                    label: function(context) { return '$' + context.parsed.y.toLocaleString(); }
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: { display: false, drawBorder: false },
                                ticks: { color: 'rgba(255,255,255,0.4)', font: { family: 'Inter', size: 11, weight: '300' } }
                            },
                            y: {
                                grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false },
                                ticks: {
                                    color: 'rgba(255,255,255,0.4)',
                                    font: { family: 'Inter', size: 11, weight: '300' },
                                    maxTicksLimit: 5,
                                    callback: function(value) { return '$' + (value/1000) + 'k'; }
                                }
                            }
                        }
                    }
                });
            }
        });
      


      // --- Particle System ---
      const pCanvas = document.getElementById('particle-canvas');
      const pCtx = pCanvas.getContext('2d');
      let pWidth, pHeight;
      let particles = [];

      function resizeParticles() {
          pWidth = pCanvas.width = window.innerWidth;
          pHeight = pCanvas.height = window.innerHeight;
      }

      class Particle {
          constructor() {
              this.x = Math.random() * pWidth;
              this.y = Math.random() * pHeight;
              this.size = Math.random() * 1.5 + 0.5;
              this.speedX = (Math.random() - 0.5) * 0.3;
              this.speedY = -Math.random() * 0.5 - 0.1;
              this.opacity = Math.random() * 0.5 + 0.1;
          }
          update() {
              this.x += this.speedX;
              this.y += this.speedY;
              if (this.y < 0) {
                  this.y = pHeight;
                  this.x = Math.random() * pWidth;
              }
              if (this.x < 0 || this.x > pWidth) this.speedX *= -1;
          }
          draw() {
              pCtx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
              pCtx.beginPath();
              pCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              pCtx.fill();
          }
      }

      function initParticles() {
          particles = [];
          for (let i = 0; i < 150; i++) particles.push(new Particle());
      }

      function animateParticles() {
          pCtx.clearRect(0, 0, pWidth, pHeight);
          particles.forEach(p => { p.update(); p.draw(); });
          requestAnimationFrame(animateParticles);
      }

      window.addEventListener('resize', () => { resizeParticles(); initParticles(); });
      resizeParticles();
      initParticles();
      animateParticles();

      // --- 3D Scene Animation ---
      const scene = document.getElementById('scene-container');
      const card1 = document.getElementById('card-1');
      const card2 = document.getElementById('card-2');
      let time3D = 0;

      function animateScene() {
          time3D += 0.01;
          scene.style.transform = `rotateY(${-18 + Math.sin(time3D) * 2}deg) rotateX(${12 + Math.cos(time3D * 0.8) * 1.5}deg) rotateZ(4deg)`;
          card1.style.transform = `translateX(20px) translateY(${-30 + Math.sin(time3D * 1.5) * 8}px)`;
          card2.style.transform = `translateX(-30px) translateY(${10 + Math.cos(time3D * 1.2) * 6}px)`;
          requestAnimationFrame(animateScene);
      }
      animateScene();

      // --- Cursor Animation ---
      const cursors = document.querySelectorAll('.cursor-anim');
      let startTime = Date.now();

      function animateCursors() {
          const elapsed = (Date.now() - startTime) / 1000;
          cursors.forEach((cursor, index) => {
              const speedX = 0.8 + (index * 0.2);
              const speedY = 0.6 + (index * 0.3);
              const phase = index * (Math.PI * 0.5);
              const x = Math.sin(elapsed * speedX + phase) * 12;
              const y = Math.cos(elapsed * speedY + phase) * 8;
              cursor.style.transform = `translate(${x}px, ${y}px)`;
          });
          requestAnimationFrame(animateCursors);
      }
      animateCursors();

      // --- WebGL Background ---
      const wCanvas = document.getElementById('webgl-bg');
      const gl = wCanvas.getContext('webgl', { alpha: true });

      if (gl) {
          const resizeWGL = () => {
              wCanvas.width = window.innerWidth;
              wCanvas.height = window.innerHeight;
              gl.viewport(0, 0, wCanvas.width, wCanvas.height);
          };
          window.addEventListener('resize', resizeWGL);
          resizeWGL();

          const vsSource = `attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }`;
          const fsSource = `
              precision mediump float;
              uniform float time;
              uniform vec2 resolution;
              void main() {
                  vec2 uv = gl_FragCoord.xy / resolution.xy;
                  float noise = sin(uv.x * 3.0 + time * 0.2) * cos(uv.y * 3.0 - time * 0.3);
                  float noise2 = sin(uv.y * 5.0 + time * 0.1) * cos(uv.x * 2.0 + time * 0.15);
                  float combined = (noise + noise2) * 0.5;
                  vec3 color = vec3(0.06, 0.06, 0.08) + vec3(0.02, 0.01, 0.03) * combined;
                  gl_FragColor = vec4(color, 1.0);
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

          const buffer = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

          const posLoc = gl.getAttribLocation(program, "p");
          gl.enableVertexAttribArray(posLoc);
          gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

          const timeLoc = gl.getUniformLocation(program, "time");
          const resLoc = gl.getUniformLocation(program, "resolution");

          const renderWGL = (time) => {
              gl.uniform1f(timeLoc, time * 0.001);
              gl.uniform2f(resLoc, wCanvas.width, wCanvas.height);
              gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
              requestAnimationFrame(renderWGL);
          };
          requestAnimationFrame(renderWGL);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-[-2] pointer-events-none opacity-30" height="937" id="webgl-bg" width="1797"></canvas>
<canvas className="fixed inset-0 pointer-events-none z-[-1] opacity-60" height="937" id="particle-canvas" width="1797"></canvas>

<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute -top-[30%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-white/5 blur-[100px] animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute -top-[10%] -left-[10%] w-[80vw] h-[25vh] bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-[60px] origin-top-left" style={{animation: 'ray-sweep 7s ease-in-out infinite'}}></div>
<div className="absolute -top-[5%] -left-[5%] w-[60vw] h-[12vh] bg-gradient-to-r from-white/15 via-white/5 to-transparent blur-[30px] origin-top-left" style={{animation: 'ray-sweep-2 5s ease-in-out infinite alternate', animationDelay: '1s'}}></div>
<div className="absolute -top-[2%] -left-[2%] w-[40vw] h-[3vh] bg-gradient-to-r from-white/40 via-white/10 to-transparent blur-[15px] origin-top-left" style={{animation: 'core-pulse 3s ease-in-out infinite', mixBlendMode: 'overlay'}}></div>
<div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[40vw] h-[70vh] bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent blur-[80px] origin-top" style={{animation: 'center-beam 6s ease-in-out infinite'}}></div>
</div>

<div className="fixed top-[-10%] right-[10%] w-[60vw] h-[120vh] pointer-events-none z-[-1]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)', transform: 'rotate(-35deg)', filter: 'blur(80px)', transformOrigin: 'top center'}}></div>

<header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[95%] sm:w-[90%] max-w-5xl z-50 rounded-full p-[1px]" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.02) 100%)', boxShadow: '0 16px 32px -8px rgba(0,0,0,0.8)'}}>
<div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-b from-[#1c1c1c] to-[#0a0a0a] backdrop-blur-2xl relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.15), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center border border-black" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), inset 0 -1px 2px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'}}>
<iconify-icon className="text-white/90" icon="solar:layers-linear" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</div>
<span className="text-sm font-normal text-white tracking-tighter" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            VERTEX
          </span>
</div>
<nav className="hidden md:flex items-center gap-8 relative z-10">
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Platform
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Methodology
          </a>
<a className="text-sm font-light text-white/70 hover:text-white transition-colors" href="#" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Pricing
          </a>
</nav>
<div className="flex items-center gap-4 relative z-10">
<a className="hidden md:block text-sm font-light text-white/70 hover:text-white transition-colors" href="#" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
            Log in
          </a>
<div className="relative inline-flex group">
<div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-white/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
<button className="relative px-5 py-1.5 rounded-full text-xs font-normal text-white bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 3px rgba(0,0,0,0.6), 0 4px 8px -2px rgba(0,0,0,0.6)', textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
              Start Free
            </button>
</div>
</div>
</div>
</header>

<main className="container sm:px-12 lg:px-24 h-screen min-h-[800px] max-h-[1000px] xl:max-h-[950px] flex flex-col lg:flex-row lg:gap-0 overflow-hidden z-10 mr-auto ml-auto pt-40 pr-6 pb-20 pl-6 relative gap-x-12 gap-y-12 items-center justify-between">
<div className="w-full lg:w-5/12 flex flex-col items-start pt-12 lg:pt-0 z-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 relative" style={{background: 'linear-gradient(180deg, #1e1e1e 0%, #0a0a0a 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.8), 0 8px 16px -4px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
<iconify-icon className="text-white/80 relative z-10" icon="solar:folder-with-files-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
<span className="text-xs font-normal text-white/90 tracking-wide uppercase relative z-10" style={{textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
            Task Environments
          </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Drive focus across
          <br/>
<span className="italic font-light text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — your entire team.
          </span>
</h1>
<p className="text-sm sm:text-base text-white/60 max-w-sm leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          Centralize milestones, distribute tasks, and measure velocity. A
          refined, noise-free workspace designed for elite product groups.
        </p>
<div className="mt-10 relative inline-flex group">
<div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-b from-white/40 via-white/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
<button className="relative flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-gradient-to-b from-[#2e2e2e] to-[#141414] text-white overflow-hidden" style={{boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -2px 8px rgba(0,0,0,0.8), 0 12px 24px -6px rgba(0,0,0,0.9)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<span className="text-sm font-normal tracking-wide relative z-10" style={{textShadow: '0 1px 2px rgba(0,0,0,0.9)'}}>
              Initialize Workspace
            </span>
<iconify-icon className="text-white/90 relative z-10" icon="solar:rocket-linear" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.9))'}} width="18"></iconify-icon>
</button>
</div>
</div>
<div className="w-full lg:w-7/12 relative h-[500px] sm:h-[600px] lg:h-[650px] xl:h-[750px] flex items-center justify-center pointer-events-none" style={{perspective: '1200px'}}>
<div className="relative w-full max-w-[600px] aspect-square" id="scene-container" style={{transformStyle: 'preserve-3d', transform: 'rotateY(-18deg) rotateX(12deg) rotateZ(4deg)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#181818] to-[#0a0a0a] overflow-hidden relative" style={{transform: 'translateZ(-100px) scale(1.1)', boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.08), inset 0 -2px 12px rgba(0,0,0,0.9), 0 24px 48px -12px rgba(0,0,0,0.9)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '6px 6px'}}></div>
<div className="h-16 border-b border-white/[0.04] flex items-center px-6 gap-4 opacity-50 relative z-10">
<span className="text-xs text-white/60 tracking-wide font-light">
                Initiatives
              </span>
<iconify-icon className="text-white/40" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-xs text-white/60 tracking-wide font-light">
                Platform Architecture Rewrite
              </span>
</div>
<div className="p-6 opacity-40 flex flex-col gap-6 relative z-10">
<h2 className="text-xl font-normal tracking-tight text-white flex items-center gap-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                Core System Overhaul
                <iconify-icon className="text-white/50" icon="solar:link-minimalistic-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</h2>
<div className="grid grid-cols-3 gap-4 mt-8">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs text-white/70 font-light">Queue</span>
<iconify-icon className="text-white/50" icon="solar:add-circle-linear" width="16"></iconify-icon>
</div>
<div className="h-32 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.03]" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'}}></div>
<div className="h-24 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.03]" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'}}></div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-xs text-white/70 font-light">QA</span>
<iconify-icon className="text-white/50" icon="solar:add-circle-linear" width="16"></iconify-icon>
</div>
<div className="h-24 rounded-xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.03]" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5)'}}></div>
</div>
</div>
</div>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center gap-6" style={{transform: 'translateZ(50px)'}}>
<div className="w-[90%] sm:w-[420px] rounded-2xl bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative" id="card-1" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)', transform: 'translateX(20px) translateY(-30px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.04] relative z-10" style={{boxShadow: '0 1px 2px rgba(0,0,0,0.2)'}}>
<span className="text-xs font-normal text-white/80" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                    Current Sprint
                  </span>
<div className="flex items-center gap-2 text-white/50">
<iconify-icon icon="solar:add-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
<iconify-icon icon="solar:menu-dots-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</div>
</div>
<div className="p-5 flex flex-col gap-4 relative z-10">
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 rounded bg-gradient-to-b from-[#3a1d1d] to-[#241010] text-[#ff8a8a] text-xs font-normal tracking-wide border border-[#522525]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                      Critical
                    </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-xs text-white/70" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.4)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                      Dec 12, 2024
                    </div>
</div>
<div>
<h3 className="text-sm sm:text-base text-white font-normal mb-1.5 tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      WebSocket Integration Draft
                    </h3>
<p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Detail the necessary fallback patterns to establish
                      persistent bi-directional connections without increasing
                      server memory load.
                    </p>
</div>
<div className="mt-2">
<div className="w-full h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'}}>
<div className="h-full bg-gradient-to-r from-white/40 to-white/90 rounded-full w-3/4" style={{boxShadow: '0 0 8px rgba(255,255,255,0.2)'}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-1 pt-4 border-t border-white/[0.04]">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-b from-[#555] to-[#333] flex items-center justify-center text-xs text-white/90" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                        JD
                      </div>
<div className="w-7 h-7 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-b from-[#444] to-[#222] flex items-center justify-center text-xs text-white/90" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                        AL
                      </div>
<div className="w-7 h-7 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-b from-[#2a2a2a] to-[#111] flex items-center justify-center text-xs text-white/60" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                        +3
                      </div>
</div>
<div className="flex items-center gap-3 text-white/50 text-xs font-light">
<div className="flex items-center gap-1" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}}>
<iconify-icon icon="solar:paperclip-linear" width="14"></iconify-icon>
<span>4</span>
</div>
<div className="flex items-center gap-1" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}}>
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon>
<span>12</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-[90%] sm:w-[420px] rounded-2xl bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative" id="card-2" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)', transform: 'translateX(-30px) translateY(10px)'}}>
<div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="p-5 flex flex-col gap-4 relative z-10">
<div className="absolute top-4 right-4 text-white/40">
<iconify-icon icon="solar:menu-dots-linear" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<div className="px-2.5 py-1 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-xs font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.4)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                      Standard
                    </div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-xs text-white/70" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.4)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                      Jan 05, 2025
                    </div>
</div>
<div className="pr-6">
<h3 className="text-sm sm:text-base text-white font-normal mb-1.5 tracking-tight" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Telemetry Data Analysis
                    </h3>
<p className="text-xs text-white/50 leading-relaxed font-light line-clamp-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>
                      Aggregate metrics from the latest release to isolate
                      performance bottlenecks in the rendering engine.
                    </p>
</div>
<div className="mt-2 flex items-center justify-between gap-4">
<div className="w-full h-1.5 bg-[#0a0a0a] rounded-full overflow-hidden border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)'}}>
<div className="h-full bg-gradient-to-r from-white/40 to-white/90 rounded-full w-[30%]" style={{boxShadow: '0 0 8px rgba(255,255,255,0.2)'}}></div>
</div>
<span className="text-xs text-white/50 whitespace-nowrap font-light" style={{textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                      2 / 7
                    </span>
</div>
<div className="flex items-center justify-between mt-1 pt-4 border-t border-white/[0.04]">
<div className="flex items-center -space-x-2">
<div className="w-7 h-7 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-b from-[#444] to-[#222] flex items-center justify-center text-xs text-white/90" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)', textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
                        MK
                      </div>
</div>
<div className="flex items-center gap-3 text-white/50 text-xs font-light">
<div className="flex items-center gap-1" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}}>
<iconify-icon icon="solar:paperclip-linear" width="14"></iconify-icon>
<span>1</span>
</div>
<div className="flex items-center gap-1" style={{filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}}>
<iconify-icon icon="solar:chat-line-linear" width="14"></iconify-icon>
<span>3</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="z-10 sm:px-6 w-full pt-20 pr-4 pb-32 pl-4 relative">

<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Uncover the truth
          <br/>
<span className="italic text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — behind your metrics.
          </span>
</h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          A holistic approach to data intelligence. Eliminate guesswork and
          align your organization with real-time analytics and predictive
          models.
        </p>
</div>

<div className="group transition-transform duration-700 hover:-translate-y-2 bg-gradient-to-b from-[#1e1e1e] to-[#121212] w-full max-w-[1400px] rounded-[2rem] mr-auto ml-auto pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative" style={{boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="overflow-hidden flex flex-col bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] w-full rounded-[2rem] relative" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="border-white/[0.04] flex z-20 bg-[#0a0a0a]/50 h-12 border-b pr-4 pl-4 relative backdrop-blur-md items-center">
<div className="flex gap-1.5 w-20">
<div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
</div>
<div className="mx-auto px-6 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] text-[10px] text-white/40 flex items-center gap-2 font-light tracking-wide">
<svg className="lucide lucide-lock w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
              vertex.tasks.app
            </div>
<div className="w-20 flex justify-end">
<svg className="lucide lucide-plus w-4 h-4 text-white/40" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
<div className="flex h-[800px] relative z-10">
<div className="hidden md:flex border-white/[0.04] flex-col gap-6 z-20 bg-[#0a0a0a]/30 backdrop-blur-md w-64 border-r pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center text-white border border-[#333]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 2px 4px rgba(0,0,0,0.5)'}}>
<svg className="lucide lucide-layers w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
<polyline points="2 17 12 22 22 17"></polyline>
<polyline points="2 12 12 17 22 12"></polyline>
</svg>
</div>
<span className="text-white text-sm font-normal tracking-tight">
                  Vertex Tasks
                </span>
</div>
<div className="flex flex-col gap-1 mt-2">
<div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/[0.05] text-white text-sm cursor-pointer border border-white/[0.05] font-light" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'}}>
<div className="flex items-center gap-3">
<svg className="lucide lucide-layout-dashboard w-4 h-4 text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
                    Board
                  </div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-white transition-colors cursor-pointer font-light">
<div className="flex items-center gap-3">
<svg className="lucide lucide-list-todo w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="6" rx="1" width="6" x="3" y="5"></rect>
<path d="m3 17 2 2 4-4"></path>
<path d="M13 6h8"></path>
<path d="M13 12h8"></path>
<path d="M13 18h8"></path>
</svg>
                    Backlog
                  </div>
<span className="text-[10px] bg-white/[0.05] px-1.5 py-0.5 rounded text-white/40">
                    124
                  </span>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-white transition-colors cursor-pointer font-light">
<div className="flex items-center gap-3">
<svg className="lucide lucide-calendar w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                    Sprints
                  </div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-white transition-colors cursor-pointer font-light">
<div className="flex items-center gap-3">
<svg className="lucide lucide-users w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
                    Team
                  </div>
</div>
<div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/50 text-sm hover:bg-white/[0.02] hover:text-white transition-colors cursor-pointer font-light mt-4">
<div className="flex items-center gap-3">
<svg className="lucide lucide-settings w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                    Settings
                  </div>
</div>
</div>
<div className="mt-auto pt-5 border-t border-white/[0.04]">
<div className="flex items-center gap-3 px-2">
<img alt="User Avatar" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&amp;q=80"/>
<div className="flex flex-col">
<span className="text-sm text-white font-normal tracking-tight">
                      Sourasith
                    </span>
<span className="text-[10px] text-white/50 font-light mt-0.5">
                      Lead UI/UX Engineer
                    </span>
</div>
<button className="ml-auto text-white/40 hover:text-white transition-colors">
<svg className="lucide lucide-more-vertical w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</button>
</div>
</div>
</div>
<div className="flex-1 bg-transparent p-6 md:p-8 overflow-y-auto relative hide-scrollbar">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 relative z-10 gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-xl md:text-2xl text-white font-normal tracking-tight">
                      Sprint 42
                    </h3>
<span className="px-2.5 py-1 rounded-full border border-white/[0.05] bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[10px] text-white/70" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'}}>
                      Active
                    </span>
</div>
<p className="text-sm text-white/50 font-light">
                    Oct 12 - Oct 26 • 14 days remaining
                  </p>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center -space-x-2 mr-2">
<img alt="User" className="w-8 h-8 rounded-full object-cover border-2 border-[#111]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=150&amp;q=80"/>
<img alt="User" className="w-8 h-8 rounded-full object-cover border-2 border-[#111]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=150&amp;q=80"/>
<div className="w-8 h-8 rounded-full border-2 border-[#111] bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center text-[10px] text-white/90" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2)'}}>
                      +3
                    </div>
</div>
<button className="px-4 py-2 text-xs text-white/70 bg-white/[0.03] hover:bg-white/[0.06] rounded-lg border border-white/[0.05] transition-colors font-light flex items-center gap-2">
<svg className="lucide lucide-filter w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
</svg>
                    Filter
                  </button>
<button className="px-4 py-2 text-xs text-white bg-gradient-to-b from-[#3a3a3a] to-[#1a1a1a] hover:from-[#444] hover:to-[#222] rounded-lg border border-white/[0.1] transition-colors font-light shadow-lg flex items-center gap-2" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.5)'}}>
<svg className="lucide lucide-plus w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
                    New Task
                  </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 relative z-10">
<div className="p-4 rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-white/50 text-[11px] font-normal tracking-wide uppercase mb-2">
                    Completion
                  </div>
<div className="flex items-end gap-2 mb-2">
<div className="text-2xl text-white tracking-tight font-light">
                      64%
                    </div>
</div>
<div className="w-full h-1 bg-[#111] rounded-full overflow-hidden border border-white/[0.05]">
<div className="h-full bg-white/70 w-[64%]"></div>
</div>
</div>
<div className="p-4 rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-white/50 text-[11px] font-normal tracking-wide uppercase mb-2">
                    Completed
                  </div>
<div className="flex items-end gap-2">
<div className="text-2xl text-white tracking-tight font-light">
                      24
                    </div>
<div className="text-xs text-white/40 font-light mb-1">
                      / 38 tasks
                    </div>
</div>
</div>
<div className="p-4 rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-white/50 text-[11px] font-normal tracking-wide uppercase mb-2">
                    Blocked
                  </div>
<div className="flex items-end gap-2">
<div className="text-2xl text-[#ff8a8a] tracking-tight font-light">
                      2
                    </div>
<div className="text-xs text-white/40 font-light mb-1">
                      tasks
                    </div>
</div>
</div>
<div className="p-4 rounded-2xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="text-white/50 text-[11px] font-normal tracking-wide uppercase mb-2">
                    Velocity
                  </div>
<div className="flex items-end gap-2">
<div className="text-2xl text-white tracking-tight font-light">
                      42
                    </div>
<div className="text-xs text-[#22c55e] font-light mb-1 flex items-center">
<svg className="lucide lucide-trending-up w-3 h-3 mr-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
                      +4 pts
                    </div>
</div>
</div>
</div>
<div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar min-h-[400px]">
<div className="flex flex-col min-w-[280px] w-[280px]">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white/30"></div>
<span className="text-sm font-normal text-white">To Do</span>
</div>
<span className="text-xs text-white/40 bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.05]">
                      5
                    </span>
</div>
<div className="flex flex-col gap-3">
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-[10px] font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Feature
                        </span>
<span className="text-[10px] text-white/30">
                          AETHER-104
                        </span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        Architect Spatial Interface
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Map out 3D node connections using React and Three.js for
                        the distributed network view.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-3 text-white/40 text-[11px]">
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                            2
                          </div>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] text-white/70 text-[10px] font-normal tracking-wide border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'}}>
                          Design
                        </span>
<span className="text-[10px] text-white/30">REVIO-012</span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        Integrate GSAP ScrollTriggers
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Smooth out the landing page sections and CTA appearances
                        for the AI analytics flow.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#444] to-[#222] border border-[#111] flex items-center justify-center text-[10px] text-white/90">
                          AL
                        </div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-[10px] font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Feature
                        </span>
<span className="text-[10px] text-white/30">FINEX-024</span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        Optimize Speed Platform UI
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Refactor the main data table for the Finex platform to
                        handle higher telemetry loads smoothly.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-3 text-white/40 text-[11px]">
<div className="flex items-center gap-1">
<svg className="lucide lucide-paperclip w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                            1
                          </div>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#3a1d1d] to-[#241010] text-[#ff8a8a] text-[10px] font-normal tracking-wide border border-[#522525]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Media
                        </span>
<span className="text-[10px] text-white/30">YT-089</span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        "Designers Will Hate This" CTR
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Draft high-contrast thumbnails emphasizing website
                        cloning speeds.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col min-w-[280px] w-[280px]">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#f59e0b]" style={{boxShadow: '0 0 8px rgba(245,158,11,0.5)'}}></div>
<span className="text-sm font-normal text-white">
                        In Progress
                      </span>
</div>
<span className="text-xs text-white/40 bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.05]">
                      3
                    </span>
</div>
<div className="flex flex-col gap-3">
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#f59e0b]/30 group cursor-pointer hover:border-[#f59e0b]/50 transition-colors relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f59e0b] to-transparent"></div>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#3a1d1d] to-[#241010] text-[#ff8a8a] text-[10px] font-normal tracking-wide border border-[#522525]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Bug
                        </span>
<span className="text-[10px] text-white/30">
                          SQUARE-092
                        </span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        WebGL Context Loss on Chart
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Mission-critical telemetry charts are dropping context
                        after extended monitoring sessions.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="flex items-center -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#555] to-[#333] border border-[#1a1a1a] flex items-center justify-center text-[10px] text-white/90 z-10">
                            MK
                          </div>
<div className="w-6 h-6 rounded-full bg-[#111] border border-[#1a1a1a] overflow-hidden z-0">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=150&amp;q=80"/>
</div>
</div>
<div className="flex items-center gap-3 text-white/40 text-[11px]">
<div className="flex items-center gap-1">
<svg className="lucide lucide-paperclip w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                            4
                          </div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-message-square w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                            12
                          </div>
</div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-[#f59e0b]/30 group cursor-pointer hover:border-[#f59e0b]/50 transition-colors relative overflow-hidden" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#f59e0b] to-transparent"></div>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-[10px] font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Feature
                        </span>
<span className="text-[10px] text-white/30">
                          AETHER-112
                        </span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        Distributed Network Testimonials
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Implement the scrolling testimonial section using GSAP
                        to equip pioneers scaling digital ecosystems.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#444] to-[#222] border border-[#111] flex items-center justify-center text-[10px] text-white/90">
                          MK
                        </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col min-w-[280px] w-[280px]">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-white/50"></div>
<span className="text-sm font-normal text-white">Review</span>
</div>
<span className="text-xs text-white/40 bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.05]">
                      2
                    </span>
</div>
<div className="flex flex-col gap-3">
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-[10px] font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Feature
                        </span>
<span className="text-[10px] text-white/30">NODEX-088</span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        Workforce Bento Grid Layout
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Review the new glassmorphic bento layouts for the
                        enterprise orchestration dashboard.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 text-white/70 rounded text-[10px] border border-white/10">
<svg className="lucide lucide-git-pull-request w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
                          PR Open
                        </div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer hover:border-white/10 transition-colors" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] text-white/70 text-[10px] font-normal tracking-wide border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'}}>
                          Design
                        </span>
<span className="text-[10px] text-white/30">REVIO-055</span>
</div>
<h4 className="text-sm text-white font-normal mb-1.5 tracking-tight group-hover:text-white/80 transition-colors">
                        AI Sales CTA Layout
                      </h4>
<p className="text-xs text-white/50 font-light line-clamp-2 mb-4 leading-relaxed">
                        Validation de la maquette pour la nouvelle section
                        Footer et le CTA de conversion.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 bg-white/5 text-white/70 rounded text-[10px] border border-white/10">
<svg className="lucide lucide-git-pull-request w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="18" r="3"></circle>
<circle cx="6" cy="6" r="3"></circle>
<path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
<line x1="6" x2="6" y1="9" y2="21"></line>
</svg>
                          PR Open
                        </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col min-w-[280px] w-[280px]">
<div className="flex items-center justify-between mb-4 px-1">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#10b981]" style={{boxShadow: '0 0 8px rgba(16,185,129,0.5)'}}></div>
<span className="text-sm font-normal text-white">Done</span>
</div>
<span className="text-xs text-white/40 bg-white/[0.05] px-2 py-0.5 rounded-md border border-white/[0.05]">
                      14
                    </span>
</div>
<div className="flex flex-col gap-3">
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer opacity-70 hover:opacity-100 hover:border-white/10 transition-all" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a] text-white/70 text-[10px] font-normal tracking-wide border border-white/[0.05]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05)'}}>
                          Design
                        </span>
<span className="text-[10px] text-white/30">LUMI-045</span>
</div>
<h4 className="text-sm text-white/80 font-normal mb-1.5 tracking-tight line-through decoration-white/30 group-hover:text-white transition-colors">
                        Composants d'interface UI
                      </h4>
<p className="text-xs text-white/40 font-light line-clamp-2 mb-4 leading-relaxed">
                        Finaliser l'esthétique "Modern Tactile" pour la
                        bibliothèque Lumimotion.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] rounded text-[10px] border border-[#10b981]/20">
<svg className="lucide lucide-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                          Merged
                        </div>
</div>
</div>
<div className="p-4 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/[0.05] group cursor-pointer opacity-70 hover:opacity-100 hover:border-white/10 transition-all" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-3">
<span className="px-2 py-0.5 rounded bg-gradient-to-b from-[#1d3a24] to-[#102415] text-[#8affb1] text-[10px] font-normal tracking-wide border border-[#2b5936]" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'}}>
                          Feature
                        </span>
<span className="text-[10px] text-white/30">
                          SQUARE-011
                        </span>
</div>
<h4 className="text-sm text-white/80 font-normal mb-1.5 tracking-tight line-through decoration-white/30 group-hover:text-white transition-colors">
                        Mission-Critical Hero Section
                      </h4>
<p className="text-xs text-white/40 font-light line-clamp-2 mb-4 leading-relaxed">
                        Deployed the initial real-time infrastructure monitoring
                        hero layout.
                      </p>
<div className="flex items-center justify-between mt-auto">
<div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=150&amp;q=80"/>
</div>
<div className="flex items-center gap-1.5 px-2 py-0.5 bg-[#10b981]/10 text-[#10b981] rounded text-[10px] border border-[#10b981]/20">
<svg className="lucide lucide-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                          Done
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>




</section>
<section className="sm:px-6 sm:pt-32 sm:pb-32 w-full z-10 pt-16 pr-4 pb-16 pl-4 relative">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Streamline your
          <br/>
<span className="italic font-light text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — workflow architecture.
          </span>
</h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          A holistic approach to task delegation. Eliminate bottlenecks and
          align your organization with intelligent issue tracking and real-time
          synchronization.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[auto_auto] gap-5 max-w-[1080px] mr-auto ml-auto gap-x-5 gap-y-5">

<div className="md:col-span-1 md:row-span-2 rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col gap-8" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex flex-col h-full gap-8">
<div className="">
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                  Intelligent Boards
                </h3>
<p className="text-sm text-white/50 font-light leading-relaxed">
                  Categorize and retrieve all your sprint data with ease.
                </p>
</div>
<div className="grid grid-cols-2 gap-x-4 gap-y-6 mt-auto">
<div className="relative w-full aspect-[1.1] transition-transform duration-500 hover:-translate-y-1">
<div className="absolute inset-x-2 top-2 bottom-4 bg-[#e5e5e5] rounded-t-lg" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-x-0.5 top-3.5 bottom-2 bg-[#fafafa] rounded-t-lg" style={{boxShadow: '0 -1px 3px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-0 top-6 z-10 flex flex-col">
<div className="w-[55%] h-[18px] bg-[#4f46e5] rounded-tl-lg rounded-tr-md relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'}}></div>
<div className="flex-1 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-b-xl rounded-tr-xl p-3 flex flex-col justify-end" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 -1px 10px rgba(0,0,0,0.3)', marginTop: '-1px'}}>
<span className="text-white text-xs font-normal tracking-tight">
                        Active Sprint
                      </span>
<span className="text-white/70 text-xs font-light mt-0.5">
                        85 Tasks
                      </span>
</div>
</div>
</div>
<div className="relative w-full aspect-[1.1] transition-transform duration-500 hover:-translate-y-1" style={{transitionDelay: '50ms'}}>
<div className="absolute inset-x-2 top-2 bottom-4 bg-[#e5e5e5] rounded-t-lg" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-x-0.5 top-3.5 bottom-2 bg-[#fafafa] rounded-t-lg" style={{boxShadow: '0 -1px 3px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-0 top-6 z-10 flex flex-col">
<div className="w-[55%] h-[18px] bg-[#06b6d4] rounded-tl-lg rounded-tr-md relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'}}></div>
<div className="flex-1 bg-gradient-to-br from-[#06b6d4] to-[#3b82f6] rounded-b-xl rounded-tr-xl p-3 flex flex-col justify-end" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 -1px 10px rgba(0,0,0,0.3)', marginTop: '-1px'}}>
<span className="text-white text-xs font-normal tracking-tight">
                        Backlog
                      </span>
<span className="text-white/70 text-xs font-light mt-0.5">
                        312 Tasks
                      </span>
</div>
</div>
</div>
<div className="relative w-full aspect-[1.1] transition-transform duration-500 hover:-translate-y-1" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-x-2 top-2 bottom-4 bg-[#e5e5e5] rounded-t-lg" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-x-0.5 top-3.5 bottom-2 bg-[#fafafa] rounded-t-lg" style={{boxShadow: '0 -1px 3px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-0 top-6 z-10 flex flex-col">
<div className="w-[55%] h-[18px] bg-[#ec4899] rounded-tl-lg rounded-tr-md relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'}}></div>
<div className="flex-1 bg-gradient-to-br from-[#ec4899] to-[#f43f5e] rounded-b-xl rounded-tr-xl p-3 flex flex-col justify-end" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 -1px 10px rgba(0,0,0,0.3)', marginTop: '-1px'}}>
<span className="text-white text-xs font-normal tracking-tight">
                        QA Review
                      </span>
<span className="text-white/70 text-xs font-light mt-0.5">
                        48 Tasks
                      </span>
</div>
</div>
</div>
<div className="relative w-full aspect-[1.1] transition-transform duration-500 hover:-translate-y-1" style={{transitionDelay: '150ms'}}>
<div className="absolute inset-x-2 top-2 bottom-4 bg-[#e5e5e5] rounded-t-lg" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-x-0.5 top-3.5 bottom-2 bg-[#fafafa] rounded-t-lg" style={{boxShadow: '0 -1px 3px rgba(0,0,0,0.1)'}}></div>
<div className="absolute inset-0 top-6 z-10 flex flex-col">
<div className="w-[55%] h-[18px] bg-[#a855f7] rounded-tl-lg rounded-tr-md relative overflow-hidden" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)'}}></div>
<div className="flex-1 bg-gradient-to-br from-[#a855f7] to-[#d946ef] rounded-b-xl rounded-tr-xl p-3 flex flex-col justify-end" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 -1px 10px rgba(0,0,0,0.3)', marginTop: '-1px'}}>
<span className="text-white text-xs font-normal tracking-tight">
                        Completed
                      </span>
<span className="text-white/70 text-xs font-light mt-0.5">
                        1.2k Tasks
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col justify-between" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="relative h-[140px] flex items-start justify-center pt-2">
<div className="absolute top-[68px] w-[80%] h-14 rounded-3xl opacity-40 blur-[2px]" style={{background: '#111', boxShadow: 'inset 0 -4px 10px rgba(0,0,0,0.8)'}}></div>
<div className="absolute top-[48px] w-[90%] h-[68px] rounded-[1.5rem]" style={{background: '#2a2a2a', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.08), inset 0 -10px 20px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)'}}></div>
<div className="absolute top-2 w-[100%] bg-[#fcfcfc] rounded-[1.5rem] p-3.5 flex items-center gap-3.5 z-10 transition-transform duration-500 hover:-translate-y-1" style={{boxShadow: '0 15px 30px rgba(0,0,0,0.6), inset 0 2px 4px rgba(255,255,255,1), inset 0 -2px 6px rgba(0,0,0,0.05)', border: '1px solid rgba(255,255,255,0.5)'}}>
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{background: 'linear-gradient(180deg, #f43f5e 0%, #e11d48 100%)', boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.4), 0 4px 10px rgba(225, 29, 72, 0.3)'}}>
<iconify-icon className="text-white text-lg drop-shadow-md" icon="solar:bell-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0 pr-1">
<div className="flex justify-between items-end mb-0.5">
<h4 className="text-xs sm:text-sm font-medium text-[#111] truncate tracking-tight">
                        Task #842 Blocked
                      </h4>
<span className="text-xs text-[#888] shrink-0 font-light">
                        Just now
                      </span>
</div>
<p className="text-xs text-[#666] leading-[1.3] truncate font-light">
                      A critical UI rendering issue reported.
                    </p>
</div>
</div>
</div>
<div className="mt-4">
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                  Actionable Insights
                </h3>
<p className="text-sm text-white/50 font-light leading-relaxed">
                  Stay informed with instant status updates.
                </p>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col justify-between" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex flex-col justify-between h-full">
<div className="flex items-center mb-12 mt-2 ml-2">
<img alt="User" className="w-[52px] h-[52px] rounded-full object-cover relative z-30 transition-transform duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=150&amp;q=80" style={{border: '2.5px solid #1a1a1a', boxShadow: '0 8px 16px rgba(0,0,0,0.5)'}}/>
<img alt="User" className="w-[52px] h-[52px] rounded-full object-cover -ml-4 relative z-20 transition-transform duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=150&amp;q=80" style={{border: '2.5px solid #1a1a1a', boxShadow: '0 8px 16px rgba(0,0,0,0.5)'}}/>
<img alt="User" className="w-[52px] h-[52px] rounded-full object-cover -ml-4 relative z-10 transition-transform duration-300 hover:scale-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=150&amp;q=80" style={{border: '2.5px solid #1a1a1a', boxShadow: '0 8px 16px rgba(0,0,0,0.5)'}}/>
</div>
<div>
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                  Cross-functional Teams
                </h3>
<p className="text-sm text-white/50 font-light leading-relaxed">
                  Empowering remote squads to collaborate across timezones.
                </p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden p-8 flex flex-col md:flex-row gap-8" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 w-full h-full">
<div className="md:w-5/12 flex flex-col justify-center">
<h3 className="text-lg md:text-xl font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                  Synchronized Boards
                </h3>
<p className="text-sm text-white/50 font-light leading-relaxed">
                  Co-create with your team instantly and update task states
                  without friction.
                </p>
</div>
<div className="md:w-7/12 relative h-[200px] md:h-auto rounded-[1.25rem] overflow-hidden" style={{background: '#111', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="h-10 px-4 flex items-center justify-between" style={{background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.03)'}}>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" style={{boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'}}></div>
</div>
<div className="flex gap-3 text-[#555]">
<iconify-icon className="text-sm" icon="solar:sidebar-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:alt-arrow-left-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="w-10"></div>
</div>
<div className="relative h-[calc(100%-40px)] w-full overflow-hidden pointer-events-none">
<div className="cursor-anim absolute top-4 right-12 flex flex-col items-start">
<svg className="text-[#3b82f6] -rotate-[15deg] drop-shadow-md z-10" fill="none" height="20" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'}} viewbox="0 0 24 24" width="20">
<path d="M4.5 3L19.5 9.5L12 12L9.5 19.5L4.5 3Z" fill="currentColor" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="mt-1 ml-4 px-3 py-1.5 rounded-full text-xs font-normal text-white shadow-lg whitespace-nowrap z-0 relative tracking-wide" style={{background: 'linear-gradient(180deg, #3b82f6 0%, #2563eb 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.4)'}}>
                      Marcus
                    </div>
</div>
<div className="cursor-anim absolute bottom-6 left-8 flex flex-col items-start" style={{animationDelay: '-2s'}}>
<svg className="text-[#8b5cf6] -rotate-[15deg] drop-shadow-md z-10" fill="none" height="20" style={{filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.5))'}} viewbox="0 0 24 24" width="20">
<path d="M4.5 3L19.5 9.5L12 12L9.5 19.5L4.5 3Z" fill="currentColor" stroke="white" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="mt-1 ml-4 px-3 py-1.5 rounded-full text-xs font-normal text-white shadow-lg whitespace-nowrap z-0 relative tracking-wide" style={{background: 'linear-gradient(180deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3), 0 4px 10px rgba(0,0,0,0.4)'}}>
                      Elena UI
                    </div>
</div>
<svg className="absolute inset-0 opacity-20" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M 10 50 Q 50 10 90 50 T 170 50" fill="transparent" stroke="white" stroke-dasharray="2 4" strokeWidth="0.5"></path>
<circle cx="80%" cy="40%" fill="none" r="20" stroke="white" stroke-dasharray="1 3" strokeWidth="0.5"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:px-6 sm:pb-32 sm:pt-32 w-full z-10 pt-16 pr-4 pb-16 pl-4 relative">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 relative" style={{background: 'linear-gradient(180deg, #1e1e1e 0%, #0a0a0a 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.8), 0 8px 16px -4px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
<iconify-icon className="text-white/80 relative z-10 animate-pulse" icon="solar:widget-linear" style={{animationDuration: '3s', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
<span className="text-xs font-normal text-white/90 tracking-wide uppercase relative z-10" style={{textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
            Foundation
          </span>
</div>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          The infrastructure that makes
          <br/>
<span className="italic font-light text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — everything possible.
          </span>
</h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          Built upon modern, battle-tested foundations. Fast by default, secure
          by design, and scalable from a team of five to an organization of
          thousands.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mr-auto ml-auto gap-x-5 gap-y-5">

<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>

<div className="h-[280px] w-full relative z-10 flex items-center justify-center p-6 border-b border-white/[0.03]">
<svg className="w-full h-full opacity-80 mix-blend-screen" fill="none" viewbox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse" cx="50" cy="50" fill="rgba(255,255,255,0.3)" r="1" style={{animationDuration: '2s'}}></circle>
<circle className="animate-pulse" cx="250" cy="80" fill="rgba(255,255,255,0.3)" r="1" style={{animationDuration: '3s', animationDelay: '1s'}}></circle>
<circle className="animate-pulse" cx="200" cy="30" fill="rgba(255,255,255,0.2)" r="1" style={{animationDuration: '4s', animationDelay: '0.5s'}}></circle>
<g className="" transform="translate(150, 160)">
<ellipse className="" cx="0" cy="0" fill="rgba(255,255,255,0.02)" rx="80" ry="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></ellipse>
<ellipse className="animate-pulse" cx="0" cy="0" fill="rgba(255,255,255,0.03)" rx="60" ry="30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" style={{animationDuration: '4s'}}></ellipse>
<path d="M-40, -10 L0, 10 L40, -10 L0, -30 Z" fill="rgba(20,20,20,0.8)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>
<path d="M-40, -10 L0, 10 L0, 20 L-40, 0 Z" fill="rgba(10,10,10,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M40, -10 L0, 10 L0, 20 L40, 0 Z" fill="rgba(15,15,15,0.8)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M-20, -70 L-20, -20 A20,10 0 0,0 20,-20 L20, -70 Z" fill="url(#cylGrad1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"></path>
<ellipse cx="0" cy="-70" fill="rgba(30,30,30,0.9)" rx="20" ry="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1"></ellipse>
<ellipse className="animate-[spin_6s_linear_infinite]" cx="0" cy="-20" fill="none" rx="20" ry="10" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2" strokeWidth="1" style={{transformOrigin: '0px -20px'}}></ellipse>
<path className="animate-pulse" d="M0, -50 L40, -80" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2" strokeWidth="1" style={{animationDuration: '2s'}}></path>
<path className="animate-pulse" d="M0, -40 L-40, -60" stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2" strokeWidth="1" style={{animationDuration: '2s', animationDelay: '1s'}}></path>
<g className="animate-pulse" style={{animationDuration: '3s'}} transform="translate(40, -80) scale(0.6)">
<path d="M-10,0 L0,5 L10,0 L0,-5 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)"></path>
<path d="M-10,0 L0,5 L0,15 L-10,10 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)"></path>
<path d="M10,0 L0,5 L0,15 L10,10 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)"></path>
</g>
<g className="animate-pulse" style={{animationDuration: '4s', animationDelay: '1s'}} transform="translate(-40, -60) scale(0.5)">
<path d="M-10,0 L0,5 L10,0 L0,-5 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)"></path>
<path d="M-10,0 L0,5 L0,15 L-10,10 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)"></path>
<path d="M10,0 L0,5 L0,15 L10,10 Z" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)"></path>
</g>
</g>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="cylGrad1" x1="-20" x2="20" y1="-45" y2="-45">
<stop offset="0" stop-color="rgba(20,20,20,0.9)"></stop>
<stop offset="0.5" stop-color="rgba(40,40,40,0.9)"></stop>
<stop offset="1" stop-color="rgba(10,10,10,0.9)"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="p-8 pt-6 relative z-10 flex-grow">
<h3 className="text-sm md:text-base font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                Real-time, constantly in sync
              </h3>
<p className="text-xs text-white/50 font-light leading-relaxed">
                Every update reflects instantly across your team. No refreshing,
                no delays — everyone sees the same thing at the same time.
              </p>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="h-[280px] w-full relative z-10 flex items-center justify-center p-6 border-b border-white/[0.03]">
<svg className="w-full h-full opacity-80 mix-blend-screen" fill="none" viewbox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse" cx="80" cy="40" fill="rgba(255,255,255,0.2)" r="1" style={{animationDuration: '4s'}}></circle>
<circle className="animate-pulse" cx="220" cy="90" fill="rgba(255,255,255,0.3)" r="1" style={{animationDuration: '3s', animationDelay: '1.5s'}}></circle>
<g transform="translate(150, 160)">
<path d="M0, -20 L60, 10 L0, 40 L-60, 10 Z" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="animate-pulse" d="M0, -10 L40, 10 L0, 30 L-40, 10 Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" style={{animationDuration: '3.5s'}}></path>
<g transform="translate(0, -50)">
<path className="animate-pulse" d="M0, -50 Q40,-50 40,-20 Q40,10 0,40 Q-40,10 -40,-20 Q-40,-50 0,-50 Z" fill="rgba(10,10,10,0.5)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" style={{animationDuration: '4s'}}></path>
<path className="animate-pulse" d="M0, -40 Q35,-40 35,-10 Q35,20 0,50 Q-35,20 -35,-10 Q-35,-40 0,-40 Z" fill="url(#shieldGrad)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" style={{animationDuration: '3s'}}></path>
<path d="M0, -40 L0, 50" stroke="rgba(255,255,255,0.15)" strokeWidth="1"></path>
<path d="M-35, -10 L35, -10" stroke="rgba(255,255,255,0.15)" stroke-dasharray="2 2" strokeWidth="1"></path>
<g transform="translate(0, -5) scale(0.8)">
<path d="M-8,0 L-8,-5 A8,8 0 0,1 8,-5 L8,0" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2"></path>
<rect className="animate-pulse" fill="rgba(30,30,30,0.9)" height="16" r="2" rx="2" stroke="rgba(255,255,2558" style={{animationDuration: '2s'}} width="24" x="-12" y="0"></rect>
</g>
</g>
</g>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="shieldGrad" x1="-35" x2="35" y1="-40" y2="50">
<stop offset="0" stop-color="rgba(30,30,30,0.8)"></stop>
<stop offset="1" stop-color="rgba(5,5,5,0.9)"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="p-8 pt-6 relative z-10 flex-grow">
<h3 className="text-sm md:text-base font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                Security you never have to think about
              </h3>
<p className="text-xs text-white/50 font-light leading-relaxed">
                End-to-end encryption, role-based access, and enterprise-grade
                compliance baked in from the start. Your data stays yours.
              </p>
</div>
</div>
</div>

<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="h-[280px] w-full relative z-10 flex items-center justify-center p-6 border-b border-white/[0.03]">
<svg className="w-full h-full opacity-80 mix-blend-screen" fill="none" viewbox="0 0 300 240" xmlns="http://www.w3.org/2000/svg">
<circle className="animate-pulse" cx="260" cy="50" fill="rgba(255,255,255,0.3)" r="1" style={{animationDuration: '2.5s'}}></circle>
<circle className="animate-pulse" cx="60" cy="120" fill="rgba(255,255,255,0.2)" r="1" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></circle>
<circle className="animate-pulse" cx="150" cy="30" fill="rgba(255,255,255,0.2)" r="1" style={{animationDuration: '4s', animationDelay: '1.5s'}}></circle>
<g transform="translate(150, 160)">
<ellipse className="animate-pulse" cx="0" cy="0" fill="none" rx="70" ry="35" stroke="rgba(255,255,255,0.05)" strokeWidth="1" style={{animationDuration: '3s', animationDelay: '0s'}}></ellipse>
<ellipse className="animate-pulse" cx="0" cy="0" fill="none" rx="55" ry="27.5" stroke="rgba(255,255,255,0.1)" strokeWidth="1" style={{animationDuration: '3s', animationDelay: '0.5s'}}></ellipse>
<ellipse className="animate-pulse" cx="0" cy="0" fill="rgba(255,255,255,0.03)" rx="40" ry="20" stroke="rgba(255,255,255,0.2)" strokeWidth="1" style={{animationDuration: '3s', animationDelay: '1s'}}></ellipse>
<path d="M-25, -20 L-25, 0 A25,12.5 0 0,0 25,0 L25, -20 Z" fill="rgba(10,10,10,0.9)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M-25, -80 L-25, -10 A25,12.5 0 0,0 25,-10 L25, -80 Z" fill="url(#cylGrad3)" stroke="rgba(255,255,255,0.3)" strokeWidth="1"></path>
<ellipse cx="0" cy="-80" fill="rgba(25,25,25,0.9)" rx="25" ry="12.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"></ellipse>
<ellipse cx="0" cy="-80" fill="rgba(5,5,5,1)" rx="8" ry="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></ellipse>
<path d="M0, -76 L0, -10" stroke="rgba(255,255,255,0.15)" stroke-dasharray="2 2" strokeWidth="1"></path>
<ellipse className="animate-pulse" cx="0" cy="-10" fill="none" rx="27" ry="14" stroke="rgba(255,255,255,0.2)" strokeWidth="2" style={{animationDuration: '1.5s'}}></ellipse>
</g>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="cylGrad3" x1="-25" x2="25" y1="-45" y2="-45">
<stop offset="0" stop-color="rgba(15,15,15,0.9)"></stop>
<stop offset="0.7" stop-color="rgba(35,35,35,0.9)"></stop>
<stop offset="1" stop-color="rgba(5,5,5,0.9)"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="p-8 pt-6 relative z-10 flex-grow">
<h3 className="text-sm md:text-base font-normal tracking-tight text-white mb-2" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                Scales perfectly as your team grows
              </h3>
<p className="text-xs text-white/50 font-light leading-relaxed">
                Whether you're a team of three or three hundred, the platform
                handles the load without breaking a sweat.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:pt-32 sm:pb-32 z-10 w-full pt-16 pr-4 pb-16 pl-4 relative">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 relative" style={{background: 'linear-gradient(180deg, #1e1e1e 0%, #0a0a0a 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.8), 0 8px 16px -4px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
<iconify-icon className="text-white/80 relative z-10 animate-pulse" icon="solar:users-group-rounded-linear" style={{animationDuration: '3s', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} width="16"></iconify-icon>
<span className="text-xs font-normal text-white/90 tracking-wide uppercase relative z-10" style={{textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
            Customer Stories
          </span>
</div>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Trusted by elite teams
          <br/>
<span className="italic font-light text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — around the globe.
          </span>
</h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          See how the world's best product organizations are using our platform
          to scale their infrastructure and accelerate delivery.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1080px] mr-auto ml-auto gap-x-5 gap-y-5" locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(4) &gt; div:nth-of-type(2)">
<div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col p-8 md:p-12 justify-between" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="">
<svg className="lucide lucide-quote text-[#3b82f6] mb-8 relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
</svg>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-8 leading-relaxed relative z-10" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
                "Scaling our infrastructure used to be a nightmare of
                disconnected tools and manual reporting. Vertex brought
                everything into a single, cohesive environment. The real-time
                velocity tracking alone has saved us countless hours of status
                meetings. It handles our load effortlessly while giving us the
                insights we need to move faster."
              </h3>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-white/[0.04] relative z-10 mt-4">
<img alt="Sarah Jenkins" className="w-14 h-14 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=150&amp;h=150&amp;fit=crop&amp;q=80" style={{boxShadow: '0 4px 10px rgba(0,0,0,0.5)'}}/>
<div>
<h4 className="text-white text-base font-normal tracking-tight">
                  Sarah Jenkins
                </h4>
<p className="text-white/50 text-sm font-light">CTO at Horizon</p>
</div>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col p-6 lg:p-8 justify-between" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="">
<div className="flex gap-1 mb-6 relative z-10">
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-sm text-white/90 font-light leading-relaxed relative z-10 mb-6">
                "The native sync with our Git repositories is flawless. We
                mapped our workflows directly to our team's methodologies
                without friction. It just works."
              </p>
</div>
<div className="flex items-center gap-3 border-t border-white/[0.04] pt-4 mt-auto relative z-10">
<img alt="Marcus Thorne" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=150&amp;h=150&amp;fit=crop&amp;q=80" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)'}}/>
<div className="">
<h4 className="text-white text-sm font-normal">Marcus Thorne</h4>
<p className="text-white/50 text-xs font-light">
                  Staff Engineer, Nexus
                </p>
</div>
</div>
</div>
</div>
<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative group transition-all duration-500 hover:-translate-y-1" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full h-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col p-6 lg:p-8 justify-between" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<div className="">
<div className="flex gap-1 mb-6 relative z-10">
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-[#f59e0b]" fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-sm text-white/90 font-light leading-relaxed relative z-10 mb-6">
                "The customizable dashboards gave our product managers the
                visibility they needed without overwhelming the developers. It's
                the perfect balance of detail and simplicity."
              </p>
</div>
<div className="flex items-center gap-3 border-t border-white/[0.04] pt-4 mt-auto relative z-10">
<img alt="Elena Rodriguez" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&amp;h=150&amp;fit=crop&amp;q=80" style={{boxShadow: '0 2px 4px rgba(0,0,0,0.5)'}}/>
<div className="">
<h4 className="text-white text-sm font-normal">Elena Rodriguez</h4>
<p className="text-white/50 text-xs font-light">
                  Product Lead, Altius
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="sm:px-6 sm:pt-32 sm:pb-32 z-10 w-full pt-16 pr-4 pb-16 pl-4 relative">
<div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-16">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8 relative" style={{background: 'linear-gradient(180deg, #1e1e1e 0%, #0a0a0a 100%)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 2px rgba(0,0,0,0.8), 0 8px 16px -4px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 rounded-full opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
<svg className="lucide lucide-help-circle text-white/80 relative z-10 animate-pulse" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animationDuration: '3s', filter: 'drop-shadow(0 1px 1px rgba(0,0,0,0.8))'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
<path d="M12 17h.01"></path>
</svg>
<span className="text-xs font-normal text-white/90 tracking-wide uppercase relative z-10" style={{textShadow: '0 1px 1px rgba(0,0,0,0.8)'}}>
            FAQ
          </span>
</div>

<h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] text-white mb-6" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>
          Got questions?
          <br/>
<span className="italic font-light text-white/90" style={{fontFamily: '\'Playfair Display\', serif'}}>
            — we've got answers.
          </span>
</h2>
<p className="text-sm sm:text-base text-white/60 max-w-lg leading-relaxed font-light" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
          Everything you need to know about Vertex and how it integrates
          seamlessly with your current workflows.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-[1080px] mx-auto w-full items-start">

<div className="flex flex-col gap-8">
<div className="border-b border-white/[0.08] pb-8">
<h3 className="text-lg font-normal tracking-tight text-white mb-3" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              How does Vertex integrate with existing Git repositories?
            </h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
              Vertex provides native integration with GitHub, GitLab, and
              Bitbucket. You can map your repositories directly to projects,
              enabling automatic task state updates based on your commit history
              and PR statuses.
            </p>
</div>
<div className="border-b border-white/[0.08] pb-8">
<h3 className="text-lg font-normal tracking-tight text-white mb-3" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              Can I self-host Vertex on my own infrastructure?
            </h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
              Yes, our Enterprise plan includes a self-hosted option. We provide
              Docker images, Kubernetes manifests, and comprehensive
              documentation to securely deploy Vertex within your own network.
            </p>
</div>
<div className="border-b border-white/[0.08] pb-8">
<h3 className="text-lg font-normal tracking-tight text-white mb-3" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              What kind of analytics does the platform provide?
            </h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
              We offer real-time velocity tracking, sprint burndown charts, and
              predictive completion models. Our analytics engine aggregates data
              across all your teams to identify bottlenecks before they impact
              delivery.
            </p>
</div>
<div className="border-b border-white/[0.08] pb-8">
<h3 className="text-lg font-normal tracking-tight text-white mb-3" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              Is there a limit to the number of users or projects?
            </h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
              Our standard plans come with generous limits suitable for most
              teams. For organizations needing unlimited scale, our Enterprise
              tier offers unrestricted users, projects, and API requests.
            </p>
</div>
<div className="pb-8 lg:pb-0">
<h3 className="text-lg font-normal tracking-tight text-white mb-3" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)'}}>
              How do you handle data security and compliance?
            </h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
              Security is built into our core. All data is encrypted at rest and
              in transit. We are SOC 2 Type II certified, GDPR compliant, and
              offer role-based access control (RBAC) with detailed audit
              logging.
            </p>
</div>
</div>

<div className="sticky top-32 w-full hidden md:block">
<div className="rounded-[2rem] bg-gradient-to-b from-[#1e1e1e] to-[#121212] p-[1px] relative" style={{boxShadow: 'rgba(0, 0, 0, 0.9) 0px 24px 48px -12px'}}>
<div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none"></div>
<div className="w-full rounded-[2rem] bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] relative overflow-hidden flex flex-col p-6 lg:p-8" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.8)'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>

<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3.5">
<div className="w-10 h-10 rounded-xl bg-gradient-to-b from-[#333] to-[#111] flex items-center justify-center border border-white/10" style={{boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1), 0 2px 6px rgba(0,0,0,0.5)'}}>
<svg className="lucide lucide-check-square text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="9 11 12 14 22 4"></polyline>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</div>
<div>
<h4 className="text-sm font-medium text-white tracking-tight">
                      Active Sprint
                    </h4>
<p className="text-[11px] text-white/40 font-light mt-0.5">
                      3 tasks remaining
                    </p>
</div>
</div>
<div className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-white/60 font-light tracking-wide shadow-sm flex items-center gap-1.5">
<svg className="lucide lucide-calendar" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
                  Oct 12 - Oct 26
                </div>
</div>

<div className="flex flex-col gap-3 relative z-10">

<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors cursor-pointer group shadow-sm">
<div className="flex items-start justify-between mb-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-white/20 flex items-center justify-center bg-white/5 group-hover:border-white/40 transition-colors shrink-0">
<svg className="lucide lucide-check text-transparent group-hover:text-white/40 transition-colors" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/90 font-medium tracking-tight">
                        Update Authentication Flow
                      </span>
</div>
<span className="px-2 py-0.5 rounded-md bg-[#ef4444]/10 text-[#ef4444] text-[10px] border border-[#ef4444]/20 font-medium tracking-wide shadow-sm shrink-0">
                      High
                    </span>
</div>
<div className="flex items-center justify-between pl-7 ml-7">
<div className="flex -space-x-1.5">
<img alt="User" className="w-6 h-6 rounded-full object-cover border-2 border-[#1a1a1a]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=64&amp;h=64&amp;q=80"/>
<img alt="User" className="w-6 h-6 rounded-full object-cover border-2 border-[#1a1a1a]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=64&amp;h=64&amp;q=80"/>
</div>
<div className="text-[11px] text-white/40 flex items-center gap-1 font-light">
<svg className="lucide lucide-message-square" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                      4 comments
                    </div>
</div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-r from-[#3b82f6]/10 to-transparent border border-[#3b82f6]/20 relative overflow-hidden cursor-pointer shadow-sm">
<div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3b82f6]"></div>
<div className="flex items-start justify-between mb-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-[#3b82f6]/50 flex items-center justify-center bg-[#3b82f6]/10 text-[#3b82f6] shadow-sm shrink-0">
<svg className="lucide lucide-loader animate-spin" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{animationDuration: '3s'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<line x1="12" x2="12" y1="2" y2="6"></line>
<line x1="12" x2="12" y1="18" y2="22"></line>
<line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line>
<line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line>
<line x1="2" x2="6" y1="12" y2="12"></line>
<line x1="18" x2="22" y1="12" y2="12"></line>
<line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line>
<line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line>
</svg>
</div>
<span className="text-sm text-white/90 font-medium tracking-tight">
                        Migrate to WebGL 2.0 Context
                      </span>
</div>
<span className="px-2 py-0.5 rounded-md bg-[#f59e0b]/10 text-[#f59e0b] text-[10px] border border-[#f59e0b]/20 font-medium tracking-wide shadow-sm shrink-0">
                      Med
                    </span>
</div>
<div className="flex items-center justify-between pl-7 ml-7">
<div className="flex -space-x-1.5">
<img alt="User" className="w-6 h-6 rounded-full object-cover border-2 border-[#1a1a1a]" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=64&amp;h=64&amp;q=80"/>
</div>
<div className="text-[11px] text-[#3b82f6] flex items-center gap-1.5 font-medium tracking-wide">
                      In Progress
                    </div>
</div>
</div>

<div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 opacity-50 shadow-sm">
<div className="flex items-start justify-between mb-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-4 h-4 rounded border border-[#10b981]/50 flex items-center justify-center bg-[#10b981]/10 shadow-sm shrink-0">
<svg className="lucide lucide-check text-[#10b981]" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-white/60 font-medium tracking-tight line-through decoration-white/30">
                        Draft API Documentation
                      </span>
</div>
<span className="px-2 py-0.5 rounded-md bg-white/5 text-white/40 text-[10px] border border-white/10 font-medium tracking-wide shadow-sm shrink-0">
                      Low
                    </span>
</div>
<div className="flex items-center justify-between pl-7 ml-7">
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-gradient-to-b from-[#444] to-[#222] border-2 border-[#1a1a1a] flex items-center justify-center text-[9px] text-white/90 font-medium">
                        JD
                      </div>
</div>
<div className="text-[11px] text-[#10b981] flex items-center gap-1.5 font-medium tracking-wide">
                      Done
                    </div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-24 w-52 rounded-xl bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] border border-white/10 p-1.5 shadow-2xl z-20" style={{boxShadow: '0 16px 40px -8px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.1)'}}>
<div className="px-3 py-2 flex items-center gap-3 text-xs text-white/80 hover:bg-white/5 rounded-lg cursor-pointer transition-colors font-light">
<svg className="lucide lucide-edit-2 text-white/50" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
</svg>
                  Edit Task Details
                </div>
<div className="px-3 py-2 flex items-center gap-3 text-xs text-white/80 hover:bg-white/5 rounded-lg cursor-pointer transition-colors font-light">
<svg className="lucide lucide-user-plus text-white/50" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
                  Assign Team Member
                </div>
<div className="h-px bg-white/5 my-1.5 mx-1"></div>
<div className="px-3 py-2 flex items-center gap-3 text-xs text-[#ef4444] hover:bg-[#ef4444]/10 rounded-lg cursor-pointer00/svg" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<polyline points="3 6 5 6 21 6"></polyline>
<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
                  Delete Task
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:pb-0 sm:pl-0 sm:pr-0 sm:pt-0 w-full z-10 pt-16 pr-4 pb-32 pl-4 relative">
<div className="w-full mr-auto ml-auto">

<div className="flex flex-col gap-[1px] overflow-hidden w-full rounded-[2.5rem] gap-x-[1px] gap-y-[1px]" style={{background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 24px 48px -12px rgba(0,0,0,0.9)'}}>

<header className="overflow-hidden group min-h-[300px] md:min-h-[400px] flex bg-[#0a0a0a] relative items-center justify-center">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
<div className="absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)'}}></div>
<div className="relative z-10 p-8 md:p-16 w-full h-full flex items-center justify-center">
<h2 className="text-5xl md:text-[8rem] leading-none tracking-tighter font-normal text-white transition-transform duration-1000 ease-out group-hover:scale-[1.02]" style={{textShadow: '0 4px 12px rgba(0,0,0,0.8)'}}>
                Elevate Work.
              </h2>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-[1px]">

<div className="flex flex-col gap-[1px] bg-white/[0.05]">

<div className="p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors duration-300 hover:bg-[#111] bg-[#0a0a0a]">
<h3 className="text-lg md:text-xl tracking-tight text-white font-normal">
                  Connect with Vertex
                </h3>
<div className="flex gap-5 text-white/40">
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:linkedin-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:letter-x-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:play-stream-linear"></iconify-icon>
</a>
<a className="hover:text-white transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>
</div>

<div className="p-8 flex-1 transition-colors duration-300 hover:bg-[#111] flex flex-col justify-center bg-[#0a0a0a]">
<h3 className="text-xl md:text-2xl tracking-tight text-white mb-6 font-normal">
                  Platform capabilities
                </h3>
<ul className="text-white/50 text-xs md:text-sm space-y-4 flex flex-col font-light">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white/20 rounded-full block"></span>
                    Enterprise-grade task architecture
                  </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white/20 rounded-full block"></span>
                    Predictive sprint analytics
                  </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white/20 rounded-full block"></span>
                    Real-time collaborative boards
                  </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white/20 rounded-full block"></span>
                    Automated workflow orchestration
                  </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white/20 rounded-full block"></span>
                    24/7 dedicated platform support
                  </li>
</ul>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px]">
<div className="p-8 transition-colors duration-300 hover:bg-[#111] group cursor-pointer bg-[#0a0a0a]">
<div className="flex items-center gap-2 text-white mb-4 text-sm tracking-tight font-normal">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:monitor-linear"></iconify-icon>
                    Support
                  </div>
<a className="text-white/50 text-xs md:text-sm group-hover:text-white transition-colors font-light" href="mailto:support@vertex.io">
                    support@vertex.io
                  </a>
</div>
<div className="p-8 transition-colors duration-300 hover:bg-[#111] bg-[#0a0a0a]">
<div className="flex items-center gap-2 text-white mb-4 text-sm tracking-tight font-normal">
<iconify-icon className="text-white/40" icon="solar:city-linear"></iconify-icon>
                    Headquarters
                  </div>
<p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6 font-light">
                    Innovation District 12
                    <br/>
                    94107 — San Francisco
                    <br/>
                    California, USA
                  </p>
<p className="text-white text-lg tracking-tight font-normal">
                    +1 800 555-0199
                  </p>
</div>
</div>
</div>

<form className="flex flex-col gap-[1px] bg-white/[0.05]">

<div className="p-8 transition-colors duration-300 hover:bg-[#111] bg-[#0a0a0a]">
<h3 className="text-xl md:text-2xl tracking-tight text-white mb-2 font-normal">
                  Ready to transform your workflow?
                </h3>
<p className="text-white/50 text-xs md:text-sm font-light">
                  Provide your details below — our deployment team will connect
                  with you shortly.
                </p>
</div>

<div className="relative group transition-colors duration-300 focus-within:bg-[#111] bg-[#0a0a0a]">
<input className="w-full h-full bg-transparent p-6 md:p-8 text-sm text-white placeholder-white/30 outline-none font-light" placeholder="Full Name" required="" type="text"/>
</div>
<div className="relative group transition-colors duration-300 focus-within:bg-[#111] bg-[#0a0a0a]">
<input className="w-full h-full bg-transparent p-6 md:p-8 text-sm text-white placeholder-white/30 outline-none font-light" placeholder="Work Email" required="" type="email"/>
</div>
<div className="relative group transition-colors duration-300 focus-within:bg-[#111] bg-[#0a0a0a]">
<input className="w-full h-full bg-transparent p-6 md:p-8 text-sm text-white placeholder-white/30 outline-none font-light" placeholder="Workspace Name" type="text"/>
</div>
<div className="relative group flex-1 transition-colors duration-300 focus-within:bg-[#111] min-h-[150px] bg-[#0a0a0a]">
<textarea className="w-full h-full bg-transparent p-6 md:p-8 text-sm text-white placeholder-white/30 outline-none resize-none block font-light" placeholder="Current Workflow Challenges" required=""></textarea>
</div>

<div className="p-6 md:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 transition-colors duration-300 hover:bg-[#111] bg-[#0a0a0a]">
<p className="text-white/40 text-xs italic max-w-sm font-light leading-relaxed">
                  By submitting this form, you acknowledge our
                  <a className="hover:underline not-italic transition-colors text-white/80 hover:text-white" href="#">
                    Terms of Service
                  </a>
                  .
                </p>
<button className="relative text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 bg-gradient-to-b from-[#2e2e2e] to-[#141414] overflow-hidden" style={{boxShadow: 'inset 0 2px 2px rgba(255,255,255,0.15), inset 0 -2px 8px rgba(0,0,0,0.8), 0 8px 16px -4px rgba(0,0,0,0.9)'}} type="submit">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px'}}></div>
<iconify-icon className="text-xl md:text-2xl relative z-10" icon="solar:arrow-right-linear" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.9))'}}></iconify-icon>
</button>
</div>
</form>
</div>

<div className="p-8 md:p-10 flex items-center justify-between gap-12 overflow-x-auto hide-scrollbar whitespace-nowrap bg-[#050505]" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.03)'}}>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Quantum
            </span>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Horizon
            </span>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Stratosphere
            </span>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Mobius
            </span>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Helios
            </span>
<span className="text-xs font-normal tracking-widest text-white/30 hover:text-white/70 transition-colors duration-500 cursor-pointer uppercase">
              Vanguard
            </span>
</div>
</div>
</div>
</section>



    </>
  );
}
