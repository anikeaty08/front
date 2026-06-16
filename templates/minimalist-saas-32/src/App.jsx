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
      

<div className="flex w-full h-full max-w-6xl bg-white md:rounded-xl md:border border-zinc-200 md:shadow-sm overflow-hidden flex-col md:flex-row">

<aside className="w-full md:w-80 lg:w-96 flex flex-col border-r border-zinc-200 bg-white z-10 shrink-0 h-full">

<header className="p-4 border-b border-zinc-100 flex flex-col gap-4">
<div className="flex items-center justify-between">

<div className="text-xl font-medium tracking-tighter uppercase text-zinc-800 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center text-xs">M</div>
                        MSG
                    </div>

<div className="flex gap-2">
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon height="20" icon="solar:menu-dots-circle-linear" width="20"></iconify-icon>
</button>
<button className="p-1.5 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon height="20" icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" height="16" icon="solar:magnifier-linear" width="16"></iconify-icon>
<input className="w-full bg-zinc-50 border border-zinc-200 text-sm rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-300 focus:border-zinc-300 transition-all placeholder:text-zinc-400 text-zinc-800" placeholder="Search messages..." type="text"/>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar">

<a className="flex items-start gap-3 p-4 bg-zinc-50 border-l-2 border-zinc-900 transition-colors" href="#">
<div className="relative shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex items-center justify-center text-sm font-medium text-zinc-700">AK</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-zinc-900 truncate">Alice Kinsley</h3>
<span className="text-xs text-zinc-400 shrink-0">12:42 PM</span>
</div>
<p className="text-sm text-zinc-500 truncate">Sounds perfect, see you then!</p>
</div>
</a>

<a className="flex items-start gap-3 p-4 hover:bg-zinc-50 transition-colors border-l-2 border-transparent" href="#">
<div className="relative shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 flex items-center justify-center text-sm font-medium text-zinc-600">JT</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-zinc-900 truncate">Julian Thorne</h3>
<span className="text-xs text-zinc-900 font-medium shrink-0">11:15 AM</span>
</div>
<p className="text-sm text-zinc-900 font-medium truncate">Can you send over the updated Figma file?</p>
</div>
<div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
</a>

<a className="flex items-start gap-3 p-4 hover:bg-zinc-50 transition-colors border-l-2 border-transparent" href="#">
<div className="relative shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 flex items-center justify-center text-sm font-medium text-zinc-600">DT</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-zinc-900 truncate">Design Team</h3>
<span className="text-xs text-zinc-400 shrink-0">Yesterday</span>
</div>
<p className="text-sm text-zinc-500 truncate">Weekly sync notes have been posted to Notion.</p>
</div>
</a>

<a className="flex items-start gap-3 p-4 hover:bg-zinc-50 transition-colors border-l-2 border-transparent" href="#">
<div className="relative shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 flex items-center justify-center text-sm font-medium text-zinc-600">MR</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-baseline mb-0.5">
<h3 className="text-sm font-medium text-zinc-900 truncate">Marcus Reed</h3>
<span className="text-xs text-zinc-400 shrink-0">Tuesday</span>
</div>
<p className="text-sm text-zinc-500 truncate">Thanks for the feedback.</p>
</div>
</a>
</div>
</aside>

<main className="hidden md:flex flex-1 flex-col bg-white h-full relative">

<header className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-white/80 backdrop-blur-sm z-10 sticky top-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex items-center justify-center text-sm font-medium text-zinc-700">AK</div>
<div>
<h2 className="text-base font-medium tracking-tight text-zinc-900">Alice Kinsley</h2>
<div className="flex items-center gap-1.5 mt-0.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
<span className="text-xs text-zinc-500">Online</span>
</div>
</div>
</div>
<div className="flex items-center gap-1">
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon height="20" icon="solar:videocamera-linear" width="20"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200 mx-1"></div>
<button className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon height="20" icon="solar:info-circle-linear" width="20"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar p-6 flex flex-col gap-6 bg-zinc-50/50">

<div className="flex items-center justify-center">
<span className="text-xs font-medium text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">Today, 11:30 AM</span>
</div>

