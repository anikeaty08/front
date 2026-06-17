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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen opacity-40"></div>
<div className="absolute top-[200px] right-1/4 w-[400px] h-[400px] bg-emerald-900/10 rounded-full blur-[100px] mix-blend-screen opacity-30"></div>
</div>

<header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-5xl px-4">
<div className="glass-card rounded-full px-8 py-4 flex items-center justify-between shadow-2xl shadow-black/50">

<a className="flex items-center gap-2 group" href="#">
<span className="font-space font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">GuardIR</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#problem">The Problem</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#protocol">Protocol</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#guardian">Guardian System</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-xs font-medium text-white transition-all group" href="#waitlist">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Waitlist Active
            </a>
</div>
</header>

<section className="relative pt-40 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="container mx-auto px-6 max-w-4xl text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[11px] font-medium tracking-wide uppercase mb-8 font-space backdrop-blur-md animate-[fadeIn_1s_ease-out]">
<iconify-icon height="12" icon="solar:rocket-linear" width="12"></iconify-icon>
                Coming Soon to App Store &amp; Play Store
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-space font-semibold text-white tracking-tighter leading-[0.95] mb-6 drop-shadow-2xl">
                See through <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-600">the label.</span>
</h1>

<p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Don't let "Sugar-Free" fool you. GuardIR acts as your digital shield, analyzing ingredients in real-time to protect your insulin levels.
            </p>

<div className="max-w-md mx-auto relative group" id="waitlist">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-emerald-500/40 to-emerald-500/20 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
<form className="relative flex items-center p-1.5 rounded-full bg-zinc-900 border border-zinc-800 shadow-2xl">
<div className="pl-4 text-zinc-500 flex items-center">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-sm text-white placeholder-zinc-500 focus:ring-0 px-3 py-2 outline-none font-light" placeholder="Enter your email address" required="" type="email"/>
<button className="whitespace-nowrap px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-full transition-all shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.6)] font-space" type="submit">
                        Join the Waitlist
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 relative border-t border-zinc-900 bg-zinc-900/10" id="problem">
<div className="container mx-auto px-6 max-w-5xl">

<div className="text-center mb-20">

<div className="mb-6 flex items-center justify-center gap-3 problem-text-glow">
<iconify-icon className="text-rose-500" height="32" icon="solar:danger-triangle-linear" width="32"></iconify-icon>
<h2 className="text-2xl md:text-3xl font-space font-bold tracking-[0.2em] uppercase text-rose-500">
                        The Problem
                    </h2>
</div>
<h2 className="text-4xl md:text-6xl font-space font-semibold tracking-tight text-white mb-6">The "Sugar-Free" Trap.</h2>
<p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg">
                    The modern food industry uses over 50 different names for sugar. Many "Diabetic-Friendly" snacks contain additives that spike insulin more aggressively than pure table sugar.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-stretch">

<div className="glass-card rounded-3xl p-8 relative overflow-hidden group border-rose-500/10 shadow-[0_0_50px_-20px_rgba(225,29,72,0.1)]">
<div className="absolute -top-10 -right-10 text-rose-900/10 transform rotate-12">
<iconify-icon height="200" icon="solar:graph-up-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="text-rose-500 bg-rose-500/10 p-2 rounded-full">
<iconify-icon height="24" icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-space font-medium text-white">Hidden Spikes</h3>
</div>
<p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                            These common additives bypass "Sugar" labels but trigger massive insulin responses. Your body treats them as glucose, yet the nutrition label says "0g Sugar".
                        </p>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-rose-500/10 border border-rose-500/10 hover:border-rose-500/30 transition-colors">
<span className="text-sm font-medium text-rose-100">Maltodextrin</span>
<span className="text-xs font-bold text-rose-400">GI: 110</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-rose-500/10 border border-rose-500/10 hover:border-rose-500/30 transition-colors">
<span className="text-sm font-medium text-rose-100">Dextrose</span>
<span className="text-xs font-bold text-rose-400">GI: 100</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-rose-500/10 border border-rose-500/10 hover:border-rose-500/30 transition-colors">
<span className="text-sm font-medium text-rose-100">Rice Syrup</span>
<span className="text-xs font-bold text-rose-400">GI: 98</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/30 border border-zinc-700/30">
<span className="text-sm font-medium text-zinc-500">Table Sugar (Reference)</span>
<span className="text-xs font-bold text-zinc-500">GI: 65</span>
</div>
</div>
</div>
</div>

<div className="rounded-3xl p-8 relative overflow-hidden bg-[#0a0f1c] border border-emerald-500/20 shadow-2xl flex flex-col">
<div className="absolute -top-6 -right-6 text-emerald-900/10 transform rotate-12">
<iconify-icon height="220" icon="solar:shield-check-linear" width="220"></iconify-icon>
</div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="text-emerald-400 bg-emerald-500/10 p-2 rounded-full">
<iconify-icon height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-space font-medium text-emerald-400">The GuardIR Solution</h3>
</div>
<div className="space-y-6 flex-1">
<div>
<p className="text-base text-zinc-200 font-medium leading-relaxed">
                                    You cannot memorize 56 different chemical names. 
                                </p>
