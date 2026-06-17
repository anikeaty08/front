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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                observer.observe(el);
            });
            
            // Navbar blur effect on scroll
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('bg-black/80');
                    nav.classList.remove('bg-black/50');
                } else {
                    nav.classList.remove('bg-black/80');
                    nav.classList.add('bg-black/50');
                }
            });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 text-sm font-medium tracking-tighter hover:text-white transition-colors flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center w-6 h-6 rounded-md bg-zinc-900 border border-zinc-800 group-hover:border-indigo-500/50 transition-colors">
<span className="iconify text-indigo-500 group-hover:scale-110 transition-transform duration-300" data-icon="lucide:box" data-width="14"></span>
</div>
                DOMAIN EXPANSION
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors relative group" href="#process">
                    Process
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors relative group" href="#system">
                    System
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors relative group" href="#results">
                    Results
                    <span className="absolute -bottom-4 left-0 w-0 h-[1px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 px-4 py-2 rounded-full transition-all group overflow-hidden relative" href="#contact">
<span className="relative z-10">Get Started</span>
<span className="iconify group-hover:translate-x-1 transition-transform relative z-10" data-icon="lucide:arrow-right" data-width="14"></span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
</a>
<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] -z-10 pointer-events-none opacity-40">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob" style={{animationDelay: '4s'}}></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="reveal-on-scroll inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs mb-8 hover:bg-indigo-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Specialized for Real Estate Businesses
            </div>
<h1 className="reveal-on-scroll delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Book 20-30 qualified <br/>
<span className="text-shine font-semibold">appointments every month.</span>
</h1>
<p className="reveal-on-scroll delay-200 text-lg text-zinc-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                We help Real Estate businesses scale by leveraging autonomous AI agents and high-intent Meta Ads to flood your calendar with qualified leads.
            </p>
<div className="reveal-on-scroll delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto group relative px-8 py-3 bg-white text-black text-sm font-medium rounded-full overflow-hidden transition-all hover:scale-105" href="#contact">
<div className="absolute inset-0 w-full h-full bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative flex items-center justify-center gap-2">
                        Book a Strategy Call
                        <span className="iconify" data-icon="lucide:calendar-check-2" data-width="16"></span>
</span>
</a>
<button className="w-full sm:w-auto px-8 py-3 bg-transparent border border-zinc-800 text-zinc-300 text-sm font-medium rounded-full hover:bg-zinc-900 hover:text-white transition-colors flex items-center justify-center gap-2 group">
<span className="iconify group-hover:rotate-12 transition-transform" data-icon="lucide:play-circle" data-width="16"></span>
                    See How It Works
                </button>
</div>

<div className="reveal-on-scroll delay-300 mt-24 relative rounded-xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm overflow-hidden shadow-2xl group hover:border-zinc-700 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10 pointer-events-none"></div>

<div className="border-b border-zinc-800 bg-black/40 px-4 py-3 flex items-center justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-[10px] text-zinc-600 font-mono">system_dashboard.tsx</div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-4 gap-6 opacity-80">

<div className="hidden md:block col-span-1 space-y-3">
<div className="h-8 w-full rounded bg-zinc-800/50"></div>
<div className="h-4 w-3/4 rounded bg-zinc-800/30"></div>
<div className="h-4 w-2/3 rounded bg-zinc-800/30"></div>
<div className="h-4 w-4/5 rounded bg-zinc-800/30"></div>
</div>

<div className="col-span-3 grid grid-cols-3 gap-4">

<div className="col-span-1 h-24 rounded-lg bg-zinc-800/40 border border-zinc-800 p-3 flex flex-col justify-between animate-float" style={{animationDelay: '0s'}}>
<div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center"><span className="iconify text-indigo-400" data-icon="lucide:users" data-width="12"></span></div>
<div className="h-2 w-12 bg-zinc-700 rounded"></div>
</div>
<div className="col-span-1 h-24 rounded-lg bg-zinc-800/40 border border-zinc-800 p-3 flex flex-col justify-between animate-float" style={{animationDelay: '1s'}}>
<div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center"><span className="iconify text-green-400" data-icon="lucide:calendar" data-width="12"></span></div>
<div className="h-2 w-16 bg-zinc-700 rounded"></div>
</div>
<div className="col-span-1 h-24 rounded-lg bg-zinc-800/40 border border-zinc-800 p-3 flex flex-col justify-between animate-float" style={{animationDelay: '2s'}}>
<div className="w-6 h-6 rounded bg-blue-500/20 flex items-center justify-center"><span className="iconify text-blue-400" data-icon="lucide:trending-up" data-width="12"></span></div>
<div className="h-2 w-10 bg-zinc-700 rounded"></div>
</div>

