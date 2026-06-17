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

      // Scroll Animation Logic
      const lines = [
        "Eliminate manual data entry.",
        "Auto-enrich leads before you wake up.",
        "Draft hyper-personalized outreach.",
        "Route hot leads to Slack instantly.",
        "Sync everything to Salesforce."
      ];

      const container = document.getElementById('dynamic-lines');
      let currentScroll = 0;
      let targetScroll = 0;
      
      // Initial Population
      lines.forEach((text, index) => {
        const div = document.createElement('div');
        div.className = `absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0`;
        div.style.willChange = 'transform, opacity';
        
        div.innerHTML = `
          <div class="w-1.5 h-1.5 bg-black rounded-sm"></div>
          <p class="font-mono text-xs text-neutral-800">${text}</p>
        `;
        container.appendChild(div);
      });

      const lineElements = document.querySelectorAll('.scroll-line');
      
      // Auto-play animation
      let autoPlayIndex = 0;
      
      function runAutoLoop() {
        const total = lines.length;
        
        lineElements.forEach((el, index) => {
          if(index === autoPlayIndex) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0px)';
            el.style.transition = 'all 0.5s ease-out';
          } else {
             el.style.opacity = '0';
             // Push others slightly down or up depending on relation
             el.style.transform = index > autoPlayIndex ? 'translateY(15px)' : 'translateY(-15px)';
             el.style.transition = 'all 0.5s ease-out';
          }
        });

        autoPlayIndex = (autoPlayIndex + 1) % total;
        setTimeout(runAutoLoop, 2500); // Change text every 2.5 seconds
      }

      // Start loop
      runAutoLoop();

    
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
      

<main className="flex-1 flex flex-col w-full h-full p-4 md:p-6 lg:px-10 max-w-[1920px] mx-auto justify-between relative z-10">

<header className="w-full shrink-0 border-b border-neutral-100 pb-4 md:pb-5 animate-in">
<div className="flex flex-row overflow-x-auto md:grid md:grid-cols-12 gap-x-6 md:gap-x-8 gap-y-4 no-scrollbar items-start snap-x snap-mandatory">

<div className="min-w-[200px] md:min-w-0 md:col-span-3 snap-start flex flex-col gap-2.5">
<div className="flex gap-x-2 gap-y-2 items-center">
<div className="relative w-7 h-7 rounded bg-neutral-100 overflow-hidden border border-neutral-200">
<img alt="Profile" className="opacity-80 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d77d2321-9b43-485e-acf2-8ad071f3d58b_1600w.png"/>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-black tracking-tight leading-none">Manatsanan F.</span>
<span className="text-[10px] text-neutral-400 font-mono mt-0.5">AI Sales Engineer</span>
</div>
</div>
<div className="text-[10px] leading-relaxed text-neutral-500 font-mono">
              Based in Oslo. <br/>
              Building automated revenue engines.
            </div>
</div>

<div className="min-w-[140px] md:min-w-0 md:col-span-2 snap-start flex flex-col gap-1.5 pt-0.5">
<div className="flex items-center gap-1.5 mb-0.5">
<div className="w-1 h-1 rounded-full bg-blue-500"></div>
<span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Impact</span>
</div>
<div className="font-mono text-[10px] space-y-0.5">
<div className="flex justify-between w-full border-b border-dashed border-neutral-200 pb-0.5">
<span className="text-neutral-500">Pipeline</span>
<span className="text-black">5.0x</span>
</div>
<div className="flex justify-between w-full border-b border-dashed border-neutral-200 pb-0.5">
<span className="text-neutral-500">Velocity</span>
<span className="text-black">-40%</span>
</div>
<div className="flex justify-between w-full pt-0.5">
<span className="text-neutral-500">Savings</span>
<span className="text-black">15h/w</span>
</div>
</div>
</div>

<div className="min-w-[160px] md:min-w-0 md:col-span-3 snap-start flex flex-col gap-1.5 pt-0.5">
<div className="flex items-center gap-1.5 mb-0.5">
<div className="w-1 h-1 rounded-full bg-purple-500"></div>
<span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Integrations</span>
</div>
<div className="flex flex-wrap gap-1">
<span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-[9px] font-mono text-black rounded-sm">Salesforce</span>
<span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-[9px] font-mono text-black rounded-sm">HubSpot</span>
<span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-[9px] font-mono text-neutral-500 rounded-sm">Apollo</span>
<span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-[9px] font-mono text-neutral-500 rounded-sm">Clay</span>
<span className="px-1.5 py-0.5 bg-neutral-50 border border-neutral-200 text-[9px] font-mono text-neutral-500 rounded-sm">OpenAI</span>
</div>
</div>

