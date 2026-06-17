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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2" href="#">
<svg aria-hidden="true" className="iconify text-yellow-500" data-icon="lucide:citrus" data-strokeWidth="1.5" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"></path><path d="M19.65 15.66A8 8 0 0 1 8.35 4.34M14 10l-5.5 5.5"></path><path d="M14 17.85V10H6.15"></path></g></svg>
<span className="text-lg font-semibold tracking-tight text-slate-900">True Citrus</span>
</a>

<div className="hidden md:flex md:items-center md:gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#science">The Science</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#system">The System</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#reviews">Reviews</a>
<a className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors" href="#">Shop Wellness</a>
</div>

<div className="flex items-center gap-4 md:hidden">
<button className="text-slate-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-16 pb-12 sm:pt-24 lg:pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center">
<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-600">New: Functional Wellness System</span>
</div>
<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                    Hydration Engineered for <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-fuchsia-500 to-teal-500">How You Actually Feel.</span>
</h1>
<p className="mt-6 max-w-2xl text-lg text-slate-500 leading-relaxed">
                    Three functional drink mixes. Clinically studied ingredients. Zero artificial sweeteners. One system designed to support your body from morning energy to evening cravings.
                </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-slate-100 px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200" href="#science">
                        Explore the Science
                    </a>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-800 shadow-lg shadow-slate-900/20" href="#shop">
                        Shop Wellness Collection
                    </a>
</div>

<div className="relative mt-16 w-full max-w-5xl">
<div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-50 border border-slate-100 shadow-2xl relative flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-white via-slate-50 to-slate-100"></div>
<div className="relative z-10 flex gap-4 md:gap-8 items-end transform translate-y-8">

<div className="w-32 h-48 bg-gradient-to-b from-fuchsia-50 to-fuchsia-100 border border-fuchsia-200 rounded-lg shadow-lg rotate-[-6deg] transform translate-y-2 flex flex-col items-center justify-center p-4">
<span className="iconify text-fuchsia-500 mb-2" data-icon="lucide:shield-check" data-width="32"></span>
<span className="text-fuchsia-900 font-bold text-lg">DEFEND</span>
</div>

<div className="w-40 h-56 bg-gradient-to-b from-orange-50 to-orange-100 border border-orange-200 rounded-lg shadow-xl z-20 flex flex-col items-center justify-center p-4">
<span className="iconify text-orange-500 mb-2" data-icon="lucide:zap" data-width="40"></span>
<span className="text-orange-900 font-bold text-xl">ELEVATE</span>
</div>

<div className="w-32 h-48 bg-gradient-to-b from-teal-50 to-teal-100 border border-teal-200 rounded-lg shadow-lg rotate-[6deg] transform translate-y-2 flex flex-col items-center justify-center p-4">
<span className="iconify text-teal-500 mb-2" data-icon="lucide:apple" data-width="32"></span>
<span className="text-teal-900 font-bold text-lg">CURB</span>
</div>
</div>
</div>

<div className="absolute -bottom-12 left-0 right-0 mx-auto max-w-4xl px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl bg-white border border-slate-100 p-6 shadow-xl">
<div className="text-center border-r border-slate-100 last:border-0">
<p className="text-3xl font-semibold tracking-tight text-orange-500">120mg</p>
<p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Plant Caffeine</p>
</div>
<div className="text-center border-r border-slate-100 last:border-0">
<p className="text-3xl font-semibold tracking-tight text-fuchsia-500">300mg</p>
<p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Antioxidants</p>
</div>
<div className="text-center border-r border-slate-100 last:border-0">
<p className="text-3xl font-semibold tracking-tight text-teal-500">5g</p>
<p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Prebiotic Fiber</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold tracking-tight text-slate-900">0g</p>
<p className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Sugar</p>
</div>
</div>
</div>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-6 md:gap-12 text-xs font-medium text-slate-400 uppercase tracking-wider">
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:check-circle"></span> Clinically Studied Ingredients</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:flask-conical"></span> Third-Party Tested</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:leaf"></span> Non-GMO Project Verified</span>
<span className="flex items-center gap-2"><span className="iconify" data-icon="lucide:heart-handshake"></span> 100% Happiness Guarantee</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">Sound Familiar?</h2>
<p className="mt-4 text-slate-500">Life demands a lot. Most drinks offer sugar, jitters, or empty promises.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600">
<span className="iconify" data-icon="lucide:battery-warning" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">The 2pm Crash Is Real</h3>
<p className="mt-3 text-slate-500 leading-relaxed">Coffee makes you jittery. Energy drinks spike and crash. You need sustained focus, not a rollercoaster.</p>
<div className="mt-6 border-t border-slate-100 pt-4">
<p className="text-sm font-medium text-slate-900">⚠️ 67% of Americans report daily fatigue</p>
</div>
</div>

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
<span className="iconify" data-icon="lucide:cookie" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">Willpower Only Gets You So Far</h3>
<p className="mt-3 text-slate-500 leading-relaxed">You're not weak. You're fighting biology. Hunger hormones don't care about your goals.</p>
<div className="mt-6 border-t border-slate-100 pt-4">
<p className="text-sm font-medium text-slate-900">🍪 70% struggle with snacking</p>
</div>
</div>

