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



      document.addEventListener('DOMContentLoaded', () => {
                const canvas = document.getElementById('webgl-stars');
                const gl = canvas.getContext('webgl');
                if (gl) {
                    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; gl.viewport(0, 0, canvas.width, canvas.height); };
                    window.addEventListener('resize', resize);
                    resize();

                    const vs = gl.createShader(gl.VERTEX_SHADER);
                    gl.shaderSource(vs, `attribute vec3 position; uniform float time; varying float vAlpha; void main() { float z = mod(position.z - time * 0.1, 1.0); vec2 pos = position.xy / (z * 2.0); gl_Position = vec4(pos, 0.0, 1.0); gl_PointSize = (1.0 - z) * 2.5; vAlpha = (1.0 - z) * 0.8; }`);
                    gl.compileShader(vs);

                    const fs = gl.createShader(gl.FRAGMENT_SHADER);
                    // Tinted red instead of green
                    gl.shaderSource(fs, `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(1.0, 0.4, 0.4, vAlpha); }`);
                    gl.compileShader(fs);

                    const prog = gl.createProgram();
                    gl.attachShader(prog, vs); gl.attachShader(prog, fs); gl.linkProgram(prog); gl.useProgram(prog);

                    const stars = new Float32Array(3000);
                    for(let i=0; i<3000; i+=3) { stars[i] = (Math.random() - 0.5) * 4.0; stars[i+1] = (Math.random() - 0.5) * 4.0; stars[i+2] = Math.random(); }

                    const buf = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, stars, gl.STATIC_DRAW);

                    const posLoc = gl.getAttribLocation(prog, "position");
                    gl.enableVertexAttribArray(posLoc); gl.vertexAttribPointer(posLoc, 3, gl.FLOAT, false, 0, 0);

                    const timeLoc = gl.getUniformLocation(prog, "time");
                    let start = performance.now();
                    const draw = (now) => {
                        gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
                        gl.uniform1f(timeLoc, (now - start) / 1000.0);
                        gl.drawArrays(gl.POINTS, 0, 1000);
                        requestAnimationFrame(draw);
                    };
                    draw(start);
                }

                const track = document.getElementById('marquee-track');
                if(track) {
                    track.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-50%)' }
                    ], { duration: 40000, iterations: Infinity, easing: 'linear' });
                }

                const light1 = document.getElementById('light1');
                const light2 = document.getElementById('light2');

                if(light1) {
                    light1.animate([
                        { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 },
                        { transform: 'translate(-45%, 5%) scale(1.1)', opacity: 0.2 },
                        { transform: 'translate(-50%, 0) scale(1)', opacity: 0.1 }
                    ], { duration: 12000, iterations: Infinity, easing: 'ease-in-out' });
                }

                if(light2) {
                    light2.animate([
                        { transform: 'translate(0, 0) scale(1)', opacity: 0.1 },
                        { transform: 'translate(-5%, -5%) scale(1.2)', opacity: 0.2 },
                        { transform: 'translate(0, 0) scale(1)', opacity: 0.1 }
                    ], { duration: 15000, iterations: Infinity, easing: 'ease-in-out', delay: 2000 });
                }
            });
    


      document.addEventListener('DOMContentLoaded', () => {
              const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              const revealElements = document.querySelectorAll('.reveal-item');

              if (prefersReducedMotion) {
                revealElements.forEach(el => {
                  el.classList.add('is-visible');
                });
                return;
              }

              const delays = [450, 1400, 2350, 3300];
              revealElements.forEach((el, index) => {
                setTimeout(() => {
                  el.classList.add('is-visible');
                }, delays[index] || 3300);
              });
            });
    


      document.addEventListener('DOMContentLoaded', () => {
              const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
              const logoTrack = document.getElementById('logo-marquee-track');
              if (logoTrack && !prefersReducedMotion) {
                logoTrack.animate([
                  { transform: 'translateX(0)' },
                  { transform: 'translateX(-50%)' }
                ], { duration: 60000, iterations: Infinity, easing: 'linear' });
              }
            });
    


      window.toggleFaq = function(btn) {
          const container = btn.closest('.kb-content');
          const currentGroup = btn.closest('.group');
          const currentGrid = currentGroup.querySelector('.grid');
          const currentIcon = btn.querySelector('.faq-icon');

          const isOpen = currentGrid.classList.contains('grid-rows-[1fr]');

          container.querySelectorAll('.group').forEach(group => {
              group.querySelector('.grid').classList.remove('grid-rows-[1fr]');
              group.querySelector('.grid').classList.add('grid-rows-[0fr]');
              const icon = group.querySelector('.faq-icon');
              if(icon) icon.classList.remove('rotate-45', 'text-white');
          });

          if (!isOpen) {
              currentGrid.classList.remove('grid-rows-[0fr]');
              currentGrid.classList.add('grid-rows-[1fr]');
              currentIcon.classList.add('rotate-45');
          }
      };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" height="839" id="webgl-stars" width="1428"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-screen">
