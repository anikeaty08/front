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
      
<div className="min-h-screen flex flex-col">

<header className="border-neutral-800/80 border-b">
<div className="lg:px-6 flex w-full h-16 max-w-none mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-4">
<button className="hover:bg-neutral-900 transition-colors rounded-full pt-2 pr-2 pb-2 pl-2" onclick="const drawer=document.getElementById('mobile-nav-drawer');if(!drawer){console.warn('Drawer element #mobile-nav-drawer not found');}else{drawer.classList.toggle('translate-x-full');drawer.classList.toggle('opacity-0');drawer.classList.toggle('pointer-events-none');}">
<svg className="lucide lucide-menu w-5 h-5 text-neutral-300" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<button className="p-2 rounded-full hover:bg-neutral-900 transition-colors">
<svg className="lucide lucide-search w-5 h-5 text-neutral-300" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
<div className="flex-1 flex justify-center">
<a className="flex items-center gap-3" href="#">
<span className="h-px w-12 bg-neutral-700 hidden sm:block"></span>
<span className="text-3xl sm:text-4xl tracking-tight text-slate-50" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              LEDGERLINE
            </span>
<span className="h-px w-12 bg-neutral-700 hidden sm:block"></span>
</a>
</div>
<div className="flex items-center gap-3">
<button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            Sign in
          </button>
<button className="text-sm font-semibold rounded-full bg-sky-500 hover:bg-sky-400 text-black px-4 py-1.5 transition-colors">
            Get access
          </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

<div className="lg:col-span-3 border-neutral-800 lg:border-r">
<div className="space-y-8">
<article className="space-y-4">
<div className="aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Abstract 3D finance illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-2">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                    Mar 07, 2025 · Market Structure
                  </p>
<h2 className="text-xl tracking-tight font-semibold text-slate-50">
                    When Liquidity Hides in Plain Sight
                  </h2>
<div className="flex items-center gap-3 pt-1">
<img alt="Author avatar" className="w-6 h-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<p className="text-xs font-medium text-neutral-300">
                      ANA RIVERS
                    </p>
</div>
</div>
</article>
<article className="space-y-4 border-t border-neutral-800 pt-6">
<div className="aspect-[4/3] overflow-hidden bg-neutral-900">
<img alt="Neon city finance illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="space-y-2">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                    Mar 05, 2025 · Quant Notes
                  </p>
<h2 className="text-xl tracking-tight font-semibold text-slate-50">
                    The Math Behind Calm Portfolios
                  </h2>
<div className="flex items-center gap-3 pt-1">
<img alt="Author avatar" className="w-6 h-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<p className="text-xs font-medium text-neutral-300">
                      JORDAN LEE
                    </p>
</div>
</div>
</article>
</div>
</div>

<div className="lg:col-span-6 border-neutral-800 lg:border-x">
<article className="space-y-6 lg:space-y-8">
<div className="aspect-[16/9] bg-neutral-900 overflow-hidden">
<img alt="Surreal financial landscape illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="px-0 sm:px-2 lg:px-6 pb-2 sm:pb-4">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-400 uppercase">
                  Mar 08, 2025 · Macro Playbook
                </p>
<h1 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight font-semibold text-slate-50 leading-tight" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
                  The Silent Repricing of Risk Across Global Markets.
                </h1>
<p className="mt-4 text-sm sm:text-base text-neutral-300 max-w-xl">
                  Discover how subtle spread shifts are rewriting the cost of capital, and what it means for portfolios that can’t afford to be late.
                </p>
<div className="mt-6 flex flex-wrap items-center gap-6">
<div className="flex items-center gap-3">
<img alt="Lead analyst avatar" className="w-9 h-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-xs font-medium text-neutral-200">
                        LENA MORROW
                      </p>
<p className="text-[11px] text-neutral-400">
                        Chief Macro Strategist
                      </p>
