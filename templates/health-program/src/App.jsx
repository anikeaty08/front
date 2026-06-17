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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-80" data-alpha-mask="56" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 56%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 56%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div></div>

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600 text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="text-lg font-semibold tracking-tight text-slate-900">Smart Lean</span>
</div>
<a className="hidden transition hover:bg-slate-800 md:flex items-center gap-2 text-sm font-medium text-white bg-green-600 rounded-full px-5 py-2" href="https://payhip.com/b/Efm8W">
<span className="">Buy Now</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-24 md:pt-32">

<div className="-top-24 -right-24 bg-emerald-50 opacity-50 w-96 h-96 rounded-full absolute blur-3xl"></div>
<div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-blue-50 blur-3xl opacity-50"></div>
<div className="mx-auto max-w-5xl px-6 text-center relative z-10">

<div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-2 shadow-sm">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
</div>
<iconify-icon className="text-emerald-700 text-lg" icon="solar:user-id-linear"></iconify-icon>
<span className="text-sm font-medium text-emerald-800">24/7 Personal Coach Included. Real human support.</span>
</div>

<h1 className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
                Transform Your Body<br/>
<span className="text-slate-400">Without Dieting.</span><br/>
<span className="text-emerald-600">Without Cardio.</span>
</h1>

<p className="mx-auto mb-10 max-w-2xl text-xl font-light leading-relaxed text-slate-600">
                A revolutionary lean-body system based on biology — designed by Dr. Julian. Tested for 1 full year on 200 people with a <span className="font-medium text-slate-900">100% success rate</span>.
            </p>

<div className="mb-12 flex flex-wrap justify-center gap-4 text-lg text-slate-700 md:gap-8">
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Zero Diet</span>
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Zero Cardio</span>
<span className="flex items-center gap-2"><iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon> Zero Calorie Counting</span>
</div>

<div className="flex flex-col items-center">
<a className="btn-pulse group relative inline-flex items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-5 text-xl font-medium text-white shadow-xl shadow-emerald-200 transition-all hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-2xl" href="https://payhip.com/b/Efm8W">
<span>Buy Now – Start With A Coach</span>
<iconify-icon className="text-2xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="mt-4 flex items-center gap-6 text-sm text-slate-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> Secure Checkout</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon> Instant Access</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Why Typical Fitness Fails Biologically</h2>
<p className="mt-4 text-xl text-slate-600">This isn't an influencer trend. It's biological intelligence.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-500">
<iconify-icon className="text-2xl" icon="solar:forbidden-circle-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-slate-900">Diets Lower Metabolism</h3>
<p className="text-lg leading-relaxed text-slate-500">Calorie restriction signals your body to store fat for survival. You lose weight, then gain it back double. It's a biological trap.</p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
<iconify-icon className="text-2xl" icon="solar:battery-low-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-slate-900">Cardio Increases Cortisol</h3>
<p className="text-lg leading-relaxed text-slate-500">Excessive cardio spikes stress hormones, causing exhaustion and muscle loss while holding onto stubborn belly fat.</p>
</div>

<div className="relative rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8 shadow-sm transition hover:shadow-md">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
<iconify-icon className="text-2xl" icon="solar:atom-linear"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-medium text-slate-900">The Smart Lean Way</h3>
<p className="text-lg leading-relaxed text-slate-600">We trigger body recomposition signals without stress. Your body burns fat naturally to fuel lean muscle growth.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white py-24">
<div className="mx-auto max-w-5xl px-6 text-center">
<h2 className="mb-12 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Real Body Recomposition</h2>
<div className="grid gap-12 md:grid-cols-2 items-center">
<div className="relative aspect-square w-full max-w-sm mx-auto rounded-3xl bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-200 to-slate-100 opacity-50"></div>
<div className="text-center z-10 opacity-40">
<iconify-icon className="text-[8rem] text-slate-400 mb-4" icon="solar:user-linear"></iconify-icon>
<p className="text-2xl font-medium tracking-tight">Before</p>
<p className="text-lg">High Body Fat %</p>
</div>
</div>
<div className="relative aspect-square w-full max-w-sm mx-auto rounded-3xl bg-emerald-50 flex items-center justify-center overflow-hidden border border-emerald-100 shadow-xl shadow-emerald-100">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-100 to-emerald-50 opacity-50"></div>
<div className="text-center z-10 text-emerald-900">
<iconify-icon className="text-[8rem] text-emerald-600 mb-4" icon="solar:user-linear"></iconify-icon>
<p className="text-2xl font-medium tracking-tight">After 12 Weeks</p>
<p className="text-lg text-emerald-700">Lean Muscle &amp; Low Fat</p>
<div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-medium text-emerald-600 shadow-sm">
<iconify-icon className="text-lg" icon="solar:check-circle-linear"></iconify-icon> No Cardio Used
                        </div>
