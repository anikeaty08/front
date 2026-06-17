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



// Initialize Lucide icons
lucide.createIcons();

// Animate elements on page load
document.addEventListener('DOMContentLoaded', function() {
  const hiddenElements = document.querySelectorAll('.animate-hidden');
  
  // Trigger animations after a short delay
  setTimeout(() => {
    hiddenElements.forEach(el => {
      el.classList.remove('animate-hidden');
    });
  }, 100);
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-br via-transparent from-cyan-50/20 to-violet-50/20"></div>
<div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-float bg-cyan-400/10"></div>
<div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-float bg-violet-400/10" style={{animationDelay: '-3s'}}></div>
</div>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-16">
<section className="relative rounded-[40px] overflow-hidden shadow-2xl hero-gradient animate-hidden animate-fade-in-scale delay-300">

<nav className="absolute top-8 left-1/2 -translate-x-1/2 z-20 animate-hidden animate-fade-in-down delay-500">
<div className="flex items-center space-x-2 p-2 rounded-full glass-nav">
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-hidden animate-slide-in-blur delay-600 bg-white/20 text-white hover:bg-white/30">
<svg className="w-[16px] h-[16px]" data-lucide="layout" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="">Spaces</span>
</button>
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-hidden animate-slide-in-blur delay-700 text-white/70 hover:bg-white/10 hover:text-white">
<svg className="w-[16px] h-[16px]" data-lucide="cpu" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="12" y2="12"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="15" x2="15.01" y1="13" y2="13"></line><line x1="18" x2="18.01" y1="11" y2="11"></line><rect height="12" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="">Gadgets</span>
</button>
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-hidden animate-slide-in-blur delay-800 text-white/70 hover:bg-white/10 hover:text-white">
<svg className="w-[16px] h-[16px]" data-lucide="users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="">Members</span>
</button>
<button className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 animate-hidden animate-slide-in-blur delay-900 text-white/70 hover:bg-white/10 hover:text-white">
<svg className="w-[16px] h-[16px]" data-lucide="settings" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="">Control</span>
</button>
</div>
</nav>

<div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 lg:px-16 pt-32 pr-8 pb-80 pl-8 items-center">

<div className="space-y-8 text-white">
<div className="space-y-6">
<div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-nav text-sm animate-hidden animate-fade-in-left delay-600">
<div className="w-2 h-2 rounded-full animate-pulse bg-green-400"></div>
<span className="text-white/80">System Online</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight animate-hidden animate-fade-in-left delay-700">
            REIMAGINE
            <span className="text-transparent bg-clip-text bg-gradient-to-r via-blue-500 to-violet-500 animate-hidden animate-fade-in-left delay-900 from-cyan-400">LIVING</span>
<span className="text-4xl sm:text-5xl lg:text-6xl font-semibold animate-hidden animate-fade-in-left delay-1000">WITH AURA</span>
</h1>
<p className="text-xl leading-relaxed max-w-lg animate-hidden animate-fade-in-left delay-1100 text-white/70">
            Unify your entire smart home ecosystem in one elegant, intelligent interface. Control everything from lighting to security with unprecedented ease.
          </p>
</div>
<div className="flex flex-wrap items-center gap-6 animate-hidden animate-fade-in-up delay-1300">
<button className="group relative overflow-hidden inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-glow bg-white text-neutral-900">
<div className="absolute inset-0 bg-gradient-to-r to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-cyan-400"></div>
<div className="relative flex items-center space-x-3">
<svg className="w-[20px] h-[20px]" data-lucide="download" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="">Download App</span>
</div>
</button>
<button className="inline-flex items-center space-x-3 px-8 py-4 rounded-full border-2 font-semibold transition-all duration-300 hover:scale-105 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
<svg className="w-[20px] h-[20px]" data-lucide="play-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
<span className="">Watch Demo</span>
</button>
</div>

<div className="grid grid-cols-3 gap-6 pt-8 animate-hidden animate-fade-in-up delay-1400">
<div className="text-center">
<div className="text-3xl font-bold text-cyan-400">50+</div>
<div className="text-sm text-white/60">Devices</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-violet-400">24/7</div>
<div className="text-sm text-white/60">Monitoring</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-emerald-400">99.9%</div>
<div className="text-sm text-white/60">Uptime</div>
</div>
</div>
</div>

<div className="relative animate-hidden animate-fade-in-right delay-800">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 rounded-3xl blur-xl"></div>
<img alt="Smart Home Interface" className="relative w-full h-auto object-cover rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-500" src="https://cdn.midjourney.com/8a5b6a8e-81b4-451a-9353-210cf7c9a013/0_0.png?w=800&amp;q=80"/>

<div className="absolute top-6 right-6 glass-card p-3 rounded-2xl animate-float">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full animate-pulse bg-green-400"></div>
<span className="text-sm font-medium text-white">Active</span>
</div>
</div>
<div className="absolute bottom-6 left-6 glass-card p-4 rounded-2xl animate-float" style={{animationDelay: '-2s'}}>
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-orange-400" data-lucide="thermometer"></i>
<div>
<div className="font-semibold text-white">22°C</div>
<div className="text-xs text-white/60">Perfect</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-8 px-8 z-10">

<div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">

<div className="glass-card p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-hidden animate-slide-in-blur delay-1100">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-br to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 from-yellow-400">
<svg className="w-[24px] h-[24px]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="">
<h3 className="font-semibold text-white">Power</h3>
<p className="text-sm text-white/60">912 kWh</p>
</div>
</div>
<div className="text-sm font-medium text-green-400">-12%</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end h-16">
<div className="w-8 bg-gradient-to-t rounded-t-lg transition-all duration-500 from-yellow-400/60 to-yellow-400/20 hover:from-yellow-400 hover:to-yellow-400/60" style={{height: '30%'}}></div>
<div className="w-8 bg-gradient-to-t rounded-t-lg transition-all duration-500 from-yellow-400/60 to-yellow-400/20 hover:from-yellow-400 hover:to-yellow-400/60" style={{height: '45%'}}></div>
<div className="w-8 bg-gradient-to-t rounded-t-lg transition-all duration-500 from-yellow-400/80 to-yellow-400/40 hover:from-yellow-400 hover:to-yellow-400/80" style={{height: '60%'}}></div>
<div className="w-8 bg-gradient-to-t rounded-t-lg transition-all duration-500 from-yellow-400 to-yellow-400/60" style={{height: '78%'}}></div>
</div>
<div className="flex justify-between text-xs text-white/50">
<span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
</div>
</div>
</div>

<div className="glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-hidden animate-slide-in-blur delay-1200 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-br to-teal-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 from-emerald-400">
<svg className="w-[24px] h-[24px]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="font-semibold text-white">Security</h3>
<p className="text-sm text-emerald-400">All Secure</p>
</div>
</div>
<div className="w-3 h-3 rounded-full animate-pulse bg-emerald-400"></div>
</div>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-white/70">Front Door</span>
<span className="text-emerald-400">Locked</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/70">Cameras</span>
<span className="text-emerald-400">Active (4)</span>
</div>
<div className="flex items-center justify-between">
<span className="text-white/70">Motion</span>
<span className="text-white/50">No Activity</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-hidden animate-slide-in-blur delay-1300">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-3">
<div className="w-12 h-12 bg-gradient-to-br to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 from-blue-400">
<svg className="w-[24px] h-[24px]" data-lucide="wind" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path></svg>
</div>
<div className="">
<h3 className="font-semibold text-white">Climate</h3>
<p className="text-sm text-white/60">Auto Mode</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-12 h-6 peer-checked:bg-cyan-500 rounded-full peer transition-all duration-300 bg-white/20">
<div className="w-5 h-5 rounded-full shadow transform peer-checked:translate-x-6 transition-transform duration-300 mt-0.5 ml-0.5 bg-white"></div>
</div>
</label>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-white">22°C</span>
<span className="text-sm text-white/60">Target: 23°C</span>
</div>
<div className="flex justify-between text-sm text-white/60">
<span>Humidity: 50%</span>
<span>Air Quality: Good</span>
</div>
</div>
</div>

<div className="glass-card p-6 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl group animate-hidden animate-slide-in-blur delay-1400">
<div className="flex items-center space-x-4 mb-4">
<div className="w-12 h-12 bg-gradient-to-br to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 from-indigo-400">
<svg className="w-[24px] h-[24px]" data-lucide="cloud-sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="M20 12h2"></path><path d="m19.07 4.93-1.41 1.41"></path><path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path><path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path></svg>
</div>
<div>
<h3 className="font-semibold text-white">Weather</h3>
<p className="text-sm text-white/60">Partly Cloudy</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-white">24°C</span>
<span className="text-sm text-white/60">Feels like 26°C</span>
</div>
<div className="flex justify-between text-sm text-white/60">
<span>UV Index: 4</span>
<span>Humidity: 62%</span>
</div>
<div className="flex justify-between text-sm text-white/60">
<span>Wind: 12 km/h</span>
<span>Rain: 10%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 animate-hidden animate-fade-in-up delay-1500">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-neutral-900 mb-4">Quick Access</h2>
<p className="text-neutral-600 text-lg max-w-2xl mx-auto">Control your most important devices and settings with a single tap</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">

<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18V5l3-3h5a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9Z"></path>
<polyline points="9,9 21,9"></polyline>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Lights</h3>
</div>
<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Climate</h3>
</div>
<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V2H8"></path>
<path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"></path>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Security</h3>
</div>
<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Audio</h3>
</div>
<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Schedule</h3>
</div>
<div className="glass-card bg-white/40 p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105 hover:shadow-lg group">
<div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</div>
<h3 className="font-semibold text-neutral-900">Settings</h3>
</div>
</div>
</section>
</main>


    </>
  );
}
