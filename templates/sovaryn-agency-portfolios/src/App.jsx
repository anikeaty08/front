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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
accent: '#5A189A',
link: '#7B2CBF'
}
}
}
}
}



function toggleDarkMode() {
document.documentElement.classList.toggle('dark');
const isDark = document.documentElement.classList.contains('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
}
if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}
document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
observer.observe(el);
});
});
// Local Upload Logic
function updateLogo(input) {
if (input.files && input.files[0]) {
const reader = new FileReader();
reader.onload = function(e) {
const logos = document.querySelectorAll('.logo-img');
logos.forEach(logo => logo.src = e.target.result);
}
reader.readAsDataURL(input.files[0]);
}
}
function updateImage(input, imgId) {
if (input.files && input.files[0]) {
const reader = new FileReader();
reader.onload = function(e) {
document.getElementById(imgId).src = e.target.result;
}
reader.readAsDataURL(input.files[0]);
}
}



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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-4">
<div className="flex flex-row gap-3 items-center">
<img alt="Agency Logo" className="transition-transform hover:scale-105 logo-img shrink-0 w-8 h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1cbc0f62-bcc7-4f88-b86c-3e1f3bdf60ff_320w.png"/>
<div className="flex flex-col items-start justify-center h-8">
<span className="text-base md:text-lg font-medium text-neutral-900 dark:text-white tracking-tight leading-none" contenteditable="true" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>SOVARYN</span>
<span className="text-[10px] md:text-[11px] font-medium tracking-tight text-[#000000] dark:text-[#FFFFFF] mt-1.5 uppercase leading-none">Turning Clicks into Clients</span>
</div>
</div>

</div>

<div className="flex items-center gap-6">
<button className="text-neutral-500 hover:text-brand-link transition-colors flex items-center justify-center p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800" onclick="toggleDarkMode()">
<iconify-icon className="dark:hidden text-lg" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="hidden dark:block text-lg" icon="solar:sun-linear"></iconify-icon>
</button>
<div className="hidden md:flex items-center gap-6">
<a className="dark:text-neutral-400 hover:text-brand-link transition-colors flex items-center gap-2 text-sm font-normal text-neutral-500" href="/mailto:contact@sovaryn.com">ryansmithxsovaryn@gmail.com</a>
<button className="brand-gradient-bg brand-gradient-hover text-white transition-all duration-300 px-6 py-2.5 rounded text-sm font-medium shadow-md">
                        Book a Call
                    </button>
</div>
</div>
</div>
</nav>

<section className="pt-40 pb-20 px-6 flex flex-col items-center text-center border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 relative overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#9D4EDD]/10 dark:bg-[#7B2CBF]/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto animate-on-scroll animate">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-normal text-brand-accent dark:text-[#C77DFF] uppercase tracking-widest mb-8">
<span className="w-2 h-2 rounded-full brand-gradient-bg"></span> Accepting new clients
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.05]">
                Websites that convert strangers <br/>
<span className="brand-gradient-text">into paying clients.</span>
</h1>
<p className="text-lg font-light text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto mb-14 leading-relaxed">
                Your business deserves a premium, high-converting website that captures attention, establishes credibility, and drives revenue from the very first interaction.
            </p>
