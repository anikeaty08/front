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
      

<main className="max-w-[1980px] mx-auto w-full overflow-hidden 2xl:px-12">

<section className="min-h-[90vh] flex flex-col justify-center relative px-6 lg:px-24 2xl:px-40 mx-auto z-20">
<div className="absolute top-1/3 left-0 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/15 blur-[200px] rounded-full pointer-events-none"></div>
<div className="space-y-16 max-w-[1400px] relative z-10">
<h1 className="text-6xl md:text-8xl lg:text-[6.5rem] 2xl:text-[8rem] font-medium tracking-tighter text-white leading-[1.05]">
                    Gamers struggle to find fast, trusted game deals across platforms.
                </h1>
<p className="text-3xl md:text-5xl 2xl:text-6xl font-light text-slate-400 leading-snug tracking-tight max-w-6xl">
                    We designed a faster, smarter gaming storefront that simplifies discovery, comparison, and checkout.
                </p>
</div>
<div className="absolute bottom-24 left-6 lg:left-24 2xl:left-40 flex flex-col items-start gap-4 opacity-70 hover:opacity-100 transition-opacity">
<span className="text-sm tracking-widest uppercase font-medium text-purple-300">Scroll to explore</span>
<div className="w-px h-24 bg-gradient-to-b from-purple-400 to-transparent animate-pulse"></div>
</div>
</section>

<header className="py-40 lg:py-64 flex flex-col items-center relative px-6 lg:px-12 border-t border-white/5 bg-[#08080a] overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none"></div>
<div className="z-10 text-center space-y-16 max-w-5xl w-full">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-purple-500/20 bg-purple-500/5 backdrop-blur-md shadow-[0_0_30px_rgba(139,92,246,0.1)]">
<div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse"></div>
<span className="text-sm font-medium tracking-widest text-purple-200 uppercase">Product Case Study</span>
</div>
<h2 className="text-7xl md:text-9xl lg:text-[10rem] 2xl:text-[14rem] font-medium tracking-tighter text-white glow-text leading-none">
                    NEXUS
                </h2>
<div className="pt-16 flex items-center justify-center gap-16 lg:gap-24 text-base lg:text-lg text-slate-500">
<div className="flex flex-col items-center gap-3">
<span className="font-medium text-slate-400 uppercase tracking-widest text-sm">Role</span>
<span className="font-light text-white">UX/UI Design</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col items-center gap-3">
<span className="font-medium text-slate-400 uppercase tracking-widest text-sm">Timeline</span>
<span className="font-light text-white">6 Weeks</span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col items-center gap-3">
<span className="font-medium text-slate-400 uppercase tracking-widest text-sm">Platform</span>
<span className="font-light text-white">Web App</span>
</div>
</div>
</div>
</header>

<section className="py-40 lg:py-64 px-6 lg:px-24 2xl:px-40 max-w-[1980px] mx-auto relative">
<div className="absolute left-0 top-32 w-px h-full bg-gradient-to-b from-purple-500/0 via-purple-500/30 to-transparent hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-24 2xl:gap-32 relative z-10">

<div className="space-y-10 group">
<div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-rose-500/10 group-hover:border-rose-500/30 transition-all duration-500">
<iconify-icon className="text-4xl text-rose-400 group-hover:text-rose-300 transition-colors" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-4xl 2xl:text-5xl font-medium text-white tracking-tight">The Problem</h3>
<p className="text-xl 2xl:text-2xl font-light text-slate-400 leading-relaxed">
                        Fragmented marketplaces result in a disjointed user experience. High friction during checkout, slow load times, and cluttered, noisy interfaces consistently lead to cart abandonment and user frustration.
                    </p>
</div>

<div className="space-y-10 group">
<div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-purple-500/10 group-hover:border-purple-500/30 transition-all duration-500 glow-box">
<iconify-icon className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors" icon="solar:lightbulb-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-4xl 2xl:text-5xl font-medium text-white tracking-tight">The Solution</h3>
<p className="text-xl 2xl:text-2xl font-light text-slate-400 leading-relaxed">
                        NEXUS aggregates premium deals into a singular, lightning-fast platform. Utilizing a clean, dark-mode aesthetic with intuitive flows, an integrated wallet, and automated bundle savings to eliminate friction.
                    </p>
</div>

<div className="space-y-10 group">
<div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-emerald-500/10 group-hover:border-emerald-500/30 transition-all duration-500">
<iconify-icon className="text-4xl text-emerald-400 group-hover:text-emerald-300 transition-colors" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-4xl 2xl:text-5xl font-medium text-white tracking-tight">UX Thinking</h3>
<p className="text-xl 2xl:text-2xl font-light text-slate-400 leading-relaxed">
                        Every decision prioritized speed and clarity. By minimizing cognitive load on the product page and creating a one-click wallet checkout, we dramatically shortened the path from discovery to acquisition.
                    </p>
</div>
</div>
</section>

<section className="py-40 lg:py-64 bg-[#08080a] border-y border-white/[0.02] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none"></div>
<div className="mx-auto px-6 lg:px-24 2xl:px-40 space-y-40 relative z-10 max-w-[1980px]">
<div className="space-y-8 max-w-4xl">
<div className="text-sm font-medium tracking-widest text-purple-400 uppercase flex items-center gap-3">
<span className="w-8 h-px bg-purple-500/50"></span> Architecture &amp; Flow
                    </div>
