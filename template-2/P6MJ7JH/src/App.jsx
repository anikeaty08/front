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

    // Momentum chart
    const ctx = document.getElementById('momentumChart');
    if (ctx) {
      const chart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          datasets: [{
            data: [12, 16, 14, 20, 26, 24, 30],
            borderColor: '#34d399',
            backgroundColor: 'rgba(52, 211, 153, 0.12)',
            borderWidth: 2,
            fill: true,
            tension: 0.4,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: true } },
          scales: {
            x: { display: false },
            y: { display: false, beginAtZero: true }
          }
        }
      });
    }

    // Mobile nav
    const nav = document.querySelector('nav ul');
    const mq = () => {
      if (!nav) return;
      if (window.innerWidth < 1024) nav.classList.add('hidden'); else nav.classList.remove('hidden');
    };
    mq();
    window.addEventListener('resize', mq);
  
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
      
<div className="min-h-screen">
<div className="max-w-7xl mr-auto ml-auto pt-6 pr-4 pb-10 pl-4 sm:px-6 lg:px-8">

<header className="relative overflow-hidden opacity-0 rounded-3xl mb-10 shadow-2xl translate-y-4 bg-slate-900" style={{animation: `fadeInUp 0.8s ease-out 0.05s forwards`}}>
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-900"></div>
<div className="absolute -top-20 -right-16 w-[36rem] h-[36rem] bg-indigo-500/20 blur-3xl rounded-full"></div>
<div className="absolute -bottom-24 -left-10 w-[28rem] h-[28rem] bg-emerald-500/20 blur-3xl rounded-full"></div>
<img alt="Global network" className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" />
</div>

<nav className="relative z-10 flex items-center justify-between px-6 lg:px-8 pt-6">
<div className="flex items-center space-x-8">
<div className="flex items-center space-x-3 text-white text-xl tracking-tight">
<div className="w-9 h-9 bg-white/10 rounded-xl backdrop-blur flex items-center justify-center border border-white/15">
<svg className="w-5 h-5 text-white" data-lucide="radar" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0-8-8"></path><path d="M12 12V4"></path><path d="m12 12 4 4"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="font-[Plus Jakarta Sans] font-medium">Synca</span>
</div>
<ul className="hidden lg:flex items-center space-x-8 text-white/90 text-sm">
<li className="hover:text-white cursor-pointer transition-colors">Product</li>
<li className="hover:text-white cursor-pointer transition-colors">How it works</li>
<li className="hover:text-white cursor-pointer transition-colors">Safety</li>
<li className="hover:text-white cursor-pointer transition-colors">Stories</li>
</ul>
</div>
<div className="flex items-center space-x-3">
<button className="hidden md:flex items-center px-3 py-2 rounded-full text-sm text-white/80 hover:text-white hover:bg-white/10 border border-white/15 backdrop-blur transition-all">
<svg className="w-4 h-4 mr-2 text-white/80" data-lucide="log-in" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v3"></path><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path></svg>
              Sign in
            </button>
<button className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 border border-white/20 transition-all">
<svg className="w-4 h-4 mr-2 text-amber-500" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"></path><path d="M5 3l.9 2.1L8 6l-2.1.9L5 9l-.9-2.1L2 6l2.1-.9L5 3z"></path><path d="M19 13l.9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13z"></path></svg>
              Request access
            </button>
</div>
</nav>

<div className="relative z-10 lg:px-8 pt-12 pr-6 pb-12 pl-6">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
<div className="flex-1 max-w-2xl">
<h1 className="text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl font-[Plus Jakarta Sans] font-medium text-balance">
                Find your people anywhere in the world, in minutes.
              </h1>
<p className="text-white/80 text-lg mt-4">
                AI powered syncing for entrepreneurs, creators, and explorers. Connect over shared passions, not just location.
              </p>
<div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-sm text-white/80">
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
<span>Trusted by early nomads</span>
</div>
<span className="hidden sm:inline text-white/40">•</span>
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
<span>Private beta</span>
</div>
<span className="hidden sm:inline text-white/40">•</span>
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
<span>No credit card</span>
</div>
</div>

<div className="mt-10 bg-white/5 border border-white/15 rounded-2xl p-5 backdrop-blur">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center">
<svg className="w-4 h-4 text-emerald-300" data-lucide="link-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 4"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L13 20"></path></svg>
</div>
<h3 className="text-white font-medium">Example interests matching</h3>
</div>
<span className="text-white/70 text-xs">Two profiles syncing over shared interests & location</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="col-span-1 md:col-span-1">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm">
<svg className="w-3.5 h-3.5 mr-1.5 text-white/80" data-lucide="map-pin" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Lisbon
                      </span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm">Yoga</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm">DeFi</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm">Pickleball</span>
