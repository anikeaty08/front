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



        // Initialize Lucide icons with 1.5 stroke width for the clean, technical look
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="relative w-6 h-6 bg-[#a3e635] rounded-[4px] flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-zinc-950 rounded-tl-[4px]"></div>
</div>
<span className="text-white font-semibold text-xl tracking-tight">Cendr</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#system">Architecture</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#network">Network</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Sign in</a>
<a className="px-4 py-2 bg-[#a3e635] text-zinc-950 text-sm font-medium rounded-md hover:bg-[#8cc63f] transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]" href="#">Book Demo</a>
</div>
</div>
</nav>
<main className="flex-grow pt-16">

<section className="relative overflow-hidden border-b border-zinc-800/50 bg-grid-pattern">
<div className="glow-effect top-[-100px] left-1/2 transform -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 pt-32 pb-40 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-xs font-medium mb-8 backdrop-blur-sm">
<i className="w-3.5 h-3.5 text-[#a3e635]" data-lucide="cpu"></i>
<span>Cendr OS v2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 max-w-5xl leading-[1.1]">
                    Delivery you don't <br className="hidden md:block"/>have to think about.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
                    Reliability isn't a feature, it's the system. Cendr provides the infrastructure layer for urban commerce, eliminating uncertainty and operational friction for serious businesses.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-3.5 bg-[#a3e635] text-zinc-950 text-base font-medium rounded-lg hover:bg-[#8cc63f] transition-all flex items-center justify-center gap-2 group">
                        Deploy System
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900 text-white border border-zinc-800 text-base font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4 text-zinc-400" data-lucide="terminal"></i> Read Documentation
                    </button>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-800/50 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">The old way is built on hope.</h2>
<p className="text-base text-zinc-400 max-w-xl">Traditional courier services treat delivery as a manual hustle. This creates critical single points of failure that damage your customer trust.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-red-400" data-lucide="user-x"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Unreliable Capacity</h3>
<p className="text-base text-zinc-400">Riders don't show up. Availability fluctuates wildly based on weather or time of day, leaving your operations stranded.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-orange-400" data-lucide="clock-alert"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Unpredictable Delays</h3>
<p className="text-base text-zinc-400">Estimated times are guesses. Without dynamic routing, a single bottleneck cascades into hours of delays across orders.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors">
<div className="w-10 h-10 rounded-lg bg-zinc-700/30 border border-zinc-600/30 flex items-center justify-center mb-6">
<i className="w-5 h-5 text-zinc-300" data-lucide="eye-off"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Black Box Operations</h3>
<p className="text-base text-zinc-400">Once an order leaves, it vanishes. You're forced to rely on manual follow-ups and angry customer support tickets.</p>
</div>
</div>
</div>
</section>

<section className="py-32 border-b border-zinc-800/50 relative overflow-hidden" id="system">
<div className="glow-effect top-1/2 right-[-100px] transform -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Engineered for certainty.</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto">Cendr is not a fleet of riders. It is a distributed intelligence layer combining express dispatch and node-based delivery networks to guarantee SLA fulfillment.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 gap-6">

<div className="md:col-span-4 p-8 md:p-10 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-zinc-800/80 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-32 h-32 text-[#a3e635]" data-lucide="workflow"></i>
</div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#a3e635] mb-4 uppercase tracking-wider">
<i className="w-3.5 h-3.5" data-lucide="radio"></i> Core Engine
                                </div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Algorithmic Dispatch Layer</h3>
<p className="text-base text-zinc-400 max-w-md">Our routing engine calculates millions of variables per second—traffic, weather, node capacity—to assign the perfect vector for every package instantly.</p>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-zinc-300">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-[#a3e635]" data-lucide="check-circle-2"></i> Sub-second assignment</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-[#a3e635]" data-lucide="check-circle-2"></i> Predictive re-routing</div>
</div>
</div>
</div>

<div className="md:col-span-2 p-8 md:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-white mb-6" data-lucide="satellite"></i>
<h3 className="text-xl font-semibold tracking-tight text-white mb-3">Absolute Visibility</h3>
<p className="text-base text-zinc-400">Granular tracking APIs. Know the exact state and location of any asset in the network without manual querying.</p>
</div>
</div>

<div className="md:col-span-3 p-8 md:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
<i className="w-8 h-8 text-white mb-6" data-lucide="box"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Distributed Node Network</h3>
<p className="text-base text-zinc-400 mb-6">We utilize physical nodes spread across urban centers to stage, consolidate, and optimize last-mile bursts. It's caching, but for physical goods.</p>
<div className="h-32 w-full border border-zinc-800 rounded-lg bg-zinc-950/50 flex items-center justify-center overflow-hidden relative">

<div className="absolute w-2 h-2 rounded-full bg-[#a3e635] left-10 top-10 shadow-[0_0_10px_#a3e635]"></div>
<div className="absolute w-2 h-2 rounded-full bg-[#a3e635] right-14 top-8 shadow-[0_0_10px_#a3e635]"></div>
<div className="absolute w-2 h-2 rounded-full bg-[#a3e635] left-1/2 bottom-8 shadow-[0_0_10px_#a3e635]"></div>
<svg className="absolute inset-0 w-full h-full opacity-30" preserveaspectratio="none">
<path d="M40 40 Q 150 20, 200 120" fill="none" stroke="#a3e635" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M40 40 L 150 150" fill="none" opacity="0.5" stroke="#a3e635" stroke-dasharray="2 2" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="md:col-span-3 p-8 md:p-10 rounded-2xl bg-zinc-900/50 border border-zinc-800/50">
<i className="w-8 h-8 text-white mb-6" data-lucide="zap-fast"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Priority Express Protocol</h3>
<p className="text-base text-zinc-400">For mission-critical logistics, bypass nodes entirely with point-to-point dedicated routing. Engineered for time-sensitive corporate and medical transport.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Built for scale.</h2>
<p className="text-base text-zinc-400 mb-10">Whether you are an SME needing predictable daily operations, or an enterprise requiring vast network capacity, Cendr scales automatically.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 bg-zinc-900 border border-zinc-800 rounded-md p-1.5"><i className="w-4 h-4 text-white" data-lucide="building-2"></i></div>
<div>
<h4 className="text-base font-semibold text-white">Corporate Teams</h4>
<p className="text-sm text-zinc-400 mt-1">Audit-ready trails and guaranteed chain of custody for sensitive document and asset transfer.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-zinc-900 border border-zinc-800 rounded-md p-1.5"><i className="w-4 h-4 text-white" data-lucide="store"></i></div>
<div>
<h4 className="text-base font-semibold text-white">Commerce &amp; Retail</h4>
<p className="text-sm text-zinc-400 mt-1">Transform delivery from a cost center into a reliable extension of your brand experience.</p>
</div>
</div>
</div>
</div>

<div className="p-10 rounded-2xl bg-[#09140b] border border-[#14331d] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#a3e635] opacity-5 blur-[100px] rounded-full"></div>
<div className="relative z-10">
<i className="w-8 h-8 text-[#a3e635] mb-6" data-lucide="leaf"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Efficiency as a strategy.</h3>
<p className="text-base text-zinc-400 mb-6">Sustainability in logistics isn't about CSR campaigns. It's about ruthless efficiency. </p>
<p className="text-base text-zinc-400 mb-8">By utilizing intelligent batching and optimized node routing, Cendr fundamentally reduces dead-miles and fuel waste per package delivered.</p>
<div className="flex items-center gap-6 border-t border-[#1a4025] pt-6">
<div>
<div className="text-2xl font-semibold text-white tracking-tight">-42%</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Avg Route Waste</div>
</div>
<div className="w-px h-10 bg-[#1a4025]"></div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">EV</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Fleet Transition</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-grid-pattern">
<div className="glow-effect bottom-[-150px] left-1/2 transform -translate-x-1/2 opacity-50"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-8">When it matters,<br/>it gets there.</h2>
<p className="text-lg text-zinc-400 mb-10">Stop managing couriers. Start utilizing infrastructure. Integrate Cendr into your operational stack today.</p>
<button className="px-8 py-4 bg-[#a3e635] text-zinc-950 text-base font-medium rounded-lg hover:bg-[#8cc63f] transition-all shadow-[0_0_30px_rgba(163,230,53,0.15)] flex items-center justify-center gap-2 mx-auto">
                    Initiate Deployment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<p className="mt-6 text-sm text-zinc-500">API access available immediately.</p>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/50 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-400 font-medium tracking-tight">
<div className="relative w-5 h-5 bg-zinc-800 rounded-sm flex items-center justify-center">
<div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-950 rounded-tl-sm"></div>
</div>
                Cendr Inc.
            </div>
<div className="flex items-center gap-8 text-sm text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a>
<a className="hover:text-zinc-300 transition-colors" href="#">System Status</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
