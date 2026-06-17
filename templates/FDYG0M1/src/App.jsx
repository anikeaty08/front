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
      
    document.addEventListener('DOMContentLoaded', function () {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 opacity-90" style={{background: 'radial-gradient(1000px 600px at 20% -10%, rgba(99,102,241,0.25) 0%, transparent 60%), radial-gradient(800px 500px at 110% 20%, rgba(16,185,129,0.18) 0%, transparent 60%), radial-gradient(700px 500px at 50% 120%, rgba(168,85,247,0.18) 0%, transparent 60%), #0a0a0b'}}></div>
<div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?q=80&amp', backgroundSize: 'cover', mixBlend: 'overlay'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,.4))]"></div>
</div>

<main className="w-full max-w-screen-md min-h-screen sm:px-6 sm:py-8 flex flex-col gap-6 sm:gap-8 mr-auto ml-auto pt-6 pr-5 pb-6 pl-5">

<header className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl"></div>
<div className="absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl"></div>
</div>
<div className="flex items-center justify-between px-5 sm:px-6 py-5">
<div className="flex items-center gap-3">
<div className="h10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center shadow-inner shadow-black/30">
<span className="tracking-tight text-lg font-semibold">NV</span>
</div>
<div className="">
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold">Novara Kitchen</h1>
<p className="text-sm text-neutral-300/80">Fresh. Fast. Affordable.</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping"></div>
<div className="h-2 w-2 rounded-full bg-emerald-400"></div>
<span className="text-xs text-neutral-300/80">Open now</span>
</div>
</div>
<div className="px-5 sm:px-6 pb-5">
<div className="grid grid-cols-3 gap-3 sm:gap-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-300/80 mb-1">Avg Meal</p>
<p className="text-2xl tracking-tight font-semibold">$12</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-300/80 mb-1">Prep Time</p>
<p className="text-2xl tracking-tight font-semibold">8–10m</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<p className="text-xs text-neutral-300/80 mb-1">Today’s Savings</p>
<p className="text-2xl tracking-tight font-semibold">20%</p>
</div>
</div>
</div>
</header>

<section className="relative rounded-2xl border border-indigo-400/20 bg-indigo-500/10 backdrop-blur-xl overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -left-10 top-1/2 -translate-y-1/2 h-28 w-28 bg-indigo-400/20 blur-2xl rounded-full"></div>
</div>
<div className="flex items-center gap-3 px-5 sm:px-6 pt-5">
<div className="h-11 w-11 rounded-xl bg-indigo-500/20 border border-indigo-400/30 grid place-items-center shadow-inner shadow-indigo-900/40">
<svg className="lucide lucide-gift h-5 w-5 text-indigo-300 animate-bounce" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<div className="flex-1">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Limited-Time Offers</h2>
<p className="text-sm text-indigo-200/90">Don’t miss today’s specials</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-white/10 border border-white/15 text-neutral-200">Today</span>
</div>
<div className="px-5 sm:px-6 pb-5 pt-3">
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<div className="flex items-center gap-2 px-4 py-2 border-b border-white/10">
<svg className="lucide lucide-sparkles h-4 w-4 text-indigo-200" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-xs text-neutral-200/90">Live highlights</span>
</div>
<div className="relative">
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">

<article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-star h-5 w-5 text-yellow-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">Online Reviews</h3>
<p className="text-xs text-neutral-300/80">Real guests. Real smiles.</p>
</div>
</div>
<div className="flex items-end gap-3">
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-5 w-5 text-yellow-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-yellow-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-yellow-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-5 w-5 text-yellow-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half h-5 w-5 text-yellow-300" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<p className="text-2xl tracking-tight font-semibold">4.8<span className="text-sm text-neutral-300/70">/5</span></p>
<span className="text-xs text-neutral-300/80">3.2k+ ratings</span>
</div>
<div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
<img alt="guest" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-neutral-200/95 line-clamp-2">“Super quick service and the flavors are insane. My new go-to spot!”</p>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-badge-check h-5 w-5 text-emerald-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">Certified Quality</h3>
<p className="text-xs text-neutral-300/80">Safety you can trust</p>
</div>
</div>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-shield-check h-4 w-4 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Food Safety: ISO 22000</span>
</li>
<li className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-file-check h-4 w-4 text-emerald-300" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m9 15 2 2 4-4"></path></svg>
<span>Local Health Compliance</span>
</li>
<li className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-leaf h-4 w-4 text-emerald-300" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span>Responsible Sourcing</span>
</li>
</ul>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[10px] tracking-tight text-neutral-300">QS</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[10px] tracking-tight text-neutral-300">FS</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-2 text-center text-[10px] tracking-tight text-neutral-300">HC</div>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-wallet h-5 w-5 text-amber-300" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">Affordability</h3>
<p className="text-xs text-neutral-300/80">Great value, every day</p>
</div>
</div>
<div className="rounded-xl border border-amber-400/20 bg-amber-500/10 p-4">
<p className="text-xs text-amber-100/90">Popular Combo</p>
<div className="flex items-end gap-2">
<p className="text-2xl tracking-tight font-semibold">$9.90</p>
<span className="text-xs text-amber-200/90 line-through">$12.50</span>
</div>
<p className="text-xs text-neutral-200/80 mt-1">Main + Side + Drink</p>
</div>
<div className="mt-3 flex items-center justify-between text-sm">
<span className="text-neutral-200/90">Average meal $12</span>
<span className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-xs">Lunch Save 20%</span>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-gauge h-5 w-5 text-cyan-300" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">Speed of Service</h3>
<p className="text-xs text-neutral-300/80">In a hurry? We’ve got you.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-14 w-14 rounded-xl border border-cyan-400/30 bg-cyan-500/10 grid place-items-center">
<svg className="lucide lucide-zap h-6 w-6 text-cyan-200" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<p className="text-2xl tracking-tight font-semibold">Under 10 minutes</p>
<p className="text-xs text-neutral-300/80">Avg prep time across orders</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-300/80">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-cyan-300" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Priority line for takeout</span>
</div>
</article>

<article className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-timer h-5 w-5 text-rose-300" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">Current Wait</h3>
<p className="text-xs text-neutral-300/80">Estimated for new orders</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<div className="h-16 w-16 rounded-full border border-rose-400/30 bg-rose-500/10 grid place-items-center">
<svg className="lucide lucide-loader-2 h-6 w-6 text-rose-200 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
<span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-rose-400">
<span className="absolute inset-0 rounded-full bg-rose-400 animate-ping"></span>
</span>
</div>
<div>
<p className="text-3xl tracking-tight font-semibold">6–8 min</p>
<p className="text-xs text-neutral-300/80">Dine-in &amp; takeout</p>
</div>
</div>
<div className="mt-3 flex items-center gap-2 text-xs text-neutral-300/80">
<svg className="lucide lucide-clock-9 h-4 w-4 text-rose-300" data-lucide="clock-9" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6H8"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Live updates at the counter</span>
</div>
</article>

<article className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl p-5 hover:border-white/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
<svg className="lucide lucide-megaphone h-5 w-5 text-fuchsia-300" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<div>
<h3 className="text-lg tracking-tight font-semibold">What’s New</h3>
<p className="text-xs text-neutral-300/80">Seasonal picks</p>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
<img alt="seasonal dish" className="h-12 w-12 rounded-lg object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-medium">Spicy Mango Bowl</p>
<p className="text-xs text-neutral-300/80">Sweet heat, fresh crunch</p>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-fuchsia-500/10 border border-fuchsia-400/30 text-fuchsia-200">New</span>
</div>
</article>
</section>

<footer className="mt-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 sm:px-6 py-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin h-4 w-4 text-neutral-300" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-xs text-neutral-300/80">123 Market St · 2 min walk</p>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-wifi h-4 w-4 text-neutral-300 animate-pulse" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<p className="text-xs text-neutral-300/80">Free Wi‑Fi</p>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles h-4 w-4 text-neutral-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-xs text-neutral-300/80">Vegetarian &amp; GF options</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
