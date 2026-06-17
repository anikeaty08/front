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



      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        // Ensure consistent stroke width for all lucide SVGs
        document.querySelectorAll('svg.lucide').forEach(s => s.setAttribute('stroke-width', '1.5'));
      });

      // Today label
      const today = new Date();
      const opts = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
      const label = today.toLocaleDateString(undefined, opts);
      const todayEl = document.getElementById('todayLabel');
      if (todayEl) todayEl.textContent = label;

      // Chart
      const ctx = document.getElementById('usageChart');
      if (ctx) {
        const used = 72;
        document.getElementById('usagePercent').textContent = used + '%';
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Completed', 'In Progress', 'Upcoming', 'Blocked'],
            datasets: [{
              data: [28, 44, 20, 8],
              backgroundColor: [
                'rgb(16 185 129)',
                'rgb(56 189 248)',
                'rgb(251 191 36)',
                'rgb(244 63 94)'
              ],
              borderWidth: 0,
              hoverOffset: 3
            }]
          },
          options: {
            responsive: true,
            cutout: '68%',
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgb(23 23 23)',
                borderColor: 'rgba(255,255,255,0.08)',
                borderWidth: 1,
                padding: 10,
                displayColors: false
              }
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f" width="100%"></iframe></div>

<div className="sm:my-8 max-w-[1200px] lg:max-w-[1280px] xl:max-w-[1400px] 2xl:max-w-[1600px] h-screen flex mt-4 mr-auto mb-4 ml-auto items-center">
<div className="ring-1 ring-white/10 supports-[backdrop-filter]:bg-neutral-950/60 outline outline-1 outline-white/5 overflow-hidden bg-neutral-950/70 rounded-2xl mx-8 shadow-2xl backdrop-blur">

<div className="h-10 flex items-center justify-between px-3 sm:px-4 border-b border-white/10 bg-neutral-900/70">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-rose-500"></span>
<span className="h-3 w-3 rounded-full bg-amber-400"></span>
<span className="h-3 w-3 rounded-full bg-emerald-400"></span>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="text-xs text-neutral-300">Flow Pilot — Work Timeline</span>
</div>
<div className="flex items-center gap-1.5">
<button className="p-1.5 rounded-md hover:bg-neutral-800/70">
<svg className="lucide lucide-minus w-[18px] h-[18px] text-neutral-300" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="p-1.5 rounded-md hover:bg-neutral-800/70">
<svg className="lucide lucide-square w-[18px] h-[18px] text-neutral-300" data-lucide="square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="p-1.5 rounded-md hover:bg-neutral-800/70">
<svg className="lucide lucide-x w-[18px] h-[18px] text-neutral-300" data-lucide="x" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="flex flex-col lg:flex-row">

<aside className="hidden lg:flex lg:w-16 xl:w-20 flex-col gap-6 bg-neutral-900/60 pt-6 items-center">
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-menu w-5 h-5 text-neutral-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-grid w-5 h-5 text-neutral-400" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-inbox w-5 h-5 text-neutral-400" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-layers w-5 h-5 text-neutral-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-flag w-5 h-5 text-neutral-400" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-neutral-800/70">
<svg className="lucide lucide-settings w-5 h-5 text-neutral-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</aside>

