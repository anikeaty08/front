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
      

<div className="bg-neutral-50 border-b border-neutral-200 py-1.5 px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-neutral-500">
<div className="flex items-center gap-4">

<button className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors group relative">
<iconify-icon icon="solar:global-linear"></iconify-icon>
<span>
            Ship to:
            <span className="font-medium text-neutral-900">Bahrain</span>
</span>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900" icon="solar:alt-arrow-down-linear"></iconify-icon>
<div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50 min-w-[140px] text-left cursor-default">
<div className="bg-white border border-neutral-200 rounded-lg shadow-lg py-1">
<a className="block px-4 py-1.5 hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 transition-colors" href="#">
                USA
              </a>
<a className="block px-4 py-1.5 hover:bg-neutral-50 text-neutral-700 hover:text-neutral-900 transition-colors" href="#">
                UK
              </a>
<a className="block px-4 py-1.5 hover:bg-neutral-50 text-neutral-900 font-medium flex items-center justify-between transition-colors" href="#">
                Bahrain
                <iconify-icon className="text-red-600" icon="solar:check-circle-bold"></iconify-icon>
</a>
</div>
</div>
</button>
<span className="hidden sm:inline text-neutral-300">|</span>
<span className="hidden sm:inline font-medium text-neutral-900">BHD</span>
</div>
<div className="flex gap-4">
<a className="text-red-600 font-medium hover:text-red-700 transition-colors hidden sm:flex items-center gap-1" href="javascript:void(0)" onclick="document.getElementById('admin-login-modal').classList.remove('hidden')">
<iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon>
          Admin Panel (Full Access)
        </a>
<a className="hover:text-neutral-900 transition-colors hidden sm:block" href="javascript:void(0)" onclick="document.getElementById('seller-registration-modal').classList.remove('hidden')">
          Sell Globally
        </a>
<a className="hover:text-neutral-900 transition-colors" href="#">
          Help &amp; Support
        </a>
<a className="hover:text-neutral-900 transition-colors" href="javascript:void(0)" onclick="document.getElementById('track-order-modal').classList.remove('hidden')">
          Track Order
        </a>
</div>
</div>

<header className="border-b border-neutral-200 sticky top-0 bg-white/90 backdrop-blur-md z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">

<a className="text-xl font-semibold tracking-tighter shrink-0 uppercase flex items-center gap-1 text-red-600" href="#">
          Golobix
        </a>

<div className="flex-1 max-w-2xl relative hidden sm:block">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-neutral-100 border border-transparent focus:border-neutral-300 focus:bg-white focus:ring-0 rounded-full py-2 pl-10 pr-24 text-sm transition-all outline-none text-neutral-900 placeholder-neutral-500" placeholder="I'm shopping for..." type="text"/>
<button className="absolute inset-y-1 right-1 text-white px-4 rounded-full text-xs font-medium transition-colors bg-red-600 hover:bg-red-700">
            Search
          </button>
</div>

<div className="flex items-center gap-5 sm:gap-6 shrink-0">
<button className="text-neutral-600 hover:text-neutral-900 flex flex-col items-center gap-0.5">
<iconify-icon icon="solar:user-linear" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium hidden sm:block">
              Account
            </span>
</button>
<button className="text-neutral-600 hover:text-neutral-900 flex flex-col items-center gap-0.5">
<iconify-icon icon="solar:heart-linear" width="22"></iconify-icon>
<span className="text-[0.65rem] font-medium hidden sm:block">
              Saved
            </span>
</button>
<button className="text-neutral-600 hover:text-neutral-900 flex flex-col items-center gap-0.5 relative">
<iconify-icon icon="solar:cart-large-2-linear" width="22"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 text-white text-[0.6rem] w-4 h-4 rounded-full flex items-center justify-center font-medium border bg-red-600 border-white">
              2
            </span>
<span className="text-[0.65rem] font-medium hidden sm:block">Cart</span>
</button>
</div>
</div>

<div className="px-4 pb-3 sm:hidden">
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-neutral-400" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-neutral-100 border border-transparent focus:border-neutral-300 focus:bg-white focus:ring-0 rounded-lg py-2 pl-10 pr-4 text-sm transition-all outline-none" placeholder="Search products..." type="text"/>
</div>
</div>

<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-6 overflow-x-auto whitespace-nowrap py-2.5 text-sm font-medium text-neutral-500 hide-scrollbar border-t border-neutral-100 sm:border-none">
<button className="flex items-center gap-1.5 text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="18"></iconify-icon>
          All
        </button>
