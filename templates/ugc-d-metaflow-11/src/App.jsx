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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-white rounded-sm"></div>
<a className="text-sm font-semibold tracking-tight text-white uppercase" href="#">UGC DĪČ</a>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400 uppercase tracking-wide">
<a className="hover:text-white transition-colors" href="#engine">MetaFlow Engine™</a>
<a className="hover:text-white transition-colors" href="#pricing">Access</a>
<a className="hover:text-white transition-colors" href="#faq">Protocol</a>
</div>
<a className="bg-white text-black text-xs font-semibold px-4 py-2 rounded hover:bg-neutral-200 transition-colors uppercase tracking-wide" href="#apply">
                Apply for Access
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden border-b border-neutral-900">
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/80 text-[10px] uppercase tracking-widest font-medium text-neutral-400 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Algorithm Optimization Active
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-8 leading-[1]">
                Meta doesn’t need better ads. <br/>
<span className="text-neutral-500">It needs constant variation.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed tracking-tight">
                We engineer exactly what the new algorithm wants. We batch-produce dozens of variations weekly, rotated across creators, angles, and hooks — all optimized for Meta’s AI-driven learning phase.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full md:w-auto bg-white text-black h-12 px-8 rounded flex items-center justify-center font-medium hover:bg-neutral-200 transition-all group" href="#apply">
<span>Book Strategy Call</span>
<iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full md:w-auto border border-neutral-800 bg-neutral-900/50 text-neutral-300 h-12 px-8 rounded flex items-center justify-center font-medium hover:border-neutral-600 hover:text-white transition-all" href="#engine">
                    View The Engine
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden max-w-4xl mx-auto">
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">50+</span>
<span className="text-xs text-neutral-500 font-mono uppercase">Variations / Week</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">20+</span>
<span className="text-xs text-neutral-500 font-mono uppercase">Creator Rotation</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">100%</span>
<span className="text-xs text-neutral-500 font-mono uppercase">Feed Optimizated</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">24/7</span>
<span className="text-xs text-neutral-500 font-mono uppercase">Learning Mode</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[120px] -z-20 pointer-events-none"></div>
</header>

<section className="py-24 px-6 bg-neutral-950 border-b border-neutral-900">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="glass-panel p-1 rounded-xl border border-neutral-800 relative shadow-2xl">
<div className="bg-neutral-950 rounded-lg p-6 overflow-hidden">
<div className="flex items-center gap-2 mb-6 border-b border-neutral-800 pb-4">
<iconify-icon className="text-neutral-400" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-xs font-mono text-neutral-500 uppercase">Meta Ad Set Logic</span>
</div>
<div className="space-y-3 font-mono text-xs">
<div className="flex gap-4">
<span className="text-neutral-600">01</span>
<span className="text-red-400"> Creative_Fatigue_Detected</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-600">02</span>
<span className="text-neutral-400"> Searching for new signal...</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-600">03</span>
<span className="text-red-400"> ERROR: Variation_Low</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-600">04</span>
<span className="text-white"> &gt; INJECTING_METAFLOW_ENGINE</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-600">05</span>
<span className="text-green-400"> Learning_Phase_Active</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Feed Meta the data it craves. <br/>
<span className="text-neutral-500">Keep your account learning forever.</span>
</h2>
<p className="text-neutral-400 leading-relaxed mb-6">
                        The era of the "perfect ad" is over. Meta's new AI scales on volume and data points. If you aren't feeding it constant structural variation, your CPMs spike and performance dies.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-white text-lg mt-0.5" icon="solar:bolt-linear"></iconify-icon>
<p className="text-sm text-neutral-300">We optimize for machine learning, not film festivals.</p>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white text-lg mt-0.5" icon="solar:refresh-circle-linear"></iconify-icon>
<p className="text-sm text-neutral-300">Constant creative refresh prevents audience decay.</p>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="engine">

<div className="absolute top-0 left-1/2 w-px h-full bg-neutral-900 -z-10 hidden md:block"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">The DĪČ MetaFlow Engine™</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">Every creative variation is designed to feed Meta’s AI, keeping your ad account in constant learning mode.</p>
</div>

