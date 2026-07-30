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



  lucide.createIcons();

  // Mobile menu toggle
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  // Timer functionality
  let seconds = 9252, running = true;
  const timerEl = document.getElementById('timer');
  function updateTimer() {
    const h = String(Math.floor(seconds / 3600)).padStart(2,'0');
    const m = String(Math.floor(seconds % 3600 / 60)).padStart(2,'0');
    const s = String(seconds % 60).padStart(2,'0');
    timerEl.textContent = `${h}:${m}:${s}`;
  }
  updateTimer();
  let interval = setInterval(() => { if(running){ seconds++; updateTimer(); } }, 1000);
  document.getElementById('pauseBtn').addEventListener('click', () => { running = !running; });
  document.getElementById('stopBtn').addEventListener('click', () => { running = false; seconds = 0; updateTimer(); });

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
      

<div className="min-h-screen flex flex-col lg:flex-row">

<aside className="bg-zinc-950 border-r border-zinc-800 lg:w-64 w-full lg:h-auto h-16 px-6 py-4 flex lg:flex-col items-center lg:items-stretch gap-6">

<div className="flex items-center justify-between w-full">
<div className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-orange-400">
<svg className="lucide lucide-rainbow lucide-circle-slash-2 lucide-zap w-[24px] h-[24px]" data-lucide="rainbow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(251, 146, 60)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a10 10 0 0 0-20 0"></path><path d="M6 17a6 6 0 0 1 12 0"></path><path d="M10 17a2 2 0 0 1 4 0"></path></svg>
<span className="hidden lg:inline font-normal tracking-tight">Nexus</span>
</div>
<button className="lg:hidden" id="mobileMenuBtn"><svg className="lucide lucide-menu w-6 h-6 text-zinc-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg></button>
</div>

<nav className="lg:flex flex-col gap-2 hidden lg:block w-full flex-1" id="mobileMenu">
<span className="uppercase text-xs font-medium text-zinc-500 mt-4 lg:mt-0 tracking-wide">Workspace</span>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium bg-orange-950 text-orange-400 border border-orange-800" href="#">
<svg className="lucide lucide-home w-4 h-4" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg> Overview
      </a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-folder w-4 h-4" data-lucide="folder" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg> Projects
        <span className="ml-auto text-[10px] font-medium bg-zinc-100 text-zinc-900 rounded-full py-0.5 px-2">8</span>
</a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Timeline
      </a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-pie-chart w-4 h-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg> Reports
      </a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-user-check w-4 h-4" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg> Team
      </a>
<span className="uppercase text-xs font-medium text-zinc-500 mt-6 tracking-wide">Account</span>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-sliders w-4 h-4" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="4" y1="21" y2="14"></line><line x1="4" x2="4" y1="10" y2="3"></line><line x1="12" x2="12" y1="21" y2="12"></line><line x1="12" x2="12" y1="8" y2="3"></line><line x1="20" x2="20" y1="21" y2="16"></line><line x1="20" x2="20" y1="12" y2="3"></line><line x1="2" x2="6" y1="14" y2="14"></line><line x1="10" x2="14" y1="8" y2="8"></line><line x1="18" x2="22" y1="16" y2="16"></line></svg> Preferences
      </a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-help-circle w-4 h-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg> Support
      </a>
<a className="flex items-center gap-3 py-2.5 px-3 rounded-lg text-sm font-medium hover:bg-zinc-800 text-zinc-300" href="#">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg> Sign Out
      </a>

<div className="mt-auto bg-gradient-to-br from-orange-600 to-indigo-700 text-white rounded-xl p-4">
<h3 className="font-medium mb-3">Active Session</h3>
<div className="text-xl font-semibold mb-4 font-mono" id="timer">02:34:52</div>
<div className="flex gap-2">
<button className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg flex items-center justify-center gap-1 text-xs font-medium transition-colors" id="pauseBtn">
<svg className="lucide lucide-pause w-3 h-3" data-lucide="pause" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="1" width="4" x="14" y="4"></rect><rect height="16" rx="1" width="4" x="6" y="4"></rect></svg> Pause
          </button>
