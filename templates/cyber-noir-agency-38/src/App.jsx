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
      

<header className="w-full max-w-7xl mx-auto pt-16 pb-12 text-center px-6 relative z-10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight uppercase italic leading-none">
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 neon-text">HYPER</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-200 to-orange-500 neon-text">VELOCITY</span>
</h1>
<p className="mt-8 text-xl text-neutral-400 font-medium max-w-3xl mx-auto tracking-wide">
            The Premier Luxury Cyber-Noir Growth Agency.<br/>
<span className="text-white">Redefining Digital Influence.</span>
</p>
</header>

<main className="w-full max-w-7xl mx-auto relative px-4 md:px-0 py-12 md:h-[700px] flex items-center justify-center">

<div className="md:hidden w-full space-y-4">

<div className="glass-panel p-8 rounded-2xl border-orange-500/30 text-center mb-8 neon-box">
<h3 className="text-2xl font-semibold text-white tracking-tight">CONSUMER CORE</h3>
<div className="text-5xl font-medium text-orange-500 my-2 tracking-tighter">98.5%</div>
<p className="text-sm text-orange-200/60 uppercase tracking-widest">Engagement Rate</p>
</div>
<div className="space-y-3">
<div className="glass-panel p-6 rounded-xl flex items-center gap-4">
<i className="text-orange-400 w-8 h-8" data-lucide="brain-circuit"></i>
<div>
<h4 className="text-lg font-medium text-white">Brand Architecture</h4>
<p className="text-sm text-neutral-500">Strategy &amp; Innovation</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center gap-4">
<i className="text-orange-400 w-8 h-8" data-lucide="users"></i>
<div>
<h4 className="text-lg font-medium text-white">User Kinetics</h4>
<p className="text-sm text-neutral-500">Community Growth</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center gap-4">
<i className="text-orange-400 w-8 h-8" data-lucide="cpu"></i>
<div>
<h4 className="text-lg font-medium text-white">Digital Shift</h4>
<p className="text-sm text-neutral-500">Tech Integration</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center gap-4">
<i className="text-orange-400 w-8 h-8" data-lucide="radio"></i>
<div>
<h4 className="text-lg font-medium text-white">Media Reach</h4>
<p className="text-sm text-neutral-500">Global Scale</p>
</div>
</div>
<div className="glass-panel p-6 rounded-xl flex items-center gap-4">
<i className="text-orange-400 w-8 h-8" data-lucide="palette"></i>
<div>
<h4 className="text-lg font-medium text-white">Creative Vision</h4>
<p className="text-sm text-neutral-500">Visual Content</p>
</div>
</div>
</div>
</div>

<div className="hidden md:block relative w-[800px] h-[600px]">

<div className="absolute inset-0 border border-orange-500/10 rounded-full scale-[0.8] animate-pulse"></div>
<div className="absolute inset-0 border border-white/5 rounded-full scale-[1.1]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-orange-500/40 bg-black/80 backdrop-blur-xl flex flex-col items-center justify-center z-20 neon-box">

<div className="absolute inset-2 rounded-full border border-orange-500/20 border-t-orange-500/60 animate-spin" style={{animationDuration: '8s'}}></div>
<h3 className="text-xl font-medium text-white tracking-tight text-center leading-tight">CONSUMER<br/>CORE</h3>
<div className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-orange-400 my-1 tracking-tighter">98.5%</div>
<p className="text-xs text-orange-400/80 uppercase tracking-widest font-medium">Engagement</p>
</div>


<div className="absolute top-[10%] left-[15%] w-60 glass-panel p-5 rounded-2xl border-l-4 border-l-orange-500 hover:scale-105 transition-transform duration-300">
<div className="flex items-start gap-4">
<i className="text-orange-500 w-8 h-8 mt-1" data-lucide="brain-circuit"></i>
<div>
<h4 className="text-lg font-medium text-white leading-tight">BRAND<br/>CONSULTING</h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Strategy &amp; Innovation</p>
</div>
</div>
</div>

