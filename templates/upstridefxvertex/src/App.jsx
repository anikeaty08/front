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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-slate-200/60">
<nav className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<a className="flex items-center gap-2 text-slate-900 hover:opacity-80 transition-opacity" href="#">
<span className="uppercase bg-center text-xl font-semibold text-slate-100/0 tracking-tighter bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81989aec-9928-4c45-bf26-e219d8c250db_320w.jpg)] bg-cover scale-150 perspective-normal">UpstrideFX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-indigo-600 transition-colors" href="#why">Methodology</a>
<a className="hover:text-indigo-600 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-indigo-600 transition-colors" href="#how">How it works</a>
</div>
<a className="hidden sm:inline-flex items-center justify-center text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-2 hover:bg-indigo-100 hover:border-indigo-200 transition-all" href="#join">
                10 Free Spots Only
            </a>
</nav>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden z-0">
<div className="hero-glow"></div>
<div className="grid lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="uppercase tracking-widest text-slate-500">Active members only</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                    Learn Forex Trading<br/>the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-500">Smart Way</span>
</h1>
<p className="text-lg leading-relaxed mb-10 text-slate-500">
                    Master professional technical analysis, institutional risk management, and the psychology required to trade with consistency. Leave retail habits behind.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">



<button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-sm font-medium px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-sm ring-1 ring-slate-900/10" data-tally-auto-close="0" data-tally-emoji-animation="none" data-tally-layout="modal" data-tally-open="aQ6RkE">
  Apply for Free Access
</button>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 text-sm font-medium px-6 py-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-sm" href="#why">
                        View Curriculum
                    </a>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:ml-auto" id="join">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60 px-6" id="why">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:w-2/3 lg:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Why Most Traders Fail</h2>
<p className="text-base leading-relaxed">Retail trading failure rates exceed 90% because of specific psychological and structural barriers that few choose to address.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div className="group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 mb-5 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:checklist-minimalistic-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">No Structured System</h4>
<p className="text-sm leading-relaxed text-slate-500">Operating without a repeatable edge leads to gambling rather than professional speculation.</p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 mb-5 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Poor Risk Management</h4>
<p className="text-sm leading-relaxed text-slate-500">Oversizing and lack of stop-loss discipline is the fastest way to blow a trading account.</p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 mb-5 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-broken-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Emotional Trading</h4>
<p className="text-sm leading-relaxed text-slate-500">Revenge trading and fear of missing out (FOMO) cloud rational decision making.</p>
</div>
<div className="group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 mb-5 group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:shuffle-linear"></iconify-icon>
</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Jumping Strategies</h4>
<p className="text-sm leading-relaxed text-slate-500">Searching for the "holy grail" prevents the development of deep-market expertise.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
<iconify-icon className="text-lg" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="pb-6 border-b border-slate-100 flex-grow">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Methodology</p>
<p className="text-base font-medium text-slate-900 tracking-tight">Institutional Order Flow</p>
<p className="text-sm text-slate-500 mt-1">Read the tape, not the indicators.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
<iconify-icon className="text-lg" icon="solar:safe-square-linear"></iconify-icon>
</div>
<div className="pb-6 border-b border-slate-100 flex-grow">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Protocol</p>
<p className="text-base font-medium text-slate-900 tracking-tight">Dynamic Risk Ratios</p>
<p className="text-sm text-slate-500 mt-1">Mathematical edge over market variance.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-indigo-600 shrink-0 mt-1">
<iconify-icon className="text-lg" icon="solar:ranking-linear"></iconify-icon>
</div>
<div className="flex-grow">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">End Goal</p>
<p className="text-base font-medium text-slate-900 tracking-tight">Long-term Equity Growth</p>
<p className="text-sm text-slate-500 mt-1">Consistent compounding of capital.</p>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">A Structured Path to Profitability</h2>
<p className="text-base leading-relaxed mb-8">
                    UpstrideFX solves the retail trader's dilemma by providing a professional-grade framework. We focus on three pillars: technical precision, disciplined execution, and a proven risk model that protects your capital first.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-indigo-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Rules-based entry and exit protocols to eliminate hesitation.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-indigo-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Comprehensive journals to track performance and psychology.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-indigo-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-700">Scalable trading strategies designed for consistent portfolio growth.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-400 px-6" id="curriculum">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">What You'll Master</h2>
