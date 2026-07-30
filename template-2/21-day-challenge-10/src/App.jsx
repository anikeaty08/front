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
      

<div className="bg-grid"></div>
<div className="vignette"></div>
<main className="max-w-[1000px] mx-auto px-6 relative z-10">

<section className="flex flex-col text-center pt-24 pb-20 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
<span className="text-xs font-medium tracking-wide text-zinc-300">TRACK THE MISSION</span>
<iconify-icon className="text-zinc-500 text-xs" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide text-neon">PROVE THE WORK</span>
</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                The 21-Day<br />
                Challenger Protocol
            </h1>
<div className="text-zinc-600 font-mono text-xs tracking-[0.2em] mb-6 uppercase">
                21 Days
            </div>
<h2 className="text-xl md:text-2xl text-zinc-300 font-normal tracking-tight mb-4">
                A simple system to run 21-day challenges people actually finish.
            </h2>
<p className="leading-relaxed text-base text-zinc-400 max-w-lg mr-auto mb-10 ml-auto">Turn inconsistency into time-boxed daily missions—with rules, proof, XP, and a finish line.</p>
<div className="flex flex-col items-center gap-4">
<button className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-3.5 rounded-lg font-medium text-sm tracking-tight w-full md:w-auto">
                    Get the Protocol (Free)
                </button>
<p className="text-xs text-zinc-500">Instant download + 15-minute setup guide.</p>
</div>
<div className="mt-12 pt-8 border-t border-white/5 w-full max-w-md mx-auto flex justify-center gap-6 md:gap-8 text-xs font-medium tracking-widest text-zinc-600 uppercase">
<span>Rules</span>
<span>•</span>
<span className="">Proof</span>
<span>•</span>
<span>XP</span>
<span>•</span>
<span>Finish Line</span>
</div>
</section>

<section className="py-16">
<div className="text-center mb-12">
<span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">The Problem</span>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Why most challenges fail</h2>
<span className="text-xl text-zinc-500 tracking-tight">(even when you’re motivated)</span>
<div className="mt-6 space-y-1 text-zinc-400 text-sm md:text-base">
<p className="">You start strong. Then the days blur.</p>
<p className="">Rules get vague. Progress feels invisible.</p>
<p className="">No finish line -{">"} you drift, then quit quietly.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">

<div className="p-6 bg-[#0E1014] border border-[#1A1F27] rounded-xl hover:border-zinc-700 transition-colors duration-500">
<div className="flex items-center gap-2 mb-3 text-zinc-300">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon>
<h3 className="text-sm font-medium">The Day 7 Drift</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">Motivation collapses without a daily mission.</p>
</div>

<div className="p-6 bg-[#0E1014] border border-[#1A1F27] rounded-xl hover:border-zinc-700 transition-colors duration-500">
<div className="flex items-center gap-2 mb-3 text-zinc-300">
<iconify-icon className="text-lg" icon="solar:danger-circle-linear"></iconify-icon>
<h3 className="text-sm font-medium">Vague Rules</h3>
</div>
<p className="leading-relaxed text-sm text-zinc-500">“Try your best” isn’t a rule. It’s a faulty suggestion.</p>
</div>

<div className="p-6 bg-[#0E1014] border border-[#1A1F27] rounded-xl hover:border-zinc-700 transition-colors duration-500">
<div className="flex items-center gap-2 mb-3 text-zinc-300">
<iconify-icon className="text-lg" icon="solar:eye-closed-linear"></iconify-icon>
<h3 className="text-sm font-medium">No Proof</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">If it isn’t recorded, it stops feeling real.</p>
</div>

<div className="p-6 bg-[#0E1014] border border-[#1A1F27] rounded-xl hover:border-zinc-700 transition-colors duration-500">
<div className="flex items-center gap-2 mb-3 text-zinc-300">
<iconify-icon className="text-lg" icon="solar:flag-linear"></iconify-icon>
<h3 className="text-sm font-medium">No Finish Line</h3>
</div>
<p className="text-sm text-zinc-500 leading-relaxed">Without an end date, the challenge never becomes identity.</p>
</div>
</div>

