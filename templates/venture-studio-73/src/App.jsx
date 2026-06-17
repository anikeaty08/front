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



        (function() {
          var u = window.UnicornStudio;
          if (u && u.init) {
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", function() { u.init(); });
            } else {
              u.init();
            }
          } else {
            window.UnicornStudio = { isInitialized: false };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.11/dist/unicornStudio.umd.js";
            i.onload = function() {
              if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", function() { UnicornStudio.init(); });
              } else {
                UnicornStudio.init();
              }
            };
            (document.head || document.body).appendChild(i);
          }
        })();
      


      lucide.createIcons();
    
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
      
<div className="aura-background-component w-full -z-10 inset-0 h-full absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 w-full h-full -z-10" data-us-project="BmkW7Lf1854963eLrBje"></div>

</div>

<nav className="fixed z-50 border-white/10 border-b top-0 right-0 left-0 backdrop-blur-lg">
<div className="flex h-16 max-w-[80rem] mx-auto px-6 items-center justify-between w-full">
<div className="flex items-center gap-6 lg:gap-10">
<a className="group flex items-center gap-2" href="#">Venture Studios</a>
<div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md transition-colors hover:bg-white/[0.06] hover:border-white/10">
<a className="relative px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group" href="#">
<span className="relative z-10">Services</span>
<div className="absolute inset-0 bg-white/10 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</a>
<div className="relative group/dropdown flex items-center">
<button className="relative px-4 py-1.5 text-sm font-medium text-gray-400 group-hover/dropdown:text-white transition-colors rounded-full">
<span className="relative z-10 flex items-center gap-1">
                  Community
                  <svg className="opacity-50 group-hover/dropdown:opacity-100 transition-all duration-300 group-hover/dropdown:-rotate-180" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</span>
<div className="absolute inset-0 bg-white/10 scale-50 opacity-0 group-hover/dropdown:scale-100 group-hover/dropdown:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible translate-y-2 group-hover/dropdown:translate-y-0 scale-[0.98] group-hover/dropdown:scale-100 transition-all duration-300 ease-out z-50">
<div className="w-[500px] bg-[#090a0d]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 shadow-[0_24px_48px_rgba(0,0,0,0.5)] grid grid-cols-2 gap-2 text-left relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-white/30 group-hover/item:bg-white/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
<svg className="text-white group-hover/item:text-gray-100 transition-colors" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.066H5.022z"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-gray-200 transition-colors">
                        X (Twitter)
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Latest updates &amp; announcements
                      </p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-blue-500/40 group-hover/item:bg-blue-500/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(59,130,246,0.25)]">
<svg className="text-white group-hover/item:text-blue-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-blue-400 transition-colors">
                        LinkedIn
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Network with professionals
                      </p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-red-500/40 group-hover/item:bg-red-500/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(239,68,68,0.25)]">
<svg className="text-white group-hover/item:text-red-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
<polygon points="10 15 15 12 10 9 10 15"></polygon>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-red-400 transition-colors">
                        YouTube
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Watch video tutorials
                      </p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-purple-500/40 group-hover/item:bg-purple-500/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(168,85,247,0.25)]">
<svg className="text-white group-hover/item:text-purple-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="4" width="14" x="5" y="5"></rect>
<path d="M12 9v2"></path>
<path d="M9 12h2"></path>
<path d="M15 12h-2"></path>
<path d="M12 15v-2"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-purple-400 transition-colors">
                        Slack
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Chat with the community
                      </p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-gray-500/40 group-hover/item:bg-gray-500/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(156,163,175,0.25)]">
<svg className="text-white group-hover/item:text-gray-300 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-gray-300 transition-colors">
                        GitHub
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Contribute to projects
                      </p>
</div>
</a>
<a className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 group/item" href="#">
<div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-cyan-500/40 group-hover/item:bg-cyan-500/10 transition-all duration-300 group-hover/item:shadow-[0_0_20px_rgba(6,182,212,0.25)]">
<svg className="text-white group-hover/item:text-cyan-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</div>
<div className="flex-1">
<h4 className="text-white font-medium text-sm mb-0.5 group-hover/item:text-cyan-400 transition-colors">
                        Telegram
                      </h4>
<p className="text-gray-400 text-xs leading-relaxed font-light">
                        Join the discussion
                      </p>
</div>
</a>
</div>
</div>
</div>
<button className="relative px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group">
<span className="relative z-10">Insights</span>
<div className="absolute inset-0 bg-white/10 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</button>
<a className="relative px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group" href="#">
<span className="relative z-10">Contact</span>
<div className="absolute inset-0 bg-white/10 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</a>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<a className="relative px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group hidden lg:block" href="#">
<span className="relative z-10">Case Studies</span>
<div className="absolute inset-0 bg-white/5 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</a>
<a className="relative px-3 py-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors rounded-full group hidden sm:block" href="#">
<span className="relative z-10">Client Login</span>
<div className="absolute inset-0 bg-white/5 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-full origin-center"></div>
</a>
<a className="group relative font-medium text-black bg-white rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] ml-2 border border-white/50 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm" href="#">
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center gap-2">
              Start a project
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>
</div>
</nav>

<style className="">
      @keyframes float-card {

        0%,
        100% {
          transform: translateY(0) rotate(-2deg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 255, 255, 0.05);
        }

        50% {
          transform: translateY(-12px) rotate(-1deg);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 255, 255, 0.08);
        }
      }

      .animate-float-card {
        animation: float-card 6s ease-in-out infinite;
      }

      @keyframes pulse-ring {
        0% {
          stroke-dashoffset: 100;
        }

        100% {
          stroke-dashoffset: 44;
          /* 56% */
        }
      }

      .animate-progress {
        animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }

      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(20px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-entrance {
        animation: fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      /* Custom scrollbar for Kanban */
      .kanban-scroll::-webkit-scrollbar {
        height: 6px;
      }

      .kanban-scroll::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.02);
        border-radius: 4px;
      }

      .kanban-scroll::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
      }

      .kanban-scroll::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.2);
      }
    </style>
<div className="flex flex-col z-10 max-w-[80rem] mr-auto ml-auto pt-32 pr-6 pb-12 pl-6 relative items-start">

<div className="agency-eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-white/70 mb-6">
<span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_18px_rgba(255,137,100,.9)]"></span>
        Strategy • Design • Engineering
      </div>
<h1 className="md:text-8xl leading-none text-balance font-normal text-white tracking-tighter max-w-3xl mb-6 text-5xl sm:text-6xl">
        Fueling Jamaican Businesses
        <br/>
        with Tech &amp; Strategic Capital
      </h1>
<p className="md:text-xl text-text-secondary leading-relaxed text-lg font-light max-w-2xl mb-10">
        Digitize Venture Studios partners with growing teams to shape strategy,
        design polished interfaces, build scalable systems, and connect every
        launch workflow in one place.
      </p>

<div className="relative group mb-24">
<div className="absolute -inset-1 bg-gradient-to-r from-primary to-orange-400 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
<button className="group inline-flex text-[13px] sm:text-sm uppercase whitespace-nowrap transition-all duration-500 hover:scale-[1.02] outline-none font-semibold tracking-widest pt-4 pr-10 pb-4 pl-10 relative items-center justify-center" onmouseenter="this.style.setProperty('--glow-opacity', '1');" onmouseleave="this.style.setProperty('--glow-opacity', '0');" onmousemove="const rect = this.getBoundingClientRect(); this.style.setProperty('--x', (event.clientX - rect.left) + 'px'); this.style.setProperty('--y', (event.clientY - rect.top) + 'px');" style={{'--x': '50%', '--y': '50%', '--glow-opacity': '0'}}>

<span className="absolute -inset-10 z-[-2] rounded-full opacity-[var(--glow-opacity)] transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(180px circle at var(--x) var(--y), rgba(255, 116, 44, 0.22) 0%, rgba(255, 116, 44, 0.12) 32%, transparent 70%)', filter: 'blur(22px)'}}></span>

<span className="absolute -inset-3 z-[-1] rounded-full opacity-[var(--glow-opacity)] transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(130px circle at var(--x) var(--y), rgba(255, 235, 180, 0.36) 0%, rgba(255, 132, 55, 0.20) 42%, transparent 78%)', filter: 'blur(10px)'}}></span>

<span className="absolute inset-0 z-0 rounded-full overflow-hidden bg-gradient-to-b from-[#fbfbfb] via-[#eeeeef] to-[#d9dadd] shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-2px_4px_rgba(0,0,0,0.06),0_6px_16px_rgba(0,0,0,0.28)] ring-1 ring-white/70 pointer-events-none transition-all duration-500">

<span className="absolute inset-0 opacity-[var(--glow-opacity)] transition-opacity duration-500" style={{background: 'radial-gradient(145px circle at var(--x) var(--y), rgba(255,255,245,0.95) 0%, rgba(255,244,205,0.65) 24%, rgba(255,152,78,0.22) 52%, transparent 78%)'}}></span>
</span>

<span className="relative z-10 flex items-center gap-2 text-[#3b2110] drop-shadow-[0_1px_0_rgba(255,255,255,0.75)]">
            SEE IN ACTION
            <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<div className="overflow-hidden min-h-[600px] flex flex-col md:flex-row animate-entrance bg-[#0d0e12]/95 w-full max-w-6xl border-white/10 border rounded-[20px] mr-auto ml-auto relative shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-2xl" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 45%, transparent)'}}>

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

<div className="flex flex-col shrink-0 bg-[#090a0d] w-16 z-20 border-white/5 border-r pt-4 pb-4 gap-x-6 gap-y-6 items-center hidden sm:flex">

<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20 mb-2 cursor-pointer hover:scale-105 transition-transform">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
</div>

<div className="overflow-hidden cursor-pointer group bg-[#07080a] w-12 h-24 border-orange-500/25 border rounded-xl relative shadow-[0_0_24px_rgba(249,115,22,0.12)]">

<div className="absolute inset-0 bg-gradient-to-b from-orange-500/25 via-orange-500/10 to-transparent opacity-70"></div>

<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,rgba(249,115,22,0.45)_1px,transparent_1px)] bg-[size:4px_4px]"></div>

<div className="group-hover:opacity-100 transition-opacity duration-500 bg-orange-500/20 opacity-0 rounded-md absolute top-0 right-0 bottom-0 left-0 blur"></div>