</div>
</div>
<div className="flex items-center gap-4 text-[11px] text-neutral-400">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>11 min read</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-activity w-3.5 h-3.5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="">Volatility Outlook · Q2</span>
</div>
</div>
<div className="flex items-center gap-3 ml-auto">
<button className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
<svg className="lucide lucide-bookmark w-4 h-4" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
                      Save insight
                    </button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-50 text-black px-4 py-1.5 text-xs font-semibold hover:bg-slate-200 transition-colors">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      Listen summary
                    </button>
</div>
</div>
</div>
</article>
</div>

<aside className="lg:col-span-3">
<div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-5">
<h3 className="text-xs font-semibold tracking-[0.18em] text-neutral-400 uppercase">
                Latest Briefings
              </h3>
<button className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-neutral-200 transition-colors">
                View all
                <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="space-y-5">
<article className="flex gap-3 border-b border-neutral-800 pb-4">
<div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-neutral-900">
<img alt="Article illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                    Rate Cycles
                  </p>
<h4 className="mt-1 text-sm tracking-tight font-semibold text-slate-50">
                    Why Cash Yields Are Quietly Peaking
                  </h4>
<p className="mt-1 text-[11px] font-medium text-neutral-400">
                    BY NOAH TRAN
                  </p>
</div>
</article>
<article className="flex gap-3 border-b border-neutral-800 pb-4">
<div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-neutral-900">
<img alt="Article illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                    Factor Signals
                  </p>
<h4 className="mt-1 text-sm tracking-tight font-semibold text-slate-50">
                    Growth at a Reasonable Volatility
                  </h4>
<p className="mt-1 text-[11px] font-medium text-neutral-400">
                    BY PRIYA DESAI
                  </p>
</div>
</article>
<article className="flex gap-3 border-b border-neutral-800 pb-4">
<div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-neutral-900">
<img alt="Article illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex-1">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                    Portfolio Design
                  </p>
<h4 className="mt-1 text-sm tracking-tight font-semibold text-slate-50">
                    Building Resilient Income Streams
                  </h4>
<p className="mt-1 text-[11px] font-medium text-neutral-400">
                    BY EDITORIAL DESK
                  </p>
</div>
</article>
<article className="flex gap-3">
<div className="w-16 h-16 flex-shrink-0 overflow-hidden bg-neutral-900">
<img alt="Article illustration" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex-1">
<p className="text-[11px] font-medium tracking-[0.18em] text-neutral-500 uppercase">
                    Private Markets
                  </p>
<h4 className="mt-1 text-sm tracking-tight font-semibold text-slate-50">
                    Reading Signals from Secondary Deals
                  </h4>
<p className="mt-1 text-[11px] font-medium text-neutral-400">
                    BY CALEB MOSS
                  </p>
</div>
</article>
</div>

<div className="mt-8 border-t border-neutral-800 pt-5">
<div className="flex items-center justify-between gap-3">
<div className="">
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
                    Built for capital allocators
                  </p>
<p className="mt-1 text-xs text-neutral-300 max-w-xs">
                    Daily research and live dashboards for teams managing over $500M in assets.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors whitespace-nowrap">
                  Book a walkthrough
                  <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</aside>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mr-auto ml-auto pt-4 pb-10 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Built for ledgerline readers
      </p>
<p className="mt-1 text-sm text-neutral-300">
        Explore the tools our research team uses to stay ahead of the tape.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      View all products
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="3D waveform interface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-3">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Monologue
        </h3>
<p className="mt-1.5 text-sm text-neutral-300">
          Effortless voice-to-note capture for calls, briefings, and desk commentary.
        </p>
<button className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-100 group">
          Try it
          <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Analytics dashboard UI" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-3">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Sparkline
        </h3>
<p className="mt-1.5 text-sm text-neutral-300">
          Automatic organization for decks, filings, and chart packs across your team.
        </p>
