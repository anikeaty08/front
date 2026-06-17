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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute inset-0 bg-black"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-red-900/30 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-950/40 blur-[100px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>

<header className="md:px-12 flex z-20 fade-in-up w-full max-w-7xl mr-auto ml-auto pt-8 pr-6 pb-4 pl-6 relative items-center justify-between">
<a className="flex items-center group" href="/">

<img alt="Chosen Movement Logo" className="md:w-24 md:h-24 group-hover:opacity-100 transition-opacity opacity-90 mix-blend-screen w-20 h-20 object-cover bg-center rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3811eb7a-ce8d-4760-bbd3-01ef84b181e8_320w.png"/>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-300" href="/about">
          ABOUT
        </a>
</nav>
<div className="flex items-center gap-4">
<button className="md:hidden hover:text-white transition-colors text-neutral-300 pt-2 pr-2 pb-2 pl-2" onclick="const m=document.getElementById('menu-3d'),main=document.querySelector('main'),head=document.querySelector('header');if(m){main.style.transform='';main.style.opacity='';head.style.transform='';head.style.opacity='';m.style.opacity='0';document.body.style.overflow='';setTimeout(()=&gt;m.remove(),700)}else{document.body.style.perspective='2000px';document.body.style.overflow='hidden';const d=document.createElement('div');d.id='menu-3d';d.className='fixed inset-0 z-50 flex flex-col items-end justify-center pr-12 md:pr-24 gap-10 opacity-0 transition-opacity duration-700 pointer-events-auto';d.innerHTML='&lt;div class=&quot;absolute inset-0 bg-black/60 backdrop-blur-md -z-10 cursor-pointer&quot; onclick=&quot;document.body.querySelector(\'[data-element-id=aura-emmi3m51n26z2e2f]\').click()&quot;&gt;&lt;/div&gt;&lt;a href=&quot;/&quot; class=&quot;text-5xl md:text-7xl font-semibold tracking-tight text-white hover:text-red-400 transition-all transform hover:-translate-x-4 duration-300 drop-shadow-2xl&quot;&gt;Home&lt;/a&gt;&lt;a href=&quot;/about&quot; class=&quot;text-5xl md:text-7xl font-semibold tracking-tight text-white hover:text-red-400 transition-all transform hover:-translate-x-4 duration-300 drop-shadow-2xl&quot;&gt;About&lt;/a&gt;&lt;button onclick=&quot;document.body.querySelector(\'[data-element-id=aura-emmi3m51n26z2e2f]\').click()&quot; class=&quot;absolute top-8 right-6 md:top-12 md:right-12 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 text-white cursor-pointer&quot;&gt;&lt;svg width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; strokeWidth=&quot;1.5&quot;&gt;&lt;path strokeLinecap=&quot;round&quot; strokeLinejoin=&quot;round&quot; d=&quot;M18 6L6 18M6 6l12 12&quot;/&gt;&lt;/svg&gt;&lt;/button&gt;';document.body.appendChild(d);main.style.transition='all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';main.style.transformOrigin='right center';head.style.transition='all 0.7s cubic-bezier(0.16, 1, 0.3, 1)';head.style.transformOrigin='right center';requestAnimationFrame(()=&gt;{d.style.opacity='1';main.style.transform='translateZ(-500px) translateX(-30%) rotateY(20deg) scale(0.9)';main.style.opacity='0.3';head.style.transform='translateZ(-500px) translateX(-30%) rotateY(20deg) scale(0.9)';head.style.opacity='0.3'})}">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</header>

<main className="md:px-12 flex flex-col w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">

<section className="flex flex-col md:flex-row md:items-end md:gap-4 w-full max-w-4xl mr-auto ml-auto pt-16 pb-4 gap-x-8 gap-y-8 items-start justify-between">
<h1 className="fade-in-up leading-[0.9] md:text-8xl lg:text-9xl text-6xl font-semibold text-white tracking-tight text-left mt-0 mr-0 mb-0 ml-0 relative drop-shadow-2xl">
      CHOSEN
      <br className=""/>
<span className="text-red-500/90 mix-blend-screen">MOVEMENT</span>
</h1>
<div className="fade-in-up delay-100 shrink-0 md:mb-4 bg-white/5 border-white/10 border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md items-center justify-center hidden">
</div>
</section>

<section className="flex flex-col fade-in-up delay-200 md:pt-12 md:pb-10 text-center w-full pt-8 pb-0 items-center">
<span className="text-sm font-medium tracking-[0.2em] text-red-400 uppercase mb-8">
          Our Mission
        </span>
<h2 className="md:text-5xl lg:text-7xl leading-tight text-3xl font-medium text-white tracking-tight max-w-5xl">
      "To awaken a generation to their
      <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
            inheritance in Christ
          </span>
      ."
    </h2>
</section>

<section className="w-full max-w-5xl mr-auto ml-auto pt-12 pb-2">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">

<a className="col-span-1 md:col-span-2 group glass-panel hover:bg-white/10 transition-all duration-300 flex items-center justify-between rounded-3xl p-6 md:p-8 bg-gradient-to-r from-red-600/20 to-transparent border border-red-500/20 shadow-[0_0_30px_-10px_rgba(220,38,38,0.3)]" href="https://forms.gle/vrCrTB1yqmWVd7oJ9">
<div className="flex items-center gap-4 md:gap-6">
<div className="p-3 md:p-4 rounded-full bg-red-500/20 text-red-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-ticket w-6 h-6 md:w-8 md:h-8 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
<path d="M13 5v2"></path>
<path d="M13 17v2"></path>
<path d="M13 11v2"></path>
</svg>
</div>
<span className="md:text-3xl group-hover:text-red-100 transition-colors text-2xl font-normal text-white tracking-tight cursor-pointer" onclick="window.location.href='https://forms.gle/vrCrTB1yqmWVd7oJ9'" role="button">
            REGISTER FOR CHOSEN NIGHT
          </span>
