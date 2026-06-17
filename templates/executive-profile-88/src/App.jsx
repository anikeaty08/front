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
      
<div className="page">
<div className="divider"></div>
<div className="rails"></div>

<div className="band band--head">
<div className="grp">
<span className="lbl tag">TORANACO</span>
<span className="vdiv"></span>
<span className="lbl">Measurement Layer for Collective Coherence</span>
</div>
<span className="lbl dim">Document Template · v1.0</span>
</div>
<div className="content">

<div className="head-row">
<span className="overline">Document Type — Category</span>
<svg className="connector" viewbox="0 0 140 30">
<polyline fill="none" points="0,9 88,9 104,1 140,1" stroke="#24FAFA" strokeWidth="1.4" style={{filter: 'drop-shadow(0 0 4px rgba(36,250,250,.7))'}}></polyline>
</svg>
</div>

<h1 className="title">Document<br/>Title</h1>

<p className="standfirst">A single-line standfirst that frames the page. Replace with your own summary sentence.</p>
<div className="rule"></div>

<p className="body-text">Body copy goes here. Use this region for general-purpose content — paragraphs, explanations,
        descriptions, or supporting detail. The measure is set for comfortable reading at A4, and the type scale matches
        the Toranaco deck so every document feels like one system.</p>
<p className="body-text">A second paragraph continues the thought. Keep sentences plain and physics-grade; let the
        spectrum accents and structural rhythm carry the brand rather than decoration.</p>

<div className="sec">
<div className="sec__over"><span className="sec__bar"></span><span className="sec__over-lbl">Section</span></div>
<h2 className="sec__h">Section Heading</h2>
<p className="body-text">Introduce the section in one or two lines, then use the signal list below for discrete
          points. Each dot can carry its own spectrum colour so colour stays meaningful, never decorative.</p>
<ul className="siglist">
<li><span className="dot dot--cyan"></span>First point — replace with your own item</li>
<li><span className="dot dot--green"></span>Second point — keep items short and parallel</li>
<li><span className="dot dot--gold"></span>Third point — colour cycles through the spectrum</li>
<li><span className="dot dot--pink"></span>Fourth point — add or remove rows as needed</li>
</ul>
</div>

<div className="sec">
<div className="sec__over">
<span className="sec__bar" style={{background: 'var(--c-green)', boxShadow: '0 0 6px rgba(0,255,136,.5)'}}></span><span className="sec__over-lbl">Process</span>
</div>
<h2 className="sec__h">Sequence or Flow</h2>
<div className="flow">
<span className="flow__chip --in">Input</span><span className="flow__arrow">→</span>
<span className="flow__chip">Step two</span><span className="flow__arrow">→</span>
<span className="flow__chip">Step three</span><span className="flow__arrow">→</span>
<span className="flow__chip">Step four</span><span className="flow__arrow">→</span>
<span className="flow__chip --out">Output</span>
</div>
</div>

<div className="callout">
<span className="callout__bar"></span>
<p className="callout__text">A key statement or pull-quote sits here to close the page. Emphasise the one idea that
          matters — <span className="accent">the line readers should remember.</span></p>
</div>
</div>

<div className="band band--foot">
<span className="lbl dim">Toranaco · Document Template</span>
<span className="pagenum"><b>01</b> / 01</span>
</div>
<div className="grain"></div>
</div>

    </>
  );
}