<div className="relative grid md:grid-cols-5 gap-6">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-800 -z-10"></div>
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent animate-flow -z-10"></div>

<div className="group relative">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-neutral-300" icon="solar:database-linear"></iconify-icon>
<div className="absolute -bottom-2 px-2 py-0.5 bg-neutral-800 rounded text-[10px] font-mono text-white">INPUT</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium mb-2">Data Ingestion</h3>
<p className="text-xs text-neutral-500 leading-relaxed px-2">Historical winners, proven hooks, and 5-10 engineered angles fed into the system.</p>
</div>
</div>

<div className="group relative">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-neutral-300" icon="solar:videocamera-record-linear"></iconify-icon>
<div className="absolute -bottom-2 px-2 py-0.5 bg-neutral-800 rounded text-[10px] font-mono text-white">GENERATE</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium mb-2">Batch Synthesis</h3>
<p className="text-xs text-neutral-500 leading-relaxed px-2">Mass production of intros, delivery styles, and formats. Multiple vectors per creator.</p>
</div>
</div>

<div className="group relative">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-white" icon="solar:shuffle-linear"></iconify-icon>
<div className="absolute -bottom-2 px-2 py-0.5 bg-white text-black rounded text-[10px] font-mono font-bold">MUTATE</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium mb-2">Signal Variation</h3>
<p className="text-xs text-neutral-500 leading-relaxed px-2">Weekly rotation of faces, voices, and pacing to prevent algorithmic pattern fatigue.</p>
</div>
</div>

<div className="group relative">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-neutral-300" icon="solar:graph-new-linear"></iconify-icon>
<div className="absolute -bottom-2 px-2 py-0.5 bg-neutral-800 rounded text-[10px] font-mono text-white">LEARN</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium mb-2">Loop Feedback</h3>
<p className="text-xs text-neutral-500 leading-relaxed px-2">Real-time signal monitoring. Losers killed instantly. Winners recycled into input.</p>
</div>
</div>

<div className="group relative">
<div className="w-24 h-24 mx-auto bg-neutral-950 border border-neutral-700 rounded-full flex items-center justify-center mb-6 z-10 relative shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-3xl text-neutral-300" icon="solar:rocket-2-linear"></iconify-icon>
<div className="absolute -bottom-2 px-2 py-0.5 bg-neutral-800 rounded text-[10px] font-mono text-white">DEPLOY</div>
</div>
<div className="text-center">
<h3 className="text-white font-medium mb-2">Continuous Scale</h3>
<p className="text-xs text-neutral-500 leading-relaxed px-2">Weekly drops optimized for Meta &amp; TikTok feeds. Keeps campaigns in learning phase.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-800 bg-neutral-950" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">System Access</h2>
<p className="text-neutral-400">Choose your throughput level. Cancel anytime.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-neutral-800 rounded-xl p-8 flex flex-col bg-neutral-900/20 hover:border-neutral-700 transition-colors">
<h3 className="text-lg font-bold text-white mb-1">Meta Fuel</h3>
<p className="text-neutral-500 text-xs mb-6 h-8">Access the engine with limited throughput.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">$997 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            ~50 UGC variations / mo
                        </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Creator rotation
                        </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Usage rights included
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded border border-neutral-700 text-white text-xs font-semibold uppercase tracking-wide hover:bg-neutral-800 transition-colors" href="#apply">Access Fuel</a>
</div>

<div className="border border-white/20 bg-neutral-900 rounded-xl p-8 flex flex-col relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute top-0 right-0 bg-white text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl rounded-tr-xl">High Velocity</div>
<h3 className="text-lg font-bold text-white mb-1">Meta Accelerator</h3>
<p className="text-neutral-400 text-xs mb-6 h-8">For aggressive scaling and rapid testing.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">$2,500 <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            100+ variations / mo
                        </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Full weekly rotation
                        </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Script + Angle Revisions
                        </li>
<li className="flex gap-3 text-sm text-white">
<iconify-icon className="text-white text-lg" icon="solar:check-circle-bold"></iconify-icon>
                            Optional editing add-on
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded bg-white text-black text-xs font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors" href="#apply">Access Accelerator</a>
</div>