</div>
</div>
</div>
<p className="mt-8 text-lg text-slate-500 italic">"Results achieved without calorie deficits or treadmills."</p>
</div>
</section>

<section className="bg-slate-900 py-24 text-white">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-12 text-center md:grid-cols-4">
<div>
<div className="mb-2 text-5xl font-semibold tracking-tight text-emerald-400">1 Year</div>
<div className="text-lg font-light text-slate-400">Clinical Testing Phase</div>
</div>
<div>
<div className="mb-2 text-5xl font-semibold tracking-tight text-white">200</div>
<div className="text-lg font-light text-slate-400">Participants (100 Men/100 Women)</div>
</div>
<div>
<div className="mb-2 text-5xl font-semibold tracking-tight text-white">100%</div>
<div className="text-lg font-light text-slate-400">Success Rate</div>
</div>
<div>
<div className="mb-2 text-5xl font-semibold tracking-tight text-emerald-400">10k+</div>
<div className="text-lg font-light text-slate-400">Global Sales in 2 Months</div>
</div>
</div>
<div className="mt-16 flex flex-wrap justify-center gap-6 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0">
<span className="flex items-center gap-2 text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon> Global Health Award</span>
<span className="flex items-center gap-2 text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:medal-ribbon-star-linear"></iconify-icon> Excellence in Biology</span>
<span className="flex items-center gap-2 text-xl font-medium tracking-tight"><iconify-icon className="text-2xl" icon="solar:globe-linear"></iconify-icon> International Cert.</span>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Success Stories</h2>
<div className="columns-1 gap-6 md:columns-2 lg:columns-3 space-y-6">

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-medium">JD</div>
<div>
<p className="font-medium text-slate-900">James D.</p>
<p className="text-sm text-slate-400">Lost 15lbs fat</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"I hated running. This course promised no cardio, and it delivered. I'm leaner than I was in my 20s."</p>
</div>

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">SM</div>
<div>
<p className="font-medium text-slate-900">Sarah M.</p>
<p className="text-sm text-slate-400">Body Recomposition</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"Finally, a doctor who understands female hormones. No starvation, just real food and smart movement."</p>
</div>

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-medium">MK</div>
<div>
<p className="font-medium text-slate-900">Michael K.</p>
<p className="text-sm text-slate-400">Gained Muscle Definition</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"The PDF is gold. Straight to the point. The coaching access is worth 10x the price."</p>
</div>

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-medium">EL</div>
<div>
<p className="font-medium text-slate-900">Emma L.</p>
<p className="text-sm text-slate-400">Energy Increase</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"I used to nap every afternoon. Now I have stable energy all day and the fat is melting off."</p>
</div>

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 font-medium">DR</div>
<div>
<p className="font-medium text-slate-900">David R.</p>
<p className="text-sm text-slate-400">Busy Dad</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"Works perfectly with my 60-hour work week. No gym commute needed."</p>
</div>

<div className="break-inside-avoid rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-center gap-4">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 font-medium">LJ</div>
<div>
<p className="font-medium text-slate-900">Lisa J.</p>
<p className="text-sm text-slate-400">Beginner</p>
</div>
</div>
<p className="mt-4 text-lg text-slate-600">"I was intimidated at first, but the instructions are so simple. Anyone can do this."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-6xl px-6">
<div className="grid gap-12 lg:grid-cols-2">

<div>
<h3 className="mb-8 text-3xl font-semibold tracking-tight text-slate-900">What's Inside The System</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="rounded-full bg-slate-100 p-2 text-slate-700"><iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon></div>
<div>
<p className="text-xl font-medium text-slate-900">The Step-by-Step PDF System</p>
<p className="text-lg text-slate-600">Complete transformation blueprint.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="rounded-full bg-slate-100 p-2 text-slate-700"><iconify-icon className="text-2xl" icon="solar:home-2-linear"></iconify-icon></div>
<div>
<p className="text-xl font-medium text-slate-900">Home-Based Protocol</p>
<p className="text-lg text-slate-600">No equipment required. Designed for real life.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="rounded-full bg-slate-100 p-2 text-slate-700"><iconify-icon className="text-2xl" icon="solar:infinity-linear"></iconify-icon></div>
<div>
<p className="text-xl font-medium text-slate-900">Lifetime Access</p>
<p className="text-lg text-slate-600">One payment, yours forever.</p>
</div>
</li>
</ul>
</div>

