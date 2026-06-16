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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
          if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
              gsap.set(".gsap-fade-up", { y: 40, opacity: 0 });
              ScrollTrigger.batch(".gsap-fade-up", {
                  onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, duration: 1.2, ease: "power3.out", overwrite: true }),
                  start: "top 85%"
              });
          }
      });
    


      const canvas = document.getElementById('ambient-canvas');
      const gl = canvas.getContext('webgl');

      const vertexShaderSource = `
          attribute vec2 position;
          void main() {
              gl_Position = vec4(position, 0.0, 1.0);
          }
      `;

      const fragmentShaderSource = `
          precision highp float;
          uniform vec2 u_resolution;
          uniform float u_time;

          void main() {
              vec2 uv = gl_FragCoord.xy / u_resolution.xy;

              float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453) * 0.04;

              float wave = sin(uv.x * 2.0 + u_time * 0.5) * 0.5 + 0.5;
              float wave2 = cos(uv.y * 3.0 - u_time * 0.3) * 0.5 + 0.5;

              vec3 darkBase = vec3(0.01, 0.01, 0.02);
              vec3 cyanTint = vec3(0.0, 0.05, 0.08);
              vec3 finalColor = mix(darkBase, cyanTint, wave * wave2);

              gl_FragColor = vec4(finalColor + noise, 1.0);
          }
      `;

      function compileShader(gl, type, source) {
          const shader = gl.createShader(type);
          gl.shaderSource(shader, source);
          gl.compileShader(shader);
          return shader;
      }

      const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
      const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      gl.useProgram(program);

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      const positions = [
          -1.0, -1.0,
           1.0, -1.0,
          -1.0,  1.0,
          -1.0,  1.0,
           1.0, -1.0,
           1.0,  1.0,
      ];
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

      const positionLocation = gl.getAttribLocation(program, "position");
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
      const timeLocation = gl.getUniformLocation(program, "u_time");

      function render(time) {
          if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              gl.viewport(0, 0, canvas.width, canvas.height);
          }
          gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
          gl.uniform1f(timeLocation, time * 0.001);
          gl.drawArrays(gl.TRIANGLES, 0, 6);
          requestAnimationFrame(render);
      }
      requestAnimationFrame(render);


      document.addEventListener("DOMContentLoaded", () => {
          gsap.registerPlugin(ScrollTrigger);

          gsap.set(".gsap-bg-img", { scale: 1.1, opacity: 0 });
          gsap.set(".gsap-curve", { scaleX: 1.2, transformOrigin: "left center" });
          gsap.set(".gsap-sidebar", { x: -50, opacity: 0 });
          gsap.set(".gsap-line", { strokeDasharray: "1000", strokeDashoffset: "1000" });
          gsap.set(".gsap-reveal", { yPercent: 100 });
          gsap.set(".gsap-scroll-element", { y: 20, opacity: 0 });
          gsap.set(".gsap-card", { y: 40, opacity: 0, scale: 0.95 });
          gsap.set(".gsap-pagination", { x: 20, opacity: 0 });

          const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
          tl.to(".gsap-bg-img", { duration: 2.5, scale: 1, opacity: 0.3, ease: "power2.out" }, 0)
            .to(".gsap-curve", { duration: 2, scaleX: 1, ease: "power4.inOut" }, 0.2)
            .to(".gsap-sidebar", { duration: 1.5, x: 0, opacity: 1 }, 0.8)
            .to(".gsap-line", { duration: 2, strokeDashoffset: 0, ease: "power2.inOut", opacity: 0.2 }, 1.5);

          let statsAnimated = false;
          function animateStats() {
              if (statsAnimated) return;
              statsAnimated = true;

              document.querySelectorAll(".stat-number").forEach((stat, index) => {
                  const target = Number(stat.dataset.statTarget || 0);
                  const counter = { value: 0 };

                  stat.classList.add("is-counting");

                  gsap.to(counter, {
                      value: target,
                      duration: 1.6,
                      delay: 0.65 + index * 0.12,
                      ease: "power3.out",
                      onUpdate: () => {
                          stat.textContent = Math.round(counter.value).toString();
                      },
                      onComplete: () => {
                          stat.textContent = target.toString();
                          gsap.delayedCall(0.35, () => stat.classList.remove("is-counting"));
                      }
                  });
              });
          }

          let cardsAnimated = false;
          function animateSystemCards() {
              if (cardsAnimated) return;
              cardsAnimated = true;

              document.querySelectorAll(".card-progress-fill").forEach((bar, index) => {
                  const target = Number(bar.dataset.progressTarget || 92);
                  bar.classList.add("is-filling");

                  gsap.to(bar, {
                      width: target + "%",
                      duration: 1.35,
                      delay: 0.85 + index * 0.04,
                      ease: "power3.out",
                      onComplete: () => {
                          gsap.delayedCall(0.35, () => bar.classList.remove("is-filling"));
                      }
                  });
              });

              document.querySelectorAll(".card-progress-value").forEach((value, index) => {
                  const target = Number(value.dataset.progressTarget || 92);
                  const counter = { value: 0 };
                  value.classList.add("is-counting");

                  gsap.to(counter, {
                      value: target,
                      duration: 1.35,
                      delay: 0.85 + index * 0.04,
                      ease: "power3.out",
                      onUpdate: () => {
                          value.textContent = Math.round(counter.value) + "%";
                      },
                      onComplete: () => {
                          value.textContent = target + "%";
                          gsap.delayedCall(0.35, () => value.classList.remove("is-counting"));
                      }
                  });
              });
          }

          ScrollTrigger.create({
              trigger: "#main-content",
              start: "top 85%",
              onEnter: () => {
                  gsap.to(".gsap-reveal", { duration: 1.2, yPercent: 0, stagger: 0.15, ease: "expo.out" });
                  gsap.to(".gsap-scroll-element", { duration: 1, y: 0, opacity: 1, stagger: 0.1, delay: 0.4 });
                  gsap.to(".gsap-card", { duration: 1.2, y: 0, opacity: 1, scale: 1, ease: "back.out(1.2)", delay: 0.8 });
                  gsap.to(".gsap-pagination", { duration: 1, x: 0, opacity: 1, delay: 1 });
                  animateStats();
                  animateSystemCards();
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-50" id="ambient-canvas"></canvas>

<div className="fixed inset-0 z-0 flex justify-end overflow-hidden">
<img alt="Abstract Architecture" className="gsap-bg-img w-[65%] h-full object-cover object-center opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{filter: 'grayscale(1) contrast(1.2)'}}/>

<svg className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-[30px_0_40px_rgba(0,0,0,1)]" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="gsap-curve" d="M0,0 L0,100 L55,100 Q75,50 55,0 Z" fill="#09090B"></path>
</svg>
</div>

<div aria-hidden="true" className="orbital-bg">
<div className="orbital-stage">
<svg preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<radialgradient cx="70%" cy="50%" id="orbital-glow" r="45%">
<stop offset="0%" stop-color="#22d3ee" stop-opacity="0.24"></stop>
<stop offset="42%" stop-color="#22d3ee" stop-opacity="0.07"></stop>
<stop offset="100%" stop-color="#22d3ee" stop-opacity="0"></stop>
</radialgradient>
</defs>
<rect fill="url(#orbital-glow)" height="100" width="100"></rect>
<ellipse className="orbital-core" cx="73" cy="52" rx="15" ry="28"></ellipse>
<ellipse cx="73" cy="52" fill="rgba(255,255,255,0.03)" rx="7.5" ry="14" stroke="rgba(34,211,238,0.18)" strokeWidth="0.035"></ellipse>
<ellipse className="orbital-line" cx="74" cy="52" rx="28" ry="47"></ellipse>
<ellipse className="orbital-line thin" cx="76" cy="52" rx="38" ry="66"></ellipse>
<path className="orbital-line" d="M48,79 C63,53 78,44 100,34"></path>
<path className="orbital-line thin" d="M55,92 C72,75 88,70 100,66"></path>
<circle cx="72" cy="52" fill="#22d3ee" opacity="0.8" r="0.35"></circle>
<circle cx="85" cy="37" fill="#22d3ee" opacity="0.65" r="0.2"></circle>
<circle cx="91" cy="68" fill="#22d3ee" opacity="0.75" r="0.25"></circle>
</svg>
</div>
</div>

<main className="relative z-10 flex w-full">

<aside className="gsap-sidebar fixed left-0 top-0 flex flex-col justify-between items-center w-16 sm:w-20 md:w-24 h-screen border-r border-zinc-900 py-10 shrink-0 z-30 bg-[#09090B]/50 backdrop-blur-sm">

<div className="flex flex-col items-center gap-8">
<span className="text-xs tracking-widest font-light text-zinc-100 uppercase rotate-180 select-none" style={{writingMode: 'vertical-rl'}}>
            LUMINA
          </span>
<iconify-icon className="text-cyan-400 text-lg" icon="solar:programming-linear"></iconify-icon>
</div>

<nav className="flex flex-col gap-10 items-center">
<div className="relative group cursor-pointer flex items-center justify-center w-full">
<span className="text-xs tracking-widest text-zinc-100 uppercase rotate-180 transition-colors select-none" style={{writingMode: 'vertical-rl'}}>
              NEXUS
            </span>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[2px] h-4 bg-cyan-400"></div>
</div>
<div className="relative group cursor-pointer flex items-center justify-center w-full">
<span className="text-xs tracking-widest text-zinc-600 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{writingMode: 'vertical-rl'}}>
              SYSTEMS
            </span>
</div>
<div className="relative group cursor-pointer flex items-center justify-center w-full">
<span className="text-xs tracking-widest text-zinc-600 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{writingMode: 'vertical-rl'}}>
              MODELS
            </span>
</div>
<div className="relative group cursor-pointer flex items-center justify-center w-full">
<span className="text-xs tracking-widest text-zinc-600 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{writingMode: 'vertical-rl'}}>
              ARCHIVE
            </span>
</div>
<div className="relative group cursor-pointer flex items-center justify-center w-full">
<span className="text-xs tracking-widest text-zinc-600 group-hover:text-zinc-200 transition-colors uppercase rotate-180 select-none" style={{writingMode: 'vertical-rl'}}>
              TRANSMIT
            </span>
</div>
</nav>

<div className="flex flex-col items-center gap-4">
<div className="w-6 h-6 rounded-full border border-zinc-800 flex items-center justify-center">
<div className="w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
</div>
<div className="text-xs tracking-widest text-zinc-600 text-center uppercase leading-loose select-none font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            NEURAL GRID
            <br/>
            v2.4.0
          </div>
</div>
</aside>

<section className="flex-1 flex flex-col justify-start pt-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 max-w-5xl relative z-20 min-h-screen pb-[10vh]" id="main-content">

<div className="gsap-scroll-element flex items-center gap-3 mb-8">
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            MACHINE LEARNING
          </span>
<iconify-icon className="text-zinc-600 text-xs" icon="solar:close-linear"></iconify-icon>
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            ARCHITECTURE
          </span>
</div>

<h1 className="tracking-tighter text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-zinc-100 mb-8 select-none font-thin">
<div className="gsap-reveal-container flex flex-col">
<div className="overflow-hidden py-2">
<span className="gsap-reveal inline-block">SYNTHESIS</span>
</div>
<div className="overflow-hidden py-2">
<span className="gsap-reveal inline-block">IS OUR</span>
</div>
<div className="overflow-hidden py-2">
<span className="gsap-reveal inline-block italic font-extralight text-zinc-500">
                CATALYST
              </span>
</div>
</div>
</h1>

<div className="gsap-scroll-element flex items-center gap-4 mb-8 w-64 opacity-50">
<div className="h-[1px] flex-1 bg-gradient-to-r from-zinc-700 to-transparent"></div>
<iconify-icon className="text-cyan-400 text-sm" icon="solar:cpu-linear"></iconify-icon>
<div className="h-[1px] flex-1 bg-gradient-to-l from-zinc-700 to-transparent"></div>
</div>

<p className="gsap-scroll-element text-sm md:text-base text-zinc-400 max-w-[22rem] sm:max-w-md leading-relaxed mb-12 font-thin">
          LUMINA orchestrates advanced spatial computing and neural networks to
          forge architectures of the future. We transcend traditional
          constraints, translating raw structures into immersive digital
          realities.
        </p>

<div className="gsap-scroll-element flex flex-wrap items-center gap-8">

<div className="cta-shell p-[1px] rounded bg-zinc-900/80 transition-all duration-500 group inline-block cursor-pointer">
<button className="bg-[#030303] text-zinc-100 px-6 py-4 rounded flex items-center gap-4 transition-all duration-300 h-full w-full hover:bg-[#050505]">
<span className="text-xs tracking-widest font-light uppercase relative z-10">
                INITIALIZE SEQUENCE
              </span>
<iconify-icon className="text-lg relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<button className="group flex items-center gap-3 text-zinc-500 hover:text-zinc-200 transition-colors duration-300">
<span className="text-xs tracking-widest font-light uppercase">
              EXPLORE MODELS
            </span>
<iconify-icon className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>

<div className="gsap-scroll-element mt-16 flex flex-wrap items-end gap-8 md:gap-12 xl:gap-16 border-t border-zinc-900 pt-8 w-full max-w-lg">
<div className="flex flex-col gap-2">
<span className="text-xs tracking-widest text-zinc-600 uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              DEPLOYMENTS
            </span>
<div className="flex items-baseline gap-1">
<span className="stat-number text-4xl text-zinc-200 font-light" data-stat-target="256">
                0
              </span>
<span className="text-xl text-cyan-400 font-light">+</span>
</div>
<div className="w-4 h-[1px] bg-zinc-800 mt-2"></div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs tracking-widest text-zinc-600 uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              NODES
            </span>
<div className="flex items-baseline gap-1">
<span className="stat-number text-4xl text-zinc-200 font-light" data-stat-target="89">
                0
              </span>
</div>
<div className="w-4 h-[1px] bg-zinc-800 mt-2"></div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs tracking-widest text-zinc-600 uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              AWARDS
            </span>
<div className="flex items-baseline gap-1">
<span className="stat-number text-4xl text-zinc-200 font-light" data-stat-target="42">
                0
              </span>
</div>
<div className="w-4 h-[1px] bg-zinc-800 mt-2"></div>
</div>
</div>

<div className="gsap-card system-card relative z-30 mt-12 p-[1px] rounded-lg group overflow-hidden bg-gradient-to-br from-cyan-500/40 via-zinc-800/80 to-transparent shadow-[0_20px_40px_-15px_rgba(0,229,255,0.08)] backdrop-blur-xl block xl:hidden w-full max-w-[22rem] sm:max-w-sm">
<div className="bg-[#030303]/95 w-full h-auto p-6 flex flex-col gap-5 relative z-10 rounded-lg">
<div className="flex justify-between items-center w-full">
<div className="flex items-center gap-2">
<div className="card-status-dot w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
<span className="text-xs tracking-widest text-cyan-400 uppercase">
                  ACTIVE
                </span>
</div>
<span className="text-xs tracking-widest text-zinc-500 uppercase cursor-pointer hover:text-zinc-100 transition-colors">
                VIEW ALL
              </span>
</div>
<div className="flex gap-4 items-center">
<img alt="NEXUS GRID" className="card-image w-20 h-16 object-cover rounded filter grayscale contrast-125" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col gap-1.5">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase">
                  NEXUS GRID
                </h3>
<p className="text-xs text-zinc-500 font-thin">Spatial Computing</p>
<p className="text-xs text-zinc-600 tracking-widest font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                  ML • WEBGL
                </p>
</div>
</div>
<div className="flex flex-col gap-2 w-full mt-2">
<div className="flex justify-between items-center text-xs text-zinc-500 tracking-widest uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>SYSTEM CORE</span>
<span className="card-progress-value text-zinc-200" data-progress-target="92">
                  0%
                </span>
</div>
<div className="w-full h-[2px] bg-zinc-800 relative rounded-full">
<div className="card-progress-fill absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]" data-progress-target="92"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none rounded-lg"></div>
</div>
</section>

<div className="gsap-pagination fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 items-center z-30">
<div className="flex flex-col items-center gap-2">
<span className="text-xs text-cyan-400 tracking-widest font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            01
          </span>
<div className="w-4 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.6)]"></div>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<iconify-icon className="text-zinc-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity mb-1" icon="solar:programming-linear"></iconify-icon>
<span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            02
          </span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            03
          </span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<span className="text-xs text-zinc-600 tracking-widest transition-colors group-hover:text-zinc-200 font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
            04
          </span>
</div>
</div>

<div className="gsap-card system-card absolute top-[calc(100vh-16rem)] right-24 z-30 p-[1px] rounded-lg group overflow-hidden bg-gradient-to-br from-cyan-500/40 via-zinc-800/80 to-transparent shadow-[0_20px_40px_-15px_rgba(0,229,255,0.08)] backdrop-blur-xl hidden xl:block">
<div className="bg-[#030303]/95 w-80 h-full p-6 flex flex-col gap-5 relative z-10 rounded-lg">
<div className="flex justify-between items-center w-full">
<div className="flex items-center gap-2">
<div className="card-status-dot w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,229,255,0.8)]"></div>
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
                ACTIVE
              </span>
</div>
<span className="text-xs tracking-widest text-zinc-500 uppercase cursor-pointer hover:text-zinc-100 transition-colors font-light">
              VIEW ALL
            </span>
</div>
<div className="flex gap-4 items-center">
<img alt="NEXUS GRID" className="card-image w-20 h-16 object-cover rounded filter grayscale contrast-125" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col gap-1.5">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase">
                NEXUS GRID
              </h3>
<p className="text-xs text-zinc-500 font-thin">Spatial Computing</p>
<p className="text-xs text-zinc-600 tracking-widest font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                ML • WEBGL
              </p>
</div>
</div>
<div className="flex flex-col gap-2 w-full mt-2">
<div className="flex justify-between items-center text-xs text-zinc-500 tracking-widest uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
<span>SYSTEM CORE</span>
<span className="card-progress-value text-zinc-200" data-progress-target="92">
                0%
              </span>
</div>
<div className="w-full h-[2px] bg-zinc-800 relative rounded-full">
<div className="card-progress-fill absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.4)]" data-progress-target="92"></div>
</div>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none rounded-lg"></div>
</div>
</main>

<section className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-20 pt-6 overflow-hidden">
<div className="max-w-6xl border-t border-zinc-900 pt-6">
<p className="mb-5 text-xs tracking-[0.34em] text-zinc-600 uppercase font-thin" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
          Trusted by teams building spatial AI
        </p>
<div className="logo-strip relative overflow-hidden border border-zinc-900/80 bg-zinc-950/20 backdrop-blur-sm rounded-xl">
<div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#09090B] to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#09090B] to-transparent"></div>
<div className="logo-marquee-track flex w-max items-center gap-3 py-4 px-3">

<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Aether
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Orbital
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Monolith
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Vektor
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                NOVA
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Helix
              </span>
</div>

<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Aether
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Orbital
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Monolith
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Vektor
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                NOVA
              </span>
</div>
<div className="logo-card relative overflow-hidden flex items-center justify-center min-w-44 px-5 py-5 rounded-lg border border-zinc-800/80 bg-[#030303]/70 text-zinc-400">
<span className="text-xs tracking-[0.24em] uppercase font-light text-zinc-300">
                Helix
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-32 pt-10" id="capabilities">
<div className="max-w-5xl border-t border-zinc-900 pt-16">

<div className="gsap-fade-up flex items-center gap-3 mb-10">
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            SYSTEM MODULES
          </span>
<div className="h-[1px] w-12 bg-cyan-400/30"></div>
</div>
<h2 className="gsap-fade-up tracking-tighter text-4xl md:text-6xl leading-[0.9] text-zinc-100 mb-16 select-none font-thin">
<span className="italic font-extralight text-zinc-500">ELEVATING</span>
          COGNITIVE STRUCTURES
        </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="gsap-fade-up group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900/50 hover:from-cyan-500/40 hover:to-zinc-900/50 transition-colors duration-700">
<div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-xl z-0 rounded-xl"></div>
<div className="relative z-10 p-8 flex flex-col gap-6 h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-3">
                  Neural Processing
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-thin">
                  Advanced computation matrices that adapt to incoming data
                  streams in real-time, optimizing resource allocation.
                </p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mt-2"></div>
</div>
</div>

<div className="gsap-fade-up group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900/50 hover:from-cyan-500/40 hover:to-zinc-900/50 transition-colors duration-700">
<div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-xl z-0 rounded-xl"></div>
<div className="relative z-10 p-8 flex flex-col gap-6 h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500" icon="solar:database-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-3">
                  Quantum Storage
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-thin">
                  Immutable data architectures designed for zero-latency
                  retrieval and infinite scalability across dimensions.
                </p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mt-2"></div>
</div>
</div>

<div className="gsap-fade-up group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900/50 hover:from-cyan-500/40 hover:to-zinc-900/50 transition-colors duration-700">
<div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-xl z-0 rounded-xl"></div>
<div className="relative z-10 p-8 flex flex-col gap-6 h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500" icon="solar:shield-network-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-3">
                  Synaptic Security
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-thin">
                  Cryptographic protocols interwoven with behavioral AI to
                  predict and neutralize threats before manifestation.
                </p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mt-2"></div>
</div>
</div>

<div className="gsap-fade-up group relative p-[1px] rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900/50 hover:from-cyan-500/40 hover:to-zinc-900/50 transition-colors duration-700">
<div className="absolute inset-0 bg-[#030303]/95 backdrop-blur-xl z-0 rounded-xl"></div>
<div className="relative z-10 p-8 flex flex-col gap-6 h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all duration-500">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-cyan-400 transition-colors duration-500" icon="solar:global-linear"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-3">
                  Omni-Integration
                </h3>
<p className="text-sm text-zinc-500 leading-relaxed font-thin">
                  Seamless interoperability across disparate ecosystems, unified
                  under a singular, intuitive command nexus.
                </p>
</div>
<div className="w-full h-[1px] bg-gradient-to-r from-zinc-800 to-transparent mt-2"></div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-32 pt-10">
<div className="max-w-5xl border-t border-zinc-900 pt-16">
<div className="gsap-fade-up flex items-center gap-3 mb-10">
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            NETWORK TELEMETRY
          </span>
<div className="h-[1px] w-12 bg-cyan-400/30"></div>
</div>
<h2 className="gsap-fade-up tracking-tighter text-4xl md:text-6xl leading-[0.9] text-zinc-100 mb-16 select-none font-thin">
<span className="italic font-extralight text-zinc-500">GLOBAL</span>
<br/>
          DATA STREAMS
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="gsap-fade-up col-span-1 md:col-span-2 p-[1px] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900/50 group overflow-hidden">
<div className="bg-[#030303]/95 h-full rounded-xl p-8 relative overflow-hidden flex flex-col justify-between min-h-[240px]">
<div>
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-2 relative z-10">
                  Real-time Processing
                </h3>
<p className="text-xs text-zinc-500 font-thin mb-8 relative z-10 max-w-xs">
                  Continuous data ingestion across 40+ global nodes, rendering
                  structures with zero latency.
                </p>
</div>
<div className="flex gap-3 items-end relative z-10 h-24">
<div className="w-1/5 bg-cyan-400/20 rounded-t animate-[pulse_1.5s_ease-in-out_infinite]" style={{height: '40%'}}></div>
<div className="w-1/5 bg-cyan-400/30 rounded-t animate-[pulse_1.7s_ease-in-out_infinite_0.2s]" style={{height: '70%'}}></div>
<div className="w-1/5 bg-cyan-400/50 rounded-t animate-[pulse_1.4s_ease-in-out_infinite_0.4s]" style={{height: '50%'}}></div>
<div className="w-1/5 bg-cyan-400/70 rounded-t animate-[pulse_1.8s_ease-in-out_infinite_0.6s]" style={{height: '90%'}}></div>
<div className="w-1/5 bg-cyan-400/90 rounded-t animate-[pulse_1.6s_ease-in-out_infinite_0.8s]" style={{height: '60%'}}></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
</div>
</div>
<div className="gsap-fade-up col-span-1 p-[1px] rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900/50 group">
<div className="bg-[#030303]/95 h-full rounded-xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
<iconify-icon className="text-4xl text-cyan-400 mb-6 animate-[spin_4s_linear_infinite]" icon="solar:radar-linear"></iconify-icon>
<h3 className="text-3xl tracking-wide text-zinc-100 font-light uppercase mb-2">
                99.99%
              </h3>
<p className="text-[10px] tracking-widest text-zinc-500 font-thin uppercase" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
                Uptime Sync
              </p>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
</div>
</div>
</div>
</div>
</section>
<section className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-32 pt-10">
<div className="max-w-5xl border-t border-zinc-900 pt-16">
<div className="gsap-fade-up flex items-center gap-3 mb-10">
<span className="text-xs tracking-widest text-cyan-400 uppercase font-light">
            DEPLOYMENT
          </span>
<div className="h-[1px] w-12 bg-cyan-400/30"></div>
</div>
<h2 className="gsap-fade-up tracking-tighter text-4xl md:text-6xl leading-[0.9] text-zinc-100 mb-16 select-none font-thin">
<span className="italic font-extralight text-zinc-500">PROVEN</span>
<br/>
          ARCHITECTURES
        </h2>
<div className="flex flex-col gap-4">
<div className="gsap-fade-up group p-6 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-500 cursor-pointer flex justify-between items-center overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
<div className="relative z-10 pl-2">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-1">
                Aether Framework
              </h3>
<p className="text-xs text-zinc-500 font-thin">
                Deployed in Q3 2023 • Quantum Resistance
              </p>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-cyan-400 text-xl transition-colors duration-500 relative z-10" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="gsap-fade-up group p-6 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-500 cursor-pointer flex justify-between items-center overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
<div className="relative z-10 pl-2">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-1">
                Orbital Nexus
              </h3>
<p className="text-xs text-zinc-500 font-thin">
                Deployed in Q1 2024 • Global Synaptic Mesh
              </p>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-cyan-400 text-xl transition-colors duration-500 relative z-10" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="gsap-fade-up group p-6 rounded-xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/80 hover:border-zinc-700 transition-all duration-500 cursor-pointer flex justify-between items-center overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></div>
<div className="relative z-10 pl-2">
<h3 className="text-sm tracking-wide text-zinc-100 font-light uppercase mb-1">
                Vektor Core
              </h3>
<p className="text-xs text-zinc-500 font-thin">
                Deployed in Q2 2024 • Spatial Rendering
              </p>
</div>
<iconify-icon className="text-zinc-600 group-hover:text-cyan-400 text-xl transition-colors duration-500 relative z-10" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<div className="relative z-10 w-full flex justify-center py-10 opacity-30 pointer-events-none">
<div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
</div>

<section className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 pb-32 pt-10">
<div className="max-w-5xl text-center flex flex-col items-center">
<h2 className="gsap-fade-up tracking-tighter text-4xl md:text-6xl leading-[0.9] text-zinc-100 mb-8 select-none font-thin">
<span className="italic font-extralight text-zinc-500">INITIATE</span>
          YOUR SEQUENCE
        </h2>
<p className="gsap-fade-up text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed mb-12 font-thin mx-auto">
          Join the vanguard of spatial computing. Deploy our neural frameworks
          to construct reality-defying applications.
        </p>
<div className="gsap-fade-up cta-shell p-[1px] rounded bg-zinc-900/80 transition-all duration-500 group inline-block cursor-pointer">
<button className="bg-[#030303] text-zinc-100 px-8 py-5 rounded flex items-center gap-4 transition-all duration-300 h-full w-full hover:bg-[#050505]">
<span className="text-xs tracking-widest font-light uppercase relative z-10">
              ACCESS TERMINAL
            </span>
<iconify-icon className="text-lg relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-cyan-400" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="relative z-10 pl-24 sm:pl-28 md:pl-40 lg:pl-48 pr-6 sm:pr-10 md:pr-24 lg:pr-32 py-20 border-t border-zinc-900/80 bg-[#050505] overflow-hidden">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"></div>
<div className="max-w-5xl flex flex-col gap-16 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="col-span-1 md:col-span-2 flex flex-col gap-6">
<div className="flex items-center gap-4">
<iconify-icon className="text-cyan-400 text-2xl group-hover:rotate-180 transition-transform duration-700" icon="solar:programming-linear"></iconify-icon>
<span className="text-sm tracking-[0.2em] font-light text-zinc-200 uppercase">
                LUMINA
              </span>
</div>
<p className="text-xs text-zinc-500 font-thin max-w-sm leading-relaxed">
              Synthesis is our catalyst. We orchestrate advanced spatial
              computing to forge architectures of the future. Seamlessly
              bridging the digital and the cognitive.
            </p>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-widest text-zinc-600 uppercase font-thin mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              PLATFORM
            </span>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              Nexus
            </a>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              Systems
            </a>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              Models
            </a>
</div>
<div className="flex flex-col gap-4">
<span className="text-[10px] tracking-widest text-zinc-600 uppercase font-thin mb-2" style={{fontFamily: '\'JetBrains Mono\', monospace'}}>
              COMPANY
            </span>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              About
            </a>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              Careers
            </a>
<a className="text-xs tracking-widest text-zinc-400 hover:text-cyan-400 transition-colors uppercase font-light" href="#">
              Contact
            </a>
</div>
</div>
<div className="w-full h-[1px] bg-zinc-900 relative">
<div className="absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-[logo-scan_4.5s_ease-in-out_infinite]"></div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-[10px] tracking-widest font-light text-zinc-600 uppercase">
            LUMINA SYS © 2024
          </span>
<div className="flex items-center gap-8">
<a className="text-[10px] tracking-widest text-zinc-600 hover:text-cyan-400 transition-colors uppercase font-thin" href="#">
              TERMS
            </a>
<a className="text-[10px] tracking-widest text-zinc-600 hover:text-cyan-400 transition-colors uppercase font-thin" href="#">
              PRIVACY
            </a>
<a className="text-[10px] tracking-widest text-zinc-600 hover:text-cyan-400 transition-colors uppercase font-thin" href="#">
              STATUS
            </a>
</div>
</div>
</div>
</footer>


<svg className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-[0.03]" preserveaspectratio="none">
<line className="gsap-line" stroke="#00e5ff" strokeWidth="1" x1="10%" x2="40%" y1="100%" y2="80%"></line>
<line className="gsap-line" stroke="#00e5ff" strokeWidth="1" x1="60%" x2="80%" y1="100%" y2="60%"></line>
</svg>


    </>
  );
}
