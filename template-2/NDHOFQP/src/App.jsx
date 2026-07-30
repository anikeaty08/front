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

    // Chart.js config
    const ctx = document.getElementById("ordersChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "This Week",
            data: [420, 580, 690, 860, 760, 820, 930],
            borderColor: "#3b82f6",
            backgroundColor: "rgba(59, 130, 246, 0.15)",
            tension: 0.4,
            borderWidth: 3,
            fill: true,
          },
          {
            label: "Last Week",
            data: [380, 520, 610, 740, 700, 780, 840],
            borderColor: "#94a3b8",
            backgroundColor: "rgba(148, 163, 184, 0.1)",
            tension: 0.4,
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: "rgba(203, 213, 225, 0.3)" }, ticks: { color: "#475569" } },
          x: { ticks: { color: "#475569" } },
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
      

<div className="w-full max-w-[1400px] bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border border-blue-100">

<header className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 border-b border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-blue-500 grid place-content-center">
<i className="w-5 h-5 text-white" data-lucide="shopping-cart"></i>
</div>
<span className="text-lg sm:text-xl font-bold text-blue-600">BlueCart</span>
</div>
<nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors text-slate-600" href="#">Premium Groceries</a>
<a className="hover:text-slate-900 transition-colors text-slate-600" href="#">Meal Kits</a>
<a className="hover:text-slate-900 transition-colors text-slate-600" href="#">Express</a>
<a className="hover:text-slate-900 transition-colors text-slate-600" href="#">Deals</a>
<a className="hover:text-slate-900 transition-colors text-slate-600" href="#">Customers</a>
</nav>
<div className="flex items-center gap-2">
<button className="lg:hidden p-2 text-slate-600">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<a className="rounded-full bg-blue-500 text-white px-4 sm:px-8 py-2 sm:py-3 text-sm font-semibold shadow-lg hover:bg-blue-600 transition-colors" href="#">
<span className="hidden sm:inline">Download App</span>
<span className="sm:hidden">App</span>
</a>
</div>
</header>

<section className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-10 py-8 sm:py-12">

<div className="flex flex-col sm:flex-row items-center gap-3 mb-6 sm:mb-8">
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border-3 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/32.jpg" />
<img className="w-8 h-8 rounded-full border-3 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/22.jpg" />
<img className="w-8 h-8 rounded-full border-3 border-white shadow-sm" src="https://randomuser.me/api/portraits/women/65.jpg" />
<img className="w-8 h-8 rounded-full border-3 border-white shadow-sm" src="https://randomuser.me/api/portraits/men/41.jpg" />
<div className="w-8 h-8 rounded-full bg-blue-500 border-3 border-white shadow-sm flex items-center justify-center">
<span className="text-white text-[10px] font-bold">+50K</span>
</div>
</div>
<div className="flex items-center gap-1">
<div className="flex gap-0.5">
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-amber-400 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs sm:text-sm text-slate-600 ml-1">Trusted by 50,000+ families</span>
</div>
</div>

<h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-800 mb-4 sm:mb-6">
        Ultra-fast <span className="highlight font-bold text-blue-600">organic groceries</span> delivered in 30 minutes
      </h1>
<p className="max-w-2xl text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed px-4">
        From local farms to your kitchen table—discover the freshest produce, sustainable seafood, and artisanal
        delights without leaving home.
      </p>

<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 rounded-full bg-blue-500 text-white px-8 sm:px-10 py-3 sm:py-4 text-base font-semibold shadow-lg hover:bg-blue-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="smartphone"></i>
          Get BlueCart
        </a>
<a className="flex items-center justify-center gap-2 rounded-full bg-white border-2 border-slate-200 text-slate-700 px-8 sm:px-10 py-3 sm:py-4 text-base font-semibold hover:bg-slate-50 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="play-circle"></i>
          Watch Demo
        </a>
</div>

<div className="relative w-full">
<img alt="Grocery hero" className="w-full max-w-5xl sm:rounded-2xl object-cover h-[250px] sm:h-[350px] lg:h-[400px] bg-cover rounded-xl mx-auto shadow-2xl" src="https://images.unsplash.com/photo-1556745750-68295fefafc5?w=2160&q=80" />

