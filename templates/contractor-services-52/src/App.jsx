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



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F5F5F5]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-[#F96302] rounded flex items-center justify-center text-white shrink-0 group-hover:bg-[#E05902] transition-colors">
<i className="w-6 h-6" data-lucide="droplets"></i>
</div>
<div className="flex flex-col">
<span className="font-semibold tracking-tight leading-none text-xl">Z and Z Plumbing</span>
<span className="text-sm text-[#5C5C5C] font-medium mt-1">CSLB #896116</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-[#5C5C5C] hover:text-[#000000] transition-colors flex items-center gap-1" href="#services">Services <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-[#5C5C5C] hover:text-[#000000] transition-colors flex items-center gap-1" href="#areas">Areas <i className="w-4 h-4" data-lucide="chevron-down"></i></a>
<a className="text-base font-medium text-[#5C5C5C] hover:text-[#000000] transition-colors" href="#about">About</a>
<a className="text-base font-medium text-[#5C5C5C] hover:text-[#000000] transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-base font-semibold hover:text-[#F96302] transition-colors" href="tel:5107084237">
<i className="w-4 h-4 text-[#F96302]" data-lucide="phone"></i>
                    (510) 708-4237
                </a>
<a className="bg-[#000000] hover:bg-[#F96302] text-white px-5 py-2.5 rounded-md font-medium text-base transition-colors" href="#quote">
                    Get a Quote
                </a>
</div>

<button className="md:hidden p-2 text-[#000000]">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative bg-[#F5F5F5] pt-24 pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#5C5C5C]/20 text-sm font-medium text-[#5C5C5C] mb-8">
<span className="w-2 h-2 rounded-full bg-[#F96302]"></span>
                    24/7 Emergency Service Available
                </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#000000] leading-[1.1] mb-6">
                    The Pros Other<br/>Plumbers Call.
                </h1>
<p className="text-xl text-[#5C5C5C] mb-10 max-w-lg leading-relaxed">
                    East Bay's double-licensed plumbing and engineering contractor. San Leandro HQ, serving 11 cities with contractor-grade execution.
                </p>

<div className="bg-white p-2 rounded-lg border border-[#E5E5E5] shadow-sm flex flex-col sm:flex-row gap-2 max-w-md relative focus-within:ring-2 focus-within:ring-[#F96302]/20 focus-within:border-[#F96302] transition-all">
<div className="flex items-center px-4 py-2 sm:py-0 w-full relative">
<i className="w-5 h-5 text-[#5C5C5C] absolute left-4" data-lucide="map-pin"></i>
<input className="w-full pl-8 pr-4 py-2 text-lg bg-transparent outline-none placeholder:text-[#5C5C5C]/60 text-[#000000]" placeholder="Enter your ZIP code" type="text"/>
</div>
<button className="bg-[#F96302] hover:bg-[#E05902] text-white px-6 py-3 rounded-md font-medium text-base whitespace-nowrap transition-colors flex items-center justify-center gap-2">
                        Check Coverage
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<p className="mt-6 text-base text-[#5C5C5C] flex items-center gap-2">
                    or call directly: <a className="font-semibold text-[#000000] hover:text-[#F96302] transition-colors" href="tel:5107084237">(510) 708-4237</a>
</p>
</div>

<div className="hidden lg:block relative h-full min-h-[500px]">

<div className="absolute inset-0 border border-[#E5E5E5] bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8">
<div className="w-full h-full border border-[#F5F5F5] relative bg-[radial-gradient(#E5E5E5_1px,transparent_1px)] [background-size:16px_16px]">

<div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#F96302] rounded-full opacity-20"></div>
<div className="absolute bottom-1/3 right-1/4 w-64 h-64 border border-[#000000] opacity-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-[#E5E5E5] p-6 rounded-xl shadow-sm text-center">
<div className="w-16 h-16 bg-[#F5F5F5] text-[#F96302] rounded-lg flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8" data-lucide="wrench"></i>
</div>
<span className="font-semibold tracking-tight text-xl block">Heavy-Duty<br/>Solutions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#E5E5E5] bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#E5E5E5] border-x border-[#E5E5E5]">
<div className="p-8 flex flex-col items-center justify-center text-center group">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#F96302] transition-colors">23</span>
<span className="text-base text-[#5C5C5C] font-medium">Years in Business<br/>(Since 2003)</span>
</div>
<div className="p-8 flex flex-col items-center justify-center text-center group">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#F96302] transition-colors flex items-center gap-1">238 <i className="w-6 h-6 fill-current text-[#F96302]" data-lucide="star"></i></span>
<span className="text-base text-[#5C5C5C] font-medium">5-Star Reviews<br/>Yelp &amp; Google</span>
</div>
<div className="p-8 flex flex-col items-center justify-center text-center group">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#F96302] transition-colors">2</span>
<span className="text-base text-[#5C5C5C] font-medium">Licenses Held<br/>(C-36 + A-Gen)</span>
</div>
<div className="p-8 flex flex-col items-center justify-center text-center group">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#000000] mb-2 group-hover:text-[#F96302] transition-colors">24/7</span>
<span className="text-base text-[#5C5C5C] font-medium">Emergency Response<br/>East Bay Area</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#000000] mb-4">Contractor-Grade Services.</h2>
<p className="text-xl text-[#5C5C5C]">We handle the complex jobs others sub out. From massive commercial lines to residential emergencies.</p>
</div>
<a className="inline-flex items-center gap-2 text-base font-semibold text-[#000000] hover:text-[#F96302] transition-colors whitespace-nowrap" href="#all-services">
                    View All Services <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="git-branch"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Sewer Lateral</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">Complete replacement and repair using advanced techniques. We hold the A-General license required for city connections.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="pipette"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Whole Home Repipe</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">Upgrade aging galvanized or polybutylene pipes to modern copper or PEX for better pressure and reliability.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="waves"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Hydrojetting</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">High-pressure water scouring to clear stubborn blockages, grease, and roots restoring pipes to near-new capacity.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="move-horizontal"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Trenchless Sewer</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">Replace underground lines without destroying your driveway or landscaping using pipe bursting or lining.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="thermometer"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Water Heaters</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">Installation and repair of traditional tank and modern tankless systems for continuous hot water.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>

<a className="block p-8 rounded-xl border border-[#E5E5E5] bg-white hover:border-[#F96302] hover:shadow-sm transition-all group" href="#">
<div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center text-[#000000] mb-6 group-hover:bg-[#F96302] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="arrow-down-to-line"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-3">Drain Cleaning</h3>
<p className="text-base text-[#5C5C5C] mb-6 line-clamp-2">Fast, effective snaking and clearing for sinks, tubs, toilets, and main lines. We get things flowing again.</p>
<span className="text-sm font-semibold text-[#F96302] flex items-center gap-1">Learn more <i className="w-4 h-4" data-lucide="chevron-right"></i></span>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#000000] text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-tight">
                    Two licenses.<br/>One call.
                </h2>
<div className="space-y-6 text-xl text-[#F5F5F5]/80">
<p>
                        Most plumbers hold a standard C-36 license. That covers the basics inside the building footprint.
                    </p>
<p>
                        We hold both a <strong className="text-white font-semibold">C-36 Plumbing</strong> and an <strong className="text-white font-semibold">A General Engineering</strong> license. 
                    </p>
<p>
                        This means we are legally and technically equipped to handle massive excavations, public right-of-way tie-ins, and complex sewer lateral work that other plumbers are forced to sub out.
                    </p>
</div>
<div className="mt-10 flex items-center gap-6">
<div className="flex flex-col">
<span className="text-sm text-[#F5F5F5]/60 font-medium uppercase tracking-wider mb-1">License</span>
<span className="text-2xl font-semibold tracking-tight">C-36</span>
</div>
<div className="w-px h-12 bg-white/20"></div>
<div className="flex flex-col">
<span className="text-sm text-[#F5F5F5]/60 font-medium uppercase tracking-wider mb-1">License</span>
<span className="text-2xl font-semibold tracking-tight">A-Gen</span>
</div>
<div className="w-px h-12 bg-white/20"></div>
<div className="flex flex-col">
<span className="text-sm text-[#F5F5F5]/60 font-medium uppercase tracking-wider mb-1">CSLB #</span>
<span className="text-2xl font-semibold tracking-tight">896116</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px] border border-white/10 rounded-2xl bg-white/5 p-8 flex flex-col justify-between">
<i className="w-16 h-16 text-[#F96302]" data-lucide="shield-check"></i>
<div>
<h3 className="text-3xl font-semibold tracking-tight mb-2">Authority in execution.</h3>
<p className="text-base text-[#F5F5F5]/60">Operating since 2003. Led by Jay and Seif. Zero fluff, just results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-[#E5E5E5]" id="areas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#000000] mb-6">Serving the East Bay.</h2>
<p className="text-xl text-[#5C5C5C]">Headquartered in San Leandro. Operating across 11 key cities in Alameda and Contra Costa counties.</p>
</div>

<div className="relative w-full h-[500px] bg-[#F5F5F5] rounded-2xl border border-[#E5E5E5] overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative z-10 bg-white/90 backdrop-blur p-8 rounded-xl border border-[#E5E5E5] shadow-sm max-w-md w-full mx-4 text-center">
<i className="w-10 h-10 text-[#000000] mx-auto mb-4" data-lucide="map"></i>
<h3 className="text-2xl font-semibold tracking-tight text-[#000000] mb-2">Interactive Coverage Map</h3>
<p className="text-base text-[#5C5C5C] mb-6">Enter your ZIP code to verify service availability in your specific neighborhood.</p>
<div className="flex flex-col gap-2 relative">
<input className="w-full px-4 py-3 bg-[#F5F5F5] border border-[#E5E5E5] rounded-md outline-none focus:ring-2 focus:ring-[#F96302]/20 focus:border-[#F96302] text-lg text-center transition-all" placeholder="e.g. 94577" type="text"/>
<button className="w-full bg-[#000000] hover:bg-[#F96302] text-white px-6 py-3 rounded-md font-medium text-base transition-colors">
                            Verify Area
                        </button>
</div>
</div>

<div className="absolute top-1/4 left-1/3 flex flex-col items-center">
<i className="w-6 h-6 text-[#F96302] fill-[#F96302]/20" data-lucide="map-pin"></i>
<span className="text-xs font-semibold mt-1 px-2 py-0.5 bg-white rounded shadow-sm border border-[#E5E5E5]">Oakland</span>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-0">
<div className="relative flex items-center justify-center">
<span className="absolute inline-flex h-full w-full rounded-full bg-[#F96302] opacity-20 animate-ping"></span>
<i className="w-8 h-8 text-[#F96302] fill-[#F96302]" data-lucide="map-pin"></i>
</div>
<span className="text-sm font-semibold mt-1 px-2 py-1 bg-white rounded shadow-sm border border-[#F96302] text-[#F96302]">San Leandro HQ</span>
</div>
<div className="absolute bottom-1/3 right-1/3 flex flex-col items-center">
<i className="w-6 h-6 text-[#5C5C5C]" data-lucide="map-pin"></i>
<span className="text-xs font-semibold mt-1 px-2 py-0.5 bg-white rounded shadow-sm border border-[#E5E5E5]">Hayward</span>
</div>
</div>
<div className="mt-12 flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-[#F5F5F5] text-[#5C5C5C] text-sm font-medium rounded-md border border-[#E5E5E5]">San Leandro</span>
<span className="px-4 py-2 bg-[#F5F5F5] text-[#5C5C5C] text-sm font-medium rounded-md border border-[#E5E5E5]">Oakland</span>
<span className="px-4 py-2 bg-[#F5F5F5] text-[#5C5C5C] text-sm font-medium rounded-md border border-[#E5E5E5]">Alameda</span>
<span className="px-4 py-2 bg-[#F5F5F5] text-[#5C5C5C] text-sm font-medium rounded-md border border-[#E5E5E5]">Berkeley</span>
<span className="px-4 py-2 bg-[#F5F5F5] text-[#5C5C5C] text-sm font-medium rounded-md border border-[#E5E5E5]">Richmond</span>
<span className="text-[#5C5C5C] text-sm font-medium py-2">+ 6 more cities</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F5F5F5]">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#000000] mb-4">Trusted by the East Bay.</h2>
<div className="flex items-center gap-2">
<div className="flex text-[#F96302]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<span className="text-base text-[#5C5C5C] font-medium">4.9/5 based on 238+ reviews</span>
</div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-[#E5E5E5]">
<div className="flex text-[#F96302] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-[#000000] mb-6 leading-relaxed">"Jay and his crew replaced our galvanized pipes. Showed up on time, worked fast, and cleaned up like they were never here. Professional outfit."</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-base font-semibold text-[#000000]">— Mark T.</span>
<span className="text-sm text-[#5C5C5C]">Oakland, CA</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-[#E5E5E5]">
<div className="flex text-[#F96302] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-[#000000] mb-6 leading-relaxed">"Called at 2am for a main line backup. They were here by 3am. Had the hydrojetter running and the problem solved before sunrise. Lifesavers."</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-base font-semibold text-[#000000]">— Sarah L.</span>
<span className="text-sm text-[#5C5C5C]">Berkeley, CA</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-[#E5E5E5] hidden lg:block">
<div className="flex text-[#F96302] mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i><i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-[#000000] mb-6 leading-relaxed">"Other plumbers told me I needed to tear up my driveway. Z and Z used a trenchless method. Saved me thousands and a massive headache."</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-base font-semibold text-[#000000]">— David R.</span>
<span className="text-sm text-[#5C5C5C]">San Leandro, CA</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-base font-semibold text-[#000000] hover:text-[#F96302] transition-colors" href="#">
                    See All Reviews <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="bg-[#F96302] py-24 lg:py-32">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-8">
                Ready to call the pros?
            </h2>
<p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                Get a quote online or call directly. We respond fast, give straight answers, and get the job done right.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#000000] hover:bg-white hover:text-[#000000] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all text-center" href="#quote">
                    Get a Free Quote
                </a>
<span className="text-white/60 font-medium">or</span>
<a className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-[#F96302] text-white px-8 py-4 rounded-md font-semibold text-lg transition-all text-center flex items-center justify-center gap-2" href="tel:5107084237">
<i className="w-5 h-5" data-lucide="phone"></i>
                    (510) 708-4237
                </a>
</div>
</div>
</section>

<footer className="bg-[#000000] py-16 text-white border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-8 h-8 bg-[#F96302] rounded flex items-center justify-center text-white shrink-0">
<i className="w-5 h-5" data-lucide="droplets"></i>
</div>
<span className="font-semibold tracking-tight text-xl">Z and Z Plumbing</span>
</div>
<p className="text-base text-[#F5F5F5]/60 max-w-sm mb-6">
                        The Pros Other Plumbers Call. East Bay's premier double-licensed plumbing and engineering contractor.
                    </p>
<div className="space-y-2 text-base text-[#F5F5F5]/80">
<p>3057 Teagarden Street</p>
<p>San Leandro, CA 94577</p>
</div>
</div>

<div>
<h4 className="text-base font-semibold mb-6 uppercase tracking-wider text-[#F5F5F5]/60">Services</h4>
<ul className="space-y-4 text-base text-[#F5F5F5]/80">
<li><a className="hover:text-[#F96302] transition-colors" href="#">Sewer Lateral</a></li>
<li><a className="hover:text-[#F96302] transition-colors" href="#">Whole Home Repipe</a></li>
<li><a className="hover:text-[#F96302] transition-colors" href="#">Hydrojetting</a></li>
<li><a className="hover:text-[#F96302] transition-colors" href="#">Trenchless Repair</a></li>
<li><a className="hover:text-[#F96302] transition-colors" href="#">Water Heaters</a></li>
</ul>
</div>

<div>
<h4 className="text-base font-semibold mb-6 uppercase tracking-wider text-[#F5F5F5]/60">Contact</h4>
<ul className="space-y-4 text-base text-[#F5F5F5]/80">
<li><a className="text-[#F96302] font-semibold hover:text-white transition-colors" href="tel:5107084237">(510) 708-4237</a></li>
<li>Available 24/7 for emergencies</li>
<li>Mon–Sat 8am–5pm office</li>
</ul>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-[#F96302] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded bg-white/10 flex items-center justify-center hover:bg-[#F96302] transition-colors" href="#"><i className="w-5 h-5" data-lucide="message-square"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#F5F5F5]/60">
<div className="flex items-center gap-4">
<span>CSLB #896116</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>C-36 Plumbing</span>
<span className="w-1 h-1 bg-white/20 rounded-full"></span>
<span>A General Engineering</span>
</div>
<p>© 2026 Z and Z Plumbing. All rights reserved.</p>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E5E5] p-4 flex gap-3 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
<a className="flex-1 bg-[#F5F5F5] text-[#000000] py-3 rounded-md font-semibold text-base flex items-center justify-center gap-2 border border-[#E5E5E5]" href="tel:5107084237">
<i className="w-4 h-4" data-lucide="phone"></i> Call
        </a>
<a className="flex-[2] bg-[#F96302] text-white py-3 rounded-md font-semibold text-base flex items-center justify-center" href="#quote">
            Get a Quote
        </a>
</div>


    </>
  );
}
