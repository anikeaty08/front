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



tailwind.config = { theme: { extend: { colors: { highlands: { 50: '#ebfdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#009444', 600: '#007a38', 700: '#00632d', 800: '#004d23', 900: '#002e15' } } } } }



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
      

<header className="h-14 border-b border-zinc-200 flex items-center justify-between px-4 bg-white shrink-0 z-10">
<div className="flex items-center gap-4">

<a className="flex items-center justify-center w-8 h-8 rounded-md hover:bg-zinc-100 text-zinc-500 transition-colors" href="#">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</a>
<div className="w-px h-5 bg-zinc-200"></div>

<div className="flex items-center gap-2 group cursor-text rounded-md px-2 py-1 -ml-2 hover:bg-zinc-100 transition-colors">
<span className="text-sm font-semibold tracking-tight text-zinc-800">
            Customer Onboarding Flow
          </span>
<iconify-icon className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-linear" width="14"></iconify-icon>
</div>

<span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-inset ring-zinc-500/10">
          Draft
        </span>
</div>
<div className="flex items-center gap-2">

<div className="flex items-center gap-1 border-r border-zinc-200 pr-3 mr-1">
<button className="w-8 h-8 flex items-center justify-center rounded-md text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors disabled:opacity-50" disabled="">
<iconify-icon className="" icon="solar:undo-left-linear" width="18"></iconify-icon>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-md text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors">
<iconify-icon className="" icon="solar:undo-right-linear" width="18"></iconify-icon>
</button>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors">
<iconify-icon className="" icon="solar:play-circle-linear" width="18"></iconify-icon>
          Preview
        </button>
<button className="flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 rounded-md shadow-sm transition-colors">
          Publish
          <iconify-icon icon="solar:upload-linear" width="16"></iconify-icon>
</button>
</div>
</header>

<main className="flex-1 flex overflow-hidden bg-zinc-50/50">

<aside className="w-64 border-r border-zinc-200 bg-white flex flex-col shrink-0">
<div className="flex-1 overflow-y-auto p-4 space-y-6">

<div className="">
<h3 className="text-xs font-normal text-zinc-500 uppercase tracking-wider mb-3">
      Layout &amp; Text
    </h3>
<div className="grid grid-cols-2 gap-2">
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:text-field-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Heading
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:document-text-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Paragraph
                </span>
</div>
</div>
</div>

<div className="">
<h3 className="text-xs font-normal text-zinc-500 uppercase tracking-wider mb-3">Fields</h3>
<div className="grid grid-cols-2 gap-2">
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Short Text
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:text-square-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Long Text
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:round-alt-arrow-down-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Dropdown
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Single Choice
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:check-square-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Multiple Choice
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  Date Picker
                </span>
</div>
<div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-lg border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm cursor-grab active:cursor-grabbing transition-all">
<iconify-icon className="text-zinc-500" icon="solar:cloud-upload-linear" width="20"></iconify-icon>
<span className="text-xs font-light text-zinc-700 text-center">
                  File Upload
                </span>
</div>
</div>
</div>

<div className="">
<div className="grid grid-cols-2 gap-2">
</div>
</div>

<div className="">
<div className="grid grid-cols-2 gap-2">
</div>
</div>
</div>
</aside>

<section className="flex-1 flex flex-col relative overflow-hidden">

<div className="h-12 border-b border-zinc-200 bg-white/50 backdrop-blur-sm flex items-center px-6 gap-2 shrink-0 z-10">
<button className="px-3 py-1.5 text-sm font-medium bg-white border border-zinc-200 rounded-md shadow-sm text-zinc-800">1. Event &amp; Dates</button>
<div className="w-4 h-px bg-zinc-300"></div>
<button className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors flex items-center gap-2 group">
            2. Company Info
            <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:pen-linear" width="14"></iconify-icon>
</button>
<div className="w-4 h-px bg-zinc-300"></div>
<button className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors border border-dashed border-zinc-300">
<iconify-icon icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-8 flex justify-center">

<div className="w-full max-w-2xl bg-white border border-zinc-200 shadow-sm rounded-xl pb-16 min-h-[600px] relative">

<div className="p-8 border-b border-zinc-100 group relative">
<input className="w-full text-2xl font-semibold tracking-tight text-zinc-900 border-none p-0 focus:ring-0 placeholder:text-zinc-300 hover:bg-zinc-50 transition-colors rounded-md -ml-2 px-2 py-1 outline-none" type="text" value="Customer Onboarding Flow"/>
<textarea className="w-full text-sm text-zinc-500 mt-2 border-none p-0 focus:ring-0 resize-none overflow-hidden placeholder:text-zinc-300 hover:bg-zinc-50 transition-colors rounded-md -ml-2 px-2 py-1 outline-none" rows="2">Please complete this form to help us set up your workspace correctly. This should only take about 2 minutes.</textarea>
</div>

