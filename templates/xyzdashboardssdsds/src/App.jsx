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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
25: '#F9FAFB', // Lighter bg
50: '#F8FAFC',
100: '#F1F5F9',
200: '#E2E8F0',
300: '#CBD5E1',
400: '#94A3B8',
500: '#64748B',
600: '#475569',
700: '#334155',
800: '#1E293B',
900: '#0F172A',
},
teal: {
500: '#14B8A6', // Calm Spa Accent
600: '#0D9488',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        function switchPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById('view-' + pageId).classList.add('active');
            
            // Update Sidebar Styles
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('bg-slate-50', 'text-slate-900');
                el.classList.add('text-slate-600');
                el.querySelector('iconify-icon').classList.remove('text-slate-900');
                el.querySelector('iconify-icon').classList.add('text-slate-400');
            });

            const activeBtn = document.getElementById('nav-' + pageId);
            activeBtn.classList.remove('text-slate-600');
            activeBtn.classList.add('bg-slate-50', 'text-slate-900');
            activeBtn.querySelector('iconify-icon').classList.remove('text-slate-400');
            activeBtn.querySelector('iconify-icon').classList.add('text-slate-900');
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
      

<aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 z-20">
<div>

<div className="h-16 flex items-center px-6 border-b border-slate-100/50">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-lg">S</span>
</div>
<span className="font-medium tracking-tight text-lg">SPA.AI</span>
</div>
</div>

<nav className="p-3 space-y-1 mt-2">
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors group bg-slate-50 text-slate-900" id="nav-dashboard" onclick="switchPage('dashboard')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:widget-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Dashboard</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors group" id="nav-insights" onclick="switchPage('insights')">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Insights &amp; Analytics</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors group">
<div className="relative">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:emoji-funny-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
</span>
</div>
<span className="font-medium">Unhappy Guests</span>
<span className="ml-auto text-xs bg-red-50 text-red-600 px-1.5 py-0.5 rounded-md font-medium border border-red-100">3</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-md transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-slate-900 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Staff Performance</span>
</button>
</nav>
</div>

<div className="p-4 border-t border-slate-100">
<button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Settings</span>
</button>
<div className="mt-4 flex items-center gap-3 px-3">
<div className="h-8 w-8 rounded-full bg-slate-200 border border-white shadow-sm overflow-hidden">
<img alt="User" className="h-full w-full object-cover opacity-90" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Elena R.</span>
<span className="text-[10px] text-slate-500">Regional Manager</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-2 text-slate-700 hover:text-slate-900 text-sm font-medium transition-colors">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="16"></iconify-icon>
                        All Locations
                        <iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="hidden group-hover:block absolute top-full left-0 w-48 bg-white border border-slate-200 shadow-lg rounded-lg mt-1 p-1 z-50">
<div className="px-3 py-2 text-xs font-medium text-slate-400 uppercase tracking-wider">Select View</div>
<a className="block px-3 py-2 text-sm text-slate-900 bg-slate-50 rounded-md" href="#">All Locations</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md" href="#">Downtown Spa</a>
<a className="block px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded-md" href="#">Resort West</a>
</div>
</div>
<div className="h-4 w-px bg-slate-200"></div>

<button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear" width="16"></iconify-icon>
                    Oct 24 - Nov 24
                    <iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-slate-600 relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto bg-slate-25 p-8">

<div className="page-content active fade-in max-w-7xl mx-auto space-y-6" id="view-dashboard">
<div className="flex items-center justify-between mb-2">
<h1 className="text-2xl font-medium text-slate-900 tracking-tight">Overview</h1>
<button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-3 py-1.5 rounded-md shadow-sm transition-all text-xs font-medium">
<iconify-icon icon="solar:export-linear"></iconify-icon>
                        Export Report
                    </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-teal-50 text-teal-600 rounded-md">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon>
</div>
<span className="text-slate-500 font-medium text-xs">Avg Rating</span>
</div>
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 2.4%
                            </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium text-slate-900 tracking-tight">4.85</span>
<span className="text-slate-400 text-xs">/ 5.0</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-red-50 text-red-600 rounded-md">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-slate-500 font-medium text-xs">Unhappy Guests</span>
</div>
<span className="text-emerald-600 text-xs font-medium bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> 0.5%
                            </span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium text-slate-900 tracking-tight">1.8%</span>