<button className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-100 group">
          Launch workspace
          <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Email and document interface" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd57a65e-90b3-457c-9901-bd2b26b9d308_800w.webp"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-3">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Cora
        </h3>
<p className="mt-1.5 text-sm text-neutral-300">
          An assistant for your client notes, recaps, and portfolio commentary.
        </p>
<button className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-100 group">
          Meet Cora
          <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Minimal writing application" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6f7940e-9035-4296-86bf-99448faa2b3d_800w.webp"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-3">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Spiral
        </h3>
<p className="mt-1.5 text-sm text-neutral-300">
          Draft investment letters, memos, and IC notes with an editor tuned for markets.
        </p>
<button className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-100 group">
          Start writing
          <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Inside the ledgerline app
      </p>
<p className="mt-1 text-sm text-neutral-300">
        How teams use our finance workspace to track risk, flows, and opportunity in real time.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      Explore the platform
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Analyst using multi-monitor trading dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          One screen for every market
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Stream live rates, credit spreads, and cross-asset flows into a single real-time view tailored to your portfolio.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Portfolio manager avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Desk of a global macro fund
          </p>
</div>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Team collaborating over financial charts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Research that updates itself
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Link notes, charts, and models so that when markets move, your playbooks, IC decks, and client pages stay current.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Research head avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Head of research, multi-asset RIA
          </p>
</div>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Minimal interface with P&amp;L and risk metrics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Risk in plain language
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Translate VaR, factor exposure, and scenario stress tests into narratives your IC and clients can act on.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Risk officer avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Chief risk officer, pension plan
          </p>
</div>
</div>
</article>

<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Investor reviewing portfolio report" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Clear reporting, zero exports
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Share live portfolio pages with LPs and stakeholders, with audit trails for every change to positioning and risk.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Investor relations avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb0b90c07f7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Investor relations lead, credit fund
          </p>
</div>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div className="">
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Dispatches from the frontiers of markets
      </p>
<p className="mt-1 text-sm text-neutral-300">
        The latest pricing regimes, playbooks, and product ideas from global capital markets.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      See all dispatches
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Neon trading floor screens" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Where Liquidity Hides
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          A field guide to tracking off-screen liquidity across dark pools, swaps, and electronic RFQs.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Market microstructure analyst" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Market structure brief
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Statue on marble with financial symbol" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          The Cost of Calm Volatility
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          How structured carry trades are repricing tail risk in rates and credit this cycle.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Quant strategist portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Quant volatility note
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Classical statue with modern chart overlay" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60836b52-c1a1-443a-9029-53fbde35238d_800w.webp"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Seeing Risk Like a Story
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Turn factor models and stress paths into narratives that align CIOs, PMs, and allocators.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Chief investment officer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            CIO perspective
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Global network sphere with financial web" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          A Browser for Flows
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Follow capital moving across currencies, sectors, and factors in a live, navigable view.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Global markets editor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521714161819-15534968fc5b?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Global flows monitor
          </p>
</div>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Signals for portfolio builders
      </p>
<p className="mt-1 text-sm text-neutral-300">
        Ideas, frameworks, and dashboards for teams who rebalance real capital every day.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      Browse all signals
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Team collaborating in modern office" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Building Conviction as a Team
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Replace scattered chats and slides with a single workspace for IC memos and trade trees.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Investment committee leader" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Investment committee playbook
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Minimal multi-monitor trading setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          A Desk That Scales
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          How a three-person macro desk automates monitoring of 300+ tickers with custom views.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Macro portfolio manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb0b90c07f7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Macro desk workflow
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Analyst reviewing printed research pages" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Turning Research into Orders
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Map every thesis to live exposures, so that convictions become trades, not just PDFs.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Equity research analyst" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Research-to-trade mapping
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Colleagues aligning over financial charts" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Alignment in One View
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Give PMs, risk, and operations a single page for exposures, hedges, and comments.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Operations lead avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Ops and risk collaboration
          </p>
