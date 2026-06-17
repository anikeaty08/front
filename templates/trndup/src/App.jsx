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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
</a><a className="inline-flex items-center justify-center bg-center w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de51dade-8f00-4ed4-a16b-6b5d0a91993d_320w.jpg)] bg-contain rounded-none" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#brands">For Brands</a>
<a className="hover:text-white transition-colors" href="#creators">For Creators</a>
<a className="hover:text-white transition-colors" href="#ai">Intelligence</a>
<a className="hover:text-white transition-colors" href="#market">Market</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#waitlist">
                    Get Early Access
                </a>
</div>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-glow pointer-events-none z-0"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Introducing the future of creator intelligence
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                The AI-Native OS for <br/>
<span className="gradient-text">Influencer Marketing</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Connect with the right creators, predict ROI, and automate campaigns. 
                TrndUp bridges the gap between data-driven brands and the world's top creative talent.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-indigo-50 transition-all flex items-center justify-center gap-2">
                    I'm a Brand
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 glass-panel text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    I'm a Creator
                    <svg className="lucide lucide-sparkles w-4 h-4 text-indigo-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>

<div className="mt-20 relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-transparent to-transparent z-10 h-full"></div>
<div className="border border-white/10 rounded-xl bg-slate-900/50 backdrop-blur overflow-hidden max-w-4xl mx-auto shadow-2xl shadow-indigo-500/10">
<div className="flex items-center border-b border-white/5 px-4 py-3 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-80">
<div className="bg-white/5 p-4 rounded-lg border border-white/5 h-32 w-full animate-pulse"></div>
<div className="bg-white/5 p-4 rounded-lg border border-white/5 h-32 w-full animate-pulse delay-100"></div>
<div className="bg-white/5 p-4 rounded-lg border border-white/5 h-32 w-full animate-pulse delay-200"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-slate-500 mb-6 font-medium">TRUSTED BY NEXT-GEN BRANDS</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><svg className="lucide lucide-hexagon w-6 h-6" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg><span className="font-semibold text-lg">Acme Corp</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-triangle w-6 h-6" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg><span className="font-semibold text-lg">Vertex</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-circle w-6 h-6" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg><span className="font-semibold text-lg">Orbit</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-square w-6 h-6" data-lucide="square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg><span className="font-semibold text-lg">Catalog</span></div>
<div className="flex items-center gap-2"><svg className="lucide lucide-box w-6 h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg><span className="font-semibold text-lg">Spherule</span></div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Matchmaking, solved by Intelligence.</h2>
<p className="text-lg text-slate-400 leading-relaxed">
                TrndUp isn't just a database. It's a living ecosystem that helps brands find the perfect voice for their product using intelligent matchmaking, while giving influencers the professional tools they need to monetize their passion.
            </p>
</div>
</section>

<section className="py-12 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group" id="brands">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">For Brands</h3>
</div>
<p className="text-slate-400 mb-8 text-lg">Stop guessing. Launch performance-based campaigns with verified data and predictable ROI.</p>
<ul className="space-y-6">
<li className="flex gap-4">
<svg className="lucide lucide-scan-search w-6 h-6 text-indigo-400 shrink-0" data-lucide="scan-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16-1.9-1.9"></path></svg>
<div>
<h4 className="text-white font-medium">AI-Powered Discovery</h4>
<p className="text-sm text-slate-500 mt-1">Find verified influencers instantly using deep-learning relevance scores.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-shield-check w-6 h-6 text-indigo-400 shrink-0" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<h4 className="text-white font-medium">Fraud Detection</h4>
<p className="text-sm text-slate-500 mt-1">Automatically detect fake followers, bot activity, and engagement farming.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-indigo-400 shrink-0" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<div>
<h4 className="text-white font-medium">Predictive ROI</h4>
<p className="text-sm text-slate-500 mt-1">Forecast campaign outcomes before you sign the contract.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-layout-dashboard w-6 h-6 text-indigo-400 shrink-0" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<div>
<h4 className="text-white font-medium">Unified Dashboard</h4>
<p className="text-sm text-slate-500 mt-1">Manage contracts, payments, and real-time analytics in one view.</p>
</div>
</li>
</ul>
</div>

