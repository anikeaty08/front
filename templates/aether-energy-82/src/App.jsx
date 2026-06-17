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
      

<nav className="fixed w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                AETHER
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors duration-200" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#technology">Infrastructure</a>
<a className="hover:text-white transition-colors duration-200" href="#impact">Impact</a>
<a className="hover:text-white transition-colors duration-200" href="#investors">Investors</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-300 hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-all" href="#">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px] -z-10"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.15] -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-emerald-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Grid efficiency up 12% this quarter
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 glow-text">
                Powering the next<br/>
                generation of industry.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10 font-light">
                Aether builds decentralized renewable energy grids for high-demand computing and industrial manufacturing. Clean, reliable, and scalable.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-emerald-500 text-black font-medium text-sm hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2">
                    Start Deployment <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-10 px-6 rounded-full border border-neutral-800 text-neutral-300 font-medium text-sm hover:bg-white/5 hover:text-white transition-all flex items-center gap-2">
                    View Documentation <i className="w-4 h-4 text-neutral-500" data-lucide="file-text"></i>
</button>
</div>
</div>

<div className="mt-24 border-y border-white/5 bg-neutral-900/20 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">12.5 GW</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Capacity Installed</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Uptime Guarantee</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">0g</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Carbon Emissions</div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl font-medium text-white tracking-tight mb-1">$4.2B</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide font-medium">Assets Managed</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="technology">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Infrastructure OS</h2>
<p className="text-neutral-500 max-w-md">A unified platform to manage generation, storage, and distribution assets in real-time.</p>
</div>
<a className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1" href="#">
                    Explore Platform <i className="w-4 h-4" data-lucide="chevron-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-neutral-900/40 border border-white/5 rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<i className="w-32 h-32 text-emerald-500" data-lucide="zap"></i>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-10 h-10 bg-neutral-800/50 rounded-lg flex items-center justify-center border border-white/5 mb-6">
<i className="w-5 h-5 text-white" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Load Balancing</h3>
<p className="text-sm text-neutral-500 max-w-sm">Our AI-driven core adjusts energy distribution within milliseconds to prevent outages and optimize cost.</p>
</div>

<div className="mt-8 h-32 w-full flex items-end gap-1 opacity-80">
<div className="w-full bg-emerald-500/20 h-[40%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500"></div>
</div>
<div className="w-full bg-emerald-500/20 h-[60%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500 delay-75"></div>
</div>
<div className="w-full bg-emerald-500/20 h-[45%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500 delay-100"></div>
</div>
<div className="w-full bg-emerald-500/20 h-[75%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500 delay-150"></div>
</div>
<div className="w-full bg-emerald-500/20 h-[90%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500 delay-200"></div>
</div>
<div className="w-full bg-emerald-500/20 h-[65%] rounded-t-sm relative group/bar">
<div className="absolute bottom-0 w-full bg-emerald-500 h-0 group-hover/bar:h-full transition-all duration-500 delay-300"></div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 rounded-xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors">
<div>
<div className="w-10 h-10 bg-neutral-800/50 rounded-lg flex items-center justify-center border border-white/5 mb-6">
<i className="w-5 h-5 text-white" data-lucide="sun"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Solar Arrays</h3>
<p className="text-sm text-neutral-500">High-efficiency photovoltaic cells with automated tracking.</p>
</div>
<div className="mt-6">
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Efficiency</span>
<span className="text-white">24.8%</span>
</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-white h-full w-[24.8%]"></div>
</div>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/5 rounded-xl p-8 flex flex-col justify-between group hover:border-white/10 transition-colors">
<div>
<div className="w-10 h-10 bg-neutral-800/50 rounded-lg flex items-center justify-center border border-white/5 mb-6">
<i className="w-5 h-5 text-white" data-lucide="wind"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2">Offshore Wind</h3>
<p className="text-sm text-neutral-500">Deep-water turbines designed for consistent output.</p>
</div>
<div className="mt-6 flex items-center gap-2">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-emerald-400 font-medium">Operational</span>
</div>
</div>

<div className="md:col-span-3 bg-neutral-900/40 border border-white/5 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<div className="w-10 h-10 bg-neutral-800/50 rounded-lg flex items-center justify-center border border-white/5 mb-6">
<i className="w-5 h-5 text-white" data-lucide="battery-charging"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Storage Simulations</h3>
<p className="text-sm text-neutral-500 mb-6">Adjust the slider to see how our lithium-iron storage buffers peak demand loads.</p>

<div className="max-w-sm">
<div className="flex justify-between text-xs text-neutral-400 mb-2 font-medium">
<span>Grid Load</span>
<span className="text-white">84%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="84"/>
<div className="flex justify-between mt-2 text-[10px] text-neutral-600 uppercase tracking-wider">
<span>Low Demand</span>
<span>Peak Demand</span>
</div>
</div>
</div>

<div className="w-full md:w-1/3 aspect-video bg-neutral-950 border border-white/5 rounded-lg flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center gap-1">
<div className="w-1 h-12 bg-emerald-500/20 rounded-full animate-pulse"></div>
<div className="w-1 h-16 bg-emerald-500/40 rounded-full animate-pulse delay-75"></div>
<div className="w-1 h-8 bg-emerald-500/30 rounded-full animate-pulse delay-150"></div>
<div className="w-1 h-20 bg-emerald-500/60 rounded-full animate-pulse delay-100"></div>
<div className="w-1 h-10 bg-emerald-500/20 rounded-full animate-pulse delay-200"></div>
</div>
<div className="absolute bottom-4 left-4 text-xs text-emerald-500 font-mono">DISCHARGING...</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<i className="w-8 h-8 text-white mx-auto mb-8 opacity-80" data-lucide="globe"></i>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter leading-tight mb-6">
                Energy that doesn't cost<br/>the Earth.
            </h2>
<p className="text-lg text-neutral-500 mb-8 font-light">
                We believe the future of energy is decentralized, digitized, and decarbonized. Our mission is to accelerate the transition to a zero-carbon economy.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-3">
<i className="w-5 h-5 text-neutral-400" data-lucide="shield-check"></i>
<span className="text-sm font-medium text-white">Reliable</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-3">
<i className="w-5 h-5 text-neutral-400" data-lucide="trending-up"></i>
<span className="text-sm font-medium text-white">Scalable</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-3">
<i className="w-5 h-5 text-neutral-400" data-lucide="leaf"></i>
<span className="text-sm font-medium text-white">Sustainable</span>
</div>
<div className="bg-neutral-950 p-6 flex flex-col items-center gap-3">
<i className="w-5 h-5 text-neutral-400" data-lucide="cpu"></i>
<span className="text-sm font-medium text-white">Smart</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to modernize your grid?</h2>
<p className="text-neutral-400 max-w-lg mb-10">
                Join the leading industrial partners powering their operations with Aether's next-gen infrastructure.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
<input className="flex-1 bg-neutral-900 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="Enter your work email" type="email"/>
<button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-neutral-200 transition-colors text-sm whitespace-nowrap">
                    Get Started
                </button>
</div>
<p className="text-xs text-neutral-600 mt-6">
                No credit card required. 14-day free trial for software suite.
            </p>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        AETHER
                    </a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Designing the nervous system of the global energy grid. Built for the future, available today.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Product</h4>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Infrastructure</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Storage</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Software</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Company</h4>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">About</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Careers</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Blog</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-xs font-semibold text-white uppercase tracking-wide mb-1">Legal</h4>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Privacy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Terms</a>
<a className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors" href="#">Security</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-neutral-600">
                    © 2024 Aether Energy Inc. All rights reserved.
                </div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-neutral-500">Systems Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
