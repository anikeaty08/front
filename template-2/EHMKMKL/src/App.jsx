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



        // Initialize Charts
        document.addEventListener('DOMContentLoaded', function() {
            // Performance Chart
            const performanceCtx = document.getElementById('performanceChart').getContext('2d');
            new Chart(performanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        data: [4200, 4350, 4280, 4520, 4680, 4780],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });

            // Expense Chart
            const expenseCtx = document.getElementById('expenseChart').getContext('2d');
            new Chart(expenseCtx, {
                type: 'doughnut',
                data: {
                    datasets: [{
                        data: [542.30, 420.80, 320.50, 258.59, 100.00],
                        backgroundColor: ['#ef4444', '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '70%',
                    plugins: { legend: { display: false } }
                }
            });

            // Toggle buttons
            const buyBtn = document.getElementById('buyBtn');
            const sellBtn = document.getElementById('sellBtn');
            
            buyBtn.addEventListener('click', function() {
                buyBtn.classList.add('bg-white', 'text-black');
                buyBtn.classList.remove('text-slate-400');
                sellBtn.classList.remove('bg-white', 'text-black');
                sellBtn.classList.add('text-slate-400');
            });
            
            sellBtn.addEventListener('click', function() {
                sellBtn.classList.add('bg-white', 'text-black');
                sellBtn.classList.remove('text-slate-400');
                buyBtn.classList.remove('bg-white', 'text-black');
                buyBtn.classList.add('text-slate-400');
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
      
<div className="flex flex-col lg:flex-row gap-8 relative z-10 p-6">

<div className="w-[340px] glass-card rounded-3xl overflow-hidden h-[700px] animate-element slide-left anim-delay-0 hover-lift">

<div className="p-6 flex items-center justify-between border-b border-white/5 animate-element fade-in anim-delay-200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 animate-element scale-in anim-delay-400">
<img alt="avatar" className="w-full h-full object-cover rounded-xl" src="/assets/19c828cf-2eeb-41d3-af89-65dbff9faf70_320w.jpg" style={{}} />
</div>
<div className="animate-element slide-right anim-delay-300">
<p className="text-sm font-light text-white/90">Welcome back</p>
<p className="text-xs text-white/60">Rowan Maxwell</p>
</div>
</div>
<button className="relative glass rounded-xl p-2.5 hover:bg-white/10 transition-all duration-300 animate-element scale-in anim-delay-500">
<svg className="text-white/70" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full pulse-glow"></span>
</button>
</div>

<div className="p-6 text-center animate-element blur-in anim-delay-600">
<p className="text-xs font-light text-white/50 mb-2 tracking-wider uppercase">Total Portfolio</p>
<div className="flex items-center justify-center gap-3 mb-4">
<h2 className="text-4xl font-light gradient-text tracking-tight">€6,420.00</h2>
<button className="glass rounded-lg p-2 hover:bg-white/10 transition-all duration-300">
<svg className="text-white/60" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<div className="flex items-center justify-center gap-2 text-sm animate-element fade-in anim-delay-800">
<span className="text-emerald-400">+2.4%</span>
<span className="text-white/40">•</span>
<span className="text-white/60">+€152.40 today</span>
</div>
</div>

<div className="relative h-32 mx-6 mb-6 glass rounded-2xl overflow-hidden animate-element scale-in anim-delay-700">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full glass flex items-center justify-center shimmer float">
<svg className="text-amber-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
</div>
</div>
<div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-element scale-in anim-delay-1000"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 bg-purple-400 rounded-full animate-element scale-in anim-delay-1200"></div>
</div>

<div className="glass overflow-hidden rounded-2xl mr-6 mb-6 ml-6 animate-element slide-up anim-delay-800">
<div className="glass text-white bg-slate-900 pt-5 pr-5 pb-5 pl-5" style={{colorScheme: `dark`}}>

<div className="flex bg-white/10 rounded-xl p-1 mb-5 animate-element fade-in anim-delay-1000">
<button className="flex-1 py-2.5 text-center rounded-lg transition-all duration-300 text-sm font-medium text-slate-400" id="buyBtn">Buy</button>
<button className="flex-1 py-2.5 text-center rounded-lg transition-all duration-300 text-sm font-medium bg-white text-black" id="sellBtn">Sell</button>
</div>

<div className="space-y-4">
<div className="space-y-2 animate-element slide-right anim-delay-1100">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400 font-light">From</span>
<span className="text-xs text-slate-500">Balance: €4,200.00</span>
</div>
<div className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
<button className="flex items-center gap-2 mr-4 hover:text-blue-400 transition-colors">
<div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-white">€</span>
</div>
<span className="font-medium text-slate-300">EUR</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input className="ml-auto bg-transparent text-right text-xl font-light outline-none w-24 text-white" type="number" value="300" />
</div>
</div>
<div className="flex justify-center animate-element scale-in anim-delay-1200">
<button className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center hover:scale-110 transition-transform">
<svg className="text-slate-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 16V4m0 0L3 8m4-4 4 4m6 0v12m0 0 4-4m-4 4-4-4"></path></svg>
</button>
</div>
<div className="space-y-2 animate-element slide-left anim-delay-1300">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-400 font-light">To</span>
<span className="text-xs text-slate-500">1 EUR = 0.86 GBP</span>
</div>
<div className="flex items-center bg-white/10 rounded-xl p-4 hover:bg-white/15 transition-all duration-300">
<button className="flex items-center gap-2 mr-4 hover:text-emerald-400 transition-colors">
<div className="w-6 h-6 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full flex items-center justify-center">
<span className="text-xs font-semibold text-white">£</span>
</div>
<span className="font-medium text-slate-300">GBP</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<input className="ml-auto bg-transparent text-right text-xl font-light outline-none w-24 text-white" type="number" value="258" />
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-2 mt-6 animate-element fade-in anim-delay-1400">
<button className="py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-light text-white animate-element scale-in anim-delay-1400">€100</button>
<button className="py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-light text-white animate-element scale-in anim-delay-1500">€250</button>
<button className="py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-light text-white animate-element scale-in anim-delay-1600">€500</button>
<button className="py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-sm font-light text-white animate-element scale-in anim-delay-1700">Max</button>
</div>
</div>
</div>
</div>

<div className="w-[340px] glass-card rounded-3xl overflow-hidden h-[700px] animate-element slide-up anim-delay-200 hover-lift">

<div className="p-6 flex items-center justify-between border-b border-white/5 animate-element fade-in anim-delay-400">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5 animate-element scale-in anim-delay-600">
<img alt="avatar" className="w-full h-full object-cover rounded-xl" src="/assets/d1d75dce-ea57-454b-8ec5-dfbb5f9f1ff9_320w.jpg" style={{}} />
</div>
<div className="animate-element slide-right anim-delay-500">
<p className="text-sm font-light text-white/90">Nova Card</p>
<p className="text-xs text-white/60">Premium Account</p>
</div>
</div>
<button className="glass rounded-xl p-2.5 hover:bg-white/10 transition-all duration-300 animate-element scale-in anim-delay-700">
<svg className="text-white/70" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="mx-6 mt-6 relative animate-element blur-in anim-delay-800">
<div className="glass rounded-2xl p-6 bg-gradient-to-br from-slate-800/50 to-purple-900/50 border border-white/10 hover:border-white/20 transition-all duration-300 float">
<div className="flex items-center justify-between mb-8 animate-element fade-in anim-delay-1000">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
<svg className="text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div className="text-right">
<p className="text-xs text-white/60">Contactless</p>
<div className="flex gap-1 mt-1">
<div className="w-3 h-3 rounded-full bg-white/20 animate-element scale-in anim-delay-1200"></div>
<div className="w-3 h-3 rounded-full bg-white/40 animate-element scale-in anim-delay-1300"></div>
<div className="w-3 h-3 rounded-full bg-white/60 animate-element scale-in anim-delay-1400"></div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="animate-element slide-up anim-delay-1100">
<p className="text-xs text-white/60 mb-1">Card Number</p>
<p className="text-lg font-light tracking-widest text-white/90">**** **** **** 9088</p>
</div>
<div className="flex items-center justify-between animate-element slide-up anim-delay-1200">
<div>
<p className="text-xs text-white/60 mb-1">Balance</p>
<p className="text-2xl font-light gradient-text">€4,780.00</p>
</div>
<div className="text-right">
<p className="text-xs text-white/60 mb-1">Expires</p>
<p className="text-sm font-light text-white/80">12/28</p>
</div>
</div>
<div className="flex items-center justify-between animate-element slide-up anim-delay-1300">
<p className="text-sm font-light text-white/90">ROWAN MAXWELL</p>
<p className="text-xl font-light tracking-wider text-white/90">NOVA</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-6 mt-8 px-6 animate-element fade-in anim-delay-1000">
<button className="flex flex-col items-center gap-2 group animate-element scale-in anim-delay-1200">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform glow pulse-glow">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<span className="text-xs text-white/60 font-light">Send</span>
</button>
<button className="flex flex-col items-center gap-2 group animate-element scale-in anim-delay-1300">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="text-xs text-white/60 font-light">Cards</span>
</button>
<button className="flex flex-col items-center gap-2 group animate-element scale-in anim-delay-1400">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-110 transition-transform">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg>
</div>
<span className="text-xs text-white/60 font-light">Top up</span>
</button>
</div>

<div className="mx-6 mt-8 mb-6 glass rounded-2xl p-4 animate-element slide-up anim-delay-1200">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white/90">Monthly Performance</h3>
<span className="text-xs text-emerald-400">+12.5%</span>
</div>
<div className="relative h-20">
<canvas className="w-full h-full" id="performanceChart"></canvas>
</div>
</div>
</div>

<div className="w-[340px] glass-card rounded-3xl overflow-hidden h-[700px] animate-element slide-right anim-delay-400 hover-lift">

<div className="p-6 flex items-center justify-between border-b border-white/5 animate-element fade-in anim-delay-600">
<button className="glass rounded-xl p-2.5 hover:bg-white/10 transition-all duration-300 animate-element scale-in anim-delay-800">
<svg className="text-white/70" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<div className="text-center animate-element slide-up anim-delay-700">
<p className="text-sm font-medium text-white/90">Expenses</p>
<p className="text-xs text-white/60">This Month</p>
</div>
<button className="glass rounded-xl p-2.5 hover:bg-white/10 transition-all duration-300 animate-element scale-in anim-delay-900">
<svg className="text-white/70" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="8" x2="21" y1="6" y2="6"></line><line x1="8" x2="21" y1="12" y2="12"></line><line x1="8" x2="21" y1="18" y2="18"></line><line x1="3" x2="3.01" y1="6" y2="6"></line><line x1="3" x2="3.01" y1="12" y2="12"></line><line x1="3" x2="3.01" y1="18" y2="18"></line></svg>
</button>
</div>

<div className="flex mt-6 items-center justify-center animate-element blur-in anim-delay-1000">
<div className="relative w-48 h-48">
<canvas className="w-full h-full" id="expenseChart"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<div className="w-12 h-12 rounded-xl glass flex items-center justify-center mb-2 animate-element scale-in anim-delay-1200 float">
<svg className="text-red-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<p className="text-xs text-white/60 font-light">Total Spent</p>
<p className="text-lg font-light gradient-text">€1,642.19</p>
</div>
</div>
</div>

<div className="mx-6 mt-8 space-y-4">
<div className="flex items-center justify-between animate-element slide-left anim-delay-1200">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-500 animate-element scale-in anim-delay-1400"></div>
<span className="text-sm text-white/90 font-light">Shopping</span>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90">€542.30</p>
<p className="text-xs text-white/60">33%</p>
</div>
</div>
<div className="flex items-center justify-between animate-element slide-left anim-delay-1300">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-blue-500 animate-element scale-in anim-delay-1500"></div>
<span className="text-sm text-white/90 font-light">Food</span>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90">€420.80</p>
<p className="text-xs text-white/60">26%</p>
</div>
</div>
<div className="flex items-center justify-between animate-element slide-left anim-delay-1400">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-purple-500 animate-element scale-in anim-delay-1600"></div>
<span className="text-sm text-white/90 font-light">Transport</span>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90">€320.50</p>
<p className="text-xs text-white/60">19%</p>
</div>
</div>
<div className="flex items-center justify-between animate-element slide-left anim-delay-1500">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-emerald-500 animate-element scale-in anim-delay-1700"></div>
<span className="text-sm text-white/90 font-light">Entertainment</span>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90">€258.59</p>
<p className="text-xs text-white/60">16%</p>
</div>
</div>
<div className="flex items-center justify-between animate-element slide-left anim-delay-1600">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-amber-500 animate-element scale-in anim-delay-1800"></div>
<span className="text-sm text-white/90 font-light">Utilities</span>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white/90">€100.00</p>
<p className="text-xs text-white/60">6%</p>
</div>
</div>
</div>

<div className="mx-6 mt-8 mb-6 glass rounded-2xl p-4 animate-element slide-up anim-delay-1700">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-medium text-white/90">vs Last Month</h3>
<span className="text-xs text-red-400">+5.2%</span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Previous</span>
<span className="text-white/90">€1,561.45</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-white/60">Current</span>
<span className="text-white/90">€1,642.19</span>
</div>
<div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-element slide-right anim-delay-1800" style={{width: `85%`}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-element scale-in anim-delay-2000 float"></div>
<div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-element scale-in anim-delay-2200 float"></div>
<div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-element scale-in anim-delay-2400 float"></div>
<div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-element scale-in anim-delay-2600 float"></div>
</div>


    </>
  );
}