<div className="rounded-2xl bg-white p-8 shadow-sm border border-slate-100">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-fuchsia-50 text-fuchsia-600">
<span className="iconify" data-icon="lucide:shield-alert" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">Sick Days Aren't in Your Schedule</h3>
<p className="mt-3 text-slate-500 leading-relaxed">You can't afford to be down. But reactive vitamin C when you're already sick? That's not a strategy.</p>
<div className="mt-6 border-t border-slate-100 pt-4">
<p className="text-sm font-medium text-slate-900">🤒 Adults average 2-3 colds per year</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-2xl font-medium text-slate-400">What if your water actually worked for you?</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100" id="system">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900">Three Functions. One System. Zero Compromises.</h2>
<p className="mt-4 text-slate-500 max-w-2xl">Each formula is designed to solve a specific problem—and they're even better together.</p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-teal-200 hover:shadow-lg hover:shadow-teal-900/5">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-medium text-teal-700">Cravings</span>
<span className="text-xs text-slate-400">15 cal</span>
</div>
<div className="aspect-square w-full rounded-xl bg-teal-50/50 mb-6 flex items-center justify-center">

<span className="iconify text-teal-200" data-icon="lucide:package-open" data-width="64"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">True Lemon Curb</h3>
<p className="text-sm font-medium text-teal-600 mt-1">Curb Your Cravings</p>
<p className="mt-3 text-sm text-slate-500">Feel satisfied longer between meals with a clinically studied fiber blend.</p>
<div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span> 5g Prebiotic Fiber</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span> EGCG Metabolism Support</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span> 600mg Electrolytes</p>
</div>
</div>
<a className="mt-6 block w-full rounded-lg bg-white border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 transition-colors" href="#curb">Learn More</a>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-fuchsia-200 hover:shadow-lg hover:shadow-fuchsia-900/5">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-fuchsia-50 px-2.5 py-0.5 text-xs font-medium text-fuchsia-700">Immunity</span>
<span className="text-xs text-slate-400">15 cal</span>
</div>
<div className="aspect-square w-full rounded-xl bg-fuchsia-50/50 mb-6 flex items-center justify-center">
<span className="iconify text-fuchsia-200" data-icon="lucide:shield-check" data-width="64"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">True Lemon Defend</h3>
<p className="text-sm font-medium text-fuchsia-600 mt-1">Defend Your Wellness</p>
<p className="mt-3 text-sm text-slate-500">Daily immune support that actually works, backed by clinical research.</p>
<div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> 300mg Antioxidants</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> 167% DV Vitamin C</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> Clinically Studied</p>
</div>
</div>
<a className="mt-6 block w-full rounded-lg bg-white border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-fuchsia-700 transition-colors" href="#defend">Learn More</a>
</div>