<div className="absolute top-[10%] right-[15%] w-60 glass-panel p-5 rounded-2xl border-r-4 border-r-orange-500 hover:scale-105 transition-transform duration-300 text-right">
<div className="flex items-start gap-4 flex-row-reverse">
<i className="text-orange-500 w-8 h-8 mt-1" data-lucide="users"></i>
<div>
<h4 className="text-lg font-medium text-white leading-tight">USER<br/>OPERATIONS</h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Community Growth</p>
</div>
</div>
</div>

<div className="absolute top-[50%] left-[-5%] -translate-y-1/2 w-60 glass-panel p-5 rounded-2xl border-l-4 border-l-orange-500 hover:scale-105 transition-transform duration-300">
<div className="flex items-start gap-4">
<i className="text-orange-500 w-8 h-8 mt-1" data-lucide="palette"></i>
<div>
<h4 className="text-lg font-medium text-white leading-tight">CREATIVE<br/>DIRECTION</h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Visionary Content</p>
</div>
</div>
</div>

<div className="absolute top-[50%] right-[-5%] -translate-y-1/2 w-60 glass-panel p-5 rounded-2xl border-r-4 border-r-orange-500 hover:scale-105 transition-transform duration-300 text-right">
<div className="flex items-start gap-4 flex-row-reverse">
<i className="text-orange-500 w-8 h-8 mt-1" data-lucide="cpu"></i>
<div>
<h4 className="text-lg font-medium text-white leading-tight">DIGITAL<br/>TRANSFORMATION</h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Tech Integration</p>
</div>
</div>
</div>

<div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-64 glass-panel p-5 rounded-2xl border-b-4 border-b-orange-500 hover:scale-105 transition-transform duration-300 text-center">
<div className="flex flex-col items-center gap-2">
<i className="text-orange-500 w-8 h-8" data-lucide="radio"></i>
<div>
<h4 className="text-lg font-medium text-white leading-tight">MEDIA BUYING</h4>
<p className="text-xs text-neutral-400 mt-1 uppercase tracking-wide">Global Reach</p>
</div>
</div>
</div>

<svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-30">

<line stroke="#f97316" strokeWidth="1" x1="400" x2="250" y1="300" y2="150"></line>
<line stroke="#f97316" strokeWidth="1" x1="400" x2="550" y1="300" y2="150"></line>
<line stroke="#f97316" strokeWidth="1" x1="400" x2="150" y1="300" y2="300"></line>
<line stroke="#f97316" strokeWidth="1" x1="400" x2="650" y1="300" y2="300"></line>
<line stroke="#f97316" strokeWidth="1" x1="400" x2="400" y1="300" y2="500"></line>
</svg>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 py-20">
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">

<div className="hidden lg:block w-1/4 h-80 glass-panel rounded-3xl opacity-40 scale-90 border-neutral-700 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-50"></div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-4xl font-semibold text-orange-500">25</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase">Campaigns Launched</p>
</div>
</div>

<div className="w-full lg:w-1/2 h-auto min-h-[400px] glass-panel rounded-3xl border-orange-500/40 relative overflow-hidden neon-box group transform transition-all hover:-translate-y-2 duration-500">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute inset-0 p-10 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-200 text-xs font-medium tracking-wide mb-3">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                            CASE STUDY
                        </div>
<h3 className="text-2xl font-medium text-white tracking-tight">NEON VANGUARD PROTOCOL</h3>
</div>
<div className="mt-12">
<div className="flex items-baseline gap-2">
<h2 className="text-6xl md:text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 tracking-tighter">
                                $850M
                            </h2>