<div className="border border-neutral-800 rounded-xl p-8 flex flex-col bg-neutral-900/20 hover:border-neutral-700 transition-colors">
<h3 className="text-lg font-bold text-white mb-1">Algo Domination</h3>
<p className="text-neutral-500 text-xs mb-6 h-8">Complete domination of the feed.</p>
<div className="text-3xl font-semibold text-white mb-8 tracking-tight">$4,500+ <span className="text-sm font-normal text-neutral-500">/mo</span></div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            200+ variations / mo
                        </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Priority creator pool
                        </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Senior performance review
                        </li>
<li className="flex gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Full MetaFlow Access
                        </li>
</ul>
<a className="w-full block text-center py-3 rounded border border-neutral-700 text-white text-xs font-semibold uppercase tracking-wide hover:bg-neutral-800 transition-colors" href="#apply">Inquire for Scale</a>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 border-t border-neutral-800">
<div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-40 bg-white/5 rounded-full blur-[80px] -z-10"></div>
<div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center border border-neutral-700 flex-shrink-0">
<iconify-icon className="text-3xl text-white" icon="solar:incognito-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-white mb-2 tracking-tight">System reviewed by anonymous performance advisors</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Our creative infrastructure is audited by media buyers who manage $10M+ in monthly ad spend. We don't just guess what Meta wants; we build based on what high-scale accounts are seeing in real-time.
                </p>
<div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Verified Signal
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-800" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">Protocol FAQ</h2>
<div className="space-y-4">
<details className="group border-b border-neutral-800 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-white font-medium hover:text-neutral-300 transition-colors">
                        Is this just UGC?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-400 text-sm mt-4 leading-relaxed">No. UGC is just the format. MetaFlow is the infrastructure. We provide the volume, variation, and data-driven angles required to make UGC actually scale in a modern ad account.</p>
</details>
<details className="group border-b border-neutral-800 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-white font-medium hover:text-neutral-300 transition-colors">
                        Why so many variations?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-400 text-sm mt-4 leading-relaxed">Meta's AI needs signal. If you run one ad, it fatigues in 4 days. If you run 50 variations of an angle, the algorithm can test thousands of combinations to find pockets of efficiency you didn't know existed.</p>
</details>
<details className="group border-b border-neutral-800 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-white font-medium hover:text-neutral-300 transition-colors">
                        What is "Creator Rotation"?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-400 text-sm mt-4 leading-relaxed">We don't let your brand rely on one face. We rotate creators weekly to ensure diversity in demographics, tone, and delivery speed, giving Meta a broader audience net.</p>
</details>
<details className="group border-b border-neutral-800 pb-4">
<summary className="flex justify-between items-center cursor-pointer text-white font-medium hover:text-neutral-300 transition-colors">
                        Do you edit the videos?
                        <iconify-icon className="text-neutral-500 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="text-neutral-400 text-sm mt-4 leading-relaxed">Our Growth and Scale tiers have editing options. However, many top brands prefer our Starter "Fuel" tier to feed raw assets directly to their internal creative teams for maximum control.</p>
</details>
</div>
</div>
</section>

<footer className="py-32 px-6 text-center border-t border-neutral-800 bg-neutral-950 relative overflow-hidden" id="apply">
<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tighter">Capacity is limited.</h2>
<p className="text-neutral-400 mb-10">We only onboard brands that can sustain weekly creative velocity. Most are rejected.</p>
<button className="bg-white text-black px-10 py-4 rounded text-sm font-bold uppercase tracking-wide hover:bg-neutral-200 transition-colors w-full md:w-auto">
                Apply for Access
            </button>
<div className="flex items-center justify-center gap-2 mt-8 text-[10px] text-neutral-600 uppercase tracking-widest">
<span className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></span>
                Current Queue: Low
            </div>
</div>
<div className="mt-24 text-neutral-700 text-xs">
            © 2024 UGC DĪČ MetaFlow Engine™. All rights reserved.
        </div>
</footer>

    </>
  );
}
