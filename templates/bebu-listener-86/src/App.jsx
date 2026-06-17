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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


    document.addEventListener("DOMContentLoaded", function () {
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
      }
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
      
<div className="relative overflow-hidden">

<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>

<header className="sticky top-3 z-50 ml-auto mr-auto max-w-7xl">
<div className="px-3 md:px-6">
<div className="h-14 flex ring-1 ring-white/10 bg-zinc-900/80 rounded-full backdrop-blur-2xl items-center justify-between px-2.5 shadow-2xl shadow-black/60">
<div className="flex gap-2.5 items-center pl-1">
<div className="bg-gradient-to-br from-rose-500 to-purple-600 rounded-full p-1.5 shadow-lg shadow-rose-500/25">
<svg className="h-4 w-4 text-white" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.05 4.24a6 6 0 0 1 5.71 5.71"></path>
<path d="M14.05 1a9 9 0 0 1 9 9"></path>
<path d="M15.5 18.5 14 20a4.82 4.82 0 0 1-4.24 1.32 10.86 10.86 0 0 1-6.79-4.92A11.41 11.41 0 0 1 1.46 9.2 4.82 4.82 0 0 1 2.78 5L4.27 3.5a1.73 1.73 0 0 1 2.37 0l1.52 1.52a2 2 0 0 1 .37 2.3l-.7 1.39a1 1 0 0 0 .09 1l2.1 3.11a1 1 0 0 0 1.06.42l1.54-.37a2 2 0 0 1 1.95.52l1.53 1.53a1.73 1.73 0 0 1 0 2.38Z"></path>
</svg>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-geist text-sm font-semibold tracking-tight">Bebu</span>
<span className="inline-flex items-center rounded-full bg-zinc-900/80 px-1.5 py-0.5 ring-1 ring-white/10">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1"></span>
<span className="text-[0.65rem] font-medium text-zinc-200">Listeners</span>
</span>
</div>
<span className="text-[0.65rem] text-zinc-400 leading-tight">Dating &amp; Support Call App</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-xs text-zinc-300">
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#earnings">Earnings</a>
<a className="hover:text-white transition-colors" href="#requirements">Requirements</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center rounded-full border border-white/10 bg-black/20 backdrop-blur-xl px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-white/5 transition-colors" href="https://www.bebuapp.in">
              Visit Bebu
            </a>
<a className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-500 to-purple-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-rose-500/50 hover:from-rose-400 hover:to-purple-400 transition-colors" href="#join">
              Join as Listener
            </a>
</div>
</div>
</div>
</header>

<main className="relative">

<div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/70 to-black"></div>
<section className="mx-auto max-w-7xl px-3 md:px-6 pt-20 md:pt-28 pb-20 md:pb-24">
<div className="grid gap-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] items-center">

<div className="relative">

<div className="pointer-events-none absolute -inset-x-10 -top-10 h-32 opacity-60 blur-3xl bg-gradient-to-r from-rose-500/40 via-purple-500/40 to-sky-500/40 animate-pulse"></div>
<div className="relative">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-3 py-1.5 text-[0.7rem] text-zinc-200 mb-5 shadow-lg shadow-black/40 animate-[fadeIn_0.6s_ease-out_forwards] opacity-0" style={{animationDelay: '0.05s'}}>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="font-medium">Now accepting new Bebu Listeners in India</span>
</div>
<h1 className="font-bricolage text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white mb-4 leading-tight animate-[fadeUp_0.7s_ease-out_forwards] opacity-0" style={{animationDelay: '0.15s'}}>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-purple-300 to-sky-300 drop-shadow-[0_0_20px_rgba(244,63,94,0.35)]">
                  Earn daily by just talking<br className="hidden sm:block"/> on Bebu.
                </span>
</h1>
<p className="text-sm md:text-base text-zinc-200 max-w-xl mb-6 animate-[fadeUp_0.7s_ease-out_forwards] opacity-0" style={{animationDelay: '0.28s'}}>
                Bebu is a dating &amp; emotional support call app where people connect for real conversations, friendship, 
                and comfort. Join as a <span className="font-medium text-rose-300">Listener</span> and get paid for every minute you talk and support others.
              </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-[fadeUp_0.7s_ease-out_forwards] opacity-0" id="join" style={{animationDelay: '0.4s'}}>
<a className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-purple-500 px-4 py-2.5 text-xs md:text-sm font-semibold text-white shadow-xl shadow-rose-500/60 hover:from-rose-400 hover:to-purple-400 transition-all hover:shadow-rose-500/80 hover:-translate-y-0.5" href="https://wa.me/918882007070?text=I%20want%20to%20join%20as%20a%20Bebu%20Listener">
                  Apply on WhatsApp
                  <svg className="ml-1.5 h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-xl px-4 py-2.5 text-xs md:text-sm font-medium text-zinc-100 hover:bg-white/5 transition-all hover:-translate-y-0.5" href="https://www.bebuapp.in">
                  Download Bebu App
                </a>
</div>
</div>
</div>

<div className="relative animate-[fadeIn_0.8s_ease-out_forwards] opacity-0" style={{animationDelay: '0.35s'}}>
<div className="absolute -top-6 -right-4 h-20 w-20 rounded-full bg-rose-500/40 blur-3xl"></div>
<div className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-4 md:p-5 shadow-2xl shadow-black/70">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-rose-500 to-purple-500 flex items-center justify-center text-white text-xs font-semibold">
                    B
                  </div>
<div>
<div className="text-xs font-medium text-white tracking-tight">Bebu Listener Panel</div>
<div className="text-[0.65rem] text-zinc-400">Live Demo Snapshot</div>
</div>
</div>
<span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] text-emerald-300 font-medium flex items-center gap-1 ring-1 ring-emerald-400/40">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-[ping_1s_ease-out_infinite]"></span>
                  Online
                </span>
