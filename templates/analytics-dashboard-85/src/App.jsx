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



    // Initialize icons
    lucide.createIcons();

    // Performance Bar Chart
    const barCtx = document.getElementById('barChart').getContext('2d');
    const gradientBase = barCtx.createLinearGradient(0, 0, 0, 300);
    gradientBase.addColorStop(0, 'rgba(255,255,255,0.6)');
    gradientBase.addColorStop(1, 'rgba(255,255,255,0.05)');

    const gradientMuted = barCtx.createLinearGradient(0, 0, 0, 300);
    gradientMuted.addColorStop(0, 'rgba(255,255,255,0.35)');
    gradientMuted.addColorStop(1, 'rgba(255,255,255,0.04)');

    const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const values = [57, 44, 81, 37, 53, 48, 77];

    const bgColors = values.map((v, i) => i === 2 ? gradientBase : gradientMuted);
    const borderColors = values.map((v, i) => i === 2 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.6)');

    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data: values,
          backgroundColor: bgColors,
          borderColor: borderColors,
          borderWidth: 1.5,
          borderRadius: 8,
          maxBarThickness: 42
        }]
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { display: false, drawBorder: false },
            ticks: { color: '#9CA3AF', font: { family: 'Inter', weight: '500' } }
          },
          y: {
            beginAtZero: true,
            display: false,
            grid: { display: false, drawBorder: false }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(17,17,17,0.9)',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            titleColor: '#fff',
            bodyColor: '#e5e7eb',
            displayColors: false,
            callbacks: {
              title: (ctx) => `Wednesday`,
              label: (ctx) => {
                const v = ctx.raw;
                const sales = (v * 37).toLocaleString(); // synthetic
                const rev = `$${(v * 140).toLocaleString()}`
                return [`Total Sales   ${sales}`, `Total Revenue ${rev}`];
              }
            }
          }
        }
      }
    });

    // Sales Donut (semi-gauge)
    const donutCtx = document.getElementById('donutChart').getContext('2d');
    new Chart(donutCtx, {
      type: 'doughnut',
      data: {
        labels: ['Growth', 'Segment A', 'Segment B', 'Remainder'],
        datasets: [{
          data: [80.8, 8, 6, 5.2],
          backgroundColor: [
            'rgba(255,255,255,0.9)',
            'rgba(255,255,255,0.25)',
            'rgba(255,255,255,0.15)',
            'rgba(255,255,255,0.08)'
          ],
          borderWidth: 0,
          hoverOffset: 2
        }]
      },
      options: {
        maintainAspectRatio: false,
        cutout: '74%',
        rotation: 270,
        circumference: 180,
        plugins: { legend: { display: false }, tooltip: { enabled: false } }
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
      
<div className="h-dvh w-full flex overflow-hidden">

<aside className="hidden md:flex md:flex-col md:w-72 shrink-0 border-r border-white/10 bg-neutral-900/70">
<div className="px-5 pt-6 pb-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 grid place-items-center">
<i className="h-5 w-5 text-white/90" data-lucide="kanban"></i>
</div>
<div className="text-lg tracking-tight font-semibold text-white">Main</div>
</div>
</div>
<nav className="px-3 space-y-6 overflow-y-auto">

<div className="space-y-1">
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 bg-white/10 text-white" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10">
<i className="h-4 w-4" data-lucide="layout-dashboard"></i>
</span>
<span className="font-medium">Dashboard</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="check-square"></i>
</span>
<span className="font-medium">Tasks</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="bell"></i>
</span>
<span className="font-medium">Notifications</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="calendar"></i>
</span>
<span className="font-medium">Calendar</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="file-text"></i>
</span>
<span className="font-medium">Invoices</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="messages-square"></i>
</span>
<span className="font-medium">Messages</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="inbox"></i>
</span>
<span className="font-medium">Inbox</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="activity"></i>
</span>
<span className="font-medium">Performance</span>
</a>
</div>

<div className="space-y-2">
<div className="flex items-center gap-2 px-3 text-neutral-400">
<i className="h-4 w-4" data-lucide="chevron-down"></i>
<span className="text-sm font-medium">Folder</span>
</div>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="briefcase"></i>
</span>
<span className="font-medium">Work Logs</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="timer"></i>
</span>
<span className="font-medium">Timesheets</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-white/5 text-neutral-300" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5">
<i className="h-4 w-4" data-lucide="megaphone"></i>
</span>
<span className="font-medium">Marketing</span>
</a>
</div>
</nav>
<div className="mt-auto p-4">
<div className="rounded-2xl border border-white/10 bg-neutral-800/50 p-3 flex items-center gap-3">
<img alt="avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div className="min-w-0">
<div className="font-semibold text-white tracking-tight">Adarsh</div>
<div className="text-xs text-neutral-400 truncate">contactAd@gmail.com</div>
</div>
<button className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10">
<i className="h-4 w-4" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">

<header className="sticky top-0 z-10 border-b border-white/10 bg-neutral-900/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-5 py-4">
<div className="flex items-center gap-2 text-sm">
<i className="h-4 w-4 text-neutral-400" data-lucide="home"></i>
<span className="text-neutral-400">Dashboard</span>
<i className="h-4 w-4 text-neutral-600" data-lucide="slash"></i>
<span className="text-white font-medium">Analytics</span>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-5 py-6 space-y-6">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 overflow-hidden">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-400">Total Projects</div>
<div className="mt-2 text-4xl tracking-tight font-semibold text-white">15</div>
<div className="mt-2 text-xs text-emerald-400">+7 vs last month</div>
</div>
<div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-200" data-lucide="folder"></i>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 overflow-hidden">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-400">Total Task</div>
<div className="mt-2 text-4xl tracking-tight font-semibold text-white">12</div>
<div className="mt-2 text-xs text-emerald-400">+4 vs last month</div>
</div>
<div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-200" data-lucide="folder-minus"></i>
</div>
</div>
</div>
<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 p-5 overflow-hidden">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="flex items-center justify-between">
<div>
<div className="text-sm text-neutral-400">In Reviews</div>
<div className="mt-2 text-4xl tracking-tight font-semibold text-white">21</div>
<div className="mt-2 text-xs text-emerald-400">+57 vs last month</div>
</div>
<div className="h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
<i className="h-5 w-5 text-neutral-200" data-lucide="clock-9"></i>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 relative rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden">
<div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="relative p-5 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="gauge"></i>
</span>
<div className="font-medium">Performance Tracker</div>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm text-neutral-200 border border-white/10">
<span>Last week</span>
<i className="h-4 w-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="p-5">
<div className="flex items-end justify-between">
<h2 className="text-xl md:text-2xl tracking-tight font-semibold text-white">Performance</h2>
<div className="text-xs md:text-sm text-emerald-400">+12% vs last week</div>
</div>
<div className="mt-4">
<div className="h-64 md:h-72 rounded-xl bg-neutral-900/70 border border-white/10 p-3 relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 16px)'}}></div>

<div className="relative h-full">
<canvas id="barChart"></canvas>
</div>
</div>

<div className="mt-3 grid grid-cols-7 gap-2 text-center text-xs text-neutral-300">
<div className="flex flex-col gap-1"><span>+57%</span><span className="text-neutral-500">Mon</span></div>
<div className="flex flex-col gap-1"><span>+44%</span><span className="text-neutral-500">Tue</span></div>
<div className="flex flex-col gap-1 text-white"><span>+81%</span><span className="text-neutral-500">Wed</span></div>
<div className="flex flex-col gap-1"><span>+37%</span><span className="text-neutral-500">Thu</span></div>
<div className="flex flex-col gap-1"><span>+53%</span><span className="text-neutral-500">Fri</span></div>
<div className="flex flex-col gap-1"><span>+48%</span><span className="text-neutral-500">Sat</span></div>
<div className="flex flex-col gap-1"><span>+77%</span><span className="text-neutral-500">Sun</span></div>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden">
<div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="relative p-5 border-b border-white/10 flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="pie-chart"></i>
</span>
<div className="font-medium">Sales overview</div>
</div>
<div className="p-5">
<div className="h-64 rounded-xl bg-neutral-900/70 border border-white/10 p-3 relative">
<div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 16px)'}}></div>
<div className="relative h-full">
<div className="relative w-full h-full">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="text-center">
<div className="text-3xl tracking-tight font-semibold text-white">80.8%</div>
<div className="text-xs text-neutral-400">Sales Growth</div>
</div>
</div>

<div className="absolute inset-0">
<canvas id="donutChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-neutral-900/70 p-4">
<div className="text-xs text-neutral-400">Number of sales</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-2xl tracking-tight font-semibold text-white">2,987</div>
<span className="text-emerald-400 text-xs">8.2%</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-neutral-900/70 p-4">
<div className="text-xs text-neutral-400">Total Revenue</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-2xl tracking-tight font-semibold text-white">$11.3k</div>
<span className="text-emerald-400 text-xs">3.3%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative rounded-2xl border border-white/10 bg-neutral-900/60 overflow-hidden">
<div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{backgroundImage: 'repeating-linear-gradient(135deg, #fff, #fff 1px, transparent 1px, transparent 14px)'}}></div>
<div className="relative p-5 border-b border-white/10">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 border border-white/10">
<i className="h-4 w-4" data-lucide="list-checks"></i>
</span>
<div className="font-medium">Task Monitoring</div>
</div>
<div className="flex items-center gap-2">
<div className="relative">
<input className="pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/10" placeholder="Search..." type="text"/>
<i className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" data-lucide="search"></i>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white/5 hover:bg-white/10 px-3 py-2 text-sm border border-white/10">
<i className="h-4 w-4" data-lucide="sliders"></i>
<span>Filter</span>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10">
<i className="h-4 w-4" data-lucide="more-horizontal"></i>
</button>
</div>
</div>
</div>
<div className="relative p-5">
<h3 className="text-lg tracking-tight font-semibold text-white">Today’s Tasks</h3>
<div className="mt-4 w-full overflow-x-auto">
<div className="min-w-[720px]">

<div className="grid grid-cols-12 text-xs text-neutral-400 px-3 py-2">
<div className="col-span-4">Project Name</div>
<div className="col-span-2">Status</div>
<div className="col-span-2">Progress</div>
<div className="col-span-1">Total Tasks</div>
<div className="col-span-2">Created Date</div>
<div className="col-span-1 text-right">Due</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/70 p-4">
<div className="grid grid-cols-12 items-center gap-3">
<div className="col-span-4 flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-violet-500/20 text-violet-300">
<i className="h-4 w-4" data-lucide="wallet"></i>
</span>
<div>
<div className="font-medium text-white">Finance Project</div>
<div className="mt-1 h-1.5 w-24 rounded-full bg-violet-500/20">
<div className="h-1.5 w-14 rounded-full bg-violet-500"></div>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 px-2.5 py-1 text-xs font-medium">
<span className="h-2 w-2 rounded-full bg-blue-400"></span> In Progress
                      </span>
</div>
<div className="col-span-2">
<div className="h-2 rounded-full bg-white/5 border border-white/10">
<div className="h-2 w-[70%] rounded-full bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-500"></div>
</div>
<div className="mt-1 text-xs text-neutral-400">70%</div>
</div>
<div className="col-span-1 text-neutral-300">14 / 20</div>
<div className="col-span-2 text-neutral-300">02-09-2025</div>
<div className="col-span-1 text-right">
<span className="inline-flex items-center gap-2 text-amber-300 text-sm">
<span className="h-2 w-2 rounded-full bg-amber-400"></span> 6h left
                      </span>
</div>
</div>
</div>

<div className="mt-3 rounded-xl border border-white/10 bg-neutral-900/40 p-4 opacity-70">
<div className="grid grid-cols-12 items-center gap-3">
<div className="col-span-4 flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-500/20 text-teal-300">
<i className="h-4 w-4" data-lucide="layers"></i>
</span>
<div>
<div className="font-medium text-white/90">UI Revamp</div>
<div className="mt-1 h-1.5 w-24 rounded-full bg-teal-500/20">
<div className="h-1.5 w-10 rounded-full bg-teal-500"></div>
</div>
</div>
</div>
<div className="col-span-2">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 px-2.5 py-1 text-xs font-medium">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Review
                      </span>
</div>
<div className="col-span-2">
<div className="h-2 rounded-full bg-white/5 border border-white/10">
<div className="h-2 w-[48%] rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"></div>
</div>
<div className="mt-1 text-xs text-neutral-400">48%</div>
</div>
<div className="col-span-1 text-neutral-300">9 / 19</div>
<div className="col-span-2 text-neutral-300">01-30-2025</div>
<div className="col-span-1 text-right">
<span className="inline-flex items-center gap-2 text-emerald-300 text-sm">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> On track
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
