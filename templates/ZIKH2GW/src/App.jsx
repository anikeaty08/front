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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    function makeChart(id, data, color='#34d399') {
      new Chart(
        document.getElementById(id),
        {
          type: 'line',
          data: {
            labels: data.map((_, i) => i + 1),
            datasets: [{
              data,
              fill: false,
              tension: 0.4,
              borderWidth: 2,
              borderColor: color,
              pointRadius: 0
            }]
          },
          options: {
            maintainAspectRatio: false,
            scales: { x: { display: false }, y: { display: false } },
            plugins: { legend: { display: false }, tooltip: { enabled: false } }
          }
        }
      );
    }

    makeChart('sg-total-chart',    [1.2, 1.8, 1.9, 2.4, 2.1]);
    makeChart('putts-chart',       [31, 30.5, 29.8, 30.1, 30.4], '#facc15');
    makeChart('gir-chart',         [52, 55, 57, 59, 58]);
    makeChart('trouble-chart',     [18, 17, 16, 15, 14], '#f87171');
    makeChart('variance-chart',    [-0.8, -1.0, -1.2, -1.4, -1.3], '#60a5fa');
    makeChart('accuracy-chart',    [63, 64, 65, 66, 67], '#10b981');
  
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
      

<header className="sticky top-0 z-20 w-full backdrop-blur supports-[backdrop-filter]:bg-zinc-900/80">
<nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
<a className="flex items-center gap-2 font-semibold tracking-tight focus:outline-none focus-visible:ring focus-visible:ring-emerald-500" href="#">
<svg className="h-5 w-5 fill-emerald-500" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v18l7-5 7 5V3H5z"></path></svg>
<span className="sr-only">Home</span>
</a>
<div className="hidden gap-6 sm:flex">
<a className="text-sm font-medium leading-6 text-zinc-300 hover:text-zinc-50 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500" href="#">Why Data</a>
<a className="text-sm font-medium leading-6 text-zinc-300 hover:text-zinc-50 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500" href="#">Pricing</a>
<a className="text-sm font-medium leading-6 text-zinc-300 hover:text-zinc-50 focus:outline-none focus-visible:ring focus-visible:ring-emerald-500" href="#">Blog</a>
</div>
</nav>
<div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent px-6 lg:px-8"></div>
</header>

<section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 pt-20 text-center lg:px-8">
<h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
      Unlock <span className="text-emerald-500">Personalized Insights</span> to drop your handicap
    </h1>
<p className="mx-auto max-w-2xl text-base/7 text-zinc-400">
      Embrace a Feel vs Real mentality by turning raw data into a personal roadmap for improvement. Capture every swing, putt, penalty, and shot result—then let the numbers work for you.
    </p>
<div className="mx-auto flex flex-wrap items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium leading-5 text-white shadow transition hover:brightness-110 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400" href="#">
<i className="h-4 w-4" data-lucide="flag"></i>
        Track your next round
      </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/50 px-5 py-3 text-sm font-medium leading-5 text-zinc-200 shadow transition hover:border-zinc-600 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400" href="#">
<i className="h-4 w-4" data-lucide="play-circle"></i>
        See demo insights
      </a>
</div>
</section>

<main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
<section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

<article aria-labelledby="sg-total-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="sg-total-heading">Strokes Gained: Total</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="trending-up"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">+2.1</p>
<p className="text-xs text-zinc-400">
<span className="text-emerald-400">+0.6</span> vs last 10 rounds
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="sg-total-chart"></canvas></div>
</article>

<article aria-labelledby="putts-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="putts-heading">Average Putts</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="circle-dot"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">30.4</p>
<p className="text-xs text-zinc-400">
<span className="text-emerald-400">▼ 0.8</span> putts per round
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="putts-chart"></canvas></div>
</article>

<article aria-labelledby="gir-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="gir-heading">Greens in Regulation</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="target"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">58%</p>
<p className="text-xs text-zinc-400">
<span className="text-emerald-400">▲ 3%</span> vs season avg
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="gir-chart"></canvas></div>
</article>

<article aria-labelledby="trouble-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="trouble-heading">Trouble Frequency</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="alert-triangle"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">14%</p>
<p className="text-xs text-zinc-400">
          % of shots resulting in bunkers or penalties
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="trouble-chart"></canvas></div>
</article>

<article aria-labelledby="variance-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="variance-heading">Variance to Par</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="divide-square"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">-1.3</p>
<p className="text-xs text-zinc-400">
          Avg scoring diff per round
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="variance-chart"></canvas></div>
</article>

<article aria-labelledby="tee-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="tee-heading">Off-the-Tee Accuracy</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="crosshair"></i>
</header>
<p className="text-2xl font-semibold tracking-tight">67%</p>
<p className="text-xs text-zinc-400">
<span className="text-emerald-400">▲ 4%</span> fairways hit
        </p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="accuracy-chart"></canvas></div>
</article>
</section>
</main>



    </>
  );
}
