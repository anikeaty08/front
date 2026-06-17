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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
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
      

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200">
<div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
<button aria-label="Go back" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">
<i className="h-5 w-5 text-neutral-700" data-lucide="chevron-left"></i>
</button>
<div className="flex-1 min-w-0">
<h1 className="text-[22px] leading-6 font-semibold tracking-tight truncate">Spa &amp; Wellness</h1>
<p className="text-xs text-neutral-500">Relaxation, fitness, and signature journeys</p>
</div>
<button className="inline-flex items-center gap-2 h-9 px-3 rounded-full border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 active:bg-neutral-100 transition-colors">
<i className="h-4 w-4" data-lucide="phone"></i>
<span className="text-sm font-medium">Call</span>
</button>
</div>

<nav className="border-t border-neutral-200">
<div className="max-w-md mx-auto px-4">
<div className="flex gap-2 overflow-x-auto no-scrollbar py-2" style={{MsOverflowStyle: 'none', scrollbarWidth: 'none'}}>
<a className="shrink-0 px-3 py-2 text-sm rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-colors font-medium" href="#overview">Overview</a>
<a className="shrink-0 px-3 py-2 text-sm rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-colors font-medium" href="#fitness">Fitness</a>
<a className="shrink-0 px-3 py-2 text-sm rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-colors font-medium" href="#treatments">Treatments</a>
<a className="shrink-0 px-3 py-2 text-sm rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-colors font-medium" href="#wellness">Facilities</a>
<a className="shrink-0 px-3 py-2 text-sm rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 hover:border-neutral-300 transition-colors font-medium" href="#journeys">Journeys</a>
</div>
</div>
</nav>
</header>
<main className="max-w-md mx-auto px-4 pb-28">

<section className="mt-4">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="relative aspect-[16/10]">
<img alt="Serene spa setup with candles and towels" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/10 to-transparent"></div>
</div>
<div className="p-4">
<div className="flex items-center gap-2 text-neutral-700">
<i className="h-4 w-4" data-lucide="leaf"></i>
<span className="text-sm">Holistic treatments and modern fitness</span>
</div>
</div>
</div>
</section>

<section className="mt-6" id="overview">
<h2 className="text-xl font-semibold tracking-tight">Overview</h2>
<p className="mt-2 text-[15px] leading-6 text-neutral-700">
          Indulge in a sanctuary of relaxation and rejuvenation. From soothing treatments to wellness programs, our serene spa offers escapes ranging from quick revitalizing sessions to full‑day retreats—guided by professional therapists for an unforgettable experience.
        </p>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-xl border border-neutral-200 p-3 text-center hover:bg-neutral-50 transition-colors">
<i className="mx-auto h-5 w-5 text-neutral-800" data-lucide="sparkles"></i>
<div className="mt-1-xs text-neutral-600">Premium care</div>
</div>
<div className="rounded-xl border border-neutral-200 p-3 text-center hover:bg-neutral-50 transition-colors">
<i className="mx-auto h-5 w-5 text-neutral-800" data-lucide="heart"></i>
<div className="mt-1 text-xs text-neutral-600">Mind &amp; body</div>
</div>
<div className="rounded-xl border border-neutral-200 p-3 text-center hover:bg-neutral-50 transition-colors">
<i className="mx-auto h-5 w-5 text-neutral-800" data-lucide="droplets"></i>
<div className="mt-1 text-xs text-neutral-600">Hydrotherapy</div>
</div>
</div>
</section>

<section className="mt-8" id="fitness">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="dumbbell"></i>
<h2 className="text-xl font-semibold tracking-tight">Fitness &amp; Club Facilities</h2>
</div>
<p className="mt-2 text-[15px] leading-6 text-neutral-700">
          Stay motivated with advanced equipment, expert trainers, and tailored spaces—ideal for every fitness level.
        </p>
<div className="mt-4 space-y-2">

<details className="group rounded-xl border border-neutral-200 bg-white open:shadow-sm">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="dumbbell"></i>
</div>
<div>
<p className="text-sm font-medium">Gym Life Fitness</p>
<p className="text-xs text-neutral-600">Biomechanics-first equipment</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Life Fitness™ strength machines, free weights, and functional training deliver safe, effective workouts—engineered to reduce injury risk and maximize results.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="tv"></i>
</div>
<div>
<p className="text-sm font-medium">Cardio Theater</p>
<p className="text-xs text-neutral-600">Entertainment-enabled workouts</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Treadmills, bikes, and cross-trainers with personal screens—watch shows, listen to music, or follow guided programs.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="shield"></i>
</div>
<div>
<p className="text-sm font-medium">Ladies-Only Gym</p>
<p className="text-xs text-neutral-600">Comfort &amp; privacy</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              An exclusive, secure space with the same premium machines—empowering women to work out with confidence.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="users"></i>
</div>
<div>
<p className="text-sm font-medium">Group Fitness Classes</p>
<p className="text-xs text-neutral-600">Daily, instructor-led sessions</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-3">
<ul className="space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Yoga &amp; Meditation for inner balance and flexibility</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Pilates to strengthen core and posture</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Aerobics &amp; Zumba for high-energy calorie burning</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>HIIT for fast, effective conditioning</li>
</ul>
</div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="user-check"></i>
</div>
<div>
<p className="text-sm font-medium">Personal Coaching</p>
<p className="text-xs text-neutral-600">1:1 programs &amp; tracking</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Customized plans aligned to your lifestyle and goals, with performance tracking and sustainable guidance.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="stethoscope"></i>
</div>
<div>
<p className="text-sm font-medium">Fitness Doctor Consultation</p>
<p className="text-xs text-neutral-600">Nutrition &amp; injury prevention</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Professional advice on nutrition, posture correction, and long-term wellness planning for safe, effective progress.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="key-round"></i>
</div>
<div>
<p className="text-sm font-medium">Changing Rooms</p>
<p className="text-xs text-neutral-600">Lockers, showers, towels</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Spacious facilities with private lockers, modern showers, hairdryers, and complimentary fresh towels.
            </div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="cup-soda"></i>
