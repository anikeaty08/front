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
      

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6">
<nav aria-label="Main menu" className="border-white/[0.08] flex shadow-black/80 bg-[#0A0A0A]/90 w-full max-w-4xl border rounded-full p-1.5 pl-3 shadow-2xl backdrop-blur-md items-center justify-between">
<a aria-label="Back to home" className="flex items-center gap-3 pr-4 group shrink-0" href="/">
<div className="flex shadow-lg shadow-red-500/10 overflow-hidden group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300 bg-red-500/10 w-9 h-9 border-red-500/20 border rounded-xl relative items-center justify-center">
<iconify-icon aria-hidden="true" className="text-red-500 transition-transform duration-300 group-hover:scale-110" height="20" icon="solar:shield-bold-duotone" width="20"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight text-sm hidden sm:block">The Lennox Academy</span>
</a>
<div className="flex shrink-0 border-white/10 border-l ml-2 pl-4 items-center">
<a className="text-sm hover:bg-red-600 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap font-medium text-white bg-red-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(239,68,68,0.3)]" href="#demo">
                    Raise Standards
                    <iconify-icon aria-hidden="true" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>
</header>
<main className="">

<section className="overflow-hidden min-h-screen pt-44 pb-20 relative flex flex-col items-center">

<div className="bg-energy-wave"></div>
<div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none"></div>
<div className="z-10 text-center max-w-7xl mx-auto px-6 relative w-full">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 text-xs uppercase font-medium tracking-wide mb-8 shadow-[0_0_20px_rgba(239,68,68,0.1)] backdrop-blur-sm cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-signal"></span>
                    Elite Sales Performance
                </div>
<h1 className="leading-[1.1] md:text-6xl lg:text-8xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto">Your Sales Performance 
Reflects <br/> <span className="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.2)]">Your Standards.</span></h1>
<p className="leading-relaxed text-lg text-zinc-400 max-w-2xl mx-auto mb-12">
                    Most reps don’t fail because of skill. They fail because of the standards they operate at. <strong className="text-white font-medium">Ross Keating helps you raise them.</strong>
</p>

<div aria-hidden="true" className="cube-scene flex flex-col md:flex-row items-center justify-center w-full z-10 max-w-6xl mx-auto relative gap-8 md:gap-4" id="interactive-scene" style={{minHeight: 'auto', padding: '2rem 0'}}>
<style>
                        @keyframes floatGentle {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-4px); }
                        }
                    </style>

<div className="w-full md:w-[280px] flex flex-col gap-3 z-10 order-2 md:order-1">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pl-1 mb-2 hidden md:block">The Average Rep</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 z-10 shrink-0">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-300 truncate">No Clear Standards</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Operating on feeling</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out 1.5s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 z-10 shrink-0">
<iconify-icon icon="solar:graph-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-300 truncate">Motivation Over Structure</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Inconsistent daily output</span>
</div>
</div>
<div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out 3s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 z-10 shrink-0">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-300 truncate">Repeating Bad Habits</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Accepting average results</span>
</div>
</div>
</div>

<div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px] w-full max-w-3xl z-10 px-0 md:px-4 order-1 md:order-2">
<div className="text-xs font-mono text-red-500 uppercase tracking-wide mb-4 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)] inline-flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="16"></iconify-icon>
                            Watch: Why Most Sales Reps Stay Average
                        </div>

<div className="w-full aspect-video rounded-2xl border border-red-500/30 bg-black shadow-[0_0_40px_rgba(239,68,68,0.15)] relative overflow-hidden group cursor-pointer placeholder-box flex-col">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
<div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-[0_0_30px_rgba(239,68,68,0.6)] z-10 transform transition-transform group-hover:scale-110 mb-4">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
<span className="z-10 font-sans font-medium text-white/80">[VIDEO PLACEHOLDER]</span>

<div className="absolute top-1/2 left-0 w-full h-px bg-red-500/20 -translate-y-1/2 -z-10"></div>
</div>
</div>

<div className="w-full md:w-[280px] flex flex-col gap-3 z-10 order-3 text-left md:text-right">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-wide pr-1 mb-2 hidden md:block">Elite Performance</div>
<div className="flex items-center md:flex-row-reverse gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out 0.5s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-red-500 z-10 shrink-0">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-200 truncate">Clear Standards</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Defined expectations</span>
</div>
</div>
<div className="flex items-center md:flex-row-reverse gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out 2s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-red-500 z-10 shrink-0">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-200 truncate">Consistent Discipline</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Execution over emotion</span>
</div>
</div>
<div className="flex items-center md:flex-row-reverse gap-3 p-3.5 rounded-xl bg-[#09090b]/90 backdrop-blur-md border border-white/5 relative" style={{animation: 'floatGentle 6s ease-in-out 3.5s infinite'}}>
<div className="w-9 h-9 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-red-500 z-10 shrink-0">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col z-10 min-w-0">
<span className="text-sm font-medium text-zinc-200 truncate">Elite Outcomes</span>
<span className="text-xs text-zinc-500 truncate mt-0.5">Predictable success</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col mt-12 mb-10 items-center justify-center">
<a className="group relative inline-flex h-14 items-center justify-center gap-3 rounded-full bg-red-600 px-10 text-base font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_40px_rgba(239,68,68,0.3)] hover:shadow-[0_0_60px_rgba(239,68,68,0.5)]" href="#demo">
                        Raise My Standards
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-[#020202] relative z-20">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-8">Sales professionals pursuing elite performance</p>
<div className="w-full h-24 placeholder-box rounded-xl">
                    [IMAGE PLACEHOLDER: CLIENT LOGOS STRIP]
                </div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505] relative z-20" id="problem">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 text-red-500 mb-8 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight mb-16">
                    Why Most Sales Reps<br className="hidden md:block"/> Never Break Through
                </h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">Lack of discipline</h3>
