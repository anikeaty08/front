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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
slate: {
850: '#151e2e',
900: '#0f172a',
950: '#020617',
}
}
}
}
}



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
      

<header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-lg font-medium tracking-tighter">MONO</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-light text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon> Markets
                    </a>
<a className="text-sm font-light text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5"></iconify-icon> Analytics
                    </a>
<a className="text-sm font-light text-slate-400 hover:text-white transition-colors flex items-center gap-1.5" href="#">
<iconify-icon icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon> API
                    </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-light text-slate-400 hover:text-white transition-colors" href="#">Sign In</a>
<button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-normal px-4 py-2 rounded-md transition-all shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] flex items-center gap-2">
                        Terminal Access <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight max-w-4xl mb-10 leading-tight">
                The Single Source for <br className="hidden sm:block"/> Global Real Estate.
            </h1>

<div className="w-full max-w-3xl relative group">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-opacity opacity-0 group-focus-within:opacity-100 duration-500"></div>
<div className="relative bg-slate-900 border border-slate-800 rounded-xl flex items-center shadow-2xl overflow-hidden transition-colors focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
<div className="pl-5 flex items-center text-slate-500">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full bg-transparent border-0 py-4 px-4 text-slate-200 placeholder:text-slate-600 focus:ring-0 text-base sm:text-lg font-light outline-none" placeholder="Search by City, Yield, or Visa Eligibility..." type="text"/>
<div className="pr-3 flex items-center gap-2">
<button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-500 transition-colors flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:login-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden sm:flex items-center border border-slate-700 bg-slate-800 rounded px-2 py-1 text-xs text-slate-400 font-mono tracking-tighter">
                            ⌘ K
                        </div>
</div>
</div>
</div>

<div className="mt-10 flex items-center gap-4 text-sm font-light text-slate-500 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 backdrop-blur-sm">
<span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live</span>
<span className="text-slate-700 select-none">•</span>
<span className="text-slate-300">4.2M Listings Indexed</span>
<span className="text-slate-700 select-none hidden sm:inline">•</span>
<span className="text-slate-300 hidden sm:inline">114 Countries</span>
<span className="text-slate-700 select-none hidden md:inline">•</span>
<span className="text-slate-300 hidden md:inline flex items-center gap-1"><iconify-icon className="text-blue-400" icon="solar:verified-check-linear"></iconify-icon> Verified by MONO AI</span>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-black/50 relative">
<div className="max-w-7xl mx-auto">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl font-normal text-white tracking-tight flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:radar-linear"></iconify-icon> Global Pulse
                    </h2>
<a className="text-sm font-light text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors" href="#">
                        View Matrix <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-emerald-400 uppercase tracking-widest border border-emerald-900 bg-emerald-950/30 px-2 py-0.5 rounded">Highest Yield</span>
<iconify-icon className="text-slate-500 text-lg" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Bali, ID</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-normal text-slate-200">7.2%</span>
<span className="text-sm font-light text-slate-500">Avg. Net</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs font-light text-slate-400">
<span>Villas • Short-term</span>
<span>Updated 2m ago</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-blue-400 uppercase tracking-widest border border-blue-900 bg-blue-950/30 px-2 py-0.5 rounded">Trending</span>
<iconify-icon className="text-slate-500 text-lg" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">Lisbon, PT</h3>
<div className="flex items-baseline gap-2">
<span className="text-base font-normal text-slate-200">Golden Visa Eligible</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs font-light text-slate-400">
<span className="flex items-center gap-1"><iconify-icon className="text-emerald-500" icon="solar:arrow-right-up-linear"></iconify-icon> +12% Search Vol</span>
<span>Updated 5m ago</span>
</div>
</div>

<div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:bg-purple-500/10 transition-colors"></div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-purple-400 uppercase tracking-widest border border-purple-900 bg-purple-950/30 px-2 py-0.5 rounded">System Feed</span>
<iconify-icon className="text-slate-500 text-lg" icon="solar:server-square-update-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-1">New Listings</h3>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-normal text-slate-200">14,002</span>
<span className="text-sm font-light text-slate-500">last hour</span>
</div>
<div className="mt-4 pt-4 border-t border-slate-800 flex justify-between text-xs font-light text-slate-400">
<span>Cross-referenced &amp; clean</span>
<span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Syncing</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl sm:text-4xl font-normal text-white tracking-tight mb-6">Normalized Data. <br/> Zero Fragmentation.</h2>
<p className="text-base font-light text-slate-400 leading-relaxed mb-10 max-w-lg">
                        We aggregate properties from thousands of global brokerages, developers, and local MLS systems. Our AI engine normalizes the data into a single, structured format, ready for programmatic analysis.
                    </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-4 relative">

<div className="flex flex-col gap-2 z-10 w-full sm:w-auto">
<div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
<iconify-icon className="text-xl" icon="solar:spider-web-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-slate-200">Scrape</h4>
<p className="text-xs font-light text-slate-500">12k+ Sources</p>
</div>
</div>

