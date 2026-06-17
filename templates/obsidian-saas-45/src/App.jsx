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



function login() {
const btn = document.getElementById('login-btn');
const loginView = document.getElementById('login-view');
const dashboardView = document.getElementById('dashboard-view');
// Simulate loading
btn.innerHTML = '<iconify-icon icon="line-md:loading-twotone-loop" width="20" height="20"></iconify-icon>';
setTimeout(() => {
loginView.style.display = 'none';
dashboardView.classList.remove('hidden');
dashboardView.classList.add('flex'); // Ensure flex is applied when shown
}, 800);
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
      

<div className="flex w-full min-h-screen" id="login-view">

<div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-12 overflow-hidden border-r border-zinc-900">
<div className="absolute inset-0 bg-zinc-950 bg-grain z-0"></div>
<div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 z-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
<div className="relative z-10">
<div className="flex items-center gap-3">
<span className="text-lg font-medium tracking-tighter text-white">OBSIDIAN</span>
</div>
</div>
<div className="relative z-10 max-w-lg">
<iconify-icon className="text-zinc-600 mb-6" height="24" icon="solar:quote-up-linear" width="24"></iconify-icon>
<p className="text-xl font-light leading-relaxed text-zinc-300 tracking-tight">
                    "Design is not just what it looks like and feels like. Design is how it works. Obsidian provides the infrastructure that powers our financial future."
                </p>
<div className="mt-8 flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-medium">JD</div>
<div>
<p className="text-sm font-medium text-white">Julian Davis</p>
<p className="text-xs text-zinc-500">CTO, Archetype Inc.</p>
</div>
</div>
</div>
<div className="relative z-10 flex justify-between items-end text-xs text-zinc-600 font-medium uppercase tracking-widest">
<span>System Status: Optimal</span>
<span>© 2024 Obsidian Corp</span>
</div>
</div>

<div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-black relative z-20">
<div className="absolute top-8 left-8 lg:hidden">
<span className="text-lg font-medium tracking-tighter text-white">OBSIDIAN</span>
</div>
<div className="w-full max-w-[380px] space-y-8 fade-in">
<div className="text-center space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-white">Welcome back</h1>
<p className="text-sm text-zinc-500 font-normal">Enter your credentials to access the workspace.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); login();">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 block ml-1" htmlFor="email">Email address</label>
<div className="relative group">
<input autocomplete="email" className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder-zinc-700 shadow-sm" id="email" placeholder="name@company.com" type="email" value="demo@obsidian.com"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 block ml-1" htmlFor="password">Password</label>
<div className="relative group">
<input autocomplete="current-password" className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder-zinc-700 shadow-sm" id="password" placeholder="••••••••" type="password" value="password123"/>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center">
<label className="relative flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-white peer-checked:border-white transition-all duration-200"></div>
<iconify-icon className="text-black absolute top-0.5 left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
<span className="ml-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors select-none">Remember for 30 days</span>
</label>
</div>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Forgot password?</a>
</div>
<button className="w-full bg-white text-black hover:bg-zinc-200 focus:ring-4 focus:ring-zinc-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" id="login-btn" type="submit">
                        Sign in
                    </button>
</form>
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-zinc-900"></div>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-black px-2 text-zinc-600 tracking-wider">Or continue with</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 text-white rounded-lg py-2.5 transition-all duration-200 group">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="18" icon="ri:github-fill" width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">GitHub</span>
</button>
<button className="flex items-center justify-center gap-2 bg-zinc-950 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-900 text-white rounded-lg py-2.5 transition-all duration-200 group">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="18" icon="ri:google-fill" width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">Google</span>
</button>
</div>
</div>
</div>
</div>

<div className="hidden w-full h-screen bg-black overflow-hidden fade-in" id="dashboard-view">