<p className="text-base leading-relaxed">Everything you need to transition from a struggling retail participant to a calculated, professional operator.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">01</span>
<h4 className="text-lg font-medium text-white tracking-tight">Technical Analysis Step-by-Step</h4>
</div>
<p className="text-sm leading-relaxed">Don't just look at charts. Understand market structure, liquidity zones, and price action narrative without the noise of lagging indicators.</p>
</div>
<div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">02</span>
<h4 className="text-lg font-medium text-white tracking-tight">Master Risk Management</h4>
</div>
<p className="text-sm leading-relaxed">Learn the math behind the trade. We teach you how to preserve capital during losing streaks and maximize gains during winning cycles.</p>
</div>
<div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">03</span>
<h4 className="text-lg font-medium text-white tracking-tight">Precise Entries &amp; Exits</h4>
</div>
<p className="text-sm leading-relaxed">Stop guessing where to get in. Our training shows you exactly how to identify high-probability points of interest with surgical precision.</p>
</div>
<div className="p-8 border border-white/10 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-colors">
<div className="flex items-center gap-4 mb-4">
<span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">04</span>
<h4 className="text-lg font-medium text-white tracking-tight">Real Trade Case Studies</h4>
</div>
<p className="text-sm leading-relaxed">Theory is nothing without application. Analyze real-world trade setups from inception to completion to see the logic in action.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-slate-200/60" id="how">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Your 3-Step Journey</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-px bg-slate-200 -z-10" style={{left: '16%', right: '16%'}}></div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-medium mb-6 shadow-sm ring-4 ring-white">1</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Register</h4>
<p className="text-sm text-slate-500 px-4">Complete a quick application to reserve your place in the training cohort.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-white border border-slate-300 text-slate-900 flex items-center justify-center text-sm font-medium mb-6 ring-4 ring-white">2</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Book Strategy Call</h4>
<p className="text-sm text-slate-500 px-4">Schedule a 1-on-1 session with an educator to assess your specific goals.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 text-slate-400 flex items-center justify-center text-sm font-medium mb-6 ring-4 ring-white">3</div>
<h4 className="text-base font-semibold tracking-tight text-slate-900 mb-2">Start Learning</h4>
<p className="text-sm text-slate-500 px-4">Begin implementing the modules at your own pace from any device.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Built for Longevity</h3>
<p className="text-sm leading-relaxed mb-8">
                        We don't promise overnight riches. We provide the technical foundation and risk framework used by professional desks. Our content is updated regularly to reflect current market dynamics, ensuring you build skills that last a career.
                    </p>
<div className="flex items-center gap-8 border-t border-slate-200 pt-8">
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">4.9/5</p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">Average Rating</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<p className="text-2xl font-semibold text-slate-900 tracking-tight">10+</p>
<p className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">Modules</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
<div className="absolute -top-3 -right-3 text-indigo-500/20">
<iconify-icon className="text-6xl" icon="solar:quote-right-bold"></iconify-icon>
</div>
<div className="flex gap-1 text-slate-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm leading-relaxed text-slate-700 mb-8 relative z-10">
                        "Finally a course that doesn't focus on indicators. The risk management module alone changed my entire approach to the markets. I went from blowing accounts to steady, calculated growth."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
                            B
                        </div>
<div>
<p className="text-sm font-medium text-slate-900 tracking-tight">Bissaka</p>
<p className="text-xs text-slate-500">Independent Trader</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white text-center border-t border-slate-200/60">
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Ready to stop guessing?</h2>
<p className="text-lg text-slate-500 mb-10">Join a select group of committed traders who have transitioned from confusion to clarity with the UpstrideFX system.</p>
<a className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-sm" href="#join">
                Start Your Free Training
                <iconify-icon className="text-xl" icon="solar:video-library-linear"></iconify-icon>
</a>
<p className="text-xs text-slate-400 mt-4">No credit card required. Application process applies.</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div className="flex items-center">
<span className="uppercase bg-center text-4xl font-semibold text-slate-50/0 tracking-tighter bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87e1068b-81a6-4648-98e3-8117559ddc49_320w.jpg?w=800&amp;q=80)] bg-cover ring-slate-50">UpstrideFX</span>
</div>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Risk Disclosure</a>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<p className="text-xs text-slate-400">
                © 2024 UPSTRIDEFX. All rights reserved.
            </p>
<p className="text-xs text-slate-400 leading-relaxed max-w-2xl md:text-right">
                Trading foreign exchange on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you.
            </p>
</div>
</footer>



    </>
  );
}