<span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-sm">Coworking</span>
</div>
</div>
<div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white/5 rounded-xl border border-white/15 p-4">
<div className="flex items-center space-x-3">
<img alt="Jacob" className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=120&auto=format&fit=crop" />
<div>
<div className="text-white font-medium">Jacob</div>
<div className="text-white/70 text-xs">Entrepreneur • Lisbon</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2.5 py-1 text-xs rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-300/20">Pickleball</span>
<span className="px-2.5 py-1 text-xs rounded-full bg-indigo-400/15 text-indigo-200 border border-indigo-300/20">Web3</span>
<span className="px-2.5 py-1 text-xs rounded-full bg-amber-400/15 text-amber-200 border border-amber-300/20">Entrepreneurship</span>
</div>
</div>

<div className="bg-white/5 rounded-xl border border-white/15 p-4">
<div className="flex items-center space-x-3">
<img alt="Sean" className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" />
<div>
<div className="text-white font-medium">Sean</div>
<div className="text-white/70 text-xs">Product • Lisbon</div>
</div>
</div>
<div className="flex flex-wrap gap-2 mt-3">
<span className="px-2.5 py-1 text-xs rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-300/20">Pickleball</span>
<span className="px-2.5 py-1 text-xs rounded-full bg-indigo-400/15 text-indigo-200 border border-indigo-300/20">Web3</span>
<span className="px-2.5 py-1 text-xs rounded-full bg-amber-400/15 text-amber-200 border border-amber-300/20">Entrepreneurship</span>
</div>
</div>
</div>
</div>

