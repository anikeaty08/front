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
      
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

<header className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-neutral-800 ring-1 ring-white/10 grid place-content-center">
<span className="text-sm font-semibold tracking-tight">CW</span>
</div>
<span className="text-sm text-neutral-400">Wallet</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition-colors">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3.4a2 2 0 1 1 0-4h.09c.62 0 1.2-.37 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.43 3.6l.06.06c.48.48 1.17.62 1.82.33.57-.25.93-.82.93-1.46V2a2 2 0 1 1 4 0v.09c0 .64.36 1.21.93 1.46.65.29 1.34.15 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.48.48-.62 1.17-.33 1.82.25.57.82.93 1.46.93H21a2 2 0 1 1 0 4h-.09c-.64 0-1.21.36-1.46.93Z"></path>
</svg>
<span className="text-xs text-neutral-300">Settings</span>
</button>
</div>
</header>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">Refer &amp; Earn</h2>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-emerald-300/90 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">Live</span>
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path>
</svg>
</button>
</div>
</div>
<div className="p-4 space-y-4">

<div className="rounded-2xl p-4 bg-gradient-to-br from-neutral-900 to-neutral-950 ring-1 ring-white/10 relative overflow-hidden">
<div className="flex items-center justify-between">
<div>
<p className="text-xs text-neutral-400">Total rewards</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-[28px] font-semibold tracking-tight">$1,240</span>
<span className="text-[11px] text-emerald-400/90 bg-emerald-500/10 px-2 py-0.5 rounded-md ring-1 ring-emerald-500/20">+$80 this week</span>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-neutral-900 p-3">

<svg className="h-6 w-6 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7c0 1.66 3.13 3 7 3s7-1.34 7-3-3.13-3-7-3-7 1.34-7 3Z"></path>
<path d="M7 7v5c0 1.66 3.13 3 7 3s7-1.34 7-3V7"></path>
<path d="M7 12v5c0 1.66 3.13 3 7 3s7-1.34 7-3v-5"></path>
<path d="M2 8v8c0 1.66 2.24 3 5 3"></path>
</svg>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<p className="text-[11px] text-neutral-400">Referrals</p>
</div>
<p className="mt-1 text-sm font-medium">32</p>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
<p className="text-[11px] text-neutral-400">Pending</p>
</div>
<p className="mt-1 text-sm font-medium">5</p>
</div>
<div className="rounded-xl bg-neutral-900/60 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-[11px] text-neutral-400">Completed</p>
</div>
<p className="mt-1 text-sm font-medium">27</p>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-3 bg-neutral-900/60">
<div className="flex items-center justify-between gap-2">
<div className="min-w-0">
<p className="text-[11px] text-neutral-400">Your referral link</p>
<div className="flex items-center gap-2 mt-1">

<svg className="h-4.5 w-4.5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L12 3"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 0 0 7.07 7.07L12 21"></path></svg>
<p className="truncate text-sm font-medium text-neutral-200">https://cw.app/r/NX9K-42</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="8" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
<span className="text-xs text-neutral-300">Copy</span>
</button>
<button className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h7v7H3z"></path><path d="M14 3h7v7h-7z"></path><path d="M14 14h7v7h-7z"></path><path d="M3 14h7v7H3z"></path></svg>
<span className="text-xs text-neutral-300">QR</span>
</button>
<button className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.5"></path><path d="M15.41 6.5 8.59 10.49"></path></svg>
<span className="text-xs text-neutral-300">Share</span>
</button>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 11 4-7 5 6 5-6 4 7v8H3z"></path></svg>
<div>
<p className="text-sm font-medium">Silver → Gold</p>
<p className="text-[11px] text-neutral-400">8 more completed referrals</p>
</div>
</div>
<span className="text-[11px] text-amber-300/90 bg-amber-500/10 px-2 py-1 rounded-md ring-1 ring-amber-500/20">+20% bonus</span>
</div>
<div className="mt-3">
<div className="h-2 rounded-full bg-neutral-800 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-amber-300/90 to-emerald-300/90"></div>
</div>
<div className="mt-1.5 flex items-center justify-between">
<p className="text-[11px] text-neutral-400">12 / 20</p>
<p className="text-[11px] text-neutral-400">Resets in 12d</p>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<p className="text-sm font-medium mb-3">How it works</p>
<div className="space-y-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 19v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M19 8v6"></path><path d="M22 11h-6"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Invite friends</p>
<p className="text-[11px] text-neutral-400">Share your link or QR code</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><path d="M9 3h6v4H9z"></path><path d="M9 12h6"></path><path d="M9 16h6"></path></svg>
</div>
<div>
<p className="text-sm font-medium">They complete tasks</p>
<p className="text-[11px] text-neutral-400">Sign up, verify, first deposit</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8a3 3 0 0 0-3-2H9a3 3 0 0 0 0 6h3a3 3 0 0 1 0 6H8"></path><path d="M12 2v4"></path><path d="M12 18v4"></path></svg>
</div>
<div>
<p className="text-sm font-medium">You both earn</p>
<p className="text-[11px] text-neutral-400">Instantly credited after completion</p>
</div>
</div>
</div>
<div className="mt-4 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 hover:bg-emerald-500/15 hover:ring-emerald-400/30 transition">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v6m0 6v6M3 12h6m6 0h6"></path><path d="M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"></path></svg>
<span className="text-sm font-medium">Invite friends</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition">
<span className="text-sm">Learn more</span>

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
</div>
</section>