<div className="col-span-3 h-32 rounded-lg bg-gradient-to-t from-indigo-500/10 to-transparent border border-zinc-800 mt-2 relative overflow-hidden">
<svg className="absolute bottom-0 left-0 w-full h-full text-indigo-500/20" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 L0 15 L10 12 L20 16 L30 10 L40 14 L50 8 L60 12 L70 5 L80 10 L90 4 L100 0 L100 20 Z" fill="currentColor"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Expansion Framework</h2>
<p className="text-zinc-500 max-w-md font-light">
                        A tripartite system designed specifically for real estate dominance.
                    </p>
</div>
<div className="flex items-center gap-2 text-indigo-400 text-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    System Online
                </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll delay-100 group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 text-zinc-100 group-hover:border-blue-500/30 group-hover:text-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] transition-all duration-500">
<span className="iconify" data-icon="lucide:target" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 group-hover:text-white transition-colors">1. Meta Ads Acquisition</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        We deploy high-converting ad creatives on Facebook &amp; Instagram targeting local homeowners and investors. We don't just generate clicks; we generate intent.
                    </p>
</div>

<div className="reveal-on-scroll delay-200 group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 text-zinc-100 group-hover:border-indigo-500/30 group-hover:text-indigo-400 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all duration-500 relative z-10">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 relative z-10 group-hover:text-white transition-colors">2. AI Automated Nurture</h3>
<p className="text-sm text-zinc-500 leading-relaxed relative z-10 group-hover:text-zinc-400 transition-colors">
                        Our custom-trained AI agents engage leads instantly via SMS and Email. They qualify prospects, answer questions, and filter out the "tire kickers" 24/7.
                    </p>
</div>

<div className="reveal-on-scroll delay-300 group p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 text-zinc-100 group-hover:border-green-500/30 group-hover:text-green-400 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] transition-all duration-500">
<span className="iconify" data-icon="lucide:calendar-check" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-zinc-100 mb-3 group-hover:text-white transition-colors">3. Qualified Appointments</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        You only speak to people ready to buy or sell. The appointments appear directly on your calendar. Your only job is to close the deal.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Why Top Realtors Choose Us</h2>
<p className="text-zinc-500 font-light">
                    Move beyond manual prospecting. Automate your growth.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[600px]">

<div className="reveal-on-scroll col-span-1 md:col-span-2 row-span-2 rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col justify-between overflow-hidden relative group hover:border-zinc-700 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50"></div>
<div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-4 text-zinc-200">
<span className="iconify" data-icon="lucide:network" data-width="18"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Omnichannel Ecosystem</h3>
<p className="text-sm text-zinc-500">We integrate Facebook, Instagram, and SMS into a single pipeline.</p>
</div>

<div className="mt-8 flex justify-between items-center relative h-20 px-4">
<div className="w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center z-10">
<span className="iconify text-blue-500" data-icon="lucide:facebook" data-width="16"></span>
</div>

<div className="absolute left-10 right-10 top-1/2 h-[1px] bg-zinc-800 -z-0">
<div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50 animate-[shine_2s_linear_infinite]"></div>
</div>
<div className="w-12 h-12 rounded-full bg-indigo-600/20 border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-pulse">
<span className="iconify text-indigo-500" data-icon="lucide:bot" data-width="20"></span>
</div>
<div className="w-10 h-10 rounded-full bg-green-600/20 border border-green-500/50 flex items-center justify-center z-10">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="16"></span>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-100 col-span-1 row-span-2 md:col-span-1 md:row-span-3 rounded-2xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col relative overflow-hidden hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-32 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center mb-4 text-zinc-200">
<span className="iconify" data-icon="lucide:filter" data-width="18"></span>
</div>
<h3 className="text-xl font-medium text-white mb-2">Zero Tire Kickers</h3>
<p className="text-sm text-zinc-500 mb-8">Strict qualification logic filters out bad leads.</p>
<div className="flex-1 flex flex-col gap-3">
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 flex items-center gap-3 hover:bg-zinc-900 transition-colors">
<span className="iconify text-red-500" data-icon="lucide:x-circle" data-width="14"></span>
<span className="text-xs text-zinc-400">Renters filtered out</span>
</div>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 flex items-center gap-3 hover:bg-zinc-900 transition-colors">
<span className="iconify text-red-500" data-icon="lucide:x-circle" data-width="14"></span>
<span className="text-xs text-zinc-400">Low budget excluded</span>
</div>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 flex items-center gap-3 hover:bg-zinc-900 transition-colors">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="14"></span>
<span className="text-xs text-white">Credit Score &gt; 720</span>
</div>
<div className="p-3 rounded-lg border border-zinc-800 bg-zinc-950/50 flex items-center gap-3 hover:bg-zinc-900 transition-colors">
<span className="iconify text-green-500" data-icon="lucide:check-circle" data-width="14"></span>
<span className="text-xs text-white">Pre-approved</span>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200 col-span-1 md:col-span-1 row-span-1 rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col justify-center hover:bg-zinc-900 transition-colors">
<h3 className="text-4xl font-medium text-white tracking-tight flex items-center gap-2">
                        25+
                        <span className="text-xs font-normal text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full border border-green-500/20">/mo</span>
