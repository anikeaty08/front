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
      

<aside className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-6 gap-8 z-50 bg-slate-100/50 backdrop-blur-sm border-r border-white/40">

<button className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
<div className="flex flex-col gap-4">
<button className="p-3 rounded-full bg-white shadow-md text-slate-800 transition-all">
<i className="w-5 h-5" data-lucide="clock"></i>
</button>
<button className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</button>
<button className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="calendar"></i>
</button>
<button className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="users"></i>
</button>
</div>
<div className="mt-auto flex flex-col gap-4">
<button className="p-3 rounded-full hover:bg-white hover:shadow-md transition-all text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="settings"></i>
</button>
<button className="p-3 rounded-full bg-slate-900 text-white shadow-lg shadow-black/20 hover:scale-105 transition-all">
<i className="w-5 h-5" data-lucide="moon"></i>
</button>
</div>
</aside>

<main className="ml-20 flex-1 p-6 max-w-[1600px] mx-auto pb-12">

<header className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-slate-800">
<div className="bg-blue-600 text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<span className="font-medium text-lg tracking-tight">TimeTrack</span>
</div>
</div>

<nav className="hidden lg:flex items-center bg-transparent rounded-full px-2">
<a className="px-5 py-2 text-sm text-white bg-slate-900 rounded-full font-medium shadow-lg shadow-slate-900/10" href="#">Dashboard</a>
<a className="px-5 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Timesheets</a>
<a className="px-5 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Reports</a>
<a className="px-5 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Schedule</a>
</nav>

<div className="flex items-center gap-3">
<div className="relative hidden md:block">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="pl-10 pr-4 py-2 bg-white rounded-full text-sm border-none shadow-sm focus:ring-0 w-64 placeholder:text-slate-400" placeholder="Search logs..." type="text"/>
</div>
<button className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-slate-800">
<i className="w-5 h-5" data-lucide="bell"></i>
</button>
<img alt="Profile" className="w-9 h-9 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</header>

<div className="flex items-end justify-between mb-8">
<div>
<h1 className="text-3xl font-medium tracking-tight text-slate-900">Work Hours Tracker</h1>
<p className="text-slate-500 mt-1">Monitor your daily work progress with precision</p>
</div>
<div className="hidden sm:block">
<button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
<i className="w-4 h-4" data-lucide="history"></i>
                    View History
                </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

<div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm border border-white/60 flex flex-col justify-between h-48 relative group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Local</span>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 mb-1">CURRENT TIME</h3>
<div className="text-4xl font-semibold text-slate-900 tracking-tight">12:32 <span className="text-2xl text-slate-400 font-medium">PM</span></div>
<p className="text-sm text-slate-400 mt-2">Friday, Dec 12</p>
</div>
</div>

<div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm border border-white/60 flex flex-col justify-between h-48 relative group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="p-3 bg-cyan-50 text-cyan-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 mb-1">WORKED TODAY</h3>
<div className="text-4xl font-semibold text-slate-900 tracking-tight">3h 05m</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-3 overflow-hidden">
<div className="bg-cyan-500 h-1.5 rounded-full" style={{width: '38%'}}></div>
</div>
<p className="text-xs text-slate-400 mt-2">8h required</p>
</div>
</div>

<div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm border border-white/60 flex flex-col justify-between h-48 relative group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="p-3 bg-rose-50 text-rose-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="hourglass"></i>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 mb-1">REMAINING WORK</h3>
<div className="text-4xl font-semibold text-slate-900 tracking-tight">4h 55m</div>
<p className="text-sm text-slate-400 mt-2">Until complete</p>
</div>
</div>

<div className="bg-white/80 backdrop-blur-xl rounded-[2rem] p-6 shadow-sm border border-white/60 flex flex-col justify-between h-48 relative group hover:shadow-md transition-all">
<div className="flex items-start justify-between">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
<i className="w-6 h-6" data-lucide="coffee"></i>
</div>
</div>
<div>
<h3 className="text-sm font-medium text-slate-500 mb-1">FREE TIME</h3>
<div className="text-4xl font-semibold text-slate-900 tracking-tight">2h 03m</div>
<p className="text-sm text-slate-400 mt-2">Available today</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">

<div className="bg-slate-200/50 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm border border-white/40 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
<i className="w-5 h-5" data-lucide="cup-soda"></i>
</div>
<h2 className="text-lg font-medium text-slate-900">Break Status</h2>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6 flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Current Status</p>
<p className="text-xl font-semibold text-slate-800">Working</p>
</div>
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
</div>
</div>
</div>
<button className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl font-medium text-lg shadow-lg shadow-red-500/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="pause-circle"></i>
                    Start Break
                </button>
</div>

<div className="lg:col-span-2 bg-slate-200/50 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm border border-white/40">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="bg-slate-900 p-2 rounded-xl text-white">
<i className="w-5 h-5" data-lucide="settings-2"></i>
</div>
<h2 className="text-lg font-medium text-slate-900">Work Schedule</h2>
</div>
<button className="text-sm text-slate-500 hover:text-slate-900 font-medium">Reset Defaults</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Shift Start</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="sun"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" type="text" value="09:27 AM"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Shift End</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="moon"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" type="text" value="07:30 PM"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Lunch Start</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="coffee"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" type="text" value="01:00 PM"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Lunch End</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="coffee"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" type="text" value="02:00 PM"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Required Hours</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="timer"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm" type="number" value="8"/>
</div>
</div>
</div>
</div>

<div className="bg-slate-200/50 backdrop-blur-xl rounded-[2.5rem] p-8 shadow-sm border border-white/40">
<div className="flex items-center gap-3 mb-8">
<div className="bg-blue-600 p-2 rounded-xl text-white shadow-lg shadow-blue-600/20">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<h2 className="text-lg font-medium text-slate-900">Add Break Period</h2>
</div>
<div className="flex flex-col md:flex-row items-end gap-6">
<div className="flex-1 w-full space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Break Start</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm placeholder:text-slate-300" placeholder="--:-- --" type="text"/>
</div>
</div>
<div className="flex-1 w-full space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase ml-1">Break End</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
<i className="w-4 h-4" data-lucide="clock"></i>
</div>
<input className="block w-full pl-10 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm placeholder:text-slate-300" placeholder="--:-- --" type="text"/>
</div>
</div>
<div className="w-full md:w-auto">
<button className="w-full md:px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-medium shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 whitespace-nowrap">
<i className="w-5 h-5" data-lucide="plus"></i>
                        Add Break
                    </button>
</div>
</div>
</div>
</main>


    </>
  );
}
