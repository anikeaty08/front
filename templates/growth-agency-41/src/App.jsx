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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-5xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">Client Maestro</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white shrink-0" href="#contact">
        Get Started
        <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 py-12 md:p-12 lg:p-20 border shadow-2xl shadow-black/20 overflow-hidden text-center mb-12 md:mb-16 bg-[#0A0A0A] border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

<div className="animate-fade-up w-fit border px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-montserrat font-semibold mb-6 md:mb-8 bg-rose-950/30 border-rose-900/50 text-rose-400">ATTENTION B2B BUSINESS OWNERS</div>

<h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] tracking-tighter mb-6 md:mb-8 font-serif font-medium text-white">
          We'll
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 italic pr-2 to-orange-400">
            Book 15 Qualified B2B Sales Meetings Per Month
          </span>
          in
          <br className="hidden md:block"/>
          30 Days or
          <span className="border-b-2 md:border-b-4 border-rose-500/30">
            You Don't Pay.
          </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl mb-8 md:mb-12 font-light px-2">Our proprietary "Cold Email Outbound System" books 15 qualified B2B sales meetings per month directly into your calendar — without you writing a single email or managing any infrastructure.</p>

<div className="animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5"><iframe allowfullscreen="" allowtransparency="true" frameborder="0" mozallowfullscreen="" scrolling="no" src="https://fast.wistia.net/embed/iframe/p6swsh374l?autoPlay=false&amp;videoFoam=true" style={{width: '100%', height: '100%', minHeight: '420px'}} webkitallowfullscreen=""></iframe></div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-rose-500/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
            Get Started
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
            Learn More
          </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
          Book a Free Strategy Session. No credit card required.
        </p>
</div>
</section>

<div className="w-full py-8 md:py-12 mb-16 md:mb-20 text-center border-b border-white/5">
<h3 className="text-xl md:text-2xl font-serif mb-2 text-white">For B2B Companies Ready to Scale</h3>
<p className="text-[10px] md:text-xs font-montserrat uppercase tracking-widest mb-8 md:mb-10 text-gray-500">JOIN THE FASTEST GROWING B2B BUSINESSES WORKING WITH CLIENT MAESTRO</p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-50 scale-90 md:scale-100 invert">
<div className="flex items-center gap-2">
<svg className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">B2B Service?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">High Ticket Offer?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">You're in the Right Place.</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">B2B Service?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">High Ticket Offer?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">You're in the Right Place.</span>
</div>
</div>

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-50 scale-90 md:scale-100 invert">
<div className="flex items-center gap-2">
<svg className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">B2B Service?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">High Ticket Offer?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">You're in the Right Place.</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">B2B Service?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">High Ticket Offer?</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">You're in the Right Place.</span>
</div>
</div>
</div>
</div>
</div>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white px-4">
        Are You Currently Struggling With...
      </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">Unpredictable Pipeline</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">You never know where your next client is coming from — some months two or three new clients, other months nothing. Your pipeline is a rollercoaster with no real system behind it.</p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">Wasted Ad Spend</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">You've tried LinkedIn ads, spending £5,000–£10,000 a month, and half the leads are tyre-kickers. Cost per qualified meeting is £500 to £1,200. You're gambling with your budget.</p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-rose-900/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(244,63,94,0.3), rgba(244,63,94,0.05))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">No Time to Build Systems</h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">You're spending 10 to 15 hours a week networking and posting on LinkedIn. That's 60 hours a month — worth £6,000 to £10,000 of your time — for maybe one or two new clients.</p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">Why Choose Client Maestro</h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">We use a proprietary cold email outbound system that others simply can't replicate — targeting your exact decision-makers and delivering guaranteed results.</p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">Laser-Targeted Outreach</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">We build a verified list of 5,000–10,000 prospects matching your exact ICP — right company size, industry, job title, and buying signals. Every contact checked.</p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">Full Transparency</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">Live dashboards. 24/7 access. You see every meeting booked and every reply received — plus a full briefing before every call with who they are and why they're interested.</p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-rose-500/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">Performance Guarantee</h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">If we miss the 15 meeting minimum in any month, you get 100% of your money back and we work the following month at 50% off. We only win when you win.</p>
