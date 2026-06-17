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



!function(){const e=!0;window.__inViewIO||(window.__inViewIO=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(t.target.classList.add("animate"),e&&window.__inViewIO.unobserve(t.target))}))}),{threshold:.1,rootMargin:"0px 0px -5% 0px"})),window.initInViewAnimations=function(e=".animate-on-scroll"){document.querySelectorAll(e).forEach((e=>{window.__inViewIO.observe(e)}))},document.addEventListener("DOMContentLoaded",(()=>{initInViewAnimations();const e=document.querySelectorAll(".stat-item"),t=document.getElementById("main-image"),n={1:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/960d4d9c-2584-47bb-9b1c-418e0d46e730_800w.webp",2:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp",3:"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37e53262-839c-4555-837c-45698b65611b_800w.webp"};e.forEach((o=>{o.addEventListener("click",(()=>{e.forEach((e=>e.classList.remove("active"))),o.classList.add("active");const i=o.dataset.imgId;t.classList.add("fade-out"),setTimeout((()=>{t.src=n[i],t.onload=()=>{t.classList.remove("fade-out")}}),500)}))}))}))}();



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
      


<div className="aura-background-component top-0 w-full h-screen -z-10 mix-blend-screen absolute opacity-50 saturate-150 brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div></div>

<nav className="w-full px-6 py-6 lg:px-12 flex justify-between items-center relative z-50 [animation:fadeSlideIn_0.8s_ease-out_0s_both] animate-on-scroll animate">
<div className="beam-border-h"></div>
<div className="flex gap-12 gap-x-12 gap-y-12 items-center">
<div className="flex items-center gap-3 text-white hover:text-[#FACC15] transition-colors cursor-pointer">
<svg className="w-[24px] h-[24px]" height="24" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" fill="currentColor" opacity=".5"></path>
<path d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06" fill="currentColor"></path>
</svg>
</div>
<div className="hidden md:block h-5 w-[1px] bg-neutral-800"></div>
<button className="hidden md:flex items-center gap-2 text-lg font-normal text-neutral-400 hover:text-white transition-colors group">
          Expertise
          <svg className="text-xl opacity-70 group-hover:opacity-100 transition-all" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m8.303 12.404l3.327 3.431c.213.22.527.22.74 0l6.43-6.63C19.201 8.79 18.958 8 18.43 8h-5.723z" fill="currentColor"></path>
<path d="M11.293 8H5.57c-.528 0-.771.79-.37 1.205l2.406 2.481z" fill="currentColor" opacity=".5"></path>
</svg>
</button>
</div>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<span className="text-sm font-medium tracking-widest uppercase hidden sm:block text-neutral-400">
    Get in touch
  </span>
<button className="group flex overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.4)] focus:outline-none w-12 h-12 relative items-center justify-center rounded-none bg-transparent border-none">
<style>
      @keyframes beam-spin { to { transform: rotate(360deg); } }
      @keyframes dots-move { 
        0% { background-position: 0 0; } 
        100% { background-position: 24px 24px; } 
      }
    </style>

<div className="absolute inset-0 -z-20 overflow-hidden rounded-none p-[1px]">
<div className="absolute aspect-square w-[300%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_0_300deg,#FACC15_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-none bg-[#050505]"></div>
</div>

<div className="-z-10 overflow-hidden bg-[#080808] rounded-none absolute inset-[2px]">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-800/60 to-transparent"></div>
<div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#FACC15]/10 blur-xl pointer-events-none transition-colors duration-500 group-hover:bg-[#FACC15]/30"></div>
</div>

