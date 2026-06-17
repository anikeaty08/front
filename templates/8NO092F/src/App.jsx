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
      
lucide.createIcons();

/* select buttons */
document.querySelectorAll('.select-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const card=btn.closest('.pass-card');
    const selected=card.classList.toggle('pass-selected');
    btn.textContent=selected?'Selected':'Select';
    btn.classList.toggle('bg-indigo-600',!selected);
    btn.classList.toggle('bg-indigo-700',selected);
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
      

<section className="w-full md:w-1/2 p-6 overflow-y-auto space-y-8">

<article className="animate-fadeUp bg-gray-900/60 backdrop-blur rounded-2xl ring-1 ring-gray-800 p-6 space-y-6">

<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<h2 className="text-lg md:text-xl font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-indigo-400" data-lucide="bus"></i>Today’s Transport
      </h2>
<div className="flex items-center gap-6 text-sm">
<span className="flex items-center gap-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="clock"></i>
<strong className="font-medium">55 min</strong>
</span>
<span className="flex items-center gap-1">
<i className="w-4 h-4 text-indigo-400" data-lucide="wallet"></i>
<strong className="font-medium">¥450</strong>
</span>
</div>
</header>

<div className="flex flex-col md:flex-row md:items-stretch gap-6">

<div className="hidden md:flex flex-col items-center">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
<div className="flex-1 w-px bg-gradient-to-b from-indigo-400/70 to-indigo-400/0"></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
<div className="flex-1 w-px bg-gradient-to-b from-indigo-400/70 to-indigo-400/0"></div>
<div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
</div>

<div className="flex-1 space-y-4">

<details className="group rounded-xl ring-1 ring-gray-800 p-4 transition hover:ring-indigo-500" open="">
<summary className="flex items-center justify-between cursor-pointer select-none">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="train"></i>
<span className="font-medium">Shibuya ➜ Asakusa</span>
</div>
<time className="text-xs text-gray-400">09:10–09:45</time>
</summary>
<p className="mt-3 text-sm text-gray-400">Tokyo Metro Ginza Line • <span className="text-gray-300">35 min • ¥240</span></p>
</details>

<details className="group rounded-xl ring-1 ring-gray-800 p-4 transition hover:ring-indigo-500">
<summary className="flex items-center justify-between cursor-pointer select-none">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="bus"></i>
<span className="font-medium">Asakusa ➜ Skytree</span>
</div>
<time className="text-xs text-gray-400">10:00–10:20</time>
</summary>
<p className="mt-3 text-sm text-gray-400">Tobu Bus Route 06 • <span className="text-gray-300">20 min • ¥210</span></p>
</details>

<details className="group rounded-xl ring-1 ring-gray-800 p-4 transition hover:ring-indigo-500">
<summary className="flex items-center justify-between cursor-pointer select-none">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-indigo-400" data-lucide="footprints"></i>
<span className="font-medium">Skytree ➜ Hotel</span>
</div>
<time className="text-xs text-gray-400">10:25–10:35</time>
</summary>
<p className="mt-3 text-sm text-gray-400">Walk • <span className="text-gray-300">10 min</span></p>
</details>
</div>
</div>

<section className="space-y-3">
<h3 className="text-sm font-medium tracking-tight flex items-center gap-2">
<i className="w-4 h-4 text-indigo-400" data-lucide="ticket"></i>AI Recommended Passes
      </h3>

<div className="group relative">

<div className="flex gap-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar md:grid md:grid-cols-3">

<div className="pass-card snap-center md:snap-none shrink-0 md:shrink md:min-w-0 bg-gray-800/60 rounded-xl ring-1 ring-gray-800 p-4 flex flex-col gap-3 transition hover:ring-indigo-500">
<header className="flex items-center justify-between">
<span className="font-medium">Tokyo Subway 24-h</span>
<span className="text-xs text-gray-400">¥800</span>
</header>
<p className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>24 h
            </p>
<div className="flex gap-2 mt-auto">
<i className="w-4 h-4 text-indigo-400" data-lucide="train"></i>
<i className="w-4 h-4 text-indigo-400" data-lucide="subway"></i>
</div>
<button className="mt-4 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md px-3 py-1.5 transition select-btn">Select</button>
</div>

<div className="pass-card snap-center md:snap-none shrink-0 md:shrink md:min-w-0 bg-gray-800/60 rounded-xl ring-1 ring-gray-800 p-4 flex flex-col gap-3 transition hover:ring-indigo-500">
<header className="flex items-center justify-between">
<span className="font-medium">JR East 1-Day</span>
<span className="text-xs text-gray-400">¥1,520</span>
</header>
<p className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>1 day
            </p>
<div className="flex gap-2 mt-auto">
<i className="w-4 h-4 text-indigo-400" data-lucide="train"></i>
<i className="w-4 h-4 text-indigo-400" data-lucide="bus"></i>
</div>
<button className="mt-4 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md px-3 py-1.5 transition select-btn">Select</button>
</div>

<div className="pass-card snap-center md:snap-none shrink-0 md:shrink md:min-w-0 bg-gray-800/60 rounded-xl ring-1 ring-gray-800 p-4 flex flex-col gap-3 transition hover:ring-indigo-500">
<header className="flex items-center justify-between">
<span className="font-medium">ICOCA IC Card</span>
<span className="text-xs text-gray-400">¥2,000*</span>
</header>
<p className="text-xs text-gray-400 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>Recharge
            </p>
<div className="flex gap-2 mt-auto">
<i className="w-4 h-4 text-indigo-400" data-lucide="train"></i>
<i className="w-4 h-4 text-indigo-400" data-lucide="bus"></i>
<i className="w-4 h-4 text-indigo-400" data-lucide="tram"></i>
</div>
<button className="mt-4 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700 rounded-md px-3 py-1.5 transition select-btn">Select</button>
</div>
</div>
</div>
</section>

<footer className="md:sticky md:bottom-0 md:left-0 md:bg-gray-900/80 md:backdrop-blur px-6 py-4 -mx-6 mt-4 rounded-b-2xl flex items-center justify-between">
<p className="text-sm text-gray-400">Pass cost will be added to daily budget.</p>
<button className="bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold rounded-md px-4 py-2 transition">Confirm Transport Pass</button>
</footer>
</article>
</section>

<aside className="hidden md:block w-1/2 bg-gray-900 relative">
<div className="absolute inset-0 flex items-center justify-center text-gray-700">
<span className="text-sm">Map goes here</span>
</div>
</aside>



    </>
  );
}
