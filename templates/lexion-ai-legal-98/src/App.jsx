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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            strokeWidth: 1.5
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#fafafa]/90 backdrop-blur-md grid-border-b flex flex-col md:flex-row h-auto md:h-20">

<div className="flex items-center px-6 md:w-64 grid-border-r h-16 md:h-full shrink-0">
<a className="flex items-center gap-3 group" href="#">
<div className="grid grid-cols-2 gap-1">
<div className="w-2.5 h-2.5 bg-black rounded-full group-hover:bg-gray-600 transition-colors"></div>
<div className="w-2.5 h-2.5 bg-black rounded-full group-hover:bg-gray-600 transition-colors"></div>
<div className="w-2.5 h-2.5 bg-black rounded-full group-hover:bg-gray-600 transition-colors"></div>
<div className="w-2.5 h-2.5 bg-black rounded-full group-hover:bg-gray-600 transition-colors"></div>
</div>
<span className="text-base font-semibold tracking-[0.2em] uppercase">Lexion</span>
</a>
</div>

<nav className="hidden md:flex flex-1">
<a className="flex flex-col justify-center px-8 grid-border-r hover:bg-gray-50 transition-colors group" href="#product">
<span className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">01</span>
<span className="text-base font-medium flex items-center gap-2">Product <span className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition-opacity"></span></span>
</a>
<a className="flex flex-col justify-center px-8 grid-border-r hover:bg-gray-50 transition-colors group" href="#use-cases">
<span className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">02</span>
<span className="text-base font-medium">Use Cases</span>
</a>
<a className="flex flex-col justify-center px-8 grid-border-r hover:bg-gray-50 transition-colors group" href="#how-it-works">
<span className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">03</span>
<span className="text-base font-medium">How It Works</span>
</a>
<a className="flex flex-col justify-center px-8 grid-border-r hover:bg-gray-50 transition-colors group" href="#resources">
<span className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">04</span>
<span className="text-base font-medium">Resources</span>
</a>
<a className="flex flex-col justify-center px-8 grid-border-r hover:bg-gray-50 transition-colors group" href="#company">
<span className="text-xs text-gray-400 font-medium group-hover:text-black transition-colors">05</span>
<span className="text-base font-medium">Company</span>
</a>
</nav>

<a className="hidden md:flex items-center justify-between px-8 bg-black text-white hover:bg-gray-900 transition-colors shrink-0 w-64 group" href="#demo">
<span className="text-base font-medium">Book a Demo</span>
<i className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>
</header>
<main className="pt-20">

<section className="flex flex-col lg:flex-row min-h-[calc(100vh-5rem)] grid-border-b relative">

<div className="lg:w-1/2 p-8 lg:p-16 xl:p-24 grid-border-r flex flex-col justify-center relative z-10 bg-[#fafafa]">
<div className="max-w-xl">
<div className="flex items-center gap-3 mb-8">
<div className="w-2 h-2 bg-black"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Multi-Agent Research Automation</span>
</div>
<h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05] mb-8">
                        The legal research <br/>team of the future. <br/>
<span className="text-gray-400">Powered by agents.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-12 max-w-md">
                        Lexion deploys specialized AI agents that collaborate to research, analyze and deliver precise legal insights—so your team can focus on strategy, not searches.
                    </p>
<div className="flex flex-col sm:flex-row border border-gray-200 bg-white inline-flex">
<a className="flex items-center justify-between px-8 py-5 bg-black text-white hover:bg-gray-900 transition-colors group min-w-[200px]" href="#demo">
<span className="text-base font-medium">Book a Demo</span>
<i className="w-5 h-5 text-green-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</a>
<a className="flex items-center gap-4 px-8 py-5 bg-white text-black hover:bg-gray-50 transition-colors group" href="#video">
<span className="text-base font-medium">See How It Works</span>
<div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-black transition-colors">
<i className="w-3 h-3 ml-0.5 fill-current" data-lucide="play"></i>
</div>
</a>
</div>
</div>
</div>