<div className="mt-5">
<div className="flex items-center justify-between">
<div className="text-white/80 text-sm">Match momentum this week</div>
<div className="text-emerald-300 text-sm font-medium">+24%</div>
</div>
<div className="mt-2 h-32 rounded-lg bg-white/5 border border-white/10 p-2">
<div className="w-full h-full">
<div className="w-full h-full">
<canvas className="w-full h-full" id="momentumChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block lg:ml-12">
<div className="w-80 h-80 relative overflow-hidden bg-white/5 border border-white/15 rounded-3xl backdrop-blur">
<img alt="People syncing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3">
<div className="flex items-center justify-between bg-white/10 border border-white/15 rounded-xl px-3 py-2">
<div className="flex items-center space-x-2">
<svg className="w-4 h-4 text-white/90" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="text-white/90 text-sm">Live sync suggestion</span>
</div>
<span className="text-white/70 text-xs">Lisbon • 3 min</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.15s forwards`}}>
<div className="flex items-center justify-between mb-5">
<h2 className="text-2xl sm:text-3xl tracking-tight font-[Plus Jakarta Sans] font-semibold text-slate-900">What could your sync look like?</h2>
<div className="hidden sm:flex items-center space-x-2 text-sm text-slate-600">
<svg className="w-4 h-4 text-slate-500" data-lucide="compass" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m16.24 7.76-3.48 7-7 3.48 3.48-7 7-3.48Z"></path></svg>
<span>Curated by city and intent</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<img alt="Entrepreneur in Tokyo" className="w-full h-36 rounded-xl object-cover" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop" />
<div className="mt-4">
<div className="text-xs text-slate-500">Entrepreneur in Tokyo</div>
<div className="mt-1 flex items-center flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Founders</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Pitch Night</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Tokyo</span>
</div>
<p className="mt-3 text-sm text-slate-700">Pitch night to izakaya dinner to founders' after hours.</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-slate-500" data-lucide="calendar" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
                  Shibuya pitch night + late izakaya networking
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-emerald-600" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Meet 5 to 7 founders and 1 to 2 angels
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-indigo-600" data-lucide="clock-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l2 2"></path></svg>
                  Best time: Tue Thu 7 to 10pm
                </li>
</ul>
<p className="mt-2 text-sm text-slate-700">Set 2 follow up coffees and a product demo.</p>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<img alt="Crypto trader in Lisbon" className="w-full h-36 rounded-xl object-cover" src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=800&auto=format&fit=crop" />
<div className="mt-4">
<div className="text-xs text-slate-500">Crypto trader in Lisbon</div>
<div className="mt-1 flex items-center flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Web3</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Trading</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Lisbon</span>
</div>
<p className="mt-3 text-sm text-slate-700">Morning charts to afternoon meetup to sunset debrief.</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-slate-500" data-lucide="calendar" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
                  LX Factory meetup with collectors and devs
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-emerald-600" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Find 1 to 3 trading accountability partners
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-indigo-600" data-lucide="clock-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l2 2"></path></svg>
                  Best time: Wed Fri 4 to 7pm
                </li>
</ul>
<p className="mt-2 text-sm text-slate-700">Daily accountability thread + shared watchlist.</p>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<img alt="Designer in Bali" className="w-full h-36 rounded-xl object-cover" src="https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=800&auto=format&fit=crop" />
<div className="mt-4">
<div className="text-xs text-slate-500">Designer in Bali</div>
<div className="mt-1 flex items-center flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Design</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Wellness</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Bali</span>
</div>
<p className="mt-3 text-sm text-slate-700">Beach coworking to critique circle to cacao ceremony.</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-slate-500" data-lucide="calendar" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M3 10h18"></path></svg>
                  Canggu beach cowork + Figma critique session
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-emerald-600" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Meet 4 to 6 UI brand designers
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-indigo-600" data-lucide="clock-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l2 2"></path></svg>
                  Best time: Mon Wed 10am to 2pm
                </li>
</ul>
<p className="mt-2 text-sm text-slate-700">New Dribbble collab and a paid freelance lead.</p>
</div>
</article>

<article className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<img alt="Hiker in Vancouver" className="w-full h-36 rounded-xl object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div className="mt-4">
<div className="text-xs text-slate-500">Hiker in Vancouver</div>
<div className="mt-1 flex items-center flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Outdoors</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Health</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Vancouver</span>
</div>
<p className="mt-3 text-sm text-slate-700">Trail planning to Saturday hike to brewery recap.</p>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-slate-500" data-lucide="map" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6l6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"></path><path d="M9 3v15"></path><path d="M15 6v15"></path></svg>
                  Pick an intermediate trail near North Shore
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-emerald-600" data-lucide="users" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  Group of 5 to 8 mixed experience hikers
                </li>
<li className="flex items-center text-slate-700">
<svg className="w-4 h-4 mr-2 text-indigo-600" data-lucide="clock-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 7v5l2 2"></path></svg>
                  Best time: Sat 8am to 2pm
                </li>
</ul>
<p className="mt-2 text-sm text-slate-700">New weekly hiking group and gear tips.</p>
</div>
</article>
</div>
</section>

<section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.25s forwards`}}>
<div className="lg:col-span-1 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 blur-2xl rounded-full"></div>
<div className="flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-9 h-9 bg-white/15 rounded-lg backdrop-blur flex items-center justify-center border border-white/20">
<svg className="w-5 h-5 text-white" data-lucide="plane" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m10.18 13.43 1.77 8.03L13 18l7-5-7-5-1.05-3.46-1.77 8.03L2 13l8.18.43Z"></path></svg>
</div>
<div className="text-lg font-[Plus Jakarta Sans] font-semibold tracking-tight">TravelFi</div>
</div>
</div>
<p className="mt-4 text-white/90">Because meeting great people shouldn't be left to chance.</p>
<button className="mt-5 inline-flex items-center px-4 py-2 rounded-xl text-slate-900 bg-white hover:bg-slate-100 transition border border-white/20">
<svg className="w-4 h-4 mr-2 text-amber-500" data-lucide="sparkles" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z"></path><path d="M5 3l.9 2.1L8 6l-2.1.9L5 9l-.9-2.1L2 6l2.1-.9L5 3z"></path><path d="M19 13l.9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13z"></path></svg>
            Learn more
          </button>
</div>
<div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-[Plus Jakarta Sans] font-semibold tracking-tight text-slate-900">Outcome first benefits that make travel and remote life richer.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="timer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2h4"></path><path d="M12 14v-4"></path><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div className="mt-3 font-medium text-slate-900">Find your crew fast</div>
<p className="text-sm text-slate-600 mt-1">From local founders to fellow photographers, discover people who get you.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="globe" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path></svg>
</div>
<div className="mt-3 font-medium text-slate-900">Travel without feeling alone</div>
<p className="text-sm text-slate-600 mt-1">Land anywhere with meaningful connections waiting.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="message-square" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"></path></svg>
</div>
<div className="mt-3 font-medium text-slate-900">Go beyond small talk</div>
<p className="text-sm text-slate-600 mt-1">Sync on passions and goals, not just proximity.</p>
</div>
</div>
</div>
</section>

