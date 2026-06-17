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



      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
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
      
<main className="mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center p-3 sm:p-6 lg:p-8">
<section className="relative h-auto w-full overflow-hidden rounded-3xl bg-white/95 shadow-2xl shadow-black/30 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-50 to-transparent"></div>
<header className="relative z-10 flex items-center justify-between border-b border-slate-200/80 bg-white/80 px-5 py-4 backdrop-blur-xl sm:px-7 lg:px-9">
<div className="flex items-center gap-8">
<a aria-label="Zorwa home" className="flex items-end gap-1.5" href="#">
<span className="-rotate-6 text-lg font-extrabold tracking-tight text-slate-950">
                zorw
              </span>
<span className="-ml-1 text-4xl font-extrabold leading-none tracking-tight text-slate-950">
                A
              </span>
</a>
<nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
<a className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white shadow-sm" href="#">
                Home
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" href="#">
                CV Studio
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" href="#">
                Job Hub
              </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-100 hover:text-slate-900" href="#">
                Coach
              </a>
</nav>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button aria-label="Notifications" className="relative grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-teal-500 ring-2 ring-white"></span>
</button>
<button className="hidden items-center gap-2 rounded-full bg-slate-100 py-1.5 pl-1.5 pr-3 transition hover:bg-slate-200 sm:flex">
<img alt="Rim profile photo" className="h-8 w-8 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=120&amp;q=80"/>
<span className="text-sm font-medium text-slate-700">Rim</span>
</button>
<button aria-label="Open menu" className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-white md:hidden">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</header>
<div className="relative z-10 grid gap-6 p-5 sm:p-7 lg:p-9">
<section className="space-y-6">
<div className="grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,.75fr)]">
<section className="relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.35),transparent_34%),linear-gradient(135deg,#020617,#0f172a_48%,#042f2e)] p-6 text-white shadow-xl shadow-slate-950/10">
<div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-400/30 blur-3xl"></div>
<div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl"></div>
<div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="max-w-xl">
<div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-medium text-teal-100 ring-1 ring-white/15">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                      Career Mission Control
                    </div>
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      Do the next right thing — in 10 minutes.
                    </h2>
<p className="mt-3 text-base leading-7 text-slate-300">
                      No maze. No guesswork. Zorwa turns your career move into
                      one clear mission: finish today’s action, unlock the next
                      step, and get seen faster.
                    </p>
</div>
<div className="shrink-0 rounded-3xl bg-white/10 p-4 ring-1 ring-white/15">
<div className="relative grid h-28 w-28 place-items-center">
<svg aria-hidden="true" className="absolute inset-0 h-28 w-28 -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="52" stroke="rgb(255 255 255 / 0.14)" strokeWidth="10"></circle>
<circle cx="60" cy="60" fill="none" r="52" stroke="rgb(45 212 191)" stroke-dasharray="327" stroke-dashoffset="190" strokeLinecap="round" strokeWidth="10"></circle>
</svg>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight">42%</p>
<p className="text-xs font-medium text-slate-300">
                          path unlocked
                        </p>
</div>
</div>
</div>
</div>
</section>
<section className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-teal-50 p-5 shadow-sm">
<div className="mb-5 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-500 text-white shadow-lg shadow-teal-500/20">
<i className="h-6 w-6" data-lucide="radar"></i>
</div>
<span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
                    Do this now
                  </span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  Today’s focus: become findable
                </h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
                  Add the exact role words recruiters search for. One small edit
                  can make your profile easier to discover.
                </p>
<button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800">
                  Start the 10-minute fix
                  <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</section>
</div>
<section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
<div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<p className="text-sm font-medium text-teal-700">
                    Your no-confusion roadmap
                  </p>
<h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
                    One path. Six moves. Always know what to do next.
                  </h2>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950" href="#">
                  Open full roadmap
                  <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="relative">
<div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#f8fafc,#ffffff_42%,#ecfeff)] p-4 ring-1 ring-slate-200">
<div className="absolute bottom-10 left-8 top-10 w-px bg-gradient-to-b from-teal-300 via-cyan-300 to-slate-200 lg:bottom-auto lg:left-10 lg:right-10 lg:top-14 lg:h-px lg:w-auto lg:bg-gradient-to-r"></div>
<div className="relative grid gap-3 lg:grid-cols-6">
<article className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-teal-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-teal-600 text-white">
<i className="h-5 w-5" data-lucide="check"></i>
</div>
<span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
                          Done
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                        Step 1
                      </p>
<h3 className="mt-1 text-base font-semibold text-slate-950">
                        Know your starting point
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-500">
                        See your strengths, gaps, and best-fit direction.
                      </p>
<div className="absolute -right-4 top-8 z-10 hidden h-8 w-8 place-items-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-200 shadow-sm animate-pulse lg:grid">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</article>
<article className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-teal-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-teal-600 text-white">
<i className="h-5 w-5" data-lucide="check"></i>
</div>
<span className="rounded-full bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-700">
                          Done
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-teal-700">
                        Step 2
                      </p>
<h3 className="mt-1 text-base font-semibold text-slate-950">
                        Make your CV instantly clear
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-500">
                        Turn experience into proof people understand fast.
                      </p>
