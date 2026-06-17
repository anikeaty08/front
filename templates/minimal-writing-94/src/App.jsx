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



        document.addEventListener('DOMContentLoaded', () => {
            const copyBtn = document.getElementById('copyBtn');
            const editor = document.getElementById('editor');
            const copyIcon = document.getElementById('copyIcon');
            const copyText = document.getElementById('copyText');
            
            // Auto-focus on load
            editor.focus();

            copyBtn.addEventListener('click', async () => {
                const text = editor.value;
                if (!text.trim()) return;

                try {
                    await navigator.clipboard.writeText(text);
                    
                    // Visual feedback
                    const originalIcon = copyIcon.getAttribute('icon');
                    copyIcon.setAttribute('icon', 'solar:check-circle-linear');
                    copyBtn.classList.add('text-zinc-900', 'bg-zinc-100');
                    copyBtn.classList.remove('text-zinc-400');
                    copyText.textContent = 'Copied';
                    copyText.classList.remove('opacity-0');
                    copyText.classList.add('opacity-100');

                    setTimeout(() => {
                        copyIcon.setAttribute('icon', originalIcon);
                        copyBtn.classList.remove('text-zinc-900', 'bg-zinc-100');
                        copyBtn.classList.add('text-zinc-400');
                        copyText.textContent = 'Copy';
                        copyText.classList.remove('opacity-100');
                        copyText.classList.add('opacity-0');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
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
      
<header className="flex items-center justify-between px-6 py-6 md:px-12 md:py-8 max-w-5xl mx-auto w-full transition-all duration-300">
<div className="font-medium text-xl tracking-tighter text-zinc-900 select-none">
            WR
        </div>
<button className="group flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-200" id="copyBtn" title="Copy to clipboard">
<iconify-icon height="22" icon="solar:copy-linear" id="copyIcon" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="ml-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block" id="copyText">Copy</span>
</button>
</header>
<main className="flex-grow flex justify-center w-full px-6 md:px-12 pb-12 max-w-5xl mx-auto">
<textarea className="w-full h-full min-h-[75vh] resize-none outline-none border-none bg-transparent text-lg md:text-xl text-zinc-800 placeholder-zinc-300 leading-relaxed focus:ring-0 p-0" id="editor" placeholder="Start typing..."></textarea>
</main>


    </>
  );
}