<span className="text-slate-400 text-xs">of total</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
<iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
</div>
<span className="text-slate-500 font-medium text-xs">Total Feedback</span>
</div>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium text-slate-900 tracking-tight">1,248</span>
<span className="text-slate-400 text-xs">responses</span>
</div>
</div>

<div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
<div className="absolute right-0 top-0 w-16 h-16 bg-amber-50 rounded-bl-full -mr-4 -mt-4 z-0"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-amber-50 text-amber-600 rounded-md">
<iconify-icon icon="solar:danger-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-slate-500 font-medium text-xs">Open Issues</span>
</div>
</div>
<div className="flex items-baseline gap-2 relative z-10">
<span className="text-3xl font-medium text-slate-900 tracking-tight">5</span>
<span className="text-slate-400 text-xs">require action</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-slate-900">Satisfaction Trend</h3>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-teal-500"></span>
<span className="text-xs text-slate-500">Avg Rating</span>
</div>
</div>

<div className="h-64 w-full relative">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-slate-400 font-medium w-6">
<span>5.0</span>
<span>4.5</span>
<span>4.0</span>
<span>3.5</span>
<span>3.0</span>
</div>

<div className="absolute left-8 right-0 bottom-0 flex justify-between text-xs text-slate-400 font-medium">
<span>Oct 24</span>
<span>Oct 31</span>
<span>Nov 7</span>
<span>Nov 14</span>
<span>Nov 21</span>
</div>

<div className="absolute left-8 right-0 top-2 bottom-6 border-l border-b border-slate-100">

<div className="absolute w-full h-px bg-slate-50 top-0"></div>
<div className="absolute w-full h-px bg-slate-50 top-1/4"></div>
<div className="absolute w-full h-px bg-slate-50 top-2/4"></div>
<div className="absolute w-full h-px bg-slate-50 top-3/4"></div>

<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path className="animate-draw drop-shadow-sm" d="M0,80 Q40,90 80,60 T160,50 T240,30 T320,40 T400,20 T480,25 T560,10" fill="none" stroke="#14B8A6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#14B8A6" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#14B8A6" stop-opacity="0"></stop>
</lineargradient>
<path d="M0,80 Q40,90 80,60 T160,50 T240,30 T320,40 T400,20 T480,25 T560,10 V100% H0 Z" fill="url(#chartGradient)" stroke="none" vector-effect="non-scaling-stroke"></path>

<circle className="cursor-pointer hover:r-6 transition-all" cx="100%" cy="10" fill="white" r="4" stroke="#14B8A6" strokeWidth="2"></circle>
</svg>

<div className="absolute top-0 right-0 transform -translate-x-4 -translate-y-8 bg-slate-800 text-white text-xs py-1 px-2 rounded shadow-lg">
                                    4.92
                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
<h3 className="font-medium text-slate-900 mb-6">Sentiment Breakdown</h3>
<div className="flex-1 flex flex-col justify-center items-center gap-6">

<div className="relative w-40 h-40 rounded-full" style={{background: 'conic-gradient(#14B8A6 0% 75%, #F59E0B 75% 85%, #EF4444 85% 100%)'}}>
<div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
<span className="text-3xl font-semibold text-slate-800 tracking-tight">85%</span>
<span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Positive</span>
</div>
</div>