<div className="w-full h-full max-w-[1200px] relative">
<div className="absolute top-0 left-0 w-1/2 h-[150%] bg-gradient-to-r from-red-600/10 to-transparent blur-3xl origin-top-left animate-[gap-tension_10s_ease-in-out_infinite]"></div>
<div className="absolute bottom-0 right-0 w-1/2 h-[150%] bg-gradient-to-l from-orange-600/10 to-transparent blur-3xl origin-bottom-right animate-[gap-tension-reverse_10s_ease-in-out_infinite]"></div>

<div className="absolute left-1/2 top-[-20%] bottom-[-20%] w-[1px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent transform -translate-x-1/2 -skew-x-[15deg]"></div>
</div>
</div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-0" id="light2"></div>
<div className="z-10 w-full relative">

<nav className="sticky top-0 z-50 bg-[#030303]/80 backdrop-blur-sm border-b border-zinc-800/50">
<div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-wrap md:flex-nowrap items-center md:gap-4 lg:gap-8 relative">

<div className="flex-shrink-0 flex uppercase text-xl font-normal text-white tracking-tight gap-x-2 gap-y-2 items-center">
            Which Way? The Brockway.
          </div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="flex items-center justify-center px-4 py-1.5 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all uppercase tracking-wide" href="#">
              Book A Call
            </a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors flex items-center justify-center p-1 focus:outline-none focus:ring-2 focus:ring-red-500/50 rounded-md" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden md:flex lg:hidden flex-1 justify-center items-center gap-6 text-sm uppercase tracking-widest text-zinc-400 font-normal relative">
<button aria-controls="tablet-more-menu" aria-expanded="false" className="flex items-center gap-1 hover:text-red-400 transition-colors focus:outline-none" id="tablet-more-btn" onclick="const menu = document.getElementById('tablet-more-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-2'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
              More
              <iconify-icon className="text-sm" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-48 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl transition-all duration-300 opacity-0 -translate-y-2 invisible z-50" id="tablet-more-menu">
<a className="hover:text-red-400 transition-colors" href="#">
                Coaching
              </a>
<a className="hover:text-red-400 transition-colors" href="#">
                Resume Prep
              </a>
<a className="hover:text-red-400 transition-colors" href="#">
                Interview Prep
              </a>
</div>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap"></div>
</div>

<div className="absolute top-full left-0 w-full bg-[#030303]/95 backdrop-blur-xl border-b border-zinc-800/50 px-6 py-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-sm uppercase tracking-widest text-zinc-400 font-normal">
<a className="hover:text-red-400 transition-colors" href="#">
              Coaching
            </a>
<a className="hover:text-red-400 transition-colors" href="#">
              Resume Prep
            </a>
<a className="hover:text-red-400 transition-colors" href="#">
              Interview Prep
            </a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="inline-flex items-center justify-center px-6 py-2 bg-zinc-800 text-red-400 border border-red-500/30 rounded-sm text-sm uppercase tracking-wide font-normal hover:bg-zinc-700 shadow-[0_0_15px_rgba(239,68,68,0.2)] transition-all w-fit" href="#">
              Book A Call
            </a>
</div>
</div>
</nav>

<section className="text-center max-w-[900px] mr-auto ml-auto pt-20 pr-6 pb-12 pl-6 relative z-10">
<div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(239,68,68,0.2)]">
          Career Coaching &amp; Strategy
        </div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white mb-8 leading-[1.1] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Most students graduate with a degree but
          <span className="text-red-500 font-bold">no real plan.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          I help college students and recent graduates build confidence,
          navigate the job market, improve their networking skills, and land
          better opportunities after graduation.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white border border-red-500 rounded-sm text-base uppercase tracking-widest font-medium hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all w-full sm:w-auto" href="#">
            Book A Call
          </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-zinc-300 border border-zinc-700 rounded-sm text-base uppercase tracking-widest font-medium hover:bg-zinc-800 transition-all w-full sm:w-auto" href="#">
            Learn More
          </a>
