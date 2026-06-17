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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#">

<div className="flex flex-col justify-center leading-none">
<span className="text-[15px] font-bold tracking-tight text-white">Ghostery</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#pricing">Support Us</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-gray-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300" href="#pricing">
                    Download Free
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-glow pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/5 mb-8">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-pink-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-semibold text-pink-300 tracking-wide uppercase">Trusted by 100M+ Users</span>
</div>
</div>

<h1 className="animate-fade-up text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]" style={{animationDelay: '0.2s'}}>
                    Take back control of <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF4F99] to-[#FF9F43]">your digital footprint.</span>
</h1>

<p className="animate-fade-up text-lg md:text-xl text-gray-400 font-light max-w-2xl mb-10 leading-relaxed" style={{animationDelay: '0.3s'}}>
                    The internet's most comprehensive privacy suite. Block ads, stop invisible trackers, and speed up your browsing with Ghostery.
                </p>

<div className="animate-fade-up flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: '0.4s'}}>
<button className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm hover:bg-gray-100 transition-colors flex items-center gap-2 group">
                        Add to Browser
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 text-gray-300 font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all">
                        View Privacy Report
                    </button>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mt-20 animate-fade-up" style={{animationDelay: '0.6s'}}>
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] overflow-hidden aspect-[16/9] md:aspect-[21/9] shadow-2xl shadow-pink-900/10">

<div className="border-b border-white/5 bg-white/5 p-4 flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-6 w-full max-w-md bg-white/5 rounded-md flex items-center px-3 border border-white/5">
<svg className="lucide lucide-lock w-3 h-3 text-green-400 mr-2" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="h-1.5 w-32 bg-white/10 rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-12 md:gap-24 relative z-10">

<div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-lg shadow-pink-500/5 relative group">
<svg className="lucide lucide-eye w-6 h-6 text-gray-400 group-hover:text-red-400 transition-colors" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<div className="absolute -bottom-8 text-[10px] text-gray-500 uppercase tracking-wider font-semibold group-hover:text-red-400 transition-colors">Tracker</div>
</div>

<div className="w-16 h-16 rounded-2xl bg-[#111] border border-pink-500/30 flex items-center justify-center shadow-lg shadow-pink-500/20 relative">
<div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-orange-500/20 blur-xl"></div>
<svg className="lucide lucide-shield w-6 h-6 text-pink-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<div className="absolute -bottom-8 text-[10px] text-pink-400 uppercase tracking-wider font-semibold">Blocked</div>

<div className="absolute top-1/2 -left-24 w-24 h-[1px] bg-gradient-to-r from-red-500/50 via-pink-500/20 to-pink-500/50"></div>
<div className="absolute top-1/2 -right-24 w-24 h-[1px] bg-gradient-to-l from-green-500/50 via-white/20 to-pink-500/50"></div>
</div>

<div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center shadow-lg shadow-pink-500/5 relative group">
<svg className="lucide lucide-user-check w-6 h-6 text-gray-400 group-hover:text-green-400 transition-colors" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="absolute -bottom-8 text-[10px] text-gray-500 uppercase tracking-wider font-semibold group-hover:text-green-400 transition-colors">Safe</div>
</div>
</div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-semibold text-gray-500 mb-8 uppercase tracking-widest">Featured in global publications</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-semibold tracking-tighter text-white">WIRED</span>
<span className="text-lg font-bold tracking-tighter text-white italic">TechCrunch</span>
<span className="text-xl font-medium tracking-tight text-white">The<span className="text-pink-500">Verge</span></span>
<span className="text-lg font-semibold tracking-widest text-white">FORBES</span>
<span className="text-lg font-light tracking-tighter text-white">USA TODAY</span>
</div>
</div>
</section>

<section className="py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">More than just an ad blocker.</h2>
<p className="text-lg text-gray-400 font-light max-w-2xl">We don't just hide annoyances. We neutralize invisible tracking technologies, speed up page loads, and reject cookie consent popups automatically.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full group-hover:bg-pink-500/20 transition-all duration-700"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Accelerate Your Browsing</h3>
<p className="text-sm text-gray-400 font-light max-w-md">By blocking heavy trackers and ads before they load, Ghostery makes websites load faster and consumes less data.</p>
</div>
<div className="flex gap-3 mt-8">
<div className="h-1.5 w-24 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full"></div>
<div className="h-1.5 w-8 bg-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors md:row-span-2">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-950/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-scan-eye w-5 h-5 text-white" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Deep Tracker Detection</h3>
<p className="text-sm text-gray-400 font-light mb-8">Identify and neutralize sophisticated fingerprinting techniques and non-cookie trackers.</p>
<div className="mt-auto space-y-3">
<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-ban w-3 h-3 text-red-400" data-lucide="ban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.929 4.929 19.07 19.071"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium">Analytics Blocked</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-red-400 h-full w-full"></div>
</div>
</div>
<div className="p-3 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 opacity-80">
<div className="flex items-center gap-2 mb-1">
<svg className="lucide lucide-shield w-3 h-3 text-pink-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-medium">Social Widget Removed</span>
</div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-mouse-pointer-click w-5 h-5 text-white" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Never-Consent</h3>
<p className="text-sm text-gray-400 font-light">Automatically decline all tracking cookies on pop-ups so you never have to click "Reject All" again.</p>
</div>
</div>

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<svg className="lucide lucide-search w-5 h-5 text-white" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Private Search</h3>
<p className="text-sm text-gray-400 font-light">Search the web without your queries being logged, sold, or tied to your personal identity.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#080808]" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-lg">
                    How the invisible web <br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-400">gets blocked.</span>
