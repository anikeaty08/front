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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<span className="text-lg tracking-tighter font-medium text-slate-900 uppercase">Interstarch</span>
</div>

<nav className="hidden lg:flex items-center gap-8">

<div className="group relative py-6">
<button className="flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                            Products <iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-4xl bg-white border border-slate-100 shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 grid grid-cols-3 p-6 gap-6">
<div>
<h4 className="text-xs font-medium tracking-tight text-slate-900 mb-4 uppercase">Food Industry</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Native Starches</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Modified Starches</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Liquid Glucose</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium tracking-tight text-slate-900 mb-4 uppercase">Feed Industry</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Corn Gluten</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900" href="#">Feed Yeast</a></li>
</ul>
</div>
<div className="bg-slate-50 rounded-lg p-4">
<h4 className="text-xs font-medium tracking-tight text-slate-900 mb-2">Featured Application</h4>
<p className="text-xs text-slate-500 mb-3">Discover our new modified starch solutions for dairy products.</p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1" href="#">Read more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Applications</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">About Us</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">News</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition-colors" href="#">Contacts</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs font-medium">
<span className="text-slate-900 cursor-pointer">EN</span>
<span className="text-slate-300">/</span>
<span className="text-slate-400 hover:text-slate-900 cursor-pointer transition-colors">UA</span>
</div>
<button className="text-slate-600 hover:text-slate-900 lg:hidden">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="mt-24 py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">1. Home Page Template</span>
</div>

<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Reliable global supplier</span>
</div>
<h1 className="text-5xl lg:text-7xl tracking-tighter font-medium text-slate-900 leading-[1.1] mb-6">
                        Innovative starch solutions for global industries.
                    </h1>
<p className="text-lg text-slate-500 mb-10 max-w-xl font-light">
                        High-quality ingredients for food, feed, and industrial applications. Sourced sustainably, processed with precision.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors flex items-center gap-2" href="#">
                            Explore Products <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-6 py-3 bg-white text-slate-900 text-sm font-medium rounded-md border border-slate-200 hover:bg-slate-50 transition-colors" href="#">
                            Contact Sales
                        </a>
</div>
</div>
</div>

