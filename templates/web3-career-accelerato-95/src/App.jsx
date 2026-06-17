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
      

<div className="fixed inset-0 z-[-1] bg-grid h-[100vh] pointer-events-none"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#6487EF]/10 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-bold text-xs">M</div>
<span className="text-sm font-medium text-white tracking-tight">Mighty</span>
</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Curriculum</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">How it works</a>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#6487EF]/30 bg-[#6487EF]/10 text-[#6487EF] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6487EF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6487EF]"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase">New Cohort Open</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                    Start your web3 career with the only course you'll <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6487EF] to-indigo-400">ever need.</span>
</h1>
<p className="lg:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-xl mb-10">
                    Never abandon a course again. Deposit money → complete the course → get 100% of your money back.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="h-12 px-8 rounded-full bg-[#6487EF] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#5373d6] transition-all shadow-[0_0_20px_-5px_rgba(100,135,239,0.5)]">
                        Start Learning
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium text-sm flex items-center justify-center hover:bg-white/10 transition-all">
                        View Curriculum
                    </button>
</div>
<div className="mt-8 flex items-center gap-4 text-xs text-zinc-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-[#030303] bg-zinc-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-[#030303] bg-zinc-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-[#030303] bg-zinc-500"></div>
</div>
<p>Joined by 2,400+ students</p>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#6487EF]/20 to-purple-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="relative glass-card rounded-2xl p-2 shadow-2xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer">

<div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors z-10 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-white ml-1 iconify--lucide" data-icon="lucide:play" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="w-full h-full bg-[#0A0A0A] relative overflow-hidden">
<div className="absolute top-4 left-4 right-4 h-32 bg-zinc-800/50 rounded-lg animate-pulse"></div>
<div className="absolute top-40 left-4 w-1/2 h-4 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="absolute top-48 left-4 w-3/4 h-4 bg-zinc-800/50 rounded animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-[#6487EF]/20 blur-[80px]"></div>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-zinc-500 font-medium uppercase tracking-widest mb-8">Graduates hired by</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> POLYGON</div>
<div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:box" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> UNISWAP</div>
<div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg> OPENSEA</div>
<div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg> AAVE</div>
<div className="flex items-center gap-2 font-semibold text-lg tracking-tight text-white"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dollar-sign" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8m4 2V6"></path></g></svg> COINBASE</div>
</div>
</div>
</div>

<section className="py-24 px-6 relative">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Deposit Money. Complete the course &amp; get it back!</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">
                    You Didn't Quit Because It Was Hard. You Quit Because You Could.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-12">

<div className="glass-card rounded-2xl p-8 md:p-10 border-red-500/10 hover:border-red-500/20 transition-colors group">
<h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:graduation-cap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
                        Traditional Learning
                    </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-red-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span>No consequences for quitting</span>
</li>
<li className="flex items-start gap-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-red-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span>No accountability structure</span>
</li>
<li className="flex items-start gap-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-red-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span>No real skills to demonstrate</span>
</li>
<li className="flex items-start gap-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-red-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span>No clear path from lesson 1 → hired</span>
</li>
<li className="flex items-start gap-4 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-red-500 mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:x-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m15 9l-6 6m0-6l6 6"></path></g></svg>
<span>5-15% completion rate (industry avg)</span>
</li>
</ul>
</div>

<div className="glass-card rounded-2xl p-8 md:p-10 border-[#6487EF] relative overflow-hidden group shadow-[0_0_40px_-10px_rgba(100,135,239,0.15)]">
<div className="absolute inset-0 bg-gradient-to-b from-[#6487EF]/5 to-transparent pointer-events-none"></div>
<h3 className="text-xl font-medium text-white mb-8 flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-[#6487EF]/20 flex items-center justify-center text-[#6487EF]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
                        Stake-to-learn
                    </h3>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-4 text-sm text-white">
<svg aria-hidden="true" className="iconify text-[#6487EF] mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="">Money at stake = you actually finish</span>
</li>
<li className="flex items-start gap-4 text-sm text-white">
<svg aria-hidden="true" className="iconify text-[#6487EF] mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Tiered refunds = milestone accountability</span>
</li>
<li className="flex items-start gap-4 text-sm text-white">
<svg aria-hidden="true" className="iconify text-[#6487EF] mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Hands-on practice with real tools</span>
</li>
<li className="flex items-start gap-4 text-sm text-white">
<svg aria-hidden="true" className="iconify text-[#6487EF] mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Structured path to job-ready</span>
</li>
<li className="flex items-start gap-4 text-sm text-white">
<svg aria-hidden="true" className="iconify text-[#6487EF] mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>70% completion rate</span>
</li>
</ul>
</div>
</div>
<div className="glass-card rounded-xl p-8 text-center border-[#6487EF]/20 bg-[#6487EF]/5">
<p className="text-xl md:text-2xl font-medium text-white">
                    Students using stake to learn are <span className="text-[#6487EF]">6x more likely to finish</span> than those using other courses.
                </p>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 text-center">
                Lock $50-$500. Complete Lessons.  Get It Back.
            </h2>
<p className="text-center text-zinc-400 mb-16 max-w-2xl mx-auto">Here's exactly how the staking mechanism works:</p>
<div className="space-y-4">

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6487EF] flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(100,135,239,0.4)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Step 1: Stake $50</h3>
<p className="text-zinc-300 mb-1">Your money stays in escrow. You control it.</p>
<p className="text-sm text-zinc-500">Withdraw anytime, but only after completing all unlocked lessons.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6487EF] flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(100,135,239,0.4)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:book-open" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Step 2: Complete Lessons</h3>
<p className="text-zinc-300 mb-1">4 weeks. 12 core modules. Self-paced with deadlines.</p>
<p className="text-sm text-zinc-500">Each module = 1 practical project + AI-verified quiz.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6487EF] flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(100,135,239,0.4)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:dollar-sign" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20m5-17H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Step 3: Unlock Refunds</h3>
<p className="text-zinc-300 mb-1">Get $25 back per module completed.</p>
<p className="text-sm text-zinc-500">Completed all modules? Get 100% back. Quit early? Keep what you've earned so far.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6487EF] flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(100,135,239,0.4)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Step 4: Build Real Portfolio</h3>
<p className="text-zinc-300 mb-1">Every module is full of practical exercises.</p>
<p className="text-sm text-zinc-500">Use DeFi protocols, analyze tokenomics, navigate DAOs — real skills you'll use on day one.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-start gap-6 hover:bg-white/[0.02] transition-colors">
<div className="w-12 h-12 rounded-full bg-[#6487EF] flex items-center justify-center shrink-0 text-white shadow-[0_0_15px_rgba(100,135,239,0.4)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div className="">
<h3 className="text-xl font-medium text-white mb-2">Step 5: Get Hired</h3>
<p className="text-zinc-300 mb-1">Apply with proof, not promises.</p>
<p className="text-sm text-zinc-500">Walk into interviews knowing how things actually work. Speak confidently.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 text-center">
                Forget Certificates.  Learn Skills That Get You Hired.
            </h2>
