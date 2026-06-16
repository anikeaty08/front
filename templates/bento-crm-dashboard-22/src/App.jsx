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
      
<div className="max-w-7xl mx-auto">

<a className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors mb-8 group" href="#">
<i className="w-4 h-4 group-hover:-translate-x-1 transition-transform" data-lucide="arrow-left" strokeWidth="1.5"></i>
            Back to contacts
        </a>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-4 bg-[#111111]/80 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 flex flex-col items-center text-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-800/10 to-transparent pointer-events-none"></div>
<div className="w-20 h-20 bg-zinc-800 rounded-full flex items-center justify-center text-2xl font-medium text-zinc-300 shadow-inner mb-4 ring-1 ring-zinc-700/50">
                    H
                </div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-100">hattan.eso</h1>
<p className="text-base text-zinc-400 mt-1">hattan.eso@gmail.com</p>
<div className="w-4 h-[1px] bg-zinc-700 mt-4"></div>
</div>

<div className="lg:col-span-8 bg-[#111111]/80 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6 flex flex-col justify-between">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/60 pb-6 mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-200">Contact Details</h2>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-zinc-200 px-4 py-2 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
                            WhatsApp
                        </button>
<button className="inline-flex items-center gap-2 bg-zinc-100 hover:bg-white text-zinc-900 px-4 py-2 rounded-lg text-sm transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-zinc-200 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
<i className="w-4 h-4" data-lucide="pencil" strokeWidth="1.5"></i>
                            Edit
                        </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<p className="text-sm text-zinc-500 mb-1">Created at</p>
<p className="text-base text-zinc-200">May 04, 2026, 02:30 PM</p>
</div>
<div>
<p className="text-sm text-zinc-500 mb-1">Last activity</p>
<p className="text-base text-zinc-200">May 04, 2026, 02:30 PM</p>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col overflow-hidden bg-[#111111]/50 h-[600px] border-zinc-800/80 border rounded-2xl">

<div className="p-5 border-b border-zinc-800/80 bg-[#111111] flex items-center justify-between shrink-0">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#25D366] ring-4 ring-[#25D366]/20"></div>
<h3 className="font-medium tracking-wider text-zinc-200 uppercase text-sm">WhatsApp Chat</h3>
</div>
<button className="text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none">
<svg className="lucide lucide-external-link" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 no-scrollbar flex flex-col gap-6">

<div className="flex justify-center my-2">
<span className="px-3 py-1 bg-zinc-800/40 border border-zinc-800/80 rounded-full text-[10px] uppercase tracking-wider text-zinc-500 font-medium">Today</span>
</div>

<div className="flex items-end gap-3">
<div className="w-7 h-7 rounded-full bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/50 flex items-center justify-center text-xs font-medium text-white shrink-0 shadow-sm relative overflow-hidden">
<span className="z-10">H</span>
</div>
<div className="flex flex-col gap-1 max-w-[85%]">
<div className="bg-zinc-800/80 border border-zinc-700/50 text-zinc-200 px-4 py-3 rounded-2xl rounded-bl-sm text-sm shadow-sm leading-relaxed">
                    Hello, I'm having an issue with my latest payment. It says failed but my card was charged.
                </div>
<span className="text-[10px] text-zinc-500 ml-1 mt-0.5">10:24 AM</span>
</div>
</div>

<div className="my-1 bg-gradient-to-b from-[#091b26] to-[#061219] border border-[#143245] rounded-xl p-4 shadow-sm mx-10 relative overflow-hidden">
<div className="absolute right-0 top-0 w-32 h-32 bg-[#38bdf8]/10 blur-3xl rounded-full"></div>
<div className="flex items-center gap-2 mb-3 relative">
<svg className="lucide lucide-ticket text-[#38bdf8]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
<span className="text-[11px] font-semibold text-[#38bdf8] uppercase tracking-wider">Ticket Created</span>
</div>
<h4 className="text-sm font-medium tracking-tight text-zinc-100 mb-1 relative">Payment Issue</h4>
<div className="flex items-center gap-2 mt-3 relative">
<span className="bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded-md text-xs text-zinc-300">Billing</span>
<span className="bg-zinc-900/80 border border-zinc-800 px-2 py-0.5 rounded-md text-xs text-zinc-400">#660</span>
</div>
</div>

<div className="flex flex-col gap-5 mx-11 my-1">
<div className="flex gap-4 relative">
<div className="relative w-2 flex justify-center shrink-0">
<div className="absolute top-2 bottom-[-24px] w-px bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 ring-4 ring-[#111111] z-10 mt-1.5"></div>
</div>
<div className="text-xs text-zinc-400 mt-0.5">
                    Waleed set priority to <span className="text-zinc-200">Medium</span>
</div>
</div>
<div className="flex gap-4 relative">
<div className="relative w-2 flex justify-center shrink-0">
<div className="absolute top-2 bottom-[-24px] w-px bg-zinc-800"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500 ring-4 ring-[#111111] z-10 mt-1.5"></div>
</div>
<div className="text-xs text-zinc-400 mt-0.5">
                    hattan self-assigned this conversation
                </div>
</div>
<div className="flex gap-4 relative">
<div className="relative w-2 flex justify-center shrink-0">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 ring-4 ring-[#111111] z-10 mt-1.5"></div>
</div>
<div className="text-xs text-zinc-400 mt-0.5">
                    Conversation was marked resolved by hattan
                </div>
</div>
</div>

<div className="flex items-end gap-2 justify-end mt-1">
<div className="flex flex-col items-end gap-1 max-w-[85%]">
<div className="bg-[#102a1d] border border-[#1b4430] text-[#a7d9c1] px-4 py-3 rounded-2xl rounded-br-sm text-sm shadow-sm leading-relaxed">
                    Hi Hattan, I've checked your account and I see the transaction. The amount will be reversed within 24 hours.
                </div>
<div className="flex items-center gap-1 mt-0.5 mr-1">
<span className="text-[10px] text-zinc-500">10:28 AM</span>
<svg className="lucide lucide-check-check text-[#38bdf8]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 7 17l-5-5"></path><path d="m22 10-7.5 7.5L13 16"></path></svg>
</div>
</div>
</div>
</div>

<div className="p-4 border-t border-zinc-800/80 bg-[#111111] shrink-0">
<div className="relative flex items-center">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-full pl-4 pr-12 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-700 transition-all" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded-full transition-colors focus:outline-none">
<svg className="lucide lucide-send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-[#111111]/30 border border-zinc-800/80 rounded-2xl flex flex-col overflow-hidden h-[600px]">

<div className="p-6 border-b border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<h3 className="text-xl font-medium tracking-tight text-zinc-100">Overview</h3>

<div className="bg-zinc-900/80 p-1 rounded-lg inline-flex items-center border border-zinc-800">
<button className="px-4 py-1.5 rounded-md text-sm text-zinc-900 bg-zinc-100 shadow-sm transition-all font-medium">All activity</button>
<button className="px-4 py-1.5 rounded-md text-sm text-zinc-400 hover:text-zinc-200 transition-all">Calls</button>
<button className="px-4 py-1.5 rounded-md text-sm text-zinc-400 hover:text-zinc-200 transition-all">Tickets</button>
</div>
</div>

<div className="px-6 py-4 border-b border-zinc-800/40 overflow-x-auto no-scrollbar">
<div className="flex items-center gap-2 whitespace-nowrap">
<button className="bg-zinc-100 text-zinc-900 border border-transparent px-4 py-1.5 rounded-full text-sm transition-colors">All activity</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">Completed</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">No answer</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">Busy</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">Failed</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">Cancelled</button>
<button className="bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 px-4 py-1.5 rounded-full text-sm transition-colors">Missed</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-6 no-scrollbar">

<div className="group bg-[#111111] hover:bg-zinc-900 transition-colors border border-zinc-800/80 rounded-xl p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="flex items-start gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-[#38bdf8]" data-lucide="ticket" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-zinc-200 mb-1 group-hover:text-white transition-colors">Ticket #44</h4>
<p className="text-base text-zinc-400 mb-2">No subject</p>
<div className="flex items-center gap-3 text-sm text-zinc-500">
<span>resolved</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span>Jan 21, 1970, 04:51 PM</span>
</div>
</div>
</div>
<button className="shrink-0 inline-flex items-center justify-center gap-2 bg-transparent border border-zinc-800 hover:bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-lg text-sm transition-all focus:outline-none focus:ring-2 focus:ring-zinc-700 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
                            Open
                            <i className="w-3.5 h-3.5" data-lucide="external-link" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
