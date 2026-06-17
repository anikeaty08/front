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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-b-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-xs font-bold text-black">X</div>
                XANTRIO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
<a className="hover:text-white transition-colors" href="#products">Commodities</a>
<a className="hover:text-white transition-colors" href="#logistics">Logistics</a>
<a className="hover:text-white transition-colors" href="#vision">Vision</a>
<a className="hover:text-white transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm text-slate-300 hover:text-white transition-colors font-medium" href="#">Log in</a>
<a className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-slate-200 transition-colors" href="#">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full grid-bg -z-10 opacity-60"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-400 font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Expanding Global Supply Chains
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-8">
                The future of <br/> commodity trading.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Xantrio bridges the gap between premium agricultural producers and global markets. We are building the infrastructure for the next generation of international trade.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                    Explore Marketplace
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto px-6 py-3 glass-panel text-white rounded-lg font-medium hover:bg-white/10 transition-colors">
                    Become a Partner
                </button>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-3xl font-medium text-white tracking-tight mb-1">12+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Countries</div>
</div>
<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-3xl font-medium text-white tracking-tight mb-1">45k</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Tons Shipped</div>
</div>
<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-3xl font-medium text-white tracking-tight mb-1">99%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">On-Time</div>
</div>
<div className="glass-panel p-6 rounded-xl text-center">
<div className="text-3xl font-medium text-white tracking-tight mb-1">24/7</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Support</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="logistics">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">Engineered for reliability.</h2>
<p className="text-slate-400 max-w-xl text-lg font-light">We combine traditional expertise with modern logistics technology to ensure seamless execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="glass-panel rounded-2xl p-8 md:col-span-2 md:row-span-2 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-emerald-400 border border-white/10">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Global Logistics Network</h3>
<p className="text-slate-400 leading-relaxed max-w-md">Our end-to-end supply chain management ensures that commodities move from farm to harbor to destination with total transparency and efficiency. We handle the complexity so you don't have to.</p>
</div>
<div className="mt-8 relative h-48 w-full border border-white/10 rounded-lg bg-black/20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-30">
<svg viewbox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
<path className="text-emerald-500" d="M20,50 Q50,20 80,50 T140,50 T200,50" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<path className="text-sky-500" d="M0,60 Q40,90 90,60 T180,40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
<circle className="fill-white animate-pulse" cx="80" cy="50" r="1.5"></circle>
<circle className="fill-white animate-pulse" cx="140" cy="50" r="1.5"></circle>
</svg>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col justify-start relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-sky-400 border border-white/10">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Quality Assurance</h3>
<p className="text-sm text-slate-400">Strict quality control protocols at origin and destination ports.</p>
</div>

<div className="glass-panel rounded-2xl p-8 flex flex-col justify-start relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-orange-400 border border-white/10">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Market Intelligence</h3>
<p className="text-sm text-slate-400">Data-driven insights to buy and sell at the optimal moments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]" id="products">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">Core Commodities</h2>
<p className="text-slate-400 max-w-lg font-light">We currently specialize in premium agricultural products, sourcing directly from verified growers.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 hover:gap-3 transition-all" href="#">
                    View full catalog
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">

<div className="bg-[#030712] p-8 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-yellow-200" icon="solar:wheat-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400">Grains</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Premium Wheat</h4>
<p className="text-sm text-slate-400 mb-6">High-protein milling wheat sourced from sustainable farms.</p>
<div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
</div>

<div className="bg-[#030712] p-8 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-emerald-200" icon="solar:leaf-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400">Spices</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Organic Spices</h4>
<p className="text-sm text-slate-400 mb-6">Cardamom, Pepper, and Turmeric with high curcumin content.</p>
<div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
</div>

<div className="bg-[#030712] p-8 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-white" icon="solar:chef-hat-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400">Staples</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Basmati Rice</h4>
<p className="text-sm text-slate-400 mb-6">Aged long-grain rice processed for international markets.</p>
<div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
</div>

<div className="bg-[#030712] p-8 hover:bg-white/5 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-orange-200" icon="solar:box-minimalistic-linear" strokeWidth="1" width="32"></iconify-icon>
<span className="text-xs border border-white/10 px-2 py-1 rounded text-slate-400">Bulk</span>
</div>
<h4 className="text-lg font-medium text-white mb-2">Oil Seeds</h4>
<p className="text-sm text-slate-400 mb-6">Soybean and sesame seeds for industrial processing.</p>
<div className="w-full h-px bg-white/10 group-hover:bg-white/20 transition-colors"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="vision">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white mb-6">Beyond Agriculture</h2>
<p className="text-lg text-slate-400 font-light mb-12">
                Xantrio is built on a scalable framework. While we trade in agri-products today, our infrastructure is designed to handle multi-commodity trading across energy, metals, and textiles in the near future.
            </p>
<div className="flex flex-wrap justify-center gap-3">
<div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm flex items-center gap-2">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear"></iconify-icon> Agri-Products
                </div>
<div className="px-4 py-2 rounded-full border border-white/5 bg-transparent text-slate-500 text-sm flex items-center gap-2 border-dashed">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Energy
                </div>
<div className="px-4 py-2 rounded-full border border-white/5 bg-transparent text-slate-500 text-sm flex items-center gap-2 border-dashed">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Metals
                </div>
<div className="px-4 py-2 rounded-full border border-white/5 bg-transparent text-slate-500 text-sm flex items-center gap-2 border-dashed">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Textiles
                </div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto glass-panel rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 z-0"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white mb-6">Ready to scale your trade?</h2>
<p className="text-slate-400 mb-8 font-light">Join the network of producers and buyers trusting Xantrio for their global shipments.</p>
<form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-white/30 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-slate-200 transition-colors" type="submit">
                        Get in touch
                    </button>
</form>
<p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-8 px-6 bg-[#030712]">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg tracking-tighter font-semibold text-white flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-gradient-to-tr from-emerald-500 to-sky-500 flex items-center justify-center text-[10px] font-bold text-black">X</div>
                    XANTRIO
                </a>
<p className="text-sm text-slate-500 leading-relaxed">
                    Modernizing global trade through transparent logistics and reliable sourcing.
                </p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Sourcing</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Quality Control</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-300 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-slate-300 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2024 Xantrio Trading Ltd. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-400" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="16"></iconify-icon></a>
<a className="hover:text-slate-400" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="16"></iconify-icon></a>
<a className="hover:text-slate-400" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="16"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
