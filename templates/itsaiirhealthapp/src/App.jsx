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
mint: {
50: '#f0fdfa',
100: '#ccfbf1',
400: '#2dd4bf',
500: '#14b8a6', // Brand Mint
600: '#0d9488',
900: '#134e4a',
},
coral: {
50: '#fff1f2',
100: '#ffe4e6',
500: '#f43f5e', // Brand Coral
600: '#e11d48',
},
slate: {
850: '#1e293b',
900: '#0f172a',
950: '#020617',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'glow-mint': '0 0 40px -10px rgba(20, 184, 166, 0.4)',
'scan-btn': '0 0 0 8px rgba(20, 184, 166, 0.1), 0 0 0 16px rgba(20, 184, 166, 0.05)',
'3d': '20px 30px 60px -10px rgba(0, 0, 0, 0.3)',
'nav-float': '0 10px 40px -10px rgba(0,0,0,0.2)',
'highlight': '0 0 0 4px rgba(20, 184, 166, 0.1), 0 20px 50px -10px rgba(20, 184, 166, 0.2)',
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center" href="#">
<span className="text-3xl font-bold tracking-tighter text-black">GuardIR.</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-500 hover:text-black transition-colors" href="#education">Education</a>
<a className="text-sm text-slate-500 hover:text-black transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm text-slate-500 hover:text-black transition-colors" href="#comparison">Compare</a>
<a className="text-sm text-slate-500 hover:text-black transition-colors" href="#guardian">Safety Net</a>
</div>
<button className="px-5 py-2.5 rounded-full text-xs font-semibold bg-black text-white hover:bg-slate-800 transition-all">
                Download App
            </button>
</div>
</nav>

<section className="pt-36 pb-24 md:pt-44 md:pb-32 bg-white relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

<div className="flex-1 text-center lg:text-left z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600 mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-mint-500"></span>
</span>
                        System v2.4 Live
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6 text-black">
                        See through the label. <br/>
<span className="text-black">Protect your future.</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                        Navigate the modern food landscape with surgical precision. GuardIR decodes hidden metabolic disruptors instantly, turning complex labels into clear, actionable health data. Stop guessing, start knowing.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-black text-white text-sm font-medium hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg">
<iconify-icon icon="solar:download-minimalistic-linear" width="18"></iconify-icon>
                            Get GuardIR
                        </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-colors">
                            Read the Clinical Data
                        </button>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center lg:items-start gap-4 md:gap-12">
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-black tracking-tight">50+</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Hidden Sugars</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-black tracking-tight">0.2s</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Detection Speed</div>
</div>
<div className="text-center lg:text-left">
<div className="text-2xl font-bold text-black tracking-tight">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide mt-1">Local Privacy</div>
</div>
</div>
</div>

<div className="relative w-full max-w-[300px] lg:max-w-[340px] flex justify-center lg:justify-end" style={{perspective: '1500px'}}>

<div className="absolute inset-0 bg-slate-200/40 blur-[80px] rounded-full transform translate-y-8"></div>

<div className="phone-mockup aspect-[9/19.5] shadow-2xl bg-white relative z-10" style={{transform: 'none'}}>
<div className="phone-notch"></div>

<div className="h-full w-full bg-white flex flex-col relative text-slate-900 overflow-hidden font-sans">

<div className="h-12 flex justify-between items-end px-6 pb-2 z-20 shrink-0 select-none">
<span className="text-[10px] font-bold text-black tracking-wide">13:43</span>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-slate-600" icon="solar:signal-bold" width="10"></iconify-icon>
<iconify-icon className="text-slate-600" icon="solar:wi-fi-bold" width="10"></iconify-icon>
<iconify-icon className="text-slate-600" icon="solar:battery-full-bold" width="12"></iconify-icon>
<span className="text-[10px] font-bold text-slate-600">65%</span>
</div>
</div>

<div className="flex-1 flex flex-col items-center px-5 pt-2 pb-24 overflow-y-auto no-scrollbar">

<div className="text-center mb-6 mt-4">
<h2 className="text-3xl font-extrabold tracking-tighter text-black mb-0">GuardIR.</h2>
<p className="text-[12px] text-slate-400 font-normal">See through the label.</p>
</div>

<div className="text-center mb-6">
<h3 className="text-xl font-semibold text-black mb-4 flex items-center justify-center gap-1">Good afternoon, Erika! 👋</h3>
<p className="text-[13px] text-slate-500 font-normal leading-relaxed px-4 max-w-[260px] mx-auto">
                                        Is this really good for your IR, or is it just marketing? <br/>
                                        One tap to find out.
                                    </p>
</div>

<div className="flex-1 flex flex-col items-center justify-center py-2 relative w-full mb-2">

<div className="absolute w-[280px] h-[280px] border border-slate-100 rounded-full animate-pulse"></div>
<div className="absolute w-[220px] h-[220px] border border-slate-100/80 rounded-full"></div>

<div className="relative w-44 h-44 bg-black rounded-full flex flex-col items-center justify-center text-white shadow-2xl z-10 group cursor-pointer hover:scale-105 transition-transform duration-300">

<div className="mb-3 p-2 border border-dashed border-white/30 rounded-[8px]">
<iconify-icon icon="solar:scanner-linear" strokeWidth="2" width="28"></iconify-icon>
</div>
<span className="text-[16px] font-bold leading-tight mb-1">Scan</span>
<span className="text-[16px] font-bold leading-tight mb-2">Product</span>
<span className="text-[8px] tracking-[0.2em] text-slate-400 uppercase font-bold mt-1">Tap to Scan</span>
</div>
</div>

<div className="text-center mb-6">
<p className="text-[11px] text-slate-500 font-medium tracking-tight">
                                        Today's score: <span className="text-emerald-500 font-bold">12 scans</span>, <span className="text-emerald-500 font-bold">12 mindful choices</span>.
                                    </p>
</div>

<div className="w-full flex flex-col gap-3">

<div className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<h4 className="text-[13px] font-bold text-black leading-none">Guardian</h4>
<p className="text-[10px] text-slate-400 font-medium mt-1">Family alert system</p>
</div>
</div>
<div className="px-2.5 py-1 bg-emerald-50 rounded-full flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="12"></iconify-icon>
<span className="text-[10px] font-bold text-emerald-600">Active</span>
</div>
</div>

<div className="w-full bg-white rounded-xl p-4 flex items-center justify-between shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon icon="solar:bell-bing-linear" strokeWidth="2" width="18"></iconify-icon>
</div>
<div className="flex flex-col items-start">
<h4 className="text-[13px] font-bold text-black leading-none">Daily Routines</h4>
<p className="text-[10px] text-slate-400 font-medium mt-1">Medication reminders</p>
</div>
</div>
<div className="px-2.5 py-1 bg-emerald-50 rounded-full flex items-center gap-1">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="12"></iconify-icon>
<span className="text-[10px] font-bold text-emerald-600">Active</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-16 bg-black rounded-[32px] shadow-2xl z-30 flex items-center justify-between px-7">

<div className="flex flex-col items-center gap-1 pt-1.5 cursor-pointer">
<iconify-icon className="text-white" icon="solar:home-2-bold" width="22"></iconify-icon>
<span className="text-[10px] font-semibold text-white tracking-wide">Home</span>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>

<div className="flex flex-col items-center gap-1 pt-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="solar:pill-linear" strokeWidth="2" width="22"></iconify-icon>
<span className="text-[10px] font-medium text-white tracking-wide">Meds</span>
<div className="w-1 h-1 bg-transparent rounded-full"></div>
</div>

<div className="flex flex-col items-center gap-1 pt-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="solar:users-group-rounded-linear" strokeWidth="2" width="22"></iconify-icon>
<span className="text-[10px] font-medium text-white tracking-wide">Family</span>
<div className="w-1 h-1 bg-transparent rounded-full"></div>
</div>

<div className="flex flex-col items-center gap-1 pt-1 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
<iconify-icon className="text-white" icon="solar:user-circle-linear" strokeWidth="2" width="22"></iconify-icon>
<span className="text-[10px] font-medium text-white tracking-wide">Profile</span>
<div className="w-1 h-1 bg-transparent rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="education">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-coral-500 font-semibold text-sm tracking-wide uppercase">The Problem</span>
<h2 className="text-3xl md:text-4xl font-semibold mt-3 mb-6 text-black tracking-tight">The "Sugar-Free" Trap.</h2>
<p className="text-slate-600 leading-relaxed text-lg font-light max-w-2xl mx-auto">
                    The modern food industry uses over 50 different names for sugar. Many "Diabetic-Friendly" snacks contain additives that spike insulin more aggressively than pure table sugar.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:danger-triangle-bold" width="100"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
<iconify-icon className="text-coral-500" icon="solar:close-circle-bold"></iconify-icon>
                        Hidden Spikes
                    </h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                        These common additives bypass "Sugar" labels but trigger massive insulin responses. Your body treats them as glucose, yet the nutrition label says "0g Sugar".
                    </p>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm p-3 bg-red-50 rounded-lg border border-red-100">
<span className="font-medium text-slate-700">Maltodextrin</span>
<span className="text-coral-600 font-bold text-xs bg-white px-2 py-1 rounded">GI: 110</span>
</li>
<li className="flex items-center justify-between text-sm p-3 bg-red-50 rounded-lg border border-red-100">
<span className="font-medium text-slate-700">Dextrose</span>
<span className="text-coral-600 font-bold text-xs bg-white px-2 py-1 rounded">GI: 100</span>
</li>
<li className="flex items-center justify-between text-sm p-3 bg-red-50 rounded-lg border border-red-100">
<span className="font-medium text-slate-700">Rice Syrup</span>
<span className="text-coral-600 font-bold text-xs bg-white px-2 py-1 rounded">GI: 98</span>
</li>
<li className="flex items-center justify-between text-sm p-3 bg-slate-50 rounded-lg border border-slate-100 opacity-50">
<span className="font-medium text-slate-500">Table Sugar (Reference)</span>
<span className="text-slate-500 font-bold text-xs bg-white px-2 py-1 rounded">GI: 65</span>
</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-2xl shadow-xl text-white relative overflow-hidden h-full flex flex-col justify-center">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:shield-check-bold" width="100"></iconify-icon>
</div>
<div className="relative z-10">
<h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-mint-400">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                            The GuardIR Solution
                        </h3>
<p className="text-slate-300 text-sm leading-7 mb-6">
                            You cannot memorize 56 different chemical names. You shouldn't have to.
                        </p>
<p className="text-slate-300 text-sm leading-7 mb-8">
                            GuardIR uses local OCR (Optical Character Recognition) to read ingredient lists in real-time. It cross-references every word against a medical-grade database of glycemic indices.
                        </p>
<div className="flex items-center gap-3 text-sm font-medium text-white">
<div className="w-8 h-8 rounded-full bg-mint-500 flex items-center justify-center">
<iconify-icon icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<span>If it spikes insulin, we see it.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-semibold mb-16 text-black tracking-tight text-center">Protocol.</h2>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-slate-100 -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-card flex items-center justify-center mb-6 group-hover:border-black transition-colors">
<iconify-icon className="text-slate-700" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
<div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded mb-4">STEP 01</div>
<h3 className="text-lg font-semibold mb-3">Scan</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">
                        Point your camera at any nutrition label. The app captures text locally on your device—no cloud upload required.
                    </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-card flex items-center justify-center mb-6 group-hover:border-black transition-colors">
<iconify-icon className="text-slate-700" icon="solar:cpu-bolt-linear" width="32"></iconify-icon>
</div>
<div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded mb-4">STEP 02</div>
<h3 className="text-lg font-semibold mb-3">Analyze</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">
                        Our AI engine filters ingredients against a blacklist of high-GI additives, masking agents, and known metabolic disruptors.
                    </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-card flex items-center justify-center mb-6 group-hover:border-black transition-colors">
<iconify-icon className="text-slate-700" icon="solar:traffic-linear" width="32"></iconify-icon>
</div>
<div className="bg-black text-white text-[10px] font-bold px-2 py-1 rounded mb-4">STEP 03</div>
<h3 className="text-lg font-semibold mb-3">Decide</h3>
<p className="text-sm text-slate-500 leading-relaxed px-4">
                        Instant feedback. <span className="text-mint-600 font-medium">Green Shield</span> means metabolically safe. <span className="text-coral-600 font-medium">Red Alert</span> suggests safer alternatives.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="comparison">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">The GuardIR Advantage.</h2>
<p className="text-slate-500">Why rely on memory when you can rely on data?</p>
</div>

<div className="bg-white rounded-3xl shadow-highlight border-2 border-mint-100 overflow-hidden relative">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mint-400 to-transparent"></div>
<div className="grid grid-cols-3 bg-white border-b border-slate-100">
<div className="p-6 text-xs font-bold uppercase tracking-wider text-slate-400">Feature</div>
<div className="p-6 text-xs font-bold uppercase tracking-wider text-slate-400 text-center">Manual Check</div>
<div className="p-6 text-xs font-bold uppercase tracking-wider text-mint-700 text-center bg-mint-50/50">GuardIR App</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="p-6 text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:stopwatch-linear"></iconify-icon> Speed
                    </div>
<div className="p-6 text-sm text-slate-500 text-center">30-60 Seconds</div>
<div className="p-6 text-sm font-bold text-black text-center bg-mint-50/30 group-hover:bg-mint-100/30 transition-colors">0.2 Seconds</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="p-6 text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:target-linear"></iconify-icon> Accuracy
                    </div>
<div className="p-6 text-sm text-slate-500 text-center text-coral-500">Prone to Error</div>
<div className="p-6 text-sm font-bold text-black text-center bg-mint-50/30 group-hover:bg-mint-100/30 transition-colors">Clinical Grade</div>
</div>

<div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors group">
<div className="p-6 text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:book-linear"></iconify-icon> Database
                    </div>
<div className="p-6 text-sm text-slate-500 text-center">Your Memory</div>
<div className="p-6 text-sm font-bold text-black text-center bg-mint-50/30 group-hover:bg-mint-100/30 transition-colors">Live Medical DB</div>
</div>

<div className="grid grid-cols-3 hover:bg-slate-50 transition-colors group">
<div className="p-6 text-sm font-medium text-slate-700 flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:lightbulb-linear"></iconify-icon> Synonyms
                    </div>
<div className="p-6 text-center flex justify-center">
<iconify-icon className="text-slate-300" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<div className="p-6 text-center flex justify-center bg-mint-50/30 group-hover:bg-mint-100/30 transition-colors">
<iconify-icon className="text-mint-500" icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="guardian">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-coral-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 order-2 md:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800 text-xs font-medium text-coral-400 mb-6">
<iconify-icon icon="solar:shield-warning-linear"></iconify-icon>
                        Beta Feature
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">The Guardian. <br/>More than just an alarm.</h2>
<p className="text-slate-400 leading-relaxed mb-6 text-lg font-light">
                        Managing insulin resistance often requires strict medication schedules (Metformin, Berberine, Insulin). Missing a dose isn't just an inconvenience—it's a health risk.
                    </p>
<p className="text-slate-400 leading-relaxed mb-8 font-light">
                        The Guardian system tracks your schedule. If you miss a critical confirmation window, we don't just buzz your phone. We automatically notify your designated safety contact with your last known status.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-coral-500 mt-1" icon="solar:bell-bing-bold"></iconify-icon>
<div>
<h4 className="font-medium text-white text-sm">Escalating Alerts</h4>
<p className="text-xs text-slate-500 mt-1">Soft nudge -&gt; Loud Alarm -&gt; Emergency Contact.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-coral-500 mt-1" icon="solar:users-group-two-rounded-bold"></iconify-icon>
<div>
<h4 className="font-medium text-white text-sm">Family Integration</h4>
<p className="text-xs text-slate-500 mt-1">Keep your partner or caregiver in the loop seamlessly.</p>
</div>
</li>
</ul>
</div>
<div className="flex-1 flex justify-center order-1 md:order-2">
<div className="relative w-72 bg-white rounded-3xl p-6 text-black shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500">

<div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
<span className="text-xs font-semibold uppercase text-coral-500">Critical Alert</span>
<span className="text-xs text-slate-400">10:00 AM</span>
</div>
<div className="text-center py-4">
<div className="w-16 h-16 rounded-full bg-coral-50 text-coral-500 flex items-center justify-center mx-auto mb-4 animate-pulse">
<iconify-icon icon="solar:bell-bing-bold" width="32"></iconify-icon>
</div>
<h3 className="font-bold text-lg mb-2">Medication Missed</h3>
<p className="text-sm text-slate-500 mb-6">You haven't logged your morning dose. Are you okay?</p>
<div className="space-y-2">
<button className="w-full py-3 bg-black text-white rounded-xl text-sm font-medium">I took it</button>
<button className="w-full py-3 bg-slate-100 text-slate-600 rounded-xl text-sm font-medium">Snooze 10m</button>
</div>
<div className="mt-6 pt-4 border-t border-slate-100">
<p className="text-[10px] text-slate-400">Notifying Sarah in <span className="text-coral-500 font-bold">04:59</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-12 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">

<details className="group bg-slate-50 rounded-2xl p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium text-slate-900">Is my health data private?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed px-1">
                        Absolutely. GuardIR is designed with a "Local First" architecture. Your scans, logs, and medication schedules are stored encrypted on your device. We do not sell or access your personal health data.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium text-slate-900">Does it work offline?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed px-1">
                        Yes. The Optical Character Recognition (OCR) and the ingredient database are downloaded to your phone. You can scan products in grocery stores with zero signal.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium text-slate-900">Is this suitable for Keto or Diabetic users?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed px-1">
                        GuardIR is specifically engineered for Insulin Resistance, Type 2 Diabetes, and Keto lifestyles. We focus specifically on Glycemic Index (GI) impact rather than just calories or carbs.
                    </div>
</details>

<details className="group bg-slate-50 rounded-2xl p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="font-medium text-slate-900">How accurate is the scanner?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="text-slate-600 mt-3 text-sm leading-relaxed px-1">
                        We use advanced text recognition that works on curved surfaces and small print. However, as with any medical tool, we recommend double-checking critical information.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center mb-4" href="#">
<span className="text-3xl font-bold tracking-tighter text-black">GuardIR.</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed">
                        Empowering metabolic health through intelligence and design.
                    </p>
</div>
<div>
<h4 className="font-medium text-black mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-black" href="#">Download</a></li>
<li><a className="hover:text-black" href="#">Feature Requests</a></li>
<li><a className="hover:text-black" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-black mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-black" href="#">Glycemic Index DB</a></li>
<li><a className="hover:text-black" href="#">Medical Disclaimer</a></li>
<li><a className="hover:text-black" href="#">Support</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-black mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-black" href="#">Privacy Policy</a></li>
<li><a className="hover:text-black" href="#">Terms of Service</a></li>
<li><a className="hover:text-black" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2026 GuardIR Health Technologies. Not medical advice.</p>
<div className="flex items-center gap-4">
<iconify-icon className="opacity-50 hover:opacity-100 transition-opacity grayscale" icon="logos:twitter" width="16"></iconify-icon>
<iconify-icon className="opacity-50 hover:opacity-100 transition-opacity grayscale" icon="logos:instagram-icon" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
