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



    // Initialize lucide icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) {
        window.lucide.createIcons({
          attrs: { 'stroke-width': 1.5, focusable: 'false', 'aria-hidden': 'true' }
        });
      }
    });

    // Chart.js - Study hours
    const hoursCtx = document.getElementById('hoursChart');
    const hoursChart = new Chart(hoursCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'Hours',
          data: [0.8, 1.2, 0.6, 1.5, 1.1, 0.7, 0.3],
          borderColor: 'rgb(129, 140, 248)',
          backgroundColor: 'rgba(129, 140, 248, 0.15)',
          tension: 0.35,
          fill: true,
          pointRadius: 2.5,
          pointHoverRadius: 4,
          pointBackgroundColor: 'rgb(129, 140, 248)',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleColor: '#e2e8f0',
            bodyColor: '#cbd5e1',
            borderColor: 'rgba(148, 163, 184, 0.15)',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: 'rgba(203, 213, 225, 0.8)', font: { size: 11 } }
          },
          y: {
            beginAtZero: true,
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: 'rgba(203, 213, 225, 0.8)', font: { size: 11 }, stepSize: 0.5 }
          }
        }
      }
    });

    // Progress computation from lecture checklist
    const checks = document.querySelectorAll('.lecture-check');
    const overallProgressBar = document.getElementById('overallProgressBar');
    const overallProgressLabel = document.getElementById('overallProgressLabel');
    const ring = document.getElementById('ringProgress');
    const ringLabel = document.getElementById('ringLabel');
    const resetBtn = document.getElementById('resetLectures');

    function computeProgress() {
      const total = checks.length;
      const done = Array.from(checks).filter(c => c.checked).length;
      const percent = total ? Math.round((done / total) * 100) : 0;

      overallProgressBar.style.width = percent + '%';
      overallProgressLabel.textContent = percent + '%';

      // Ring progress (circumference ~ 2πr = 2*3.14*42 ≈ 264)
      const circumference = 264;
      const offset = circumference - (percent / 100) * circumference;
      ring.style.strokeDashoffset = String(offset);
      ringLabel.textContent = percent + '%';
    }

    // Persist to localStorage for a basic functional experience
    const STORAGE_KEY = 'lrn-lecture-progress';
    function saveProgress() {
      const states = Array.from(checks).map(c => c.checked ? 1 : 0);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(states));
    }
    function loadProgress() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        const states = JSON.parse(raw);
        checks.forEach((c, i) => { c.checked = !!states[i]; });
      } catch (e) {}
    }

    checks.forEach(c => c.addEventListener('change', () => {
      computeProgress();
      saveProgress();
    }));

    resetBtn.addEventListener('click', () => {
      checks.forEach(c => c.checked = false);
      computeProgress();
      saveProgress();
    });

    // Initial
    loadProgress();
    computeProgress();
  
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
      
<div className="flex min-h-screen">

