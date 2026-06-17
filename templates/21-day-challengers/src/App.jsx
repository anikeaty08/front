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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-white tracking-tighter"></span>
<span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-neutral-500">BUILD v1.0</span>
</div>
<a className="hover:text-white transition-colors text-xs font-medium text-neutral-400" href="/#pricing">
                ACCESS PORTAL
            </a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden border-white/5 border-b pt-32 pb-24 relative">
<div className="absolute inset-0 hero-grid pointer-events-none z-0"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse"></span>
<span className="uppercase text-xs text-emerald-500/80 tracking-wide font-mono" style={{}}>Break the plateau -&gt; reset the system</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6" style={{}}>The Challenger Protocol<br/> <span className="text-white/40" style={{}}>21 Days</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-50 max-w-xl mr-auto mb-10 ml-auto" style={{}}>A performance reset system for experienced lifters who feel stuck. Restore momentum, energy and clarity - without the lifters burnout.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all hover:bg-neutral-200 font-medium text-neutral-950 bg-white h-10 rounded-md pr-8 pl-8 relative" href="/#pricing">
<span className="mr-2">Initiate Protocol</span>
<svg className="group-hover:translate-x-0.5 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<span className="text-xs text-neutral-600 font-mono">21 DAYS • NO HYPE • PURE UTILITY</span>
</div>
</div>
</header>

<section className="bg-neutral-950 border-white/5 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-12">
<h2 className="uppercase text-sm text-neutral-500 tracking-widest font-mono mb-2" style={{}}></h2>
<h3 className="text-2xl font-medium text-white tracking-tight" style={{}}>Who needs a this upgrade?</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5 mb-4 text-white">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-white mb-2">The Stagnant Veteran</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You’ve trained consistently for 5+ years. You look good, but your numbers haven’t moved in 18 months. The spark is fading.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5 mb-4 text-white">
<iconify-icon icon="lucide:brain-circuit" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">The Analytical Optimizer</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You track macros and sleep scores, but your central nervous system feels fried. You need a strategy, not more intensity.
                    </p>
</div>

<div className="group">
<div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/5 mb-4 text-white">
<iconify-icon icon="lucide:shield-alert" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2">The Burnout Risk</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                        You push through pain and fatigue because you fear losing progress. You’re one bad rep away from a forced layoff.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-b pt-24 pb-24 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    Discipline without structure eventually breaks.
                </h2>
<div className="space-y-6 text-neutral-400">
<p className="">Most "advanced" programs add volume. They tell you to do more work. But if your systemic recovery is tapped out, more work just digs a deeper hole.</p>
<p className="">
                        The problem isn't your effort. It's your relationship with fatigue. You are caught in the "grey zone"—training too hard to recover, but too tired to adapt.
                    </p>
<p className="text-white font-medium">
                        Motivation is a feeling. The Challenger Protocol is a rule set.
                    </p>
</div>
</div>
<div className="relative">

<div className="glass-panel rounded-lg p-6 w-full border border-white/10">
<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-xs font-mono text-neutral-500">SYSTEM_DIAGNOSTIC</span>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex justify-between items-center text-red-400">
<span>&gt; EFFORT_LEVEL</span>
<span>98% [CRITICAL]</span>
</div>
<div className="w-full bg-white/5 h-1 rounded overflow-hidden">
<div className="h-full bg-red-500/60 w-[98%]"></div>
</div>
<div className="flex justify-between items-center text-neutral-500 pt-2">
<span>&gt; RECOVERY_RATE</span>
<span>34% [LOW]</span>
</div>
<div className="w-full bg-white/5 h-1 rounded overflow-hidden">
<div className="h-full bg-white/20 w-[34%]"></div>
</div>
<div className="flex justify-between items-center text-neutral-500 pt-2">
<span>&gt; PROGRESSION</span>
<span>0% [STALLED]</span>
</div>
</div>
<div className="mt-6 pt-4 border-t border-white/5 text-center">
<span className="text-xs text-white/80 bg-white/5 px-2 py-1 rounded">Recommendation: SYSTEM RESET</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/30 border-white/5 border-b pt-24 pb-24">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<span className="text-xs font-mono text-neutral-500 border border-white/10 px-2 py-1 rounded-full">DURATION: 21 DAYS</span>
<h2 className="text-3xl font-medium text-white tracking-tight mt-4">The Challenger Architecture</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>

<div className="relative z-10 p-6 glass-panel rounded-lg hover:border-white/20 transition-colors">
<div className="w-12 h-12 bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0">
                        01
                    </div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Rebooting</h3>
<p className="text-xs font-mono text-neutral-500 mb-4 uppercase">Days 1-7</p>
<p className="text-sm text-neutral-400">
                        Aggressive deload. Nervous system downregulation. Mobility mapping. We strip away the junk volume and re-establish your baseline movement quality.
                    </p>