</div>
</section>

<section className="px-6 pb-20 relative z-10">
<div className="max-w-[1000px] mx-auto">
<div className="p-3 rounded-md bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse"></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"></div>
<div className="relative rounded-sm bg-[#050101] shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col min-h-[500px] overflow-hidden group cursor-pointer">
<img alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 group-hover:opacity-70 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}></div>
<div className="absolute inset-0 bg-red-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="flex flex-col hover:bg-zinc-950/40 transition-all duration-500 text-lg font-medium text-white text-center bg-zinc-950/60 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/886de493-1bef-409b-bda7-7617b57bed0b_3840w.png)] bg-cover bg-center z-30 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                Watch: How To Stand Out Before You Graduate
              </div>
</div>
</div>

<div className="mt-12 max-w-3xl mx-auto text-center">
            The problem isn't intelligence.
            <br/>
<span className="text-red-400 font-normal italic">
              It's preparation.
            </span>
</div>
</div>
</section>

<div className="pt-24 pb-24 bg-black/40 backdrop-blur-md relative z-10 border-t border-zinc-900/80">

<section className="mb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 mb-10 text-center flex flex-col items-center gap-3">
<div className="text-base md:text-lg font-light tracking-[0.15em] uppercase text-white">
              Students And Young Professionals Building Better Careers
            </div>
<div className="text-xs md:text-sm font-bold tracking-widest text-zinc-500 uppercase">
              University &amp; Professional Networks
            </div>
</div>
<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
<div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none"></div>
<div className="flex w-max items-center opacity-60 hover:opacity-100 transition-all duration-500 text-zinc-300" id="logo-marquee-track">
<div className="flex items-center gap-x-16 pr-16">

<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Samsara
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  LGCY
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Salesforce
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Samsara
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  LGCY
                </span>
</div>
<div aria-hidden="true" className="flex items-center gap-x-16 pr-16">
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Samsara
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  LGCY
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Salesforce
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  Samsara
                </span>
<span className="text-xl md:text-2xl font-bold tracking-widest text-zinc-700 uppercase">
                  LGCY
                </span>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 mb-16 items-start justify-between">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-[1.3] max-w-3xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              "The biggest mistake students make is waiting until graduation to
              start building their future."
            </h2>
<div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0">
<div className="text-lg md:text-xl text-white font-bold tracking-widest uppercase">
                Noah Brockway
              </div>
<div className="uppercase text-xs text-zinc-500 tracking-widest mt-1">
                Career Coach &amp; Mentor
              </div>
<div className="text-sm text-red-400 font-bold tracking-widest uppercase mt-2 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]">
                San Diego, CA
              </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-red-500/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
                Most students feel overwhelmed because they don't have a clear
                direction. Build a personalized career roadmap based on your
                strengths, interests, and goals.
              </div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-orange-500/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
                Develop communication skills, networking confidence, and
                interview presence that employers remember.
              </div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col h-56 justify-between relative overflow-hidden group hover:border-white/30 transition-colors">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
<div className="flex flex-col h-full relative z-10 justify-between">
                Create a practical plan that turns career goals into real
                opportunities.
              </div>
</div>
</div>
</section>
</div>
<div className="w-full h-px relative overflow-hidden z-20">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>

<div className="absolute left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-red-600/60 to-transparent drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]"></div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-white mb-6 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Many students are working hard but
          <span className="text-red-500 font-bold">don't know what steps</span>
          actually lead to opportunities.
        </h2>
<p className="text-lg text-zinc-400 font-light max-w-3xl mx-auto">
          The gap between the classroom and the career is wider than ever. Stop
          guessing and start executing a proven framework.
        </p>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-32 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 text-left">
<div className="text-xs uppercase font-bold tracking-[0.25em] text-red-500 mb-4">
              Your Coach
            </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-8 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
              Noah Brockway
            </h2>
<p className="text-lg text-zinc-400 font-light mb-6 leading-relaxed">
              I specialize in helping college students and young professionals
              navigate the complexities of building a career.
            </p>
<p className="text-lg text-zinc-400 font-light mb-8 leading-relaxed">
              My approach bridges the gap between academic theory and real-world
              execution—giving you the tools, confidence, and strategy to stand
              out.
            </p>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-zinc-800 text-white border border-zinc-700 rounded-sm text-sm uppercase tracking-widest font-medium hover:bg-zinc-700 transition-all" href="#">
              Read Full Story
            </a>