</div>
<svg className="lucide lucide-arrow-right w-6 h-6 md:w-8 md:h-8 text-red-400 group-hover:translate-x-2 transition-transform stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group glass-panel hover:bg-white/5 transition-all duration-300 flex items-center justify-between rounded-3xl pt-6 pr-6 pb-6 pl-6" href="https://donate.stripe.com/5kQ9AVboufdddHMfL65ZC00">
<div className="flex items-center gap-4">
<div className="p-3 rounded-full bg-white/5 text-red-200">
<svg className="lucide lucide-handshake w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4">
</path>
<path d="m21 3 1 11h-2"></path>
<path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
<path d="M3 4h8"></path>
</svg>
</div>
<span className="text-xl font-normal tracking-tight">
                Partner With Us
              </span>
</div>
<svg className="lucide lucide-chevron-right group-hover:text-white transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</a>

<a className="group glass-panel hover:bg-white/5 transition-all duration-300 flex items-center justify-between rounded-3xl pt-6 pr-6 pb-6 pl-6" href="https://open.spotify.com/track/6kMeViYbxVAoq7hUjS0xuF?si=505037e3af9d494a">
<div className="flex items-center gap-4">
<div className="p-3 rounded-full bg-white/5 text-green-400">
<svg className="lucide lucide-play w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
<span className="text-xl font-normal tracking-tight">
            Listen to I Bow
          </span>
</div>
<svg className="lucide lucide-chevron-right group-hover:text-white transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</a>
<a className="group glass-panel hover:bg-white/5 transition-all duration-300 flex items-center justify-between rounded-3xl pt-6 pr-6 pb-6 pl-6" href="https://open.spotify.com/playlist/1u6uV0SOIR3T3PzejQlW0Q?si=49c32456a1b74934">
<div className="flex items-center gap-4">
<div className="text-red-200 bg-white/5 rounded-full pt-3 pr-3 pb-3 pl-3">
<svg className="lucide lucide-music w-6 h-6 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 18V5l12-2v13"></path>
<circle cx="6" cy="18" r="3"></circle>
<circle className="" cx="18" cy="16" r="3"></circle>
</svg>
</div>
<span className="text-xl font-normal tracking-tight">
                Chosen 26 Playlist
              </span>
</div>
<svg className="lucide lucide-chevron-right group-hover:text-white transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18 6-6-6-6"></path>
</svg>
</a>
<div className="grid grid-cols-2 gap-4">
<a className="group glass-panel p-6 rounded-3xl hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center" href="https://www.youtube.com/@chosenmovementt">
<svg className="lucide lucide-youtube group-hover:text-red-500 transition-colors stroke-[1.5] w-[32px] h-[32px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17">
</path>
<path d="m10 15 5-3-5-3z"></path>
</svg>
<span className="text-lg font-normal tracking-tight">Subscribe</span>
</a>
<a className="group glass-panel hover:bg-white/5 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center rounded-3xl pt-6 pr-6 pb-6 pl-6" href="https://www.instagram.com/chosen.mvmnt">
<svg className="lucide lucide-instagram w-8 h-8 text-neutral-400 group-hover:text-pink-500 transition-colors stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
<span className="text-lg font-normal tracking-tight">Follow Us</span>
</a>
</div>
</div>
</section>

<section className="w-full max-w-4xl mb-12 pt-5 pb-24 relative">
<div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent blur-3xl -z-10 rounded-full"></div>
<div className="glass-panel rounded-[2.5rem] p-12 md:p-16 text-center border border-white/10 overflow-hidden relative">

<div className="opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0">
</div>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 relative z-10">
        Join the Movement
      </h3>
<p className="leading-relaxed z-10 text-xl text-neutral-300 max-w-xl mr-auto mb-10 ml-auto relative">Don't miss out on
        what God is doing!</p>
<a className="inline-block group hover:bg-neutral-200 transition-all duration-300 text-lg font-medium text-black bg-white z-10 rounded-full pt-4 pr-10 pb-4 pl-10 relative shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="https://chat.whatsapp.com/Cr6BudixGusH1ZJpVFvTRs?mode=gi_t">
<span className="flex items-center gap-2 cursor-pointer" onclick="window.location.href='https://chat.whatsapp.com/Cr6BudixGusH1ZJpVFvTRs?mode=gi_t'" role="button">JOIN OUR COMMUNITY <svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5] group-hover:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
</a>
</div>
</section>

<footer className="w-full border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-500 text-base">
<div className="flex items-center gap-3">
<img alt="Chosen Logo" className="hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer opacity-50 mix-blend-screen w-7 h-7 object-cover bg-center rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51e5f8db-c88b-4978-bc91-32f9375aed95_320w.jpg"/>
<span className="">Chosen © 2026</span>
</div>
<div className="flex items-center gap-8">
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
</path>
</svg>
</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/chosen.mvmnt">
<svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</footer>
</main>


    </>
  );
}