<aside className="w-64 border-r border-zinc-800 bg-black flex-col hidden lg:flex z-30">
<div className="p-6 h-16 flex items-center border-b border-zinc-900/50">
<span className="text-md font-semibold tracking-tighter text-white flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-white"></div>
                    OBSIDIAN
                </span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 no-scrollbar">
<p className="px-3 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-2">Platform</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-zinc-900 text-white text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-white" height="18" icon="solar:home-smile-linear" width="18"></iconify-icon>
                    Overview
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" height="18" icon="solar:chart-square-linear" width="18"></iconify-icon>
                    Analytics
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Customers
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" height="18" icon="solar:wallet-money-linear" width="18"></iconify-icon>
                    Finance
                </a>
<p className="px-3 text-[10px] uppercase tracking-widest text-zinc-500 font-semibold mb-2 mt-8">Configuration</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" height="18" icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 text-sm font-medium group transition-colors" href="#">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" height="18" icon="solar:shield-keyhole-linear" width="18"></iconify-icon>
                    Security
                </a>
</nav>
<div className="p-4 border-t border-zinc-900">
<div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer">
<div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-white border border-zinc-700">JD</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Julian Davis</p>
<p className="text-xs text-zinc-500 truncate">julian@archetype.inc</p>
</div>
<iconify-icon className="text-zinc-600" height="16" icon="solar:alt-arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-black relative">
<div className="absolute inset-0 bg-zinc-950 bg-grain z-0 pointer-events-none opacity-50"></div>

<header className="h-16 border-b border-zinc-900 flex items-center justify-between px-8 bg-black/50 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-4">
<button className="lg:hidden text-zinc-400">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="flex items-center text-sm font-medium text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer">Workspace</span>
<iconify-icon className="mx-2 text-zinc-700" height="12" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="text-white bg-zinc-900 px-2 py-0.5 rounded text-xs border border-zinc-800">Overview</span>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-2 text-zinc-500" height="16" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-zinc-900 border border-zinc-800 text-sm text-white rounded-full pl-9 pr-4 py-1.5 focus:outline-none focus:ring-1 focus:ring-zinc-600 placeholder-zinc-600 w-64 transition-all" placeholder="Search..." type="text"/>
<span className="absolute right-3 top-2 text-[10px] text-zinc-600 border border-zinc-700 px-1 rounded">⌘K</span>
</div>
<button className="relative p-2 text-zinc-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 relative z-10">
<div className="max-w-6xl mx-auto space-y-8">

<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Overview</h2>
<p className="text-sm text-zinc-500 mt-1">Real-time data for the last 30 days.</p>
</div>
<div className="flex gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-md hover:bg-zinc-800 transition-colors">
<iconify-icon height="14" icon="solar:calendar-linear" width="14"></iconify-icon>
                                Oct 1 - Oct 31, 2024
                            </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-black bg-white rounded-md hover:bg-zinc-200 transition-colors">
<iconify-icon height="14" icon="solar:export-linear" width="14"></iconify-icon>
                                Export
                            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="p-5 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:dollar-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    +12.5%
                                    <iconify-icon className="ml-1" height="12" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Total Revenue</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">$48,294.00</h3>
</div>
</div>

<div className="p-5 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                    +4.2%
                                    <iconify-icon className="ml-1" height="12" icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Active Users</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">2,405</h3>
</div>
</div>

<div className="p-5 bg-zinc-950/50 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors group">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors">
<iconify-icon className="text-white" height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="flex items-center text-xs font-medium text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded-full border border-zinc-700">
                                    0.0%
                                    <iconify-icon className="ml-1" height="12" icon="solar:minus-linear" width="12"></iconify-icon>
</span>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Server Latency</p>
<h3 className="text-2xl font-semibold text-white tracking-tight">24ms</h3>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 p-6 bg-zinc-950/50 border border-zinc-800 rounded-xl">
<div className="flex justify-between items-center mb-6">
<h3 className="text-sm font-medium text-white">Revenue Trajectory</h3>
<iconify-icon className="text-zinc-500 cursor-pointer hover:text-white" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>