</div>
<div className="space-y-3">
<div className="rounded-2xl border border-white/5 bg-zinc-950/70 p-3">
<div className="flex items-center justify-between mb-1">
<span className="text-[0.7rem] text-zinc-400">Today’s Earnings</span>
<span className="text-[0.65rem] text-emerald-300 flex items-center gap-1">
<svg className="h-3 w-3" data-lucide="trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 17 9 11 13 15 21 7"></path><path d="M21 11V7h-4"></path></svg>
                      Live
                    </span>
</div>
<div className="flex items-end justify-between">
<div>
<div className="text-lg font-semibold text-white tracking-tight">₹1,480</div>
<div className="text-[0.65rem] text-zinc-400">Approx with 3–4 hours of calls</div>
</div>
<div className="flex items-center gap-2 text-[0.65rem] text-zinc-300">
<span className="inline-flex flex-col items-end">
<span>85 min</span>
<span className="text-zinc-500">Talk time</span>
</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-2xl border border-white/5 bg-zinc-950/70 p-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[0.65rem] text-zinc-400">Per min earning</span>
<svg className="h-3.5 w-3.5 text-zinc-300" data-lucide="wallet" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-3V5a2 2 0 0 0-2-2H5.5A2.5 2.5 0 0 0 3 5.5v11A2.5 2.5 0 0 0 5.5 19H20Z"></path><path d="M15 11h3v2h-3z"></path></svg>
</div>
<div className="text-sm font-semibold text-white tracking-tight">Up to ₹40/min*</div>
<div className="text-[0.6rem] text-zinc-500 mt-0.5">Varies by profile &amp; performance</div>
</div>
<div className="rounded-2xl border border-white/5 bg-zinc-950/70 p-2.5">
<div className="flex items-center justify-between mb-1">
<span className="text-[0.65rem] text-zinc-400">Calls Completed</span>
<svg className="h-3.5 w-3.5 text-zinc-300" data-lucide="phone" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 16.92-2-1a2 2 0 0 0-2.38.4l-1.3 1.3a16 16 0 0 1-7.17-7.17l1.3-1.3A2 2 0 0 0 11.11 6l-1-2A2 2 0 0 0 8.24 3H6a2 2 0 0 0-2 2 17 17 0 0 0 17 17 2 2 0 0 0 2-2v-2.24a2 2 0 0 0-1.08-1.84Z"></path></svg>
</div>
<div className="text-sm font-semibold text-white tracking-tight">12 today</div>
<div className="text-[0.6rem] text-zinc-500 mt-0.5">Across dating &amp; support calls</div>
</div>
</div>
<div className="rounded-2xl border border-white/5 bg-zinc-950/80 p-3 space-y-2">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-zinc-300">Next steps to join</span>
<span className="text-[0.65rem] text-rose-300 font-medium">Takes 5–10 mins</span>
</div>
<ol className="space-y-1.5 text-[0.7rem] text-zinc-300 list-decimal list-inside">
<li>Apply via WhatsApp with your details.</li>
<li>Bebu team verifies your profile &amp; voice.</li>
<li>Get onboarding &amp; start receiving calls in the app.</li>
</ol>
</div>
<div className="flex items-center justify-between text-[0.65rem] text-zinc-500">
<span>*Earnings depend on call duration, activity &amp; Bebu policies.</span>
<span>Made for India • Safe &amp; discreet</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-3 md:px-6 pb-16 md:pb-20" id="how-it-works">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="font-bricolage text-2xl md:text-3xl tracking-tight font-semibold text-white mb-1">
              How Bebu Listening works
            </h2>
