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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-neutral-950 to-neutral-950"></div>
<div className="absolute w-full h-full opacity-20" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full blur-[1px] animate-float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full blur-[1px] animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full blur-[0.5px] animate-float" style={{animationDelay: '4s'}}></div>
</div>

<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-neutral-950/80 border-b border-white/5">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-white hover:text-blue-200 transition-colors" href="#">
          ATMO//SERE
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
</div>
<div className="flex items-center gap-3">
</div>
</nav>
</header>
<main className="relative z-10 pt-16">

<section className="min-h-[90vh] flex flex-col overflow-hidden text-center pr-4 pl-4 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl animate-lights pointer-events-none"></div>
<div className="z-10 max-w-5xl mr-auto ml-auto relative space-y-8">

<div className="mx-auto w-24 h-24 mb-6 relative animate-fly-in">
</div>
<div className="space-y-4 animate-on-scroll animate">
<h1 className="md:text-7xl lg:text-8xl bg-clip-text text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-neutral-500">
              ATMO//SERE
            </h1>
<p className="text-xl md:text-2xl font-medium tracking-tight text-blue-200/80">
              Autonomous Climate Nano-Swarm &amp; Environmental Intelligence
            </p>
<p className="max-w-2xl mx-auto text-base md:text-lg text-neutral-400 leading-relaxed">
              Microscopic robots that gather real-time climate data from air, water, and soil, creating a living climate map for communities.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-on-scroll animate" style={{animationDelay: '0.2s'}}>
<button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-neutral-950 bg-white rounded-full hover:bg-neutral-100 transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20">
              Watch Pitch
              <svg aria-hidden="true" className="iconify ml-2 text-neutral-900 iconify--lucide" data-icon="lucide:play" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
              Explore System
              <svg aria-hidden="true" className="iconify ml-2 text-neutral-400 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-custom opacity-50">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:chevrons-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 6l5 5l5-5M7 13l5 5l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-white/5" id="anatomy">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 md:flex md:items-end md:justify-between animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Nanobot Anatomy</h2>
<button className="hidden md:flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-4 md:mt-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
              Play Anatomy Tour
            </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 gap-x-8 gap-y-8 items-center">

<div className="lg:col-span-3 space-y-2 animate-on-scroll">
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">A</span>
<h3 className="text-sm font-semibold text-white mt-1">Bio-Inspired Wings</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Lightweight, efficient micro-flight for steady positioning.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">B</span>
<h3 className="text-sm font-semibold text-white mt-1">Micro AI Core</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Stacked-silicon processor enabling on-device intelligence and swarm logic.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">C</span>
<h3 className="text-sm font-semibold text-white mt-1">Micro-LiDAR Ring</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Structured-light scanning for particulates and airflow patterns.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">D</span>
<h3 className="text-sm font-semibold text-white mt-1">Spectral Sensor Array</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Detects chemical signatures, VOCs, microplastics, and air composition.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">E</span>
<h3 className="text-sm font-semibold text-white mt-1">Nano-Channel Intake</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Micro-flow pathways that carry air samples into the analysis chamber.</p>
</div>
</div>

<div className="lg:col-span-6 relative z-10 flex flex-col items-center justify-center py-8 lg:py-0 animate-on-scroll">
<div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">

<div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>

<div className="absolute inset-0 border border-white/5 rounded-full scale-90 pointer-events-none"></div>
<div className="absolute inset-0 border border-dashed border-blue-500/20 rounded-full scale-110 animate-[spin_60s_linear_infinite] pointer-events-none"></div>
<div className="absolute inset-0 border border-dotted border-white/10 rounded-full scale-125 animate-[spin_45s_linear_infinite_reverse] pointer-events-none"></div>

<img alt="YU6p6M.png" border="0" className="" src="https://s6.imgcdn.dev/YU6p6M.png"/>
</div>
</div>

<div className="lg:col-span-3 space-y-2 animate-on-scroll">
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">F</span>
<h3 className="text-sm font-semibold text-white mt-1">CNT Chemosensors</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Reads gas concentration and pollutant levels with extreme sensitivity.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">G</span>
<h3 className="text-sm font-semibold text-white mt-1">Power Layer</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Thin-film micro-batteries and passive energy harvesting.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">H</span>
<h3 className="text-sm font-semibold text-white mt-1">Swarm Comm Node</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Short-range mesh networking between nearby nanobots and local gateways.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">I</span>
<h3 className="text-sm font-semibold text-white mt-1">Soil &amp; Surface Probe</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Retractable needle for surface contamination, nutrients, and moisture.</p>
</div>
<div className="group p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-default">
<span className="text-blue-400 font-mono text-xs font-bold">J</span>
<h3 className="text-sm font-semibold text-white mt-1">Docking Connector</h3>
<p className="text-xs text-neutral-400 mt-1 leading-relaxed">Used for charging, calibration, and firmware updates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="architecture">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Hybrid Swarm Architecture</h2>
<p className="text-neutral-400">From thousands of nanobots to one unified climate system.</p>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 items-start">

