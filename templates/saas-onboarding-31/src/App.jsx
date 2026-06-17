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



        // Initialize Icons with specific stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Interactive logic
        document.addEventListener('DOMContentLoaded', () => {
            const buttons = document.querySelectorAll('#selection-grid button');
            const continueBtn = document.getElementById('continue-btn');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    // Reset all buttons
                    buttons.forEach(btn => btn.setAttribute('data-selected', 'false'));
                    
                    // Set current button to selected
                    button.setAttribute('data-selected', 'true');

                    // Enable continue button and add hover styles
                    continueBtn.disabled = false;
                    continueBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                    continueBtn.classList.add('hover:bg-[#6824a3]', 'hover:shadow-md');
                });
            });
        });
    
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
      

<div className="fixed top-8 left-8 flex items-center gap-2.5 z-10">
<svg className="text-gray-900" fill="none" height="26" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L6 3H11L8.5 9H13.5L17 3H22L16 15H11.5L14 9H9L5 21H2L2 12Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-medium tracking-tight text-gray-900">WriteRush</span>
</div>

<main className="w-full max-w-2xl px-6 flex flex-col items-center text-center z-10 relative mt-16 sm:mt-0">

<h1 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight mb-3">
            Before we set things up for you...
        </h1>
<p className="text-base text-gray-500 mb-10">
            This helps us personalize your experience
        </p>

<div className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/80 p-8 sm:p-10 text-left relative overflow-hidden">
<h2 className="text-2xl font-medium text-gray-900 tracking-tight mb-8">
                Where do you publish your content?
            </h2>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10" id="selection-grid">

<button className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#7B2FBE] hover:shadow-sm data-[selected=true]:bg-[#7B2FBE] data-[selected=true]:border-[#7B2FBE] transition-all duration-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] focus-visible:ring-offset-2" data-selected="false" type="button">
<div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-purple-50 group-data-[selected=true]:bg-white/20 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#7B2FBE] group-data-[selected=true]:text-white transition-colors" data-lucide="layout-template"></i>
</div>
<span className="text-base font-normal text-gray-900 group-data-[selected=true]:text-white transition-colors">
                        WordPress
                    </span>
</button>

<button className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#7B2FBE] hover:shadow-sm data-[selected=true]:bg-[#7B2FBE] data-[selected=true]:border-[#7B2FBE] transition-all duration-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] focus-visible:ring-offset-2" data-selected="false" type="button">
<div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-purple-50 group-data-[selected=true]:bg-white/20 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#7B2FBE] group-data-[selected=true]:text-white transition-colors" data-lucide="layers"></i>
</div>
<span className="text-base font-normal text-gray-900 group-data-[selected=true]:text-white transition-colors">
                        Other CMS
                    </span>
</button>

<button className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#7B2FBE] hover:shadow-sm data-[selected=true]:bg-[#7B2FBE] data-[selected=true]:border-[#7B2FBE] transition-all duration-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] focus-visible:ring-offset-2" data-selected="false" type="button">
<div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-purple-50 group-data-[selected=true]:bg-white/20 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#7B2FBE] group-data-[selected=true]:text-white transition-colors" data-lucide="terminal"></i>
</div>
<span className="text-base font-normal text-gray-900 group-data-[selected=true]:text-white transition-colors">
                        My own platform
                    </span>
</button>

<button className="group relative flex flex-col items-start gap-4 p-6 rounded-2xl border border-gray-200 bg-white hover:border-[#7B2FBE] hover:shadow-sm data-[selected=true]:bg-[#7B2FBE] data-[selected=true]:border-[#7B2FBE] transition-all duration-200 text-left outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] focus-visible:ring-offset-2" data-selected="false" type="button">
<div className="p-2.5 rounded-xl bg-gray-50 group-hover:bg-purple-50 group-data-[selected=true]:bg-white/20 transition-colors">
<i className="w-6 h-6 text-gray-600 group-hover:text-[#7B2FBE] group-data-[selected=true]:text-white transition-colors" data-lucide="compass"></i>
</div>
<span className="text-base font-normal text-gray-900 group-data-[selected=true]:text-white transition-colors">
                        Just exploring
                    </span>
</button>
</div>

<button className="w-full flex items-center justify-center gap-2 bg-[#7B2FBE] text-white text-base font-normal py-4 rounded-xl opacity-50 cursor-not-allowed transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[#7B2FBE] focus-visible:ring-offset-2" disabled="" id="continue-btn">
                Continue
                <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
</main>


    </>
  );
}
