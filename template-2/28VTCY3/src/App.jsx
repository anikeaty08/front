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



  // Initialize Chart.js
  const ctx = document.getElementById('revenueChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Revenue',
        data: [65000, 78000, 85000, 92000, 88000, 94000],
        borderColor: 'rgb(99, 102, 241)',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });

  // Counter animation
  function animateCounters() {
    const counters = document.querySelectorAll('.number-counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const increment = target / 100;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.textContent = counter.textContent.includes('$') ? `$${target.toLocaleString()}` : target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = counter.textContent.includes('$') ? `$${Math.floor(current).toLocaleString()}` : Math.floor(current).toLocaleString();
        }
      }, 20);
    });
  }

  // Initialize animations on page load
  window.addEventListener('load', () => {
    setTimeout(animateCounters, 1000);
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full opacity-20 animate-float"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-300 to-purple-300 rounded-full opacity-20 animate-float" style={{animationDelay: `-3s`}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-10 animate-pulse-slow"></div>
</div>

<aside className="opacity-0 animate-fade-in-left fixed z-30 inset-y-0 left-0 w-16 md:w-20 glass-effect flex flex-col transition-all duration-500 hover:shadow-2xl hover:w-20 md:hover:w-24 border-r pt-6 pb-6 shadow-2xl items-center">
<div className="flex flex-col space-y-8">
<div className="transition-all duration-300 cursor-pointer hover:text-indigo-700 animate-glow text-indigo-600">
<div className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm tracking-tight bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>NX</div>
</div>
<button className="p-3 rounded-xl transition-all duration-300 group text-gray-400 hover:text-indigo-600 hover:bg-white/50 hover:shadow-lg transform hover:scale-110">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path className="" d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</button>
<button className="p-3 rounded-xl transition-all duration-300 text-indigo-600 bg-white/80 shadow-lg backdrop-blur-sm transform scale-110">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</button>
<button className="p-3 rounded-xl transition-all duration-300 text-gray-400 hover:text-indigo-600 hover:bg-white/50 hover:shadow-lg transform hover:scale-110">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</button>
<button className="p-3 rounded-xl transition-all duration-300 text-gray-400 hover:text-indigo-600 hover:bg-white/50 hover:shadow-lg transform hover:scale-110">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</button>
<button className="p-3 rounded-xl transition-all duration-300 text-gray-400 hover:text-indigo-600 hover:bg-white/50 hover:shadow-lg transform hover:scale-110">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</button>
</div>
<div className="mt-auto">
<button className="p-3 rounded-xl transition-all duration-300 text-gray-400 hover:text-indigo-600 hover:bg-white/50 hover:shadow-lg transform hover:scale-110">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>
</aside>

<main className="md:ml-20 min-h-screen ml-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<header className="opacity-0 animate-slide-down delay-100 flex flex-col lg:flex-row lg:items-center justify-between mb-10">
<div>
<h1 className="text-3xl lg:text-4xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2 font-manrope font-semibold" style={{}}>Good morning, Marcus ✨</h1>
<button className="flex items-center text-gray-500 group transition-all duration-300 hover:text-gray-700">
<span className="text-base font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Your weekly financial overview</span>
<svg className="lucide lucide-chevron-down w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="flex items-center space-x-4 mt-6 lg:mt-0">
<div className="relative">
<svg className="lucide lucide-search absolute left-4 top-3.5 w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="pl-12 pr-4 py-3 w-72 rounded-2xl border-0 glass-effect shadow-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all duration-300 placeholder-gray-400" placeholder="Search transactions..." type="text" />
</div>
<button className="p-3 rounded-2xl glass-effect shadow-lg hover:shadow-xl transition-all duration-300 relative group transform hover:scale-105">
<svg className="lucide lucide-bell w-5 h-5 text-gray-600 group-hover:text-indigo-600 transition-colors duration-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-pulse-slow shadow-lg"></div>
</button>
<div className="flex items-center space-x-3 glass-effect px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
<img alt="Marcus Chen" className="w-12 h-12 object-cover border-white border-2 rounded-xl shadow-md" src="/assets/6653564f-d2bb-4c35-8fef-be58ac89ffe0_320w.jpg" />
<div className="hidden md:block">
<p className="text-sm font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Marcus Chen</p>
<p className="text-xs text-gray-500 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Chief Financial Officer</p>
</div>
</div>
</div>
</header>

<section className="mb-12">
<div className="flex items-center justify-between mb-8">
<h2 className="opacity-0 animate-fade-in-up delay-200 text-2xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-manrope font-semibold" style={{}}>Financial Overview</h2>
<button className="opacity-0 animate-fade-in-up delay-200 text-gray-500 flex items-center space-x-2 glass-effect px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
<span className="text-sm font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>This month</span>
<svg className="lucide lucide-chevron-down w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="opacity-0 animate-scale-in delay-300 relative glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-xs font-bold rounded-full px-3 py-1.5 text-white shadow-lg animate-pulse-slow font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+28%</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg">
<svg className="lucide lucide-trending-up w-6 h-6 text-white" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-sm text-gray-500 mb-3 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Total Revenue</p>
<p className="text-3xl mb-2 text-gray-900 number-counter font-manrope font-semibold" data-target="847293" style={{}}>$186,404</p>
<p className="text-xs text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+$23,105 from last month</p>
</div>
<div className="opacity-0 animate-scale-in delay-400 relative glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-xs font-bold rounded-full px-3 py-1.5 text-white shadow-lg animate-pulse-slow font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+15%</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg">
<svg className="lucide lucide-file-check w-6 h-6 text-white" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<p className="text-sm text-gray-500 mb-3 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Pending Approvals</p>
<p className="text-3xl mb-2 text-gray-900 number-counter font-manrope font-semibold" data-target="127" style={{}}>27</p>
<p className="text-xs text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>18 approved today</p>
</div>
<div className="opacity-0 animate-scale-in delay-500 relative glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-red-500 to-red-600 text-xs font-bold rounded-full px-3 py-1.5 text-white shadow-lg animate-pulse-slow font-sans" style={{transition: `outline 0.1s ease-in-out`}}>-8%</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
<svg className="lucide lucide-x-circle w-6 h-6 text-white" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
</div>
<p className="text-sm text-gray-500 mb-3 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Rejected Claims</p>
<p className="text-3xl mb-2 text-gray-900 number-counter font-manrope font-semibold" data-target="23" style={{}}>5</p>
<p className="text-xs text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>3 rejected this week</p>
</div>
<div className="opacity-0 animate-scale-in delay-600 relative glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-xs font-bold rounded-full px-3 py-1.5 text-white shadow-lg animate-pulse-slow font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+12%</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg">
<svg className="lucide lucide-clock w-6 h-6 text-white" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<p className="text-sm text-gray-500 mb-3 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Under Review</p>
<p className="text-3xl mb-2 text-gray-900 number-counter font-manrope font-semibold" data-target="94" style={{}}>20</p>
<p className="text-xs text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Average 2.3 days</p>
</div>
<div className="opacity-0 animate-scale-in delay-700 relative glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 border border-white/20">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
<div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-xs font-bold rounded-full px-3 py-1.5 text-white shadow-lg animate-pulse-slow font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+35%</div>
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-green-500 to-green-600 shadow-lg">
<svg className="lucide lucide-check-circle w-6 h-6 text-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<p className="text-sm text-gray-500 mb-3 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Completed</p><p className="text-3xl mb-2 text-gray-900 number-counter font-manrope font-semibold" data-target="1456" style={{}}>320</p>
<p className="text-xs text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+412 this month</p>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">

<div className="opacity-0 animate-fade-in-up delay-800 xl:col-span-2 glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-bold text-gray-900 mb-2 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Revenue Analytics</h3>
<p className="text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Monthly performance overview</p>
</div>
<div className="flex items-center space-x-3">
<button className="text-xs font-medium px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 hover:bg-indigo-200 transition-all duration-300 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>6M</button>
<button className="text-xs font-medium px-4 py-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-all duration-300 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>1Y</button>
</div>
</div>
<div className="h-80">
<canvas height="640" id="revenueChart" style={{display: `block`, boxSizing: `border-box`, height: `320px`, width: `734px`}} width="1468"></canvas>
</div>
</div>

<div className="opacity-0 animate-fade-in-right delay-900 glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20">
<h3 className="text-xl font-bold text-gray-900 mb-6 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Quick Actions</h3>
<div className="space-y-4">
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>New Invoice</span>
</div>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path></svg>
</div>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Export Report</span>
</div>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Team Analytics</span>
</div>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
<h4 className="font-semibold text-gray-900 mb-3 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Recent Activity</h4>
<div className="space-y-3">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<p className="text-sm text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Invoice #1847 approved</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<p className="text-sm text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>New client onboarded</p>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<p className="text-sm text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Payment pending review</p>
</div>
</div>
</div>
</div>
</div>

<section className="opacity-0 animate-fade-in-up delay-1000">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent font-manrope font-semibold" style={{}}>Recent Transactions</h2>
<button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm flex items-center space-x-2 transition-all duration-300 group">
<span className="font-sans" style={{transition: `outline 0.1s ease-in-out`}}>View all</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="glass-effect rounded-3xl shadow-xl border border-white/20 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full">
<thead className="bg-gray-50/50">
<tr>
<th className="px-8 py-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Transaction</th>
<th className="px-6 py-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Amount</th>
<th className="px-6 py-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Status</th>
<th className="px-6 py-6 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Date</th>
<th className="px-8 py-6 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-all duration-300">
<td className="px-8 py-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-arrow-down-right text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</div>
<div>
<p className="font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Office Supplies</p>
<p className="text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Staples Inc.</p>
</div>
</div>
</td>
<td className="px-6 py-6 font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>-$2,847.50</td>
<td className="px-6 py-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Completed</span>
</td>
<td className="px-6 py-6 text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Oct 15, 2024</td>
<td className="px-8 py-6 text-right">
<button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
<svg className="lucide lucide-more-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-all duration-300">
<td className="px-8 py-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-arrow-up-right text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7 17 10-10"></path><path d="M7 7h10v10"></path></svg>
</div>
<div>
<p className="font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Client Payment</p>
<p className="text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Acme Corporation</p>
</div>
</div>
</td>
<td className="px-6 py-6 font-semibold text-green-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>+$15,750.00</td>
<td className="px-6 py-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Completed</span>
</td>
<td className="px-6 py-6 text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Oct 14, 2024</td>
<td className="px-8 py-6 text-right">
<button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
<svg className="lucide lucide-more-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-all duration-300">
<td className="px-8 py-6">
<div className="flex items-center space-x-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
<svg className="lucide lucide-clock text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Software License</p>
<p className="text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Adobe Systems</p>
</div>
</div>
</td>
<td className="px-6 py-6 font-semibold text-gray-900 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>-$4,200.00</td>
<td className="px-6 py-6">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Pending</span>
</td>
<td className="px-6 py-6 text-sm text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Oct 13, 2024</td>
<td className="px-8 py-6 text-right">
<button className="text-gray-400 hover:text-gray-600 transition-colors duration-300">
<svg className="lucide lucide-more-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