<div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0"></div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.1s'}}>
<div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 mx-auto border border-blue-500/20">1</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">Airborne Scouts</h3>
<p className="text-xs text-neutral-400 text-center leading-relaxed">Sample air chemistry and particulates</p>
</div>
</div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 mx-auto border border-blue-500/20">2</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">Ground Sentinels</h3>
<p className="text-xs text-neutral-400 text-center leading-relaxed">Measure soil, surface, and heat stress</p>
</div>
</div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.3s'}}>
<div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 mx-auto border border-blue-500/20">3</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">AquaFloat Nodes</h3>
<p className="text-xs text-neutral-400 text-center leading-relaxed">Test water quality and microplastics</p>
</div>
</div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="bg-neutral-950 border-gradient rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 mx-auto animate-pulse">4</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">Local Gateway</h3>
<p className="text-xs text-neutral-400 text-center leading-relaxed">All send compressed data here</p>
</div>
</div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.5s'}}>
<div className="bg-neutral-950 border border-white/10 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 mx-auto border border-blue-500/20">5</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">Satellite Link</h3>
<p className="text-xs text-neutral-400 text-center leading-relaxed">Uplinks to network</p>
</div>
</div>

<div className="relative z-10 animate-on-scroll" style={{animationDelay: '0.6s'}}>
<div className="bg-gradient-to-b from-blue-900/20 to-neutral-950 border border-blue-500/30 rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300 shadow-lg shadow-blue-500/10">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mb-4 mx-auto shadow-lg shadow-blue-500/40">6</div>
<h3 className="text-sm font-semibold text-white text-center mb-2">Cloud Dashboard</h3>
<p className="text-xs text-neutral-300 text-center leading-relaxed">Data streams into ATMO//SERE</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="dashboard">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-blue-950/10 to-neutral-950 pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-12 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white">ATMO//SERE Cloud</h2>
<p className="mt-4 text-lg text-neutral-400 max-w-2xl">Unified dashboards that turn nanobot swarms into human-readable climate insights.</p>
</div>

<div className="border-gradient rounded-3xl bg-neutral-900/80 backdrop-blur-xl shadow-2xl overflow-hidden animate-on-scroll">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div className="ml-4 px-3 py-1 rounded bg-neutral-950/50 text-[10px] text-neutral-500 font-mono flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                cloud.atmosere.io/dashboard/live
              </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">

<div className="border-r border-white/10 p-4 bg-neutral-950/50 hidden lg:block">
<div className="space-y-1">
<div className="px-3 py-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">Monitor</div>
<button className="w-full text-left px-3 py-2 rounded-lg bg-blue-500/10 text-blue-400 text-sm font-medium flex items-center justify-between">
<span>Overview</span>
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Air Quality</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Water Safety</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Soil Health</button>
<button className="w-full text-left px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors">Heat Risk</button>
</div>
<div className="mt-8 p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="iconify text-yellow-400 iconify--lucide" data-icon="lucide:alert-triangle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold text-yellow-100">Hotspot Alert</span>
</div>
<p className="text-[11px] text-neutral-400 leading-snug">Unhealthy air expected in District 4 in 3 hours.</p>
<button className="mt-3 w-full py-1.5 text-[10px] font-medium bg-white/10 hover:bg-white/20 rounded transition-colors">Notify Staff</button>
</div>
</div>

<div className="lg:col-span-3 p-6 md:p-8 bg-neutral-900/30">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-semibold text-white">City Overview</h3>
<p className="text-sm text-neutral-400">Live data from 12,40 active nodes</p>
</div>
<div className="flex items-center gap-2 bg-neutral-950 rounded-lg p-1 border border-white/10">
<button className="px-3 py-1 text-xs font-medium bg-white/10 text-white rounded">Live</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-white transition-colors">Forecast</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
<div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-blue-400 iconify--lucide" data-icon="lucide:wind" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-3xl font-bold text-white tracking-tight">76</div>
<div className="text-xs text-blue-400 font-medium uppercase mt-1">Air Quality</div>
</div>
<div className="p-4 rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden group hover:border-cyan-500/50 transition-colors">
<div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-cyan-400 iconify--lucide" data-icon="lucide:droplets" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<div className="text-3xl font-bold text-white tracking-tight">83</div>
<div className="text-xs text-cyan-400 font-medium uppercase mt-1">Water Safety</div>
</div>
<div className="p-4 rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden group hover:border-amber-500/50 transition-colors">
<div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:sprout" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-3xl font-bold text-white tracking-tight">61</div>
<div className="text-xs text-amber-400 font-medium uppercase mt-1">Soil Health</div>
</div>
<div className="p-4 rounded-xl bg-neutral-950 border border-white/10 relative overflow-hidden group hover:border-rose-500/50 transition-colors">
<div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-rose-400 iconify--lucide" data-icon="lucide:thermometer" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-3xl font-bold text-white tracking-tight">72</div>
<div className="text-xs text-rose-400 font-medium uppercase mt-1">Heat Risk</div>
</div>
</div>