<div className="lg:w-1/2 relative bg-white overflow-hidden min-h-[500px] lg:min-h-full flex items-center justify-center p-8">

<div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<path className="dash-line" d="M 20% 40% Q 50% 10% 80% 30%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 80% 30% Q 90% 60% 70% 80%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 70% 80% Q 30% 90% 20% 60%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 20% 60% Q 10% 30% 20% 40%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>

<path className="dash-line" d="M 20% 40% L 50% 50%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 80% 30% L 50% 50%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 70% 80% L 50% 50%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
<path className="dash-line" d="M 20% 60% L 50% 50%" fill="none" stroke="#e5e7eb" strokeWidth="1.5"></path>
</svg>

<div className="iso-container z-10">
<div className="iso-stack hover-lift">
<div className="iso-layer iso-shadow"></div>
<div className="iso-layer iso-bottom"></div>
<div className="iso-layer iso-middle"></div>
<div className="iso-layer iso-dark"></div>
<div className="iso-layer iso-top">
<div className="grid grid-cols-2 gap-2 transform -rotate-z-45">
<div className="w-5 h-5 bg-black rounded-full"></div>
<div className="w-5 h-5 bg-black rounded-full"></div>
<div className="w-5 h-5 bg-black rounded-full"></div>
<div className="w-5 h-5 bg-black rounded-full"></div>
</div>
</div>
</div>
</div>


<div className="absolute top-[35%] left-[15%] z-20 flex flex-col items-center gap-2 hover-lift cursor-default group">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold tracking-tight">Statute</div>
<div className="text-sm font-semibold tracking-tight text-gray-500">Agent</div>
<div className="flex gap-1 justify-center mt-1">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-[20%] right-[30%] z-20 flex flex-col items-center gap-2 hover-lift cursor-default group">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold tracking-tight">Case Law</div>
<div className="text-sm font-semibold tracking-tight text-gray-500">Agent</div>
<div className="flex gap-1 justify-center mt-1">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-[45%] right-[15%] z-20 flex flex-col items-center gap-2 hover-lift cursor-default group">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold tracking-tight">Analysis</div>
<div className="text-sm font-semibold tracking-tight text-gray-500">Agent</div>
<div className="flex gap-1 justify-center mt-1">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-[25%] right-[25%] z-20 flex flex-col items-center gap-2 hover-lift cursor-default group">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold tracking-tight">Drafting</div>
<div className="text-sm font-semibold tracking-tight text-gray-500">Agent</div>
<div className="flex gap-1 justify-center mt-1">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute bottom-[30%] left-[20%] z-20 flex flex-col items-center gap-2 hover-lift cursor-default group">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white ring-4 ring-white shadow-lg">
<i className="w-5 h-5" data-lucide="library"></i>
</div>
<div className="text-center">
<div className="text-sm font-semibold tracking-tight">Precedent</div>
<div className="text-sm font-semibold tracking-tight text-gray-500">Agent</div>
<div className="flex gap-1 justify-center mt-1">
<div className="w-1 h-1 bg-green-400 rounded-full"></div>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
<div className="w-1 h-1 bg-gray-300 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute top-8 right-8 border border-gray-200 bg-white p-2 flex items-center justify-center shadow-sm">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
</div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-1 items-end opacity-50">
<span className="text-[10px] tracking-widest font-mono rotate-90 transform origin-right">LRLTII-A68IIH</span>
<span className="text-[10px] tracking-widest font-mono rotate-90 transform origin-right mt-16 text-gray-400">MULTI-AGENT INITIATED</span>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row grid-border-b bg-white">