<div className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:border-orange-200 hover:shadow-lg hover:shadow-orange-900/5">
<div>
<div className="flex items-center justify-between mb-4">
<span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-700">Energy</span>
<span className="text-xs text-slate-400">10 cal</span>
</div>
<div className="aspect-square w-full rounded-xl bg-orange-50/50 mb-6 flex items-center justify-center">
<span className="iconify text-orange-200" data-icon="lucide:zap" data-width="64"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900">True Lemon Elevate</h3>
<p className="text-sm font-medium text-orange-600 mt-1">Elevate Your Potential</p>
<p className="mt-3 text-sm text-slate-500">Clean energy and focus without the crash. Powered by Green Tea.</p>
<div className="mt-4 space-y-2 border-t border-slate-100 pt-4">
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> 120mg Clean Caffeine</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> L-Theanine Focus</p>
<p className="text-xs text-slate-600 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500"></span> No Jitters/Crash</p>
</div>
</div>
<a className="mt-6 block w-full rounded-lg bg-white border border-slate-200 py-2.5 text-center text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-orange-700 transition-colors" href="#elevate">Learn More</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-orange-50/30" id="elevate">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="mb-12 max-w-3xl">
<span className="inline-block rounded-md bg-orange-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-4">Energy + Focus</span>
<h2 className="text-4xl font-semibold text-slate-900">The Science of Sustained Energy</h2>
<p className="mt-4 text-lg text-slate-600">Why Elevate feels different than everything else you've tried.</p>
</div>
<div className="grid gap-12 lg:grid-cols-2">

<div>
<div className="rounded-2xl bg-white p-6 shadow-sm border border-orange-100">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-sm font-semibold text-slate-900">The Energy Curve</h3>
<div className="flex gap-4 text-xs">
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-orange-500"></span> Elevate</span>
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-400"></span> Energy Drink</span>
</div>
</div>

<div className="relative h-64 w-full bg-slate-50 rounded-lg border border-slate-100 p-4">

<div className="absolute inset-0 flex flex-col justify-between p-4 opacity-10">
<div className="h-px bg-slate-900 w-full"></div>
<div className="h-px bg-slate-900 w-full"></div>
<div className="h-px bg-slate-900 w-full"></div>
<div className="h-px bg-slate-900 w-full"></div>
</div>

<svg className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="M0,50 Q10,0 20,5 Q30,60 100,60" fill="none" stroke="#F87171" stroke-dasharray="4 2" strokeWidth="1.5"></path>

<path d="M0,50 Q15,15 30,15 L70,15 Q90,15 100,35" fill="none" stroke="#F97316" strokeWidth="2"></path>
</svg>

<div className="absolute bottom-2 left-4 text-[10px] text-slate-400">0h</div>
<div className="absolute bottom-2 right-4 text-[10px] text-slate-400">5h</div>

<div className="absolute top-[20%] left-[40%] bg-white shadow-md rounded px-2 py-1 text-[10px] text-orange-600 font-medium border border-orange-100">
                                Sustained Focus (No Jitters)
                            </div>
</div>
<p className="mt-4 text-xs text-slate-400 text-center italic">Illustrative comparison of caffeine metabolism effects</p>
</div>

<div className="mt-6 rounded-xl bg-orange-100 p-6 border border-orange-200">
<h4 className="font-semibold text-orange-900 flex items-center gap-2">
<span className="iconify" data-icon="lucide:check-check"></span> The No Crash Promise
                        </h4>
<p className="mt-2 text-sm text-orange-800 leading-relaxed">
                            Research shows the combination of L-Theanine and caffeine promotes sustained attention and reduces the anxiety and crash associated with caffeine alone. It's not marketing—it's biochemistry.
                        </p>
</div>
</div>

<div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-4 ring-white">1</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Clean Caffeine Activation</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">120mg of plant-based caffeine from green tea enters your system within 15 minutes. Unlike synthetic caffeine, it feels natural.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-4 ring-white">2</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">L-Theanine Smooths the Ride</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">200mg of L-Theanine promotes alpha brain waves associated with relaxed alertness. It's why you feel focused, not frantic.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 ring-4 ring-white">3</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">GABA for Clarity</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">200mg of GABA helps regulate neural activity, supporting the calm clarity that lets you actually finish what you started.</p>
</div>
</div>
</div>
<div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
<table className="min-w-full divide-y divide-slate-200">
<thead className="bg-slate-50">
<tr>
<th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Ingredient</th>
<th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-slate-500" scope="col">Amount</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-slate-200 text-sm">
<tr>
<td className="px-6 py-3 text-slate-900 font-medium">Green Tea Caffeine</td>
<td className="px-6 py-3 text-slate-600 text-right">120mg</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-900 font-medium">L-Theanine</td>
<td className="px-6 py-3 text-slate-600 text-right">200mg</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-900 font-medium">GABA</td>
<td className="px-6 py-3 text-slate-600 text-right">200mg</td>
</tr>
<tr>
<td className="px-6 py-3 text-slate-900 font-medium">Magnesium</td>
<td className="px-6 py-3 text-slate-600 text-right">60mg</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="curb">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="mb-12 max-w-3xl">
<span className="inline-block rounded-md bg-teal-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-teal-700 mb-4">Craving Control</span>
<h2 className="text-4xl font-semibold text-slate-900">The Science of Feeling Satisfied</h2>
<p className="mt-4 text-lg text-slate-600">How Curb helps you eat less without feeling deprived.</p>
</div>
<div className="grid gap-12 lg:grid-cols-2 lg:flex-row-reverse">

