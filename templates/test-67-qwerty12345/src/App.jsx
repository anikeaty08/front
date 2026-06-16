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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="" fill="none" height="24" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
<span className="text-sm font-semibold tracking-tight uppercase text-white">HexOS <span className="text-xs text-gray-500 font-normal normal-case ml-1">v2.2</span></span>
</div>
<div className="flex gap-6 text-xs font-medium tracking-tight text-gray-400">
<a className="hover:text-white transition-colors" href="#">Iconography</a>
<a className="hover:text-white transition-colors" href="#">Data Viz</a>
<a className="hover:text-white transition-colors" href="#">Interactions</a>
</div>
</div>
</nav>
<main className="max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 space-y-24">

<header className="max-w-2xl space-y-6">
<h1 className="text-4xl font-medium tracking-tight text-white">Hexagonal Visual Language</h1>
<p className="leading-relaxed text-lg font-light text-gray-400">
                A geometry-first design system replacing circular primitives with hexagonal structures. 
                Optimized for high-density dashboards with a strict <span className="text-white font-medium">Dark Mode</span> and <span className="bg-[#E0FF00] text-black px-1 rounded-sm">#E0FF00</span> palette.
            </p>
</header>

<section className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="text-xl font-medium tracking-tight text-white">System Icons <span className="text-gray-500 text-sm ml-2 font-normal">24px Grid / 1.5px Stroke</span></h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 12L12 2" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 12L20.66 7" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 12L3.34 7" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Dashboard</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 22V12" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M18 18V8" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M6 18V14" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="opacity-20 group-hover:opacity-40 transition-opacity" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Analytics</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 2L3 7V13C3 17.5 7.5 21.5 12 22C16.5 21.5 21 17.5 21 13V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 8V12" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<circle className="group-hover:fill-[#E0FF00] transition-colors duration-300" cx="12" cy="15" fill="#FFFFFF" r="1"></circle>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Security</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 8L15.46 10L15.46 14L12 16L8.54 14L8.54 10L12 8Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 2L12 5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 19L12 22" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M20.66 7L18.06 8.5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M5.94 15.5L3.34 17" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M20.66 17L18.06 15.5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M5.94 8.5L3.34 7" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Config</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M12 4L14.6 5.5V8.5L12 10L9.4 8.5V5.5L12 4Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M4 20C4 16 8 13 12 13C16 13 20 16 20 20" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Profile</span>
</div>

<div className="flex flex-col items-center gap-3 group">
<div className="w-12 h-12 flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:scale-110">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M7 19H17" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M17 19L20 17V12L17 10" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M7 19L4 17V12L7 10" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00] transition-colors duration-300" d="M7 10L9 6H15L17 10" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500 group-hover:text-white transition-colors">Storage</span>
</div>
</div>
</section>

<section className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="text-xl font-medium tracking-tight text-white">Utility <span className="text-gray-500 text-sm ml-2 font-normal">Action &amp; Navigation</span></h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M8 12L5 13.5V16.5L8 18L11 16.5V13.5L8 12Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M18 6L15 7.5V10.5L18 12L21 10.5V7.5L18 6Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M18 16L15 17.5V20.5L18 22L21 20.5V17.5L18 16Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M11 15L15 18" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M11 13.5L15 10.5" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Share</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M4 14V17L12 21L20 17V14" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M12 3V15M12 15L16 11M12 15L8 11" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Download</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M4 17V17L12 21L20 17V17" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M12 15V3M12 3L16 7M12 3L8 7" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Upload</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M8 7H16V12H8V7Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Save</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="opacity-20 group-hover:opacity-40" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M15 9L21 3M21 3H16M21 3V8" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M9 15L3 21M3 21H8M3 21V16" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Expand</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="opacity-20 group-hover:opacity-40" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M19 5L13 11M13 11H18M13 11V6" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M5 19L11 13M11 13H6M11 13V18" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Minimize</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M14 4L20 7.5V14.5L14 18" stroke="#FFFFFF" stroke-dasharray="2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M10 6L4 9.5V16.5L10 20L16 16.5V9.5L10 6Z" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Copy</span>
</div>

<div className="flex flex-col items-center gap-3">
<div className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer group">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<path className="group-hover:stroke-[#E0FF00]" d="M10 13L7 14.5L4 13V9L7 7.5L10 9" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M14 11L17 9.5L20 11V15L17 16.5L14 15" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="group-hover:stroke-[#E0FF00]" d="M8 11L16 13" stroke="#FFFFFF" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-xs text-gray-500">Link</span>
</div>
</div>
</section>


<section className="">
<div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="text-xl font-medium tracking-tight text-white">Data Visualization <span className="text-gray-500 text-sm ml-2 font-normal">Hexagonal SVG Charts</span></h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 border border-white/5 rounded-2xl bg-[#0F0F0F] shadow-sm hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-6 text-gray-200">Storage Usage</h3>
<div className="relative w-48 h-48 mx-auto">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">
<path d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80 L6.7 30 Z" fill="none" stroke="#1F1F1F" strokeLinejoin="round" strokeWidth="8" transform="translate(0, -5) scale(0.9) translate(5.5, 5.5)"></path>
<path d="M50 5 L93.3 30 L93.3 80 L50 105 L6.7 80" fill="none" stroke="#E0FF00" stroke-dasharray="250" stroke-dashoffset="50" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" transform="translate(0, -5) scale(0.9) translate(5.5, 5.5)"></path>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-semibold tracking-tighter text-white">75%</span>
<span className="text-xs text-gray-500 uppercase tracking-wide">Used</span>
</div>
</div>
</div>

<div className="p-6 border border-white/5 rounded-2xl bg-[#0F0F0F] shadow-sm hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-6 text-gray-200">Performance Metrics</h3>
<div className="relative w-48 h-48 mx-auto flex items-center justify-center">
<svg className="w-full h-full" viewbox="0 0 100 100">

<path className="" d="M50 10L85 30V70L50 90L15 70V30L50 10Z" fill="none" stroke="#333" strokeWidth="1"></path>
<path d="M50 25L72 37.5V62.5L50 75L28 62.5V37.5L50 25Z" fill="none" stroke="#333" strokeWidth="1"></path>
<path d="M50 40L58 45V55L50 60L42 55V45L50 40Z" fill="none" stroke="#333" strokeWidth="1"></path>

<path className="" d="M50 15 L78 35 L72 65 L50 80 L20 65 L28 35 Z" fill="#E0FF00" fillOpacity="0.1" stroke="#E0FF00" strokeLinejoin="round" strokeWidth="1.5"></path>

<rect fill="#FFFFFF" height="4" width="4" x="48" y="13"></rect>
<rect fill="#FFFFFF" height="4" width="4" x="76" y="33"></rect>
<rect fill="#FFFFFF" height="4" width="4" x="70" y="63"></rect>
<rect fill="#FFFFFF" height="4" width="4" x="48" y="78"></rect>
<rect fill="#FFFFFF" height="4" width="4" x="18" y="63"></rect>
<rect fill="#FFFFFF" height="4" width="4" x="26" y="33"></rect>
</svg>
</div>
</div>

<div className="p-6 border border-white/5 rounded-2xl bg-[#0F0F0F] shadow-sm hover:border-white/10 transition-colors">
<h3 className="text-sm font-medium mb-6 text-gray-200">Traffic Trend</h3>
<div className="relative w-full h-48 flex items-center justify-center">
<svg className="w-full h-full" viewbox="0 0 200 100">
<line stroke="#333" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="20" y2="20"></line>
<line stroke="#333" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="50" y2="50"></line>
<line className="" stroke="#333" stroke-dasharray="4" strokeWidth="1" x1="0" x2="200" y1="80" y2="80"></line>
<polyline className="" fill="none" points="10,80 50,50 90,60 130,20 180,30" stroke="#FFFFFF" strokeLinejoin="round" strokeWidth="1.5"></polyline>
<path d="M0 -3 L2.6 -1.5 V1.5 L0 3 L-2.6 1.5 V-1.5 Z" fill="#0F0F0F" stroke="#FFFFFF" strokeWidth="1.5" transform="translate(10, 80)"></path>
<path d="M0 -3 L2.6 -1.5 V1.5 L0 3 L-2.6 1.5 V-1.5 Z" fill="#0F0F0F" stroke="#FFFFFF" strokeWidth="1.5" transform="translate(50, 50)"></path>
<path d="M0 -3 L2.6 -1.5 V1.5 L0 3 L-2.6 1.5 V-1.5 Z" fill="#0F0F0F" stroke="#FFFFFF" strokeWidth="1.5" transform="translate(90, 60)"></path>
<g transform="translate(130, 20)">
<path d="M0 -5 L4.3 -2.5 V2.5 L0 5 L-4.3 2.5 V-2.5 Z" fill="#E0FF00" stroke="#E0FF00" strokeWidth="1.5"></path>
</g>
<path d="M0 -3 L2.6 -1.5 V1.5 L0 3 L-2.6 1.5 V-1.5 Z" fill="#0F0F0F" stroke="#FFFFFF" strokeWidth="1.5" transform="translate(180, 30)"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="flex border-white/10 border-b mb-8 pb-4 items-center justify-between">
<h2 className="text-xl font-medium tracking-tight text-white">Pattern &amp; Structure</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-white/5 border-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-8 items-start justify-items-center">

<div className="col-span-full w-full border-b border-white/10 pb-2 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#E0FF00] rounded-full"></div>
<h3 className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">System_Loading</h3>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<svg className="animate-spin-slow w-[48px] h-[48px]" fill="none" height="48" strokeWidth="2" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path className="animate-pulse" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#E0FF00" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[10px] uppercase text-gray-500 tracking-wider">Spin Pulse</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="absolute inset-0 animate-ping opacity-75" fill="none" viewbox="0 0 24 24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#E0FF00" strokeWidth="1"></path>
</svg>
<svg className="relative z-10" fill="none" height="100%" viewbox="0 0 24 24" width="100%">
<path className="" d="M12 5L18 8.5V15.5L12 19L6 15.5V8.5L12 5Z" fill="#E0FF00"></path>
</svg>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Pulse</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="flex h-12 gap-2 items-center">
<div className="w-8 h-8 bg-[#333] animate-[bounce_1s_infinite_0ms]" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="w-8 h-8 bg-[#666] animate-[bounce_1s_infinite_100ms]" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="w-8 h-8 bg-[#E0FF00] animate-[bounce_1s_infinite_200ms]" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Wave</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12">
<svg className="w-full h-full -rotate-90" fill="none" viewbox="0 0 24 24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#333" strokeWidth="1.5"></path>
<path className="animate-[dash-draw_2s_linear_infinite]" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#E0FF00" stroke-dasharray="60" stroke-dashoffset="60" strokeWidth="1.5"></path>
</svg>
<span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-white">50%</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Progress</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#333" strokeWidth="1.5"></path>
</svg>
<div className="absolute inset-0 flex items-center justify-center animate-[bounce_1.5s_infinite]">
<svg fill="none" height="14" viewbox="0 0 24 24" width="14">
<path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#E0FF00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Upload</span>
</div>

<div className="col-span-full w-full border-b border-white/10 pb-2 mb-2 mt-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
<h3 className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Interface_Feedback</h3>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<button className="group relative w-12 h-12 flex items-center justify-center focus:outline-none">
<svg className="w-full h-full transition-all duration-300" fill="none" viewbox="0 0 24 24">
<path className="group-hover:stroke-[#E0FF00] transition-colors" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#555" strokeWidth="1.5"></path>
</svg>
<div className="absolute inset-0 bg-[#E0FF00] opacity-0 group-hover:opacity-10 transition-opacity" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Hover</span>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<label className="group relative w-12 h-12 flex items-center justify-center cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<svg className="w-[48px] h-[48px] transition-all duration-300 peer-checked:[&amp;&gt;path]:fill-[#E0FF00] peer-checked:[&amp;&gt;path]:stroke-[#E0FF00]" fill="none" strokeWidth="2" viewbox="0 0 24 24">
<path className="transition-all duration-300" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#555" strokeWidth="1.5"></path>
</svg>
<svg className="absolute w-5 h-5 text-[#050505] opacity-0 scale-50 transition-all duration-300 peer-checked:opacity-100 peer-checked:scale-100" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</label>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Select</span>
</div>

<div className="flex flex-col items-center gap-4">
<button className="group flex active:scale-95 transition-transform w-12 h-12 relative items-center justify-center">

<svg className="absolute inset-0 w-full h-full" fill="none" viewbox="0 0 24 24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</svg>
<span className="text-[8px] font-mono group-active:text-[#E0FF00] relative z-10">CLK</span>

<div className="absolute inset-0 opacity-0 active:animate-[ripple-out_0.5s_ease-out]" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)', border: '1px solid #E0FF00'}}></div>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Ripple</span>
</div>

<div className="flex flex-col items-center gap-4">
<label className="relative w-12 h-12 flex items-center justify-center cursor-pointer group">
<input className="peer hidden" type="checkbox"/>

<svg className="absolute inset-0 w-full h-full text-white/5 peer-checked:text-white/10 transition-colors" fill="none" viewbox="0 0 24 24">
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="currentColor" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</svg>
<svg className="w-5 h-5 text-gray-400 transition-transform duration-300 peer-checked:rotate-180 peer-checked:text-[#E0FF00] relative z-10" fill="none" viewbox="0 0 24 24">
<path d="M6 9L12 15L18 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</label>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Expand</span>
</div>

<div className="flex flex-col items-center gap-4">
<label className="relative w-16 h-8 flex items-center cursor-pointer">
<input className="peer hidden" type="checkbox"/>
<div aria-hidden="true" className="relative w-full h-full z-50 group peer-checked:[&amp;_.track]:bg-[#E0FF00] peer-checked:[&amp;_.track]:border-[#E0FF00] peer-checked:[&amp;_.track]:drop-shadow-[0_0_8px_rgba(224,255,0,0.5)] peer-checked:[&amp;_.thumb]:translate-x-8 peer-checked:[&amp;_.thumb]:bg-[#1B2124] peer-checked:[&amp;_.thumb]:rotate-[30deg]">

<div className="track absolute inset-0 bg-[#1B2124] border border-white/10 transition-all duration-300 ease-out shadow-inner" style={{clipPath: 'polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px)'}}></div>

<div className="thumb transition-all duration-300 ease-out will-change-transform bg-white w-6 h-6 absolute top-1 left-1 drop-shadow-sm active:scale-95" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}></div>
</div>
<div className="absolute left-1 w-6 h-6 bg-gray-500 transition-all duration-300 peer-checked:translate-x-8 peer-checked:bg-[#E0FF00] flex items-center justify-center" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}>
<div className="w-1.5 h-1.5 bg-black rounded-full"></div>
</div>
</label>
<span className="text-[10px] uppercase text-gray-500 tracking-wider">Switch</span>
</div>

<div className="col-span-full w-full border-b border-white/10 pb-2 mb-2 mt-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
<h3 className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">System_Status</h3>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center group cursor-pointer">
<svg className="w-full h-full transition-transform duration-500 group-hover:rotate-[30deg]" fill="none" viewbox="0 0 24 24">
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#10B981"></path>
</svg>
<svg className="absolute w-5 h-5 text-black drop-shadow-sm" fill="none" viewbox="0 0 24 24">
<path className="" d="M20 6L9 17L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Success</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center animate-shake hover:animate-none cursor-pointer">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24">
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#EF4444" strokeWidth="1.5"></path>
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#EF4444" fillOpacity="0.1"></path>
</svg>
<svg className="absolute w-5 h-5" fill="none" viewbox="0 0 24 24">
<path className="" d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Error</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center hover:animate-[spin_0.5s_ease-in-out_1]">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24">
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" stroke="#F59E0B" strokeWidth="1.5"></path>
</svg>
<span className="absolute text-xl font-bold text-[#F59E0B]">!</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Warning</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 flex items-center justify-center">
<svg className="w-full h-full animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" fill="none" viewbox="0 0 24 24">
<path className="" d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" stroke-dasharray="4 2" strokeWidth="1.5"></path>
</svg>
<div className="absolute w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce"></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Pending</span>
</div>

<div className="flex flex-col items-center gap-4 opacity-50 cursor-not-allowed">
<div className="w-12 h-12 flex items-center justify-center grayscale">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#1F2937" stroke="#374151" strokeWidth="1.5"></path>
</svg>
<div className="absolute w-full h-[1.5px] bg-gray-500 rotate-45"></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Disabled</span>
</div>

<div className="col-span-full w-full border-b border-white/10 pb-2 mb-2 mt-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
<h3 className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">Advanced_UX</h3>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center cursor-grab active:cursor-grabbing hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
<svg className="w-full h-full drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]" fill="none" viewbox="0 0 24 24">
<path d="M12 2L20.66 7V17L12 22L3.34 17V7L12 2Z" fill="#222" stroke="#555" strokeWidth="1.5"></path>
</svg>
<div className="absolute flex gap-0.5">
<div className="w-0.5 h-3 bg-gray-500 rounded-full"></div>
<div className="w-0.5 h-3 bg-gray-500 rounded-full"></div>
<div className="w-0.5 h-3 bg-gray-500 rounded-full"></div>
</div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Drag</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="w-12 h-12 bg-gray-800 relative group overflow-hidden cursor-pointer" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}>
<img alt="" className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=100&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-colors">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
</div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Mask</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center group cursor-pointer">
<div className="absolute inset-0 bg-[#333] translate-y-2 opacity-50 group-hover:translate-y-3 transition-transform" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="absolute inset-0 bg-[#444] translate-y-1 opacity-75 group-hover:translate-y-1.5 transition-transform" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="absolute inset-0 bg-[#555] border border-white/10 flex items-center justify-center z-10 hover:-translate-y-0.5 transition-transform" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}>
<span className="text-[10px] font-mono text-white">3</span>
</div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Stack</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="flex items-center -space-x-1">
<div className="w-6 h-6 bg-[#E0FF00] flex items-center justify-center z-20 shadow-lg relative" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}><div className="w-1 h-1 bg-black rounded-full"></div></div>
<div className="w-6 h-6 bg-[#333] flex items-center justify-center z-10 border-l border-white/10 opacity-60" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="w-6 h-6 bg-[#222] flex items-center justify-center z-0 border-l border-white/10 opacity-40" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Trail</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="relative w-12 h-12 flex items-center justify-center group">

