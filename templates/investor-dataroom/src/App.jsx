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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 h-14 flex items-center justify-between px-4 lg:px-8">
<div className="flex items-center gap-3">
<button className="lg:hidden text-slate-500 hover:text-slate-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-sm flex items-center justify-center text-white text-[10px] font-semibold tracking-tight">Q</div>
<span className="text-sm font-medium text-slate-900 tracking-tight" style={{}}>KARNAK Investor Dataroom</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6 text-xs text-slate-500">
<span className="hidden lg:inline">Last Updated: <span className="text-slate-900">Jan 27, 2026</span></span>
<span className="hidden lg:inline">Version: <span className="text-slate-900">Pre-A Fundraise</span></span>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-medium text-emerald-700">Actively Fundraising</span>
</div>
<a className="ml-4 px-3 py-1.5 bg-slate-900 text-white rounded text-xs font-medium hover:bg-slate-800 transition-colors" href="#">Schedule Demo</a>
</div>
</header>

<div className="fixed inset-0 bg-slate-900/20 z-40 hidden backdrop-blur-sm lg:hidden" id="mobile-drawer-bg"></div>
<div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-screen max-w-[1400px] mr-auto ml-auto pt-14">

<aside className="fixed lg:sticky h-[calc(100vh-3.5rem)] overflow-y-auto no-scrollbar hidden lg:block z-50 transform transition-transform duration-300 -translate-x-full lg:translate-x-0 bg-slate-50 w-[260px] border-slate-200 border-r pt-6 pb-6 top-14 left-0" id="sidebar">
<nav className="pr-4 pl-4 space-y-1">
<p className="px-3 text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-3">Contents</p>
<a className="nav-link block hover:text-slate-900 hover:bg-slate-100 transition-all text-xs font-medium text-slate-600 border-transparent rounded-r-md border-r-2 pt-1.5 pr-3 pb-1.5 pl-3" href="#abstract">1. Overview</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#karnak-overview">2. KARNAK Overview</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#karnak-benefits">3. KARNAK Benefits</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#karnak-mvp">4. MVP Traction</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#why-karnak-wins">5. Why KARNAK Wins</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#ecosystem-traction">6. Ecosystem Traction</a>
<a className="nav-link block hover:text-slate-900 hover:bg-slate-100 transition-all text-xs font-medium text-slate-600 border-transparent rounded-r-md border-r-2 pt-1.5 pr-3 pb-1.5 pl-3" href="#powering-karnak">7. Ecosystem Advantage</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#products-decks">8. Products &amp; Decks</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#team">9. Team</a>
<a className="nav-link block px-3 py-1.5 text-xs font-medium text-slate-600 rounded-r-md hover:text-slate-900 hover:bg-slate-100 transition-all border-r-2 border-transparent" href="#financials">10. Financials</a>
<a className="nav-link block hover:text-slate-900 hover:bg-slate-100 transition-all text-xs font-medium text-slate-600 border-transparent rounded-r-md border-r-2 pt-1.5 pr-3 pb-1.5 pl-3" href="#target-user">11. Target User Profile</a><a className="nav-link block hover:text-slate-900 hover:bg-slate-100 transition-all text-xs font-medium text-slate-600 border-transparent rounded-r-md border-r-2 pt-1.5 pr-3 pb-1.5 pl-3" href="#documents">12. Documents (FAQ)</a>
</nav>
</aside>

<main className="min-h-screen lg:px-16 lg:py-16 bg-white border-slate-100 border-l pt-12 pr-6 pb-12 pl-6">
<div className="max-w-4xl mr-auto ml-auto space-y-20">

<section className="scroll-mt-24" id="abstract">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 01</span>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-6">Overview</h2>
<div className="inline-flex gap-2 bg-indigo-50/50 border-indigo-100 border rounded-lg mb-8 pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center">
<iconify-icon className="text-indigo-600" icon="solar:lock-password-linear"></iconify-icon>
<span className="text-xs font-medium text-indigo-800">Confidential. For qualified investors only.</span>
</div>
<p className="leading-relaxed text-lg font-medium text-slate-800 mb-6">KARNAK is a venture-backed spin-out from Quantum Temple, the regenerative travel platform that has spent 5+ years building government partnerships and cultural access infrastructure across 100+ countries. While Quantum Temple operates the B2B/B2G ecosystem ($5.67M FY25), KARNAK is the B2C agentic AI concierge that monetizes this infrastructure for ultra-high-net-worth individuals ($4.1M FY25 ARR).
We validated the hard way. Now we're scaling the smart way.</p>
<p className="leading-relaxed text-base text-slate-600">We didn't start with AI because we could. We started with humans because we had to prove the model worked.<br/><br/>Could UHNW individuals actually pay $100K+ annually for travel? Would impossible experiences requiring government clearance actually convert? We proved it manually. $5.74M revenue. Purely human operations. Zero technology.<br/><br/>Every booking taught us what converts vs. what's theater. Every government clearance taught us approval mechanics. Every $171K customer validated pricing power at the highest tier. This isn't a limitation—it's intentional validation.<br/><br/>We deliberately ran human-led processes to deeply understand operational mechanics across different booking scales: FITs, group bookings, large buyouts, impossible experiences. These are the same coordination problem at different scales, all sharing the same backend infrastructure and partnership requirements.<br/><br/>The result: proprietary operational insight into what converts, where friction exists, and how workflows actually function at the highest end of the market. Now we're building agentic AI on top of proven unit economics and real process knowledge.</p>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-overview">
<span className="text-[10px] uppercase block font-semibold text-slate-400 tracking-wider mb-2">Section 02</span>
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-6">KARNAK Overview</h2>
<div className="max-w-3xl mb-10">
<p className="leading-relaxed text-base text-slate-600 mb-10">KARNAK is building the intelligent luxury concierge that remembers every preference, handles every request, delivers instantly. One voice. Complete orchestration. The operating system for how power moves through the world. What takes other concierges 3 hours, KARNAK does in 3 minutes. What others can't access, KARNAK delivers instantly, because we built the ecosystem first. (Quantum Temple) Think Superhuman for travel meets Amex Centurion, powered by agentic AI and backed by 5+ years of institutional and governmental relationships through Quantum Temple that money alone cannot buy. By combining agentic AI with deep institutional relationships, KARNAK removes the friction of coordination while unlocking access that money alone cannot buy.</p>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
<span className="inline-flex items-center w-max rounded-md bg-indigo-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-indigo-700 ring-1 ring-inset ring-indigo-700/10">Why Now</span>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">The Timing Argument: Three Converging Forces</h3>
</div>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon height="20" icon="lucide:bot" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Agentic AI Maturity</h4>
<p className="text-xs leading-relaxed text-slate-600">Before 2024, this would have required massive concierge teams. Now, agentic AI handles 85% of orchestration autonomously. The $47B agentic AI market is growing 40-44% CAGR. 78% of VC capital is shifting to vertical AI applications.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon height="20" icon="lucide:hourglass" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Legacy Travel &amp; Luxury Concierge Not Innovating</h4>
<p className="text-xs leading-relaxed text-slate-600">Expedia’s core platform is 20+ years old. Amex Centurion still operates on 24-48hr response times. The gap between UHNW expectations and available solutions is widening. AI innovation in the space: $13.38T AI in travel market by 2030 (28.7% CAGR). $3.8B luxury concierge service market by 2030 (CAGR 10%).</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-none">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-slate-200 text-indigo-600 shadow-sm">
<iconify-icon height="20" icon="lucide:building-2" width="20"></iconify-icon>
</div>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Not Starting from Scratch</h4>
<p className="text-xs leading-relaxed text-slate-600">Karnak is the direct result of 4 years running Quantum Temple on-the-ground partnerships with 100+ governments, $5.7M in annual tourism revenue, 25K+ travelers. We ran concierge manually for a year, saw the demand, and built the AI layer on top. This is user-pull, not founder speculation.</p>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:crown-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Exclusive Access</h3>
<p className="leading-relaxed text-xs text-slate-500">Gated access to un-Googleable experiences curated by local experts.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Regenerative Impact</h3>
<p className="text-xs text-slate-500 leading-relaxed">Every booking contributes directly to cultural preservation funds.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">AI Orchestration</h3>
<p className="text-xs text-slate-500 leading-relaxed">Autonomous agents handle logistics, reducing human overhead by 85%.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Privacy First</h3>
<p className="text-xs text-slate-500 leading-relaxed">Zero-knowledge data architecture ensuring your preferences stay private.</p>
</div>