</div>
<div className="order-1 lg:order-2">
<div className="relative w-full aspect-[4/5] bg-zinc-900 border border-zinc-800 rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1)] overflow-hidden flex items-center justify-center group">
<div className="z-10 bg-center opacity-90 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d92bc718-e630-4453-b594-b280ae8409f2_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="text-xl font-bold tracking-widest text-zinc-700 uppercase relative z-20"></span>
</div>
</div>
</div>
</section>

<section className="w-full py-24 relative z-10 bg-black/30 backdrop-blur-sm overflow-hidden border-b border-zinc-900/80">
<div className="max-w-7xl mx-auto px-6 mb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10 items-start">
<div className="max-w-xl">
              Students and young professionals use Noah Brockway's coaching to
              improve how they build their careers and land opportunities.
            </div>
<div className="lg:text-right">
<div className="inline-block text-left">
<div className="text-6xl md:text-7xl font-bold tracking-[-0.02em] text-red-500 leading-none drop-shadow-[0_0_14px_rgba(239,68,68,0.5)]">
                  CAREER
                </div>
<div className="mt-2 text-sm font-bold uppercase tracking-widest text-zinc-500">
                  Growth Strategy
                </div>
</div>
</div>
</div>
</div>
<div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mask-fade">
<div className="flex w-max gap-4 mb-4 animate-marquee-left hover:pause">

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0202] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
                  “Working with Noah gave me clarity and confidence during my
                  job search.”
                </div>
<div className="relative z-30 flex items-center gap-4">
<img alt="Alex Morgan" className="w-10 h-10 rounded object-cover border-[1.5px] border-zinc-600" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
<div>
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      Alex Morgan
                    </div>
<div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                      Student
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0500] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
                  “I finally understood how networking actually works and landed
                  interviews I wouldn't have gotten otherwise.”
                </div>
<div className="relative z-30 flex items-center gap-4">
<img alt="James Wilson" className="w-10 h-10 rounded object-cover border-[1.5px] border-zinc-600" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="">
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      James Wilson
                    </div>
<div className="text-[10px] text-orange-500 font-bold uppercase tracking-widest">
                      Recent Graduate
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#050505] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
                  “The interview coaching completely changed how I present
                  myself professionally.”
                </div>
<div className="relative z-30 flex items-center gap-4">
<img alt="Sarah Jenkins" className="w-10 h-10 rounded object-cover border-[1.5px] border-zinc-600" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="">
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      Sarah Jenkins
                    </div>
<div className="text-[10px] text-white font-bold uppercase tracking-widest">
                      College Senior
                    </div>