<button className="flex-1 bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg flex items-center justify-center gap-1 text-xs font-medium transition-colors" id="stopBtn">
<svg className="lucide lucide-square w-3 h-3" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg> Stop
          </button>
</div>
</div>

<div className="mt-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-4 text-white">
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
<span className="font-medium">Upgrade to Pro</span>
</div>
<p className="text-xs text-purple-100 mb-4">Unlock advanced features and unlimited projects</p>
<button className="w-full text-xs bg-white text-purple-700 font-medium rounded-lg px-4 py-2">Upgrade Now</button>
</div>
</nav>
</aside>

<main className="flex-1 p-4 lg:p-8 overflow-y-auto">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

<div className="flex-1 max-w-md relative">
<svg className="lucide lucide-search w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-10 pr-20 py-2.5 rounded-lg border border-zinc-700 bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-zinc-100 placeholder-zinc-400" placeholder="Search projects, tasks..." type="text" />
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<span className="hidden md:inline text-xs font-medium text-zinc-500 bg-zinc-700 rounded px-2 py-1">⌘K</span>
</div>
</div>

<div className="flex items-center gap-3">
<button className="relative p-2 rounded-lg hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-message-square w-5 h-5 text-zinc-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</button>
<button className="relative p-2 rounded-lg hover:bg-zinc-800 transition-colors">
<svg className="lucide lucide-bell w-5 h-5 text-zinc-400" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<div className="flex items-center gap-3 pl-3 border-l border-zinc-700">
<img alt="avatar" className="w-9 h-9 object-cover rounded-full" src="https://images.unsplash.com/photo-1511929825537-516974a253df?w=1080&q=80" />
<div className="hidden md:block">
<p className="text-sm font-medium leading-none text-zinc-100">Sarah Chen</p>
<span className="text-xs text-zinc-400">sarah@nexus.app</span>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Project Overview</h1>
<p className="text-zinc-400 mt-2">Track progress and manage your team's workflow efficiently.</p>
</div>

<div className="flex flex-wrap gap-3 mb-8">
<button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg px-4 py-2.5 text-sm font-medium transition-colors">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> New Project
      </button>
<button className="border border-zinc-700 hover:bg-zinc-800 text-zinc-300 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors">Import</button>
<button className="border border-zinc-700 hover:bg-zinc-800 text-zinc-300 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors">Export</button>
</div>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">

<div className="relative overflow-hidden text-white bg-[url(https://images.unsplash.com/photo-1638072536413-61c5c62b652e?w=1080&q=80)] bg-cover rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium text-orange-100">Active Projects</p>
<div className="p-2 bg-white bg-opacity-20 rounded-lg">
<svg className="lucide lucide-briefcase w-4 h-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
</div>
<h2 className="text-3xl font-semibold mb-2">18</h2>
<span className="text-xs text-orange-100 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +12% from last month
        </span>
</div>

<div className="bg-zinc-800 bg-[url(https://images.unsplash.com/photo-1719432268911-f3ef8b7bd5ec?w=1080&q=80)] bg-cover border-zinc-700 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium text-zinc-400">Completed</p>
<div className="p-2 bg-green-900 rounded-lg">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<h2 className="text-3xl font-semibold mb-2 text-zinc-100">42</h2>
<span className="text-xs text-green-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +8% increase
        </span>
</div>

<div className="bg-zinc-800 bg-[url(https://images.unsplash.com/photo-1637825891028-564f672aa42c?w=1080&q=80)] bg-cover border-zinc-700 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium text-zinc-400">In Progress</p>
<div className="p-2 bg-amber-900 rounded-lg">
<svg className="lucide lucide-clock w-4 h-4 text-amber-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
</div>
<h2 className="text-3xl font-semibold mb-2 text-zinc-100">26</h2>
<span className="text-xs text-amber-400 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +15% active
        </span>
</div>