<div className="space-y-3">
<div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-slate-900 mb-2">
<iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Global Reach</h3>
<p className="text-xs text-slate-500 leading-relaxed">Direct partnerships with 100+ governments and ministries worldwide.</p>
</div>
</div>
<div className="mt-12 rounded-xl overflow-hidden border border-slate-200 shadow-sm relative group">
<img alt="KARNAK Experience" className="transition-transform duration-700 group-hover:scale-105 w-full h-[400px] object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a91375b-96c9-4703-ad72-22e458c26a53_1600w.png"/>
<div className="flex bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<div className="text-white transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
<div className="text-[10px] uppercase font-bold text-indigo-200 tracking-widest bg-indigo-500/20 w-max border-indigo-400/30 border rounded mb-2 pt-1 pr-2 pb-1 pl-2 backdrop-blur-md">KARNAK APP</div>
<h3 className="text-xl font-medium tracking-tight">Voice-Led Concierge</h3>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-benefits">
<span className="text-[10px] uppercase block font-semibold text-slate-400 tracking-wider mb-2">Section 03</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">Benefits</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-5 border border-slate-200 rounded-lg bg-slate-50 hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
<iconify-icon icon="solar:microphone-3-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-2">One Voice Note, Complete Trip</h3>
<p className="text-xs text-slate-600 leading-relaxed">Say where you want to go. Done. Flights, hotels, restaurants, experiences—all booked in seconds. AI handles the speed. Humans handle what's impossible.</p>
</div>
</div>
</div>

<div className="p-5 border border-slate-200 rounded-lg bg-slate-50 hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
<iconify-icon icon="solar:key-minimalistic-square-3-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Access Beyond Loyalty</h3>
<p className="text-xs text-slate-600 leading-relaxed">Private Sistine Chapel dinners. VIP perks at Aman, Four Seasons, Regent. Tables at impossible restaurants. No points to chase. No status required. Just access.</p>
</div>
</div>
</div>

<div className="p-5 border border-slate-200 rounded-lg bg-slate-50 hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Hyper Personalization</h3>
<p className="text-xs text-slate-600 leading-relaxed">Remembers your preferences. Learns your style. Anticipates what you want before you ask. Every trip gets smarter, more personal, more you.</p>
</div>
</div>
</div>

<div className="p-5 border border-slate-200 rounded-lg bg-slate-50 hover:border-slate-300 transition-colors">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-sm flex-shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-2">Your data, your control</h3>
<p className="text-xs text-slate-600 leading-relaxed">Privacy-first from day one. Your preferences stay yours. We use data to serve you better—never to sell you out. Delete anytime, zero questions.</p>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="karnak-mvp">
<span className="text-[10px] uppercase block font-semibold text-slate-400 tracking-wider mb-2">Section 04</span>
<div className="bg-slate-900 rounded-xl overflow-hidden relative border border-slate-800">

<div className="p-6 md:p-8 relative z-10">

<div className="mb-8 border-b border-white/10 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-white mb-3">KARNAK MVP</h2>
<p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                                    Q4 marked the transition from concept to MVP-ready platform. We integrated global inventory APIs and established direct commercial relationships with 100+ Tier-1 hospitality brands.
                                </p>
</div>
<div className="grid md:grid-cols-[1fr_260px] gap-8">

<div className="space-y-6">

<div className="grid grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-semibold">Virtuoso API</div>
<div className="text-lg font-semibold text-white tracking-tight">1,800+</div>
<div className="text-xs text-slate-400 mt-1">Luxury Hotels</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="text-[10px] uppercase tracking-wider text-indigo-400 mb-1 font-semibold">Duffle API</div>
<div className="text-lg font-semibold text-white tracking-tight">380+</div>
<div className="text-xs text-slate-400 mt-1">Global Airlines</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-lg p-4">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-white" icon="solar:star-fall-linear"></iconify-icon>
<h3 className="text-sm font-medium text-white">Preferred Partnerships</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/5">Orient Express</span>
<span className="px-2 py-1 bg-white/10 rounded text-[10px] text-white border border-white/5">Clinique La Prairie</span>
</div>
</div>

<div className="">
<h4 className="text-sm font-semibold text-white mb-2">Access to the world's most exclusive properties</h4>
<p className="text-xs text-slate-400 leading-relaxed">Direct partnerships with 100+ Tier-1 hospitality brands give you privileged access, preferential rates, and experiences you won't find anywhere else.</p>
</div>
</div>

<div className="bg-gradient-to-b from-indigo-900/50 to-slate-900 rounded-xl border border-indigo-500/30 p-6 flex flex-col justify-center items-center text-center">
<div className="text-[10px] uppercase tracking-widest text-indigo-300 font-semibold mb-2">Pre-Launch Revenue</div>
<div className="text-4xl font-bold text-white tracking-tight mb-1">$1M+</div>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
<iconify-icon className="text-emerald-400 text-xs" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-[10px] font-semibold text-emerald-400">IN 5 MONTHS</span>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="why-karnak-wins">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 05</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Why KARNAK Wins</h2>
<div className="text-white bg-slate-900 rounded-lg mb-8 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="flex-1">
<h3 className="text-lg font-semibold tracking-tight mb-2">The Quantum Temple Advantage</h3>
<p className="leading-relaxed text-sm text-slate-300 mb-4">Most luxury concierges have vendor relationships. KARNAK has government partnerships. We spent 5 years building the rails that route $5.7M annually through closed-door cultural experiences and ministerial clearances. </p>
<div className="grid grid-cols-2 gap-4 text-xs font-medium text-slate-200 gap-x-4 gap-y-4">
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Vatican Dinners</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Pyramid Sunrise Access</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> 1,800+ Properties</div>
<div className="flex items-center gap-2"><iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Ministerial Level Buyouts</div>
</div>
</div>
<div className="md:w-[200px] bg-white/10 border-white/10 border rounded pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm">
<div className="text-[10px] uppercase tracking-wide text-slate-400 mb-1">Replication Time</div>
<div className="text-2xl font-semibold text-white tracking-tight">18 Months+</div>
<p className="text-[10px] text-slate-400 mt-2 leading-snug">Time required for competitors to build equivalent government trust.</p>
</div>
</div>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Three Pillars of Impossible Service</h3>
<div className="grid md:grid-cols-3 gap-6 mb-8">

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:shield-star-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Institutional Access</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">Reservations requiring government clearance. Vatican dinners, Orient Express buyouts, UNESCO site access.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">Not available to Amex Centurion</div>
</div>

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:cpu-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Agentic AI That Learns</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">One voice note → complete trip orchestration in 30 seconds. Flights, hotels, and dining, paid and synced instantly.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">Reduces human overhead by 85%</div>
</div>

<div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
<iconify-icon className="text-indigo-600 text-2xl mb-3" icon="solar:hand-heart-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Regenerative Impact</h4>
<p className="text-xs text-slate-600 leading-relaxed mb-3">$2.5M+ distributed on-chain. When you book, local artisans and cultural guardians get paid fairly.</p>
<div className="text-[10px] font-medium text-slate-500 bg-white px-2 py-1 rounded inline-block border border-slate-100">5,336+ Jobs Created</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="ecosystem-traction">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 06</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">FY25 Ecosystem Traction</h2>
<p className="text-sm text-slate-600 mb-6">While competitors figure out hotel APIs, KARNAK launches with validated ecosystem revenue and 25,000+ travelers.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">$5.74M</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">FY25 Revenue</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-emerald-600 tracking-tight">642%</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">YoY Growth</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">$601k</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Dec '25 Monthly Rev</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xl font-semibold text-slate-900 tracking-tight">&gt;$1M</div>
<div className="text-[10px] uppercase tracking-wide text-slate-500 mt-1">Pre-launch Bookings</div>
</div>
</div>
<div className="space-y-3">
<div className="border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wide">Proof Point</span>
<h4 className="text-sm font-semibold text-slate-900">Mirai Bajo Activation</h4>
</div>
<div className="text-xs text-slate-600 mb-4">
<p className="leading-relaxed mb-5">135 participants, ~$600K revenue. Largest regenerative activation validating the destination engine model. Partnership with Ministry of Creative Economy of Indonesia. x Marriott T'AAKANA x Studio Mirai x Wonderful Indonesia.</p>
<div className="grid grid-cols-2 gap-x-3 gap-y-4 border-t border-slate-100 pt-4">
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">+1,000</span>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide leading-tight">Job Creation</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">150</span>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide leading-tight">Global Leaders</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">93.6%</span>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide leading-tight">Local Procurement</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-base font-semibold text-slate-900 tracking-tight">150</span>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide leading-tight">Cultural Practitioners</span>
</div>
<div className="col-span-2 mt-2">
<div className="bg-emerald-50/50 border border-emerald-100 rounded-lg p-3 flex items-center justify-between group hover:border-emerald-200 transition-colors">
<div className="">
<div className="text-xl font-semibold text-emerald-700 tracking-tight mb-0.5">71.6</div>
<div className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">Regenerative Impact Index</div>
</div>
<div className="h-8 w-8 rounded-full bg-emerald-100/60 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-100 transition-colors">
<svg className="lucide lucide-sprout" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
</div>
</div>
</div>
<div className="col-span-2 mt-1">
<a className="flex items-center gap-2 text-[11px] font-semibold text-indigo-600 hover:text-indigo-700 transition-colors group p-1.5 -ml-1.5 rounded-md hover:bg-indigo-50/50 w-max" href="https://getkarnak.com/report-miraibajo" target="_blank">
<span>Read Mirai Bajo Impact Report</span>
<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
<a className="block group relative w-full aspect-video rounded-md overflow-hidden bg-slate-900 border border-slate-200 cursor-pointer no-underline" href="#">
<img alt="Activation Video" className="group-hover:opacity-60 transition-opacity duration-300 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83bf0bf4-60ec-4677-9a74-0aee013710ef_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white p-1.5 rounded-md shadow-sm z-10 border border-white/10">
<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</div>
<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex transform group-hover:scale-110 transition-all duration-300 bg-white/95 w-10 h-10 rounded-full shadow-lg backdrop-blur items-center justify-center">
<svg className="w-4 h-4 text-slate-900 ml-0.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-white/90">Event Highlight</span>
<span className="text-xs font-semibold text-white tracking-tight">Official Recap Video</span>
</div>
</div>
</a>
</div>
<div className="space-y-12">