<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-neutral-400 group-hover:text-[#FACC15]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</button>
</div>
</nav>

<main className="flex-grow flex flex-col min-h-[90vh] overflow-hidden w-full pt-32 pb-40 relative items-center justify-center">

<div className="absolute top-10 md:top-20 left-[5%] md:left-[22%] w-28 md:w-48 aspect-square rotate-[-6deg] rounded-xl overflow-hidden shadow-2xl z-10 [animation:fadeSlideIn_1s_ease-out_0.2s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Abstract 3D Shape" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b813d408-b6f5-47e6-8569-1a52804aba18_800w.webp"/>
</div>

<div className="absolute top-5 md:top-10 right-[15%] md:right-[38%] w-24 md:w-40 aspect-square rotate-[12deg] rounded-xl overflow-hidden shadow-2xl z-10 hidden sm:block [animation:fadeSlideIn_1s_ease-out_0.3s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Orange Geometric" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25f58fe9-cd90-4a46-afc7-6edf7404ee23_320w.webp"/>
</div>

<div className="absolute top-32 md:top-24 right-[-5%] md:right-[12%] w-32 md:w-56 aspect-[4/5] rotate-[-5deg] rounded-xl overflow-hidden shadow-2xl z-10 [animation:fadeSlideIn_1s_ease-out_0.4s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Blue Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aeadae7-3b5a-4e09-92a3-d48603ec9380_800w.webp"/>
</div>

<div className="absolute top-[40%] md:top-[35%] left-[-10%] md:left-[8%] w-40 md:w-64 aspect-square rotate-[8deg] rounded-xl overflow-hidden shadow-2xl z-10 hidden sm:block [animation:fadeSlideIn_1s_ease-out_0.5s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Abstract Blue Face" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba85e313-0a22-4811-b7e0-1e6a9943d09b_800w.webp"/>
</div>

<div className="absolute bottom-[5%] md:bottom-[10%] left-[5%] md:left-[25%] w-36 md:w-56 aspect-[4/5] rotate-[-12deg] rounded-xl overflow-hidden shadow-2xl z-10 [animation:fadeSlideIn_1s_ease-out_0.6s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Shadow Pattern" className="w-full h-full object-cover sm:hidden" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a41d3a65-8d6a-4d01-9658-ed45cbcdcce6_800w.webp"/>
</div>

<div className="absolute bottom-[-5%] md:bottom-[5%] right-[20%] md:right-[35%] w-32 md:w-48 aspect-[4/5] rotate-[5deg] rounded-xl overflow-hidden shadow-2xl z-10 [animation:fadeSlideIn_1s_ease-out_0.7s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 animate">
<img alt="Silver Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f84b55bf-83c5-4b75-8361-67118808440a_800w.jpg"/>
</div>

<div className="absolute bottom-[20%] md:bottom-[15%] right-[-10%] md:right-[8%] w-36 md:w-56 aspect-square rotate-[0deg] rounded-full overflow-hidden shadow-2xl z-10 hidden sm:block [animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 border border-white/5 animate">
<img alt="Gradient Sphere" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0231c636-bdb2-48b9-85ef-f50c1edeff37_800w.webp"/>
</div>
<div className="relative z-20 flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-6 mt-10 md:mt-20 pointer-events-none">
<h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.85] font-semibold text-white tracking-tighter font-['Playfair_Display'] [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll drop-shadow-2xl animate">
          Design
          <br/>
          Unlimited
        </h1>
<p className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#d4d4d4] mt-6 md:mt-8 font-['Playfair_Display'] italic tracking-wide [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll drop-shadow-xl">
          (Truly Open Source)
        </p>
</div>
</main>
<section className="relative w-full border-t border-white/5 bg-[#080808]">
<div className="w-full px-6 lg:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
<div className="lg:col-span-3 relative h-48 lg:h-full w-full [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="w-full h-full overflow-hidden relative opacity-50 hover:opacity-100 transition-opacity duration-700 border border-white/5">
<img alt="Architecture Detail" className="w-full h-full object-cover lg:absolute lg:inset-0 grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-50"></div>
</div>
</div>
<div className="lg:col-span-5 space-y-8 relative z-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:pl-8">
<p className="text-lg lg:text-xl text-neutral-400 leading-relaxed font-light">
            Novus Arc creates environments that challenge perception. We fuse
            <span className="text-white font-medium">brutalist principles</span>
            with organic fluidity to build the monuments of tomorrow.
          </p>
<div className="flex gap-4">
<span className="inline-block border border-white/10 text-neutral-400 text-xs font-medium py-2 px-4 rounded-full uppercase tracking-wider hover:border-[#FACC15] hover:text-[#FACC15] transition-colors cursor-default">
              #Minimalism
            </span>
<span className="inline-block border border-white/10 text-neutral-400 text-xs font-medium py-2 px-4 rounded-full uppercase tracking-wider hover:border-[#FACC15] hover:text-[#FACC15] transition-colors cursor-default">
              #Futurism
            </span>
</div>
</div>
<div className="lg:col-span-4 relative z-10 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll lg:text-right">
<h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight">
            Architecture for the
            <br/>
            post-digital era.
          </h2>
</div>
</div>
</section>
<footer className="w-full bg-[#050505] relative pt-32 pb-0 overflow-hidden">
<div className="w-full bg-[#080808] border-t border-white/10 rounded-t-[3rem] relative z-20 overflow-hidden">
<div className="w-full px-6 lg:px-12 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 relative z-20">
<div className="lg:col-span-7 flex flex-col justify-center">
<h2 className="text-6xl lg:text-[7rem] leading-[0.85] font-normal text-white tracking-tighter mb-12">
              Systematic.
              <br/>
<span className="text-neutral-600">Parametric.</span>
<br/>
              Adaptive.
            </h2>
</div>
<div className="lg:col-span-5 flex lg:justify-end items-center">
<div className="w-full max-w-md bg-[#FACC15] p-8 lg:p-12 rounded-xl relative overflow-hidden group rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
<div className="relative z-10">
<h3 className="text-3xl font-medium text-black tracking-tight leading-tight mb-6">
                  Optimized structures,
                  <br/>
                  at every node.
                </h3>
<p className="text-black/70 text-sm font-medium leading-relaxed mb-10 font-mono">
                  // Where every constraint is met with calculation.
                </p>
<div className="flex items-center justify-between border-t border-black/10 pt-6">
<div className="flex flex-col">
<span className="text-[10px] uppercase tracking-widest text-black/50 font-semibold">
                      Status
                    </span>
<span className="text-xs font-semibold text-black mt-1">
                      Operational
                    </span>
</div>
<button className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
<svg height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="relative w-full overflow-hidden pointer-events-none select-none pt-20">
<h1 className="text-[22vw] leading-none font-bold text-white/5 text-center -mb-12 lg:-mb-24 tracking-tighter">
            NOVUS
          </h1>
<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#080808] to-transparent"></div>
</div>
<div className="absolute bottom-6 w-full flex justify-center z-30">
<p className="text-[10px] text-neutral-700 font-mono uppercase tracking-widest">
            © 2024 Novus Arc Systems. All rights reserved.
          </p>
</div>
</div>
</footer>

    </>
  );
}
