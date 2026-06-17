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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


    document.addEventListener('DOMContentLoaded', () => {
                // WebGL Starfield
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
                    gl.shaderSource(fs, `precision mediump float; varying float vAlpha; void main() { gl_FragColor = vec4(0.6, 1.0, 0.8, vAlpha); }`);
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

                // Infinite Marquee Animation
                const track = document.getElementById('marquee-track');
                if(track) {
                    track.animate([
                        { transform: 'translateX(0)' },
                        { transform: 'translateX(-50%)' }
                    ], { duration: 40000, iterations: Infinity, easing: 'linear' });
                }

                // Ambient Lights Breathing Animation
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
  


    window.switchKbTab = function(id, btn) {
          // Hide all content areas
          document.querySelectorAll('.kb-content').forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('block', 'animate-in', 'fade-in', 'slide-in-from-bottom-2');
          });

          // Show active content
          const target = document.getElementById('kb-' + id);
          if(target) {
              target.classList.remove('hidden');
              target.classList.add('block', 'animate-in', 'fade-in', 'slide-in-from-bottom-2', 'duration-300');
          }

          // Reset all tabs to inactive state
          const allTabs = document.querySelectorAll('.kb-tab');
          allTabs.forEach(el => {
              el.className = 'kb-tab px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800 hover:text-white text-sm font-light transition-all duration-300 cursor-pointer';
          });

          // Set active tab styles based on category
          if(btn) {
              let activeClass = '';
              if(id === 'start') activeClass = 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]';
              else if(id === 'security') activeClass = 'border-amber-500/40 bg-amber-500/10 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]';
              else if(id === 'workflows') activeClass = 'border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.2)]';
              else if(id === 'pricing') activeClass = 'border-violet-500/40 bg-violet-500/10 text-violet-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]';

              btn.className = `kb-tab px-6 py-2.5 rounded-full border text-sm font-light transition-all duration-300 cursor-pointer ${activeClass}`;
          }
      };

      window.toggleFaq = function(btn) {
          const container = btn.closest('.kb-content');
          const currentGroup = btn.closest('.group');
          const currentGrid = currentGroup.querySelector('.grid');
          const currentIcon = btn.querySelector('.faq-icon');

          // Check if currently open
          const isOpen = currentGrid.classList.contains('grid-rows-[1fr]');

          // Close all in this container
          container.querySelectorAll('.group').forEach(group => {
              group.querySelector('.grid').classList.remove('grid-rows-[1fr]');
              group.querySelector('.grid').classList.add('grid-rows-[0fr]');
              const icon = group.querySelector('.faq-icon');
              if(icon) icon.classList.remove('rotate-45', 'text-white');
          });

          // Toggle current
          if (!isOpen) {
              currentGrid.classList.remove('grid-rows-[0fr]');
              currentGrid.classList.add('grid-rows-[1fr]');
              currentIcon.classList.add('rotate-45');
          }
      };
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60" height="949" id="webgl-stars" width="1728"></canvas>

<div className="fixed inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E\')'}}>
</div>

<div className="fixed top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none z-0" id="light1">
</div>
<div className="w-full z-10 relative">

<div className="sticky flex z-50 top-6 justify-center">
<div className="absolute w-[900px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full -z-10 pointer-events-none">
</div>
<nav className="flex bg-[#030303]/70 w-[95%] max-w-[1280px] border-white/10 border rounded-full pt-4 pr-6 pb-4 pl-6 relative shadow-[0_10px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl items-center">
<div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent">
</div>
<div className="flex-shrink-0 flex text-xl font-normal text-white tracking-tight gap-x-1 gap-y-1 items-center" onclick="window.location.href='/home'" role="button">
          Signal
          <div className="h-7 px-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-center">
<span className="text-sm font-semibold text-emerald-300 tracking-wide">AI</span>
</div>
</div>

