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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#F9F8F6] rounded-full blur-[100px] opacity-70 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[#D6A69F]/5 rounded-full blur-[100px] mix-blend-multiply"></div>
</div>
<main className="z-10 relative">

<header className="w-full py-8 px-6 max-w-7xl mx-auto flex justify-between items-center">
<div className="text-xl font-medium tracking-tight text-[#213945]">
      Brenda St. Louis
    </div>
</header>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col lg:items-start lg:text-left text-center items-center">
<span className="md:text-sm uppercase text-xs font-medium text-[#C79A5F] tracking-widest mb-6">
                        The proven system for overwhelmed earners. 🌿
                    </span>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#213945] leading-none mb-6">
          ESCAPE THE<br/>
<span className="text-[#C79A5F]">PAYCHECK CYCLE</span>
</h1>
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-[#213945] mb-6 leading-tight">
          Keep your money flowing and your nervous system calm.
        </h2>
<p className="text-lg text-[#213945]/70 leading-relaxed max-w-xl mb-8 font-normal">
          This isn't just about mindset or math—it's about marrying both. Create a gentle, bulletproof Money Ecosystem
          that honors your emotional reality while building practical structure, without restrictive budgets or
          financial shame.
        </p>
<ul className="space-y-3 mb-10 text-left w-full max-w-xl text-[#213945]/80 text-base font-normal">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D6A69F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
            Automate your finances to keep your nervous system calm.
          </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D6A69F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
            Spend on what brings you joy, completely free of guilt and shame.
          </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#D6A69F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
            Heal inherited patterns and write a new legacy of abundance.
          </li>
</ul>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center h-14 px-8 text-lg font-medium text-white bg-[#C79A5F] rounded-xl hover:bg-[#b58b55] transition-all shadow-lg hover:shadow-xl shadow-[#C79A5F]/20" href="#pricing">
            Step Into Your Ecosystem
          </a>
<span className="inline-flex items-center justify-center px-4 text-sm font-normal text-[#213945]/50">
                            Zero shame. Just clarity, peace, and confidence. 💛
                        </span>
</div>

<div className="flex items-center gap-3 mt-8 text-[#213945]/60 text-sm font-medium">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
          Join 500+ women who have rewired their wealth.
        </div>
</div>

<div className="w-full max-w-[480px] mx-auto lg:mx-0 lg:ml-auto">
<div className="relative aspect-[4/5] rounded-t-full rounded-b-3xl bg-gradient-to-b from-[#F9F8F6] to-[#EAE6DF] border border-[#213945]/10 shadow-2xl flex flex-col items-center justify-center p-8 overflow-hidden group">
<div className="absolute inset-0 bg-[#C79A5F]/5 mix-blend-multiply opacity-50"></div>
<div className="relative z-10 flex flex-col items-center text-[#213945]/30 group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-7xl mb-4" icon="solar:gallery-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tight">Main Graphic Placeholder</span>
</div>

<div className="absolute bottom-12 -right-8 w-48 h-32 bg-white rounded-xl shadow-2xl border border-[#213945]/5 flex flex-col p-4 transform -rotate-6 transition-transform group-hover:rotate-0 duration-500">
<div className="w-8 h-8 rounded-full bg-[#D6A69F]/20 mb-auto"></div>
<div className="w-full h-2 rounded bg-[#213945]/5 mb-2"></div>
<div className="w-2/3 h-2 rounded bg-[#213945]/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-24 fade-in fade-in-delay-4 z-10 pt-8 pb-8 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-xs text-zinc-500 tracking-wide">Brenda and Jennifer have been featured in</p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="z-10 pointer-events-none bg-gradient-to-r from-black via-black/80 to-transparent w-20 absolute top-0 bottom-0 left-0">
</div>

<div className="ticker-track flex gap-16 pt-2 pb-2 gap-x-16 gap-y-16 items-center">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
</div>
<style className="">
      @keyframes ticker {
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(-100%);
        }
      }

      .ticker-track {
        animation: ticker 40s linear infinite;
        width: calc(200% + 16px);
      }

      .ticker-track:hover {
        animation-play-state: paused;
      }
    </style>
</section>

<section className="max-w-5xl mx-auto px-6 pb-24">
<div className="relative w-full aspect-video rounded-3xl bg-[#1F333E] border border-[#213945]/10 shadow-2xl overflow-hidden group cursor-pointer flex items-center justify-center">

<div className="absolute inset-0 bg-[#213945] opacity-50 group-hover:opacity-40 transition-opacity duration-500">
</div>
<div className="bg-gradient-to-t from-[#1F333E]/90 via-[#1F333E]/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-xl">
<iconify-icon className="text-5xl text-white translate-x-0.5" height="48" icon="solar:play-circle-linear" style={{color: 'rgb(255, 255, 255)'}} width="48"></iconify-icon>
</div>

<div className="absolute bottom-8 left-8 right-8 text-left">
<span className="text-xs font-medium text-[#C79A5F] mb-2 block uppercase tracking-widest">Introduction</span>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">How the Money Ecosystem Works</h3>
<p className="text-lg text-white/70 font-normal">Watch Brenda explain the system in 3 minutes.</p>
</div>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-[#213945]/10 to-transparent"></div>

<section className="overflow-hidden text-left max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">

<div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#D6A69F]/15 blur-[120px] rounded-full pointer-events-none -z-10">
</div>
<div className="absolute top-40 -left-40 w-[600px] h-[600px] bg-[#C79A5F]/10 blur-[120px] rounded-full pointer-events-none -z-10">
</div>

<div className="flex w-fit mx-auto uppercase text-xs font-medium text-[#D6A69F] tracking-widest text-center bg-white border-[#D6A69F]/30 border rounded-full mb-8 pt-1.5 pr-4 pb-1.5 pl-4 relative shadow-sm gap-x-2 gap-y-2 items-center">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
      Read This Carefully
    </div>
<h2 className="md:text-5xl text-4xl font-medium text-[#213945] tracking-tight text-center mb-6">
      If Checking Your Bank Account<br className="hidden md:block"/> Makes Your Body Tighten…
    </h2>
<p className="leading-relaxed text-xl font-normal text-[#213945]/70 text-center max-w-2xl mr-auto mb-20 ml-auto">
      You’re not bad with money. You’re stuck in a cycle that keeps you in constant alert.
    </p>
<div className="grid lg:grid-cols-2 gap-16 text-left max-w-5xl mr-auto ml-auto gap-x-16 gap-y-16 items-start">

<div className="relative">
<h3 className="text-2xl font-medium tracking-tight text-[#213945] mb-8">It looks like this:</h3>
<div className="space-y-6 relative">

<div className="absolute top-8 bottom-8 left-[1.375rem] w-[2px] bg-gradient-to-b from-[#C79A5F]/40 via-[#C79A5F]/20 to-transparent">
</div>
<div className="flex items-start gap-6 relative group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#C79A5F]/30 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C79A5F] group-hover:scale-110 transition-all duration-300 z-10">
<span className="w-3 h-3 rounded-full bg-[#C79A5F] shadow-[0_0_12px_rgba(199,154,95,0.8)]"></span>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#213945]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-white transition-all duration-300 w-full">
<p className="text-lg text-[#213945]/80 font-normal leading-relaxed">You avoid your bank app until
                you absolutely have to open it.</p>
</div>
</div>
<div className="flex items-start gap-6 relative group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#C79A5F]/30 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C79A5F] group-hover:scale-110 transition-all duration-300 z-10">
<span className="w-3 h-3 rounded-full bg-[#C79A5F] shadow-[0_0_12px_rgba(199,154,95,0.8)]"></span>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#213945]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-white transition-all duration-300 w-full">
<p className="text-lg text-[#213945]/80 font-normal leading-relaxed">You tell yourself “I’ll get it
                together after this week.”</p>
</div>
</div>
<div className="flex items-start gap-6 relative group">
<div className="w-12 h-12 rounded-full bg-white border-2 border-[#C79A5F]/30 shadow-sm flex items-center justify-center shrink-0 group-hover:border-[#C79A5F] group-hover:scale-110 transition-all duration-300 z-10">
<span className="w-3 h-3 rounded-full bg-[#C79A5F] shadow-[0_0_12px_rgba(199,154,95,0.8)]"></span>
</div>
<div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#213945]/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:bg-white transition-all duration-300 w-full">
<p className="text-lg text-[#213945]/80 font-normal leading-relaxed">Your paycheck lands, then
                vanishes faster than it should.</p>
</div>
</div>
</div>

<div className="mt-12 space-y-6">
<h3 className="leading-tight text-3xl font-medium text-[#213945] tracking-tight">You’re not irresponsible.<br/>
<span className="text-[#C79A5F]">You’re tired.</span>
</h3>
<p className="leading-relaxed text-lg font-normal text-[#213945]/70">
            Tired of that end-of-the-month question:<br/>
<span className="font-medium text-[#213945]">“Where did it all go?”</span>
</p>
</div>
</div>

<div className="space-y-12">
<div className="space-y-6 pt-2">
<p className="text-lg text-[#213945]/70 font-normal leading-relaxed">
            Maybe money comes in and goes right back out. Maybe you’ve racked up credit card debt slowly, year
            after year. Maybe you’ve never had a clear picture of where you stand because it’s been safer not to
            look.
          </p>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-r from-[#C79A5F]/20 to-[#D6A69F]/20 rounded-3xl blur-md opacity-50">
</div>
<div className="relative bg-white/90 backdrop-blur-xl border border-white rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.04)]">
<svg className="absolute top-6 right-6 text-[#C79A5F]/10 transform rotate-6" fill="currentColor" height="64" stroke="none" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.994v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
</svg>
<p className="text-sm font-medium text-[#8FA59A] uppercase tracking-widest mb-6 block">One student said
              it best:</p>
<p className="leading-relaxed z-10 text-lg font-normal italic text-[#213945]/80 mb-8 relative">"I never
              really knew where I was financially… it was just such a source of anxiety for me all the time.
              Paycheck to paycheck, just kind of whatever came in would be used for whatever I needed and had
              no understanding of where my money went."</p>
<div className="flex items-center gap-4 pt-6 border-t border-[#213945]/5">
<div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-br from-[#C79A5F] to-[#D6A69F]">
<img alt="Linda Parke" className="w-full h-full object-cover bg-center border-white border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e17440a-c29a-4c1a-9a98-e385209a5ed4_320w.png?w=800&amp;q=80"/>
</div>
<div className="">
<span className="block text-base font-medium text-[#213945] tracking-tight">Linda Parke</span>
<span className="block text-sm font-normal text-[#213945]/50">Book Designer</span>
</div>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<h3 className="leading-tight text-3xl font-medium text-[#213945] tracking-tight">
            If that’s you…<br/>
<span className="text-[#C79A5F]">You are not broken.</span>
</h3>
<p className="leading-relaxed text-lg font-normal text-[#213945]/70">
            You just haven’t been given the right map.
          </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#1F333E] pt-32 pr-6 pb-32 pl-6 relative">
<div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#C79A5F]/5 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8FA59A]/10 blur-[120px] rounded-full pointer-events-none">
</div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">
        The Real Problem Isn’t Your Paycheck.
      </h2>
<p className="leading-relaxed text-xl font-normal text-white/70 max-w-2xl mr-auto mb-16 ml-auto">It’s that you were
        never taught how to build a system that works with your life. The financial world is confusing on purpose.
        It tells you to budget harder, track everything, and be more disciplined.</p>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 shadow-2xl max-w-3xl mx-auto text-left relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A5F]/20 blur-[80px] rounded-full pointer-events-none">
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#C79A5F] mb-6">But discipline collapses when your
          nervous system is overwhelmed.</h3>
<p className="text-lg text-white/80 font-normal leading-relaxed mb-8">
          And strict budgets break the moment real life happens. You don’t need more restriction. You need
          structure.
        </p>
<div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
<div className="">
<span className="block text-[#8FA59A] font-medium text-sm uppercase tracking-widest mb-2">Instead of reacting</span>
<span className="text-xl font-medium tracking-tight text-white">You operate with clarity.</span>
</div>
<div className="">
<span className="block text-[#8FA59A] font-medium text-sm uppercase tracking-widest mb-2">Instead of guilt</span>
<span className="text-xl font-medium tracking-tight text-white">You make decisions.</span>
</div>
<div className="">
<span className="block text-[#8FA59A] font-medium text-sm uppercase tracking-widest mb-2">Instead of chaos</span>
<span className="text-xl font-medium tracking-tight text-white">You feel calm.</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-center max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6" id="curriculum">

<div className="flex flex-col w-full max-w-6xl mr-auto mb-24 ml-auto pr-4 pl-4 gap-x-12 gap-y-12 items-center">


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl gap-x-6 gap-y-6">

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="p-8 pb-6 text-center flex-grow flex flex-col justify-center items-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#C79A5F] mb-4 block drop-shadow-sm transition-colors duration-300 group-hover:text-[#b58b50]">LESSON 1</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">Financial Stress
                Affects<br/>More Than Just Your Wallet
              </h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Discover how money anxiety impacts your
                nervous
                system, so you can stop blaming yourself and start healing.</p>
</div>

<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="flex-grow flex flex-col text-center pt-8 pr-8 pb-6 pl-8 items-center justify-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#C79A5F] mb-4 block drop-shadow-sm transition-colors duration-300 group-hover:text-[#b58b50]">LESSON 2</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">The Psychology and
                Neural<br/>Behaviours with Money
              </h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Rewire your brain's automated response to
                spending, so you don't have to rely on sheer willpower anymore.</p>
</div>
<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="p-8 pb-6 text-center flex-grow flex flex-col justify-center items-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#1F333E]/40 mb-3 block drop-shadow-sm">LESSON 3</span>
<span className="inline-flex items-center justify-center rounded-full bg-[#C79A5F]/10 px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-[#C79A5F] ring-1 ring-inset ring-[#C79A5F]/20 shadow-[0_0_10px_rgba(199,154,95,0.1)] transition-all duration-300 group-hover:bg-[#C79A5F]/20 group-hover:shadow-[0_0_15px_rgba(199,154,95,0.2)]">Step 1</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">The best defense is a
                good<br/>offense
              </h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Map out your cash flow proactively, so
                you
                always know your bills are covered before they are even due.</p>
</div>
<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="p-8 pb-6 text-center flex-grow flex flex-col justify-center items-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#1F333E]/40 mb-3 block drop-shadow-sm">LESSON 4</span>
<span className="inline-flex items-center justify-center rounded-full bg-[#C79A5F]/10 px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-[#C79A5F] ring-1 ring-inset ring-[#C79A5F]/20 shadow-[0_0_10px_rgba(199,154,95,0.1)] transition-all duration-300 group-hover:bg-[#C79A5F]/20 group-hover:shadow-[0_0_15px_rgba(199,154,95,0.2)]">Step 2</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">Passive vs Active Spending
              </h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Identify your silent money leaks, so you
                can
                spend intentionally on what you love without the guilt.</p>
</div>
<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="p-8 pb-6 text-center flex-grow flex flex-col justify-center items-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#1F333E]/40 mb-3 block drop-shadow-sm">LESSON 5</span>
<span className="inline-flex items-center justify-center rounded-full bg-[#C79A5F]/10 px-3 py-1 mb-4 text-xs font-medium uppercase tracking-widest text-[#C79A5F] ring-1 ring-inset ring-[#C79A5F]/20 shadow-[0_0_10px_rgba(199,154,95,0.1)] transition-all duration-300 group-hover:bg-[#C79A5F]/20 group-hover:shadow-[0_0_15px_rgba(199,154,95,0.2)]">Step 3</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">Divide and Prosper</h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Create an automated structure for your
                income,
                so you never have to manually juggle your accounts again.</p>
</div>
<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>

<div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#F9F8F6] shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-[#C79A5F]/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(199,154,95,0.4)] hover:ring-[#C79A5F]/80 cursor-pointer">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,154,95,0.15),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0">
</div>
<div className="relative z-10 flex flex-col flex-grow">
<div className="flex-grow flex flex-col text-center pt-8 pr-8 pb-6 pl-8 items-center justify-center">
<span className="text-xs font-medium tracking-widest uppercase text-[#1F333E]/60 mb-4 block drop-shadow-sm transition-colors duration-300 group-hover:text-[#1F333E]">CONCLUSION</span>
<h4 className="text-xl font-medium tracking-tight text-[#1F333E] leading-snug mb-3">Bring It All Together</h4>
<p className="text-sm text-[#1F333E]/70 font-normal leading-relaxed">Finalize your personalized Money
                Ecosystem,
                so
                you can walk away with absolute confidence and lasting peace.</p>
</div>
<div className="relative h-28 border-t border-[#C79A5F]/10 bg-gradient-to-t from-[#C79A5F]/5 to-transparent flex items-end justify-between p-5 overflow-hidden">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center justify-end w-32 h-20 opacity-80 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100">
<div className="w-full h-full rounded-t-lg bg-gradient-to-t from-[#C79A5F]/10 to-transparent border-t border-x border-[#C79A5F]/20 flex items-end justify-center pb-2 backdrop-blur-sm">
<div className="w-20 h-10 rounded-t-sm bg-gradient-to-t from-[#C79A5F]/20 to-[#C79A5F]/5 border-t border-x border-[#C79A5F]/30 shadow-[0_0_15px_rgba(199,154,95,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_20px_rgba(199,154,95,0.5)]">
</div>
</div>
</div>
<div className="relative z-10 text-left">
<span className="text-xs font-medium text-[#1F333E]/50 tracking-wider uppercase leading-tight block">Powered by<br/>Brenda &amp; Jennifer</span>
<span className="block text-xs italic font-medium text-[#213945] font-serif mt-1 drop-shadow-sm">Money &amp; Desire</span>
</div>
<div className="relative z-10 text-right">
<span className="text-xs font-semibold text-[#213945] tracking-wider uppercase leading-none block mb-1">Paycheck to</span>
<span className="text-xs font-semibold text-[#C79A5F] tracking-wider uppercase leading-none block drop-shadow-sm">Prosperity</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-[3px] border-[#C79A5F]/80 rounded-xl p-8 md:p-12 w-full max-w-4xl bg-[#F4F1EA] shadow-[0_8px_30px_rgb(0,0,0,0.08)] text-center flex flex-col items-center relative mt-8">

<div className="w-64 h-24 bg-[#EADAB2] shadow-sm flex flex-col items-center justify-center mb-10 relative border border-[#D5CBB3] -mt-8 md:-mt-12 rounded-b-md">
<div className="absolute inset-0 bg-white/20"></div>
<span className="text-2xl font-medium tracking-widest text-[#1F333E] relative z-10" style={{fontFamily: 'ui-serif, Georgia, Cambria, \'Times New Roman\', Times, serif'}}>PDF DOWNLOAD</span>
<iconify-icon className="text-2xl text-[#1F333E]/60 absolute bottom-3 right-5 rotate-[-15deg]" icon="lucide:pen-tool" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1F333E] mb-6">Comprehensive Workbook</h3>
<p className="text-lg font-medium text-[#1F333E]/80 leading-relaxed max-w-3xl mx-auto">
          Your hands-on guide to building a thriving Money Ecosystem. This isn't just about tracking; it's your
          step-by-step blueprint for understanding your cash flow, plugging financial leaks, and intentionally directing
          your money so you feel empowered, in control, and consistently see more in your bank account at the end of the
          month.
        </p>
</div>

<div className="flex items-center justify-center gap-4 w-full max-w-3xl mt-12 mb-4">
<div className="h-px bg-[#C79A5F] flex-1"></div>
<div className="w-2 h-2 bg-[#C79A5F] rotate-45"></div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#C79A5F] px-4">Bonuses</h2>
<div className="w-2 h-2 bg-[#C79A5F] rotate-45"></div>
<div className="h-px bg-[#C79A5F] flex-1"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

<div className="border-[3px] border-[#C79A5F]/80 rounded-xl flex flex-col bg-white overflow-hidden shadow-lg h-full">
<div className="h-40 bg-gradient-to-br from-[#ff9a9e] to-[#fecfef] relative flex items-center justify-center border-b border-[#213945]/5">
<iconify-icon className="text-6xl text-white opacity-90" icon="lucide:sunset" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-6 text-center flex flex-col flex-grow">
<h4 className="text-xl font-semibold tracking-tight text-[#1F333E] mb-3">Picture Your Prosperity</h4>
<p className="text-base font-normal text-[#1F333E]/70 leading-relaxed">
              This guided MP3 meditation is your sacred space to powerfully
              <span className="font-medium text-[#1F333E]">envision and call forth</span> the future you truly desire.
              Create a roadmap of where you are going.
            </p>
</div>
</div>

<div className="border-[3px] border-[#C79A5F]/80 rounded-xl flex flex-col bg-white overflow-hidden shadow-lg h-full">
<div className="h-40 bg-[#F9F8F6] relative flex items-center justify-center border-b border-[#213945]/5">
<iconify-icon className="text-6xl text-[#C79A5F] opacity-90" icon="lucide:calculator" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-6 text-center flex flex-col flex-grow">
<h4 className="text-xl font-semibold tracking-tight text-[#1F333E] mb-3">Bill-Busting Cheat Sheet</h4>
<p className="text-base font-normal text-[#1F333E]/70 leading-relaxed">
              This done-for-you script is your secret weapon! Learn exactly what to say to instantly put more money back
              into your pocket
            </p>
</div>
</div>

<div className="border-[3px] border-[#C79A5F]/80 rounded-xl flex flex-col bg-white overflow-hidden shadow-lg h-full">
<div className="h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative flex items-center justify-center border-b border-[#213945]/5">
<iconify-icon className="text-6xl text-white opacity-90" icon="lucide:brain" strokeWidth="1.5"></iconify-icon>
</div>
<div className="p-6 text-center flex flex-col flex-grow">
<h4 className="text-xl font-semibold tracking-tight text-[#1F333E] mb-3">Manifestation Meditation</h4>
<p className="text-base font-normal text-[#1F333E]/70 leading-relaxed">
              This guided MP3 meditation of affirmations will get your brain and heart aligned and coherent to call in
              more abundance and ease.
            </p>
</div>
</div>
</div>
</div>

<div className="max-w-4xl mx-auto text-left">
<div className="relative overflow-hidden md:p-12 p-8 bg-gradient-to-br from-[#F9F8F6] to-white border-[#213945]/10 border rounded-3xl mb-16 shadow-lg">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-[#C79A5F]/10 blur-[60px] rounded-full pointer-events-none">
</div>
<div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#8FA59A]/10 blur-[60px] rounded-full pointer-events-none">
</div>
<div className="flex items-center justify-center mb-6 relative z-10">
<div className="w-12 h-12 bg-white border border-[#213945]/5 shadow-sm rounded-full flex items-center justify-center text-[#8FA59A]">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z">
</path>
</svg>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#213945] mb-4 text-center relative z-10">Imagine This
          Instead...</h3>
<p className="leading-relaxed z-10 text-base font-normal text-[#213945]/70 text-center max-w-2xl mr-auto mb-10 ml-auto relative">
          You open your accounts… and you feel steady. You know where your money is going. Your bills are handled. Your
          savings are growing. You are not guessing anymore.</p>
<div className="grid sm:grid-cols-2 gap-6 z-10 relative gap-x-6 gap-y-6">
<div className="transition-all duration-300 hover:shadow-md hover:-translate-y-1 bg-white border-[#213945]/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="text-[#8FA59A]/10 absolute top-6 right-6">
<svg className="" fill="currentColor" height="40" stroke="none" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.994v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
</svg>
</div>
<div className="w-8 h-1 bg-[#8FA59A]/40 rounded-full mb-5"></div>
<p className="italic text-sm text-[#213945]/80 leading-relaxed relative z-10">
              "Everything just was taken care of automatically and that has been an incredible source of clarity for me…
              Now
              I love checking in with my accounts. I love knowing where my money is going to go, what my plan is going
              to
              be."
            </p>
</div>
<div className="bg-white p-6 rounded-2xl border border-[#213945]/5 shadow-sm relative transition-all duration-300 hover:shadow-md hover:-translate-y-1">
<div className="text-[#C79A5F]/10 absolute top-6 right-6">
<svg fill="currentColor" height="40" stroke="none" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.994v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z">
</path>
</svg>
</div>
<div className="w-8 h-1 bg-[#C79A5F]/40 rounded-full mb-5"></div>
<p className="italic text-sm text-[#213945]/80 leading-relaxed relative z-10">
              "I am debt free. I have savings accounts. I have investments that I'm making… It has literally changed my
              life. Being in charge now of my money instead of my money being in charge of me."
            </p>
</div>
</div>
</div>
<div className="bg-white border-[#213945]/10 border rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500">
<div className="absolute -top-32 -right-32 w-80 h-80 bg-[#C79A5F]/10 blur-[80px] rounded-full pointer-events-none">
</div>
<div className="absolute -bottom-32 -left-32 w-80 h-80 bg-[#8FA59A]/10 blur-[80px] rounded-full pointer-events-none">
</div>
<div className="flex items-center gap-4 mb-10 relative z-10">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F9F8F6] to-white flex items-center justify-center border border-[#213945]/10 shadow-sm shrink-0 text-[#C79A5F]">
<svg className="lucide lucide-target" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
</div>
<h3 className="md:text-3xl text-2xl font-medium text-[#213945] tracking-tight">By the end, you will have:</h3>
</div>
<ul className="space-y-4 relative z-10">
<li className="group flex gap-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-gradient-to-br from-[#F9F8F6] to-white border-[#213945]/5 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm gap-x-5 gap-y-5 items-center">
<div className="w-8 h-8 rounded-full bg-[#8FA59A]/10 flex items-center justify-center shrink-0 border border-[#8FA59A]/20 group-hover:bg-[#8FA59A]/20 transition-colors duration-300">
<svg className="lucide lucide-check" fill="none" height="16" stroke="#8FA59A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg text-[#213945]/80 font-normal">A clear map of where your money actually flows.</span>
</li>
<li className="group flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-[#F9F8F6] to-white border border-[#213945]/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#8FA59A]/10 flex items-center justify-center shrink-0 border border-[#8FA59A]/20 group-hover:bg-[#8FA59A]/20 transition-colors duration-300">
<svg className="lucide lucide-check" fill="none" height="16" stroke="#8FA59A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg text-[#213945]/80 font-normal">A structured system for bills and essentials.</span>
</li>
<li className="group flex items-center gap-5 p-5 rounded-2xl bg-gradient-to-br from-[#F9F8F6] to-white border border-[#213945]/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
<div className="w-8 h-8 rounded-full bg-[#8FA59A]/10 flex items-center justify-center shrink-0 border border-[#8FA59A]/20 group-hover:bg-[#8FA59A]/20 transition-colors duration-300">
<svg className="lucide lucide-check" fill="none" height="16" stroke="#8FA59A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-lg text-[#213945]/80 font-normal">A way to detect and stop silent spending leaks.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="text-center max-w-5xl mr-auto ml-auto pr-6 pb-32 pl-6">
<h2 className="text-3xl font-medium text-[#213945] tracking-tight mb-12">What Makes This Different?</h2>
<div className="grid md:grid-cols-3 gap-8 text-left gap-x-8 gap-y-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#213945]/5">
<span className="text-[#D6A69F] font-medium text-sm tracking-widest uppercase mb-2 block">Myth</span>
<h4 className="text-xl font-medium text-[#213945] tracking-tight mb-4">"I just need to earn more."</h4>
<span className="text-[#8FA59A] font-medium text-sm tracking-widest uppercase mb-2 block">Truth</span>
<p className="font-normal text-[#213945]/70">More income without structure often becomes more spending.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#213945]/5">
<span className="text-[#D6A69F] font-medium text-sm tracking-widest uppercase mb-2 block">Myth</span>
<h4 className="text-xl font-medium tracking-tight text-[#213945] mb-4">"I need stricter budgeting."</h4>
<span className="text-[#8FA59A] font-medium text-sm tracking-widest uppercase mb-2 block">Truth</span>
<p className="font-normal text-[#213945]/70">Strict budgets work… until life happens. Stress breaks discipline. And
          when
          discipline breaks, the shame cycle begins again. This isn’t about restriction. It’s about creating flow.</p>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-[#213945]/5">
<span className="text-[#D6A69F] font-medium text-sm tracking-widest uppercase mb-2 block">Myth</span>
<h4 className="text-xl font-medium tracking-tight text-[#213945] mb-4">"I’m bad with money."</h4>
<span className="text-[#8FA59A] font-medium text-sm tracking-widest uppercase mb-2 block">Truth</span>
<p className="font-normal text-[#213945]/70">Avoidance is a protection pattern not a personality flaw.</p>
</div>
</div>
</section>

<section className="bg-[#1F333E] text-white py-24 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
<div className="w-48 h-48 bg-[#C79A5F]/20 rounded-full flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon className="text-6xl text-[#C79A5F]" icon="solar:user-circle-linear"></iconify-icon>
</div>
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">Hi, I’m Brenda.</h2>
<p className="text-lg text-white/80 font-normal leading-relaxed mb-6">
          After decades of living paycheck to paycheck, I had a massive epiphany: Money stress isn't a discipline
          problem. It's an architecture problem. Past methods failed because they demanded perfection instead of working
          with my real, messy human life.
        </p>
<p className="text-lg text-white/80 font-normal leading-relaxed">
          When I built what is now the Money Ecosystem Method, everything shifted. Clarity replaced chaos. Confidence
          replaced anxiety. Peace replaced panic. Now, as a recognized financial behaviorist, I’ve helped hundreds of
          women do the same. You don’t have to navigate this blindfolded.
        </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-32">
<div className="text-center mb-16">
<span className="text-xs md:text-sm font-medium text-[#C79A5F] mb-4 block uppercase tracking-widest">Success Stories</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#213945]">
        Women Who Built Their Ecosystem
      </h2>
</div>
<div className="grid md:grid-cols-2 gap-8 items-start">

<div className="bg-white rounded-3xl p-6 border border-[#213945]/5 shadow-lg flex flex-col group h-full">
<div className="relative w-full aspect-video rounded-2xl bg-[#1F333E] mb-6 overflow-hidden cursor-pointer flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#213945] to-[#8FA59A]/30 opacity-80 group-hover:scale-105 transition-transform duration-700">
</div>
<div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-colors">
<iconify-icon className="text-3xl text-white translate-x-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-[#213945] mb-2">"I finally have savings."</h4>
<p className="text-base text-[#213945]/70 font-normal mb-6 flex-1">"Before this, I was terrified of logging into my
          bank account. Now, it's automatic. I don't panic when rent is due, and I actually have a savings cushion for
          the first time."</p>
<div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#213945]/5">
<div className="w-10 h-10 rounded-full bg-[#D6A69F]/20 shrink-0"></div>
<span className="text-sm font-medium text-[#213945] tracking-tight">Sarah J.</span>
</div>
</div>

<div className="bg-[#F9F8F6] rounded-3xl p-8 border border-[#213945]/5 relative h-full flex flex-col">
<iconify-icon className="text-5xl text-[#C79A5F]/20 absolute top-8 right-8" icon="solar:quote-right-linear"></iconify-icon>
<div className="flex items-center gap-1 mb-6 text-[#C79A5F]">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}
