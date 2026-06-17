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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="font-medium tracking-tighter text-base uppercase text-neutral-900 tracking-[0.2em]">
                Rooted
            </div>
<div className="flex items-center gap-4">
<span className="text-xs text-neutral-400">Operations Deck</span>
</div>
</div>
</nav>

<section className="max-w-6xl mx-auto px-6 pt-16 pb-8 border-b border-neutral-100">
</section>
<main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

<section>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Client</span>
<p className="text-2xl font-semibold tracking-tight text-neutral-900 mt-4">Forest Foods</p>
</div>
<div className="p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Launch Date</span>
<p className="text-2xl font-semibold tracking-tight text-neutral-900 mt-4">18 April 2026</p>
</div>
<div className="p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Primary Engine</span>
<p className="text-2xl font-semibold tracking-tight text-neutral-900 mt-4">Lead Gen</p>
</div>
<div className="p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col justify-between">
<span className="text-xs text-neutral-400 font-medium tracking-wide uppercase">Supporting</span>
<p className="text-base font-medium text-neutral-900 mt-4">Web Build + Socials</p>
</div>
</div>
</section>

<section>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-8">1. What We Are Doing</h2>
<div className="max-w-3xl mb-12 space-y-4">
<p className="text-base text-neutral-500 leading-relaxed">Forest Foods is launching a crowdfunding campaign on <span className="text-neutral-900 font-medium">Indiegogo</span>.</p>
</div>

<div className="p-8 border border-neutral-200 rounded-2xl bg-neutral-50/50 flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-3">Core Objective</span>
<p className="text-4xl font-semibold tracking-tight text-neutral-900">Aiming to raise $50,000–$80,000</p>
<p className="text-base text-neutral-500 mt-2">within the first 48 hours of going live.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-6 border-b border-neutral-100 pb-4">What is Indiegogo?</h3>
<p className="text-sm text-neutral-500 mb-6">Indiegogo is a public crowdfunding platform where:</p>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">A campaign page is built in advance</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Backers pledge money online</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">The total raised is publicly visible</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-400 text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm">Campaigns typically run 30–45 days</span>
</li>
</ul>
<h4 className="text-sm font-medium text-neutral-900 mt-10 mb-4 uppercase tracking-wide">How it works:</h4>
<div className="flex items-center gap-2 overflow-x-auto pb-4 text-sm whitespace-nowrap">
<div className="px-4 py-2 border border-neutral-200 rounded-lg bg-white">1. Page goes live</div>
<iconify-icon className="text-neutral-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="px-4 py-2 border border-neutral-200 rounded-lg bg-white">2. Traffic sent</div>
<iconify-icon className="text-neutral-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="px-4 py-2 border border-neutral-200 rounded-lg bg-white">3. People pledge</div>
<iconify-icon className="text-neutral-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="px-4 py-2 border border-neutral-200 rounded-lg bg-white">4. Total increases publicly</div>
<iconify-icon className="text-neutral-300" icon="solar:alt-arrow-right-linear"></iconify-icon>
<div className="px-4 py-2 border border-neutral-200 rounded-lg bg-white">5. Algorithm lift</div>
</div>
</div>

<div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-6 border-b border-neutral-100 pb-4 flex items-center gap-2">
<iconify-icon icon="solar:danger-circle-linear"></iconify-icon>
                        Important
                    </h3>
<p className="text-sm text-neutral-900 font-medium mb-6">Indiegogo heavily rewards early momentum.</p>
<div className="space-y-4">
<div className="p-5 border border-neutral-200 rounded-xl bg-white shadow-sm">
<p className="text-sm font-medium text-neutral-900 mb-3">If a campaign raises strong capital in the first 48 hours:</p>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:round-alt-arrow-right-linear"></iconify-icon> It looks credible.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:round-alt-arrow-right-linear"></iconify-icon> It attracts more backers.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:round-alt-arrow-right-linear"></iconify-icon> It gains internal algorithm lift.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:round-alt-arrow-right-linear"></iconify-icon> It creates psychological inevitability.</li>
</ul>
</div>
<div className="p-5 border border-neutral-200 rounded-xl bg-neutral-50">
<p className="text-sm font-medium text-neutral-900 mb-3">If it launches slowly:</p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:close-circle-linear"></iconify-icon> It looks weak.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:close-circle-linear"></iconify-icon> It struggles to build momentum.</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-300" icon="solar:close-circle-linear"></iconify-icon> Recovery is difficult.</li>
</ul>
</div>
</div>
<div className="mt-6 p-4 border border-neutral-900 rounded-lg bg-neutral-900 text-white text-sm text-center font-medium">
                        Everything in this plan is engineered around controlling the first 48 hours.
                    </div>