<div className="bg-zinc-800 bg-[url(https://images.unsplash.com/photo-1678581231067-644dddeca6dc?w=1080&q=80)] bg-cover border-zinc-700 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium text-zinc-400">On Hold</p>
<div className="p-2 bg-zinc-700 rounded-lg">
<svg className="lucide lucide-pause-circle w-4 h-4 text-zinc-400" data-lucide="pause-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="10" x2="10" y1="15" y2="9"></line><line x1="14" x2="14" y1="15" y2="9"></line></svg>
</div>
</div>
<h2 className="text-3xl font-semibold mb-2 text-zinc-100">4</h2>
<span className="text-xs text-zinc-500">Awaiting review</span>
</div>
</div>

<div className="grid gap-6 lg:grid-cols-3 mb-8">

<div className="lg:col-span-2 space-y-6">

<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-zinc-100">Weekly Progress</h3>
<select className="text-sm border border-zinc-700 bg-zinc-800 text-zinc-300 rounded-lg px-3 py-1.5">
<option>This Week</option>
<option>Last Week</option>
<option>This Month</option>
</select>
</div>
<div className="flex justify-between items-end h-48 gap-4">
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-20 rounded-t-lg bg-zinc-700 relative"></div>
<span className="text-xs text-zinc-500">Mon</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-32 rounded-t-lg bg-orange-500 relative">
<span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-zinc-300">68%</span>
</div>
<span className="text-xs text-zinc-500">Tue</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-40 rounded-t-lg bg-orange-600"></div>
<span className="text-xs text-zinc-500">Wed</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-36 rounded-t-lg bg-orange-700"></div>
<span className="text-xs text-zinc-500">Thu</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-28 rounded-t-lg bg-orange-400"></div>
<span className="text-xs text-zinc-500">Fri</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-16 rounded-t-lg bg-zinc-600"></div>
<span className="text-xs text-zinc-500">Sat</span>
</div>
<div className="flex flex-col items-center gap-2 flex-1">
<div className="w-full h-24 rounded-t-lg bg-zinc-600"></div>
<span className="text-xs text-zinc-500">Sun</span>
</div>
</div>
</div>

<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-zinc-100">Team Activity</h3>
<button className="flex items-center gap-1 border border-zinc-700 text-zinc-300 rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-zinc-700">
<svg className="lucide lucide-user-plus w-3 h-3" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg> Invite
            </button>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4">
<img alt="" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=1080&q=80" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Elena Rodriguez</p>
<span className="text-xs text-zinc-400 truncate">Completed API integration for payment system</span>
</div>
<span className="text-xs bg-green-900 text-green-400 font-medium px-2 py-1 rounded-full">Done</span>
</div>
<div className="flex items-center gap-4">
<img alt="" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?w=1080&q=80" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Marcus Thompson</p>
<span className="text-xs text-zinc-400 truncate">Working on user dashboard redesign</span>
</div>
<span className="text-xs bg-orange-900 text-orange-400 font-medium px-2 py-1 rounded-full">Active</span>
</div>
<div className="flex gap-4 items-center">
<img alt="" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1507101105822-7472b28e22ac?w=1080&q=80" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Sophia Kim</p>
<span className="text-xs text-zinc-400 truncate">Optimizing database queries for better performance</span>
</div>
<span className="text-xs bg-green-900 text-green-400 font-medium px-2 py-1 rounded-full">Done</span>
</div>
<div className="flex items-center gap-4">
<img alt="" className="w-10 h-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?w=1080&q=80" />
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">James Wilson</p>
<span className="text-xs text-zinc-400 truncate">Setting up CI/CD pipeline for deployment</span>
</div>
<span className="text-xs bg-amber-900 text-amber-400 font-medium px-2 py-1 rounded-full">Review</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<h3 className="font-semibold text-zinc-100 mb-4">Upcoming</h3>
<div className="space-y-4">
<div className="p-3 bg-orange-950 rounded-lg border border-orange-800">
<p className="text-sm font-medium text-zinc-100 mb-1">Design Review Meeting</p>
<span className="text-xs text-zinc-400">Today • 2:00 PM - 3:30 PM</span>
<div className="flex items-center gap-2 mt-2">
<button className="flex items-center gap-1 bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-1.5 text-xs font-medium">
<svg className="lucide lucide-video w-3 h-3" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> Join Call
                </button>
