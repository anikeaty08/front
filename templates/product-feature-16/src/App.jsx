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
      
<div className="w-full max-w-7xl mx-auto space-y-12">

<header className="text-center space-y-4">
<div className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 mb-2">
<span className="text-xs font-medium tracking-wider uppercase text-white">Version 2.0 Roadmap</span>
</div>
<h1 className="font-heading text-4xl sm:text-6xl font-semibold tracking-tight text-white drop-shadow-md">
                System Capabilities
            </h1>
<p className="text-lg font-light text-white/80 max-w-2xl mx-auto leading-relaxed">
                A comprehensive breakdown of the Honable ecosystem features, organized by module availability and implementation status.
            </p>
</header>

<div className="glass-panel rounded-3xl overflow-hidden w-full">

<div className="p-6 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
<div className="flex items-center gap-3">
<div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<div>
<h3 className="font-heading text-lg font-medium tracking-tight text-white">Feature Matrix</h3>
<p className="text-xs text-white/60 font-light">6 Modules Active</p>
</div>
</div>
<div className="flex items-center gap-3 w-full sm:w-auto">
<div className="relative w-full sm:w-64 group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50 group-focus-within:text-white transition-colors" data-lucide="search"></i>
<input className="w-full bg-white/10 border border-white/20 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all font-light" placeholder="Filter features..." type="text"/>
</div>
<button className="p-2 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
</button>
</div>
</div>

<div className="overflow-x-auto custom-scroll">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/10">
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-white/60 w-1/3">Feature Module</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-white/60">Category</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-white/60">Priority Status</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-white/60">Completion</th>
<th className="py-4 px-6 text-xs font-medium uppercase tracking-wider text-white/60 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-sm font-light">

<tr className="group hover:bg-white/5 transition-colors duration-200">
<td className="py-5 px-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="calendar"></i>
</div>
<div>
<p className="font-medium text-white text-base">Smart Calendar</p>
<p className="text-white/50 text-xs mt-0.5 max-w-[240px]">Date navigation with visual density task indicators.</p>
</div>
</div>
</td>
<td className="py-5 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-100 border border-blue-400/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                    Core UI
                                </span>
</td>
<td className="py-5 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-green-400 to-emerald-500"></div>
</div>
<span className="text-xs text-white/70">Live</span>
</div>
</td>
<td className="py-5 px-6">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 border border-white/20 flex items-center justify-center text-[10px] text-white font-medium">MK</div>
<div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] text-white/70 backdrop-blur-sm">+3</div>
</div>
</td>
<td className="py-5 px-6 text-right">
<button className="text-white/40 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors duration-200">
<td className="py-5 px-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="check-square"></i>
</div>
<div>
<p className="font-medium text-white text-base">Task Operations</p>
<p className="text-white/50 text-xs mt-0.5 max-w-[240px]">CRUD functionality with local storage persistence.</p>
</div>
</div>
</td>
<td className="py-5 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-100 border border-purple-400/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                                    Logic
                                </span>
</td>
<td className="py-5 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-pink-500 to-rose-500"></div>
</div>
<span className="text-xs text-white/70">Beta</span>
</div>
</td>
<td className="py-5 px-6">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-orange-400 border border-white/20 flex items-center justify-center text-[10px] text-white font-medium">UI</div>
</td>
<td className="py-5 px-6 text-right">
<button className="text-white/40 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors duration-200">
<td className="py-5 px-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="bar-chart-2"></i>
</div>
<div>
<p className="font-medium text-white text-base">Analytics Engine</p>
<p className="text-white/50 text-xs mt-0.5 max-w-[240px]">Real-time statistics calculation and visualization.</p>
</div>
</div>
</td>
<td className="py-5 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-100 border border-cyan-400/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                                    Data
                                </span>
</td>
<td className="py-5 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
</div>
<span className="text-xs text-white/70">Live</span>
</div>
</td>
<td className="py-5 px-6">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>
</td>
<td className="py-5 px-6 text-right">
<button className="text-white/40 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors duration-200">
<td className="py-5 px-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="filter"></i>
</div>
<div>
<p className="font-medium text-white text-base">Smart Filtering</p>
<p className="text-white/50 text-xs mt-0.5 max-w-[240px]">Dynamic sorting by completion status and date.</p>
</div>
</div>
</td>
<td className="py-5 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-100 border border-amber-400/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                    UX
                                </span>
</td>
<td className="py-5 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-gradient-to-r from-amber-400 to-yellow-400"></div>
</div>
<span className="text-xs text-white/70">WIP</span>
</div>
</td>
<td className="py-5 px-6">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20 flex items-center justify-center text-[10px] text-white font-medium">DEV</div>
</td>
<td className="py-5 px-6 text-right">
<button className="text-white/40 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>

<tr className="group hover:bg-white/5 transition-colors duration-200">
<td className="py-5 px-6">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 text-white">
<i className="w-4 h-4" data-lucide="flag"></i>
</div>
<div>
<p className="font-medium text-white text-base">Priority Matrix</p>
<p className="text-white/50 text-xs mt-0.5 max-w-[240px]">High, Medium, Low gradient indicators.</p>
</div>
</div>
</td>
<td className="py-5 px-6">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-100 border border-emerald-400/20 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    System
                                </span>
</td>
<td className="py-5 px-6">
<div className="flex items-center gap-2">
<div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-emerald-400 to-teal-400"></div>
</div>
<span className="text-xs text-white/70">Live</span>
</div>
</td>
<td className="py-5 px-6">
<i className="w-5 h-5 text-emerald-400" data-lucide="check-circle-2"></i>
</td>
<td className="py-5 px-6 text-right">
<button className="text-white/40 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-4 border-t border-white/10 bg-white/5 flex items-center justify-between text-xs text-white/60 font-light">
<p>Showing 5 of 5 modules</p>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 disabled:opacity-50 transition-colors">Previous</button>
<button className="px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">Next</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
<div className="p-3 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-lg shadow-indigo-500/30">
<i className="w-6 h-6 text-white" data-lucide="zap"></i>
</div>
<div>
<p className="text-xs text-white/60 uppercase tracking-widest font-medium">Performance</p>
<h4 className="text-xl font-semibold text-white mt-1">98/100</h4>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
<div className="p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-lg shadow-pink-500/30">
<i className="w-6 h-6 text-white" data-lucide="shield"></i>
</div>
<div>
<p className="text-xs text-white/60 uppercase tracking-widest font-medium">Reliability</p>
<h4 className="text-xl font-semibold text-white mt-1">100%</h4>
</div>
</div>
<div className="glass-panel rounded-2xl p-6 flex items-center gap-4 group hover:-translate-y-1 transition-transform duration-300">
<div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30">
<i className="w-6 h-6 text-white" data-lucide="users"></i>
</div>
<div>
<p className="text-xs text-white/60 uppercase tracking-widest font-medium">Adoption</p>
<h4 className="text-xl font-semibold text-white mt-1">Active</h4>
</div>
</div>
</div>
<footer className="text-center text-xs text-white/40 font-light">
<p>Honable Design System © 2023</p>
</footer>
</div>


    </>
  );
}
