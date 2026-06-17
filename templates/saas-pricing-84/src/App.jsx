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



      lucide.createIcons();
    
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
      
<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(0,0,0,1))]"></div>

<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
        Plans for Every
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-zinc-200 to-white">
          Scale
        </span>
</h2>
<p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
        Simple, transparent pricing for Agents and Studio. Choose what's right
        for you.
      </p>
</div>

<div className="w-full max-w-5xl mx-auto flex flex-col gap-6">

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm">

<div className="flex flex-col lg:w-1/3 shrink-0">
<h3 className="text-2xl font-medium tracking-tight text-white">
            Individual
          </h3>
<p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            For individual use and personal projects.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                ₦99
              </span>
<span className="text-sm text-zinc-500">/ month</span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 text-white text-sm font-medium hover:bg-zinc-700 transition-colors ring-1 ring-inset ring-white/10">
              Choose Plan
            </button>
</div>
</div>

<div className="hidden lg:block w-px bg-white/5"></div>

<div className="flex-grow lg:py-2">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<li className="flex items-start gap-3 w-full border-b border-white/5 pb-3 mb-1 sm:col-span-2">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">Credits</span>
<span className="text-sm font-medium text-white">99,000</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Unlimited voice AI agents
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Unlimited project members
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">WhatsApp integration</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Unlimited call log retention
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Built-in ticketing</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Contacts management</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Dynamic call analytics</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Text-to-speech</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Speech-to-text</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Unlimited voice cloning</span>
</li>
<li className="flex items-start gap-3 sm:col-span-2">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Community and help center support only (no guaranteed SLA)
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/5 pt-3 mt-1 sm:col-span-2">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">API Access</span>
<span className="text-sm font-medium text-white">Included</span>
</div>
</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm">
<div className="flex flex-col lg:w-1/3 shrink-0">
<h3 className="text-2xl font-medium tracking-tight text-white">Basic</h3>
<p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            For small teams and early growth.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                ₦600
              </span>
<span className="text-sm text-zinc-500">/ month</span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 text-white text-sm font-medium hover:bg-zinc-700 transition-colors ring-1 ring-inset ring-white/10">
              Choose Plan
            </button>
</div>
</div>
<div className="hidden lg:block w-px bg-white/5"></div>
<div className="flex-grow lg:py-2">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 w-full border-b border-white/5 pb-3 mb-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">Credits</span>
<span className="text-sm font-medium text-white">600,000</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Everything in Individual, plus
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Standard support, up to 5 business days
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/5 pt-3 mt-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">API Access</span>
<span className="text-sm font-medium text-white">Included</span>
</div>
</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/60 border shadow-2xl transition-all duration-300 overflow-hidden border-indigo-500/30 shadow-indigo-500/20 hover:-translate-y-1 hover:shadow-indigo-500/30 backdrop-blur-md">

<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.04] to-transparent pointer-events-none rounded-3xl"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent pointer-events-none"></div>
<div className="flex flex-col lg:w-1/3 shrink-0 relative z-10">
<div className="flex items-center justify-between mb-3">
<h3 className="text-2xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
              Starter
            </h3>
<span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Most Popular
            </span>
</div>
<p className="text-sm text-zinc-400 leading-relaxed">
            For teams ready for production usage.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white to-indigo-100">
                ₦1,400
              </span>
<span className="text-sm text-zinc-500">/ month</span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02]">
              Choose Plan
            </button>
</div>
</div>
<div className="hidden lg:block w-px bg-white/10 relative z-10"></div>
<div className="flex-grow lg:py-2 relative z-10">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 w-full border-b border-white/10 pb-3 mb-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-200">Credits</span>
<span className="text-sm font-medium text-white">2,000,000</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-400" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-200">
                Everything in Basic, plus
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-400" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-200">
                Standard support, up to 3 business days
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/10 pt-3 mt-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-200">API Access</span>
<span className="text-sm font-medium text-white">Included</span>
</div>
</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm">
<div className="flex flex-col lg:w-1/3 shrink-0">
<h3 className="text-2xl font-medium tracking-tight text-white">Pro</h3>
<p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            For advanced workflows and higher usage.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                ₦2,400
              </span>