<div className="mt-auto self-end group-hover:text-rose-500 transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
          Book a Call
          <svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#0a0a0a] border-white/5">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-rose-500">
<svg className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 md:mb-10 italic text-white px-2">"If we don't deliver 15 qualified meetings in any month, you get 100% of your money back. No questions asked."</h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-800 border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="font-montserrat font-semibold text-white">Mark Barnes</div>
<div className="md:text-sm text-xs font-light text-gray-500">Founder, Client Maestro</div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-rose-500">
          Transformation
        </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white">How We Get You 15 Meetings Per Month</h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            1
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">Define Your ICP</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">We define your ideal customer profile together — exact company size, industry, job titles, and buying signals specific to your market. No guesswork.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            2
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">We Build Your Outbound Engine</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">We build your verified prospect list, set up dedicated sending domains, warm up your email infrastructure, and write personalised sequences. Done in under 14 days.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-rose-500 group-hover:text-rose-500 transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">You Just Show Up and Close</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">We qualify every reply, book only genuine fits into your calendar, and send a briefing before every call. You don't write a single email. You just show up and close.</p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">
          Book Your Transformation
          <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-2xl shadow-black/20 text-center relative overflow-hidden bg-[#0a0a0a] border-white/5">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-white">Exactly How We Deliver 15 Qualified Meetings Per Month</h2>
<p className="text-sm md:text-lg text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">See exactly how our Cold Email Outbound System works — from building your prospect list to qualified meetings landing in your calendar.</p>
<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 ring-white/5">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/10 border-white/20">
<div className="md:w-16 md:h-16 flex text-black bg-white w-12 h-12 rounded-full pl-1 shadow-sm items-center justify-center">
<svg className="lucide lucide-play w-5 h-5 md:w-7 md:h-7 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-rose-500/20 bg-white text-black hover:bg-rose-600 hover:text-white" href="#contact">Book Your Free Discovery Call →</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
          What's Included
        </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-rose-900/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-rose-500">
                The Ecosystem
              </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">Complete Done-For-You Outbound System</h3>
<p className="text-gray-400 font-light text-base md:text-lg">Everything you need to go from zero pipeline to 15+ qualified sales meetings per month — fully managed, fully guaranteed.</p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">ICP Research &amp; List Building</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">Verified Prospect Database</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">Email Infrastructure Setup</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">Personalised Email Sequences</span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">Reply Handling &amp; Qualification</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">Pre-Call Briefing Docs</span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    24/7 Live Reporting
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-rose-900/20 text-rose-400 border border-rose-500/10">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-white border-rose-500/40">15 Meetings Guaranteed</span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-rose-600 hover:text-white shadow-black/50" href="#contact">
                Secure Your Growth Partner
                <svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                No long-term contracts. Cancel anytime.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24"><div className="" style={{padding: '80px 40px', textAlign: 'center'}}>
<p className="" style={{color: '#c0392b', fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '16px'}}>PROVEN RESULTS</p>
<h2 className="" style={{fontSize: '40px', fontWeight: '700', color: 'white', marginBottom: '60px'}}>The Numbers Speak For Themselves</h2>
<div className="" style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '40px', maxWidth: '1000px', margin: '0 auto'}}>
<div className="" style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '40px 20px'}}><div className="" style={{fontSize: '52px', fontWeight: '700', color: '#c0392b', marginBottom: '8px'}}>15+</div><div style={{fontSize: '16px', color: 'rgba(255,255,255,0.7)'}}>Qualified sales meetings delivered per month, guaranteed</div></div>
<div style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '40px 20px'}}><div style={{fontSize: '52px', fontWeight: '700', color: '#c0392b', marginBottom: '8px'}}>36</div><div style={{fontSize: '16px', color: 'rgba(255,255,255,0.7)'}}>New clients per year at a 20% close rate from 15 meetings/month</div></div>
<div className="" style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '40px 20px'}}><div style={{fontSize: '52px', fontWeight: '700', color: '#c0392b', marginBottom: '8px'}}>30</div><div style={{fontSize: '16px', color: 'rgba(255,255,255,0.7)'}}>Days to your first qualified meetings in the calendar</div></div>
<div className="" style={{border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '40px 20px'}}><div className="" style={{fontSize: '52px', fontWeight: '700', color: '#c0392b', marginBottom: '8px'}}>100%</div><div className="" style={{fontSize: '16px', color: 'rgba(255,255,255,0.7)'}}>Money back if we miss 15 meetings in any month</div></div>
</div>
</div></section>

