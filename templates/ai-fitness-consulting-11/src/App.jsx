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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-bold tracking-tighter text-white flex items-center gap-2 uppercase" href="#">
<span className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:trending-up" data-width="16"></span>
</span>
                Growth.Sys
            </a>
<div className="hidden sm:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#process">The Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Investment</a>
</div>
<a className="bg-white text-black text-xs font-bold py-2 px-4 rounded hover:bg-neutral-200 transition-all duration-300" href="https://form.typeform.com/to/hUTuLs5m">
                Join Free Session
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden flex flex-col items-center">

<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] glow-spot opacity-60 blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide uppercase mb-8 animate-pulse">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
                Accepting Applications Q3
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 leading-[0.95]">
                BUILD A <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-blue-400 to-blue-700 text-glow">REVENUE ENGINE</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                Stop trading time for money. Join our free strategy session where we reveal the <span className="text-white font-medium">Content</span>, <span className="text-white font-medium">AI Systems</span>, and <span className="text-white font-medium">Sales Infrastructure</span> roadmap used by 7-figure brands.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mb-8">

<a className="w-full sm:w-auto h-14 px-8 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-[0_0_30px_-10px_rgba(37,99,235,0.6)] hover:scale-105" href="https://form.typeform.com/to/hUTuLs5m">
                    APPLY FOR ACCESS
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="w-full sm:w-auto h-14 px-8 rounded border border-neutral-800 hover:border-white/20 bg-neutral-900/50 text-neutral-300 font-semibold text-sm flex items-center justify-center gap-2 transition-all hover:bg-white/5" href="#process">
                    HOW IT WORKS
                </a>
</div>
<div className="flex items-center justify-center gap-2 text-xs text-neutral-500 mb-16">
<span className="flex -space-x-2">
<img alt="User" className="w-6 h-6 rounded-full border border-black bg-neutral-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<img alt="User" className="w-6 h-6 rounded-full border border-black bg-neutral-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
<img alt="User" className="w-6 h-6 rounded-full border border-black bg-neutral-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jonas"/>
</span>
<span>Limited spots available for this week's cohort.</span>
</div>

<div className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-6">
<div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-white tracking-tight">Bespoke</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Growth Strategy</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-white tracking-tight">Rapid</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Infrastructure Scale</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-bold text-white tracking-tight">100%</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-500">Automated Fulfillment</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 relative border-b border-white/5" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold text-white mb-6">You don't have a traffic problem. <br/><span className="text-neutral-500">You have a system problem.</span></h2>
<div className="space-y-4 text-neutral-400 leading-relaxed">
<p>Most consultants and creators are stuck in the "Hamster Wheel of Content." You post, you pray, you DM manually, you burn out.</p>
<p className="text-white font-medium">We fix the broken pipes in your business.</p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No more manual DM prospecting</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No more guessing what content works</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No more administrative busywork</span>
</li>
</ul>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full"></div>
<div className="relative bg-black border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-bold text-white uppercase tracking-wider">System Output</h3>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-3 rounded bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:video" data-width="20"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Viral Content Scripted</div>
<div className="text-xs text-neutral-500">Strategy Phase • Complete</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded bg-purple-500/20 text-purple-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:bot" data-width="20"></span>
</div>
<div>
<div className="text-white text-sm font-medium">AI Agent: Lead Qual</div>
<div className="text-xs text-neutral-500">24/7 Deployment • Active</div>
</div>
</div>
<div className="flex items-center gap-4 p-3 rounded bg-white/5 border border-white/5">
<div className="w-10 h-10 rounded bg-green-500/20 text-green-400 flex items-center justify-center">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="20"></span>
</div>
<div>
<div className="text-white text-sm font-medium">Sales Pipeline Optimized</div>
<div className="text-xs text-neutral-500">Conversion Rate Maximized</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">The Accelerator</h2>
<p className="text-neutral-400 max-w-2xl mx-auto">One proven pathway to scale your training business.</p>
</div>

<div className="shine-border relative rounded-3xl bg-neutral-900/40 backdrop-blur-xl border border-white/10 p-8 sm:p-12 overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            Application Only
                        </div>
<h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">Core Infrastructure</h3>
<p className="text-neutral-400 text-sm sm:text-base max-w-sm">
                            Done-with-you AI implementation &amp; advanced content systems to remove you from the grind.
                        </p>
</div>
<div className="text-left md:text-right">
<div className="text-4xl sm:text-5xl font-bold text-white tracking-tighter mb-1">$8k - $12k</div>
<div className="text-neutral-500 text-sm font-medium">4 - 6 Month Engagement</div>
</div>
</div>

<div className="bg-black/40 border border-white/5 rounded-xl p-5 mb-10 relative z-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center shrink-0 border border-white/10 text-neutral-300">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<div>
<h4 className="text-white text-sm font-bold uppercase tracking-wide mb-1">Strict Qualification Criteria</h4>
<p className="text-neutral-400 text-sm">
                                Specifically designed for <span className="text-white font-medium">Trainers &amp; Coaches generating $10k+/month</span> looking to scale purely through organic content and systems.
                            </p>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-8 mb-12 relative z-10">
<div>
<h4 className="text-white font-semibold mb-4 flex items-center gap-2">
<span className="iconify text-blue-500" data-icon="lucide:cpu" data-width="18"></span>
                            AI Implementation
                        </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Custom trained AI voice &amp; brand agents</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Automated lead qualification workflows</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-blue-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>24/7 Client support bot integration</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 flex items-center gap-2">
<span className="iconify text-purple-500" data-icon="lucide:aperture" data-width="18"></span>
                            Content Systems
                        </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Viral script frameworks &amp; hooks</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Editing &amp; production SOP installation</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-purple-500/60 mt-0.5" data-icon="lucide:check" data-width="16"></span>
<span>Multi-platform distribution automated</span>
</li>
</ul>
</div>
</div>
<div className="relative z-10">
<a className="block w-full py-4 rounded bg-white text-black font-bold text-center text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-white/10" href="https://form.typeform.com/to/hUTuLs5m">
                        Apply for Accelerator Access
                    </a>
<p className="text-center text-xs text-neutral-500 mt-4">
                        Due to the high-touch nature of this offer, we are capped at 5 clients per cohort.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold text-white mb-8">Stop guessing. Start building.</h2>
<p className="text-neutral-400 mb-12 text-lg">
                The gap between where you are and where you want to be is <span className="text-white">infrastructure</span>. Join the free session to see the blueprint.
            </p>
<div className="bg-black border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-left">
<div className="text-white font-bold text-lg mb-1">Join the next cohort</div>
<div className="text-neutral-500 text-sm">Every Friday at 12pm EST. Free for a limited time.</div>
</div>
<a className="whitespace-nowrap px-6 py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors" href="https://form.typeform.com/to/hUTuLs5m">
                    Reserve Your Seat
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="text-xl font-bold text-white flex items-center gap-2 uppercase mb-4" href="#">
                        GROWTH.SYS
                    </a>
<p className="text-neutral-500 text-sm max-w-xs">
                        Building the backend infrastructure for the world's fastest-growing personal brands.
                    </p>
</div>
<div className="flex gap-12 text-sm">
<div>
<h4 className="text-white font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-blue-500" href="#">Foundation</a></li>
<li><a className="hover:text-blue-500" href="#">Growth</a></li>
<li><a className="hover:text-blue-500" href="#">Authority</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-blue-500" href="#">Terms</a></li>
<li><a className="hover:text-blue-500" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-neutral-600">
<div>© 2024 Growth Systems. All rights reserved.</div>
<div className="flex gap-4 mt-4 sm:mt-0">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