<div className="border-slate-200 border rounded-lg pt-4 pr-4 pb-4 pl-4 bg-white shadow-sm">
<div className="flex gap-3 mb-2 gap-x-3 gap-y-3 items-center">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 uppercase tracking-wide">Proof Point</span>
<h4 className="text-sm font-semibold text-slate-900">Token2049 Dubai</h4>
</div>
<p className="text-xs text-slate-600 mb-4">Held a cultural expedition during Token2049 Dubai for the web3 community, in partnership with SUI ecosystem and Studio Mirai.</p>
<a className="block group aspect-video overflow-hidden cursor-pointer no-underline bg-slate-900 w-full border-slate-200 border rounded-md relative" href="https://x.com/quantum_temple/status/1917815395743941083?s=20">
<img alt="Activation Video" className="group-hover:opacity-60 transition-opacity duration-300 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2520ee4f-211f-4d59-b586-58ec31d379c5_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 right-3 bg-black/90 backdrop-blur-sm text-white p-1.5 rounded-md shadow-sm z-10 border border-white/10">
<svg className="w-3.5 h-3.5" fill="currentColor" viewbox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
</div>
<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="window.location.href='https://x.com/quantum_temple/status/1917815395743941083?s=20'" role="button">
<div className="flex transform group-hover:scale-110 transition-all duration-300 bg-white/95 w-10 h-10 rounded-full shadow-lg backdrop-blur items-center justify-center">
<svg className="w-4 h-4 text-slate-900 ml-0.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
<div className="flex flex-col gap-0.5">
<span className="text-[10px] font-medium text-white/90">Event Highlight</span>
<span className="text-xs font-semibold text-white tracking-tight">Official Recap Video</span>
</div>
</div>
</a>
</div>

<div className="md:p-8 bg-white border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">

<div className="mb-8 border-b border-slate-100 pb-6">
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Partnerships</h2>
<p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
            KARNAK's partnerships demonstrate both operational depth and infrastructure quality across luxury hospitality and government sectors.
        </p>
</div>
<div className="grid md:grid-cols-2 gap-10">

<div className="space-y-8">
<div className="">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<svg className="lucide lucide-file-text text-indigo-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><path d="M10 9H8"></path></svg>
                    Formal Partnerships &amp; Contracts
                </h4>
<ul className="space-y-4">
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
<span className=""> Formal contract with preferred rates for exclusive destinations and experiences</span>
</li>
<li className="flex gap-3 text-sm text-slate-600 leading-relaxed">
<span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
<span className=""> Memorandum of Understanding (in place, renewal pending)</span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<svg className="lucide lucide-landmark text-indigo-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="12" y2="5"></line><line x1="10" x2="10" y1="12" y2="5"></line><line x1="14" x2="14" y1="12" y2="5"></line><line x1="18" x2="18" y1="12" y2="5"></line><polygon points="12 2 20 7 4 7"></polygon><path d="M5 22h14"></path></svg>
                    Government &amp; Ministry Relations
                </h4>
<p className="leading-relaxed text-sm text-slate-600">
                    We maintain formal relations with tourism and government entities, with our Indonesian Ministry of Tourism &amp; Creative Economy partnership serving as proof of concept for sustainable cultural tourism collaboration.
                </p>
</div>
</div>

<div className="flex flex-col">
<div className="mb-8">
<h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
<svg className="lucide lucide-building-2 text-indigo-600" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                    Operational Hotel Partnerships
                </h4>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Our major hotel brand partnerships are demonstrated through our Obsidian partners directory, which shows real, operational relationships with properties across the globe.
                </p>
<p className="leading-relaxed text-sm text-slate-600">
                    Rather than letters of intent, our data infrastructure proves partnership maturity by displaying direct property integrations, live availability, preferential rates for KARNAK members, and our proprietary data architecture managing 100+ hotel partners. This approach demonstrates both partnership depth and our data moat—potential investors can see the infrastructure in action.
                </p>
</div>

<div className="mt-auto">
<a className="group flex items-center justify-between hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/5 transition-all duration-200 no-underline bg-white w-full border-slate-200 border rounded-lg pt-3.5 pr-3.5 pb-3.5 pl-3.5" href="https://obsidian.karnak.co/partners/" target="_blank">
<div className="flex items-center gap-3.5">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 group-hover:scale-105 transition-transform duration-200">
<svg className="lucide lucide-database" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="">
<div className="group-hover:text-emerald-700 transition-colors text-sm font-semibold text-slate-900">Partnership MOUs</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-emerald-600 transition-colors">Live Partner Data</span>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
</div>
</div>
</div>
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-200 border border-transparent group-hover:border-emerald-500">
<svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="powering-karnak">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 07</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Ecosystem Advantage</h2>
<div className="space-y-8 mb-12">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">01</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Corporate Expeditions (Enterprise Validation)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">Immersive, invite-only cultural retreats for the world's most discerning organizations. Every corporate client becomes a qualified lead pool for KARNAK members.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Validates institutional coordination at scale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Partners: Studio Mirai, Ta'aktana, Ritz-Carlton</li>
</ul>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">02</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Experience Marketplace (The Access Layer)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">RWA-backed experiences on-chain. These aren't vendor relationships; they are institutional partnerships that create access wealth alone cannot buy.</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Private Vatican dinners &amp; Egypt pyramid sunrise ceremonies</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 5+ years of government trust-building</li>
</ul>
</div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 flex-shrink-0 mt-1">
<span className="text-xs font-bold">03</span>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900">Hospitality Partnerships (Pricing Advantage)</h3>
<p className="text-sm text-slate-600 mt-1 mb-2">Direct hotel relationships, real-time availability, negotiated rates—organized in our Obsidian system

developed through $5.74M in live transactions and 18 months of human-executed bookings</p>
<ul className="text-xs text-slate-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 1,800+ Virtuoso Properties &amp; 380+ Global Airlines</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 12-15% Commissions (vs 7% OTA standard)</li>
</ul>
</div>
</div>
</div>

<div className="mb-12">
<div className="mb-6">
<h3 className="text-lg font-medium text-slate-900 tracking-tight">The Data Moat: Obsidian Intelligence System</h3>
</div>
<div className="md:p-8 bg-slate-50 border-slate-200 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<div className="text-sm text-slate-600 space-y-4">
<p className="font-semibold text-slate-900">Anyone can build a booking app. What's defensible is the knowledge infrastructure:</p>
<ul>` element with the additional bullet points included.

```html
<ul className="list-disc marker:text-indigo-600 pl-5 space-y-2">
<li className="pl-1">Proprietary curation methodology developed through $5.74M in live transactions and 18 months of human-executed bookings</li>
<li className="pl-1">Structured data on luxury inventory that doesn't exist elsewhere: Direct hotel relationships, real-time availability, negotiated rates—organized in our Obsidian system</li>
</ul></ul>
<p className="">Investors can explore the operational proof in our Obsidian Partners Directory (<a className="text-indigo-600 hover:text-indigo-700 hover:underline" href="https://obsidian.karnak.co/partners/" target="_blank">obsidian.karnak.co/partners/</a>), which shows real properties with real contacts—not aspirational LOIs.</p>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-xl p-8 text-white border border-slate-800 relative overflow-hidden">

<div className="mb-10 text-center max-w-2xl mx-auto">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Data is our next play.</h3>
<p className="text-slate-400 text-sm leading-relaxed">We guide high-value travelers through personalized trips—capturing behavior, preferences, and spending across B2C, B2B, and B2G.</p>
</div>

<div className="relative">

<div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
<div className="text-center p-3 rounded bg-white/5 border border-white/10">
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">User Behavior</div>
<div className="text-xs text-slate-300">Bookings &amp; preferences</div>
</div>
<div className="text-center p-3 rounded bg-white/5 border border-white/10">
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">AI-Assisted</div>
<div className="text-xs text-slate-300">Real-time analysis</div>
</div>
<div className="text-center p-3 rounded bg-white/5 border border-white/10">
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">Stakeholder</div>
<div className="text-xs text-slate-300">B2B &amp; B2G data</div>
</div>
<div className="text-center p-3 rounded bg-white/5 border border-white/10">
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">Global Sources</div>
<div className="text-xs text-slate-300">200+ premium feeds</div>
</div>
<div className="text-center p-3 rounded bg-white/5 border border-white/10 md:col-span-1 col-span-2">
<div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">Human Concierge</div>
<div className="text-xs text-slate-300">Worldwide network</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 items-stretch mb-8">