</div>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Private markets, clarified
      </p>
<p className="mt-1 text-sm text-neutral-300">
        Tools and stories from teams navigating illiquid assets, secondaries, and long-dated risk.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      Explore private markets
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="City skyline with institutional buildings" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b056fd61-79f8-4064-a59c-a77f4396cc0f_800w.webp"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Secondaries as a Price Signal
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          What recent GP-led deals say about the real clearing value of late-stage growth assets.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Private equity partner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            PE and VC lens
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Architectural spiral staircase representing capital stacks" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7061d497-cead-458a-930c-176708261838_800w.jpg"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Inside the Capital Stack
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Visualizing how mezzanine, senior, and equity tranches absorb shocks through a cycle.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Structured credit analyst" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Structured credit insight
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Laptop with private markets analytics dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Monitoring Illiquidity Premium
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          A live dashboard for comparing private fund marks to public market proxies and spreads.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Institutional allocator portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            LP portfolio console
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Person walking through long corridor of columns" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Duration Without Drama
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Design long-dated mandates that can stomach drawdowns without compromising commitments.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Sovereign wealth fund manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Sovereign and endowment focus
          </p>
</div>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div>
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Risk and compliance in real time
      </p>
<p className="mt-1 text-sm text-neutral-300">
        Keep regulators, boards, and clients aligned with a single audit-ready view of risk.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      View risk tools
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Secure vault door with financial motif" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Audit Trails by Default
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Every change to risk settings, limits, and exposures is logged, searchable, and exportable on demand.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Chief compliance officer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb0b90c07f7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            CCO console
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Compliance officer reviewing digital dashboard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Real-Time Limit Monitoring
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Watch guideline breaches in real time across issuers, sectors, and counterparties.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Risk manager avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Risk limits dashboard
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Boardroom meeting with city lights outside" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Brief Your Board in Minutes
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Pre-built views translate technical risk metrics into board-ready summaries with context.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Board liaison headshot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Governance toolkit
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Night view of financial district bridges" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Cross-Border Ready
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Track regional rules, reporting calendars, and document versions in one harmonized view.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Global compliance lead" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Cross-jurisdiction hub
          </p>
</div>
</div>
</article>
</div>
</section><section className="lg:px-6 lg:py-10 max-w-6xl mx-auto pt-6 pb-12 px-4 border-t border-neutral-900">
<div className="flex items-center justify-between gap-4 mb-6">
<div className="">
<p className="text-[11px] font-semibold tracking-[0.18em] text-neutral-400 uppercase">
        Client-ready, every morning
      </p>
<p className="mt-1 text-sm text-neutral-300">
        Transform raw market noise into concise, branded updates that clients actually read.
      </p>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-neutral-700 px-3.5 py-1.5 text-[11px] font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
      Explore reporting flows
      <svg className="lucide lucide-arrow-up-right w-3.5 h-3.5" data-lucide="arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Morning skyline over financial district" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Open with the Right Story
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Auto-generate a morning brief that marries overnight moves with positions that matter to each client.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Wealth advisor avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544723795-432537d12f6c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Private wealth workflow
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Minimal letter on desk with laptop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618385455730-2571c38966b7?w=800&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Letters that Land
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Draft quarterly letters with plain-language summaries of risk, attribution, and outlook in one pass.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Investor relations officer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            LP communication suite
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Presenter sharing charts with group in dark room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Meeting-Ready in One Click
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Spin up client decks directly from live dashboards—no copying charts into slides.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="Client coverage banker" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Coverage team toolkit
          </p>
</div>
</div>
</article>
<article className="border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/60 transition-colors flex flex-col">
<div className="aspect-[4/3] border-b border-neutral-800 overflow-hidden">
<img alt="Digital globe with communication lines" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col px-4 pt-4 pb-4">
<h3 className="text-lg tracking-tight font-semibold text-slate-50">
          Personalized at Scale
        </h3>