<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">Invite friends</h2>
</div>
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4"></path><path d="M12 17h.01"></path></svg>
</button>
</div>
<div className="p-4 space-y-4">

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Message preview</p>
<span className="text-[11px] text-neutral-400">Customizable</span>
</div>
<div className="mt-3 rounded-xl bg-neutral-950 ring-1 ring-white/10 p-3">
<p className="text-[13px] text-neutral-300 leading-relaxed">Join me on Crypto Wallet and earn a bonus when you sign up and complete your first deposit. Use my link:</p>
<div className="mt-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 px-2.5 py-1.5 flex items-center justify-between gap-2">
<span className="text-xs text-neutral-200 truncate">https://cw.app/r/NX9K-42</span>
<span className="text-[11px] text-neutral-400">Code: NX9K42</span>
</div>
</div>

<div className="mt-3 flex items-center justify-between">
<span className="text-[12px] text-neutral-300">Include referral code</span>
<button className="relative inline-flex h-6 w-10 items-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-500/30 hover:ring-emerald-400/40 transition">
<span className="absolute left-1 inline-block h-4 w-4 rounded-full bg-emerald-300 shadow ring-1 ring-emerald-200/60 translate-x-4"></span>
<span className="sr-only">Toggle</span>
</button>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<p className="text-sm font-medium mb-3">Share</p>
<div className="grid grid-cols-4 gap-2">

<button className="group rounded-xl ring-1 ring-white/10 hover:ring-neutral-700 bg-neutral-900 p-3 flex flex-col items-center gap-2">

<svg className="h-5 w-5 text-sky-300 group-hover:text-sky-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10"></path></svg>
<span className="text-[11px] text-neutral-300">Link</span>
</button>
<button className="group rounded-xl ring-1 ring-white/10 hover:ring-neutral-700 bg-neutral-900 p-3 flex flex-col items-center gap-2">

<svg className="h-5 w-5 text-amber-300 group-hover:text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 6-10 7L2 6"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-[11px] text-neutral-300">Email</span>
</button>
<button className="group rounded-xl ring-1 ring-white/10 hover:ring-neutral-700 bg-neutral-900 p-3 flex flex-col items-center gap-2">

<svg className="h-5 w-5 text-emerald-300 group-hover:text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10Z"></path></svg>
<span className="text-[11px] text-neutral-300">Message</span>
</button>
<button className="group rounded-xl ring-1 ring-white/10 hover:ring-neutral-700 bg-neutral-900 p-3 flex flex-col items-center gap-2">

<svg className="h-5 w-5 text-neutral-300 group-hover:text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.5"></path><path d="M15.41 6.5 8.59 10.49"></path></svg>
<span className="text-[11px] text-neutral-300">More</span>
</button>
</div>

<div className="mt-4 rounded-xl bg-neutral-950 ring-1 ring-white/10 p-3 flex items-center justify-between">
<div>
<p className="text-sm font-medium">Share QR</p>
<p className="text-[11px] text-neutral-400">Scan to start sign-up</p>
</div>
<div className="h-20 w-20 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">
<span className="text-[10px] text-neutral-500">QR</span>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 transition">

<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="8" x="8" y="8"></rect><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"></path></svg>
<span className="text-sm">Copy link</span>
</button>
<button className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 hover:bg-emerald-500/15 hover:ring-emerald-400/30 transition">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.5"></path><path d="M15.41 6.5 8.59 10.49"></path></svg>
<span className="text-sm font-medium">Share now</span>
</button>
</div>
</div>
</div>
<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
</div>
</section>

