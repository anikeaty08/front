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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800/40 bg-zinc-950/70 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-zinc-100 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-xs text-white">V</div>
                    VXL
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-light text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#">Platform</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Case Studies</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Analytics</a>
<a className="hover:text-zinc-100 transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-light text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Sign in</a>
<a className="h-8 inline-flex items-center justify-center px-4 rounded-md bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-white transition-colors" href="#">
                    Start Scaling
                </a>
</div>
</div>
</nav>
<main className="flex-grow pt-14">

<section className="relative overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30 pointer-events-none" style={{background: 'radial-gradient(ellipse at top, #4f46e5 0%, transparent 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#4f46e5]"></span>
<span className="text-xs font-light text-zinc-300">Algorithm V4.2 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter max-w-5xl leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-6">
                    Engineer Your First <br className="hidden md:block"/> Billion Views.
                </h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                    The deterministic growth engine for elite creators. Bypass the algorithm, scale exponentially, and convert attention into institutional-grade revenue.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto h-12 inline-flex items-center justify-center px-8 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] gap-2">
                        Initialize Campaign
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 inline-flex items-center justify-center px-8 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-100 text-sm font-medium hover:bg-zinc-800 transition-all gap-2">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>
</section>

<section className="border-y border-zinc-800/40 bg-zinc-900/20 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs font-light text-zinc-500 text-center mb-8 uppercase tracking-widest">Powering the next generation of digital empires</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800/40">
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">1.2B+</span>
<span className="text-xs font-light text-zinc-400">Monthly Views Driven</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">$850M</span>
<span className="text-xs font-light text-zinc-400">Creator Revenue Generated</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">45M+</span>
<span className="text-xs font-light text-zinc-400">Subscribers Acquired</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">99.8%</span>
<span className="text-xs font-light text-zinc-400">Algorithm Hit Rate</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Systematic Virality.</h2>
<p className="text-base font-light text-zinc-400 leading-relaxed">We stripped away the guesswork. VXL leverages vast datasets and behavioral psychology to engineer thumbnails, hooks, and retention strategies that algorithms cannot ignore.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Retention Architecture</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Analyze drop-off points with sub-second precision. Re-edit content based on proven engagement matrices to keep viewers locked in.</p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">Click-Through Optimization</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">A/B test thumbnails and titles against a live audience sandbox before publishing. Maximize initial CTR to trigger algorithmic cascades.</p>
</div>

<div className="group p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="h-10 w-10 rounded-lg border border-zinc-700/50 bg-zinc-800/50 flex items-center justify-center mb-6 text-zinc-300 group-hover:text-indigo-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-2">RPM Maximization</h3>
<p className="text-sm font-light text-zinc-400 leading-relaxed">Strategic ad placement, sponsor integration, and high-CPM niche targeting to ensure every view translates to maximum possible revenue.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-zinc-800/40 relative overflow-hidden">
<div className="absolute -right-40 -top-40 w-96 h-96 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Project Your Earnings.</h2>
<p className="text-base font-light text-zinc-400 mb-8 leading-relaxed">Slide to see potential monthly revenue based on VXL's optimized RPM and retention rates across a billion-view trajectory.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-light text-zinc-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Based on aggregate data from top 1% channels
                        </li>
<li className="flex items-center gap-3 text-sm font-light text-zinc-300">
<iconify-icon className="text-indigo-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Assumes successful implementation of VXL strategies
                        </li>
</ul>
</div>

<div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 shadow-2xl relative">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Target Views / Mo</p>
<div className="text-3xl font-semibold tracking-tight text-white">500,000,000</div>
</div>
<div className="text-right">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Est. Revenue</p>
<div className="text-3xl font-semibold tracking-tight text-indigo-400">$3,250,000</div>
</div>
</div>
<div className="mb-10">

<div className="relative w-full h-2">
<div className="absolute inset-0 bg-zinc-800 rounded-full"></div>
<div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"></div>
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" max="100" min="1" type="range" value="50"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)] border-2 border-zinc-950 pointer-events-none z-0"></div>
</div>
<div className="flex justify-between text-xs font-light text-zinc-500 mt-3">
<span>1M</span>
<span>1B+</span>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:dollar-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-300">AdSense Direct</span>
</div>
<span className="text-sm font-medium text-white">$1.8M</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/50">
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400" icon="solar:shop-linear"></iconify-icon>
<span className="text-sm font-light text-zinc-300">Sponsorships &amp; Placements</span>
</div>
<span className="text-sm font-medium text-white">$1.45M</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden flex items-center justify-center text-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to dominate?</h2>
<p className="text-lg font-light text-zinc-400 mb-10 max-w-xl mx-auto">Join the exclusive network of creators who have transcended the platform to build billion-dollar media empires.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 inline-flex items-center justify-center px-8 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors">
                        Apply for Access
                    </button>
<span className="text-xs font-light text-zinc-500">Strict approval process.</span>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/40 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400 font-semibold">V</div>
<span className="text-sm font-medium tracking-tighter text-zinc-300">VXL</span>
</div>
<div className="flex items-center gap-6 text-xs font-light text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Contact</a>
</div>
<p className="text-xs font-light text-zinc-600">© 2024 VXL Systems. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