<div className="relative overflow-hidden rounded-3xl bg-emerald-900 p-8 text-white shadow-2xl md:p-12">
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-emerald-500 blur-3xl opacity-20"></div>
<div className="relative z-10">
<div className="mb-6 inline-flex rounded-lg bg-emerald-800/50 border border-emerald-700 px-3 py-1 text-sm font-medium text-emerald-300">
                            Premium Bonus Included
                        </div>
<h3 className="mb-4 text-3xl font-semibold tracking-tight">24/7 Personal Coach</h3>
<p className="mb-8 text-lg text-emerald-100 opacity-90">This is not a bot. You get direct access to a real human coach for personalized guidance, progress checks, and accountability.</p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:chat-line-linear"></iconify-icon>
<span className="text-lg">Unlimited Questions</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:user-check-linear"></iconify-icon>
<span className="text-lg">Personalized Adjustments</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:clock-circle-linear"></iconify-icon>
<span className="text-lg">Fast Response Time</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-3xl px-6">
<h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-slate-900">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl border border-slate-200 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="text-lg font-medium">Does this really work without dieting?</h3>
<iconify-icon className="text-xl transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-lg leading-relaxed text-slate-600">Yes. We focus on nutrient density and hormonal signaling rather than caloric restriction. You will eat real food until you are satisfied.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="text-lg font-medium">Is it safe for beginners?</h3>
<iconify-icon className="text-xl transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-lg leading-relaxed text-slate-600">Absolutely. The system is designed to be low-impact and sustainable. It is suitable for all fitness levels.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="text-lg font-medium">How fast will I see results?</h3>
<iconify-icon className="text-xl transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-lg leading-relaxed text-slate-600">Most users feel an energy shift within 3 days and visual changes within 14 days.</p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="text-lg font-medium">What if I don't like it?</h3>
<iconify-icon className="text-xl transition group-open:-rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<p className="mt-4 text-lg leading-relaxed text-slate-600">We offer a 14-day satisfaction guarantee. If you don't feel the difference, we refund you.</p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-900">
<iconify-icon className="text-4xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="mb-4 text-3xl font-semibold tracking-tight text-slate-900">14-Day Satisfaction Guarantee</h2>
<p className="text-xl text-slate-600">If you don't feel a real biological difference, get a full refund. No questions asked.</p>
</div>
</section>

<section className="border-t border-slate-100 bg-slate-50 py-20 pb-40">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="mb-8 inline-flex items-center gap-2 rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-700">
<iconify-icon className="text-lg" icon="solar:hourglass-line-linear"></iconify-icon> Coaching spots are limited
            </div>
<h2 className="mb-8 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">Start Your Transformation Today</h2>
<a className="btn-pulse inline-flex flex-col items-center justify-center rounded-xl bg-emerald-500 px-12 py-5 text-white shadow-xl shadow-emerald-200 transition-transform hover:-translate-y-1 hover:bg-emerald-600" href="https://payhip.com/b/Efm8W">
<span className="text-2xl font-semibold">BUY NOW – INSTANT ACCESS</span>
<span className="mt-1 text-sm opacity-90">Includes 24/7 Personal Coach</span>
</a>
<p className="mt-6 text-sm text-slate-500">Secure Checkout • Instant Digital Delivery</p>
</div>
</section>

<div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white/90 p-4 backdrop-blur-lg md:hidden">
<a className="flex w-full items-center justify-between rounded-xl bg-slate-900 px-6 py-3 text-white shadow-lg transition active:scale-95" href="https://payhip.com/b/Efm8W">
<span className="flex flex-col text-left">
<span className="text-sm font-medium opacity-80">Limited Spots</span>
<span className="font-bold">Buy Now</span>
</span>
<div className="flex items-center gap-2">
<span className="font-semibold">Get Started</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
<footer className="bg-white py-12 text-center border-t border-slate-100">
<div className="flex items-center justify-center gap-2 mb-4 opacity-50">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
<span className="font-medium">Smart Lean</span>
</div>
<p className="text-sm text-slate-400">© 2024 The Smart Lean Strategy. All rights reserved.</p>
</footer>

    </>
  );
}
