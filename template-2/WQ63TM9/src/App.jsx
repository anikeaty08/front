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
          fontFamily: { inter: ['Inter', 'sans-serif'] },
          animation: {
            'fade-in': 'fadeIn 0.6s ease-out forwards',
            'slide-up': 'slideUp 0.8s ease-out forwards',
            'scale-in': 'scaleIn 0.5s ease-out forwards'
          },
          keyframes: {
            fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
            slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
            scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95)' }, '100%': { opacity: '1', transform: 'scale(1)' } }
          }
        } 
      } 
    }
  


    // Initialize Lucide icons
    lucide.createIcons();

    // Performance Gauge Chart
    const gaugeCtx = document.getElementById('performanceGauge');
    if(gaugeCtx) {
      new Chart(gaugeCtx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [87, 13],
            backgroundColor: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.2)'],
            borderWidth: 0,
            cutout: '75%',
            rotation: -90,
            circumference: 180
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            tooltip: { enabled: false },
            legend: { display: false }
          }
        }
      });
    }

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if(revenueCtx) {
      new Chart(revenueCtx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Q4 Revenue',
            data: [180000, 220000, 190000, 250000, 280000, 240000, 290000, 310000, 270000, 330000, 350000, 380000],
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
          }, {
            label: 'Q3 Revenue',
            data: [150000, 180000, 160000, 200000, 220000, 190000, 230000, 250000, 210000, 260000, 280000, 300000],
            borderColor: '#e2e8f0',
            backgroundColor: 'rgba(226, 232, 240, 0.1)',
            borderWidth: 2,
            fill: false,
            tension: 0.4,
            pointBackgroundColor: '#e2e8f0',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 4
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
                callback: value => '$' + (value/1000) + 'k'
              }
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top',
              align: 'end',
              labels: {
                usePointStyle: true,
                padding: 20,
                color: '#64748b',
                font: { size: 12 }
              }
            },
            tooltip: {
              backgroundColor: '#ffffff',
              titleColor: '#1e293b',
              bodyColor: '#64748b',
              borderColor: '#e2e8f0',
              borderWidth: 1,
              cornerRadius: 12,
              padding: 12,
              callbacks: {
                label: ctx => ctx.dataset.label + ': $' + ctx.parsed.y.toLocaleString()
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
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<button aria-label="Dashboard" className="p-3 text-violet-600 bg-violet-50 rounded-xl hover:bg-violet-100 transition-all duration-200 hover:scale-105">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</button>
<button aria-label="Analytics" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<svg className="lucide lucide-trending-up w-5 h-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
<button aria-label="Projects" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<svg className="lucide lucide-briefcase w-5 h-5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</button>
<button aria-label="Team" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<svg className="lucide lucide-users-2 w-5 h-5" data-lucide="users-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
</button>
<button aria-label="Settings" className="p-3 text-slate-400 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
<button aria-label="Logout" className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200">
<svg className="lucide lucide-log-out w-5 h-5" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
</button>
</aside>

<main className="flex-1 flex flex-col gap-8 md:p-8 overflow-hidden pt-6 pr-6 pb-6 pl-6">

<header className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: `0.1s`}}>
<div className="flex justify-between items-center">
<div className="">
<h1 className="md:text-3xl bg-clip-text text-2xl font-semibold text-transparent tracking-tight bg-gradient-to-r from-slate-800 to-slate-600">
              Welcome back, Sarah
            </h1>