<div className="lg:w-1/2 p-8 lg:p-12 grid-border-r flex flex-col justify-center">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-8">Trusted by leading law firms</span>
<div className="flex flex-wrap gap-10 items-center opacity-70 grayscale">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<i className="w-6 h-6 fill-black" data-lucide="triangle"></i> AURORA <span className="text-[10px] uppercase font-normal tracking-widest mt-1">Law</span>
</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<span className="text-2xl font-serif">W</span> WEXLER <span className="text-[10px] uppercase font-normal tracking-widest mt-1">Partners</span>
</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<div className="w-6 h-6 border-2 border-black flex items-center justify-center font-bold">H</div> HADLEY <span className="text-[10px] uppercase font-normal tracking-widest mt-1">&amp; Co.</span>
</div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
<span className="text-2xl italic">N</span> NORTHGATE <span className="text-[10px] uppercase font-normal tracking-widest mt-1">Legal</span>
</div>
</div>
</div>

<div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 bg-[#fafafa]">
<div className="p-8 lg:p-12 grid-border-r grid-border-b md:grid-border-b-0 flex flex-col justify-between group cursor-default">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">Research Acceleration</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight">10x</span>
<i className="w-8 h-8 text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="p-8 lg:p-12 grid-border-r grid-border-b md:grid-border-b-0 flex flex-col justify-between group cursor-default">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">Hours Saved Weekly</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight">40+</span>
<i className="w-8 h-8 text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="p-8 lg:p-12 flex flex-col justify-between group cursor-default">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-6">Accuracy You Can Rely On</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-medium tracking-tight">99%</span>
<i className="w-8 h-8 text-green-400 opacity-50 group-hover:opacity-100 transition-opacity" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</section>

<section className="grid-border-b bg-[#fafafa]" id="product">
<div className="p-8 lg:px-16 lg:py-24 grid-border-b bg-white">
<div className="max-w-3xl">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-4">Orchestrated Intelligence</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Meet your new specialized research department.</h2>
<p className="text-xl text-gray-600">Unlike general-purpose LLMs, Lexion uses a swarm of narrowly focused agents. They divide complex legal questions, research independently, and synthesize findings into actionable memorandums.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

<div className="p-8 lg:p-12 grid-border-r grid-border-b lg:grid-border-b-0 bg-white hover:bg-gray-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white mb-8">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Case Law Agent</h3>
<p className="text-lg text-gray-600">Scours millions of federal and state rulings in seconds. Identifies controlling authority and distinguishing facts with high precision.</p>
</div>

<div className="p-8 lg:p-12 grid-border-r grid-border-b lg:grid-border-b-0 bg-white hover:bg-gray-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white mb-8">
<i className="w-6 h-6" data-lucide="file-text"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Statute Agent</h3>
<p className="text-lg text-gray-600">Monitors legislative updates and parses complex statutory language to ensure your arguments are anchored in current law.</p>
</div>

<div className="p-8 lg:p-12 grid-border-r grid-border-b md:grid-border-b-0 bg-white hover:bg-gray-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white mb-8">
<i className="w-6 h-6" data-lucide="library"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Precedent Agent</h3>
<p className="text-lg text-gray-600">Connects securely to your firm's internal DMS. Surfaces past briefs and memos to leverage your institutional knowledge.</p>
</div>

<div className="p-8 lg:p-12 bg-white hover:bg-gray-50 transition-colors cursor-default">
<div className="w-12 h-12 bg-black rounded flex items-center justify-center text-white mb-8">
<i className="w-6 h-6" data-lucide="network"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">Synthesis Agent</h3>
<p className="text-lg text-gray-600">The orchestrator. Reviews findings from all other agents, resolves conflicts, and drafts cohesive, citation-ready analysis.</p>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row grid-border-b bg-white" id="how-it-works">
<div className="lg:w-1/2 p-8 lg:p-16 xl:p-24 grid-border-r flex flex-col">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-4">The Process</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-12">From query to draft in minutes, not days.</h2>
<div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-gray-200">

<div className="relative pl-10 group cursor-pointer">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold ring-4 ring-white">1</div>
<h4 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-green-600 transition-colors">Input Natural Language Query</h4>
<p className="text-lg text-gray-600">Describe your legal issue, jurisdiction, and desired output format just as you would to a junior associate.</p>
</div>

<div className="relative pl-10 group cursor-pointer">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold ring-4 ring-white group-hover:bg-black group-hover:text-white transition-colors">2</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Agent Delegation</h4>
<p className="text-lg text-gray-600">Lexion automatically breaks the query into sub-tasks and assigns them to the appropriate specialized agents.</p>
</div>

<div className="relative pl-10 group cursor-pointer">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold ring-4 ring-white group-hover:bg-black group-hover:text-white transition-colors">3</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Parallel Research &amp; Verification</h4>
<p className="text-lg text-gray-600">Agents retrieve sources, extract key arguments, and perform self-correction loops to ensure hallucination-free results.</p>
</div>

<div className="relative pl-10 group cursor-pointer">
<div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs font-bold ring-4 ring-white group-hover:bg-black group-hover:text-white transition-colors">4</div>
<h4 className="text-xl font-semibold tracking-tight mb-2">Final Output Generation</h4>
<p className="text-lg text-gray-600">Receive a structured memo with hyperlinked citations, ready for human review and refinement.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 bg-[#fafafa] p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">

<div className="w-full max-w-lg bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden relative z-10">
<div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="mx-auto text-xs font-medium text-gray-400">Query: Non-compete enforceability CA 2024</div>
</div>
<div className="p-6 space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center shrink-0 text-gray-500"><i className="w-4 h-4" data-lucide="user"></i></div>
<div className="bg-gray-100 rounded-lg rounded-tl-none p-3 text-base text-gray-700">What is the current standard for enforcing non-compete clauses for mid-level executives in California after the recent 2024 legislative changes?</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-black flex items-center justify-center shrink-0 text-white"><i className="w-4 h-4" data-lucide="cpu"></i></div>
<div className="w-full space-y-3">
<div className="flex items-center gap-2 text-sm text-gray-500">
<i className="w-3 h-3 animate-spin" data-lucide="loader"></i> Deploying agents...
                                </div>
<div className="border border-gray-200 rounded p-3 text-sm font-mono text-gray-600 bg-gray-50 space-y-1">
<div>&gt; Task 1: Statute Agent analyzing CA SB 699</div>
<div className="text-green-600">&gt; Task 1 Complete. Found sweeping prohibitions.</div>
<div>&gt; Task 2: Case Law Agent searching 2024 appellate rulings</div>
<div className="animate-pulse">&gt; Task 2 In Progress...</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-5">
<i className="w-96 h-96" data-lucide="workflow"></i>
</div>
</div>
</section>

<section className="bg-gray-950 text-white grid-border-b border-gray-800">
<div className="p-8 lg:p-24 text-center max-w-4xl mx-auto">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-8">Transform your cost center into a competitive advantage.</h2>
<p className="text-xl text-gray-400 mb-16">Firms using Lexion report massive reductions in unbillable research hours, allowing them to take on more complex cases and improve realization rates.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
<div className="border border-gray-800 bg-gray-900/50 p-8 rounded-lg hover:border-gray-700 transition-colors">
<i className="w-8 h-8 text-green-400 mb-6" data-lucide="trending-down"></i>
<div className="text-4xl font-semibold tracking-tight mb-2">75%</div>
<div className="text-lg text-gray-400">Reduction in initial drafting time.</div>
</div>
<div className="border border-gray-800 bg-gray-900/50 p-8 rounded-lg hover:border-gray-700 transition-colors">
<i className="w-8 h-8 text-green-400 mb-6" data-lucide="target"></i>
<div className="text-4xl font-semibold tracking-tight mb-2">Zero</div>
<div className="text-lg text-gray-400">Hallucinations in cited case law.</div>
</div>
<div className="border border-gray-800 bg-gray-900/50 p-8 rounded-lg hover:border-gray-700 transition-colors">
<i className="w-8 h-8 text-green-400 mb-6" data-lucide="clock"></i>
<div className="text-4xl font-semibold tracking-tight mb-2">24/7</div>
<div className="text-lg text-gray-400">Availability for urgent research.</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row grid-border-b bg-white" id="use-cases">
<div className="lg:w-1/3 p-8 lg:p-16 grid-border-r bg-[#fafafa]">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-4">Practice Areas</span>
<h2 className="text-3xl font-semibold tracking-tight mb-8">Built for complexity.</h2>
<div className="space-y-2">

<div className="p-4 bg-white border border-gray-200 shadow-sm cursor-pointer flex justify-between items-center group">
<span className="text-lg font-medium">Commercial Litigation</span>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-right"></i>
</div>

<div className="p-4 border border-transparent hover:border-gray-200 cursor-pointer flex justify-between items-center group transition-colors">
<span className="text-lg text-gray-500 group-hover:text-black font-medium">Mergers &amp; Acquisitions</span>
</div>
<div className="p-4 border border-transparent hover:border-gray-200 cursor-pointer flex justify-between items-center group transition-colors">
<span className="text-lg text-gray-500 group-hover:text-black font-medium">Regulatory Compliance</span>
</div>
<div className="p-4 border border-transparent hover:border-gray-200 cursor-pointer flex justify-between items-center group transition-colors">
<span className="text-lg text-gray-500 group-hover:text-black font-medium">Employment Law</span>
</div>
</div>
</div>
<div className="lg:w-2/3 p-8 lg:p-16 xl:p-24 bg-white flex flex-col justify-center">
<div className="mb-8 inline-block px-3 py-1 bg-gray-100 text-sm font-medium rounded-full">Commercial Litigation Example</div>
<h3 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">Instantly identify jurisdictional splits and controlling precedent.</h3>
<p className="text-xl text-gray-600 mb-10 max-w-2xl">When facing a novel motion to dismiss, Lexion agents can parallel-process thousands of district court rulings overnight, surfacing the exact arguments that have succeeded or failed in similar fact patterns.</p>
<div className="border border-gray-200 bg-[#fafafa] p-6 rounded-lg font-mono text-sm text-gray-700 max-w-2xl relative">
<div className="absolute top-4 right-4 text-green-600 flex items-center gap-1"><i className="w-4 h-4" data-lucide="check-circle"></i> Verified Citation</div>
<p className="mb-4 text-gray-500">...the prevailing standard in the Second Circuit requires a showing of specific intent, contrary to plaintiff's assertion.</p>
<div className="pl-4 border-l-2 border-black">
<strong>See:</strong> <em>Smith v. Example Corp.</em>, 987 F.3d 123, 135 (2d Cir. 2021) (holding that generic allegations of negligence are insufficient to pierce the corporate veil under NY law).
                    </div>
</div>
</div>
</section>

<section className="grid-border-b bg-[#fafafa] py-24 overflow-hidden">
<div className="text-center max-w-2xl mx-auto px-8 mb-16">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-4">Ecosystem</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">Connects seamlessly with your existing stack.</h2>
</div>

<div className="flex gap-8 px-8 justify-center flex-wrap max-w-5xl mx-auto opacity-60 grayscale">
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="cloud"></i> OneDrive</div>
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="box"></i> Dropbox</div>
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="briefcase"></i> Clio</div>
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="file-signature"></i> DocuSign</div>
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="database"></i> SharePoint</div>
<div className="h-16 px-8 bg-white border border-gray-200 flex items-center justify-center gap-2 text-xl font-bold tracking-tight shadow-sm"><i className="w-6 h-6" data-lucide="search"></i> Westlaw API</div>
</div>
</section>

<section className="flex flex-col lg:flex-row grid-border-b bg-white">
<div className="lg:w-1/2 p-8 lg:p-16 xl:p-24 grid-border-r flex flex-col justify-center">
<span className="text-xs font-semibold tracking-widest uppercase text-gray-500 block mb-4">Enterprise Security</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">Your data remains your data. Always.</h2>
<p className="text-xl text-gray-600 mb-8">We built Lexion with the strict confidentiality requirements of the legal profession in mind. We employ zero-retention architecture for all LLM queries.</p>
<a className="text-base font-medium flex items-center gap-2 hover:text-gray-600 transition-colors" href="#">Read our security whitepaper <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
<div className="lg:w-1/2 p-8 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-[#fafafa]">
<div>
<i className="w-8 h-8 mb-4" data-lucide="shield-check"></i>
<h4 className="text-lg font-semibold mb-2">SOC 2 Type II Certified</h4>
<p className="text-base text-gray-600">Independently audited for security, availability, and confidentiality.</p>
</div>
<div>
<i className="w-8 h-8 mb-4" data-lucide="lock"></i>
<h4 className="text-lg font-semibold mb-2">End-to-End Encryption</h4>
<p className="text-base text-gray-600">Data is encrypted at rest (AES-256) and in transit (TLS 1.3).</p>
</div>
<div>
<i className="w-8 h-8 mb-4" data-lucide="server-off"></i>
<h4 className="text-lg font-semibold mb-2">Zero Data Training</h4>
<p className="text-base text-gray-600">Your queries and documents are never used to train our models.</p>
</div>
<div>
<i className="w-8 h-8 mb-4" data-lucide="users"></i>
<h4 className="text-lg font-semibold mb-2">Granular Access Control</h4>
<p className="text-base text-gray-600">SSO integration and ethical wall support out of the box.</p>
</div>
</div>
</section>

<section className="grid-border-b bg-white py-24 px-8">
<div className="max-w-4xl mx-auto text-center">
<i className="w-12 h-12 mx-auto text-gray-200 mb-8" data-lucide="quote"></i>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight leading-tight mb-12">"Lexion didn't just speed up our research; it fundamentally changed how we approach case strategy. The agents uncover nuanced connections across jurisdictions that a human team simply wouldn't have the time to find."</h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">ES</div>
<div className="text-left">
<div className="text-lg font-semibold">Eleanor Vance</div>
<div className="text-sm text-gray-500">Managing Partner, Vance &amp; Hayes LLP</div>
</div>
</div>
</div>
</section>

<section className="bg-black text-white text-center py-32 px-8">
<div className="max-w-3xl mx-auto flex flex-col items-center">
<div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
<div className="grid grid-cols-2 gap-1.5">
<div className="w-3 h-3 bg-white rounded-full"></div>
<div className="w-3 h-3 bg-white rounded-full"></div>
<div className="w-3 h-3 bg-white rounded-full"></div>
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
<h2 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-8">Ready to deploy your agents?</h2>
<p className="text-xl text-gray-400 mb-12">Join the leading firms using Lexion to gain an insurmountable edge.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-white text-black text-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" href="#demo">
                        Book a Demo <i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</a>
<a className="px-8 py-4 border border-gray-700 text-white text-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center" href="#pricing">
                        View Pricing
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-16 pb-8 px-8 lg:px-16 border-t border-gray-200 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<div className="grid grid-cols-2 gap-0.5">
<div className="w-2 h-2 bg-black rounded-full"></div>
<div className="w-2 h-2 bg-black rounded-full"></div>
<div className="w-2 h-2 bg-black rounded-full"></div>
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-base font-semibold tracking-widest uppercase">Lexion</span>
</a>
<p className="text-gray-500 mb-6">The legal research team of the future. Powered by multi-agent AI.</p>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight">Product</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Agents</a></li>
<li><a className="hover:text-black transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-black transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-black transition-colors" href="#">Security</a></li>
<li><a className="hover:text-black transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight">Use Cases</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Litigation</a></li>
<li><a className="hover:text-black transition-colors" href="#">Corporate</a></li>
<li><a className="hover:text-black transition-colors" href="#">Compliance</a></li>
<li><a className="hover:text-black transition-colors" href="#">IP Law</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-black transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-black transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-black transition-colors" href="#">Webinars</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-black transition-colors" href="#">About</a></li>
<li><a className="hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-black transition-colors" href="#">Press</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-gray-400">
<p>© 2024 Lexion AI Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="hover:text-black transition-colors" href="#">Cookie settings</a>
</div>
</div>
</footer>



    </>
  );
}