<div className="flex-1 p-6 rounded-lg bg-indigo-950/30 border border-indigo-500/30 flex flex-col justify-center text-center">
<div className="text-indigo-300 font-semibold mb-2">Karnak Confidential Vault</div>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">Encrypted storage for intent-rich, high-value traveler datasets across B2C, B2B, and B2G channels</p>
<div className="flex flex-wrap justify-center gap-3 text-[10px] font-bold tracking-widest text-white uppercase">
<span className="bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">5+ Years</span>
<span className="bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">Centi-Millionaire Focus</span>
<span className="bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">E2E Encrypted</span>
</div>
</div>

<div className="hidden md:flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
<div className="md:hidden flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 p-6 rounded-lg bg-emerald-950/30 border border-emerald-500/30 flex flex-col justify-center text-center">
<div className="text-emerald-300 font-semibold mb-2">Karnak Intelligence Engine</div>
<p className="text-xs text-slate-400 mb-4 leading-relaxed">Contextual AI delivering personalized recommendations, predictive insights, and monetizable intelligence</p>
<div className="flex flex-wrap justify-center gap-2">
<span className="px-2 py-1 bg-emerald-500/10 rounded text-[10px] text-emerald-400 border border-emerald-500/20">Multi-model AI Stack</span>
<span className="px-2 py-1 bg-emerald-500/10 rounded text-[10px] text-emerald-400 border border-emerald-500/20">Contextual Awareness</span>
<span className="px-2 py-1 bg-emerald-500/10 rounded text-[10px] text-emerald-400 border border-emerald-500/20">Adaptive Learning</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
<div className="text-center p-4 rounded bg-slate-800/50 border border-slate-700">
<div className="text-xs font-semibold text-white mb-1">Personalized Recs</div>
<div className="text-[10px] text-slate-400">Tailored for each traveler</div>
</div>
<div className="text-center p-4 rounded bg-slate-800/50 border border-slate-700">
<div className="text-xs font-semibold text-white mb-1">Predictive Insights</div>
<div className="text-[10px] text-slate-400">Anticipate traveler needs</div>
</div>
<div className="text-center p-4 rounded bg-slate-800/50 border border-slate-700">
<div className="text-xs font-semibold text-white mb-1">Market Intelligence</div>
<div className="text-[10px] text-slate-400">B2B &amp; B2G reports</div>
</div>
<div className="text-center p-4 rounded bg-slate-800/50 border border-slate-700">
<div className="text-xs font-semibold text-white mb-1">API Access</div>
<div className="text-[10px] text-slate-400">Enterprise integrations</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-8 border-b border-white/5 pb-8">
<span>Governments</span>
<span>Brands</span>
<span>Hotels</span>
<span>Investors</span>
</div>

<div className="text-center">
<div className="inline-flex items-center gap-2 text-xs text-indigo-400 bg-indigo-500/5 px-4 py-2 rounded-full border border-indigo-500/10">
<iconify-icon className="text-base" icon="solar:restart-linear"></iconify-icon>
<span className="font-medium">CONTINUOUS LEARNING LOOP: Output insights feed back to refine data collection and improve AI accuracy</span>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="products-decks">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 08</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Products &amp; Decks</h2>

<div className="grid md:grid-cols-2 gap-4 mb-10">
<a className="group block hover:border-indigo-200 hover:shadow-sm transition-all bg-slate-50 border-slate-200 border rounded-lg pt-5 pr-5 pb-5 pl-5" href="https://pitch.quantumtemple.io/v/karnak-pre-a-gt5ngm">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:file-text-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Pre-A Pitch Deck</span>
</div>
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-3">Includes financial model, competitive moat analysis (5+ years relationships), and $220M roadmap.</p>
<span className="text-[10px] uppercase font-medium text-indigo-600 tracking-wide">VIEW DECK</span>
</a>
<a className="group block hover:border-indigo-200 hover:shadow-sm transition-all bg-slate-50 border-slate-200 border rounded-lg pt-5 pr-5 pb-5 pl-5" href="#">
<div className="flex items-center justify-between mb-2">
<div className="flex items-center gap-2">
<iconify-icon className="text-indigo-600" icon="solar:smartphone-bold"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">KARNAK App</span>
</div>
<iconify-icon className="text-slate-400 group-hover:text-indigo-600" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-3">Product deep dive: Voice interface architecture, booking APIs, and founding member cohort details.</p>
<span className="text-[10px] uppercase font-medium text-indigo-600 tracking-wide">View Product</span>
</a>
</div>

<div className="space-y-8">
<div className="">
<h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:smartphone-linear"></iconify-icon> KARNAK App
                            </h3>
<div className="pl-4 border-l-2 border-indigo-100 space-y-4">
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Voice-First Orchestration</h4>
<p className="text-sm text-slate-600 mt-1">"Flying Dubai May 20-25. Hotel with gym, $600 max." 30 seconds later: Flight secured, Hotel booked, Itinerary generated. No tabs, no forms.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Compounding Intelligence</h4>
<p className="text-sm text-slate-600 mt-1">Vector database + contextual memory. By trip 5, we orchestrate 90% of preferences without you asking.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">The Best Rates (No Status Required)</h4>
<p className="text-sm text-slate-600 mt-1">Virtuoso &amp; Duffle APIs + Direct Partnerships. Automatic upgrades and perks that loyalty programs can't guarantee.</p>
</div>
</div>
</div>
<div className="">
<h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-2 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:crown-linear"></iconify-icon> KARNAK Concierge (White-Glove)
                            </h3>
<div className="pl-4 border-l-2 border-indigo-100 space-y-4">
<div className="">
<h4 className="text-sm font-semibold text-slate-900">The 5-Year Institutional Moat</h4>
<p className="text-sm text-slate-600 mt-1">Legacy concierges make restaurant reservations. We coordinate Private Sistine Chapel dinners and Ministerial-level buyouts.</p>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900">Governmental Clearances</h4>
<p className="text-sm text-slate-600 mt-1">Access to Egypt pyramids before tourism hours, Bali temple sunrise rituals, and Angkor Wat VIP experiences via Ministry relationships.</p>
</div>
</div>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="team">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 09</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Team</h2>
<div className="flex flex-col md:flex-row gap-6 bg-slate-50 border-slate-200 border rounded-lg mb-8 pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6 items-start group">
<div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden relative shadow-sm border border-slate-200/50">
<img alt="Linda Adami" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02cc2759-8593-4113-8f8c-af11b09adae9_320w.png"/>
</div>
<div className="flex-1 w-full">
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
                    Linda Adami
                    <a className="text-slate-400 hover:text-[#0077b5] transition-colors inline-flex items-center" href="https://www.linkedin.com/in/lindaadami/" target="_blank" title="LinkedIn Profile">
<iconify-icon className="" height="14" icon="logos:linkedin-icon" width="14"></iconify-icon>
</a>
</h3>
<p className="text-sm text-slate-500 mb-3">CEO &amp; Co-Founder</p>
</div>
</div>
<ul className="space-y-1 mb-4">
<li className="flex text-sm text-slate-600 gap-x-2 gap-y-2 items-start">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="">Ex-Dubai Govt, developed FDI strategy attracting 1,000+ tech companies and $200B economic impact </span>
</li>
<li className="text-sm text-slate-600 flex items-start gap-2">
<iconify-icon className="text-slate-400 mt-0.5 shrink-0" icon="solar:hand-shake-linear"></iconify-icon>
<span className="">10 years in emerging markets specializing in economic development and tech policy</span>
</li>
</ul>
<details className="group/bio">
<summary className="list-none flex items-center gap-1.5 text-xs font-semibold text-indigo-600 cursor-pointer select-none hover:text-indigo-700 transition-colors w-max">
<span className="group-open/bio:hidden">Read Full Bio</span>
<span className="hidden group-open/bio:inline">Show Less</span>
<iconify-icon className="transition-transform duration-300 group-open/bio:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-3 text-sm text-slate-600 space-y-3 leading-relaxed border-t border-slate-200 mt-3 animate-in fade-in slide-in-from-top-1 duration-200">
<p>
<a className="text-slate-900 font-medium hover:text-indigo-600 transition-colors" href="https://www.linkedin.com/in/lindaadami/" target="_blank">Linda Adami</a> is an Italian-born political economist with a deep commitment to social impact. She is the founder and CEO of <a className="text-indigo-600 hover:text-indigo-700 hover:underline" href="http://quantumtemple.io/" target="_blank">Quantum Temple</a>, a digital platform driving regenerative travel and community empowerment through blockchain technology.
                </p>
<p>
                    Linda spent the last ten years in emerging markets across Central America, South East Asia, and the Middle East working at the intersection of international development, public policy, and tech innovation at top-tier private and public institutions.
                </p>
<p>
                    Before founding Quantum Temple, she was working with the Government of Dubai at the <a className="text-indigo-600 hover:text-indigo-700 hover:underline" href="https://www.dubaifuture.ae/" target="_blank">Dubai Future Foundation</a> where she developed public policy and programs to drive the deep tech ecosystem in the Emirate.
                </p>
</div>
</details>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 gap-x-8 gap-y-8">
<div className="col-span-2 space-y-12">