<div className="relative w-full h-64 md:h-80 rounded-2xl border border-white/10 overflow-hidden bg-neutral-950">

<div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&amp;w=2613&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale contrast-125" style={{}}></div>
<div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>

<div className="absolute top-1/4 left-1/3 w-32 h-32 bg-rose-500/30 rounded-full blur-2xl animate-pulse"></div>
<div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>

<div className="absolute top-[30%] left-[35%]">
<div className="flex items-center gap-2 px-2 py-1 bg-neutral-900/90 rounded border border-white/20 shadow-lg transform -translate-x-1/2">
<span className="w-2 h-2 rounded-full bg-rose-500"></span>
<span className="text-[10px] text-white font-medium">Heat Pocket Detected</span>
</div>
</div>

<div className="absolute bottom-4 right-4 flex items-center bg-neutral-900 rounded-lg p-1 border border-white/10">
<span className="px-2 text-[10px] text-neutral-400">Compare</span>
<div className="w-8 h-4 bg-blue-600 rounded-full relative cursor-pointer mx-1">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-neutral-900/20 overflow-hidden">
<div className="mb-10 text-center animate-on-scroll">
<h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest">Future Collaborators</h3>
</div>
<div className="relative w-full">
<div className="flex gap-6 w-max animate-marquee pause-on-hover">

<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">Harvard RoboBee</h4>
<p className="mt-2 text-sm text-neutral-400">Bio-inspired micro-flight research for next-gen airborne nanobots.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[85%]"></div></div>
<p className="mt-1 text-[10px] text-blue-400 text-right">85% Compatibility</p>
</div>
<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">Nvidia AI Hardware</h4>
<p className="mt-2 text-sm text-neutral-400">Developing ultra-efficient inference chips to power on-bot decision-making.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[92%]"></div></div>
<p className="mt-1 text-[10px] text-green-400 text-right">92% Optimization</p>
</div>
<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">SpaceX Starlink</h4>
<p className="mt-2 text-sm text-neutral-400">Global uplinks for real-time climate data in remote regions.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-white w-[98%]"></div></div>
<p className="mt-1 text-[10px] text-white text-right">98% Coverage</p>
</div>
<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">Google Cloud Geospatial</h4>
<p className="mt-2 text-sm text-neutral-400">Geospatial processing and real-time dashboard infrastructure.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 w-[90%]"></div></div>
<p className="mt-1 text-[10px] text-yellow-400 text-right">90% Integration</p>
</div>

