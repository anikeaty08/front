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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1f2937',
900: '#111827',
950: '#030712', // Deepest black
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 glass-strong transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-medium tracking-tight shadow-lg shadow-indigo-500/20">C</div>
<span className="text-white font-medium tracking-tight text-lg">CoachOS</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Features</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Coaches</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-sm font-normal hover:text-white transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">Start Free Trial</a>
</div>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden min-h-screen flex flex-col justify-center bg-black">

<div className="spline-container absolute top-0 left-0 w-full h-full z-0 opacity-80 pointer-events-none md:pointer-events-auto mix-blend-screen">
<iframe className="w-full h-full" frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe>
</div>

<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-fade-in-up shadow-2xl">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-medium text-slate-200">V2.0 is now live</span>
<i className="text-slate-400 w-3 h-3" data-lucide="arrow-right"></i>
</div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl">
                The operating system for <br/>
<span className="gradient-text">high-performance coaches.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
                Scale your fitness business without the chaos. Build workouts, manage nutrition, and automate check-ins in one unified, beautiful interface.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
<button className="group relative flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-all text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="">Start building for free</span>
<i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all text-sm font-medium text-white">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span className="">Watch the demo</span>
</button>
</div>

<div className="relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-gray-950/80 backdrop-blur-md shadow-2xl overflow-hidden group ring-1 ring-white/5">

<div className="h-10 border-b border-white/5 bg-black/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="mx-auto w-1/3 h-5 rounded bg-white/5"></div>
</div>
<div className="flex h-[500px] text-left">

<div className="w-64 border-r border-white/5 bg-black/40 hidden md:flex flex-col p-4 gap-4">
<div className="flex items-center gap-3 px-2 py-1">
<div className="w-6 h-6 rounded bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/10">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
</div>
<span className="text-xs font-medium text-white">Alex Johnson</span>
</div>
<div className="space-y-1">
<div className="text-xs font-medium text-slate-500 px-2 mb-2 uppercase tracking-wider">Dashboard</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md bg-white/5 text-white border border-white/5">
<i className="w-3.5 h-3.5" data-lucide="home"></i>
<span className="text-xs">Overview</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-slate-400 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="dumbbell"></i>
<span className="text-xs">Workouts</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-slate-400 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="utensils"></i>
<span className="text-xs">Nutrition</span>
</div>
<div className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-white/5 text-slate-400 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
<span className="text-xs">Clients</span>
</div>
</div>
</div>

<div className="flex-1 bg-black/60 p-6 sm:p-8 relative">

<div className="absolute top-8 right-8 flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                            Client Active
                         </div>
<div className="mb-8">
<h3 className="text-xl text-white font-medium mb-1">Hypertrophy Phase 2</h3>
<p className="text-xs text-slate-500">Assigned to 14 clients • Week 3 of 8</p>
</div>

<div className="grid grid-cols-3 gap-4 mb-8">
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="text-slate-500 text-xs mb-1">Completion Rate</div>
<div className="text-2xl text-white font-light tracking-tight">94%</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="text-slate-500 text-xs mb-1">Avg Load</div>
<div className="text-2xl text-white font-light tracking-tight">12,450lb</div>
</div>
<div className="p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
<div className="text-slate-500 text-xs mb-1">Check-ins</div>
<div className="text-2xl text-white font-light tracking-tight">12/14</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors cursor-pointer hover:bg-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-slate-400 border border-white/5">
<i className="w-3.5 h-3.5" data-lucide="dumbbell"></i>
</div>
<div className="">
<div className="text-sm text-white">Barbell Squat</div>
<div className="text-xs text-slate-500">4 sets x 8 reps @ RPE 8</div>
</div>
</div>
<i className="text-slate-600 w-4 h-4" data-lucide="more-horizontal"></i>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/[0.03] border border-white/5 group-hover:border-white/10 transition-colors cursor-pointer hover:bg-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center text-slate-400 border border-white/5">
<i className="w-3.5 h-3.5" data-lucide="dumbbell"></i>
</div>
<div>
<div className="text-sm text-white">Romanian Deadlift</div>
<div className="text-xs text-slate-500">3 sets x 12 reps @ RPE 7</div>
</div>
</div>
<i className="text-slate-600 w-4 h-4" data-lucide="more-horizontal"></i>
</div>
<div className="flex items-center justify-center p-3 rounded border border-dashed border-white/10 text-xs text-slate-500 hover:text-slate-300 hover:border-white/20 cursor-pointer transition-all hover:bg-white/[0.02]">
                                 + Add Exercise
                             </div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none"></div>