<p className="text-center text-zinc-400 mb-16">Hiring managers don't care about PDFs. They care about what you can DO.</p>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Introduction to Web3</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Understand what Web3 really means and how blockchain technology works.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Crypto Wallets &amp; Custody</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Master crypto wallets, private keys, and take control of your digital assets.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Blockchain Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Deep dive into how blockchains are built and how they scale to handle millions.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Intro to DeFi</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Explore how DeFi is reimagining finance without banks through protocols.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">NFTs and Gaming</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Understand non-fungible tokens, collectibles, and the future of gaming ownership.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">DAOs &amp; Governance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Learn how decentralized organizations work and how communities govern themselves.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Web3 Social</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Discover decentralized social media and how creator economies are evolving.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">AI and Future of Web3</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Explore the intersection of artificial intelligence and blockchain technology.</p>
</div>

<div className="glass-card p-8 rounded-2xl hover:border-white/20 transition-all group">
<h3 className="text-lg font-medium text-white mb-4 group-hover:text-[#6487EF] transition-colors">Career &amp; Projects</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Showcase your ability with real projects that prove you can deliver results.</p>
</div>
</div>
<div className="mt-8 text-center bg-white/5 border border-white/5 rounded-full py-3 px-6 inline-block w-full text-sm text-zinc-400">
                Every project is reviewed by AI + human experts. You get feedback. You iterate. You ship quality work.
            </div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12 text-center">
                This course is <span className="text-[#6487EF]">free</span> - if you complete it.
            </h2>
