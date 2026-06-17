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



      // Sidebar toggle (mobile)
      const sidebar = document.getElementById('sidebar');
      const openSidebar = document.getElementById('openSidebar');
      if (openSidebar) {
        openSidebar.addEventListener('click', () => {
          const isOpen = sidebar.classList.contains('flex');
          if (isOpen) {
            sidebar.classList.add('hidden');
            sidebar.classList.remove('flex');
          } else {
            sidebar.classList.remove('hidden');
            sidebar.classList.add('flex');
          }
        });
      }

      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });

      // Chart.js - Watching Time
      const ctx = document.getElementById('watchChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, 'rgba(79, 70, 229, 0.35)');   // indigo-600 at top
        gradient.addColorStop(1, 'rgba(79, 70, 229, 0.05)');   // fade

        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets: [{
              label: 'Hours',
              data: [1,2,4,5,6.5,5,4,3,2,5,4,3],
              backgroundColor: gradient,
              borderRadius: 8,
              borderSkipped: false,
              maxBarThickness: 18
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: 'rgb(15 23 42)', // slate-900
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                displayColors: false,
                callbacks: {
                  label: (context) => `${context.parsed.y}h`
                }
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: 'rgb(100 116 139)', font: { size: 11 } }
              },
              y: {
                grid: { color: 'rgba(148,163,184,0.2)', drawBorder: false },
                ticks: {
                  color: 'rgb(100 116 139)',
                  font: { size: 11 },
                  callback: (v) => `${v}h`
                },
                suggestedMax: 8,
                beginAtZero: true
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
      

<div className="min-h-screen">

<aside className="fixed inset-y-0 left-0 z-40 hidden w-72 bg-white border-r border-slate-200 lg:flex lg:flex-col" id="sidebar">

<div className="flex items-center gap-3 px-4 h-16 border-b border-slate-200">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-sm grid place-items-center">
<span className="text-white text-sm font-semibold tracking-tight">LI</span>
</div>
<div className="flex flex-col">
<span className="text-[18px] tracking-tight font-semibold text-slate-900">Logoipsum</span>
<span className="text-xs text-slate-500">Learning Platform</span>
</div>
</div>

<div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
<div>
<div className="px-2 text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Main Menu</div>
<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100" href="#">
<i className="h-4 w-4" data-lucide="home"></i>
<span className="text-sm font-medium">Home</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="bookmark"></i>
<span className="text-sm font-medium">Bookmarks</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="layers"></i>
<span className="text-sm font-medium">Courses</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span className="text-sm font-medium">Events</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="clipboard-check"></i>
<span className="text-sm font-medium">Assignment</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="award"></i>
<span className="text-sm font-medium">Certifications</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="message-square"></i>
<span className="text-sm font-medium">Message</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="gift"></i>
<span className="text-sm font-medium">Reward</span>
</a>
</nav>
</div>
<div>
<div className="flex items-center justify-between px-2 mb-2">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wide">My Courses</div>
<button className="text-xs px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700">+Add</button>
</div>
<ul className="space-y-2 px-2">
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="h-2 w-2 rounded-full bg-indigo-500"></span> Framer Development
              </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="h-2 w-2 rounded-full bg-purple-500"></span> UX Research
              </li>
<li className="flex items-center gap-2 text-sm text-slate-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span> Design Terminology
              </li>
</ul>
</div>
</div>

<div className="mt-auto border-t border-slate-200 p-3 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="help-circle"></i>
<span className="text-sm font-medium">Help &amp; Information</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-700" href="#">
<i className="h-4 w-4" data-lucide="log-out"></i>
<span className="text-sm font-medium">Log Out</span>
</a>
</div>
</aside>

<div className="lg:pl-72">

<header className="sticky top-0 z-30 bg-slate-50/80 backdrop-blur border-b border-slate-200">
<div className="h-16 px-4 lg:px-6 flex items-center justify-between gap-3">
<div className="flex items-center gap-3 min-w-0">
<button className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50" id="openSidebar">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
<div className="relative flex-1 min-w-0">
<i className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="w-full pl-10 pr-12 h-10 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 placeholder:text-slate-400 text-sm" placeholder="Search here..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1 text-[11px] text-slate-400">
<span className="px-1.5 py-0.5 border border-slate-200 rounded-md bg-slate-50">⌘</span>
<span className="px-1.5 py-0.5 border border-slate-200 rounded-md bg-slate-50">K</span>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="hidden sm:inline-flex h-9 items-center gap-2 px-3 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
<i className="h-4 w-4" data-lucide="settings-2"></i>
<span className="text-sm font-medium">Customize</span>
</button>
<button className="inline-flex h-9 items-center gap-2 px-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
<i className="h-4 w-4" data-lucide="plus"></i>
<span className="text-sm font-medium">Add new</span>
</button>
<button className="relative h-9 w-9 grid place-items-center rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
<i className="h-5 w-5" data-lucide="bell"></i>
<span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-rose-500"></span>
</button>
<div className="hidden sm:flex items-center gap-3 pl-2">
<img alt="avatar" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="leading-tight">
<div className="text-sm font-medium text-slate-900">Abraham Paula</div>
<div className="text-xs text-slate-500">Free Plan</div>
</div>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</header>

<main className="px-4 lg:px-6 py-6">

<div className="flex items-start justify-between mb-6">
<div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Hi, Connor Willington</h1>
<p className="text-sm text-slate-500 mt-1">Sort subtitle will be replaced here!</p>
</div>
</div>
<div className="grid grid-cols-12 gap-6">

<section className="col-span-12 xl:col-span-8 space-y-6">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-start justify-between">
<p className="text-slate-500 text-sm">Enrolled Course</p>
<div className="h-8 w-8 grid place-items-center rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
<i className="h-4 w-4" data-lucide="line-chart"></i>
</div>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-3xl font-semibold tracking-tight">74</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                      View more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="h-4 w-4" data-lucide="trending-up"></i> 4.15%
                    </span>
<span className="text-slate-500">Last month</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-start justify-between">
<p className="text-slate-500 text-sm">Lesson</p>
<div className="h-8 w-8 grid place-items-center rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
<i className="h-4 w-4" data-lucide="book-open"></i>
</div>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-3xl font-semibold tracking-tight">52</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                      View more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 text-rose-600">
<i className="h-4 w-4" data-lucide="trending-down"></i> 1.10%
                    </span>
<span className="text-slate-500">Last month</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-start justify-between">
<p className="text-slate-500 text-sm">Certificate</p>
<div className="h-8 w-8 grid place-items-center rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-3xl font-semibold tracking-tight">12</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                      View more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="h-4 w-4" data-lucide="trending-up"></i> 4.15%
                    </span>
<span className="text-slate-500">Last month</span>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-start justify-between">
<p className="text-slate-500 text-sm">Completed Assignments</p>
<div className="h-8 w-8 grid place-items-center rounded-lg bg-slate-50 text-slate-600 border border-slate-200">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
</div>
</div>
<div className="mt-2 flex items-end justify-between">
<div className="text-3xl font-semibold tracking-tight">58</div>
<a className="text-sm text-slate-600 hover:text-slate-900 inline-flex items-center gap-1" href="#">
                      View more <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-3 flex items-center gap-2 text-xs">
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="h-4 w-4" data-lucide="trending-up"></i> 3.10%
                    </span>
<span className="text-slate-500">Last month</span>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Watching Time</h2>
<p className="text-sm text-slate-500 mt-0.5">1/4 Weeks</p>
</div>
<div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
<button className="px-2.5 py-1.5 rounded-md text-xs text-slate-600 hover:bg-white">Day</button>
<button className="px-2.5 py-1.5 rounded-md text-xs text-slate-600 hover:bg-white">Week</button>
<button className="px-2.5 py-1.5 rounded-md text-xs text-white bg-slate-900">Year</button>
</div>
</div>

<div className="mt-4">
<div className="relative h-56">
<canvas className="absolute inset-0" id="watchChart"></canvas>
</div>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<h3 className="text-lg font-semibold tracking-tight mb-3">Recommended Courses</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<a className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 hover:shadow-sm transition" href="#">
<div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-indigo-100/70"></div>
<div className="relative">
<span className="inline-flex items-center text-xs px-2 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-100">Earn a Certificate</span>
<div className="mt-3 text-slate-900 text-[17px] font-semibold tracking-tight">Digital Marketing</div>
<div className="mt-1 text-xs text-slate-500">Intermediate • 12 Module</div>
</div>
</a>
<a className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 hover:shadow-sm transition" href="#">
<div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-emerald-100/70"></div>
<div className="relative">
<span className="inline-flex items-center text-xs px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">Earn a Certificate</span>
<div className="mt-3 text-slate-900 text-[17px] font-semibold tracking-tight">Photography</div>
<div className="mt-1 text-xs text-slate-500">Beginner • 8 Module</div>
</div>
</a>
<a className="relative overflow-hidden rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 hover:shadow-sm transition" href="#">
<div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-blue-100/70"></div>
<div className="relative">
<span className="inline-flex items-center text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100">Earn a Certificate</span>
<div className="mt-3 text-slate-900 text-[17px] font-semibold tracking-tight">Web Design</div>
<div className="mt-1 text-xs text-slate-500">Beginner • 9 Module</div>
</div>
</a>
</div>
</div>
</section>

<aside className="col-span-12 xl:col-span-4 space-y-6">

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Courses</h3>
<span className="text-xs text-slate-500">Recents</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<a className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50" href="#">
<div className="h-9 w-9 rounded-lg bg-indigo-50 grid place-items-center text-indigo-600">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900 truncate">Design Accessibility</div>
<div className="text-xs text-slate-500">Advanced • 5 hours</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50" href="#">
<div className="h-9 w-9 rounded-lg bg-sky-50 grid place-items-center text-sky-600">
<i className="h-4 w-4" data-lucide="atom"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900 truncate">Design Terminology</div>
<div className="text-xs text-slate-500">Beginner • 8 hours</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50" href="#">
<div className="h-9 w-9 rounded-lg bg-purple-50 grid place-items-center text-purple-600">
<i className="h-4 w-4" data-lucide="beaker"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900 truncate">UX Research</div>
<div className="text-xs text-slate-500">Intermediate • 6 hours</div>
</div>
</a>
<a className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 hover:bg-slate-50" href="#">
<div className="h-9 w-9 rounded-lg bg-emerald-50 grid place-items-center text-emerald-600">
<i className="h-4 w-4" data-lucide="framer"></i>
</div>
<div className="min-w-0">
<div className="text-sm font-medium text-slate-900 truncate">Framer Development</div>
<div className="text-xs text-slate-500">Beginner • 8 hours</div>
</div>
</a>
</div>
</div>

<div className="bg-white border border-slate-200 rounded-2xl p-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Calendar</h3>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500">July</span>
<i className="h-4 w-4 text-slate-400" data-lucide="chevron-down"></i>
</div>
</div>

<div className="mt-3 grid grid-cols-7 gap-2">
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">7<br/><span className="text-[10px] text-slate-400">Sun</span></button>
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">8<br/><span className="text-[10px] text-slate-400">Mon</span></button>
<button className="h-9 rounded-lg bg-slate-900 text-white text-xs">9<br/><span className="text-[10px] text-white/70">Tue</span></button>
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">10<br/><span className="text-[10px] text-slate-400">Wed</span></button>
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">11<br/><span className="text-[10px] text-slate-400">Thu</span></button>
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">12<br/><span className="text-[10px] text-slate-400">Fri</span></button>
<button className="h-9 rounded-lg border border-slate-200 text-xs text-slate-600">13<br/><span className="text-[10px] text-slate-400">Sat</span></button>
</div>

<div className="mt-4 space-y-3">
<div className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Typography class with Bailey</div>
<span className="text-xs text-slate-500">Today</span>
</div>
<div className="mt-1 text-xs text-slate-500">10:00–11:00am</div>
<div className="mt-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
<i className="h-3.5 w-3.5" data-lucide="video"></i> Google Meet
                      </span>
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="h-6 w-6 rounded-full grid place-items-center text-[11px] bg-slate-100 text-slate-600 border border-white">+2</span>
</div>
</div>
</div>
<div className="p-3 rounded-xl border border-slate-200 hover:bg-slate-50">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-slate-900">Glassmorphism class with Thomas</div>
<span className="text-xs text-slate-500">Today</span>
</div>
<div className="mt-1 text-xs text-slate-500">10:00–11:00am</div>
<div className="mt-2 flex items-center justify-between">
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100">
<i className="h-3.5 w-3.5" data-lucide="video"></i> Google Meet
                      </span>
<div className="flex -space-x-2">
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=64&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-6 w-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="h-6 w-6 rounded-full grid place-items-center text-[11px] bg-slate-100 text-slate-600 border border-white">+2</span>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>
</div>
</div>


    </>
  );
}