<div className="flex items-end gap-2 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex shrink-0 items-center justify-center text-xs font-medium text-zinc-700 mb-1">AK</div>
<div className="flex flex-col gap-1 items-start">
<div className="bg-white border border-zinc-200 text-zinc-800 px-4 py-2.5 text-sm rounded-2xl rounded-bl-sm shadow-sm">
                            Hey! Are we still on for the review meeting at 3?
                        </div>
<span className="text-xs text-zinc-400 px-1">11:30 AM</span>
</div>
</div>

<div className="flex items-end gap-2 max-w-[85%] self-end">
<div className="flex flex-col gap-1 items-end">
<div className="bg-zinc-900 text-zinc-50 px-4 py-2.5 text-sm rounded-2xl rounded-br-sm shadow-sm">
                            Yes, definitely. I'll send the updated calendar invite shortly with the correct Zoom link.
                        </div>
<span className="text-xs text-zinc-400 px-1">11:34 AM</span>
</div>
</div>

<div className="flex items-end gap-2 max-w-[85%] mt-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex shrink-0 items-center justify-center text-xs font-medium text-zinc-700 mb-1">AK</div>
<div className="flex flex-col gap-1 items-start">
<div className="bg-white border border-zinc-200 text-zinc-800 px-4 py-2.5 text-sm rounded-2xl rounded-bl-sm shadow-sm">
                            Awesome. I had a quick look at the latest mocks.
                        </div>
<div className="bg-white border border-zinc-200 text-zinc-800 px-4 py-2.5 text-sm rounded-2xl rounded-tl-sm rounded-bl-sm shadow-sm mt-0.5">
                            They look incredibly clean. The new typography scale makes a huge difference.
                        </div>
<span className="text-xs text-zinc-400 px-1">11:36 AM</span>
</div>
</div>

<div className="flex items-end gap-2 max-w-[85%] self-end mt-4">
<div className="flex flex-col gap-1 items-end">
<div className="bg-zinc-900 text-zinc-50 px-4 py-2.5 text-sm rounded-2xl rounded-br-sm shadow-sm">
                            Thanks! I focused on reducing cognitive load by stripping away unnecessary borders and relying on subtle backgrounds instead.
                        </div>
<span className="text-xs text-zinc-400 px-1">12:15 PM</span>
</div>
</div>

<div className="flex items-end gap-2 max-w-[85%] mt-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-300 flex shrink-0 items-center justify-center text-xs font-medium text-zinc-700 mb-1">AK</div>
<div className="flex flex-col gap-1 items-start">
<div className="bg-white border border-zinc-200 text-zinc-800 px-4 py-2.5 text-sm rounded-2xl rounded-bl-sm shadow-sm">
                            Sounds perfect, see you then!
                        </div>
<span className="text-xs text-zinc-400 px-1">12:42 PM</span>
</div>
</div>

<div className="h-2"></div>
</div>

<div className="p-4 bg-white border-t border-zinc-100">
<div className="flex items-end gap-2 bg-zinc-50 border border-zinc-200 rounded-xl p-2 focus-within:border-zinc-300 focus-within:ring-1 focus-within:ring-zinc-300 transition-all shadow-sm">
<button className="p-2 text-zinc-400 hover:text-zinc-700 rounded-lg transition-colors shrink-0">
<iconify-icon height="20" icon="solar:paperclip-linear" width="20"></iconify-icon>
</button>
<textarea className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 resize-none outline-none py-2 max-h-32 no-scrollbar" placeholder="Type a message..." rows="1"></textarea>
<button className="p-2 text-zinc-400 hover:text-zinc-700 rounded-lg transition-colors shrink-0">
<iconify-icon height="20" icon="solar:smile-circle-linear" width="20"></iconify-icon>
</button>
<button className="p-2 bg-zinc-900 text-white rounded-lg hover:bg-zinc-800 transition-colors shrink-0 ml-1">
<iconify-icon className="rotate-45 translate-y-[1px] -translate-x-[1px]" height="20" icon="solar:plain-3-linear" width="20"></iconify-icon>
</button>
</div>
<div className="text-center mt-2">
<span className="text-xs text-zinc-400">Press <kbd className="font-sans px-1 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-500">Enter</kbd> to send</span>
</div>
</div>
</main>
</div>

    </>
  );
}