</div>
<div>
<p className="text-sm font-medium">Fitness Bar</p>
<p className="text-xs text-neutral-600">Recovery shakes &amp; snacks</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-700">
              Fresh protein shakes, smoothies, herbal teas, and light bites designed to refuel and restore.
            </div>
</details>
</div>
</section>

<section className="mt-8" id="treatments">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<h2 className="text-xl font-semibold tracking-tight">Spa Treatments</h2>
</div>
<p className="mt-2 text-[15px] leading-6 text-neutral-700">
          Time-honored techniques and premium products in a calming atmosphere of complete relaxation.
        </p>
<div className="mt-4 space-y-3">

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="hand"></i>
</div>
<div>
<p className="text-sm font-medium">Massage Therapies</p>
<p className="text-xs text-neutral-600">From gentle to deep relief</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<ul className="space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Swedish Massage – gentle, full-body relaxation and circulation boost</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Deep Tissue Massage – targeted pressure for chronic tension and posture</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Aromatherapy Massage – essential oils to calm, balance, and improve sleep</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Hot Stone Massage – heated stones to melt fatigue and relax muscles</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Reflexology – pressure on feet/hands to stimulate energy pathways</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check-circle-2"></i>Couples Massage – synchronized relaxation in a private suite</li>
</ul>
</div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="droplet"></i>
</div>
<div>
<p className="text-sm font-medium">Body Treatments</p>
<p className="text-xs text-neutral-600">Detox, exfoliate, and firm</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<ul className="space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Detox Body Wrap – mineral-rich mask and wrap to draw out toxins</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Exfoliating Body Scrub – salt/sugar polish for a silky glow</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Slimming &amp; Firming Ritual – targeted techniques to enhance elasticity</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Hammam Ritual – steam, exfoliation, and foamy massage</li>
</ul>
</div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="face"></i>
</div>
<div>
<p className="text-sm font-medium">Facials &amp; Skin Care</p>
<p className="text-xs text-neutral-600">Hydrate, cleanse, brighten</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<ul className="space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Hydrating Glow Facial – deep moisturization for radiant skin</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Anti-Aging Facial – firms, boosts collagen, reduces fine lines</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Deep Cleansing Facial – purifies pores and balances oils</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Brightening Therapy – targets pigmentation for clarity</li>
</ul>
</div>
</details>

<details className="group rounded-xl border border-neutral-200 bg-white">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg border border-neutral-200 flex items-center justify-center">
<i className="h-4 w-4" data-lucide="scissors"></i>
</div>
<div>
<p className="text-sm font-medium">Beauty &amp; Grooming</p>
<p className="text-xs text-neutral-600">Nails, hair, and makeovers</p>
</div>
</div>
<i className="h-5 w-5 text-neutral-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<ul className="space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Nails &amp; Hair Studio – salon-quality manicures, pedicures, hairstyling</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5 text-neutral-800" data-lucide="check"></i>Makeover Services – hair, makeup, and touch-ups for special moments</li>
</ul>
</div>
</details>
</div>
</section>

<section className="mt-8" id="wellness">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="leaf"></i>
<h2 className="text-xl font-semibold tracking-tight">Wellness Facilities</h2>
</div>
<p className="mt-2 text-[15px] leading-6 text-neutral-700">
          Extend your relaxation in serene surroundings designed to restore balance.
        </p>
<div className="mt-4 space-y-2">
<div className="rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="flame"></i>
<div>
<p className="text-sm font-medium">Sauna &amp; Steam Rooms</p>
<p className="text-xs text-neutral-600">Heat therapy to relax muscles and cleanse the skin</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="waves"></i>
<div>
<p className="text-sm font-medium">Jacuzzi Pools</p>
<p className="text-xs text-neutral-600">Hydrotherapy jets to ease soreness and stress</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="sparkles"></i>
<div>
<p className="text-sm font-medium">Hammam (Turkish Bath)</p>
<p className="text-xs text-neutral-600">Steam, exfoliation, and foamy massage rituals</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="heart"></i>
<div>
<p className="text-sm font-medium">Relaxation Lounge</p>
<p className="text-xs text-neutral-600">Quiet sanctuary with soft music and herbal teas</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors">
<div className="flex items-center gap-3">
<i className="h-5 w-5" data-lucide="cup-soda"></i>
<div>
<p className="text-sm font-medium">Phyto-Bar</p>
<p className="text-xs text-neutral-600">Fresh juices, herbal infusions, and fruit blends</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8" id="journeys">
<div className="flex items-center gap-2">
<i className="h-5 w-5" data-lucide="diamond"></i>
<h2 className="text-xl font-semibold tracking-tight">Signature Spa Journeys</h2>
</div>
<p className="mt-2 text-[15px] leading-6 text-neutral-700">
          Carefully crafted experiences in BRONZE (standard cosmetics) or SILVER (Elemis premium products).
        </p>