<div className="">
<h4 className="uppercase text-xs font-semibold text-slate-400 tracking-wider border-slate-100 border-b mb-6 pb-2">Core Team</h4>
<div className="flex flex-col gap-4">

<div className="flex gap-5 group hover:border-indigo-200 hover:shadow-sm transition-all bg-slate-50 border-slate-200 border rounded-lg pt-5 pr-5 pb-5 pl-5 gap-x-5 gap-y-5 items-start">
<div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-2 ring-white shadow-sm">
<img alt="Vincent Guittet" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8435-eacf-4d54-9f38-ec0e4db49b56_320w.png"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex justify-between items-start mb-1">
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Vincent Guittet</h3>
<p className="text-xs text-slate-500 font-medium">Growth &amp; Co-Founder</p>
</div>
<a className="text-slate-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" width="12"></iconify-icon></a>
</div>
<ul className="mb-3 space-y-1.5">
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:chart-2-bold"></iconify-icon>
<span className="">&gt;950,000 bookings with $120M ad spend at Expedia Group, achieving 150%-350% ROAS. </span>
</li>
<li className="flex gap-2 text-xs text-slate-600 gap-x-2 gap-y-2 items-start">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:case-round-bold"></iconify-icon>
<span className="">Led Product Growth at Pollen  to $800M+ value

</span>
</li>
</ul>
<details className="group/bio">
<summary className="list-none flex items-center gap-1 text-[10px] font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700 w-max select-none">
<span className="group-open/bio:hidden">Read Bio</span>
<span className="hidden group-open/bio:inline">Show Less</span>
<iconify-icon className="transition-transform group-open/bio:rotate-180 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-3 mt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1 space-y-2">
<p>Growth-focused tech leader with expertise in the tourism and experiences space, working across industry giants like Expedia, VRBO, and Club Med, as well as startups. An early pioneer in leveraging AI to develop scalable solutions, enhance efficiencies, and deliver more meaningful customer experiences. Dedicated to driving intentional innovation to help organizations adopt cutting-edge technologies for the greater good.</p>
<p>As Head of Product Growth at Pollen, drove growth that secured $60 million funding at an $800+ million valuation, with a 3x quarterly increase in user growth.</p>
<p>In the B2C travel industry, Vincent drove over 950,000 bookings with $120 million in ad spend at Expedia Group, achieving ROAS of 150%-350% through innovative strategies and partnerships. He also pioneered integration with Google’s first vacation rental widget, incorporating 2.5 million properties.</p>
</div>
</details>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-5 flex gap-5 items-start group hover:border-indigo-200 hover:shadow-sm transition-all">
<div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-2 ring-white shadow-sm">
<img alt="Hao Cheng" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&amp;q=80"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex mb-1 items-start justify-between">
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Hao Cheng</h3>
<p className="text-xs text-slate-500 font-medium">Head of Engineering</p>
</div>
<a className="text-slate-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" width="12"></iconify-icon></a>
</div>
<ul className="space-y-1.5 mb-3">
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:shield-keyhole-bold"></iconify-icon>
<span className="">Architected secure vault infra</span>
</li>
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:server-square-bold"></iconify-icon>
<span className="">Ex-Google Cloud Senior Engineer</span>
</li>
</ul>
<details className="group/bio">
<summary className="list-none flex items-center gap-1 text-[10px] font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700 w-max select-none">
<span className="group-open/bio:hidden">Read Bio</span>
<span className="hidden group-open/bio:inline">Show Less</span>
<iconify-icon className="transition-transform group-open/bio:rotate-180 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-3 mt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1">
                Hao oversees the technical strategy and AI infrastructure. He brings deep expertise in distributed systems and data privacy from his tenure at major tech infrastructure firms.
            </div>
</details>
</div>
</div>

<div className="flex gap-5 group hover:border-indigo-200 hover:shadow-sm transition-all bg-slate-50 border-slate-200 border rounded-lg pt-5 pr-5 pb-5 pl-5 gap-x-5 gap-y-5 items-start">
<div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-2 ring-white shadow-sm">
<img alt="Sarah Tan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4223a0a8-56f3-4180-bdab-259d8041d36c_320w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex mb-1 items-start justify-between">
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Sarah Tan</h3>
<p className="text-xs text-slate-500 font-medium">Head of Product &amp; Strategy</p>
</div>
<a className="text-slate-400 hover:text-[#0077b5] transition-colors" href="#"><iconify-icon icon="logos:linkedin-icon" width="12"></iconify-icon></a>
</div>
<ul className="mb-3 space-y-1.5">
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:stars-minimalistic-bold"></iconify-icon>
<span className="">Developed Human-Centered AI product innovation framework</span>
</li>
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-500 mt-0.5 shrink-0 text-[10px]" icon="solar:user-hand-bold"></iconify-icon>
<span className="">Built product for over 30+ startups from pre-seed to Series B ($596M in valuations) </span>
</li>
</ul>
<details className="group/bio">
<summary className="list-none flex items-center gap-1 text-[10px] font-semibold text-indigo-600 cursor-pointer hover:text-indigo-700 w-max select-none">
<span className="group-open/bio:hidden">Read Bio</span>
<span className="hidden group-open/bio:inline">Show Less</span>
<iconify-icon className="transition-transform group-open/bio:rotate-180 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="pt-3 mt-2 border-t border-slate-100 text-xs text-slate-500 leading-relaxed animate-in fade-in slide-in-from-top-1 space-y-2">
<p>Sarah brings deep expertise in 0-to-1 product design for AI startups, Silicon Valley VC investments, and corporate innovation consulting. She has led digital transformations for tech MNCs like Philips and helped 30+ B2B tech startups fundraise, strategize, and launch initial products (Traceable.ai, nansen.ai, kaliber.ai etc) with over $596M+ in combined valuations.</p>
<p>Sarah co-developed the Human-Centered AI product innovation framework with AI Singapore, revolutionizing ethical AI product development. She has conducted AI innovation workshops for leading universities and conferences including NUS, SUTD, and UX STRAT, sharing her expertise globally across UX and AI events.</p>
<p>Previously investments at Incubate Fund and ex- mentor at Xoogler APAC Demo Day, Sarah drives transformative design innovation in complex tech sectors, combining hands-on VC experience with corporate consulting and startup building.</p>
</div>
</details>
</div>
</div>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
<h4 className="uppercase text-xs font-semibold text-slate-900 tracking-wide shrink-0 md:w-32">Investors</h4>
<div className="flex-1 w-full space-y-3">
<a className="group flex items-center justify-between p-3.5 bg-white border border-slate-200 rounded-lg hover:border-indigo-300 hover:shadow-md hover:shadow-indigo-500/5 transition-all duration-200 no-underline w-full" href="https://docs.google.com/spreadsheets/u/0/" target="_blank">
<div className="flex items-center gap-3.5">
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0 group-hover:scale-105 transition-transform duration-200">
<svg className="lucide lucide-file-spreadsheet" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">Investor Cap Table</div>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-indigo-400 transition-colors">Google Sheets</span>
<span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-[10px] font-medium text-emerald-600">Live Data</span>
</div>
</div>
</div>
<div className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-50 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
<svg className="lucide lucide-arrow-up-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="financials">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 10</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Financials</h2>

<div className="bg-white border border-slate-200 rounded-xl p-6 mb-10 shadow-sm relative overflow-hidden">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 relative z-10">
<div className="">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight leading-tight mb-2">$4.1M ARR <span className="text-slate-500 font-normal">Pre-Launch</span></h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-lg">
                    Generated through Karnak within a <span className="font-medium text-slate-900">$5.74M ecosystem</span>. Validating strong product-market fit before official launch.
                </p>
</div>
<div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span> Karnak
                </div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-amber-200"></span> Ecosystem
                </div>
<div className="flex items-center gap-1.5">
<span className="w-2.5 h-2.5 rounded-sm bg-rose-300"></span> Burn
                </div>
</div>
</div>
<div className="relative w-full overflow-x-auto no-scrollbar pb-2">
<div className="min-w-[600px] h-64 relative">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
<div className="border-b border-slate-100 w-full h-0 relative"><span className="absolute -top-3 left-0 text-[9px] text-slate-400 font-medium">600K</span></div>
<div className="border-b border-slate-100 w-full h-0 relative"><span className="absolute -top-3 left-0 text-[9px] text-slate-400 font-medium">400K</span></div>
<div className="border-b border-slate-100 w-full h-0 relative"><span className="absolute -top-3 left-0 text-[9px] text-slate-400 font-medium">200K</span></div>
<div className="h-0 relative"></div>
</div>

<div className="absolute left-0 right-0 bottom-[20%] h-px bg-slate-300 z-10"></div>

<div className="absolute inset-0 flex items-end justify-between pl-8 gap-2 z-20">

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">

<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '26.8%'}}>
<div className="bg-emerald-500 w-full" style={{height: '72%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '28%'}}></div>
</div>

<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '10%'}}></div>