<div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-9 rounded-xl bg-black/35 border border-orange-500/20 px-1.5 py-1 text-center">
<div className="text-[15px] leading-none font-medium text-white">
                56
                <span className="text-[9px] text-white/70">%</span>
</div>

<div className="mt-2 h-[3px] w-full rounded-full bg-white/15 overflow-hidden">
<div className="h-full rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,146,60,0.9)] animate-todo-bar"></div>
</div>
</div>

<div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500/20 blur-md animate-todo-glow"></div>

<div className="absolute bottom-3 left-0 right-0 z-10 text-center">
<span className="text-[9px] font-semibold tracking-wider text-white">
                TO DO
              </span>
</div>
</div>

<div className="flex flex-col gap-4 mt-2 w-full items-center">
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors group relative">
<svg aria-hidden="true" className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
<path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
</svg>
<div className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-orange-500 rounded-full border border-[#090a0d]"></div>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] relative">
<svg aria-hidden="true" className="lucide lucide-check-square w-5 h-5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full"></div>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors">
<i className="w-6 h-6" data-lucide="video" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-auto">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all border-dashed">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="w-60 bg-[#121318]/90 border-r border-white/5 p-4 flex flex-col shrink-0 hidden md:flex z-10">
<h2 className="text-xl font-medium text-white mb-6 tracking-tight">
            Tracker
          </h2>

<div className="relative mb-6 group">
<i className="text-text-muted w-5 h-5 mr-3" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-[#1b1c22] border border-white/5 rounded-lg py-1.5 pl-9 pr-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-white/20 transition-all focus:bg-[#22242a]" placeholder="Search..." type="text"/>
</div>
<div className="space-y-1 mb-8">
<button className="w-full flex items-center gap-3 px-2 py-1.5 text-white/70 hover:bg-white/5 hover:text-white rounded-md text-sm transition-colors group">
<svg aria-hidden="true" className="lucide lucide-folder w-4 h-4 text-white/40 group-hover:text-white/70" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
</svg>
              My issues
            </button>
<button className="w-full flex items-center gap-3 px-2 py-1.5 text-white/70 hover:bg-white/5 hover:text-white rounded-md text-sm transition-colors group">
<svg aria-hidden="true" className="lucide lucide-check-square w-4 h-4 text-white/40 group-hover:text-white/70" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
              All issues
            </button>
<div className="h-4"></div>
<button className="w-full flex items-center gap-3 px-2 py-1.5 text-white/70 hover:bg-white/5 hover:text-white rounded-md text-sm transition-colors group">
<i className="w-4 h-4" data-lucide="layers" strokeWidth="1.5"></i>
              All projects
            </button>
</div>

<div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
<div className="flex items-center justify-between text-[10px] font-medium text-white/40 px-2 mb-2 tracking-wider">
<span className="">YOUR PROJECTS</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="space-y-1">

<div className="group">
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-white rounded-md text-sm transition-colors">
<div className="w-3 h-3 border border-red-500 transform rotate-45 flex-shrink-0"></div>
                  CRM
                </button>

<div className="pl-7 space-y-0.5 mt-0.5 border-l border-white/5 ml-3.5">
<button className="w-full text-left px-2 py-1 text-white bg-white/5 rounded text-sm font-medium">
                    Issues
                  </button>
<button className="w-full text-left px-2 py-1 text-white/60 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
                    Components
                  </button>
<button className="w-full text-left px-2 py-1 text-white/60 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
                    Milestones
                  </button>
<button className="w-full text-left px-2 py-1 text-white/60 hover:text-white hover:bg-white/5 rounded text-sm transition-colors">
                    Templates
                  </button>
</div>
</div>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-white/70 hover:text-white hover:bg-white/5 rounded-md text-sm transition-colors mt-2">
<div className="w-3 h-3 border border-blue-500 rounded-full flex-shrink-0"></div>
                Marketing and PM
              </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-white/70 hover:text-white hover:bg-white/5 rounded-md text-sm transition-colors">
<div className="w-3 h-3 border border-orange-500 flex-shrink-0" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
                Next Platform
              </button>
<button className="w-full flex items-center gap-2 px-2 py-1.5 text-white/70 hover:text-white hover:bg-white/5 rounded-md text-sm transition-colors">
<div className="w-3 h-3 border border-white/30 flex-shrink-0 rounded-sm"></div>
                Development
              </button>
</div>
</div>
</div>

<div className="flex-1 flex flex-col min-w-0 z-0 bg-[#14151a]/90 relative">

<div className="px-6 py-5 border-b border-white/5 flex flex-col gap-4">

<div className="flex justify-between items-center">
<div className="flex items-center gap-2 text-[13px] font-medium text-white/50">
<span className="hover:text-white/80 cursor-pointer transition-colors">
                  Your projects
                </span>
<span className="text-white/20">/</span>
<span className="hover:text-white/80 cursor-pointer transition-colors">
                  CRM
                </span>
<span className="text-white/20">/</span>
<span className="text-blue-400">Issues</span>
</div>

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full border-2 border-[#14151a] bg-gradient-to-tr from-purple-500 to-pink-500 relative z-30 shadow-sm"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#14151a] bg-gradient-to-tr from-blue-500 to-cyan-500 relative z-20 shadow-sm"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#14151a] bg-gradient-to-tr from-green-500 to-emerald-500 relative z-10 shadow-sm"></div>
<div className="w-6 h-6 rounded-full border-2 border-[#14151a] bg-[#2a2c33] flex items-center justify-center text-[10px] font-medium text-white/80 relative z-0 shadow-sm">
                    +5
                  </div>
</div>
<button className="text-white/40 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-more-vertical w-4 h-4" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</button>
</div>
</div>

<h2 className="text-2xl font-normal text-white tracking-tight">
              Issues
            </h2>
<div className="flex items-center justify-between border-b border-white/5 pb-2 -mb-5">
<div className="flex gap-6">
<button className="flex items-center gap-2 text-sm font-medium text-white pb-2 border-b-2 border-white">
<svg className="w-4 h-4" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<rect height="9" width="3" x="7" y="7"></rect>
<rect height="5" width="3" x="14" y="7"></rect>
</svg>
                  Kanban
                </button>
<button className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 pb-2 border-b-2 border-transparent transition-colors">
<svg aria-hidden="true" className="lucide lucide-list w-4 h-4" data-lucide="list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5h.01"></path>
<path d="M3 12h.01"></path>
<path d="M3 19h.01"></path>
<path d="M8 5h13"></path>
<path d="M8 12h13"></path>
<path d="M8 19h13"></path>
</svg>
                  List
                </button>
<button className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 pb-2 border-b-2 border-transparent transition-colors">
<svg aria-hidden="true" className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
                  Timeline
                </button>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white/80 pb-2 transition-colors">
<svg aria-hidden="true" className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 5H3"></path>
<path d="M12 19H3"></path>
<path d="M14 3v4"></path>
<path d="M16 17v4"></path>
<path d="M21 12h-9"></path>
<path d="M21 19h-5"></path>
<path d="M21 5h-7"></path>
<path d="M8 10v4"></path>
<path d="M8 12H3"></path>
</svg>
                Filter
              </button>
</div>
</div>

<div className="flex-1 overflow-x-auto overflow-y-hidden kanban-scroll pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex gap-4 h-full items-start min-w-max pb-4">

<div className="w-[280px] flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer mb-1">
<div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
                    BACKLOG
                    <span className="text-white/30 font-normal">− 10</span>
</div>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-white/40 hover:text-white">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<button className="w-full py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors flex items-center justify-center border-dashed">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab transform hover:-translate-y-0.5">
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Set up cluster monitoring
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Low
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      Devops
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-red-500 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="12,100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
                        12%
                      </div>
<div className="flex items-center gap-1 text-[11px] text-white/40">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
                        freelynk
                      </div>
</div>
<div className="flex items-center gap-2 text-white/30 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                        1
                      </span>
</div>
</div>
</div>

<div className="border-dashed h-32 border-white/5 border rounded-xl"></div>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab opacity-50 hover:opacity-100">
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Collect the LinkedIn's integration benchmarks
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-white/5 text-white/60 border border-white/10">
                      Medium
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      Marketing
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-white/20 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
                        0%
                      </div>
</div>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer mb-1">
<div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
<div className="w-2 h-2 rounded-full bg-white/80 border border-black/50"></div>
                    TO DO
                    <span className="text-white/30 font-normal">− 24</span>
</div>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-white/40 hover:text-white">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<button className="w-full py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors flex items-center justify-center border-dashed">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab transform hover:-translate-y-0.5">
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Sales planning and monitoring of important transactions
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Low
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 text-red-300 border border-red-500/20">
                      Sales
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      Marketing
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-orange-500 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="20,100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
                        20%
                      </div>
<div className="flex items-center gap-1 text-[11px] text-white/40">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
                        freelynk
                      </div>
</div>
<div className="flex items-center gap-2 text-white/30 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                        1
                      </span>
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                        2
                      </span>
</div>
</div>
</div>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab transform hover:-translate-y-0.5 mt-8">

<div className="w-full h-24 rounded-lg bg-gradient-to-br from-orange-900/40 via-[#3a2015] to-[#1c1d24] relative overflow-hidden group-hover:brightness-110 transition-all">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,160,100,0.2),transparent_50%)]"></div>

<div className="absolute bottom-2 left-2 right-2 h-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-orange-400/80 rounded-full blur-[1px]"></div>
</div>
</div>
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Update user onboarding flow
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Medium
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-red-500/10 text-red-300 border border-red-500/20">
                      Design
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-yellow-500 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="25,100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
                        25%
                      </div>
</div>
<div className="flex items-center gap-2 text-white/30 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                        4
                      </span>
</div>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer mb-1">
<div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    IN PROGRESS
                    <span className="text-white/30 font-normal">− 3</span>