</div>
</div>
</section>

<section>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">2. How We Are Achieving This</h2>
<div className="max-w-3xl space-y-4 mb-12">
<p className="text-sm">This is a structured campaign. Forest Foods and Rooted are working side-by-side on a strict timeline.</p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">Cadence-driven</span>
<span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">Momentum-driven</span>
<span className="px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full text-xs font-medium">Deadline-sensitive</span>
</div>
</div>
<h3 className="text-base font-medium text-neutral-900 mb-6 uppercase tracking-wider text-xs">The Five-Part Momentum System</h3>

<div className="flex flex-col lg:flex-row gap-4 mb-16 overflow-x-auto pb-6">
<div className="min-w-[260px] flex-1 p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-xs font-medium text-neutral-900 shadow-sm">1</div>
<h4 className="text-base font-medium text-neutral-900 mb-4 mt-2">Founder Commitments</h4>
<div className="mt-auto space-y-3">
<div className="flex justify-between items-center text-xs border-t border-neutral-100 pt-3">
<span className="text-neutral-400">Start Date</span>
<span className="text-neutral-900 font-medium">18 March</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400">Target</span>
<span className="text-neutral-900 font-medium">$50k–$80k pledged</span>
</div>
</div>
</div>
<div className="min-w-[260px] flex-1 p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-xs font-medium text-neutral-900 shadow-sm">2</div>
<h4 className="text-base font-medium text-neutral-900 mb-4 mt-2">Partner Amplification</h4>
<div className="mt-auto space-y-3">
<div className="flex justify-between items-center text-xs border-t border-neutral-100 pt-3">
<span className="text-neutral-400">Owner</span>
<span className="text-neutral-900 font-medium">Jerry (Sales)</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400">Target</span>
<span className="text-neutral-900 font-medium">5 partners posting</span>
</div>
</div>
</div>
<div className="min-w-[260px] flex-1 p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-xs font-medium text-neutral-900 shadow-sm">3</div>
<h4 className="text-base font-medium text-neutral-900 mb-4 mt-2">Proof-Led Content</h4>
<div className="mt-auto space-y-3">
<div className="flex justify-between items-center text-xs border-t border-neutral-100 pt-3">
<span className="text-neutral-400">Deliverables</span>
<span className="text-neutral-900 font-medium">Video &amp; Static</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400">Rule</span>
<span className="text-neutral-900 font-medium">Awareness pre-launch</span>
</div>
</div>
</div>
<div className="min-w-[260px] flex-1 p-6 border border-neutral-200 rounded-2xl bg-white shadow-sm flex flex-col relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center text-xs font-medium text-neutral-900 shadow-sm">4</div>
<h4 className="text-base font-medium text-neutral-900 mb-4 mt-2">Prospective Bridge Funnel</h4>
<div className="mt-auto space-y-3">
<div className="flex justify-between items-center text-xs border-t border-neutral-100 pt-3">
<span className="text-neutral-400">Owner</span>
<span className="text-neutral-900 font-medium">Leo</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400">Deadline</span>
<span className="text-neutral-900 font-medium">17 March</span>
</div>
</div>
</div>
<div className="min-w-[260px] flex-1 p-6 border border-neutral-200 rounded-2xl bg-neutral-900 text-white shadow-sm flex flex-col relative">
<div className="absolute -top-3 -left-3 w-8 h-8 rounded-full border border-neutral-700 bg-neutral-800 flex items-center justify-center text-xs font-medium text-white shadow-sm">5</div>
<h4 className="text-base font-medium text-white mb-4 mt-2">Retargeting Close</h4>
<div className="mt-auto space-y-3">
<div className="flex justify-between items-center text-xs border-t border-neutral-700 pt-3">
<span className="text-neutral-400">Budget</span>
<span className="text-white font-medium">€1,000</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-400">Purpose</span>
<span className="text-white font-medium">Close warm visitors</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">

<div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 mb-4 flex items-center justify-between">
                        1. Founder Commitments
                    </h4>
