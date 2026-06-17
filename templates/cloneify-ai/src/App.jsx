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



  function switchTab(name){
    ['link','photo','video'].forEach(t=>{
      document.getElementById('panel-'+t).classList.add('hidden');
      const tab = document.getElementById('tab-'+t);
      tab.classList.remove('bg-neutral-800','text-white');
      tab.classList.add('text-neutral-400');
    });
    document.getElementById('panel-'+name).classList.remove('hidden');
    const active = document.getElementById('tab-'+name);
    active.classList.add('bg-neutral-800','text-white');
    active.classList.remove('text-neutral-400');
  }

  let resp = true;
  function toggleResponsive(){
    resp = !resp;
    const sw = document.getElementById('respSwitch');
    const dot = document.getElementById('respDot');
    if(resp){
      sw.classList.add('bg-indigo-500'); sw.classList.remove('bg-neutral-700');
      dot.classList.add('translate-x-4');
    } else {
      sw.classList.remove('bg-indigo-500'); sw.classList.add('bg-neutral-700');
      dot.classList.remove('translate-x-4');
    }
  }

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
      
<div className="max-w-6xl mx-auto px-5 sm:px-8">

<nav className="flex items-center justify-between py-5">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:copy-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-base">Cloneify</span>
</div>
<div className="hidden md:flex items-center gap-7 text-sm text-neutral-400">
<a className="hover:text-white transition" href="#">Features</a>
<a className="hover:text-white transition" href="#">Pricing</a>
<a className="hover:text-white transition" href="#">Docs</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:block text-sm text-neutral-400 hover:text-white transition">Sign in</button>
<button className="text-sm font-medium bg-white text-neutral-900 px-4 py-2 rounded-lg hover:bg-neutral-200 transition">Get started</button>
</div>
</nav>

<section className="text-center pt-16 pb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-xs text-neutral-400 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
      Powered by AI vision models
    </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-5">
      Clone any interface,<br/>
<span className="bg-gradient-to-r from-indigo-300 to-violet-400 bg-clip-text text-transparent">from a link or a photo.</span>
</h1>
<p className="text-neutral-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
      Paste a URL, drop a screenshot, or upload a video. We rebuild it into clean, responsive code that works everywhere.
    </p>
</section>

<section className="max-w-2xl mx-auto mb-20">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-2 shadow-2xl shadow-black/40">

<div className="flex gap-1 p-1 bg-neutral-950 rounded-xl mb-2">
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium bg-neutral-800 text-white transition" id="tab-link" onclick="switchTab('link')">
<iconify-icon className="text-base" icon="solar:link-linear"></iconify-icon> Link
        </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white transition" id="tab-photo" onclick="switchTab('photo')">
<iconify-icon className="text-base" icon="solar:gallery-linear"></iconify-icon> Photo
        </button>
<button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium text-neutral-400 hover:text-white transition" id="tab-video" onclick="switchTab('video')">
<iconify-icon className="text-base" icon="solar:videocamera-linear"></iconify-icon> Video
        </button>
</div>

<div className="p-4" id="panel-link">
<div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 focus-within:border-indigo-500/60 transition">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:global-linear"></iconify-icon>
<input className="flex-1 bg-transparent text-sm outline-none placeholder:text-neutral-600" placeholder="https://example.com" type="text"/>
</div>
</div>

<div className="p-4 hidden" id="panel-photo">
<label className="flex flex-col items-center justify-center gap-2 border border-dashed border-neutral-700 rounded-xl py-10 cursor-pointer hover:border-indigo-500/60 hover:bg-neutral-950 transition">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:cloud-upload-linear"></iconify-icon>
<span className="text-sm text-neutral-300">Drop an image or click to upload</span>
<span className="text-xs text-neutral-600">PNG, JPG up to 20MB</span>
<input accept="image/*" className="hidden" type="file"/>
</label>
</div>

<div className="p-4 hidden" id="panel-video">
<label className="flex flex-col items-center justify-center gap-2 border border-dashed border-neutral-700 rounded-xl py-10 cursor-pointer hover:border-indigo-500/60 hover:bg-neutral-950 transition">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:videocamera-record-linear"></iconify-icon>
<span className="text-sm text-neutral-300">Upload a screen recording</span>
<span className="text-xs text-neutral-600">MP4, MOV up to 200MB</span>
<input accept="video/*" className="hidden" type="file"/>
</label>
</div>

<div className="p-4 pt-0">
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm outline-none placeholder:text-neutral-600 resize-none focus:border-indigo-500/60 transition" placeholder="Describe anything specific you want copied… (e.g. 'keep the dark theme and the pricing layout')" rows="2"></textarea>
</div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 pt-0">
<button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition" id="respToggle" onclick="toggleResponsive()">
<span className="w-9 h-5 rounded-full bg-indigo-500 relative transition" id="respSwitch">
<span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition translate-x-4" id="respDot"></span>
</span>
          Fully responsive
        </button>
<button className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-medium px-5 py-2.5 rounded-xl hover:opacity-90 transition">
<iconify-icon className="text-base" icon="solar:magic-stick-3-linear"></iconify-icon>
          Clone it
        </button>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-4">Always use cloned designs responsibly and respect original creators' rights.</p>
</section>

<section className="grid sm:grid-cols-3 gap-4 pb-24">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
<div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-indigo-300 text-lg" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-1.5">Pixel-accurate</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Vision models read layouts, spacing, and colors to rebuild them faithfully.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
<div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-violet-300 text-lg" icon="solar:devices-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-1.5">Responsive by default</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Every clone adapts to mobile, tablet, and desktop automatically.</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
<iconify-icon className="text-emerald-300 text-lg" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="font-medium text-sm mb-1.5">Clean export</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Get readable, structured code you can drop straight into your project.</p>
</div>
</section>

<footer className="border-t border-neutral-900 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-600">
<span>© 2024 Cloneify</span>
<div className="flex gap-5">
<a className="hover:text-neutral-300 transition" href="#">Privacy</a>
<a className="hover:text-neutral-300 transition" href="#">Terms</a>
<a className="hover:text-neutral-300 transition" href="#">Contact</a>
</div>
</footer>
</div>


    </>
  );
}
