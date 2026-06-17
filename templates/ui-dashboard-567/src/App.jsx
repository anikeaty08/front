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



    // Initialize Icons
    lucide.createIcons();

    // Navigation Logic
    function switchView(viewId) {
       // Hide all views
       document.querySelectorAll('.page-view').forEach(el => {
          el.classList.add('hidden');
       });
       
       // Show selected view
       const activeView = document.getElementById('view-' + viewId);
       if(activeView) {
          activeView.classList.remove('hidden');
       }

       // Update Nav State
       document.querySelectorAll('.nav-item').forEach(el => {
          // Reset styles
          el.classList.remove('bg-zinc-900', 'border-zinc-800', 'text-zinc-100');
          el.classList.add('text-zinc-400', 'border-transparent');
          
          if(el.id === 'nav-' + viewId) {
             // Active styles
             el.classList.add('bg-zinc-900', 'border-zinc-800', 'text-zinc-100');
             el.classList.remove('text-zinc-400', 'border-transparent');
          }
       });
    }

    // Set default view on load
    document.addEventListener('DOMContentLoaded', () => {
       switchView('dashboard');
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
      

<header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md flex items-center justify-between gap-4 px-6 py-3 sticky top-0 z-50">

<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="rounded-md border border-zinc-700 bg-zinc-900/80 px-2 py-1">
<span className="text-sm tracking-tight font-semibold">WeStart</span>
</div>
<span className="hidden sm:inline text-xs md:text-sm text-zinc-400">Founder Program</span>
</div>
<div className="hidden md:flex items-center gap-2 text-xs md:text-sm text-zinc-500">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-zinc-500"></span>
<span>Batch W24 · Cohort A</span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-500 border border-zinc-800 rounded-md px-2 py-1 bg-zinc-900/50">
<i className="w-3 h-3 stroke-1.5" data-lucide="search"></i>
<span>Search resources...</span>
</div>
<button className="relative flex items-center justify-center rounded-full border border-zinc-800 w-8 h-8 hover:bg-zinc-900 transition-colors">
<i className="w-4 h-4 stroke-1.5 text-zinc-300" data-lucide="bell"></i>
<span className="absolute top-0 right-0 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-zinc-950 border border-zinc-950">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</span>
</button>
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="hidden sm:flex flex-col items-end">
<span className="text-xs md:text-sm font-medium text-zinc-100 tracking-tight">Alex Founder</span>
<span className="text-[0.65rem] uppercase tracking-wider text-zinc-500">Acme AI</span>
</div>
<button className="flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 w-8 h-8">
<span className="text-xs font-semibold tracking-tight">AF</span>
</button>
</div>
</div>
</header>

<div className="flex-1 flex min-h-0 overflow-hidden">

<aside className="hidden md:flex flex-col w-64 border-r border-zinc-900 bg-zinc-950/90 overflow-y-auto">
<nav className="flex-1 flex flex-col gap-8 px-4 py-6">

<div className="flex flex-col gap-1">
<div className="text-[0.65rem] font-medium text-zinc-500 uppercase tracking-widest mb-2 px-2">Program</div>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md bg-zinc-900 border border-zinc-800 px-3 py-2 text-sm text-zinc-100 transition-all" id="nav-dashboard" onclick="switchView('dashboard')">
<i className="w-4 h-4 stroke-1.5" data-lucide="layout-grid"></i>
<span className="truncate">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent" id="nav-progress" onclick="switchView('progress')">
<i className="w-4 h-4 stroke-1.5" data-lucide="target"></i>
<span className="truncate">Program progress</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent" id="nav-modules" onclick="switchView('modules')">
<i className="w-4 h-4 stroke-1.5" data-lucide="layers"></i>
<span className="truncate">Modules</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent" id="nav-homework" onclick="switchView('homework')">
<i className="w-4 h-4 stroke-1.5" data-lucide="clipboard-list"></i>
<span className="truncate">Homework</span>
<span className="ml-auto text-[0.6rem] bg-zinc-800 text-zinc-300 py-0.5 px-1.5 rounded-full">3</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent" id="nav-mentor" onclick="switchView('mentor')">
<i className="w-4 h-4 stroke-1.5" data-lucide="briefcase"></i>
<span className="truncate">Mentor tasks</span>
</button>
<button className="nav-item w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent" id="nav-events" onclick="switchView('events')">
<i className="w-4 h-4 stroke-1.5" data-lucide="calendar"></i>
<span className="truncate">Events</span>
</button>
</div>

<div className="flex flex-col gap-1">
<div className="text-[0.65rem] font-medium text-zinc-500 uppercase tracking-widest mb-2 px-2">Startup</div>
<button className="w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent">
<i className="w-4 h-4 stroke-1.5" data-lucide="building-2"></i>
<span className="truncate">Startup profile</span>
</button>
<button className="w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent">
<i className="w-4 h-4 stroke-1.5" data-lucide="store"></i>
<span className="truncate">Marketplace</span>
</button>
</div>
<div className="mt-auto pt-6 border-t border-zinc-900">
<button className="w-full flex items-center gap-2.5 rounded-md hover:bg-zinc-900/50 px-3 py-2 text-sm text-zinc-400 hover:text-zinc-200 transition-all border border-transparent">
<i className="w-4 h-4 stroke-1.5" data-lucide="help-circle"></i>
<span className="truncate">Support &amp; FAQ</span>
</button>
</div>
</nav>
</aside>

<main className="flex-1 min-w-0 bg-zinc-950/50 overflow-y-auto relative scroll-smooth">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<section className="page-view space-y-6" id="view-dashboard">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Dashboard</h1>
<p className="text-zinc-400 text-sm mt-1">Welcome back, Alex. Here is your daily briefing.</p>
</div>
<span className="text-xs text-zinc-500 font-mono">Last updated: Just now</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Attendance</span>
<i className="w-4 h-4 text-zinc-600" data-lucide="users"></i>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100">92%</div>
<div className="text-xs text-emerald-500 mt-1 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> Top 10% of cohort
                   </div>
</div>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Assignments</span>
<i className="w-4 h-4 text-zinc-600" data-lucide="file-check"></i>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100">8/12</div>
<div className="text-xs text-zinc-400 mt-1">Submitted on time</div>
</div>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Mentor Hours</span>
<i className="w-4 h-4 text-zinc-600" data-lucide="clock"></i>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100">4.5h</div>
<div className="text-xs text-zinc-400 mt-1">Next session: Tomorrow</div>
</div>
</div>
<div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-xl flex flex-col justify-between h-32">
<div className="flex justify-between items-start">
<span className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Credits Used</span>
<i className="w-4 h-4 text-zinc-600" data-lucide="cloud"></i>
</div>
<div>
<div className="text-2xl font-semibold text-zinc-100">$2,400</div>
<div className="text-xs text-zinc-400 mt-1">of $10,000 AWS credits</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">

<div className="border border-zinc-800 bg-zinc-950 rounded-xl overflow-hidden">
<div className="p-5 border-b border-zinc-800 flex justify-between items-center">
<h3 className="font-medium text-zinc-200">Current Focus: Validation</h3>
<button className="text-xs text-zinc-500 hover:text-zinc-300 flex items-center gap-1" onclick="switchView('modules')">
                    View curriculum <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
<div className="p-5">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 font-bold">3</div>
<div>
<div className="text-sm font-medium text-zinc-100">Week 3: Customer Discovery</div>
<div className="text-xs text-zinc-500">Identify pain points and validate problem hypothesis.</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-400">Progress (2/5 lessons)</span>
<span className="text-zinc-300">40%</span>
</div>
<div className="w-full bg-zinc-900 rounded-full h-1.5 overflow-hidden">
<div className="bg-zinc-200 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
</div>
</div>

<div className="border border-zinc-800 bg-zinc-950/50 rounded-xl p-5">
<h3 className="font-medium text-zinc-200 mb-4">Recent Activity</h3>
<div className="space-y-4">
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></div>
<div>
<p className="text-sm text-zinc-300">Submitted <span className="text-zinc-100 font-medium">Value Proposition Canvas</span></p>
<p className="text-xs text-zinc-500 mt-0.5">2 hours ago</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-blue-500"></div>
<div>
<p className="text-sm text-zinc-300">New feedback from <span className="text-zinc-100 font-medium">Sarah Mentor</span> on Pitch Deck</p>
<p className="text-xs text-zinc-500 mt-0.5">Yesterday</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-zinc-600"></div>
<div>
<p className="text-sm text-zinc-300">Unlocked Module: <span className="text-zinc-100 font-medium">Unit Economics</span></p>
<p className="text-xs text-zinc-500 mt-0.5">2 days ago</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-zinc-200">Up Next</h3>
<span className="text-xs text-zinc-500">In 2 days</span>
</div>
<div className="p-3 bg-zinc-900 border border-zinc-800 rounded-lg mb-3">
<div className="text-xs text-zinc-400 mb-1">Live Workshop</div>
<div className="text-sm font-medium text-zinc-100">GTM Strategy Deep Dive</div>
<div className="text-xs text-zinc-500 mt-2 flex items-center gap-2">
<i className="w-3 h-3" data-lucide="clock"></i> 16:00 - 17:30
                     </div>
</div>
<button className="w-full py-2 text-xs font-medium text-zinc-300 border border-zinc-700 rounded-md hover:bg-zinc-800 transition-colors" onclick="switchView('events')">
                     View Schedule
                  </button>
</div>

<div className="border border-zinc-800 bg-zinc-900/30 rounded-xl p-5">
<h3 className="text-sm font-semibold text-zinc-200 mb-4">Due Soon</h3>
<div className="space-y-3">
<div className="flex items-start gap-2">
<div className="w-4 h-4 rounded border border-zinc-600 mt-0.5 flex-shrink-0"></div>
<span className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">Weekly Check-in form</span>
</div>
<div className="flex items-start gap-2">
<div className="w-4 h-4 rounded border border-zinc-600 mt-0.5 flex-shrink-0"></div>
<span className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer transition-colors">Upload Financial Model v1</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden space-y-6" id="view-modules">
<div className="flex items-end justify-between border-b border-zinc-800 pb-4">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Modules</h1>
<p className="text-zinc-400 text-sm mt-1">Core curriculum and learning materials.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">Total Progress: 35%</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 space-y-2">
<button className="w-full text-left p-3 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-between group">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-sm font-medium text-zinc-100">1. Onboarding</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 flex items-center justify-between group transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-circle-2"></i>
<span className="text-sm text-zinc-400 group-hover:text-zinc-200">2. Problem Definition</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-between group shadow-sm">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border-2 border-zinc-100 border-t-transparent animate-spin-slow"></div>
<span className="text-sm font-medium text-zinc-100">3. Customer Discovery</span>
</div>
<span className="text-[0.65rem] uppercase font-bold text-zinc-500 tracking-wider">Current</span>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 flex items-center justify-between group transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="lock"></i>
<span className="text-sm text-zinc-500">4. Solution &amp; MVP</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 flex items-center justify-between group transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="lock"></i>
<span className="text-sm text-zinc-500">5. Unit Economics</span>
</div>
</button>
<button className="w-full text-left p-3 rounded-lg hover:bg-zinc-900/50 border border-transparent hover:border-zinc-800 flex items-center justify-between group transition-all">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-zinc-600" data-lucide="lock"></i>
<span className="text-sm text-zinc-500">6. Fundraising</span>
</div>
</button>
</div>

<div className="lg:col-span-2 space-y-6">
<div className="rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">

<div className="aspect-video w-full bg-zinc-900 flex items-center justify-center relative group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
<div className="absolute bottom-4 left-4 right-4">
<div className="text-lg font-medium text-white">The Mom Test: How to talk to customers</div>
<div className="text-sm text-zinc-300">12:45 • Video Lesson</div>
</div>
</div>
<div className="p-6 space-y-6">
<div>
<h3 className="text-lg font-medium text-zinc-100 mb-2">About this module</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Learning how to validate your idea before building is crucial. In this module, we cover the techniques from "The Mom Test" to ensure you are getting unbiased feedback from your potential customers. You will learn to ask questions that reveal past behaviors rather than future intent.
                         </p>
</div>
<div className="space-y-3">
<h4 className="text-sm font-medium text-zinc-200 uppercase tracking-wide">Resources</h4>
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="file-text"></i>
<div>
<div className="text-sm font-medium text-zinc-200">Interview Script Template</div>
<div className="text-xs text-zinc-500">PDF • 245 KB</div>
</div>
<i className="w-4 h-4 text-zinc-600 ml-auto" data-lucide="download"></i>
</a>
<a className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 transition-colors" href="#">
<i className="w-5 h-5 text-zinc-500" data-lucide="link"></i>
<div>
<div className="text-sm font-medium text-zinc-200">Recommended Reading List</div>
<div className="text-xs text-zinc-500">External Link</div>
</div>
<i className="w-4 h-4 text-zinc-600 ml-auto" data-lucide="external-link"></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden space-y-6" id="view-homework">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Homework</h1>
<p className="text-zinc-400 text-sm mt-1">Assignments, submissions, and feedback.</p>
</div>
<div className="flex gap-2 bg-zinc-900/50 p-1 rounded-lg border border-zinc-800">
<button className="px-3 py-1.5 rounded-md bg-zinc-800 text-xs text-zinc-100 font-medium shadow-sm">To Do</button>
<button className="px-3 py-1.5 rounded-md hover:bg-zinc-800/50 text-xs text-zinc-400 font-medium transition-colors">Completed</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex flex-col rounded-xl border border-red-900/30 bg-gradient-to-b from-red-950/10 to-zinc-950 p-5 gap-4 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
<div className="flex justify-between items-start">
<div className="px-2 py-1 rounded bg-red-500/10 text-red-400 text-[0.65rem] font-medium border border-red-500/20 uppercase tracking-wider">Due Tomorrow</div>
<i className="w-4 h-4 text-red-500/50" data-lucide="alert-circle"></i>
</div>
<div>
<h3 className="font-semibold text-zinc-100">Customer Interview Log</h3>
<p className="text-sm text-zinc-400 mt-1 leading-snug">Document at least 5 discovery interviews using the provided template.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-800/50 flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-zinc-100 text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors">Submit</button>
<button className="px-3 py-2 rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-300 text-xs hover:border-zinc-500 transition-colors">Details</button>
</div>
</div>

<div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-5 gap-4">
<div className="flex justify-between items-start">
<div className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[0.65rem] font-medium border border-zinc-700 uppercase tracking-wider">Due in 3 days</div>
</div>
<div>
<h3 className="font-semibold text-zinc-100">Competitor Analysis Matrix</h3>
<p className="text-sm text-zinc-400 mt-1 leading-snug">Map out direct and indirect competitors on a 2x2 axis.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-900 flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition-colors">Start Draft</button>
<button className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs hover:text-zinc-200 transition-colors">Details</button>
</div>
</div>

<div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-5 gap-4">
<div className="flex justify-between items-start">
<div className="px-2 py-1 rounded bg-zinc-800 text-zinc-400 text-[0.65rem] font-medium border border-zinc-700 uppercase tracking-wider">Due in 5 days</div>
</div>
<div>
<h3 className="font-semibold text-zinc-100">Landing Page Wireframe</h3>
<p className="text-sm text-zinc-400 mt-1 leading-snug">Create a low-fidelity wireframe for your main landing page.</p>
</div>
<div className="mt-auto pt-4 border-t border-zinc-900 flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-zinc-800 text-zinc-200 text-xs font-medium hover:bg-zinc-700 transition-colors">Start Draft</button>
<button className="px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 text-xs hover:text-zinc-200 transition-colors">Details</button>
</div>
</div>
</div>

<div className="pt-6">
<h3 className="text-sm font-medium text-zinc-400 mb-4 uppercase tracking-wider">Recently Graded</h3>
<div className="border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950">
<table className="w-full text-left text-sm">
<thead className="bg-zinc-900/50 text-zinc-500 border-b border-zinc-800">
<tr>
<th className="px-4 py-3 font-medium">Assignment</th>
<th className="px-4 py-3 font-medium">Submitted</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Score</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800/50">
<tr>
<td className="px-4 py-3 text-zinc-200">Problem Statement V1</td>
<td className="px-4 py-3 text-zinc-500">Mar 10</td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500">Pass</span></td>
<td className="px-4 py-3 text-right text-zinc-300">5/5</td>
</tr>
<tr>
<td className="px-4 py-3 text-zinc-200">User Persona Deck</td>
<td className="px-4 py-3 text-zinc-500">Mar 08</td>
<td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-500">Changes Requested</span></td>
<td className="px-4 py-3 text-right text-zinc-300">-</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="page-view hidden space-y-6" id="view-progress">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Program Progress</h1>
<p className="text-zinc-400 text-sm mt-1">Track your journey through the 12-week incubation.</p>
</div>
</div>

<div className="border border-zinc-800 rounded-xl bg-zinc-950 p-6 md:p-8">
<div className="relative">

<div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-800"></div>
<div className="space-y-12">

<div className="relative pl-12">
<div className="absolute left-[0.55rem] top-1.5 w-6 h-6 rounded-full bg-emerald-500 border-4 border-zinc-950 flex items-center justify-center">
<i className="w-3 h-3 text-zinc-950" data-lucide="check"></i>
</div>
<div>
<h3 className="text-lg font-medium text-zinc-100">Phase 1: Foundation</h3>
<p className="text-sm text-zinc-400 mb-3">Weeks 1-2 • Completed on Mar 01</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="p-3 rounded border border-zinc-800 bg-zinc-900/30 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-square"></i>
<span className="text-sm text-zinc-300">Team Formation</span>
</div>
<div className="p-3 rounded border border-zinc-800 bg-zinc-900/30 flex items-center gap-2">
<i className="w-4 h-4 text-emerald-500" data-lucide="check-square"></i>
<span className="text-sm text-zinc-300">Legal Incorporation Basics</span>
</div>
</div>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-[0.55rem] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-zinc-950 animate-pulse"></div>
<div>
<div className="flex items-center gap-3 mb-1">
<h3 className="text-lg font-medium text-zinc-100">Phase 2: Validation</h3>
<span className="bg-zinc-100 text-zinc-950 text-[0.65rem] font-bold px-2 py-0.5 rounded uppercase tracking-wide">Current</span>
</div>
<p className="text-sm text-zinc-400 mb-4">Weeks 3-6 • Due Apr 15</p>
<div className="space-y-4">
<div className="p-4 rounded-lg border border-zinc-700 bg-zinc-900/50">
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-200 font-medium">Customer Interviews</span>
<span className="text-zinc-400">5 / 20 verified</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
<div className="p-4 rounded-lg border border-zinc-700 bg-zinc-900/50">
<div className="flex justify-between text-sm mb-2">
<span className="text-zinc-200 font-medium">Market Sizing Model</span>
<span className="text-zinc-400">Not Started</span>
</div>
<div className="w-full bg-zinc-800 rounded-full h-2">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '0%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="relative pl-12 opacity-50">
<div className="absolute left-[0.55rem] top-1.5 w-6 h-6 rounded-full bg-zinc-800 border-4 border-zinc-950"></div>
<div>
<h3 className="text-lg font-medium text-zinc-300">Phase 3: Traction</h3>
<p className="text-sm text-zinc-500">Weeks 7-10</p>
</div>
</div>

<div className="relative pl-12 opacity-50">
<div className="absolute left-[0.55rem] top-1.5 w-6 h-6 rounded-full bg-zinc-800 border-4 border-zinc-950"></div>
<div>
<h3 className="text-lg font-medium text-zinc-300">Phase 4: Fundraising</h3>
<p className="text-sm text-zinc-500">Weeks 11-12</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden space-y-6" id="view-mentor">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Mentor Tasks</h1>
<p className="text-zinc-400 text-sm mt-1">Action items assigned during 1:1 sessions.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-950 hover:bg-zinc-200">
<i className="w-3.5 h-3.5" data-lucide="plus"></i> Request Session
              </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-4">

<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 transition-colors group">
<button className="mt-1 w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 group-hover/btn:text-white transition-all">
<i className="w-3 h-3 opacity-0 hover:opacity-100 text-zinc-950" data-lucide="check"></i>
</button>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-zinc-100">Refine TAM/SAM/SOM calculation</span>
<span className="px-1.5 py-0.5 rounded text-[0.6rem] bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase">High Priority</span>
</div>
<p className="text-sm text-zinc-400 mb-2">The current numbers seem too broad. Focus on the bottom-up approach as discussed.</p>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<div className="flex items-center gap-1">
<img alt="" className="w-4 h-4 rounded-full" src="https://ui-avatars.com/api/?name=Sarah+M&amp;background=random&amp;size=16"/>
<span>Assigned by Sarah</span>
</div>
<span>•</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="calendar"></i>
<span>Due Mar 20</span>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 transition-colors">
<button className="mt-1 w-5 h-5 rounded-full border border-zinc-600 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all"></button>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<span className="text-sm font-medium text-zinc-100">Connect with warm leads</span>
</div>
<p className="text-sm text-zinc-400 mb-2">Reach out to the 3 contacts I shared via email for beta testing.</p>
<div className="flex items-center gap-3 text-xs text-zinc-500">
<div className="flex items-center gap-1">
<img alt="" className="w-4 h-4 rounded-full" src="https://ui-avatars.com/api/?name=David+L&amp;background=random&amp;size=16"/>
<span>Assigned by David</span>
</div>
<span>•</span>
<div className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="calendar"></i>
<span>Due Mar 22</span>
</div>
</div>
</div>
</div>
</div>

<div className="border border-zinc-800 rounded-xl bg-zinc-950 p-5 h-fit">
<h3 className="text-sm font-medium text-zinc-200 mb-4">Your Mentors</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">SM</div>
<div>
<div className="text-sm font-medium text-zinc-100">Sarah Miller</div>
<div className="text-xs text-zinc-500">Product Strategy</div>
</div>
<button className="ml-auto p-2 rounded-full hover:bg-zinc-800 text-zinc-400">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400">DL</div>
<div>
<div className="text-sm font-medium text-zinc-100">David Lee</div>
<div className="text-xs text-zinc-500">Go-to-Market</div>
</div>
<button className="ml-auto p-2 rounded-full hover:bg-zinc-800 text-zinc-400">
<i className="w-4 h-4" data-lucide="message-square"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden space-y-6" id="view-events">
<div className="flex items-end justify-between">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-50">Events Schedule</h1>
<p className="text-zinc-400 text-sm mt-1">Workshops, AMAs, and cohort gatherings.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 hover:text-zinc-100">
<i className="w-3.5 h-3.5" data-lucide="download"></i> Subscribe to Calendar
              </button>
</div>
<div className="space-y-2">
<div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur py-2 border-b border-zinc-800 mb-4">
<h3 className="text-sm font-medium text-zinc-400">March 2024</h3>
</div>

<div className="group flex gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/40 transition-colors cursor-pointer">
<div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700">
<span className="text-xs text-zinc-500 uppercase font-bold">Mar</span>
<span className="text-xl font-bold text-zinc-200">12</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium text-zinc-100 group-hover:text-white">GTM Strategy Deep Dive</h4>
<p className="text-sm text-zinc-400 mt-1">Expert session on building your first sales funnel.</p>
</div>
<span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300">Workshop</span>
</div>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 16:00 - 17:30</div>
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="video"></i> Zoom Link</div>
</div>
</div>
<div className="self-center">
<button className="p-2 rounded-md hover:bg-zinc-800 text-zinc-400">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="group flex gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950 hover:bg-zinc-900/40 transition-colors cursor-pointer">
<div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700">
<span className="text-xs text-zinc-500 uppercase font-bold">Mar</span>
<span className="text-xl font-bold text-zinc-200">15</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium text-zinc-100 group-hover:text-white">Founder Mixer (Cohort A)</h4>
<p className="text-sm text-zinc-400 mt-1">Casual networking and weekly wins celebration.</p>
</div>
<span className="px-2 py-1 rounded bg-zinc-800 text-xs text-zinc-300">Social</span>
</div>
<div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="clock"></i> 18:00 - 19:00</div>
<div className="flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Gather Town</div>
</div>
</div>
</div>

<div className="group flex gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-950/40 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<div className="flex flex-col items-center justify-center w-16 h-16 rounded-lg bg-zinc-900 border border-zinc-800">
<span className="text-xs text-zinc-600 uppercase font-bold">Mar</span>
<span className="text-xl font-bold text-zinc-500">10</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium text-zinc-400 line-through">Orientation &amp; Kickoff</h4>
<p className="text-sm text-zinc-500 mt-1">Watch recording available in modules.</p>
</div>
<span className="px-2 py-1 rounded bg-zinc-900 text-xs text-zinc-600">Completed</span>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
</div>


    </>
  );
}