<p className="text-xs md:text-sm text-zinc-300 max-w-xl">
              Bebu connects you with people looking for friendly conversation, dating, and emotional support in a safe audio-only space.
            </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-300">
<svg className="h-3.5 w-3.5" data-lucide="user-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 14a4 4 0 1 0-4-4"></path><path d="M3 21a6 6 0 0 1 11.7-2"></path><path d="M6 8V4"></path><path d="M4 6h4"></path></svg>
</div>
<div className="text-xs font-medium text-white tracking-tight">Step 1 · Apply &amp; get verified</div>
</div>
<p className="text-xs text-zinc-300">
              Fill the WhatsApp form, share your basic details, availability, and a short voice note. Bebu team verifies your profile before activating you as a Listener.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300">
<svg className="h-3.5 w-3.5" data-lucide="headphones" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 14v-2a9 9 0 0 1 18 0v2"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"></path><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
</div>
<div className="text-xs font-medium text-white tracking-tight">Step 2 · Go online &amp; take calls</div>
</div>
<p className="text-xs text-zinc-300">
              When you’re free, go online in the Bebu app. Users looking for dating or support calls can connect with you for 1:1 audio chat. You can decline calls if you’re not comfortable.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
<div className="flex items-center gap-2 mb-2">
<div className="h-7 w-7 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
<svg className="h-3.5 w-3.5" data-lucide="indian-rupee" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 3h12"></path><path d="M6 8h12"></path><path d="m6 13 8.5 8"></path><path d="M9 13h3a3 3 0 0 0 3-3V3"></path></svg>
</div>
<div className="text-xs font-medium text-white tracking-tight">Step 3 · Earn for every minute</div>
</div>
<p className="text-xs text-zinc-300">
              You earn per minute of talk time. Bebu tracks your calls in the app and pays you according to the finalized rate and payout schedule.
            </p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-3 md:px-6 pb-16 md:pb-20" id="earnings">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="font-bricolage text-2xl md:text-3xl tracking-tight font-semibold text-white mb-1">
              Earnings &amp; payouts
            </h2>
