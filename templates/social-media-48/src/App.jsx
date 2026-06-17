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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-64 border-r border-white/5 bg-zinc-950 flex flex-col hidden md:flex z-20">

<div className="h-20 flex items-center px-8 border-b border-white/5">
<span className="text-xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">NEXUS</span>
</div>

<nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-1">
<p className="px-4 text-xs font-medium text-zinc-500 mb-2 tracking-wide uppercase">Menu</p>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Analytics</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Scheduler</span>
<span className="ml-auto bg-indigo-500/20 text-indigo-400 text-xs py-0.5 px-2 rounded-full">3</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Content Planner</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Reports</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-indigo-400 transition-colors" icon="solar:eye-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Competitors</span>
</a>
<p className="px-4 text-xs font-medium text-zinc-500 mt-6 mb-2 tracking-wide uppercase">Workspace</p>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-purple-400 transition-colors" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Team</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-purple-400 transition-colors" icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Integrations</span>
</a>
<a className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-zinc-400 hover:text-zinc-100 hover:bg-white/5 transition-colors group" href="#">
<iconify-icon className="group-hover:text-purple-400 transition-colors" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Settings</span>
</a>
</nav>

<div className="p-4 border-t border-white/5">
<button className="flex items-center w-full gap-3 px-2 py-2 rounded-2xl hover:bg-white/5 transition-colors text-left">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
<span className="text-xs font-semibold text-white">AJ</span>
</div>
<div className="flex-1 overflow-hidden">
<p className="text-sm font-medium text-zinc-100 truncate">Alex Jensen</p>
<p className="text-xs text-zinc-500 truncate">Pro Plan</p>
</div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-950 relative z-10">

<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

<header className="h-20 flex items-center justify-between px-8 border-b border-white/5 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-4">
<button className="md:hidden text-zinc-400 hover:text-zinc-100">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h1 className="text-2xl font-semibold tracking-tight text-zinc-100">Overview</h1>
</div>
<div className="flex items-center gap-4">

<div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 cursor-pointer hover:bg-white/10 transition-colors">
<div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
<span className="text-sm font-medium text-zinc-300">Acme Corp</span>
<iconify-icon className="text-zinc-500 ml-1" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="w-px h-6 bg-white/10 hidden md:block mx-2"></div>
<button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full border border-zinc-950"></span>
</button>
<button className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-full hover:bg-white/5">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-8">

<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<div className="flex space-x-1 bg-white/5 border border-white/10 p-1 rounded-2xl backdrop-blur-xl">
<button className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 rounded-xl transition-colors">7D</button>
<button className="px-4 py-1.5 text-sm font-medium bg-white/10 text-zinc-100 rounded-xl shadow-sm transition-colors">30D</button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 rounded-xl transition-colors">3M</button>
<button className="px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-zinc-100 rounded-xl transition-colors">12M</button>
</div>
<button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-2xl text-sm font-medium transition-colors shadow-[0_0_15px_rgba(99,102,241,0.3)]">
<iconify-icon icon="solar:add-square-linear" width="18"></iconify-icon>
                    New Post
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-indigo-400" icon="solar:users-group-two-rounded-linear" width="48"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
<iconify-icon className="text-indigo-400" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-400">Total Audience</h3>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-zinc-100">124.5K</span>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
                            12.5%
                        </div>
</div>
<p className="text-xs text-zinc-500 mt-2">Across 4 connected platforms</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-purple-400" icon="solar:heart-angle-linear" width="48"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
<iconify-icon className="text-purple-400" icon="solar:heart-angle-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-400">Avg. Engagement</h3>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-zinc-100">4.8%</span>
<div className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
<iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
                            2.1%
                        </div>
</div>
<p className="text-xs text-zinc-500 mt-2">vs. previous 30 days</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon className="text-blue-400" icon="solar:eye-linear" width="48"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
<iconify-icon className="text-blue-400" icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-400">Total Impressions</h3>
</div>
<div className="flex items-baseline gap-3">
<span className="text-3xl font-semibold tracking-tight text-zinc-100">1.2M</span>
<div className="flex items-center gap-1 text-xs font-medium text-rose-400 bg-rose-400/10 px-2 py-0.5 rounded-full border border-rose-400/20">
<iconify-icon icon="solar:arrow-right-down-linear" width="14"></iconify-icon>
                            0.4%
                        </div>