<div className="order-2 lg:order-1">
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600 ring-4 ring-white">1</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Fiber Expansion</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">5g of prebiotic fiber (Fibersol®) absorbs water and expands gently, creating physical volume that triggers stretch receptors. Your body registers 'full' sooner.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600 ring-4 ring-white">2</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Gut-Brain Signaling</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">Prebiotic fiber feeds beneficial gut bacteria, signaling satiety to your brain. It's not willpower—it's biology.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100 text-teal-600 ring-4 ring-white">3</div>
</div>
<div>
<h4 className="text-base font-semibold text-slate-900">Metabolic Support</h4>
<p className="mt-1 text-sm text-slate-600 leading-relaxed">100mg EGCG from green tea extract and chlorogenic acid from green coffee support healthy metabolism naturally.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="rounded-2xl bg-teal-50 p-6 shadow-sm border border-teal-100">
<div className="mb-6 flex items-center justify-between">
<h3 className="text-sm font-semibold text-teal-900">Satiety Levels</h3>
<div className="flex gap-4 text-xs">
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-teal-500"></span> Curb</span>
<span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-300"></span> Water Only</span>
</div>
</div>

<div className="relative h-64 w-full bg-white rounded-lg border border-teal-100 p-4">

<svg className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)] overflow-visible" preserveaspectratio="none" viewbox="0 0 100 50">

<path d="M0,45 L100,45" fill="none" stroke="#CBD5E1" stroke-dasharray="4 2" strokeWidth="2"></path>

<path d="M0,45 Q20,10 40,10 L80,10 Q90,10 100,20" fill="none" stroke="#0D9488" strokeWidth="2.5"></path>
</svg>

<div className="absolute top-[15%] right-[20%] bg-teal-600 shadow-md rounded px-2 py-1 text-[10px] text-white font-medium">
                                Sustained Fullness
                            </div>
</div>
</div>
<div className="mt-6 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
<div className="shrink-0 rounded-full bg-teal-100 p-2 text-teal-600">
<span className="iconify" data-icon="lucide:clock" data-width="20"></span>
</div>
<div>
<p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Best Time</p>
<p className="text-sm font-medium text-slate-900">30 mins before meals or during the 3pm slump</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-fuchsia-50/30" id="defend">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="mb-12 max-w-3xl">
<span className="inline-block rounded-md bg-fuchsia-100 px-2 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-700 mb-4">Immune Support</span>
<h2 className="text-4xl font-semibold text-slate-900">The Science of Daily Defense</h2>
<p className="mt-4 text-lg text-slate-600">Proactive immune support backed by real research, not just hope.</p>
</div>

<div className="rounded-3xl bg-white p-8 shadow-sm border border-fuchsia-100 mb-16 relative overflow-hidden">
<div className="absolute top-0 right-0 h-32 w-32 bg-fuchsia-100 rounded-bl-full opacity-50"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<div className="flex items-center gap-2 mb-3">
<span className="iconify text-fuchsia-500" data-icon="lucide:file-check-2"></span>
<span className="text-xs font-bold uppercase tracking-widest text-fuchsia-600">Clinical Validation</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Third-Party Tested. Clinically Studied.</h3>
<p className="text-slate-500">Our Phyto True™ antioxidant blend includes compounds shown to support cellular health and resilience in peer-reviewed studies.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-700 hover:text-fuchsia-900 underline underline-offset-4" href="#">
                            View Study Details <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
<div className="grid gap-12 lg:grid-cols-2">

<div className="space-y-6">
<h3 className="text-lg font-semibold text-slate-900">Proactive vs. Reactive</h3>