<p className="text-xs md:text-sm text-zinc-300 max-w-xl">
              Your earning depends on your call duration, your listener rating and how active you are on Bebu.
            </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 md:p-5">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-zinc-200">Sample earning scenarios</span>
<span className="text-[0.65rem] text-zinc-400">Illustrative, not guaranteed</span>
</div>
<div className="space-y-3 text-xs text-zinc-300">
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-950/60 px-3 py-2">
<div>
<div className="font-medium text-white tracking-tight">Casual Listener</div>
<div className="text-[0.65rem] text-zinc-400">1–2 hours per day</div>
</div>
<div className="text-right">
<div className="font-semibold text-emerald-300 tracking-tight">₹700–₹1,500 / day</div>
<div className="text-[0.65rem] text-zinc-500">Evenings &amp; weekends</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-950/60 px-3 py-2">
<div>
<div className="font-medium text-white tracking-tight">Regular Listener</div>
<div className="text-[0.65rem] text-zinc-400">3–5 hours per day</div>
</div>
<div className="text-right">
<div className="font-semibold text-emerald-300 tracking-tight">₹1,500–₹3,500 / day</div>
<div className="text-[0.65rem] text-zinc-500">Peak hours on Bebu</div>
</div>
</div>
<div className="flex items-center justify-between rounded-xl border border-white/5 bg-zinc-950/60 px-3 py-2">
<div>
<div className="font-medium text-white tracking-tight">Top Listener</div>
<div className="text-[0.65rem] text-zinc-400">High rating &amp; consistency</div>
</div>
<div className="text-right">
<div className="font-semibold text-emerald-300 tracking-tight">Higher rates &amp; bonuses</div>
<div className="text-[0.65rem] text-zinc-500">Based on Bebu policies</div>
</div>
</div>
<p className="text-[0.65rem] text-zinc-500">
                Earnings are subject to Bebu’s terms, caller demand, your availability and performance. There is no fixed salary; this is activity-based income.
              </p>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 md:p-5 space-y-3">
<div>
<h3 className="text-sm font-medium text-white tracking-tight mb-1">Payouts</h3>
<ul className="text-xs text-zinc-300 space-y-1.5">
<li>• Payouts are processed as per Bebu’s internal schedule (e.g., weekly or monthly).</li>
<li>• Payments are made via bank transfer / UPI details shared during onboarding.</li>
<li>• You can see your call history and estimated earnings inside the Bebu app / panel.</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium text-white tracking-tight mb-1">Who can become a Listener?</h3>
<ul className="text-xs text-zinc-300 space-y-1.5">
<li>• You are 18+ and based in India.</li>
<li>• You have a clear, friendly voice and like talking to people.</li>
<li>• You can speak at least one language fluently (Hindi, English or regional).</li>
</ul>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white hover:bg-white/20 transition-colors" href="https://wa.me/918882007070?text=I%20want%20to%20join%20as%20a%20Bebu%20Listener">
              Check eligibility on WhatsApp
              <svg className="ml-1.5 h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7A7 7 0 1 1 11 19a6.9 6.9 0 0 1-3.7-1.1Z"></path></svg>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-3 md:px-6 pb-16 md:pb-20" id="requirements">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="font-bricolage text-2xl md:text-3xl tracking-tight font-semibold text-white mb-1">
              Requirements &amp; safety
            </h2>
<p className="text-xs md:text-sm text-zinc-300 max-w-xl">
              Bebu focuses on safe, private audio conversations. We expect professionalism from all Listeners.
            </p>
