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
      

<main className="w-full max-w-[1100px] bg-white/50 backdrop-blur-3xl rounded-[2.5rem] border border-white/80 shadow-[0_8px_40px_rgb(0,0,0,0.04)] p-4 md:p-8 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#FEBED9]/40 to-transparent rounded-full mix-blend-multiply blur-[80px] pointer-events-none"></div>

<header className="flex items-center justify-between mb-10 relative z-10 animate-slide-up">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-[#FD6703] rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tighter uppercase text-slate-900">
            Orbbit
          </span>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-slate-500"></div>
</header>

<section className="mb-8 relative z-10 animate-slide-up delay-100">
<div className="flex items-center gap-3 mb-6">
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
            Alex, I handled the routine follow-ups.
          </h1>
</div>

<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
<iconify-icon className="text-slate-400 text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-600">
<strong className="font-medium text-slate-900">31</strong>
              done
            </span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-amber-200/60 shadow-sm">
<iconify-icon className="text-amber-500 text-sm" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-sm text-slate-600">
<strong className="font-medium text-amber-600">4</strong>
              stuck
            </span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full border border-indigo-100 shadow-sm">
<iconify-icon className="text-indigo-500 text-sm" icon="solar:bell-bing-linear"></iconify-icon>
<span className="text-sm text-slate-600">
<strong className="font-medium text-indigo-700">3</strong>
              need your decision
            </span>
</div>
</div>
</section>

<div className="flex flex-col gap-5 relative z-10">

<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col animate-slide-up delay-200">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
              Decisions Required
            </h2>
<span className="font-mono-custom text-xs px-2.5 py-1 rounded-md text-red-600 bg-red-50">
              CRITICAL
            </span>
</div>
<div className="flex flex-col gap-4">

<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1 flex items-center gap-2">
<img alt="ABC Plumbing" className="w-5 h-5 rounded-md object-cover border border-slate-200/60 shadow-sm shrink-0" src="https://img.logo.dev/abcplumbing.com?token=pk_GkUzqxc8RrmyAUaKCjJeCw"/>
                    ABC Plumbing
                    <span className="text-xs font-normal text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      Renewal
                    </span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Email failed 3 times. Renewal is close. I recommend a call.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-[#FD6703] text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-[#E55D02] transition-colors flex items-center gap-1.5 shadow-sm" title="Orbbit's AI will call the client to gather renewal info and log the notes automatically.">
<iconify-icon className="text-sm" icon="solar:phone-calling-linear"></iconify-icon>
                  Let Orbbit call
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  You call
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Show why
                </button>
</div>
</div>

<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1 flex items-center gap-2">
<img alt="Northside Electrical" className="w-5 h-5 rounded-md object-cover border border-slate-200/60 shadow-sm shrink-0" src="https://img.logo.dev/northsideelectrical.com?token=pk_GkUzqxc8RrmyAUaKCjJeCw"/>
                    Northside Electrical
                    <span className="text-xs font-normal text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      Risk
                    </span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Possible underinsurance. I cannot judge this safely.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm" title="Opens the client's file and policy document so you can review the risk.">
<iconify-icon className="text-sm" icon="solar:document-text-linear"></iconify-icon>
                  Review
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Ask client
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Show why
                </button>
</div>
</div>

<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1 flex items-center gap-2">
<img alt="Priya Shah" className="w-5 h-5 rounded-full object-cover border border-slate-200/60 shadow-sm shrink-0" src="https://ui-avatars.com/api/?name=Priya+Shah&amp;background=10B981&amp;color=fff"/>
                    Priya Shah
                    <span className="text-xs font-normal text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      New Lead
                    </span>
</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Interested life insurance lead. Wants pricing from a human.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors flex items-center gap-1.5 shadow-sm">
<iconify-icon className="text-sm" icon="solar:calendar-add-linear"></iconify-icon>
                  Book broker call
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Send SMS
                </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Show transcript
                </button>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 flex flex-col animate-slide-up delay-300">
<div className="flex items-center mb-6">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                What I’m working on
              </h2>
</div>
<div className="flex flex-col gap-3">
<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">
                    Green Valley Dental
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Carrier has not sent quotes. I chased twice. Renewal pricing
                    is blocked.
                  </p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
                    Call carrier
                  </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
                    Send firmer email
                  </button>
</div>
</div>
<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">
                    City Cafe
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Client pushed back on price. I drafted a reply with cheaper
                    options.
                  </p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-slate-800 transition-colors shadow-sm" title="Opens the drafted email reply with cheaper options for your final approval.">
                    Review reply
                  </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
                    Show quote
                  </button>
</div>
</div>
<div className="group p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-sm font-medium text-slate-900 mb-1">
                    Better Homes
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                    Signed form still missing after 2 reminders. Renewal cannot
                    proceed without it.
                  </p>
</div>
<div className="flex flex-wrap items-center gap-2 shrink-0">
<button className="bg-[#FD6703] text-white text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-[#E55D02] transition-colors shadow-sm flex items-center gap-1.5" title="Orbbit's AI will call the client to remind them about the missing signed form.">
<iconify-icon className="text-sm" icon="solar:phone-calling-linear"></iconify-icon>
                    Let Orbbit call
                  </button>
<button className="bg-white border border-slate-200 text-slate-700 text-xs px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors font-medium shadow-sm">
                    Send reminder
                  </button>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-[#EAE2F8] to-[#F3E8FF] rounded-2xl border border-white/60 shadow-sm p-6 flex flex-col relative overflow-hidden group animate-slide-up delay-300">

<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#FEBED9] rounded-full mix-blend-multiply opacity-50 blur-[40px] animate-fluid-blob pointer-events-none"></div>
<div className="flex items-center mb-6 pb-4 border-b border-white/40 relative z-10">
<h2 className="text-xl font-medium tracking-tight text-slate-900">
                Completed
              </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 relative z-10">
<div className="bg-white/50 backdrop-blur-md rounded-xl p-3.5 border border-white/60 flex flex-col">
<span className="text-2xl font-medium tracking-tight text-slate-900 leading-none mb-1">
                  6
                </span>
<span className="font-mono-custom text-xs text-slate-600">
                  Emails sent
                </span>
</div>
<div className="bg-white/50 backdrop-blur-md rounded-xl p-3.5 border border-white/60 flex flex-col">
<span className="text-2xl font-medium tracking-tight text-slate-900 leading-none mb-1">
                  7
                </span>
<span className="font-mono-custom text-xs text-slate-600">
                  Notes updated
                </span>
</div>
<div className="bg-white/50 backdrop-blur-md rounded-xl p-3.5 border border-white/60 flex flex-col">
<span className="text-2xl font-medium tracking-tight text-slate-900 leading-none mb-1">
                  1
                </span>
<span className="font-mono-custom text-xs text-slate-600">
                  Call booked
                </span>
</div>
<div className="bg-white/50 backdrop-blur-md rounded-xl p-3.5 border border-white/60 flex flex-col">
<span className="text-2xl font-medium tracking-tight text-slate-900 leading-none mb-1">
                  2
                </span>
<span className="font-mono-custom text-xs text-slate-600">
                  Leads closed
                </span>
</div>
</div>
<button className="w-full bg-white text-slate-900 text-sm px-4 py-2.5 rounded-xl font-medium border border-white hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 relative z-10 shadow-sm" title="View a detailed, timestamped audit log of every email sent and note updated by Orbbit.">
              Open proof log
              <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</main>

    </>
  );
}