<div className="w-px h-4 bg-neutral-200 shrink-0"></div>
<a className="hover:text-neutral-900 transition-colors" href="#">
          Today's Deals
        </a>
<a className="hover:text-neutral-900 transition-colors flex items-center gap-1" href="#">
<iconify-icon icon="solar:routing-2-linear"></iconify-icon>
          Import from UK
        </a>
<a className="hover:text-neutral-900 transition-colors" href="#">Fashion</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
          Home &amp; Garden
        </a>
<a className="hover:text-neutral-900 transition-colors" href="#">Beauty</a>
</nav>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<div className="bg-neutral-50 rounded-2xl overflow-hidden relative min-h-[280px] flex items-center mb-8 border border-neutral-200">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 p-8 sm:p-12 md:w-2/3 lg:w-1/2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-neutral-200 bg-white text-xs font-medium text-neutral-600 mb-5">
<iconify-icon className="text-neutral-900" icon="solar:box-linear"></iconify-icon>
            Direct Shipping to Bahrain
          </div>
<h1 className="text-neutral-900 text-3xl sm:text-4xl font-semibold tracking-tight mb-4 leading-tight">
            Shop millions of products at great prices.
          </h1>
<p className="text-neutral-500 text-sm sm:text-base mb-6">
            Explore top categories including electronics, fashion, home goods,
            and more with fast local delivery.
          </p>
<div className="flex flex-wrap gap-3">
<button className="text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors bg-red-600 hover:bg-red-700">
              SuperDeals
            </button>
<button className="bg-white text-neutral-900 border border-neutral-200 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors">
              New Arrivals
            </button>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-1/3 hidden md:flex items-center justify-center opacity-10 pointer-events-none">
<iconify-icon icon="solar:earth-linear" width="300"></iconify-icon>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 shrink-0 space-y-8 hidden md:block">

<div>
<h3 className="text-sm font-semibold tracking-tight mb-4 text-neutral-900">
              Categories
            </h3>
<ul className="space-y-2.5 text-sm text-neutral-600">
<li>
<a className="font-medium text-neutral-900" href="#">
                  All Categories
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Women's Fashion
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Men's Fashion
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Phones &amp; Telecommunications
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Computer, Office &amp; Security
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Consumer Electronics
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Jewelry &amp; Watches
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Home, Pet &amp; Appliances
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Bags &amp; Shoes
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Toys, Kids &amp; Babies
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Outdoor Fun &amp; Sports
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Beauty, Health &amp; Hair
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Automobiles &amp; Motorcycles
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Home Improvement &amp; Tools
                </a>
</li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold tracking-tight mb-4 text-neutral-900">
              Ships From
            </h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-[3px] transition-colors cursor-pointer checked:bg-red-600 checked:border-red-600" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  USA
                </span>
<span className="ml-auto text-xs text-neutral-400">12k</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-[3px] transition-colors cursor-pointer checked:bg-red-600 checked:border-red-600" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  United Kingdom
                </span>
<span className="ml-auto text-xs text-neutral-400">8.4k</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-[3px] transition-colors cursor-pointer checked:bg-red-600 checked:border-red-600" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  Local (Bahrain)
                </span>
<span className="ml-auto text-xs text-neutral-400">2.1k</span>
</label>
</div>
</div>

<div>
<h3 className="text-sm font-semibold tracking-tight mb-4 text-neutral-900">
              Price (BHD)
            </h3>
<div className="px-1 mb-4 relative">

<div className="absolute top-1/2 -translate-y-1/2 left-0 right-4 h-1 rounded-full z-0 pointer-events-none bg-red-600"></div>
<input className="relative z-10" max="1000" min="0" type="range" value="800"/>
</div>
<div className="flex items-center gap-2">
<input className="w-full text-xs text-center border border-neutral-200 rounded-md py-1.5 focus:border-neutral-400 focus:outline-none text-neutral-600" type="text" value="0"/>
<span className="text-neutral-400 text-xs">-</span>
<input className="w-full text-xs text-center border border-neutral-200 rounded-md py-1.5 focus:border-neutral-400 focus:outline-none text-neutral-600" type="text" value="800"/>
</div>
</div>
<div className="h-px bg-neutral-200 w-full"></div>

<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">
                Express Delivery
              </span>
<span className="text-xs text-neutral-500">
                Under 5 business days
              </span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-600"></div>
</label>
</div>
</aside>

<div className="flex-1">

