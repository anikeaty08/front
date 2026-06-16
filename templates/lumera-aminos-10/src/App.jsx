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
      
<section className="min-h-screen flex items-center justify-center bg-[#FCFCFA] px-6 relative overflow-hidden">
<div className="absolute w-80 h-80 bg-[#C5A880]/20 blur-3xl rounded-full"></div>
<div className="max-w-xl w-full text-center relative z-10">
<div className="mx-auto mb-6 w-20 h-20 rounded-full border-2 border-[#C5A880] flex items-center justify-center animate-pulse">
<span className="text-[#C5A880] text-4xl">✓</span>
</div>
<p className="text-xs tracking-widest text-[#C5A880] uppercase mb-2">
      Lumera Aminos
    </p>
<h1 className="text-4xl font-semibold tracking-wide mb-3">
<span className="text-[#C5A880]">Order Received</span>
</h1>
<div className="w-12 h-[2px] bg-[#C5A880] mx-auto mb-6"></div>
<p className="text-gray-600 mb-6">
      Thank you for your order with Lumera Aminos.
    </p>
<div className="border border-[#C5A880]/30 rounded-xl p-6 bg-white shadow-sm">
<p className="text-sm text-gray-700 mb-4">
        Payment instructions will be sent to your email shortly.
      </p>
<p className="text-xs text-gray-500 mb-6">
        If you do not receive an email within 10 minutes, please check your spam folder.
      </p>
<div className="text-xs text-gray-400 mb-4">
        Research use only. Not for human consumption. Purchasers must be 21+.
      </div>
<a className="inline-block mt-4 bg-[#C5A880] text-black px-6 py-3 rounded-lg text-sm tracking-wide hover:opacity-90 transition" href="/">
        Return to Home
      </a>
</div>
</div>
</section>

    </>
  );
}