<div className="space-y-6 text-sm">
<p>Sven (Founder of Forest Foods) will reach out to his personal and professional network via personal email, WhatsApp messages, and direct follow-ups.</p>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Objective</span>
<p className="text-neutral-500">Secure verbal commitments from individuals who agree to pledge on launch day (High-net-worth individuals, existing supporters, professional network, impact-aligned operators).</p>
</div>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Why this matters</span>
<p className="text-neutral-500 mb-2">When the campaign goes live, these individuals pledge immediately. This creates:</p>
<ul className="grid grid-cols-2 gap-2 mt-2">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:check-read-linear"></iconify-icon> Immediate traction</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:check-read-linear"></iconify-icon> Social proof</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:check-read-linear"></iconify-icon> Algorithm lift</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:check-read-linear"></iconify-icon> Perception of success</li>
</ul>
</div>
<div className="p-4 bg-neutral-50 border border-neutral-100 rounded-xl flex justify-between items-center">
<div>
<span className="text-xs font-medium text-neutral-900 block">Rooted provides:</span>
<span className="text-xs text-neutral-500 mt-1 block">Email/WhatsApp scripts (Mark), Follow-up structure, Tracking sheet (Leo).</span>
</div>
<div className="text-right ml-4">
<span className="text-xs font-medium text-neutral-900 block">Forest Foods:</span>
<span className="text-xs text-neutral-500 mt-1 block">Executes</span>
</div>
</div>
</div>
</div>

<div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 mb-4 flex items-center justify-between">
                        2. Partner Amplification
                    </h4>
<div className="space-y-6 text-sm">
<p>We identify aligned partners such as regenerative agriculture pages, climate founders, sustainability brands, and impact operators.</p>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Action Plan</span>
<ul className="space-y-2 mt-2 text-neutral-500">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Send Instagram DMs</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Send structured outreach emails</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Provide a pre-built content pack</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:round-alt-arrow-right-linear"></iconify-icon> Secure confirmed posting dates</li>
</ul>
</div>
<div className="mt-4 pt-4 border-t border-neutral-100">
<p className="text-xs text-neutral-500"><span className="font-medium text-neutral-900">Note:</span> Partner tracking sheet required.</p>
</div>
</div>
</div>

<div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 mb-4 flex items-center justify-between">
                        3. Proof-Led Content Deployment
                    </h4>
<div className="space-y-6 text-sm">
<div className="grid grid-cols-3 gap-2">
<div className="p-3 border border-neutral-200 rounded-lg text-center">
<span className="block text-xl font-medium text-neutral-900 mb-1">1</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Hero Video</span>
</div>
<div className="p-3 border border-neutral-200 rounded-lg text-center">
<span className="block text-xl font-medium text-neutral-900 mb-1">8-12</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Shorts</span>
</div>
<div className="p-3 border border-neutral-200 rounded-lg text-center">
<span className="block text-xl font-medium text-neutral-900 mb-1">6-8</span>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest">Statics</span>
</div>
</div>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Deployed Across</span>
<p className="text-neutral-500">Partner content, Forest Foods organic, Email outreach, Bridge page, and Retargeting ads.</p>
</div>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Pre-Launch Awareness Focus</span>
<div className="flex flex-wrap gap-2 mt-2">
<span className="px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded text-xs">"Already operating"</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded text-xs">"Scaling announcement"</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded text-xs">Countdown posts</span>
<span className="px-2 py-1 bg-neutral-50 border border-neutral-200 text-neutral-600 rounded text-xs">Use-of-funds</span>
</div>
<p className="text-xs font-medium text-neutral-900 mt-4">Familiarity must exist before 18 April.</p>
</div>
</div>
</div>

<div>
<h4 className="text-lg font-medium tracking-tight text-neutral-900 mb-4 flex items-center justify-between">
                        4. Prospective Bridge Funnel
                    </h4>