</div>
<p className="text-lg text-neutral-300 uppercase tracking-widest mb-6 font-medium">Global Sales Revenue</p>
<div className="w-full h-px bg-white/10 mb-6"></div>
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<p className="text-base text-neutral-300">AI-Driven Persona &amp;</p>
<p className="text-base text-neutral-300">Engagement Strategy</p>
</div>
<div className="flex flex-col items-end gap-2 w-full md:w-auto">
<div className="w-full md:w-48 h-2 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[92%] rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]"></div>
</div>
<span className="text-xs text-orange-400 font-medium tracking-wider">300% GROWTH YOY</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block w-1/4 h-80 glass-panel rounded-3xl opacity-40 scale-90 border-neutral-700 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-50"></div>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-4xl font-semibold text-orange-500">400k</h3>
<p className="text-sm text-neutral-400 mt-2 uppercase">Active Users</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-white/5">
<p className="text-center text-xs text-neutral-600 uppercase tracking-[0.2em] mb-8 font-medium">Trusted By Industry Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full border-2 border-neutral-500 group-hover:border-orange-500 transition-colors"></div>
<span className="text-xl font-bold font-sans text-neutral-400 group-hover:text-white transition-colors">pepsi</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<i className="text-neutral-500 group-hover:text-orange-500 transition-colors" data-lucide="globe"></i>
<div className="leading-none">
<span className="block text-xs font-bold text-neutral-400">CHINA</span>
<span className="block text-xs font-bold text-neutral-400">MOBILE</span>
</div>
</div>
<div className="group cursor-pointer">
<span className="text-xl font-bold tracking-[0.3em] text-neutral-400 group-hover:text-white transition-colors">TESLA</span>
</div>
<div className="group cursor-pointer">
<span className="text-2xl font-serif italic font-bold text-neutral-400 group-hover:text-white transition-colors">Vogue</span>
</div>
<div className="group cursor-pointer">
<span className="text-2xl font-black italic tracking-tighter text-neutral-400 group-hover:text-white transition-colors transform -skew-x-12">NIKE</span>
</div>
<div className="group cursor-pointer">
<span className="text-lg font-bold text-neutral-400 group-hover:text-white transition-colors tracking-widest">SAMSUNG</span>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 py-12 mt-12">
<div className="glass-panel rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-end justify-between gap-8 border-t border-orange-500/20">

<div className="flex items-start gap-6">
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
<div className="relative w-24 h-24 bg-black rounded-lg border border-orange-500/30 p-2 flex items-center justify-center">

<div className="grid grid-cols-6 grid-rows-6 gap-0.5 w-full h-full">
<div className="bg-white/80 col-span-2 row-span-2"></div>
<div className="bg-white/80 col-start-5 col-span-2 row-span-2"></div>
<div className="bg-white/80 col-start-1 col-span-2 row-start-5 row-span-2"></div>

<div className="bg-orange-500/80 col-start-3 row-start-1"></div>
<div className="bg-white/80 col-start-4 row-start-2"></div>
<div className="bg-white/80 col-start-3 row-start-3"></div>
<div className="bg-orange-500/80 col-start-4 row-start-4"></div>
<div className="bg-white/80 col-start-5 row-start-5"></div>
<div className="bg-white/80 col-start-6 row-start-3"></div>
</div>
</div>
</div>
<div className="flex flex-col justify-between h-24 py-1">
<span className="text-xs text-orange-500 font-semibold tracking-widest">SCAN ACCESS</span>
<p className="text-lg font-medium text-white leading-tight">Exclusive<br/>Insights Report</p>
</div>
</div>

<div className="text-right space-y-4">
<div className="space-y-1">
<p className="text-sm text-neutral-400 font-medium">CONTACT: <span className="text-white">HELLO@HYPERVELOCITY.IO</span></p>
<p className="text-sm text-neutral-400 font-medium">TEL: <span className="text-white">+1 800 CYBER NOIR</span></p>
</div>
<div className="flex items-center justify-end gap-6 pt-4 border-t border-white/5">
<div className="flex gap-4 text-xs font-medium text-neutral-500 uppercase tracking-wider">
<span className="hover:text-orange-400 cursor-pointer transition-colors">NYC</span>
<span className="text-neutral-700">|</span>
<span className="hover:text-orange-400 cursor-pointer transition-colors">Shanghai</span>
<span className="text-neutral-700">|</span>
<span className="hover:text-orange-400 cursor-pointer transition-colors">London</span>
</div>
<i className="text-orange-500 w-10 h-10 stroke-1" data-lucide="fingerprint"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