</div>

<div className="mt-20 pt-10 border-t border-white/5 relative z-20">
<p className="text-xs text-center text-slate-500 mb-6 uppercase tracking-widest font-medium">Powering elite coaches at</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex items-center gap-2 text-white text-lg font-semibold tracking-tighter"><i className="text-white w-5 h-5" data-lucide="zap"></i> VOLT</div>
<div className="flex items-center gap-2 text-white text-lg font-semibold tracking-tighter"><i className="text-white w-5 h-5" data-lucide="heart"></i> PULSE</div>
<div className="flex items-center gap-2 text-white text-lg font-semibold tracking-tighter"><i className="text-white w-5 h-5" data-lucide="infinity"></i> LOOP</div>
<div className="flex items-center gap-2 text-white text-lg font-semibold tracking-tighter"><i className="text-white w-5 h-5" data-lucide="layers"></i> STACK</div>
</div>
</div>
</div>
</main>

<section className="bg-black pt-24 pb-24 relative z-10 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-[800px] w-full feature-glow pointer-events-none opacity-80 mix-blend-screen"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Everything you need to <br/>coach at scale.</h2>
<p className="text-slate-400 max-w-xl text-lg">Replace your patchwork of spreadsheets, emails, and payment links with one cohesive system.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 overflow-hidden group bg-white/[0.02] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative hover:bg-white/[0.04] transition-colors hover:border-indigo-500/20">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Custom Branded App</h3>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed">Give your clients a premium experience with your own logo, colors, and domain. They download your app, not ours.</p>
</div>
<div className="absolute right-0 bottom-0 w-1/2 h-full translate-x-12 translate-y-12 opacity-50 group-hover:opacity-80 transition-opacity duration-500">

<div className="w-64 h-full bg-black border border-white/10 rounded-tl-2xl p-4 shadow-2xl">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-20 h-2 bg-white/10 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="h-24 w-full bg-indigo-500/10 rounded-lg border border-indigo-500/20"></div>
<div className="h-12 w-full bg-white/5 rounded-lg"></div>
<div className="h-12 w-full bg-white/5 rounded-lg"></div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 rounded-2xl bg-white/[0.02] border border-white/10 p-8 relative overflow-hidden group hover:bg-white/[0.04] transition-colors hover:border-emerald-500/20">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<i className="w-6 h-6" data-lucide="wallet"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Seamless Payments</h3>
<p className="text-sm text-slate-400 mb-8 leading-relaxed">Automated recurring billing, one-off packages, and payout management.</p>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div>
<div className="text-xs text-white font-medium">Subscription</div>
<div className="text-[10px] text-slate-500">Premium Tier</div>
</div>
</div>
<div className="text-sm text-white font-medium">+$149.00</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="check-circle"></i>
</div>
<div className="">
<div className="text-xs text-white font-medium">Consultation</div>
<div className="text-[10px] text-slate-500">One-time</div>
</div>
</div>
<div className="text-sm text-white font-medium">+$75.00</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] transition-colors hover:border-orange-500/20">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">Progress Tracking</h3>
<p className="text-sm text-slate-400 leading-relaxed">Visualize PRs, body metrics, and habit adherence over time.</p>
</div>

<div className="rounded-2xl bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] transition-colors hover:border-pink-500/20">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.1)]">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</div>
<h3 className="text-xl text-white font-medium mb-2">In-App Chat</h3>
<p className="text-sm text-slate-400 leading-relaxed">Keep client communication organized without sharing your personal number.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="text-indigo-400 font-medium text-xs tracking-wider uppercase mb-4">Workflow Automation</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Build programs at lightning speed.</h2>
<p className="text-slate-400 mb-8 leading-relaxed text-lg">Our drag-and-drop builder allows you to create comprehensive training blocks in minutes. Save templates, auto-calculate loads based on maxes, and bulk assign to clients.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Library of 1000+ exercises with videos
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Automated RPE &amp; percentage calculations
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm">
<i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Smart progression logic
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2">

<div className="rounded-xl border border-white/10 bg-gray-900/40 p-6 relative shadow-2xl backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<div className="text-white font-medium">Week 1 / Day 1</div>
<div className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-400 border border-white/5">Legs &amp; Push</div>
</div>
<div className="space-y-4">