<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">Tiers &amp; bonuses</h2>
</div>
<span className="text-[11px] text-neutral-400">Cycle: Monthly</span>
</div>
<div className="p-4 space-y-4">

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<svg className="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg>
<div>
<p className="text-sm font-medium">Silver</p>
<p className="text-[11px] text-neutral-400">20% bonus on each reward</p>
</div>
</div>
<span className="text-[11px] text-neutral-400">12 / 20</span>
</div>
<div className="mt-2 h-2 rounded-full bg-neutral-800 ring-1 ring-white/10 overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-amber-300/90 to-emerald-300/90"></div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl ring-1 ring-white/10 p-3 bg-neutral-900">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Bronze</p>
<span className="text-[11px] text-neutral-400">0–9</span>
</div>
<p className="mt-1 text-[12px] text-neutral-300">+5% bonus</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 p-3 bg-neutral-900">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Silver</p>
<span className="text-[11px] text-neutral-400">10–19</span>
</div>
<p className="mt-1 text-[12px] text-neutral-300">+20% bonus</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 p-3 bg-neutral-900">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Gold</p>
<span className="text-[11px] text-neutral-400">20–39</span>
</div>
<p className="mt-1 text-[12px] text-neutral-300">+35% bonus</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 p-3 bg-neutral-900">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Platinum</p>
<span className="text-[11px] text-neutral-400">40+</span>
</div>
<p className="mt-1 text-[12px] text-neutral-300">+50% bonus</p>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Milestones</p>
<span className="text-[11px] text-neutral-400">This cycle</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center justify-between rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-yellow-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v5a5 5 0 0 1-10 0V4"></path><path d="M2 9a5 5 0 0 0 5-5"></path><path d="M22 9a5 5 0 0 1-5-5"></path></svg>
<div>
<p className="text-[13px] font-medium">First 5 completes</p>
<p className="text-[11px] text-neutral-400">Bonus $25</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">Claimed</span>
</div>
<div className="flex items-center justify-between rounded-lg bg-neutral-900 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">

<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13 2-9 13h7l-1 7 9-13h-7l1-7z"></path></svg>
<div>
<p className="text-[13px] font-medium">Streak 7 days</p>
<p className="text-[11px] text-neutral-400">+10% booster</p>
</div>
</div>
<span className="text-[11px] text-neutral-400">2 days left</span>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
</div>
</section>

<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">Activity</h2>
</div>

<div className="inline-flex rounded-lg ring-1 ring-white/10 p-0.5 bg-neutral-900">
<button className="px-2 py-1 text-[11px] rounded-md bg-neutral-800 text-neutral-200">All</button>
<button className="px-2 py-1 text-[11px] rounded-md text-neutral-400 hover:text-neutral-200">Pending</button>
<button className="px-2 py-1 text-[11px] rounded-md text-neutral-400 hover:text-neutral-200">Completed</button>
</div>
</div>
<div className="p-4 space-y-4">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="hidden sm:flex items-center gap-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 px-2.5 py-1.5">
<svg className="h-4 w-4 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="bg-transparent text-xs text-neutral-200 placeholder:text-neutral-500 focus:outline-none" placeholder="Search"/>
</div>
<button className="inline-flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700">

<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M7 12h10"></path><path d="M10 18h4"></path></svg>
<span className="text-[11px]">Filters</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-neutral-400">Eligible only</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<span className="absolute left-1 inline-block h-3.5 w-3.5 rounded-full bg-neutral-400 translate-x-0"></span>
<span className="sr-only">Toggle eligible</span>
</button>
</div>
</div>

<div className="space-y-3">

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-10 w-10 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Alex Johnson</p>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-md ring-1 ring-emerald-500/20">Rewarded $40</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400 flex-wrap">
<span className="inline-flex items-center gap-1">

<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                        Signed up
                      </span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                        KYC complete
                      </span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                        First deposit
                      </span>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-[11px] text-neutral-400">Referred 3d ago · Completed 2d ago</p>
<button className="inline-flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white">
                    Details
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-10 w-10 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Morgan Lee</p>
<span className="text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-md ring-1 ring-amber-500/20">Pending</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400 flex-wrap">
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                        Signed up
                      </span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>
                        KYC in progress
                      </span>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-[11px] text-neutral-400">Referred 1d ago</p>
<button className="inline-flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white">
                    Nudge
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="m12 4 8 8-8 8"></path></svg>
</button>
</div>
</div>