</h3>
<p className="text-xs text-zinc-500 mt-2">Qualified appointments guaranteed per month.</p>
</div>

<div className="reveal-on-scroll delay-300 col-span-1 md:col-span-2 row-span-1 rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6 flex items-center justify-between hover:border-zinc-700 transition-colors">
<div>
<h3 className="text-lg font-medium text-white">Focus on Closing</h3>
<p className="text-xs text-zinc-500 mt-1">We handle the prospecting. You handle the showings.</p>
</div>
<div className="h-10 w-24 bg-zinc-950 rounded border border-zinc-800 flex items-center justify-center overflow-hidden">
<div className="flex gap-1 items-end h-6">
<div className="w-1.5 bg-zinc-700 h-2 rounded-sm"></div>
<div className="w-1.5 bg-zinc-600 h-3 rounded-sm"></div>
<div className="w-1.5 bg-zinc-500 h-4 rounded-sm"></div>
<div className="w-1.5 bg-indigo-500 h-6 rounded-sm animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-900 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-[10px] text-zinc-600 mb-8 uppercase tracking-widest font-medium">Powering Real Estate Agencies</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:opacity-50 transition-opacity duration-500">

<span className="text-lg font-bold tracking-tighter text-white">RE<span className="text-zinc-500">MAX</span></span>
<span className="text-lg font-serif italic text-white">Century21</span>
<span className="text-lg font-bold tracking-widest text-white">KELLER</span>
<span className="text-lg font-medium text-white flex items-center gap-1"><span className="w-3 h-3 bg-zinc-400 rotate-45"></span> EXP</span>
<span className="text-lg font-bold text-white tracking-tighter">SOTHEBY'S</span>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="glass-panel rounded-2xl p-8 md:p-12 shadow-2xl reveal-on-scroll">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">Scale Your Agency</h2>
<p className="text-sm text-zinc-500">Fill out the form below to see if your area is available for our program.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Full Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all" placeholder="Jane Smith" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Email Address</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all" placeholder="jane@realty.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Monthly Budget for Ads</label>
<div className="relative">
<select className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all appearance-none cursor-pointer">
<option>$1,000 - $3,000</option>
<option>$3,000 - $5,000</option>
<option>$5,000+</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Current Challenges</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/50 transition-all resize-none" placeholder="Lead quality, follow-up time, etc..." rows="3"></textarea>
</div>
<button className="w-full py-4 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5" type="button">
                        Book Strategy Session
                    </button>
<p className="text-center text-[10px] text-zinc-600">
                        Limited spots available per city to avoid conflict of interest.
                    </p>
</form>
</div>
</div>

<div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</section>

<footer className="border-t border-zinc-900 bg-black pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="text-zinc-100 text-sm font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<span className="iconify text-indigo-500" data-icon="lucide:box" data-width="18"></span>
                        DOMAIN EXPANSION
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Helping Real Estate Agents add an extra 2-3 deals per month through automated systems and paid traffic.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-zinc-100 text-xs font-medium mb-4">Menu</h4>
<ul className="space-y-2">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Book Call</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-100 text-xs font-medium mb-4">Connect</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="16"></span></a>
<a className="text-zinc-500 hover:text-white transition-colors transform hover:scale-110" href="#"><span className="iconify" data-icon="lucide:mail" data-width="16"></span></a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-zinc-900 pt-8 gap-4">
<p className="text-xs text-zinc-600">© 2024 Domain Expansion. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-600 hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
