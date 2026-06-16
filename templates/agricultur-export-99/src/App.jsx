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
      

<nav className="border-b border-stone-200/70 bg-[#faf8f4]/80 backdrop-blur sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-10">
<div className="serif text-xl font-medium tracking-tight">
            CashewNut
            <span className="text-amber-700">.</span>
            ng
          </div>
<div className="hidden md:flex items-center gap-7 text-sm text-stone-600">
<a className="hover:text-stone-900" href="#">Products</a>
<a className="hover:text-stone-900" href="#">Origin</a>
<a className="hover:text-stone-900" href="#">Process</a>
<a className="hover:text-stone-900" href="#">Export</a>
<a className="hover:text-stone-900" href="#">Contact</a>
</div>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
            EN
          </button>
<button className="bg-stone-900 text-[#faf8f4] text-sm px-4 py-2 rounded-full hover:bg-stone-800 flex items-center gap-1.5">
            Request a sample
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 pt-16 pb-24">
<div className="grid lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-8">
<span className="w-8 h-px bg-stone-400"></span>
            Established 1987 · Nigeria
          </div>
<h1 className="serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-stone-900">
            Cashews,
            <br/>
<span className="italic text-amber-800">crafted</span>
            from
            <br/>
            soil to shell.
          </h1>
<p className="mt-8 text-base text-stone-600 max-w-md leading-relaxed">
            We export premium-grade cashew kernels from sustainable farms across
            Ogbomosho, Nigeria to roasters, confectioners, and distributors in
            42 countries.
          </p>
<div className="mt-10 flex flex-wrap items-center gap-3">
<button className="bg-stone-900 text-[#faf8f4] text-sm px-5 py-3 rounded-full hover:bg-stone-800 flex items-center gap-2">
              Browse grades
              <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
<button className="border border-stone-300 text-sm px-5 py-3 rounded-full hover:border-stone-900 flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
              Watch our story
            </button>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 flex items-center justify-center">
<iconify-icon className="text-amber-800" icon="mdi:peanut-outline" width="220"></iconify-icon>
<div className="absolute bottom-5 left-5 right-5 bg-[#faf8f4]/95 backdrop-blur rounded-xl p-4 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-9 h-9 rounded-full bg-amber-200 border-2 border-[#faf8f4] flex items-center justify-center">
<iconify-icon className="text-amber-800" icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
<div className="w-9 h-9 rounded-full bg-emerald-200 border-2 border-[#faf8f4] flex items-center justify-center">
<iconify-icon className="text-emerald-800" icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
<div className="w-9 h-9 rounded-full bg-stone-300 border-2 border-[#faf8f4] flex items-center justify-center">
<iconify-icon className="text-stone-800" icon="solar:medal-ribbons-star-linear" width="16"></iconify-icon>
</div>
</div>
<div className="text-xs text-stone-600 leading-snug">
                HACCP, ISO 22000 &amp; Organic certified across all processing
                facilities.
              </div>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-10">
<div>
<div className="serif text-4xl font-light tracking-tight">42</div>
<div className="text-xs text-stone-500 mt-1">Export countries</div>
</div>
<div>
<div className="serif text-4xl font-light tracking-tight">
            12k
            <span className="text-amber-700">t</span>
</div>
<div className="text-xs text-stone-500 mt-1">Annual capacity</div>
</div>
<div>
<div className="serif text-4xl font-light tracking-tight">1,800</div>
<div className="text-xs text-stone-500 mt-1">Partner farmers</div>
</div>
<div>
<div className="serif text-4xl font-light tracking-tight">
            37
            <span className="text-stone-400 text-2xl">yrs</span>
</div>
<div className="text-xs text-stone-500 mt-1">In the trade</div>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-100">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="flex items-end justify-between flex-wrap gap-6 mb-14">
<div>
<div className="text-xs uppercase tracking-widest text-amber-300/80 mb-4">
              Our grades
            </div>
<h2 className="serif text-4xl md:text-5xl font-light tracking-tight max-w-xl">
              A spectrum of kernels for every application.
            </h2>
