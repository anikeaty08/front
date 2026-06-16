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

    const modeAiBtn = document.getElementById('modeAiBtn');
    const modeInfoBtn = document.getElementById('modeInfoBtn');
    const aiMode = document.getElementById('aiMode');
    const infoMode = document.getElementById('infoMode');
    const reopenInfographic = document.getElementById('reopenInfographic');

    function setMode(mode) {
      const aiActive = mode === 'ai';

      aiMode.classList.toggle('hidden', !aiActive);
      infoMode.classList.toggle('hidden', aiActive);

      modeAiBtn.className = aiActive
        ? 'rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition'
        : 'rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:text-slate-700';

      modeInfoBtn.className = !aiActive
        ? 'rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition'
        : 'rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:text-slate-700';
    }

    modeAiBtn.addEventListener('click', () => setMode('ai'));
    modeInfoBtn.addEventListener('click', () => setMode('info'));
    reopenInfographic.addEventListener('click', () => setMode('info'));

    const brandCheckbox = document.getElementById('brandCheckbox');
    let brandChecked = true;

    brandCheckbox.addEventListener('click', () => {
      brandChecked = !brandChecked;
      brandCheckbox.className = brandChecked
        ? 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-violet-600 bg-violet-600 text-white shadow-sm'
        : 'mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white text-transparent shadow-sm';

      brandCheckbox.innerHTML = brandChecked
        ? '<i data-lucide="check" class="h-3.5 w-3.5" stroke-width="1.5"></i>'
        : '<i data-lucide="check" class="h-3.5 w-3.5" stroke-width="1.5"></i>';

      lucide.createIcons();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
<div className="w-full max-w-4xl grid grid-cols-1 xl:grid-cols-[1fr_22rem] gap-6 items-start">

<div className="w-full">
<div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-200">

<div className="flex items-center justify-between bg-gradient-to-r from-violet-700 via-purple-600 to-fuchsia-500 px-5 py-4 sm:px-6">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12">
<i className="h-4 w-4 text-white" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h2 className="text-xl font-semibold tracking-tight text-white">AI Image</h2>
</div>
<button aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white/90 transition hover:bg-white/10 hover:text-white">
<i className="h-5 w-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>

<div className="px-4 py-4 sm:px-6 sm:py-5">

<div className="mb-4">
<div className="grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1">
<button className="rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition" id="modeAiBtn">
                  AI Image
                </button>
<button className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-500 transition hover:text-slate-700" id="modeInfoBtn">
                  Infographic
                </button>
</div>
</div>

<div className="space-y-5" id="aiMode">
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">
                  Describe the image you want to generate <span className="text-rose-500">*</span>
</label>
<textarea className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100" rows="2">A beautiful sunset over mountains with vibrant colors...</textarea>
</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image Style</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-base text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
<option selected="">Natural</option>
<option>Flat Design</option>
<option>3D Render</option>
<option>Illustration</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image Size</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-base text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
<option selected="">1024x1024</option>
<option>1024x1792</option>
<option>1792x1024</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image alt text</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100" type="text"/>
</div>
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image file name</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100" type="text"/>
</div>
</div>
</div>

<div className="hidden space-y-5" id="infoMode">
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Infographic Type</label>
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
<button className="flex items-center gap-3 rounded-lg border border-violet-300 bg-violet-50 px-4 py-4 text-left shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-violet-600 ring-1 ring-violet-200">
<i className="h-5 w-5" data-lucide="list-ordered" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Step-by-Step</span>
</button>
<button className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-4 text-left hover:border-slate-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="git-compare-arrows" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Comparison</span>
</button>
<button className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-4 text-left hover:border-slate-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="badge-check" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Benefits List</span>
</button>
<button className="flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-4 text-left hover:border-slate-400">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="chart-column" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Statistics</span>
</button>
<div className="sm:col-span-2 flex justify-center">
<button className="flex w-full items-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-4 text-left hover:border-slate-400 sm:w-[calc(50%-0.375rem)]">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-600 ring-1 ring-slate-200">
<i className="h-5 w-5" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-slate-900">Tips List</span>
</button>
</div>
</div>
</div>
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">
                  Infographic Topic <span className="text-rose-500">*</span>
</label>
<input className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100" type="text" value="How small habits can improve your productivity throughout the day"/>
</div>
<div>
<label className="mb-1 block text-lg font-medium text-slate-700">Key Points to Include</label>
<p className="mb-2 text-sm font-normal text-slate-500">
                  One point per line. These will appear as the main content of your infographic.
                </p>
<textarea className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100" rows="6">Start the day by choosing your top 3 priorities
Use time blocking to protect focus sessions
Take short breaks to maintain energy and clarity
Reduce context switching by batching similar tasks
End the day with a quick review and plan for tomorrow</textarea>
</div>
<div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image Size</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-base text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
<option>1024x1024</option>
<option selected="">1024x1792</option>
<option>1792x1024</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="mb-2 block text-lg font-medium text-slate-700">Image Style</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-3 pr-10 text-base text-slate-900 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-100">
<option>Natural</option>
<option selected="">Flat Design</option>
<option>3D Render</option>
<option>Illustration</option>
</select>
<i className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" data-lucide="chevrons-up-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex items-start gap-3" id="brandColorsRow">
<button className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-violet-600 bg-violet-600 text-white shadow-sm" id="brandCheckbox">
<i className="h-3.5 w-3.5" data-lucide="check" strokeWidth="1.5"></i>
</button>
<label className="text-base font-normal text-slate-700" htmlFor="brandCheckbox">
                  Apply my brand colors to this infographic
                </label>
</div>
</div>

<div className="mt-6 flex justify-end">
<button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-3 text-lg font-semibold text-white shadow-sm transition hover:brightness-105 sm:w-auto sm:min-w-40">
                Generate
              </button>
</div>
</div>
</div>
</div>

<div className="w-full rounded-2xl bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 sm:p-5">
<div className="mb-3 flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
<i className="h-4 w-4" data-lucide="image" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900">Post Image</h3>
</div>
<div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
<img alt="Generated infographic preview" className="h-80 w-full object-cover" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
</div>
<button className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-600 hover:text-violet-700" id="reopenInfographic">
<i className="h-4 w-4" data-lucide="refresh-ccw" strokeWidth="1.5"></i>
          Edit points &amp; regenerate
        </button>
</div>
</div>
</div>


    </>
  );
}