<div className="absolute bottom-[48%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">228K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Jan</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '35.4%'}}>
<div className="bg-emerald-500 w-full" style={{height: '49%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '51%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '15%'}}></div>
<div className="absolute bottom-[57%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">301K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Feb</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '44.1%'}}>
<div className="bg-emerald-500 w-full" style={{height: '75%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '25%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '7%'}}></div>
<div className="absolute bottom-[66%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">375K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Mar</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '48.5%'}}>
<div className="bg-emerald-500 w-full" style={{height: '21%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '79%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '10%'}}></div>
<div className="absolute bottom-[70%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">412K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Apr</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '53.5%'}}>
<div className="bg-emerald-500 w-full" style={{height: '99%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '1%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '9.2%'}}></div>
<div className="absolute bottom-[75%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">455K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">May</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '59.9%'}}>
<div className="bg-emerald-500 w-full" style={{height: '20%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '80%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '9.2%'}}></div>
<div className="absolute bottom-[81%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">509K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Jun</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '62.5%'}}>
<div className="bg-emerald-500 w-full" style={{height: '78%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '22%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '7.2%'}}></div>
<div className="absolute bottom-[84%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">531K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Jul</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '67.4%'}}>
<div className="bg-emerald-500 w-full" style={{height: '71%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '29%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '12.5%'}}></div>
<div className="absolute bottom-[89%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">572K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Aug</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '67.8%'}}>
<div className="bg-emerald-500 w-full" style={{height: '83%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '17%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '7%'}}></div>
<div className="absolute bottom-[89%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">576K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Sep</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '68.4%'}}>
<div className="bg-emerald-500 w-full" style={{height: '73%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '27%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '7.5%'}}></div>
<div className="absolute bottom-[90%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">581K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Oct</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '70.1%'}}>
<div className="bg-emerald-500 w-full" style={{height: '98%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '2%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '6.1%'}}></div>
<div className="absolute bottom-[92%] text-[9px] font-semibold text-slate-600 mb-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white px-1 rounded shadow-sm border border-slate-100 z-30">595K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Nov</span>
</div>

<div className="flex-1 flex flex-col items-center h-full relative group cursor-crosshair">
<div className="w-full flex flex-col-reverse absolute bottom-[20%] transition-all duration-300 group-hover:opacity-90" style={{height: '70.7%'}}>
<div className="bg-emerald-500 w-full" style={{height: '93%'}}></div>
<div className="bg-amber-200 w-full rounded-t-sm" style={{height: '7%'}}></div>
</div>
<div className="w-full bg-rose-300 absolute top-[80%] rounded-b-sm opacity-80" style={{height: '5.8%'}}></div>
<div className="absolute bottom-[92%] text-[9px] font-semibold text-slate-600 mb-1 opacity-100 bg-white px-1 rounded shadow-sm border border-slate-100 z-30">601K</div>
<span className="absolute bottom-0 text-[10px] text-slate-400 font-medium pb-1">Dec</span>
</div>
</div>
</div>
</div>
</div>
<div className="mb-8">
<h3 className="text-sm font-semibold text-slate-900 mb-3">Use of Funds</h3>
<div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex mb-2">
<div className="h-full bg-slate-800 w-[40%]"></div>
<div className="h-full bg-slate-400 w-[30%]"></div>
<div className="h-full bg-slate-300 w-[20%]"></div>
<div className="h-full bg-slate-200 w-[10%]"></div>
</div>
<div className="flex flex-wrap gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-800"></span> 40% Product &amp; Eng</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-400"></span> 30% Growth &amp; Mkt</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-300"></span> 20% Operations</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-slate-200"></span> 10% Legal/Admin</span>
</div>
</div>
<div className="space-y-2">
<details className="group border border-slate-200 rounded-lg">
<summary className="flex cursor-pointer hover:bg-slate-50 group font-medium text-slate-700 pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-sm shrink-0">
<svg className="lucide lucide-file-spreadsheet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">FY 25 Financials</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Google Sheets</span>
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-emerald-600">Live Data</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="group-hover:opacity-100 transition-opacity hidden sm:block text-xs font-medium text-indigo-600 opacity-0 cursor-pointer" onclick="window.location.href='https://docs.google.com/spreadsheets/d/1fqSbfvTQqmjQOSBfnPlf2NRJxiIIpm1a/edit?usp=sharing&amp;ouid=103149086969955913615&amp;rtpof=true&amp;sd=true'" role="button">View</span>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-4 text-sm text-slate-500">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-[10px] uppercase text-slate-400 font-semibold mb-1">Total FY25 Rev</div>
<div className="text-lg font-semibold text-slate-900">$5.74M</div>
<div className="text-[10px] text-emerald-600 font-medium">+616% YoY</div>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-[10px] uppercase text-slate-400 font-semibold mb-1">Karnak Rev</div>
<div className="text-lg font-semibold text-slate-900">$4.11M</div>
<div className="text-[10px] text-slate-500">72% of Total</div>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-[10px] uppercase text-slate-400 font-semibold mb-1">Q4 2025 Rev</div>
<div className="text-lg font-semibold text-slate-900">$1.78M</div>
<div className="text-[10px] text-emerald-600 font-medium">+5.9% QoQ</div>
</div>
<div className="p-3 bg-slate-50 rounded border border-slate-100">
<div className="text-[10px] uppercase text-slate-400 font-semibold mb-1">Dec 2025 MRR</div>
<div className="text-lg font-semibold text-slate-900">$601K</div>
<div className="text-[10px] text-emerald-600 font-medium">+0.9% MoM</div>
</div>
</div>
<p className="text-xs text-slate-500 italic">* Detailed P&amp;L available in full dataroom access.</p>
</div>
</details>
<details className="group border border-slate-200 rounded-lg">
<summary className="flex cursor-pointer hover:bg-slate-50 group font-medium text-slate-700 pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-sm shrink-0">
<svg className="lucide lucide-file-spreadsheet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-semibold text-slate-900">Financial Projections (2026-2028)</span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] font-medium text-slate-500 uppercase tracking-wide">Google Sheets</span>
<span className="w-1 h-1 rounded-full bg-emerald-500"></span>
<span className="text-[10px] font-medium text-emerald-600">Live Data</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<a className="group-hover:opacity-100 transition-opacity hover:underline z-10 text-xs font-medium text-indigo-600 opacity-0" href="https://docs.google.com/spreadsheets/d/1oCwFPNGzCBnWUri4PG_o7qxvbcSwXCefYGfx6p73wYo/edit?usp=sharing" onclick="event.stopPropagation();" target="_blank">Open Sheet</a>
<iconify-icon className="transition-transform group-open:rotate-180 text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</summary>
<div className="p-4 text-sm text-slate-500">Confidential data hidden in view mode.</div>
</details>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="target-user">
<span className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase mb-2 block">Section 11</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Target User Profile</h2>
<div className="mb-10">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Who KARNAK Is Built For</h3>
<p className="text-sm text-slate-600 leading-relaxed max-w-3xl">KARNAK is exclusively for centimillionaires and ultra-high-net-worth individuals ($50M+ net worth) who've outgrown even premium travel solutions.</p>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-10">
<h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wide mb-4">The KARNAK Member Profile</h4>
<div className="grid md:grid-cols-2 gap-6">
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5" icon="solar:user-circle-linear"></iconify-icon> Founders, institutional investors, C-suite executives, family office principals</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5" icon="solar:globus-linear"></iconify-icon> 8-12+ international trips annually, $100K+ travel spend</li>
</ul>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5" icon="solar:card-linear"></iconify-icon> Already using Amex Centurion, Velocity Black, or full-time EAs</li>
<li className="flex items-start gap-2 text-sm text-slate-600"><iconify-icon className="text-indigo-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Still frustrated by fragmentation, friction, and repeating preferences</li>
</ul>
</div>
</div>

<div className="mb-12">
<h3 className="text-base font-semibold text-slate-900 mb-6">This Is For You If...</h3>
<div className="grid md:grid-cols-2 gap-4">

<div className="p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-white">
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Your calendar changes faster than availability</h4>
<p className="text-xs text-slate-500 leading-relaxed">Last-minute board meetings. Deal closings. LP calls. Your EA scrambles to rebook while you're mid-flight.</p>
</div>
</div>
</div>

<div className="p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-white">
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Tired of repeating preferences</h4>
<p className="text-xs text-slate-500 leading-relaxed">Aisle seat, early check-in, hotel gym, no shellfish. You've said it 100 times. They still ask.</p>
</div>
</div>
</div>

<div className="p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-white">
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="solar:hourglass-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Outgrown waiting and following up</h4>
<p className="text-xs text-slate-500 leading-relaxed">Three emails for a dinner reservation. Two calls for car service. Another message about the hotel upgrade.</p>
</div>
</div>
</div>

<div className="p-4 border border-slate-200 rounded-lg hover:border-indigo-200 transition-colors bg-white">
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
<iconify-icon icon="solar:diamond-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold text-slate-900 mb-1">Value time and leverage over price</h4>
<p className="text-xs text-slate-500 leading-relaxed">You don't want deals. You want the reservation that doesn't take reservations. The access wealth alone can't buy.</p>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-xl p-8 text-white mb-12">
<h3 className="text-base font-semibold text-white mb-6">What Defines Them</h3>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-white">Time &gt; Money</span>
<span className="text-xs text-slate-400">Would pay $50K to save 20 hours</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-white">Authenticity &gt; Status</span>
<span className="text-xs text-slate-400">Private Vatican dinners, not Instagram moments</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-white">Privacy &gt; Visibility</span>
<span className="text-xs text-slate-400">Discretion and white-glove service, not being "seen"</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<span className="text-sm font-medium text-white">Transformation &gt; Transaction</span>
<span className="text-xs text-slate-400">Experiences that create lasting memories</span>
</div>
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white">Leverage &gt; Effort</span>
<span className="text-xs text-slate-400">One input, complete orchestration</span>
</div>
</div>
</div>