<div className="p-6 rounded-xl border border-slate-200 bg-slate-50 opacity-60 grayscale">
<h4 className="font-medium text-slate-700 mb-2">The Old Way (Reactive)</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:x"></span> Take Vitamin C only when sick</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:x"></span> Synthetic isolates</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:x"></span> Miss days of work/life</li>
</ul>
</div>

<div className="p-6 rounded-xl border-2 border-fuchsia-200 bg-white shadow-lg shadow-fuchsia-100/50">
<div className="flex items-center justify-between mb-2">
<h4 className="font-semibold text-fuchsia-900">The Defend Way (Proactive)</h4>
<span className="iconify text-fuchsia-500" data-icon="lucide:check-circle-2"></span>
</div>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> Daily support before you need it</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> 300mg Plant-based Antioxidants</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500"></span> Build resilient defenses over time</li>
</ul>
</div>
</div>

<div>
<div className="rounded-2xl bg-fuchsia-900 p-8 text-white">
<h3 className="text-xl font-semibold mb-6">Powered by Plants</h3>
<div className="grid grid-cols-2 gap-6">
<div>
<p className="text-xs font-medium text-fuchsia-300 uppercase">Vitamin C</p>
<p className="text-lg font-medium mt-1">Acerola Cherries</p>
<p className="text-xs text-fuchsia-200/70 mt-1">167% Daily Value</p>
</div>
<div>
<p className="text-xs font-medium text-fuchsia-300 uppercase">Hesperidin</p>
<p className="text-lg font-medium mt-1">Citrus Peels</p>
<p className="text-xs text-fuchsia-200/70 mt-1">Cellular health</p>
</div>
<div>
<p className="text-xs font-medium text-fuchsia-300 uppercase">Ellagic Acid</p>
<p className="text-lg font-medium mt-1">Pomegranate</p>
<p className="text-xs text-fuchsia-200/70 mt-1">Antioxidant support</p>
</div>
<div>
<p className="text-xs font-medium text-fuchsia-300 uppercase">EGCG</p>
<p className="text-lg font-medium mt-1">Green Tea</p>
<p className="text-xs text-fuchsia-200/70 mt-1">Cellular protection</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 text-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold sm:text-4xl">Your Day, Optimized</h2>
<p className="mx-auto mt-4 max-w-2xl text-slate-400">Here's how Curb, Defend, and Elevate work together from sunrise to sunset.</p>
</div>
<div className="relative">

<div className="absolute top-8 left-0 hidden w-full h-0.5 bg-slate-800 lg:block"></div>
<div className="grid gap-10 lg:grid-cols-5 relative z-10">

<div className="group flex flex-col items-center text-center">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 group-hover:border-fuchsia-500 transition-colors">
<span className="iconify text-fuchsia-400" data-icon="lucide:sunrise" data-width="24"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 w-full">
<p className="text-xs font-bold text-slate-500 mb-1">6:00 AM</p>
<h4 className="font-semibold text-fuchsia-400">Defend</h4>
<p className="text-xs text-slate-400 mt-2">Start with immune support before the day begins.</p>
</div>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 group-hover:border-orange-500 transition-colors">
<span className="iconify text-orange-400" data-icon="lucide:coffee" data-width="24"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 w-full">
<p className="text-xs font-bold text-slate-500 mb-1">9:00 AM</p>
<h4 className="font-semibold text-orange-400">Elevate</h4>
<p className="text-xs text-slate-400 mt-2">Replace coffee. Smooth, sustained focus.</p>
</div>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 group-hover:border-teal-500 transition-colors">
<span className="iconify text-teal-400" data-icon="lucide:clock-4" data-width="24"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 w-full">
<p className="text-xs font-bold text-slate-500 mb-1">11:00 AM</p>
<h4 className="font-semibold text-teal-400">Curb</h4>
<p className="text-xs text-slate-400 mt-2">Beat the pre-lunch hunger pangs.</p>
</div>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 group-hover:border-orange-500 transition-colors">
<span className="iconify text-orange-400" data-icon="lucide:battery-charging" data-width="24"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 w-full">
<p className="text-xs font-bold text-slate-500 mb-1">2:00 PM</p>
<h4 className="font-semibold text-orange-400">Elevate</h4>
<p className="text-xs text-slate-400 mt-2">Power through the slump without the crash.</p>
</div>
</div>

