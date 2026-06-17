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
      <iframe className="fixed w-full h-screen" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/hypnotism-pt5mAN1UhCYxlbJiQtA1wdYe/" width="100%"></iframe>
<header className="container mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 rounded-3xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-orange-500/40 transition-all duration-300 from-orange-500 via-pink-500 to-purple-600 shadow-orange-500/25" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-shield-check w-5 h-5 text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="absolute -inset-0.5 bg-gradient-to-r rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity -z-10 from-orange-500 to-purple-600" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="flex flex-col">
<span className="font-semibold text-lg tracking-tight font-sans">VaultGuard</span>
<span className="text-xs font-mono text-white/60 font-sans">ENTERPRISE</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-1 rounded-3xl backdrop-blur-xl border px-2 py-2 shadow-2xl bg-white/10 border-white/10" style={{transition: 'outline 0.1s ease-in-out'}}>
<a className="px-4 py-2 text-sm font-medium rounded-3xl transition-all bg-white/10 text-orange-400 hover:bg-white/20 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Dashboard</a>
<a className="px-4 py-2 text-sm font-medium rounded-3xl transition-all hover:bg-white/10 hover:text-orange-400 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Portfolio</a>
<a className="px-4 py-2 text-sm font-medium rounded-3xl transition-all hover:bg-white/10 hover:text-orange-400 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Analytics</a>
<a className="px-4 py-2 text-sm font-medium rounded-3xl transition-all hover:bg-white/10 hover:text-orange-400 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Security</a>
<a className="px-4 py-2 text-sm font-medium rounded-3xl transition-all hover:bg-white/10 hover:text-orange-400 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise</a>
<div className="relative group">
<button className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-3xl transition-all hover:bg-white/10 hover:text-orange-400 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>
          Solutions <svg className="lucide lucide-chevron-down w-4 h-4 group-hover:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</nav>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2">
</div>
<button className="hidden md:inline-flex items-center justify-center w-10 h-10 rounded-3xl transition-all border hover:bg-white/10 border-white/10 hover:border-white/20" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-user-circle w-5 h-5" data-lucide="user-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path></svg>
</button>
<a className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r px-4 py-2.5 text-sm font-medium hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg from-orange-500 to-pink-600 shadow-orange-500/25 hover:shadow-orange-500/40 font-sans" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Start Protection
      </a>
<button className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-3xl transition-all border hover:bg-white/10 border-white/10" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>
<main className="container mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-8 md:gap-12 p-4 md:p-6">

<header className="text-center space-y-4 opacity-0 animate-fade-up" style={{animationDelay: '0.1s', opacity: '1'}}>
<div className="flex items-center justify-center gap-3 text-white/60">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path className="" d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-sm tracking-wider uppercase font-medium font-sans">Next-Gen Asset Intelligence Platform</span>
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-normal text-white tracking-tight font-instrument-serif">
        Fortress-Grade
        <span className="bg-clip-text font-normal text-transparent font-instrument-serif bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400" style={{transition: 'outline 0.1s ease-in-out'}}>Digital Vaults</span>
</h1>
<p className="max-w-2xl leading-relaxed text-lg text-[#ffffff]/70 mr-auto ml-auto">Revolutionary blockchain infrastructure meets institutional-grade security. Protect, manage, and optimize your digital assets with military-level encryption and AI-powered threat detection.</p>
</header>

<section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 opacity-0 animate-fade-up" style={{animationDelay: '0.3s', opacity: '1'}}>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>$2.4B+</div>
<div className="text-xs uppercase tracking-wide text-white/40 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Assets Protected</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-pink-400 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>99.99%</div>
<div className="text-xs uppercase tracking-wide text-white/40 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Uptime SLA</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-purple-400 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>500K+</div>
<div className="text-xs uppercase tracking-wide text-white/40 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Users Trust</div>
</div>
<div className="text-center">
<div className="text-2xl md:text-3xl text-orange-400 font-instrument-serif font-normal" style={{transition: 'outline 0.1s ease-in-out'}}>24/7</div>
<div className="text-xs uppercase tracking-wide text-white/40 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Monitoring</div>
</div>
</section>

<div className="relative flex flex-col lg:flex-row gap-8 lg:gap-12" style={{perspective: '2000px'}}>