<div className="w-full space-y-3">
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
<span className="text-slate-600">Happy</span>
</div>
<span className="font-medium text-slate-900">75%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-teal-500 h-full rounded-full" style={{width: '75%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
<span className="text-slate-600">Neutral</span>
</div>
<span className="font-medium text-slate-900">15%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full rounded-full" style={{width: '15%'}}></div>
</div>
<div className="flex items-center justify-between text-xs">
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
<span className="text-slate-600">Unhappy</span>
</div>
<span className="font-medium text-slate-900">10%</span>
</div>
<div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-red-500 h-full rounded-full" style={{width: '10%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-gradient-to-br from-indigo-50/50 to-white p-6 rounded-xl border border-indigo-100 shadow-sm">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-indigo-600" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
<h3 className="font-medium text-slate-900">AI Intelligence</h3>
</div>
<div className="space-y-3">
<div className="bg-white p-3 rounded-lg border border-indigo-50 shadow-sm flex gap-3 items-start">
<div className="mt-0.5 text-indigo-500"><iconify-icon icon="solar:graph-up-linear"></iconify-icon></div>
<div>
<p className="text-sm text-slate-700 leading-snug">Weekend satisfaction scores increased by <span className="font-medium text-emerald-600">12%</span> following the change in ambient music playlist.</p>
</div>
</div>
<div className="bg-white p-3 rounded-lg border border-indigo-50 shadow-sm flex gap-3 items-start">
<div className="mt-0.5 text-amber-500"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon></div>
<div>
<p className="text-sm text-slate-700 leading-snug">Wait times at check-in are correlating with lower scores on Tuesdays between 10 AM - 12 PM.</p>
<button className="text-xs text-indigo-600 font-medium mt-1 hover:underline">Investigate Schedule →</button>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:bell-bing-linear" width="20"></iconify-icon>
<h3 className="font-medium text-slate-900">Priority Alerts</h3>
</div>
<a className="text-xs text-slate-500 hover:text-slate-900" href="#">View All</a>
</div>
<div className="space-y-0 divide-y divide-slate-100">
<div className="py-3 flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-red-500 shrink-0"></div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Pool temperature issue</p>
<p className="text-xs text-slate-500 mt-0.5">Multiple guests reported cold water at Downtown Spa.</p>
</div>
<button className="text-xs border border-slate-200 px-2 py-1 rounded bg-slate-50 hover:bg-white text-slate-600">Action</button>
</div>
<div className="py-3 flex items-start gap-3">
<div className="w-2 h-2 mt-1.5 rounded-full bg-amber-500 shrink-0"></div>
<div className="flex-1">
<p className="text-sm font-medium text-slate-900">Low Staff Rating</p>
<p className="text-xs text-slate-500 mt-0.5">Therapist "Sarah" received 3 consecutive low ratings.</p>
</div>
<button className="text-xs border border-slate-200 px-2 py-1 rounded bg-slate-50 hover:bg-white text-slate-600">Review</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-content fade-in max-w-7xl mx-auto space-y-6" id="view-insights">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
<h1 className="text-2xl font-medium text-slate-900 tracking-tight">Deep Insights</h1>

<div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
<button className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-900 rounded-md">Last 30 Days</button>
<div className="w-px h-4 bg-slate-200"></div>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
                            Guest: New <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
<div className="w-px h-4 bg-slate-200"></div>
<button className="px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 flex items-center gap-1">
                            Service: Massage <iconify-icon icon="solar:alt-arrow-down-linear" width="10"></iconify-icon>
</button>
</div>
</div>

<div className="bg-slate-900 text-white p-6 rounded-xl shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<div className="p-2 bg-white/10 rounded-lg h-fit backdrop-blur-sm">
<iconify-icon className="text-teal-400" icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="max-w-2xl">
<h2 className="text-lg font-medium mb-2">Executive Summary</h2>
<p className="text-slate-300 leading-relaxed text-sm">
                                Overall satisfaction has stabilized at 4.8. The primary driver for recent positive feedback is <span className="text-white font-medium border-b border-teal-500/50">Staff Professionalism</span>. However, <span className="text-white font-medium border-b border-red-400/50">Facility Cleanliness</span> in the changing rooms at the Downtown location is trending downward (-15% vs last month). Recommendation: Schedule hourly maintenance checks during peak hours (4 PM - 7 PM).
                            </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h3 className="font-medium text-slate-900">Key Sentiment Drivers</h3>