<div className="flex items-center gap-4 ml-auto md:hidden">
<a className="group flex items-center justify-center px-4 py-1.5 shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full text-sm relative" href="#" style={{boxShadow: '0 15px 33px -12px rgba(16, 185, 129, 0.9), inset 0 4px 6.3px rgba(167, 243, 208, 1), inset 0 -5px 6.3px rgba(5,150,105,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full">
</div>
<span className="relative">Start free</span>
</a>
<button aria-expanded="false" aria-label="Toggle navigation" className="text-zinc-400 hover:text-white transition-colors duration-200 flex items-center justify-center p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030303] rounded-md" id="mobile-menu-btn" onclick="const menu = document.getElementById('mobile-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-4'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex flex-1 justify-center items-center gap-x-7 text-base text-zinc-400 font-normal whitespace-nowrap">
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/product">Product</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/solutions">Solutions</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/customers">Customers</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/studies">Case Studies</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/developers">Developers</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/resources">Resources</a>
<a className="hover:text-emerald-300 transition-colors duration-200 pr-1 pl-1" href="/pricing">Pricing</a>
</div>

<div className="hidden md:flex lg:hidden flex-1 justify-center items-center gap-x-5 text-base text-zinc-400 font-normal relative whitespace-nowrap">
<a className="hover:text-emerald-300 transition-colors duration-200 px-1" href="#">Product</a>
<a className="hover:text-emerald-300 transition-colors duration-200 px-1" href="#">Solutions</a>
<a className="hover:text-emerald-300 transition-colors duration-200 px-1" href="#">Pricing</a>
<button aria-controls="tablet-more-menu" aria-expanded="false" className="flex items-center gap-1 hover:text-emerald-300 transition-colors duration-200 rounded-md px-2 py-1" id="tablet-more-btn" onclick="const menu = document.getElementById('tablet-more-menu'); const expanded = this.getAttribute('aria-expanded') === 'true'; this.setAttribute('aria-expanded', !expanded); menu.classList.toggle('opacity-0'); menu.classList.toggle('invisible'); menu.classList.toggle('-translate-y-2'); menu.classList.toggle('opacity-100'); menu.classList.toggle('visible'); menu.classList.toggle('translate-y-0');">
            More
            <iconify-icon className="text-sm" icon="lucide:chevron-down"></iconify-icon>
</button>
<div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 w-56 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl transition-all duration-300 opacity-0 -translate-y-2 invisible z-50" id="tablet-more-menu">
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Developers</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Customers</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Case Studies</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Resources</a>
</div>
</div>

<div className="hidden md:flex items-center justify-end flex-shrink-0 gap-4 ml-auto whitespace-nowrap">
<a className="hover:text-white transition-colors text-base font-normal text-zinc-400" href="/login">Log in</a>
<a className="group flex items-center justify-center px-5 py-2 shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full text-base relative" href="#" style={{boxShadow: '0 15px 33px -12px rgba(16, 185, 129, 0.9), inset 0 4px 6.3px rgba(167, 243, 208, 1), inset 0 -5px 6.3px rgba(5,150,105,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full">
</div>
<span className="relative">Start free</span>
</a>
</div>

<div className="absolute top-full left-0 w-full mt-4 bg-[#030303]/95 backdrop-blur-xl border border-zinc-800/50 rounded-2xl px-5 py-5 flex flex-col gap-6 shadow-2xl transition-all duration-300 opacity-0 -translate-y-4 invisible md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-4 text-base text-zinc-400 font-normal">
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Product</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Customers</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Case Studies</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Developers</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Resources</a>
<a className="hover:text-emerald-300 transition-colors duration-200" href="#">Pricing</a>
</div>
<div className="h-px w-full bg-zinc-800/50"></div>
<a className="text-base text-zinc-400 hover:text-white transition-colors duration-200" href="#">
            Log in
          </a>
</div>
</nav>
</div>

<section className="pt-24 md:pt-36 pb-24 px-6 relative z-10">
<div className="max-w-[1200px] mx-auto flex flex-col gap-16">

<div className="text-center max-w-[900px] mx-auto">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_4px_10px_rgba(0,0,0,0.5)] border border-zinc-700/50 mb-8 backdrop-blur-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</span>
<span className="text-xs font-light text-emerald-300 tracking-wide uppercase drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]">

              AI Sales Engine
    
            </span>
</div>
<h1 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-[1.05] mb-6 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
<span className="block">The AI sales engine for</span>
<span className="block font-normal italic text-transparent bg-clip-text bg-gradient-to-b from-emerald-300 to-emerald-600 drop-shadow-[0_0_15px_rgba(16,185,129,0.4)]">

              smarter, faster
    
            </span>
<span className="block">pipeline growth</span>
</h1>
<p className="text-xl text-zinc-300/80 mb-10 max-w-2xl mx-auto font-extralight leading-relaxed">

            SignalAI helps teams find high-intent accounts, generate multi-channel outreach, and turn signals into
            pipeline.

          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
<a className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full text-base relative whitespace-nowrap" href="#" style={{boxShadow: '0 15px 33px -12px rgba(16, 185, 129, 0.9), inset 0 4px 6.3px rgba(167, 243, 208, 1), inset 0 -5px 6.3px rgba(5,150,105,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full">
</div>
<span className="relative">Start free</span>
</a>
<a className="w-full sm:w-auto hover:bg-white/5 transition-all flex justify-center text-base font-light text-zinc-200 bg-gradient-to-b from-white/5 via-transparent to-black/20 rounded-full px-8 py-3 gap-2 items-center backdrop-blur-sm whitespace-nowrap" href="#" style={{boxShadow: '0 18px 35px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0), rgba(255,255,255,0.1))', '--border-radius-before': '9999px'}}>
<span className="tracking-tight">View demo</span>
<iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-[1000px] mx-auto w-full">
<div className="p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse">
</div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative rounded-[20px] bg-[#020a02] shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col h-[450px] overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}>
</div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>

<div className="relative z-30 flex-1 p-8 flex flex-col gap-8 overflow-y-auto">
<div className="bg-zinc-900 border border-zinc-700/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] text-zinc-200 px-6 py-5 rounded-2xl rounded-tr-sm self-end max-w-[85%] text-lg font-light reveal-item">
                  Create a multi-channel campaign for VP Engineering at Series A
                  SaaS companies in North America.
                </div>
<div className="flex flex-col self-start max-w-[90%] w-full">
<p className="text-2xl font-light tracking-tight text-emerald-300 drop-shadow-[0_0_8px_rgba(110,231,183,0.4)] leading-snug mb-4 reveal-item">
                    Acknowledged. Initializing VP Engineering sequence.
                  </p>
<div className="border-l-[1.5px] border-emerald-500/50 pl-4 py-1 mb-4 flex items-center gap-2 reveal-item">
<iconify-icon className="text-emerald-400" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-base font-extralight text-emerald-400/80">
                        1,259 verified nodes located. Generating outreach plan.
                      </span>
</div>
<div className="bg-[#051005] border border-emerald-500/20 shadow-[inset_0_1px_2px_rgba(16,185,129,0.05)] rounded-xl p-4 text-sm font-light w-full reveal-item">
<div className="text-emerald-300 mb-3 text-base">
                      Subject: Scaling engineering throughput
                    </div>
<ul className="list-disc pl-4 space-y-1.5 mb-4 text-emerald-400/80">
<li>Reference recent Series A funding</li>
<li>Highlight delivery bottlenecks</li>
<li>Propose API integration</li>
</ul>
<div className="text-emerald-500/90 italic border-t border-emerald-500/20 pt-3 font-extralight">
                      "Hi {Name}, saw the recent Series A—congrats on the
                      growth. As you scale the engineering org..."
                    </div>
</div>
</div>
</div>

<div className="relative z-30 p-4 border-t border-zinc-900 bg-black/40 backdrop-blur-md">
<div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-xl p-2 px-4 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
<input className="flex-1 bg-transparent border-none focus:outline-none text-lg text-emerald-100 placeholder:text-zinc-600 font-light py-2" placeholder="Enter command sequence..." type="text"/>
<button className="w-8 h-8 flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-emerald-500/30 rounded-lg transition-colors shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-lg" icon="solar:alt-arrow-up-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="z-10 bg-black/20 pt-24 pb-24 relative backdrop-blur-sm">

<section className="mb-24 relative">
<div className="max-w-[1200px] mx-auto px-6 mb-10 text-center flex flex-col items-center gap-3">
<div className="text-base md:text-lg font-light tracking-[0.15em] uppercase text-white">
            Trusted by leading revenue teams
          </div>
<div className="text-xs md:text-sm font-light tracking-widest text-emerald-400 uppercase drop-shadow-[0_0_2px_rgba(16,185,129,0.5)]">
            Active in 500,000+ networks
          </div>
</div>
<div className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden">
<div className="absolute top-0 left-0 w-24 md:w-40 h-full bg-gradient-to-r from-[#030303] to-transparent z-20 pointer-events-none">
</div>
<div className="absolute top-0 right-0 w-24 md:w-40 h-full bg-gradient-to-l from-[#030303] to-transparent z-20 pointer-events-none">
</div>
<div className="flex w-max items-center opacity-40 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-500 mix-blend-screen text-zinc-300" id="logo-marquee-track">

<div className="flex items-center gap-x-12 pr-12">
<span className="text-xl md:text-2xl font-light tracking-tight font-serif italic">AUTODESK</span>
<span className="text-xl md:text-2xl font-light tracking-tighter flex items-center gap-1">
<iconify-icon className="text-xl md:text-2xl" icon="solar:soundwave-linear"></iconify-icon>
                  Dolby
                </span>
<span className="text-xl md:text-2xl font-light tracking-tight flex items-center gap-1">
<iconify-icon className="text-xl md:text-2xl" icon="solar:global-linear"></iconify-icon>
                  SMARTLING
                </span>
<span className="text-xl md:text-2xl font-light tracking-tight italic">Reddit</span>
<span className="text-xl md:text-2xl font-light tracking-widest">ANTHROPIC</span>
<span className="text-xl md:text-2xl font-light tracking-tight">DocuSign</span>
<span className="text-xl md:text-2xl font-light tracking-tight">Vercel</span>
<span className="text-xl md:text-2xl font-light tracking-tight">Atlassian</span>
<span className="text-xl md:text-2xl font-light tracking-tight">HubSpot</span>
<span className="text-xl md:text-2xl font-light tracking-tighter">Shopify</span>
</div>

<div aria-hidden="true" className="flex items-center gap-x-12 pr-12">
<span className="text-xl md:text-2xl font-light tracking-tight font-serif italic">AUTODESK</span>
<span className="text-xl md:text-2xl font-light tracking-tighter flex items-center gap-1">
<iconify-icon className="text-xl md:text-2xl" icon="solar:soundwave-linear"></iconify-icon>
                  Dolby
                </span>
<span className="text-xl md:text-2xl font-light tracking-tight flex items-center gap-1">
<iconify-icon className="text-xl md:text-2xl" icon="solar:global-linear"></iconify-icon>
                  SMARTLING
                </span>
<span className="text-xl md:text-2xl font-light tracking-tight italic">Reddit</span>
<span className="text-xl md:text-2xl font-light tracking-widest">ANTHROPIC</span>
<span className="text-xl md:text-2xl font-light tracking-tight">DocuSign</span>
<span className="text-xl md:text-2xl font-light tracking-tight">Vercel</span>
<span className="text-xl md:text-2xl font-light tracking-tight">Atlassian</span>
<span className="text-xl md:text-2xl font-light tracking-tight">HubSpot</span>
<span className="text-xl md:text-2xl font-light tracking-tighter">Shopify</span>
</div>
</div>
</div>
</section>

<section className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 mb-16 items-start justify-between">

<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white leading-[1.3] max-w-3xl drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            "SignalAI completely changed how our RevOps team runs outbound. We identify buying signals instantly and
            launch
            targeted sequences in minutes. What used to take days of research now happens automatically."
          </h2>

<div className="flex flex-col items-start lg:items-end text-left lg:text-right shrink-0">
<div className="text-lg md:text-xl text-white font-light tracking-tight">
              Daniel Reeves
            </div>
<div className="uppercase text-xs text-zinc-500 tracking-widest">
              Revenue Ops Lead
            </div>
<div className="text-sm text-emerald-300 font-light tracking-tight mt-2 flex items-center gap-2 drop-shadow-[0_0_8px_rgba(110,231,183,0.5)]">
              Northstar Labs
            </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col min-h-[14rem] md:min-h-[17rem] lg:min-h-[14rem] justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/80 to-transparent">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="text-7xl font-light tracking-tighter text-emerald-400 leading-none drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] mb-4">
                  86%
                </div>
<h3 className="text-lg text-white font-light leading-tight">
                  More qualified accounts
                </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                  Higher intent coverage
                </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-emerald-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:chat-square-linear"></iconify-icon>
                SignalBase
              </div>
</div>
</div>

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col min-h-[14rem] md:min-h-[17rem] lg:min-h-[14rem] justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/80 to-transparent">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="text-7xl font-light tracking-tighter text-amber-400 leading-none drop-shadow-[0_0_12px_rgba(251,191,36,0.6)] mb-4">
                  6×
                </div>
<h3 className="text-lg text-white font-light leading-tight">
                  Faster sequences shipped
                </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                  Same team, more output
                </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-amber-400 transition-colors">
<iconify-icon className="text-lg" icon="lucide:rocket"></iconify-icon>
                OrbitIQ
              </div>
</div>
</div>

<div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] border border-zinc-800 flex flex-col min-h-[14rem] md:min-h-[17rem] lg:min-h-[14rem] justify-between relative overflow-hidden group">
<div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent">
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="text-7xl font-light tracking-tighter text-cyan-400 leading-none drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] mb-4">
                  72%
                </div>
<h3 className="text-lg text-white font-light leading-tight">
                  Lower wasted outreach
                </h3>
<p className="text-sm text-zinc-400 font-light mt-1">
                  Less spam, more replies
                </p>
</div>
<div className="mt-5 flex items-center gap-1.5 text-sm font-light text-zinc-500 group-hover:text-cyan-400 transition-colors">
<iconify-icon className="text-lg" icon="solar:database-linear"></iconify-icon>
                VectorLabs
              </div>
</div>
</div>
</div>
</section>
</div>

<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]">
</div>
</div>
</div>

<section className="py-24 px-6 max-w-[1200px] mx-auto text-center relative z-10">

<div className="max-w-2xl mx-auto mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Complete sales architecture
          <span className="block font-normal italic text-zinc-300/70">
              from signal to pipeline
            </span>
</h2>
<p className="text-lg text-zinc-400 font-light mt-6 leading-relaxed">
          Powered by our core framework, one of the largest intent networks online.
        </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors group shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden min-h-[400px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-emerald-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
<iconify-icon className="text-2xl text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" icon="solar:wi-fi-router-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-emerald-300 transition-colors">
              Signal Capture
            </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
              Detect buying intent across engagement, firmographic changes, and behavioral signals.
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-light text-emerald-300/90 tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400/90 shadow-[0_0_10px_rgba(16,185,129,0.35)]"></span>
              Signal scoring
            </div>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-emerald-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-emerald-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-xs uppercase tracking-widest text-zinc-400">
                  Deep signal layer
                </div>
<div className="text-xs text-emerald-300/90 font-light tracking-wide whitespace-nowrap">
                  Real-time scoring
                </div>
</div>
<div className="flex-1 overflow-auto pr-1 mt-4">
<p className="text-sm text-zinc-300/80 font-light leading-relaxed mb-5">
                  Identify intent early, filter noise, and prioritize accounts that match your ICP.
                </p>
<ul className="text-sm text-zinc-200/85 space-y-2 list-disc pl-4 marker:text-emerald-500">
<li>Detect intent from 30+ buying signals</li>
<li>Score accounts continuously in real time</li>
<li>Auto-match ICP profiles and segments</li>
</ul>
</div>
<div className="pt-5 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
<div className="text-xs text-zinc-500 font-light">Signals → Intent score</div>
<div className="text-xs text-emerald-300/80 font-light">View details</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors group shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden min-h-[400px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-amber-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(251,191,36,0.1)] border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
<iconify-icon className="text-2xl text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" icon="solar:inbox-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-amber-300 transition-colors">
              Intent Routing
            </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
              Filter inbound activity, prioritize urgency, and route accounts into the right outreach flow.
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-light text-amber-300/90 tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400/90 shadow-[0_0_10px_rgba(251,191,36,0.35)]"></span>
              Automated prioritization
            </div>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-amber-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-amber-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-xs uppercase tracking-widest text-zinc-400">
                  Routing layer
                </div>
<div className="text-xs text-amber-300/90 font-light tracking-wide whitespace-nowrap">
                  Priority engine
                </div>
</div>
<div className="flex-1 overflow-auto pr-1 mt-4">
<p className="text-sm text-zinc-300/80 font-light leading-relaxed mb-5">
                  Automatically evaluate incoming signals and route high-value accounts into the right campaign
                  sequence.
                </p>
<ul className="text-sm text-zinc-200/85 space-y-2 list-disc pl-4 marker:text-amber-500">
<li>Prioritize accounts based on signal strength</li>
<li>Route leads into targeted campaign sequences</li>
<li>Balance outreach across active pipelines</li>
</ul>
</div>
<div className="pt-5 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
<div className="text-xs text-zinc-500 font-light">Signals → Campaign entry</div>
<div className="text-xs text-amber-300/80 font-light">View routing</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors group shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden min-h-[400px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-cyan-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,211,238,0.1)] border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
<iconify-icon className="text-2xl text-cyan-300 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-cyan-200 transition-colors">
              Context Engine
            </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
              Enrich accounts and contacts with verified context so every message lands with relevance.
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-light text-cyan-200/90 tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_10px_rgba(34,211,238,0.35)]"></span>
              Verified context
            </div>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-cyan-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-cyan-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-xs uppercase tracking-widest text-zinc-400">
                  Context Engine
                </div>