<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-white/5">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-medium text-white">Hi, I'm the Founder of Client Maestro.</h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
<p>I founded Client Maestro with one mission: to give B2B businesses a predictable, guaranteed source of qualified sales meetings — so you can focus on closing, not chasing.</p>
<p>After years working with B2B businesses, I saw the same problem everywhere — great services, terrible pipelines. Referrals don't scale. Ads are unpredictable. Cold email done right is the only channel that consistently delivers.</p>
</div>
<button className="mt-6 md:mt-8 font-semibold border-b pb-0.5 transition-all text-rose-400 border-rose-900 hover:border-rose-400">
          Let's Talk!
        </button>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-900">
<img alt="Founder" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-950/40 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">Book Your Free 20-Minute Discovery Call</h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-gray-400">I'll look at your offer, your ideal client, and tell you honestly whether this is right for your business and what results you can expect. No hard sell — if it's not the right fit, I'll tell you straight.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-rose-500 transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" placeholder="Enter your email" type="email"/>
<button className="md:py-4 hover:bg-rose-500 transition-colors shadow-lg shadow-black/30 font-bold text-black hover:text-white bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" type="button">
            Get Audit
          </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-white">FAQs — Everything You Need to Know</h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex md:p-6 cursor-pointer select-none md:text-base text-sm font-medium text-white font-montserrat pt-5 pr-5 pb-5 pl-5 items-center justify-between">
            How fast can we expect results?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">You'll see your first qualified meetings within 2–3 weeks of launch. By weeks 4–6 you'll be hitting a consistent 15+ meetings per month. We handle all the setup — list building, infrastructure, sequences — so there's no delay on your end.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            Do you work with any industry?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">We work with B2B businesses where the average client is worth £10,000 or more. That includes consulting, professional services, technology, recruitment, finance, and similar sectors.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What is the guarantee exactly?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">If we don't deliver at least 15 qualified meetings in any given month, you get 100% of your money back. We also work the following month at 50% off until we hit the target. A meeting only counts if it's genuinely qualified — right company, right decision-maker, real budget.</div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How much of my time is required?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">Almost none. We handle everything — research, list building, email infrastructure, copywriting, sending, reply management, and qualification. All you do is show up to the calls.</div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
        Don't see what you're looking for?
        <a className="underline transition-all text-rose-400 decoration-rose-900 hover:decoration-rose-400" href="#">
          Get in touch
        </a>
        .
      </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
          Book a Call
        </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
          Book a no-commitment discovery call to discuss how we can help you
          grow.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget w-full" data-processed="true" data-url="https://calendly.com/lucas-clientascension/test?hide_gdpr_banner=1&amp;primary_color=e11d48&amp;background_color=0a0a0a&amp;text_color=ffffff" style={{position: 'relative', minWidth: '320px', height: '1000px', width: '100%'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/mark-clientmaestro/30min?embed_domain=aura.build&amp;embed_type=Inline&amp;hide_gdpr_banner=1" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</section>
</main>

<footer className="md:pt-16 md:pb-10 md:px-6 bg-[#050505] border-white/5 border-t pt-12 pr-4 pb-8 pl-4">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-2xl font-medium italic text-white tracking-tight font-serif" href="#">Client Maestro</a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
          Scaling revenue for ambitious brands through intelligent ecosystems.
        </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Services
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Case Studies
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          About
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-rose-400" href="#">
          Contact
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p>© 2025 Client Maestro. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