<div className="w-4 h-4 bg-[#E0FF00] relative z-10 group-hover:scale-0 transition-transform duration-300" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>

<div className="absolute w-2 h-2 bg-[#E0FF00] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-300" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="absolute w-2 h-2 bg-[#E0FF00] opacity-0 group-hover:opacity-100 group-hover:translate-y-4 transition-all duration-300 delay-75" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="absolute w-2 h-2 bg-[#E0FF00] opacity-0 group-hover:opacity-100 group-hover:-translate-x-4 transition-all duration-300 delay-100" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
<div className="absolute w-2 h-2 bg-[#E0FF00] opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-300 delay-150" style={{clipPath: 'polygon(50% 0%, 93.301% 25%, 93.301% 75%, 50% 100%, 6.699% 75%, 6.699% 25%)'}}></div>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Burst</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 bg-white/5 border-white/5 border pt-8 pr-8 pb-8 pl-8 gap-x-8 gap-y-12 items-start justify-items-center" style={{clipPath: 'polygon(24px 0, 100% 0, 100% calc(100% - 24px), calc(100% - 24px) 100%, 0 100%, 0 24px)'}}>

<div className="col-span-full flex w-full border-white/10 border-b pb-6 items-end justify-between">
<div className="flex flex-col gap-1">
<h2 className="text-xl font-bold tracking-tight text-white uppercase">Geometric CTA System</h2>
<p className="text-xs text-gray-400 font-mono uppercase tracking-wide">Faceted Architecture / v3.0</p>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10" style={{clipPath: 'polygon(8px 0, 100% 0, 100% 100%, 0 100%, 0 8px)'}}>
<div className="w-1.5 h-1.5 bg-[#E0FF00]"></div>
<span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">Production_Ready</span>
</div>
</div>

