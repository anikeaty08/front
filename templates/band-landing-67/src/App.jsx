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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53a136eb-a113-4e6a-8c63-eb05159df1a2_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="fixed inset-0 z-0 pointer-events-none">
<img alt="" className="h-full w-full object-cover opacity-60 brightness-[0.7] contrast-[1.1] grayscale-[30%] sepia-[40%] hidden" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/> 
<div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-walnut-950)]/95 via-[var(--color-deep-walnut-950)]/40 to-[var(--color-deep-walnut-950)]/70"></div>
<div className="absolute inset-0 bg-[var(--color-deep-walnut-900)]/20 mix-blend-overlay"></div>
</div>

<header className="fixed z-50 flex md:px-12 lg:px-20 border-[var(--color-deep-walnut-200)]/10 transition-all duration-300 w-full border-b pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-medium tracking-tight text-[var(--color-deep-walnut-50)]">Frute<span className="text-[0.6rem] align-top ml-0.5 opacity-60 text-[var(--color-harvest-gold-400)]">®</span></span>
</div>
<nav className="hidden md:flex gap-x-10 gap-y-10 items-center">
<a className="text-[var(--color-deep-walnut-200)] hover:text-[var(--color-harvest-gold-300)] transition-colors uppercase text-xl font-medium tracking-widest" href="#music">Music <span className="align-top text-[0.5rem] opacity-50">01</span></a>
<a className="text-[var(--color-deep-walnut-200)] hover:text-[var(--color-harvest-gold-300)] transition-colors uppercase text-xl font-medium tracking-widest" href="#tour">Tour <span className="align-top text-[0.5rem] opacity-50">02</span></a>
<a className="text-[var(--color-deep-walnut-200)] hover:text-[var(--color-harvest-gold-300)] transition-colors uppercase text-xl font-medium tracking-widest" href="#media">Media <span className="align-top text-[0.5rem] opacity-50">03</span></a>
</nav>
<a className="group flex items-center gap-2 bg-[var(--color-deep-walnut-50)]/5 hover:bg-[var(--color-deep-walnut-50)]/10 text-[var(--color-deep-walnut-50)] hover:text-[var(--color-harvest-gold-100)] border border-[var(--color-deep-walnut-200)]/20 hover:border-[var(--color-harvest-gold-400)]/30 px-4 py-2 rounded-full transition-all duration-300" href="#">
<span className="text-xs font-medium tracking-tight">Listen Now</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 transition-transform group-hover:rotate-45 text-[var(--color-harvest-gold-400)]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</header>

<main className="relative w-full flex flex-col items-center">

<section className="min-h-screen flex flex-col w-full pt-24 relative justify-between">

<div className="absolute inset-0 z-0 pointer-events-none border-x border-[var(--color-deep-walnut-200)]/5 mx-6 md:mx-12 lg:mx-20 h-full"></div>

<div className="z-10 flex-1 flex flex-col md:px-12 lg:px-20 md:pb-0 md:mt-0 mt-10 pr-6 pb-12 pl-6 relative justify-center">
<div className="max-w-3xl space-y-8">

<div className="flex items-center gap-3">
<span className="text-[var(--color-red-ochre-400)] font-mono text-sm tracking-wide">[ Frute™ ]</span>
<span className="h-px w-8 bg-[var(--color-deep-walnut-200)]/30"></span>
<span className="text-[var(--color-deep-walnut-300)] font-mono text-sm tracking-wide uppercase"></span>
</div>

<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="px-7 py-3.5 rounded-full font-medium text-base text-[var(--color-deep-walnut-50)] border border-[var(--color-deep-walnut-200)]/30 hover:bg-[var(--color-deep-walnut-100)]/5 hover:border-[var(--color-harvest-gold-400)]/50 transition-colors backdrop-blur-sm">
                            View Tour Dates
                        </button>
</div>
</div>
</div>

<div className="absolute left-6 md:left-12 lg:left-20 bottom-32 md:bottom-40 z-10 hidden md:block">
<p className="font-mono text-xs text-[var(--color-deep-walnut-300)] tracking-widest uppercase mb-2">Current Mood</p>
<p className="text-lg font-normal tracking-tight text-[var(--color-deep-walnut-100)]"></p>
</div>

<div className="relative w-full z-10 select-none overflow-hidden pb-10 md:pb-0">
<div className="absolute top-0 w-full border-t border-[var(--color-deep-walnut-200)]/10"></div>
<div className="flex md:px-8 md:pt-10 md:pb-10 w-full pt-10 pr-2 pb-10 pl-2 items-end justify-between">
<h2 className="text-[22vw] leading-[0.75] -mb-[3vw] text-[var(--color-deep-walnut-50)] font-medium tracking-tighter opacity-90 mix-blend-soft-light pb-5 relative">
    Frute
</h2>
<div className="md:mb-20 md:mr-10 flex flex-col gap-4 z-50 mr-4 mb-12 items-end">
</div>
</div>
</div>
</section>