<div className="absolute -right-4 top-8 z-10 hidden h-8 w-8 place-items-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-200 shadow-sm animate-pulse lg:grid">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</article>
<article className="relative rounded-2xl bg-slate-950 p-4 text-white shadow-xl shadow-slate-950/15 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950">
<i className="h-5 w-5" data-lucide="search-check"></i>
</div>
<span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white ring-1 ring-white/15">
                          You’re here
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-teal-200">
                        Step 3
                      </p>
<h3 className="mt-1 text-base font-semibold text-white">
                        Make recruiters find you
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-300">
                        Add searchable signals so the right roles can spot you.
                      </p>
<button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-3 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-slate-100">
                        Keep going
                        <i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
<div className="absolute -right-4 top-8 z-10 hidden h-8 w-8 place-items-center rounded-full bg-white text-teal-600 ring-1 ring-teal-200 shadow-sm animate-pulse lg:grid">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</article>
<article className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-500">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                          Next
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Step 4
                      </p>
<h3 className="mt-1 text-base font-semibold text-slate-950">
                        Pick the right targets
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-500">
                        Choose roles, companies, and markets that fit you.
                      </p>
<div className="absolute -right-4 top-8 z-10 hidden h-8 w-8 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 animate-pulse lg:grid">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</article>
<article className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-400">
<i className="h-5 w-5" data-lucide="mail-check"></i>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                          Locked
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Step 5
                      </p>
<h3 className="mt-1 text-base font-semibold text-slate-950">
                        Send smarter outreach
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-500">
                        Apply with focus and ask for warm referrals.
                      </p>
<div className="absolute -right-4 top-8 z-10 hidden h-8 w-8 place-items-center rounded-full bg-white text-slate-400 ring-1 ring-slate-200 animate-pulse lg:grid">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</div>
</article>
<article className="relative rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-md">
<div className="mb-4 flex items-center justify-between">
<div className="grid h-10 w-10 place-items-center rounded-full bg-slate-100 text-slate-400">
<i className="h-5 w-5" data-lucide="messages-square"></i>
</div>
<span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
                          Locked
                        </span>
</div>
<p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                        Step 6
                      </p>
<h3 className="mt-1 text-base font-semibold text-slate-950">
                        Interview, negotiate, decide
                      </h3>
<p className="mt-2 text-sm leading-6 text-slate-500">
                        Practice clearly and choose your next move with
                        confidence.
                      </p>
</article>
</div>
</div>
</div>
</section>
<section className="grid gap-4">
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="mb-4 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">Quick wins</p>
<h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      3 tiny actions under 35 minutes
                    </h2>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-700">
<i className="h-5 w-5" data-lucide="calendar-days"></i>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
<div className="grid h-9 w-9 place-items-center rounded-full bg-teal-100 text-teal-700">
<i className="h-4 w-4" data-lucide="check"></i>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">
                        Rewrite your LinkedIn headline
                      </p>
<p className="text-sm text-slate-500">
                        Use: target role + GCC market + strongest proof.
                      </p>
</div>
<span className="hidden text-xs font-medium text-slate-500 sm:block">
                      8 min
                    </span>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
<div className="grid h-9 w-9 place-items-center rounded-full bg-cyan-100 text-cyan-700">
<i className="h-4 w-4" data-lucide="plus"></i>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">
                        Add five searchable keywords
                      </p>
<p className="text-sm text-slate-500">
                        Borrow language from real jobs you actually want.
                      </p>
</div>
<span className="hidden text-xs font-medium text-slate-500 sm:block">
                      10 min
                    </span>
</div>
<div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4">
<div className="grid h-9 w-9 place-items-center rounded-full bg-amber-100 text-amber-700">
<i className="h-4 w-4" data-lucide="bookmark"></i>
</div>
<div className="min-w-0 flex-1">
<p className="text-sm font-medium text-slate-950">
                        Save ten best-fit roles
                      </p>
<p className="text-sm text-slate-500">
                        Start with UAE, Saudi Arabia, Qatar, or Kuwait.
                      </p>
</div>
<span className="hidden text-xs font-medium text-slate-500 sm:block">
                      15 min
                    </span>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="mb-5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-slate-500">
                      Recruiter signal
                    </p>
<h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-950">
                      Low — but easy to lift
                    </h2>
</div>
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-rose-50 text-rose-600">
<i className="h-5 w-5" data-lucide="eye-off"></i>
</div>
</div>
<div className="rounded-2xl bg-slate-50 p-4">
<div className="mb-3 flex items-center justify-between text-sm">
<span className="font-medium text-slate-600">
                      Findability score
                    </span>
<span className="font-medium text-slate-950">31%</span>
</div>
<div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
<div className="h-full w-[31%] rounded-full bg-rose-500"></div>
</div>
</div>
<p className="mt-4 text-sm leading-6 text-slate-600">
                  Module 3 upgrades the words, proof, and signals recruiters use
                  to find you — so your profile stops hiding in plain sight.
                </p>
<button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
                  Preview my recruiter view
                  <i className="h-4 w-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</section>
</section>
</div>
</section>
</main>


    </>
  );
}
