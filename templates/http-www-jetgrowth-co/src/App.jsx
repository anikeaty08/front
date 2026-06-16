import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize lucide icons
    document.addEventListener('DOMContentLoaded', function () {
      if (window.lucide) {
        window.lucide.createIcons();
      }
    });

    // Set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // One-time 3D animation + sequence animation (direction: normal)
    (function () {
      const card = document.getElementById('hero-3d-card');
      const progress = document.getElementById('sequence-progress');
      const stepEl = document.getElementById('sequence-step');
      const labelEl = document.getElementById('sequence-label');

      if (!card || !progress || !stepEl || !labelEl) return;

      const sequenceSteps = [
        'Identifying your ICP & total addressable market',
        'Building clean, targeted lead lists',
        'Deploying AI-personalized multichannel sequences',
        'Routing warm replies straight to your inbox or CRM'
      ];
      const totalSteps = sequenceSteps.length;
      const totalDuration = 7000; // ms
      const start = performance.now();

      let animationDone = false;

      function animate(now) {
        const elapsed = now - start;
        const t = Math.min(elapsed / totalDuration, 1); // 0 → 1

        // Card subtle 3D tilt in and settle
        const entrance = Math.min(t / 0.4, 1); // entrance for first 40%
        const easeOut = 1 - Math.pow(1 - entrance, 3);
        const rotateX = (1 - easeOut) * 8; // degrees
        const rotateY = (1 - easeOut) * -6;
        const translateY = (1 - easeOut) * 12;

        card.style.transition = 'transform 0s';
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(${translateY}px)`;

        // Progress bar and step text
        const progressValue = t;
        progress.style.width = (progressValue * 100) + '%';

        const currentStepIndex = Math.min(Math.floor(progressValue * totalSteps), totalSteps - 1);
        stepEl.textContent = currentStepIndex + 1;
        labelEl.textContent = sequenceSteps[currentStepIndex];

        if (t < 1) {
          requestAnimationFrame(animate);
        } else if (!animationDone) {
          // Final settle state after animation completes once
          animationDone = true;
          card.style.transition = 'transform 0.6s ease-out';
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        }
      }

      requestAnimationFrame(animate);
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="isolate flex-1 overflow-hidden relative">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>
<div className="absolute top-40 -right-10 h-72 w-72 rounded-full bg-indigo-300/30 blur-3xl"></div>
<div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/40 blur-2xl"></div>
</div>

<header className="w-full">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 flex items-center justify-between gap-4">
<div className="flex items-center gap-2 sm:gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/90 shadow-md shadow-indigo-500/30 backdrop-blur" style={{letterSpacing: '-0.08em'}}>
<span className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, \'Times New Roman\', serif'}}>JG</span>
</div>
<div className="flex flex-col">
<span className="text-sm sm:text-base font-medium tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif'}}>JetGrowth</span>
<span className="sm:text-sm leading-snug text-xs text-neutral-500" style={{}}>Done-for-you outbound for B2B SaaS</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#how-it-works" style={{}}>How it works</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#results" style={{}}>Results</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#testimonials" style={{}}>Clients</a>
<a className="text-neutral-600 hover:text-neutral-900 transition-colors" href="#pricing" style={{}}>Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-xl border border-indigo-500/40 bg-white/40 px-4 py-1.5 text-sm font-medium text-indigo-700 shadow-md shadow-indigo-200/60 backdrop-blur hover:bg-white/70 transition">
<span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span>See a live system</span>
</button>
<a className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-md shadow-indigo-400/60 hover:bg-indigo-600 transition" href="#booking">
<span>Book 15-min fit call</span>
</a>
</div>
</div>
</header>

<main className="sm:px-6 lg:px-8 sm:pb-24 sm:pt-14 lg:pt-16 max-w-6xl mr-auto ml-auto pt-8 pr-4 pb-16 pl-4">
<section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

<div className="space-y-7 sm:space-y-8">
<div className="inline-flex items-center rounded-full border border-indigo-200/70 bg-indigo-50/60 px-3 py-1 text-xs sm:text-sm text-indigo-700 shadow-md shadow-indigo-100/80 backdrop-blur">
<span className="mr-1.5 inline-flex h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span className="font-medium">Done-for-you AI outbound • B2B SaaS &amp; high-ticket experts</span>
</div>
<div className="space-y-4">
<h1 className="sm:text-4xl lg:text-5xl text-3xl text-neutral-900 tracking-tight" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>Stop hunting for leads. <span className="block text-indigo-600">Wake up to booked demos.</span></h1>
<p className="sm:text-lg leading-relaxed text-base text-neutral-700 max-w-xl">
              JetGrowth builds you a predictable, AI-powered outbound system that fills your calendar with qualified prospects—so you stop begging for attention and start choosing who you want to close.
            </p>
</div>
<ul className="grid gap-3 text-sm sm:text-base text-neutral-700" style={{}}>
<li className="flex items-start gap-2.5">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-md shadow-blue-100/70">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p><span className="font-semibold text-neutral-900" style={{}}>AI-crafted outbound + human strategy</span> so every message feels tailored, not templated spam.</p>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-md shadow-blue-100/70">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p className=""><span className="font-semibold text-neutral-900" style={{}}>Done-for-you pipeline</span> that drops sales-ready conversations into your inbox or CRM daily.</p>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-md shadow-blue-100/70">
<svg className="lucide lucide-check h-3 w-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<p><span className="font-semibold text-neutral-900" style={{}}>Predictable, trackable, data-driven</span> so you can forecast pipeline instead of guessing.</p>
</li>
</ul>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">

<a className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-white shadow-md shadow-indigo-400/60 hover:bg-indigo-600 transition w-full sm:w-auto" href="#booking-form" id="booking">
<span>Build my outbound system</span>
<svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="inline-flex items-center justify-center rounded-xl border border-indigo-100 bg-white/80 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium text-neutral-900 shadow-md shadow-neutral-200/70 backdrop-blur hover:bg-white transition w-full sm:w-auto" style={{}}>
<svg className="lucide lucide-play mr-2 h-4 w-4 text-indigo-500" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<span>Watch 3-min breakdown</span>
</button>
</div>
<div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-500" style={{}}>
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full border border-white/80 bg-indigo-100/80 shadow-md shadow-indigo-100/70"></div>
<div className="h-7 w-7 rounded-full border border-white/80 bg-indigo-200/80 shadow-md shadow-indigo-100/70"></div>
<div className="h-7 w-7 rounded-full border border-white/80 bg-neutral-100/80 shadow-md shadow-neutral-100/70 flex items-center justify-center text-[0.6rem] font-medium text-neutral-600" style={{}}>+12</div>
</div>
<div className="flex flex-col leading-tight">
<span className="font-medium text-neutral-800" style={{}}>26+ active client systems</span>
<span>Avg. <span className="font-semibold text-blue-600">3–7 demos/week</span> per seat</span>
</div>
</div>
</div>
<p className="text-xs sm:text-sm text-neutral-500 max-w-lg" style={{}}>
            If we don’t generate qualified conversations in the first 60 days, you don’t pay the management fee. Simple.
          </p>
</div>

<div className="relative flex justify-center lg:justify-end">
<div className="relative w-full max-w-md lg:max-w-lg">

<div className="group relative rounded-3xl border border-white/60 bg-white/40 shadow-md shadow-indigo-200/70 backdrop-blur-xl overflow-hidden transform-gpu will-change-transform" id="hero-3d-card">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white/60 to-neutral-50/60 pointer-events-none" style={{}}></div>
<div className="relative p-6 sm:p-7 space-y-5">

<div className="flex items-start justify-between gap-3">
<div className="space-y-1.5">
<p className="sm:text-sm text-xs font-medium text-neutral-500">Your outbound, after JetGrowth</p>
<p className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>
                      Pipeline on autopilot
                    </p>
</div>
<div className="flex flex-col items-end rounded-2xl border border-indigo-100/80 bg-indigo-50/80 px-3 py-2 shadow-md shadow-indigo-100/80">
<span className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>Next 30 days</span>
<div className="flex items-baseline gap-1">
<span className="text-lg sm:text-xl font-semibold text-indigo-600">38</span>
<span className="text-[0.65rem] sm:text-xs text-neutral-600" style={{}}>sales calls</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-3 text-xs sm:text-sm">
<div className="rounded-2xl border border-neutral-100/80 bg-white/80 p-3 shadow-md shadow-neutral-100/80" style={{}}>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>Reply rate</p>
<p className="text-lg sm:text-xl font-semibold text-neutral-900" style={{}}>18.7%</p>
<p className="text-[0.65rem] sm:text-xs text-blue-600 mt-0.5">+4.3% vs last month</p>
</div>
<div className="rounded-2xl border border-neutral-100/80 bg-white/80 p-3 shadow-md shadow-neutral-100/80" style={{}}>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>Booked demos</p>
<p className="text-lg sm:text-xl font-semibold text-neutral-900" style={{}}>21</p>
<p className="text-[0.65rem] sm:text-xs text-blue-600 mt-0.5">3.1x baseline</p>
</div>
<div className="rounded-2xl border border-neutral-100/80 bg-white/80 p-3 shadow-md shadow-neutral-100/80" style={{}}>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>New pipeline</p>
<p className="text-lg sm:text-xl font-semibold text-neutral-900" style={{}}>$128k</p>
<p className="text-[0.65rem] sm:text-xs text-neutral-500 mt-0.5" style={{}}>last 45 days</p>
</div>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>
<span>AI outbound sequence</span>
<span>Step <span className="font-semibold text-neutral-800" id="sequence-step" style={{}}>1</span> / 4</span>
</div>
<div className="relative h-2 rounded-full bg-neutral-100/80 overflow-hidden" style={{}}>
<div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-500" id="sequence-progress"></div>
</div>
<div className="flex items-center justify-between text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>
<span id="sequence-label">Identifying your ICP &amp; total addressable market</span>
<span className="inline-flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span className="font-medium text-neutral-700" style={{}}>Running</span>
</span>
</div>
</div>

<div className="rounded-2xl border border-neutral-100/80 bg-neutral-50/70 p-3 shadow-md shadow-neutral-100/80 space-y-2" style={{}}>
<div className="flex items-center justify-between text-xs sm:text-sm">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-indigo-100/90 flex items-center justify-center">
<svg className="lucide lucide-inbox h-3.5 w-3.5 text-indigo-500" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<span className="font-medium text-neutral-800" style={{}}>Today’s new replies</span>
</div>
<span className="inline-flex items-center rounded-full bg-white/70 px-2 py-0.5 text-[0.65rem] text-neutral-500" style={{}}>
                      7 new • 3 warm
                    </span>
</div>
<div className="space-y-1.5 text-[0.7rem] sm:text-xs">
<div className="flex items-center justify-between rounded-xl bg-white/90 px-2.5 py-1.5">
<div className="flex flex-col">
<span className="font-medium text-neutral-900" style={{}}>VP Sales • SaaS (Series B)</span>
<span className="text-neutral-500 truncate" style={{}}>“This is actually one of the better outbound messages I’ve seen...”</span>
</div>
<span className="ml-3 rounded-full bg-blue-50 px-2 py-0.5 text-[0.6rem] text-blue-700">Book demo</span>
</div>
<div className="flex items-center justify-between rounded-xl bg-white/70 px-2.5 py-1.5">
<div className="flex flex-col">
<span className="font-medium text-neutral-900" style={{}}>Founder • High-ticket agency</span>
<span className="text-neutral-500 truncate" style={{}}>“Interested — can you share a quick breakdown and pricing?”</span>
</div>
<span className="ml-3 rounded-full bg-indigo-50 px-2 py-0.5 text-[0.6rem] text-indigo-700">Warm</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 border-t border-neutral-100/80 mt-1" style={{}}>
<div className="flex -space-x-2">
<div className="h-6 w-6 rounded-full border border-white/80 bg-neutral-200/90 shadow-md shadow-neutral-100/80" style={{}}></div>
<div className="h-6 w-6 rounded-full border border-white/80 bg-neutral-300/90 shadow-md shadow-neutral-100/80" style={{}}></div>
<div className="h-6 w-6 rounded-full border border-white/80 bg-neutral-100/90 shadow-md shadow-neutral-100/80 flex items-center justify-center text-[0.55rem] font-medium text-neutral-600" style={{}}>
                      +9
                    </div>
</div>
<div className="flex flex-col text-[0.65rem] sm:text-xs text-neutral-500 leading-tight" style={{}}>
<span>Used by founders &amp; GTM teams at</span>
<span className="font-medium text-neutral-700" style={{}}>[SaaS Logo], [Agency Logo], [DevTools Logo], [Fintech Logo]</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute -left-4 -bottom-8 sm:-left-8 sm:-bottom-10 w-40 sm:w-48">
<div className="rounded-2xl border border-white/60 bg-white/40 shadow-md shadow-indigo-100/90 backdrop-blur p-2.5 space-y-1.5">
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>JetGrowth score</p>
<div className="flex items-center justify-between">
<span className="text-base sm:text-lg font-semibold text-neutral-900" style={{}}>92/100</span>
<span className="rounded-full bg-blue-50 px-2 py-0.5 text-[0.6rem] text-blue-700">Ready to scale</span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-4 -top-6 sm:-right-8 sm:-top-8 w-32 sm:w-40">
<div className="rounded-2xl border border-white/60 bg-indigo-500/90 shadow-md shadow-indigo-400/80 backdrop-blur p-2.5 space-y-1.5 text-white">
<p className="text-[0.65rem] sm:text-xs text-indigo-100/90">This week’s booked</p>
<div className="flex items-center justify-between">
<span className="text-base sm:text-lg font-semibold">14 demos</span>
<svg className="lucide lucide-trending-up h-4 w-4 text-emerald-200" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 space-y-6" id="results">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
<p className="text-sm sm:text-base font-medium text-neutral-600 uppercase tracking-[0.2em]" style={{}}>Trusted by B2B growth teams</p>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-400" style={{}}>
<span className="font-semibold tracking-tight text-neutral-500" style={{}}>[LOGO] SaaSFlow</span>
<span className="font-semibold tracking-tight text-neutral-500" style={{}}>[LOGO] RevBridge</span>
<span className="font-semibold tracking-tight text-neutral-500" style={{}}>[LOGO] ApexCloud</span>
<span className="font-semibold tracking-tight text-neutral-500" style={{}}>[LOGO] SignalForge</span>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-10 lg:gap-14 items-start" id="how-it-works">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>
            A predictable outbound engine built around your offer, ICP, and sales team
          </h2>
<p className="text-base sm:text-lg text-neutral-700 leading-relaxed" style={{}}>
            Most outbound fails because it’s random. Wrong list, generic scripts, no feedback loop. JetGrowth installs a system: clean data, sharp positioning, adaptive AI messaging, and ruthless testing — all done for you.
          </p>
<div className="space-y-4 sm:space-y-5">
<div className="flex gap-3">
<div className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-md shadow-indigo-100/80">
<span className="text-xs font-semibold">1</span>
</div>
<div className="space-y-1">
<h3 className="text-base sm:text-lg font-medium text-neutral-900" style={{}}>Deep-dive &amp; pipeline model</h3>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
                  We map your offer, margins, sales capacity, and deal cycles into a clear pipeline target — then reverse engineer how much outbound you actually need to hit that number.
                </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-md shadow-indigo-100/80">
<span className="text-xs font-semibold">2</span>
</div>
<div className="space-y-1">
<h3 className="text-base sm:text-lg font-medium text-neutral-900" style={{}}>Data-first targeting &amp; list building</h3>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
                  We define your ICP, pull clean, multi-source data, and build live-updating prospect lists that match the exact accounts and titles your reps can actually close.
                </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-md shadow-indigo-100/80">
<span className="text-xs font-semibold">3</span>
</div>
<div className="space-y-1">
<h3 className="text-base sm:text-lg font-medium text-neutral-900" style={{}}>AI-personalized messaging &amp; automations</h3>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
                  We train AI on your best calls, case studies, and positioning so every touch—email, LinkedIn, or DM—sounds like your top closer, not a bot.
                </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 h-7 w-7 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-md shadow-indigo-100/80">
<span className="text-xs font-semibold">4</span>
</div>
<div className="space-y-1">
<h3 className="text-base sm:text-lg font-medium text-neutral-900" style={{}}>Live optimization &amp; revenue reporting</h3>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
                  Weekly tests, new angles, deliverability checks, and pipeline reports so you know exactly which sequences, markets, and messages are printing demos.
                </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-2">
<button className="inline-flex items-center justify-center rounded-full border border-neutral-200/80 bg-white/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-neutral-900 shadow-md shadow-neutral-200/80 backdrop-blur hover:bg-white transition" style={{}}>
<svg className="lucide lucide-file-text mr-1.5 h-3.5 w-3.5 text-indigo-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              View sample outbound system
            </button>
<span className="text-xs sm:text-sm text-neutral-500" style={{}}>Avg. setup time: <span className="font-semibold text-neutral-800" style={{}}>14–21 days</span></span>
</div>
</div>

<div className="space-y-4 sm:space-y-5" id="testimonials">
<div className="rounded-3xl border border-white/70 bg-white/60 shadow-md shadow-neutral-200/80 backdrop-blur-md p-5 sm:p-6 space-y-4" style={{}}>
<div className="flex items-center justify-between">
<p className="text-xs sm:text-sm font-medium text-neutral-500 uppercase tracking-[0.18em]" style={{}}>Client snapshots</p>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[0.65rem] text-blue-700">
<span className="mr-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                Revenue-positive in 60 days
              </span>
</div>
<div className="space-y-4 sm:space-y-5">
<div className="space-y-1.5">
<p className="text-sm sm:text-base text-neutral-700 italic" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif'}}>
                  “We went from ‘founder writing cold emails at midnight’ to a calendar actually worth defending. 6 weeks in, outbound is our #1 channel for new revenue.”
                </p>
<div className="flex items-center justify-between text-xs sm:text-sm text-neutral-500" style={{}}>
<div>
<p className="font-medium text-neutral-800" style={{}}>Founder, DevOps SaaS</p>
<p>$38k new MRR from JetGrowth pipeline</p>
</div>
<div className="text-right">
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>From:</p>
<p className="text-xs sm:text-sm font-medium text-neutral-800" style={{}}>0–1 demo/week → 5–8 demos/week</p>
</div>
</div>
</div>
<div className="border-t border-neutral-100/80 pt-3 grid gap-3 text-xs sm:text-sm" style={{}}>
<div className="flex items-center justify-between">
<span className="text-neutral-500" style={{}}>High-ticket agency</span>
<span className="font-medium text-neutral-900" style={{}}>3.4x pipeline in 90 days</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500" style={{}}>Sales-led SaaS (Series A)</span>
<span className="font-medium text-neutral-900" style={{}}>From 2 to 11 sales meetings/month</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-500" style={{}}>Consulting firm (&gt;$8k ACV)</span>
<span className="font-medium text-neutral-900" style={{}}>Outbound closed 5 new retainers</span>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/70 bg-indigo-50/80 shadow-md shadow-indigo-100/80 backdrop-blur-md p-5 sm:p-6 space-y-3">
<p className="text-sm sm:text-base font-medium text-neutral-900" style={{}}>Is JetGrowth a fit?</p>
<p className="text-xs sm:text-sm text-neutral-700" style={{}}>
              We work best with founders &amp; teams who:
            </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700" style={{}}>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" style={{}}></span>
<span className="">Sell B2B SaaS or services with <span className="font-semibold text-neutral-900" style={{}}>&gt;$3k LTV</span></span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" style={{}}></span>
<span>Have some proof: <span className="font-semibold text-neutral-900" style={{}}>case studies or happy clients</span></span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-neutral-400" style={{}}></span>
<span>Can handle <span className="font-semibold text-neutral-900" style={{}}>3–10 extra sales calls/week</span></span>
</li>
</ul>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20" id="pricing">
<div className="rounded-3xl border border-white/70 bg-white/70 shadow-md shadow-neutral-200/80 backdrop-blur p-5 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-10 items-start" style={{}}>
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>
              The JetGrowth outbound system
            </h2>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
              We install and operate your entire outbound engine — data, messaging, automations, optimization — for a flat monthly fee. No long-term lock-in, no hidden commissions.
            </p>
<ul className="space-y-2 text-sm sm:text-base text-neutral-700" style={{}}>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="">Custom outbound strategy, ICP, and offer positioning</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="">Multichannel sequences (email + LinkedIn + optional calling)</span>
</li>
<li className="flex items-start gap-2.5">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
<span className="">AI-personalized messaging trained on your best sales calls</span>
</li>
</ul>
</div>
<div className="rounded-2xl border border-indigo-100/80 bg-indigo-50/70 shadow-md shadow-indigo-100/90 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4">
<div className="flex items-baseline justify-between">
<div>
<p className="text-xs sm:text-sm font-medium text-indigo-700 uppercase tracking-[0.18em]">Engagement</p>
<p className="mt-1 text-xl sm:text-2xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>
                  Done-for-you outbound system
                </p>
</div>
<div className="text-right">
<p className="text-xs sm:text-sm text-neutral-500" style={{}}>Starting at</p>
<p className="text-2xl sm:text-3xl font-semibold text-neutral-900" style={{}}>$4.5k</p>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>per month + software</p>
</div>
</div>
<div className="rounded-xl border border-white/60 bg-white/60 p-3 sm:p-4 space-y-2 text-xs sm:text-sm text-neutral-700" style={{}}>
<p className="font-medium text-neutral-900" style={{}}>60-Day Pipeline Guarantee</p>
<p>If we don’t generate a consistent flow of qualified conversations in the first 60 days, we waive the management fee until we do.</p>
</div>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700" style={{}}>
<li className="flex items-center gap-2">
<svg className="lucide lucide-zap h-3.5 w-3.5 text-indigo-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>14–21 days to go live</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-target h-3.5 w-3.5 text-indigo-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span>Channel: outbound only (not ads)</span>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-users h-3.5 w-3.5 text-indigo-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Perfect for 1–10 person sales teams</span>
</li>
</ul>
<div className="mt-1 flex flex-col gap-3">
<a className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-neutral-900/30 hover:bg-black transition" href="#booking-form" style={{}}>
                Apply for a strategy call
                <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>
                We take on a limited number of new builds per month to keep performance high. If there’s a waitlist, we’ll tell you upfront.
              </p>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 mb-10 sm:mb-16" id="booking-form">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
<div className="space-y-4 sm:space-y-5">
<h2 className="text-2xl sm:text-3xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif', fontWeight: '400'}}>
              Let’s see if we can add 3–10 qualified sales calls per week for you
            </h2>
<p className="text-sm sm:text-base text-neutral-700" style={{}}>
              On this call, we’ll audit your current pipeline, walk through what an outbound system could look like for your offer, and only make an offer if we’re confident we can win with you.
            </p>
<ul className="space-y-2 text-sm sm:text-base text-neutral-700" style={{}}>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span>15–20 minutes • zero pressure, zero fluff</span>
</li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
<span>Leave with clear math on what outbound could do for your revenue</span>
</li>
</ul>
<div className="rounded-2xl border border-blue-100/80 bg-blue-50/70 shadow-md shadow-blue-100/80 backdrop-blur p-3 sm:p-4 text-xs sm:text-sm text-neutral-700" style={{}}>
<p className="font-medium text-neutral-900" style={{}}>Not ready to talk yet?</p>
<p>Drop your email and we’ll send a teardown of a real outbound system, with numbers, scripts, and funnel math.</p>
</div>
</div>
<div className="rounded-3xl border border-white/70 bg-white/80 shadow-md shadow-neutral-200/80 backdrop-blur p-5 sm:p-6 space-y-4" style={{}}>
<form className="space-y-3">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Name</label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="Jane Doe" style={{}} type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Work email</label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="you@company.com" style={{}} type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Company</label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="Company name" style={{}} type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Role</label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="Founder, Head of Sales, etc." style={{}} type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>What are you selling?</label>
<textarea className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="Short overview of your product/service, typical deal size, and who you sell to now." rows="3" style={{}}></textarea>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Biggest bottleneck right now</label>
<select className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" style={{}}>
<option>Not enough qualified leads</option>
<option>Inconsistent demo volume</option>
<option>Weak outbound conversion</option>
<option>Relying on referrals/word of mouth</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs sm:text-sm font-medium text-neutral-700" style={{}}>Rough monthly new revenue target from outbound</label>
<input className="w-full rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3 py-2 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-indigo-500/60 shadow-md shadow-neutral-100/80" placeholder="$20k, $50k, etc." style={{}} type="text"/>
</div>
<div className="flex items-start gap-2 pt-1">
<input className="mt-1 h-3.5 w-3.5 rounded border border-neutral-300 text-indigo-600 focus:ring-indigo-500/60" id="newsletter" style={{}} type="checkbox"/>
<label className="text-[0.7rem] sm:text-xs text-neutral-600" htmlFor="newsletter" style={{}}>
                  Also send me the free outbound teardown email series.
                </label>
</div>
<div className="pt-2 flex flex-col gap-3">
<button className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-400/70 hover:bg-indigo-600 transition" type="submit">
                  Request a strategy call
                  <svg className="lucide lucide-calendar ml-2 h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<p className="text-[0.65rem] sm:text-xs text-neutral-500" style={{}}>
                  After you submit, you’ll be redirected to book a time on our calendar. If we’re not a fit, we’ll tell you and share what we’d do in your shoes.
                </p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200/70 bg-white/70 backdrop-blur" style={{}}>
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-neutral-500" style={{}}>
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tight text-neutral-800" style={{fontFamily: '"Playfair Display", ui-serif, Georgia, "Times New Roman", serif'}}>JetGrowth</span>
<span>© <span id="year">2025</span></span>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="hover:text-neutral-800" href="#" style={{}}>Privacy</a>
<a className="hover:text-neutral-800" href="#" style={{}}>Terms</a>
<a className="hover:text-neutral-800" href="#" style={{}}>Contact</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