<div className="mb-12">
<h3 className="text-base font-semibold text-slate-900 mb-6">Member Archetypes</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xs font-bold text-indigo-600 uppercase mb-2">Peak-Performance Founder</div>
<p className="text-[10px] text-slate-500 mb-2">12+ flights/month, managing portfolio.</p>
<div className="text-[10px] font-medium text-slate-700 bg-white p-1.5 rounded border border-slate-100">Need: Voice note → complete itinerary</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xs font-bold text-indigo-600 uppercase mb-2">Institutional Investor</div>
<p className="text-[10px] text-slate-500 mb-2">Coordinating LP events and deals.</p>
<div className="text-[10px] font-medium text-slate-700 bg-white p-1.5 rounded border border-slate-100">Need: White-glove impossible experiences</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xs font-bold text-indigo-600 uppercase mb-2">Family Office Principal</div>
<p className="text-[10px] text-slate-500 mb-2">Multi-generational travel, security.</p>
<div className="text-[10px] font-medium text-slate-700 bg-white p-1.5 rounded border border-slate-100">Need: Unified intelligence layer</div>
</div>
<div className="p-4 bg-slate-50 rounded border border-slate-200">
<div className="text-xs font-bold text-indigo-600 uppercase mb-2">Global C-Suite Executive</div>
<p className="text-[10px] text-slate-500 mb-2">40+ weeks traveling, juggling platforms.</p>
<div className="text-[10px] font-medium text-slate-700 bg-white p-1.5 rounded border border-slate-100">Need: Single OS, zero cognitive load</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">

<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">What KARNAK Replaces</h3>
<div className="space-y-4">
<div className="p-3 bg-red-50/50 border border-red-100 rounded text-xs text-slate-600">
<span className="font-bold text-red-700 block mb-1">Before</span>
                                Amex Centurion (slow), Velocity Black (24-48 hrs), EAs ($80K/year, still 3+ hrs per trip), 5-8 platforms to juggle.
                            </div>
<div className="flex justify-center text-slate-300"><iconify-icon icon="solar:arrow-down-linear"></iconify-icon></div>
<div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded text-xs text-slate-600">
<span className="font-bold text-emerald-700 block mb-1">After</span>
                                One voice note → 30 seconds → Complete orchestration → Institutional access → Gets better every trip.
                            </div>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Entry Criteria <span className="text-slate-400 font-normal ml-1">(Invitation Only)</span></h3>
<ul className="space-y-3 mb-4">
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                $50M+ net worth (centimillionaires and above)
                            </li>
<li className="flex items-start gap-2 text-xs text-slate-600">
<iconify-icon className="text-indigo-600 mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                                8+ trips annually, $100K+ travel spend
                            </li>
</ul>
<p className="text-[10px] text-slate-500 italic border-t border-slate-200 pt-3 mt-3">Command infrastructure for extraordinary lives—built exclusively for those who've outgrown everything else.</p>
</div>
</div>
</section>
<hr className="border-t border-slate-100"/>

<section className="scroll-mt-24" id="documents">
<span className="text-[10px] uppercase block font-semibold text-slate-400 tracking-wider mb-2">Section 12</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Documents (FAQ)</h2>
<div className="space-y-3">

<details className="group border border-slate-200 rounded-lg bg-white open:bg-slate-50/50 overflow-hidden transition-all duration-300">
<summary className="flex cursor-pointer hover:bg-slate-50 select-none list-none font-medium text-slate-700 pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:box-minimalistic-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Product Questions</span>
</div>
<iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-indigo-600">Q.</span> What exactly is KARNAK?
                    </h4>
<p className="mb-4 leading-relaxed text-slate-600">KARNAK is the intelligent luxury concierge that turns one voice note into a complete trip—booked, optimized, and personalized in 30 seconds.</p>
<div className="grid md:grid-cols-2 gap-4 mb-4">
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">KARNAK App</span>
<span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">$2.5K-$10K/year</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">AI-powered trip orchestration. Voice note → flights, hotels, restaurants booked instantly.</p>
</div>
<div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">KARNAK Concierge</span>
<span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">$30K-$100K/year</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">White-glove service for impossible experiences—private Vatican dinners, pyramid ceremonies, buyouts.</p>
</div>
</div>
<p className="text-xs font-medium text-slate-500 italic pl-3 border-l-2 border-indigo-200">The difference: App = AI speed. Concierge = human impossibility. Both learn from each other.</p>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-indigo-600">Q.</span> How is KARNAK different from Velocity Black or Amex Centurion?
                    </h4>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Institutional Access (The 5-Year Moat)</h5>
<p className="text-xs text-slate-600 mt-1 leading-relaxed">KARNAK leverages government partnerships (Vatican, UNESCO) vs competitors' vendor relationships. Our access requires 12-18 months to replicate, theirs requires phone calls.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">AI + Human Hybrid</h5>
<p className="text-xs text-slate-600 mt-1 leading-relaxed">AI handles routine tasks in 30 seconds. Humans handle impossibility. Legacy concierges are 100% human (slow, 30% margins). We deliver at 85%+ gross margins with scale.</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Compounding Intelligence</h5>
<p className="text-xs text-slate-600 mt-1 leading-relaxed">Our vector database learns your rhythm. By trip 3, we anticipate 90% of preferences. Legacy services rely on manual notes per request.</p>
</div>
</div>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-indigo-600">Q.</span> How does Quantum Temple power KARNAK?
                    </h4>
<p className="text-sm text-slate-600 mb-3 leading-relaxed">Quantum Temple is KARNAK's 5-year institutional moat. Competitors starting today need 18 months to build what we already have:</p>
<ul className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4">
<li className="flex items-center gap-2 bg-white px-2 py-1.5 rounded border border-slate-200"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Government partnerships (Egypt, Indo)</li>
<li className="flex items-center gap-2 bg-white px-2 py-1.5 rounded border border-slate-200"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> 100+ Tier-1 hospitality brands</li>
</ul>
<div className="bg-indigo-50 border border-indigo-100 rounded-md p-3 flex gap-3 items-start">
<iconify-icon className="text-indigo-600 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-indigo-800 leading-snug"> QT validated the model ($5.74M FY25 revenue). KARNAK scales it to $220M through AI leverage and membership tiers.</p>
</div>
</div>
</div>
</details>

<details className="group border border-slate-200 rounded-lg bg-white open:bg-slate-50/50 overflow-hidden transition-all duration-300">
<summary className="flex cursor-pointer hover:bg-slate-50 font-medium text-slate-700 p-4 items-center justify-between select-none list-none">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-emerald-50 text-emerald-600">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">Business Model Questions</span>
</div>
<iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-6 pt-2 border-t border-slate-100 text-sm text-slate-600 space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-emerald-600">Q.</span> How do you make money?
                    </h4>
<p className="text-sm text-slate-600 mb-4">We operate three revenue engines with a blended gross margin of 85%+ (AI handles 80% of requests).</p>
<div className="grid md:grid-cols-3 gap-3 mb-4">
<div className="bg-white p-3 rounded border border-slate-200">
<div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">1. Subscriptions</div>
<div className="text-sm font-semibold text-slate-900 mb-1">$60M @ Scale</div>
<ul className="text-[10px] text-slate-500 space-y-0.5">
<li>Founding: $100K + $30K/yr</li>
<li>Premium: $10K/yr</li>
</ul>
</div>
<div className="bg-white p-3 rounded border border-slate-200">
<div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">2. Commissions</div>
<div className="text-sm font-semibold text-slate-900 mb-1">$96M @ Scale</div>
<ul className="text-[10px] text-slate-500 space-y-0.5">
<li>12-15% (vs 7% OTA)</li>
<li>$30K avg booking</li>
</ul>
</div>
<div className="bg-white p-3 rounded border border-slate-200">
<div className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider mb-1">3. Enterprise</div>
<div className="text-sm font-semibold text-slate-900 mb-1">Opportunistic</div>
<ul className="text-[10px] text-slate-500 space-y-0.5">
<li>Corporate retreats</li>
<li>Family offices</li>
</ul>
</div>
</div>
<div className="bg-slate-900 text-white rounded p-3 flex justify-between items-center text-xs">
<div className="font-medium">Unit Economics (Founding Member)</div>
<div className="flex gap-4">
<span>LTV: </span>
<span className="text-slate-500">|</span>
<span>CAC: </span>
<span className="text-emerald-400 font-bold">44:1 Ratio</span>
</div>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-emerald-600">Q.</span> What's your traction?
                    </h4>