<div className="group flex flex-col items-center text-center">
<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 border-4 border-slate-900 group-hover:border-teal-500 transition-colors">
<span className="iconify text-teal-400" data-icon="lucide:utensils" data-width="24"></span>
</div>
<div className="bg-slate-800/50 rounded-lg p-4 w-full">
<p className="text-xs font-bold text-slate-500 mb-1">5:00 PM</p>
<h4 className="font-semibold text-teal-400">Curb</h4>
<p className="text-xs text-slate-400 mt-2">Portion control support before dinner.</p>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-200" href="#shop">
                    Build Your Routine
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">How We Stack Up</h2>
<p className="mt-4 text-slate-500">We're not the only option. But we might be the smartest.</p>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="p-4 border-b-2 border-slate-100 min-w-[200px]"></th>
<th className="p-4 border-b-2 border-orange-500 bg-orange-50/50 min-w-[150px] rounded-t-lg text-center">
<span className="block text-sm font-bold text-slate-900">True Citrus</span>
<span className="block text-xs font-medium text-orange-600 mt-1">Wellness System</span>
</th>
<th className="p-4 border-b-2 border-slate-100 min-w-[150px] text-center text-sm font-medium text-slate-500">Vitamin Packets</th>
<th className="p-4 border-b-2 border-slate-100 min-w-[150px] text-center text-sm font-medium text-slate-500">Energy Drinks</th>
<th className="p-4 border-b-2 border-slate-100 min-w-[150px] text-center text-sm font-medium text-slate-500">Fiber Gummies</th>
</tr>
</thead>
<tbody className="text-sm">
<tr>
<td className="p-4 border-b border-slate-100 font-medium text-slate-900">Multi-Function System</td>
<td className="p-4 border-b border-slate-100 bg-orange-50/20 text-center"><span className="iconify mx-auto text-green-500" data-icon="lucide:check-circle-2"></span></td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">Immunity Only</td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">Energy Only</td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">Fiber Only</td>
</tr>
<tr>
<td className="p-4 border-b border-slate-100 font-medium text-slate-900">No Artificial Sweeteners</td>
<td className="p-4 border-b border-slate-100 bg-orange-50/20 text-center"><span className="iconify mx-auto text-green-500" data-icon="lucide:check-circle-2"></span></td>
<td className="p-4 border-b border-slate-100 text-center"><span className="iconify mx-auto text-slate-300" data-icon="lucide:x"></span></td>
<td className="p-4 border-b border-slate-100 text-center"><span className="iconify mx-auto text-slate-300" data-icon="lucide:x"></span></td>
<td className="p-4 border-b border-slate-100 text-center">Varies</td>
</tr>
<tr>
<td className="p-4 border-b border-slate-100 font-medium text-slate-900">0g Sugar</td>
<td className="p-4 border-b border-slate-100 bg-orange-50/20 text-center"><span className="iconify mx-auto text-green-500" data-icon="lucide:check-circle-2"></span></td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">~6g</td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">20g+</td>
<td className="p-4 border-b border-slate-100 text-center text-slate-400">~4g</td>
</tr>
<tr>
<td className="p-4 border-b border-slate-100 font-medium text-slate-900">Clinically Studied</td>
<td className="p-4 border-b border-slate-100 bg-orange-50/20 text-center"><span className="iconify mx-auto text-green-500" data-icon="lucide:check-circle-2"></span></td>
<td className="p-4 border-b border-slate-100 text-center">Varies</td>
<td className="p-4 border-b border-slate-100 text-center"><span className="iconify mx-auto text-slate-300" data-icon="lucide:x"></span></td>
<td className="p-4 border-b border-slate-100 text-center">Varies</td>
</tr>
</tbody>
</table>
</div>