<section className="md:py-32 border-[var(--color-deep-walnut-200)]/10 z-20 bg-gradient-to-tl from-[#DA8E24] to-[#DA8E24]/40 w-full border-t pt-20 pb-20 relative" id="tour">

<div className="absolute top-0 left-12 w-px h-full bg-[var(--color-deep-walnut-200)]/5 hidden md:block"></div>
<div className="absolute top-0 right-12 w-px h-full bg-[var(--color-deep-walnut-200)]/5 hidden md:block"></div>
<div className="md:px-12 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div className="">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-[var(--color-red-ochre-500)] animate-pulse"></span>
</div>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--color-deep-walnut-50)]">Tour Dates</h3>
</div>
<div className="flex items-center gap-4 text-[var(--color-deep-walnut-300)]">
<span className="text-sm">2024 / 2025 Season</span>
</div>
</div>

<div className="flex flex-col w-full border-t border-[var(--color-deep-walnut-200)]/10">

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-deep-walnut-200)]/10 hover:bg-[var(--color-deep-walnut-50)]/5 transition-colors px-4 -mx-4 rounded-lg">
<div className="flex items-start md:items-center gap-8 md:w-1/3">
<div className="flex flex-col">
<span className="font-mono text-xs text-[var(--color-deep-walnut-400)] uppercase tracking-wide">Oct 24</span>
<span className="text-xl font-medium text-[var(--color-deep-walnut-50)]">Thu 20:00</span>
</div>
</div>
<div className="flex flex-col md:w-1/3 mt-4 md:mt-0">
<span className="text-lg font-medium text-[var(--color-deep-walnut-100)] group-hover:text-[var(--color-harvest-gold-300)] transition-colors">The Velvet Room</span>
<span className="text-sm text-[var(--color-deep-walnut-400)]">London, UK</span>
</div>
<div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
<a className="px-6 py-2 rounded-full border border-[var(--color-deep-walnut-200)]/20 text-sm font-medium text-[var(--color-deep-walnut-100)] group-hover:bg-[var(--color-red-ochre-500)] group-hover:border-[var(--color-red-ochre-500)] group-hover:text-white transition-all duration-300 flex items-center gap-2" href="#">
                                Tickets
                                <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-deep-walnut-200)]/10 hover:bg-[var(--color-deep-walnut-50)]/5 transition-colors px-4 -mx-4 rounded-lg">
<div className="flex items-start md:items-center gap-8 md:w-1/3">
<div className="flex flex-col">
<span className="font-mono text-xs text-[var(--color-deep-walnut-400)] uppercase tracking-wide">Nov 02</span>
<span className="text-xl font-medium text-[var(--color-deep-walnut-50)]">Sat 21:30</span>
</div>
</div>
<div className="flex flex-col md:w-1/3 mt-4 md:mt-0">
<span className="text-lg font-medium text-[var(--color-deep-walnut-100)] group-hover:text-[var(--color-harvest-gold-300)] transition-colors">Echo Hall</span>
<span className="text-sm text-[var(--color-deep-walnut-400)]">Berlin, DE</span>
</div>
<div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
<a className="px-6 py-2 rounded-full border border-[var(--color-deep-walnut-200)]/20 text-sm font-medium text-[var(--color-deep-walnut-100)] group-hover:bg-[var(--color-red-ochre-500)] group-hover:border-[var(--color-red-ochre-500)] group-hover:text-white transition-all duration-300 flex items-center gap-2" href="#">
                                Tickets
                                <svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-deep-walnut-200)]/10 hover:bg-[var(--color-deep-walnut-50)]/5 transition-colors px-4 -mx-4 rounded-lg">
<div className="flex items-start md:items-center gap-8 md:w-1/3">
<div className="flex flex-col">
<span className="font-mono text-xs text-[var(--color-deep-walnut-400)] uppercase tracking-wide">Nov 15</span>
<span className="text-xl font-medium text-[var(--color-deep-walnut-50)]">Fri 20:00</span>
</div>
</div>
<div className="flex flex-col md:w-1/3 mt-4 md:mt-0">
<span className="text-lg font-medium text-[var(--color-deep-walnut-100)] group-hover:text-[var(--color-harvest-gold-300)] transition-colors">Le Poisson Rouge</span>
<span className="text-sm text-[var(--color-deep-walnut-400)]">New York, NY</span>
</div>
<div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
<span className="px-6 py-2 rounded-full border border-[var(--color-deep-walnut-200)]/10 text-sm font-medium text-[var(--color-deep-walnut-500)] cursor-not-allowed">
                                Sold Out
                            </span>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-[var(--color-deep-walnut-200)]/10 hover:bg-[var(--color-deep-walnut-50)]/5 transition-colors px-4 -mx-4 rounded-lg">