<div className="space-y-6 text-sm">
<p className="text-neutral-500">We will build a bridge funnel page that introduces the campaign, shows proof, explains use-of-funds, and routes to Indiegogo.</p>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Why this matters</span>
<p className="text-neutral-500">Indiegogo cannot reliably be pixelled. The bridge page allows:</p>
<ul className="space-y-2 mt-2">
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:tag-linear"></iconify-icon> Pixel tracking</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:tag-linear"></iconify-icon> UTM tracking</li>
<li className="flex items-center gap-2"><iconify-icon className="text-neutral-400" icon="solar:tag-linear"></iconify-icon> Retargeting capability</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 pt-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-2">Deliverables &amp; Content Production</h2>
<p className="text-sm text-neutral-500 mb-12">All core content must be completed and delivered to Leo by <strong>10 March</strong>. No delay permitted.</p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="p-8 border border-neutral-200 rounded-2xl bg-white shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Narrative &amp; Messaging</h3>
<span className="px-3 py-1 bg-neutral-100 text-neutral-900 rounded-full text-xs font-medium">Owner: Mark</span>
</div>
<p className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-4">Master Narrative Document (PDF)</p>
<div className="space-y-4">

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-sm checked:bg-neutral-900 checked:border-neutral-900 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 w-3 h-3 stroke-[2px]" icon="solar:check-linear"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-neutral-900 block">Narrative Spine</span>
<span className="text-neutral-500 block mt-0.5">“Operating regenerative system → structured replication → scale.”</span>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-sm checked:bg-neutral-900 checked:border-neutral-900 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 w-3 h-3 stroke-[2px]" icon="solar:check-linear"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-neutral-900 block">Proof Positioning</span>
<span className="text-neutral-500 block mt-0.5">“Commercial syntropic agroforestry farm already operating.” (No vague language).</span>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-sm checked:bg-neutral-900 checked:border-neutral-900 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 w-3 h-3 stroke-[2px]" icon="solar:check-linear"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-neutral-900 block">Use-of-Funds Breakdown</span>
<span className="text-neutral-500 block mt-0.5">Irrigation, infrastructure, knowledge hub, capacity scale.</span>
</div>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mt-0.5 shrink-0">
<input checked="" className="peer appearance-none w-4 h-4 border border-neutral-300 rounded-sm checked:bg-neutral-900 checked:border-neutral-900 transition-colors" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 w-3 h-3 stroke-[2px]" icon="solar:check-linear"></iconify-icon>
</div>
<div className="text-sm">
<span className="font-medium text-neutral-900 block">Outreach Scripts</span>
<span className="text-neutral-500 block mt-0.5">Founder (Email/WhatsApp), Partner (IG DM/Email).</span>
</div>
</label>
</div>
<div className="mt-6 p-3 bg-neutral-50 border border-neutral-100 rounded-lg text-xs font-medium text-neutral-900 text-center">
                        No content is produced before this is locked. Deadline: Within 48 hours.
                    </div>
</div>

<div className="p-8 border border-neutral-200 rounded-2xl bg-white shadow-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium tracking-tight text-neutral-900">Tracking Infrastructure</h3>
<span className="px-3 py-1 bg-neutral-100 text-neutral-900 rounded-full text-xs font-medium">Owner: Leo</span>
</div>
<p className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-4">Live by 17 March</p>
<div className="space-y-6">
<div>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-neutral-400" icon="solar:document-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Founder Commitment Sheet</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Name</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Contact</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Segment</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Amount</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Date</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Launch Action</span>
</div>
</div>
<div className="pt-6 border-t border-neutral-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-neutral-400" icon="solar:document-linear"></iconify-icon>
<span className="text-sm font-medium text-neutral-900">Partner Tracking Sheet</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Partner Name</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Owner</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Status</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Posting Date</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Link</span>
<span className="px-2 py-1 bg-white border border-neutral-200 rounded text-xs text-neutral-500">Reach</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
<div className="p-6 border border-neutral-200 rounded-xl bg-white flex flex-col">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600">Sam</span>
</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">1 Hero Video</h4>
<p className="text-xs text-neutral-500 mb-4">Hook: "Regenerative agriculture is widely discussed. We are already operating it."</p>
<ul className="text-xs space-y-1 text-neutral-400 mt-auto">
<li>• Final narrative</li>
<li>• Visual proof</li>
<li>• Indiegogo, Bridge, Partners</li>
</ul>
</div>
<div className="p-6 border border-neutral-200 rounded-xl bg-white flex flex-col">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:video-frame-linear"></iconify-icon>
<span className="text-[10px] font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600">Sam</span>
</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">8-12 Short Videos</h4>
<p className="text-xs text-neutral-500 mb-4">Cutdowns focusing on specifics: Funds, Operations, Scale, Syntropic farming.</p>
<ul className="text-xs space-y-1 text-neutral-400 mt-auto">
<li>• Retargeting ads</li>
<li>• Partner posts</li>
<li>• Organic cadence</li>
</ul>
</div>
<div className="p-6 border border-neutral-200 rounded-xl bg-white flex flex-col">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-2xl text-neutral-900" icon="solar:gallery-linear"></iconify-icon>
<span className="text-[10px] font-medium px-2 py-1 bg-neutral-100 rounded text-neutral-600">Sam</span>
</div>
<h4 className="text-base font-medium text-neutral-900 mb-2">6-8 Static Proof Tiles</h4>
<p className="text-xs text-neutral-500 mb-4">Budget, farm system, roadmap, impact, recognition.</p>
<ul className="text-xs space-y-1 text-neutral-400 mt-auto">
<li>• Organic</li>
<li>• Partner stories</li>
<li>• Bridge page</li>
</ul>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-t border-neutral-100 pt-16">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">5. Funnel + Indiegogo Build</h2>
<div className="p-6 border border-neutral-200 rounded-2xl bg-neutral-50/50">
<div className="flex items-center justify-between mb-4 border-b border-neutral-200 pb-4">
<span className="text-sm font-medium text-neutral-900">Owner: Leo</span>
<span className="text-sm text-neutral-500">Build Window: 10–17 March</span>
</div>
<div className="space-y-6">
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Bridge Funnel</span>
<ul className="text-sm text-neutral-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Captures pixel</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Routes to Indiegogo</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Structured proof</li>
</ul>
</div>
<div>
<span className="text-xs font-medium text-neutral-900 uppercase tracking-widest block mb-2">Indiegogo Page</span>
<ul className="text-sm text-neutral-500 space-y-1">
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Campaign story &amp; Hero video</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Reward explanation &amp; Proof blocks</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Use-of-funds</li>
</ul>
</div>
</div>
<div className="mt-6 pt-4 border-t border-neutral-200 text-xs text-neutral-900 font-medium">
                        Inputs required by 10 March. Both must align structurally. Deadline: 17 March.
                    </div>