<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<div className="flex items-start gap-3">
<img alt="avatar" className="h-10 w-10 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Priya N.</p>
<span className="text-[11px] text-neutral-400 bg-neutral-800/70 px-2 py-0.5 rounded-md ring-1 ring-white/10">Expired</span>
</div>
<div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-400 flex-wrap">
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20 6-11 11-5-5"></path></svg>
                        Sign-up not completed
                      </span>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<p className="text-[11px] text-neutral-400">Invited 14d ago</p>
<button className="inline-flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white">
                    Re-invite
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9"></path><path d="M3 3v6h6"></path></svg>
</button>
</div>
</div>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60">
<div className="flex items-center justify-between">
<p className="text-sm font-medium">Payouts</p>
<button className="inline-flex items-center gap-1.5 text-[11px] text-neutral-300 hover:text-white">
                  View all
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-neutral-400">Next payout</p>
<p className="text-sm font-medium mt-0.5">$120 on Oct 28</p>
</div>
<div className="rounded-xl bg-neutral-900 ring-1 ring-white/10 p-3">
<p className="text-[11px] text-neutral-400">Total this month</p>
<p className="text-sm font-medium mt-0.5">$380</p>
</div>
</div>
</div>
</div>
<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
</div>
</section>

<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">Leaderboard</h2>
</div>
<span className="text-[11px] text-neutral-400">Global</span>
</div>
<div className="p-4 space-y-4">

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">

<svg className="h-5 w-5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17v4"></path><path d="M7 4h10"></path><path d="M17 4v5a5 5 0 0 1-10 0V4"></path><path d="M2 9a5 5 0 0 0 5-5"></path><path d="M22 9a5 5 0 0 1-5-5"></path></svg>
</div>
<div>
<p className="text-sm font-medium">You're #14</p>
<p className="text-[11px] text-neutral-400">32 completed · 1,240 USD earned</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700">

<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><path d="M8.59 13.51 15.42 17.5"></path><path d="M15.41 6.5 8.59 10.49"></path></svg>
<span className="text-[11px]">Share</span>
</button>
</div>

<div className="space-y-2">

<div className="flex items-center justify-between rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-amber-300">1</span>
<img alt="avatar" className="h-8 w-8 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Morgan L</p>
<p className="text-[11px] text-neutral-400">58 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$2,030</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-neutral-300">2</span>
<img alt="avatar" className="h-8 w-8 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Chris P</p>
<p className="text-[11px] text-neutral-400">54 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$1,860</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-neutral-300">3</span>
<img alt="avatar" className="h-8 w-8 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Anita K</p>
<p className="text-[11px] text-neutral-400">51 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$1,740</span>
</div>

<div className="flex items-center justify-between rounded-xl border border-dashed border-white/10 bg-neutral-900/40 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-neutral-300">14</span>
<div className="h-8 w-8 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">
<span className="text-[10px] text-neutral-300">You</span>
</div>
<div>
<p className="text-sm font-medium">You</p>
<p className="text-[11px] text-neutral-400">32 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$1,240</span>
</div>
</div>

<div className="flex items-center justify-between rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-neutral-300">15</span>
<img alt="avatar" className="h-8 w-8 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Jamie O</p>
<p className="text-[11px] text-neutral-400">30 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$1,160</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-neutral-900 ring-1 ring-white/10 px-3 py-2.5">
<div className="flex items-center gap-3">
<span className="text-[11px] text-neutral-300">16</span>
<img alt="avatar" className="h-8 w-8 rounded-lg ring-1 ring-white/10 object-cover" src="https://images.unsplash.com/photo-1536323760109-ca8c07450053?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium">Taylor R</p>
<p className="text-[11px] text-neutral-400">29 completes</p>
</div>
</div>
<span className="text-[11px] text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md ring-1 ring-emerald-500/20">$1,120</span>
</div>

<button className="w-full mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 text-[12px] text-neutral-300">
              Load more
              <svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</section></div>

<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
</div>


<section className="rounded-3xl bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Back" className="p-1.5 rounded-md hover:bg-neutral-800 ring-1 ring-white/10 hover:ring-neutral-700 transition">
<svg className="h-4.5 w-4.5 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h2 className="text-[20px] sm:text-[21px] font-semibold tracking-tight">FAQ &amp; help</h2>
</div>
<span className="text-[11px] text-neutral-400">Support</span>
</div>
<div className="p-4 space-y-4">

