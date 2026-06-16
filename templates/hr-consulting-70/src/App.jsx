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
      

<header className="bg-white sticky top-0 z-50 shadow-sm">
<div className="max-w-[1280px] mx-auto px-6 h-24 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<svg className="w-8 h-8 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
<span className="text-2xl font-bold tracking-tight text-slate-900">
            Consalt
          </span>
</a>
<nav className="hidden lg:flex items-center space-x-8">
<a className="text-sm font-semibold text-slate-800 flex items-center gap-1 hover:text-[#007A65] transition-colors" href="#">
            Home
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<a className="text-sm font-semibold text-slate-800 hover:text-[#007A65] transition-colors" href="#">
            About
          </a>
<a className="text-sm font-semibold text-[#007A65] flex items-center gap-1" href="#">
            Service
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<a className="text-sm font-semibold text-slate-800 flex items-center gap-1 hover:text-[#007A65] transition-colors" href="#">
            Pages
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<a className="text-sm font-semibold text-slate-800 flex items-center gap-1 hover:text-[#007A65] transition-colors" href="#">
            Portfolio
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<a className="text-sm font-semibold text-slate-800 flex items-center gap-1 hover:text-[#007A65] transition-colors" href="#">
            Blog
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
<a className="text-sm font-semibold text-slate-800 hover:text-[#007A65] transition-colors" href="#">
            Contact
          </a>
</nav>
<div className="flex items-center gap-6">
<button className="text-slate-800 hover:text-[#007A65] transition-colors hidden sm:block">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</button>
<a className="hidden md:inline-flex items-center justify-center bg-[#007A65] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#006050] transition-colors shadow-[0_4px_14px_rgba(0,122,101,0.3)]" href="#">
            Get A Quote
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<button className="lg:hidden text-slate-800">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</header>

<section className="bg-white pt-8 pb-16 px-6">
<div className="max-w-[1280px] mx-auto relative rounded-[2rem] overflow-hidden h-[360px] md:h-[450px] flex flex-col items-center justify-center text-center shadow-lg">
<img alt="Team working" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&amp;fit=crop&amp;q=80&amp;w=2560"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="relative z-10 mt-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Service
          </h1>
<nav className="flex items-center justify-center space-x-2 text-sm font-semibold text-white/90">
<a className="hover:text-white flex items-center gap-1.5 transition-colors" href="#">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 3l8 6v12h-5v-7h-6v7H4V9l8-6z"></path>
</svg>
              Home
            </a>