<div className="text-xs text-cyan-300/90 font-light tracking-wide whitespace-nowrap">
                  Verified data
                </div>
</div>
<div className="flex-1 overflow-auto pr-1 mt-4">
<p className="text-sm text-zinc-300/80 font-light leading-relaxed mb-5">
                  Add role context and firmographics so targeting stays precise and personalization scales cleanly.
                </p>
<ul className="text-sm text-zinc-200/85 space-y-2 list-disc pl-4 marker:text-cyan-500">
<li>Verify contacts and role accuracy</li>
<li>Append firmographics and company context</li>
<li>Continuously refresh to prevent decay</li>
</ul>
</div>
<div className="pt-5 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
<div className="text-xs text-zinc-500 font-light">Profile → Target ready</div>
<div className="text-xs text-cyan-300/80 font-light">View context</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-zinc-800/60 transition-colors group shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden min-h-[400px]">

<div className="relative z-10 flex flex-col items-center justify-center flex-1 transition-opacity duration-200 md:group-hover:opacity-0">
<div className="w-12 h-12 bg-violet-950 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.1)] border border-violet-500/20 group-hover:border-violet-500/40 transition-colors">
<iconify-icon className="text-2xl text-violet-300 drop-shadow-[0_0_5px_rgba(168,85,247,0.8)]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-light tracking-tight text-zinc-200 mb-3 group-hover:text-violet-300 transition-colors">
              Outreach Engine
            </h3>
<p className="text-base text-zinc-500 font-extralight max-w-[26ch]">
              Generate personalized sequences and launch multi-channel outreach across your pipeline.
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-light text-violet-200/90 tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-violet-300/90 shadow-[0_0_10px_rgba(168,85,247,0.35)]"></span>
              Sequence automation
            </div>
</div>

<div className="hidden md:flex absolute inset-0 z-20 flex-col translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out bg-zinc-900/95 backdrop-blur-sm">
<div className="absolute top-0 left-0 right-0 h-px bg-violet-500/25"></div>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-violet-500/10 blur-2xl"></div>
<div className="h-full p-6 flex flex-col text-left">
<div className="flex items-start justify-between gap-4">
<div className="text-xs uppercase tracking-widest text-zinc-400">
                  Outreach layer
                </div>
<div className="text-xs text-violet-400/90 font-light tracking-wide whitespace-nowrap">
                  Campaign automation
                </div>
</div>
<div className="flex-1 overflow-auto pr-1 mt-4">
<p className="text-sm text-zinc-300/80 font-light leading-relaxed mb-5">
                  Launch personalized outreach sequences that adapt to signals and engagement across channels.
                </p>
