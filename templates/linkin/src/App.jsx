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
      

<a className="fixed bottom-6 right-6 z-50 bg-white border border-neutral-200 rounded-full py-2 pr-4 pl-2 shadow-lg shadow-black/5 flex items-center gap-2 hover:-translate-y-0.5 transition-transform duration-300" href="#">
<div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">Get it for free</span>
</a>

<main className="w-full max-w-[480px] bg-white rounded-[32px] border border-neutral-200 p-4 sm:p-8 flex flex-col gap-8 shadow-sm relative z-10">

<header className="flex flex-col items-center pt-4">
<img alt="Chris Linx" className="w-24 h-24 rounded-full object-cover border border-neutral-200 shadow-sm" src="https://framerusercontent.com/images/lFcgmnSNMxgS8b8a78iKsMuURd0.webp"/>
<div className="text-center mt-5 mb-4">
<h1 className="text-2xl font-semibold tracking-tight text-neutral-900">Chris Linx</h1>
<p className="text-sm text-neutral-500 mt-1">Entrepreneur &amp; Designer</p>
</div>

<div className="flex flex-wrap justify-center gap-2">
<a className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon className="text-neutral-600" icon="solar:user-rounded-linear"></iconify-icon>
<span className="text-xs font-semibold text-neutral-900">15K+</span>
</a>
<a className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon className="text-neutral-600" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-semibold text-neutral-900">1.6K</span>
</a>
<a className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon className="text-neutral-600" icon="solar:camera-minimalistic-linear"></iconify-icon>
<span className="text-xs font-semibold text-neutral-900">20K+</span>
</a>
<a className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors" href="#">
<iconify-icon className="text-neutral-600" icon="solar:link-circle-linear"></iconify-icon>
<span className="text-xs font-semibold text-neutral-900">1.6K</span>
</a>
</div>
</header>

<div className="flex flex-col gap-4">