<div className="absolute right-0 top-0 w-1/2 h-full bg-slate-50 -z-10 clip-path-hero" style={{clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)', opacity: '0.5'}}></div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-medium text-slate-900 mb-12 animate-fade-in">Business Directions</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group block bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300 animate-fade-in delay-100" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:apple-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Food Industry</h3>
<p className="text-sm text-slate-500 mb-6 font-light line-clamp-3">Native and modified starches, syrups, and gluten tailored to enhance texture, stability, and nutritional profile in modern food manufacturing.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">View catalogue <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>

<a className="group block bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300 animate-fade-in delay-200" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Feed Industry</h3>
<p className="text-sm text-slate-500 mb-6 font-light line-clamp-3">High-protein corn gluten and easily digestible feed components ensuring optimal growth and health for livestock and poultry.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">View catalogue <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>

<a className="group block bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300 animate-fade-in delay-[300ms]" href="#">
<div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-3">Industrial Sector</h3>
<p className="text-sm text-slate-500 mb-6 font-light line-clamp-3">Specialized starch products for paper, corrugated board, and textile industries, providing superior binding and adhesive properties.</p>
<span className="text-sm font-medium text-slate-900 flex items-center gap-1 group-hover:gap-2 transition-all">View catalogue <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="animate-fade-in">
<h2 className="text-3xl tracking-tight font-medium text-slate-900 mb-6">Processing nature into value.</h2>
<p className="text-base text-slate-500 mb-8 font-light">
                            Interstarch Ukraine operates state-of-the-art facilities, transforming local agricultural produce into high-value ingredients. Our commitment to continuous technological improvement guarantees consistent quality across all product lines.
                        </p>
<a className="text-sm font-medium text-slate-900 border-b border-slate-300 hover:border-slate-900 pb-1 transition-colors" href="#">More about the company</a>
</div>

<div className="grid grid-cols-2 gap-4 animate-fade-in delay-100">
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
<span className="text-3xl tracking-tighter font-medium text-slate-900 mb-1">300k+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Tons processed annually</span>
</div>
<div className="p-6 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center">
<span className="text-3xl tracking-tighter font-medium text-slate-900 mb-1">70+</span>
<span className="text-xs text-slate-500 uppercase tracking-wide">Export countries</span>
</div>
<div className="col-span-2 p-6 bg-slate-900 rounded-xl flex items-center justify-between">
<div>
<span className="text-3xl tracking-tighter font-medium text-white mb-1 block">FSSC 22000</span>
<span className="text-xs text-slate-400 uppercase tracking-wide">Certified Quality</span>
</div>
<iconify-icon className="text-4xl text-slate-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12 animate-fade-in">
<h2 className="text-3xl tracking-tight font-medium text-slate-900">Latest Updates</h2>
<a className="text-sm font-medium text-slate-900 hidden sm:block hover:underline underline-offset-4" href="#">View all news</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer animate-fade-in delay-100">
<div className="aspect-[4/3] bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon className="text-3xl" icon="solar:gallery-wide-linear"></iconify-icon>
</div>

</div>
<time className="text-xs text-slate-500 mb-2 block tracking-wide">Oct 12, 2023</time>
<h3 className="text-base tracking-tight font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Participation in Food Ingredients Europe 2023</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">Join us in Frankfurt where we will showcase our latest developments in clean-label starches.</p>
</article>
<article className="group cursor-pointer animate-fade-in delay-200">
<div className="aspect-[4/3] bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-400"><iconify-icon className="text-3xl" icon="solar:gallery-wide-linear"></iconify-icon></div>
</div>
<time className="text-xs text-slate-500 mb-2 block tracking-wide">Sep 05, 2023</time>
<h3 className="text-base tracking-tight font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Modernization of Wheat Processing Line</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">Increased capacity and reduced energy consumption achieved through recent facility upgrades.</p>
</article>
<article className="group cursor-pointer animate-fade-in delay-[300ms]">
<div className="aspect-[4/3] bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-slate-400"><iconify-icon className="text-3xl" icon="solar:gallery-wide-linear"></iconify-icon></div>
</div>
<time className="text-xs text-slate-500 mb-2 block tracking-wide">Aug 20, 2023</time>
<h3 className="text-base tracking-tight font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">New Organic Certification Achieved</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">We are proud to announce our new compliance with EU organic standards for selected product lines.</p>
</article>
</div>
</div>
</section>
</main>

<div className="py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">2. Catalog &amp; Single Product View</span>
</div>

<section className="py-12 bg-white min-h-screen">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">

<nav aria-label="Breadcrumb" className="flex text-xs text-slate-500 mb-8">
<ol className="inline-flex items-center space-x-1 md:space-x-2">
<li className="inline-flex items-center"><a className="hover:text-slate-900" href="#">Home</a></li>
<li><div className="flex items-center"><span className="mx-2">/</span><a className="hover:text-slate-900" href="#">Products</a></div></li>
<li aria-current="page"><div className="flex items-center"><span className="mx-2">/</span><span className="text-slate-900 font-medium">Food Industry</span></div></li>
</ol>
</nav>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0">
<h1 className="text-2xl tracking-tight font-medium text-slate-900 mb-6">Products</h1>
<div className="space-y-4 border-t border-slate-200 pt-4">

<details className="group" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-900 pb-2">
                                Food Industry
                                <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-500 mt-2 space-y-3 pb-4">

<label className="flex items-center gap-3 cursor-pointer group/chk custom-checkbox">
<input checked="" className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors group-hover/chk:border-slate-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-700">Native Starches (8)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/chk custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors group-hover/chk:border-slate-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-700">Modified Starches (12)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group/chk custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center transition-colors group-hover/chk:border-slate-400">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-slate-700">Glucose Syrups (4)</span>
</label>
</div>
</details>

<details className="group border-t border-slate-100 pt-4">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-900 pb-2">
                                Feed Industry
                                <span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-sm text-slate-500 mt-2 space-y-3 pb-4">
<label className="flex items-center gap-3 cursor-pointer group/chk custom-checkbox">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-slate-300 rounded flex items-center justify-center"><svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<span className="text-slate-700">Corn Gluten (2)</span>
</label>
</div>
</details>
</div>
</aside>

<div className="flex-1">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
<span className="text-sm text-slate-500">Showing 8 products</span>

<div className="relative inline-block text-left">
<button className="inline-flex items-center justify-center gap-2 w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none" type="button">
                                Sort by: Default
                                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">

<div className="group border border-slate-200 rounded-xl p-5 hover:border-slate-400 hover:shadow-sm transition-all bg-white cursor-pointer flex flex-col h-full">
<div className="w-full aspect-[4/3] bg-slate-50 rounded-lg mb-4 flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-300" icon="solar:box-linear"></iconify-icon>
</div>
<span className="text-xs text-slate-500 uppercase tracking-wide mb-1">Native Starch</span>
<h3 className="text-base font-medium text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Regular Corn Starch</h3>
<p className="text-sm text-slate-500 font-light mb-4 flex-1 line-clamp-2">Standard native corn starch used as a thickening agent and stabilizer.</p>
<div className="flex items-center text-xs font-medium text-slate-900 gap-1 border-t border-slate-100 pt-3">
                                View details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
<span className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-2 block">Single Product Template</span>
<div className="flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/3">
<div className="w-full aspect-square bg-white border border-slate-200 rounded-xl flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-200" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
</div>
<div className="lg:w-2/3">
<h2 className="text-3xl tracking-tight font-medium text-slate-900 mb-4">Acetylated Distarch Adipate (E1422)</h2>
<p className="text-base text-slate-600 font-light mb-6">
                                    Modified waxy corn starch. Exhibits high tolerance to temperature fluctuations, acidic conditions, and high shear forces. Ideal for frozen foods and canned products.
                                </p>
<div className="flex gap-4 mb-10">
<button className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors">
                                        Request Sample
                                    </button>
<button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-900 text-sm font-medium rounded-md hover:bg-slate-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:document-linear"></iconify-icon> Download TDS (PDF)
                                    </button>
</div>

<h3 className="text-sm font-medium text-slate-900 mb-3 uppercase tracking-wide">Technical Characteristics</h3>
<div className="overflow-x-auto border border-slate-200 rounded-lg bg-white">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
<tr>
<th className="px-4 py-3">Parameter</th>
<th className="px-4 py-3">Value</th>
<th className="px-4 py-3">Method</th>
                                            }
                                            </tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700 font-light">
