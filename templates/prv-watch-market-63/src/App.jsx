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



        lucide.createIcons();
    
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
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-violet-900/10 rounded-full blur-[100px]"></div>
<div className="absolute inset-0 grid-bg [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-indigo-500" data-lucide="activity"></i>
<span className="text-sm font-semibold text-white tracking-tight">PRV<span className="text-slate-500">WATCH</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Market Data</a>
<a className="hover:text-white transition-colors" href="#">Programs</a>
<a className="hover:text-white transition-colors" href="#">Intelligence</a>
<a className="hover:text-white transition-colors" href="#">API</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium px-3 py-1.5 bg-white text-slate-950 rounded-full hover:bg-slate-200 transition-all" href="#">
                    Start Tracking
                </a>
</div>
</div>
</nav>

<main className="pt-32 pb-20 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                New: Q3 2025 Market Report Available
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Market intelligence for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400">Priority Review Vouchers</span>
</h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                The definitive platform for tracking FDA PRV issuances, secondary market transactions, and regulatory shifts. Real-time data for biopharma investors and executives.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full text-sm font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2" href="#">
                    Access Dashboard <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3 glass-panel text-white rounded-full text-sm font-medium hover:bg-white/5 transition-all" href="#">
                    View Methodology
                </a>
</div>
</div>

<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="col-span-1 md:col-span-2 row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-30 transition-opacity">
<i className="w-24 h-24 text-indigo-500" data-lucide="bar-chart-2"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 text-indigo-400 mb-2">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="text-xs font-semibold uppercase tracking-wider">Total Market Value</span>
</div>
<div className="text-5xl font-semibold text-white tracking-tight">$2.8B+</div>
<div className="text-sm text-slate-500 mt-2">Aggregate disclosed transaction volume</div>
</div>

<div className="w-full mt-8">
<div className="flex items-end justify-between h-32 gap-2">
<div className="w-full bg-slate-800/50 rounded-t-sm h-[30%] hover:bg-indigo-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[45%] hover:bg-indigo-500/60 transition-colors duration-500"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[35%] hover:bg-indigo-500/50 transition-colors duration-500"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[60%] hover:bg-indigo-500/70 transition-colors duration-500"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[50%] hover:bg-indigo-500/60 transition-colors duration-500"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[75%] hover:bg-indigo-500/80 transition-colors duration-500"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[65%] shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)]"></div>
<div className="w-full bg-slate-800/50 rounded-t-sm h-[85%] hover:bg-indigo-500/90 transition-colors duration-500"></div>
</div>
<div className="flex justify-between text-xs text-slate-600 mt-2 font-mono">
<span>2018</span>
<span>2025</span>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-6 flex flex-col justify-center hover:bg-white/5 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
<i className="w-5 h-5" data-lucide="check-circle"></i>
</div>
<span className="text-xs font-mono text-emerald-400">+2 this month</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight">108</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide font-medium">Vouchers Issued</div>
</div>

<div className="glass-panel rounded-3xl p-6 flex flex-col justify-center hover:bg-white/5 transition-colors cursor-default">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
<i className="w-5 h-5" data-lucide="tag"></i>
</div>
<span className="text-xs font-mono text-slate-500">Avg Price</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight">$95M</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wide font-medium">Last Reported Sale</div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">Program Architecture</h2>
<p className="text-slate-500 max-w-xl">Comprehensive tracking across all four FDA priority review voucher pathways.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 glass-panel rounded-lg text-xs font-medium text-white hover:bg-white/5">View Documentation</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-2xl hover:border-indigo-500/50 transition-all group">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="microscope"></i>
</div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
                        RPD 
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-indigo-500/30 text-indigo-400 bg-indigo-500/10">Active</span>
</h3>
<p className="text-xs text-slate-500 mb-3">Rare Pediatric Disease</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        Incentivizes drugs for serious rare diseases affecting fewer than 200,000 individuals under age 18.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-amber-500/50 transition-all group">
<div className="h-10 w-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
                        TD
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-amber-500/30 text-amber-400 bg-amber-500/10">Active</span>
</h3>
<p className="text-xs text-slate-500 mb-3">Tropical Disease</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        Targets specific infectious diseases that disproportionately affect developing countries.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-emerald-500/50 transition-all group">
<div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="shield-alert"></i>
</div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2">
                        MTMC
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">Active</span>
</h3>
<p className="text-xs text-slate-500 mb-3">Medical Countermeasure</p>
<p className="text-sm text-slate-400 leading-relaxed">
                        For drugs preventing or treating harm from biological, chemical, radiological, or nuclear agents.
                    </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:border-violet-500/50 transition-all group relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-20 h-20 bg-violet-500/20 rounded-full blur-xl"></div>
<div className="h-10 w-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform relative z-10">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="text-white font-medium mb-1 flex items-center gap-2 relative z-10">
                        CNPV
                        <span className="text-[10px] px-1.5 py-0.5 rounded border border-violet-500/30 text-violet-400 bg-violet-500/10">New 2025</span>
</h3>
<p className="text-xs text-slate-500 mb-3 relative z-10">National Priority</p>
<p className="text-sm text-slate-400 leading-relaxed relative z-10">
                        Accelerated 1-2 month review for products addressing urgent national health priorities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Transaction Stream</h2>