<button className="text-xs text-teal-600 font-medium hover:underline">View All Comments</button>
</div>
<div className="space-y-5">

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="text-slate-700 font-medium">Staff Friendliness</span>
<span className="text-emerald-600 font-medium text-xs">+4.2%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 flex overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-full" style={{width: '82%'}}></div>
<div className="bg-red-400 h-2" style={{width: '4%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400">
<span>82% Positive mention</span>
<span>4% Negative</span>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="text-slate-700 font-medium">Ambiance &amp; Music</span>
<span className="text-slate-400 font-medium text-xs">0.0%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 flex overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-l-full" style={{width: '65%'}}></div>
<div className="bg-red-400 h-2" style={{width: '10%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400">
<span>65% Positive mention</span>
<span>10% Negative</span>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="text-slate-700 font-medium">Cleanliness</span>
<span className="text-red-500 font-medium text-xs">-12.5%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 flex overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-l-full" style={{width: '45%'}}></div>
<div className="bg-red-400 h-2" style={{width: '35%'}}></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-slate-400">
<span>45% Positive mention</span>
<span>35% Negative</span>
</div>
</div>

<div>
<div className="flex justify-between text-sm mb-1.5">
<span className="text-slate-700 font-medium">Value for Money</span>
<span className="text-emerald-600 font-medium text-xs">+1.1%</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 flex overflow-hidden">
<div className="bg-emerald-500 h-2 rounded-l-full" style={{width: '70%'}}></div>
<div className="bg-red-400 h-2" style={{width: '8%'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="font-medium text-slate-900 mb-6">Location Comparison</h3>
<div className="space-y-4">

<div className="p-3 border border-slate-200 rounded-lg hover:border-teal-500/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="font-medium text-slate-800 text-sm">Downtown Spa</div>
<div className="text-xs text-red-500 bg-red-50 px-1.5 py-0.5 rounded">-2%</div>
</div>
<div className="mt-2 flex items-end gap-2">
<span className="text-2xl font-medium text-slate-900">4.6</span>
<div className="flex mb-1">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-half-bold"></iconify-icon>
</div>
</div>
<div className="mt-2 w-full bg-slate-100 h-1 rounded-full">
<div className="bg-slate-900 h-1 rounded-full" style={{width: '92%'}}></div>
</div>
</div>

<div className="p-3 border border-slate-200 rounded-lg hover:border-teal-500/50 transition-colors cursor-pointer group">
<div className="flex justify-between items-start">
<div className="font-medium text-slate-800 text-sm">Resort West</div>
<div className="text-xs text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">+5%</div>
</div>
<div className="mt-2 flex items-end gap-2">
<span className="text-2xl font-medium text-slate-900">4.9</span>
<div className="flex mb-1">
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="mt-2 w-full bg-slate-100 h-1 rounded-full">
<div className="bg-teal-500 h-1 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-medium text-slate-900">Recent Guest Verbatims</h3>
<div className="relative">
<iconify-icon className="absolute left-2.5 top-2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-teal-500" placeholder="Search keywords..." type="text"/>
</div>
</div>
<table className="w-full text-left text-sm">
<thead className="bg-slate-50 text-slate-500 font-medium text-xs uppercase tracking-wide">
<tr>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Guest</th>
<th className="px-6 py-3">Rating</th>
<th className="px-6 py-3">Sentiment</th>
<th className="px-6 py-3">Topic</th>
<th className="px-6 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-3 text-slate-500">Oct 24, 10:30 AM</td>
<td className="px-6 py-3 font-medium text-slate-900">Alice Freeman</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-slate-900 font-medium">5.0 <iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon></span>
</td>
<td className="px-6 py-3"><span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-medium border border-emerald-100">Happy</span></td>
<td className="px-6 py-3 text-slate-600">Massage Quality</td>
<td className="px-6 py-3 text-slate-400">-</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-3 text-slate-500">Oct 23, 02:15 PM</td>
<td className="px-6 py-3 font-medium text-slate-900">John Doe</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-slate-900 font-medium">2.0 <iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon></span>
</td>
<td className="px-6 py-3"><span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full text-xs font-medium border border-red-100">Unhappy</span></td>
<td className="px-6 py-3 text-slate-600">Pool Temp</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100 text-xs font-medium">In Progress</span>
</td>
</tr>
<tr className="hover:bg-slate-50/50">
<td className="px-6 py-3 text-slate-500">Oct 23, 11:00 AM</td>
<td className="px-6 py-3 font-medium text-slate-900">Sarah Smith</td>
<td className="px-6 py-3">
<span className="inline-flex items-center gap-1 text-slate-900 font-medium">3.5 <iconify-icon className="text-amber-400 text-xs" icon="solar:star-bold"></iconify-icon></span>
</td>
<td className="px-6 py-3"><span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full text-xs font-medium border border-slate-200">Neutral</span></td>
<td className="px-6 py-3 text-slate-600">Booking Process</td>
<td className="px-6 py-3 text-slate-400">-</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>



    </>
  );
}