<main className="flex-1">
<div className="sm:px-6 lg:px-8 pt-6 pr-4 pb-6 pl-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-400/20 to-sky-400/10 ring-1 ring-white/10 flex items-center justify-center">
<svg className="lucide lucide-radar w-5 h-5 text-emerald-400" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</div>
<h1 className="text-[22px] sm:text-2xl tracking-tight font-semibold">Flow Pilot</h1>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-neutral-400">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="" id="todayLabel">Thu, Aug 14, 2025</span>
<span className="ml-1 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-rose-500/15 text-rose-300 px-1.5 text-[11px]">1</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex bg-neutral-900/70 ring-1 ring-white/10 rounded-xl p-1">
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-300 bg-neutral-800/70">Day</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-neutral-200">Week</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-neutral-200">Month</button>
<button className="px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-400 hover:text-neutral-200">Year</button>
</div>
<button className="hidden sm:flex p-2 rounded-xl bg-neutral-900/70 ring-1 ring-white/10 hover:bg-neutral-800/70">
<svg className="lucide lucide-search w-5 h-5 text-neutral-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="relative p-2 rounded-xl bg-neutral-900/70 ring-1 ring-white/10 hover:bg-neutral-800/70">
<svg className="lucide lucide-bell w-5 h-5 text-neutral-300" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-neutral-950"></span>
</button>
<div className="flex items-center gap-2">
<img alt="Profile" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0dd1790c-456a-4f93-bfce-911a2196719b_800w.jpg"/>
<div className="hidden sm:flex flex-col leading-tight">
<span className="text-sm font-medium">Aria Velasquez</span>
<span className="text-[11px] text-neutral-400">Product Lead</span>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 xl:grid-cols-12 gap-6">

<section className="xl:col-span-8 2xl:col-span-9">

<div className="relative rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4 sm:p-6 overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-xl tracking-tight font-semibold">Work Timeline</h2>
<span className="text-xs text-neutral-400">Sprint 34</span>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>1 PM — 9 PM</span>
</div>
</div>

<div className="mt-4 hidden md:grid grid-cols-12 text-[11px] text-neutral-400">
<div className="col-span-3"></div>
<div className="col-span-9 grid grid-cols-9">
<div className="text-center">1</div>
<div className="text-center">2</div>
<div className="text-center">3</div>
<div className="text-center">4</div>
<div className="text-center">5</div>
<div className="text-center">6</div>
<div className="text-center">7</div>
<div className="text-center">8</div>
<div className="text-center">9</div>
</div>
</div>

<div className="mt-2 space-y-4">

<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
<div className="md:col-span-3 flex items-center gap-3">
<button className="hidden md:flex h-8 w-8 rounded-full bg-teal-500/15 text-teal-300 items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-pen-tool w-4 h-4" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</button>
<div>
<p className="text-sm font-medium">Design System</p>
<p className="text-xs text-neutral-400">Tokens &amp; patterns</p>
</div>
</div>
<div className="md:col-span-9">
<div className="relative h-10 w-full rounded-xl ring-1 ring-white/5 bg-neutral-950/40 overflow-hidden">

<div className="absolute inset-0 grid grid-cols-9">
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div>
<div></div>
</div>