<div className="bg-white border border-slate-200 rounded-lg p-4 mb-3">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-center">
<div>
<div className="text-lg font-bold text-slate-900">$5.74M</div>
<div className="text-[10px] uppercase text-slate-400 font-semibold">FY25 Revenue</div>
</div>
<div>
<div className="text-lg font-bold text-emerald-600">+616%</div>
<div className="text-[10px] uppercase text-slate-400 font-semibold">YoY Growth</div>
</div>
<div>
<div className="text-lg font-bold text-slate-900">$4.11M</div>
<div className="text-[10px] uppercase text-slate-400 font-semibold">Pre-launch Rev</div>
</div>
<div>
<div className="text-lg font-bold text-slate-900">$601K</div>
<div className="text-[10px] uppercase text-slate-400 font-semibold">Dec MRR</div>
</div>
</div>
<p className="text-xs text-slate-500 text-center border-t border-slate-100 pt-3">
                             Proves product-market fit ($28.3K avg booking) and Zero-CAC ecosystem model with 25,000+ travelers onboarded.
                         </p>
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
<span className="text-emerald-600">Q.</span> Why invest in KARNAK now?
                    </h4>
<ol className="list-decimal pl-5 space-y-2 text-xs text-slate-600 mb-6 marker:font-bold marker:text-emerald-600">
<li className="pl-1"> $4.11M pre-launch revenue proves demand.</li>
<li className="pl-1"> 5 years of relationships = 18 month head start.</li>
<li className="pl-1"> Agentic AI maturity + UHNW demand for hyper-personalization.</li>
<li className="pl-1"> 25K+ travelers → qualified leads at near zero cost.</li>
<li className="pl-1"> First to combine Agentic AI + Access + 85% Margins.</li>
</ol>
<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="bg-slate-50 px-3 py-2 border-b border-slate-200 text-xs font-semibold text-slate-700">Key Metrics Summary</div>
<div className="grid grid-cols-4 divide-x divide-slate-200 text-center">
<div className="p-2">
<div className="text-[9px] text-slate-400 uppercase tracking-wide mb-1">Metric</div>
<div className="text-[10px] font-semibold text-slate-600 text-left pl-2 space-y-1">
<div>Revenue</div>
<div>Gross Margin</div>
<div>Members</div>
<div>CAC</div>
<div>LTV</div>
</div>
</div>
<div className="p-2 bg-slate-50/30">
<div className="text-[9px] text-slate-400 uppercase tracking-wide mb-1">Current</div>
<div className="text-[10px] text-slate-900 font-medium space-y-1">
<div>$5.74M</div>
<div>—</div>
<div>24</div>
<div>~$0</div>
<div>$120K+</div>
</div>
</div>
<div className="p-2">
<div className="text-[9px] text-indigo-500 uppercase tracking-wide mb-1">2026 Target</div>
<div className="text-[10px] text-slate-900 font-medium space-y-1">
<div>$20M</div>
<div>85%+</div>
<div>240</div>
<div>&lt;$5K</div>
<div>$120K+</div>
</div>
</div>
<div className="p-2">
</div></div></div></div></div></details></div>

<div className="mt-20 pt-12 border-t border-slate-200" id="the-ask">
<span className="text-[10px] uppercase block font-semibold text-slate-400 tracking-wider mb-2">Section 13</span>
<h2 className="text-xl font-semibold tracking-tight text-slate-900 mb-8">The Ask</h2>

<div className="grid md:grid-cols-3 gap-6 mb-12">
<div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Raise Target</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">$10M</div>
<div className="text-xs text-emerald-600 font-medium mt-1">at $100M Post-Money Valuation</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Structure</div>
<div className="text-xl font-semibold text-slate-900">Priced Equity</div>
<div className="text-xs text-slate-500 font-medium mt-1">Series Pre-A Round</div>
</div>
<div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
<div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Minimum Ticket</div>
<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">$250K</span>
<span className="text-[10px] text-slate-500">Institutional</span>
</div>
<div className="w-full h-px bg-slate-200"></div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">$50K</span>
<span className="text-[10px] text-slate-500">Founders Circle</span>
</div>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-sm font-semibold text-slate-900 mb-6">Use of Funds</h3>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-[40%]"></div>
</div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">Product Dev</span>
<span className="text-xs font-bold text-slate-900">40%</span>
</div>
<div className="text-xs text-slate-500 leading-snug">AI platform, Web3 integration, multi-agent framework</div>
<div className="text-[10px] font-mono text-slate-400">$4.0M</div>
</div>

<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-600 w-[30%]"></div>
</div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">Expansion</span>
<span className="text-xs font-bold text-slate-900">30%</span>
</div>
<div className="text-xs text-slate-500 leading-snug">SEA/East Asia markets, B2G partnership scaling</div>
<div className="text-[10px] font-mono text-slate-400">$3.0M</div>
</div>

<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-400 w-[20%]"></div>
</div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">Team</span>
<span className="text-xs font-bold text-slate-900">20%</span>
</div>
<div className="text-xs text-slate-500 leading-snug">AI engineering talent, enterprise sales, curators</div>
<div className="text-[10px] font-mono text-slate-400">$2.0M</div>
</div>

<div className="space-y-2">
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 w-[10%]"></div>
</div>
<div className="flex justify-between items-baseline">
<span className="text-sm font-semibold text-slate-900">Capital</span>
<span className="text-xs font-bold text-slate-900">10%</span>
</div>
<div className="text-xs text-slate-500 leading-snug">18-month runway buffer and operations</div>
<div className="text-[10px] font-mono text-slate-400">$1.0M</div>
</div>
</div>
</div>

<div className="relative rounded-xl overflow-hidden bg-slate-900 text-white p-8 mb-12 border border-slate-800 shadow-xl">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:crown-bold" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
<div className="">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20 text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon> Limited Opportunity
                        </div>
<h3 className="text-2xl font-bold tracking-tight text-white">Founders Circle Tier</h3>
<p className="text-slate-400 text-sm mt-1">For investors who want to experience the product they're backing.</p>
</div>
<div className="text-right">
<div className="text-3xl font-bold text-white tracking-tight">$50K</div>
<div className="text-xs text-slate-400 uppercase tracking-wide">Investment Ticket</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 border-t border-white/10 pt-8">

<div className="space-y-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-indigo-300"><iconify-icon icon="solar:pie-chart-2-linear" width="18"></iconify-icon></div>
                            The Equity
                        </div>
<ul className="space-y-3 text-xs text-slate-300">
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> $50K stake at $100M valuation</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> Full pro-rata rights</li>
</ul>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-indigo-300"><iconify-icon icon="solar:card-linear" width="18"></iconify-icon></div>
                            Lifetime Membership
                        </div>
<ul className="space-y-3 text-xs text-slate-300">
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> <span><span className="text-white font-medium">Value: $130K+</span> waived forever</span></li>
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> Voice orchestration &amp; hyper-personalization</li>
</ul>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-indigo-300"><iconify-icon icon="solar:crown-star-linear" width="18"></iconify-icon></div>
                            Exclusive Perks
                        </div>
<ul className="space-y-3 text-xs text-slate-300">
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> Founding Member recognition</li>
<li className="flex gap-2 items-start"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-circle-bold"></iconify-icon> Direct line to leadership &amp; retreat access</li>
</ul>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-[1fr_260px] gap-8">
<div className="border border-slate-200 rounded-lg overflow-hidden">
<div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex justify-between items-center">
<span className="text-xs font-semibold text-slate-900">Immediate Value Calculation</span>
<span className="text-[10px] uppercase font-bold text-indigo-600 tracking-wider">7.6x ROI Day 1</span>
</div>
<div className="divide-y divide-slate-100">
<div className="flex justify-between px-4 py-2.5 text-xs">
<span className="text-slate-600">Equity Value</span>
<span className="font-medium text-slate-900">$50,000</span>
</div>
<div className="flex justify-between px-4 py-2.5 text-xs bg-emerald-50/30">
<span className="text-slate-600">Initiation Fee (Waived)</span>
<span className="font-medium text-emerald-600">$100,000</span>
</div>
<div className="flex justify-between px-4 py-2.5 text-xs bg-emerald-50/30">
<span className="text-slate-600">Year 1 Membership (Waived)</span>
<span className="font-medium text-emerald-600">$30,000</span>
</div>
<div className="flex justify-between px-4 py-2.5 text-xs bg-emerald-50/30">
<span className="text-slate-600">Years 2-10 NPV (Waived)</span>
<span className="font-medium text-emerald-600">~$200,000</span>
</div>
<div className="flex justify-between px-4 py-3 text-sm bg-slate-50">
<span className="font-semibold text-slate-900">Total Value</span>
<span className="font-bold text-slate-900">$380,000+</span>
</div>
</div>
</div>
<div className="bg-slate-900 rounded-lg p-6 flex flex-col justify-center items-center text-center text-white border border-slate-800">
<iconify-icon className="text-amber-400 text-3xl mb-3" icon="solar:hourglass-linear"></iconify-icon>
<div className="text-lg font-bold mb-1">50 Seats Only</div>
<p className="text-xs text-slate-400 leading-relaxed">Once the Founders Circle is filled, this tier closes permanently to preserve utility.</p>
</div>
</div>
</div>
</section></div></main></div>
    </>
  );
}
