import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  lucide.createIcons();

  const ctx = document.getElementById('viewsChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [
          {
            label: 'Live viewers',
            data: [320,280,340,370,390,410],
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99,102,241,0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 5
          },
          {
            label: 'On-demand replays',
            data: [450,420,480,500,530,560],
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,0.1)',
            tension: 0.4,
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 5
          }
        ]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: 'bottom', labels: { boxWidth: 12 } } },
        scales: { y: { grid: { color: '#e5e7eb' }, ticks: { stepSize: 100 } }, x: { grid: { display: false } } }
      }
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="absolute left-4 top-4 z-50 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm focus:not-sr-only sr-only" href="#main">Skip to main content</a>

<header className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093588401-a6583f5fb4c9?auto=format&amp;w=1600&amp;q=80')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
<div className="relative max-w-6xl mx-auto px-6 pt-28 pb-36 flex flex-col items-center text-center text-white">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">Webinar Hub</h1>
<p className="mt-6 max-w-2xl text-lg text-indigo-100">Join our engineers live or explore the on-demand library anytime.</p>
<button aria-label="Browse all sessions" className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 rounded-md backdrop-blur transition-all duration-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
<i className="w-5 h-5" data-lucide="play-circle"></i><span className="font-medium">Browse All Sessions</span>
</button>
</div>
</header>

<section className="max-w-6xl mx-auto px-6 -mt-16" id="main">
<form className="bg-white/80 backdrop-blur rounded-2xl ring-1 ring-gray-200 shadow-xl px-6 py-6 flex flex-col sm:flex-row gap-4">

<label className="relative flex-1">
<span className="sr-only">Search webinars</span>
<input aria-label="Search webinars" className="peer w-full rounded-md bg-gray-50 border border-gray-200 py-3 pl-11 pr-4 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 placeholder-gray-400 transition shadow-sm" placeholder="Search webinars…" type="search"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none peer-focus:text-indigo-500" data-lucide="search"></i>
</label>

<label className="relative">
<span className="sr-only">Category</span>
<select aria-label="Filter by category" className="appearance-none bg-gray-50 border border-gray-200 pr-10 pl-4 py-3 rounded-md text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition shadow-sm">
<option value="">All categories</option>
<option>Email Security</option>
<option>Automation</option>
<option>AI</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</label>

<button aria-label="Clear filters" className="sm:self-stretch flex items-center justify-center gap-2 px-5 py-3 bg-gray-100 hover:bg-gray-200 rounded-md text-sm font-medium transition shadow-sm" type="reset">
<i className="w-4 h-4" data-lucide="x-circle"></i>Clear
    </button>
</form>
</section>

<section className="max-w-6xl mx-auto px-6 mt-24">
<div className="flex items-baseline justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight">Live Webinars</h2>
<p className="text-sm text-indigo-600 font-medium flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
</span>
      Happening soon
    </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 text-xs rounded font-medium">Live</span>
<p className="text-xs uppercase tracking-wider text-gray-500">Today · 4 PM CET</p>
</div>
<h3 className="text-lg font-medium">End-to-End Encryption 101</h3>
<p className="mt-3 text-sm text-gray-600 flex-grow">A fast-paced demo with live key rotation and deep Q&amp;A.</p>
<button aria-label="Join End-to-End Encryption 101" className="mt-6 w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-md transition flex items-center justify-center gap-1 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400">
<i className="w-4 h-4" data-lucide="video"></i>Join Now
        </button>
</div>
</article>

<article className="group overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 delay-75">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 text-xs rounded font-medium">Live</span>
<p className="text-xs uppercase tracking-wider text-gray-500">Tomorrow · 11 AM CET</p>
</div>
<h3 className="text-lg font-medium">Zero-Trust Mail Gateways</h3>
<p className="mt-3 text-sm text-gray-600 flex-grow">Architecting mail flow for breach containment and visibility.</p>
<button aria-label="Reserve seat for Zero-Trust Mail Gateways" className="mt-6 w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-md transition flex items-center justify-center gap-1">
<i className="w-4 h-4" data-lucide="video"></i>Reserve Seat
        </button>
</div>
</article>

<article className="group overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1 delay-100">
<div className="p-6 flex flex-col h-full">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 bg-rose-500/10 text-rose-600 text-xs rounded font-medium">Live</span>
<p className="text-xs uppercase tracking-wider text-gray-500">Friday · 2 PM CET</p>
</div>
<h3 className="text-lg font-medium">AI-Driven Phishing Detection</h3>
<p className="mt-3 text-sm text-gray-600 flex-grow">Behind the scenes of our transformer model and real-world catch-rates.</p>
<button aria-label="Join waitlist for AI-Driven Phishing Detection" className="mt-6 w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-md transition flex items-center justify-center gap-1">
<i className="w-4 h-4" data-lucide="video"></i>Join Waitlist
        </button>
</div>
</article>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-24">
<div className="flex items-baseline justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight">On-Demand Library</h2>
<a className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition flex items-center gap-1" href="#">
      View all<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 group">
<img alt="Securing SMTP Relays at Scale" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1521790797524-b2497295b8e9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium">Securing SMTP Relays at Scale</h3>
<p className="text-sm text-gray-600">45 min · Intermediate</p>
<button aria-label="Watch Securing SMTP Relays at Scale" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="play"></i>Watch Recording
        </button>
</div>
</article>

<article className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 group">
<img alt="Migrating from SPF/DKIM to BIMI" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1607746882042-944635dfe79e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium">Migrating from SPF/DKIM to BIMI</h3>
<p className="text-sm text-gray-600">30 min · Beginner</p>
<button aria-label="Watch Migrating from SPF/DKIM to BIMI" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="play"></i>Watch Recording
        </button>
</div>
</article>

<article className="relative overflow-hidden rounded-xl bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 group">
<img alt="Parsing Mail Headers with Python" className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-3">
<h3 className="text-lg font-medium">Parsing Mail Headers with Python</h3>
<p className="text-sm text-gray-600">60 min · Advanced</p>
<button aria-label="Watch Parsing Mail Headers with Python" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
<i className="w-4 h-4" data-lucide="play"></i>Watch Recording
        </button>
</div>
</article>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mt-24 pb-32">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Viewer Insights</h2>
<p className="text-sm text-gray-600 mb-4">Average live attendance vs. on-demand replays (last 6 months).</p>
<div className="relative rounded-xl bg-white ring-1 ring-gray-200 shadow-sm p-6">
<div>
<canvas aria-label="Webinar attendance chart" height="100" id="viewsChart" role="img"></canvas>
</div>
</div>
</section>

<footer className="border-t border-gray-200 mt-20 py-12 text-center text-sm text-gray-500">
  © <span id="year"></span> Company. All rights reserved.
</footer>



    </>
  );
}