<div className="absolute left-[4%] top-1/2 -translate-y-1/2 h-7 w-[28%] rounded-lg bg-gradient-to-r from-pink-400/30 to-fuchsia-400/20 ring-1 ring-pink-400/30 backdrop-blur-[2px] flex items-center justify-between px-3">
<span className="text-xs text-neutral-200">Audit (2h)</span>
<div className="flex -space-x-2">
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ef159f6c-238b-447a-8560-89ad7ba46090_320w.jpg"/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/94f325d2-00ce-48ec-9c3d-a87ff77bb836_320w.jpg"/>
</div>
</div>
<div className="absolute left-[40%] top-1/2 -translate-y-1/2 h-7 w-[22%] rounded-lg bg-gradient-to-r from-amber-400/30 to-orange-400/20 ring-1 ring-amber-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">Handoff (1.5h)</span>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6708bd8e-2bd1-4959-a58b-fcee27401479_320w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
<div className="md:col-span-3 flex items-center gap-3">
<button className="hidden md:flex h-8 w-8 rounded-full bg-sky-500/15 text-sky-300 items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</button>
<div>
<p className="text-sm font-medium">Mobile Apps</p>
<p className="text-xs text-neutral-400">iOS &amp; Android</p>
</div>
</div>
<div className="md:col-span-9">
<div className="relative h-10 w-full rounded-xl ring-1 ring-white/5 bg-neutral-950/40 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-9">
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className=""></div>
</div>
<div className="absolute left-[6%] top-1/2 -translate-y-1/2 h-7 w-[30%] rounded-lg bg-gradient-to-r from-teal-400/30 to-cyan-400/20 ring-1 ring-teal-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">API Hookup (2h)</span>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b33be0b-d1be-4f7e-99f3-df83494621cb_320w.jpg"/>
</div>
<div className="absolute left-[40%] top-1/2 -translate-y-1/2 h-7 w-[14%] rounded-lg bg-neutral-800/80 ring-1 ring-white/10 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-300">Break</span>
<svg className="lucide lucide-coffee w-4 h-4 text-neutral-400" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<div className="absolute left-[57%] top-1/2 -translate-y-1/2 h-7 w-[24%] rounded-lg bg-gradient-to-r from-blue-400/30 to-indigo-400/20 ring-1 ring-blue-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">QA Pass (1.5h)</span>
<div className="flex -space-x-2">
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b62eea8b-831c-41a3-b9b1-21f4c25de5e5_320w.jpg" style={{}}/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76672c59-0193-4795-ba6b-96fe356d9cab_320w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
<div className="md:col-span-3 flex items-center gap-3">
<button className="hidden md:flex h-8 w-8 rounded-full bg-fuchsia-500/15 text-fuchsia-300 items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-image w-4 h-4" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</button>
<div className="">
<p className="text-sm font-medium">Infographics</p>
<p className="text-xs text-neutral-400">Marketing kit</p>
</div>
</div>
<div className="md:col-span-9">
<div className="relative h-10 w-full rounded-xl ring-1 ring-white/5 bg-neutral-950/40 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-9">
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className=""></div>
</div>
<div className="absolute left-[30%] top-1/2 -translate-y-1/2 h-7 w-[26%] rounded-lg bg-gradient-to-r from-purple-400/30 to-violet-400/20 ring-1 ring-purple-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">Draft (2h)</span>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/18e7ffa9-6336-4e08-9af8-9fffea373570_320w.jpg"/>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
<div className="md:col-span-3 flex items-center gap-3">
<button className="hidden md:flex h-8 w-8 rounded-full bg-amber-500/15 text-amber-300 items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-code-2 w-4 h-4" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</button>
<div className="">
<p className="text-sm font-medium">Prototyping</p>
<p className="text-xs text-neutral-400">Interactive flows</p>
</div>
</div>
<div className="md:col-span-9">
<div className="relative h-10 w-full rounded-xl ring-1 ring-white/5 bg-neutral-950/40 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-9">
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className=""></div>
</div>
<div className="absolute left-[18%] top-1/2 -translate-y-1/2 h-7 w-[20%] rounded-lg bg-gradient-to-r from-amber-400/30 to-yellow-400/20 ring-1 ring-amber-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">Wire (1.5h)</span>
<div className="flex -space-x-2">
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a56382f-4c01-4cfc-9632-244a7ce4fa20_320w.jpg" style={{}}/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e7842fa-2930-4398-a1b1-829010b57b42_320w.jpg"/>
</div>
</div>
<div className="absolute left-[44%] top-1/2 -translate-y-1/2 h-7 w-[24%] rounded-lg bg-gradient-to-r from-cyan-400/30 to-sky-400/20 ring-1 ring-sky-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">Prototype (2h)</span>
<div className="flex -space-x-2">
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e3e53f-e4cc-4941-8fa1-f22b5b9379f1_320w.jpg"/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dcfa0419-bad7-43d5-b38d-50a6932d399b_320w.jpg"/>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 items-center gap-3">
<div className="md:col-span-3 flex items-center gap-3">
<button className="hidden md:flex h-8 w-8 rounded-full bg-blue-500/15 text-blue-300 items-center justify-center ring-1 ring-white/10">
<svg className="lucide lucide-shapes w-4 h-4" data-lucide="shapes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"></path><rect height="7" rx="1" width="7" x="3" y="14"></rect><circle cx="17.5" cy="17.5" r="3.5"></circle></svg>
</button>
<div className="">
<p className="text-sm font-medium">Brand Studio</p>
<p className="text-xs text-neutral-400">Graphics &amp; assets</p>
</div>
</div>
<div className="md:col-span-9">
<div className="relative h-10 w-full rounded-xl ring-1 ring-white/5 bg-neutral-950/40 overflow-hidden">
<div className="absolute inset-0 grid grid-cols-9">
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className="border-r border-white/5"></div>
<div className="border-r border-white/5"></div><div className="border-r border-white/5"></div><div className=""></div>
</div>
<div className="absolute left-[60%] top-1/2 -translate-y-1/2 h-7 w-[26%] rounded-lg bg-gradient-to-r from-sky-400/30 to-blue-400/20 ring-1 ring-sky-400/30 px-3 flex items-center justify-between">
<span className="text-xs text-neutral-200">Illustrations (2h)</span>
<div className="flex -space-x-2">
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="avatar" className="h-5 w-5 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-5 hidden md:flex justify-end">
<div className="w-full md:w-9/12 grid grid-cols-9 text-[11px] text-neutral-500">
<div className="text-center">1 PM</div>
<div className="text-center">2 PM</div>
<div className="text-center">3 PM</div>
<div className="text-center">4 PM</div>
<div className="text-center">5 PM</div>
<div className="text-center">6 PM</div>
<div className="text-center">7 PM</div>
<div className="text-center">8 PM</div>
<div className="text-center">9 PM</div>
</div>
</div>
</div>