<section className="mt-12 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.35s forwards`}}>
<div className="rounded-2xl border border-slate-200 bg-white p-6">
<div className="flex items-center justify-between">
<h3 className="text-xl font-[Plus Jakarta Sans] font-semibold tracking-tight text-slate-900">Built for Safety & Signal</h3>
<div className="hidden sm:flex items-center text-xs text-slate-500">
<svg className="w-4 h-4 mr-1.5 text-emerald-600" data-lucide="shield-check" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
              Verified profiles and simple controls
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="toggle-right" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="7" width="22" x="1" y="5"></rect><circle cx="16" cy="12" r="3"></circle></svg>
</div>
<div className="mt-3 font-medium text-slate-900">You're in control</div>
<p className="text-sm text-slate-600 mt-1">Only connect when you're ready. No auto matching, no pressure, no location sharing.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="target" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2v20"></path><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<div className="mt-3 font-medium text-slate-900">Profile first, not proximity first</div>
<p className="text-sm text-slate-600 mt-1">Everyone's matched on shared interests and intent, not just who is nearby.</p>
</div>
<div className="rounded-xl border border-slate-200 p-4">
<div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
<svg className="w-4.5 h-4.5" data-lucide="ban" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.9 4.9 14.2 14.2"></path></svg>
</div>
<div className="mt-3 font-medium text-slate-900">Report & block tools</div>
<p className="text-sm text-slate-600 mt-1">Simple, effective controls to keep your experience safe and distraction free.</p>
</div>
</div>
</div>
</section>

<section className="mt-12 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.45s forwards`}}>
<div className="rounded-2xl overflow-hidden border border-slate-200 bg-white">
<div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between">
<h3 className="text-xl font-[Plus Jakarta Sans] font-semibold tracking-tight text-slate-900">From profile to people in 3 easy steps.</h3>
<span className="text-sm text-slate-500">Group of people in a social setting</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="p-6 border-r border-slate-200">
<div className="text-xs text-slate-500">01</div>
<div className="mt-2 font-medium text-slate-900">Set your vibe</div>
<p className="text-sm text-slate-600 mt-1">Add profession, country, and interests.</p>
</div>
<div className="p-6 border-r border-slate-200">
<div className="text-xs text-slate-500">02</div>
<div className="mt-2 font-medium text-slate-900">Let AI sync you</div>
<p className="text-sm text-slate-600 mt-1">We filter and find your closest matches.</p>
</div>
<div className="p-6">
<div className="text-xs text-slate-500">03</div>
<div className="mt-2 font-medium text-slate-900">Connect & meet</div>
<p className="text-sm text-slate-600 mt-1">Send a nudge, join a group, or grab coffee.</p>
</div>
</div>
</div>
</section>

<section className="mt-12 grid grid-cols-1 lg:grid-cols-4 gap-6 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.55s forwards`}}>
<div className="lg:col-span-1">
<h3 className="text-2xl tracking-tight font-[Plus Jakarta Sans] font-semibold text-slate-900">Nomads are already syncing.</h3>
<p className="text-slate-600 mt-2 text-sm">Real outcomes that start online and move to real life.</p>
</div>
<div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center space-x-3">
<img alt="Alex" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" />
<div>
<div className="font-medium text-slate-900">Alex</div>
<div className="text-xs text-slate-500">SaaS Founder</div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Founders</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Dinner</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Tokyo</span>
</div>
<p className="mt-3 text-sm text-slate-700">"Landed Monday, dinner with 3 founders by Tuesday."</p>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center space-x-3">
<img alt="Nadia" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div>
<div className="font-medium text-slate-900">Nadia</div>
<div className="text-xs text-slate-500">Product Designer</div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Web3</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Design</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Bali</span>
</div>
<p className="mt-3 text-sm text-slate-700">"Finally met other Web3 designers in Bali. Instant circle."</p>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
<div className="flex items-center space-x-3">
<img alt="Mateo" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=120&auto=format&fit=crop" />
<div>
<div className="font-medium text-slate-900">Mateo</div>
<div className="text-xs text-slate-500">Growth Lead</div>
</div>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Growth</span>
<span className="px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 border border-slate-200">Outdoors</span>
</div>
<p className="mt-3 text-sm text-slate-700">"Turned a solo trip into a mastermind week."</p>
</div>
</div>
</section>