<ul className="text-sm text-zinc-200/85 space-y-2 list-disc pl-4 marker:text-violet-500">
<li>Generate AI-assisted outreach sequences</li>
<li>Launch multi-channel campaigns instantly</li>
<li>Track engagement across pipeline stages</li>
</ul>
</div>
<div className="pt-5 mt-6 border-t border-zinc-800/60 flex items-center justify-between">
<div className="text-xs text-zinc-500 font-light">Sequence → Pipeline</div>
<div className="text-xs text-violet-400/80 font-light">View campaign</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-[1200px] mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="text-xs uppercase tracking-[0.25em] text-emerald-400/80 mb-4">
            Signal Processing
          </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-8 leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Capture buying signals
            <span className="block font-normal italic text-zinc-300/70">
                turn them into pipeline
              </span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-zinc-800 text-emerald-400 rounded-full text-base font-light shadow-[0_0_15px_rgba(16,185,129,0.3),_inset_0_1px_1px_rgba(255,255,255,0.1)] border border-emerald-500/30 transition-all hover:bg-zinc-700 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]">
<span className="drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]">
                  Launch Sequence
                </span>
</button>
<a className="inline-flex hover:bg-white/5 transition-all justify-center text-base font-light text-zinc-300 bg-gradient-to-b from-white/5 via-transparent to-black/20 rounded-full px-6 py-3.5 gap-2 items-center backdrop-blur-sm" href="#" style={{boxShadow: '0 18px 35px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255,255,255,0.2), rgba(255,255,255,0), rgba(255,255,255,0.1))', '--border-radius-before': '9999px'}}>
<span className="tracking-tight">Explore workflows</span>
<iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</a>
</div>
<ul className="space-y-5">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-500 mt-1 shrink-0" icon="solar:document-text-linear"></iconify-icon>
<span className="text-lg text-zinc-400 font-extralight">
                  Detect intent signals before competitors do
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-500 mt-1 shrink-0" icon="solar:bolt-linear"></iconify-icon>
<span className="text-lg text-zinc-400 font-extralight">
                  Generate multi-channel sequences in seconds
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-zinc-500 mt-1 shrink-0" icon="solar:target-linear"></iconify-icon>
<span className="text-lg text-zinc-400 font-extralight">
                  Route accounts automatically to the right workflow
                </span>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 bg-zinc-900 border border-zinc-800 rounded-[2rem] p-6 sm:p-10 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] relative overflow-hidden h-[600px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent opacity-50"></div>

<div className="relative w-[120%] h-[110%] bg-[#050505] rounded-xl shadow-[0_0_30px_rgba(0,0,0,1)] flex flex-col border border-zinc-800 transform translate-x-12 translate-y-12 overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}>
</div>

<div className="h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2 shrink-0 relative z-30">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="mx-auto flex items-center gap-1.5 text-xs font-light text-emerald-500 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-md drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-xs" icon="solar:stars-linear"></iconify-icon>
                Signal Console
              </div>
</div>

<div className="flex-1 flex overflow-hidden relative z-30">

<div className="w-1/3 bg-zinc-950/80 border-r border-zinc-800 p-4 opacity-80 flex flex-col gap-3">
<div className="h-4 bg-zinc-800 rounded w-1/2 mb-2"></div>
<div className="h-16 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
<div className="h-16 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
<div className="h-16 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
</div>

<div className="flex-1 bg-[#020502] p-6 flex flex-col relative">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-20 flex items-center gap-2 text-xs font-light text-zinc-500 mb-2 uppercase tracking-wide">
<iconify-icon className="text-sm" icon="solar:phone-linear"></iconify-icon>
                  Stream / Acme Connect
                </div>
<div className="mt-6 flex-1 overflow-hidden flex flex-col gap-6 relative z-20">

<div>
<div className="flex items-center gap-2 text-sm font-light text-zinc-300 mb-2">
<iconify-icon className="text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]" icon="solar:users-group-rounded-linear"></iconify-icon>
                      Account map
                    </div>
<p className="text-base text-zinc-400 font-extralight leading-relaxed mb-1">
<strong className="text-zinc-200 font-light">Root Admin</strong>
                      · Core Systems, Acme
                    </p>
<p className="text-base text-zinc-500 font-extralight leading-relaxed">
                      Admin handles primary logic for experience layer. IP localized to US-East.
                    </p>
<span className="text-sm font-light text-emerald-400 mt-2 inline-block cursor-pointer hover:text-emerald-300">
                        Reveal context ▾
                      </span>
</div>

<div>
<div className="flex items-center gap-2 text-sm font-light text-zinc-300 mb-2">
<iconify-icon className="text-amber-400 drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
                      Signal analysis
                    </div>
<p className="leading-relaxed text-base font-light text-zinc-200 mb-1">
                      Signal processed &amp; sequence initiated
                    </p>
<p className="text-base text-zinc-500 font-extralight leading-relaxed">
                      Acme established handshake and requested payload limits. Deploy override configs.
                    </p>
<span className="text-sm font-light text-emerald-400 mt-2 inline-block cursor-pointer hover:text-emerald-300">
                        Reveal context ▾
                      </span>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 z-20">
<button className="w-full bg-zinc-800/80 border border-emerald-500/30 backdrop-blur-sm py-3 rounded-lg flex items-center justify-center gap-2 text-base font-light text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)] hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:stars-linear"></iconify-icon>
                      Query signals
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]">
</div>
</div>
</div>

<section className="z-10 overflow-hidden bg-black/30 w-full pt-24 pb-24 relative backdrop-blur-sm">

<div className="max-w-7xl mx-auto px-6 mb-14">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

<div className="max-w-xl">
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-extralight mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">

              The signal network behind

              <span className="block font-normal italic text-zinc-300/70">

                  modern revenue teams
      
                </span>
</h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 mt-6">

              Millions of buying signals processed daily across the SignalAI signal network.

            </p>
</div>

<div className="lg:text-right">
<div className="inline-block text-left">
<div className="text-7xl md:text-8xl font-light tracking-[-0.02em] text-white/75 leading-none drop-shadow-[0_0_14px_rgba(16,185,129,0.75)]">

                500K+

              </div>
<div className="mt-2 text-sm uppercase tracking-wide text-zinc-500">

                Accounts analyzed daily

              </div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[1200px] mx-auto overflow-hidden mask-fade">

<div className="flex w-max gap-4 mb-4 animate-marquee-left">

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse">
</div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#05000a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-violet-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-violet-500/70 uppercase tracking-widest block mb-4">
                    Revenue Ops
                  </span>
<p className="text-sm text-violet-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(167,139,250,0.6)]">
                  “SignalAI surfaces the right accounts before our competitors even see them.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-violet-950 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
<img alt="Liam Carter" className="w-10 h-10 rounded-full border-[1.5px] border-violet-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[240deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<div className="text-sm text-violet-300 font-light drop-shadow-[0_0_4px_rgba(196,181,253,0.6)]">
                    Liam Carter
                  </div>
<div className="text-[10px] text-violet-500/70 font-extralight uppercase tracking-widest">
                    Head of RevOps
                  </div>
</div>
<span className="ml-auto text-violet-400 text-sm font-light drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]">
                    VectorLabs
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#0a0500] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-amber-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-amber-500/70 uppercase tracking-widest block mb-4">
                    GTM Leaders
                  </span>
<p className="text-sm text-amber-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(251,191,36,0.6)]">
                  “We replaced three tools and our pipeline velocity doubled within two quarters.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-amber-950 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
<img alt="Elena Park" className="w-10 h-10 rounded-full border-[1.5px] border-amber-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[10deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
</div>
<div>
<div className="text-sm text-amber-300 font-light drop-shadow-[0_0_4px_rgba(252,211,77,0.6)]">
                    Elena Park
                  </div>
<div className="text-[10px] text-amber-500/70 font-extralight uppercase tracking-widest">
                    VP Growth
                  </div>
</div>
<span className="ml-auto text-amber-400 text-sm font-light drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]">
                    OrbitalIQ
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#00050a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-cyan-500/70 uppercase tracking-widest block mb-4">
                    Sales Intelligence
                  </span>
<p className="text-sm text-cyan-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(34,211,238,0.6)]">
                  “The signal scoring is incredibly accurate. Our SDRs focus only on accounts that matter.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-cyan-950 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
<img alt="Marcus Delaney" className="w-10 h-10 rounded-full border-[1.5px] border-cyan-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[180deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp"/>
</div>
<div>
<div className="text-sm text-cyan-300 font-light drop-shadow-[0_0_4px_rgba(103,232,249,0.6)]">
                    Marcus Delaney
                  </div>