</div>
</div>
</div>
</div>
<div className="w-[380px] shrink-0 mr-6 p-3 rounded-sm bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="relative h-full rounded bg-[#0a0202] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[4px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="relative z-30 mb-6">
                  “I stopped feeling overwhelmed and started taking meaningful
                  action.”
                </div>
<div className="relative z-30 flex items-center gap-4">
<img alt="Michael Chen" className="w-10 h-10 rounded object-cover border-[1.5px] border-zinc-600" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;h=150&amp;q=80"/>
<div>
<div className="text-sm text-zinc-200 font-bold uppercase tracking-wide">
                      Michael Chen
                    </div>
<div className="text-[10px] text-red-500 font-bold uppercase tracking-widest">
                      Student
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6 py-24 relative z-10">
<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight uppercase">
            Where i come in
          </h2>
</div>
<div className="relative max-w-4xl mx-auto" id="hardware-pipeline">
<style>
            @keyframes text-slide {
              0% { top: -150px; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { top: 100%; opacity: 0; }
            }
          </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-zinc-900/50 backdrop-blur-sm rounded-sm z-0 hidden md:flex flex-col justify-between items-center py-0 border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-1 bg-zinc-800 rounded-sm overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mt-5">
<div className="text-xs font-bold text-red-500">1</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="text-xs font-bold text-orange-500">2</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110">
<div className="text-xs font-bold text-white">3</div>
</div>
<div className="w-10 h-10 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 transition-transform hover:scale-110 -mb-5">
<iconify-icon className="text-red-500 text-sm" icon="solar:flag-linear"></iconify-icon>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:hidden w-full mb-4">
              Review your goals, experience, strengths, and current challenges.
            </div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block"></div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-red-500/30">
<div className="w-12 h-12 rounded bg-red-950 flex items-center justify-center text-red-500 border border-red-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<div className="flex-1 text-sm text-zinc-300 font-light">
                  Deep dive into your current position and aspirations.
                </div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-orange-500/30 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-2 text-sm text-zinc-300 font-light">
                  Create a personalized plan for career development and
                  opportunity creation.
                </div>
<div className="w-12 h-12 rounded bg-orange-950 flex items-center justify-center text-orange-500 border border-orange-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
              Create a personalized plan for career development and opportunity
              creation.
            </div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3 text-left"></div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:hidden w-full mb-4">
              Improve networking, interviewing, communication, and professional
              confidence.
            </div>
<div className="md:w-1/2 md:pr-16 md:text-right hidden md:block"></div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-white/30">
<div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-white border border-zinc-600 shrink-0">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex-1 text-sm text-zinc-300 font-light">
                  Improve networking, interviewing, communication, and
                  professional confidence.
                </div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1 mt-4 md:mt-0">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-sm border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-red-500/30 flex-row-reverse md:flex-row">
<div className="flex-1 text-left md:text-right md:pr-2 text-sm text-zinc-300 font-light">
                  Take action consistently while receiving guidance and
                  feedback.
                </div>
<div className="w-12 h-12 rounded bg-red-950 flex items-center justify-center text-red-500 border border-red-500/20 shrink-0">
<iconify-icon className="text-2xl" icon="solar:flag-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-3 md:hidden">
              Take action consistently while receiving guidance and feedback.
            </div>
<div className="md:w-1/2 md:pl-16 hidden md:block order-3 text-left"></div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center justify-center px-10 py-4 bg-zinc-100 text-zinc-900 border border-zinc-300 rounded-sm text-base uppercase tracking-widest font-bold hover:bg-white shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all" href="#">
            Book A Strategy Call
          </a>
</div>
</section>



<section className="max-w-[1000px] mx-auto px-6 pb-24 relative z-10" id="faq-section">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] uppercase">
            FAQ
          </h2>
</div>
<div className="max-w-3xl mx-auto min-h-[400px]">
<div className="kb-content block space-y-1" id="kb-start">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
                College students, recent graduates, and young professionals
                looking for career guidance.
              </button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    B2B reps, account executives, sales teams, and leaders
                    struggling with low win rates or stuck in "feature selling".
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
                No. Many students start without a clear direction. The process
                helps create clarity.
              </button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Yes, but it's highly focused on problem-centric selling and
                    executing discovery that drives deals forward.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
                Yes. Interview preparation and confidence building are core
                parts of the coaching process.
              </button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Yes, especially those stuck in deals. Experienced reps often
                    fall into the trap of pitching solutions too early.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
                Absolutely. Networking is one of the most important career
                skills students can learn.
              </button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Intense focus on the problem, not the product. We teach you
                    how to expose the gap between current and future states.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
                No. Students from all majors can benefit from career strategy
                and professional development coaching.
              </button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Book a call below. We'll look at your current approach and
                    see exactly what needs to change.
                  </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="flex text-left w-full pt-5 pb-5 gap-x-4 gap-y-4 items-center justify-between" onclick="window.toggleFaq(this)">
<span className="text-lg font-bold uppercase tracking-wide text-zinc-300 group-hover:text-red-500 transition-colors duration-300">
                  How do we get started?
                </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-red-500 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                    Book a call below. We'll discuss your goals, challenges, and
                    next steps.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1000px] mx-auto px-6 pb-32 relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-12 md:p-20 text-center rounded-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden">
<div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-6 uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Ready To Take Control?
          </h2>
<p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto mb-10">
            Book a free strategy call and start creating a clear path toward
            your future.
          </p>
<a className="inline-flex items-center justify-center px-10 py-4 bg-red-600 text-white border border-red-500 rounded-sm text-base uppercase tracking-widest font-medium hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all" href="#">
            Book Your Strategy Call
          </a>
</div>
</section>

<footer className="bg-[#000000] border-t border-zinc-900 pt-24 pb-16 relative z-10">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl tracking-tight font-normal text-white uppercase flex items-center gap-2">
            Noah Brockway
            
          </div>
<div className="text-sm text-zinc-500 font-light text-center md:text-left">
            Helping college students and recent graduates build confidence and
            land better opportunities.
          </div>
<div className="flex items-center gap-6 text-sm uppercase tracking-widest text-zinc-500 font-normal">
<a className="hover:text-red-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-red-400 transition-colors" href="#">Terms</a>
<a className="hover:text-red-400 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</div>






    </>
  );
}
