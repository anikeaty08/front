import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      /* Factory for tiny performant sparklines */
      const charts = {};
      const createSpark = ({ id, color, data }) => {
        const ctx = document.getElementById(id);
        charts[id] = new Chart(ctx, {
          type: 'line',
          data: { labels: data.map((_, i) => i + 1), datasets: [{ data, borderColor: color, borderWidth: 2, tension: 0.35, pointRadius: 0 }] },
          options: {
            maintainAspectRatio: false,
            animation: false,
            parsing: false,
            plugins: {
              legend: { display: false },
              tooltip: { enabled: false },
              decimation: { enabled: true, algorithm: 'lttb', samples: 75 }
            },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      };

      /* Initial placeholder data */
      const initialData = {
        'sg-total-chart':  { color:'#34d399', data:[1.2,1.8,1.9,2.4,2.1] },
        'putts-chart':     { color:'#facc15', data:[31,30.5,29.8,30.1,30.4] },
        'gir-chart':       { color:'#34d399', data:[52,55,57,59,58] },
        'trouble-chart':   { color:'#f87171', data:[18,17,16,15,14] },
        'variance-chart':  { color:'#60a5fa', data:[-0.8,-1,-1.2,-1.4,-1.3] },
        'tee-chart':       { color:'#10b981', data:[63,64,65,66,67] }
      };

      /* Build initial charts */
      Object.entries(initialData).forEach(([id, cfg]) => createSpark({ id, ...cfg }));

      /* Helper to update a sparkline with new live data */
      const updateSpark = (id, newData) => {
        const chart = charts[id];
        if (!chart) return;
        chart.data.labels = newData.map((_, i) => i + 1);
        chart.data.datasets[0].data = newData;
        chart.update('none');
      };

      /* Example: simulate fetching new data after clicking the demo button */
      document.getElementById('see-demo').addEventListener('click', () => {
        document.getElementById('see-demo').disabled = true;

        setTimeout(() => {
          const liveData = {
            'sg-total-chart':  [2.3,2.4,2.5,2.2,2.6,2.8,3],
            'putts-chart':     [30.2,30.1,29.9,29.5,29.4,29.2,29.3],
            'gir-chart':       [60,61,62,61,63,64,65],
            'trouble-chart':   [14.5,14,13.8,13.2,13.1,12.9,12.8],
            'variance-chart':  [-1.6,-1.7,-1.8,-1.9,-2.0,-2.1,-2.0],
            'tee-chart':       [67,68,69,70,71,71,72]
          };

          Object.entries(liveData).forEach(([id, data]) => updateSpark(id, data));
        }, 2000);
      });

      /* Expose updateSpark globally for future data hookups */
      window.updateSpark = updateSpark;
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
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
<button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium leading-5 text-white shadow transition hover:brightness-110 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400" id="track-round">
<i className="h-4 w-4" data-lucide="flag"></i>
        Track your next round
      </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-zinc-700/50 px-5 py-3 text-sm font-medium leading-5 text-zinc-200 shadow transition hover:border-zinc-600 focus:outline-none focus-visible:ring focus-visible:ring-emerald-400" id="see-demo">
<i className="h-4 w-4" data-lucide="play-circle"></i>
        See demo insights
      </button>
</div>
</section>

<main className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
<section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">

<article aria-labelledby="sg-total-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="sg-total-heading">Strokes Gained: Total</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="trending-up"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="sg-total-value">+2.1</p>
<p className="text-xs text-zinc-400" id="sg-total-sub">+0.6 vs last 10 rounds</p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="sg-total-chart"></canvas></div>
</article>
<article aria-labelledby="putts-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="putts-heading">Average Putts</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="circle-dot"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="putts-value">30.4</p>
<p className="text-xs text-zinc-400" id="putts-sub">▼ 0.8 putts per round</p>
<div className="mt-2 h-24-full"><canvas className="pointer-events-none h-full w-full" id="putts-chart"></canvas></div>
</article>
<article aria-labelledby="gir-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="gir-heading">Greens in Regulation</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="target"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="gir-value">58%</p>
<p className="text-xs text-zinc-400" id="gir-sub">▲ 3% vs season avg</p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="gir-chart"></canvas></div>
</article>
<article aria-labelledby="trouble-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="trouble-heading">Trouble Frequency</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="alert-triangle"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="trouble-value">14%</p>
<p className="text-xs text-zinc-400" id="trouble-sub">% of shots in bunkers / penalties</p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="trouble-chart"></canvas></div>
</article>
<article aria-labelledby="variance-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="variance-heading">Variance to Par</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="divide-square"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="variance-value">-1.3</p>
<p className="text-xs text-zinc-400" id="variance-sub">Avg scoring diff per round</p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="variance-chart"></canvas></div>
</article>
<article aria-labelledby="tee-heading" className="relative flex flex-col gap-3 rounded-2xl border border-zinc-800/50 bg-zinc-900 p-4 shadow-lg transition hover:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600 h-56 overflow-hidden" tabindex="0">
<header className="flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-zinc-50" id="tee-heading">Off-the-Tee Accuracy</h2>
<i className="h-5 w-5 text-emerald-500" data-lucide="crosshair"></i>
</header>
<p className="text-2xl font-semibold tracking-tight" id="tee-value">67%</p>
<p className="text-xs text-zinc-400" id="tee-sub">▲ 4% fairways hit</p>
<div className="mt-2 h-24 w-full"><canvas className="pointer-events-none h-full w-full" id="tee-chart"></canvas></div>
</article>
</section>
</main>



    </>
  );
}