<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold">Nebula UI Kit</h3>
<p className="text-xs text-neutral-400">Design &amp; Creative</p>
</div>
<button className="p-1.5 rounded-lg hover:bg-neutral-800/70">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-neutral-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<img alt="project cover" className="h-28 w-full ring-1 ring-white/10 object-cover rounded-xl mt-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/043dfbdb-4f34-4acf-91e6-0c39b81cef40_800w.jpg"/>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-neutral-400 flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 3 weeks left
                        </span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">Progress</span>
<span className="text-neutral-400">45%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-neutral-800 ring-1 ring-white/5">
<div className="h-2 w-[45%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="text-lg tracking-tight font-semibold">Orion Backend</h3>
<p className="text-xs text-neutral-400">ASP.NET Core</p>
</div>
<button className="p-1.5 rounded-lg hover:bg-neutral-800/70">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-neutral-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<img alt="server" className="h-28 w-full ring-1 ring-white/10 object-cover rounded-xl mt-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/575a1d5c-41e6-4663-bb47-6707f1af0af9_800w.jpg" style={{}}/>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<span className="text-xs text-neutral-400 flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 2 weeks left
                        </span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">Progress</span>
<span className="text-neutral-400">95%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-neutral-800 ring-1 ring-white/5">
<div className="h-2 w-[95%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-4">
<div className="flex items-start justify-between">
<div className="">
<h3 className="text-lg tracking-tight font-semibold">Atlas QA</h3>
<p className="text-xs text-neutral-400">Testing Suite</p>
</div>
<button className="p-1.5 rounded-lg hover:bg-neutral-800/70">
<svg className="lucide lucide-more-horizontal w-4 h-4 text-neutral-400" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<img alt="minimal" className="h-28 w-full ring-1 ring-white/10 object-cover rounded-xl mt-3" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/86fb226e-d57b-4ac4-a058-724fdc1be4c0_800w.jpg" style={{}}/>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-2">
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
<img alt="avatar" className="h-6 w-6 rounded-full ring-2 ring-neutral-900 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=64&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<span className="text-xs text-neutral-400 flex items-center gap-1">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 1 week left
                        </span>