<div className="glass-card rounded-2xl overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-white/5 bg-white/[0.02]">
<th className="p-6 text-sm font-medium text-zinc-400">Feature</th>
<th className="p-6 text-sm font-medium text-zinc-400">Traditional Bootcamp</th>
<th className="p-6 text-sm font-medium text-zinc-400">Free Resources</th>
<th className="p-6 text-sm font-bold text-white bg-[#6487EF]/10 border-l border-white/5">This Course</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5">
<td className="p-6 font-medium text-white">Upfront Cost</td>
<td className="p-6 text-zinc-400">$10,000-20,000</td>
<td className="p-6 text-zinc-400">$0</td>
<td className="p-6 font-bold text-[#6487EF] bg-[#6487EF]/5 border-l border-white/5">$50-$500 (refundable)</td>
</tr>
<tr className="border-b border-white/5">
<td className="p-6 font-medium text-white">Completion Rate</td>
<td className="p-6 text-zinc-400">60-70%</td>
<td className="p-6 text-zinc-400">5-15%</td>
<td className="p-6 font-bold text-[#6487EF] bg-[#6487EF]/5 border-l border-white/5">70%</td>
</tr>
<tr className="border-b border-white/5">
<td className="p-6 font-medium text-white">Hands-On Practice</td>
<td className="p-6 text-zinc-400">Yes</td>
<td className="p-6 text-zinc-400">Rare</td>
<td className="p-6 font-bold text-[#6487EF] bg-[#6487EF]/5 border-l border-white/5">Yes (Every module)</td>
</tr>
<tr className="border-b border-white/5">
<td className="p-6 font-medium text-white">Financial Risk</td>
<td className="p-6 text-zinc-400">High</td>
<td className="p-6 text-zinc-400">None</td>
<td className="p-6 font-bold text-[#6487EF] bg-[#6487EF]/5 border-l border-white/5">Low (get money back)</td>
</tr>
<tr>
<td className="p-6 font-medium text-white">Accountability</td>
<td className="p-6 text-zinc-400">High</td>
<td className="p-6 text-zinc-400">None</td>
<td className="p-6 font-bold text-[#6487EF] bg-[#6487EF]/5 border-l border-white/5">High (money at stake)</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-8 text-center px-4">
<p className="text-lg md:text-xl font-medium text-white italic opacity-80">
                    "Worst case: You pay $50 to finally finish a course and build a portfolio. Best case: You get it all back AND land a $100K web3 job."
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#020202]">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12 text-center">Real results from real students</h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">SM</div>
<div>
<p className="text-white font-medium text-sm">Sarah M.</p>
<p className="text-zinc-500 text-xs">Former Finance Analyst</p>
</div>
</div>
<p className="text-sm text-zinc-300 mb-6 italic leading-relaxed flex-1">
                        "I'd started 7 courses before this. Never finished one. The $500 stake made me show up every week. I completed it in 5 weeks, actually understood DeFi, and landed a role at a DeFi protocol 2.5 months later."
                    </p>
<p className="text-xs font-bold text-[#6487EF] uppercase tracking-wide">Got $50 back + $110K Job</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">AN</div>
<div>
<p className="text-white font-medium text-sm">anon.eth</p>
<p className="text-zinc-500 text-xs">Ex-SaaS Product Manager</p>
</div>
</div>
<p className="text-sm text-zinc-300 mb-6 italic leading-relaxed flex-1">
                        "I thought staking was gimmicky. But I'd spent $1,200 on bootcamps I never finished. This was $500 I'd get back anyway—why not try? I finished. First time ever. The projects got me 3 interviews in my first week."
                    </p>
<p className="text-xs font-bold text-[#6487EF] uppercase tracking-wide">Got $500 back + BD Role</p>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-zinc-500">MT</div>
<div>
<p className="text-white font-medium text-sm">Mike T.</p>
<p className="text-zinc-500 text-xs">Former Marketing Manager</p>
</div>
</div>
<p className="text-sm text-zinc-300 mb-6 italic leading-relaxed flex-1">
                        "I'm the king of 'I'll do it tomorrow.' Had this course bookmarked for 4 weeks. The refund structure forced me to finish. Completed 11/12 modules, got $275 back, and I have real skills I'm proud to show."
                    </p>