<tr>
<td className="px-4 py-3">Moisture</td>
<td className="px-4 py-3">Max 14.0%</td>
<td className="px-4 py-3">ISO 1666</td>
</tr>
<tr>
<td className="px-4 py-3">pH (20% solution)</td>
<td className="px-4 py-3">5.0 - 7.0</td>
<td className="px-4 py-3">ISO 10523</td>
</tr>
<tr>
<td className="px-4 py-3">SO2 content</td>
<td className="px-4 py-3">Max 10 mg/kg</td>
<td className="px-4 py-3">Titration</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">3. Applications &amp; Group Template</span>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-medium text-slate-900 mb-4">Confectionery Applications</h2>
<p className="max-w-2xl text-slate-500 font-light mb-12">Our specialized starches and syrups provide the essential structure, chewiness, and shelf-life stability required for modern confectionery manufacturing.</p>

<div className="bg-white border border-slate-200 rounded-xl p-8">
<h3 className="text-sm font-medium text-slate-900 mb-6 uppercase tracking-wide flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon> Recommended Products
                </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="p-4 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors group" href="#">
<span className="text-xs text-slate-400 block mb-1">Syrups</span>
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Glucose Syrup 43DE</h4>
</a>
<a className="p-4 border border-slate-100 rounded-lg hover:border-slate-300 transition-colors group" href="#">
<span className="text-xs text-slate-400 block mb-1">Modified Starch</span>
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600">Thin-boiling Starch</h4>
</a>
</div>
</div>
</div>
</section>

<div className="py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">4. Certificates &amp; Forms</span>
</div>

<section className="py-24 bg-white">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl tracking-tight font-medium text-slate-900 mb-8">Quality Certificates</h2>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">FSSC 22000</h4>
<p className="text-xs text-slate-500">Food Safety System Certification</p>
</div>
</div>
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2">View PDF</button>
</div>
<div className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:diploma-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Halal Certificate</h4>
<p className="text-xs text-slate-500">Global compliance</p>
</div>
</div>
<button className="text-xs font-medium text-slate-600 hover:text-slate-900 underline underline-offset-2">View PDF</button>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<h3 className="text-xl tracking-tight font-medium text-slate-900 mb-2">Request Specification</h3>
<p className="text-sm text-slate-500 font-light mb-6">Need specific documentation? Fill out the form and our quality team will contact you.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Corporate Email</label>
<input className="w-full bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="work@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Requested Document</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-slate-400 transition-all text-slate-700">
<option>Select document type...</option>
<option>Detailed TDS</option>
<option>Allergen Declaration</option>
<option>Non-GMO Certificate</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full mt-2 px-4 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">5. Contacts, Map &amp; Vacancies</span>
</div>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4">
<h1 className="text-3xl tracking-tight font-medium text-slate-900 mb-8">Headquarters</h1>
<div className="space-y-6">
<div>
<span className="text-xs font-medium uppercase tracking-wide text-slate-400 block mb-1">Address</span>
<p className="text-sm text-slate-700 font-light">12 Industrialna St.<br/>Kyiv, 02000, Ukraine</p>
</div>
<div>
<span className="text-xs font-medium uppercase tracking-wide text-slate-400 block mb-1">Sales Department</span>
<p className="text-sm text-slate-700 font-light hover:text-slate-900 cursor-pointer">+380 44 123 45 67</p>
<p className="text-sm text-slate-700 font-light hover:text-slate-900 cursor-pointer">sales@interstarch.ua</p>
</div>
</div>

