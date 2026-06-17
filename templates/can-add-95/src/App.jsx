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



tailwind.config = {
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'sans-serif']
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'scale-in': 'scaleIn 0.5s ease-out forwards'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
},
scaleIn: {
'0%': { opacity: '0', transform: 'scale(0.95)' },
'100%': { opacity: '1', transform: 'scale(1)' }
}
}
}
}
}



    // Initialize Lucide icons
    lucide.createIcons();

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if(revenueCtx) {
      new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Revenue',
            data: [540, 720, 680, 1075, 860, 940, 760, 990, 820, 880, 730, 910],
            borderColor: '#8b5cf6',
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#8b5cf6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              grid: { display: false },
              ticks: { color: '#64748b', font: { size: 12 } }
            },
            y: {
              grid: { color: '#f1f5f9' },
              ticks: {
                color: '#64748b',
                font: { size: 12 },
                callback: value => '$' + value
              }
            }
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#ffffff',
              titleColor: '#1e293b',
              bodyColor: '#64748b',
              borderColor: '#e2e8f0',
              borderWidth: 1,
              cornerRadius: 12,
              padding: 12,
              callbacks: {
                label: ctx => 'Revenue: $' + ctx.parsed.y
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          }
        }
      });
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
      
<div className="min-h-screen flex opacity-0 animate-fade-in">

<aside className="hidden md:flex flex-col items-center w-16 bg-white/60 backdrop-blur-xl border-r border-white/20 shadow-xl py-6">
<div className="flex-1 flex flex-col gap-4 items-center">
<div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
<div className="text-white font-bold text-sm tracking-tight">HC</div>
</div>
<button aria-label="Dashboard" className="p-3 text-violet-600 bg-violet-50 rounded-xl hover:bg-violet-100 transition-all duration-200 hover:scale-105">
<i className="w-5 h-5" data-lucide="layout-dashboard"></i>
</button>
<button aria-label="Products" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="box"></i>
</button>
<button aria-label="Collections" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="layers"></i>
</button>
<button aria-label="Affiliates" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="users"></i>
</button>
<button aria-label="Automation" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="workflow"></i>
</button>
<button aria-label="Analytics" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
</button>
<button aria-label="Earnings" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="wallet"></i>
</button>
<button aria-label="Settings" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
</div>
<button aria-label="Logout" className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200">
<i className="w-5 h-5" data-lucide="log-out"></i>
</button>
</aside>

<main className="flex-1 flex flex-col gap-8 md:p-8 overflow-hidden pt-6 pr-6 pb-6 pl-6">

<header className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex justify-between items-center">
<div>
<h1 className="md:text-3xl bg-clip-text text-2xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-slate-800 to-slate-600">
              Creator Dashboard
            </h1>
<div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Monday, December 18th • Q4 Performance Overview</span>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="relative">
<input className="pl-10 pr-4 py-3 w-48 md:w-64 rounded-2xl bg-white/70 backdrop-blur-md text-sm border border-white/20 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200" placeholder="Search products, analytics..." type="text"/>
<i className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search"></i>
</div>
<button className="hover:bg-white/80 hover:shadow-md transition-all duration-200 relative bg-white/60 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<i className="w-[20px] h-[20px]" data-lucide="bell" style={{color: 'rgb(71, 85, 105)'}}></i>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</button>
<div className="w-12 h-12 rounded-2xl overflow-hidden bg-white/60 shadow-sm">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</header>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="flex justify-between items-center">
<h2 className="text-xl font-medium tracking-tight">Key Performance Indicators</h2>
<div className="flex items-center gap-2 text-sm text-slate-500">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Updated 5 minutes ago</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-emerald-200/50 opacity-0 animate-scale-in" style={{animationDelay: '0.3s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="wallet"></i>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">+12.5%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Total Earnings</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">$2,847.50</p>
<p className="text-xs text-slate-400">vs last month</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50 opacity-0 animate-scale-in" style={{animationDelay: '0.4s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="credit-card"></i>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">+8.2%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Monthly Earnings</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">$892.30</p>
<p className="text-xs text-slate-400">June</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200/50 opacity-0 animate-scale-in" style={{animationDelay: '0.5s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="mouse-pointer-click"></i>
</div>
<span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">+18.1%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Total Clicks</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">1,247</p>
<p className="text-xs text-slate-400">30 days</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-purple-200/50 opacity-0 animate-scale-in" style={{animationDelay: '0.6s'}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
<i className="w-6 h-6 text-white" data-lucide="sun"></i>
</div>
<span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">+25.3%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Store Views</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">8,934</p>
<p className="text-xs text-slate-400">30 days</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>
<h2 className="text-xl font-medium tracking-tight">Revenue Analytics</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 opacity-0 animate-scale-in" style={{animationDelay: '0.6s'}}>
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-lg font-medium text-slate-800">Revenue Overview</h3>
<p className="text-sm text-slate-500">Monthly revenue and growth trends</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs bg-violet-100 text-violet-600 rounded-lg">Last 30 days</button>
<button className="px-3 py-1.5 text-xs text-slate-500 hover:bg-slate-100 rounded-lg">Export</button>
</div>
</div>
<div className="relative">
<canvas className="w-full h-64" id="revenueChart"></canvas>
</div>
</div>