<span>/</span>
<span className="text-white">Service</span>
</nav>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white relative overflow-hidden">
<div className="absolute left-0 top-20 opacity-5 pointer-events-none">
<svg fill="none" height="200" viewbox="0 0 200 200" width="200">
<circle cx="0" cy="100" r="100" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="0" cy="100" r="80" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="0" cy="100" r="60" stroke="currentColor" strokeWidth="2"></circle>
<circle cx="0" cy="100" r="40" stroke="currentColor" strokeWidth="2"></circle>
</svg>
</div>
<div className="absolute right-10 top-10 opacity-30 hidden md:block text-[#007A65]">
<svg fill="none" height="40" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="40">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<div className="absolute left-20 top-32 opacity-30 hidden md:block text-yellow-500">
<svg fill="none" height="30" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="30">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
</svg>
</div>
<div className="max-w-[1280px] mx-auto px-6 text-center relative z-10">
<span className="text-xs font-bold tracking-widest text-[#007A65] uppercase mb-3 block">
          SERVICES WE PROVIDE
        </span>
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 relative inline-block">
          Individuals Professional Offer
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-[#007A65]"></div>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 flex flex-col items-center pb-8 transition-transform hover:-translate-y-1">
<div className="w-full h-52 relative mb-8">
<img alt="Service" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#007A65] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                DEVELOPMENT
              </div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">
              Website Development
            </h3>
<p className="text-slate-500 text-sm px-8 mb-6 leading-relaxed">
              Seamlessly expedite extensible business methodologies benchmark
              done
            </p>
<a className="text-sm font-semibold text-slate-800 hover:text-[#007A65] flex items-center gap-1 transition-colors" href="#">
              View details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 flex flex-col items-center pb-8 transition-transform hover:-translate-y-1">
<div className="w-full h-52 relative mb-8">
<img alt="Service" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#007A65] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                DESIGN
              </div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">
              Product Designing
            </h3>
<p className="text-slate-500 text-sm px-8 mb-6 leading-relaxed">
              Seamlessly expedite extensible business methodologies benchmark
              done
            </p>
<a className="text-sm font-semibold text-slate-800 hover:text-[#007A65] flex items-center gap-1 transition-colors" href="#">
              View details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-slate-100 flex flex-col items-center pb-8 transition-transform hover:-translate-y-1">
<div className="w-full h-52 relative mb-8">
<img alt="Service" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#007A65] text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                DEVELOPMENT
              </div>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">
              Database Management
            </h3>
<p className="text-slate-500 text-sm px-8 mb-6 leading-relaxed">
              Seamlessly expedite extensible business methodologies benchmark
              done
            </p>
<a className="text-sm font-semibold text-slate-800 hover:text-[#007A65] flex items-center gap-1 transition-colors" href="#">
              View details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-2.5 h-2.5 rounded-full bg-[#007A65]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
</div>
</section>

<section className="bg-[#007A65] py-12 relative overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div>
<span className="text-white/80 text-xs font-bold tracking-wider uppercase mb-2 block">
            CALL TO ACTION
          </span>
<h2 className="text-2xl md:text-3xl font-bold text-white">
            Get A Free Finance Consultant
          </h2>
</div>
<div className="flex items-center gap-8">
<div className="flex items-center gap-4 hidden lg:flex">
<div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div>
<span className="text-white/80 text-[10px] font-bold tracking-wider uppercase block">
                CALL US ANYTIME
              </span>
<span className="text-lg font-bold text-white">
                +000 123 (4567) 890
              </span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white text-sm font-bold hover:bg-white hover:text-[#007A65] transition-colors tracking-wide" href="#">
            CONTACT US
          </a>
</div>
</div>
<svg className="w-12 h-12 text-white/20 absolute right-[45%] top-1/2 -translate-y-1/2 hidden md:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
<path d="M6 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
<path d="M14 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
<path d="M10 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
<path d="M10 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
</svg>
</section>
<section className="bg-[#0B2522] py-24 relative">
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#007A65] text-xs font-bold tracking-wider uppercase mb-4 block">
            FINANCE CONSULTING
          </span>
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Best Finance Consulting In Town Since 2007
          </h2>
<p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10 max-w-md">
            Media leadership skills before cross-media innovation develop
            standardized platforms without.
          </p>
<div className="flex items-center gap-6">
<span className="text-5xl font-bold text-white tracking-tight">
              4.98
            </span>
<div>
<div className="flex text-[#007A65] mb-1">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<span className="text-slate-400 text-sm font-medium">
                Avg. Client's Rating..
              </span>
</div>
</div>
</div>
<div className="relative bg-white rounded-[2rem] flex flex-col md:flex-row overflow-visible shadow-2xl">
<div className="w-full md:w-[45%] shrink-0">
<img alt="Client" className="w-full h-full object-cover rounded-t-[2rem] md:rounded-l-[2rem] md:rounded-tr-none min-h-[300px]" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full p-8 md:p-10 relative flex flex-col justify-center">
<div className="text-[#007A65] text-6xl font-serif absolute top-4 left-8">
              “
            </div>
<div className="flex text-yellow-400 mb-4 mt-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Conveniently transform cross-functional architectures without
              cross-media equity. Assertively Appropriate underwhelm proactive
              leadership skills without future applicant awesome client.
            </p>
<div>
<h4 className="text-lg font-bold text-slate-900">John D. Alexon</h4>
<span className="text-[#007A65] text-xs font-semibold">
                UX Engineer
              </span>
</div>
<div className="absolute top-1/2 -right-6 -translate-y-1/2 flex flex-col gap-3">
<button className="w-10 h-10 rounded-full bg-[#007A65] text-white flex items-center justify-center shadow-lg hover:bg-[#006050] transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center shadow-lg hover:bg-slate-50 transition-colors">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="max-w-[1280px] mx-auto px-6 mt-32">
<div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30">
<span className="text-2xl font-bold text-white tracking-widest uppercase flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
</svg>
            Walmart
          </span>
<span className="text-2xl font-bold text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path>
</svg>
            envato
          </span>
<span className="text-2xl font-bold text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
            Nextmove
          </span>
<span className="text-2xl font-bold text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"></path>
</svg>
            Microsoft
          </span>
<span className="text-2xl font-bold text-white flex items-center gap-2">
<svg className="w-6 h-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
</svg>
            umbrella
          </span>
</div>
</div>
</section>
<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.03]">
<svg height="400" viewbox="0 0 100 100" width="300">
<rect fill="#007A65" height="30" transform="rotate(45 25 25)" width="30" x="10" y="10"></rect>
<rect fill="#007A65" height="30" transform="rotate(45 65 25)" width="30" x="50" y="10"></rect>
<rect fill="#007A65" height="30" transform="rotate(45 25 65)" width="30" x="10" y="50"></rect>
<rect fill="#007A65" height="30" transform="rotate(45 65 65)" width="30" x="50" y="50"></rect>
</svg>
</div>
<div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<span className="text-[#007A65] text-xs font-bold tracking-wider uppercase mb-4 block">
            PRICING PLANS
          </span>
<h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight max-w-lg">
            Choose the Comfotable Pricing Plans for your Consultant Service
          </h2>
<p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Continually plagiarize virtual web services home, maximizing action
            items. Globally avoid hard-end azimuths.
          </p>
<div className="flex flex-col sm:flex-row gap-6 mb-10">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm font-semibold text-slate-800">
                Moneyback Guarantee
              </span>
</div>
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
<span className="text-sm font-semibold text-slate-800">
                Moneyback Guarantee
              </span>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#007A65] text-white text-sm font-bold hover:bg-[#006050] transition-colors tracking-wide" href="#">
            CONTACT US
          </a>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="w-full sm:w-1/2 bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_4px_30px_rgb(0,0,0,0.06)] flex flex-col relative">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-[#f4f7f6] flex items-center justify-center text-[#007A65]">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Starter Plan</h3>
<span className="text-sm text-slate-500 font-medium">
                  Individual
                </span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                Unlimited Websites
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                10+ Paid Plugins
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                Woocommerce Support
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                50+ WP Theme
              </li>
</ul>
<div className="mt-auto">
<div className="flex items-baseline gap-1 mb-6 border-t border-slate-100 pt-6">
<span className="text-xl font-bold text-[#007A65]">$</span>
<span className="text-5xl font-bold text-[#007A65] tracking-tight">
                  27
                </span>
<span className="text-sm text-slate-500 font-medium">/ Month</span>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full border-2 border-[#e6eaea] text-slate-700 text-sm font-bold hover:border-[#007A65] hover:text-[#007A65] transition-colors" href="#">
                Purchase Now
              </a>
</div>
</div>
<div className="w-full sm:w-1/2 bg-[#F8F9FA] rounded-2xl p-8 border border-slate-100 shadow-[0_10px_40px_rgb(0,0,0,0.08)] flex flex-col transform sm:scale-105 z-10">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#007A65] shadow-sm">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Business Plan</h3>
<span className="text-sm text-slate-500 font-medium">Company</span>
</div>
</div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 font-medium">
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                Unlimited Websites
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                10+ Paid Plugins
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                Woocommerce Support
              </li>
<li className="flex items-center gap-3">
<svg className="w-4 h-4 text-[#007A65]" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M20 6L9 17l-5-5"></path>
</svg>
                50+ WP Theme
              </li>
</ul>
<div className="mt-auto">
<div className="flex items-baseline gap-1 mb-6 border-t border-slate-200 pt-6">
<span className="text-xl font-bold text-[#007A65]">$</span>
<span className="text-5xl font-bold text-[#007A65] tracking-tight">
                  39
                </span>
<span className="text-sm text-slate-500 font-medium">/ Month</span>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full bg-white border border-[#e6eaea] text-[#007A65] text-sm font-bold hover:border-[#007A65] shadow-sm transition-colors" href="#">
                Purchase Now
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0B2522] pt-24 pb-8 text-slate-300 mt-auto relative overflow-hidden">
<div className="max-w-[1280px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
<div className="flex flex-col">
<h4 className="text-lg font-bold text-white mb-6">About Us</h4>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">
              Continually plagiarize virtual web services with home, pro
              maximizing action.
            </p>
<div className="relative">
<input className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 px-6 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#007A65]" placeholder="Your Email" type="email"/>
<button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#007A65] flex items-center justify-center text-white hover:bg-[#006050] transition-colors">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>
</div>
<div className="flex flex-col lg:pl-12">
<h4 className="text-lg font-bold text-white mb-6">Company</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Meet Our Team
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Integrations
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Contact Us
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>
<div className="flex flex-col">
<h4 className="text-lg font-bold text-white mb-6">Service</h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Consultant
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Web Development
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  UI Design
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Networking
                </a>
</li>
<li>
<a className="text-sm text-slate-400 hover:text-[#007A65] transition-colors" href="#">
                  Search Engine
                </a>
</li>
</ul>
</div>
<div className="flex flex-col">
<h4 className="text-lg font-bold text-white mb-6">Contact</h4>
<div className="space-y-6">
<div className="flex items-center gap-4">
<img alt="Post" className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<h5 className="text-[13px] font-semibold text-white mb-1.5 hover:text-[#007A65] cursor-pointer transition-colors leading-snug">
                    Sustainability Consulting for Business Planning
                  </h5>
<span className="text-xs text-slate-500 font-medium">
                    Oct 12, 2024
                  </span>
</div>
</div>
<div className="flex items-center gap-4">
<img alt="Post" className="w-16 h-16 rounded-lg object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<h5 className="text-[13px] font-semibold text-white mb-1.5 hover:text-[#007A65] cursor-pointer transition-colors leading-snug">
                    Sustainability Consulting for Business Planning
                  </h5>
<span className="text-xs text-slate-500 font-medium">
                    Oct 12, 2024
                  </span>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500 font-medium">
            Copyright © 2024 Consalt. Designed &amp; Developed by Dcenent
          </p>
<div className="flex items-center gap-6">
<a className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest" href="#">
              Facebook
            </a>
<a className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest" href="#">
              Twitter
            </a>
<a className="text-[10px] font-bold text-slate-400 hover:text-white transition-colors uppercase tracking-widest" href="#">
              Instagram
            </a>
</div>
</div>
</div>
<div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<svg height="200" viewbox="0 0 100 100" width="200">
<circle cx="90" cy="90" fill="white" r="2"></circle>
<circle cx="70" cy="90" fill="white" r="2"></circle>
<circle cx="50" cy="90" fill="white" r="2"></circle>
<circle cx="90" cy="70" fill="white" r="2"></circle>
<circle cx="70" cy="70" fill="white" r="2"></circle>
<circle cx="50" cy="70" fill="white" r="2"></circle>
<circle cx="90" cy="50" fill="white" r="2"></circle>
<circle cx="70" cy="50" fill="white" r="2"></circle>
<circle cx="50" cy="50" fill="white" r="2"></circle>
</svg>
</div>
<button className="absolute bottom-8 right-6 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors z-20">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="m18 15-6-6-6 6"></path>
</svg>
</button>
</footer>

    </>
  );
}