</div>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">6. Google Drive Structure</h2>
<div className="border border-neutral-200 rounded-2xl bg-white overflow-hidden text-sm">
<div className="p-4 border-b border-neutral-100 flex items-center gap-3 hover:bg-neutral-50 cursor-default">
<iconify-icon className="text-lg text-neutral-400" icon="solar:folder-linear"></iconify-icon>
<div>
<span className="font-medium text-neutral-900 block">1. Master Narrative PDF</span>
<span className="text-xs text-neutral-400">Created by Mark.</span>
</div>
</div>
<div className="p-4 border-b border-neutral-100 flex items-start gap-3 hover:bg-neutral-50 cursor-default">
<iconify-icon className="text-lg text-neutral-400 mt-0.5" icon="solar:folder-linear"></iconify-icon>
<div>
<span className="font-medium text-neutral-900 block mb-1">2. Founder Outreach Package (For Sven)</span>
<span className="text-xs text-neutral-400 block mb-2">Email script, WhatsApp script, Follow-up PDF, Hero video, 3-4 statics, Campaign summary PDF</span>
</div>
</div>
<div className="p-4 flex items-start gap-3 hover:bg-neutral-50 cursor-default">
<iconify-icon className="text-lg text-neutral-400 mt-0.5" icon="solar:folder-linear"></iconify-icon>
<div>
<span className="font-medium text-neutral-900 block mb-1">3. Partner Package (For Jerry)</span>
<span className="text-xs text-neutral-400 block mb-2">Hero video, 3 cutdowns, 4 statics, Caption examples, Story scripts, Tracked link</span>
</div>
</div>
</div>
<p className="text-xs text-neutral-500 mt-3 text-right">All organised and final by 15 March.</p>
</div>
</section>