<h2 className="text-6xl md:text-7xl 2xl:text-8xl font-medium text-white tracking-tighter">System Blueprint</h2>
<p className="text-2xl 2xl:text-3xl font-light text-slate-400 leading-relaxed">Mapping the frictionless path from discovery to acquisition, minimizing steps while maximizing engagement and clarity.</p>
</div>

<div className="space-y-16">
<h3 className="text-base font-medium tracking-widest text-slate-400 uppercase border-b border-white/10 pb-6">Core User Journey</h3>
<div className="grid grid-cols-1 md:grid-cols-6 gap-6 relative">

<div className="hidden md:block absolute top-1/2 left-12 right-12 h-[2px] flow-line -translate-y-1/2 z-0 opacity-50"></div>

<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-[#0c0c0e] border border-white/10 text-center space-y-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-slate-400" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Home</div>
</div>
<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-[#0c0c0e] border border-white/10 text-center space-y-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-slate-400" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Store</div>
</div>
<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-[#0c0c0e] border border-white/10 text-center space-y-5 shadow-2xl border-b-2 border-b-purple-500 hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-purple-400" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Product</div>
</div>
<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-purple-500/10 border border-purple-500/40 text-center space-y-5 glow-box transform scale-105">
<iconify-icon className="text-4xl text-purple-300" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Cart</div>
</div>
<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-[#0c0c0e] border border-white/10 text-center space-y-5 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-slate-400" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Checkout</div>
</div>
<div className="relative z-10 p-8 2xl:p-10 rounded-3xl bg-emerald-500/5 border border-emerald-500/20 text-center space-y-5 hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-4xl text-emerald-400" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-medium text-white">Confirm</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
<div className="p-10 2xl:p-12 rounded-3xl bg-white/[0.01] border border-dashed border-white/10 space-y-8 hover:bg-white/[0.02] transition-colors">
<h4 className="text-sm font-medium tracking-widest text-slate-500 uppercase flex items-center gap-2"><iconify-icon icon="solar:branching-paths-up-linear"></iconify-icon> Alternate: Wishlist Flow</h4>
<div className="flex items-center gap-5 text-base text-slate-400 flex-wrap">
<span className="px-6 py-3 rounded-xl bg-[#111115] border border-white/10 text-white shadow-lg">Product</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
<span className="px-6 py-3 rounded-xl bg-[#111115] border border-white/10 text-white shadow-lg">Wishlist</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
<span className="px-6 py-3 rounded-xl bg-[#111115] border border-white/10 text-white shadow-lg">Cart</span>
</div>
</div>
<div className="p-10 2xl:p-12 rounded-3xl bg-white/[0.01] border border-dashed border-white/10 space-y-8 hover:bg-white/[0.02] transition-colors">
<h4 className="text-sm font-medium tracking-widest text-slate-500 uppercase flex items-center gap-2"><iconify-icon icon="solar:flash-linear"></iconify-icon> Alternate: Instant Wallet</h4>
<div className="flex items-center gap-5 text-base text-slate-400 flex-wrap">
<span className="px-6 py-3 rounded-xl bg-[#111115] border border-white/10 text-white shadow-lg">Checkout</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
<span className="px-6 py-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 font-medium shadow-lg">Wallet Balance</span>
<iconify-icon className="text-xl text-emerald-500" icon="solar:arrow-right-linear"></iconify-icon>
<span className="text-emerald-400 font-medium">Instant Confirm</span>
</div>
</div>
</div>
</div>

<div className="space-y-16 pt-24 border-t border-white/5">
<h3 className="text-base font-medium tracking-widest text-slate-400 uppercase text-center mb-16">Platform Sitemap Structure</h3>
<div className="bg-[#0c0c0e] border border-white/10 rounded-[3rem] p-16 2xl:p-24 max-w-5xl mx-auto flex justify-center text-lg font-light font-mono text-slate-400 shadow-[0_0_80px_rgba(0,0,0,0.5)]">
<ul className="space-y-8 text-left w-full max-w-2xl relative">
<li className="flex items-center gap-4 text-white font-medium text-2xl group">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all"><iconify-icon icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon></div> Home
                            </li>
<li className="relative">
<div className="absolute left-[23px] top-[-24px] bottom-0 w-[2px] bg-white/10 tree-line"></div>
<ul className="pl-16 space-y-10">
<li className="relative group">
<div className="absolute left-[-41px] top-[18px] w-8 h-[2px] bg-white/10 tree-line"></div>
<span className="text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors text-xl">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-400 transition-colors" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon> Store / Browse
                                        </span>
<ul className="pl-12 space-y-6 pt-6 relative">
<div className="absolute left-[11px] top-[12px] bottom-0 w-[2px] bg-white/10 tree-line"></div>
<li className="relative flex items-center gap-3 hover:text-white transition-colors cursor-default">
<div className="absolute left-[-35px] top-[14px] w-6 h-[2px] bg-white/10 tree-line"></div>
                                                Categories
                                            </li>
<li className="relative flex items-center gap-3 hover:text-white transition-colors cursor-default">
<div className="absolute left-[-35px] top-[14px] w-6 h-[2px] bg-white/10 tree-line"></div>
                                                Filters &amp; Tags
                                            </li>
</ul>
</li>
<li className="relative group">
<div className="absolute left-[-41px] top-[18px] w-8 h-[2px] bg-white/10 tree-line"></div>
<span className="text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors text-xl">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-400 transition-colors" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon> Product Page
                                        </span>
</li>
<li className="relative group">
<div className="absolute left-[-41px] top-[18px] w-8 h-[2px] bg-white/10 tree-line"></div>
<span className="text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors text-xl">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-400 transition-colors" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon> Cart &amp; Checkout
                                        </span>
</li>
<li className="relative group">
<div className="absolute left-[-41px] top-[18px] w-8 h-[2px] bg-white/10 tree-line"></div>
<span className="text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors text-xl">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-400 transition-colors" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon> Economy Wallet
                                        </span>
</li>
<li className="relative group">
<div className="absolute left-[-41px] top-[18px] w-8 h-[2px] bg-white/10 tree-line"></div>
<span className="text-white flex items-center gap-3 group-hover:text-purple-300 transition-colors text-xl">
<iconify-icon className="text-2xl text-slate-500 group-hover:text-purple-400 transition-colors" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon> Profile
                                        </span>
<ul className="pl-12 space-y-6 pt-6 relative">
<div className="absolute left-[11px] top-[12px] bottom-[18px] w-[2px] bg-white/10 tree-line"></div>
<li className="relative flex items-center gap-3 hover:text-white transition-colors cursor-default">
<div className="absolute left-[-35px] top-[14px] w-6 h-[2px] bg-white/10 tree-line"></div>
                                                Order History
                                            </li>
<li className="relative flex items-center gap-3 hover:text-white transition-colors cursor-default">
<div className="absolute left-[-35px] top-[14px] w-6 h-[2px] bg-white/10 tree-line"></div>
                                                Wishlist &amp; Library
                                            </li>
</ul>
</li>
</ul>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-40 lg:py-64 px-4 md:px-12 lg:px-24 2xl:px-40 bg-[#050505]">
<div className="max-w-[1980px] mx-auto space-y-64 2xl:space-y-80">
<div className="text-center space-y-10 max-w-5xl mx-auto mb-40">
<div className="text-sm font-medium tracking-widest text-purple-400 uppercase">High-Fidelity UI</div>
<h2 className="text-6xl md:text-8xl 2xl:text-9xl font-medium text-white tracking-tighter">System Interface</h2>
<p className="text-3xl 2xl:text-4xl font-light text-slate-400 leading-snug">Screens demonstrating the complete user journey, focusing on clarity, visual hierarchy, and reducing cognitive load.</p>
</div>

<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-[4rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000 z-0"></div>
<div className="mb-16 flex items-end justify-between px-6 relative z-10">
<div className="space-y-6 max-w-4xl">
<h3 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white flex items-center gap-6">
<span className="text-purple-500 font-light opacity-50">01.</span> Home / Discovery
                            </h3>
<p className="text-slate-400 text-2xl 2xl:text-3xl font-light leading-relaxed">The entry point. Designed to instantly showcase high-value deals and personalized recommendations without clutter.</p>
</div>
</div>

<div className="bg-[#0a0a0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] relative z-10 group-hover:border-white/20 transition-colors duration-700 group-hover:shadow-[0_0_120px_rgba(139,92,246,0.15)]">

<div className="h-14 bg-[#0e0e11] border-b border-white/5 flex items-center px-8 gap-3">
<div className="w-4 h-4 rounded-full bg-white/10 hover:bg-rose-500 transition-colors"></div>
<div className="w-4 h-4 rounded-full bg-white/10 hover:bg-amber-500 transition-colors"></div>
<div className="w-4 h-4 rounded-full bg-white/10 hover:bg-emerald-500 transition-colors"></div>
</div>

<div className="h-[900px] overflow-y-auto hide-scroll bg-[#0a0a0c] relative">

<nav className="sticky top-0 z-50 glass-panel border-b border-white/5 px-12 py-6 flex items-center justify-between">
<div className="flex items-center gap-20">
<div className="text-3xl font-medium tracking-[0.2em] text-white">NEXUS</div>
<div className="hidden md:flex items-center gap-12 text-base font-medium">
<a className="text-white" href="#">Discover</a>
<a className="text-slate-400 hover:text-white transition" href="#">Browse Catalog</a>
<a className="text-slate-400 hover:text-white transition" href="#">Bundle Deals</a>
</div>
</div>
<div className="flex items-center gap-10">
<div className="relative hidden lg:block">
<iconify-icon className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-white/5 border border-white/10 rounded-full pl-14 pr-6 py-3 text-base text-white placeholder-slate-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all w-80" placeholder="Search titles, publishers..." type="text"/>
</div>
<div className="relative">
<iconify-icon className="text-3xl text-slate-300 hover:text-white cursor-pointer transition" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -top-1.5 -right-2 w-6 h-6 bg-purple-500 rounded-full text-xs font-medium flex items-center justify-center text-white shadow-lg shadow-purple-500/30">2</div>
</div>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-[#0a0a0c] outline outline-1 outline-white/10 cursor-pointer hover:scale-105 transition-transform"></div>
</div>
</nav>

<div className="relative w-full h-[600px] bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent flex items-center px-12 lg:px-24 overflow-hidden border-b border-white/5">
<img alt="Hero Background" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 z-[-1]" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/50 to-transparent z-[-1]"></div>
<div className="max-w-3xl space-y-10 z-10">
<div className="inline-flex items-center gap-3 px-5 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-sm font-medium text-purple-300 uppercase tracking-widest backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                                        World Premiere
                                    </div>
<h1 className="text-7xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.9]">
                                        ECLIPSE <br/> PROTOCOL
                                    </h1>
<p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                                        Infiltrate the megacorps in this critically acclaimed cyberpunk stealth action RPG. Available now with exclusive next-gen content.
                                    </p>
<div className="flex items-center gap-5 pt-4">
<button className="px-10 py-5 bg-white text-black font-medium rounded-2xl hover:bg-slate-200 transition-all btn-glow text-base shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                            Buy Now • $59.99
                                        </button>
<button className="px-10 py-5 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 transition-colors flex items-center gap-3 text-base">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon> Wishlist
                                        </button>
</div>
</div>
</div>

<div className="px-12 lg:px-24 py-20 space-y-12">
<div className="flex items-end justify-between border-b border-white/5 pb-8">
<h2 className="text-4xl font-medium text-white tracking-tight">Trending Deals</h2>
<a className="text-base font-medium text-purple-400 hover:text-purple-300 flex items-center gap-2 transition" href="#">Explore All Deals <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="group/card bg-[#111116] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/15 cursor-pointer flex flex-col">
<div className="h-64 bg-slate-800 relative overflow-hidden">
<img alt="Game" className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700 opacity-80" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-5 left-5 px-3 py-1.5 bg-emerald-500 text-black text-sm font-medium tracking-wide rounded-md shadow-lg">-20%</div>
</div>
<div className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111116] to-[#0a0a0c]">
<div>
<div className="text-sm font-medium tracking-widest text-slate-500 mb-3 uppercase">Action RPG</div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-snug">Neon Vanguard</h3>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5 mt-4">
<div className="flex items-center gap-4">
<span className="text-base font-light text-slate-500 line-through">$49.99</span>
<span className="text-2xl font-medium text-white">$39.99</span>
</div>
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover/card:bg-purple-500 group-hover/card:border-purple-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300 text-slate-300 shadow-lg">
<iconify-icon className="text-2xl" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group/card bg-[#111116] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/15 cursor-pointer flex flex-col">
<div className="h-64 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900 group-hover/card:scale-110 transition-transform duration-700"></div>
</div>
<div className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111116] to-[#0a0a0c]">
<div>
<div className="text-sm font-medium tracking-widest text-slate-500 mb-3 uppercase">Grand Strategy</div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-snug">Stellar Command</h3>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5 mt-4">
<span className="text-2xl font-medium text-white">$29.99</span>
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover/card:bg-purple-500 group-hover/card:border-purple-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300 text-slate-300 shadow-lg">
<iconify-icon className="text-2xl" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group/card bg-[#111116] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/15 cursor-pointer flex flex-col">
<div className="h-64 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-900/80 to-slate-900 group-hover/card:scale-110 transition-transform duration-700"></div>
<div className="absolute top-5 left-5 px-3 py-1.5 bg-emerald-500 text-black text-sm font-medium tracking-wide rounded-md shadow-lg">-50%</div>
</div>
<div className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111116] to-[#0a0a0c]">
<div>
<div className="text-sm font-medium tracking-widest text-slate-500 mb-3 uppercase">Horror Survival</div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-snug">Dead Silence</h3>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5 mt-4">
<div className="flex items-center gap-4">
<span className="text-base font-light text-slate-500 line-through">$39.99</span>
<span className="text-2xl font-medium text-white">$19.99</span>
</div>
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover/card:bg-purple-500 group-hover/card:border-purple-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300 text-slate-300 shadow-lg">
<iconify-icon className="text-2xl" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group/card bg-[#111116] border border-white/5 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/15 cursor-pointer flex flex-col">
<div className="h-64 bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-slate-900 group-hover/card:scale-110 transition-transform duration-700"></div>
</div>
<div className="p-8 space-y-5 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#111116] to-[#0a0a0c]">
<div>
<div className="text-sm font-medium tracking-widest text-slate-500 mb-3 uppercase">Indie Platformer</div>
<h3 className="text-2xl font-medium text-white tracking-tight leading-snug">Aether Drift</h3>
</div>
<div className="flex items-center justify-between pt-8 border-t border-white/5 mt-4">
<span className="text-2xl font-medium text-white">$14.99</span>
<button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 group-hover/card:bg-purple-500 group-hover/card:border-purple-500 group-hover/card:text-white flex items-center justify-center transition-all duration-300 text-slate-300 shadow-lg">
<iconify-icon className="text-2xl" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-20 relative z-10">
<div className="rounded-[4rem] bg-gradient-to-br from-purple-900/20 to-[#0a0a0c] border border-purple-500/30 p-20 lg:p-32 text-center space-y-12 relative overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.1)] hover:shadow-[0_0_150px_rgba(139,92,246,0.2)] transition-shadow duration-700">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.2),_transparent_60%)]"></div>
<div className="w-24 h-24 mx-auto bg-purple-500/20 border border-purple-500/40 rounded-3xl flex items-center justify-center relative z-10 glow-box">
<iconify-icon className="text-5xl text-purple-300" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="relative z-10 space-y-8">
<h2 className="text-5xl md:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white">Smart Bundle Algorithms</h2>
<p className="text-2xl 2xl:text-3xl text-purple-200/70 font-light max-w-4xl mx-auto leading-relaxed">
                                NEXUS automatically detects when items in your cart belong to a publisher bundle and dynamically applies the maximum discount. Less searching, more saving.
                            </p>
</div>
</div>
</div>

<div className="relative group">
<div className="mb-16 flex items-end justify-between px-6 relative z-10">
<div className="space-y-6 max-w-4xl">
<h3 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white flex items-center gap-6">
<span className="text-purple-500 font-light opacity-50">02.</span> Catalog &amp; Filtering
                            </h3>
<p className="text-slate-400 text-2xl 2xl:text-3xl font-light leading-relaxed">Robust, instantaneous filtering system utilizing custom UI components for quick discovery without page reloads.</p>
</div>
</div>
<div className="bg-[#0a0a0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] relative group-hover:border-white/20 transition-colors duration-700 group-hover:shadow-[0_0_120px_rgba(139,92,246,0.15)]">
<div className="h-14 bg-[#0e0e11] border-b border-white/5 flex items-center px-8 gap-3">
<div className="w-4 h-4 rounded-full bg-white/10"></div>
<div className="w-4 h-4 rounded-full bg-white/10"></div>
<div className="w-4 h-4 rounded-full bg-white/10"></div>
<div className="ml-8 flex-1 flex justify-center">
<div className="w-[400px] h-8 bg-white/5 border border-white/10 rounded-md flex items-center justify-center text-xs text-slate-500 font-mono tracking-widest shadow-inner">nexus.gg/store/catalog</div>
</div>
</div>
<div className="h-[800px] flex bg-[#0a0a0c]">

<aside className="w-80 border-r border-white/5 p-10 space-y-12 overflow-y-auto hide-scroll shrink-0 bg-[#0a0a0c]/50">
<div className="space-y-6">
<h4 className="text-sm font-medium tracking-widest text-slate-500 uppercase">Price Range</h4>

<div className="space-y-5">
<div className="h-2 w-full bg-white/10 rounded-full relative">
<div className="absolute left-0 right-1/4 h-full bg-purple-500 rounded-full glow-box"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow cursor-pointer transition-transform hover:scale-125"></div>
<div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-purple-500 rounded-full shadow cursor-pointer transition-transform hover:scale-125"></div>
</div>
<div className="flex justify-between text-base font-medium text-slate-400">
<span>$0</span>
<span className="text-white">$75</span>
</div>
</div>
</div>
<div className="space-y-6">
<h4 className="text-sm font-medium tracking-widest text-slate-500 uppercase">Genre</h4>
<div className="space-y-5 text-base font-light text-slate-300">
<label className="flex items-center gap-4 cursor-pointer group/label">
<input checked="" type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Action</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group/label">
<input checked="" type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">RPG</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group/label">
<input type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Strategy</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group/label">
<input type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Shooter</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group/label">
<input type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Indie</span>
</label>
</div>
</div>
<div className="space-y-6">
<h4 className="text-sm font-medium tracking-widest text-slate-500 uppercase">Platform</h4>
<div className="space-y-5 text-base font-light text-slate-300">
<label className="flex items-center gap-4 cursor-pointer group/label">
<input checked="" type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Windows</span>
</label>
<label className="flex items-center gap-4 cursor-pointer group/label">
<input type="checkbox"/>
<span className="group-hover/label:text-white transition-colors">Mac</span>
</label>
</div>
</div>
</aside>

<div className="flex-1 p-12 overflow-y-auto hide-scroll">
<div className="flex items-center justify-between mb-12 pb-8 border-b border-white/5">
<div className="text-xl font-light text-slate-400">Showing 124 results for <span className="text-white font-medium">"Action RPG"</span></div>

<div className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-base font-medium text-white cursor-pointer hover:bg-white/10 transition shadow-sm">
<span>Sort by: Relevance</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
<div className="h-80 bg-[#111116] border border-white/5 rounded-3xl flex flex-col p-5 opacity-80 hover:opacity-100 transition hover:-translate-y-1 hover:border-white/20 cursor-default">
<div className="flex-1 bg-slate-800 rounded-2xl mb-5 relative overflow-hidden"><div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div></div>
<div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="h-5 w-1/4 bg-white/5 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="mb-16 flex items-end justify-between px-6 relative z-10">
<div className="space-y-6 max-w-4xl">
<h3 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white flex items-center gap-6">
<span className="text-purple-500 font-light opacity-50">03.</span> Product Detail View
                            </h3>
<p className="text-slate-400 text-2xl 2xl:text-3xl font-light leading-relaxed">Immersive full-bleed imagery combined with a persistent, glassmorphic purchase container for immediate action.</p>
</div>
</div>
<div className="bg-[#0a0a0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] relative group-hover:border-white/20 transition-colors duration-700 group-hover:shadow-[0_0_120px_rgba(139,92,246,0.15)]">
<div className="h-[950px] overflow-y-auto hide-scroll relative">

<div className="absolute inset-x-0 top-0 h-[750px] bg-gradient-to-b from-[#0a0a0c]/0 via-[#0a0a0c]/80 to-[#0a0a0c] z-0 pointer-events-none"></div>
<img alt="Game Detail" className="absolute inset-x-0 top-0 h-[750px] w-full object-cover opacity-20 z-[-1]" src="https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&amp;w=2019&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 px-12 lg:px-24 pt-64 pb-24 flex flex-col lg:flex-row gap-20">

<div className="flex-1 space-y-12">
<div className="space-y-8">
<div className="flex gap-4">
<span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium tracking-wide text-white backdrop-blur-md">Action RPG</span>
<span className="px-4 py-2 bg-white/10 rounded-lg text-sm font-medium tracking-wide text-white backdrop-blur-md">Singleplayer</span>
</div>
<h1 className="text-7xl lg:text-8xl 2xl:text-9xl font-medium tracking-tighter text-white">Shadow Protocol</h1>
<p className="text-2xl font-light text-slate-300 leading-relaxed max-w-3xl">
                                            Dive into a dystopian future where every choice matters. Master stealth, upgrade your cybernetics, and unravel a conspiracy that threatens the very fabric of society in this award-winning RPG.
                                        </p>
</div>

<div className="space-y-6 pt-10 border-t border-white/5">
<h3 className="text-2xl font-medium text-white tracking-tight">Media &amp; Gameplay</h3>
<div className="flex gap-8 overflow-x-hidden">
<div className="w-80 h-48 bg-black/50 border border-white/10 rounded-3xl shrink-0 flex items-center justify-center relative group/vid cursor-pointer overflow-hidden">
<div className="absolute inset-0 bg-slate-800 opacity-50 group-hover/vid:scale-110 transition-transform duration-700"></div>
<iconify-icon className="text-6xl text-white opacity-80 group-hover/vid:opacity-100 group-hover/vid:scale-110 transition-all relative z-10" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="w-80 h-48 bg-slate-800/40 border border-white/10 rounded-3xl shrink-0 hover:border-white/30 transition-colors"></div>
<div className="w-80 h-48 bg-slate-800/40 border border-white/10 rounded-3xl shrink-0 hover:border-white/30 transition-colors"></div>
</div>
</div>
<div className="space-y-6 pt-10 max-w-3xl">
<h3 className="text-2xl font-medium text-white tracking-tight">System Requirements</h3>
<div className="grid grid-cols-2 gap-8 text-base font-light">
<div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:bg-white/[0.04] transition-colors">
<div className="text-slate-500 font-medium tracking-widest uppercase text-sm mb-5">Minimum</div>
<div className="text-slate-300 space-y-3">
<p><span className="text-slate-500">OS:</span> Windows 10 64-bit</p>
<p><span className="text-slate-500">CPU:</span> Intel Core i5</p>
<p><span className="text-slate-500">RAM:</span> 8 GB</p>
<p><span className="text-slate-500">GPU:</span> GTX 1060</p>
</div>
</div>
<div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl space-y-4 hover:bg-white/[0.04] transition-colors">
<div className="text-purple-400 font-medium tracking-widest uppercase text-sm mb-5">Recommended</div>
<div className="text-slate-300 space-y-3">
<p><span className="text-slate-500">OS:</span> Windows 11 64-bit</p>
<p><span className="text-slate-500">CPU:</span> Intel Core i7</p>
<p><span className="text-slate-500">RAM:</span> 16 GB</p>
<p><span className="text-slate-500">GPU:</span> RTX 3070</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[480px] shrink-0 relative">
<div className="sticky top-16 glass-panel rounded-[2.5rem] p-10 space-y-10 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">

<div className="space-y-5">
<div className="p-6 rounded-3xl bg-purple-500/10 border border-purple-500/40 cursor-pointer flex justify-between items-center relative overflow-hidden group/ed shadow-[0_0_30px_rgba(139,92,246,0.1)]">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-50 group-hover/ed:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="text-white font-medium text-lg">Standard Edition</div>
<div className="text-sm font-light text-purple-300 mt-2">Base Game Experience</div>
</div>
<div className="text-white font-medium text-2xl relative z-10">$59.99</div>
</div>
<div className="p-6 rounded-3xl bg-white/5 border border-white/10 cursor-pointer flex justify-between items-center hover:bg-white/10 transition-colors">
<div>
<div className="text-white font-medium text-lg">Deluxe Edition</div>
<div className="text-sm font-light text-slate-400 mt-2">Game + Season Pass + Artbook</div>
</div>
<div className="text-white font-medium text-2xl">$89.99</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 space-y-5">
<button className="w-full py-6 bg-white text-black font-medium text-lg rounded-2xl hover:bg-slate-200 transition-colors btn-glow shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                                Add to Cart
                                            </button>
<button className="w-full py-6 bg-white/5 border border-white/10 text-white font-medium text-lg rounded-2xl hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
<iconify-icon className="text-xl" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon> Add to Wishlist
                                            </button>
</div>
<div className="flex justify-between items-center text-base font-light text-slate-400 pt-4 px-2">
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-xl" icon="solar:shield-check-linear"></iconify-icon> Secure Checkout</div>
<div className="flex items-center gap-2"><iconify-icon className="text-purple-400 text-xl" icon="solar:refresh-linear"></iconify-icon> 14-day Refund</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-20 relative z-10">
<div className="rounded-[4rem] bg-gradient-to-br from-[#111115] to-[#0a0a0c] border border-white/10 p-20 lg:p-32 text-center space-y-12 relative overflow-hidden flex flex-col items-center shadow-[0_0_100px_rgba(16,185,129,0.05)] hover:shadow-[0_0_150px_rgba(16,185,129,0.1)] transition-shadow duration-700">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(16,185,129,0.05),_transparent_60%)]"></div>
<div className="flex items-center justify-center gap-6 mb-6 relative z-10">
<div className="w-16 h-16 rounded-full bg-[#16161a] border border-white/10 flex items-center justify-center text-slate-400 text-2xl shadow-lg"><iconify-icon icon="solar:cart-large-linear"></iconify-icon></div>
<div className="w-16 h-[2px] bg-gradient-to-r from-white/10 to-emerald-500/50 flow-line"></div>
<div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)]"><iconify-icon icon="solar:check-read-linear"></iconify-icon></div>
</div>
<div className="relative z-10 space-y-8 max-w-4xl mx-auto">
<h2 className="text-5xl md:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white">Zero-Friction Checkout</h2>
<p className="text-2xl 2xl:text-3xl text-slate-400 font-light leading-relaxed">
                                A single-page application flow combining cart review and payment. No hidden fees, no unnecessary steps—just immediate access to your games.
                            </p>
</div>
</div>
</div>

<div className="relative group">
<div className="mb-16 flex items-end justify-between px-6 relative z-10">
<div className="space-y-6 max-w-4xl">
<h3 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white flex items-center gap-6">
<span className="text-purple-500 font-light opacity-50">04.</span> Streamlined Cart
                            </h3>
<p className="text-slate-400 text-2xl 2xl:text-3xl font-light leading-relaxed">Combining cart review and payment to drastically reduce abandonment rates. Clear totals and instant wallet usage.</p>
</div>
</div>
<div className="bg-[#0a0a0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] relative p-12 lg:p-20 group-hover:border-white/20 transition-colors duration-700 group-hover:shadow-[0_0_120px_rgba(139,92,246,0.15)]">
<div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

<div className="flex-1 space-y-12">
<h2 className="text-4xl 2xl:text-5xl font-medium text-white tracking-tight border-b border-white/5 pb-8">Your Cart <span className="text-slate-500 text-2xl font-light ml-3">(2 Items)</span></h2>
<div className="space-y-8">

<div className="flex gap-8 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div className="w-32 h-44 bg-slate-800 rounded-2xl shrink-0 opacity-80"></div>
<div className="flex-1 flex flex-col justify-between py-3">
<div className="flex justify-between items-start">
<div className="space-y-2">
<h3 className="text-2xl text-white font-medium tracking-tight">Shadow Protocol</h3>
<div className="text-base font-light text-slate-500">Standard Edition</div>
</div>
<button className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10 transition-all"><iconify-icon className="text-2xl" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="text-3xl font-medium text-white">$59.99</div>
</div>
</div>

<div className="flex gap-8 p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<div className="w-32 h-44 bg-slate-800 rounded-2xl shrink-0 opacity-80"></div>
<div className="flex-1 flex flex-col justify-between py-3">
<div className="flex justify-between items-start">
<div className="space-y-2">
<h3 className="text-2xl text-white font-medium tracking-tight">Neon Vanguard</h3>
<div className="text-base font-light text-slate-500">Deluxe Edition</div>
</div>
<button className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-slate-500 hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/10 transition-all"><iconify-icon className="text-2xl" icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
<div className="flex items-center gap-4">
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium uppercase tracking-wide rounded-md">-20%</span>
<span className="text-3xl font-medium text-white">$39.99</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[500px] shrink-0 space-y-10">
<div className="p-10 rounded-[2.5rem] bg-[#111116] border border-white/5 space-y-10 shadow-2xl">
<h3 className="text-2xl font-medium text-white">Order Summary</h3>
<div className="space-y-6 text-lg font-light">
<div className="flex justify-between text-slate-400">
<span>Subtotal</span>
<span className="text-white font-medium">$109.98</span>
</div>
<div className="flex justify-between text-emerald-400">
<span>Bundle Discount</span>
<span className="font-medium">-$10.00</span>
</div>
<div className="flex justify-between text-slate-400">
<span>Taxes</span>
<span className="text-white font-medium">Calculated next</span>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex justify-between items-center">
<span className="text-white font-medium text-xl">Total</span>
<span className="text-5xl font-medium tracking-tighter text-white">$99.98</span>
</div>
<div className="pt-10 space-y-6">
<h4 className="text-base font-medium tracking-widest text-slate-500 uppercase">Payment Method</h4>
<div className="grid grid-cols-2 gap-5">
<div className="p-5 border border-purple-500 bg-purple-500/10 rounded-2xl flex items-center justify-center gap-3 cursor-pointer text-lg text-white font-medium transition-all shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:-translate-y-1">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon> Wallet
                                            </div>
<div className="p-5 border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer text-lg text-slate-400 hover:text-white hover:bg-white/10 transition-all hover:-translate-y-1">
<iconify-icon className="text-2xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon> Card
                                            </div>
</div>

<div className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-start gap-4 mt-6">
<iconify-icon className="text-blue-400 text-2xl shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-base font-light text-blue-200/80 leading-relaxed">
                                                Your current wallet balance is <strong className="text-white font-medium">$150.00</strong>. This purchase will be instantly deducted without requiring card verification.
                                            </div>
</div>
</div>
<div className="pt-6">
<button className="w-full py-6 bg-purple-600 hover:bg-purple-500 text-white font-medium text-xl rounded-2xl transition-all shadow-[0_0_40px_rgba(147,51,234,0.3)] flex items-center justify-center gap-3 hover:-translate-y-1">
                                            Confirm &amp; Pay <iconify-icon className="text-2xl" icon="solar:lock-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">
<div className="mb-16 flex items-end justify-between px-6 relative z-10">
<div className="space-y-6 max-w-4xl">
<h3 className="text-5xl lg:text-6xl 2xl:text-7xl font-medium tracking-tighter text-white flex items-center gap-6">
<span className="text-purple-500 font-light opacity-50">05.</span> Wallet Economy
                            </h3>
<p className="text-slate-400 text-2xl 2xl:text-3xl font-light leading-relaxed">A dedicated dashboard for managing funds, viewing history, and redeeming codes, establishing trust and retention.</p>
</div>
</div>
<div className="bg-[#0a0a0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] p-12 lg:p-20 h-[850px] flex flex-col group-hover:border-white/20 transition-colors duration-700 group-hover:shadow-[0_0_120px_rgba(139,92,246,0.15)]">
<div className="flex items-center gap-6 mb-16">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-[2px] shadow-[0_0_30px_rgba(139,92,246,0.2)]">
<div className="w-full h-full bg-[#0a0a0c] rounded-full flex items-center justify-center">
<iconify-icon className="text-3xl text-white" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div>
<h2 className="text-4xl font-medium text-white tracking-tight">AlexMercer99</h2>
<div className="text-lg font-light text-slate-500 mt-2">NEXUS Member since 2023</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-16 flex-1">

<div className="w-full lg:w-[450px] shrink-0">
<div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-purple-900/40 to-[#0a0a0c] border border-purple-500/20 relative overflow-hidden h-full flex flex-col justify-between shadow-2xl hover:shadow-[0_0_50px_rgba(139,92,246,0.15)] transition-shadow">

<div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-purple-300 text-base font-medium tracking-widest uppercase flex items-center gap-3 mb-6">
<iconify-icon className="text-3xl" icon="solar:wallet-bold-duotone"></iconify-icon> Available Balance
                                        </div>
<div className="text-7xl font-medium tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">$150.00</div>
</div>
<div className="space-y-5 relative z-10 pt-16">
<button className="w-full py-5 bg-white text-black font-medium rounded-2xl hover:bg-slate-200 transition-colors btn-glow text-lg">
                                            Add Funds
                                        </button>
<button className="w-full py-5 bg-white/5 border border-white/10 text-white font-medium rounded-2xl hover:bg-white/10 transition-colors text-lg">
                                            Redeem Code
                                        </button>
</div>
</div>
</div>

<div className="flex-1 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12 flex flex-col hover:bg-white/[0.03] transition-colors">
<h3 className="text-2xl font-medium text-white mb-10 border-b border-white/5 pb-6">Recent Activity</h3>
<div className="space-y-4 overflow-y-auto hide-scroll flex-1 pr-4">

<div className="flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-colors group/tx cursor-default">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20 group-hover/tx:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="text-xl font-medium text-white">Purchase: Dead Silence</div>
<div className="text-base font-light text-slate-500">Oct 24, 2023 • Store</div>
</div>
</div>
<div className="text-2xl font-medium text-white group-hover/tx:text-rose-400 transition-colors">-$19.99</div>
</div>

<div className="flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-colors group/tx cursor-default">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover/tx:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:wallet-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="text-xl font-medium text-white">Added Funds</div>
<div className="text-base font-light text-slate-500">Oct 20, 2023 • Credit Card ending in 4242</div>
</div>
</div>
<div className="text-2xl font-medium text-emerald-400">+$50.00</div>
</div>

<div className="flex items-center justify-between p-6 rounded-2xl hover:bg-white/5 transition-colors group/tx cursor-default">
<div className="flex items-center gap-6">
<div className="w-14 h-14 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20 group-hover/tx:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="space-y-1.5">
<div className="text-xl font-medium text-white">Purchase: Cyberpunk DLC</div>
<div className="text-base font-light text-slate-500">Sep 15, 2023 • Store</div>
</div>
</div>
<div className="text-2xl font-medium text-white group-hover/tx:text-rose-400 transition-colors">-$29.99</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-64 lg:py-80 px-6 lg:px-24 border-t border-white/5 flex flex-col items-center justify-center text-center space-y-12 bg-[#08080a] relative overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none"></div>
<h2 className="text-6xl md:text-8xl 2xl:text-9xl font-medium tracking-tighter text-white glow-text relative z-10">The Result</h2>
<p className="text-3xl 2xl:text-4xl font-light text-slate-400 max-w-4xl leading-relaxed relative z-10">
                NEXUS provides a cohesive, premium environment that respects the user's time. By prioritizing performance, visual clarity, and seamless transactions, it redefines expectations for digital game storefronts.
            </p>
<div className="pt-24 pb-40 relative z-10">
<a className="px-12 py-6 bg-white/10 hover:bg-white/20 text-white font-medium rounded-full transition-all border border-white/10 hover:border-white/30 flex items-center gap-4 text-xl backdrop-blur-md hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]" href="#">
                    Back to Portfolio <iconify-icon icon="solar:arrow-up-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="text-base text-slate-600 font-medium tracking-widest uppercase relative z-10">
                © 2024 Product Design Case Study
            </div>
</footer>
</main>

    </>
  );
}