<div className="rounded-2xl bg-neutral-900 ring-1 ring-white/10 p-3">
<label className="sr-only" htmlFor="faq-search">Search help</label>
<div className="flex items-center gap-2">
<svg className="h-4.5 w-4.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="flex-1 bg-transparent text-sm text-neutral-200 placeholder:text-neutral-500 focus:outline-none" id="faq-search" placeholder="Search FAQs (e.g., payout, tier)" type="search"/>
<kbd className="hidden sm:inline-block text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 ring-1 ring-white/10 text-neutral-400">/</kbd>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<a className="group rounded-xl bg-neutral-900 ring-1 ring-white/10 hover:ring-neutral-700 px-3 py-2.5 flex items-center justify-between" href="#tiers">
<div className="flex items-center gap-2">
<svg className="h-4.5 w-4.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 17.27 6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l4.46 4.73L5.82 21z"></path></svg>
<span className="text-[12px] text-neutral-300">Understanding tiers</span>
</div>
<svg className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="group rounded-xl bg-neutral-900 ring-1 ring-white/10 hover:ring-neutral-700 px-3 py-2.5 flex items-center justify-between" href="#payouts">
<div className="flex items-center gap-2">
<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="15" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 8a3 3 0 0 0-3-2H9a3 3 0 0 0 0 6h3a3 3 0 0 1 0 6H8"></path><path d="M12 2v4"></path><path d="M12 18v4"></path></svg>
<span className="text-[12px] text-neutral-300">Payout schedule</span>
</div>
<svg className="h-4 w-4 text-neutral-400 group-hover:text-neutral-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 divide-y divide-white/5" id="tiers">
<details className="group p-4 open:bg-neutral-900/60">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">How do tier bonuses work?</span>
<svg className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-[13px] text-neutral-300">Each completed referral in a cycle contributes to your tier. Higher tiers increase your base reward by the listed percentage. Your tier resets at the start of each cycle.</p>
</details>
<details className="group p-4 open:bg-neutral-900/60">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">What actions qualify a referral?</span>
<svg className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-[13px] text-neutral-300">A referred user must sign up, complete KYC, and make their first deposit within the eligibility period to count as a completed referral.</p>
</details>
</div>
<div className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/10 divide-y divide-white/5" id="payouts">
<details className="group p-4 open:bg-neutral-900/60">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">When are payouts processed?</span>
<svg className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-[13px] text-neutral-300">Payouts are batched weekly and credited to your wallet every Friday. You can view upcoming and past payouts in Activity → Payouts.</p>
</details>
<details className="group p-4 open:bg-neutral-900/60">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium">Why is a reward pending?</span>
<svg className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-2 text-[13px] text-neutral-300">Pending status usually means the referee is still completing required steps or within the verification window. If it exceeds the window, it may expire.</p>
</details>
</div>

<div className="rounded-2xl ring-1 ring-white/10 p-4 bg-neutral-900/60 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-900 ring-1 ring-white/10 grid place-content-center">

<svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>
<path d="m4.93 4.93 3.53 3.53"></path><path d="m14.54 14.54 3.53 3.53"></path><path d="m19.07 4.93-3.53 3.53"></path><path d="m9.46 14.54-3.53 3.53"></path>
</svg>
</div>
<div>
<p className="text-sm font-medium">Need more help?</p>
<p className="text-[11px] text-neutral-400">Chat with support or email us</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900 ring-1 ring-white/10 hover:bg-neutral-800 hover:ring-neutral-700 text-[12px]">
<svg className="h-4 w-4 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10Z"></path></svg>
                  Chat
                </button>
<button className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 hover:bg-emerald-500/15 hover:ring-emerald-400/30 text-[12px]">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 6-10 7L2 6"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
                  Email
                </button>
</div>
</div>
</div>

<div className="border-t border-white/5 px-4 py-2.5 flex items-center justify-between">
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7a2 2 0 0 0-2-2H7a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-1"></path><path d="M18 12h.01"></path></svg>
<span className="text-[10px]">Wallet</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><rect height="5" rx="1" width="20" x="2" y="7"></rect><path d="M12 22V7"></path><path d="M5 7s-2-1.5-2-3 1.5-3 3-3 3 1.5 3 3-2 3-2 3"></path><path d="M19 7s2-1.5 2-3-1.5-3-3-3-3 1.5-3 3 2 3 2 3"></path></svg>
<span className="text-[10px]">Refer</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-200">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-7.5 7.5-5-5L2 17"></path></svg>
<span className="text-[10px]">Rewards</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-50">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 21a8 8 0 1 0-16 0"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px]">Profile</span>
</button>
</div>
</section>
</div>

<footer className="mt-8 text-center text-[11px] text-neutral-500">
<p>Referral terms apply. Rewards may vary by region. © 2025 Crypto Wallet</p>
</footer>


    </>
  );
}