</div>
</div>
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 md:p-5">
<h3 className="text-sm font-medium text-white tracking-tight mb-2">Basic requirements</h3>
<ul className="text-xs text-zinc-300 space-y-1.5">
<li>• Android phone with stable internet connection.</li>
<li>• Quiet place for audio calls (no loud background noise).</li>
<li>• Valid ID proof for age &amp; identity verification as per Bebu’s process.</li>
<li>• Willingness to talk respectfully with strangers and maintain boundaries.</li>
</ul>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4 md:p-5">
<h3 className="text-sm font-medium text-white tracking-tight mb-2">Safety &amp; privacy</h3>
<ul className="text-xs text-zinc-300 space-y-1.5">
<li>• Your personal number is not shared with callers; calls happen only inside Bebu.</li>
<li>• You can block / report any user who misbehaves.</li>
<li>• Follow Bebu community guidelines; accounts can be suspended for policy violations.</li>
<li>• Bebu may record / monitor calls for safety and quality as per their policy.</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-3 md:px-6 pb-16 md:pb-24" id="faq">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
<div>
<h2 className="font-bricolage text-2xl md:text-3xl tracking-tight font-semibold text-white mb-1">
              Frequently asked questions
            </h2>
<p className="text-xs md:text-sm text-zinc-300 max-w-xl">
              Some common questions about joining Bebu as a Listener.
            </p>
</div>
</div>
<div className="grid gap-3 md:grid-cols-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-3.5">
<div className="text-xs font-medium text-white tracking-tight mb-1.5">Is this a full-time job?</div>
<p className="text-xs text-zinc-300">
              No. Bebu Listening is an activity / call-based earning opportunity, not a guaranteed salary job. 
              You control when you go online and how much you earn depends on call volume and your activity.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-3.5">
<div className="text-xs font-medium text-white tracking-tight mb-1.5">Do I need to show my face?</div>
<p className="text-xs text-zinc-300">
              No. Bebu is focused on audio calls. Your DP and profile are visible inside the app, but you are not required to do video unless Bebu introduces and you agree to any new feature.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-3.5">
<div className="text-xs font-medium text-white tracking-tight mb-1.5">Is it only dating, or support also?</div>
<p className="text-xs text-zinc-300">
              Bebu is both: a dating app and an emotional support call app. Users may call to flirt, to share feelings, or just to talk to someone who listens. You can always set your boundaries.
            </p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-3.5">
<div className="text-xs font-medium text-white tracking-tight mb-1.5">How do I start the onboarding?</div>
<p className="text-xs text-zinc-300">
              Click on “Apply on WhatsApp”, send your details, and wait for a response from the Bebu team. They will guide you on verification, app setup, and next steps.
            </p>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-rose-500/40 bg-gradient-to-r from-rose-500/15 to-purple-500/10 px-4 py-4">
<div>
<div className="text-sm font-medium text-white tracking-tight mb-1">Ready to join as a Bebu Listener?</div>
<p className="text-xs text-zinc-200 max-w-xl">
              Fill out the WhatsApp form, complete a short voice check, and start earning from real conversations on Bebu.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
<a className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full bg-white text-black px-4 py-2 text-xs font-semibold hover:bg-zinc-100 transition-colors" href="https://wa.me/918882007070?text=I%20want%20to%20join%20as%20a%20Bebu%20Listener">
              Apply on WhatsApp
              <svg className="ml-1.5 h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex flex-1 sm:flex-none items-center justify-center rounded-full border border-white/30 bg-transparent px-4 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors" href="https://www.bebuapp.in">
              Learn more on bebuapp.in
            </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-zinc-950/80">
<div className="mx-auto max-w-7xl px-3 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="font-geist font-medium text-zinc-100 tracking-tight">Bebu</span>
<span className="h-3 w-px bg-zinc-700"></span>
<span>Dating &amp; Support Call App · India</span>
</div>
<div className="flex flex-wrap items-center gap-3 text-[0.65rem] text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="https://www.bebuapp.in">bebuapp.in</a>
<span className="h-3 w-px bg-zinc-700 hidden sm:inline-block"></span>
<span>Listening opportunity subject to Bebu terms &amp; approval.</span>
</div>
</div>
</footer>
</div>

<style>
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(0.5rem); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeIn {
      0% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>

    </>
  );
}