<div className="mx-8 h-1 rounded-full opacity-0 pointer-events-none transition-opacity bg-highlands-500"></div>

<div className="flex flex-col py-2">

<div className="px-8 py-4 group hover:bg-zinc-50/80 transition-colors relative cursor-pointer border-l-2 border-transparent">

<div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-grab text-zinc-300 hover:text-zinc-500 transition-all p-1">
<iconify-icon className="" icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>
<label className="block text-sm font-medium text-zinc-800 mb-1.5 flex items-center gap-1">
                  First Name
                  <span className="text-red-500 text-xs">*</span>
</label>
<div className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-md text-sm text-zinc-400 pointer-events-none shadow-sm shadow-zinc-100/50">
                  Enter your first name
                </div>
</div>

<div className="px-8 py-5 border-l-2 relative cursor-default shadow-[inset_0_1px_0_rgba(228,228,231,0.5),inset_0_-1px_0_rgba(228,228,231,0.5)] bg-highlands-50/30 border-highlands-500">

<div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-grab text-zinc-400 hover:text-zinc-600 transition-all p-1">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>

<div className="absolute -right-3 -top-3 bg-white border border-zinc-200 shadow-sm rounded-lg flex items-center overflow-hidden z-10">
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" title="Settings">
<iconify-icon className="" icon="solar:settings-linear" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200"></div>
<button className="w-8 h-8 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" title="Duplicate">
<iconify-icon className="" icon="solar:copy-linear" width="16"></iconify-icon>
</button>
<div className="w-px h-4 bg-zinc-200"></div>
<button className="w-8 h-8 flex items-center justify-center text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
<label className="block text-sm font-medium text-zinc-900 mb-1">
                  What is your primary role?
                  <span className="text-red-500 text-xs">*</span>
</label>
<p className="text-xs text-zinc-500 mb-4">
                  Select the option that best describes your daily
                  responsibilities.
                </p>
<div className="space-y-3 pointer-events-none">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">
                      Engineering / Development
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border bg-white flex items-center justify-center relative border-highlands-600">
<div className="w-2 h-2 rounded-full absolute bg-highlands-600"></div>
</div>
<span className="text-sm text-zinc-900 font-medium">
                      Design / UX
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700">
                      Product Management
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-zinc-300 bg-white"></div>
<span className="text-sm text-zinc-700 text-zinc-400">
                      Other
                    </span>
</div>
</div>
</div>

<div className="mx-8 py-2 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
<div className="h-px flex-1 bg-highlands-500"></div>
<div className="w-5 h-5 rounded-full border flex items-center justify-center shadow-sm bg-highlands-50 border-highlands-200 text-highlands-500">
<iconify-icon icon="solar:add-linear" width="12"></iconify-icon>
</div>
<div className="h-px flex-1 bg-highlands-500"></div>
</div>

<div className="px-8 py-4 group hover:bg-zinc-50/80 transition-colors relative cursor-pointer border-l-2 border-transparent mt-2">
<div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-grab text-zinc-300 hover:text-zinc-500 transition-all p-1">
<iconify-icon icon="solar:menu-dots-bold" width="16"></iconify-icon>
</div>
<label className="block text-sm font-medium text-zinc-800 mb-1.5 flex items-center gap-1">
                  Company Size
                </label>
<div className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-md text-sm text-zinc-400 pointer-events-none flex justify-between items-center shadow-sm shadow-zinc-100/50">
                  Select an option...
                  <iconify-icon className="text-zinc-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="absolute bottom-[-1.25rem] left-1/2 -translate-x-1/2">
<button className="flex items-center gap-1.5 px-4 py-2 bg-white border border-zinc-200 shadow-sm rounded-full text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:shadow transition-all group">
<iconify-icon className="group-hover:scale-110 transition-transform text-highlands-500" icon="solar:add-circle-linear" width="18"></iconify-icon>
                Add Question
              </button>
</div>
</div>
</div>
</section>

<aside className="w-80 border-l border-zinc-200 bg-white flex flex-col shrink-0">

<div className="p-4 border-b border-zinc-100 flex items-center gap-3">
<div className="w-8 h-8 rounded-md border flex items-center justify-center bg-highlands-50 border-highlands-100 text-highlands-600">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div>
<h2 className="text-sm font-semibold tracking-tight text-zinc-900">
              Single Choice
            </h2>
<p className="text-xs text-zinc-500">Field properties</p>
</div>
</div>