<div className="space-y-4 opacity-0 animate-scale-in" style={{animationDelay: '0.7s'}}>
<a className="group flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300" href="#">
<div>
<p className="text-sm font-medium text-slate-800">Add New Collection</p>
<p className="text-xs text-slate-500">Organize products into sets</p>
</div>
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300" href="#">
<div>
<p className="text-sm font-medium text-slate-800">Browse Products</p>
<p className="text-xs text-slate-500">Discover new SKUs</p>
</div>
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="group flex items-center justify-between bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300" href="#">
<div>
<p className="text-sm font-medium text-slate-800">View Analytics</p>
<p className="text-xs text-slate-500">Deep-dive performance</p>
</div>
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white flex items-center justify-center">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</a>
</div>
</div>
</section>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: '0.6s'}}>
<div className="flex justify-between items-center">
<h2 className="text-xl font-medium tracking-tight">Top Products</h2>
<button className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1">
            View all
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden opacity-0 animate-scale-in" style={{animationDelay: '0.7s'}}>
<div className="overflow-x-auto">
<table className="min-w-full">
<thead className="bg-slate-50/50">
<tr>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Product</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Created</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Earnings</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Status</th>
<th className="py-4 px-6 text-right text-sm font-medium text-slate-600">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden ring-1 ring-slate-200">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-sm font-medium text-slate-800">Pegasus A.I.R. Chaz Bear</div>
<div className="text-xs text-slate-500">Mesh upper · Neutral ride</div>
</div>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">01 Jul 2025</td>
<td className="py-4 px-6 text-sm font-medium text-slate-800">$250.58</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">In Stock</span>
</td>
<td className="py-4 px-6">
<div className="flex justify-end gap-2 text-slate-600">
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden ring-1 ring-slate-200">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div>
<div className="text-sm font-medium text-slate-800">Nimbus Glide V3</div>
<div className="text-xs text-slate-500">Carbon plate · Daily trainer</div>
</div>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">28 Jun 2025</td>
<td className="py-4 px-6 text-sm font-medium text-slate-800">$219.00</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">Out of Stock</span>
</td>
<td className="py-4 px-6">
<div className="flex justify-end gap-2 text-slate-600">
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-2xl overflow-hidden ring-1 ring-slate-200">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium text-slate-800">ChronoTrack Pro</div>
<div className="text-xs text-slate-500">GPS · Waterproof 5ATM</div>
</div>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">15 Jun 2025</td>
<td className="py-4 px-6 text-sm font-medium text-slate-800">$180.20</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">In Stock</span>
</td>
<td className="py-4 px-6">
<div className="flex justify-end gap-2 text-slate-600">
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="pencil"></i>
</button>
<button className="p-2 hover:bg-slate-100 rounded-xl transition-all duration-200">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="px-6 py-3 border-t border-slate-100 text-xs text-slate-600">
            Showing 1–3 of 24
          </div>
</div>
</section>
</main>
</div>


    </>
  );
}