</div>

<div className="z-10 glass-panel hover:border-white/20 transition-colors rounded-lg pt-6 pr-6 pb-6 pl-6 relative">
<div className="w-12 h-12 bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0">
                        02
                    </div>
<h3 className="text-lg font-medium text-white mb-2">Contrast</h3>
<p className="text-xs font-mono text-neutral-500 mb-4 uppercase">Days 8-14</p>
<p className="text-sm text-neutral-400">Reintroduction of load intelligently while recalibrating the system easy drills to measure improve output capacity. Waking up the motor units without frying the system.</p>
</div>

<div className="relative z-10 p-6 glass-panel rounded-lg hover:border-white/20 transition-colors">
<div className="w-12 h-12 bg-neutral-950 border border-white/10 rounded-full flex items-center justify-center text-white font-mono text-sm mb-6 mx-auto md:mx-0">
                        03
                    </div>
<h3 className="text-white font-medium text-lg mb-2">Control</h3>
<p className="text-xs font-mono text-neutral-500 mb-4 uppercase">Days 15-21</p>
<p className="text-sm text-neutral-400">Integration of compound lifts with anew rules. The "Game Layer" is applied. You aren't just lifting; you are executing specific missions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl text-white font-medium tracking-tight mb-12">System Modules</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex gap-4 p-4 rounded border border-white/5 bg-white/[0.02]">
<div className="shrink-0 text-white">
<iconify-icon icon="lucide:check-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Daily Mission Briefs</h4>
<p className="text-sm text-neutral-500 mt-1">Exact protocols delivered daily. No guesswork. Execute the code.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded border border-white/5 bg-white/[0.02]">
<div className="shrink-0 text-white">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">The XP Tracker</h4>
<p className="text-sm text-neutral-500 mt-1">Custom Notion dashboard to track inputs (sleep, steps, protein) vs outputs.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded border border-white/5 bg-white/[0.02]">
<div className="shrink-0 text-white">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Mobility &amp; CNS Work</h4>
<p className="text-sm text-neutral-500 mt-1">10-minute routines to downregulate cortisol and unlock sticky joints.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded border border-white/5 bg-white/[0.02]">
<div className="shrink-0 text-white">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-white font-medium text-sm">Squad Access</h4>
<p className="text-sm text-neutral-500 mt-1">Private Discord channel. Serious lifters only. Zero fluff.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-900/20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl text-white font-medium tracking-tight mb-8">What We Measure</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
<div className="bg-neutral-950 p-6 flex flex-col items-center">
<span className="text-sm font-mono text-neutral-500 mb-2">METRIC_01</span>
<span className="text-white font-medium">Resting HR</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center">
<span className="text-sm font-mono text-neutral-500 mb-2">METRIC_02</span>
<span className="text-white font-medium">Waist Circ.</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center">
<span className="text-sm font-mono text-neutral-500 mb-2">METRIC_03</span>
<span className="text-white font-medium">Vertical</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center">
<span className="text-sm font-mono text-neutral-500 mb-2">METRIC_04</span>
<span className="text-white font-medium">Subjective</span>
</div>
</div>
<p className="mt-6 text-xs text-neutral-500 max-w-lg mx-auto">
                *We do not measure "motivation". We measure biological feedback loops.
            </p>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/50 pointer-events-none"></div>
<div className="max-w-md mx-auto px-6 relative z-10">
<div className="glass-panel shadow-black/50 text-center border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 shadow-2xl">
<div className="inline-block px-3 py-1 rounded bg-white/10 text-xs font-mono text-white mb-6">
                    COHORT OPEN
                </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">The Challenger Protocol</h2>
<div className="flex items-baseline justify-center gap-1 mb-8">
<span className="text-4xl font-semibold text-white tracking-tighter" style={{}}>FREE</span>
<span className="text-sm text-neutral-500">/ (limited time)</span>
</div>
<ul className="text-left space-y-3 mb-8 text-sm text-neutral-400">
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Full 21-Day Programming
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Notion Tracking System
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Community Access
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Lifetime Updates
                    </li>
</ul>
<button className="hover:bg-neutral-200 transition-all flex gap-2 group cursor-pointer font-medium text-neutral-950 bg-white w-full h-11 rounded gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://challengers-by-badoni.kit.com/6ca9f5daf4';window.location.href='https://challengers-by-badoni.kit.com/6ca9f5daf4'" role="button">Gain Access</button>
<p className="mt-4 text-xs text-neutral-600">Secure payment via Stripe. 100% money-back guarantee.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-neutral-950 text-center">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
<span className="text-white font-semibold tracking-tighter text-lg">AURA</span>
<p className="text-xs text-neutral-600">
                © 2024 Aura.build. All rights reserved.<br/>
                This is a performance tool, not medical advice.
            </p>
</div>
</footer>

    </>
  );
}