<div className="col-span-full w-full flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
<div className="w-1 h-1 bg-[#E0FF00]"></div>
<h3 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Conversion_Layer</h3>
</div>

<div className="flex flex-col items-center gap-4">

<button className="group relative px-8 py-3 bg-[#E0FF00] text-black transition-transform duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus:outline-none" style={{clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'}}>
<div className="flex items-center gap-2 font-bold text-xs uppercase tracking-tight">
<span className="">Get Started</span>
<svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24"><path className="" d="M5 12h14M12 5l7 7-7 7"></path></svg>
</div>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Primary Hero</span>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<button className="group relative px-8 py-3 bg-transparent text-white border border-white/20 hover:border-[#E0FF00] hover:text-[#E0FF00] transition-colors duration-200 ease-out focus:outline-none" style={{clipPath: 'polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)'}}>
<span className="font-bold text-xs uppercase tracking-tight">Learn More</span>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Secondary</span>
</div>

<div className="flex flex-col items-center gap-4">
<button className="group relative py-1 flex items-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider hover:text-[#E0FF00] transition-colors focus:outline-none">
<span className="">Explore Features</span>
<div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#E0FF00] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
<svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Tertiary Link</span>
</div>


<div className="col-span-full w-full flex items-center gap-2 border-b border-white/10 pb-2 mb-2 mt-4">
<div className="w-1 h-1 bg-[#E0FF00]"></div>
<h3 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Navigation_Matrix</h3>
</div>

<div className="flex flex-col items-center gap-4">
<a className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors" href="#">
<span className="font-bold text-[10px] uppercase tracking-widest border-b border-transparent group-hover:border-[#E0FF00] pb-0.5 transition-all">Documentation</span>

<div className="w-5 h-5 bg-[#1B2124] border border-white/20 flex items-center justify-center group-hover:border-[#E0FF00] group-hover:bg-[#E0FF00] group-hover:text-black transition-all duration-200" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
<svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path className="" d="M5 12h14M12 5l7 7-7 7"></path></svg>
</div>
</a>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Nav Anchor</span>
</div>

<div className="flex flex-col items-center gap-4">
<div className="flex gap-1">

<button className="w-9 h-9 flex items-center justify-center bg-[#1B2124] border border-white/10 hover:border-[#E0FF00] hover:text-[#E0FF00] active:bg-[#E0FF00]/10 transition-colors focus:outline-none" style={{clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path className="" d="M15 18l-6-6 6-6"></path></svg>
</button>

<button className="w-9 h-9 flex items-center justify-center bg-[#1B2124] border border-white/10 hover:border-[#E0FF00] hover:text-[#E0FF00] active:bg-[#E0FF00]/10 transition-colors focus:outline-none" style={{clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)'}}>
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path className="" d="M9 18l6-6-6-6"></path></svg>
</button>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Pagination</span>
</div>

<div className="flex flex-col gap-4 gap-x-4 gap-y-4 items-center">
<div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500">
<a className="hover:text-[#E0FF00] transition-colors border-b border-transparent hover:border-[#E0FF00]" href="#">Home</a>

<div className="w-1.5 h-1.5 bg-gray-700 transform rotate-45"></div>
<a className="hover:text-[#E0FF00] transition-colors border-b border-transparent hover:border-[#E0FF00]" href="#">Products</a>
<div className="w-1.5 h-1.5 bg-gray-700 transform rotate-45"></div>
<span className="text-white cursor-default">Detail</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Breadcrumb</span>
</div>

<div className="flex flex-col items-center gap-4">

<button className="flex hover:bg-[#E0FF00] hover:text-black hover:border-[#E0FF00] active:scale-95 transition-all duration-200 focus:outline-none text-gray-400 bg-[#1B2124] w-10 h-10 border-white/20 border items-center justify-center" style={{clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'}}>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path className="" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
</button>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Social Hex</span>
</div>

<div className="col-span-full w-full flex items-center gap-2 border-b border-white/10 pb-2 mb-2 mt-4">
<div className="w-1 h-1 bg-[#E0FF00]"></div>
<h3 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Utility_Constructs</h3>
</div>

<div className="flex flex-col items-center gap-4">
<div className="group relative px-2.5 py-1 bg-[#1B2124] border border-[#E0FF00] text-[#E0FF00] hover:bg-[#E0FF00] hover:text-black transition-colors cursor-default" style={{clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}>
<span className="text-[9px] font-bold uppercase tracking-widest">Version_3.0</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Status Badge</span>
</div>


<div className="flex flex-col items-center gap-4 w-full max-w-[150px]">
<div className="group w-full bg-[#1B2124] border border-white/10 p-4 hover:border-[#E0FF00] hover:shadow-[0_0_20px_rgba(224,255,0,0.05)] transition-all duration-200 cursor-pointer" style={{clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)'}}>
<div className="flex justify-between items-start mb-2">
<div className="w-1.5 h-1.5 bg-[#E0FF00]"></div>
<svg className="w-3.5 h-3.5 text-gray-500 group-hover:text-[#E0FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24"><path d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
</div>
<span className="text-[10px] font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-widest">Read Article</span>
</div>
<span className="text-[10px] uppercase tracking-wider text-gray-500 font-mono">Card Action</span>
</div>

</div></section>
</main>
<footer className="border-t border-white/10 py-12 bg-[#0A0A0A]">
<div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
<p>HexOS Design System © 2023</p>
<div className="flex justify-center gap-4 mt-4">
<div className="w-2 h-2 bg-white rounded-full"></div>
<div className="w-2 h-2 bg-gray-700 rounded-full"></div>
<div className="w-2 h-2 bg-[#E0FF00] border border-gray-700 rounded-full"></div>
</div>
</div>
</footer>

    </>
  );
}