</div>
<a className="text-sm text-stone-300 hover:text-white flex items-center gap-2 border-b border-stone-700 pb-1" href="#">
            View full specification sheet
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-800 rounded-2xl overflow-hidden">

<div className="bg-stone-900 p-7 hover:bg-stone-800/50 transition group">
<div className="flex items-start justify-between mb-12">
<div className="text-xs text-stone-400">Grade 01</div>
<iconify-icon className="text-stone-500 group-hover:text-amber-300" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="serif text-3xl font-light mb-1">W180</div>
<div className="text-xs text-stone-400 mb-6">King of cashews</div>
<p className="text-sm text-stone-400 leading-relaxed mb-6">
              The largest, whitest kernels. Reserved for premium gifting and
              fine confectionery.
            </p>
<div className="text-xs text-stone-500">170–180 nuts/lb</div>
</div>
<div className="bg-stone-900 p-7 hover:bg-stone-800/50 transition group">
<div className="flex items-start justify-between mb-12">
<div className="text-xs text-stone-400">Grade 02</div>
<iconify-icon className="text-stone-500 group-hover:text-amber-300" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="serif text-3xl font-light mb-1">W240</div>
<div className="text-xs text-stone-400 mb-6">Premium whole</div>
<p className="text-sm text-stone-400 leading-relaxed mb-6">
              A balanced size with consistent ivory color. Our most-shipped
              grade worldwide.
            </p>
<div className="text-xs text-stone-500">220–240 nuts/lb</div>
</div>
<div className="bg-stone-900 p-7 hover:bg-stone-800/50 transition group">
<div className="flex items-start justify-between mb-12">
<div className="text-xs text-stone-400">Grade 03</div>
<iconify-icon className="text-stone-500 group-hover:text-amber-300" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="serif text-3xl font-light mb-1">W320</div>
<div className="text-xs text-stone-400 mb-6">Standard whole</div>
<p className="text-sm text-stone-400 leading-relaxed mb-6">
              The industry workhorse. Excellent for roasting, snacking, and bulk
              retail.
            </p>
<div className="text-xs text-stone-500">300–320 nuts/lb</div>
</div>
<div className="bg-stone-900 p-7 hover:bg-stone-800/50 transition group">
<div className="flex items-start justify-between mb-12">
<div className="text-xs text-stone-400">Grade 04</div>
<iconify-icon className="text-stone-500 group-hover:text-amber-300" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
<div className="serif text-3xl font-light mb-1">SW / LP</div>
<div className="text-xs text-stone-400 mb-6">Splits &amp; pieces</div>
<p className="text-sm text-stone-400 leading-relaxed mb-6">
              Ideal for baking, butter production, and culinary processing
              applications.
            </p>
<div className="text-xs text-stone-500">Various</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">
            From orchard to ocean
          </div>
<h2 className="serif text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Six steps. Zero compromise.
          </h2>
<p className="mt-6 text-stone-600 leading-relaxed">
            Each batch is traceable to its grove. Every kernel passes through
            human hands and machine vision before it ever sees a cargo
            container.
          </p>
<div className="mt-10 aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-amber-50 flex items-center justify-center">
<iconify-icon className="text-amber-800" icon="mdi:nut" width="180"></iconify-icon>
</div>
</div>
<div className="lg:col-span-7">
<div className="space-y-px bg-stone-200 rounded-2xl overflow-hidden border border-stone-200">
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                01
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Harvest</div>
<p className="text-sm text-stone-600">
                  Hand-picked at peak ripeness from partner farms across
                  Ogbomosho and surrounding Oyo State.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:leaf-linear" width="22"></iconify-icon>
</div>
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                02
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Sun-drying</div>
<p className="text-sm text-stone-600">
                  48–72 hours of natural drying to lock in flavor and prevent
                  mycotoxin growth.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:sun-linear" width="22"></iconify-icon>
</div>
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                03
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Steam shelling</div>
<p className="text-sm text-stone-600">
                  Gentle steam separation preserves kernel integrity and color.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:fire-linear" width="22"></iconify-icon>
</div>
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                04
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Hand-peeling</div>
<p className="text-sm text-stone-600">
                  Skilled artisans remove the testa skin one nut at a time for
                  maximum yield.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:hand-shake-linear" width="22"></iconify-icon>
