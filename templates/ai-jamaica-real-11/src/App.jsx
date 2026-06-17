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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-[#007744] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-1/2 h-1/2 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-[#007744] to-emerald-400 flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-sm">JAMAICA<span className="opacity-50">.AI</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide text-slate-400">
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Protocol</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-medium px-4 py-2 rounded-full transition-all">
<span>Client Login</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#007744]/30 bg-[#007744]/10 text-[#007744] text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    AI-POWERED REAL ESTATE &amp; TOURISM
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[1.1]">
                    The Future of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#007744]">Caribbean Business.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
                    Deploy intelligent agents to automate bookings, secure properties, and enhance guest experiences across Jamaica.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="h-12 px-8 rounded-lg bg-[#007744] hover:bg-[#00663a] text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(0,119,68,0.5)]">
                        Deploy Agent
                        <iconify-icon icon="solar:cpu-bolt-linear" width="18"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-lg glass-panel hover:bg-white/5 text-white font-medium text-sm transition-all flex items-center justify-center gap-2">
                        View Demo
                        <iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-8 pt-8 border-t border-white/5">
<div>
<div className="text-2xl font-medium text-white tracking-tight">0.2s</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Latency</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Uptime</div>
</div>
<div>
<div className="text-2xl font-medium text-white tracking-tight">100%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Secure</div>
</div>
</div>
</div>

<div className="relative flex items-center justify-center lg:justify-end">
<div className="w-72 h-72 md:w-96 md:h-96 relative">

<div className="absolute inset-0 m-auto w-48 h-48 rounded-full bg-gradient-to-b from-[#1a1a1a] to-black border border-white/10 ai-orb flex items-center justify-center z-20">
<iconify-icon className="text-[#007744] text-6xl opacity-80" icon="solar:artificial-intelligence-linear"></iconify-icon>
</div>

<div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-[-20px] border border-[#D4AF37]/20 rounded-full animate-[spin_20s_linear_infinite] opacity-30"></div>

<div className="absolute top-0 right-10 glass-panel px-4 py-2 rounded-lg text-xs text-white flex items-center gap-2 animate-bounce shadow-lg">
<iconify-icon className="text-[#007744]" icon="solar:shield-check-linear"></iconify-icon>
                        Security Protocol
                    </div>
<div className="absolute bottom-10 left-0 glass-panel px-4 py-2 rounded-lg text-xs text-white flex items-center gap-2 animate-bounce shadow-lg" style={{animationDelay: '1s'}}>
<iconify-icon className="text-[#D4AF37]" icon="solar:buildings-linear"></iconify-icon>
                        Occupancy: 98%
                    </div>
</div>
</div>
</section>

<section className="mt-32">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-2">Intelligent Infrastructure</h2>
<p className="text-slate-400 font-light text-sm">Tailored for high-end Caribbean estates and hospitality groups.</p>
</div>
<a className="text-[#D4AF37] text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    Explore all services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative overflow-hidden rounded-2xl glass-panel p-8 hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-[#007744]/50">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#007744] filter blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-[#007744]/20 flex items-center justify-center text-[#007744] mb-6">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real Estate AI Agents</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                        Automated property valuation, lead qualification, and 24/7 concierge chat for luxury listings. Seamlessly integrates with CRM.
                    </p>
<div className="flex items-center gap-4 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">Auto-Booking</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">Virtual Tours</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl glass-panel p-8 hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-[#D4AF37]/50">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] filter blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-6">
<iconify-icon icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Tourism Security Protocols</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed mb-6">
                        AI-driven surveillance analysis, guest verification systems, and predictive risk assessment for resorts and private villas.
                    </p>
<div className="flex items-center gap-4 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">Facial Rec</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-slate-300 border border-white/5">AES-256</span>
</div>
</div>
</div>
</section>

<section className="mt-32 mb-20">
<div className="glass-panel rounded-2xl p-8 md:p-12 overflow-hidden relative">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>
<div className="relative z-10">
<h3 className="text-sm font-semibold text-[#007744] uppercase tracking-widest mb-6">Technical Performance Checklist</h3>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-white/10">
<th className="py-4 font-medium">Feature</th>
<th className="py-4 font-medium">Metric Goal</th>
<th className="py-4 font-medium">Implementation Status</th>
</tr>
</thead>
<tbody className="text-sm text-slate-300">
<tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
<td className="py-4 pr-8 flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:gallery-wide-linear"></iconify-icon>
                                        Image Optimization
                                    </td>
<td className="py-4 pr-8 font-mono text-xs text-[#D4AF37]">&lt; 500 KB</td>
<td className="py-4">
<div className="flex items-center gap-2 text-emerald-400 text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>WebP + CDN Active</span>
</div>
</td>
</tr>
<tr className="border-b border-white/5 group hover:bg-white/5 transition-colors">
<td className="py-4 pr-8 flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:rocket-linear"></iconify-icon>
                                        Load Speed
                                    </td>
<td className="py-4 pr-8 font-mono text-xs text-[#D4AF37]">&lt; 2.0s</td>
<td className="py-4">
<div className="flex items-center gap-2 text-emerald-400 text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Lazy Loading Active</span>
</div>
</td>
</tr>
<tr className="group hover:bg-white/5 transition-colors">
<td className="py-4 pr-8 flex items-center gap-3">
<iconify-icon className="text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
                                        SEO Ranking
                                    </td>
<td className="py-4 pr-8 font-mono text-xs text-[#D4AF37]">Top 3</td>
<td className="py-4">
<div className="flex items-center gap-2 text-emerald-400 text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
<span>Meta Optimized</span>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-600">
<div>
                © 2024 Jamaica.AI. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy</a>
<a className="hover:text-slate-400" href="#">Terms</a>
<a className="hover:text-slate-400" href="#">Sitemap</a>
</div>
</footer>
</main>

<div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-xl border-t border-white/10 px-6 py-4 md:hidden z-50 flex justify-between items-center text-[10px] font-medium text-slate-500">
<a className="flex flex-col items-center gap-1 text-[#007744]" href="#">
<iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon>
<span>Home</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:widget-linear" width="22"></iconify-icon>
<span>Services</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="22"></iconify-icon>
<span>Stats</span>
</a>
<a className="flex flex-col items-center gap-1 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
<span>Account</span>
</a>
</div>

    </>
  );
}