<div className="px-4 pt-3 border-b border-zinc-100 flex gap-4">
<button className="text-sm font-medium border-b-2 pb-2 px-1 text-highlands-600 border-highlands-600">
            General
          </button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-800 border-b-2 border-transparent pb-2 px-1 transition-colors">
            Options
          </button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-800 border-b-2 border-transparent pb-2 px-1 transition-colors">
            Logic
          </button>
</div>

<div className="flex-1 overflow-y-auto p-5 space-y-6">

<div className="">
<label className="block text-xs font-medium text-zinc-700 mb-1.5">
              Question Label
            </label>
<textarea className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-md text-sm text-zinc-900 focus:outline-none focus:ring-2 transition-all resize-none focus:ring-highlands-500/20 focus:border-highlands-500" rows="2">What is your primary role?</textarea>
</div>

<div className="">
<div className="flex justify-between items-end mb-1.5">
<label className="block text-xs font-medium text-zinc-700">
                Description / Help Text
              </label>
<span className="text-[10px] text-zinc-400">Optional</span>
</div>
<textarea className="w-full px-3 py-2 bg-white border border-zinc-200 rounded-md text-sm text-zinc-900 focus:outline-none focus:ring-2 transition-all resize-none focus:ring-highlands-500/20 focus:border-highlands-500" rows="2">Select the option that best describes your daily responsibilities.</textarea>
</div>
<div className="h-px bg-zinc-100"></div>

<div className="space-y-4">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Validation
            </h3>

<div className="flex items-center justify-between">
<div className="">
<span className="block text-sm font-medium text-zinc-900">
                  Required field
                </span>
<span className="block text-xs text-zinc-500">
                  User must answer this question
                </span>
</div>

<div className="w-9 h-5 rounded-full relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] transition-colors bg-highlands-600">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm transform transition-transform"></div>
</div>
</div>

<div className="flex items-center justify-between">
<div className="">
<span className="block text-sm font-medium text-zinc-900">
                  Hidden from user
                </span>
<span className="block text-xs text-zinc-500">
                  Only visible in logic/admin
                </span>
</div>

<div className="w-9 h-5 bg-zinc-200 rounded-full relative cursor-pointer shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] transition-colors">
<div className="w-4 h-4 bg-white border border-zinc-200 rounded-full absolute left-0.5 top-0.5 shadow-sm transform transition-transform"></div>
</div>
</div>
</div>
<div className="h-px bg-zinc-100"></div>

<div className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                Choices
              </h3>
<button className="text-xs font-medium text-highlands-600 hover:text-highlands-700">
                Bulk Add
              </button>
</div>
<div className="space-y-2">

<div className="flex items-center gap-2 group">
<div className="cursor-grab text-zinc-300 hover:text-zinc-500">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<input className="flex-1 px-2.5 py-1.5 text-sm border border-zinc-200 rounded text-zinc-800 focus:outline-none focus:border-highlands-500" type="text" value="Engineering / Development"/>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 group">
<div className="cursor-grab text-zinc-300 hover:text-zinc-500">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<input className="flex-1 px-2.5 py-1.5 text-sm border border-zinc-200 rounded text-zinc-800 focus:outline-none focus:border-highlands-500" type="text" value="Design / UX"/>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 group">
<div className="cursor-grab text-zinc-300 hover:text-zinc-500">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<input className="flex-1 px-2.5 py-1.5 text-sm border border-zinc-200 rounded text-zinc-800 focus:outline-none focus:border-highlands-500" type="text" value="Product Management"/>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 group">
<div className="cursor-grab text-zinc-300 hover:text-zinc-500">
<iconify-icon icon="solar:menu-dots-bold" width="14"></iconify-icon>
</div>
<input className="flex-1 px-2.5 py-1.5 text-sm border border-zinc-200 rounded text-zinc-800 focus:outline-none focus:border-highlands-500" type="text" value="Other"/>
<button className="text-zinc-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<button className="w-full py-2 border border-dashed border-zinc-300 rounded-md text-xs font-medium text-zinc-600 hover:border-zinc-400 hover:text-zinc-800 transition-colors flex items-center justify-center gap-1 mt-2">
<iconify-icon icon="solar:add-linear" width="14"></iconify-icon>
              Add Option
            </button>
<div className="pt-2 flex items-center gap-2">

<div className="w-4 h-4 rounded border border-zinc-300 bg-white flex items-center justify-center cursor-pointer">

</div>
<label className="text-xs text-zinc-600 cursor-pointer">
                Include "Other" option with text input
              </label>
</div>
</div>
</div>
</aside>
</main>

    </>
  );
}