<div className="mt-12 p-4 border border-blue-100 bg-blue-50/50 rounded-lg">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-medium text-slate-900">Career Opportunities</h4>
<span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-medium rounded-full uppercase tracking-wider">Visible</span>
</div>
<p className="text-xs text-slate-600 mb-3">We are currently hiring for 3 positions in our production facility.</p>
<a className="text-xs font-medium text-blue-600 hover:text-blue-800" href="#">View Vacancies →</a>
</div>
</div>

<div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 flex items-center justify-center relative min-h-[400px]">
<span className="absolute top-4 left-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Global Reach</span>

<div className="relative w-full max-w-2xl aspect-[2/1] bg-slate-50 rounded-lg border border-slate-100 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-9xl text-slate-200 absolute opacity-50" icon="solar:global-linear"></iconify-icon>

<div className="absolute top-1/3 left-1/2 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_0_4px_rgba(59,130,246,0.2)] animate-pulse">
<div className="absolute -top-8 -left-6 bg-slate-900 text-white text-[10px] px-2 py-1 rounded whitespace-nowrap">Production (UA)</div>
</div>
<div className="absolute top-1/4 left-1/3 w-2 h-2 bg-slate-400 rounded-full"></div>
<div className="absolute top-1/2 left-2/3 w-2 h-2 bg-slate-400 rounded-full"></div>
<div className="absolute bottom-1/3 left-3/4 w-2 h-2 bg-slate-400 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<div className="py-2 bg-slate-900 text-center">
<span className="text-xs text-slate-300 uppercase tracking-[0.2em]">6. 404 Error Template</span>
</div>

<section className="py-32 bg-white flex items-center justify-center text-center">
<div className="max-w-md px-4">
<h1 className="text-[8rem] leading-none tracking-tighter font-light text-slate-100 mb-4 select-none">404</h1>
<h2 className="text-2xl tracking-tight font-medium text-slate-900 mb-3">Page not found</h2>
<p className="text-sm text-slate-500 font-light mb-8">The page you are looking for doesn't exist or has been moved.</p>
<a className="inline-flex px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors items-center gap-2" href="#">
<iconify-icon icon="solar:home-linear"></iconify-icon> Back to Home
            </a>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-[1412px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">

<div>
<span className="text-lg tracking-tighter font-medium text-white uppercase block mb-4">Interstarch</span>
<p className="text-xs text-slate-400 font-light mb-6 pr-4">Processing nature into value since 2011. Reliable supplier of starch products worldwide.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Products</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Food Industry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Feed Industry</a></li>
<li><a className="hover:text-white transition-colors" href="#">Industrial Sector</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Certificates</a></li>
<li><a className="hover:text-white transition-colors" href="#">News</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contacts</a></li>
</ul>
</div>

<div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700/50">
<h4 className="text-xs font-medium text-white mb-4 uppercase tracking-wider flex items-center gap-2">
<iconify-icon icon="solar:settings-linear"></iconify-icon> Portal Links
                    </h4>
<ul className="space-y-3 text-sm font-light">

<li className="flex items-center justify-between group">
<a className="hover:text-white transition-colors flex items-center gap-2" href="#">
                                Tender Platform
                            </a>
<span className="text-[9px] uppercase tracking-widest bg-slate-700 text-slate-300 px-1.5 py-0.5 rounded">UA Only</span>
</li>

<li>
<a className="hover:text-white transition-colors block group" href="https://interstarch.com/trust-line-en">
                                Trust Line <span className="text-[10px] text-slate-500 block group-hover:text-slate-400">(URL changes via Lang)</span>
</a>
</li>

<li>
<a className="hover:text-white transition-colors block text-slate-500 line-through decoration-slate-600" href="#" title="Hidden by default">
                                Financial Reporting
                            </a>
</li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-slate-500">
<p>© 2023 Interstarch Ukraine. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Terms of Delivery</a>
<a className="hover:text-white transition-colors" href="#">Data Protection</a>
<a className="hover:text-white transition-colors" href="#">Cookies Policy</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 inset-x-4 sm:inset-x-auto sm:right-4 sm:left-auto z-50 sm:max-w-sm bg-white border border-slate-200 shadow-xl rounded-xl p-5 animate-fade-in delay-[500ms]">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-slate-400 shrink-0" icon="solar:cookie-linear"></iconify-icon>
<div>
<p className="text-xs text-slate-600 font-light mb-3">We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded hover:bg-slate-800 transition-colors flex-1">Accept</button>
<button className="px-3 py-1.5 bg-slate-50 text-slate-600 text-xs font-medium rounded border border-slate-200 hover:bg-slate-100 transition-colors">Settings</button>
</div>
</div>
</div>
</div>

    </>
  );
}
