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



    document.addEventListener("DOMContentLoaded", function () {
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
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
      
<div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900">

<header className="w-full border-b border-slate-800/80 backdrop-blur-md bg-slate-950/70">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2 whitespace-nowrap">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-500 flex items-center justify-center shadow-lg shadow-emerald-500/40">
<span className="text-xs font-semibold tracking-tight text-slate-950">CB</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-lg sm:text-xl font-semibold tracking-tight">CasinoBoard</span>
<span className="text-xs sm:text-sm text-slate-400">Curated online casinos</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm">
<button className="text-slate-300 hover:text-slate-50 transition-colors">Top Rated</button>
<button className="text-slate-300 hover:text-slate-50 transition-colors">New Casinos</button>
<button className="text-slate-300 hover:text-slate-50 transition-colors">Bonuses</button>
<button className="text-slate-300 hover:text-slate-50 transition-colors">Guides</button>
</nav>

<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 sm:px-4 py-1.5 text-xs sm:text-sm text-slate-200 hover:bg-slate-800/80 transition-colors">
<i className="w-4 h-4" data-lucide="bookmark"></i>
<span>Saved</span>
</button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 font-medium tracking-tight px-3 sm:px-4 py-1.5 text-xs sm:text-sm shadow-md shadow-emerald-500/40 transition-colors">
<i className="w-4 h-4" data-lucide="log-in"></i>
<span>Sign In</span>
</button>
</div>
</div>
</header>

<main className="flex-1 w-full">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">

<section className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

<div className="flex-1 space-y-5">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-xs sm:text-sm text-emerald-200/90">Trusted casino reviews &amp; bonuses</span>
</div>
<div className="space-y-2 sm:space-y-3">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                Find your next
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                  online casino
                </span>
</h1>
<p className="text-base sm:text-lg text-slate-300 max-w-2xl">
                Compare licensed casinos by bonuses, payout speed, game selection, and player reviews. Updated daily by independent experts.
              </p>
</div>

<div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm">
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
<div className="h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
</div>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">120+</span>
<span className="text-slate-400">Verified casinos</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
<div className="h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="clock-3"></i>
</div>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">&lt; 24h</span>
<span className="text-slate-400">Average payout</span>
</div>
</div>
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-3 py-2">
<div className="h-7 w-7 rounded-full bg-slate-900 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-amber-400" data-lucide="star"></i>
</div>
<div className="flex flex-col">
<span className="text-slate-200 font-medium">18k+</span>
<span className="text-slate-400">Player ratings</span>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-80 xl:w-96 rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-slate-950/60 p-4 sm:p-5 space-y-4">
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">Find the best fit</h2>
<span className="text-xs text-slate-400">120 casinos</span>
</div>
<p className="text-sm text-slate-400">
                Filter by bonus type, country, payment methods, and more.
              </p>
</div>

<div className="relative">
<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500">
<i className="w-4 h-4" data-lucide="search"></i>
</span>
<input className="w-full rounded-xl bg-slate-900/80 border border-slate-800 focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/50 outline-none text-sm text-slate-100 placeholder:text-slate-500 pl-9 pr-3 py-2.5" placeholder="Search casinos..." type="text"/>
</div>

<div className="space-y-3">

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300 uppercase tracking-wide">Bonus Type</span>
<button className="text-[0.7rem] text-slate-400 hover:text-slate-200 transition-colors">Clear</button>
</div>
<div className="flex flex-wrap gap-1.5">
<button className="text-xs rounded-full border border-emerald-500/60 bg-emerald-500/10 text-emerald-100 px-2.5 py-1 font-medium">
                    Welcome bonus
                  </button>
<button className="text-xs rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 px-2.5 py-1">
                    Free spins
                  </button>
<button className="text-xs rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 px-2.5 py-1">
                    No deposit
                  </button>
<button className="text-xs rounded-full border border-slate-800 bg-slate-900/80 text-slate-200 px-2.5 py-1">
                    Cashback
                  </button>
</div>
</div>

<div className="space-y-1.5">
<span className="text-xs font-medium text-slate-300 uppercase tracking-wide">Country</span>
<div className="relative">
<select className="w-full appearance-none rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-slate-100 pl-3 pr-8 py-2.5 focus:border-emerald-500/70 focus:ring-1 focus:ring-emerald-500/40 outline-none">
<option>All regions</option>
<option>United Kingdom</option>
<option>Canada</option>
<option>New Zealand</option>
<option>Germany</option>
<option>Nordics</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</div>
</div>

<div className="space-y-1.5">
<span className="text-xs font-medium text-slate-300 uppercase tracking-wide">Payment</span>
<div className="grid grid-cols-3 gap-1.5">
<button className="text-[0.7rem] rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 px-2 py-1.5 flex items-center justify-center">
                    Visa / MC
                  </button>
<button className="text-[0.7rem] rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 px-2 py-1.5 flex items-center justify-center">
                    PayPal
                  </button>
<button className="text-[0.7rem] rounded-lg border border-emerald-500/70 bg-emerald-500/10 text-emerald-100 px-2 py-1.5 flex items-center justify-center">
                    Crypto
                  </button>
<button className="text-[0.7rem] rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 px-2 py-1.5 flex items-center justify-center">
                    Skrill
                  </button>
<button className="text-[0.7rem] rounded-lg border border-slate-800 bg-slate-900/80 text-slate-200 px-2 py-1.5 flex items-center justify-center col-span-2">
                    Instant bank
                  </button>
</div>
</div>
</div>

<div className="pt-2 border-t border-slate-800/70 flex items-center justify-between gap-3">
<div className="flex flex-col">
<span className="text-xs text-slate-400">Showing</span>
<span className="text-sm font-medium text-slate-100">32 casinos</span>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 font-medium tracking-tight px-4 py-2 text-xs sm:text-sm shadow-md shadow-emerald-500/40 transition-colors">
<span>Apply filters</span>
<i className="w-4 h-4" data-lucide="sparkles"></i>
</button>
</div>
</div>
</section>

<section className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400">
<span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-800 px-2 py-1">
<i className="w-3.5 h-3.5 mr-1.5 text-sky-400" data-lucide="info"></i>
<span>All casinos listed are licensed and regularly audited.</span>
</span>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
<span>Sort by:</span>
<button className="rounded-full bg-slate-900/80 border border-emerald-500/70 text-emerald-100 px-3 py-1.5 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="thumbs-up"></i>
<span>Expert score</span>
</button>
<button className="rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 px-3 py-1.5">
                Bonus value
              </button>
<button className="rounded-full bg-slate-900/80 border border-slate-800 text-slate-200 px-3 py-1.5">
                Payout speed
              </button>
</div>
<div className="relative sm:hidden w-full max-w-[10rem] ml-auto">
<select className="w-full appearance-none rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-100 pl-3 pr-8 py-1.5">
<option>Expert score</option>
<option>Bonus value</option>
<option>Payout speed</option>
</select>
<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</span>
</div>
</div>
</section>

<section className="space-y-4 sm:space-y-5">

<article className="rounded-2xl border border-slate-800/90 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-900/80 shadow-xl shadow-slate-950/70 p-4 sm:p-5 lg:p-6 flex flex-col gap-4">
<div className="flex flex-col lg:flex-row gap-4 lg:gap-6">

<div className="flex items-start gap-3 sm:gap-4 lg:w-1/3">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-sky-500 flex items-center justify-center shrink-0">
<span className="text-lg font-semibold tracking-tight text-slate-950">NL</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      NeonLuck Casino
                    </h3>
<span className="inline-flex items-center rounded-full border border-emerald-500/60 bg-emerald-500/10 px-2 py-0.5 text-[0.7rem] text-emerald-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1"></span>
                      Featured
                    </span>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield-check"></i>
<span>Licensed in MGA</span>
</span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-sky-400" data-lucide="globe-2"></i>
<span>Accepts EU &amp; CA</span>
</span>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">

<div className="rounded-xl border border-emerald-500/50 bg-emerald-500/5 p-3 flex flex-col justify-between">
<span className="text-xs font-medium text-emerald-200 uppercase tracking-wide">Welcome Package</span>
<div className="mt-1.5">
<p className="text-lg sm:text-xl font-semibold tracking-tight text-emerald-100">
                      200% up to €500
                    </p>
<p className="text-xs sm:text-sm text-emerald-100/80">
                      + 150 free spins on Book of Wins
                    </p>
</div>
<p className="mt-2 text-[0.7rem] text-emerald-100/70">
                    Wagering 35x • Min. deposit €20 • Full T&amp;Cs apply
                  </p>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Payout speed</span>
<span className="inline-flex items-center gap-1 text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
<span>Fast</span>
</span>
</div>
<div className="flex items-center justify-between text-sm text-slate-200">
<span>Average</span>
<span>&lt; 6 hours</span>
</div>
<div className="border-t border-slate-800/80 pt-2">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Games</span>
<span>Payment methods</span>
</div>
<div className="flex items-center justify-between text-sm text-slate-200 mt-0.5">
<span>3,200+</span>
<span>10+</span>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400">Expert score</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-slate-50">9.3</span>
<span className="text-xs text-slate-500">/10</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-400">Players</span>
<span className="text-xs text-slate-200">1,248 reviews</span>
</div>
</div>
<div className="mt-2 flex items-center gap-1 text-amber-300">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star-half"></i>
<span className="ml-1 text-xs text-slate-300">4.7/5</span>
</div>
<p className="mt-2 text-[0.7rem] text-slate-400">
                    Loved for its instant withdrawals, VIP rewards, and huge slots selection.
                  </p>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80 pt-3">
<div className="flex flex-wrap gap-2 text-[0.7rem]">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 px-2 py-1 text-slate-300">
<i className="w-3 h-3 text-sky-300" data-lucide="dice-5"></i>
                  Live casino
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 px-2 py-1 text-slate-300">
<i className="w-3 h-3 text-emerald-300" data-lucide="credit-card"></i>
                  Instant withdrawals
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 px-2 py-1 text-slate-300">
<i className="w-3 h-3 text-rose-300" data-lucide="gift"></i>
                  Weekly cashback
                </span>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="external-link"></i>
                  Review
                </button>
<button className="inline-flex items-center gap-2 rounded-full bg-emerald-500/95 hover:bg-emerald-400 text-slate-950 font-medium tracking-tight px-4 sm:px-5 py-1.5 text-xs sm:text-sm shadow-md shadow-emerald-500/40 transition-colors">
<span>Play now</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>

<article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 flex flex-col gap-4">
<div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
<div className="flex items-start gap-3 sm:gap-4 lg:w-1/3">
<div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-rose-500 flex items-center justify-center shrink-0">
<span className="text-base sm:text-lg font-semibold tracking-tight text-slate-950">HR</span>
</div>
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                      HighRoller Club
                    </h3>
<span className="inline-flex items-center rounded-full bg-slate-900/90 border border-slate-700 px-2 py-0.5 text-[0.7rem] text-slate-300">
                      New
                    </span>
</div>
<div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-emerald-400" data-lucide="shield"></i>
                      Curacao license
                    </span>
<span className="inline-flex items-center gap-1">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="bitcoin"></i>
                      Crypto friendly
                    </span>
</div>
</div>
</div>
<div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex flex-col justify-between">
<span className="text-xs font-medium text-slate-300 uppercase tracking-wide">Welcome Bonus</span>
<div className="mt-1.5">
<p className="text-lg font-semibold tracking-tight text-slate-50">
                      100% up to 1 BTC
                    </p>
<p className="text-xs sm:text-sm text-slate-300">
                      + 100 free spins
                    </p>
</div>
<p className="mt-2 text-[0.7rem] text-slate-500">
                    Wagering 40x • Crypto only
                  </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex flex-col gap-2">
<div className="flex items-center justify-between text-xs text-slate-400">
<span>Payout speed</span>
<span className="inline-flex items-center gap-1 text-emerald-300">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
                      Instant
                    </span>
</div>
<div className="flex items-center justify-between text-sm text-slate-200">
<span>Games</span>
<span>2,400+</span>
</div>
<div className="flex items-center justify-between text-sm text-slate-200">
<span>RTP average</span>
<span>96.3%</span>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3 flex flex-col justify-between">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-slate-400">Expert score</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold tracking-tight text-slate-50">8.8</span>
<span className="text-xs text-slate-500">/10</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-400">Players</span>
<span className="text-xs text-slate-200">326 reviews</span>
</div>
</div>
<div className="mt-2 flex items-center gap-1 text-amber-300">
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5 fill-amber-400 text-amber-400" data-lucide="star"></i>
<i className="w-3.5 h-3.5" data-lucide="star"></i>
<span className="ml-1 text-xs text-slate-300">4.4/5</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-800/80 pt-3">
<div className="flex flex-wrap gap-2 text-[0.7rem]">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 px-2 py-1 text-slate-300">
<i className="w-3 h-3 text-amber-300" data-lucide="bitcoin"></i>
                  BTC, ETH, LTC
                </span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-800 px-2 py-1 text-slate-300">
<i className="w-3 h-3 text-sky-300" data-lucide="trophy"></i>
                  High roller VIP
                </span>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="external-link"></i>
                  Review
                </button>
<button className="inline-flex items-center gap-2 rounded-full bg-slate-100/90 hover:bg-slate-100 text-slate-900 font-medium tracking-tight px-4 sm:px-5 py-1.5 text-xs sm:text-sm transition-colors">
<span>Play now</span>
<i className="w-3.5 h-3.5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</article>

<div className="flex items-center justify-between gap-3 pt-2">
<p className="text-xs sm:text-sm text-slate-400">
              Showing <span className="text-slate-200 font-medium">1–20</span> of <span className="text-slate-200 font-medium">120</span> casinos
            </p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-xs text-slate-300 px-3 py-1.5 hover:bg-slate-900 disabled:opacity-40 disabled:hover:bg-slate-950/80" disabled="">
<i className="w-3.5 h-3.5" data-lucide="chevron-left"></i>
<span className="ml-1 hidden sm:inline">Previous</span>
</button>
<button className="inline-flex items-center justify-center rounded-full border border-slate-800 bg-slate-950/80 text-xs text-slate-300 px-3 py-1.5 hover:bg-slate-900">
<span className="mr-1 hidden sm:inline">Next</span>
<i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="mt-4 sm:mt-6">
<div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
<div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-slate-900/90 border border-slate-800 shrink-0">
<i className="w-5 h-5 text-amber-300" data-lucide="shield-alert"></i>
</div>
<div className="flex-1 space-y-1.5">
<h3 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                Play responsibly
              </h3>
<p className="text-sm text-slate-300">
                Gambling involves risk. Only play with money you can afford to lose and always set strict limits. If you feel your gambling is becoming a problem, contact your local support organization.
              </p>
</div>
<div className="flex flex-col gap-2 w-full sm:w-auto">
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="heart-handshake"></i>
<span>Get help</span>
</button>
<button className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5 text-xs text-slate-200 hover:bg-slate-900 transition-colors">
<i className="w-3.5 h-3.5" data-lucide="file-text"></i>
<span>Read full policy</span>
</button>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-slate-900 bg-slate-950/95">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-4 text-xs sm:text-sm text-slate-500">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-slate-400">
<span className="font-medium tracking-tight text-slate-200">CasinoBoard</span>
<span>•</span>
<span>Independent casino comparison site.</span>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="hover:text-slate-200 transition-colors">About</button>
<button className="hover:text-slate-200 transition-colors">Contact</button>
<button className="hover:text-slate-200 transition-colors">Terms</button>
<button className="hover:text-slate-200 transition-colors">Privacy</button>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<p className="max-w-3xl">
            This site does not offer real money gambling services. Bonuses and offers listed may change without notice. Always verify the casino’s terms and conditions on their official website before registering.
          </p>
<p className="text-slate-600">18+ only • BeGambleAware.org</p>
</div>
</div>
</footer>
</div>


    </>
  );
}