<div className="flex items-start md:items-center gap-8 md:w-1/3">
<div className="flex flex-col">
<span className="font-mono text-xs text-[var(--color-deep-walnut-400)] uppercase tracking-wide">Dec 10</span>
<span className="text-xl font-medium text-[var(--color-deep-walnut-50)]">Tue 19:30</span>
</div>
</div>
<div className="flex flex-col md:w-1/3 mt-4 md:mt-0">
<span className="text-lg font-medium text-[var(--color-deep-walnut-100)] group-hover:text-[var(--color-harvest-gold-300)] transition-colors">The Fonda</span>
<span className="text-sm text-[var(--color-deep-walnut-400)]">Los Angeles, CA</span>
</div>
<div className="md:w-1/3 flex justify-end mt-6 md:mt-0">
<a className="px-6 py-2 rounded-full border border-[var(--color-deep-walnut-200)]/20 text-sm font-medium text-[var(--color-deep-walnut-100)] group-hover:bg-[var(--color-red-ochre-500)] group-hover:border-[var(--color-red-ochre-500)] group-hover:text-white transition-all duration-300 flex items-center gap-2" href="#">
                                Tickets
                                <svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-[var(--color-harvest-gold-400)] hover:text-[var(--color-harvest-gold-300)] transition-colors border-b border-transparent hover:border-[var(--color-harvest-gold-300)] pb-0.5" href="#">
                        View All Past Dates
                    </a>
</div>
</div>
</section>

<section className="border-[var(--color-deep-walnut-200)]/10 md:pb-32 md:px-12 lg:px-20 z-20 bg-gradient-to-tl from-[#CE3D11] to-[#CE3D11]/40 w-full border-t pb-24 relative" id="media">

<div className="absolute top-0 left-12 w-px h-full bg-[var(--color-deep-walnut-200)]/5 hidden md:block"></div>
<div className="absolute top-0 right-12 w-px h-full bg-[var(--color-deep-walnut-200)]/5 hidden md:block"></div>
<div className="max-w-7xl mr-auto ml-auto pt-20">
<div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 gap-x-4 gap-y-4 justify-between">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[var(--color-deep-walnut-50)]">Latest Visuals</h3>
<a className="text-sm font-medium text-[var(--color-deep-walnut-300)] hover:text-[var(--color-deep-walnut-100)] flex items-center gap-2 transition-colors" href="#">
                        Visit YouTube Channel
                        <svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative cursor-pointer">
<div className="aspect-video overflow-hidden border-[var(--color-deep-walnut-200)]/10 rounded-md relative">

<div className="absolute inset-0 bg-gradient-to-br from-[var(--color-deep-walnut-800)] to-[var(--color-deep-walnut-950)] opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"></div>

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute inset-0 w-full h-full z-10 bg-black">
<iframe allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" className="w-full h-full object-cover" data-ready="true" frameborder="0" height="100%" referrerpolicy="strict-origin-when-cross-origin" src="https://player.vimeo.com/video/1099814694?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" title="change_your_mind_-_final (2160p)" width="100%"></iframe>
</div>

<div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
<span className="text-[10px] font-mono uppercase tracking-wider text-white">Music Video</span>
</div>
</div>
<div className="flex mt-4 items-start justify-between">
<div className="">
<h4 className="text-lg font-medium text-[var(--color-deep-walnut-50)] leading-tight group-hover:text-[var(--color-harvest-gold-300)] transition-colors">Change Your Mind</h4>
<p className="text-sm text-[var(--color-deep-walnut-400)] mt-1">Directed by Sarah O'Connor</p>
</div>
<span className="text-xs font-mono text-[var(--color-deep-walnut-500)]">03:45</span>
</div>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-video overflow-hidden border-[var(--color-deep-walnut-200)]/10 rounded-xl relative">
<div className="absolute inset-0 bg-gradient-to-bl from-[var(--color-harvest-gold-900)] to-[var(--color-deep-walnut-950)] opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-[var(--color-deep-walnut-50)]/10 backdrop-blur-md border border-[var(--color-deep-walnut-50)]/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--color-red-ochre-500)] group-hover:border-transparent transition-all duration-300">
<svg className="w-6 h-6 text-[var(--color-deep-walnut-50)] fill-current" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
<div className="absolute top-4 left-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
<span className="text-[10px] font-mono uppercase tracking-wider text-white">Live Session</span>
</div>
</div>
<div className="flex mt-4 items-start justify-between">
<div className="">
<h4 className="text-lg font-medium text-[var(--color-deep-walnut-50)] leading-tight group-hover:text-[var(--color-harvest-gold-300)] transition-colors">Live at KEXP</h4>
<p className="text-sm text-[var(--color-deep-walnut-400)] mt-1">Recorded in Seattle</p>
</div>
<span className="text-xs font-mono text-[var(--color-deep-walnut-500)]">24:12</span>
</div>
</div>
</div>

</div>
</section>

<footer className="w-full py-12 border-t border-[var(--color-deep-walnut-200)]/10 bg-[var(--color-deep-walnut-950)] text-center">
<div className="flex flex-col items-center gap-4">
<span className="text-xl font-medium tracking-tight text-[var(--color-deep-walnut-500)] opacity-50">Frute</span>
<p className="text-xs text-[var(--color-deep-walnut-400)]">© 2024 Frute Music Group. All rights reserved.</p>
</div>
</footer>
</main>


    </>
  );
}