</div>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-white/40 hover:text-white">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
</svg>
</button>
</div>
</div>
<button className="w-full py-1.5 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors flex items-center justify-center border-dashed">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</button>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab transform hover:-translate-y-0.5">
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Find the respondents for the moderated testing
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Medium
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      QA
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-blue-500 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="50,100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
                        50%
                      </div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full border border-[#1c1d24] bg-gradient-to-tr from-orange-500 to-amber-400"></div>
<div className="w-5 h-5 rounded-full border border-[#1c1d24] bg-gradient-to-tr from-purple-600 to-indigo-500"></div>
</div>
<div className="flex items-center gap-2 text-white/30 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                          2
                        </span>
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                          6
                        </span>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#1c1d24]/80 backdrop-blur-md border border-white/5 rounded-xl p-3.5 flex flex-col gap-3 hover:border-white/15 hover:bg-[#21232b] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-grab transform hover:-translate-y-0.5">
<p className="text-[13px] font-medium leading-snug text-white/90">
                    Conduct custdev interview w/ existing client
                  </p>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                      Medium
                    </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/10 text-orange-300 border border-orange-500/20">
                      QA
                    </span>
</div>
<div className="flex items-center justify-between mt-1">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-orange-500 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
<path className="text-current" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="90,100" strokeLinecap="round" strokeWidth="4"></path>
</svg>
                        90%
                      </div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full border border-[#1c1d24] bg-gradient-to-tr from-gray-500 to-gray-400"></div>
<div className="w-5 h-5 rounded-full border border-[#1c1d24] bg-gradient-to-tr from-green-500 to-emerald-400"></div>
</div>
<div className="flex items-center gap-2 text-white/30 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                          1
                        </span>
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                          24
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="w-[280px] flex flex-col gap-3">
<div className="flex items-center justify-between group cursor-pointer mb-1">
<div className="flex items-center gap-2 text-[13px] font-medium text-white/80">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
                    DONE
                    <span className="text-white/30 font-normal">− 14</span>
</div>
</div>
</div>
</div>

<div className="absolute top-[35%] left-[12%] md:left-[22%] z-50 w-72 bg-[#1b1c23]/95 backdrop-blur-xl border border-white/20 rounded-xl p-4 flex flex-col gap-3 animate-float-card group cursor-grab hidden sm:flex">

<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 rounded-xl pointer-events-none"></div>
<p className="text-sm font-medium leading-snug text-white relative z-10">
                Analyze, cluster, and understand search queries
              </p>
<div className="flex flex-wrap gap-1.5 relative z-10">
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/15 text-blue-300 border border-blue-500/30">
                  Low
                </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-orange-500/15 text-orange-300 border border-orange-500/30">
                  Devops
                </span>
<span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                  Research
                </span>
</div>
<div className="flex items-center justify-between mt-2 relative z-10">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-xs text-white/50">
<svg className="w-3.5 h-3.5 text-white/20 transform -rotate-90" viewbox="0 0 36 36">
<path className="text-white/20" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
                    0%
                  </div>
</div>
<div className="flex items-center gap-3">
<div className="flex -space-x-1.5">
<div className="w-5 h-5 rounded-full border border-[#1b1c23] bg-gradient-to-tr from-gray-600 to-gray-400"></div>
<div className="w-5 h-5 rounded-full border border-[#1b1c23] bg-gradient-to-tr from-red-500 to-orange-400"></div>
<div className="w-5 h-5 rounded-full border border-[#1b1c23] bg-gradient-to-tr from-blue-600 to-indigo-500"></div>
</div>
<div className="flex items-center gap-2 text-white/40 text-[11px]">
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
</svg>
                      3
                    </span>
<span className="flex items-center gap-1">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                      10
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-72 bg-[#121318]/90 border-l border-white/5 flex flex-col shrink-0 hidden lg:flex z-10 relative">

<div className="absolute right-0 top-[20%] w-[1px] h-[40%] bg-blue-400/50 blur-[2px]"></div>
<div className="px-5 py-5 border-b border-white/5 flex justify-between items-center">
<h2 className="text-xl font-medium text-white tracking-tight">Inbox</h2>
<button className="text-white/40 hover:text-white transition-colors">
<svg aria-hidden="true" className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-4 px-5 py-3 border-b border-white/5 text-[13px] font-medium">
<button className="text-white flex items-center gap-1.5 border-b-2 border-white pb-1 -mb-3">
<svg aria-hidden="true" className="lucide lucide-list-filter w-3.5 h-3.5" data-lucide="list-filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 5h20"></path>
<path d="M6 12h12"></path>
<path d="M9 19h6"></path>
</svg>
              All
            </button>
<button className="text-white/40 hover:text-white/80 transition-colors flex items-center gap-1.5 pb-1 -mb-3">
<svg aria-hidden="true" className="lucide lucide-check-square w-3.5 h-3.5" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
              Tasks
              <span className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[9px] text-white">
                2
              </span>
</button>
<button className="text-white/40 hover:text-white/80 transition-colors flex items-center gap-1.5 pb-1 -mb-3">
<svg aria-hidden="true" className="lucide lucide-message-square w-3.5 h-3.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
              Chat
            </button>
</div>
<div className="flex-1 overflow-y-auto custom-scrollbar">

<div className="px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 group relative">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-orange-400 shrink-0 mt-0.5 shadow-sm flex items-center justify-center text-white text-xs font-medium">
                ER
              </div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-white/70 leading-snug break-words pr-4">
<span className="text-white font-medium">Elizabeth Reynolds</span>
                  mentioned you in a page
                </p>
<div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/40">
<span>10 min ago</span>
<span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
<span className="truncate">Marketing and PM</span>
</div>
</div>
<div className="absolute right-5 top-5 w-2 h-2 rounded-full bg-blue-500"></div>
</div>

<div className="px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 group relative bg-white/[0.02]">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 shrink-0 mt-0.5 shadow-sm flex items-center justify-center text-white text-xs font-medium">
                SW
              </div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-white/70 leading-snug break-words pr-4">
<span className="text-white font-medium">Sonya Wolf</span>
                  joined to
                  <span className="text-white font-medium">Next Platform</span>
                  project
                </p>
<div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/40">
<span className="">16 min ago</span>
<span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
<span className="truncate">Next Platform</span>
</div>
</div>
<div className="absolute right-5 top-5 w-2 h-2 rounded-full bg-blue-500"></div>
</div>

<div className="px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 group opacity-70 hover:opacity-100">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-600 to-gray-400 shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-medium">
                KO
              </div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-white/70 leading-snug break-words">
<span className="text-white font-medium">Kenny Osinski</span>
                  in #General
                  <span className="text-orange-400">@everyone</span>
                  Hi there! Let's discu...
                </p>
<div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/40">
<span className="">1 hour ago</span>
<span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
<span className="truncate">General</span>
</div>
</div>
</div>

<div className="px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 group opacity-70 hover:opacity-100">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shrink-0 mt-0.5 flex items-center justify-center text-white text-xs font-medium">
                AZ
              </div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-white/70 leading-snug break-words">
<span className="text-white font-medium">Alexey Zinovyev</span>
                  added new tag to the
                  <span className="text-white font-medium">Issues</span>
                  page
                </p>
<div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/40">
<span className="">3 hours ago</span>
<span className="w-0.5 h-0.5 rounded-full bg-white/20"></span>
<span className="truncate">CRM</span>
</div>
</div>
</div>

<div className="px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex gap-3 group opacity-50">
<div className="w-8 h-8 rounded-full bg-[#1b1c23] border border-white/10 shrink-0 mt-0.5 flex items-center justify-center text-white/60 text-[10px] font-medium">
                BC
              </div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-white/50 leading-snug break-words">
<span className="text-white/70 font-medium">
                    Billy Christiansen
                  </span>
                  changed status UBER-5671 to
                  <span className="text-white/70 font-medium">In Progress</span>
</p>
<div className="flex items-center gap-1.5 mt-1 text-[11px] text-white/30">
<span className="">4 hours ago</span>
<span className="w-0.5 h-0.5 rounded-full bg-white/10"></span>
<span className="truncate">Marketing and PM</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full max-w-6xl mx-auto mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 relative z-10">
<span className="text-text-secondary text-sm sm:text-base text-center md:text-left">
          Everything your product team needs from an agency partner:
        </span>
<div className="flex flex-wrap font-medium gap-x-4 gap-y-4 text-sm sm:text-base justify-center md:justify-end">
<span className="text-white">Brand Systems</span>
<span className="text-text-muted">·</span>
<span className="text-white">Product Strategy</span>
<span className="text-text-muted">·</span>
<span className="text-white">UX/UI Design</span>
<span className="text-text-muted">·</span>
<span className="text-white">Engineering</span>
<span className="text-text-muted">·</span>
<span className="text-white">AI Workflows</span>
<span className="text-text-muted">·</span>
<span className="text-white">Launch Support</span>
</div>
</div>
</div>

<section className="overflow-hidden text-white font-sans bg-[#050507] pt-32 pr-12 pb-24 pl-12 relative">
      Digitize brings strategy, project planning, time, and knowledge management
      into a refined operating system for creative teams building high-impact
      digital products.
    </section>

<section className="overflow-hidden text-gray-900 font-sans bg-white pt-20 pb-32 relative">
<style>
        @keyframes aura2FadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes aura2Float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes aura2FloatSoft {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(8px, -8px);
          }
        }

        @keyframes aura2FloatReverse {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-10px, 8px);
          }
        }

        .aura2-rise {
          opacity: 0;
          animation: aura2FadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .aura2-float {
          animation: aura2Float 6s ease-in-out infinite;
        }

        .aura2-float-soft {
          animation: aura2FloatSoft 7s ease-in-out infinite;
        }

        .aura2-float-reverse {
          animation: aura2FloatReverse 8s ease-in-out infinite;
        }
      </style>

<div className="absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-transparent opacity-80 pointer-events-none"></div>
<div className="z-10 max-w-[80rem] mr-auto ml-auto pr-6 pl-6 relative">

<div className="max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-600 text-sm font-medium mb-8 aura2-rise shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Live collaboration workspace
          </div>
<h2 className="md:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.05] mb-6 aura2-rise text-4xl sm:text-5xl" style={{animationDelay: '0.1s'}}>
            Meet, move, and
            <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              launch together.
            </span>
</h2>
<p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto aura2-rise" style={{animationDelay: '0.2s'}}>
            Bring your product crew, clients, and specialists into a shared
            agency workspace with instant video, focused rooms, spatial
            presence, and conversations connected to the work.
          </p>
</div>

<div className="relative max-w-5xl mx-auto mt-20 mb-24 aura2-rise" style={{animationDelay: '0.3s'}}>

<div className="absolute -inset-8 bg-gradient-to-r from-blue-100/50 via-cyan-50/50 to-blue-100/50 rounded-[3rem] blur-2xl opacity-60"></div>
<div className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] border border-gray-200/80 bg-[#fbfbfd] shadow-2xl overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:16px_16px]"></div>

<div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/40"></div>

<div className="hidden lg:flex absolute left-[6%] top-[15%] w-64 flex-col rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-gray-800 shadow-2xl p-4 aura2-float text-white z-20">
<div className="text-sm font-medium text-gray-400 mb-1">
                Focus Room
              </div>
<div className="text-lg font-semibold tracking-tight mb-4">
                Deep Work
              </div>
<div className="flex -space-x-2">
<img alt="Maya" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&amp;q=80"/>
<img alt="Leo" className="w-8 h-8 rounded-full border-2 border-gray-900 object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&amp;q=80"/>
</div>
</div>

<div className="hidden md:flex absolute right-[5%] top-[25%] w-72 flex-col rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xl p-5 aura2-float-reverse text-gray-900 z-20" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Live now
                </span>
</div>
<div className="text-xl font-semibold tracking-tight mb-1">
                Design Weekly
              </div>
<div className="text-sm text-gray-500 mb-4">
                Reviewing v2.0 mockups
              </div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<img alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&amp;q=80"/>
<img alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&amp;q=80"/>
<img alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&amp;q=80"/>
</div>
<span className="text-xs font-medium text-gray-500 ml-1">
                  +4 others
                </span>
</div>
</div>

<div className="hidden lg:flex absolute left-[10%] bottom-[20%] w-60 flex-col rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200/80 shadow-xl p-4 aura2-float-soft text-gray-900 z-20" style={{animationDelay: '-4s'}}>
<div className="text-sm font-medium text-gray-500 mb-1">Lounge</div>
<div className="text-lg font-semibold tracking-tight mb-3">
                Watercooler
              </div>
<div className="flex items-center gap-3">
<img alt="User" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&amp;q=80"/>
<div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center border border-gray-200 text-gray-400">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-[-5%] lg:bottom-0 w-[92%] max-w-3xl rounded-t-[24px] lg:rounded-[24px] lg:mb-8 bg-gray-900 border border-gray-800 shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden z-10 aura2-rise" style={{animationDelay: '0.6s'}}>
<div className="relative h-[280px] md:h-[320px] w-full bg-black group">

<video autoplay="" className="w-full h-full object-cover opacity-90" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=1600&amp;q=80">
<source src="https://cdn.pixabay.com/video/2024/03/15/204006-924166560_large.mp4" type="video/mp4"/>
<source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>

<div className="absolute top-4 left-4 flex gap-2 z-10">
<div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wider text-white flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
                    LIVE
                  </div>
</div>

<div className="absolute top-4 right-4 flex flex-col gap-3 z-10">
<div className="w-[100px] md:w-[120px] h-[70px] md:h-[80px] rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 relative">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.pixabay.com/video/2023/10/31/187930-879411820_large.mp4" type="video/mp4"/>
</video>
<div className="absolute bottom-1.5 left-1.5 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                      Craig
                    </div>
</div>
<div className="w-[100px] md:w-[120px] h-[70px] md:h-[80px] rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 relative">
<img alt="Cam 2" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=400&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-gray-900/30 backdrop-blur-[2px]">
<div className="w-8 h-8 rounded-full bg-gray-800/90 flex items-center justify-center border border-gray-600">
<svg className="text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"></path>
<path d="M16.95 16.95A7 7 0 0 1 5 12v-2"></path>
<path d="M18.89 13.23A7 7 0 0 0 19 12v-2"></path>
<path d="m2 2 20 20"></path>
<path d="M9 9v3a3 3 0 0 0 5.12 2.12"></path>
</svg>
</div>
</div>
<div className="absolute bottom-1.5 left-1.5 bg-black/60 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] text-white font-medium">
                      Makenna
                    </div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 bg-gray-900/70 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-full shadow-2xl z-10">
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<rect height="13" rx="3" width="6" x="9" y="2"></rect>
</svg>
</button>
<button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
</button>
<button className="hidden md:flex w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 10 3-3 3 3"></path>
<path d="M12 13V7"></path>
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M12 17v4"></path>
<path d="M8 21h8"></path>
</svg>
</button>
<div className="w-px h-6 bg-white/20 mx-1"></div>
<button className="w-12 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg shadow-red-500/20">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"></path>
<path d="M22 2 2 22"></path>
<path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto text-center mb-16 px-6 aura2-rise" style={{animationDelay: '0.4s'}}>
<p className="text-2xl md:text-3xl text-gray-900 font-medium tracking-tight leading-snug">
            Remote work feels effortless when every teammate has a place to
            meet, listen, share, and jump back into focused work.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mr-auto ml-auto gap-x-5 gap-y-5">
<div className="group relative overflow-hidden rounded-[28px] border border-gray-200/70 bg-white/80 p-6 md:p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/70 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]">
<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/80 via-white/35 to-white/10 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gray-100/70 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
<div className="relative z-10 mb-8 flex items-start justify-between gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200/80 bg-white/70 text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white/80 group-hover:text-gray-950 group-hover:shadow-md">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<span className="rounded-full border border-gray-200/80 bg-white/60 px-2.5 py-1 text-xs font-normal text-gray-500 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:text-gray-700">
                01
              </span>
</div>
<div className="relative z-10">
<h3 className="mb-2 text-xl font-medium tracking-tight text-gray-">
                Design your office
              </h3>
<p className="text-base font-normal leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                Create dedicated spaces for standups, interviews, deep work,
                launches, and the rituals that keep your team connected.
              </p>
</div>
</div>
<div className="group relative overflow-hidden rounded-[28px] border border-gray-200/70 bg-white/80 p-6 md:p-7 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/70 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]" style={{animationDelay: '0.6s'}}>
<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/80 via-white/35 to-white/10 opacity-0 backdrop-blur-xl transition-opacity-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute -right-16top-16 h-40 w-40 rounded-full bg-gray-100/70 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
<div className="relative z-10 mb-8 flex items-start justify-between gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200/80 bg-white/70 text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white/80 group-hover:text-gray-950 group-hover:shadow-md">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<span className="rounded-full border border-gray-200/80 bg-white/60 px-2.5 py-1 text-xs font-normal text-gray-500 shadow-sm backdrop-blur-md transition-colors duration-300 group-hover:text-gray-700">
                02
              </span>
</div>
<div className="relative z-10">
<h3 className="mb-2 text-xl font-medium tracking-tight text-gray-950">
                Talk in context
              </h3>
<p className="text-base font-normal leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                Start crisp audio or video instantly, then keep conversations,
                decisions, and follow-ups tied to the exact room.
              </p>
</div>
</div>
<div className="group relative overflow-hidden rounded-[28px] border border-gray-200/70 bg-white/80 p-6 md:p-7 shadow-sm backdrop-blur-xl-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/70 hover:shadow-[0_24px_60px_rgba(15,23,42,0.10)]" style={{animationDelay: '0.7s'}}>
<div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/80 via-white/35 to-white/10 opacity-0 backdrop-blur-xl transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gray-100/70 blur-2xl transition-transform duration-500 group-hover:scale-125"></div>
<div className="relative z-10 mb-8 flex items-start justify-between gap-4">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200/80 bg-white/70 text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white/80 group-hover:text-gray-950 group-hover:shadow-md">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<line x1="19" x2="19" y1="8" y2="14"></line>
<line x1="22" x2="16" y1="11" y2="11"></line>
</svg>
</div>
<span className="rounded-full border border-gray-200/80 bg-white/60 px-2.5 py-1 text-xs font-normal text-gray-500 shadow-sm backdrop-blur transition-colors duration-300 group-hover:text-gray-700">
                03
              </span>
</div>
<div className="relative z-10">
<h3 className="mb-2 text-xl font-medium tracking-tight text-gray-950">
                Invite anyone
              </h3>
<p className="text-base font-normal leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
                Bring guests, clients, and partners into secure rooms with a
                simple link — no downloads, setup, or friction.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#111111] border-white/20 border-t pt-32 pr-12 pb-32 pl-12 relative">
<style>
        @keyframes dashboardFloat {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes rowReveal {
          from {
            opacity: 0;
            transform: translateX(-16px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes softGlow {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }

          50% {
            opacity: 0.9;
            transform: scale(1.05);
          }
        }

        @keyframes progressSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateBorderBeam {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        .github-dashboard-float {
          animation: dashboardFloat 7s ease-in-out infinite;
        }

        .github-row {
          opacity: 0;
          animation: rowReveal 0.8s ease forwards;
        }

        .github-row:nth-child(1) {
          animation-delay: 0.1s;
        }

        .github-row:nth-child(2) {
          animation-delay: 0.18s;
        }

        .github-row:nth-child(3) {
          animation-delay: 0.26s;
        }

        .github-row:nth-child(4) {
          animation-delay: 0.34s;
        }

        .github-row:nth-child(5) {
          animation-delay: 0.42s;
        }

        .github-row:nth-child(6) {
          animation-delay: 0.5s;
        }

        .glow-breathe {
          animation: softGlow 5s ease-in-out infinite;
        }

        .progress-spin {
          animation: progressSpin 4s linear infinite;
        }

        .dashboard-border-beam {
          position: relative;
          border-radius: 28px;
          padding: 1px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 120px rgba(0, 0, 0, 0.8);
        }

        .dashboard-border-beam::before {
          content: "";
          position: absolute;
          width: 160%;
          height: 160%;
          left: -30%;
          top: -30%;
          background:
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 35deg,
              rgba(56, 189, 248, 0.95) 70deg,
              rgba(96, 165, 250, 0.75) 105deg,
              transparent 145deg,
              transparent 210deg,
              rgba(249, 115, 22, 0.95) 250deg,
              rgba(251, 146, 60, 0.75) 285deg,
              transparent 330deg,
              transparent 360deg
            );
          animation: rotateBorderBeam 6s linear infinite;
          filter: blur(1px);
          opacity: 0.95;
        }

        .dashboard-border-beam::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 28px;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.08),
            0 0 42px rgba(59, 130, 246, 0.22),
            0 0 64px rgba(249, 115, 22, 0.16);
          pointer-events: none;
        }
      </style>

<div className="absolute top-[28%] left-[8%] w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-[120px] glow-breathe pointer-events-none"></div>
<div className="absolute top-[48%] right-[5%] w-[480px] h-[480px] bg-orange-500/20 rounded-full blur-[130px] glow-breathe pointer-events-none"></div>
<div className="max-w-[80rem] mx-auto px-6 relative z-10">
<h2 className="md:text-7xl lg:text-[80px] font-medium tracking-tighter leading-none mb-6 max-w-2xl text-5xl sm:text-6xl">
          From repo to launch.
          <br/>
          Ship faster.
        </h2>
<p className="text-lg md:text-xl text-gray-300 mb-24 max-w-2xl font-light leading-relaxed">
          Keep issues, pull requests, implementation tasks, and launch updates
          perfectly synced between your studio workspace and GitHub, without
          slowing delivery.
        </p>

<div className="relative max-w-6xl mx-auto mb-32 github-dashboard-float">

<div className="absolute -inset-10 bg-[radial-gradient(circle_at_15%_10%,rgba(59,130,246,0.45),transparent_32%),radial-gradient(circle_at_85%_90%,rgba(249,115,22,0.42),transparent_35%)] blur-2xl opacity-80 pointer-events-none"></div>

<div className="absolute -inset-10 opacity-30 bg-[radial-gradient(circle,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:5px_5px] pointer-events-none"></div>

<div className="dashboard-border-beam">
<div className="relative z-10 rounded-[27px] bg-[#090b0f] overflow-hidden">

<div className="absolute inset-0 bg-[#090b0f]/98 pointer-events-none"></div>

<div className="flex min-h-[520px] relative">

<aside className="border-white/[0.06] flex flex-col gap-5 hidden sm:flex bg-[#07090c] w-20 border-r pt-5 pb-5 gap-x-5 gap-y-5 items-center">
<div className="border-white/[0.08] flex bg-[#151820] w-10 h-10 border rounded-xl shadow-lg items-center justify-center">
<img alt="Huly Logo" className="w-6 h-6 object-contain" src="https://huly.io/_next/static/media/d97ea0940c0302a26ddd7c1b56cf3346.svg"/>
</div>
<div className="w-12 rounded-2xl bg-[#05070a] border border-blue-400/25 shadow-[0_0_28px_rgba(59,130,246,0.25)] px-2 py-3 text-center">
<div className="text-sm text-white">68%</div>
<div className="mt-2 h-[1px] bg-blue-400/40"></div>
<div className="text-[9px] font-semibold text-white mt-8">
                      SYNC
                    </div>
</div>
<div className="flex flex-col items-center gap-4 mt-2 text-white/40">
<div className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4h16v16H4z"></path>
<path d="M4 9h16"></path>
<path d="M9 20V9"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-xl bg-white/[0.08] text-white flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</div>
<div className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</div>
</div>
</aside>

<div className="flex-1 bg-[#0d0f13] pt-5 pr-5 pb-5 pl-5">

<div className="flex items-center gap-3 mb-5">
<div className="flex-1 h-11 rounded-lg bg-[#17191f] border border-white/[0.06] flex items-center px-4 text-gray-500">
<svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-gray-600 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.35-4.35"></path>
</svg>
<span className="truncate text-xs sm:text-sm">
                        Search issues, pull requests, or branches...
                      </span>
</div>
<button className="h-11 px-4 rounded-lg bg-[#17191f] border border-white/[0.07] text-sm text-white flex items-center gap-2 hover:bg-[#1d2028] transition-colors hidden sm:flex">
                      View
                    </button>
<button className="h-11 px-4 rounded-lg bg-[#17191f] border border-white/[0.07] text-sm text-white flex items-center gap-2 hover:bg-[#1d2028] transition-colors hidden sm:flex">
                      Filter
                    </button>
</div>

<div className="rounded-xl overflow-hidden border border-white/[0.07] bg-[#111318] overflow-x-auto">
<div className="px-5 py-4 border-b border-white/[0.06] flex items-center gap-2 min-w-[700px]">
<span className="w-2 h-2 rounded-full bg-blue-400"></span>
<span className="text-sm font-semibold text-white">
                        IN SYNC
                      </span>
<span className="text-sm text-gray-500">— 6</span>
</div>
<div className="divide-y divide-white/[0.055] min-w-[700px]">
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#15171c]">
<div className="text-gray-500 text-sm">GH-102</div>
<div className="text-white text-sm font-medium">
                          Sync pull request status with workspace tasks
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-blue-400/90 text-black text-xs font-semibold">
                            MVP
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          18 hrs
                        </div>
<div className="text-gray-500 text-sm">12 May</div>
<div className="w-7 h-7 rounded-full bg-orange-300 text-black text-xs font-bold flex items-center justify-center">
                          AR
                        </div>
</div>
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#121419]">
<div className="text-gray-500 text-sm">GH-118</div>
<div className="text-white text-sm font-medium">
                          Map GitHub labels into product workflow stages
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-purple-400/90 text-black text-xs font-semibold">
                            PreMVP
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          14 hrs
                        </div>
<div className="text-gray-500 text-sm">13 May</div>
<div className="w-7 h-7 rounded-full bg-blue-300 text-black text-xs font-bold flex items-center justify-center">
                          MK
                        </div>
</div>
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#15171c]">
<div className="text-gray-500 text-sm">GH-126</div>
<div className="text-white text-sm font-medium">
                          Create automatic issue grouping by repository
                        </div>
<div className="">
<span className="px-3 py-1 rounded-full bg-orange-300/90 text-black text-xs font-semibold">
                            Automation
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          22 hrs
                        </div>
<div className="text-gray-500 text-sm">14 May</div>
<div className="w-7 h-7 rounded-full bg-emerald-300 text-black text-xs font-bold flex items-center justify-center">
                          LS
                        </div>
</div>
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#121419]">
<div className="text-gray-500 text-sm">GH-131</div>
<div className="text-white text-sm font-medium">
                          Display linked commits inside task activity
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-red-300/90 text-black text-xs font-semibold">
                            Review
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          8 hrs
                        </div>
<div className="text-gray-500 text-sm">15 May</div>
<div className="w-7 h-7 rounded-full bg-pink-300 text-black text-xs font-bold flex items-center justify-center">
                          BC
                        </div>
</div>
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#15171c]">
<div className="text-gray-500 text-sm">GH-144</div>
<div className="text-white text-sm font-medium">
                          Trigger workspace updates from GitHub comments
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-yellow-300/90 text-black text-xs font-semibold">
                            Marketing
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          12 hrs
                        </div>
<div className="text-gray-500 text-sm">16 May</div>
<div className="w-7 h-7 rounded-full bg-cyan-300 text-black text-xs font-bold flex items-center justify-center">
                          NT
                        </div>
</div>
<div className="github-row grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4 bg-[#121419]">
<div className="text-gray-500 text-sm">GH-158</div>
<div className="text-white text-sm font-medium">
                          Resolve branch preview link not opening correctly
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-red-400/90 text-black text-xs font-semibold">
                            Bug
                          </span>
</div>
<div className="text-gray-400 text-sm flex items-center gap-2">
<span className="w-4 h-4 rounded-full border-2 border-orange-400 border-t-transparent progress-spin"></span>
                          6 hrs
                        </div>
<div className="text-gray-500 text-sm">17 May</div>
<div className="w-7 h-7 rounded-full bg-gray-300 text-black text-xs font-bold flex items-center justify-center">
                          JM
                        </div>
</div>
</div>
</div>

<div className="mt-5 rounded-xl overflow-hidden border border-white/[0.06] bg-[#0b0d11] opacity-55 overflow-x-auto">
<div className="px-5 py-4 border-b border-white/[0.055] flex items-center gap-2 min-w-[700px]">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
<span className="text-sm font-semibold text-white">
                        UNDER REVIEW
                      </span>
<span className="text-sm text-gray-500">— 3</span>
</div>
<div className="divide-y divide-white/[0.045] min-w-[700px]">
<div className="grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4">
<div className="text-gray-500 text-sm">GH-201</div>
<div className="text-gray-300 text-sm font-medium">
                          Update repository permission logic
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-blue-300/80 text-black text-xs font-semibold">
                            Review
                          </span>
</div>
<div className="text-gray-500 text-sm">10 hrs</div>
<div className="text-gray-500 text-sm">19 May</div>
<div className="w-7 h-7 rounded-full bg-orange-300 text-black text-xs font-bold flex items-center justify-center">
                          CP
                        </div>
</div>
<div className="grid grid-cols-[90px_1fr_120px_100px_90px_40px] items-center gap-4 px-5 py-4">
<div className="text-gray-500 text-sm">GH-219</div>
<div className="text-gray-300 text-sm font-medium">
                          Improve commit timeline grouping
                        </div>
<div>
<span className="px-3 py-1 rounded-full bg-purple-300/80 text-black text-xs font-semibold">
                            PreMVP
                          </span>
</div>
<div className="text-gray-500 text-sm">16 hrs</div>
<div className="text-gray-500 text-sm">20 May</div>
<div className="w-7 h-7 rounded-full bg-purple-300 text-black text-xs font-bold flex items-center justify-center">
                          SV
                        </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#090b0f] to-transparent pointer-events-none"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<img alt="Two-way sync" className="w-8 h-8" src="https://huly.io/_next/static/media/2a9e454742efc41c8de5d3889bf55d34.svg"/>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Two-way
              <br/>
              synchronization
            </h3>
<p className="text-gray-300 text-base font-light">
              Connect GitHub issues and workspace tasks so every update stays
              synced in both directions.
            </p>
</div>

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<img alt="Private tasks" className="w-8 h-8" src="https://huly.io/_next/static/media/4d5dd04473e9f2ebc5c49291c1f73681.svg"/>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Private
              <br/>
              tasks
            </h3>
<p className="text-gray-300 text-base font-light">
              Keep internal planning separate while still linking the right
              GitHub activity to your team.
            </p>
</div>

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<img alt="Multiple repositories" className="w-8 h-8" src="https://huly.io/_next/static/media/7338cddab3021d50f73a3d36c88df490.svg"/>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Multiple
              <br/>
              repositories
            </h3>
<p className="text-gray-300 text-base font-light">
              Organize work across multiple repositories without losing
              visibility across your projects.
            </p>
</div>

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<img alt="Milestone migration" className="w-8 h-8" src="https://huly.io/_next/static/media/c1edb00984cbfb46dd8eda516738f4f0.svg"/>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Milestone
              <br/>
              migration
            </h3>
<p className="text-gray-300 text-base font-light">
              Move milestones and project structure smoothly between your
              workspace and GitHub.
            </p>
</div>

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<img alt="Track progress" className="w-8 h-8" src="https://huly.io/_next/static/media/352118264d839bffe60735ff4aeed26f.svg"/>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Track
              <br/>
              progress
            </h3>
<p className="text-gray-300 text-base font-light">
              Monitor commits, pull requests, issue progress, and team delivery
              from one clean view.
            </p>
</div>

<div className="">
<div className="w-16 h-16 rounded-2xl bg-surface border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/50">
<i className="w-8 h-8 text-text-secondary" data-lucide="filter" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-white">
              Advanced
              <br/>
              filtering
            </h3>
<p className="text-gray-300 text-base font-light">
              Filter issues, pull requests, labels, repositories, and owners
              with precise controls.
            </p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-[#f4f5f8] py-24 md:py-32 font-sans text-gray-900">
<style>
        @keyframes mbFadeUp {
          0% { opacity: 0; transform: translateY(2rem); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mbCardIn {
          0% { opacity: 0; transform: scale(0.96) translateY(1.5rem); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes mbFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.5rem); }
        }
        @keyframes mbFloatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-0.3rem); }
        }
        @keyframes mbGlowBreathe {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.15); }
        }
        @keyframes mbPulsePlus {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.15); }
          50% { box-shadow: 0 0 0 0.75rem rgba(255, 255, 255, 0); }
        }
        @keyframes mbSlideInChat {
          0% { opacity: 0; transform: translateX(1rem); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .anim-fade-up { animation: mbFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .anim-card-in { animation: mbCardIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .anim-float { animation: mbFloat 6s ease-in-out infinite; }
        .anim-float-slow { animation: mbFloatSlow 8s ease-in-out infinite; }
        .anim-glow { animation: mbGlowBreathe 5s ease-in-out infinite; }
      </style>

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-1/2 top-0 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-blue-100/40 blur-[100px]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
</div>
<div className="relative z-10 mx-auto max-w-[84rem] px-6">

<div className="mx-auto mb-16 max-w-3xl text-center">
<h2 className="anim-fade-up md:text-7xl sm:text-5xl text-4xl font-medium text-gray-950 tracking-tighter opacity-0 mb-6" style={{animationDelay: '0.1s'}}>
            Digitize MetaBrain
          </h2>
<p className="anim-fade-up text-xl md:text-2xl font-light leading-relaxed text-gray-600 opacity-0" style={{animationDelay: '0.2s'}}>
            Connect every element of your workflow into one intelligent
            knowledge system.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">

<div className="anim-card-in md:col-span-6 lg:col-span-3 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-b from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.3s'}}>
<div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-blue-500/30 blur-[60px] anim-glow"></div>
<div className="relative z-10 p-6 md:p-7">
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                Create tasks.
              </h3>
<p className="text-base font-light text-gray-400">
                Turn ideas into organized action items.
              </p>
<div className="anim-float mt-8 flex flex-col gap-2.5">

<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#1c1e24]/90 p-3 shadow-lg backdrop-blur-md transition-colors group-hover:border-blue-500/30">
<div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.25rem] border border-blue-400 bg-blue-500/20 text-blue-400">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="h-2 w-24 rounded-full bg-white/70"></div>
</div>

<div className="ml-4 flex items-center gap-3 rounded-xl border border-white/5 bg-[#1c1e24]/60 p-3 shadow-lg backdrop-blur-md opacity-70">
<div className="h-5 w-5 shrink-0 rounded-[0.25rem] border border-white/20 bg-black/20"></div>
<div className="h-2 w-32 rounded-full bg-white/40"></div>
</div>

<div className="ml-8 flex items-center gap-3 rounded-xl border border-white/5 bg-[#1c1e24]/40 p-3 shadow-lg backdrop-blur-md opacity-40">
<div className="h-5 w-5 shrink-0 rounded-[0.25rem] border border-white/20 bg-black/20"></div>
<div className="h-2 w-20 rounded-full bg-white/30"></div>
</div>
</div>
</div>
</div>

<div className="anim-card-in md:col-span-6 lg:col-span-3 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-b from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.4s'}}>
<div className="pointer-events-none absolute -right-12 top-10 h-48 w-48 rounded-full bg-purple-500/20 blur-[60px] anim-glow" style={{animationDelay: '1s'}}></div>
<div className="relative z-10 p-6 md:p-7 h-full flex flex-col">
<div className="">
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                  Plan your work.
                </h3>
<p className="text-base font-light text-gray-400">
                  Visualize priorities across your schedule.
                </p>
</div>
<div className="anim-float-slow relative mt-8 flex-1">
<div className="absolute inset-x-0 top-4 rounded-xl border border-white/10 bg-[#1c1e24]/95 p-4 shadow-xl backdrop-blur-md transition-transform group-hover:-translate-y-2 duration-500">
<div className="mb-3 text-sm font-light text-white/80 leading-relaxed">
                    Discuss detailed project plans outlining tasks
                  </div>
<div className="mb-4 text-xs font-light text-purple-300">
                    01:00 - 01:30 pm
                  </div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-[#1c1e24] bg-gradient-to-tr from-blue-400 to-indigo-500"></div>
<div className="h-6 w-6 rounded-full border border-[#1c1e24] bg-gradient-to-tr from-orange-400 to-pink-500"></div>
</div>
<div className="text-xs font-light text-gray-500">+2</div>
</div>
</div>
<div className="absolute inset-x-4 top-24 -z-10 rounded-xl border border-white/5 bg-[#14151a] p-4 shadow-lg opacity-50 scale-95 transition-transform group-hover:translate-y-2 duration-500">
<div className="h-2 w-3/4 rounded-full bg-white/20 mb-3"></div>
<div className="h-6 w-6 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>

<div className="anim-card-in md:col-span-6 lg:col-span-3 group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-[3rem] sm:rounded-full border-[0.375rem] border-white bg-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.5s'}}>
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8 opacity-10 blur-[1px]">
<span className="text-xs">02</span>
<span className="text-xs">03</span>
<span className="text-xs">04</span>
<span className="text-xs">05</span>
<span className="text-xs">06</span>
<span className="text-xs">07</span>
<span className="text-xs">09</span>
<span className="text-xs">10</span>
<span className="text-xs">11</span>
<span className="text-xs">12</span>
<span className="text-xs">13</span>
<span className="text-xs">14</span>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-[5rem] lg:text-[6rem] font-medium leading-none tracking-tighter text-white drop-shadow-[0_0_1.5rem_rgba(255,255,255,0.4)]">
                08
              </div>
<div className="mt-1 text-xl font-light text-gray-300">March</div>
</div>
<button className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#1c1e24] text-white shadow-xl transition-colors hover:bg-white/10 z-20" style={{animation: 'mbPulsePlus 3s ease-in-out infinite'}}>
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>

<div className="anim-card-in md:col-span-6 lg:col-span-3 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-b from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.6s'}}>
<div className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-orange-500/10 blur-[50px] anim-glow" style={{animationDelay: '2s'}}></div>
<div className="relative z-10 p-6 md:p-7 h-full flex flex-col">
<div>
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                  Chat with team.
                </h3>
<p className="text-base font-light text-gray-400">
                  Send updates, decisions, and quick messages.
                </p>
</div>
<div className="mt-auto flex flex-col gap-3">
<div className="flex items-end justify-end gap-2 opacity-0" style={{animation: 'mbSlideInChat 0.5s ease forwards 1.2s'}}>
<div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#2a2c33] px-3.5 py-2.5 text-sm font-light text-gray-200 shadow-md">
<span className="font-medium text-blue-400">@Mark</span>
                    Their decision is very important
                  </div>
<div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-gray-500 to-gray-300"></div>
</div>
<div className="flex items-end justify-start gap-2 opacity-0" style={{animation: 'mbSlideInChat 0.5s ease forwards 1.6s'}}>
<div className="h-6 w-6 shrink-0 rounded-full bg-gradient-to-tr from-orange-400 to-red-400"></div>
<div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-white/5 bg-[#1c1e24] px-3.5 py-2.5 text-sm font-light text-gray-200 shadow-md">
<span className="font-medium text-orange-400">@Joahn</span>
                    Have they signed their contract yet?
                  </div>
</div>
<div className="mt-2 flex items-center justify-between rounded-full border border-white/10 bg-[#14151a] px-4 py-2.5 opacity-0" style={{animation: 'mbSlideInChat 0.5s ease forwards 2s'}}>
<span className="text-xs font-light text-gray-500">
                    Type a message...
                  </span>
<svg className="h-3.5 w-3.5 text-gray-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="anim-card-in md:col-span-12 lg:col-span-4 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-br from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.7s'}}>
<div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-600/20 blur-[80px] anim-glow"></div>
<div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
<div className="mb-8">
<div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="M14 2v6h6"></path>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
</div>
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                  Take notes.
                </h3>
<p className="text-base font-light text-gray-400 max-w-sm">
                  Capture ideas and connect them to your workflow.
                </p>
</div>
<div className="anim-float mt-auto w-full max-w-sm rounded-xl border border-white/10 bg-[#15161a]/90 p-2 shadow-2xl backdrop-blur-md">
<div className="px-3 py-2 text-xs font-medium text-gray-500">
                  Basic blocks
                </div>
<div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-sm font-medium text-gray-300">
                    Aa
                  </div>
<div>
<div className="text-sm font-medium text-gray-200">Text</div>
<div className="text-xs font-light text-gray-500">
                      Embed a sub-page inside page.
                    </div>
</div>
</div>
<div className="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-white/5">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-gray-400">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11l3 3L22 4"></path>
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-gray-200">
                      To-do list
                    </div>
<div className="text-xs font-light text-gray-500">
                      Track tasks with a to-do list.
                    </div>
</div>
</div>
</div>
</div>
</div>

<div className="anim-card-in md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-b from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.8s'}}>
<div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-80 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[80px] anim-glow" style={{animationDelay: '1.5s'}}></div>
<div className="relative z-10 p-6 md:p-8">
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                Sync in real time.
              </h3>
<p className="text-base font-light text-gray-400">
                Keep everyone aligned with live updates.
              </p>
</div>
<div className="relative mt-8 h-48 w-full overflow-hidden">

<div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/50 bg-blue-500/20 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.3)] z-20">
<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<line x1="12" x2="12" y1="19" y2="22"></line>
</svg>
</div>

<div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"></div>
<div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"></div>

<div className="anim-float absolute left-[20%] top-[20%] flex h-10 w-10 items-center justify-center rounded-full border border-[#181a20] bg-gradient-to-tr from-gray-700 to-gray-500 text-xs font-medium text-white shadow-lg">
                AN
              </div>
<div className="anim-float-slow absolute right-[25%] top-[15%] flex h-8 w-8 items-center justify-center rounded-full border border-[#181a20] bg-gradient-to-tr from-purple-500 to-pink-500 text-[0.6rem] font-medium text-white shadow-lg" style={{animationDelay: '1s'}}>
                BM
              </div>
<div className="anim-float absolute bottom-[15%] left-[30%] flex h-12 w-12 items-center justify-center rounded-full border border-[#181a20] bg-gradient-to-tr from-orange-400 to-red-400 text-sm font-medium text-white shadow-lg" style={{animationDelay: '2s'}}>
                KL
              </div>
<div className="anim-float-slow absolute bottom-[25%] right-[20%] flex h-10 w-10 items-center justify-center rounded-full border border-[#181a20] bg-gradient-to-tr from-green-400 to-emerald-500 text-xs font-medium text-white shadow-lg" style={{animationDelay: '0.5s'}}>
                JD
              </div>
</div>
</div>

<div className="anim-card-in md:col-span-6 lg:col-span-4 group relative overflow-hidden rounded-[2rem] border-[0.375rem] border-white bg-gradient-to-b from-[#181a20] to-[#0d0e12] shadow-[0_1rem_2.5rem_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_1.5rem_3rem_rgba(0,0,0,0.12)] opacity-0" style={{animationDelay: '0.9s'}}>
<div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-500/10 blur-[70px] anim-glow" style={{animationDelay: '0.5s'}}></div>
<div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
<div>
<h3 className="mb-1 text-xl font-medium tracking-tight text-white">
                  Manage projects.
                </h3>
<p className="text-base font-light text-gray-400">
                  Customize your workspace for every team.
                </p>
</div>
<div className="relative mt-12 flex-1">

<div className="absolute -right-4 top-4 w-64 rounded-xl border border-white/5 bg-[#14151a] p-4 opacity-50 shadow-lg scale-95 transition-transform group-hover:-translate-y-1 duration-500">
<div className="mb-3 text-sm font-medium text-gray-500">CRM</div>
<div className="h-10 w-full rounded-lg bg-white/5 mb-2"></div>
<div className="h-10 w-full rounded-lg bg-white/5"></div>
</div>

<div className="anim-float absolute inset-x-2 top-0 rounded-xl border border-white/10 bg-[#1c1e24]/95 p-4 shadow-2xl backdrop-blur-xl transition-transform group-hover:-translate-y-2 duration-500">
<div className="mb-4 flex items-center justify-between">
<span className="text-sm font-medium text-white">
                      Marketing
                    </span>
<svg className="h-4 w-4 text-orange-400" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div className="mb-4 text-xs font-light text-gray-300">
                    Strategic digital campaign
                  </div>
<div className="mb-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs font-light text-gray-500">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                      6 members
                    </div>
<div className="flex -space-x-1.5">
<div className="h-5 w-5 rounded-full border border-[#1c1e24] bg-gradient-to-tr from-blue-400 to-indigo-500"></div>
<div className="h-5 w-5 rounded-full border border-[#1c1e24] bg-gradient-to-tr from-pink-400 to-orange-400"></div>
<div className="flex h-5 w-5 items-center justify-center rounded-full border border-[#1c1e24] bg-[#2a2c33] text-[0.5rem] font-medium text-gray-300">
                        +2
                      </div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs font-light text-gray-400 hover:text-white transition-colors cursor-pointer">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="8" x2="21" y1="6" y2="6"></line>
<line x1="8" x2="21" y1="12" y2="12"></line>
<line x1="8" x2="21" y1="18" y2="18"></line>
<line x1="3" x2="3.01" y1="6" y2="6"></line>
<line x1="3" x2="3.01" y1="12" y2="12"></line>
<line x1="3" x2="3.01" y1="18" y2="18"></line>
</svg>
                      General information
                    </div>
<div className="flex items-center gap-2 text-xs font-light text-gray-400 hover:text-white transition-colors cursor-pointer">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                      Communication
                    </div>
<div className="flex items-center gap-2 text-xs font-light text-gray-400 hover:text-white transition-colors cursor-pointer">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<polyline points="10 9 9 9 8 9"></polyline>
</svg>
                      Pages
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 text-white font-sans bg-[#050507] pt-24 pr-12 pb-24 pl-12 relative">
<style className="">
        @keyframes scroll-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(4px, 8px) rotate(-2deg); }
        }
        @keyframes scroll-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-6px, -4px) rotate(2deg); }
        }
        @keyframes select-box-pulse {
          0%, 100% {
            border-color: rgba(59, 130, 246, 0.4);
            background-color: rgba(59, 130, 246, 0.1);
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
          }
          50% {
            border-color: rgba(59, 130, 246, 0.9);
            background-color: rgba(59, 130, 246, 0.25);
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4);
          }
        }
        @keyframes type-writer {
          from { width: 0; }
          to { width: 26ch; }
        }
        @keyframes blink-cursor {
          50% { border-color: transparent; }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -24; }
        }
        @keyframes glow-line {
          0%, 100% { opacity: 0.5; box-shadow: 0 0 5px rgba(96, 165, 250, 0.4); }
          50% { opacity: 1; box-shadow: 0 0 15px rgba(96, 165, 250, 0.8); }
        }
        @keyframes float-up {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .anim-float-1 { animation: scroll-float-1 4s ease-in-out infinite; }
        .anim-float-2 { animation: scroll-float-2 5s ease-in-out infinite; }
        .anim-pulse-box { animation: select-box-pulse 2.5s ease-in-out infinite; }
        .anim-type {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 2px solid #60a5fa;
          animation: type-writer 3s steps(26, end) forwards, blink-cursor 0.75s step-end infinite;
        }
        .anim-dash { stroke-dasharray: 6 6; animation: dash-flow 1.5s linear infinite; }
        .anim-glow { animation: glow-line 3s ease-in-out infinite; }
        .anim-float-up { animation: float-up 5s ease-in-out infinite; }
      </style>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] lg:gap-24 z-10 max-w-[84rem] mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-start">

