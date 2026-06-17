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
      



<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex-grow w-full">

<nav className="flex items-center text-sm text-gray-500 mb-6">
<a className="inline-flex items-center hover:text-gray-900 transition-colors font-light" href="#">
<svg className="w-4 h-4 mr-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
    Back To Suppliers
  </a>
</nav>

<div className="flex flex-col md:flex-row md:items-center gap-5 mb-8 gap-x-5 gap-y-5">
<div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
<img alt="The Glasshouse Estate Logo" className="w-full h-full rounded-full object-cover border border-gray-200 shadow-sm" src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex-grow">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-y-3 mb-3">
<div className="flex flex-col">
<h1 className="text-3xl font-extralight tracking-tight text-gray-900 md:text-3xl">
              The Glasshouse Estate
            </h1>
<span className="block mt-2 text-sm font-normal text-gray-500">Event Venue</span>
</div>
<div className="flex items-center text-sm text-gray-600">
<svg className="w-4 h-4 mr-2 text-gray-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            123 Vineyard Drive, Napa Valley, CA
            <button className="ml-3 text-blue-600 hover:underline font-thin">
              Show on map
            </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row gap-8 mb-12 gap-x-8 gap-y-8 items-stretch">

<div className="w-full lg:w-2/3 h-[400px] md:h-[500px] lg:h-auto lg:min-h-[600px] relative group rounded-2xl overflow-hidden shadow-md bg-gray-100">
<img alt="Venue Main" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-90"></div>
<button className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm text-gray-900 text-sm font-extralight px-5 py-2.5 rounded-full shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
      View all photos
    </button>
</div>

<div className="w-full lg:w-1/3 flex-shrink-0">
<div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 h-full flex flex-col">
<div className="mb-8 flex-grow">
<h2 className="text-2xl font-extralight tracking-tight text-gray-900 mb-5">About {Supplier Name}</h2>
<div className="space-y-4 text-sm text-gray-600 font-extralight leading-relaxed">
<p className="">
            A stunning modern greenhouse venue surrounded by acres of private vineyards, perfect for elegant outdoor celebrations. The Glasshouse Estate offers a unique blend of contemporary architecture and natural beauty, providing an unforgettable backdrop for your special day.
          </p>
<p className="">
            Our venue features a fully climate-controlled main glasshouse that can accommodate up to 200 guests for a seated dinner, along with sprawling manicured lawns for outdoor ceremonies or cocktail hours under the stars.
          </p>
</div>
</div>
<hr className="border-gray-200 mb-8"/>
<div className="">
<h3 className="text-sm font-light text-gray-900 mb-4">Contact Details</h3>
<div className="flex flex-col gap-4 text-sm">
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
<a className="font-extralight text-gray-700 hover:text-gray-900 transition-colors" href="#">www.glasshouseestate.com</a>
</div>
<div className="flex items-center gap-2.5">
<svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<a className="font-extralight text-gray-700 hover:text-gray-900 transition-colors" href="tel:+15551234567">+1 (555) 123-4567</a>
</div>
<div className="flex items-center gap-3 pt-1">
<a className="text-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors flex items-center justify-center" href="#">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full">
<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
<div className="mb-5">
<h3 className="text-lg font-normal text-gray-900 mb-1">Send an Enquiry</h3>
<p className="text-sm text-gray-500">Send {supplier name} an email</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-sm font-light text-gray-700 mb-1">Name</label>
<input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow" placeholder="Your name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-light text-gray-700 mb-1">Email</label>
<input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow" placeholder="Your email" type="email"/>
</div>
<div className="">
<label className="block text-sm font-light text-gray-700 mb-1">Phone Number</label>
<input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow" placeholder="Your phone number" type="tel"/>
</div>
<div className="">
<label className="block text-sm font-light text-gray-700 mb-1">Event Name</label>
<input className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow" placeholder="e.g. Wedding Reception" type="text"/>
</div>
</div>
<div className="">
<label className="block text-sm font-light text-gray-700 mb-1">Message</label>
<textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-shadow resize-none" placeholder="Tell us about your event..." rows="4"></textarea>
</div>
<button className="w-full md:w-auto px-6 bg-gray-900 text-white font-light text-sm py-3 rounded-lg hover:bg-gray-800 transition-colors mt-4" type="button">
              Send Enquiry
            </button>
</form>
</div>
</div>
</div>

<footer className="bg-white border-t border-gray-200 mt-auto"></footer>

    </>
  );
}