<div className="text-[10px] text-cyan-500/70 font-extralight uppercase tracking-widest">
                    Director of Sales
                  </div>
</div>
<span className="ml-auto text-cyan-400 text-sm font-light drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
                    SignalForge
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-emerald-500/70 uppercase tracking-widest block mb-4">
                    Demand Generation
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(52,211,153,0.6)]">
                  “SignalAI turned our outbound into a predictable pipeline engine.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-emerald-950 shadow-[0_0_10px_rgba(16,185,129,0.2)]">
<img alt="Sofia Mendes" className="w-10 h-10 rounded-full border-[1.5px] border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[90deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a04490f-27f4-44a6-b75a-f64e08d7caf2_320w.jpg"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light drop-shadow-[0_0_4px_rgba(110,231,183,0.6)]">
                    Sofia Mendes
                  </div>
<div className="text-[10px] text-emerald-500/70 font-extralight uppercase tracking-widest">
                    Head of Demand
                  </div>
</div>
<span className="ml-auto text-emerald-400 text-sm font-light drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]">
                    AtlasGrid
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#05000a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-violet-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4.5s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-violet-500/70 uppercase tracking-widest block mb-4">
                    RevOps
                  </span>
<p className="text-sm text-violet-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(167,139,250,0.6)]">
                  “We finally have a system that connects intent data to real revenue outcomes.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-violet-950 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
<img alt="Noah Bennett" className="w-10 h-10 rounded-full border-[1.5px] border-violet-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[240deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d7ad40-af9f-4af2-baa2-8d7eb0382908_3840w.webp?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-violet-300 font-light drop-shadow-[0_0_4px_rgba(196,181,253,0.6)]">
                    Noah Bennett
                  </div>
<div className="text-[10px] text-violet-500/70 font-extralight uppercase tracking-widest">
                    Revenue Operations
                  </div>
</div>
<span className="ml-auto text-violet-400 text-sm font-light drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]">
                    NexusStack
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)] animate-pulse" style={{animationDelay: '2.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#0a0500] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-amber-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '3.2s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-amber-500/70 uppercase tracking-widest block mb-4">
                    Sales Leadership
                  </span>
<p className="text-sm text-amber-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(251,191,36,0.6)]">
                  “Pipeline generation became measurable the moment we adopted SignalAI.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-amber-950 shadow-[0_0_10px_rgba(245,158,11,0.2)]">
<img alt="Jordan Malik" className="w-10 h-10 rounded-full border-[1.5px] border-amber-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[10deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-amber-300 font-light drop-shadow-[0_0_4px_rgba(252,211,77,0.6)]">
                    Jordan Malik
                  </div>
<div className="text-[10px] text-amber-500/70 font-extralight uppercase tracking-widest">
                    VP Sales
                  </div>
</div>
<span className="ml-auto text-amber-400 text-sm font-light drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]">
                    AeroScale
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse" style={{animationDelay: '3s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#00050a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '5.2s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-cyan-500/70 uppercase tracking-widest block mb-4">
                    Growth Teams
                  </span>
<p className="text-sm text-cyan-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(34,211,238,0.6)]">
                  “Our outbound campaigns now start with signals instead of guesswork.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-cyan-950 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
<img alt="Camila Ortega" className="w-10 h-10 rounded-full border-[1.5px] border-cyan-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[180deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-cyan-300 font-light drop-shadow-[0_0_4px_rgba(103,232,249,0.6)]">
                    Camila Ortega
                  </div>
<div className="text-[10px] text-cyan-500/70 font-extralight uppercase tracking-widest">
                    Growth Director
                  </div>
</div>
<span className="ml-auto text-cyan-400 text-sm font-light drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
                    BrightLayer
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)] animate-pulse" style={{animationDelay: '3.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]">
</div>
<div className="relative h-full rounded-[20px] bg-[#05000a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 pointer-events-none z-20 opacity-30 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10 rounded-t-[14px]">
</div>
<div className="absolute inset-0 bg-violet-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4.8s'}}></div>
<div className="relative z-30 mb-6">
<span className="text-xs font-light text-violet-500/70 uppercase tracking-widest block mb-4">
                    Enterprise Sales
                  </span>
<p className="text-sm text-violet-400/90 font-light leading-relaxed drop-shadow-[0_0_3px_rgba(167,139,250,0.6)]">
                  “The routing and orchestration layers are incredibly powerful.”
                </p>
</div>
<div className="relative z-30 flex items-center gap-4">
<div className="relative p-0.5 rounded-full bg-violet-950 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
<img alt="Thomas Reid" className="w-10 h-10 rounded-full border-[1.5px] border-violet-500/50 object-cover opacity-80 mix-blend-luminosity grayscale sepia-[.5] hue-rotate-[240deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a8f3649-9a97-4446-955e-d3ced353790f_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-violet-300 font-light drop-shadow-[0_0_4px_rgba(196,181,253,0.6)]">
                    Thomas Reid
                  </div>
<div className="text-[10px] text-violet-500/70 font-extralight uppercase tracking-widest">
                    Enterprise Sales Lead
                  </div>
</div>
<span className="ml-auto text-violet-400 text-sm font-light drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]">
                    CoreBridge
                  </span>
</div>
</div>
</div>
</div>

<div className="flex w-max gap-4 animate-marquee-right">

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse">
</div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="relative h-full rounded-[20px] bg-[#020a02] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="relative z-20 mb-6">
<span className="text-xs uppercase tracking-widest text-emerald-500/70 block mb-4">
                    RevOps Platform
                  </span>
<p className="text-sm text-emerald-400/90 font-light leading-relaxed">
                  “SignalAI replaced our enrichment and intent stack in one platform.”
                </p>
</div>
<div className="relative z-20 flex items-center gap-4">
<div className="p-0.5 rounded-full bg-emerald-950">
<img alt="Daniel Foster" className="w-10 h-10 rounded-full border border-emerald-500/50 object-cover opacity-80 mix-blend-luminosity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a44deb57-f322-4fc8-9184-d05e21080cb2_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-emerald-300 font-light">
                    Daniel Foster
                  </div>
<div className="text-[10px] uppercase tracking-widest text-emerald-500/70">
                    RevOps Manager
                  </div>
</div>
<span className="ml-auto text-sm text-emerald-400 font-light">
                    PulseNode
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)] animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="relative h-full rounded-[20px] bg-[#00050a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen pointer-events-none animate-pulse" style={{animationDuration: '5s'}}></div>
<div className="relative z-20 mb-6">
<span className="text-xs uppercase tracking-widest text-cyan-500/70 block mb-4">
                    Sales Automation
                  </span>
<p className="text-sm text-cyan-400/90 font-light leading-relaxed">
                  “Our SDR team now works from live buying signals instead of stale lists.”
                </p>
</div>
<div className="relative z-20 flex items-center gap-4">
<div className="p-0.5 rounded-full bg-cyan-950">
<img alt="Ava Mitchell" className="w-10 h-10 rounded-full border border-cyan-500/50 object-cover opacity-80 mix-blend-luminosity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5fa796b-5a4e-4746-8463-8e491f896f5c_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-cyan-300 font-light">
                    Ava Mitchell
                  </div>
<div className="text-[10px] uppercase tracking-widest text-cyan-500/70">
                    SDR Director
                  </div>
</div>
<span className="ml-auto text-sm text-cyan-400 font-light">
                    QuantumReach
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="relative h-full rounded-[20px] bg-[#0a0500] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute inset-0 bg-amber-500/5 mix-blend-screen pointer-events-none animate-pulse" style={{animationDuration: '3s'}}></div>
<div className="relative z-20 mb-6">
<span className="text-xs uppercase tracking-widest text-amber-500/70 block mb-4">
                    Pipeline Operations
                  </span>
<p className="text-sm text-amber-400/90 font-light leading-relaxed">
                  “SignalAI helped us cut wasted outbound volume by more than half.”
                </p>
</div>
<div className="relative z-20 flex items-center gap-4">
<div className="p-0.5 rounded-full bg-amber-950">
<img alt="Ethan Cole" className="w-10 h-10 rounded-full border border-amber-500/50 object-cover opacity-80 mix-blend-luminosity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_3840w.jpg?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-amber-300 font-light">
                    Ethan Cole
                  </div>
