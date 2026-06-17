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



/*
Sequence animation on scroll when visible. Requires Animation Keyframe. Usage:
1) Insert this code in the <head> along with the Animation Keyframe code.
2) Add to Tailwind Classes: [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll
*/
(function () {
// Inject CSS for paused/running states
const style = document.createElement("style");
style.textContent = `
/* Default: paused */
.animate-on-scroll { animation-play-state: paused !important; }
/* Activated by JS */
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el); // observing twice is a no-op
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="uFY4IYPs2LU8fWm96Im2"></div>

</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-[60vh] bg-gradient-to-b via-zinc-500/5 to-transparent z-10 from-zinc-400/30"></div>
<div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-48 h-56 blur-[100px] rounded-full z-10 bg-zinc-400/10"></div>
<div className="absolute -top-[50vh] w-[150vw] h-[100vh] rounded-[100%] border border-zinc-500/10 shadow-[0_0_120px_rgba(161,161,170,0.1)]"></div>
<div className="absolute top-[20vh] w-[120vw] h-[120vh] rounded-[100%] border shadow-[0_0_80px_rgba(161,161,170,0.05)] border-zinc-600/5"></div>
<div className="absolute top-[30%] left-[15%] w-64 h-64 bg-zinc-500/5 blur-[80px] rounded-full"></div>
<div className="absolute bottom-[20%] right-[20%] w-80 h-80 blur-[100px] rounded-full bg-zinc-400/5"></div>
</div>

<header className="fixed flex md:px-12 z-50 pointer-events-auto pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between">
<a className="flex items-center gap-2.5 text-xl tracking-tight font-medium hover:opacity-80 transition-opacity font-geist text-white" href="#">
<iconify-icon className="rotate-90 w-5 h-5 flex items-center justify-center text-white" icon="solar:play-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
        Lumina
      </a>
<nav className="hidden md:flex items-center gap-10 text-base font-normal text-zinc-400">
<a className="flex items-center gap-1.5 transition-colors group hover:text-zinc-200" href="#">
          Product
          <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex items-center gap-1.5 transition-colors group hover:text-zinc-200" href="#">
          Resources
          <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="flex items-center gap-1.5 transition-colors group hover:text-zinc-200" href="#">
          Pricing
          <iconify-icon className="w-4 h-4 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>
<div className="hidden md:flex items-center gap-6">
<a className="text-base font-normal transition-colors px-4 py-2 backdrop-blur-sm border rounded-full text-zinc-300 hover:text-white bg-black/50 border-zinc-700/50" href="#">
          Login
        </a>

<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal tracking-tight bg-[#09090b]/80 backdrop-blur-md border rounded-full px-5 py-2.5 items-center justify-center text-sm hover:text-white text-zinc-300 border-zinc-700/80">

<span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
            Start Today It's Free
            <iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
            Start Today It's Free
            <iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent to-transparent rounded-full blur-[2px] via-neutral-200"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t to-transparent rounded-full from-white/20 via-white/10"></span>
</button>
</div>
</header>
<main className="z-20 container md:px-12 flex flex-col md:pb-16 pointer-events-none mr-auto ml-auto pt-32 pr-6 pb-10 pl-6 relative justify-center">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12 pointer-events-auto min-h-[70vh] gap-x-16 gap-y-16 items-center">

<div className="flex flex-col gap-10 lg:pr-8 text-left gap-x-10 gap-y-10">
<h1 className="sm:text-6xl md:text-7xl leading-[1.1] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-5xl font-medium tracking-tight font-geist text-white/95">
            AI Agents
            <br/>
            Powerful Automation
            <br/>
<span className="text-zinc-500">Made Simple</span>
</h1>
<div className="flex flex-wrap items-center gap-4 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">

<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-normal tracking-tight border rounded-full px-8 py-3.5 items-center justify-center text-lg hover:text-white text-zinc-300 bg-zinc-900 border-zinc-700/80">

<span className="relative z-10 flex items-center gap-2 rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
                Start Today It's Free
                <iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>

<span className="absolute inset-0 z-10 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">
                Start Today It's Free
                <iconify-icon className="flex items-center justify-center w-5 h-5" height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5', color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent to-transparent rounded-full blur-[2px] via-neutral-200"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t to-transparent rounded-full from-white/20 via-white/10"></span>
</button>
<button className="px-8 py-3.5 rounded-full border bg-transparent text-lg font-normal transition-colors backdrop-blur-sm border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:text-white">
              Talk to Sales
            </button>
</div>

<div className="flex flex-col gap-5 pt-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="flex items-start gap-4 text-lg font-normal group text-zinc-400">
<iconify-icon className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>
<span className="font-medium text-zinc-200">No-code :</span>
                you click, it works
              </span>
</div>
<div className="flex items-start gap-4 text-lg font-normal group text-zinc-400">
<iconify-icon className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">
<span className="font-medium text-zinc-200">Open source :</span>
                customizable and secure
              </span>
</div>
<div className="flex items-start gap-4 text-lg font-normal group text-zinc-400">
<iconify-icon className="w-6 h-6 flex items-center justify-center text-zinc-500 mt-0.5 group-hover:text-zinc-300 transition-colors flex-shrink-0" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="">
<span className="font-medium text-zinc-200">Training :</span>
                guided by us, built by your team
              </span>
</div>
</div>
</div>

<div className="lg:h-[650px] hidden md:block [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate w-full h-[500px] z-50 pointer-events-auto relative">
<div className="glass-card absolute top-[5%] left-[5%] w-40 lg:w-48 aspect-square rotate-[-4deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2b94ae-4a0b-458d-b838-58b0fb5fadfd_800w.webp"/>
<div className="bg-gradient-to-tr to-transparent absolute top-0 right-0 bottom-0 left-0 from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
<div className="glass-card absolute top-[15%] right-[5%] w-48 lg:w-56 aspect-[4/3] rotate-[3deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98ceb9e8-e614-438f-b0b6-6ea9a4cd962a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
<div className="glass-card lg:w-44 aspect-[3/4] md:p-3 w-36 z-[63] pt-2 pr-2 pb-2 pl-2 absolute top-[40%] left-[0%] rotate-[-2deg] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce9b24e-35c2-4401-966f-6862ca3cbe67_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
<div className="glass-card absolute top-[35%] right-[15%] w-52 lg:w-64 aspect-square rotate-[2deg] p-2 md:p-3 z-[64] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84c1c812-11be-4bbf-980f-9c90b7a0d779_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
<div className="glass-card absolute bottom-[5%] left-[20%] w-44 lg:w-52 aspect-square rotate-[4deg] p-2 md:p-3 z-[62] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f606005-ba8e-4906-8403-5200e9723d9f_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
<div className="glass-card absolute bottom-[0%] right-[10%] w-36 lg:w-44 aspect-[4/3] rotate-[-3deg] p-2 md:p-3 z-[61] transition-all duration-500 ease-out hover:scale-105 hover:z-[100]">
<div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.5)] bg-zinc-900">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1c6740-1f50-4f43-bbb0-8bfb2f9620bd_320w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent from-black/40"></div>
</div>
<div className="glass-highlight"></div>
</div>
</div>
</div>
</main>


<section className="z-20 container md:px-12 pointer-events-auto mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<style>
        @keyframes lumina-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }
        @keyframes lumina-pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
        }
        @keyframes lumina-scan {
            0% { top: 0; opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        @keyframes lumina-shine {
            0% { transform: translateX(-100%); }
            20%, 100% { transform: translateX(100%); }
        }
        @keyframes lumina-highlight {
            0%, 100% { background-color: transparent; }
            50% { background-color: rgba(255, 255, 255, 0.04); }
        }
        @keyframes lumina-scale {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.03); }
        }
        @keyframes lumina-blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
        }
        @keyframes lumina-load {
            0% { width: 10%; }
            50% { width: 100%; }
            100% { width: 10%; }
        }
      </style>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[85%] max-w-[260px] bg-[#09090b] border rounded-xl p-4 shadow-2xl z-10 flex flex-col border-white/10 [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate">
<div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-zinc-200">
                    Security Audit
                  </span>
</div>
<span className="text-[10px] px-1.5 py-0.5 rounded border font-medium bg-emerald-400/10 text-emerald-400 border-emerald-400/20 [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate">
                  Passed
                </span>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-400">
                    End-to-end Encryption
                  </span>
<i className="w-3.5 h-3.5 text-emerald-400 [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate" data-lucide="check-circle-2" strokeWidth="2" style={{animationDelay: '0s'}}></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-400">
                    Access Control Logs
                  </span>
<i className="w-3.5 h-3.5 text-emerald-400 [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate" data-lucide="check-circle-2" strokeWidth="2" style={{animationDelay: '0.5s'}}></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-400">
                    Vulnerability Scan
                  </span>
<i className="w-3.5 h-3.5 text-emerald-400 [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate" data-lucide="check-circle-2" strokeWidth="2" style={{animationDelay: '1s'}}></i>
</div>
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-400">
                    Data Privacy Policies
                  </span>
<i className="w-3.5 h-3.5 text-emerald-400 [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate" data-lucide="check-circle-2" strokeWidth="2" style={{animationDelay: '1.5s'}}></i>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              SOC 2 Compliance
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Our product meets SOC 2 standards for secure handling of sensitive
              information
            </p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[85%] max-w-[260px] flex flex-col gap-2 z-10 [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '0.5s'}}>

<div className="bg-[#09090b] border rounded-xl p-3.5 shadow-2xl relative border-white/10">
<div className="flex items-center gap-2 mb-3">
<div className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800">
<i className="w-3 h-3 text-zinc-300" data-lucide="building" strokeWidth="1.5"></i>
</div>
<span className="text-[11px] font-medium text-zinc-200">
                    Sign in to Acme
                  </span>
</div>
<div className="bg-[#131316] border rounded-lg p-2.5 flex items-center justify-between text-xs border-white/5">
<span className="font-medium text-zinc-300">
                    jane@acmecorp.com
                  </span>
<i className="w-3.5 h-3.5 text-zinc-500 animate-spin" data-lucide="loader-2" strokeWidth="2"></i>
</div>
</div>

<div className="flex flex-col items-center justify-center h-4 relative overflow-hidden">
<div className="absolute w-px h-full bg-gradient-to-b to-transparent from-white/20"></div>
<div className="absolute w-2 h-2 rounded-full border bg-[#09090b] shadow-[0_0_8px_rgba(255,255,255,0.3)] border-white/20 [animation:lumina-scan_2s_linear_infinite] animate-on-scroll animate"></div>
</div>

<div className="bg-[#09090b] border rounded-xl p-3 shadow-2xl flex items-center gap-3 w-4/5 mx-auto relative overflow-hidden border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent [animation:lumina-shine_3s_ease-in-out_infinite] animate-on-scroll animate"></div>
<div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="fingerprint" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-[9px] text-zinc-500 uppercase tracking-widest font-medium">
                    Routing to
                  </span>
<span className="text-[11px] font-medium text-zinc-200">
                    Identity Provider
                  </span>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              SSO and Domain Capture
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Seamlessly manage users with SSO and domain capture
            </p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[90%] max-w-[280px] bg-[#09090b] border rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col border-white/10 [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '1s'}}>
<div className="grid grid-cols-5 gap-2 p-3 border-b bg-white/[0.02] border-white/5">
<div className="col-span-2 text-[10px] font-medium text-zinc-500 uppercase tracking-wider">
                  Resource
                </div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">
                  Read
                </div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">
                  Edit
                </div>
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider text-center">
                  Admin
                </div>
</div>
<div className="flex flex-col p-2 gap-1 bg-[#0e0e11]">

<div className="grid grid-cols-5 gap-2 p-2 items-center rounded-lg cursor-pointer [animation:lumina-highlight_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '0s'}}>
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="database" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium truncate text-zinc-300">
                      Core API
                    </span>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-[#131316] border-white/10"></div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-[#131316] border-white/10"></div>
</div>
</div>

<div className="grid grid-cols-5 gap-2 p-2 items-center rounded-lg cursor-pointer [animation:lumina-highlight_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '1s'}}>
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium truncate text-zinc-300">
                      Marketing
                    </span>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-[#131316] border-white/10"></div>
</div>
</div>

<div className="grid grid-cols-5 gap-2 p-2 items-center rounded-lg cursor-pointer [animation:lumina-highlight_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '2s'}}>
<div className="col-span-2 flex items-center gap-2">
<i className="w-3.5 h-3.5 text-zinc-400" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-[11px] font-medium truncate text-zinc-300">
                      Billing
                    </span>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
<div className="flex justify-center">
<div className="w-3.5 h-3.5 rounded border bg-emerald-500/10 flex items-center justify-center border-white/10">
<i className="w-2.5 h-2.5 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              Fine-Grained Permissions
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Effortlessly assign and manage fine-grained permissions with our
              solution
            </p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[90%] max-w-[280px] bg-[#09090b] border rounded-xl p-3 shadow-2xl z-10 flex flex-col gap-4 border-white/10 [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '1.5s'}}>
<div className="flex items-center gap-3 p-2 bg-white/[0.03] border rounded-lg border-white/5">
<div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/20 flex items-center justify-center font-medium text-xs shadow-inner text-purple-400">
                  JD
                </div>
<div className="flex flex-col">
<span className="text-[12px] font-medium text-zinc-200">
                    Jane Doe
                  </span>
<span className="text-[10px] text-zinc-500">
                    Engineering Team
                  </span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-1">
                  Assigned Roles
                </div>
<div className="flex flex-wrap gap-2">
<div className="flex items-center gap-1.5 px-2 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-[11px] font-medium shadow-sm text-blue-400 [animation:lumina-scale_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '0s'}}>
<i className="w-3 h-3" data-lucide="shield" strokeWidth="1.5"></i>
                    Admin
                    <i className="w-3 h-3 ml-1 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-1.5 px-2 py-1.5 border rounded-md text-[11px] font-medium shadow-sm bg-white/5 border-white/10 text-zinc-300 [animation:lumina-scale_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '1.5s'}}>
<i className="w-3 h-3 text-zinc-400" data-lucide="edit-2" strokeWidth="1.5"></i>
                    Editor
                    <i className="w-3 h-3 ml-1 opacity-60 hover:opacity-100 cursor-pointer transition-opacity" data-lucide="x"></i>
</div>
<div className="flex items-center gap-1.5 px-2 py-1.5 border border-dashed rounded-md text-[11px] font-medium text-zinc-500 cursor-pointer transition-colors bg-[#0e0e11] border-white/20 hover:text-zinc-300 hover:border-white/40">
<i className="w-3 h-3" data-lucide="plus" strokeWidth="2"></i>
                    Add Role
                  </div>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              Role-Based Access Control
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Ensure enterprise security and compliance with role-based access
              management
            </p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[85%] max-w-[240px] z-10 flex flex-col [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '2s'}}>

<div className="bg-[#09090b] border rounded-xl p-2.5 flex items-center justify-between shadow-lg mb-2 relative z-20 transition-colors cursor-pointer border-white/10 hover:border-white/20">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 flex items-center justify-center text-[11px] font-bold shadow-inner to-purple-600 text-white">
                    A
                  </div>
<span className="text-xs font-medium text-zinc-200">
                    Acme Global
                  </span>
</div>
<i className="w-3.5 h-3.5 text-zinc-500" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>

<div className="bg-[#0e0e11] border rounded-xl p-1.5 shadow-2xl flex flex-col gap-0.5 relative overflow-hidden border-white/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-2xl"></div>
<div className="text-[10px] font-medium text-zinc-500 px-2.5 py-2 uppercase tracking-wider relative z-10">
                  Switch Workspace
                </div>
<div className="flex items-center gap-2.5 p-2 rounded-lg border border-white/[0.02] relative z-10 [animation:lumina-highlight_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '0s'}}>
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 flex items-center justify-center text-[11px] font-bold shadow-sm to-purple-600 text-white">
                    A
                  </div>
<span className="text-xs font-medium text-zinc-200">
                    Acme Global
                  </span>
<i className="w-3.5 h-3.5 ml-auto text-white [animation:lumina-pulse_2s_ease-in-out_infinite] animate-on-scroll animate" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex items-center gap-2.5 p-2 rounded-lg cursor-pointer relative z-10 [animation:lumina-highlight_3s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '1.5s'}}>
<div className="w-6 h-6 rounded-md border flex items-center justify-center text-[11px] font-bold bg-zinc-800 border-white/10 text-zinc-400">
                    E
                  </div>
<span className="text-xs font-medium text-zinc-400">
                    Acme Europe
                  </span>
</div>
<div className="h-px my-1 mx-2 relative z-10 bg-white/5"></div>
<div className="flex items-center gap-2.5 p-2 hover:bg-white/[0.02] rounded-lg transition-colors cursor-pointer relative z-10 text-zinc-400 hover:text-zinc-200">
<i className="w-4 h-4 ml-1" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-xs font-medium">Create Workspace</span>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              Workspaces Per Organization
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Organize projects effectively with multiple workspaces per
              organization
            </p>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-1.5 hover:bg-white/[0.02] transition-all duration-500 ease-out hover:scale-[1.02] hover:z-10 relative group shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll border-white/5 animate">
<div className="h-64 rounded-[1.25rem] relative overflow-hidden flex items-center justify-center bg-[#131316] border border-white/5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_60%)] pointer-events-none"></div>

<div className="relative w-[90%] max-w-[280px] bg-[#000] border rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col font-mono border-white/10 [animation:lumina-float_4s_ease-in-out_infinite] animate-on-scroll animate" style={{animationDelay: '2.5s'}}>
<div className="bg-[#18181b] border-b px-3 py-2 flex items-center gap-2 border-white/5">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<span className="text-[10px] text-zinc-500 ml-2">
                  root@on-prem-node:~
                </span>
</div>
<div className="p-3.5 flex flex-col gap-2 text-[11px] leading-relaxed bg-gradient-to-b from-transparent to-[#18181b]/30">
<div className="flex gap-2 text-zinc-300">
<span className="font-medium text-emerald-400">$</span>
<span>lumina deploy --env production</span>
</div>
<div className="text-zinc-500">
                  Initializing deployment sequence...
                </div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="font-medium text-emerald-400">[OK]</span>
                  Provisioning containers
                </div>
<div className="flex items-center gap-2 text-zinc-400">
<span className="font-medium text-emerald-400">[OK]</span>
                  Establishing VPC tunnel
                </div>
<div className="flex flex-col gap-1.5 mt-1">
<div className="text-zinc-500 flex justify-between">
<span>Starting services (3/3)</span>
<span className="text-emerald-400">100%</span>
</div>
<div className="w-full h-1 rounded-full overflow-hidden bg-zinc-800">
<div className="h-full rounded-full bg-emerald-400 [animation:lumina-load_3s_ease-in-out_infinite] animate-on-scroll"></div>
</div>
</div>
<div className="mt-1 flex items-center text-emerald-400">
                  Ready at 192.168.1.100
                  <span className="w-1.5 h-3 ml-1 bg-emerald-400 [animation:lumina-blink_1s_steps(2,_start)_infinite] animate-on-scroll"></span>
</div>
</div>
</div>
</div>
<div className="px-5 py-6 flex flex-col gap-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              On-Premise Deployment
            </h3>
<p className="text-base font-normal leading-relaxed text-zinc-400">
              Deploy Lumina on-premise for enhanced control and security
            </p>
</div>
</div>
</div>
</section>

<section className="relative z-20 container mx-auto px-6 md:px-8 py-24 pointer-events-auto">
<div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">

<div className="absolute -top-8 -left-4 md:left-12 flex flex-col gap-2 opacity-80">
<div className="w-2 h-6 rounded-full rotate-45 origin-bottom-right bg-zinc-400"></div>
<div className="w-2 h-4 rounded-full rotate-45 origin-bottom-right ml-4 bg-zinc-400"></div>
<div className="w-2 h-3 rounded-full rotate-45 origin-bottom-right ml-8 bg-zinc-400"></div>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 font-geist text-white">
          Meet your financial platform
        </h2>
<p className="text-lg font-normal max-w-2xl text-zinc-400">
          Built for any business and every customer. Flexible and user friendly.
        </p>
</div>

<div className="w-full max-w-[1300px] mx-auto bg-[#0e0e11]/80 backdrop-blur-2xl rounded-[2rem] border shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_-1px_1px_rgba(0,0,0,0.3)] flex flex-col md:flex-row overflow-hidden min-h-[850px] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate border-white/10">

<div className="w-full md:w-24 bg-transparent flex md:flex-col items-center justify-between py-6 px-4 border-b md:border-b-0 md:border-r relative z-10 border-white/5">
<div className="flex md:flex-col items-center gap-10 md:gap-12 w-full md:w-auto overflow-x-auto md:overflow-visible no-scrollbar">

<a className="relative w-10 h-10 flex-shrink-0 group" href="#">
<div className="absolute inset-0 rounded-full opacity-80 group-hover:opacity-100 transition-opacity bg-white/80"></div>
<div className="absolute top-1/4 left-1/4 w-full h-full backdrop-blur-sm rounded-full mix-blend-overlay bg-white/20"></div>
</a>

<div className="flex md:flex-col items-center gap-8 text-zinc-500">
<button className="transition-colors hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="transition-colors hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="transition-colors hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="transition-colors relative hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 rounded-full border border-[#18181b] shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-white"></span>
</button>
<button className="transition-colors hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="transition-colors hover:text-white">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<button className="hidden md:flex group relative w-12 h-12 cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden border rounded-full items-center justify-center flex-shrink-0 mt-8 hover:text-white bg-zinc-900 border-zinc-700/80 text-zinc-300">
<span className="relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
<iconify-icon className="w-6 h-6 flex items-center justify-center text-white" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent to-transparent rounded-full blur-[2px] via-neutral-200"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t to-transparent rounded-full from-white/20 via-white/10"></span>
</button>
</div>

<div className="flex-1 flex flex-col lg:flex-row md:p-8 overflow-y-auto dash-scroll pt-6 pr-6 pb-6 pl-6 gap-x-8 gap-y-8">

<div className="flex-1 flex flex-col gap-8">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight font-geist text-white">
                Welcome Back Joan!
              </h2>
<div className="flex items-center gap-4">
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors relative border border-transparent hover:bg-white/5 text-zinc-400 hover:border-white/10">
<iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 shadow-[0_0_10px_rgba(255,255,255,0.5)] rounded-full bg-white"></span>
</button>
<button className="flex items-center gap-2 border px-4 py-2 rounded-full font-medium text-xs transition-colors bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10 hover:text-white">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:restart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                  2 NEW UPDATES
                </button>
<button className="w-10 h-10 rounded-full bg-[#18181b] border flex items-center justify-center transition-colors border-white/10 text-zinc-400 hover:text-white hover:border-white/20">
<iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10">
<iconify-icon className="w-5 h-5 flex items-center justify-center group-hover:text-white transition-colors text-zinc-300" icon="solar:home-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium group-hover:text-zinc-200 text-zinc-400">
                  Home Loan
                </span>
</button>
<button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10">
<iconify-icon className="w-5 h-5 flex items-center justify-center group-hover:text-white transition-colors text-zinc-300" icon="solar:bus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium group-hover:text-zinc-200 text-zinc-400">
                  Car Loan
                </span>
</button>
<button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10">
<iconify-icon className="w-5 h-5 flex items-center justify-center group-hover:text-white transition-colors text-zinc-300" icon="solar:tuning-square-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium group-hover:text-zinc-200 text-zinc-400">
                  Maintenance
                </span>
</button>
<button className="bg-white/[0.02] border border-white/[0.03] rounded-3xl p-6 flex flex-col items-center justify-center gap-3 hover:bg-white/[0.05] transition-colors group">
<div className="w-12 h-12 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10">
<iconify-icon className="w-5 h-5 flex items-center justify-center group-hover:text-white transition-colors text-zinc-300" icon="solar:battery-charge-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium group-hover:text-zinc-200 text-zinc-400">
                  Boosters
                </span>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center border-white/10 text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:arrow-left-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">
                    Harvested losses
                  </span>
<span className="text-2xl font-semibold tracking-tight font-geist text-white">
                    $0.00
                  </span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center border-white/10 text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">
                    Total earnings
                  </span>
<span className="text-2xl font-semibold tracking-tight font-geist text-white">
                    $10,596.80
                  </span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center border-white/10 text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">
                    Total net worth
                  </span>
<span className="text-2xl font-semibold tracking-tight font-geist text-white">
                    $5,250.90
                  </span>
</div>
</div>
<div className="flex items-center gap-4 bg-white/[0.02] hover:bg-white/[0.04] transition-colors rounded-2xl p-4 border border-white/[0.02]">
<div className="w-14 h-14 rounded-xl bg-[#18181b] border shadow-[0_0_15px_rgba(255,255,255,0.02)] flex items-center justify-center border-white/10 text-zinc-200">
<iconify-icon className="w-6 h-6 flex items-center justify-center" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-normal text-zinc-400">
                    Total for all goals
                  </span>
<span className="text-2xl font-semibold tracking-tight font-geist text-white">
                    $5,596.80
                  </span>
</div>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 pt-4">

<div className="xl:col-span-2 flex flex-col gap-6">
<h3 className="text-xl font-medium font-geist text-white">
                  Recent Activity
                </h3>

<div className="flex items-center justify-between border-b pb-4 border-white/10">
<div className="flex gap-8">
<button className="text-sm font-medium relative pb-4 -mb-4 border-b-2 text-white border-white">
                      History
                    </button>
<button className="text-sm font-medium text-zinc-500 pb-4 -mb-4 border-b-2 border-transparent hover:text-zinc-300">
                      Upcoming
                    </button>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 border px-4 py-1.5 rounded-lg text-xs font-medium transition-colors bg-white/5 text-zinc-300 border-white/10 hover:bg-white/10">
<iconify-icon className="w-3.5 h-3.5 flex items-center justify-center" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                      2 Sep 20 - 20 Sep 20
                    </button>
<button className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10">
<iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:download-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<button className="group relative flex w-8 h-8 cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[2px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden border rounded-full items-center justify-center hover:text-white bg-zinc-900 border-zinc-700/80 text-zinc-300">
<span className="relative z-10 flex items-center justify-center rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-6 group-hover:opacity-0 group-hover:blur-md">
<iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none opacity-0 rounded-full blur-md">
<iconify-icon className="w-4 h-4 flex items-center justify-center text-white" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] opacity-0 group-hover:opacity-80 bg-gradient-to-r from-transparent to-transparent rounded-full blur-[2px] via-neutral-200"></span>
<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] opacity-0 group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t to-transparent rounded-full from-white/20 via-white/10"></span>
</button>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500">
                      10 Jun, 2022
                    </span>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-500">
<iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:transfer-horizontal-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">
                            Amazon Support
                          </span>
<span className="text-xs text-zinc-500">
                            10 Sep, 2020 at 3:30 PM
                          </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded border flex items-center justify-center bg-white/5 border-white/10 text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Supplies</span>
</div>
<div className="flex items-center justify-end gap-6 w-1/3">
<div className="w-6 h-6 rounded-md border flex items-center justify-center bg-white/5 border-white/5 text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500 w-20 text-right">
                          -$20.200
                        </span>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-zinc-500">
                      08 Jun, 2022
                    </span>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-300">
<iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:download-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">
                            Roland GmbH
                          </span>
<span className="text-xs text-zinc-500">
                            10 Sep, 2020 at 3:30 PM
                          </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded border flex items-center justify-center bg-white/5 border-white/10 text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">Marketing</span>
</div>
<div className="flex items-center justify-end gap-6 w-1/3">
<div className="w-6 h-6 rounded-md flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] bg-white/10 text-white">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium w-20 text-right text-white">
                          +$30.400
                        </span>
</div>
</div>
<div className="flex items-center justify-between group hover:bg-white/[0.04] p-2 -mx-2 rounded-xl transition-colors">
<div className="flex items-center gap-4 w-1/3 min-w-[180px]">
<div className="text-zinc-500">
<iconify-icon className="w-4 h-4 flex items-center justify-center" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200">
                            Bank of America
                          </span>
<span className="text-xs text-zinc-500">
                            10 Sep, 2020 at 3:30 PM
                          </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 w-1/3">
<div className="w-6 h-6 rounded border flex items-center justify-center bg-white/5 border-white/10 text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs text-zinc-400">
                          Office supplies
                        </span>
</div>
<div className="flex items-center justify-end gap-6 w-1/3">
<div className="w-6 h-6 rounded-md border flex items-center justify-center bg-white/5 border-white/5 text-zinc-400">
<iconify-icon className="w-3 h-3 flex items-center justify-center" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-500 w-20 text-right">
                          -$10.200
                        </span>
</div>
</div>
</div>
</div>
</div>

<div className="xl:col-span-1 flex flex-col justify-between gap-4 bg-white/[0.02] p-6 rounded-3xl border border-white/[0.03] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
<div className="">
<h4 className="text-sm font-medium mb-2 text-zinc-400">
                    Activity Graph
                  </h4>
<span className="text-3xl font-semibold tracking-tight font-geist text-white">
                    $186k
                  </span>
</div>
<div className="flex-1 flex flex-col justify-end mt-4">
<div className="flex justify-end mb-2">
<span className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                      Between Sep 9 - 27
                    </span>
</div>

<div className="h-32 w-full flex items-end justify-between gap-1 pb-2 border-b relative mt-auto border-white/5">
<div className="absolute left-0 top-0 bottom-2 flex flex-col justify-between text-xs w-6 text-zinc-600">
<span>25k</span>
<span>15k</span>
<span>5k</span>
<span>0</span>
</div>
<div className="flex-1 flex items-end justify-between gap-1 ml-8 h-full">
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '20%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '35%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '25%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm opacity-50 from-zinc-600/30 to-white/90" style={{height: '45%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '60%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm opacity-70 from-zinc-600/30 to-white/90" style={{height: '80%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.4)] from-zinc-600/30 to-white/90" style={{height: '90%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '100%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm opacity-60 from-zinc-600/30 to-white/90" style={{height: '60%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '40%'}}></div>
<div className="w-full bg-gradient-to-t rounded-t-sm from-zinc-600/30 to-white/90" style={{height: '30%'}}></div>
</div>
</div>
<div className="flex items-center justify-between ml-8 text-xs mt-2 text-zinc-600">
<span>9</span>
<span>11</span>
<span>13</span>
<span>15</span>
<span>17</span>
<span>19</span>
<span>21</span>
<span>23</span>
<span>25</span>
<span>27</span>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section>
<section className="container md:px-12 z-20 pointer-events-auto mr-auto ml-auto pt-32 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 font-geist text-white">
          Simple, transparent pricing
        </h2>
<p className="text-lg font-normal max-w-2xl text-zinc-400">
          Choose the plan that best fits your needs. All plans include core
          features.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-24 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-white/5">
<h3 className="text-xl font-medium tracking-tight mb-2 font-geist text-white">
            Hobby
          </h3>
<p className="text-sm mb-6 h-10 text-zinc-400">
            Perfect for side projects and learning.
          </p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight font-geist text-white">
              $0
            </span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<button className="w-full px-4 py-2.5 rounded-full border bg-transparent text-sm font-medium transition-colors mb-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:text-white">
            Get Started
          </button>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              Up to 1,000 active users
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              Community support
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              Basic analytics
            </div>
</div>
</div>

<div className="flex flex-col bg-[#131316] border rounded-3xl p-8 relative shadow-[0_20px_40px_rgba(0,0,0,0.5)] transform md:-translate-y-4 border-white/10">
<div className="absolute inset-0 bg-gradient-to-b to-transparent rounded-3xl pointer-events-none from-white/5"></div>
<div className="absolute -top-px left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent to-transparent via-zinc-400"></div>
<div className="flex justify-between items-center mb-2">
<h3 className="text-xl font-medium tracking-tight font-geist text-white">
              Pro
            </h3>
<span className="text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full border bg-white/10 text-zinc-200 border-white/5">
              Most Popular
            </span>
</div>
<p className="text-sm mb-6 h-10 text-zinc-400">
            For scaling startups and growing teams.
          </p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight font-geist text-white">
              $49
            </span>
<span className="text-sm text-zinc-500">/mo</span>
</div>
<button className="w-full px-4 py-2.5 rounded-full text-sm font-medium transition-colors mb-8 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-zinc-200">
            Start Free Trial
          </button>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
              Up to 50,000 active users
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
              Priority email support
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
              Advanced analytics
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-emerald-400" data-lucide="check" strokeWidth="2"></i>
              Custom domains
            </div>
</div>
</div>

<div className="flex flex-col bg-[#0e0e11] border rounded-3xl p-8 hover:bg-white/[0.02] transition-colors relative shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-white/5">
<h3 className="text-xl font-medium tracking-tight mb-2 font-geist text-white">
            Enterprise
          </h3>
<p className="text-sm mb-6 h-10 text-zinc-400">
            Custom solutions for large scale operations.
          </p>
<div className="mb-6">
<span className="text-4xl font-medium tracking-tight font-geist text-white">
              Custom
            </span>
</div>
<button className="w-full px-4 py-2.5 rounded-full border bg-transparent text-sm font-medium transition-colors mb-8 border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:text-white">
            Contact Sales
          </button>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              Unlimited active users
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              24/7 dedicated support
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              Custom integrations
            </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<i className="w-4 h-4 text-zinc-500" data-lucide="check" strokeWidth="2"></i>
              SLA &amp; SOC 2 compliance
            </div>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto bg-[#09090b] border rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)] [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll relative animate border-white/5">
<div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>
<div className="overflow-x-auto relative z-10">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="">
<tr className="border-b bg-white/[0.02] border-white/5">
<th className="p-6 font-medium text-base text-white">
                  Compare Plans
                </th>
<th className="p-6 font-medium w-1/5 text-center text-white">
                  Hobby
                </th>
<th className="p-6 font-medium w-1/5 text-center text-white">
                  Pro
                </th>
<th className="p-6 font-medium w-1/5 text-center text-white">
                  Enterprise
                </th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="">
<td className="p-6 pb-2 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-white/[0.01]" colspan="4">
                  Core Features
                </td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  Monthly Active Users
                </td>
<td className="px-6 py-4 text-center text-zinc-400">1,000</td>
<td className="px-6 py-4 text-center text-zinc-400">50,000</td>
<td className="px-6 py-4 text-center text-zinc-400">Unlimited</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  API Requests
                </td>
<td className="px-6 py-4 text-center text-zinc-400">10K/mo</td>
<td className="px-6 py-4 text-center text-zinc-400">1M/mo</td>
<td className="px-6 py-4 text-center text-zinc-400">Unlimited</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  Data Retention
                </td>
<td className="px-6 py-4 text-center text-zinc-400">7 days</td>
<td className="px-6 py-4 text-center text-zinc-400">30 days</td>
<td className="px-6 py-4 text-center text-zinc-400">365 days</td>
</tr>
<tr className="">
<td className="p-6 pb-2 pt-8 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-white/[0.01]" colspan="4">
                  Advanced Tools
                </td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  Custom Domains
                </td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  Role-based Access
                </td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="check"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">Audit Logs</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i>
</div>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-zinc-300">
                  Single Sign-On (SSO)
                </td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-700" data-lucide="minus"></i>
</div>
</td>
<td className="px-6 py-4">
<div className="flex justify-center">
<i className="w-4 h-4 text-zinc-400" data-lucide="check"></i>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
<section className="container md:px-12 z-20 pointer-events-auto border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col items-center justify-center text-center mb-16 relative [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 font-geist text-white">
          Seamless Integrations
        </h2>
<p className="text-lg font-normal max-w-2xl text-zinc-400">
          Connect Lumina with your existing stack in minutes.
        </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl" icon="logos:slack-icon"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl text-white" icon="mdi:github"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl text-white" icon="mdi:aws"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl" icon="logos:google-cloud"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl text-white" icon="simple-icons:linear"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl text-white" icon="simple-icons:notion"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl" icon="logos:salesforce"></iconify-icon>
</div>
<div className="flex items-center justify-center p-8 bg-[#0e0e11] border border-white/5 rounded-3xl hover:bg-white/[0.02] transition-colors">
<iconify-icon className="text-4xl" icon="logos:figma"></iconify-icon>
</div>
</div>
</section>
<section className="container md:px-12 z-20 pointer-events-auto border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Testimonials</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight font-geist text-white max-w-3xl">
        Lumina is transforming team workflows
      </h2>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3">
<button className="transition-all flex bg-zinc-900 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center w-12 h-12 hover:bg-zinc-800 hover:text-white" style={{boxShadow: '0 18px 35px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="transition-all flex bg-zinc-900 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center w-12 h-12 hover:bg-zinc-800 hover:text-white" style={{boxShadow: '0 18px 35px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)', color: '#e5e7eb', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.2))', '--border-radius-before': '9999px'}}>
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
<style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll mb-16 gap-x-4 gap-y-4">
<div className="flex items-center gap-1.5">
<i className="w-6 h-6 fill-emerald-500 text-emerald-500" data-lucide="star"></i>
<span className="text-xl font-medium tracking-tight text-white">Trustpilot</span>
</div>
<div className="text-sm font-medium text-zinc-400 sm:ml-2">
<span className="text-zinc-200">TrustScore 4.7/5</span> <span className="hidden sm:inline">·</span> <span className="block sm:inline">18,211 reviews</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex flex-col">
<div className="flex items-baseline gap-2 mb-2">
<span className="lg:text-8xl leading-none text-7xl font-medium text-gray-50 tracking-tight font-geist" style={{maskImage: 'linear-gradient(180deg, transparent, black 50%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 50%, black 60%, transparent)'}}>
          40
        </span>
<span className="text-2xl text-zinc-300 font-medium tracking-tight">hrs</span>
</div>
<p className="text-lg text-zinc-400 mb-8 font-medium">Saved per week</p>
<p className="text-xl lg:text-2xl leading-relaxed font-normal text-zinc-200 mb-10 tracking-tight">
        With Lumina, we completely transformed how we handle our automated workflows. We've saved countless hours and the ROI was apparent within the first week. For the first time in years, our team feels proud, agile, and in control of our infrastructure again.
      </p>
<div className="">
<button className="px-8 py-3.5 rounded-full border bg-transparent text-base font-normal transition-colors border-zinc-700/80 text-zinc-300 hover:bg-zinc-800/50 hover:text-white inline-flex items-center justify-center min-w-[160px]">
          Read story
        </button>
</div>
</div>
<div className="grid grid-cols-2 gap-4 h-[400px] md:h-[500px] lg:h-[600px]">
<div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0e0e11] border border-white/10 group">
<img alt="Day 1" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91a69d34-7bfd-4a15-802d-67ddeff8c160_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10">Day 1</span>
</div>
</div>
<div className="relative w-full h-full rounded-3xl overflow-hidden bg-[#0e0e11] border border-white/10 group">
<img alt="Month 6" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2b6bfe8-29b7-48cb-9aa6-a44e21613618_800w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
<span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white border border-white/10">Month 6</span>
</div>
</div>
</div>
</div>
</section>
<section className="container md:px-12 z-20 pointer-events-auto mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative border-t border-white/5">
<div className="flex flex-col items-center justify-center text-center p-12 md:p-20 bg-gradient-to-b from-[#131316] to-[#0e0e11] border border-white/10 rounded-[3rem] relative overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 font-geist text-white relative z-10">
          Ready to automate your workflow?
        </h2>
<p className="text-lg font-normal max-w-2xl text-zinc-400 mb-10 relative z-10">
          Join thousands of companies using Lumina to power their operations.
        </p>
<div className="flex flex-wrap justify-center gap-4 relative z-10">
<button className="px-8 py-3.5 rounded-full text-sm font-medium transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white text-black hover:bg-zinc-200">
            Start Free Trial
          </button>
<button className="px-8 py-3.5 rounded-full border bg-transparent text-sm font-medium transition-colors border-zinc-800 text-zinc-300 hover:bg-zinc-800/50 hover:text-white">
            Talk to Sales
          </button>
</div>
</div>
</section>
<footer className="border-t border-white/5 bg-[#09090b] pt-16 pb-8 px-6 md:px-12 relative z-20">
<div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 flex flex-col gap-4 pr-8">
<a className="flex items-center gap-2.5 text-xl tracking-tight font-medium font-geist text-white" href="#">
<iconify-icon className="rotate-90 w-5 h-5 flex items-center justify-center text-white" icon="solar:play-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
            Lumina
          </a>
<p className="text-sm text-zinc-500 max-w-xs mt-2">
            Powerful automation made simple. Secure, scalable, and built for
            modern teams.
          </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Product</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Features
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Integrations
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Pricing
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Changelog
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Resources</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Documentation
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            API Reference
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Community
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Blog
          </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-medium text-white">Company</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            About
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Careers
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Legal
          </a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Contact
          </a>
</div>
</div>
<div className="container mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-zinc-600">
          © 2024 Lumina Inc. All rights reserved.
        </p>
<div className="flex items-center gap-4">
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="mdi:twitter"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="mdi:github"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-zinc-400 transition-colors" href="#">
<iconify-icon className="w-5 h-5" icon="mdi:linkedin"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
