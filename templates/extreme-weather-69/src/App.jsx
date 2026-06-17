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



      // Tabs
      const tabButtons = document.querySelectorAll('[data-tab-button]');
      const sections = document.querySelectorAll('section[data-tab]');
      function switchTab(name) {
        sections.forEach(s => s.classList.toggle('hidden', s.getAttribute('data-tab') !== name));
        tabButtons.forEach(b => {
          const active = b.getAttribute('data-tab-button') === name;
          b.classList.toggle('bg-slate-900/10', active);
          b.classList.toggle('text-slate-900', active);
          b.classList.toggle('text-slate-600', !active);
        });
      }
      tabButtons.forEach(b => b.addEventListener('click', () => switchTab(b.getAttribute('data-tab-button'))));
      switchTab('overview');

      // Counter
      function animateCounter(el, duration = 1600) {
        const target = parseFloat(el.dataset.target || '0');
        const start = 0;
        const startTs = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - startTs) / duration);
          const val = start + (target - start) * (1 - Math.pow(1 - p, 3));
          el.textContent = val.toFixed(3);
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }

      // Charts
      const fonts = "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial";
      Chart.defaults.color = '#334155';
      Chart.defaults.font.family = fonts;
      Chart.defaults.plugins.legend.display = false;
      Chart.defaults.animation.duration = 800;
      const gridColor = 'rgba(148,163,184,0.15)';

      const wildfireMini = new Chart(document.getElementById('wildfireChart'), {
        type: 'bar',
        data: {
          labels: ['2004','2007','2012','2015','2017','2018','2020','2021','2022','2023'],
          datasets: [{
            data: [8.0, 9.3, 9.2, 10.1, 10.0, 8.8, 10.1, 7.1, 7.6, 2.6],
            backgroundColor: 'rgba(244,63,94,0.6)',
            borderRadius: 6,
          }]
        },
        options: {
          scales: {
            y: { display: false, grid: { display:false } },
            x: { grid: { display:false }, ticks: { color: 'rgba(100,116,139,0.7)', maxRotation:0, autoSkip: true } }
          },
          plugins: { tooltip: { callbacks: { label: ctx => ctx.raw + 'M acres' } } }
        }
      });

      const costDecade = new Chart(document.getElementById('costDecadeChart'), {
        type: 'line',
        data: {
          labels: ['1980s','1990s','2000s','2010s','2020s'],
          datasets: [{
            data: [0.2, 0.5, 1.1, 2.1, 2.915],
            borderColor: 'rgba(16,185,129,0.9)',
            backgroundColor: 'rgba(16,185,129,0.25)',
            tension: 0.35,
            fill: true,
          }]
        },
        options: {
          scales: {
            y: { grid: { color: gridColor }, ticks: { callback: v => '$' + v + 'T' }},
            x: { grid: { color: gridColor } }
          },
          elements: { point: { radius: 2 } },
          plugins: { tooltip: { callbacks: { label: ctx => '$' + ctx.raw.toFixed(3) + 'T' } } }
        }
      });

      const stormMini = new Chart(document.getElementById('stormFreqChart'), {
        type: 'bar',
        data: {
          labels: ['1980s','1990s','2000s','2010s','2020s'],
          datasets: [{
            data: [4,5,7,13,18],
            backgroundColor: 'rgba(56,189,248,0.65)',
            borderRadius: 6
          }]
        },
        options: {
          scales: {
            y: { grid: { color: gridColor }, ticks: { stepSize: 5 } },
            x: { grid: { display:false } }
          },
          plugins: { tooltip: { callbacks: { label: c => c.raw + ' / yr (avg)' } } }
        }
      });

      const rainfallMini = new Chart(document.getElementById('rainfallDonut'), {
        type: 'doughnut',
        data: {
          labels: ['Since 1995','Before 1995'],
          datasets: [{
            data: [9,1],
            backgroundColor: ['rgba(245,158,11,0.8)','rgba(148,163,184,0.35)'],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '68%',
          plugins: {
            tooltip: { callbacks: { label: c => `${c.label}: ${c.raw}/10` } }
          }
        }
      });

      // Hazards tab charts
      const wildfireLarge = new Chart(document.getElementById('wildfireLarge'), {
        type: 'bar',
        data: {
          labels: ['2004','06','08','10','12','14','16','18','20','22','24'],
          datasets: [{
            data: [8.0, 9.0, 9.8, 7.1, 9.2, 8.6, 10.0, 8.8, 10.1, 7.6, 8.3],
            backgroundColor: 'rgba(244,63,94,0.7)',
            borderRadius: 8
          }]
        },
        options: {
          scales: {
            y: { grid: { color: gridColor }, ticks: { callback: v => v + 'M ac' } },
            x: { grid: { display:false } }
          },
          plugins: { tooltip: { callbacks: { label: ctx => ctx.raw + 'M acres burned' } } }
        }
      });

      const stormLarge = new Chart(document.getElementById('stormLarge'), {
        type: 'line',
        data: {
          labels: ['1980s','1990s','2000s','2010s','2020s'],
          datasets: [{
            data: [4,5,7,13,18],
            borderColor: 'rgba(56,189,248,0.9)',
            backgroundColor: 'rgba(56,189,248,0.25)',
            tension: 0.35,
            fill: true
          }]
        },
        options: {
          scales: {
            y: { grid: { color: gridColor } },
            x: { grid: { color: gridColor } }
          }
        }
      });

      const rainLarge = new Chart(document.getElementById('rainLarge'), {
        type: 'doughnut',
        data: {
          labels: ['Top 10 since 1995','Other'],
          datasets: [{
            data: [9,1],
            backgroundColor: ['rgba(245,158,11,0.85)','rgba(148,163,184,0.35)'],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '70%',
          plugins: { tooltip: { callbacks: { label: c => `${c.raw} of 10` } } }
        }
      });

      // Costs tab
      const costLarge = new Chart(document.getElementById('costLarge'), {
        type: 'bar',
        data: {
          labels: ['1980s','1990s','2000s','2010s','2020s'],
          datasets: [{
            data: [0.2, 0.3, 0.6, 1.0, 0.815], // sums to ~2.915T
            backgroundColor: 'rgba(16,185,129,0.75)',
            borderRadius: 10
          }]
        },
        options: {
          scales: {
            y: { grid: { color: gridColor }, ticks: { callback: v => '$' + v + 'T' } },
          x: { grid: { display:false } }
          },
          plugins: { tooltip: { callbacks: { label: ctx => '$' + ctx.raw + 'T' } } }
        }
      });

      // Share
      const shareBtn = document.getElementById('shareBtn');
      if (navigator.share && shareBtn) {
        shareBtn.classList.remove('hidden');
        shareBtn.addEventListener('click', async () => {
          try {
            await navigator.share({ title: document.title, text: 'Explore interactive climate impacts', url: location.href });
          } catch {}
        });
      }

      // Kickoff
      animateCounter(document.getElementById('costCounter'));
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    
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
      

<div className="fixed inset-0 -z-10 opacity-40" style={{backgroundImage: 'radial-gradient(60rem 30rem at 20% -10%, rgba(56,189,248,0.25), transparent 60%), radial-gradient(60rem 30rem at 80% 110%, rgba(99,102,241,0.25), transparent 60%)'}}></div>
<div className="fixed inset-0 -z-10 opacity-20" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
<div className="flex flex-wrap items-center gap-3 justify-between">
<div>
<h1 className="text-3xl md:text-5xl font-semibold tracking-tight">The Rising Tide of Extreme Weather</h1>
<p className="text-slate-600/80 text-sm md:text-base mt-2">United States • 1980–2024 • Source: NOAA NCEI Billion‑Dollar Disasters</p>
</div>
<div className="flex items-center gap-2">
<div className="inline-flex rounded-lg border border-slate-200 bg-white backdrop-blur px-1 py-1">
<button className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-900 bg-slate-900/10" data-tab-button="overview">Overview</button>
<button className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900" data-tab-button="hazards">Hazards</button>
<button className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900" data-tab-button="costs">Costs</button>
</div>
<button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 bg-white hover:bg-slate-50 transition" id="shareBtn">
<i className="w-4 h-4" data-lucide="share-2"></i><span className="text-sm font-medium">Share</span>
</button>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-6">

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">
<i className="w-5 h-5" data-lucide="flame"></i>
</span>
<h3 className="text-base font-semibold tracking-tight">Wildfires</h3>
</div>
<span className="text-rose-500/80 text-xs font-medium">↑ trend</span>
</div>
<p className="mt-2 text-sm text-slate-600/90">10 largest burn years all since 2004.</p>
<div className="mt-3 h-24">
<div className="h-full"><canvas id="wildfireChart"></canvas></div>
</div>
<div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-rose-500/10 blur-2xl"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30">
<i className="w-5 h-5" data-lucide="dollar-sign"></i>
</span>
<h3 className="text-base font-semibold tracking-tight">Total Disaster Costs</h3>
</div>
<button className="text-xs text-slate-600/80 hover:text-slate-900" title="Cumulative, inflation-adjusted">i</button>
</div>
<div className="mt-2">
<div className="text-3xl md:text-4xl font-semibold tracking-tight">
<span data-target="2.915" id="costCounter">0.000</span> <span className="text-slate-600/80 text-xl align-super">Trillion</span>
</div>
<p className="text-sm text-slate-600/90 mt-1">1980–2024</p>
</div>
<div className="mt-3 h-24">
<div className="h-full"><canvas id="costDecadeChart"></canvas></div>
</div>
<div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400 ring-1 ring-sky-500/30">
<i className="w-5 h-5" data-lucide="cloud-lightning"></i>
</span>
<h3 className="text-base font-semibold tracking-tight">Storms</h3>
</div>
<span className="text-sky-600/80 text-xs font-medium">1980s → 2020s</span>
</div>
<p className="mt-2 text-sm text-slate-600/90">Billion‑dollar disasters per year increased from 2–6 to 10–28.</p>
<div className="mt-3 h-24">
<div className="h-full"><canvas id="stormFreqChart"></canvas></div>
</div>
<div className="absolute -right-12 -top-10 h-36 w-36 rounded-full bg-sky-500/10 blur-2xl"></div>
</div>
<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white backdrop-blur p-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/30">
<i className="w-5 h-5" data-lucide="cloud-rain"></i>
</span>
<h3 className="text-base font-semibold tracking-tight">Heavy Rainfall</h3>
</div>
<span className="text-amber-600/80 text-xs font-medium">since 1995</span>
</div>
<p className="mt-2 text-sm text-slate-600/90">9 of the top 10 extreme precipitation years occurred since 1995.</p>
<div className="mt-3 h-24">
<div className="h-full"><canvas id="rainfallDonut"></canvas></div>
</div>
<div className="absolute -left-12 -bottom-10 h-36 w-36 rounded-full bg-amber-500/10 blur-2xl"></div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-4" data-tab="overview">
<div className="lg:col-span-2 relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-cyan-600" data-lucide="waves"></i>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">Flooding</h2>
</div>
<p className="mt-2 text-slate-600/90 text-sm md:text-base">Large floods are becoming more frequent in the Northeast, Pacific Northwest, and Great Plains.</p>
<div className="mt-4 flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 ring-1 ring-cyan-500/30 text-sm font-medium hover:bg-cyan-500/15 transition">Northeast</button>
<button className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 ring-1 ring-cyan-500/30 text-sm font-medium hover:bg-cyan-500/15 transition">Pacific Northwest</button>
<button className="px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-700 ring-1 ring-cyan-500/30 text-sm font-medium hover:bg-cyan-500/15 transition">Great Plains</button>
</div>
<div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="text-sm text-slate-600/80">Annual flood days</div>
<div className="text-2xl font-semibold tracking-tight mt-1">+38%</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="text-sm text-slate-600/80">100‑yr floods</div>
<div className="text-2xl font-semibold tracking-tight mt-1">2–3×</div>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="text-sm text-slate-600/80">Exposure</div>
<div className="text-2xl font-semibold tracking-tight mt-1">↑ coastal + inland</div>
</div>
</div>
<div className="absolute -right-28 -bottom-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"></div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-fuchsia-600" data-lucide="trending-up"></i>
<h2 className="text-xl md:text-2xl font-semibold tracking-tight">What’s driving the increase?</h2>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600/90">
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-fuchsia-600" data-lucide="thermometer-sun"></i><span>Warmer air holds more moisture, intensifying rainfall.</span></li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-fuchsia-600" data-lucide="wind"></i><span>Shifting jet streams and stalled systems amplify storms.</span></li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-fuchsia-600" data-lucide="trees"></i><span>Expanded wildland‑urban interface increases exposure to wildfire.</span></li>
<li className="flex items-start gap-2"><i className="w-4 h-4 mt-0.5 text-fuchsia-600" data-lucide="home"></i><span>More assets in risk‑prone areas raise losses.</span></li>
</ul>
<div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
</div>
</section>

<section className="hidden grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4" data-tab="hazards">
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-rose-600" data-lucide="flame"></i>
<h3 className="text-lg font-semibold tracking-tight">Wildfire burn area</h3>
</div>
<p className="text-sm text-slate-600/90 mt-1">Million acres burned annually (approx.).</p>
<div className="mt-4 h-48"><div className="h-full"><canvas id="wildfireLarge"></canvas></div></div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-600" data-lucide="cloud-lightning"></i>
<h3 className="text-lg font-semibold tracking-tight">Billion‑dollar events per year</h3>
</div>
<p className="text-sm text-slate-600/90 mt-1">Average by decade.</p>
<div className="mt-4 h-48"><div className="h-full"><canvas id="stormLarge"></canvas></div></div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-600" data-lucide="cloud-rain"></i>
<h3 className="text-lg font-semibold tracking-tight">Extreme precipitation</h3>
</div>
<p className="text-sm text-slate-600/90 mt-1">Share of top 10 years since 1995.</p>
<div className="mt-4 h-48"><div className="h-full"><canvas id="rainLarge"></canvas></div></div>
</div>
</section>

<section className="hidden grid grid-cols-1 lg:grid-cols-3 gap-4" data-tab="costs">
<div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="dollar-sign"></i>
<h3 className="text-lg font-semibold tracking-tight">Cumulative costs by decade</h3>
</div>
<p className="text-sm text-slate-600/90 mt-1">Inflation‑adjusted, trillions USD.</p>
<div className="mt-4 h-56"><div className="h-full"><canvas id="costLarge"></canvas></div></div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<h3 className="text-lg font-semibold tracking-tight">Fast facts</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-600/90">
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="zap"></i><span>Annual average losses have surged in the last two decades.</span></li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="shield-alert"></i><span>Preparedness and resilient infrastructure reduce impacts.</span></li>
<li className="flex gap-2"><i className="w-4 h-4 text-emerald-600 mt-0.5" data-lucide="clock"></i><span>Event duration and stalling contribute to higher totals.</span></li>
</ul>
</div>
</section>
<footer className="pt-6 text-xs text-slate-500/80">
        Notes: Values are illustrative but follow the relationships in the source graphic. For precise figures, consult NOAA NCEI’s Billion‑Dollar Disasters dataset.
      </footer>
</main>


    </>
  );
}