<div className="md:p-10 overflow-hidden group bg-[#0E1014] w-full border-[#1A1F27] border pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 left-0 w-full h-[1px] bg-white/5"></div>
<div className="flex justify-between items-start mb-8 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:server-square-linear"></iconify-icon>
<span className="text-xs font-mono text-zinc-500 tracking-wider">SYSTEM STATUS</span>
</div>
<div className="flex items-center gap-2 px-2 py-1 bg-red-500/10 rounded border border-red-500/20">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-[10px] font-bold text-red-500 tracking-wider uppercase">Critical</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 text-sm font-mono mb-8">
<div>
<div className="text-zinc-600 text-xs mb-1">DAY 7 DRIFT RISK:</div>
<div className="text-red-400">HIGH</div>
</div>
<div className="">
<div className="text-zinc-600 text-xs mb-1">RULE CLARITY:</div>
<div className="text-red-400">LOW</div>
</div>
<div>
<div className="text-zinc-600 text-xs mb-1">PROOF SUBMISSIONS:</div>
<div className="text-red-400">MISSING</div>
</div>
<div>
<div className="text-zinc-600 text-xs mb-1">XP MOMENTUM:</div>
<div className="text-zinc-500">FLAT</div>
</div>
</div>
<div className="pt-6 border-t border-white/5 flex items-center gap-3">
<iconify-icon className="text-neon" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-neon text-xs md:text-sm font-mono tracking-wide">Recommendation: LOCK RULES + DAILY MISSIONS</span>
</div>
</div>
</section>

<section className="py-16">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Flip the Switch</h2>
<p className="text-zinc-500 text-sm">People don’t need more content; they need a reason to show up.</p>
</div>

<div className="module-frame p-6 md:p-10">

<div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5">
<div className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                        System Toggle
                    </div>
