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



    const v = document.getElementById('promoVideo');
    const btn = document.getElementById('playBtn');
    if (btn && v) {
      btn.addEventListener('click', () => {
        v.play().catch(()=>{});
        btn.style.display = 'none';
        v.setAttribute('controls', 'controls');
      });
    }
    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  
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
      

<div className="fixed inset-0 -z-10 overflow-hidden">

<div className="absolute -top-24 -left-24 w-[30rem] h-[30rem] rounded-full bg-red-600/20 blur-3xl animate-pulse"></div>
<div className="absolute top-1/3 -right-10 w-[26rem] h-[26rem] rounded-full bg-red-500/10 blur-3xl animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute -bottom-24 left-1/3 w-[36rem] h-[36rem] rounded-full bg-red-700/10 blur-3xl animate-pulse" style={{animationDuration: '8s'}}></div>

<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(#ffffff14 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0.06), rgba(0,0,0,0))'}}></div>

<div className="absolute inset-0 pointer-events-none">

<span className="absolute top-[12%] left-[8%] w-2 h-2 rounded-full bg-red-500/60 animate-ping" style={{animationDuration: '5s'}}></span>
<span className="absolute top-[62%] left-[16%] w-1.5 h-1.5 rounded-full bg-red-400/60 animate-ping" style={{animationDuration: '7s'}}></span>
<span className="absolute top-[28%] right-[12%] w-2 h-2 rounded-full bg-red-500/60 animate-ping" style={{animationDuration: '6s'}}></span>
<span className="absolute bottom-[18%] right-[22%] w-1.5 h-1.5 rounded-full bg-red-400/60 animate-ping" style={{animationDuration: '8s'}}></span>

<div className="absolute top-[18%] right-[35%] w-16 h-16 rounded-full border border-red-500/30 [box-shadow:_inset_0_0_0_2px_rgba(244,63,94,0.15)] animate-spin" style={{animationDuration: '16s'}}></div>
<div className="absolute bottom-[22%] left-[28%] w-12 h-12 rounded-full border border-red-400/25 [box-shadow:_inset_0_0_0_2px_rgba(248,113,113,0.12)] animate-spin" style={{animationDuration: '22s'}}></div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="group inline-flex items-center gap-2" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 ring-1 ring-white/10 group-hover:ring-red-500/40 transition">
<span className="text-red-500 font-semibold tracking-tight">RJ</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-zinc-200 group-hover:text-white transition">RogueJack</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="#">

<svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7"></path><path d="M9 22V12h6v10"></path></svg>
            Home
          </a>
<a className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition" href="#leaderboard">

<svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v4a5 5 0 0 1-10 0V4"></path><path d="M3 4h4v4H5a2 2 0 0 1-2-2V4"></path><path d="M21 4h-4v4h2a2 2 0 0 0 2-2V4"></path></svg>
            Leaderboard
          </a>
<a className="inline-flex items-center gap-2 text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 px-3 py-2 rounded-md ring-1 ring-white/10 hover:ring-red-500/40 transition" href="#login">

<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path></svg>
            Login
          </a>
</nav>

<div className="md:hidden">
<input className="peer hidden" id="menu" type="checkbox"/>
<label aria-label="Open Menu" className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-zinc-900 ring-1 ring-white/10 hover:ring-red-500/40 hover:bg-zinc-800 transition cursor-pointer" htmlFor="menu">

<svg className="h-5 w-5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>
</label>
<div className="absolute left-0 right-0 top-16 hidden peer-checked:block bg-black/80 backdrop-blur border-b border-white/5">
<div className="px-4 py-4 flex flex-col gap-2">
<a className="px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/60 ring-1 ring-inset ring-white/10 hover:ring-red-500/40 transition" href="#">Home</a>
<a className="px-3 py-2 rounded-md text-sm text-zinc-300 hover:text-white hover:bg-zinc-900/60 ring-1 ring-inset ring-white/10 hover:ring-red-500/40 transition" href="#leaderboard">Leaderboard</a>
<a className="px-3 py-2 rounded-md text-sm text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 ring-1 ring-white/10 hover:ring-red-500/40 transition" href="#login">Login</a>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 ring-1 ring-red-500/30 bg-red-500/10 text-xs text-red-300">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4"></path><path d="M7 14s1.5 1.5 3 0c1.5-1.5 0-3 0-3L14 4l6 6-7 4s-1.5 1.5-3 0c-1.5-1.5 0-3 0-3"></path><path d="M5 13l-2 6 6-2"></path></svg>
            Exclusive monthly race is live
          </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
            Win big with the Monthly Wagered Leaderboard
          </h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Wager, climb, and claim your share of the prize pool. Track your rank in real-time and unlock perks through our partner Rainbet.
          </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-red-600 text-white text-sm font-medium hover:bg-red-500 ring-1 ring-red-600/60 hover:ring-red-400/60 transition" href="#view-your-lb">
              View your leaderboard
              
<svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-zinc-900 text-zinc-200 text-sm font-medium hover:bg-zinc-800 ring-1 ring-white/10 hover:ring-red-500/40 transition" href="#rainbet">
              Explore rewards
            </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4">
<div className="rounded-lg bg-zinc-950/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Monthly Prize Pool</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">$50,000</div>
</div>
<div className="rounded-lg bg-zinc-950/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Participants</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">3,241</div>
</div>
<div className="rounded-lg bg-zinc-950/60 ring-1 ring-white/10 p-4">
<div className="text-xs text-zinc-400">Ends In</div>
<div className="mt-2 text-2xl font-semibold tracking-tight text-white">12d 08h</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-zinc-950/60 ring-1 ring-white/10 p-5 sm:p-6 lg:p-7" id="leaderboard">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M2 18l4-11 6 5 6-5 4 11z"></path><path d="M2 18h20"></path></svg>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-white">Monthly Wagered Leaderboard</h2>
</div>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition" href="#">View full board</a>
</div>
<div className="mt-5 divide-y divide-white/5">

<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">1</span>
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">NovaAce</div>
<div className="text-xs text-zinc-400">@nova</div>
</div>
</div>
<div className="text-sm font-semibold text-white tracking-tight">$1,204,980</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">2</span>
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1506634064465-4d805d3ff1c9?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">RedMonk</div>
<div className="text-xs text-zinc-400">@rmonk</div>
</div>
</div>
<div className="text-sm font-semibold text-white tracking-tight">$984,210</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">3</span>
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">LuckyV</div>
<div className="text-xs text-zinc-400">@luckyv</div>
</div>
</div>
<div className="text-sm font-semibold text-white tracking-tight">$802,445</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">4</span>
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">ChipZero</div>
<div className="text-xs text-zinc-400">@czero</div>
</div>
</div>
<div className="text-sm font-semibold text-white tracking-tight">$640,120</div>
</div>
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<span className="text-sm text-zinc-400">5</span>
<img alt="" className="h-8 w-8 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-medium">RubyEdge</div>
<div className="text-xs text-zinc-400">@ruby</div>
</div>
</div>
<div className="text-sm font-semibold text-white tracking-tight">$598,730</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="text-xs text-zinc-400">Updated 2m ago</div>
<a className="text-xs text-red-300 hover:text-red-200 transition" href="#login">Log in to track your position</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="rainbet">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-2xl ring-1 ring-white/10 bg-zinc-950/60 p-6 sm:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-red-600/20 ring-1 ring-red-500/40 flex items-center justify-center">
<span className="text-red-400 font-semibold tracking-tight">R</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">Rainbet Partnership</h3>
<p className="text-sm text-zinc-400">Claim exclusive bonuses and leaderboard eligibility.</p>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-4 py-2 bg-red-600 text-white text-sm font-medium hover:bg-red-500 ring-1 ring-red-600/60 hover:ring-red-400/60 transition" href="#">
              Join Rainbet
              <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">

<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">Fast withdrawals</div>
<div className="text-xs text-zinc-400">Crypto payouts in minutes</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">Rakeback &amp; reloads</div>
<div className="text-xs text-zinc-400">Daily, weekly, monthly</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">Provably fair</div>
<div className="text-xs text-zinc-400">Transparent game outcomes</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">Daily rain</div>
<div className="text-xs text-zinc-400">Random chat drops</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">Crypto support</div>
<div className="text-xs text-zinc-400">BTC, ETH, USDT and more</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg bg-black/40 ring-1 ring-white/10 p-4">
<svg className="h-5 w-5 text-emerald-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<div className="text-sm text-white font-medium">24/7 support</div>
<div className="text-xs text-zinc-400">Live chat assistance</div>
</div>
</div>
</div>
<div className="mt-6 sm:hidden">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2 w-full justify-center bg-red-600 text-white text-sm font-medium hover:bg-red-500 ring-1 ring-red-600/60 hover:ring-red-400/60 transition" href="#">
              Join Rainbet
              <svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 bg-zinc-950/60 p-6 sm:p-8">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
<h3 className="text-lg font-semibold tracking-tight text-white">Leaderboard Rules</h3>
</div>
<ul className="mt-4 space-y-3 text-sm text-zinc-300">
<li className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Real-money wagers on Rainbet during the event period count toward your total.
            </li>
<li className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Multi-accounting, teaming, or bonus abuse leads to disqualification.
            </li>
<li className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Ties are broken by first to reach the amount; verification may be required.
            </li>
<li className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              Prizes are credited within 48 hours after event end unless stated otherwise.
            </li>
<li className="flex gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-red-500"></span>
              18+ only. Play responsibly. Regional restrictions may apply.
            </li>
</ul>
<a className="mt-5 inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-200 transition" href="#">

<svg className="h-4 w-4 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6h13"></path><path d="M8 12h13"></path><path d="M8 18h13"></path><path d="M3 6h.01"></path><path d="M3 12h.01"></path><path d="M3 18h.01"></path></svg>
            Full terms and conditions
          </a>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="rounded-2xl ring-1 ring-white/10 bg-zinc-950/60 overflow-hidden">

<div className="flex items-center justify-between px-4 py-2 border-b border-white/5">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80 ring-1 ring-red-400/40"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80 ring-1 ring-yellow-300/40"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 ring-1 ring-emerald-300/40"></span>
</div>
<div className="text-xs text-zinc-400 pr-2">RogueJack Highlights</div>
</div>

<div className="relative aspect-video bg-black">
<video className="h-full w-full object-cover" id="promoVideo" poster="https://images.unsplash.com/photo-1564049489314-60d154ff107d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" preload="none" src="https://cdn.coverr.co/videos/coverr-rolling-dice-9671/1080p.mp4"></video>

<button aria-label="Play video" className="absolute inset-0 m-auto h-16 w-16 grid place-items-center rounded-full bg-white/5 ring-1 ring-white/20 hover:bg-white/10 hover:ring-red-500/40 transition" id="playBtn">

<svg className="h-7 w-7 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>
</button>
</div>
</div>
<div className="lg:pl-4">
<div className="flex items-center gap-3">
<img alt="" className="h-12 w-12 rounded-full ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-xl font-semibold tracking-tight text-white">RogueJack</div>
<div className="text-sm text-zinc-400">142,000 followers</div>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
            Catch the latest high-roller sessions, challenges, and community events. Watch live for real-time leaderboard pushes, giveaways, and bonus drops.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 ring-1 ring-emerald-600/60 hover:ring-emerald-500/60 transition" href="#">
              Watch on Kick
              
<svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><path d="M15 3h6v6"></path><path d="M10 14L21 3"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 bg-zinc-900 text-zinc-200 text-sm font-medium hover:bg-zinc-800 ring-1 ring-white/10 hover:ring-red-500/40 transition" href="#leaderboard">
              Leaderboard
              
<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v4a5 5 0 0 1-10 0V4"></path><path d="M3 4h4v4H5a2 2 0 0 1-2-2V4"></path><path d="M21 4h-4v4h2a2 2 0 0 0 2-2V4"></path></svg>
</a>
</div>
<div className="mt-8 rounded-xl bg-zinc-950/60 ring-1 ring-white/10 p-4">
<div className="flex items-start gap-3">

<svg className="h-5 w-5 text-zinc-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<div className="text-xs text-zinc-400">
                Streams may include sponsored content. Wager responsibly. Need help? Visit the responsible gambling resources below.
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="view-your-lb">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-white/10 bg-zinc-950/60 p-6 sm:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-white">View your leaderboard</h3>
<p className="mt-1 text-sm text-zinc-400">Log in to link your Rainbet account and track your real-time rank, wagers, and rewards.</p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-red-600 text-white text-sm font-medium hover:bg-red-500 ring-1 ring-red-600/60 hover:ring-red-400/60 transition" href="#" id="login">

<svg className="h-4 w-4 text-white/90" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><path d="M10 17l5-5-5-5"></path><path d="M15 12H3"></path></svg>
              Login
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 bg-zinc-900 text-zinc-200 text-sm font-medium hover:bg-zinc-800 ring-1 ring-white/10 hover:ring-red-500/40 transition" href="#rainbet">
              Connect Rainbet
              
<svg className="h-4 w-4 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L11 5"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L13 19"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-12 border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 ring-1 ring-white/10">
<span className="text-red-500 font-semibold tracking-tight">RJ</span>
</div>
<span className="text-base font-medium tracking-tight text-zinc-200">RogueJack</span>
</div>
<p className="mt-3 text-sm text-zinc-400">
            Community-driven gambling content and events. Partnered with Rainbet for exclusive rewards and leaderboard races.
          </p>
<div className="mt-4 flex items-center gap-3 text-[11px] text-zinc-500">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-900 ring-1 ring-white/10">

<svg className="h-3.5 w-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              18+ Play responsibly
            </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-zinc-900 ring-1 ring-white/10">

<svg className="h-3.5 w-3.5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
              Sponsor disclosures apply
            </span>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Links</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Home</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#leaderboard">Leaderboard</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#rainbet">Rainbet</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight text-white">Legal</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Terms</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Privacy</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Responsible Gambling</a></li>
<li><a className="text-zinc-400 hover:text-zinc-200 transition" href="#">Disclosures</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-6">
<p className="text-xs text-zinc-500">© <span id="year">2025</span> RogueJack. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition" href="#">Twitter</a>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition" href="#">Kick</a>
<a className="text-xs text-zinc-400 hover:text-zinc-200 transition" href="#">Discord</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