</div>
<div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-neutral-100 dark:border-neutral-900 animate-on-scroll animate">
<div className="flex flex-col items-center">
<span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">750+</span>
<span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-2">Projects Delivered (estimated number of projects in till date)</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">7+</span>
<span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-2">Years Experience</span>
</div>
<div className="flex flex-col items-center">
<span className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">92%</span>
<span className="text-xs font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-2">Conversion Benchmark                                       (92% of our clients report a measurable increase in qualified lead contact within 90 days based on our post-launch client survey")</span>
</div>
</div>
</section>

<section className="dark:bg-[#0F0F0F] transition-colors duration-300 bg-[#FAFAFA] pt-24 pb-24" id="portfolio">
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="dark:text-white shrink-0 text-3xl font-medium text-neutral-900 tracking-tight">Selected Portfolios</h2>
<div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow mx-6"></div>
<div className="shrink-0 text-sm font-normal text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Featured Projects</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" id="portfolio-grid">

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden dark:bg-neutral-900 dark:border-neutral-800 group/imgcontainer bg-center bg-neutral-100 border-neutral-200 border rounded-lg mb-4 relative">
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 bg-center w-full h-full object-cover z-20 relative" id="port-img-1" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/793ce016-3571-4a9d-bd52-a1b0d3d12fd0_800w.png"/><label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-1')" type="file"/>
</label>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Gloss-Tex Epoxy Flooring</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">FLOORING</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}>
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-2')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-2" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14056231-0c05-4473-a897-188271d27397_800w.png" style={{maskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Epic Epoxy Floors</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Flooring</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-3')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover bg-center z-20 relative" id="port-img-3" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26d510fe-d90b-4d91-8ae6-658aa06e5590_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Maplewood Dental Arts</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">DENTAL clinic</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-4')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-4" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87e16ab7-0a58-40e9-93ad-3838eeb0d311_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Titan Roofing</h3>
<span className="px-2 py-1 text-[10px] uppercase tracking-widest font-normal border border-neutral-200 dark:border-neutral-700 rounded text-brand-accent bg-white dark:bg-neutral-900 shrink-0">Construction</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-5')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-5" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d828a1d9-15a0-4d61-9b33-e75e9cb7e9c1_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">ProClean Commercial</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">cleaning</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-6')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-6" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20dbd349-06b0-4dcd-8514-0380362b27d6_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Protex Roofing</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Construction</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-7')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-7" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e2427d4-1213-4781-9078-a8f23b600d8e_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">ProClean Facilities</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">cleaning</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-8')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-8" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12567aea-2353-453f-9c04-c8038ec807b9_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Lumiere Dermatology</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Dermatology</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-9')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-9" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/865d4e68-6046-4c8f-8fc9-f1c32bbb3584_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Apex Epoxy Floors</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">flooring</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-10')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-10" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05d536be-d8ca-4557-b194-5025a560dd9b_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Serene Smiles </h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Dental clinic</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-11')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-11" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f6747e4-2dcd-466b-9c83-638fb69a90c5_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Dermavance Clinic</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">dermatology</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-12')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-12" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a341249-5cc7-41da-8ce5-5695306e934a_800w.png"/>
</div>
<div className="flex gap-2 pr-1 pl-1 gap-x-2 gap-y-2 items-start justify-between">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Altitude Roofing</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">construction</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-13')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-13" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b7946d7-bb1e-4727-85e7-3e208937ec55_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Advanced Dermatology</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">dermatology</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-14')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-14" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac9d6f72-f398-477e-a2c8-cdea76a33eb2_800w.png"/>
</div>
<div className="flex gap-2 pr-1 pl-1 gap-x-2 gap-y-2 items-start justify-between">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Skin Aesthetics</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Dermatology</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-15')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-15" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5c7e00a-f406-4ed9-9c91-65ef8903a10b_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Premier Roof Systems</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">roofing</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-16')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-16" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d6a82f7-ff48-40d0-9442-971332115378_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Precision Dental Care</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Dental clinic</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-17')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-17" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f1d5852-7328-44fb-8a58-76d6edce07f0_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Endurance Epoxy</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">coatings</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-18')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-18" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d60096b-a70b-4b19-9e48-88f04376019c_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Sparkle Cleaning</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">cleaning</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-19')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-19" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8faee0d-f46f-4ddd-bb90-8b85fa60e588_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Bright Smiles Family</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">Dental clinic</span>
</div>
</div>