<section className="border-t border-neutral-100 pt-16">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-2">7. Organic Cadence (Pre-Launch)</h2>
<p className="text-sm text-neutral-500 mb-8">Structured 4-week example. All scheduled in Monday.com.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
<div className="p-5 border border-neutral-200 rounded-xl bg-white">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest block mb-3">Week 1</span>
<ul className="space-y-2 text-sm text-neutral-900">
<li className="flex gap-2"><span className="text-neutral-300">•</span> "Already operating" (video)</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> System explanation (static)</li>
</ul>
</div>
<div className="p-5 border border-neutral-200 rounded-xl bg-white">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest block mb-3">Week 2</span>
<ul className="space-y-2 text-sm text-neutral-900">
<li className="flex gap-2"><span className="text-neutral-300">•</span> Use-of-funds breakdown</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Farm proof imagery</li>
</ul>
</div>
<div className="p-5 border border-neutral-200 rounded-xl bg-white">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest block mb-3">Week 3</span>
<ul className="space-y-2 text-sm text-neutral-900">
<li className="flex gap-2"><span className="text-neutral-300">•</span> Scaling announcement</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Launch date confirmation</li>
</ul>
</div>
<div className="p-5 border border-neutral-200 rounded-xl bg-white">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest block mb-3">Week 4</span>
<ul className="space-y-2 text-sm text-neutral-900">
<li className="flex gap-2"><span className="text-neutral-300">•</span> 3–4 countdown posts</li>
<li className="flex gap-2"><span className="text-neutral-300">•</span> Final reminder</li>
</ul>
</div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 text-sm">
<span className="font-medium text-neutral-900 block mb-3">Monday.com Rules:</span>
<p className="text-neutral-500 mb-4">Content categories in board: Narrative, Video, Static, Organic, Partner, Paid, Founder outreach, Launch week.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-white border border-neutral-200 text-neutral-500 rounded text-xs">Owner</span>
<span className="px-2 py-1 bg-white border border-neutral-200 text-neutral-500 rounded text-xs">Draft date</span>
<span className="px-2 py-1 bg-white border border-neutral-200 text-neutral-500 rounded text-xs">Approval date</span>
<span className="px-2 py-1 bg-white border border-neutral-200 text-neutral-500 rounded text-xs">Publish date</span>
</div>
</div>
</section>

<section className="border-t border-neutral-100 pt-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">8. Non-Negotiable Timeline Summary</h2>
<div className="max-w-2xl mx-auto relative border-l border-neutral-200 ml-4 md:ml-auto md:mr-auto space-y-10 pb-8">
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-neutral-900"></div>
<p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-1">Within 48 hours</p>
<p className="text-base font-medium text-neutral-900">Mark delivers Master Narrative + Scripts.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-neutral-400"></div>
<p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-1">By 10 March</p>
<p className="text-base font-medium text-neutral-900">Hero video complete.</p>
<p className="text-sm text-neutral-500">All narrative inputs delivered to Leo.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-neutral-400"></div>
<p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-1">By 15 March</p>
<p className="text-base font-medium text-neutral-900">All cutdowns and statics complete and approved.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-neutral-400"></div>
<p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-1">By 17 March</p>
<p className="text-base font-medium text-neutral-900">Bridge funnel live.</p>
<p className="text-sm text-neutral-500">Indiegogo page built. Tracking sheets live.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white bg-neutral-400"></div>
<p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-1">From 18 March</p>
<p className="text-base font-medium text-neutral-900">Founder outreach begins.</p>
<p className="text-sm text-neutral-500">Partner outreach begins.</p>
</div>
<div className="relative pl-8 md:pl-10">
<div className="absolute -left-[6px] top-0 w-3 h-3 rounded-full border-2 border-white bg-gradient-to-r from-rose-400 to-orange-300"></div>
<p className="text-xs font-medium tracking-widest uppercase mb-1 text-rose-400">Launch</p>
<p className="text-2xl font-semibold tracking-tight text-neutral-900">18 April</p>
</div>
</div>
</section>

<section className="pt-16 pb-24 border-t border-neutral-100 text-center max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-6">This is now the full operational document</h2>
<div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-neutral-500">
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Objective clear</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">KPI clear</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Platform explained</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Funnel explained</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Ownership assigned</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Deliverables locked</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Timeline enforced</span>
<span className="px-3 py-1 bg-neutral-50 border border-neutral-200 rounded-full">Infrastructure defined</span>
</div>
<div className="p-8 border border-neutral-200 rounded-2xl bg-white shadow-sm">
<p className="text-base font-medium text-neutral-900 mb-6">If you want next, we can create:</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">

<button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-rose-400 to-orange-300 text-white font-medium px-6 py-3 text-sm shadow-sm hover:opacity-90 transition-opacity">
                        1-Page War Room Version
                    </button>

<button className="w-full sm:w-auto rounded-full border border-neutral-200 text-neutral-600 bg-white hover:bg-neutral-50 font-medium px-6 py-3 text-sm transition-colors">
                        Monday.com Task Import
                    </button>
<button className="w-full sm:w-auto rounded-full border border-neutral-200 text-neutral-600 bg-white hover:bg-neutral-50 font-medium px-6 py-3 text-sm transition-colors">
                        Launch Week Checklist
                    </button>
</div>
<p className="text-xs text-neutral-400 mt-6 uppercase tracking-widest">Your call.</p>
</div>
</section>
</main>

    </>
  );
}