</div>
</div>
<div className="p-3 bg-zinc-700 rounded-lg">
<p className="text-sm font-medium text-zinc-100 mb-1">Sprint Planning</p>
<span className="text-xs text-zinc-400">Tomorrow • 10:00 AM</span>
</div>
</div>
</div>

<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-zinc-100">Recent Projects</h3>
<button className="flex items-center gap-1 border border-zinc-700 text-zinc-300 rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-zinc-700">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg> Create
            </button>
</div>
<ul className="space-y-4">
<li className="flex gap-3">
<div className="p-2 bg-purple-900 rounded-lg">
<svg className="lucide lucide-smartphone w-4 h-4 text-purple-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Mobile App Redesign</p>
<span className="text-xs text-zinc-400">Due Dec 15, 2024</span>
</div>
</li>
<li className="flex gap-3">
<div className="p-2 bg-green-900 rounded-lg">
<svg className="lucide lucide-server w-4 h-4 text-green-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">API Documentation</p>
<span className="text-xs text-zinc-400">Due Dec 20, 2024</span>
</div>
</li>
<li className="flex gap-3">
<div className="p-2 bg-orange-900 rounded-lg">
<svg className="lucide lucide-globe w-4 h-4 text-orange-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Website Migration</p>
<span className="text-xs text-zinc-400">Due Dec 25, 2024</span>
</div>
</li>
<li className="flex gap-3">
<div className="p-2 bg-orange-900 rounded-lg">
<svg className="lucide lucide-shield w-4 h-4 text-orange-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-zinc-100">Security Audit</p>
<span className="text-xs text-zinc-400">Due Jan 5, 2025</span>
</div>
</li>
</ul>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<h3 className="font-semibold text-zinc-100 mb-6">Overall Progress</h3>
<div className="flex items-center gap-8">
<div className="relative">
<div className="w-32 h-32 rounded-full bg-zinc-700"></div>
<div className="absolute inset-0 rounded-full" style={{background: `conic-gradient(#2563eb 0% 73%, #374151 73% 100%)`}}></div>
<div className="absolute inset-3 bg-zinc-800 rounded-full flex items-center justify-center">
<span className="text-xl font-semibold text-zinc-100">73%</span>
</div>
</div>
<ul className="space-y-3 text-sm">
<li className="flex items-center gap-3">
<span className="w-3 h-3 bg-orange-600 rounded-full"></span>
<span className="text-zinc-300">Completed Tasks</span>
<span className="ml-auto font-medium text-zinc-100">156</span>
</li>
<li className="flex items-center gap-3">
<span className="w-3 h-3 bg-amber-500 rounded-full"></span>
<span className="text-zinc-300">In Progress</span>
<span className="ml-auto font-medium text-zinc-100">23</span>
</li>
<li className="flex items-center gap-3">
<span className="w-3 h-3 bg-zinc-500 rounded-full"></span>
<span className="text-zinc-300">Pending</span>
<span className="ml-auto font-medium text-zinc-100">8</span>
</li>
</ul>
</div>
</div>
<div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
<h3 className="font-semibold text-zinc-100 mb-6">Quick Actions</h3>
<div className="grid grid-cols-2 gap-3">
<button className="flex flex-col items-center gap-2 p-4 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-file-plus w-6 h-6 text-orange-400" data-lucide="file-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M9 15h6"></path><path d="M12 18v-6"></path></svg>
<span className="text-sm font-medium text-zinc-300">New Task</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-users w-6 h-6 text-green-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-medium text-zinc-300">Add Team</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-calendar-plus w-6 h-6 text-purple-400" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
<span className="text-sm font-medium text-zinc-300">Schedule</span>
</button>
<button className="flex flex-col items-center gap-2 p-4 border border-zinc-700 rounded-lg hover:bg-zinc-700 transition-colors">
<svg className="lucide lucide-download w-6 h-6 text-orange-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm font-medium text-zinc-300">Export</span>
</button>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