<div className="w-full relative lg:sticky lg:top-24 lg:self-start lg:max-h-screen lg:overflow-y-auto flex flex-col gap-12 lg:py-12">

<div className="">
<span className="inline-flex items-center gap-2 text-blue-400 bg-blue-500/10 px-3 py-1.5 rounded-full font-medium tracking-wider text-xs uppercase mb-6 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 anim-glow"></span>
              Collaborative Docs
            </span>
<h2 className="md:text-5xl lg:text-[52px] font-medium tracking-tight text-white leading-[1.1] mb-6 text-balance text-3xl sm:text-4xl">
              Knowledge that powers every launch.
            </h2>
<p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-xl">
              Create, connect, and organize every brief, decision, and
              deliverable in one collaborative workspace built for fast-moving
              teams.
            </p>
</div>

<div className="relative w-full bg-[#0d0e12]/90 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.6)] p-8 md:p-10 overflow-hidden group hover:border-white/20 transition-colors duration-500">

<div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>
<div className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60"></div>

<div className="flex gap-2 mb-10 relative z-10">
<div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-red-500/80 transition-colors duration-300"></div>
<div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-yellow-500/80 transition-colors duration-300"></div>
<div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-green-500/80 transition-colors duration-300"></div>
</div>

<div className="relative z-10 mt-4 mb-16">
<div className="text-gray-300 font-normal text-2xl md:text-3xl leading-relaxed flex flex-wrap gap-x-3 gap-y-4 items-center">
<span>We</span>
<span>are</span>
<span className="">building</span>
<span>a</span>