<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">Harvard RoboBee</h4>
<p className="mt-2 text-sm text-neutral-400">Bio-inspired micro-flight research for next-gen airborne nanobots.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[85%]"></div></div>
<p className="mt-1 text-[10px] text-blue-400 text-right">85% Compatibility</p>
</div>
<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">Nvidia AI Hardware</h4>
<p className="mt-2 text-sm text-neutral-400">Developing ultra-efficient inference chips to power on-bot decision-making.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[92%]"></div></div>
<p className="mt-1 text-[10px] text-green-400 text-right">92% Optimization</p>
</div>
<div className="w-80 p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:-translate-y-2 transition-transform duration-300">
<h4 className="text-lg font-semibold text-white">SpaceX Starlink</h4>
<p className="mt-2 text-sm text-neutral-400">Global uplinks for real-time climate data in remote regions.</p>
<div className="mt-4 h-1 w-full bg-neutral-800 rounded-full overflow-hidden"><div className="h-full bg-white w-[98%]"></div></div>
<p className="mt-1 text-[10px] text-white text-right">98% Coverage</p>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-white mb-8 animate-on-scroll">Critical Use Cases</h2>
<div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory">
<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:flame" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Disaster Response</h3>
<p className="text-neutral-400 text-sm">Nanobots deployed after wildfires or chemical spills for safe routing and air readings.</p>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sun" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Urban Heat Protection</h3>
<p className="text-neutral-400 text-sm">Real-time monitoring for schools, public spaces, and vulnerable communities.</p>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:waves" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Coastal Health</h3>
<p className="text-neutral-400 text-sm">Detecting microplastics, pollution spikes, and water quality trends.</p>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:wheat" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 22L16 8M3.47 12.53L5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94m4-4L13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4"></path><path d="M11.47 17.47L13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0m4-4L21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Agriculture</h3>
<p className="text-neutral-400 text-sm">Soil stress detection, early irrigation alerts, crop risk predictions.</p>
</div>
<div className="min-w-[300px] md:min-w-[350px] snap-center bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300 cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scale" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v18m7-13l3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2a17 17 0 0 0 8 2h1M5 8l3 8a5 5 0 0 1-6 0zV7m2 14h10"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-2">Air Quality Justice</h3>
<p className="text-neutral-400 text-sm">Portable climate intelligence for underserved communities.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16 animate-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">How ATMO//SERE Works.</h2>
<p className="text-lg text-neutral-400">A microscopic climate swarm. A global intelligence system. One unified workflow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 animate-on-scroll">
<div className="text-5xl font-bold text-neutral-800 mb-6">01</div>
<h3 className="text-2xl font-semibold text-white mb-4">Deploy the Nanobots</h3>
<p className="text-neutral-400 mb-6">ATMO//SERE releases three types of autonomous micro-robots into the environment:</p>
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span><span>Airborne Scouts monitor air chemistry.</span></li>
<li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span><span>Ground Sentinels analyze soil health.</span></li>
<li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></span><span>AquaFloat Nodes detect water quality.</span></li>
</ul>
</div>

<div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 animate-on-scroll">
<div className="text-5xl font-bold text-neutral-800 mb-6">02</div>
<h3 className="text-2xl font-semibold text-white mb-4">Sense, Analyze, and Think Locally</h3>
<p className="text-neutral-400 mb-6">Instead of sending raw data, nanobots process locally using micro-AI cores and spectral sensors.</p>
<div className="p-4 bg-white/5 rounded-xl border border-white/5">
<p className="text-sm text-white font-mono">Status: Edge Processing Active</p>
<div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-2/3 animate-pulse"></div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 animate-on-scroll">
<div className="text-5xl font-bold text-neutral-800 mb-6">03</div>
<h3 className="text-2xl font-semibold text-white mb-4">Swarm Coordination &amp; Uplink</h3>
<p className="text-neutral-400 mb-4">Mesh networking aggregates data to local gateways, which uplink via satellite.</p>
<p className="text-sm text-neutral-500">Operates in remote deserts, coastlines, and disaster zones.</p>
</div>

<div className="p-8 rounded-3xl bg-neutral-950 border border-white/10 animate-on-scroll">
<div className="text-5xl font-bold text-neutral-800 mb-6">04</div>
<h3 className="text-2xl font-semibold text-white mb-4">Real-Time Climate Dashboard</h3>
<p className="text-neutral-400 mb-4">Data flows into the Cloud becoming live heatmaps, risk predictions, and early-warning alerts.</p>
<button className="text-sm font-medium text-blue-400 hover:text-white transition-colors">View Demo Dashboard →</button>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-4xl px-4 animate-on-scroll">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-8 md:p-12">
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
<div className="w-20 h-20 rounded-full bg-neutral-800 flex items-center justify-center text-3xl shrink-0 border border-white/20">
              👨‍💻
            </div>
<div>
<h2 className="text-2xl font-semibold text-white mb-2">About the Founder</h2>
<div className="h-px w-12 bg-blue-500 mb-6"></div>
<p className="text-lg text-neutral-300 leading-relaxed mb-6">
                Yousef, 15-year-old founder building applied AI systems, creator of Chart//Swipe, participant in hackathons, AWS ML certified, focused on turning complex technology into accessible real-world solutions.
              </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400">AWS ML Certified</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400">Hackathon Winner</span>
<span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400">AI Systems Builder</span>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
</div>
</section>

<section className="pt-32 pb-16 text-center px-4 relative" id="vision">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto mb-20 animate-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-8">
            A world where every community can see its climate future.
          </h2>
<p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            ATMO//SERE creates the foundation for climate intelligence everywhere — connecting microscopic robots, AI, and global networks into one unified system that can protect people, cities, and ecosystems.
          </p>
<div className="mt-12">
<button className="px-8 py-3 bg-white text-neutral-950 rounded-full font-semibold hover:bg-neutral-200 transition-colors">
              Thank You
            </button>
</div>
</div>
<footer className="border-t border-white/10 pt-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
<p>© 2024 ATMO//SERE. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
</section>
</main>

    </>
  );
}