<div className="flex items-center justify-between mb-6">
<span className="text-sm text-neutral-500">
              Showing
              <span className="font-medium text-neutral-900">20,459</span>
              products
            </span>
<div className="flex items-center gap-2 text-sm">
<span className="text-neutral-500">Sort by:</span>
<button className="font-medium text-neutral-900 flex items-center gap-1">
                Best Match
                <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

<a className="group block relative" href="#">
<div className="aspect-[4/5] bg-neutral-50 rounded-xl mb-3 overflow-hidden relative border border-neutral-100">

<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-neutral-50 to-neutral-100">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="64"></iconify-icon>
</div>

<div className="absolute top-2 left-2 flex flex-col gap-1.5">
<span className="bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-900 shadow-sm border border-neutral-100 uppercase tracking-wider">
                    Sale
                  </span>
</div>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-600 shadow-sm border border-neutral-100 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                  Free Shipping
                </div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  Ultra-Slim Pro Laptop 14" M2 Chip 256GB SSD Space Gray
                </h3>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<div className="flex text-neutral-900">
<iconify-icon className="text-neutral-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-900" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-300" icon="solar:star-linear"></iconify-icon>
</div>
<span>4.2</span>
<span>(128)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-base font-semibold tracking-tight text-neutral-900">
                    BHD 345.00
                  </span>
<span className="text-xs text-neutral-400 line-through">
                    BHD 399.00
                  </span>
</div>
<div className="text-[0.65rem] text-neutral-500 pt-0.5">
                  + BHD 12.00 Shipping &amp; Customs
                </div>
</div>
</a>

<a className="group block relative" href="#">
<div className="aspect-[4/5] bg-neutral-50 rounded-xl mb-3 overflow-hidden relative border border-neutral-100">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-neutral-50 to-neutral-100">
<iconify-icon icon="solar:t-shirt-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-600 shadow-sm border border-neutral-100 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                  Free Shipping
                </div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  Classic Premium Cotton T-Shirt Essential Collection
                </h3>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<div className="flex text-neutral-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>4.9</span>
<span>(2k+)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-base font-semibold tracking-tight text-neutral-900">
                    BHD 14.50
                  </span>
</div>
<div className="text-[0.65rem] text-green-600 font-medium pt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                  Free consolidated shipping
                </div>
</div>
</a>

<a className="group block relative" href="#">
<div className="aspect-[4/5] bg-neutral-50 rounded-xl mb-3 overflow-hidden relative border border-neutral-100">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-neutral-50 to-neutral-100">
<iconify-icon icon="solar:smart-speaker-linear" width="64"></iconify-icon>
</div>
<div className="absolute top-2 left-2 flex flex-col gap-1.5">
<span className="text-white text-[0.65rem] px-2 py-1 rounded-[4px] font-medium shadow-sm border uppercase tracking-wider bg-red-600 border-red-600">
                    Top Rated
                  </span>
</div>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-600 shadow-sm border border-neutral-100 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                  Free Shipping
                </div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  Smart Home Hub with Voice Assistant 3rd Gen
                </h3>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<div className="flex text-neutral-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<span>4.6</span>
<span>(840)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-base font-semibold tracking-tight text-neutral-900">
                    BHD 45.00
                  </span>
</div>
<div className="text-[0.65rem] text-neutral-500 pt-0.5">
                  + BHD 4.50 Shipping &amp; Customs
                </div>
</div>
</a>

<a className="group block relative" href="#">
<div className="aspect-[4/5] bg-neutral-50 rounded-xl mb-3 overflow-hidden relative border border-neutral-100">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-neutral-50 to-neutral-100">
<iconify-icon icon="solar:cup-paper-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-600 shadow-sm border border-neutral-100 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                  Local Stock
                </div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  Artisan Ceramic Coffee Mug Set of 4 Minimalist
                </h3>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<div className="flex text-neutral-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-neutral-300" icon="solar:star-linear"></iconify-icon>
</div>
<span>4.0</span>
<span>(42)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-base font-semibold tracking-tight text-neutral-900">
                    BHD 12.00
                  </span>
</div>
<div className="text-[0.65rem] text-green-600 font-medium pt-0.5 flex items-center gap-1">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
                  Next day delivery
                </div>
</div>
</a>

<a className="group block relative hidden sm:block" href="#">
<div className="aspect-[4/5] bg-neutral-50 rounded-xl mb-3 overflow-hidden relative border border-neutral-100">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-neutral-50 to-neutral-100">
<iconify-icon icon="solar:gamepad-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur text-[0.65rem] px-2 py-1 rounded-[4px] font-medium text-neutral-600 shadow-sm border border-neutral-100 flex items-center gap-1">
<iconify-icon icon="solar:box-linear"></iconify-icon>
                  Free Shipping
                </div>
