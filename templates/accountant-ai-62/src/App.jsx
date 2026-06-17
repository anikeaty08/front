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



      (function() {
        function init() {
          const btn = document.getElementById('cta-button');
          const modal = document.getElementById('workflow-modal');
          const modalContent = document.getElementById('workflow-modal-content');
          const closeBtn = document.getElementById('close-modal');
          const form = document.getElementById('workflow-form');
          const successMsg = document.getElementById('form-success');

          const openModal = () => {
            modal.classList.remove('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
          };

          const closeModal = () => {
            modal.classList.add('opacity-0', 'pointer-events-none');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
              if(form) form.classList.remove('hidden');
              if(successMsg) {
                successMsg.classList.add('hidden');
                successMsg.classList.remove('flex');
              }
              if(form) form.reset();
            }, 300);
          };

          if (btn) btn.addEventListener('click', openModal);
          if (closeBtn) closeBtn.addEventListener('click', closeModal);
          if (modal) {
            modal.addEventListener('click', (e) => {
              if (e.target === modal) closeModal();
            });
          }

          if (form) {
            form.addEventListener('submit', async (e) => {
              e.preventDefault();
              const formData = new FormData(form);
              const data = Object.fromEntries(formData.entries());

              const webhookUrl = 'https://hook.eu1.make.com/9edth7ms20ufpw8z9diqxdu35d19356o';

              try {
                await fetch(webhookUrl, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(data),
                  mode: 'no-cors'
                });
              } catch (err) {
                console.error('Webhook error:', err);
              }

              form.classList.add('hidden');
              successMsg.classList.remove('hidden');
              successMsg.classList.add('flex');

              setTimeout(() => {
                closeModal();
              }, 2500);
            });
          }
        }

        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', init);
        } else {
          init();
        }
      })();
    
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
      


<main className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center flex-grow z-10 relative pt-4 pb-4">

<div className="mb-2 text-center">
<span className="text-sm md:text-base font-black text-white uppercase tracking-widest drop-shadow-md font-['Oswald']">
          *FOR ACCOUNTANTS LOOKING TO SAVE TIME AND EXPAND OPERATIONS*
        </span>
</div>

<h1 className="font-['Oswald'] font-bold uppercase tracking-tight text-white leading-none max-w-5xl mb-2 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg text-balance mx-auto">
        DISCOVER
        <span className="text-yellow-400">A 3-STEP</span>
        AI WORKFLOW THAT ENABLES
        <span className="text-red-500">BUSY ACCOUNTANTS</span>
<br className="hidden sm:block"/>
        TO ADD CLIENTS,
        <span className="text-cyan-400">NOT HOURS</span>
<span className="whitespace-nowrap">
          IN
          <span className="text-yellow-400">15 DAYS</span>
</span>
</h1>

<p className="font-['Oswald'] text-red-400 max-w-4xl font-bold leading-snug mb-4 text-lg sm:text-xl md:text-2xl drop-shadow-md">
        Preview the exact workflow and review every step before making a
        decision.
      </p>

<div className="w-full aspect-video rounded-2xl border-4 border-red-900/50 bg-neutral-950/80 shadow-[0_0_50px_rgba(69,10,10,0.5)] backdrop-blur-xl overflow-hidden relative group flex items-center justify-center cursor-pointer mb-5 max-w-3xl">

<div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #991b1b 0%, transparent 80%)'}}></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500 flex items-center justify-center z-10">
<div className="w-28 h-20 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] group-hover:scale-105 group-hover:bg-red-500 transition-all duration-300 border border-red-400/20 backdrop-blur-sm">
<iconify-icon className="" height="56" icon="solar:play-bold" width="56"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-20 flex items-end px-6 pb-4">
<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/80" height="20" icon="solar:play-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/80" height="20" icon="solar:volume-loud-linear" width="20"></iconify-icon>
<span className="text-xs font-medium text-white/80 tracking-wide font-mono ml-2">
                00:00 / 18:45
              </span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-white/80" height="20" icon="solar:settings-linear" width="20"></iconify-icon>
<iconify-icon className="text-white/80" height="20" icon="solar:full-screen-linear" width="20"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
<div className="h-full bg-red-500 w-1/4 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-sm"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center gap-3 w-full">
<button className="w-full sm:w-auto px-10 bg-gradient-to-b from-red-500 to-red-700 hover:from-red-400 hover:to-red-600 text-white rounded-full font-black text-xl md:text-2xl uppercase tracking-wide shadow-[0_0_40px_rgba(220,38,38,0.6)] py-3 font-['Oswald'] transition-transform hover:scale-105 flex items-center justify-center" id="cta-button">
          SEE THE WORKFLOW IN ACTION
        </button>
</div>
</main>

<footer className="w-full border-t border-red-950/50 py-4 mt-auto z-10 relative">
<div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs font-light text-red-200/30 tracking-wide">
          © 2024 MTHD Systems. All rights reserved.
        </p>
<div className="flex gap-4">
<a className="text-xs font-light text-red-200/30 hover:text-red-200/60 transition-colors" href="#">
            Privacy
          </a>
<a className="text-xs font-light text-red-200/30 hover:text-red-200/60 transition-colors" href="#">
            Terms
          </a>
</div>
</div>
</footer>
<div className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300 backdrop-blur-md bg-black/80 p-4" id="workflow-modal">
<div className="relative w-full max-w-md bg-[#0a0303] border border-red-900/50 rounded-2xl shadow-[0_0_50px_rgba(153,27,27,0.3)] p-8 transform scale-95 transition-transform duration-300" id="workflow-modal-content">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors cursor-pointer z-10" id="close-modal">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
<h2 className="font-['Oswald'] text-2xl md:text-3xl font-bold uppercase tracking-tight text-white mb-2">
          Access the Workflow
        </h2>
<p className="text-sm text-red-200/70 mb-6 leading-relaxed">
          Enter your details below to get instant access to the 3-step AI
          workflow.
        </p>
<form className="flex flex-col gap-4" id="workflow-form">
<div>
<label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5" htmlFor="first-name">
              First Name
            </label>
<input className="w-full bg-black/50 border border-red-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-700" id="first-name" name="firstName" placeholder="Your first name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5" htmlFor="email">
              Email Address
            </label>
<input className="w-full bg-black/50 border border-red-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-700" id="email" name="email" placeholder="Your best email" required="" type="email"/>
</div>
<button className="mt-4 w-full bg-gradient-to-b from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white rounded-lg font-bold text-lg uppercase tracking-wide shadow-[0_0_20px_rgba(220,38,38,0.3)] py-3.5 font-['Oswald'] transition-transform hover:scale-[1.02] flex items-center justify-center" type="submit">
            Get Instant Access
          </button>
</form>
<div className="hidden flex-col items-center justify-center py-6 text-center" id="form-success">
<iconify-icon className="text-green-500 mb-4" height="56" icon="solar:check-circle-bold" width="56"></iconify-icon>
<h3 className="font-['Oswald'] text-2xl font-bold uppercase text-white mb-2 tracking-tight">
            Success!
          </h3>
<p className="text-sm text-red-200/70">Redirecting to the workflow...</p>
</div>
</div>
</div>


    </>
  );
}