<div className="mt-12 rounded-xl bg-slate-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200">
<div className="text-left">
<h4 className="font-semibold text-slate-900">The Math Makes Sense</h4>
<p className="text-sm text-slate-500 mt-1">Buying fiber, immunity, energy drinks, and hydration separately costs $100+/mo.</p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<p className="text-xs text-slate-400 line-through">$109.00/mo</p>
<p className="text-xl font-bold text-slate-900">True Citrus System: $XX/mo</p>
</div>
<a className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800" href="#shop">Switch &amp; Save</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:leaf" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">Non-GMO Verified</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:droplet-off" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">No Artificial Sweeteners</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:flask-conical" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">Third-Party Tested</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:search" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">Transparent Labels</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:wheat-off" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">Gluten-Free</span>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 bg-white rounded-full shadow-sm text-slate-700"><span className="iconify" data-icon="lucide:heart-handshake" data-width="20"></span></div>
<span className="text-xs font-semibold text-slate-600">Happiness Guarantee</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">Real People. Real Results.</h2>
<div className="mt-4 flex items-center justify-center gap-2 text-yellow-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="text-slate-900 font-medium ml-2 text-sm">4.8 (2,000+ reviews)</span>
</div>
</div>

<div className="mx-auto max-w-4xl rounded-2xl bg-slate-50 p-8 md:p-12 text-center border border-slate-100">
<blockquote className="text-xl md:text-2xl font-medium text-slate-900 leading-relaxed">
                    "I used to buy fiber gummies, vitamin C, and an energy drink every single day. This replaced all three and actually tastes good. My morning routine is finally simple."
                </blockquote>
<div className="mt-8 flex items-center justify-center gap-4">
<div className="h-12 w-12 rounded-full bg-slate-200">

<span className="iconify w-full h-full p-2 text-slate-400" data-icon="lucide:user"></span>
</div>
<div className="text-left">
<div className="font-semibold text-slate-900">Sarah J.</div>
<div className="text-xs text-green-600 flex items-center gap-1"><span className="iconify" data-icon="lucide:check-circle" data-width="12"></span> Verified Buyer</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 text-center mb-12">Questions? We've Got Answers.</h2>
<div className="space-y-4">
<details className="group rounded-lg border border-slate-200 bg-white p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                        Can I use all three products in the same day?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        Yes! They are specifically designed to work together as a system. We recommend Defend in the morning, Curb before lunch/dinner, and Elevate whenever you need a boost.
                    </p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                        Does Elevate cause jitters?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        Elevate is formulated with L-Theanine alongside natural Green Tea caffeine. This combination is clinically shown to smooth out the energy curve, providing focus without the shakes or the crash.
                    </p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                        Will Curb make me feel bloated?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        No. We use Fibersol®, a premium prebiotic fiber that dissolves completely clear and is known for being gentle on the stomach compared to other fiber supplements.
                    </p>
</details>
<details className="group rounded-lg border border-slate-200 bg-white p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
                        What is your return policy?
                        <span className="iconify transition group-open:rotate-180" data-icon="lucide:chevron-down"></span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        We offer a 100% Happiness Guarantee. If you don't love the way you feel, we'll refund your order. No questions asked.
                    </p>
</details>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden" id="shop">
<div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-teal-50"></div>
<div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Your Body Deserves Better Than Boring Water.</h2>
<p className="mt-6 text-xl text-slate-600">Hydration that works as hard as you do. Curb cravings. Defend your wellness. Elevate your energy.</p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="rounded-full bg-slate-900 px-8 py-4 text-base font-semibold text-white shadow-xl hover:bg-slate-800 transition-all hover:-translate-y-1">
                    Shop the Wellness Collection
                </button>
<button className="rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-md border border-slate-200 hover:bg-slate-50 transition-all">
                    Subscribe &amp; Save 15%
                </button>
</div>
<p className="mt-8 text-xs font-medium text-slate-400 uppercase tracking-widest">
                Free shipping on orders $35+ • Cancel Anytime
            </p>
</div>
</section>

<footer className="bg-slate-900 text-white pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-yellow-500" data-icon="lucide:citrus" data-width="24"></span>
<span className="text-xl font-semibold">True Citrus</span>
</div>
<p className="text-slate-400 text-sm max-w-xs">Keeping you true. Delicious, functional hydration for real life.</p>
</div>
<div>
<h4 className="font-semibold mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white" href="#">Wellness</a></li>
<li><a className="hover:text-white" href="#">Lemonades</a></li>
<li><a className="hover:text-white" href="#">Bundles</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white" href="#">Our Story</a></li>
<li><a className="hover:text-white" href="#">Science</a></li>
<li><a className="hover:text-white" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4">Help</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-white" href="#">FAQ</a></li>
<li><a className="hover:text-white" href="#">Contact</a></li>
<li><a className="hover:text-white" href="#">Returns</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
<p>© 2025 True Citrus. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