<aside className="hidden md:flex md:w-64 lg:w-72 shrink-0 flex-col border-r border-white/10 bg-slate-950/70 backdrop-blur">
<div className="px-5 lg:px-6 pt-5 pb-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-indigo-500/20 border border-indigo-400/20 grid place-content-center">
<span className="text-indigo-300 text-sm font-semibold tracking-tight">LRN</span>
</div>
<div className="">
<p className="text-slate-100 text-base font-semibold tracking-tight">Learning</p>
<p className="text-xs text-slate-400">Study, practice, progress</p>
</div>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition">
<svg aria-hidden="true" className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Upgrade</span>
</button>
</div>
<nav className="px-3 lg:px-4 py-2 space-y-1">
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-home h-4.5 w-4.5" data-lucide="home" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Dashboard</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-library h-4.5 w-4.5" data-lucide="library" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6 4 14"></path><path d="M12 6v14"></path><path d="M8 8v12"></path><path d="M4 4v16"></path></svg>
<span>Courses</span>
</a>
<a className="group flex items-center gap-3 hover:text-white hover:bg-white/5 hover:border-white/10 transition text-sm text-slate-300 border-transparent border rounded-md pt-2.5 pr-3 pb-2.5 pl-3" href="#">
<svg aria-hidden="true" className="lucide lucide-file-video h-4.5 w-4.5" data-lucide="file-video" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"></path><path d="M15.033 13.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56v-4.704a.645.645 0 0 1 .967-.56z"></path></svg>
<span className="">Lectures</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-calendar h-4.5 w-4.5" data-lucide="calendar" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>Classes</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-chart-line h-4.5 w-4.5" data-lucide="chart-line" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span>Progress</span>
</a>
<div className="my-2 border-t border-white/10"></div>
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-settings h-4.5 w-4.5" data-lucide="settings" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span>Settings</span>
</a>
<a className="group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition" href="#">
<svg aria-hidden="true" className="lucide lucide-help-circle h-4.5 w-4.5" data-lucide="help-circle" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span>Help</span>
</a>
</nav>
<div className="mt-auto p-4 lg:p-5">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<p className="text-xs text-slate-400">Today's goal</p>
<div className="mt-2 flex items-center justify-between">
<p className="text-sm text-slate-200">Study 45 min</p>
<span className="text-[11px] text-indigo-300">Focus</span>
</div>
<div className="mt-3 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full bg-indigo-500/70 rounded-full" style={{width: '62%'}}></div>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="px-4 lg:px-8 h-16 flex items-center gap-3">
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<div className="relative flex-1 max-w-xl">
<svg aria-hidden="true" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" data-lucide="search" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full rounded-md bg-white/5 pl-10 pr-3 py-2.5 text-sm text-slate-200 placeholder:text-slate-500 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/20" placeholder="Search courses, lectures, classes..." type="text"/>
</div>
<div className="ml-auto hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-plus h-4.5 w-4.5" data-lucide="plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              New Course
            </button>
<button aria-label="Notifications" className="relative inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 p-2 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-bell h-5 w-5" data-lucide="bell" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-rose-500 rounded-full ring-2 ring-slate-950"></span>
</button>
<img alt="Profile" className="h-8 w-8 rounded-full ring-2 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="px-4 lg:px-8 py-6 lg:py-8">

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
<div className="p-4 lg:p-5 border-b border-white/10">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-slate-100">Continue: Modern Web Foundations</h2>
<p className="text-sm text-slate-400 mt-1">Lecture 4 of 12 • Components, State, and Data Flow</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-download h-4.5 w-4.5" data-lucide="download" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                  Resources
                </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
<div className="lg:col-span-3">
<div className="aspect-video bg-black/50 border-b lg:border-b-0 lg:border-r border-white/10 relative">
<video className="absolute inset-0 w-full h-full" controls="" id="player" playsinline="" poster="https://images.unsplash.com/photo-1542759564-1318e98c578b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-keyboard-1565/1080p.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
</div>
</div>
<div className="lg:col-span-2 p-4 lg:p-5">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300">Next up</p>
<span className="text-xs text-slate-400">12m</span>
</div>
<div className="mt-2 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md bg-indigo-500/15 border border-indigo-400/15 grid place-content-center text-indigo-300">
<svg aria-hidden="true" className="lucide lucide-file-code-2 h-5 w-5" data-lucide="file-code-2" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m5 12-3 3 3 3"></path><path d="m9 18 3-3-3-3"></path></svg>
</div>
<div className="flex-1">
<p className="text-slate-100 text-sm font-medium">Props vs State</p>
<p className="text-xs text-slate-400 mt-0.5">Concepts, patterns, pitfalls</p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                      Play
                    </button>
</div>
</div>
<div className="mt-4">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-slate-300">Course progress</span>
<span className="text-sm text-indigo-300" id="overallProgressLabel">0%</span>
</div>
<div className="h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-0 rounded-full bg-gradient-to-r from-indigo-500/80 via-indigo-400/80 to-indigo-300/80 transition-[width] duration-500" id="overallProgressBar" style={{width: '0%'}}></div>
</div>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
<svg aria-hidden="true" className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Last watched 2h ago</span>
<span className="h-1 w-1 rounded-full bg-slate-600"></span>
<span>Resume at 05:22</span>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Progress Overview</h3>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-download-cloud h-4 w-4" data-lucide="download-cloud" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8l-4-4"></path><path d="m12 21 4-4"></path><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"></path></svg>
                Export
              </button>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Active days</p>