<div className="text-[10px] uppercase tracking-widest text-amber-500/70">
                    Pipeline Lead
                  </div>
</div>
<span className="ml-auto text-sm text-amber-400 font-light">
                    HorizonFlow
                  </span>
</div>
</div>
</div>

<div className="w-[380px] shrink-0 mr-6 p-3 rounded-[32px] bg-zinc-800 shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),_0_20px_40px_-10px_rgba(0,0,0,0.9),_0_0_0_1px_rgba(0,0,0,1)] flex flex-col relative">
<div className="absolute bottom-3 right-6 w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" style={{animationDelay: '1.5s'}}></div>
<div className="absolute bottom-3 right-10 w-2 h-2 rounded-full bg-zinc-700"></div>
<div className="relative h-full rounded-[20px] bg-[#05000a] p-6 shadow-[inset_0_0_40px_rgba(0,0,0,1)] border-[6px] border-zinc-950 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none" style={{background: 'repeating-linear-gradient(0deg,#000,#000 2px,transparent 2px,transparent 4px)'}}></div>
<div className="absolute inset-0 bg-violet-500/5 mix-blend-screen pointer-events-none animate-pulse" style={{animationDuration: '4.5s'}}></div>
<div className="relative z-20 mb-6">
<span className="text-xs uppercase tracking-widest text-violet-500/70 block mb-4">
                    Enterprise Revenue
                  </span>
<p className="text-sm text-violet-400/90 font-light leading-relaxed">
                  “The orchestration layer gave us visibility we never had before.”
                </p>
</div>
<div className="relative z-20 flex items-center gap-4">
<div className="p-0.5 rounded-full bg-violet-950">
<img alt="Maya Chen" className="w-10 h-10 rounded-full border border-violet-500/50 object-cover opacity-80 mix-blend-luminosity grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d7ad40-af9f-4af2-baa2-8d7eb0382908_3840w.webp?w=800&amp;q=80"/>
</div>
<div>
<div className="text-sm text-violet-300 font-light">
                    Maya Chen
                  </div>
<div className="text-[10px] uppercase tracking-widest text-violet-500/70">
                    Enterprise Ops
                  </div>
</div>
<span className="ml-auto text-sm text-violet-400 font-light">
                    VertexLoop
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]">
</div>
</div>
</div>

<section className="z-10 max-w-[1200px] mx-auto pt-24 pb-24 px-6 relative">

<div className="max-w-2xl mx-auto text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-tight">
          How revenue teams turn
          <span className="block font-normal italic text-zinc-300/70">
              signal into pipeline
            </span>
</h2>
<p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto">
          From intent detection to outbound execution, SignalAI connects buying signals directly to revenue workflows.
        </p>
</div>

<div className="relative max-w-4xl mx-auto" id="hardware-pipeline">
<style>
          @keyframes text-slide {
            0% {
              top: -150px;
              opacity: 0;
            }

            10%,
            90% {
              opacity: 1;
            }

            100% {
              top: 100%;
              opacity: 0;
            }
          }
        </style>

<div className="absolute left-1/2 top-10 bottom-10 w-4 -translate-x-1/2 bg-zinc-900/50 backdrop-blur-sm rounded-full z-0 hidden md:flex flex-col justify-between items-center border border-zinc-800 shadow-[inset_0_2px_10px_rgba(0,0,0,0.7)]">
<div className="absolute inset-y-0 w-1 bg-zinc-800 rounded-full overflow-hidden z-0">
<div className="absolute -top-32 left-0 w-full h-32 bg-gradient-to-b from-transparent via-emerald-500 to-transparent animate-[text-slide_3s_linear_infinite] shadow-[0_0_15px_rgba(16,185,129,0.8)]">
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 -mt-5">
<div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] border border-emerald-900">
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
<div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)] border border-amber-900">
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10">
<div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)] border border-cyan-900">
</div>
</div>
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] z-10 -mb-5">
<div className="w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.8)] border border-violet-900">
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 md:text-right">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] font-light text-emerald-300/90 tracking-widest uppercase mb-3">
              Signal Detection
            </div>
<h3 className="text-xl font-light text-zinc-100">
              Identify high-intent accounts early
            </h3>
<p className="text-sm text-zinc-400 font-extralight mt-2 leading-relaxed">
              Monitor behavioral and firmographic signals across your market to identify companies actively researching
              your
              category.
            </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-emerald-500/30">
<div className="w-12 h-12 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)] shrink-0">
<iconify-icon className="text-2xl" icon="solar:radar-2-linear"></iconify-icon>
</div>
<ul className="text-sm text-zinc-300/80 space-y-1.5 list-disc pl-4 marker:text-emerald-500/70 font-light">
<li>Behavioral signal tracking</li>
<li>Intent spike detection</li>
<li>ICP match filtering</li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-amber-500/30 flex-row-reverse md:flex-row">
<ul className="flex-1 text-sm text-zinc-300/80 space-y-1.5 list-disc md:list-none pl-4 md:pl-0 marker:text-amber-500/70 font-light text-left md:text-right md:pr-2">
<li>AI scoring engine</li>
<li>Account prioritization</li>
<li>Fit &amp; engagement modeling</li>
</ul>
<div className="w-12 h-12 rounded-xl bg-amber-950 flex items-center justify-center text-amber-400 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)] shrink-0">
<iconify-icon className="text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-2">
<div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-[10px] font-light text-amber-300/90 tracking-widest uppercase mb-3">
              Signal Intelligence
            </div>
<h3 className="text-xl font-light text-zinc-100">
              Score accounts automatically
            </h3>
<p className="text-sm text-zinc-400 font-extralight mt-2 leading-relaxed">
              SignalAI analyzes intent signals in real time and ranks accounts based on engagement, fit, and buying
              probability.
            </p>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 group">
<div className="md:w-1/2 md:pr-16 md:text-right">
<div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-light text-cyan-300/90 tracking-widest uppercase mb-3">
              Workflow Automation
            </div>
<h3 className="text-xl font-light text-zinc-100">
              Trigger outbound sequences
            </h3>
<p className="text-sm text-zinc-400 font-extralight mt-2 leading-relaxed">
              When signals spike, automatically launch multi-channel sequences so your team reaches buyers at the
              perfect
              moment.
            </p>
</div>
<div className="md:w-1/2 md:pl-16 w-full">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 group-hover:border-cyan-500/30">
<div className="w-12 h-12 rounded-xl bg-cyan-950 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] shrink-0">
<iconify-icon className="text-2xl" icon="solar:send-square-linear"></iconify-icon>
</div>
<ul className="text-sm text-zinc-300/80 space-y-1.5 list-disc pl-4 marker:text-cyan-500/70 font-light">
<li>Automated sequence triggers</li>
<li>Multi-channel outreach</li>
<li>SDR notifications</li>
</ul>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
<div className="md:w-1/2 md:pr-16 w-full order-2 md:order-1">
<div className="bg-zinc-900/50 backdrop-blur-sm p-5 rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex items-center gap-4 hover:bg-zinc-800/60 transition-all duration-300 justify-end group-hover:border-violet-500/30 flex-row-reverse md:flex-row">
<ul className="flex-1 text-sm text-zinc-300/80 space-y-1.5 list-disc md:list-none pl-4 md:pl-0 marker:text-violet-500/70 font-light text-left md:text-right md:pr-2">
<li>Territory routing</li>
<li>SDR assignment</li>
<li>CRM pipeline sync</li>
</ul>
<div className="w-12 h-12 rounded-xl bg-violet-950 flex items-center justify-center text-violet-400 border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.1)] shrink-0">
<iconify-icon className="text-2xl" icon="solar:route-linear"></iconify-icon>
</div>
</div>
</div>
<div className="md:w-1/2 md:pl-16 order-1 md:order-2">
<div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-[10px] font-light text-violet-300/90 tracking-widest uppercase mb-3">
              Revenue Routing
            </div>
<h3 className="text-xl font-light text-zinc-100">
              Send opportunities to the right team
            </h3>
<p className="text-sm text-zinc-400 font-extralight mt-2 leading-relaxed">
              Accounts are routed automatically to SDRs or account owners based on territory, segment, and deal stage.
            </p>
</div>
</div>
</div>

<div className="mt-12 text-center">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-light">
          Signals → Scoring → Outreach → Pipeline
        </div>