</div>
<div className="mt-3">
<div className="flex items-center justify-between text-xs">
<span className="text-neutral-300">Progress</span>
<span className="text-neutral-400">75%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-neutral-800 ring-1 ring-white/5">
<div className="h-2 w-[75%] rounded-full bg-gradient-to-r from-emerald-400 to-sky-400"></div>
</div>
</div>
</div>
</div>
</section>

<aside className="xl:col-span-4 2xl:col-span-3 space-y-6">

<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Overall Progress</h3>
<button className="p-1.5 rounded-lg hover:bg-neutral-800/70">
<svg className="lucide lucide-refresh-ccw w-4 h-4 text-neutral-400" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</button>
</div>
<p className="text-xs text-neutral-400">Team: Core Platform</p>
<div className="mt-4 grid grid-cols-2 gap-4 items-center">
<div className="col-span-1">
<div className="relative h-40">
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-36 w-36">
<div className="relative">
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-xl font-semibold tracking-tight" id="usagePercent">72%</span>
</div>
<div className="relative">
<div className="bg-transparent">
<div className="relative">

<div className="h-36 w-36">
<div className="relative h-full w-full">
<div className="absolute inset-0">
<div className="h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">

<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">
<div className="h-full w-full">
<div className="relative h-full w-full">

<div className="relative h-36 w-36 mx-auto">
<canvas className="!h-36 !w-36" height="288" id="usageChart" style={{display: 'block', boxSizing: 'border-box', height: '144px', width: '144px'}} width="288"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-1">
<ul className="space-y-3">
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
<span className="text-sm">Completed</span>
</div>
<span className="text-sm text-neutral-400">128</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-sky-400"></span>
<span className="text-sm">In Progress</span>
</div>
<span className="text-sm text-neutral-400">390</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-amber-400"></span>
<span className="text-sm">Upcoming</span>
</div>
<span className="text-sm text-neutral-400">250</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
<span className="text-sm">Blocked</span>
</div>
<span className="text-sm text-neutral-400">22</span>
</li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<h3 className="text-lg tracking-tight font-semibold">Recent Activity</h3>
<p className="text-xs text-neutral-400">12 August 2025</p>
<ul className="mt-4 space-y-4">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="leading-tight">
<p className="text-sm">Rin Ito commented on Nebula UI Kit</p>
<p className="text-[11px] text-neutral-400">“Spacing looks sharp 👌”</p>
</div>
</div>
<span className="text-[11px] text-neutral-500">5m</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm">Ash Malik pushed commits to Orion</p>
<p className="text-[11px] text-neutral-400">3 files changed</p>
</div>
</div>
<span className="text-[11px] text-neutral-500">15m</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm">Dena Abbas updated sprint 34</p>
<p className="text-[11px] text-neutral-400">Velocity +8%</p>
</div>
</div>
<span className="text-[11px] text-neutral-500">30m</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<p className="text-sm">Will Tran closed issue #842</p>
<p className="text-[11px] text-neutral-400">Accessibility: keyboard nav</p>
</div>
</div>
<span className="text-[11px] text-neutral-500">1h</span>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-xs text-neutral-400">Total Projects</p>
<p className="mt-2 text-2xl tracking-tight font-semibold">550</p>
</div>
<div className="ring-1 ring-teal-300/30 bg-teal-400/20 rounded-2xl pt-5 pr-5 pb-5 pl-5">
<p className="text-xs text-neutral-100">Upcoming</p>
<p className="mt-2 text-2xl tracking-tight font-semibold">250</p>
</div>
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-xs text-neutral-400">In Progress</p>
<p className="mt-2 text-2xl tracking-tight font-semibold">390</p>
</div>
<div className="rounded-2xl bg-neutral-900/70 ring-1 ring-white/10 p-5">
<p className="text-xs text-neutral-400">Completed</p>
<p className="mt-2 text-2xl tracking-tight font-semibold">125</p>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>
</div>
</div>





    </>
  );
}
