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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<button className="md:hidden text-slate-600">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="uppercase flex items-center gap-2 text-xl font-normal text-slate-900 tracking-tight" href="index.html">
<iconify-icon className="text-emerald-500" icon="lucide:leaf" strokeWidth="1.5" width="22"></iconify-icon>
<div className="flex flex-col items-start justify-center">
<span className="leading-none">Peach Patch</span>
<span className="text-[10px] leading-none font-medium text-[#FF9B71] tracking-widest mt-1">
              Microgreens
            </span>
</div>
</a>
<ul className="hidden md:flex items-center gap-8 text-[15px] font-normal text-slate-500">
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200" href="index.html">
              Home
            </a>
</li>
<li className="relative group">
<a className="flex items-center gap-1 hover:text-slate-900 transition-colors duration-200 pt-6 pb-6" href="#shop">
              Shop
              <iconify-icon className="" icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<ul className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1 z-50">
<li className="">
<a className="block text-[15px] hover:text-[#FF9B71] hover:bg-slate-50 transition-colors text-slate-600 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/fresh-cuts">
                  Fresh Cuts
                </a>
</li>
<li className="">
<a className="block px-3 py-2 text-[15px] text-slate-600 hover:text-[#FF9B71] hover:bg-slate-50 rounded-lg transition-colors" href="#live-trays">
                  Live Trays
                </a>
</li>
<li>
<a className="block px-3 py-2 text-[15px] text-slate-600 hover:text-[#FF9B71] hover:bg-slate-50 rounded-lg transition-colors" href="#subscriptions">
                  Weekly Subscriptions
                </a>
</li>
</ul>
</li>
<li className="relative group">
<a className="flex items-center gap-1 hover:text-slate-900 transition-colors duration-200 py-6" href="#about">
              About Us
              <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</a>
<ul className="absolute top-full left-0 w-48 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 flex flex-col gap-1 z-50">
<li className="">
<a className="block px-3 py-2 text-[15px] text-slate-600 hover:text-[#FF9B71] hover:bg-slate-50 rounded-lg transition-colors" href="#our-farm">
                  Our Farm
                </a>
</li>
<li className="">
<a className="block px-3 py-2 text-[15px] text-slate-600 hover:text-[#FF9B71] hover:bg-slate-50 rounded-lg transition-colors" href="#growing-process">
                  Growing Process
                </a>
</li>
</ul>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200 py-6 block" href="#benefits">
              Nutrition
            </a>
</li>
<li className="">
<a className="hover:text-slate-900 transition-colors duration-200 py-6 block" href="#recipes">
              Recipes
            </a>
