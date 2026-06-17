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



    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('overlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('opacity-0');
      overlay.classList.toggle('pointer-events-none');
    }

    // Icons
    lucide.createIcons();

    // Chart.js
    const ctx = document.getElementById('progressChart');
    if (ctx) {
      const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 220);
      gradient.addColorStop(0, 'rgba(99, 102, 241, 0.28)');
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.02)');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          datasets: [
            {
              label: 'Applications',
              data: [1, 3, 4, 6, 7, 9],
              borderColor: '#60A5FA',
              backgroundColor: gradient,
              fill: true,
              tension: 0.35,
              pointRadius: 3,
              pointBackgroundColor: '#60A5FA',
              borderWidth: 2
            },
            {
              label: 'Interviews',
              data: [0, 1, 1, 2, 3, 4],
              borderColor: '#A78BFA',
              backgroundColor: 'transparent',
              fill: false,
              tension: 0.35,
              pointRadius: 3,
              pointBackgroundColor: '#A78BFA',
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: 'rgba(255,255,255,0.85)',
                boxWidth: 10,
                usePointStyle: true,
                pointStyle: 'circle',
                font: { weight: '500' }
              }
            },
            tooltip: {
              mode: 'index',
              intersect: false
            }
          },
          scales: {
            x: {
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: 'rgba(255,255,255,0.8)' }
            },
            y: {
              grid: { color: 'rgba(255,255,255,0.08)' },
              ticks: { color: 'rgba(255,255,255,0.8)', precision: 0, stepSize: 1 },
              suggestedMin: 0
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
      

<div className="pointer-events-none fixed inset-0" style="background:
    radial-gradient(600px 360px at 20% 10%, rgba(99,102,241,0.18), transparent 60%),
    radial-gradient(800px 520px at 75% 65%, rgba(56,189,248,0.16), transparent 65%);"></div>

<div className="pointer-events-none fixed inset-0 bg-black/45"></div>

<button className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/30 text-white rounded-lg border border-white/20 backdrop-blur-md" onclick="toggleSidebar()">
<svg className="w-5 h-5" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>

<aside className="fixed top-0 left-0 h-full w-20 z-40 transform -translate-x-full lg:translate-x-0 transition-transform duration-300" id="sidebar">
<div className="h-full bg-neutral-900/85 backdrop-blur-xl border-r border-white/10 flex flex-col items-stretch">

<div className="flex items-center justify-center h-16 border-b border-white/10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center font-medium tracking-tight">N</div>
</div>

<nav className="flex-1 overflow-y-auto py-2">
<a className="relative flex flex-col items-center gap-1 py-4 text-[11px] text-white" href="#">
<span className="absolute left-0 top-0 h-full w-1 bg-rose-500 rounded-r-full"></span>
<svg className="mb-1 text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7"></path><path d="M9 22V12h6v10"></path></svg>
<span className="tracking-tight">Home</span>
</a>
<a className="relative flex flex-col items-center gap-1 py-4 text-[11px] text-white/70 hover:text-white transition-colors" href="#">
<svg className="mb-1" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="tracking-tight">Profile</span>
</a>
<a className="relative flex flex-col items-center gap-1 py-4 text-[11px] text-white/70 hover:text-white transition-colors" href="#">
<svg className="mb-1" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5V6a2 2 0 0 1 2-2h8.5"></path><path d="M16 2v4h4"></path><rect height="6" rx="1" width="8" x="8" y="10"></rect></svg>
<span className="tracking-tight">Classes</span>
</a>
<a className="relative flex flex-col items-center gap-1 py-4 text-[11px] text-white/70 hover:text-white transition-colors" href="#">
<svg className="mb-1" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M6 7V3h12v4"></path><path d="M6 21V7h12v14"></path><path d="M6 17h12"></path></svg>
<span className="tracking-tight">Career</span>
</a>
<a className="relative flex flex-col items-center gap-1 py-4 text-[11px] text-white/70 hover:text-white transition-colors" href="#">
<svg className="mb-1" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path></svg>
<span className="tracking-tight">Nexus AI</span>
</a>
</nav>
</div>
</aside>

<div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 opacity-0 pointer-events-none transition-opacity duration-300" id="overlay" onclick="toggleSidebar()"></div>

<main className="flex-1 lg:ml-20 w-full ml-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10">

<header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-100">NexusOS</h1>
<p className="text-sm text-neutral-300">College and Career learning management</p>
</div>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-800 px-3 py-2 rounded-lg border border-neutral-300/70 bg-white/60 hover:bg-white transition-colors backdrop-blur">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7-7-7"></path><path d="M5 12h14"></path></svg>
            Quick Access
          </button>
<a className="inline-flex items-center gap-2 text-sm text-white bg-gradient-to-tr from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 rounded-full px-4 py-2.5 shadow-sm transition-all" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z">
</path>
<path d="M20 3v4"></path>
<path d="M22 5h-4"></path>
</svg>
          Ask Nexus AI
        </a>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-700 bg-white/60 border border-neutral-300/70 rounded-full px-3 py-2 backdrop-blur">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
<span className="hidden sm:inline">Jordan Lee</span>
</div>
</div>
</header>

<section className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-xl overflow-hidden mb-10">
<div className="p-6 lg:p-8 space-y-6">

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-6 border-b border-white/15">
<div className="text-center lg:text-left">
<div className="text-2xl font-semibold">$85,000</div>
<div className="text-xs text-white/70">Estimated Market Value</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl font-semibold text-emerald-300">3.72</div>
<div className="text-xs text-white/70">Cumulative GPA</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl font-semibold text-purple-300">5</div>
<div className="text-xs text-white/70">Potential Career Paths</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl font-semibold text-blue-300">6</div>
<div className="text-xs text-white/70">In-Demand Skills</div>
</div>
</div>

<div className="hidden lg:grid grid-cols-6 gap-4 text-xs uppercase text-white/70 font-semibold">
<div className="col-span-2">Class</div>
<div>Schedule</div>
<div className="">Instructor</div>
<div>Grade</div>
<div>Related Roles</div>
</div>

<div className="space-y-3">
<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center bg-white/10 hover:bg-white/15 transition-all rounded-xl px-4 py-4 lg:py-3 border border-white/10">
<div className="flex items-center gap-3 col-span-1 lg:col-span-2">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-medium text-sm">
                CS</div>
<div>
<div className="text-sm font-semibold">CS 201 – Data Structures</div>
<div className="text-xs text-white/70">Fall 2025</div>
</div>
</div>
<div className="text-sm lg:text-center">Mon/Wed 10:30–11:45</div>
<div className="text-sm lg:text-center">Dr. Patel</div>
<div className="text-sm lg:text-center font-medium">A-</div>
<div className="text-sm lg:text-center text-blue-300">Software Engineer</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center bg-white/10 hover:bg-white/15 transition-all rounded-xl px-4 py-4 lg:py-3 border border-white/10">
<div className="flex items-center gap-3 col-span-1 lg:col-span-2">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-medium text-sm">
                MA</div>
<div>
<div className="text-sm font-semibold">MATH 240 – Linear Algebra</div>
<div className="text-xs text-white/70">Fall 2025</div>
</div>
</div>
<div className="text-sm lg:text-center">Tue/Thu 2:00–3:15</div>
<div className="text-sm lg:text-center">Prof. Nguyen</div>
<div className="text-sm lg:text-center font-medium">B+</div>
<div className="text-sm lg:text-center text-purple-300">Data Scientist</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-center bg-white/10 hover:bg-white/15 transition-all rounded-xl px-4 py-4 lg:py-3 border border-white/10">
<div className="flex items-center gap-3 col-span-1 lg:col-span-2">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-medium text-sm">
                EN</div>
<div>
<div className="text-sm font-semibold">ENG 210 – Technical Writing</div>
<div className="text-xs text-white/70">Fall 2025</div>
</div>
</div>
<div className="text-sm lg:text-center">Fri 9:00–11:30</div>
<div className="text-sm lg:text-center">A. Romero</div>
<div className="text-sm lg:text-center font-medium">A</div>
<div className="text-sm lg:text-center text-pink-300">Technical Writer</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row gap-3 p-4 bg-white/10 rounded-xl border border-white/15">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</span>
<input className="w-full bg-transparent border border-white/25 rounded-lg pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-white/60 text-white" placeholder="Search class or code (e.g., CS 201)..." type="text"/>
</div>
<input className="w-full sm:w-36 bg-transparent border border-white/25 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder-white/60 text-white" placeholder="Section" type="text"/>
<button className="hover:from-indigo-500 hover:to-purple-500 flex gap-2 transition-all font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-md pt-3 pr-5 pb-3 pl-5 gap-x-2 gap-y-2 items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Enroll
            </button>
</div>

<div className="border border-white/15 rounded-xl divide-y divide-white/10 bg-white/10 overflow-hidden">
<div className="px-4 py-3 flex items-center gap-2 text-xs uppercase text-white/70 font-semibold tracking-wide">
            Recommended Courses</div>
<div className="flex items-center gap-3 p-4 hover:bg-white/15 cursor-pointer transition-colors">
<div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-medium text-xs">
              UX</div>
<div className="flex-1">
<div className="text-sm font-semibold">DES 310 – Human-Centered Design</div>
<div className="text-xs text-white/70">Interdisciplinary • 3 credits</div>
</div>
<div className="text-right text-sm">
<div className="font-medium">Open</div>
<div className="text-xs text-emerald-300">Seats: 12</div>
</div>
</div>
<div className="flex items-center gap-3 p-4 hover:bg-white/15 cursor-pointer transition-colors">
<div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-lg flex items-center justify-center text-white font-medium text-xs">
              AI</div>
<div className="flex-1">
<div className="text-sm font-semibold">CS 325 – Intro to Machine Learning</div>
<div className="text-xs text-white/70">Technical Elective • 4 credits</div>
</div>
<div className="text-right text-sm">
<div className="font-medium">Waitlist</div>
<div className="text-xs text-amber-300">#7</div>
</div>
</div>
</div>
</div>
</section>

<div className="grid lg:grid-cols-3 gap-6">

<section className="lg:col-span-2 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-xl overflow-hidden">
<div className="p-6 lg:p-8">
<h2 className="text-xl font-semibold tracking-tight mb-1">Career Progress</h2>
<p className="text-sm text-white/70 mb-5">Applications and interview momentum over time</p>
<div className="rounded-xl border border-white/10 bg-white/5 p-3">
<div className="relative h-56 sm:h-72">
<div className="w-full h-full">
<canvas id="progressChart"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white shadow-xl overflow-hidden">
<div className="p-6 lg:p-8">
<h2 className="text-xl font-semibold tracking-tight mb-1">Upcoming</h2>
<p className="text-sm text-white/70 mb-5">Deadlines and reminders</p>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/10">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="15" rx="2" width="18" x="3" y="6"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold">CS 201 – Project Milestone</div>
<div className="text-xs text-white/70">Due Sep 22, 11:59 PM</div>
</div>
<span className="text-xs text-emerald-300">2d</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/10">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold">Resume Review – Career Center</div>
<div className="text-xs text-white/70">Sep 20, 2:30 PM</div>
</div>
<span className="text-xs text-amber-300">Soon</span>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 border border-white/10">
<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
<svg className="text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path>
<path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-sm font-semibold">Submit Internship Application</div>
<div className="text-xs text-white/70">TechStart • Sep 25</div>
</div>
<span className="text-xs text-emerald-300">Open</span>
</div>
</div>
</div>
</section>
</div>

<div className="mt-10 text-sm text-neutral-300">
      Manage your classes and career in one place. Secure, fast, and designed for clarity.
    </div>
</div>
</main>


    </>
  );
}