<div className="group block animate-on-scroll relative">
<div className="aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900 rounded-lg mb-4 border border-neutral-200 dark:border-neutral-800 relative group/imgcontainer">
<label className="flex items-center justify-center group-hover/imgcontainer:opacity-100 transition-opacity duration-300 cursor-pointer bg-center z-20 opacity-0 absolute top-0 right-0 bottom-0 left-0">
<input accept="image/*" className="hidden" onchange="updateImage(this, 'port-img-20')" type="file"/>
</label>
<img alt="Portfolio Image" className="transition-transform duration-700 ease-out group-hover/imgcontainer:scale-105 w-full h-full object-cover z-20 relative" id="port-img-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12289713-6a13-459e-96de-787a3cfd298a_800w.png"/>
</div>
<div className="flex items-start justify-between gap-2 px-1">
<h3 className="dark:text-white hover:text-brand-link transition-colors text-base font-medium text-neutral-900" contenteditable="true">Immaculate Care</h3>
<span className="text-[10px] uppercase dark:border-neutral-700 text-brand-accent dark:bg-neutral-900 shrink-0 font-normal tracking-widest bg-white border-neutral-200 border rounded pt-1 pr-2 pb-1 pl-2">cleaning</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800 transition-colors duration-300" id="testimonials">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex items-center w-full mb-16 animate-on-scroll">
<h2 className="dark:text-white shrink-0 text-3xl font-medium text-neutral-900 tracking-tight">Client Testimonials</h2>
<div className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow mx-6"></div>
<div className="shrink-0 text-sm font-normal text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Verified Reviews</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="testimonials-grid">

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Within six weeks of our new site going live, our
inbound calls increased noticeably and we started
getting clients who already trusted us before they
even called. The difference in how serious we look is
night and day."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">JW</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">James W.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Conversion rates doubled within the first month. Incredible attention to detail and trust-building elements."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">SL</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Sarah L.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Finally, a web agency that understands business. The ROI has been phenomenal."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">MC</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Michael C.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Sleek, fast, and highly effective. They delivered exactly what our local firm needed."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">ER</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Emily R.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"The best investment we've made in our marketing. The site paid for itself in weeks."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">DT</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">David T.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"They made the process seamless. The final product elevated our brand credibility instantly."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">JM</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Jessica M.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"We constantly get compliments on our new website. Highly recommended for serious businesses."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">RK</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Robert K.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Traffic is up, but more importantly, the quality of leads has skyrocketed."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">AB</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Amanda B.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Clean code, gorgeous design, and a team that actually listens to your goals."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">WP</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">William P.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"An enterprise-grade experience from start to finish. Our old site looks like a dinosaur now."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">AD</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Ashley D.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"They don't just build websites; they build digital sales engines. Truly impressive work."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">RH</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Richard H.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"The aesthetic is perfectly aligned with our premium service offering. Brilliant execution."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">MS</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Melissa S.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Unparalleled communication and delivery speed. The finished design exceeded every expectation."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">TB</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Thomas B.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"A masterclass in user experience. Our bounce rate dropped by 40% overnight."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">NG</div>
<div className="">
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Nicole G.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"They captured our brand voice perfectly. The visuals and structure are world-class."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">CF</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Charles F.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Professional, transparent, and incredibly talented. Worth every single penny."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">LV</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Lauren V.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"The new landing pages are conversion machines. Highly recommend their strategic approach."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">DE</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Daniel E.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"We loved the hands-on process. They made complex digital problems simple for our team."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">ML</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Megan L.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Outstanding reliability and design flair. The best agency partnership we have had."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">KN</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Kevin N.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>

<div className="glass-card bg-[#FAFAFA] dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 p-6 rounded-xl animate-on-scroll flex flex-col h-full">
<div className="flex items-center gap-1 text-brand-link mb-4 text-base">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-600 dark:text-neutral-300 text-sm font-normal leading-relaxed mb-6 flex-grow" contenteditable="true">"Transformed our digital presence completely. The custom integrations work flawlessly."</p>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200 dark:border-neutral-800">
<div className="w-9 h-9 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 flex items-center justify-center text-[11px] font-semibold shrink-0 tracking-widest uppercase">RC</div>
<div>
<div className="text-sm font-medium text-neutral-900 dark:text-white leading-tight" contenteditable="true">Rachel C.</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mt-0.5">Verified Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] dark:bg-[#0F0F0F] border-t border-neutral-200 dark:border-neutral-800 text-center px-6 relative overflow-hidden transition-colors duration-300">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#9D4EDD]/10 dark:bg-[#7B2CBF]/15 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium text-neutral-900 dark:text-white tracking-tight mb-6">
                Ready to elevate your business?
            </h2>
<p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Your business deserves a website that looks credible, converts visitors, and builds trust from the first second. We design websites that help businesses stand out and turn attention into action.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="brand-gradient-bg brand-gradient-hover text-white transition-all duration-300 px-8 py-4 rounded-md text-base font-medium inline-flex items-center justify-center gap-2 w-full sm:w-auto shadow-lg">
                    Book a Free Consultation
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<p className="mt-6 text-sm text-neutral-400 dark:text-neutral-500 font-normal">No commitment required. Let's discuss your goals.</p>
</div>
</section>

<footer className="bg-white dark:bg-[#0A0A0A] border-t border-neutral-200 dark:border-neutral-800 px-6 py-8 transition-colors duration-300">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-2 h-6">
<img alt="Agency Logo" className="logo-img shrink-0 w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/416e04ba-682d-45b6-bbc5-d924f71524fd_320w.png"/>
<span className="text-sm font-medium text-neutral-900 dark:text-white tracking-tight leading-none mt-0.5" style={{fontFamily: '\'Space Grotesk\', sans-serif'}}>SOVARYN</span>
</div>
<span className="text-[9px] font-medium tracking-tight text-[#000000] dark:text-[#FFFFFF] uppercase">Turning Clicks into Clients</span>
</div>
<div className="text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">© 2026 Sovaryn Agency. All rights reserved.</div>
<div className="flex items-center gap-6 text-[11px] font-normal text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
<a className="hover:text-brand-link transition-colors" href="#">Privacy</a>
<a className="hover:text-brand-link transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