<a className="relative block w-full aspect-[4/5] rounded-[24px] border border-neutral-200 overflow-hidden group" href="#">
<img alt="Digital Agency" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://framerusercontent.com/images/cA4CM2VUMhhGxzC3TQqAZMbl8.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col gap-1">
<h2 className="text-2xl font-semibold tracking-tight text-white">Digital Agency</h2>
<p className="text-sm text-white/80">Bridging Design, Code, and AI.</p>
</div>
</a>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-[14px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Personal Website</h3>
<p className="text-xs text-neutral-500 mt-0.5">Find my blog, stack, and more!</p>
</div>
</a>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-[14px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Newsletter</h3>
<p className="text-xs text-neutral-500 mt-0.5">Sign up to my newsletter</p>
</div>
</a>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-[14px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:gallery-minimalistic-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Framer Templates</h3>
<p className="text-xs text-neutral-500 mt-0.5">Discover high quality Framer templates</p>
</div>
</a>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<img alt="Coffee Setup" className="w-12 h-12 rounded-[14px] object-cover border border-neutral-200 shadow-sm flex-shrink-0" src="https://framerusercontent.com/images/mwcj4rYatYN29GXzTtaBC5FthU.jpg"/>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Coffee Setup</h3>
<p className="text-xs text-neutral-500 mt-0.5">I love coffee. Check out my setup.</p>
</div>
</a>

<div className="flex flex-col gap-3 p-4 bg-neutral-50 border border-neutral-200 rounded-[24px]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex-shrink-0 bg-white border border-neutral-200 rounded-[12px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:camera-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">From Instagram</h3>
</div>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="flex gap-2 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-1 pt-1 -mx-4 px-4">
<img className="w-32 h-32 flex-shrink-0 rounded-2xl object-cover border border-neutral-200 snap-center" src="https://framerusercontent.com/images/XiQtS7za61R8mDbk2KT62zXra0Y.jpg"/>
<img className="w-32 h-32 flex-shrink-0 rounded-2xl object-cover border border-neutral-200 snap-center" src="https://framerusercontent.com/images/4k1cGCd8FJndbtgSYVoJLyGDGLI.jpg"/>
<img className="w-32 h-32 flex-shrink-0 rounded-2xl object-cover border border-neutral-200 snap-center" src="https://framerusercontent.com/images/H8cr0d5V4N5WBhyyk4YUqjzH2fM.jpg"/>
<img className="w-32 h-32 flex-shrink-0 rounded-2xl object-cover border border-neutral-200 snap-center" src="https://framerusercontent.com/images/mwcj4rYatYN29GXzTtaBC5FthU.jpg"/>
<img className="w-32 h-32 flex-shrink-0 rounded-2xl object-cover border border-neutral-200 snap-center" src="https://framerusercontent.com/images/YacKKX38JM6D1ejTRPPiyJSOc.jpg"/>
</div>
</div>

<div className="flex flex-col gap-4 p-5 bg-neutral-50 border border-neutral-200 rounded-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex-shrink-0 bg-white border border-neutral-200 rounded-[12px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Drop a line</h3>
</div>
<form className="flex flex-col gap-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<input className="w-full bg-white border border-neutral-200 rounded-[14px] px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm" placeholder="Your name" required="" type="text"/>
<input className="w-full bg-white border border-neutral-200 rounded-[14px] px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm" placeholder="Your email" required="" type="email"/>
</div>
<textarea className="w-full bg-white border border-neutral-200 rounded-[14px] px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm h-28 resize-none" placeholder="Leave a message..." required=""></textarea>
<button className="w-full bg-neutral-100 border border-neutral-200 text-neutral-900 font-semibold text-sm rounded-[14px] py-3.5 hover:bg-neutral-200 hover:border-neutral-300 transition-all mt-1" type="submit">Send message</button>
</form>
</div>

<div className="flex flex-col items-center text-center p-8 bg-neutral-50 border border-neutral-200 rounded-[24px]">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900">Personal Newsletter</h3>
<p className="text-sm text-neutral-500 mt-2 max-w-[280px]">Sharing thoughts, ideas, updates of my stack once per month.</p>
<form className="relative w-full max-w-sm mt-6">
<input className="w-full bg-white border border-neutral-200 rounded-[14px] pl-4 pr-[104px] py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-300 focus:ring-4 focus:ring-neutral-100 transition-all shadow-sm" placeholder="Email address" required="" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-neutral-900 text-white font-semibold text-xs rounded-[10px] hover:bg-neutral-800 transition-colors" type="submit">Subscribe</button>
</form>
</div>

<div className="flex flex-col gap-4 p-5 bg-neutral-50 border border-neutral-200 rounded-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex-shrink-0 bg-white border border-neutral-200 rounded-[12px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Software I use</h3>
</div>
<div className="flex flex-col gap-1 mt-1">
<a className="flex items-center gap-3 py-2 group" href="#">
<img alt="Polar" className="w-10 h-10 rounded-[10px] border border-neutral-200 object-cover shadow-sm group-hover:scale-105 transition-transform" src="https://framerusercontent.com/images/yLL85ONsYjXSQ3WN1e1E7GULk.png"/>
<div className="flex flex-wrap items-center gap-1.5 text-sm">
<span className="font-semibold text-neutral-900">Polar</span>
<span className="text-neutral-300">·</span>
<span className="text-neutral-500">Business</span>
</div>
</a>
<a className="flex items-center gap-3 py-2 group" href="#">
<img alt="Typefully" className="w-10 h-10 rounded-[10px] border border-neutral-200 object-cover shadow-sm group-hover:scale-105 transition-transform" src="https://framerusercontent.com/images/by20Nj9ItWnwJ8YbH4JYMGymfQ.png"/>
<div className="flex flex-wrap items-center gap-1.5 text-sm">
<span className="font-semibold text-neutral-900">Typefully</span>
<span className="text-neutral-300">·</span>
<span className="text-neutral-500">Productivity</span>
</div>
</a>
<a className="flex items-center gap-3 py-2 group" href="#">
<img alt="Contra" className="w-10 h-10 rounded-[10px] border border-neutral-200 object-cover shadow-sm group-hover:scale-105 transition-transform" src="https://framerusercontent.com/images/nVuWfEy4nPYCWTMlHUA8xefo.png"/>
<div className="flex flex-wrap items-center gap-1.5 text-sm">
<span className="font-semibold text-neutral-900">Contra</span>
<span className="text-neutral-300">·</span>
<span className="text-neutral-500">Business</span>
</div>
</a>
<a className="flex items-center gap-3 py-2 group" href="#">
<img alt="Framer" className="w-10 h-10 rounded-[10px] border border-neutral-200 object-cover shadow-sm group-hover:scale-105 transition-transform" src="https://framerusercontent.com/images/Ju4XlaUsQ4GXs0ZIf1mLVyU.png"/>
<div className="flex flex-wrap items-center gap-1.5 text-sm">
<span className="font-semibold text-neutral-900">Framer</span>
<span className="text-neutral-300">·</span>
<span className="text-neutral-500">Development</span>
</div>
</a>
</div>
<button className="w-full bg-neutral-100 border border-neutral-200 text-neutral-900 font-semibold text-xs rounded-[12px] py-3 mt-2 hover:bg-neutral-200 transition-colors">Show more</button>
</div>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-[14px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Our Office</h3>
<p className="text-xs text-neutral-500 mt-0.5">Get a quick direction to our office</p>
</div>
</a>

<div className="w-10 h-0.5 bg-neutral-200 rounded-full mx-auto my-2"></div>

<div className="flex flex-col gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[24px]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 flex-shrink-0 bg-white border border-neutral-200 rounded-[12px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-lg" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Latest Video</h3>
</div>
<a className="relative block w-full aspect-video rounded-xl border border-neutral-200 overflow-hidden group cursor-pointer" href="#">
<img alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://i.ytimg.com/vi_webp/8AHPXm9Y6mI/maxresdefault.webp"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-10 bg-neutral-900/90 backdrop-blur rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
<svg fill="white" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
</svg>
</div>
</div>
</a>
</div>

<a className="flex items-center gap-4 p-4 bg-neutral-50 border border-neutral-200 rounded-[20px] hover:bg-neutral-100 transition-colors group" href="#">
<div className="w-12 h-12 flex-shrink-0 bg-white border border-neutral-200 rounded-[14px] flex items-center justify-center shadow-sm">
<iconify-icon className="text-neutral-900 text-xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<h3 className="text-sm font-semibold tracking-tight text-neutral-900">Consultation</h3>
<p className="text-xs text-neutral-500 mt-0.5">Get personalized advice from me</p>
</div>
</a>
</div>

<footer className="flex items-center justify-center gap-2 mt-4 text-xs text-neutral-400">
<a className="hover:text-neutral-800 transition-colors" href="#">Get this free template</a>
<span>·</span>
<a className="hover:text-neutral-800 transition-colors tracking-tight" href="#">Made in Framer</a>
</footer>
</main>

    </>
  );
}