<div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group" id="creators">
<div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-3 mb-8">
<div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
<svg className="lucide lucide-camera w-6 h-6" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">For Creators</h3>
</div>
<p className="text-slate-400 mb-8 text-lg">Turn your audience into a business. Get discovered by top brands and manage your deals professionally.</p>
<ul className="space-y-6">
<li className="flex gap-4">
<svg className="lucide lucide-zap w-6 h-6 text-pink-400 shrink-0" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<div>
<h4 className="text-white font-medium">Inbound Opportunities</h4>
<p className="text-sm text-slate-500 mt-1">Get discovered by brands looking for exactly your niche and style.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-trending-up w-6 h-6 text-pink-400 shrink-0" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<div>
<h4 className="text-white font-medium">Growth Analytics</h4>
<p className="text-sm text-slate-500 mt-1">Use built-in AI tools to analyze your audience and optimize content.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-file-check w-6 h-6 text-pink-400 shrink-0" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<div>
<h4 className="text-white font-medium">Deal Management</h4>
<p className="text-sm text-slate-500 mt-1">Handle contracts, deliverables, and secure payments effortlessly.</p>
</div>
</li>
<li className="flex gap-4">
<svg className="lucide lucide-wallet w-6 h-6 text-pink-400 shrink-0" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
<div>
<h4 className="text-white font-medium">Affiliate Income</h4>
<p className="text-sm text-slate-500 mt-1">Instant access to high-converting affiliate programs.</p>
</div>
</li>
</ul>
</div>
</section>

<section className="py-24 bg-black" id="ai">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Powered by Native AI</h2>
<p className="text-slate-400 text-lg">Technology that works harder so you don't have to.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 glass-panel p-8 rounded-2xl flex flex-col justify-between min-h-[300px] group border-l-4 border-l-indigo-500 hover:bg-white/[0.04] transition-colors">
<div className="">
<div className="flex items-center gap-2 mb-4 text-indigo-400">
<svg className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
<span className="text-xs font-semibold uppercase tracking-wider">Prediction Engine</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Trend Forecasting</h3>
<p className="text-slate-400 max-w-md">Our AI analyzes millions of data points to predict viral trends before they peak, giving brands and creators a first-mover advantage.</p>
</div>

<div className="mt-8 flex gap-2">
<div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4"></div>
</div>
</div>
</div>

<div className="col-span-1 glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
<svg className="lucide lucide-bot w-8 h-8 text-white mb-6" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<h3 className="text-xl font-semibold text-white mb-2">Campaign Chatbots</h3>
<p className="text-sm text-slate-400">Automated workflows negotiate rates, schedule posts, and remind creators of deadlines.</p>
</div>

<div className="col-span-1 glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors">
<svg className="lucide lucide-fingerprint w-8 h-8 text-white mb-6" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
<h3 className="text-xl font-semibold text-white mb-2">Identity Verification</h3>
<p className="text-sm text-slate-400">Deep scanning ensures you aren't paying for bot farms. Real influence only.</p>
</div>

<div className="col-span-1 md:col-span-2 glass-panel p-8 rounded-2xl flex items-center justify-between group hover:bg-white/[0.04] transition-colors">
<div>
<div className="flex items-center gap-2 mb-4 text-green-400">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-semibold uppercase tracking-wider">Smart Matching</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2">Brand Fit Scoring</h3>
<p className="text-slate-400 max-w-lg">We score every creator against your brand values, aesthetics, and audience demographics.</p>
</div>
<div className="hidden sm:block text-5xl font-semibold text-white/10">98%</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative overflow-hidden" id="market">
<div className="absolute inset-0 opacity-[0.03] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/887effd3-2b6a-418a-a22c-85bc8f4c1c87_3840w.jpg)] bg-cover bg-center" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-16">The Creator Economy is Booming</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-center">
<span className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">$32.5B</span>
<p className="text-sm text-indigo-400 font-medium uppercase tracking-wider mb-2">Market Size</p>
<p className="text-slate-400 text-sm">Projected industry value by 2027.</p>
</div>
<div className="flex flex-col items-center">
<span className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">100M+</span>
<p className="text-sm text-indigo-400 font-medium uppercase tracking-wider mb-2">Creators in India</p>
<p className="text-slate-400 text-sm">A massive, untapped talent pool ready for discovery.</p>
</div>
<div className="flex flex-col items-center">
<span className="text-5xl md:text-6xl font-semibold text-white mb-4 tracking-tight">ROI</span>
<p className="text-sm text-indigo-400 font-medium uppercase tracking-wider mb-2">Performance First</p>
<p className="text-slate-400 text-sm">Moving from vanity metrics to tangible business results.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="waitlist">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Join the future of influence.</h2>
<p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                We are currently onboarding select brands and creators. Request early access to secure your spot.
            </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black font-semibold px-8 py-3.5 rounded-full hover:bg-slate-200 transition-colors whitespace-nowrap" type="submit">
                    Join Waitlist
                </button>
</form>
<p className="text-xs text-slate-600 mt-4">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold tracking-tight text-white">TrndUp</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-slate-600">© 2024 TrndUp Inc. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