</div>
</section>

<section className="z-10 max-w-[1200px] mx-auto pt-24 pb-24 px-6 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div>
<div className="text-xs uppercase tracking-[0.25em] text-emerald-400/80 mb-4">
            Security &amp; Compliance
          </div>
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white leading-[1.1] drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
            Deploy with confidence
            <span className="block font-normal italic text-zinc-300/70">
                encrypted at every layer
              </span>
</h2>
<p className="mt-6 text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
            SignalAI is built for modern revenue teams operating in regulated environments with encryption, access
            controls,
            and auditability designed in from day one.
          </p>

<div className="mt-8 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(16,185,129,0.35)]"></span>
            Encryption in transit &amp; at rest
            </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shadow-[0_0_10px_rgba(245,158,11,0.35)]"></span>
            SSO / SCIM ready
            </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-xs text-zinc-400 font-light">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shadow-[0_0_10px_rgba(34,211,238,0.35)]"></span>
            Audit logs &amp; retention
            </span>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">

<div className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] p-6 hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-xl bg-emerald-950 border border-emerald-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-emerald-400" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-light tracking-tight">
                Encryption layer
              </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
              TLS in transit, AES-256 at rest, and optional key rotation for enterprise environments.
            </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] p-6 hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-xl bg-amber-950 border border-amber-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-amber-400" icon="solar:user-id-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-light tracking-tight">
                Access controls
              </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
              SSO/SAML support, SCIM provisioning, and role-based permissions for every workflow and team.
            </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] p-6 hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-xl bg-cyan-950 border border-cyan-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-cyan-300" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-light tracking-tight">
                Auditability
              </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
              Immutable audit logs, configurable retention, and export-ready reporting for compliance and review.
            </p>
</div>

<div className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 shadow-[inset_0_1px_10px_rgba(0,0,0,1),_0_1px_0_rgba(255,255,255,0.05)] p-6 hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-11 h-11 rounded-xl bg-violet-950 border border-violet-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-violet-300" icon="solar:server-square-linear"></iconify-icon>
</div>
<div className="text-sm text-white font-light tracking-tight">
                Secure runtime
              </div>
</div>
<p className="mt-4 text-sm text-zinc-400 font-light leading-relaxed">
              Hardened infrastructure, least-privilege services, and isolated execution designed for scale and safety.
            </p>
</div>

<div className="sm:col-span-2 mt-2">
<div className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-light mb-3">
              Compliance badges
            </div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 text-center">
<div className="text-sm text-zinc-200 font-light">GDPR</div>
<div className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Ready</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 text-center">
<div className="text-sm text-zinc-200 font-light">SOC 2</div>
<div className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Aligned</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 text-center">
<div className="text-sm text-zinc-200 font-light">CCPA</div>
<div className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Controls</div>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-5 text-center">
<div className="text-sm text-zinc-200 font-light">ISO 27001</div>
<div className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">Framework</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]">
</div>
</div>
</div>

<section className="z-10 max-w-[1000px] mx-auto pt-24 pb-24 px-6 relative" id="faq-section">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
          Knowledge Base
        </h2>
<p className="text-zinc-400 font-light text-lg leading-relaxed max-w-2xl mx-auto">
          Everything teams need to launch, secure, and scale SignalAI.
        </p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="kb-tab px-6 py-2.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)] text-sm font-light transition-all duration-300 active-tab" data-tab="start" onclick="window.switchKbTab('start', this)">
      Getting Started
    </button>
<button className="kb-tab px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800 hover:text-white text-sm font-light transition-all duration-300" data-tab="security" onclick="window.switchKbTab('security', this)">
      Data &amp; Security
    </button>
<button className="kb-tab px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800 hover:text-white text-sm font-light transition-all duration-300" data-tab="workflows" onclick="window.switchKbTab('workflows', this)">
      Workflows &amp; Integrations
    </button>
<button className="kb-tab px-6 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800 hover:text-white text-sm font-light transition-all duration-300" data-tab="pricing" onclick="window.switchKbTab('pricing', this)">
      Pricing &amp; Access
    </button>
</div>

<div className="max-w-3xl mx-auto min-h-[400px]">

<div className="kb-content block space-y-1" id="kb-start">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-emerald-300 transition-colors duration-300">
            How quickly can we launch SignalAI?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Most teams can connect their CRM, define their ICP, and start routing signals in under one day.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-emerald-300 transition-colors duration-300">
            Do I need a demo before using the platform?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  No. Teams can start free, explore the workflow, and book a demo later for deeper onboarding.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-emerald-300 transition-colors duration-300">
            What systems does SignalAI connect with first?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-emerald-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  SignalAI is designed to plug into modern CRMs and outbound workflows first, so setup is lightweight.
                </p>
</div>
</div>
</div>
</div>

<div className="kb-content hidden space-y-1" id="kb-security">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-amber-300 transition-colors duration-300">
            Is data encrypted in transit and at rest?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-amber-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. SignalAI uses encryption across transport and storage layers to keep customer data protected.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-amber-300 transition-colors duration-300">
            Do you support SSO and SCIM?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-amber-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. Enterprise environments can use identity provisioning and access controls to manage users
                  securely.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-amber-300 transition-colors duration-300">
            Can we review audit logs?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-amber-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. SignalAI provides auditability so teams can review activity, changes, and operational events.
                </p>
</div>
</div>
</div>
</div>

<div className="kb-content hidden space-y-1" id="kb-workflows">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-cyan-300 transition-colors duration-300">
            Can SignalAI trigger sequences automatically?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-cyan-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. Workflows can launch the moment a qualified signal is detected.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-cyan-300 transition-colors duration-300">
            How does account routing work?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-cyan-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Accounts can be routed by territory, segment, owner, or stage depending on your operating model.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-cyan-300 transition-colors duration-300">
            Does SignalAI sync with our CRM?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-cyan-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. Pipeline actions and qualified accounts can be pushed into your existing sales workflow.
                </p>
</div>
</div>
</div>
</div>

<div className="kb-content hidden space-y-1" id="kb-pricing">
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-violet-300 transition-colors duration-300">
            Can I start free before committing?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-violet-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  Yes. Our free tier allows you to test signal capture and basic routing for a limited number of
                  accounts.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-violet-300 transition-colors duration-300">
            What happens when our team grows?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-violet-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  You can easily upgrade to Pro or Enterprise plans to add more seats, signals, and integration depth.
                </p>
</div>
</div>
</div>
<div className="group border-b border-zinc-800/60 overflow-hidden">
<button className="w-full py-5 flex justify-between items-center text-left gap-4" onclick="window.toggleFaq(this)">
<span className="text-lg font-light text-zinc-300 group-hover:text-violet-300 transition-colors duration-300">
            Do you offer support during onboarding?
          </span>
<iconify-icon className="faq-icon text-xl text-zinc-600 group-hover:text-violet-400 transition-all duration-300 shrink-0" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="min-h-0">
<p className="pb-6 text-zinc-400 font-light leading-relaxed">
                  All plans include documentation and chat support. Enterprise plans get a dedicated solutions engineer.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-32 relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm shadow-[inset_0_1px_10px_rgba(0,0,0,1)] flex flex-col lg:flex-row">

<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/10 via-transparent to-amber-900/10 pointer-events-none">
</div>

<div className="relative z-10 flex-1 max-w-2xl p-10 lg:p-20 flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
<div className="absolute inset-0 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none z-0"></div>
<span className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs uppercase tracking-[0.18em] text-emerald-300/80 font-light">
                Pipeline Activation
              </span>
<h2 className="relative z-10 mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.08]">
              Turn buying signals into
              <span className="block font-normal italic text-emerald-300 drop-shadow-[0_0_12px_rgba(16,185,129,0.22)]">
                  predictable pipeline
                </span>
</h2>
<p className="relative z-10 mt-6 text-lg text-zinc-300/90 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              SignalAI captures intent, scores accounts in real time, and launches outreach the moment buyers show
              interest.
            </p>