<section className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.65s forwards`}}>

<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="text-lg font-[Plus Jakarta Sans] font-semibold tracking-tight text-slate-900">Dial in your perfect sync.</h3>
<p className="text-sm text-slate-600 mt-1">Use smart filters to find the most relevant connections for your journey.</p>
<div className="mt-4">
<div className="text-xs text-slate-500 mb-2">Filters</div>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition">NFT Community</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition">Trip Duration</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition">Interests</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 transition">Events</button>
</div>
<div className="mt-5 rounded-xl border border-slate-200 p-4 bg-slate-50">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-700">Preview</div>
<span className="text-xs text-slate-500">Adding filters narrows your pool to the most relevant people.</span>
</div>
<div className="mt-4 rounded-lg bg-white border border-slate-200 p-4">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center">
<span className="text-xs font-medium text-slate-700">PM</span>
</div>
<div>
<div className="text-sm font-medium text-slate-900">PM • Singapore</div>
<div className="text-xs text-slate-500">Product Manager</div>
</div>
</div>
<button className="text-xs px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">View</button>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Azuki</span>
<span className="px-2 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">Token2049</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-6">
<h3 className="text-lg font-[Plus Jakarta Sans] font-semibold tracking-tight text-slate-900">Questions, answered.</h3>
<p className="text-sm text-slate-600 mt-1">Clear, honest details on privacy, matching, and how meetups work.</p>
<div className="mt-4 space-y-3">
<div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200">
<svg className="w-4.5 h-4.5 text-emerald-600 mt-0.5" data-lucide="shield" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<div>
<div className="text-sm font-medium text-slate-900">How is my location used?</div>
<p className="text-sm text-slate-600">We never share your live location. You choose when and with whom to connect.</p>
</div>
</div>
<div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200">
<svg className="w-4.5 h-4.5 text-indigo-600 mt-0.5" data-lucide="bot" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path><path d="M12 7V4"></path></svg>
<div>
<div className="text-sm font-medium text-slate-900">What does the AI do?</div>
<p className="text-sm text-slate-600">It ranks intent and shared interests to surface high signal people.</p>
</div>
</div>
<div className="flex items-start space-x-3 p-3 rounded-lg border border-slate-200">
<svg className="w-4.5 h-4.5 text-amber-600 mt-0.5" data-lucide="coffee" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h1a4 4 0 1 1 0 8h-1"></path><path d="M2 8h16v6a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4Z"></path><path d="M6 2v2"></path><path d="M10 2v2"></path><path d="M14 2v2"></path></svg>
<div>
<div className="text-sm font-medium text-slate-900">How do meets happen?</div>
<p className="text-sm text-slate-600">Start with a nudge or a group plan. Keep it easy and low pressure.</p>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
<h3 className="text-xl font-[Plus Jakarta Sans] font-semibold tracking-tight">Your next connection is just a sync away.</h3>
<p className="text-white/80 text-sm mt-1">Join early and be part of the first wave of explorers, builders, and creators using AI to meet anywhere.</p>
<div className="mt-4 flex flex-col sm:flex-row gap-3">
<input className="w-full sm:flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Enter your email" type="email" />
<button className="px-4 py-2.5 rounded-xl bg-white text-slate-900 border border-white/20 hover:bg-slate-100 transition">Request invite</button>
</div>
<div className="mt-3 text-xs text-white/70">Free during beta • No credit card required</div>
</div>
</section>

<footer className="mt-12 pt-6 border-t border-slate-200 opacity-0 translate-y-4" style={{animation: `fadeInUp 0.8s ease-out 0.75s forwards`}}>
<div className="flex flex-col sm:flex-row sm:items-center justify-between">
<div className="flex items-center space-x-2 text-slate-600">
<svg className="w-4 h-4 text-slate-600" data-lucide="radar" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20a8 8 0 1 0-8-8"></path><path d="M12 12V4"></path><path d="m12 12 4 4"></path><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm">Synca</span>
</div>
<ul className="flex items-center gap-4 mt-3 sm:mt-0 text-sm text-slate-600">
<li className="hover:text-slate-900 cursor-pointer">Privacy</li>
<li className="hover:text-slate-900 cursor-pointer">Terms</li>
<li className="hover:text-slate-900 cursor-pointer">Contact</li>
</ul>
</div>
</footer>
</div>
</div>


    </>
  );
}