</div>
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                05
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Optical grading</div>
<p className="text-sm text-stone-600">
                  AI-vision sorters classify by size, color, and defect with
                  99.4% accuracy.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:scanner-linear" width="22"></iconify-icon>
</div>
<div className="bg-[#faf8f4] p-6 flex gap-6 items-start">
<div className="serif text-2xl text-amber-700 font-light w-10">
                06
              </div>
<div className="flex-1">
<div className="font-medium mb-1">Vacuum packing</div>
<p className="text-sm text-stone-600">
                  Sealed in nitrogen-flushed pouches and FCL-loaded for global
                  dispatch.
                </p>
</div>
<iconify-icon className="text-stone-400" icon="solar:box-linear" width="22"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-amber-50/60 border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-xs uppercase tracking-widest text-amber-700 mb-4">
              Origin · Nigeria
            </div>
<h2 className="serif text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Rooted in the
              <br/>
<span className="italic">red laterite</span>
              of Ogbomosho.
            </h2>
<p className="mt-6 text-stone-600 leading-relaxed max-w-md">
              The mineral-rich laterite soils and tropical savanna climate of
              Ogbomosho, Oyo State produce kernels with a naturally sweet,
              buttery profile that defines world-class cashews.
            </p>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="border-l-2 border-amber-700 pl-4">
<div className="text-xs text-stone-500 mb-1">Soil pH</div>
<div className="serif text-2xl font-light">5.6—6.4</div>
</div>
<div className="border-l-2 border-amber-700 pl-4">
<div className="text-xs text-stone-500 mb-1">Avg. rainfall</div>
<div className="serif text-2xl font-light">2,400 mm</div>
</div>
<div className="border-l-2 border-amber-700 pl-4">
<div className="text-xs text-stone-500 mb-1">Elevation</div>
<div className="serif text-2xl font-light">80—350 m</div>
</div>
<div className="border-l-2 border-amber-700 pl-4">
<div className="text-xs text-stone-500 mb-1">Harvest</div>
<div className="serif text-2xl font-light">Feb—May</div>
</div>
</div>
</div>
<div className="relative aspect-square rounded-2xl bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 overflow-hidden flex items-center justify-center">
<iconify-icon className="text-amber-900/70" icon="mdi:food-nut" width="260"></iconify-icon>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2">
<div className="relative">
<div className="absolute inset-0 bg-amber-600 rounded-full animate-ping opacity-50"></div>
<div className="w-4 h-4 bg-amber-700 rounded-full ring-4 ring-amber-100 relative"></div>
</div>
<div className="mt-3 bg-[#faf8f4] rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
<div className="text-xs font-medium">Ogbomosho, Oyo State</div>
<div className="text-xs text-stone-500">8.1°N, 4.2°E</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-3 gap-10">
<div className="lg:col-span-2 bg-stone-900 text-[#faf8f4] rounded-3xl p-10 md:p-14 relative overflow-hidden">
<iconify-icon className="text-amber-400/30 absolute top-8 right-8" icon="solar:quote-up-square-linear" width="80"></iconify-icon>
<div className="text-xs uppercase tracking-widest text-amber-300/80 mb-6">
            Trusted partner since 2014
          </div>
<p className="serif text-2xl md:text-3xl font-light leading-snug max-w-2xl">
            "CashewNut.ng's W240 has been the backbone of our roasted-nut line
            for a decade. Their consistency batch-to-batch is unmatched in the
            industry."
          </p>
<div className="mt-10 flex items-center gap-4">
<div className="w-11 h-11 rounded-full bg-stone-700 flex items-center justify-center text-sm font-medium">
              MR
            </div>
<div>
<div className="text-sm font-medium">Marta Reinholt</div>
<div className="text-xs text-stone-400">
                Head of Procurement, Nordic Roasters AB
              </div>
</div>
</div>
</div>
<div className="space-y-3">
<div className="text-xs uppercase tracking-widest text-stone-500 mb-2">
            Shipping to
          </div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-stone-200 rounded-xl p-4">