<span className="text-sm text-zinc-500">/ month</span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 text-white text-sm font-medium hover:bg-zinc-700 transition-colors ring-1 ring-inset ring-white/10">
              Choose Plan
            </button>
</div>
</div>
<div className="hidden lg:block w-px bg-white/5"></div>
<div className="flex-grow lg:py-2">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 w-full border-b border-white/5 pb-3 mb-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">Credits</span>
<span className="text-sm font-medium text-white">3,600,000</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Everything in Starter, plus
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Priority support, up to 2 business days
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/5 pt-3 mt-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">API Access</span>
<span className="text-sm font-medium text-white">Included</span>
</div>
</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm">
<div className="flex flex-col lg:w-1/3 shrink-0">
<h3 className="text-2xl font-medium tracking-tight text-white">Scale</h3>
<p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            For high-volume teams and scaling operations.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                ₦4,000
              </span>
<span className="text-sm text-zinc-500">/ month</span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-zinc-800/80 text-white text-sm font-medium hover:bg-zinc-700 transition-colors ring-1 ring-inset ring-white/10">
              Choose Plan
            </button>
</div>
</div>
<div className="hidden lg:block w-px bg-white/5"></div>
<div className="flex-grow lg:py-2">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 w-full border-b border-white/5 pb-3 mb-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">Credits</span>
<span className="text-sm font-medium text-white">6,250,000</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">Everything in Pro, plus</span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Priority support, up to 1 business day
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/5 pt-3 mt-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">API Access</span>
<span className="text-sm font-medium text-white">Included</span>
</div>
</li>
</ul>
</div>
</div>

<div className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5 backdrop-blur-sm">
<div className="flex flex-col lg:w-1/3 shrink-0">
<h3 className="text-2xl font-medium tracking-tight text-white">
            Enterprise
          </h3>
<p className="text-sm text-zinc-400 mt-3 leading-relaxed">
            For organizations with custom requirements.
          </p>
<div className="mt-8 mb-6 lg:mb-0 lg:mt-auto">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tight text-white">
                Custom
              </span>
</div>
<button className="w-full py-2.5 px-4 rounded-xl bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors">
              Contact Us
            </button>
</div>
</div>
<div className="hidden lg:block w-px bg-white/5"></div>
<div className="flex-grow lg:py-2">
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 w-full border-b border-white/5 pb-3 mb-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">Credits</span>
<span className="text-sm font-medium text-white">Custom</span>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Everything in Scale, plus
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 shrink-0 text-zinc-500" data-lucide="check" strokeWidth="1.5"></i>
<span className="text-sm text-zinc-300">
                Dedicated SLA with a custom response agreement
              </span>
</li>
<li className="flex items-start gap-3 w-full border-t border-white/5 pt-3 mt-1">
<i className="w-4 h-4 mt-0.5 shrink-0 text-white" data-lucide="check" strokeWidth="1.5"></i>
<div className="flex flex-1 justify-between items-start gap-4">
<span className="text-sm text-zinc-300">API Access</span>
<span className="text-sm font-medium text-white">Custom</span>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto mt-16 text-center flex flex-col gap-4">
<p className="text-[13px] text-zinc-500 leading-relaxed max-w-3xl mx-auto">
        Usage rates: Voice Agent 1 min = 1,000 credits; Chatbot 1 conversation =
        600; STT 1 min = 100; TTS 1k chars = 400; Voice Clone = 250.
      </p>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-all inline-flex items-center justify-center gap-1.5 group bg-zinc-900/50 hover:bg-zinc-800/80 px-5 py-2.5 rounded-full border border-white/5 hover:border-white/10" href="#">
        View full pricing and FAQs
        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>


    </>
  );
}