<p className="text-xs font-bold text-[#6487EF] uppercase tracking-wide">Got $275 back + Interviews</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="glass-card p-6 rounded-xl text-center">
<p className="text-3xl font-bold text-[#6487EF] mb-2">32%</p>
<p className="text-xs text-zinc-500">completion rate(vs 5-15% avg)</p>
</div>
<div className="glass-card p-6 rounded-xl text-center">
<p className="text-3xl font-bold text-[#6487EF] mb-2">2,400+</p>
<p className="text-xs text-zinc-500">students enrolled</p>
</div>
<div className="glass-card p-6 rounded-xl text-center">
<p className="text-3xl font-bold text-[#6487EF] mb-2">768</p>
<p className="text-xs text-zinc-500">courses completed</p>
</div>
<div className="glass-card p-6 rounded-xl text-center">
<p className="text-3xl font-bold text-[#6487EF] mb-2">$450</p>
<p className="text-xs text-zinc-500">average refund(77% get majority back)</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group glass-card rounded-xl px-6 py-4 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center font-medium text-white">
                        What if I don't finish?
                        <svg aria-hidden="true" className="iconify group-open:rotate-45 transition-transform text-zinc-500 iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed">
                        You get partial refunds based on how far you get. Complete 50%? Get $50% back. And you keep all projects you built. Worst case: you paid $50 for the furthest you've ever gotten in a web3 course. Better than your last 5 abandoned courses combined.
                    </div>
</details>
<details className="group glass-card rounded-xl px-6 py-4 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center font-medium text-white">
                        Is this a scam? How do I know I'll get my money back?
                        <svg aria-hidden="true" className="iconify group-open:rotate-45 transition-transform text-zinc-500 iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed">
                        Fair question. Your money is held in escrow (smart contract on Solana). We can't touch it. Every time you complete a module (verified by AI + manual review), the contract automatically releases your refund. If we shut down tomorrow, you can withdraw your remaining balance. Transparent. Trustless. Web3-native.
                    </div>
</details>
<details className="group glass-card rounded-xl px-6 py-4 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center font-medium text-white">
                        I'm not technical. Will I be able to build smart contracts?
                        <svg aria-hidden="true" className="iconify group-open:rotate-45 transition-transform text-zinc-500 iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed">
                        You don't need to code. This course teaches you how to *understand* web3, not build it from scratch. Your will do things like: governance proposals, DeFi strategies, protocol research, token design—skills that 80% of web3 jobs actually need.
                    </div>
</details>
<details className="group glass-card rounded-xl px-6 py-4 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center font-medium text-white">
                        What if I can't get a job after finishing?
                        <svg aria-hidden="true" className="iconify group-open:rotate-45 transition-transform text-zinc-500 iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed">
                        This course doesn't guarantee a job—no one can. But here's what it DOES guarantee: (1) You are very likely to finish, (2) You'll have a real practical skills, (3) You'll understand web3 at a professional level.
                    </div>
</details>
<details className="group glass-card rounded-xl px-6 py-4 cursor-pointer open:bg-white/5 transition-colors">
<summary className="flex justify-between items-center font-medium text-white">
                        Can I withdraw my money anytime?
                        <svg aria-hidden="true" className="iconify group-open:rotate-45 transition-transform text-zinc-500 iconify--lucide" data-icon="lucide:plus" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</summary>
<div className="mt-4 text-sm text-zinc-400 leading-relaxed">
                        Yes, but only after completing all modules. You can't withdraw whole amount at the same time. Complete Module 1 → unlock $25 → can withdraw remaining $275 + the $25 you earned. This prevents gaming the system while giving you flexibility.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#030303] to-[#6487EF]/10 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">Stop Planning. Start Finishing.</h2>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light">
                You've read enough. You know the problem. You know the solution. The only question left: Will you finally commit this time?
            </p>
<div className="inline-flex flex-col items-center gap-4">
<button className="text-lg px-10 py-5 rounded-full bg-[#6487EF] text-white font-semibold flex items-center gap-3 hover:scale-105 transition-transform shadow-[0_0_40px_-5px_rgba(100,135,239,0.6)]">
                    Lock $50, Start Week 1
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<svg aria-hidden="true" className="iconify text-[#6487EF] iconify--lucide" data-icon="lucide:lock" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                    Secure escrow. Withdraw anytime after completing modules.
                </div>
</div>
<div className="mt-12 text-sm text-zinc-500">
<p>Questions? Email us at info@mighty.study</p>
<p className="mt-1">Still not sure? Talk to someone who completed the course in our Discord.</p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#010101]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-800 rounded flex items-center justify-center text-white font-bold text-[10px]">M</div>
<span className="text-sm text-zinc-400">© 2024 Mighty. All rights reserved.</span>
</div>
<div className="flex gap-8">
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Discord</a>
</div>
</div>
</footer>

    </>
  );
}