</div>
<div className="space-y-1.5">
<h3 className="text-sm font-medium text-neutral-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors">
                  Wireless Pro Controller Compatible with Next-Gen
                </h3>
<div className="flex items-center gap-1 text-xs text-neutral-500">
<div className="flex text-neutral-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span>4.8</span>
<span>(512)</span>
</div>
<div className="flex items-baseline gap-2 pt-1">
<span className="text-base font-semibold tracking-tight text-neutral-900">
                    BHD 28.90
                  </span>
</div>
<div className="text-[0.65rem] text-neutral-500 pt-0.5">
                  + BHD 3.00 Shipping
                </div>
</div>
</a>
</div>

<div className="mt-12 flex justify-center">
<nav className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 text-neutral-400 hover:text-neutral-900 hover:border-neutral-300 transition-colors disabled:opacity-50" disabled="">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-white text-sm font-medium bg-red-600">
                1
              </button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-50 text-neutral-600 text-sm font-medium transition-colors">
                2
              </button>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-50 text-neutral-600 text-sm font-medium transition-colors">
                3
              </button>
<span className="text-neutral-400 px-1">...</span>
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-50 text-neutral-600 text-sm font-medium transition-colors">
                45
              </button>
<button className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 transition-colors">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</nav>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-12 mt-16 border-t border-neutral-200">
<div className="flex flex-col gap-3">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-neutral-900 mb-1">
              Buyer Protection
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Full refund if you don't receive your order or if item is not as
              described.
            </p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900">
<iconify-icon icon="solar:routing-2-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-neutral-900 mb-1">
              Global Logistics
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Fast and reliable shipping to your doorstep from our global
              network.
            </p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-neutral-900 mb-1">
              Clear Customs
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Duties and taxes calculated at checkout. No hidden fees on
              delivery.
            </p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center text-neutral-900">
<iconify-icon icon="solar:headphones-round-sound-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-neutral-900 mb-1">
              24/7 Support
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Round-the-clock assistance for your international shopping
              journey.
            </p>
</div>
</div>
</div>
</main>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-semibold tracking-tighter uppercase mb-4 block text-red-600" href="#">
              Golobix
            </a>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed mb-6">
              Bridging the gap between international retailers and local
              consumers. Shop the world from the comfort of your home.
            </p>
<div className="flex gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">
              Shop With Us
            </h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Making Payments
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Delivery Options
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Buyer Protection
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Returns &amp; Refunds
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">
              Customer Service
            </h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Transaction Services
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Take our feedback survey
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-neutral-900 mb-4">Partner</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li>
<a className="hover:text-neutral-900 transition-colors" href="javascript:void(0)" onclick="document.getElementById('seller-registration-modal').classList.remove('hidden')">
                  Sell on Golobix
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Affiliate Program
                </a>
</li>
<li>
<a className="hover:text-neutral-900 transition-colors" href="#">
                  Logistics Partners
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200 gap-4">
          © 2023 Golobix International. All rights reserved.
        </div>
</div>
</footer>
<div className="fixed inset-0 z-50 hidden" id="seller-registration-modal">
<div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" onclick="document.getElementById('seller-registration-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-10">
<h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
            Create a seller account
          </h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="document.getElementById('seller-registration-modal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto bg-neutral-50/50">
<div className="flex p-1 bg-neutral-200/50 rounded-lg mb-6">
<button className="flex-1 py-2 text-sm font-medium bg-white rounded-md shadow-sm text-neutral-900">
              Personal account
            </button>
<button className="flex-1 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
              Business account
            </button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); document.getElementById('seller-registration-modal').classList.add('hidden'); alert('Registration submitted successfully!');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                  First name
                </label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" placeholder="First name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                  Last name
                </label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" placeholder="Last name" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">Email</label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" placeholder="Email address" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                Password
              </label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" minlength="8" placeholder="Password" required="" type="password"/>
<p className="text-[0.65rem] text-neutral-500 mt-1">
                At least 8 characters, including 1 letter and 1 number.
              </p>
</div>
<p className="text-[0.65rem] text-neutral-500 leading-relaxed mt-4">
              By creating an account, you agree to our
              <a className="text-blue-600 hover:underline" href="#">
                User Agreement
              </a>
              and acknowledge reading our
              <a className="text-blue-600 hover:underline" href="#">
                User Privacy Notice
              </a>
              .
            </p>
