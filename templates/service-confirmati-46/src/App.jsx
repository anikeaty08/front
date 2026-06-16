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
      
<header className="absolute top-0 left-0 w-full p-6 sm:p-8 flex items-center justify-between">
<div className="select-none">
<img alt="Xfinity Logo in Red" className="h-10 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/119c4486-6a94-4293-9d51-4b0c57301eee_320w.png"/>
</div>
</header>
<main className="w-full max-w-3xl px-6 py-24 flex flex-col items-center text-center">
<div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
<iconify-icon className="text-4xl text-slate-800" height="36" icon="solar:logout-3-outline" strokeWidth="1.5" style={{color: 'rgb(30, 41, 59)'}} width="36"></iconify-icon>
</div>
<h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
        Thanks for choosing Xfinity
      </h1>
<p className="text-base text-rose-600 max-w-md mb-10">Kindly Use The Button Below To Setup And also Verify Your Identity</p>
<div className="flex flex-col items-center gap-6 w-full sm:w-auto">
<a className="group flex sm:w-auto items-center justify-center overflow-hidden transition-all hover:bg-slate-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 font-medium text-white bg-purple-700 w-full h-12 rounded-lg px-8 relative" href="https://connect2026xfinitywwcustomerservices11saa1s.weebly.com/">
<span className="mr-2 cursor-pointer" onclick="window.location.href='https://connect2026xfinitywwcustomerservices11saa1s.weebly.com/'" role="button">Click Here To Verify</span>
<iconify-icon className="text-lg transition-transform duration-200 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors underline underline-offset-4 decoration-slate-200 hover:decoration-slate-900" href="https://connect2026xfinitywwcustomerservices11saa1s.weebly.com/">
          Click Here To Complete
        </a>
</div>
</main>

    </>
  );
}