<p className="mt-2 text-sm text-neutral-300">
          Send tailored insights to thousands of accounts, each mapped to its own mandate and risk profile.
        </p>
<div className="mt-4 flex items-center gap-2">
<div className="h-6 w-6 rounded-full overflow-hidden bg-neutral-800">
<img alt="CRM lead avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<p className="text-[11px] font-medium text-neutral-400 uppercase">
            Scaled personalization engine
 </p>
</div>
</div>
</article>
</div>
</section>
</main>
</div><footer className="border-t border-neutral-900 mt-4">
<div className="max-w-6xl mx-auto px-4 lg:px-6 py-10 lg:py-14">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

<div className="lg:col-span-7">
<div className="space-y-4">
<div className="flex items-center gap-3">
<span className="text-3xl sm:text-[2.35rem] tracking-tight text-slate-50" style={{fontFamily: '\'Playfair Display\', ui-serif'}}>
              LEDGERLINE
            </span>
</div>
<h2 className="text-2xl sm:text-[1.9rem] tracking-tight font-semibold text-slate-50">
            What Comes After the Tape
          </h2>
<p className="text-sm sm:text-base text-neutral-300 max-w-xl">
            New ideas, live setups, and research notes to help you see the next move in global markets—delivered a few times a week.
          </p>
</div>

<form className="mt-6 space-y-3 max-w-md">
<label className="block text-[11px] font-medium tracking-[0.16em] text-neutral-400 uppercase" htmlFor="footer-email">
            Email address
          </label>
<div className="flex flex-col gap-3">
<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-500">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</span>
<input className="w-full bg-black/40 border border-neutral-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-sm pl-10 pr-3 py-2.5 text-sm text-slate-100 placeholder:text-neutral-500 outline-none transition-colors" id="footer-email" placeholder="example@domain.com" type="email"/>
</div>
<button className="inline-flex justify-center items-center rounded-sm bg-sky-500 hover:bg-sky-400 text-black text-sm font-semibold px-4 py-2.5 transition-colors" type="submit">
              Subscribe
            </button>
</div>
<p className="mt-2 text-[10px] leading-relaxed text-neutral-500 max-w-xs">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </p>
</form>
<p className="mt-6 text-[11px] text-neutral-500">
          ©2025 Ledgerline Research, Inc.
        </p>
</div>

<div className="lg:col-span-5">
<div className="grid grid-cols- gap-8 sm:gap-10 lg:gap-12">
<div className="space-y-3 text-sm">
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              About
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Jobs
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Contact us
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Advertise with us
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              The team
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              FAQ
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Terms
            </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Privacy
 </a>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
              Site map
            </a>
</div>
<div className="space-y-3 text-sm">
<div>
<p className="text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase mb-1.5">
                Social
              </p>
<a className="flex items-center justify-between text-neutral-100 hover:text-sky-400 transition-colors" href="#">
<span>X</span>
<span className="text-[11px] text-neutral-500">↗</span>
</a>
<a className="mt-1 flex items-center justify-between text-neutral-100 hover:text-sky400 transition-colors" href="#">
<span>LinkedIn</span>
<span className="text-[11px] text-neutral-500">↗</span>
</a>
<a className="mt-1 flex items-center justify-between text-neutral-100 hover:text-sky-400 transition-colors" href="#">
<span>YouTube</span>
<span className="text-[11px] text-neutral-500">↗</span>
</a>
</div>
<div className="pt-4 border-t border-neutral-800 mt-4">
<p className="text-[11px] font-medium tracking-[0.16em] text-neutral-500 uppercase mb-1.5">
                For teams
              </p>
<a className="block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
                Book a demo
              </a>
<a className="mt-1 block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
                Enterprise
              </a>
<a className="mt-1 block text-neutral-100 hover:text-sky-400 transition-colors" href="#">
                Press
              </a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