<button className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors mt-6" type="submit">
              Create account
            </button>
</form>
<div className="mt-6 flex items-center gap-4">
<div className="h-px bg-neutral-200 flex-1"></div>
<span className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
              or continue with
            </span>
<div className="h-px bg-neutral-200 flex-1"></div>
</div>
<div className="mt-6 space-y-3">
<button className="w-full py-2.5 px-4 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-full flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 transition-colors" type="button">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
              Google
            </button>
<button className="w-full py-2.5 px-4 bg-white border border-neutral-200 hover:bg-neutral-50 rounded-full flex items-center justify-center gap-2 text-sm font-medium text-neutral-700 transition-colors" type="button">
<iconify-icon icon="logos:apple" width="18"></iconify-icon>
              Apple
            </button>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 hidden" id="admin-login-modal">
<div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" onclick="document.getElementById('admin-login-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-10">
<h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
            Admin Login
          </h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="document.getElementById('admin-login-modal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto bg-neutral-50/50">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Admin login successful!'); document.getElementById('admin-login-modal').classList.add('hidden');">
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                Username
              </label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" id="admin-username" placeholder="Username" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                Password
              </label>
<input className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" id="admin-password" placeholder="Password" required="" type="password"/>
</div>
<button className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors mt-6" type="submit">
              Login to Admin Panel
            </button>
</form>
</div>
</div>
</div>
<div className="fixed inset-0 z-50 hidden" id="track-order-modal">
<div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" onclick="document.getElementById('track-order-modal').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="px-6 py-4 border-b border-neutral-100 flex justify-between items-center bg-white sticky top-0 z-10">
<h2 className="text-xl font-semibold text-neutral-900 tracking-tight">
            Track Your Order
          </h2>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors" onclick="document.getElementById('track-order-modal').classList.add('hidden')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto bg-neutral-50/50">
<form className="space-y-4 mb-6" onsubmit="event.preventDefault(); document.getElementById('tracking-result').classList.remove('hidden');">
<div className="space-y-1.5">
<label className="text-sm font-medium text-neutral-700">
                Tracking Number / Order ID
              </label>
<div className="flex gap-2">
<input className="flex-1 px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all text-sm" placeholder="e.g. TRK-987654321" required="" type="text"/>
<button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors" type="submit">
                  Track Order
                </button>
</div>
</div>
</form>
<div className="hidden bg-white border border-neutral-200 rounded-xl p-5 shadow-sm space-y-6" id="tracking-result">
<div className="flex justify-between items-center border-b border-neutral-100 pb-4">
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">
                  Estimated Delivery
                </p>
<p className="text-lg font-semibold text-neutral-900 tracking-tight">
                  Tomorrow by 8:00 PM
                </p>
</div>
<div className="text-right">
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">
                  Carrier
                </p>
<p className="text-sm font-medium text-neutral-900">
                  Global Express Logistics
                </p>
</div>
</div>
<div className="relative pl-6 space-y-6 before:absolute before:inset-y-2 before:left-[11px] before:w-[2px] before:bg-neutral-200">
<div className="relative">
<div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-sm flex items-center justify-center z-10"></div>
<div>
<p className="text-sm font-semibold text-neutral-900">
                    Out for Delivery
                  </p>
<p className="text-xs text-neutral-500 mt-0.5">
                    Today, 8:45 AM • Local Distribution Center
                  </p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white shadow-sm z-10"></div>
<div>
<p className="text-sm font-medium text-neutral-700">
                    Arrived at Destination Country
                  </p>
<p className="text-xs text-neutral-500 mt-0.5">
                    Yesterday, 2:30 PM • Customs Facility
                  </p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white shadow-sm z-10"></div>
<div>
<p className="text-sm font-medium text-neutral-700">
                    Customs Cleared
                  </p>
<p className="text-xs text-neutral-500 mt-0.5">
                    Oct 21, 10:15 AM • International Gateway
                  </p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white shadow-sm z-10"></div>
<div>
<p className="text-sm font-medium text-neutral-700">
                    Shipped / Handed to Carrier
                  </p>
<p className="text-xs text-neutral-500 mt-0.5">
                    Oct 19, 4:00 PM • Seller Origin City
                  </p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white shadow-sm z-10"></div>
<div>
<p className="text-sm font-medium text-neutral-700">
                    Tracking Information Received
                  </p>
<p className="text-xs text-neutral-500 mt-0.5">Oct 18, 9:20 AM</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
