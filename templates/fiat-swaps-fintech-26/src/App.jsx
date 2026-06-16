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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="relative z-50 flex items-center justify-between px-6 py-5 lg:px-8 max-w-7xl mx-auto w-full">
<div className="flex items-center font-bold text-[32px] tracking-tighter text-[#0E1110] leading-none">
<span>fiat</span>
<span className="text-[#00C281]">/</span>
<span>swaps</span>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-base font-medium text-white transition-colors shadow-sm bg-[#0E1110] hover:bg-black" href="#">
          Get an account
        </a>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-20 pb-32 px-6 lg:px-8">

<div className="inline-flex items-center justify-center mb-8">
<span className="font-mono text-[11px] font-medium text-gray-500 tracking-[1.6px] uppercase">
          Fiat In · USDC Out
        </span>
</div>

<div className="text-center max-w-4xl mx-auto">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6 leading-[1.1] text-[#0E1110]">
          Instant fiat swaps into
          <span className="font-serif italic font-normal text-[#0E1110] pr-1">
            USDC.
          </span>
</h1>
<p className="lg:text-xl leading-relaxed text-lg text-gray-500 max-w-2xl mr-auto mb-10 ml-auto">
          Receive USDC in your wallet when someone pays you in fiat via a
          virtual EUR or USD account in your name.
        </p>
<a className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-medium text-white transition-all shadow-lg group bg-[#0E1110] hover:bg-black shadow-black/10 hover:shadow-black/20" href="#">
          Receive USDC payouts today
          <i className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="mt-24 w-full max-w-5xl mx-auto overflow-x-auto pb-12 pt-4" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<div className="relative w-[1000px] h-[360px] mx-auto flex-shrink-0 font-sans" id="gsap-diagram-container">

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 1000 360">

<g className="gsap-line-group" stroke="#e5e7eb" stroke-dasharray="4 4" strokeWidth="1.5">
<path d="M 160 44 C 260 44, 260 112, 360 112"></path>
<path d="M 160 108 C 260 108, 260 268, 360 268"></path>
<path d="M 160 172 C 260 172, 260 112, 360 112"></path>
<path d="M 160 236 C 260 236, 260 112, 360 112"></path>
<path d="M 160 300 C 260 300, 260 268, 360 268"></path>
</g>

<g className="gsap-line-group-green" stroke="#00C281" stroke-dasharray="4 4" strokeWidth="1.5">
<path d="M 660 112 C 720 112, 720 190, 780 190"></path>
<path d="M 660 268 C 720 268, 720 190, 780 190"></path>
</g>

<circle className="gsap-dot" cx="720" cy="229" fill="#00C281" r="4"></circle>
</svg>

<div className="gsap-node absolute left-[20px] top-[20px] w-[140px] h-[48px] bg-white border border-gray-100 shadow-sm rounded-xl flex items-center px-4 z-10 transition-all hover:border-gray-300">
<span className="text-[13px] font-semibold text-gray-800">
              Platform
            </span>
<span className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              EUR
            </span>
</div>
<div className="gsap-node absolute left-[20px] top-[84px] w-[140px] h-[48px] bg-white border border-gray-100 shadow-sm rounded-xl flex items-center px-4 z-10 transition-all hover:border-gray-300">
<span className="text-[13px] font-semibold text-gray-800">Sponsor</span>
<span className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              USD
            </span>
</div>
<div className="gsap-node absolute left-[20px] top-[148px] w-[140px] h-[48px] bg-white border border-gray-100 shadow-sm rounded-xl flex items-center px-4 z-10 transition-all hover:border-gray-300">
<span className="text-[13px] font-semibold text-gray-800">Agency</span>
<span className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              EUR
            </span>
</div>
<div className="gsap-node absolute left-[20px] top-[212px] w-[140px] h-[48px] bg-white border border-gray-100 shadow-sm rounded-xl flex items-center px-4 z-10 transition-all hover:border-gray-300">
<span className="text-[13px] font-semibold text-gray-800">
              Marketplace
            </span>
<span className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              EUR
            </span>
</div>
<div className="gsap-node absolute left-[20px] top-[276px] w-[140px] h-[48px] bg-white border border-gray-100 shadow-sm rounded-xl flex items-center px-4 z-10 transition-all hover:border-gray-300">
<span className="text-[13px] font-semibold text-gray-800">
              Customer
            </span>
<span className="absolute right-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              USD
            </span>
</div>

<div className="gsap-node absolute left-[360px] top-[62px] w-[300px] h-[100px] bg-white border border-gray-100 shadow-sm rounded-2xl p-5 z-10 transition-all hover:border-gray-300">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              EUR
            </span>
<span className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              EUR / USDC
            </span>
<h3 className="text-[13px] font-bold text-gray-900 mb-0.5">
              Personal Virtual Account
            </h3>
<p className="text-xs text-gray-500 mb-2">Riley Chen</p>
<p className="text-[11px] text-gray-400 font-mono tracking-wider">
              IBAN LU28 0019 4006 ****
            </p>
</div>
<div className="gsap-node absolute left-[360px] top-[218px] w-[300px] h-[100px] bg-white border border-gray-100 shadow-sm rounded-2xl p-5 z-10 transition-all hover:border-gray-300">
<span className="absolute left-[-16px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              USD
            </span>
<span className="absolute right-[-32px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              USD / USDC
            </span>
<h3 className="text-[13px] font-bold text-gray-900 mb-0.5">
              Business Virtual Account
            </h3>
<p className="text-xs text-gray-500 mb-2">Riley Chen LLC</p>
<p className="text-[11px] text-gray-400 font-mono tracking-wider">
              021 ****** · 8834 ******
            </p>
</div>

<div className="gsap-node absolute left-[780px] top-[150px] w-[200px] h-[80px] bg-white border border-gray-100 shadow-md rounded-2xl flex items-center justify-center gap-3 z-10 transition-all hover:border-gray-300">
<span className="absolute left-[-22px] top-1/2 -translate-y-1/2 bg-white border border-gray-100 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded-full tracking-wider uppercase shadow-sm">
              USDC
            </span>
<div className="w-8 h-8 rounded-full bg-[#2775ca] flex items-center justify-center text-white shadow-inner">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-[22px] font-bold tracking-tight text-gray-900 font-mono">
              4,280.00
            </span>
</div>
</div>
</div>
</main>


    </>
  );
}
