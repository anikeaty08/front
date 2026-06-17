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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 noise"></div>

<div className="absolute inset-0 animate-grid-pulse" style={{backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<div className="absolute top-0 left-0 w-full h-full">
<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-conic from-indigo-500/20 via-purple-500/10 to-indigo-500/20 rounded-full blur-3xl animate-aurora"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-conic from-emerald-500/15 via-cyan-500/10 to-emerald-500/15 rounded-full blur-3xl animate-aurora" style={{animationDelay: '-10s'}}></div>
</div>

<div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-float animate-pulse-glow"></div>
<div className="absolute top-40 right-20 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl animate-float-reverse"></div>
<div className="absolute bottom-20 left-1/3 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl animate-float-delay"></div>
<div className="absolute bottom-40 right-1/4 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl animate-float"></div>

<div className="absolute top-1/4 right-10 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 animate-morph animate-spin-slow"></div>
<div className="absolute bottom-1/3 left-20 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 animate-morph" style={{animationDelay: '-4s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-4 h-4 bg-indigo-500/30 rounded-full blur-sm animate-orbit"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-3 h-3 bg-emerald-500/30 rounded-full blur-sm animate-orbit-reverse"></div>
</div>

<div className="absolute top-1/3 left-1/4">
<div className="w-32 h-32 border border-indigo-500/20 rounded-full animate-ripple"></div>
<div className="absolute inset-0 w-32 h-32 border border-indigo-500/20 rounded-full animate-ripple" style={{animationDelay: '1s'}}></div>
<div className="absolute inset-0 w-32 h-32 border border-indigo-500/20 rounded-full animate-ripple" style={{animationDelay: '2s'}}></div>
</div>
<div className="absolute bottom-1/4 right-1/3">
<div className="w-24 h-24 border border-emerald-500/20 rounded-full animate-ripple" style={{animationDelay: '0.5s'}}></div>
<div className="absolute inset-0 w-24 h-24 border border-emerald-500/20 rounded-full animate-ripple" style={{animationDelay: '1.5s'}}></div>
<div className="absolute inset-0 w-24 h-24 border border-emerald-500/20 rounded-full animate-ripple" style={{animationDelay: '2.5s'}}></div>
</div>

<div className="absolute top-0 left-1/4 w-px h-96 bg-gradient-to-b from-indigo-500/40 via-indigo-500/10 to-transparent animate-beam"></div>
<div className="absolute top-0 left-1/2 w-px h-96 bg-gradient-to-b from-violet-500/30 via-violet-500/10 to-transparent animate-beam" style={{animationDelay: '2s'}}></div>
<div className="absolute top-0 right-1/3 w-px h-96 bg-gradient-to-b from-emerald-500/30 via-emerald-500/10 to-transparent animate-beam" style={{animationDelay: '4s'}}></div>

<div className="absolute top-20 right-10 w-1 h-20 bg-gradient-to-b from-white/50 to-transparent rotate-[135deg] animate-meteor" style={{animationDelay: '0s'}}></div>
<div className="absolute top-40 right-1/4 w-1 h-16 bg-gradient-to-b from-indigo-400/50 to-transparent rotate-[135deg] animate-meteor" style={{animationDelay: '2s'}}></div>
<div className="absolute top-10 right-1/3 w-1 h-24 bg-gradient-to-b from-white/40 to-transparent rotate-[135deg] animate-meteor" style={{animationDelay: '4s'}}></div>

<div className="absolute top-[10%] left-[15%] w-1 h-1 bg-white rounded-full animate-twinkle"></div>
<div className="absolute top-[20%] left-[45%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '0.5s'}}></div>
<div className="absolute top-[15%] left-[75%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '1s'}}></div>
<div className="absolute top-[30%] left-[85%] w-1.5 h-1.5 bg-indigo-300 rounded-full animate-twinkle" style={{animationDelay: '1.5s'}}></div>
<div className="absolute top-[50%] left-[10%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[60%] left-[90%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '2.5s'}}></div>
<div className="absolute top-[70%] left-[30%] w-1.5 h-1.5 bg-emerald-300 rounded-full animate-twinkle" style={{animationDelay: '3s'}}></div>
<div className="absolute top-[80%] left-[60%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '3.5s'}}></div>
<div className="absolute top-[85%] left-[20%] w-1 h-1 bg-white rounded-full animate-twinkle" style={{animationDelay: '4s'}}></div>
<div className="absolute top-[40%] left-[50%] w-1 h-1 bg-violet-300 rounded-full animate-twinkle" style={{animationDelay: '4.5s'}}></div>

<div className="absolute top-[25%] left-[20%] w-2 h-2 bg-indigo-500/20 rounded-full animate-particle"></div>
<div className="absolute top-[45%] left-[70%] w-2 h-2 bg-emerald-500/20 rounded-full animate-particle" style={{animationDelay: '1s'}}></div>
<div className="absolute top-[65%] left-[40%] w-2 h-2 bg-violet-500/20 rounded-full animate-particle" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[35%] left-[80%] w-1.5 h-1.5 bg-amber-500/20 rounded-full animate-particle" style={{animationDelay: '3s'}}></div>
<div className="absolute top-[75%] left-[15%] w-1.5 h-1.5 bg-cyan-500/20 rounded-full animate-particle" style={{animationDelay: '4s'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-500/10 rounded-full animate-spin-slow"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-violet-500/5 rounded-full animate-spin-reverse"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/5 rounded-full animate-spin-slow" style={{animationDuration: '40s'}}></div>

<div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"></div>
<div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent"></div>
</div>

<nav className="border-b border-zinc-800/50 glass-strong fixed w-full z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tight text-gradient animate-text-glow" href="#">Portfolio</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 relative group" href="#">
                            Dashboard
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 relative group" href="#">
                            Portfolio
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 relative group" href="#">
                            Analytics
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm text-zinc-400 hover:text-white transition-all duration-300 hover:scale-105 relative group" href="#">
                            Transactions
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 hover:rotate-12">
<span className="iconify" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="p-2 text-zinc-400 hover:text-white transition-all duration-300 hover:scale-110 relative group">
<span className="iconify" data-icon="lucide:bell" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
</button>
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-xs font-medium cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-indigo-500/50 animate-border-dance border-2 border-transparent">JD</div>z
                </div>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-slide-up">
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gradient">Ganesh Garud"s Portfolio Overview</h1>
<p className="text-sm text-zinc-500 mt-1">Track and manage your investments</p>
</div>
<div className="flex items-center gap-3">
<button className="px-4 py-2 text-sm font-medium text-zinc-300 glass border border-zinc-700/50 rounded-lg hover:border-zinc-500 transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg">
<span className="iconify" data-icon="lucide:download" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Export
                </button>
<button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/30 animate-gradient relative overflow-hidden group">
<span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="iconify relative z-10" data-icon="lucide:plus" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="relative z-10">Add Asset</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="glass glow-border rounded-xl p-5 hover-lift card-shine animate-slide-up stagger-1 group">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Total Value</span>
<span className="iconify text-zinc-600 group-hover:text-indigo-400 transition-colors duration-300 group-hover:animate-bounce" data-icon="lucide:wallet" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl font-semibold tracking-tight text-white group-hover:text-gradient transition-all duration-300">$284,392.54</p>
<div className="flex items-center gap-1 mt-2">
<span className="iconify text-emerald-500 animate-bounce" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-emerald-500 font-medium">+12.5%</span>
<span className="text-xs text-zinc-500">vs last month</span>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-b-xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
</div>
<div className="glass glow-border rounded-xl p-5 hover-lift card-shine animate-slide-up stagger-2 group relative overflow-hidden">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Today's Gain</span>
<span className="iconify text-zinc-600 group-hover:text-emerald-400 transition-colors duration-300" data-icon="lucide:arrow-up-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl font-semibold tracking-tight text-emerald-400 group-hover:scale-110 transform transition-transform duration-300 origin-left">+$3,842.18</p>
<div className="flex items-center gap-1 mt-2">
<span className="iconify text-emerald-500" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-emerald-500 font-medium">+1.37%</span>
<span className="text-xs text-zinc-500">today</span>
</div>
<div className="absolute -right-8 -bottom-8 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
</div>
<div className="glass glow-border rounded-xl p-5 hover-lift card-shine animate-slide-up stagger-3 group relative overflow-hidden">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Total Assets</span>
<span className="iconify text-zinc-600 group-hover:text-amber-400 transition-colors duration-300 group-hover:rotate-180" data-icon="lucide:layers" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl font-semibold tracking-tight text-white">24</p>
<div className="flex items-center gap-1 mt-2">
<span className="text-xs text-zinc-500">Across 6 categories</span>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="glass glow-border rounded-xl p-5 hover-lift card-shine animate-slide-up stagger-4 group relative overflow-hidden">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-zinc-500 uppercase tracking-wide">Annual Return</span>
<span className="iconify text-zinc-600 group-hover:text-violet-400 transition-colors duration-300 group-hover:animate-spin" data-icon="lucide:percent" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<p className="text-2xl font-semibold tracking-tight text-white">18.4%</p>
<div className="flex items-center gap-1 mt-2">
<span className="iconify text-emerald-500" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs text-emerald-500 font-medium">+4.2%</span>
<span className="text-xs text-zinc-500">vs benchmark</span>
</div>
<div className="absolute -left-4 -top-4 w-20 h-20 bg-violet-500/10 rounded-full blur-xl group-hover:scale-200 transition-transform duration-700"></div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

<div className="lg:col-span-2 glass glow-border rounded-xl p-6 hover-lift animate-slide-up stagger-5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-violet-500/5"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<h2 className="text-base font-medium text-white">Portfolio Performance</h2>
<div className="flex items-center gap-1 bg-zinc-800/50 rounded-lg p-1 backdrop-blur">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-md shadow-lg shadow-indigo-500/20 transition-all duration-300">1M</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-md transition-all duration-300 hover:bg-zinc-700/50">3M</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-md transition-all duration-300 hover:bg-zinc-700/50">6M</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-md transition-all duration-300 hover:bg-zinc-700/50">1Y</button>
<button className="px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white rounded-md transition-all duration-300 hover:bg-zinc-700/50">All</button>
</div>
</div>

<div className="h-64 relative">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 600 200">
<defs>
<lineargradient id="chartGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(99, 102, 241)', stopOpacity: '0.4'}}>
<animate attributename="stop-opacity" dur="3s" repeatcount="indefinite" values="0.4;0.6;0.4"></animate>
</stop>
<stop offset="100%" style={{stopColor: 'rgb(99, 102, 241)', stopOpacity: '0'}}></stop>
</lineargradient>
<lineargradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgb(99, 102, 241)'}}>
<animate attributename="stop-color" dur="4s" repeatcount="indefinite" values="rgb(99, 102, 241);rgb(139, 92, 246);rgb(99, 102, 241)"></animate>
</stop>
<stop offset="100%" style={{stopColor: 'rgb(139, 92, 246)'}}>
<animate attributename="stop-color" dur="4s" repeatcount="indefinite" values="rgb(139, 92, 246);rgb(99, 102, 241);rgb(139, 92, 246)"></animate>
</stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M0 180 Q50 170 100 150 T200 120 T300 100 T400 60 T500 80 T600 40 L600 200 L0 200 Z" fill="url(#chartGradient)"></path>
<path d="M0 180 Q50 170 100 150 T200 120 T300 100 T400 60 T500 80 T600 40" fill="none" filter="url(#glow)" stroke="url(#lineGradient)" strokeLinecap="round" strokeWidth="3"></path>

<circle fill="white" filter="url(#glow)" r="6">
<animatemotion dur="10s" path="M0 180 Q50 170 100 150 T200 120 T300 100 T400 60 T500 80 T600 40" repeatcount="indefinite"></animatemotion>
</circle>
<circle fill="rgb(99, 102, 241)" r="3">
<animatemotion dur="10s" path="M0 180 Q50 170 100 150 T200 120 T300 100 T400 60 T500 80 T600 40" repeatcount="indefinite"></animatemotion>
</circle>
</svg>
<div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-zinc-600 pt-2 border-t border-zinc-800/50">
<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
</div>
</div>
</div>
</div>

<div className="glass glow-border rounded-xl p-6 hover-lift animate-slide-up relative overflow-hidden group" style={{animationDelay: '0.6s', opacity: '0'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<h2 className="text-base font-medium text-white mb-6">Asset Allocation</h2>
<div className="flex justify-center mb-6">
<div className="relative w-40 h-40 group">
<svg className="w-full h-full -rotate-90 transition-transform duration-700 group-hover:scale-110" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="rgb(39, 39, 42)" strokeWidth="12"></circle>
<circle className="transition-all duration-500" cx="50" cy="50" fill="none" r="40" stroke="url(#ring1)" stroke-dasharray="100.53 150.79" strokeLinecap="round" strokeWidth="12">
<animate attributename="stroke-dashoffset" dur="1.5s" fill="freeze" from="251.33" to="0"></animate>
</circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="url(#ring2)" stroke-dasharray="62.83 188.5" stroke-dashoffset="-100.53" strokeLinecap="round" strokeWidth="12">
<animate attributename="stroke-dashoffset" begin="0.3s" dur="1.5s" fill="freeze" from="150" to="-100.53"></animate>
</circle>
<circle cx="50" cy="50" fill="none" r="40" stroke="url(#ring3)" stroke-dasharray="37.7 213.63" stroke-dashoffset="-163.36" strokeLinecap="round" strokeWidth="12">
<animate attributename="stroke-dashoffset" begin="0.6s" dur="1.5s" fill="freeze" from="50" to="-163.36"></animate>
</circle>
<defs>
<lineargradient id="ring1" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(99, 102, 241)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(139, 92, 246)'}}></stop>
</lineargradient>
<lineargradient id="ring2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(16, 185, 129)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(52, 211, 153)'}}></stop>
</lineargradient>
<lineargradient id="ring3" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(245, 158, 11)'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(251, 191, 36)'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-lg font-semibold text-white group-hover:scale-110 transition-transform duration-300">$284K</span>
<span className="text-xs text-zinc-500">Total</span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/30 transition-colors duration-300 cursor-pointer group/item">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 group-hover/item:scale-125 transition-transform duration-300"></div>
<span className="text-sm text-zinc-300">Stocks</span>
</div>
<span className="text-sm font-medium text-white">40%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/30 transition-colors duration-300 cursor-pointer group/item">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 group-hover/item:scale-125 transition-transform duration-300"></div>
<span className="text-sm text-zinc-300">Crypto</span>
</div>
<span className="text-sm font-medium text-white">25%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/30 transition-colors duration-300 cursor-pointer group/item">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover/item:scale-125 transition-transform duration-300"></div>
<span className="text-sm text-zinc-300">Bonds</span>
</div>
<span className="text-sm font-medium text-white">15%</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg hover:bg-zinc-800/30 transition-colors duration-300 cursor-pointer group/item">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-gradient-to-r from-zinc-500 to-zinc-400 group-hover/item:scale-125 transition-transform duration-300"></div>
<span className="text-sm text-zinc-300">Other</span>
</div>
<span className="text-sm font-medium text-white">20%</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass glow-border rounded-xl overflow-hidden animate-slide-up relative" style={{animationDelay: '0.7s', opacity: '0'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 via-transparent to-emerald-500/3"></div>
<div className="relative z-10">
<div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
<h2 className="text-base font-medium text-white">Holdings</h2>
<div className="flex items-center gap-3">
<div className="relative group">
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-400 transition-colors duration-300" data-icon="lucide:search" data-width="16" style={{strokeWidth: '1.5'}}></span>
<input className="w-48 pl-9 pr-4 py-2 text-sm bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300" placeholder="Search assets..." type="text"/>
</div>
<button className="p-2 text-zinc-400 hover:text-white bg-zinc-800/50 border border-zinc-700/50 rounded-lg transition-all duration-300 hover:border-indigo-500/50 hover:scale-105">
<span className="iconify" data-icon="lucide:filter" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full">
<thead>
<tr className="border-b border-zinc-800/50">
<th className="text-left text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">Asset</th>
<th className="text-right text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">Price</th>
<th className="text-right text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">Holdings</th>
<th className="text-right text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">Value</th>
<th className="text-right text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">24h Change</th>
<th className="text-right text-xs font-medium text-zinc-500 uppercase tracking-wide px-6 py-4">Allocation</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-zinc-800/30 hover:bg-gradient-to-r hover:from-indigo-500/5 hover:to-transparent transition-all duration-300 group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-xs font-semibold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-blue-500/20">AP</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-gradient transition-all duration-300">Apple Inc.</p>
<p className="text-xs text-zinc-500">AAPL</p>
</div>
</div>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">$178.72</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">125 shares</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm font-medium text-white">$22,340.00</span>
</td>
<td className="text-right px-6 py-4">
<span className="inline-flex items-center gap-1 text-sm text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10">
<span className="iconify animate-bounce" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                        +2.34%
                                    </span>
</td>
<td className="text-right px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-3/5 h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-indigo-500/50"></div>
</div>
<span className="text-xs text-zinc-400">7.9%</span>
</div>
</td>
</tr>
<tr className="border-b border-zinc-800/30 hover:bg-gradient-to-r hover:from-orange-500/5 hover:to-transparent transition-all duration-300 group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-xs font-semibold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-orange-500/20 animate-pulse-glow">₿</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-gradient transition-all duration-300">Bitcoin</p>
<p className="text-xs text-zinc-500">BTC</p>
</div>
</div>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">$43,256.89</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">1.85 BTC</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm font-medium text-white">$80,025.25</span>
</td>
<td className="text-right px-6 py-4">
<span className="inline-flex items-center gap-1 text-sm text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10">
<span className="iconify animate-bounce" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                        +5.67%
                                    </span>
</td>
<td className="text-right px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-4/5 h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-orange-500/50"></div>
</div>
<span className="text-xs text-zinc-400">28.1%</span>
</div>
</td>
</tr>
<tr className="border-b border-zinc-800/30 hover:bg-gradient-to-r hover:from-emerald-500/5 hover:to-transparent transition-all duration-300 group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-xs font-semibold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/20">NV</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-gradient transition-all duration-300">NVIDIA Corp</p>
<p className="text-xs text-zinc-500">NVDA</p>
</div>
</div>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">$495.22</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">85 shares</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm font-medium text-white">$42,093.70</span>
</td>
<td className="text-right px-6 py-4">
<span className="inline-flex items-center gap-1 text-sm text-rose-400 px-2 py-1 rounded-full bg-rose-500/10">
<span className="iconify" data-icon="lucide:trending-down" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                        -1.23%
                                    </span>
</td>
<td className="text-right px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-1/2 h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-emerald-500/50"></div>
</div>
<span className="text-xs text-zinc-400">14.8%</span>
</div>
</td>
</tr>
<tr className="border-b border-zinc-800/30 hover:bg-gradient-to-r hover:from-violet-500/5 hover:to-transparent transition-all duration-300 group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-xs font-semibold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-violet-500/20 animate-pulse-glow">Ξ</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-gradient transition-all duration-300">Ethereum</p>
<p className="text-xs text-zinc-500">ETH</p>
</div>
</div>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">$2,284.56</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">12.5 ETH</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm font-medium text-white">$28,557.00</span>
</td>
<td className="text-right px-6 py-4">
<span className="inline-flex items-center gap-1 text-sm text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10">
<span className="iconify animate-bounce" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                        +3.89%
                                    </span>
</td>
<td className="text-right px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-2/5 h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-violet-500/50"></div>
</div>
<span className="text-xs text-zinc-400">10.0%</span>
</div>
</td>
</tr>
<tr className="hover:bg-gradient-to-r hover:from-rose-500/5 hover:to-transparent transition-all duration-300 group cursor-pointer">
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center text-xs font-semibold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-red-500/20">TS</div>
<div>
<p className="text-sm font-medium text-white group-hover:text-gradient transition-all duration-300">Tesla Inc.</p>
<p className="text-xs text-zinc-500">TSLA</p>
</div>
</div>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">$248.50</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm text-zinc-300">65 shares</span>
</td>
<td className="text-right px-6 py-4">
<span className="text-sm font-medium text-white">$16,152.50</span>
</td>
<td className="text-right px-6 py-4">
<span className="inline-flex items-center gap-1 text-sm text-emerald-400 px-2 py-1 rounded-full bg-emerald-500/10">
<span className="iconify animate-bounce" data-icon="lucide:trending-up" data-width="14" style={{strokeWidth: '1.5'}}></span>
                                        +1.12%
                                    </span>
</td>
<td className="text-right px-6 py-4">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="w-1/4 h-full bg-gradient-to-r from-red-500 to-rose-500 rounded-full transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-500/50"></div>
</div>
<span className="text-xs text-zinc-400">5.7%</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800/50">
<span className="text-sm text-zinc-500">Showing 5 of 24 assets</span>
<div className="flex items-center gap-2">
<button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-300 hover:scale-110">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-violet-600 rounded-lg shadow-lg shadow-indigo-500/20">1</button>
<button className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-300">2</button>
<button className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-300">3</button>
<button className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all duration-300 hover:scale-110">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full shadow-2xl shadow-indigo-500/40 flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-indigo-500/60 group z-50 animate-bounce" style={{animationDuration: '2s'}}>
<span className="iconify group-hover:rotate-180 transition-transform duration-500" data-icon="lucide:plus" data-width="24" style={{strokeWidth: '1.5'}}></span>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 animate-ping opacity-30"></div>
</button>

    </>
  );
}