</h2>
<p className="text-xs text-gray-500 font-mono uppercase tracking-widest">Ghostery Engine</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-white/5 via-white/20 to-white/5 z-0"></div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black">
<span className="text-2xl font-medium text-white">01</span>
</div>
<h4 className="text-lg font-medium text-white mb-3">Scan</h4>
<p className="text-sm text-gray-400 leading-relaxed">When a page loads, Ghostery instantly scans for 3rd-party code and invisible pixels.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-pink-500/30 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-pink-900/10">
<span className="text-2xl font-medium text-pink-500">02</span>
</div>
<h4 className="text-lg font-medium text-white mb-3">Analyze</h4>
<p className="text-sm text-gray-400 leading-relaxed">Our AI cross-references requests against the world's largest tracker library.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black">
<span className="text-2xl font-medium text-white">03</span>
</div>
<h4 className="text-lg font-medium text-white mb-3">Neutralize</h4>
<p className="text-sm text-gray-400 leading-relaxed">Tracking requests are blocked before they leave your browser. Ads disappear.</p>
</div>

<div className="relative z-10">
<div className="w-24 h-24 bg-[#080808] border border-white/10 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-black">
<span className="text-2xl font-medium text-white">04</span>
</div>
<h4 className="text-lg font-medium text-white mb-3">Report</h4>
<p className="text-sm text-gray-400 leading-relaxed">See exactly who was trying to watch you with detailed tracker dashboards.</p>
</div>
</div>
</div>
</section>

<section className="py-32" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Fight for privacy</h2>
<p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">Ghostery is open source and supported by users like you. Choose how you want to contribute.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium text-gray-300 mb-2">Basic</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">Free</span>
<span className="text-sm text-gray-500">/ forever</span>
</div>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">Essential protection for everyone. No account required.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Ad Blocking</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Tracker Blocking</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Smart Blocking</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Private Browser</span>
</li>
</ul>
<div className="pt-6 border-t border-white/5 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1">Cost</p>
<p className="text-xs text-white">Free</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1">Platform</p>
<p className="text-xs text-white">All Browsers</p>
</div>
</div>
<button className="w-full h-10 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                            Download Now
                        </button>
</div>
</div>

<div className="glass-card-highlight rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"></div>
<div className="mb-8 relative z-10">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-pink-200">Contributor</h3>
<span className="px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-[10px] font-semibold text-pink-400 uppercase tracking-wide">Best Value</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$4.99</span>
<span className="text-sm text-gray-500">/ month</span>
</div>
<p className="text-xs text-gray-400 mt-4 leading-relaxed">Support the mission and get advanced privacy analytics.</p>
</div>
<ul className="space-y-4 mb-8 flex-1 relative z-10">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-pink-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-300">Everything in Basic</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-pink-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-300">Historical Stats</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-pink-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-300">Advanced Tracker Analytics</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-pink-400 mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-300">Priority Support</span>
</li>
</ul>
<div className="pt-6 border-t border-white/10 space-y-4 relative z-10">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Billing</p>
<p className="text-xs text-white">Monthly / Yearly</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold mb-1">Impact</p>
<p className="text-xs text-white">High</p>
</div>
</div>
<button className="w-full h-10 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors">
                            Become a Contributor
                        </button>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col h-full hover:border-white/10 transition-all duration-300">
<div className="mb-8">
<h3 className="text-lg font-medium text-gray-300 mb-2">Patron</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">$11.99</span>
<span className="text-sm text-gray-500">/ month</span>
</div>
<p className="text-xs text-gray-500 mt-4 leading-relaxed">For privacy champions who want to ensure the future of the open web.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">All Contributor features</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Early access to Beta</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Direct feedback loop</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-4 h-4 text-white mt-0.5 shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-gray-400">Exclusive badge</span>
</li>
</ul>
<div className="pt-6 border-t border-white/5 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1">Billing</p>
<p className="text-xs text-white">Monthly</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1">Impact</p>
<p className="text-xs text-white">Maximum</p>
</div>
</div>
<button className="w-full h-10 rounded-full border border-white/10 text-white text-xs font-medium hover:bg-white/5 transition-colors">
                            Become a Patron
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2 md:col-span-2">
<a className="flex items-center gap-2.5 mb-6" href="#">
<div className="w-6 h-6 bg-[#0C2D64] rounded-[4px] flex items-center justify-center shrink-0">
<svg fill="none" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
<path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="white"></path>
<path d="M15 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="white"></path>
</svg>
</div>
<div className="flex flex-col justify-center leading-none">
<span className="text-sm font-bold tracking-tight text-white">Ghostery</span>
<span className="text-[9px] font-semibold tracking-[0.2em] text-[#A0A0A0] uppercase">Privacy</span>
</div>
</a>
<p className="text-xs text-gray-500 max-w-xs leading-relaxed mb-4">
                        Making the web cleaner, faster, and safer.<br/>
                        Join the fight for a private internet.
                    </p>
<a className="text-xs font-medium text-white hover:text-pink-400 transition-colors" href="mailto:support@ghostery.com">support@ghostery.com</a>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Browser Extension</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Private Browser</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Private Search</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Manifesto</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Terms of Use</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">Community</h4>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors flex items-center gap-2" href="#" target="_blank">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span className="text-xs">Twitter</span>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-gray-600">© 2026 Ghostery GmbH. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] text-gray-500">Tracker Database: Active</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