<div className="flex items-center gap-2">
<span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Press to Play</span>
<div className="w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_rgba(173,255,47,0.4)]"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-zinc-800 rounded-xl bg-zinc-900/50 relative overflow-hidden">

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center bg-[#0E1014] p-1.5 rounded-full border border-zinc-800 shadow-xl">
<div className="w-10 h-6 bg-zinc-800 rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div>
</div>
</div>

<div className="p-8 md:p-10 opacity-40 flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-zinc-800 bg-[#0A0A0A]">
<h3 className="text-lg font-medium text-zinc-300 mb-6">Default Mode</h3>
<ul className="space-y-4 text-sm text-zinc-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Relying on motivation
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                Subjective progress
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-zinc-600 text-lg" icon="solar:close-circle-linear"></iconify-icon>
                                No end date
                            </li>
</ul>
</div>

<div className="p-8 md:p-10 relative bg-gradient-to-br from-white/5 to-transparent">
<div className="absolute inset-x-0 top-0 h-[1px] bg-neon/30 md:hidden"></div> 
<div className="absolute inset-y-0 left-0 w-[1px] bg-neon/30 hidden md:block"></div> 
<h3 className="text-lg font-medium text-white mb-6 flex items-center gap-2">
                            Challenger Mode
                        </h3>
<ul className="space-y-4 text-sm font-medium text-zinc-200">
<li className="flex items-center gap-3">
<iconify-icon className="text-neon text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Daily Missions
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neon text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Binary Rules (Pass/Fail)
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-neon text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                XP & Proof Systems
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="module-frame p-8 md:p-12">
<div className="text-center mb-10 pb-6 border-b border-white/5">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">What changes immediately</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="border border-[#1A1F27] rounded-xl p-5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-200">No decision fatigue</h3>
<div className="w-1.5 h-1.5 rounded-full bg-neon"></div>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">One mission is already defined.</p>
</div>

<div className="border border-[#1A1F27] rounded-xl p-5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-200">No negotiation</h3>
<iconify-icon className="text-neon text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Rules are binary: pass or fail.</p>
</div>

<div className="border border-[#1A1F27] rounded-xl p-5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-200">Visible momentum</h3>
<iconify-icon className="text-neon text-sm" icon="solar:graph-up-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Proof + XP makes progress real.</p>
</div>

<div className="border border-[#1A1F27] rounded-xl p-5 bg-white/[0.02]">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-medium text-zinc-200">A real finish</h3>
<iconify-icon className="text-neon text-sm" icon="solar:flag-linear"></iconify-icon>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Day 21 closes the arc.</p>
</div>
</div>
</div>
</section>

<section className="py-16 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8">What We Measure</h2>
<div className="flex flex-wrap justify-center gap-2 mb-8">
<div className="px-5 py-2 rounded-lg border border-transparent text-sm text-zinc-500">Streak</div>
<div className="px-5 py-2 rounded-lg border border-transparent text-sm text-zinc-500">Proof Submitted</div>
<div className="px-5 py-2 rounded-lg border border-transparent text-sm text-zinc-500">XP Momentum</div>
<div className="px-5 py-2 rounded-lg bg-white/5 border border-neon/30 text-neon text-sm font-medium shadow-[0_0_15px_rgba(173,255,47,0.1)]">Completion</div>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6"></div>
<p className="text-sm text-zinc-400">We don’t measure readiness. We measure follow-through.</p>
</section>

<section className="py-16">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-3">Start → Finish (The Completion Method)</h2>
<p className="text-zinc-500 text-sm">Here’s exactly what happens when you run a 21-day challenge as a game.</p>
</div>

<div className="border border-[#1A1F27] rounded-xl bg-[#0E1014] overflow-hidden mb-6">
<div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#1A1F27]">

<div className="p-6 md:p-5 flex flex-col h-full hover:bg-white/[0.01] transition-colors">
<span className="text-xs font-mono text-zinc-600 mb-4 block">STEP 01</span>
<h3 className="text-sm font-semibold text-white mb-4">Lock Day 1</h3>
<div className="mt-auto space-y-3">
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">DO</span> <span className="text-xs text-zinc-300">Pick one goal. Define pass/fail.</span></div>
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">SEE</span> <span className="text-xs text-zinc-300">Rules card becomes final.</span></div>
<div><span className="text-[10px] text-neon tracking-wider uppercase block mb-1">FEEL</span> <span className="text-xs text-zinc-300">Relief. No more debating.</span></div>
</div>
</div>

<div className="p-6 md:p-5 flex flex-col h-full hover:bg-white/[0.01] transition-colors">
<span className="text-xs font-mono text-zinc-600 mb-4 block">STEP 02</span>
<h3 className="text-sm font-semibold text-white mb-4">Receive Today’s Mission</h3>
<div className="mt-auto space-y-3">
<div className=""><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">DO</span> <span className="text-xs text-zinc-300">You open the mission. You execute.</span></div>
<div className=""><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">SEE</span> <span className="text-xs text-zinc-300">A single checkbox: complete / incomplete.</span></div>
<div className=""><span className="text-[10px] text-neon tracking-wider uppercase block mb-1">FEEL</span> <span className="text-xs text-zinc-300">Clarity. No overwhelm.</span></div>
</div>
</div>

<div className="p-6 md:p-5 flex flex-col h-full hover:bg-white/[0.01] transition-colors">
<span className="text-xs font-mono text-zinc-600 mb-4 block">STEP 03</span>
<h3 className="text-sm font-semibold text-white mb-4">Submit Proof</h3>
<div className="mt-auto space-y-3">
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">DO</span> <span className="text-xs text-zinc-300">Upload/link proof in 10 seconds.</span></div>
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">SEE</span> <span className="text-xs text-zinc-300">Your effort becomes visible.</span></div>
<div><span className="text-[10px] text-neon tracking-wider uppercase block mb-1">FEEL</span> <span className="text-xs text-zinc-300">Ownership. ‘This counts.’</span></div>
</div>
</div>

<div className="p-6 md:p-5 flex flex-col h-full hover:bg-white/[0.01] transition-colors">
<span className="text-xs font-mono text-zinc-600 mb-4 block">STEP 04</span>
<h3 className="text-sm font-semibold text-white mb-4">Earn XP + Protect the Streak</h3>
<div className="mt-auto space-y-3">
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">DO</span> <span className="text-xs text-zinc-300">XP updates automatically. Streak continues.</span></div>
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">SEE</span> <span className="text-xs text-zinc-300">Momentum on the scoreboard.</span></div>
<div><span className="text-[10px] text-neon tracking-wider uppercase block mb-1">FEEL</span> <span className="text-xs text-zinc-300">Reward. You want to keep it alive.</span></div>
</div>
</div>

<div className="p-6 md:p-5 flex flex-col h-full hover:bg-white/[0.01] transition-colors">
<span className="text-xs font-mono text-zinc-600 mb-4 block">STEP 05</span>
<h3 className="text-sm font-semibold text-white mb-4">Claim the Finish Line</h3>
<div className="mt-auto space-y-3">
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">DO</span> <span className="text-xs text-zinc-300">Day 21 closes. You review receipts.</span></div>
<div><span className="text-[10px] text-zinc-500 tracking-wider uppercase block mb-1">SEE</span> <span className="text-xs text-zinc-300">Completion badge + proof archive.</span></div>
<div><span className="text-[10px] text-neon tracking-wider uppercase block mb-1">FEEL</span> <span className="text-xs text-zinc-300">Identity upgrade. ‘I finish what I start.’</span></div>
</div>
</div>
</div>
</div>

<div className="bg-[#0E1014] border border-[#1A1F27] rounded-xl py-4 px-6 md:px-8">
<div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5 text-xs text-zinc-400">
<div className="flex items-center gap-2 md:pr-4 md:flex-1">
<iconify-icon className="text-neon flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>You can’t drift—because the game has an end date.</span>
</div>
<div className="flex items-center gap-2 pt-2 md:pt-0 md:px-4 md:flex-1">
<iconify-icon className="text-neon flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>You can’t self-negotiate—because rules are binary.</span>
</div>
<div className="flex items-center gap-2 pt-2 md:pt-0 md:px-4 md:flex-1">
<iconify-icon className="text-neon flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>You can’t feel stuck—because proof shows progress.</span>
</div>
<div className="flex items-center gap-2 pt-2 md:pt-0 md:pl-4 md:flex-1">
<iconify-icon className="text-neon flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>You can’t ‘start over’ forever—because Day 21 ships.</span>
</div>
</div>
</div>
</section>

<section className="py-16">
<h2 className="text-2xl font-semibold tracking-tight text-white mb-8 text-center">Who this is for</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 bg-white/[0.02] border border-[#1A1F27] rounded-xl">
<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:flame-linear"></iconify-icon>
                        The Challenge Addict
                    </h3>
<p className="text-xs text-zinc-500 leading-relaxed">You start hard, drift when structure disappears.</p>
</div>

<div className="p-6 bg-white/[0.02] border border-[#1A1F27] rounded-xl">
<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:infinity-linear"></iconify-icon>
                        The No-Zero Operator
                    </h3>
<p className="text-xs text-zinc-500 leading-relaxed">You want consistency even on chaotic days.</p>
</div>

<div className="p-6 bg-white/[0.02] border border-[#1A1F27] rounded-xl">
<h3 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:dumbbell-linear"></iconify-icon>
                        The Hybrid Improver
                    </h3>
<p className="text-xs text-zinc-500 leading-relaxed">You want to feel athletic again—without losing strength.</p>
</div>
</div>
</section>

<section className="py-16 space-y-16">

<div className="">
<h3 className="uppercase text-2xl tracking-widest font-mono text-center mb-6">The Completion Architecture</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-6 border border-[#1A1F27] rounded-xl bg-[#0E1014]">
<div className="flex justify-between items-start mb-4">
<span className="text-3xl font-light text-zinc-700">01</span>
<span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400">Day 0 (10 minutes)</span>
</div>
<h4 className="text-sm font-medium text-white mb-2">Lock the Game</h4>
<p className="text-xs text-zinc-500">Define rules + proof before Day 1. No negotiation mid-game.</p>
</div>
<div className="p-6 border border-[#1A1F27] rounded-xl bg-[#0E1014]">
<div className="flex justify-between items-start mb-4">
<span className="text-3xl font-light text-zinc-700">02</span>
<span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400">Days 1–21</span>
</div>
<h4 className="text-sm font-medium text-white mb-2">Run the Daily Loop</h4>
<p className="text-xs text-zinc-500">One mission → proof → XP → streak.</p>
</div>
<div className="p-6 border border-[#1A1F27] rounded-xl bg-[#0E1014]">
<div className="flex justify-between items-start mb-4">
<span className="text-3xl font-light text-zinc-700">03</span>
<span className="text-[10px] bg-zinc-900 border border-zinc-800 px-2 py-1 rounded text-zinc-400">Day 21</span>
</div>
<h4 className="text-sm font-medium text-white mb-2">Claim the Finish</h4>
<p className="text-xs text-zinc-500">Close the arc. Review proof. Record the upgrade.</p>
</div>
</div>
</div>

<div className="">
<h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">System Modules</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="p-5 border border-[#1A1F27] bg-white/[0.02] rounded-lg">
<h4 className="text-sm text-zinc-200 mb-1">Daily Mission Map</h4>
<p className="text-xs text-zinc-500">21 missions written in advance.</p>
</div>
<div className="p-5 border border-[#1A1F27] bg-white/[0.02] rounded-lg">
<h4 className="text-sm text-zinc-200 mb-1">Rule Card Template</h4>
<p className="text-xs text-zinc-500">What counts, penalties, pass/fail.</p>
</div>
<div className="p-5 border border-[#1A1F27] bg-white/[0.02] rounded-lg">
<h4 className="text-sm text-zinc-200 mb-1">Proof + XP Tracker</h4>
<p className="text-xs text-zinc-500">Submissions, XP, streak.</p>
</div>
<div className="p-5 border border-[#1A1F27] bg-white/[0.02] rounded-lg">
<h4 className="text-sm text-zinc-200 mb-1">Finish-Line Ritual</h4>
<p className="text-xs text-zinc-500">Identity receipt.</p>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="bg-[#0E1014] border border-[#1A1F27] rounded-2xl p-8 md:p-14 max-w-3xl mx-auto text-center shadow-2xl shadow-black/50">
<span className="inline-block px-3 py-1 rounded-full bg-neon/10 text-neon text-[10px] font-bold tracking-widest mb-6">DOWNLOAD (FREE)</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">The 21-Day Challenger Protocol</h2>
<p className="text-zinc-400 mb-10">Everything you need to run a 21-day challenge you actually finish.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8 text-left max-w-xl mx-auto mb-10">
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">The Challenge Blueprint <span className="text-zinc-500 text-xs block mt-0.5">(design any 21-day challenge in 10 minutes)</span></span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Rule Card Template <span className="text-zinc-500 text-xs block mt-0.5">(standards that remove excuses)</span></span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Proof System <span className="text-zinc-500 text-xs block mt-0.5">(what counts / what doesn’t)</span></span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">XP + Streak Setup <span className="text-zinc-500 text-xs block mt-0.5">(simple scoring)</span></span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Penalty Rules <span className="text-zinc-500 text-xs block mt-0.5">(keeps it honest)</span></span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neon mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-zinc-300">Finish-Line Ritual <span className="text-zinc-500 text-xs block mt-0.5">(identity upgrade receipt)</span></span>
</div>
</div>
<div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-5 mb-10 max-w-lg mx-auto text-left">
<h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
<iconify-icon icon="solar:file-text-linear"></iconify-icon> 3 Preloaded Templates:
                    </h4>
<ul className="text-sm text-zinc-300 space-y-2">
<li className="flex justify-between"><span className="">No-Zero-Days Operator</span> <span className="text-zinc-600">7 days</span></li><li className="flex justify-between"><span className="">Lifter → Athlete</span> <span className="text-zinc-600">21 days</span></li>
<li className="flex justify-between"><span className="">Strength + Mobility Hybrid</span> <span className="text-zinc-600">4-week cycles</span></li>
</ul>
</div>
<div className="flex flex-col items-center gap-4">
<button className="bg-white text-black hover:bg-zinc-200 transition-colors px-10 py-4 rounded-lg font-medium text-sm tracking-tight w-full md:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Get the Protocol (Free)
                    </button>
<p className="text-xs text-zinc-500">Instant download + 15-minute setup guide.</p>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center">
<p className="text-xs text-zinc-600 tracking-wide">Start today — Day 1 takes 10 minutes.</p>
</footer>
</main>

    </>
  );
}
