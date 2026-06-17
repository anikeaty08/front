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



function vote(btn, dir) {
  const wrapper = btn.parentElement;
  const countEl = wrapper.querySelector('.vote-count');
  let raw = countEl.textContent.replace('-', '').replace(',', '');
  let mult = 1;
  if (raw.includes('k')) { mult = 1000; raw = raw.replace('k', ''); }
  let val = parseFloat(raw) * mult;

  if (dir === -1) {
    val += 1;
    countEl.classList.add('text-red-400');
    btn.classList.add('text-red-400', 'bg-red-950/60');
  } else {
    // Upvoting on Dreadit is punished
    val += 100;
    btn.title = "Your kindness has been reported.";
    btn.classList.add('text-zinc-700');
  }

  let display;
  if (val >= 1000) display = '-' + (val / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
  else display = '-' + val.toLocaleString();
  countEl.textContent = display;
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
      

<header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0a0a0c]/90 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4">
<a className="flex items-center gap-2.5" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-b from-red-600 to-red-800 shadow-lg shadow-red-900/40">
<iconify-icon className="text-white" icon="solar:fire-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-100">dreadit</span>
</a>
<div className="relative hidden flex-1 max-w-md sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-900/60 py-2 pl-9 pr-3 text-sm text-zinc-300 placeholder-zinc-600 outline-none transition focus:border-red-800/60 focus:ring-1 focus:ring-red-900/40" placeholder="Search for your next regret..." type="text"/>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="hidden items-center gap-1.5 rounded-lg border border-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-400 transition hover:border-zinc-700 hover:text-zinc-200 md:flex">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
        Confess
      </button>
<button className="relative rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-zinc-300">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
</button>
<button className="flex items-center gap-2 rounded-lg border border-zinc-800 py-1 pl-1 pr-2.5 transition hover:border-zinc-700">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-purple-700 to-red-800 text-xs font-semibold text-white">D</div>
<span className="hidden text-xs font-medium text-zinc-400 sm:block">u/doom_lord</span>
</button>
</div>
</div>
</header>
<div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">

<aside className="hidden w-56 shrink-0 lg:block">
<nav className="space-y-0.5">
<a className="flex items-center gap-3 rounded-lg bg-zinc-900 px-3 py-2 text-sm font-medium text-zinc-100" href="#">
<iconify-icon className="text-red-500" icon="solar:fire-linear" width="18"></iconify-icon> Cursed
      </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-zinc-900/60 hover:text-zinc-300" href="#">
<iconify-icon icon="solar:graph-down-linear" width="18"></iconify-icon> Plummeting
      </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-zinc-900/60 hover:text-zinc-300" href="#">
<iconify-icon icon="solar:ghost-linear" width="18"></iconify-icon> Haunted
      </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-500 transition hover:bg-zinc-900/60 hover:text-zinc-300" href="#">
<iconify-icon icon="solar:black-hole-linear" width="18"></iconify-icon> The Void
      </a>
</nav>
<div className="mt-6 border-t border-zinc-800/80 pt-5">
<p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">Your Covens</p>
<div className="space-y-0.5">
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900/60 hover:text-zinc-200" href="#">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-950 text-xs">😈</span> d/EvilPlans
        </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900/60 hover:text-zinc-200" href="#">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-950 text-xs">🕳️</span> d/MildlyMenacing
        </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900/60 hover:text-zinc-200" href="#">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-950 text-xs">🔥</span> d/LairDesign
        </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900/60 hover:text-zinc-200" href="#">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-950 text-xs">🧪</span> d/QuestionableScience
        </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-zinc-900/60 hover:text-zinc-200" href="#">
<span className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-950 text-xs">🐈</span> d/CatsPlottingMurder
        </a>
</div>
</div>
</aside>

<main className="min-w-0 flex-1">

<div className="mb-4 flex items-center gap-2 overflow-x-auto pb-1">
<button className="flex shrink-0 items-center gap-1.5 rounded-full bg-red-950/60 border border-red-900/50 px-3.5 py-1.5 text-xs font-medium text-red-400">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon> Most Cursed
      </button>
<button className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-800 px-3.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:text-zinc-300">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Freshly Damned
      </button>
<button className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-800 px-3.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:text-zinc-300">
<iconify-icon icon="solar:dislike-linear" width="14"></iconify-icon> Most Despised
      </button>
<button className="flex shrink-0 items-center gap-1.5 rounded-full border border-zinc-800 px-3.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:text-zinc-300">
<iconify-icon icon="solar:moon-linear" width="14"></iconify-icon> 3AM Energy
      </button>
</div>

<div className="mb-4 flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-3">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-700 to-red-800 text-xs font-semibold text-white">D</div>
<input className="w-full rounded-lg border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-sm placeholder-zinc-600 outline-none transition focus:border-red-900/60" placeholder="Share something you'll regret forever..." type="text"/>
</div>
<div className="space-y-3" id="feed">

<article className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition hover:border-zinc-700/80">
<div className="flex gap-3 p-4">
<div className="flex flex-col items-center gap-1">
<button className="vote-down rounded-md p-1 text-zinc-500 transition hover:bg-red-950/60 hover:text-red-400" onclick="vote(this, -1)">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<span className="vote-count text-sm font-semibold text-red-400">-66.6k</span>
<button className="vote-up rounded-md p-1 text-zinc-600 transition hover:bg-zinc-800 hover:text-zinc-400" onclick="vote(this, 1)" title="Upvoting is frowned upon">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
<div className="min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
<span className="font-medium text-red-400">d/EvilPlans</span>
<span>•</span>
<span>Whispered by u/dr_calamity</span>
<span>•</span>
<span>6 cursed hours ago</span>
<span className="rounded-full bg-red-950/60 border border-red-900/40 px-2 py-0.5 font-medium text-red-400">Forbidden</span>
</div>
<h2 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-100">I replaced every USB port in my office so they only work on the third try. AMA</h2>
<p className="mt-1.5 line-clamp-2 text-sm text-zinc-500">It took 4 months of careful engineering. My coworkers have started questioning the laws of physics. One of them cried yesterday. The plan is working flawlessly...</p>
<div className="mt-3 flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:chat-round-line-linear" width="15"></iconify-icon> 6,660 curses
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:square-share-line-linear" width="15"></iconify-icon> Spread
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:bookmark-linear" width="15"></iconify-icon> Hoard
              </button>
</div>
</div>
</div>
</article>

<article className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition hover:border-zinc-700/80">
<div className="flex gap-3 p-4">
<div className="flex flex-col items-center gap-1">
<button className="vote-down rounded-md p-1 text-zinc-500 transition hover:bg-red-950/60 hover:text-red-400" onclick="vote(this, -1)">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<span className="vote-count text-sm font-semibold text-red-400">-13k</span>
<button className="vote-up rounded-md p-1 text-zinc-600 transition hover:bg-zinc-800 hover:text-zinc-400" onclick="vote(this, 1)" title="Upvoting is frowned upon">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
<div className="min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
<span className="font-medium text-purple-400">d/MildlyMenacing</span>
<span>•</span>
<span>Whispered by u/the_unsubscriber</span>
<span>•</span>
<span>13 cursed hours ago</span>
</div>
<h2 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-100">I set all my group chat friends' autocorrect to change "lol" into "I acknowledge your humor"</h2>
<div className="mt-3 overflow-hidden rounded-lg border border-zinc-800">
<div className="flex h-44 items-center justify-center bg-gradient-to-br from-zinc-900 via-purple-950/40 to-zinc-900 sm:h-56">
<div className="text-center">
<iconify-icon className="text-purple-500/60" icon="solar:chat-square-like-linear" width="40"></iconify-icon>
<p className="mt-2 text-xs text-zinc-600">[ Screenshot redacted for the safety of mankind ]</p>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:chat-round-line-linear" width="15"></iconify-icon> 2,134 curses
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:square-share-line-linear" width="15"></iconify-icon> Spread
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:bookmark-linear" width="15"></iconify-icon> Hoard
              </button>
</div>
</div>
</div>
</article>

<article className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition hover:border-zinc-700/80">
<div className="flex gap-3 p-4">
<div className="flex flex-col items-center gap-1">
<button className="vote-down rounded-md p-1 text-zinc-500 transition hover:bg-red-950/60 hover:text-red-400" onclick="vote(this, -1)">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<span className="vote-count text-sm font-semibold text-red-400">-9,021</span>
<button className="vote-up rounded-md p-1 text-zinc-600 transition hover:bg-zinc-800 hover:text-zinc-400" onclick="vote(this, 1)" title="Upvoting is frowned upon">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
<div className="min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
<span className="font-medium text-amber-400">d/LairDesign</span>
<span>•</span>
<span>Whispered by u/volcano_realtor</span>
<span>•</span>
<span>1 cursed day ago</span>
<span className="rounded-full bg-amber-950/60 border border-amber-900/40 px-2 py-0.5 font-medium text-amber-400">Help Wanted</span>
</div>
<h2 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-100">Is a shark moat tax deductible if I classify the sharks as "security personnel"?</h2>
<p className="mt-1.5 line-clamp-2 text-sm text-zinc-500">My accountant fled the country before answering. The sharks are unionizing. I'm in over my head (the moat is also too deep). Any other lair owners dealt with this?</p>
<div className="mt-3 flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:chat-round-line-linear" width="15"></iconify-icon> 891 curses
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:square-share-line-linear" width="15"></iconify-icon> Spread
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:bookmark-linear" width="15"></iconify-icon> Hoard
              </button>
</div>
</div>
</div>
</article>

<article className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 transition hover:border-zinc-700/80">
<div className="flex gap-3 p-4">
<div className="flex flex-col items-center gap-1">
<button className="vote-down rounded-md p-1 text-zinc-500 transition hover:bg-red-950/60 hover:text-red-400" onclick="vote(this, -1)">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<span className="vote-count text-sm font-semibold text-red-400">-4,404</span>
<button className="vote-up rounded-md p-1 text-zinc-600 transition hover:bg-zinc-800 hover:text-zinc-400" onclick="vote(this, 1)" title="Upvoting is frowned upon">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>
</div>
<div className="min-w-0 flex-1">
<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-500">
<span className="font-medium text-sky-400">d/CatsPlottingMurder</span>
<span>•</span>
<span>Whispered by u/whiskers_overlord</span>
<span>•</span>
<span>2 cursed days ago</span>
</div>
<h2 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-100">My cat knocked my phone off the table at 99% download. Asserting dominance or declaring war?</h2>
<div className="mt-3 overflow-hidden rounded-lg border border-zinc-800">
<div className="flex h-44 items-center justify-center bg-gradient-to-br from-zinc-900 via-sky-950/30 to-zinc-900 sm:h-56">
<div className="text-center">
<iconify-icon className="text-sky-500/60" icon="solar:cat-linear" width="40"></iconify-icon>
<p className="mt-2 text-xs text-zinc-600">[ The perpetrator refused to be photographed ]</p>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-1.5">
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:chat-round-line-linear" width="15"></iconify-icon> 1,312 curses
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:square-share-line-linear" width="15"></iconify-icon> Spread
              </button>
<button className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-zinc-500 transition hover:bg-zinc-800/60 hover:text-zinc-300">
<iconify-icon icon="solar:bookmark-linear" width="15"></iconify-icon> Hoard
              </button>
</div>
</div>
</div>
</article>
</div>
<div className="mt-6 flex justify-center">
<button className="rounded-lg border border-zinc-800 px-5 py-2.5 text-xs font-medium text-zinc-500 transition hover:border-red-900/50 hover:text-red-400">
        Descend deeper into the feed
      </button>
</div>
</main>

<aside className="hidden w-72 shrink-0 xl:block">
<div className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight text-zinc-200">Trending in the Abyss</h3>
<iconify-icon className="text-red-500" icon="solar:graph-down-linear" width="16"></iconify-icon>
</div>
<div className="mt-3 space-y-3">
<a className="group block" href="#">
<p className="text-xs text-zinc-600">#1 in Petty Vengeance</p>
<p className="text-sm font-medium text-zinc-300 group-hover:text-red-400 transition">"Reply All" used as a weapon</p>
</a>
<a className="group block" href="#">
<p className="text-xs text-zinc-600">#2 in Forbidden Knowledge</p>
<p className="text-sm font-medium text-zinc-300 group-hover:text-red-400 transition">Printer that works on the first try discovered, deemed unholy</p>
</a>
<a className="group block" href="#">
<p className="text-xs text-zinc-600">#3 in Chaos</p>
<p className="text-sm font-medium text-zinc-300 group-hover:text-red-400 transition">Man alphabetizes roommate's spice rack incorrectly on purpose</p>
</a>
</div>
</div>
<div className="mt-4 rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4">
<h3 className="text-sm font-semibold tracking-tight text-zinc-200">Covens to Infiltrate</h3>
<div className="mt-3 space-y-3">
<div className="flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-950 text-sm">🦹</span>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium text-zinc-300">d/MonologueCritique</p>
<p className="text-xs text-zinc-600">66k lost souls</p>
</div>
<button className="rounded-lg bg-red-950/70 border border-red-900/50 px-3 py-1 text-xs font-medium text-red-400 transition hover:bg-red-900/50">Join</button>
</div>
<div className="flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-950 text-sm">🌩️</span>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium text-zinc-300">d/OminousWeather</p>
<p className="text-xs text-zinc-600">42k lost souls</p>
</div>
<button className="rounded-lg bg-red-950/70 border border-red-900/50 px-3 py-1 text-xs font-medium text-red-400 transition hover:bg-red-900/50">Join</button>
</div>
<div className="flex items-center gap-3">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950 text-sm">🍍</span>
<div className="min-w-0 flex-1">
<p className="truncate text-sm font-medium text-zinc-300">d/PineapplePizzaForced</p>
<p className="text-xs text-zinc-600">13k lost souls</p>
</div>
<button className="rounded-lg bg-red-950/70 border border-red-900/50 px-3 py-1 text-xs font-medium text-red-400 transition hover:bg-red-900/50">Join</button>
</div>
</div>
</div>
<div className="mt-4 rounded-xl border border-red-900/30 bg-gradient-to-b from-red-950/30 to-zinc-900/40 p-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-400" icon="solar:crown-linear" width="18"></iconify-icon>
<h3 className="text-sm font-semibold tracking-tight text-zinc-200">Dreadit Infamy</h3>
</div>
<p className="mt-2 text-xs leading-relaxed text-zinc-500">You've collected <span className="font-semibold text-red-400">-666 infamy</span> this week. Keep being awful — the void notices.</p>
<div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
<div className="h-full w-2/3 rounded-full bg-gradient-to-r from-red-700 to-red-500"></div>
</div>
<p className="mt-1.5 text-xs text-zinc-600">66% toward "Certified Menace"</p>
</div>
<p className="mt-4 px-2 text-xs leading-relaxed text-zinc-700">Dreadit Inc. © Eternity. Your data is harvested, judged, and gossiped about. Terms of Suffering apply.</p>
</aside>
</div>


    </>
  );
}