<div className="absolute -left-2 sm:-left-4 lg:left-16 top-8 sm:top-20 w-[180px] sm:w-[220px] bg-white border border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xl">
<div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
<div className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
<i className="w-4 sm:w-5 h-4 sm:h-5 text-white" data-lucide="repeat"></i>
</div>
<div>
<h3 className="text-xs sm:text-sm font-semibold text-slate-800">Smart Subscribe</h3>
<p className="text-[10px] sm:text-xs text-slate-500">by Madison Chen</p>
</div>
</div>
<p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2 sm:mb-3">
            AI predicts your pantry needs—never run out again.
          </p>
<div className="flex items-center gap-2 text-[10px] sm:text-xs text-blue-600 font-medium">
<i className="w-3 sm:w-4 h-3 sm:h-4" data-lucide="check-circle"></i>
            Save up to 25% monthly
          </div>
</div>

<div className="absolute -right-2 sm:-right-4 lg:right-16 top-16 sm:top-32 w-[160px] sm:w-[200px] bg-white border border-blue-100 rounded-xl sm:rounded-2xl p-4 sm:p-7 shadow-xl">
<div className="flex items-center justify-between mb-2 sm:mb-3">
<span className="text-[9px] sm:text-xs uppercase text-slate-500 font-semibold tracking-wider">Chef's Pick</span>
<i className="w-3 sm:w-4 h-3 sm:h-4 text-blue-500" data-lucide="chef-hat"></i>
</div>
<h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 sm:mb-2">Truffle Risotto</h3>
<p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">8 ingredients • 45 min</p>
<div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3">
<img className="w-7 sm:w-9 h-7 sm:h-9 rounded-lg sm:rounded-xl object-cover" src="https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=32&q=60" />
<img className="w-7 sm:w-9 h-7 sm:h-9 rounded-lg sm:rounded-xl object-cover" src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=32&q=60" />
<span className="flex items-center justify-center w-7 sm:w-9 h-7 sm:h-9 rounded-lg sm:rounded-xl bg-slate-100 text-[10px] sm:text-xs text-slate-600 font-medium">+6</span>
</div>
<div className="text-[10px] sm:text-xs text-blue-600 font-medium">
            All ingredients in stock
          </div>
</div>

<div className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:bottom-12 w-[90%] sm:w-[280px] lg:w-[380px]">
<div className="flex items-center bg-white shadow-2xl rounded-lg sm:rounded-2xl overflow-hidden px-3 sm:px-6 py-3 sm:py-4 border border-blue-100">
<i className="w-4 sm:w-5 h-4 sm:h-5 text-slate-400" data-lucide="search"></i>
<input className="w-full text-xs sm:text-sm border-0 focus:ring-0 placeholder-slate-400 px-2 sm:px-4 bg-transparent" placeholder="Search organic vegetables…" type="text" />
<button className="bg-blue-500 text-white p-2 rounded-lg sm:rounded-xl hover:bg-blue-600 transition-colors">
<i className="w-3 sm:w-4 h-3 sm:h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-10 pb-12">
<div className="grid gap-6 lg:grid-cols-3">

<div className="lg:col-span-2 bg-white border border-blue-100 rounded-xl sm:rounded-2xl p-6 shadow-lg">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-800">
            Weekly Orders
          </h2>
<p className="text-sm text-slate-500">This week vs last week</p>
<div className="mt-4">
<canvas className="w-full h-56 sm:h-64" id="ordersChart"></canvas>
</div>
</div>

<div className="bg-white border border-blue-100 rounded-xl sm:rounded-2xl p-6 shadow-lg flex flex-col justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-800 mb-2">Quick Stats</h3>
<p className="text-sm text-slate-500 mb-6">Real-time snapshot of your grocery habits.</p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="clock"></i>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-700">Avg. delivery time</p>
<span className="text-sm text-blue-600 font-medium">27 min</span>
</div>
</li>
<li className="flex items-start gap-3 border-t border-slate-100 pt-4">
<div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="shopping-bag"></i>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-700">Items delivered today</p>
<span className="text-sm text-blue-600 font-medium">1,284</span>
</div>
</li>
<li className="flex items-start gap-3 border-t border-slate-100 pt-4">
<div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="users"></i>
</div>
<div className="flex-1">
<p className="text-sm font-semibold text-slate-700">New subscribers</p>
<span className="text-sm text-blue-600 font-medium">312</span>
</div>
</li>
</ul>
</div>
</div>
</section>
</div>




    </>
  );
}