<div className="hidden sm:block flex-1 h-px bg-slate-800 relative z-0">
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600 bg-black px-1">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-2 z-10 w-full sm:w-auto">
<div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300">
<iconify-icon className="text-xl" icon="solar:tuning-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-slate-200">Normalize</h4>
<p className="text-xs font-light text-slate-500">AI Structuring</p>
</div>
</div>

<div className="hidden sm:block flex-1 h-px bg-slate-800 relative z-0">
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-600 bg-black px-1">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col gap-2 z-10 w-full sm:w-auto">
<div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-slate-200">De-Duplicate</h4>
<p className="text-xs font-light text-slate-500">Single Source</p>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-900/40 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">

<div className="flex flex-wrap items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-1.5 border border-slate-800 bg-black p-1 rounded-lg">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 rounded-md shadow-sm border border-slate-700">USD</button>
<button className="px-3 py-1.5 text-xs font-light text-slate-400 hover:text-slate-200 transition-colors">EUR</button>
<button className="px-3 py-1.5 text-xs font-light text-slate-400 hover:text-slate-200 transition-colors">GBP</button>
</div>
<div className="flex items-center gap-1.5 border border-slate-800 bg-black p-1 rounded-lg">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-slate-800 rounded-md shadow-sm border border-slate-700">Metric</button>
<button className="px-3 py-1.5 text-xs font-light text-slate-400 hover:text-slate-200 transition-colors">Imperial</button>
</div>
</div>

<div className="bg-black border border-slate-800 rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
<div className="relative aspect-video overflow-hidden bg-slate-800">

<img alt="Property" className="object-cover w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-slate-700/50 rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
<iconify-icon className="text-blue-400 text-xs" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs font-medium text-white tracking-tight">Score <span className="text-blue-400 ml-0.5">98</span></span>
</div>

<div className="absolute top-4 right-4 bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 rounded px-2 py-0.5">
<span className="text-[10px] font-medium text-emerald-300 uppercase tracking-widest">Active</span>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="text-lg font-medium text-white tracking-tight leading-tight">Villa Nova, Emirates Hills</h3>
<p className="text-xs font-light text-slate-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Dubai, United Arab Emirates
                                    </p>
</div>
<div className="text-right">
<p className="text-lg font-normal text-white tracking-tight">$8,450,000</p>
<p className="text-[10px] font-light text-slate-500 mt-0.5">~ $7,500 / sqft</p>
</div>
</div>
<div className="flex items-center gap-4 mt-5 pt-4 border-t border-slate-800/50">
<div className="flex items-center gap-1.5 text-xs font-light text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:bed-linear"></iconify-icon> 5 Beds
                                </div>
<div className="w-px h-3 bg-slate-800"></div>
<div className="flex items-center gap-1.5 text-xs font-light text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:bath-linear"></iconify-icon> 6 Baths
                                </div>
<div className="w-px h-3 bg-slate-800"></div>
<div className="flex items-center gap-1.5 text-xs font-light text-slate-300">
<iconify-icon className="text-slate-500" icon="solar:ruler-angular-linear"></iconify-icon> 1,120 sqm
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-slate-800 bg-slate-950 overflow-hidden min-h-[500px] flex items-center justify-center">

<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(30, 41, 59, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/80 to-slate-950" style={{background: 'radial-gradient(circle at center, transparent 0%, #020617 80%)'}}></div>


<div className="absolute" style={{top: '35%', left: '28%'}}>
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-blue-500 rounded-full"></div>
<div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-60 scale-150 duration-1000"></div>
</div>
</div>

<div className="absolute" style={{top: '30%', left: '48%'}}>
<div className="relative w-2.5 h-2.5">
<div className="absolute inset-0 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
<div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-50 scale-[2] duration-700"></div>
</div>
</div>

<div className="absolute" style={{top: '45%', left: '62%'}}>
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-blue-500 rounded-full"></div>
<div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75 scale-150 duration-1000 delay-300"></div>
</div>
</div>

<div className="absolute" style={{top: '60%', left: '78%'}}>
<div className="relative w-2 h-2">
<div className="absolute inset-0 bg-emerald-500 rounded-full"></div>
<div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-60 scale-150 duration-1000 delay-500"></div>
</div>
</div>

<div className="relative z-10 text-center px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur text-xs font-light text-slate-300 mb-6">
<iconify-icon className="text-blue-400" icon="solar:map-linear"></iconify-icon> Spatial Intelligence
                </div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4 drop-shadow-lg">Global Coverage Matrix</h2>
<p className="text-sm font-light text-slate-400 max-w-md mx-auto">
                    Real-time ingestion across 114 jurisdictions. Explore high-yield zones, visa program changes, and institutional flow.
                </p>
<button className="mt-8 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-sm font-normal px-6 py-2.5 rounded-md transition-all inline-flex items-center gap-2 group">
                    Initialize Map <iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-slate-800 bg-black py-12 text-center sm:text-left">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-lg opacity-50" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tighter opacity-50">MONO</span>
</div>
<div className="flex gap-6 text-xs font-light text-slate-500">
<a className="hover:text-slate-300 transition-colors" href="#">Documentation</a>
<a className="hover:text-slate-300 transition-colors" href="#">Data Ethics</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
</div>
<p className="text-xs font-light text-slate-600">
                © 2024 Mono Data Systems. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