</li>
</ul>
<div className="flex items-center gap-4">
<button className="text-slate-600 hover:text-slate-900 transition-colors relative">
<iconify-icon className="" icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-slate-600 hover:text-slate-900 transition-colors relative group">
<iconify-icon className="" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-[#FF9B71] rounded-full group-hover:scale-125 transition-transform duration-200"></span>
</button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" id="home">
<div className="grid lg:grid-cols-2 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF0E8] text-[#E87343] text-sm font-normal border border-[#FF9B71]/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9B71] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9B71]"></span>
</span>
            Fresh Harvest Available
          </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-slate-900 tracking-tight">
            Tiny greens,
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-emerald-600">
              massive nutrition.
            </span>
</h1>
<p className="leading-relaxed text-xl text-slate-500 max-w-md">
            Experience the vibrant flavors and concentrated nutrients of local,
            organically grown microgreens. Harvested to order for peak freshness
            and holistic health.
          </p>
<div className="flex flex-wrap items-center gap-4">
<a className="group hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 shadow-slate-200 text-[15px] font-medium text-white bg-slate-900 rounded-full pt-3 pr-8 pb-3 pl-8 relative shadow-lg" href="#shop">
              Shop Microgreens
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="hover:border-slate-300 transition-colors flex gap-2 text-[15px] font-normal text-slate-600 bg-white border-slate-200 border rounded-full pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-emerald-500" icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
              Our Growing Process
            </button>
</div>
<div className="pt-8 flex items-center gap-6 text-slate-400 text-sm font-medium uppercase tracking-widest">
<div className="flex items-center gap-2">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="16"></iconify-icon>
              Pesticide Free
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="" icon="lucide:sun" strokeWidth="1.5" width="16"></iconify-icon>
              Locally Grown
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="" icon="lucide:scissors" strokeWidth="1.5" width="16"></iconify-icon>
              Cut to Order
            </div>
</div>
</div>
<div className="lg:h-[600px] flex relative items-center justify-center">

<div className="bg-gradient-to-tr from-emerald-200/30 via-[#FF9B71]/20 to-teal-200/30 opacity-60 rounded-full absolute top-0 right-0 bottom-0 left-0 blur-3xl"></div>

<div className="relative z-10 w-full max-w-md aspect-[4/5] bg-white rounded-3xl shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100 group">
<img alt="Spicy Salad Microgreens" className="group-hover:scale-105 transition-transform duration-700 ease-in-out w-full h-full object-cover bg-slate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf2b3353-bd92-4dc5-bd96-079c5d025cba_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white/90 to-transparent">
<div className="flex justify-between items-end">
<div className="">
<p className="uppercase text-sm font-normal text-[#FF9B71] tracking-wider mb-1">
                    Signature Blend
                  </p>
<h3 className="text-xl font-medium text-slate-900 tracking-tight">
                    Spicy Salad Mix 4 oz
                  </h3>
</div>
<span className="text-lg font-medium text-slate-900">$8.00</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-slate-900 text-slate-300 py-3 overflow-hidden whitespace-nowrap">
<div className="inline-flex gap-12 animate-[marquee_20s_linear_infinite] text-sm font-normal tracking-widest uppercase">
<span>Up to 40x More Nutrients</span>
<span className="text-[#FF9B71]">•</span>
<span className="">Locally Grown</span>
<span className="text-[#FF9B71]">•</span>
<span className="">Pesticide Free</span>
<span className="text-[#FF9B71]">•</span>
<span className="">Intense Flavor</span>
<span className="text-[#FF9B71]">•</span>
<span>Sustainably Farmed</span>
<span className="text-[#FF9B71]">•</span>
<span>Up to 40x More Nutrients</span>
<span className="text-[#FF9B71]">•</span>
<span>Locally Grown</span>
<span className="text-[#FF9B71]">•</span>
<span>Pesticide Free</span>
<span className="text-[#FF9B71]">•</span>
<span>Intense Flavor</span>
<span className="text-[#FF9B71]">•</span>
<span>Sustainably Farmed</span>
<span className="text-[#FF9B71]">•</span>
<span>Up to 40x More Nutrients</span>
<span className="text-[#FF9B71]">•</span>
<span>Locally Grown</span>
<span className="text-[#FF9B71]">•</span>
<span>Pesticide Free</span>
<span className="text-[#FF9B71]">•</span>
<span>Intense Flavor</span>
<span className="text-[#FF9B71]">•</span>
<span>Sustainably Farmed</span>
</div>
</div>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
              Farm Fresh Harvest
            </h2>
<p className="text-[17px] text-slate-500 max-w-lg leading-relaxed">
              Sourced directly from our local indoor farm. Every tray is grown
              organically and harvested strictly to order for maximum flavor and
              nutrition.
            </p>
</div>
<div className="flex items-center gap-2">
<button className="hover:bg-slate-200 transition-colors text-[15px] font-medium text-slate-900 bg-slate-100 rounded-lg pt-2 pr-4 pb-2 pl-4">
              All Varieties
            </button>
<button className="px-4 py-2 rounded-lg bg-white text-slate-500 text-[15px] font-medium border border-slate-200 hover:border-slate-300 transition-colors">
              Subscriptions
            </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative">
<div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-5 border border-slate-100">
<img alt="Spicy Radish Microgreens" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a358d5c-e1d6-4c50-877b-d02863aaa943_800w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">
                  Spicy Radish Microgreens 2oz
                </h3>
<p className="text-[15px] text-slate-500">
                  Bold &amp; Peppery Flavor
                </p>
</div>
<span className="text-[15px] font-medium text-slate-900">$5.00</span>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-5 border border-slate-100">
<img alt="Sweet Pea Shoots" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/863954a3-06f7-499d-8c35-f29775ecca44_800w.jpg"/>
<div className="absolute top-4 left-4 px-2 py-1 bg-[#FFF0E8] text-[#E87343] text-sm font-medium rounded-md">
                Kid Friendly
              </div>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon className="" icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">
                  Sweet Pea Shoots 4oz
                </h3>
<p className="text-[15px] text-slate-500">Crunchy &amp; Sweet</p>
</div>
<span className="text-[15px] font-medium text-slate-900">$8.00</span>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square rounded-2xl bg-slate-50 overflow-hidden mb-5 border border-slate-100">
<img alt="Broccoli Microgreens" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84b0d9cf-8fac-4490-86f2-47eaf49f7218_800w.jpg"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-900 hover:bg-emerald-500 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-medium text-slate-900 tracking-tight mb-1">
                  Broccoli Microgreens 2oz
                </h3>
<p className="text-[15px] text-slate-500">High Sulforaphane</p>
</div>
<span className="text-[15px] font-medium text-slate-900">$5.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-200 border-t pt-24 pr-6 pb-24 pl-6" id="benefits">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">
              Why Microgreens?
            </h2>
<p className="text-slate-500 text-xl mb-8 leading-relaxed">
              Microgreens are the young seedlings of edible vegetables and
              herbs. Because they are harvested right after the cotyledon leaves
              have developed, they pack a concentrated dose of vitamins,
              minerals, and antioxidants.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-[17px] font-medium text-slate-900 tracking-tight">
                    Up to 40x More Nutrients
                  </h4>
<p className="text-[15px] text-slate-500 mt-1">
                    Research shows microgreens contain significantly higher
                    vitamin and antioxidant levels than mature greens.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-[17px] font-medium text-slate-900 tracking-tight">
                    Bursting with Flavor
                  </h4>
<p className="text-[15px] text-slate-500 mt-1">
                    Add complex, intense flavors and crisp textures to salads,
                    sandwiches, smoothies, and entrees.
                  </p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center flex-shrink-0 mt-1">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div className="">
<h4 className="text-[17px] font-medium text-slate-900 tracking-tight">
                    Locally &amp; Sustainably Grown
                  </h4>
<p className="text-[15px] text-slate-500 mt-1">
                    Grown vertically indoors using 90% less water than
                    traditional farming, with zero pesticides.
                  </p>
</div>
</li>
</ul>
</div>
<div className="bg-slate-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
<div className="absolute bottom-0 left-0 p-32 bg-[#FF9B71] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="relative z-10 h-full flex flex-col justify-center">
<div className="space-y-6">
<div className="glass-panel p-6 rounded-2xl shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-[15px] font-normal text-slate-500">
                      Nutrient Density vs Mature Plant
                    </span>
<span className="text-[15px] font-medium text-[#FF9B71]">
                      Up to 4000%
                    </span>
</div>
<div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-[#FF9B71] w-[95%] rounded-full"></div>
</div>
</div>
<div className="glass-panel p-6 rounded-2xl shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-[15px] font-normal text-slate-500">
                      Water Conservation
                    </span>
<span className="text-[15px] font-medium text-teal-600">
                      90% Less Water
                    </span>
</div>
<div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-teal-500 w-[90%] rounded-full"></div>
</div>
</div>
<div className="pt-6">
<blockquote className="text-[17px] font-normal text-slate-800 italic leading-relaxed">
                    "I add a handful of the spicy radish to my eggs every
                    morning. It's completely transformed my breakfasts!"
                  </blockquote>
<div className="mt-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-300 overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="">
<p className="text-[15px] font-medium text-slate-900">
                        Sarah M.
                      </p>
<p className="text-sm text-slate-500">Subscriber</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="absolute inset-0 bg-slate-900 z-0"></div>
<div className="z-0 bg-gradient-to-b from-[#FF9B71]/20 to-slate-900 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-center max-w-3xl z-10 mr-auto ml-auto relative">
<iconify-icon className="text-emerald-500 mb-6" icon="lucide:sprout" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
          Join the Farm Family
        </h2>
<p className="text-xl text-slate-400 mb-10">
          Subscribe for fresh recipes, new harvest alerts, and discounts off
          your purchase or first local delivery.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FF9B71]/50 backdrop-blur-sm transition-all text-[15px]" placeholder="email@address.com" type="email"/>
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors text-[15px]" type="button">
            Subscribe
          </button>
</form>
<p className="mt-4 text-sm text-slate-600">
          No spam, just fresh greens. Unsubscribe anytime.
        </p>
</div>
</section>

<footer className="bg-white border-slate-200 border-t pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="uppercase flex items-center gap-2 text-lg font-normal text-slate-900 tracking-tight mb-6" href="index.html">
<iconify-icon className="text-emerald-500" icon="lucide:leaf" strokeWidth="1.5" width="18"></iconify-icon>
<div className="flex flex-col items-start justify-center">
<span className="leading-none">Peach Patch</span>
<span className="text-[10px] leading-none font-normal text-[#FF9B71] tracking-widest mt-1">
                  Microgreens
                </span>
</div>
</a>
<address className="not-italic text-[15px] text-slate-500 mb-8 space-y-2">
<p className="">
                2086 Jodeco Rd #1642
                <br/>
                McDonough, Ga 30253
              </p>
<p className="">
<a className="hover:text-[#FF9B71] transition-colors" href="tel:404-590-7270">
                  404-590-7270
                </a>
</p>
<p className="">
<a className="hover:text-[#FF9B71] transition-colors" href="mailto:info@peachpatchmicrogreens.com">
                  info@peachpatchmicrogreens.com
                </a>
</p>
<p className="">
<a className="hover:text-[#FF9B71] transition-colors" href="index.html">
                  www.peachpatchmicrogreens.com
                </a>
</p>
</address>
<div className="flex gap-4 gap-x-4 gap-y-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="" icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-[15px]">Shop</h4>
<ul className="space-y-3 text-[15px] text-slate-500">
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="/fresh-cuts">
                  Fresh Cuts
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#shop">
                  Live Trays
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#shop">
                  Subscriptions
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-[15px]">Farm</h4>
<ul className="space-y-3 text-[15px] text-slate-500">
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#about">
                  Our Story
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#about">
                  Growing Practices
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#contact">
                  Contact Us
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium text-slate-900 mb-4 text-[15px]">Legal</h4>
<ul className="space-y-3 text-[15px] text-slate-500">
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li className="">
<a className="hover:text-[#FF9B71] transition-colors" href="#">
                  Local Delivery Zones
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
<p className="">
              © 2026 Peach Patch Microgreens. All rights reserved.
            </p>
<span className="hidden md:inline text-slate-300">•</span>
<span className="flex items-center gap-1.5"></span>
</div>
<div className="flex items-center gap-6">
<span className="flex items-center gap-1">
<iconify-icon className="" icon="lucide:credit-card" strokeWidth="1.5" width="16"></iconify-icon>
              Secure Payment
            </span>
<span className="flex items-center gap-1">
<iconify-icon className="" icon="lucide:map-pin" strokeWidth="1.5" width="16"></iconify-icon>
              Local Delivery
            </span>
</div>
</div>
</div>
</footer>

    </>
  );
}