<div className="bg-black/60 rounded border border-white/5 p-3 flex gap-4 items-center hover:border-white/10 transition-colors">
<div className="text-slate-600 cursor-grab"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-slate-400 border border-white/5">
<i className="w-4 h-4" data-lucide="dumbbell"></i>
</div>
<div className="flex-1">
<div className="flex justify-between">
<div className="text-sm text-white">Back Squat</div>
<div className="text-xs text-indigo-400">Primary</div>
</div>

<div className="mt-2 flex items-center gap-3">
<div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden relative">
<div className="absolute left-0 top-0 h-full w-2/3 bg-indigo-500"></div>
</div>
<span className="text-[10px] text-slate-500 whitespace-nowrap">75% 1RM</span>
</div>
</div>
</div>

<div className="bg-black/60 rounded border border-white/5 p-3 flex gap-4 items-center hover:border-white/10 transition-colors">
<div className="text-slate-600 cursor-grab"><i className="w-4 h-4" data-lucide="grip-vertical"></i></div>
<div className="w-10 h-10 bg-white/5 rounded flex items-center justify-center text-slate-400 border border-white/5">
<i className="w-4 h-4" data-lucide="dumbbell"></i>
</div>
<div className="flex-1">
<div className="flex justify-between">
<div className="text-sm text-white">Bulgarian Split Squat</div>
<div className="text-xs text-indigo-400">Accessory</div>
</div>
<div className="mt-2 flex gap-2">
<div className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">3 Sets</div>
<div className="px-2 py-0.5 bg-white/5 rounded text-[10px] text-slate-400">10 Reps</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Simple, transparent pricing.</h2>
<p className="text-slate-400 mb-10 text-lg">Start free. Scale as you grow.</p>

<div className="flex items-center justify-center gap-3 mb-16">
<span className="text-sm text-slate-400">Monthly</span>
<div className="relative inline-block w-10 h-6 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer top-1 left-1 transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-800 cursor-pointer border border-white/10" htmlFor="toggle"></label>
</div>
<span className="text-sm text-white">Yearly <span className="text-emerald-400 text-xs ml-1">-20%</span></span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="text-left rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="text-lg font-medium text-white mb-2">Starter</div>
<div className="text-slate-500 text-sm mb-6">For new coaches just starting out.</div>
<div className="text-4xl font-medium text-white mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<button className="w-full py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors mb-8">Get Started</button>
<ul className="space-y-3">
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> Up to 3 clients</li>
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> Basic workout builder</li>
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> Client app</li>
</ul>
</div>

<div className="text-left rounded-xl p-8 border border-indigo-500/50 bg-indigo-900/[0.1] relative transform hover:-translate-y-1 transition-transform duration-300">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg tracking-wider">Popular</div>
<div className="text-lg font-medium text-white mb-2">Pro</div>
<div className="text-slate-500 text-sm mb-6">For growing businesses.</div>
<div className="text-4xl font-medium text-white mb-6">$49<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<button className="w-full py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors mb-8 shadow-lg shadow-indigo-500/20">Start Free Trial</button>
<ul className="space-y-3">
<li className="text-sm text-slate-300 flex gap-3"><i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Up to 50 clients</li>
<li className="text-sm text-slate-300 flex gap-3"><i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Advanced builder &amp; macros</li>
<li className="text-sm text-slate-300 flex gap-3"><i className="text-indigo-400 w-4 h-4" data-lucide="check"></i> Payments &amp; Automations</li>
</ul>
</div>

<div className="text-left rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all bg-gradient-to-b from-white/[0.02] to-transparent">
<div className="text-lg font-medium text-white mb-2">Scale</div>
<div className="text-slate-500 text-sm mb-6">For teams and organizations.</div>
<div className="text-4xl font-medium text-white mb-6">$199<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<button className="w-full py-2 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors mb-8">Contact Sales</button>
<ul className="space-y-3">
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> Unlimited clients</li>
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> White-glove migration</li>
<li className="text-sm text-slate-400 flex gap-3"><i className="text-white w-4 h-4" data-lucide="check"></i> Custom API access</li>
</ul>
</div>
</div>
</div>
</section>
<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xs font-medium tracking-tight">C</div>
<span className="text-slate-400 text-sm font-medium">CoachOS</span>
</div>
<div className="text-slate-600 text-xs">
                © 2024 CoachOS Inc. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