<div className="mt-4 space-y-4">

<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Calming aromatherapy setup" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[17px] font-semibold tracking-tight">Journey of Serenity</h3>
<div className="inline-flex items-center gap-1 text-xs text-neutral-600">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>2h</span>
</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Herbal welcome drink</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Steam or sauna preparation</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Aromatherapy massage to calm the nervous system</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Hydrating facial for radiant skin</li>
</ul>
<p className="mt-3 text-xs text-neutral-600">Best for: Unwinding, de-stressing, and recharging.</p>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900 outline-none ring-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 transition-colors">Book Serenity</button>
<button aria-label="Add to favorites" className="h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors inline-flex items-center justify-center">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Detox ritual with sea salt and botanicals" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[17px] font-semibold tracking-tight">Journey of Renewal</h3>
<div className="inline-flex items-center gap-1 text-xs text-neutral-600">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>2.5h</span>
</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Detoxifying herbal infusion</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Jacuzzi hydrotherapy</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Dead Sea salt scrub exfoliation</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Mineral-rich body wrap</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Finishing deep tissue massage</li>
</ul>
<p className="mt-3 text-xs text-neutral-600">Best for: Purifying, energizing, and feeling fully recharged.</p>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-300 transition-colors">Book Renewal</button>
<button aria-label="Add to favorites" className="h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors inline-flex items-center justify-center">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Luxurious hot stone massage setting" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[17px] font-semibold tracking-tight">Journey of Indulgence</h3>
<div className="inline-flex items-center gap-1 text-xs text-neutral-600">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>3h</span>
</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Hammam-inspired cleansing ritual</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Exfoliating body polish</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Hot stone massage</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Anti-aging facial</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Relaxation Lounge with herbal tea</li>
</ul>
<p className="mt-3 text-xs text-neutral-600">Best for: An immersive escape that nourishes body and soul.</p>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-300 transition-colors">Book Indulgence</button>
<button aria-label="Add to favorites" className="h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors inline-flex items-center justify-center">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>

<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white">
<img alt="Romantic spa suite for two" className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-[17px] font-semibold tracking-tight">Journey for Two</h3>
<div className="inline-flex items-center gap-1 text-xs text-neutral-600">
<i className="h-4 w-4" data-lucide="clock"></i>
<span>2.5h</span>
</div>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Private welcome ritual with sparkling herbal infusions</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Shared jacuzzi experience</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Couples aromatherapy massage</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Brightening facial tailored for each guest</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check-circle-2"></i>Private lounge relaxation with refreshments</li>
</ul>
<p className="mt-3 text-xs text-neutral-600">Best for: Celebrations and quality time together.</p>
<div className="mt-4 flex items-center gap-2">
<button className="flex-1 h-10 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 active:bg-neutral-900 focus-visible:ring-2 focus-visible:ring-neutral-300 transition-colors">Book for Two</button>
<button aria-label="Add to favorites" className="h-10 w-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors inline-flex items-center justify-center">
<i className="h-5 w-5" data-lucide="heart"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8 mb-8">
<div className="rounded-xl border border-neutral-200 p-4 bg-white">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-700" data-lucide="info"></i>
<p className="text-sm font-medium">Good to know</p>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i>Please arrive 15 minutes early to unwind.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i>Kindly inform us of any health conditions.</li>
<li className="flex gap-2"><i className="h-4 w-4 mt-0.5" data-lucide="check"></i>Couples suites and ladies-only gym available.</li>
</ul>
</div>
</section>
</main>

<div className="fixed inset-x-0 bottom-0 z-50 bg-white/95 backdrop-blur border-t border-neutral-200">
<div className="max-w-md mx-auto px-4 py-3">
<div className="flex gap-2">
<button className="flex-1 h-11 rounded-lg border border-neutral-200 hover:bg-neutral-50 active:bg-neutral-100 transition-colors inline-flex items-center justify-center gap-2">
<i className="h-5 w-5" data-lucide="calendar"></i>
<span className="text-sm font-medium">Check Availability</span>
</button>
<button className="flex-1 h-11 rounded-lg bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-900 transition-colors inline-flex items-center justify-center gap-2">
<i className="h-5 w-5" data-lucide="wand-2"></i>
<span className="text-sm font-medium">Book Treatment</span>
</button>
</div>
</div>
</div>


    </>
  );
}