<div className="text-xs text-stone-500">EU</div>
<div className="text-sm font-medium mt-1">18 countries</div>
</div>
<div className="border border-stone-200 rounded-xl p-4">
<div className="text-xs text-stone-500">North America</div>
<div className="text-sm font-medium mt-1">USA · CA · MX</div>
</div>
<div className="border border-stone-200 rounded-xl p-4">
<div className="text-xs text-stone-500">Middle East</div>
<div className="text-sm font-medium mt-1">8 countries</div>
</div>
<div className="border border-stone-200 rounded-xl p-4">
<div className="text-xs text-stone-500">Asia-Pacific</div>
<div className="text-sm font-medium mt-1">11 countries</div>
</div>
</div>
<div className="border border-stone-200 rounded-xl p-4 flex items-center gap-3">
<iconify-icon className="text-stone-700" icon="solar:ship-linear" width="22"></iconify-icon>
<div className="text-xs text-stone-600">
              FOB Lagos · CIF available worldwide
            </div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="rounded-3xl bg-gradient-to-br from-amber-100 via-[#faf8f4] to-stone-100 border border-stone-200 p-10 md:p-16 text-center">
<div className="text-xs uppercase tracking-widest text-amber-700 mb-4">
          Start a conversation
        </div>
<h2 className="serif text-4xl md:text-6xl font-light tracking-tight max-w-3xl mx-auto leading-tight">
          Request samples and a quote in
          <span className="italic">48 hours</span>
          .
        </h2>
<p className="mt-6 text-stone-600 max-w-lg mx-auto">
          Tell us your application, target volume, and destination port. Our
          export team responds within one business day.
        </p>
<form className="mt-10 max-w-xl mx-auto flex justify-center">
<a className="bg-emerald-600 text-white text-sm px-6 py-3 rounded-full hover:bg-emerald-700 flex items-center justify-center gap-2 mx-auto" href="https://wa.me/2341234567" rel="noopener" target="_blank">
<iconify-icon icon="ri:whatsapp-line" width="18"></iconify-icon>
            Chat with us on WhatsApp
          </a>
</form>
<div className="mt-6 text-xs text-stone-500 flex items-center justify-center gap-6 flex-wrap">
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
            Free 500g samples
          </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
            No minimum on first order
          </span>
<span className="flex items-center gap-1.5">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
            Full traceability docs
          </span>
</div>
</div>
</section>

<footer className="border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 py-14">
<div className="grid md:grid-cols-5 gap-10">
<div className="md:col-span-2">
<div className="serif text-xl font-medium tracking-tight">
              CashewNut
              <span className="text-amber-700">.</span>
              ng
            </div>
<p className="mt-4 text-sm text-stone-600 max-w-xs leading-relaxed">
              Premium cashew exporters since 1987. Headquartered in Lagos, with
              processing in Ogbomosho, Oyo State.
            </p>
<div className="mt-6 flex gap-2">
<a className="w-9 h-9 border border-stone-300 rounded-full flex items-center justify-center hover:border-stone-900" href="#">
<iconify-icon icon="solar:linkedin-linear" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 border border-stone-300 rounded-full flex items-center justify-center hover:border-stone-900" href="#">
<iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 border border-stone-300 rounded-full flex items-center justify-center hover:border-stone-900" href="#">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              Products
            </div>
<ul className="space-y-2 text-sm text-stone-700">
<li><a href="#">Whole grades</a></li>
<li><a href="#">Splits &amp; pieces</a></li>
<li><a href="#">Roasted</a></li>
<li><a href="#">Organic line</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              Company
            </div>
<ul className="space-y-2 text-sm text-stone-700">
<li><a href="#">About</a></li>
<li><a href="#">Sustainability</a></li>
<li><a href="#">Certifications</a></li>
<li><a href="#">Careers</a></li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-widest text-stone-500 mb-4">
              Contact
            </div>
<ul className="space-y-2 text-sm text-stone-700">
<li>+234 1 234 5678</li>
<li>export@kernel.co</li>
<li>export@cashewnut.ng</li>
</ul>
</div>
</div>
<div className="mt-12 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-500">
<div>© 2025 CashewNut.ng Trading JSC. All rights reserved.</div>
<div className="flex gap-6">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Compliance</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