<span className="relative border-2 rounded-md px-2 py-0.5 text-blue-300 anim-pulse-box">
                  Team

                  
<span className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-[#0d0e12] border border-blue-500 rounded-sm"></span>
<span className="absolute - border border-blue-500 rounded-sm"></span>
<span className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-[#0d0e12] border border-blue-500 rounded-sm"></span>
<span className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-[#0d0e12] border border-blue-500 rounded-sm"></span>

<div className="absolute -top-10 -left-6 anim-float-1 z-20 flex flex-col items-start drop-shadow-2xl">
<svg className="" fill="#3b82f6" height="22" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="22">
<path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.94c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.31-.85-.09-.85.35Z"></path>
</svg>
<span className="bg-blue-500 text-white text-[11px] font-medium px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] ml-3 -mt-1">
                      John S.
                    </span>
</div>

<div className="absolute -bottom-10 -right-8 anim-float-2 z-20 flex flex-col items-end drop-shadow-2xl">
<svg className="transform -scale-x-100" fill="#a855f7" height="22" stroke="white" strokeWidth="1.5" viewbox="0 0 24 24" width="22">
<path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.94c.45 0 .67-.54.35-.85L6.35 2.86c-.31-.31-.85-.09-.85.35Z"></path>
</svg>
<span className="bg-purple-500 text-white text-[11px] font-medium px-2 py-0.5 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.6)] mr-3 -mt-1">
                      Lilianna
                    </span>
</div>
</span>
<span>workspace.</span>
</div>
</div>

<div className="text-sm font-mono text-gray-500 mb-6 h-5 flex items-center">
<span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 border border-blue-500/30">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full anim-glow"></span>
</span>
<span className="anim-type pr-1 text-blue-200">
                Adding project timeline...
              </span>
</div>
<div className="border-t border-white/5 pt-6 mt-4 relative z-10">
<div className="flex items-center gap-3 text-gray-400 text-sm font-light">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Syncing live with team
              </div>
</div>
</div>
</div>

<div className="w-full relative">
<div className="flex flex-col lg:gap-8 lg:pt-0 pt-12 gap-x-6 gap-y-6">

<div className="relative lg:sticky lg:top-24 z-10 bg-[#111318]/95 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 min-h-[430px] transition-all duration-500 hover:border-white/20 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="max-w-md relative z-20">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                  Write together
                </h3>
<p className="text-gray-400 font-light leading-relaxed">
                  Create project docs, meeting notes, roadmaps, and references
                  with real-time collaborative editing.
                </p>
</div>
<div className="flex-1 bg-[#090a0d] rounded-2xl border border-white/5 overflow-hidden relative p-8 flex items-center justify-center shadow-inner">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:12px_12px]"></div>
<div className="w-full max-w-sm space-y-4 relative z-10 anim-float-up">
<div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
<div className="h-3 w-full bg-white/10 rounded-full"></div>
<div className="relative">
<span className="absolute -top-14 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1.5 rounded-xl flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500 pointer-events-none font-medium">
<span className="underline text-sm">Cmd</span>
<span className="w-px h-4 bg-gray-300 mx-1"></span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</span>
<div className="h-4 w-5/6 bg-blue-500/20 border border-blue-500/30 rounded-sm relative group-hover:bg-blue-500/30 transition-colors duration-500"></div>
<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#1a1c23] border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
<div className="w-2 h-2 bg-blue-400 rounded-full anim-glow"></div>
</div>
</div>
<div className="h-3 w-2/3 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="relative lg:sticky lg:top-[160px] z-20 bg-[#111318]/95 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 min-h-[430px] transition-all duration-500 hover:border-white/20 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="max-w-md relative z-20">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                  Connect context
                </h3>
<p className="text-gray-400 font-light leading-relaxed">
                  Link documents to tasks, issues, teammates, and decisions so
                  every update stays easy to understand.
                </p>
</div>
<div className="flex-1 bg-[#090a0d] rounded-2xl border border-white/5 overflow-hidden relative flex items-center justify-center min-h-[240px] shadow-inner">
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="none">
<line className="anim-dash opacity-40" stroke="#3b82f6" strokeWidth="1.5" x1="50%" x2="25%" y1="50%" y2="25%"></line>
<line className="anim-dash opacity-40" stroke="#a855f7" strokeWidth="1.5" x1="50%" x2="25%" y1="50%" y2="75%"></line>
<line className="anim-dash opacity-40" stroke="#f97316" strokeWidth="1.5" x1="50%" x2="75%" y1="50%" y2="75%"></line>
</svg>
<div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-[#1a1c23] border border-white/10 shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-300 transition-transform duration-300 group-hover:scale-110 hover:border-blue-500/50 cursor-pointer">
                  Docs
                </div>
<div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#1a1c23] border border-white/10 shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-300 transition-transform duration-300 group-hover:scale-110 hover:border-blue-500/50 cursor-pointer">
                  Tasks
                </div>
<div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 bg-[#1a1c23] border border-white/10 shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-300 transition-transform duration-300 group-hover:scale-110 hover:border-purple-500/50 cursor-pointer">
                  Issues
                </div>
<div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-[#1a1c23] border border-white/10 shadow-lg px-4 py-2 rounded-full text-xs font-medium text-gray-300 transition-transform duration-300 group-hover:scale-110 hover:border-orange-500/50 cursor-pointer">
                  People
                </div>
<div className="relative w-24 h-24 bg-[#111318] rounded-full border border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10 group-hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all duration-500 flex items-center justify-center anim-float-up">
<div className="absolute inset-2 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
<span className="text-sm font-medium text-blue-300">
                      Project
                    </span>
</div>
</div>
</div>
</div>

<div className="relative lg:sticky lg:top-[224px] z-30 bg-[#111318]/95 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 min-h-[430px] transition-all duration-500 hover:border-white/20 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="max-w-md relative z-20">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                  Track every version
                </h3>
<p className="text-gray-400 font-light leading-relaxed">
                  Revisit previous edits, compare changes, and keep a complete
                  history of your team's work.
                </p>
</div>
<div className="flex-1 bg-[#090a0d] rounded-2xl border border-white/5 overflow-hidden relative flex flex-row items-stretch p-6 gap-6 min-h-[240px] shadow-inner">
<div className="w-24 flex flex-col items-end justify-center gap-10 border-r border-white/10 pr-4">
<div className="text-[11px] font-medium text-gray-400 relative">
                    Just now
                    <div className="absolute top-1 -right-[21px] w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-[#090a0d] shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
</div>
<div className="text-[11px] font-medium text-gray-600 relative">
                    2 hrs ago
                    <div className="absolute top-1 -right-[21px] w-2 h-2 bg-gray-600 rounded-full border-2 border-[#090a0d] translate-x-[1px]"></div>
</div>
<div className="text-[11px] font-medium text-gray-600 relative">
                    Yesterday
                    <div className="absolute top-1 -right-[21px] w-2 h-2 bg-gray-600 rounded-full border-2 border-[#090a0d] translate-x-[1px]"></div>
</div>
</div>
<div className="flex-1 relative mt-4">
<div className="absolute top-0 w-full max-w-[240px] bg-[#1a1c23] border border-white/10 shadow-lg rounded-xl p-4 z-30 transition-transform duration-500 group-hover:-translate-y-2">
<div className="h-2 w-1/2 bg-blue-400/80 rounded-full mb-3"></div>
<div className="h-1.5 w-full bg-white/10 rounded-full mb-2"></div>
<div className="h-1.5 w-5/6 bg-white/20 rounded-full mb-2"></div>
<div className="h-1.5 w-4/5 bg-white/10 rounded-full"></div>
</div>
<div className="absolute top-6 w-full max-w-[240px] bg-[#14151a] border border-white/5 shadow-sm rounded-xl p-4 z-20 scale-[0.94] opacity-60 transition-transform duration-500 group-hover:translate-y-2 origin-top">
<div className="h-2 w-1/2 bg-gray-500/80 rounded-full mb-3"></div>
<div className="h-1.5 w-full bg-white/5 rounded-full mb-2"></div>
<div className="h-1.5 w-5/6 bg-white/5 rounded-full mb-2"></div>
</div>
<div className="absolute top-12 w-full max-w-[240px] bg-[#0d0e12] border border-white/5 rounded-xl p-4 z-10 scale-[0.88] opacity-30 transition-transform duration-500 group-hover:translate-y-5 origin-top">
<div className="h-2 w-1/3 bg-gray-600/80 rounded-full mb-3"></div>
<div className="h-1.5 w-full bg-white/5 rounded-full mb-2"></div>
</div>
</div>
</div>
</div>

<div className="relative lg:sticky lg:top-[288px] z-40 bg-[#111318]/95 backdrop-blur-2xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-[2rem] p-6 md:p-8 flex flex-col gap-6 min-h-[430px] transition-all duration-500 hover:border-white/20 group">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] pointer-events-none"></div>
<div className="max-w-md relative z-20">
<h3 className="text-2xl font-medium tracking-tight text-white mb-2">
                  Publish with clarity
                </h3>
<p className="text-gray-400 font-light leading-relaxed">
                  Turn internal knowledge into polished pages, guides, and
                  project updates your whole team can trust.
                </p>
</div>
<div className="flex-1 bg-[#090a0d] rounded-2xl border border-white/5 overflow-hidden relative flex items-center justify-center p-6 min-h-[240px] shadow-inner">
<div className="w-full h-full max-w-[280px] bg-[#1a1c23] border border-white/10 shadow-lg rounded-xl overflow-hidden flex flex-col transition-transform duration-700 group-hover:scale-[1.03] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
<div className="h-24 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-[#1a1c23] w-full relative">
<div className="absolute -bottom-4 left-4 w-10 h-10 bg-[#22252e] rounded-lg shadow-lg border border-white/10 flex items-center justify-center z-10 group-hover:-translate-y-1 transition-transform duration-500">
<svg className="text-blue-400" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
</div>
<div className="p-5 pt-8 flex-1 flex flex-col gap-3">
<div className="h-4 w-3/4 bg-white/20 rounded-md"></div>
<div className="h-2 w-full bg-white/5 rounded-full mt-2"></div>
<div className="h-2 w-full bg-white/5 rounded-full"></div>
<div className="h-2 w-2/3 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden flex flex-col min-h-[760px] text-white font-sans bg-[#050507] relative">
<div className="z-10 md:px-10 flex flex-col min-h-[85vh] w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-0 pl-6 relative justify-between">

<div className="flex flex-col md:flex-row justify-between items-start w-full gap-12 border-b border-white/5 pb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
<svg fill="none" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="currentColor" fillOpacity="0.15" r="10"></circle>
<path d="M8 12C8 12.5523 7.55228 13 7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12Z" fill="currentColor"></path>
<path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="currentColor"></path>
<path d="M18 12C18 12.5523 17.5523 13 17 13C16.4477 13 16 12.5523 16 12C16 11.4477 16.4477 11 17 11C17.5523 11 18 11.4477 18 12Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">
              Get In Touch
            </span>
</div>
<div className="flex flex-wrap gap-8 md:gap-12 text-xs font-semibold tracking-widest uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#">
              Privacy &amp; Policy
            </a>
<a className="hover:text-white transition-colors duration-300" href="#">
              Terms of Service
            </a>
<span className="text-neutral-700">@2026 Digitize Venture Studios</span>
</div>
</div>
<div className="flex flex-col gap-6 mt-16 mb-auto relative">
<div className="group/item relative flex flex-col items-start w-fit">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]" href="tel:+18005550199">
              +1 800 555 0199
            </a>
<div className="absolute -right-8 top-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 translate-x-2 group-hover/item:translate-x-0">
<span className="flex items-center justify-center w-5 h-5 rounded bg-orange-500 text-[9px] font-bold text-black uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                T
              </span>
</div>
</div>
<div className="group/item relative flex flex-col items-start w-fit animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
<a className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white group-hover/item:text-transparent group-hover/item:bg-clip-text group-hover/item:bg-gradient-to-r group-hover/item:from-white group-hover/item:to-neutral-500 transition-all duration-500 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]" href="mailto:hello@digitizehq.com">
              HELLO@DIGITIZEHQ.COM
            </a>
<div className="absolute -right-8 top-4 opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 translate-x-2 group-hover/item:translate-x-0">
<span className="flex items-center justify-center w-5 h-5 rounded bg-orange-500 text-[9px] font-bold text-black uppercase tracking-wider shadow-[0_0_15px_rgba(249,115,22,0.6)]">
                E
              </span>
</div>
</div>
<div className="flex items-center gap-8 mt-12 pl-1 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title>X</title>
<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
</svg>
</a>
<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title>GitHub</title>
<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
</svg>
</a>
<a className="text-neutral-600 hover:text-white transition-colors duration-300 transform hover:scale-110" href="#">
<svg className="w-6 h-6 fill-current" role="img" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<title>LinkedIn</title>
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
</svg>
</a>
</div>
</div>
<div className="relative w-full mt-12 select-none overflow-hidden">
<h1 className="text-[17vw] leading-[0.75] font-bold tracking-tighter text-center md:text-left text-white mix-blend-overlay opacity-90 pointer-events-none animate-on-scroll [animation:fadeSlideIn_1.5s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
            DIGITIZE
          </h1>
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050505] to-transparent"></div>
</div>
</div>
</footer>


    </>
  );
}