<p className="text-xl font-semibold tracking-tight text-slate-100 mt-1">5</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Hours this week</p>
<p className="text-xl font-semibold tracking-tight text-slate-100 mt-1">6.2</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<p className="text-xs text-slate-400">Streak</p>
<p className="text-xl font-semibold tracking-tight text-slate-100 mt-1">4</p>
</div>
</div>
<div className="mt-4">
<h4 className="text-sm text-slate-300">Study hours</h4>
<div className="mt-2 relative h-44 rounded-lg border border-white/10 bg-black/20 overflow-hidden">
<div className="absolute inset-0">
<div className="w-full h-full p-2">
<canvas height="316" id="hoursChart" style={{display: 'block', boxSizing: 'border-box', height: '158px', width: '843px'}} width="1686"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03]">
<div className="p-4 lg:p-5 border-b border-white/10 flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Lecture Outline</h3>
<p className="text-xs text-slate-400 mt-1">Mark completed to track progress</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition" id="resetLectures">
<svg aria-hidden="true" className="lucide lucide-rotate-ccw h-4.5 w-4.5" data-lucide="rotate-ccw" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
                Reset
              </button>
</div>
<ul className="divide-y divide-white/10" id="lectureList">

<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">01 — Introduction &amp; Course Setup</p>
<p className="text-xs text-slate-400 mt-0.5">Environment, tools, overview</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">06:12</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">02 — HTML Semantics &amp; Structure</p>
<p className="text-xs text-slate-400 mt-0.5">Accessibility-first layout</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">12:09</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">03 — CSS Essentials</p>
<p className="text-xs text-slate-400 mt-0.5">Layout, spacing, responsive</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">10:44</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">04 — Components &amp; State</p>
<p className="text-xs text-slate-400 mt-0.5">Data flow and patterns</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">14:20</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">05 — Data Fetching</p>
<p className="text-xs text-slate-400 mt-0.5">REST, caching, errors</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">08:56</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">06 — Forms &amp; Validation</p>
<p className="text-xs text-slate-400 mt-0.5">UX patterns, a11y</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">09:31</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">07 — Testing</p>
<p className="text-xs text-slate-400 mt-0.5">Unit, integration, e2e</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">11:47</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
<li className="p-4 lg:p-5 flex items-center gap-4">
<label className="relative inline-flex items-center">
<input className="peer sr-only lecture-check" type="checkbox"/>
<span className="w-5 h-5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-indigo-300 peer-checked:bg-indigo-500/20 peer-checked:border-indigo-400/30 transition">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</label>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">08 — Deploy &amp; Ship</p>
<p className="text-xs text-slate-400 mt-0.5">Security &amp; observability</p>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-slate-400">07:18</span>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
</li>
</ul>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03]">
<div className="p-4 lg:p-5 border-b border-white/10">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">My Courses</h3>
<p className="text-xs text-slate-400 mt-1">Your active enrollments</p>
</div>
<div className="p-4 lg:p-5 space-y-4">

<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">Modern Web Foundations</p>
<p className="text-xs text-slate-400">12 lectures • 2h 10m</p>
</div>
<span className="text-xs text-indigo-300">62%</span>
</div>
<div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[62%] bg-indigo-500/80"></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">UI Design Systems</p>
<p className="text-xs text-slate-400">8 lectures • 1h 24m</p>
</div>
<span className="text-xs text-indigo-300">38%</span>
</div>
<div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[38%] bg-indigo-500/80"></div>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-md object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=240&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm text-slate-100 truncate">Data &amp; APIs</p>
<p className="text-xs text-slate-400">10 lectures • 1h 52m</p>
</div>
<span className="text-xs text-indigo-300">12%</span>
</div>
<div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-[12%] bg-indigo-500/80"></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.03]">
<div className="p-4 lg:p-5 border-b border-white/10">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Upcoming Classes</h3>
<p className="text-xs text-slate-400 mt-1">Join live sessions or watch later</p>
</div>
<div className="p-4 lg:p-5 space-y-4">
<div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="h-10 w-10 rounded-md bg-emerald-500/15 border border-emerald-400/20 grid place-content-center text-emerald-300">
<svg aria-hidden="true" className="lucide lucide-video h-5 w-5" data-lucide="video" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="flex-1">
<p className="text-sm text-slate-100">Live Q&amp;A: Components &amp; State</p>
<p className="text-xs text-slate-400">Today • 17:00–17:45</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-calendar-plus h-4.5 w-4.5" data-lucide="calendar-plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                  Add to calendar
                </button>