<div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-[26rem] justify-center lg:justify-start">
<button className="group flex-1 flex items-center justify-center py-3.5 px-7 shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 overflow-hidden font-medium text-emerald-950 bg-gradient-to-r from-[#A7F3D0] to-[#10B981] rounded-full text-base relative whitespace-nowrap" style={{boxShadow: '0 15px 33px -12px rgba(16, 185, 129, 0.9), inset 0 4px 6.3px rgba(167, 243, 208, 1), inset 0 -5px 6.3px rgba(5,150,105,1)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute inset-0 translate-y-full"></div>
<span className="relative flex items-center justify-center gap-2">
                    Start free
                    <iconify-icon className="w-4 h-4" icon="lucide:send"></iconify-icon>
</span>
</button>
<button className="flex-1 hover:bg-white/5 transition-all flex justify-center text-base font-light text-zinc-200 bg-gradient-to-b from-white/5 via-transparent to-black/20 rounded-full px-7 py-3.5 gap-2 items-center backdrop-blur-sm" style={{boxShadow: '0 18px 35px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255,255,255,0.05)', color: '#e5e7eb'}}>
<span className="tracking-tight">Book a demo</span>
<iconify-icon className="text-base" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<p className="relative z-10 mt-4 text-xs text-zinc-500">
              No credit card • Setup in minutes • Works with your CRM
            </p>
</div>

<div className="relative flex-1 min-h-[400px] lg:min-h-[600px] flex items-center justify-center bg-zinc-900/30 border-t lg:border-t-0 lg:border-l border-zinc-700/30 pt-8 pb-16 md:pt-12 md:pb-24 lg:py-0">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="absolute inset-0 pointer-events-none z-20 opacity-20 mix-blend-overlay" style={{background: 'repeating-linear-gradient(0deg, #000, #000 2px, transparent 2px, transparent 4px)'}}>
</div>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10">
</div>
<div className="relative z-30 w-full max-w-md mx-6 lg:mx-12 overflow-hidden rounded-xl border border-zinc-800 bg-[#050505] shadow-[0_0_40px_rgba(0,0,0,0.8)]">

<div className="h-10 bg-zinc-950 border-b border-zinc-800 flex items-center px-4 gap-2 shrink-0">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="mx-auto flex items-center gap-1.5 text-xs font-light text-emerald-500 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1 rounded-md drop-shadow-[0_0_5px_rgba(16,185,129,0.3)]">
<iconify-icon className="text-xs" icon="solar:stars-linear"></iconify-icon>
                  Signal Console
                </div>
</div>

<div className="relative flex-1 bg-[#020502] p-5 flex flex-col gap-3">
<div className="absolute inset-0 bg-emerald-500/5 mix-blend-screen pointer-events-none z-10 animate-pulse" style={{animationDuration: '4s'}}></div>

<style>
                  @keyframes rowHighlight {

                    0%,
                    25%,
                    100% {
                      background-color: rgba(24, 24, 27, 0.4);
                      border-color: rgba(39, 39, 42, 0.8);
                      box-shadow: none;
                      opacity: 0.7;
                    }

                    5%,
                    20% {
                      background-color: rgba(24, 24, 27, 0.8);
                      border-color: var(--highlight-border);
                      box-shadow: 0 0 15px var(--highlight-shadow);
                      opacity: 1;
                    }
                  }

                  @keyframes dotGlow {

                    0%,
                    25%,
                    100% {
                      box-shadow: none;
                      opacity: 0.8;
                    }

                    5%,
                    20% {
                      box-shadow: 0 0 10px 2px var(--highlight-border);
                      opacity: 1;
                    }
                  }

                  .console-row {
                    animation: rowHighlight 8s infinite ease-in-out;
                    background-color: rgba(24, 24, 27, 0.4);
                    border: 1px solid rgba(39, 39, 42, 0.8);
                    opacity: 0.7;
                    border-radius: 0.5rem;
                    padding: 0.875rem;
                    position: relative;
                    z-index: 20;
                  }

                  .console-row .status-dot {
                    animation: dotGlow 8s infinite ease-in-out;
                    border-radius: 9999px;
                  }

                  .row-1 {
                    --highlight-border: rgba(16, 185, 129, 0.4);
                    --highlight-shadow: rgba(16, 185, 129, 0.15);
                    animation-delay: 0s;
                  }

                  .row-1 .status-dot {
                    animation-delay: 0s;
                  }

                  .row-2 {
                    --highlight-border: rgba(245, 158, 11, 0.4);
                    --highlight-shadow: rgba(245, 158, 11, 0.15);
                    animation-delay: 2s;
                  }

                  .row-2 .status-dot {
                    animation-delay: 2s;
                  }

                  .row-3 {
                    --highlight-border: rgba(6, 182, 212, 0.4);
                    --highlight-shadow: rgba(6, 182, 212, 0.15);
                    animation-delay: 4s;
                  }

                  .row-3 .status-dot {
                    animation-delay: 4s;
                  }

                  .row-4 {
                    --highlight-border: rgba(139, 92, 246, 0.4);
                    --highlight-shadow: rgba(139, 92, 246, 0.15);
                    animation-delay: 6s;
                  }

                  .row-4 .status-dot {
                    animation-delay: 6s;
                  }
                </style>

<div className="console-row row-1">
<div className="flex items-center gap-3 mb-1.5">
<span className="relative flex h-2 w-2 shrink-0 status-dot">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-sm font-light text-zinc-200">
                        Intent spike detected
                      </span>
<span className="ml-auto text-[10px] text-emerald-500/70 uppercase tracking-widest">
                        Live
                      </span>
</div>
<div className="pl-5 text-xs text-zinc-400 font-light">
                    Account: <span className="text-zinc-300">Vortex Labs</span> • Score: 92
                  </div>
</div>

<div className="console-row row-2">
<div className="flex items-center gap-3 mb-1.5">
<span className="h-2 w-2 bg-amber-500/80 shrink-0 status-dot"></span>
<span className="text-sm font-light text-zinc-200">
                        Account enriched
                      </span>
<span className="ml-auto text-[10px] text-zinc-600 uppercase tracking-widest">
                        2m ago
                      </span>
</div>
<div className="pl-5 text-xs text-zinc-400 font-light">
                    Firmographic + technographic match
                  </div>
</div>

<div className="console-row row-3">
<div className="flex items-center gap-3 mb-1.5">
<span className="h-2 w-2 bg-cyan-500/80 shrink-0 status-dot"></span>
<span className="text-sm font-light text-zinc-200">
                        Sequence launched
                      </span>
<span className="ml-auto text-[10px] text-zinc-600 uppercase tracking-widest">
                        5m ago
                      </span>
</div>
<div className="pl-5 text-xs text-zinc-400 font-light">
                    Channel: <span className="text-zinc-300">Email + LinkedIn</span>
</div>
</div>

<div className="console-row row-4">
<div className="flex items-center gap-3 mb-1.5">
<span className="h-2 w-2 bg-violet-500/80 shrink-0 status-dot"></span>
<span className="text-sm font-light text-zinc-200">
                        Opportunity created
                      </span>
<span className="ml-auto text-[10px] text-zinc-600 uppercase tracking-widest">
                        12m ago
                      </span>
</div>
<div className="pl-5 text-xs text-zinc-400 font-light">
                    Stage: <span className="text-zinc-300">Discovery</span> • Owner assigned
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-zinc-900 pt-24 pb-16 relative z-10">
<div className="max-w-[1200px] mx-auto px-6">

<div className="flex flex-col lg:flex-row justify-between gap-20">

<div className="max-w-[260px]">
<div className="text-lg font-medium text-white tracking-tight mb-5">
              SignalAI
            </div>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
              Turn buying signals into pipeline with automated scoring, routing, and outbound workflows.
            </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-12">

<div>
<h4 className="text-xs font-light text-zinc-300 mb-5 uppercase tracking-widest">
                Product
              </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Platform</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Solutions</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-light text-zinc-300 mb-5 uppercase tracking-widest">
                Resources
              </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Knowledge Base</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-light text-zinc-300 mb-5 uppercase tracking-widest">
                Explore
              </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Use Cases</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Workflow Engine</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-light text-zinc-300 mb-5 uppercase tracking-widest">
                Company
              </h4>
<ul className="space-y-3 text-sm font-light text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>

<div className="mt-20 pt-10 relative">
<div className="w-full h-px relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-800/80 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 w-72 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]">
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm font-light text-zinc-500">
<div>
              © 2026 SignalAI
            </div>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3">
<a className="hover:text-emerald-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-emerald-400 transition-colors" href="#">X / Twitter</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</div>
</footer>
</div>






    </>
  );
}