</div>
<p className="text-xs text-zinc-500 mt-2">Organic + Paid combined</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-lg font-medium tracking-tight text-zinc-100">Audience Growth</h2>
<p className="text-sm text-zinc-500">Cumulative followers across all channels</p>
</div>
<button className="p-2 hover:bg-white/10 rounded-xl transition-colors text-zinc-400">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 relative min-h-[250px] mt-4 flex items-end">

<div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-xs text-zinc-600">
<span>150k</span>
<span>100k</span>
<span>50k</span>
<span>0</span>
</div>

<div className="absolute left-10 right-0 top-2 bottom-6 flex flex-col justify-between z-0">
<div className="border-b border-white/5 w-full"></div>
<div className="border-b border-white/5 w-full"></div>
<div className="border-b border-white/5 w-full"></div>
<div className="border-b border-white/5 w-full"></div>
</div>

<div className="absolute left-10 right-0 top-2 bottom-6 z-10 overflow-hidden">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 1000 200">
<defs>
<lineargradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="rgba(99, 102, 241, 0.4)"></stop>
<stop offset="100%" stop-color="rgba(99, 102, 241, 0.0)"></stop>
</lineargradient>
</defs>

<path d="M0,180 Q100,160 200,170 T400,130 T600,80 T800,90 T1000,20 L1000,200 L0,200 Z" fill="url(#chart-gradient)" opacity="0.8"></path>

<path className="chart-path" d="M0,180 Q100,160 200,170 T400,130 T600,80 T800,90 T1000,20" fill="none" stroke="#818cf8" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="600" cy="80" fill="#09090b" r="4" stroke="#818cf8" strokeWidth="2"></circle>
<circle cx="800" cy="90" fill="#09090b" r="4" stroke="#818cf8" strokeWidth="2"></circle>
<circle cx="1000" cy="20" fill="#09090b" r="4" stroke="#818cf8" strokeWidth="2"></circle>

<g transform="translate(560, 30)">
<rect fill="#18181b" height="36" rx="8" stroke="rgba(255,255,255,0.1)" width="80" x="0" y="0"></rect>
<text fill="#a1a1aa" fontFamily="Inter" fontSize="10" text-anchor="middle" x="40" y="16">Oct 14</text>
<text fill="#f4f4f5" fontFamily="Inter" fontSize="12" font-weight="600" text-anchor="middle" x="40" y="28">112.4K</text>
</g>
<line stroke="rgba(255,255,255,0.2)" stroke-dasharray="2 2" x1="600" x2="600" y1="66" y2="80"></line>
</svg>
</div>

<div className="absolute left-10 right-0 bottom-0 flex justify-between text-xs text-zinc-600">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span>Jan</span>
<span>Feb</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl flex-1">
<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-medium tracking-tight text-zinc-100">Upcoming</h2>
<a className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors" href="#">View Calendar</a>
</div>
<div className="space-y-4">

<div className="flex gap-4 group cursor-pointer">
<div className="flex flex-col items-center min-w-[40px]">
<span className="text-xs text-zinc-500 font-medium uppercase">Today</span>
<span className="text-lg font-semibold text-zinc-200">14</span>
</div>
<div className="flex-1 bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.08] group-hover:border-white/10 transition-all rounded-2xl p-3 flex gap-3">
<div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-pink-400" icon="solar:camera-linear" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs text-zinc-400">14:30 PM</span>
</div>
<p className="text-sm text-zinc-200 truncate font-medium">Product launch teaser</p>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="flex flex-col items-center min-w-[40px] opacity-60">
<span className="text-xs text-zinc-500 font-medium uppercase">Tom</span>
<span className="text-lg font-semibold text-zinc-400">15</span>
</div>
<div className="flex-1 bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.08] group-hover:border-white/10 transition-all rounded-2xl p-3 flex gap-3">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-blue-400" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span>
<span className="text-xs text-zinc-400">09:00 AM</span>
</div>
<p className="text-sm text-zinc-200 truncate font-medium">Weekly round-up discussion</p>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="flex flex-col items-center min-w-[40px] opacity-60">
<span className="text-xs text-zinc-500 font-medium uppercase">Wed</span>
<span className="text-lg font-semibold text-zinc-400">16</span>
</div>
<div className="flex-1 bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.08] group-hover:border-white/10 transition-all rounded-2xl p-3 flex gap-3">
<div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-red-400" icon="solar:play-stream-linear" width="20"></iconify-icon>
</div>
<div className="overflow-hidden">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 rounded-full bg-zinc-600"></span>
<span className="text-xs text-zinc-400">18:00 PM</span>
</div>
<p className="text-sm text-zinc-200 truncate font-medium">New tutorial video</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
<div className="flex items-center justify-between mb-4">
<h2 className="text-sm font-medium tracking-tight text-zinc-100">Active Connections</h2>
<button className="text-zinc-400 hover:text-zinc-100"><iconify-icon icon="solar:add-circle-linear" width="20"></iconify-icon></button>
</div>
<div className="flex flex-wrap gap-2">

