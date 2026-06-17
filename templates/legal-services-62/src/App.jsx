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
      
<header className="relative border-b border-neutral-800 overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" style={{backgroundImage: 'linear-gradient(to bottom right, rgba(23,23,23,0.85), rgba(10,10,10,0.9), rgba(0,0,0,0.95)), url(\'https: //images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}>
<div className="relative max-w-5xl mx-auto px-6 py-24">
<div className="pointer-events-none absolute inset-0 -z-0">
<div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
<div className="absolute -bottom-24 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
</div>
<p className="relative inline-flex items-center gap-2 text-sm uppercase tracking-widest text-neutral-400 mb-4">
<span className="w-8 h-px bg-neutral-600"></span>
          Insights
        </p>
<h1 className="relative text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Blog
        </h1>
<p className="relative mt-5 text-lg text-neutral-400 max-w-2xl leading-relaxed">
          Perspectives on criminal defense, post-conviction work, and
          independent investigation from Omni Investigations LLC.
        </p>
</div>
</header>
<main className="max-w-5xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-3 gap-8">
<article className="group">
<a className="block" href="#">
<div className="aspect-video overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 mb-5">
<img alt="Criminal defense investigation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&amp;q=80"/>
</div>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Insights
            </p>
<h2 className="text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-neutral-300 transition-colors">
              Criminal Defense Investigations: Why Independent Investigation
              Matters
            </h2>
<p className="text-sm text-neutral-400 leading-relaxed">
              Criminal defense investigations play an equally important role in
              the pursuit of truth, fairness, and due process through
              independent analysis of facts and evidence.
            </p>
</a>
</article>
<article className="group">
<a className="block" href="#">
<div className="aspect-video overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 mb-5">
<img alt="Post-conviction investigation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&amp;q=80"/>
</div>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Insights
            </p>
<h2 className="text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-neutral-300 transition-colors">
              Understanding Post-Conviction Investigations
            </h2>
<p className="text-sm text-neutral-400 leading-relaxed">
              A criminal conviction does not always mean the investigation is
              complete. Re-examine cases to identify new evidence,
              inconsistencies, or investigative deficiencies.
            </p>
</a>
</article>
<article className="group">
<a className="block" href="#">
<div className="aspect-video overflow-hidden rounded-lg bg-neutral-900 border border-neutral-800 mb-5">
<img alt="Wrongful convictions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&amp;q=80"/>
</div>
<p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Insights
            </p>
<h2 className="text-xl font-semibold tracking-tight text-white mb-3 group-hover:text-neutral-300 transition-colors">
              Wrongful Convictions: Why Independent Investigation Matters
            </h2>
<p className="text-sm text-neutral-400 leading-relaxed">
              Investigative errors, unreliable witnesses, and overlooked
              evidence can contribute to wrongful convictions. Independent
              review is critical to the truth.
            </p>
</a>
</article>
</div>
</main>

    </>
  );
}
