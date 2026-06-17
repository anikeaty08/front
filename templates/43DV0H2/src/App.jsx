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
      
    // lucide icons
    lucide.createIcons();

    // Current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Chart.js demo
    const ctx = document.getElementById('occupancyChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 am', '8 am', '10 am', '12 pm', '2 pm', '4 pm', '6 pm', '8 pm'],
        datasets: [{
          label: 'Occupancy (%)',
          data: [15, 40, 68, 80, 76, 65, 42, 25],
          backgroundColor: 'rgba(99,102,241,.1)',
          borderColor: 'rgba(99,102,241,1)',
          borderWidth: 2,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { labels: { color: '#d1d5db', boxWidth: 12, boxHeight: 6 } } },
        scales: {
          x: { ticks: { color: '#9ca3af' }, grid: { color: '#27272a' } },
          y: { ticks: { color: '#9ca3af' }, grid: { color: '#27272a' }, suggestedMax: 100 }
        }
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
      

<header className="sticky top-0 z-40 bg-gray-900/75 backdrop-blur border-b border-gray-800">
<div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
<span className="text-lg tracking-tight font-semibold text-white">PV</span>
<nav className="hidden md:flex space-x-8 text-sm">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#stats">Insights</a>
<a className="hover:text-white transition" href="#join">Join</a>
</nav>
<a className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-sm font-medium px-4 py-2 rounded-md transition outline-none focus-visible:ring-2 ring-indigo-400" href="#join">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="log-in"></i> Get started
      </a>
</div>
</header>

<section className="relative overflow-hidden">
<img alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-32 lg:py-40">
<div className="max-w-3xl text-center mx-auto">
<h1 className="animate-fade text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">
          Find Your Parking Spot Before You Arrive
        </h1>
<p className="animate-fade delay-1 text-lg sm:text-xl text-gray-300 mb-10">
          Real-time AI-powered cameras scan lots, update availability, and guide you straight to an open space—saving time, fuel, and nerves.
        </p>
<div className="flex justify-center gap-4 animate-fade delay-2">
<a className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3 rounded-md text-sm font-medium transition outline-none focus-visible:ring-2 ring-indigo-400" href="#join">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="user-plus"></i> Create account
          </a>
<a className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-md text-sm font-medium transition outline-none focus-visible:ring-2 ring-gray-600" href="#map">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="map"></i> Live demo
          </a>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 border-y border-gray-800">
<span className="text-center text-gray-400 text-sm">LotOne</span>
<span className="text-center text-gray-400 text-sm">DriveAI</span>
<span className="text-center text-gray-400 text-sm">CityLab</span>
<span className="text-center text-gray-400 text-sm">ParkHub</span>
<span className="text-center text-gray-400 text-sm">InfraSight</span>
<span className="text-center text-gray-400 text-sm">SmartRoads</span>
</div>

<section className="mx-auto max-w-7xl px-6 py-24 space-y-20" id="features">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 animate-slide">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">AI Camera Network</h2>
<p className="text-gray-300">
          Mounted vision sensors analyze license-free silhouettes, instantly marking spots as occupied or vacant with 97% accuracy.
        </p>
<div className="flex items-start gap-4">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="camera"></i>
<p className="text-sm text-gray-400 flex-1">
            Privacy-first computer vision—no personal data stored.
          </p>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="cpu"></i>
<p className="text-sm text-gray-400 flex-1">
            Edge processing keeps latency under 250 ms.
          </p>
</div>
</div>
<div className="animate-slide delay-2">
<img alt="" className="rounded-lg shadow-lg ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 animate-slide delay-2">
<img alt="" className="rounded-lg shadow-lg ring-1 ring-gray-800/50" src="https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&amp;q=60&amp;w=1040"/>
</div>
<div className="order-1 md:order-2 space-y-6 animate-slide">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Dynamic Guidance</h2>
<p className="text-gray-300">
          The interactive map updates every second, highlighting the optimal path to the nearest free spot—even across multiple lots.
        </p>
<div className="flex items-start gap-4">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="navigation"></i>
<p className="text-sm text-gray-400 flex-1">
            Turn-by-turn directions sent straight to your dashboard.
          </p>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 stroke-[1.5] text-indigo-400" data-lucide="clock"></i>
<p className="text-sm text-gray-400 flex-1">
            Average driver saves 9 minutes per trip.
          </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-800/30 border-y border-gray-800" id="stats">
<div className="mx-auto max-w-7xl px-6 py-24">
<div className="mb-16 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Impact in Numbers</h2>
</div>
<div className="grid md:grid-cols-2 gap-20 items-center">

<div className="animate-slide">
<div className="bg-gray-800/50 p-6 rounded-lg ring-1 ring-gray-700">
<h3 className="mb-4 text-lg font-semibold text-gray-100">Average Lot Occupancy</h3>
<div>
<canvas height="220" id="occupancyChart"></canvas>
</div>
</div>
</div>

<div className="space-y-8 animate-slide delay-2">
<div className="flex items-center gap-6">
<span className="text-4xl font-semibold text-indigo-400">14M</span>
<p className="text-gray-300">Spots located by drivers so far</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-semibold text-indigo-400">22%</span>
<p className="text-gray-300">Reduced inner-city congestion on partner lots</p>
</div>
<div className="flex items-center gap-6">
<span className="text-4xl font-semibold text-indigo-400">98.7%</span>
<p className="text-gray-300">Uptime across our camera network</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-6 py-24 text-center">
<blockquote className="animate-fade">
<p className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
        “ParkVision cut our parking search time in half on day one.
        It feels like having a personal valet in every lot.”
      </p>
<footer className="mt-8 flex items-center justify-center gap-4">
<img alt="" className="w-11 h-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;q=60&amp;h=88&amp;w=88"/>
<div className="text-left">
<p className="text-sm font-semibold text-white">Jess Nguyen</p>
<p className="text-xs text-gray-400">Fleet Manager, UrbanFlow</p>
</div>
</footer>
</blockquote>
</section>

<section className="relative overflow-hidden bg-gradient-to-b from-gray-800/40 to-gray-900 border-t border-gray-800" id="join">
<div className="absolute inset-0 pointer-events-none">
<img alt="" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="relative mx-auto max-w-7xl px-6 py-24 text-center space-y-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Join Thousands of Drivers Today</h2>
<p className="max-w-2xl mx-auto text-gray-300">
        Sign up free, connect your dash display, and start parking smarter within minutes.
      </p>
<form className="mx-auto max-w-md flex flex-col sm:flex-row gap-4 animate-slide delay-1">
<input className="flex-1 bg-gray-800 border border-gray-700 placeholder-gray-500 text-sm rounded-md px-4 py-3 focus:outline-none focus:border-indigo-500 transition" placeholder="Work email" required="" type="email"/>
<button className="shrink-0 bg-indigo-600 hover:bg-indigo-500 text-sm font-medium px-6 py-3 rounded-md transition outline-none focus-visible:ring-2 ring-indigo-400" type="submit">
          Request access
        </button>
</form>
<p className="text-xs text-gray-500">We’ll get back to you within 24 h.</p>
</div>
</section>

<footer className="mx-auto max-w-7xl px-6 py-16 text-sm text-gray-400">
<div className="flex flex-col md:flex-row md:justify-between gap-8">
<div className="space-y-4">
<span className="font-semibold text-white tracking-tight">ParkVision</span>
<p className="max-w-sm">
          Smarter parking for smarter cities. Built with privacy, performance, and accessibility at the core.
        </p>
<p className="text-xs">© <span id="year"></span> ParkVision Inc. All rights reserved.</p>
</div>
<nav className="grid grid-cols-2 sm:grid-cols-3 gap-6">
<div className="space-y-2">
<h6 className="font-semibold text-gray-300">Product</h6>
<a className="hover:text-white transition" href="#features">How it Works</a>
<a className="hover:text-white transition" href="#stats">Impact</a>
<a className="hover:text-white transition" href="#join">Pricing</a>
</div>
<div className="space-y-2">
<h6 className="font-semibold text-gray-300">Company</h6>
<a className="hover:text-white transition" href="#">About</a>
<a className="hover:text-white transition" href="#">Careers</a>
<a className="hover:text-white transition" href="#">Press</a>
</div>
<div className="space-y-2">
<h6 className="font-semibold text-gray-300">Legal</h6>
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Cookies</a>
</div>
</nav>
</div>
</footer>



    </>
  );
}