<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-zinc-300">Instagram</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-zinc-300">LinkedIn</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-zinc-300">TikTok</span>
</div>
<div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl opacity-50 grayscale">
<div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
<span className="text-xs font-medium text-zinc-300">YouTube</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl overflow-x-auto">
<div className="flex items-center justify-between mb-6 min-w-[600px]">
<h2 className="text-lg font-medium tracking-tight text-zinc-100">Recent Performance</h2>
<div className="flex gap-2">
<button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors">Export CSV</button>
</div>
</div>
<table className="w-full text-left min-w-[600px]">
<thead>
<tr className="border-b border-white/5 text-xs text-zinc-500 uppercase tracking-wider">
<th className="pb-3 font-medium pl-2">Content</th>
<th className="pb-3 font-medium">Platform</th>
<th className="pb-3 font-medium">Date</th>
<th className="pb-3 font-medium text-right">Reach</th>
<th className="pb-3 font-medium text-right pr-2">Engagement</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex-shrink-0 overflow-hidden border border-white/10">

<div className="w-full h-full bg-gradient-to-br from-indigo-500/40 to-purple-500/40"></div>
</div>
<span className="text-zinc-200 font-medium truncate max-w-[200px]">10 Tips for SaaS Growth in 2024</span>
</div>
</td>
<td className="py-4 text-zinc-400">LinkedIn</td>
<td className="py-4 text-zinc-500 text-xs">Oct 12, 2023</td>
<td className="py-4 text-right text-zinc-200">14,205</td>
<td className="py-4 text-right pr-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                                    8.4%
                                </span>
</td>
</tr>
<tr className="border-b border-white/[0.02] hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex-shrink-0 overflow-hidden border border-white/10">
<div className="w-full h-full bg-gradient-to-br from-pink-500/40 to-orange-500/40"></div>
</div>
<span className="text-zinc-200 font-medium truncate max-w-[200px]">Behind the scenes: Design team</span>
</div>
</td>
<td className="py-4 text-zinc-400">Instagram</td>
<td className="py-4 text-zinc-500 text-xs">Oct 10, 2023</td>
<td className="py-4 text-right text-zinc-200">8,430</td>
<td className="py-4 text-right pr-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">
                                    5.2%
                                </span>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors group">
<td className="py-4 pl-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex-shrink-0 overflow-hidden border border-white/10">
<div className="w-full h-full bg-zinc-700/50 flex items-center justify-center">
<iconify-icon className="text-zinc-500" icon="solar:text-field-linear"></iconify-icon>
</div>
</div>
<span className="text-zinc-200 font-medium truncate max-w-[200px]">Just shipped a new feature! 🚀 Check out the link in bio.</span>
</div>
</td>
<td className="py-4 text-zinc-400">Twitter / X</td>
<td className="py-4 text-zinc-500 text-xs">Oct 09, 2023</td>
<td className="py-4 text-right text-zinc-200">45,100</td>
<td className="py-4 text-right pr-2">
<span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zinc-400/10 text-zinc-400 border border-zinc-400/20">
                                    1.2%
                                </span>
</td>
</tr>
</tbody>
</table>
</div>

<div className="h-12"></div>
</div>
</main>

    </>
  );
}