<div className="min-w-[130px] md:min-w-0 md:col-span-2 snap-start flex flex-col gap-1.5 pt-0.5">
<div className="flex items-center gap-1.5 mb-0.5">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div>
<span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Trust</span>
</div>
<ul className="font-mono text-[10px] text-neutral-500 space-y-0.5">
<li className="flex items-center gap-1.5"><svg className="lucide lucide-check w-2.5 h-2.5 text-emerald-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Verified Partner</li>
<li className="flex items-center gap-1.5"><svg className="lucide lucide-award w-2.5 h-2.5 text-neutral-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> Top Rated '24</li>
</ul>
</div>

<div className="min-w-[160px] md:min-w-0 md:col-span-2 snap-start flex flex-col justify-between pt-0.5 pr-4 md:pr-0 h-full gap-2">
<div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
<span>Status</span>
<span className="text-emerald-600 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span> Open</span>
</div>
<button className="group w-full flex items-center justify-between bg-black text-white px-2.5 py-1.5 hover:bg-neutral-800 transition-colors duration-300">
<span className="font-mono text-[9px] uppercase tracking-widest">Book Audit</span>
<svg className="lucide lucide-arrow-up-right w-2.5 h-2.5 text-neutral-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</header>

<section className="flex-1 flex flex-col justify-center py-4 relative animate-in delay-100">
<div className="w-full max-w-5xl">
<h1 className="sm:text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-[1.1] text-3xl font-medium text-black tracking-tight">
            Stop doing admin.<br/>
<span className="text-neutral-300">Start closing deals.</span>
</h1>
<div className="mt-5 md:mt-6 flex flex-col md:flex-row md:items-end gap-5 md:gap-10">
<p className="text-sm md:text-lg text-neutral-500 font-light max-w-lg leading-relaxed">
              I deploy custom AI agents that automate your entire outbound stack—from enrichment to scheduling—saving your reps 15+ hours a week.
            </p>

<div className="h-8 md:h-10 w-full md:w-auto min-w-[280px] border-l-2 border-neutral-100 pl-3 flex items-center overflow-hidden relative group">
<div className="relative w-full h-full" id="dynamic-lines">

