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
      

<nav className="fixed top-0 w-full z-50 bg-[#FAFAF9]/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="brand-font font-bold text-lg tracking-tighter text-slate-900 flex items-center gap-1.5" href="#">
<span className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center text-sm">Q</span>
                QUEENIE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-700 transition-colors" href="#start">Start Here</a>
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="hover:text-teal-700 transition-colors" href="#resources">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-xs font-semibold text-slate-900 hover:text-teal-700 transition-colors" href="#">Log In</a>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-12 md:pt-44 md:pb-24 px-6 overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-b from-teal-100/40 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
<div className="absolute top-1/2 left-0 -translate-x-1/4 w-[600px] h-[600px] bg-gradient-to-t from-orange-100/40 to-transparent rounded-full blur-3xl opacity-40 -z-10"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 shadow-sm mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
<span className="text-xs font-medium text-slate-500">Fresh Content for 2024</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.05]">
                    Make Your Money <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">Go Further.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
                    Join the community of Aussies moving from money stress to financial freedom. Whether you are buying your first home or aiming for FIRE—we have a roadmap for you.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20 transition-all flex items-center justify-center gap-2 group">
                        Start Your Journey
                        <iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-slate-700 border border-stone-200 text-sm font-semibold hover:border-stone-300 hover:bg-stone-50 transition-all">
                        Explore Resources
                    </button>
</div>

<div className="mt-12 lg:mt-16 border-t border-stone-200/60 pt-8 flex flex-col lg:items-start items-center">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Featured In</p>
<div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-base font-bold tracking-tight text-slate-800">Financial Review</span>
<span className="text-base font-bold tracking-tight text-slate-800 italic">News.com.au</span>
<span className="text-base font-bold tracking-tight text-slate-800">ABC News</span>
<span className="text-base font-bold tracking-tight text-slate-800">Yahoo! Finance</span>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative w-full max-w-[440px] aspect-[4/5] group">

<div className="absolute inset-0 bg-stone-200 rounded-[2.5rem] rotate-3 translate-x-2 translate-y-2 group-hover:rotate-6 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-500 ease-out"></div>
<div className="absolute inset-0 bg-teal-600/10 rounded-[2.5rem] -rotate-2 -translate-x-2 -translate-y-2 group-hover:-rotate-3 group-hover:-translate-x-3 group-hover:-translate-y-3 transition-transform duration-500 ease-out"></div>

<img alt="Queenie Portrait" className="relative z-10 w-full h-full object-cover rounded-[2.5rem] shadow-2xl shadow-stone-200 border-4 border-white" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 flex items-center gap-3 animate-bounce-slow hidden sm:flex">
<div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400 font-medium">Community Saved</p>
<p className="text-sm font-bold text-slate-900">$2.5M+ this year</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100" id="start">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Find Your Path</h2>
<p className="text-slate-500">Select the goal that resonates with you most right now.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-[#FAFAF9] hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-teal-100/50 text-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">The Foundation Builder</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">"I’m just getting started. I want to save for a wedding, buy a home, or make my first investment."</p>
<div className="flex items-center gap-2 text-xs font-semibold text-teal-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Start Here <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#FAFAF9] hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-blue-100/50 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">The Wealth Accelerator</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">"I want to optimize. Teach me about FIRE strategies, tax hacks, and building passive income."</p>
<div className="flex items-center gap-2 text-xs font-semibold text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Explore Strategies <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group relative p-8 rounded-3xl bg-[#FAFAF9] hover:bg-white border border-transparent hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-2xl bg-orange-100/50 text-orange-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">The System Set-Up</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">"I want to automate. Help me set up a system so I can stop stressing about bills."</p>
<div className="flex items-center gap-2 text-xs font-semibold text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Automate Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-stone-200 relative z-10">
<img alt="Queenie Casual" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-100 rounded-full -z-0 blur-2xl"></div>
<div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-100 rounded-full -z-0 blur-2xl"></div>
</div>
<div className="md:pl-10">
<div className="inline-flex items-center gap-2 mb-6">
<div className="h-px w-8 bg-slate-400"></div>
<span className="text-xs font-medium uppercase tracking-widest text-slate-500">About Queenie</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tighter mb-6 leading-tight">
                    Finance without the <br/> <span className="text-slate-400">Finance Bros.</span>
</h2>
<p className="text-slate-600 leading-relaxed mb-6 font-light">
                    I’m Queenie, a licensed personal finance content creator. I believe money shouldn't be intimidating. My goal is to empower you with clarity and confidence so you can create a better future for yourself and your community.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-900 pb-0.5 hover:text-teal-700 hover:border-teal-700 transition-colors" href="#">
                    Read My Story
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="resources">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">Latest Roadmaps</h2>
<p className="text-slate-500">Expertly curated guides to fast-track your goals.</p>
</div>
<a className="text-sm font-medium text-slate-500 hover:text-teal-600 transition-colors flex items-center gap-1" href="#">
                    View all resources <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:home-smile-linear" width="48"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-slate-800">For Couples</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors mb-2">The Ultimate Wedding &amp; Home Savings Guide</h3>
<p className="text-sm text-slate-500">Practical steps to save for the big day without sacrificing your future home deposit.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:graph-up-linear" width="48"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-slate-800">Investing</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors mb-2">From $0 to $100k: A Step-by-Step Roadmap</h3>
<p className="text-sm text-slate-500">The psychological and tactical guide to reaching your first six figures.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] bg-stone-100 rounded-2xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 bg-slate-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-stone-400">
<iconify-icon icon="solar:pie-chart-2-linear" width="48"></iconify-icon>
</div>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase text-slate-800">Optimisation</div>
</div>
<h3 className="text-lg font-semibold text-slate-900 leading-tight group-hover:text-teal-700 transition-colors mb-2">ETF Deep Dives &amp; Tax Hacks</h3>
<p className="text-sm text-slate-500">Understand your portfolio structure and keep more of what you earn.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-stone-900 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl shadow-stone-900/10 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<iconify-icon className="text-teal-400 text-4xl mb-6" icon="solar:letter-linear"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Get Money Tips <br/> Delivered to Your Inbox.</h2>
<p className="text-stone-400 mb-10 text-lg font-light">Join thousands of subscribers getting weekly tips on investing, saving, and lifestyle design.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="w-full h-12 px-5 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-sm" placeholder="First Name" type="text"/>
<input className="w-full h-12 px-5 rounded-full bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all text-sm" placeholder="Email Address" type="email"/>
</form>
<button className="mt-4 w-full sm:w-auto px-8 h-12 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 transition-colors shadow-lg shadow-teal-900/50">
                    Join the Club
                </button>
<p className="mt-6 text-xs text-stone-600">No spam. Unsubscribe anytime.</p>
</div>
</div>
</section>

<footer className="py-12 border-t border-stone-200 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs font-bold">Q</span>
<span className="text-sm font-bold tracking-tight text-slate-900">INVEST WITH QUEENIE</span>
</div>
<div className="flex gap-6 text-sm text-slate-500">
<a className="hover:text-teal-700" href="#">Instagram</a>
<a className="hover:text-teal-700" href="#">TikTok</a>
<a className="hover:text-teal-700" href="#">YouTube</a>
</div>
<div className="text-xs text-slate-400">
                © 2024 Invest With Queenie. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