<p className="text-base text-zinc-400 mt-1">You shouldn't have to.</p>
</div>
<p className="text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/50 pt-6">
                                GuardIR uses local OCR (Optical Character Recognition) to read ingredient lists in real-time. It cross-references every word against a medical-grade database of glycemic indices.
                            </p>
</div>
<div className="mt-8 flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
<div className="shrink-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-emerald-950">
<iconify-icon height="18" icon="solar:eye-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-emerald-100">If it spikes insulin, we see it.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20" id="protocol">
<div className="container mx-auto px-6 max-w-6xl">

<div className="text-center mb-16">
<div className="inline-block relative">

<div className="glass-card px-8 py-3 rounded-full border border-zinc-700/50">
<h2 className="text-2xl md:text-4xl font-space font-semibold tracking-tight text-white uppercase bg-clip-text">Our Protocol</h2>
</div>

<div className="absolute inset-0 bg-emerald-500/20 blur-xl -z-10 rounded-full"></div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group hover:border-emerald-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors text-zinc-400">
<iconify-icon height="24" icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-space font-medium text-white mb-3">1. Scan Label</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Point your camera. Our Vision AI reads the ingredient list instantly, recognizing text even on curved or shiny packaging.</p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors text-zinc-400 relative z-10">
<iconify-icon height="24" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-space font-medium text-white mb-3 relative z-10">2. Analyze</h3>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">The engine cross-references ingredients against a clinical database of metabolic disruptors and medication conflicts.</p>
</div>

<div className="glass-card p-8 rounded-2xl group hover:border-emerald-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors text-zinc-400">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-space font-medium text-white mb-3">3. Decide</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Get a clear <span className="text-emerald-400">Safe</span> or <span className="text-rose-400">Avoid</span> signal immediately. Designed to support your specific dietary needs.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="container mx-auto px-6 max-w-6xl relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-4xl lg:text-5xl font-space font-semibold tracking-tight text-white mb-6">Not a Tracker.<br/>A Guardian.</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        Calorie trackers are for weight loss. GuardIR is for metabolic health. We understand that 100 calories of cookies affect your insulin differently than 100 calories of nuts.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-zinc-300">Focuses on Glycemic Index impact</span>
</li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-zinc-300">Detects hidden starch &amp; polyols</span>
</li>
<li className="flex items-center gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
<span className="text-zinc-300">Works offline (Local AI models)</span>
</li>
</ul>
</div>
<div className="lg:w-1/2 w-full">
<div className="grid grid-cols-1 gap-4">

<div className="glass-card p-6 rounded-xl flex items-center justify-between border-l-4 border-l-emerald-500">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Processing Speed</p>
<p className="text-white text-lg">GuardIR AI</p>
</div>
<div className="text-right">
<p className="text-3xl font-space font-bold text-emerald-400">0.2s</p>
<p className="text-[10px] text-zinc-600">vs 60s Manual</p>
</div>
</div>

<div className="glass-card p-6 rounded-xl flex items-center justify-between border-l-4 border-l-zinc-700">
<div>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold mb-1">Reliability</p>
<p className="text-white text-lg">Accuracy</p>
</div>
<div className="text-right">
<p className="text-3xl font-space font-bold text-white">99.8%</p>
<p className="text-[10px] text-zinc-600">Clinical Grade</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800 relative" id="guardian">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
<div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-800 flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-900/50">
<iconify-icon className="text-white" height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-space font-semibold tracking-tight text-white mb-6">The Guardian System.</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
                Peace of mind for the whole family. Managing medication requires consistency. Our "Safety Net" feature acts as a digital backup, alerting a family member only if a dose is missed.
            </p>
<div className="glass-card max-w-md mx-auto rounded-2xl p-4 flex items-center gap-4 border border-zinc-700/50">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
<span className="text-xs font-bold text-zinc-300">Mom</span>
</div>
<div className="flex-1 text-left">
<p className="text-xs text-zinc-500 mb-0.5">Alert • 10:15 AM</p>
<p className="text-sm text-white">Missed dose: Metformin (500mg)</p>
</div>
<div className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400 font-medium">
                    Alert Sent
                </div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-black pt-16 pb-8">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

<div className="flex items-center gap-2">
<span className="font-space font-bold text-lg text-white tracking-tight">GuardIR</span>
</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" height="18" icon="devicon:twitter" width="18"></iconify-icon>
</a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#">
<iconify-icon className="grayscale hover:grayscale-0" height="18" icon="devicon:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="text-center text-xs text-zinc-700 border-t border-zinc-900 pt-8">
                © 2026 GuardIR Health Technologies. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
