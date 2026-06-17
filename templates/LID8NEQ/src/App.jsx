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

    particlesJS('particles-js', {
      particles:{
        number:{value:70,density:{enable:true,value_area:900}},
        color:{value:['#6366f1','#d946ef','#ec4899','#8b5cf6']},
        shape:{type:'circle'},
        opacity:{value:0.25,random:true},
        size:{value:3,random:true},
        move:{enable:true,speed:1,direction:'none',out_mode:'out'}
      },
      interactivity:{events:{onhover:{enable:true,mode:'repulse'}},modes:{repulse:{distance:120}}}
    });

    const gridColor='rgba(255,255,255,.06)', tickColor='#6b7280', blue='#6366f1', red='#f43f5e';

    new Chart(document.getElementById('cashFlowChart'),{
      type:'line',
      data:{
        labels:['Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
        datasets:[
          {label:'Cash In',data:[19,21,23,25,22,24,27,29,32,35,34,38],borderColor:blue,backgroundColor:'rgba(99,102,241,.09)',tension:.4,fill:true,pointRadius:0},
          {label:'Cash Out',data:[15,16,14,17,15,16,19,21,20,22,21,24],borderColor:red,backgroundColor:'rgba(244,63,94,.07)',tension:.4,fill:true,pointRadius:0}
        ]
      },
      options:{
        responsive:true,plugins:{legend:{display:false}},
        scales:{x:{ticks:{color:tickColor},grid:{display:false}},y:{ticks:{color:tickColor},grid:{color:gridColor}}}
      }
    });

    new Chart(document.getElementById('expensesChart'),{
      type:'bar',
      data:{
        labels:['HR','Hosting','Sales','R&D','Operations','Other'],
        datasets:[{label:'Expenses',data:[42,31,27,29,21,18],backgroundColor:['#f43f5e','#8b5cf6','#f59e0b','#06b6d4','#10b981','#6366f1'],borderRadius:6}]
      },
      options:{
        responsive:true,plugins:{legend:{display:false}},
        scales:{x:{ticks:{color:tickColor},grid:{display:false}},y:{ticks:{color:tickColor},grid:{color:gridColor}}}
      }
    });

    document.querySelectorAll('.fade-up').forEach((el,i)=>setTimeout(()=>el.classList.add('opacity-100'),120*i+200));
  
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
      

<div className="fixed inset-0 -z-10" id="particles-js"></div>

<aside className="fixed inset-y-0 left-0 z-50 w-64 glass border-r border-white/10 flex flex-col" id="sidebar">
<div className="h-16 flex items-center gap-2 px-6 border-b border-white/10">
<svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 11l7-7 7 7M5 19l7-7 7 7"></path></svg>
<span className="text-lg font-semibold tracking-tight">FinSight</span>
</div>
<nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1 text-sm font-medium">
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#">
<svg className="w-4 h-4 text-indigo-400" data-lucide="pie-chart"></svg>
<span className="group-hover:text-indigo-400">Overview</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#">
<svg className="w-4 h-4 text-indigo-400" data-lucide="bar-chart"></svg>
<span className="group-hover:text-indigo-400">Reports</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#">
<svg className="w-4 h-4 text-indigo-400" data-lucide="credit-card"></svg>
<span className="group-hover:text-indigo-400">Payments</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition" href="#">
<svg className="w-4 h-4 text-indigo-400" data-lucide="settings"></svg>
<span className="group-hover:text-indigo-400">Settings</span>
</a>
</nav>
<div className="px-6 py-4 border-t border-white/10 flex items-center gap-3">
<img alt="User avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-indigo-400" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
<div className="flex-1">
<p className="text-sm font-medium">Alex Carter</p>
<p className="text-xs text-gray-400">alex@finsight.io</p>
</div>
</div>
</aside>

<div className="pl-64">

<header className="sticky top-0 z-40 glass border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-end">
<button aria-label="Notifications" className="relative hover:text-indigo-400 transition mr-5">
<svg className="w-5 h-5" data-lucide="bell"></svg>
<span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-gray-950"></span>
</button>
<img alt="User avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-indigo-400" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=2160&amp;q=80"/>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 grid lg:grid-cols-2 gap-14 items-center fade-up" style={{animationDelay: '.1s'}}>
<div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight bg-gradient-to-br from-indigo-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent">
          Clarity for every dollar.
        </h1>
<p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-xl">
          FinSight empowers you to visualise, predict, and optimise your company’s cash flow—while you build the next big thing.
        </p>
<div className="mt-10 flex gap-5">
<button className="px-7 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:to-indigo-600 hover:from-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-fuchsia-500 shadow-lg shadow-indigo-500/20">
            Get Started
          </button>
<button className="px-7 py-3 rounded-lg font-medium border border-white/10 hover:bg-white/5 transition">
            Live Demo
          </button>
</div>
</div>
<div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden hover-scale">
<img alt="Dashboard mockup" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-tr from-gray-950 via-transparent to-gray-950/20"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass rounded-2xl p-6 border border-white/10 hover-scale fade-up" style={{animationDelay: '.15s'}}>
<div className="flex justify-between items-center">
<h3 className="text-xs uppercase text-gray-400 font-medium tracking-wide">Total Revenue</h3>
<svg className="w-5 h-5 text-indigo-400" data-lucide="trending-up"></svg>
</div>
<p className="mt-4 text-3xl font-semibold tracking-tight">$238k</p>
<p className="mt-1 text-sm text-green-400 font-medium">+12.4% MoM</p>
</div>
<div className="glass rounded-2xl p-6 border border-white/10 hover-scale fade-up" style={{animationDelay: '.2s'}}>
<div className="flex justify-between items-center">
<h3 className="text-xs uppercase text-gray-400 font-medium tracking-wide">Expenses</h3>
<svg className="w-5 h-5 text-rose-400" data-lucide="credit-card"></svg>
</div>
<p className="mt-4 text-3xl font-semibold tracking-tight">$91k</p>
<p className="mt-1 text-sm text-rose-400 font-medium">-3.8% MoM</p>
</div>
<div className="glass rounded-2xl p-6 border border-white/10 hover-scale fade-up" style={{animationDelay: '.25s'}}>
<div className="flex justify-between items-center">
<h3 className="text-xs uppercase text-gray-400 font-medium tracking-wide">Operating Cash</h3>
<svg className="w-5 h-5 text-amber-300" data-lucide="wallet"></svg>
</div>
<p className="mt-4 text-3xl font-semibold tracking-tight">$473k</p>
<p className="mt-1 text-sm text-green-400 font-medium">+8.1% MoM</p>
</div>
<div className="glass rounded-2xl p-6 border border-white/10 hover-scale fade-up" style={{animationDelay: '.3s'}}>
<div className="flex justify-between items-center">
<h3 className="text-xs uppercase text-gray-400 font-medium tracking-wide">Average ROI</h3>
<svg className="w-5 h-5 text-emerald-400" data-lucide="percent"></svg>
</div>
<p className="mt-4 text-3xl font-semibold tracking-tight">14.6%</p>
<p className="mt-1 text-sm text-green-400 font-medium">+1.6% YoY</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 mt-28 grid grid-cols-1 lg:grid-cols-3 gap-10">
<div className="lg:col-span-2 glass rounded-3xl p-8 border border-white/10 hover-scale fade-up" style={{animationDelay: '.35s'}}>
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-400" data-lucide="activity"></svg> Monthly Cash Flow
        </h2>
<p className="mt-1 text-gray-400 text-sm">Last 12 Months</p>
<div className="mt-6">
<div>
<canvas height="140" id="cashFlowChart"></canvas>
</div>
</div>
</div>
<div className="glass rounded-3xl p-8 border border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-fuchsia-600/10 hover-scale fade-up flex flex-col justify-between" style={{animationDelay: '.4s'}}>
<div>
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<svg className="w-5 h-5 text-indigo-400" data-lucide="refresh-ccw"></svg> Xero Sync
          </h2>
<p className="mt-2 text-gray-300 text-sm leading-relaxed">
            Connect FinSight with Xero and keep your books automatically up to date every two hours.
          </p>
</div>
<button className="mt-8 flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-indigo-500 to-fuchsia-500 hover:to-indigo-600 shadow-lg shadow-fuchsia-500/20">
<svg className="w-4 h-4" data-lucide="link"></svg> Connect
        </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 mt-28 glass rounded-3xl p-8 border border-white/10 hover-scale fade-up" style={{animationDelay: '.45s'}}>
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<svg className="w-5 h-5 text-rose-400" data-lucide="bar-chart-2"></svg> Expense Breakdown
      </h2>
<p className="mt-1 text-gray-400 text-sm">Current Fiscal YTD</p>
<div className="mt-6">
<div>
<canvas height="140" id="expensesChart"></canvas>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 mt-28 mb-32 glass rounded-3xl p-8 border border-white/10 overflow-x-auto hover-scale fade-up" style={{animationDelay: '.5s'}}>
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<svg className="w-5 h-5 text-emerald-400" data-lucide="file-text"></svg> Recent Transactions
      </h2>
<table className="min-w-full mt-6 text-sm border-separate [border-spacing:0.5rem]">
<thead className="sr-only">
<tr><th>Date</th><th>Description</th><th>Category</th><th>Amount</th><th>Status</th></tr>
</thead>
<tbody>
<tr className="hover:bg-white/5 rounded-lg">
<td className="py-3 pr-4">05 Oct 23</td>
<td className="py-3 pr-4">Stripe Payment</td>
<td className="py-3 pr-4">Revenue</td>
<td className="py-3 pr-4 text-green-400 font-medium text-right">$12 300</td>
<td className="py-3 text-right"><span className="px-2 py-1 rounded bg-green-500/10 text-green-400">Settled</span></td>
</tr>
<tr className="hover:bg-white/5 rounded-lg">
<td className="py-3 pr-4">03 Oct 23</td>
<td className="py-3 pr-4">AWS Cloud</td>
<td className="py-3 pr-4">Hosting</td>
<td className="py-3 pr-4 text-rose-400 font-medium text-right">-$2 100</td>
<td className="py-3 text-right"><span className="px-2 py-1 rounded bg-amber-400/10 text-amber-300">Pending</span></td>
</tr>
<tr className="hover:bg-white/5 rounded-lg">
<td className="py-3 pr-4">30 Sep 23</td>
<td className="py-3 pr-4">Google Ads</td>
<td className="py-3 pr-4">Marketing</td>
<td className="py-3 pr-4 text-rose-400 font-medium text-right">-$4 800</td>
<td className="py-3 text-right"><span className="px-2 py-1 rounded bg-green-500/10 text-green-400">Paid</span></td>
</tr>
<tr className="hover:bg-white/5 rounded-lg">
<td className="py-3 pr-4">28 Sep 23</td>
<td className="py-3 pr-4">Consulting Fee</td>
<td className="py-3 pr-4">Revenue</td>
<td className="py-3 pr-4 text-green-400 font-medium text-right">$5 400</td>
<td className="py-3 text-right"><span className="px-2 py-1 rounded bg-green-500/10 text-green-400">Settled</span></td>
</tr>
</tbody>
</table>
</section>
<footer className="pb-10 text-center text-xs text-gray-500 fade-up" style={{animationDelay: '.55s'}}>
      © 2023 FinSight Inc. All rights reserved.
    </footer>
</div>


    </>
  );
}