<div className="relative h-64 w-full flex items-end gap-2 pt-4 border-b border-l border-zinc-800/50 px-2">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-t border-zinc-600 w-full h-0"></div>
<div className="border-t border-zinc-600 w-full h-0"></div>
<div className="border-t border-zinc-600 w-full h-0"></div>
<div className="border-t border-zinc-600 w-full h-0"></div>
</div>

<svg className="absolute inset-0 w-full h-full p-2" preserveaspectratio="none">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="white" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="white" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,200 C50,200 80,150 150,160 C220,170 250,100 350,90 C450,80 500,120 600,60 C700,0 800,40 1200,20" fill="url(#gradient)" stroke="white" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-zinc-600 uppercase tracking-widest px-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>

<div className="lg:col-span-1 p-0 bg-zinc-950/50 border border-zinc-800 rounded-xl overflow-hidden flex flex-col">
<div className="p-4 border-b border-zinc-800 bg-zinc-900/20">
<h3 className="text-sm font-medium text-white">Recent Transactions</h3>
</div>
<div className="flex-1 overflow-y-auto">
<div className="divide-y divide-zinc-900">

<div className="flex items-center justify-between p-4 hover:bg-zinc-900/40 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">Stripe Payout</p>
<p className="text-[10px] text-zinc-500">Today, 2:34 PM</p>
</div>
</div>
<span className="text-xs font-medium text-white">+$1,250</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-zinc-900/40 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:server-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">AWS Bill</p>
<p className="text-[10px] text-zinc-500">Yesterday</p>
</div>
</div>
<span className="text-xs font-medium text-zinc-400">-$420.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-zinc-900/40 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:user-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">New Sub</p>
<p className="text-[10px] text-zinc-500">Oct 24</p>
</div>
</div>
<span className="text-xs font-medium text-white">+$49.00</span>
</div>

<div className="flex items-center justify-between p-4 hover:bg-zinc-900/40 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
<iconify-icon icon="solar:card-transfer-linear" width="14"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">Refund</p>
<p className="text-[10px] text-zinc-500">Oct 23</p>
</div>
</div>
<span className="text-xs font-medium text-zinc-400">-$49.00</span>
</div>
</div>
</div>
<div className="p-3 border-t border-zinc-800 bg-zinc-900/20 text-center">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">View all transactions</a>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-950/50 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-sm font-medium text-white">Latest Deployments</h3>
<button className="text-xs text-zinc-400 hover:text-white transition-colors">Filter</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-zinc-800/50 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<th className="px-6 py-3 font-medium">Project</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Commit</th>
<th className="px-6 py-3 font-medium text-right">Time</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-zinc-800/50">
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-white font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-white"></div>
                                            obsidian-web
                                        </td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                                Ready
                                            </span>
</td>
<td className="px-6 py-4 text-zinc-400 font-mono text-xs">7a2b9d1</td>
<td className="px-6 py-4 text-right text-zinc-500 text-xs">2m ago</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-white font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                                            obsidian-api
                                        </td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
<div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></div>
                                                Building
                                            </span>
</td>
<td className="px-6 py-4 text-zinc-400 font-mono text-xs">8c1d4f2</td>
<td className="px-6 py-4 text-right text-zinc-500 text-xs">5m ago</td>
</tr>
<tr className="group hover:bg-zinc-900/30 transition-colors">
<td className="px-6 py-4 text-white font-medium flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
                                            landing-page
                                        </td>
<td className="px-6 py-4">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-500"></div>
                                                Queued
                                            </span>
</td>
<td className="px-6 py-4 text-zinc-400 font-mono text-xs">9f3e1a0</td>
<td className="px-6 py-4 text-right text-zinc-500 text-xs">12m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div className="h-10"></div> 
</div>
</main>
</div>

    </>
  );
}