<div className="flex gap-3">
<button className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="filter"></i>
</button>
<button className="p-2 glass-panel rounded-lg text-slate-400 hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>
<div className="glass-panel rounded-xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 border-b border-white/5 text-slate-400 font-medium">
<tr>
<th className="py-4 px-6 font-normal">Date</th>
<th className="py-4 px-6 font-normal">Sponsor / Transferor</th>
<th className="py-4 px-6 font-normal">Product</th>
<th className="py-4 px-6 font-normal">Program</th>
<th className="py-4 px-6 font-normal text-right">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-slate-300">

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-6 text-slate-500 font-mono text-xs">2025-11-12</td>
<td className="py-4 px-6 font-medium text-white group-hover:text-indigo-300 transition-colors">Novo Nordisk Inc.</td>
<td className="py-4 px-6">Wegovy</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs">
<span className="w-1 h-1 rounded-full bg-violet-400"></span> CNPV
                                    </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20">REDEEMED</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-6 text-slate-500 font-mono text-xs">2025-10-05</td>
<td className="py-4 px-6 font-medium text-white group-hover:text-indigo-300 transition-colors">Regeneron</td>
<td className="py-4 px-6">DB-OTO</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs">
<span className="w-1 h-1 rounded-full bg-violet-400"></span> CNPV
                                    </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-500/10 text-slate-400 text-xs font-medium border border-slate-500/20">UNUSED</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-6 text-slate-500 font-mono text-xs">2025-08-22</td>
<td className="py-4 px-6 font-medium text-white group-hover:text-indigo-300 transition-colors">Jazz Pharmaceuticals</td>
<td className="py-4 px-6">Mudoyso</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs">
<span className="w-1 h-1 rounded-full bg-indigo-400"></span> RPD
                                    </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">PENDING</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-6 text-slate-500 font-mono text-xs">2025-04-15</td>
<td className="py-4 px-6 font-medium text-white group-hover:text-indigo-300 transition-colors">Abeona Therapeutics</td>
<td className="py-4 px-6">Zevasakyn</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs">
<span className="w-1 h-1 rounded-full bg-indigo-400"></span> RPD
                                    </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">SOLD ($105M)</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-4 px-6 text-slate-500 font-mono text-xs">2025-02-01</td>
<td className="py-4 px-6 font-medium text-white group-hover:text-indigo-300 transition-colors">Bavarian Nordic A/S</td>
<td className="py-4 px-6">Vinuulnya</td>
<td className="py-4 px-6">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs">
<span className="w-1 h-1 rounded-full bg-amber-400"></span> TD
                                    </span>
</td>
<td className="py-4 px-6 text-right">
<span className="inline-flex items-center px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20">SOLD ($95M)</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="py-16 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Latest Intelligence</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="glass-panel p-6 rounded-2xl group hover:bg-white/5 transition-all" href="#">
<div className="text-xs font-mono text-indigo-400 mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        REGULATORY
                    </div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors">FDA Launches CNPV Program</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        The Commissioner's National Priority Voucher drastically reduces review times to 1-2 months for critical health priorities.
                    </p>
</a>

<a className="glass-panel p-6 rounded-2xl group hover:bg-white/5 transition-all" href="#">
<div className="text-xs font-mono text-emerald-400 mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        MARKET DATA
                    </div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors">Q2 2025 Sales Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Transaction volume stabilizes near $100M as inventory tightens. Deep dive into secondary market liquidity.
                    </p>
</a>

<a className="glass-panel p-6 rounded-2xl group hover:bg-white/5 transition-all" href="#">
<div className="text-xs font-mono text-amber-400 mb-4 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        LEGISLATION
                    </div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-amber-300 transition-colors">RPD Sunset Clause Update</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Congressional committee moves to extend the Rare Pediatric Disease program through 2028.
                    </p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center relative">
<div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 glass-panel p-12 rounded-3xl border border-indigo-500/30">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Start tracking the market</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Get instant alerts on issuances, sales, and SEC filings. Join top biopharma analysts relying on PRV Watch.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
<input className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="work@company.com" type="email"/>
<button className="px-6 py-3 bg-white text-slate-950 font-medium rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap" type="button">
                        Get Access
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6 text-sm">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 text-white font-semibold mb-4">
<i className="w-4 h-4 text-indigo-500" data-lucide="activity"></i> PRVWATCH
                </div>
<p className="text-slate-500 text-xs leading-relaxed">
                    Financial intelligence for the biopharmaceutical sector.
                </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium">Platform</h4>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Dashboard</a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">API Access</a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Enterprise</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium">Resources</h4>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Methodology</a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">SEC Filings</a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Glossary</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium">Legal</h4>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Privacy</a>
<a className="text-slate-500 hover:text-indigo-400 transition-colors" href="#">Terms</a>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-slate-600">
<p>© 2025 PRV Watch Inc. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 cursor-pointer hover:text-white transition-colors" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:text-white transition-colors" data-lucide="github"></i>
<i className="w-4 h-4 cursor-pointer hover:text-white transition-colors" data-lucide="linkedin"></i>
</div>
</div>
</footer>


    </>
  );
}
