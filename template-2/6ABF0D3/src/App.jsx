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

    // Pause / play footage video
    function toggleVideo() {
      const vid = document.getElementById('battleVid');
      const icon = document.getElementById('pauseIcon');
      if (vid.paused) {
        vid.play();
        icon.setAttribute('name', 'pause');
      } else {
        vid.pause();
        icon.setAttribute('name', 'play');
      }
      lucide.createIcons();
    }

    // Reveal-on-scroll animation
    const revealables = document.querySelectorAll('section, header');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            e.target.style.opacity = 1;
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    revealables.forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(24px)';
      el.style.transitionDelay = `${idx * 120}ms`;
      io.observe(el);
    });

    // Chart.js setup
    const ctx = document.getElementById('winChart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        datasets: [
          {
            label: 'Average Win Rate',
            data: [45, 48, 52, 56, 59],
            borderColor: '#14b8a6',
            backgroundColor: 'rgba(20,184,166,0.1)',
            tension: 0.35,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: '#e5e7eb', usePointStyle: true } },
          tooltip: {
            backgroundColor: '#0f172a',
            borderColor: '#334155',
            borderWidth: 1,
          },
        },
        scales: {
          x: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } },
          y: {
            ticks: { color: '#94a3b8', callback: (v) => v + '%' },
            grid: { color: '#1e293b' },
          },
        },
      },
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
      

<svg className="fixed inset-0 w-full h-full -z-20 pointer-events-none" style={{opacity: `0.07`}}>
<defs>
<pattern height="60" id="grid" patternunits="userSpaceOnUse" width="60">
<path d="M60 0H0V60" fill="none" stroke="currentColor" strokeWidth="0.75"></path>
</pattern>
<animatetransform attributename="patternTransform" dur="30s" from="0,0" repeatcount="indefinite" to="60,60" type="translate" xlink:href="#grid"></animatetransform>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>

<header className="relative z-10">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
<div className="text-lg font-semibold tracking-tight">
<a className="hover:text-teal-400 transition-colors" href="#">GF</a>
</div>
<nav className="hidden space-x-8 md:flex">
<a className="hover:text-teal-400 transition-colors" href="#features">Features</a>
<a className="hover:text-teal-400 transition-colors" href="#footage">Footage</a>
<a className="hover:text-teal-400 transition-colors" href="#stats">Stats</a>
</nav>
<button className="group inline-flex items-center rounded-md bg-teal-600/10 px-4 py-2 text-sm font-medium text-teal-300 backdrop-blur transition hover:bg-teal-600/20">
        Join Beta
        <i className="ml-2 h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mx-auto h-px max-w-7xl bg-gray-800/60"></div>
</header>

<section className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 py-24 text-center">

<video autoPlay className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20" loop muted playsInline src="https://cdn.coverr.co/videos/coverr-aerial-shot-of-a-city-at-night-5891/1080p.mp4"></video>
<h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{lineHeight: `1.1`}}>
      Command the Collapse
    </h1>
<p className="max-w-xl text-gray-400">
      Gridfall is a dystopian tactics arena where every square can crumble beneath your squad.
      Outsmart rivals, adapt to terrain decay, and seize victory before the city gives way.
    </p>
<div className="flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-md bg-teal-600 px-6 py-3 font-medium text-white shadow hover:bg-teal-500 transition" href="#features">
        Learn More
        <i className="ml-2 h-4 w-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center justify-center rounded-md bg-white/5 px-6 py-3 font-medium text-gray-200 backdrop-blur hover:bg-white/10 transition" href="#footage">
        Watch Footage
      </a>
</div>
</section>

<div className="mx-auto h-px max-w-7xl bg-gray-800/60"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="features">
   h2 class="mb-12 text-center text-3xl font-semibold tracking-tight"{">"}
      Tactical Pillars
    
<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

<div className="group flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900/70 p-8 transition hover:border-teal-600 hover:shadow-lg">
<i className="mx-auto h-10 w-10 text-teal-400" data-lucide="swords" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold tracking-tight">Deep Strategy</h3>
<p className="text-gray-400">
          Chain abilities, exploit flanks, and master verticality to outwit opponents in ever-shrinking grids.
        </p>
</div>
<div className="group flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900/70 p-8 transition hover:border-teal-600 hover:shadow-lg">
<i className="mx-auto h-10 w-10 text-teal-400" data-lucide="layers" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold tracking-tight">Dynamic Terrain</h3>
<p className="text-gray-400">
          Floors collapse, walls shatter, and hazards emerge—turning the battlefield into a living weapon.
        </p>
</div>
<div className="group flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900/70 p-8 transition hover:border-teal-600 hover:shadow-lg">
<i className="mx-auto h-10 w-10 text-teal-400" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold tracking-tight">Multiplayer Sieges</h3>
<p className="text-gray-400">
          Face commanders worldwide in quick-fire skirmishes or week-long conquest leagues.
        </p>
</div>
</div>
</section>

<div className="mx-auto h-px max-w-7xl bg-gray-800/60"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="footage">
<h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">
      Battlefield Glimpse
    </h2>
<div className="relative overflow-hidden rounded-xl border border-gray-800">

<div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 opacity-0 transition hover:opacity-100">
<button className="flex items-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-medium text-gray-200 backdrop-blur hover:bg-white/20" onClick={(e) => { toggleVideo() }}>
<i className="h-5 w-5" data-lucide="pause" id="pauseIcon"></i>
          Pause Loop
        </button>
</div>
<video autoPlay className="w-full object-cover" id="battleVid" loop muted playsInline src="https://cdn.coverr.co/videos/coverr-aerial-shot-of-a-city-at-night-5891/1080p.mp4"></video>
</div>
</section>

<div className="mx-auto h-px max-w-7xl bg-gray-800/60"></div>

<section className="mx-auto max-w-7xl px-6 py-24" id="stats">
<h2 className="mb-12 text-center text-3xl font-semibold tracking-tight">
      Alpha Milestones
    </h2>
<div className="grid gap-12 lg:grid-cols-2">
<div className="space-y-8">
<div className="flex items-center gap-6">
<span className="text-4xl font-extrabold text-teal-400">42k+</span>
<p className="text-gray-400">Squad combos tested by players</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-extrabold text-teal-400">97%</span>
<p className="text-gray-400">Matches ended by terrain collapse</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-extrabold text-teal-400">15</span>
<p className="text-gray-400">Unique environmental hazards</p>
</div>
</div>

<div className="rounded-xl border border-gray-800 p-6">
<canvas id="winChart"></canvas>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-6 pb-16">
<div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
<p className="text-gray-500">© 2024 Gridfall Studios</p>
<div className="flex gap-4">
<a className="hover:text-teal-400 transition-colors" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
<a className="hover:text-teal-400 transition-colors" href="#"><i className="h-5 w-5" data-lucide="discord"></i></a>
<a className="hover:text-teal-400 transition-colors" href="#"><i className="h-5 w-5" data-lucide="mail"></i></a>
</div>
</div>
</footer>



    </>
  );
}