</div>
<div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="h-10 w-10 rounded-md bg-sky-500/15 border border-sky-400/20 grid place-content-center text-sky-300">
<svg aria-hidden="true" className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="flex-1">
<p className="text-sm text-slate-100">Workshop: CSS Architecture</p>
<p className="text-xs text-slate-400">Thu • 14:00–15:30</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-calendar-plus h-4.5 w-4.5" data-lucide="calendar-plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                  Add to calendar
                </button>
</div>
<div className="flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-3">
<div className="h-10 w-10 rounded-md bg-amber-500/15 border border-amber-400/20 grid place-content-center text-amber-300">
<svg aria-hidden="true" className="lucide lucide-mic h-5 w-5" data-lucide="mic" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="flex-1">
<p className="text-sm text-slate-100">Guest Talk: Design Systems</p>
<p className="text-xs text-slate-400">Mon • 09:30–10:15</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition">
<svg aria-hidden="true" className="lucide lucide-calendar-plus h-4.5 w-4.5" data-lucide="calendar-plus" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                  Add to calendar
                </button>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 lg:p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Focus</h3>
<div className="inline-flex items-center gap-2 text-xs text-slate-400">
<svg aria-hidden="true" className="lucide lucide-sun h-4 w-4" data-lucide="sun" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
<span>Quiet hours</span>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 flex flex-col items-center justify-center">
<div className="relative h-24 w-24">
<svg className="h-full w-full -rotate-90" viewbox="0 0 100 100">
<circle className="stroke-white/10" cx="50" cy="50" fill="none" r="42" strokeWidth="10"></circle>
<circle className="stroke-indigo-400" cx="50" cy="50" fill="none" id="ringProgress" r="42" stroke-dasharray="264" stroke-dashoffset="264" strokeLinecap="round" strokeWidth="10" style={{strokeDashoffset: '264'}}></circle>
</svg>
<div className="absolute inset-0 grid place-content-center">
<span className="text-xl font-semibold tracking-tight text-slate-100" id="ringLabel">0%</span>
</div>
</div>
<p className="text-xs text-slate-400 mt-2">Overall completion</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<p className="text-xs text-slate-400">Daily checklist</p>
<ul className="mt-2 space-y-2">
<li className="flex items-center gap-2">
<input className="peer sr-only" id="task1" type="checkbox"/>
<label className="w-4.5 h-4.5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-emerald-300 peer-checked:bg-emerald-500/15 peer-checked:border-emerald-400/30 transition" htmlFor="task1">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</label>
<span className="text-sm text-slate-200">Watch 1 lecture</span>
</li>
<li className="flex items-center gap-2">
<input className="peer sr-only" id="task2" type="checkbox"/>
<label className="w-4.5 h-4.5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-emerald-300 peer-checked:bg-emerald-500/15 peer-checked:border-emerald-400/30 transition" htmlFor="task2">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</label>
<span className="text-sm text-slate-200">Review notes</span>
</li>
<li className="flex items-center gap-2">
<input className="peer sr-only" id="task3" type="checkbox"/>
<label className="w-4.5 h-4.5 rounded-md border border-white/15 bg-white/5 grid place-content-center text-transparent peer-checked:text-emerald-300 peer-checked:bg-emerald-500/15 peer-checked:border-emerald-400/30 transition" htmlFor="task3">
<svg aria-hidden="true" className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</label>
<span className="text-sm text-slate-200">Practice 20 min</span>
</li>
</ul>
</div>
</div>
<div className="mt-4 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] p-4">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-200">Weekly target</p>
<span className="text-xs text-slate-400">4 / 6 hrs</span>
</div>
<div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-2/3 rounded-full bg-indigo-500/80"></div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
<svg aria-hidden="true" className="lucide lucide-flame h-4 w-4 text-amber-300" data-lucide="flame" fill="none" focusable="false" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
<span>4-day streak • Keep it up</span>
</div>
</div>
</div>
</div>
</section>
<footer className="px-4 lg:px-8 py-6 border-t border-white/10 text-xs text-slate-500">
<div className="flex flex-col sm:flex-row items-center justify-between gap-2">
<p>© 2025 LRN. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Terms</a>
<a className="hover:text-slate-300" href="#">Contact</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