<div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(-15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Eliminate manual data entry.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '1', transform: 'translateY(0px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Auto-enrich leads before you wake up.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Draft hyper-personalized outreach.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Route hot leads to Slack instantly.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Sync everything to Salesforce.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Eliminate manual data entry.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Auto-enrich leads before you wake up.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Draft hyper-personalized outreach.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Route hot leads to Slack instantly.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Sync everything to Salesforce.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Eliminate manual data entry.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Auto-enrich leads before you wake up.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Draft hyper-personalized outreach.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Route hot leads to Slack instantly.</p>
</div><div className="absolute top-0 left-0 w-full flex items-center gap-3 scroll-line opacity-0" style={{willChange: 'transform, opacity', opacity: '0', transform: 'translateY(15px)', transition: '0.5s ease-out'}}>
<div className="w-1.5 h-1.5 bg-black rounded-sm"></div>
<p className="font-mono text-xs text-neutral-800">Sync everything to Salesforce.</p>
</div></div>
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section>


<footer className="w-full shrink-0 flex flex-col gap-2 animate-in delay-200 pb-2">
<div className="flex items-center justify-between border-b border-neutral-200 pb-2">
<div className="flex items-center gap-2">
<span className="text-[9px] font-mono uppercase tracking-widest text-black">Case Studies</span>
<span className="px-1 py-px rounded-full bg-neutral-100 text-neutral-500 text-[8px] font-mono border border-neutral-200">05</span>
</div>
<div className="hidden md:flex gap-1.5">
<button className="w-6 h-6 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors rounded-full" onclick="document.getElementById('carousel').scrollBy({left: -240, behavior: 'smooth'})">
<svg className="lucide lucide-arrow-left w-2.5 h-2.5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-6 h-6 flex items-center justify-center border border-neutral-200 hover:border-black transition-colors rounded-full" onclick="document.getElementById('carousel').scrollBy({left: 240, behavior: 'smooth'})">
<svg className="lucide lucide-arrow-right w-2.5 h-2.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory w-full h-[160px] md:h-[200px]" id="carousel">

<article className="snap-start shrink-0 w-[220px] md:w-[280px] group cursor-pointer flex flex-col h-full relative">
<div className="flex-1 w-full relative overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="Finance Project" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-2 left-3 right-3 text-white">
<div className="flex items-center gap-2 mb-0.5">
<span className="px-1 py-px bg-white/20 backdrop-blur-md border border-white/30 text-[8px] font-mono uppercase tracking-widest rounded-sm">FinTech</span>
</div>
<h3 className="text-xs font-medium leading-tight">Automated Outbound</h3>
</div>
</div>
<div className="mt-1.5 flex justify-between items-end border-t border-transparent group-hover:border-neutral-200 pt-1.5 transition-all">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Result</span>
<span className="text-[10px] font-mono text-black mt-px">+38% meetings booked</span>
</div>
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-300 group-hover:text-black transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</article>

<article className="snap-start shrink-0 w-[220px] md:w-[280px] group cursor-pointer flex flex-col h-full relative">
<div className="flex-1 w-full relative overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="Agency Project" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-2 left-3 right-3 text-white">
<div className="flex items-center gap-2 mb-0.5">
<span className="px-1 py-px bg-white/20 backdrop-blur-md border border-white/30 text-[8px] font-mono uppercase tracking-widest rounded-sm">Agency</span>
</div>
<h3 className="text-xs font-medium leading-tight">CRM Enrichment</h3>
</div>
</div>
<div className="mt-1.5 flex justify-between items-end border-t border-transparent group-hover:border-neutral-200 pt-1.5 transition-all">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Result</span>
<span className="text-[10px] font-mono text-black mt-px">15hrs saved/week</span>
</div>
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-300 group-hover:text-black transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</article>

<article className="snap-start shrink-0 w-[220px] md:w-[280px] group cursor-pointer flex flex-col h-full relative">
<div className="flex-1 w-full relative overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="SaaS Project" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-2 left-3 right-3 text-white">
<div className="flex items-center gap-2 mb-0.5">
<span className="px-1 py-px bg-white/20 backdrop-blur-md border border-white/30 text-[8px] font-mono uppercase tracking-widest rounded-sm">B2B SaaS</span>
</div>
<h3 className="text-xs font-medium leading-tight">Multi-channel Agents</h3>
</div>
</div>
<div className="mt-1.5 flex justify-between items-end border-t border-transparent group-hover:border-neutral-200 pt-1.5 transition-all">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Result</span>
<span className="text-[10px] font-mono text-black mt-px">3x Qualified Deal Flow</span>
</div>
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-300 group-hover:text-black transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</article>

<article className="snap-start shrink-0 w-[220px] md:w-[280px] group cursor-pointer flex flex-col h-full relative pr-4">
<div className="flex-1 w-full relative overflow-hidden bg-neutral-100 border border-neutral-200">
<img alt="Data Project" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
<div className="absolute bottom-2 left-3 right-3 text-white">
<div className="flex items-center gap-2 mb-0.5">
<span className="px-1 py-px bg-white/20 backdrop-blur-md border border-white/30 text-[8px] font-mono uppercase tracking-widest rounded-sm">Data Cleanse</span>
</div>
<h3 className="text-xs font-medium leading-tight">List Verification</h3>
</div>
</div>
<div className="mt-1.5 flex justify-between items-end border-t border-transparent group-hover:border-neutral-200 pt-1.5 transition-all">
<div className="flex flex-col">
<span className="text-[9px] text-neutral-400 font-mono uppercase tracking-widest">Result</span>
<span className="text-[10px] font-mono text-black mt-px">99.9% Deliverability</span>
</div>
<svg className="lucide lucide-arrow-up-right w-3 h-3 text-neutral-300 group-hover:text-black transition-colors" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</article>
</div>
</footer>
</main>


    </>
  );
}