<div className="flex items-center gap-2 text-slate-500 text-sm mt-1">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">Monday, December 18th • Q4 Performance Overview</span>
</div>
</div>
<div className="flex gap-4 items-center">
<div className="relative">
<input className="pl-10 pr-4 py-3 w-48 md:w-64 rounded-2xl bg-white/70 backdrop-blur-md text-sm border border-white/20 outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all duration-200" placeholder="Search insights..." type="text" />
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<button className="hover:bg-white/80 hover:shadow-md transition-all duration-200 relative bg-white/60 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<svg className="lucide lucide-bell w-[20px] h-[20px]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`, color: `rgb(71, 85, 105)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
</button>
<button className="hover:bg-white/80 hover:shadow-md transition-all duration-200 relative bg-white/60 rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm">
<svg className="lucide lucide-user lucide-bell w-[20px] h-[20px]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(71, 85, 105)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</button></div>
</div>
</header>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: `0.2s`}}>
<div className="flex justify-between items-center">
<h2 className="text-xl font-medium tracking-tight">Key Performance Indicators</h2>
<div className="flex items-center gap-2 text-sm text-slate-500">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
<span>Updated 5 minutes ago</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-violet-200/50 opacity-0 animate-scale-in" style={{animationDelay: `0.3s`}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg">
<svg className="lucide lucide-rocket w-6 h-6 text-white" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">+18%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Active Projects</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">47</p>
<p className="text-xs text-slate-400">12 launched this quarter</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-blue-200/50 opacity-0 animate-scale-in" style={{animationDelay: `0.4s`}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg">
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">+12%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Team Efficiency</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">94%</p>
<p className="text-xs text-slate-400">Above target by 8%</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-200/50 opacity-0 animate-scale-in" style={{animationDelay: `0.5s`}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg">
<svg className="lucide lucide-trending-up w-6 h-6 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">+24%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Revenue Growth</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">$2.4M</p>
<p className="text-xs text-slate-400">Quarterly increase</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>

<div className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-purple-200/50 opacity-0 animate-scale-in" style={{animationDelay: `0.6s`}}>
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg">
<svg className="lucide lucide-heart w-6 h-6 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<span className="text-xs font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">+7%</span>
</div>
<div>
<p className="text-sm text-slate-500 mb-1">Client Satisfaction</p>
<p className="text-3xl font-semibold text-slate-800 mb-1">98.5%</p>
<p className="text-xs text-slate-400">Based on 234 reviews</p>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: `0.4s`}}>
<h2 className="text-xl font-medium tracking-tight">Business Analytics</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">


<div className="lg:col-span-2 bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-white/20 opacity-0 animate-scale-in" style={{animationDelay: `0.6s`}}>
<div className="flex justify-between items-center mb-6">
<div className="">
<h3 className="text-lg font-medium text-slate-800">Monthly Revenue Trends</h3>
<p className="text-sm text-slate-500">Comparing Q3 vs Q4 performance</p>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 text-xs bg-violet-100 text-violet-600 rounded-lg">Q4</button>
<button className="px-3 py-1 text-xs text-slate-500 hover:bg-slate-100 rounded-lg">Q3</button>
</div>
</div>
<div className="relative">
<canvas className="w-full h-64" height="512" id="revenueChart" style={{display: `block`, boxSizing: `border-box`, height: `256px`, width: `747px`}} width="1494"></canvas>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-6 opacity-0 animate-slide-up" style={{animationDelay: `0.6s`}}>
<div className="flex justify-between items-center">
<h2 className="text-xl font-medium tracking-tight">Recent Activity</h2>
<button className="text-sm text-violet-600 hover:text-violet-700 flex items-center gap-1">
            View all <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-lg border border-white/20 overflow-hidden opacity-0 animate-scale-in" style={{animationDelay: `0.7s`}}>
<div className="overflow-x-auto">
<table className="min-w-full">
<thead className="bg-slate-50/50">
<tr className="">
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">User</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Action</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Time</th>
<th className="py-4 px-6 text-left text-sm font-medium text-slate-600">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" />
<span className="text-sm font-medium text-slate-800">Alex Chen</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">Completed Project Alpha</td>
<td className="py-4 px-6 text-sm text-slate-500">2 hours ago</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">Completed</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" />
<span className="text-sm font-medium text-slate-800">Maya Rodriguez</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">Updated client proposal</td>
<td className="py-4 px-6 text-sm text-slate-500">4 hours ago</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">In Progress</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<img alt="" className="w-8 h-8 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" />
<span className="text-sm font-medium text-slate-800">James Wilson</span>
</div>
</td>
<td className="py-4 px-6 text-sm text-slate-600">Scheduled team meeting</td>
<td className="py-4 px-6 text-sm text-slate-500">6 hours ago</td>
<td className="py-4 px-6">
<span className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">Scheduled</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