<article className="w-80 md:w-96 lg:w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 rotate-[-6deg] opacity-0 animate-slide-left card-hover cursor-pointer group" style={{opacity: '1', zIndex: '1'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#1a0d1f] via-[#4a1d40] to-[#e879f9]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="relative h-full card-content">

<header className="p-6 lg:p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2 text-fuchsia-200/80" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs tracking-wide uppercase font-medium font-sans">Security</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-fuchsia-200/50 group-hover:text-fuchsia-200 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M7 17V7h10"></path></svg>
</div>

<div className="w-16 h-16 rounded-3xl bg-fuchsia-500/10 flex items-center justify-center ring-1 ring-fuchsia-500/20 card-icon mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="w-8 h-8 text-fuchsia-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="m7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>

<h2 className="text-2xl lg:text-3xl leading-tight text-white tracking-tight font-instrument-serif font-normal mb-4">Multi-Signature Security</h2>
<p className="text-sm lg:text-base text-fuchsia-100/70 leading-relaxed font-sans mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>Advanced cryptographic protection with customizable signature requirements and hardware security module integration.</p>
</header>

<div className="px-6 lg:px-8 pb-6">
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-8 h-8 rounded-2xl bg-orange-500/20 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-key w-4 h-4 text-orange-300" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3-2.3a1 1 0 0 0 0-1.4l-2.1-2.1a1 1 0 0 0-1.4 0l-2.3 2.3"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<div className="text-xs">
<p className="text-white font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Hardware Keys</p>
<p className="text-fuchsia-200/60 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Physical authentication</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="w-8 h-8 rounded-2xl bg-pink-500/20 flex items-center justify-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-users w-4 h-4 text-pink-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-xs">
<p className="text-white font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Team Approval</p>
<p className="text-fuchsia-200/60 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Multi-party consensus</p>
</div>
</div>
</div>
</div>

<footer className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
<div className="flex items-center justify-between">
<div className="text-xs text-fuchsia-200/60 font-sans">
<span>Enterprise Grade</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-emerald-400 font-sans">Active</span>
</div>
</div>
</footer>
</div>
</article>

<article className="w-80 md:w-96 lg:w-[400px] aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10 rotate-[6deg] opacity-0 animate-slide-right card-hover card-hover-right cursor-pointer group" style={{opacity: '1', zIndex: '2'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#0f1419] via-[#1d4ed8] to-[#3b82f6]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
<div className="relative h-full card-content">

<header className="p-6 lg:p-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2 text-blue-200/80">
<svg className="lucide lucide-brain w-4 h-4" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>
<span className="text-xs tracking-wide uppercase font-medium font-sans">Intelligence</span>
</div>
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-blue-200/50 group-hover:text-blue-200 transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M7 17V7h10"></path></svg>
</div>

<div className="w-16 h-16 rounded-3xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-500/20 card-icon mb-6">
<svg className="w-8 h-8 text-blue-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v6m6-6v6m-13 4h4l3 3 3-3h4"></path></svg>
</div>

<h2 className="text-2xl lg:text-3xl leading-tight text-white tracking-tight font-instrument-serif font-normal mb-4">AI-Powered Analytics</h2>
<p className="text-sm lg:text-base text-blue-100/70 leading-relaxed font-sans mb-6">Real-time market intelligence with predictive algorithms and automated risk assessment for optimal portfolio management.</p>
</header>

<div className="px-6 lg:px-8 pb-6">
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
<div className="w-8 h-8 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
<svg className="lucide lucide-trending-up w-4 h-4 text-cyan-300" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22,7 13.5,15.5 8.5,10.5 2,17"></polyline><polyline points="16,7 22,7 22,13"></polyline></svg>
</div>
<div className="text-xs">
<p className="text-white font-medium font-sans">Market Predictions</p>
<p className="text-blue-200/60 font-sans">ML-driven insights</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10">
<div className="w-8 h-8 rounded-2xl bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-purple-300" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<div className="text-xs">
<p className="text-white font-medium font-sans">Risk Assessment</p>
<p className="text-blue-200/60 font-sans">Automated alerts</p>
</div>
</div>
</div>
</div>

<footer className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
<div className="flex items-center justify-between">
<div className="text-xs text-blue-200/60 font-sans">
<span>AI-Enhanced</span>
</div>
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-xs text-blue-400 font-sans">Learning</span>
</div>
</div>
</footer>
</div>
</article>
</div>

<section className="text-center space-y-6 opacity-0 animate-fade-up" style={{animationDelay: '0.5s', opacity: '1'}}>
<h2 className="text-2xl md:text-3xl font-instrument-serif font-normal text-white">Ready to Secure Your Digital Future?</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="inline-flex items-center gap-2 rounded-3xl bg-gradient-to-r px-6 py-3 text-base font-medium hover:from-orange-400 hover:to-pink-500 transition-all shadow-lg from-orange-500 to-pink-600 shadow-orange-500/25 hover:shadow-orange-500/40 font-sans" href="#">
<svg className="lucide lucide-shield-plus w-5 h-5" data-lucide="shield-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg>
          Start Free Trial
        </a>
<a className="inline-flex items-center gap-2 rounded-3xl border border-white/20 px-6 py-3 text-base font-medium hover:bg-white/10 transition-all font-sans" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          Schedule Demo
        </a>
</div>
</section>
</main>

<div className="fixed inset-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-3xl"></div>
</div>

    </>
  );
}