<p className="text-zinc-400 leading-relaxed">Effort is inconsistent. You rely on bursts of motivation rather than structured, daily execution.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">No defined standards</h3>
<p className="text-zinc-400 leading-relaxed">Performance is reactive. Without a baseline of acceptable action, you fall victim to circumstances.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">Comfort becomes normal</h3>
<p className="text-zinc-400 leading-relaxed">Average results are accepted. Once a certain level is reached, the drive to push further vanishes.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0a0a0c] border border-white/5 hover:border-white/10 transition-colors">
<h3 className="text-xl font-semibold text-white mb-2">Execution gaps</h3>
<p className="text-zinc-400 leading-relaxed">What should happen doesn’t happen. You know what to do, but fail to execute consistently.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] border-y border-white/5" id="standards">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                        The Problem Isn’t Skill.<br/>
<span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]">It’s Standards.</span>
</h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        More training won’t fix this. More motivation won’t fix this. Performance changes when standards are clear, discipline is consistent, and execution is non-negotiable.
                    </p>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-12 h-12 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-white z-10 shadow-[0_0_0_8px_#020202] group-hover:border-red-500 transition-colors">
<iconify-icon icon="solar:crown-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="pt-1">
<span className="text-red-500 font-mono text-xs uppercase tracking-wide mb-3 block">The Core Mechanism</span>
<h3 className="text-3xl text-white font-semibold mb-6 tracking-tight">Performance Standards</h3>
<p className="text-zinc-400 text-lg leading-relaxed mb-6">
                            Top performers don’t rely on talent. They rely on discipline, structure, and accountability. This is what turns potential into performance.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-red-400 mb-3" icon="solar:checklist-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Discipline</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-red-400 mb-3" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Structure</h4>
</div>
<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5">
<iconify-icon className="text-red-400 mb-3" icon="solar:user-check-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Accountability</h4>
</div>
</div>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#020202] group-hover:border-zinc-500 transition-colors font-mono text-sm">
                        01
                    </div>
<div className="pt-1">
<span className="text-zinc-500 font-mono text-xs uppercase tracking-wide mb-3 block">Process</span>
<h3 className="text-2xl text-white font-semibold tracking-tight">Identify gaps in standards</h3>
<p className="text-zinc-400 mt-3">We strip away excuses and look objectively at where your daily actions fall short of elite performance.</p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-24 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#020202] group-hover:border-zinc-500 transition-colors font-mono text-sm">
                        02
                    </div>
<div className="pt-1">
<h3 className="text-2xl text-white font-semibold tracking-tight">Establish clear expectations</h3>
<p className="text-zinc-400 mt-3">Define the non-negotiable daily inputs required to achieve the desired outputs. Clarity eliminates hesitation.</p>
</div>
</div>

<div className="relative pl-8 md:pl-16 pb-12 border-l border-zinc-800 last:border-0 group">
<div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-zinc-700 flex items-center justify-center text-zinc-400 z-10 shadow-[0_0_0_8px_#020202] group-hover:border-zinc-500 transition-colors font-mono text-sm">
                        03
                    </div>
<div className="pt-1">
<h3 className="text-2xl text-white font-semibold tracking-tight">Enforce disciplined execution</h3>
<p className="text-zinc-400 mt-3">Build the systems and accountability to ensure expectations are met daily, turning effort into a standard.</p>
<div className="mt-10">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors" href="#demo">
                                Improve My Performance
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/5 relative z-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="w-full h-80 placeholder-box rounded-2xl mb-8">
                    [IMAGE PLACEHOLDER: Individuals improving performance standards]
                </div>
<p className="text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto font-medium">
                    "Sales professionals work with Ross Keating to improve discipline, execution, and performance."
                </p>
</div>
</section>

<section className="py-24 bg-[#020202] border-b border-white/5 relative" id="coaching">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">What's Included</h2>
<p className="text-zinc-400">Everything you need to shift from average to elite.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 shadow-lg shadow-black/50">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-4">Performance Coaching</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-lg">Direct, no-nonsense coaching focused entirely on bridging the gap between your current output and your true potential through rigorous accountability.</p>
</div>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Sales Discipline Training</h3>
<p className="text-zinc-400 text-base leading-relaxed">Learn to operate consistently regardless of external motivation or market conditions.</p>
</div>

<div className="md:col-span-1 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:brain-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-3">Mindset Development</h3>
<p className="text-zinc-400 text-base leading-relaxed">Rewire how you view challenges, rejection, and the daily grind of high-performance sales.</p>
</div>

<div className="md:col-span-2 sc-card rounded-[2rem] p-8 relative spotlight-card flex flex-col justify-center overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:structure-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl text-white font-semibold tracking-tight mb-4">Execution Frameworks &amp; Systems</h3>
<p className="text-zinc-400 text-lg leading-relaxed max-w-lg">Install proven, high-performance systems into your daily routine. We replace chaos and guesswork with structured, repeatable processes that guarantee output.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0a0c] border border-white/10 flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2 h-80 md:h-[400px] placeholder-box rounded-2xl shrink-0 border border-white/5">
                        [IMAGE PLACEHOLDER: ROSS KEATING]
                    </div>
<div className="flex flex-col justify-center">
<div className="text-red-500 font-mono text-xs uppercase tracking-wide mb-4">About The Founder</div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">Hi, I’m Ross Keating.</h2>
<div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
<p className="">
                                I work with sales professionals who want more but aren’t operating at the level required to get it.
                            </p>
<p className="">
                                The issue isn’t potential — <strong className="text-white">it’s standards.</strong>
</p>
<p className="">
                                My focus is helping individuals raise their level of discipline, execution, and performance. No fluff, no motivation speeches. Just execution and accountability.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#020202] border-t border-white/5 relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10">
<h3 className="text-white font-medium text-lg mb-2">Who is this for?</h3>
<p className="text-zinc-400">Sales professionals and teams who are committed to achieving elite results.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10">
<h3 className="text-white font-medium text-lg mb-2">Is this sales training?</h3>
<p className="text-zinc-400">No. It’s performance and execution focused. We don't teach you new tricks; we teach you how to consistently execute what you already know.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10">
<h3 className="text-white font-medium text-lg mb-2">Does this work for experienced reps?</h3>
<p className="text-zinc-400">Yes, especially those stuck at average and unable to break through their current ceiling.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10">
<h3 className="text-white font-medium text-lg mb-2">What makes this different?</h3>
<p className="text-zinc-400">Focus on standards, not tactics. Tactics change; the discipline required to execute them flawlessly does not.</p>
</div>

<div className="p-6 rounded-2xl bg-[#0a0a0c] border border-white/10">
<h3 className="text-white font-medium text-lg mb-2">How do we start?</h3>
<p className="text-zinc-400">Book a call below to discuss your current standards and where you need to be.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[#050505]" id="demo">
<div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0c] relative z-10 shadow-2xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 p-8 md:p-12 lg:p-16 items-center">

<div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-[1.1]">
                            Raise Your Level
                        </h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-md">
                            Book a call to improve your performance standards and results.
                        </p>

<div className="w-fit">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.2)]" href="#demo">
                                Book My Call
                                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-[400px] lg:h-[500px] mt-10 lg:mt-0 bg-[#020202] border border-white/10 rounded-2xl overflow-hidden shadow-2xl placeholder-box flex-col">
<iconify-icon className="text-zinc-600 mb-4" icon="solar:calendar-linear" width="48"></iconify-icon>
<span className="text-lg text-zinc-500 font-sans tracking-tight">[CALENDLY PLACEHOLDER]</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 pt-20 pb-10 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<a className="flex items-center gap-3 text-white font-semibold tracking-tight text-lg mb-6 group" href="/">
<div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg shadow-red-500/5 relative overflow-hidden group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-all duration-300">
<iconify-icon className="text-white group-hover:text-red-500 transition-colors duration-300" icon="solar:shield-bold-duotone" width="20"></iconify-icon>
</div>
                        The Lennox Academy
                    </a>
<p className="text-zinc-500 leading-relaxed">
                        Helping sales professionals raise their standards, improve discipline, and execute at an elite level.
                    </p>
</div>
<div className="flex gap-16 flex-wrap">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Navigation</h4>
<a className="text-zinc-500 hover:text-red-400 transition-colors" href="#problem">The Problem</a>
<a className="text-zinc-500 hover:text-red-400 transition-colors" href="#standards">Standards</a>
<a className="text-zinc-500 hover:text-red-400 transition-colors" href="#coaching">Coaching</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium">Company</h4>
<a className="text-zinc-500 hover:text-red-400 transition-colors" href="#about">About Ross</a>
<a className="text-zinc-500 hover:text-red-400 transition-colors" href="#demo">Book a Call</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-zinc-600 text-xs">
                    © 2024 The Lennox Academy. All rights reserved.
                </div>
</div>
</div>
</footer>

    </>
  );
}
