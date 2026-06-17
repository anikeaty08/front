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
      

<header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
<div className="container mx-auto flex h-16 items-center justify-between px-6 lg:px-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">B&amp;CC</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#fleet">Fleet</a>
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">Sign In</a>
<a className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300" href="#">
                    Get a Quote
                </a>
</div>
</div>
</header>
<main className="flex-1">

<section className="relative w-full overflow-hidden bg-gray-50 py-24 md:py-32 lg:py-48">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="container mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
<div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 mb-8 text-xs font-medium text-gray-600 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                    Now taking bookings for 2025
                </div>
<h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6">
                    Elevate your journey with premium transport.
                </h1>
<p className="max-w-2xl text-base sm:text-lg text-gray-500 font-normal mb-10 leading-relaxed">
                    Reliable, comfortable, and modern bus and coach services for corporate events, private group tours, and nationwide travel logistics.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 w-full sm:w-auto" href="#">
                        Book your trip
                    </a>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 w-full sm:w-auto" href="#fleet">
                        Explore our fleet
                    </a>
</div>
</div>
</section>

<section className="w-full py-24 bg-white" id="services">
<div className="container mx-auto px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Comprehensive travel solutions</h2>
<p className="text-base text-gray-500 font-normal">Tailored services designed to meet the specific requirements of any group size or destination.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col items-start p-8 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all hover:bg-gray-50 hover:border-gray-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm mb-6 text-gray-700">
<iconify-icon height="20" icon="solar:case-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Corporate Travel</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Executive coaches equipped with Wi-Fi, power outlets, and comfortable seating to ensure your team arrives refreshed.</p>
</div>

<div className="group flex flex-col items-start p-8 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all hover:bg-gray-50 hover:border-gray-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm mb-6 text-gray-700">
<iconify-icon height="20" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Private Tours</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Custom itineraries mapped out with experienced drivers, perfect for sightseeing, school trips, and private excursions.</p>
</div>

<div className="group flex flex-col items-start p-8 rounded-2xl border border-gray-100 bg-gray-50/50 transition-all hover:bg-gray-50 hover:border-gray-200">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm mb-6 text-gray-700">
<iconify-icon height="20" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 tracking-tight mb-2">Event Logistics</h3>
<p className="text-sm text-gray-500 font-normal leading-relaxed">Seamless transportation coordination for large scale events, conferences, and weddings to ensure everyone is on time.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-gray-50 border-y border-gray-100" id="fleet">
<div className="container mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative aspect-[4/3] w-full rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center group">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<iconify-icon className="text-gray-300 relative z-10 transition-transform duration-700 group-hover:scale-110" height="80" icon="solar:bus-linear" style={{strokeWidth: '1.5'}} width="80"></iconify-icon>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-100 p-4 rounded-xl flex items-center justify-between z-20">
<div>
<p className="text-sm font-medium text-gray-900">Luxury Coach Series</p>
<p className="text-xs text-gray-500">54 Seater • Climate Control</p>
</div>
<iconify-icon className="text-gray-400" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
<div className="order-1 lg:order-2 flex flex-col justify-center space-y-8">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Modern fleet, exceptional safety standards.</h2>
<p className="text-base text-gray-500 font-normal leading-relaxed">
                                Our vehicles are meticulously maintained to provide the highest levels of safety and comfort. Enjoy panoramic windows, reclining seats, and onboard amenities on every journey.
                            </p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-gray-900" height="20" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Rigorous Maintenance</p>
<p className="text-sm text-gray-500 font-normal mt-1">Weekly mechanical inspections and daily deep cleaning protocols.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-gray-900" height="20" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Professional Drivers</p>
<p className="text-sm text-gray-500 font-normal mt-1">Vetted, highly trained drivers with extensive route experience.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-gray-900" height="20" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">24/7 Dispatch Support</p>
<p className="text-sm text-gray-500 font-normal mt-1">Round-the-clock monitoring to ensure your trip runs on schedule.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="w-full py-24 bg-white">
<div className="container mx-auto px-6 lg:px-8">
<div className="flex flex-col items-center justify-center text-center space-y-8 max-w-2xl mx-auto">
<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 border border-gray-100 mb-2">
<iconify-icon className="text-gray-900" height="28" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Ready to plan your journey?</h2>
<p className="text-base text-gray-500 font-normal">
                        Get in touch with our logistics team today for a transparent, custom quote tailored to your specific transportation needs.
                    </p>
<div className="w-full max-w-sm space-y-3">
<input className="w-full h-11 rounded-md border border-gray-200 px-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 bg-gray-50/50 focus:bg-white" placeholder="Enter your email address" type="email"/>
<button className="w-full h-11 inline-flex items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800">
                            Request Quote
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-gray-100 bg-white pt-16 pb-8">
<div className="container mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 flex flex-col pr-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900 mb-4" href="#">B&amp;CC</a>
<p className="text-sm text-gray-500 font-normal mb-6 max-w-xs">
                        Defining the standard for reliable and comfortable group transportation across the region.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-gray-900 mb-2">Company</span>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Careers</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">News</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-gray-900 mb-2">Services</span>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Corporate Travel</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">School Trips</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Private Tours</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Airport Transfers</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-medium text-gray-900 mb-2">Legal</span>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#">Cookie Policy</a>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 Bus &amp; Coach Company. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon height="16" icon="solar:global-linear" width="16"></iconify-icon>
<span>English (US)</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
