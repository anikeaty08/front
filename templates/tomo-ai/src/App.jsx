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



  // —— Helpers
  const fmtNumber = (n) =>
    new Intl.NumberFormat().format(Math.round(Number.isFinite(n) ? n : 0));

  const fmtCurrency = (n) =>
    new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(Math.max(0, Number.isFinite(n) ? n : 0));

  const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
  const toNum = (el) => {
    if (!el) return 0;
    // prefer valueAsNumber when available (number inputs)
    const n = typeof el.valueAsNumber === 'number' && !Number.isNaN(el.valueAsNumber)
      ? el.valueAsNumber
      : Number(el.value);
    return Number.isFinite(n) ? n : 0;
  };

  // —— Elements
  const adcEl           = document.getElementById('adc');              // Avg daily customers
  const atsEl           = document.getElementById('ats');              // Avg ticket size
  const adoptionSlider  = document.getElementById('adoption');         // 0..100
  const adoptionInput   = document.getElementById('adoptionInput');    // 0..100

  const kpiMonthlyCustomers = document.getElementById('kpiMonthlyCustomers');
  const kpiMonthlyRevenue   = document.getElementById('kpiMonthlyRevenue');
  const kpiResponses        = document.getElementById('kpiResponses');
  const kpiRecoveredRevenue = document.getElementById('kpiRecoveredRevenue');
  const kpiRecoveredSub     = document.getElementById('kpiRecoveredSub');
  const roiMultiple         = document.getElementById('roiMultiple');
  const roiBar              = document.getElementById('roiBar');
  const yearEl              = document.getElementById('year');

  // —— Assumptions (match the copy shown to users)
  const PLAN_COST = 149;        // USD / month
  const DAYS = 30;
  const UNHAPPY_NEUTRAL_RATE = 0.40; // 40% of responses
  const WINBACK_CONVERSION   = 0.35; // 35% of those convert

  // —— Adoption sync
  function syncAdoption(raw) {
    const v = clamp(Number(raw) || 0, 0, 100);
    if (adoptionSlider) adoptionSlider.value = v;
    if (adoptionInput)  adoptionInput.value  = v;
  }

  // —— Core calc
  function calc() {
    // Read inputs robustly
    const adc = Math.max(0, toNum(adcEl));  // avg daily customers
    const ats = Math.max(0, toNum(atsEl));  // avg ticket size
    const adoptionPct = clamp(
      (adoptionSlider ? toNum(adoptionSlider) : adoptionInput ? toNum(adoptionInput) : 0),
      0, 100
    ) / 100;

    // Derive
    const monthlyCustomers      = adc * DAYS;
    const monthlyRevenue        = monthlyCustomers * ats;

    const responses             = monthlyCustomers * adoptionPct;
    const recoverable           = responses * UNHAPPY_NEUTRAL_RATE;
    const recoveredCustomers    = recoverable * WINBACK_CONVERSION;
    const recoveredRevenueGross = recoveredCustomers * ats;
    const recoveredRevenueNet   = Math.max(0, recoveredRevenueGross - PLAN_COST);

    const roiRaw = PLAN_COST > 0 ? (recoveredRevenueGross / PLAN_COST) : 0;
    const roi    = Number.isFinite(roiRaw) ? roiRaw : 0;

    // Update UI safely
    if (kpiMonthlyCustomers) kpiMonthlyCustomers.textContent = fmtNumber(monthlyCustomers);
    if (kpiMonthlyRevenue)   kpiMonthlyRevenue.textContent   = fmtCurrency(monthlyRevenue);
    if (kpiResponses)        kpiResponses.textContent        = fmtNumber(responses);
    if (kpiRecoveredRevenue) kpiRecoveredRevenue.textContent = fmtCurrency(recoveredRevenueNet);
    if (kpiRecoveredSub)     kpiRecoveredSub.textContent     =
      recoveredRevenueGross >= PLAN_COST ? 'Net after $149 plan' : 'Below plan cost — optimize adoption';

    if (roiMultiple) {
      roiMultiple.textContent = roi >= 99 ? '100x+' : `${Math.round(roi)}x`;
    }

    // Bar: 30x -> 100%
    const widthPct = Math.min((clamp(roi, 0, 30) / 30) * 100, 100);
    if (roiBar) {
      // Ensure bar exists visually even at 0
      roiBar.style.width = `${widthPct}%`;
      roiBar.style.minWidth = widthPct > 0 ? '' : '0';
    }
  }

  // —— Listeners (guard each addEventListener)
  const bind = (el, evts, fn) => { if (el) evts.forEach(e => el.addEventListener(e, fn)); };

  bind(adcEl,          ['input','change'], calc);
  bind(atsEl,          ['input','change'], calc);
  bind(adoptionSlider, ['input','change'], (e) => { syncAdoption(e.target.value); calc(); });
  bind(adoptionInput,  ['input','change'], (e) => { syncAdoption(e.target.value); calc(); });

  // —— Init
  if (adoptionSlider) syncAdoption(adoptionSlider.value);
  else if (adoptionInput) syncAdoption(adoptionInput.value);
  calc();

  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-gray-900 text-white flex items-center justify-center tracking-tight font-semibold">
              MA
            </div>
<span className="text-lg font-semibold tracking-tight">tomo ai</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4" href="#how">How it works</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4" href="#features">Features</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:underline underline-offset-4" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3 flex-wrap">
<a className="hidden sm:inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300" href="#">Log in</a>
<a className="inline-flex items-center justify-center text-sm font-semibold tracking-tight bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300" href="#pricing">
              Start Free Trial
            </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-100/70 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 lg:py-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="">
<div className="inline-flex gap-2 text-xs font-medium text-indigo-800 bg-indigo-50 border-indigo-200 border rounded-full mb-5 pt-1 pr-2 pb-1 pl-2 gap-x-2 gap-y-2 items-center" style={{}}>
              
              Built for restaurants, yoga studios, salons and more
            <svg className="h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></div>
<h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
              Turn Feedback Into Returning Customers
            </h1>
<p className="sm:text-lg text-base text-gray-600 max-w-xl mt-4" style={{}}>A simple tool that turns every guest response into more reviews, retention and revenue. With no work required.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center text-sm font-semibold tracking-tight bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300" href="#pricing">
                Start Free Trial
              </a>
<a className="inline-flex items-center justify-center text-sm font-medium text-gray-800 px-5 py-3 rounded-md border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300" href="#how">
<svg className="mr-2 h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                See how it works
              </a>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
<div className="flex items-center gap-3 min-w-0">
<div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
<svg className="h-4 w-4 text-indigo-700" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold tracking-tight text-gray-900">12x ROI</div>
<div className="text-[11px] sm:text-xs text-gray-600">Avg. recovered revenue</div>
</div>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-7 w-7 sm:h-8 sm:w-8 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
<svg className="h-4 w-4 text-emerald-700" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.160 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold tracking-tight text-gray-900">+38%</div>
<div className="text-[11px] sm:text-xs text-gray-600">More 5-star reviews</div>
</div>
</div>
<div className="flex items-center gap-3 min-w-0">
<div className="h-8 w-8 rounded-md bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
<svg className="h-4 w-4 text-violet-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="min-w-0">
<div className="text-sm font-semibold text-gray-900 tracking-tight" style={{}}>15 Minutes</div>
<div className="text-[11px] sm:text-xs text-gray-600">To set up and launch</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
<img alt="Customer scanning a QR code at a restaurant table" className="h-72 sm:h-96 w-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-4 right-4">
<div className="bg-white/95 backdrop-blur rounded-xl border border-gray-200 shadow-lg w-56 sm:w-60 ring-1 ring-emerald-100">
<div className="px-3 pt-3 pb-2 border-b border-gray-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-gray-700" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs font-medium text-gray-700">Guest Survey</span>
</div>
<svg className="h-4 w-4 text-gray-700" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<div className="p-3">
<div className="text-xs font-medium text-gray-800">How was your visit today?</div>
<div className="mt-2 flex items-center gap-1">
<svg className="h-4 w-4 text-green-600" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<svg className="h-4 w-4 text-yellow-500" data-lucide="meh" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="15" y2="15"></line><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<svg className="h-4 w-4 text-red-500" data-lucide="angry" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><path d="M7.5 8 10 9"></path><path d="m14 9 2.5-1"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path></svg>
</div>
<div className="mt-3 text-xs font-medium text-gray-800">Would you return?</div>
<div className="mt-1 flex gap-2 flex-wrap">
<button className="text-[11px] px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50">Yes</button>
<button className="text-[11px] px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50">Not sure</button>
<button className="text-[11px] px-2 py-1 rounded-md border border-gray-200 bg-white hover:bg-gray-50">No</button>
</div>
<div className="mt-3 text-xs font-medium text-gray-800">How can we improve?</div>
<div className="mt-1">
<div className="h-10 w-full rounded-md border border-gray-200 bg-gray-50"></div>
</div>
<div className="flex mt-3 items-center justify-center">
<button className="text-[11px] px-2 py-1 rounded-md bg-gray-900 text-white hover:bg-black">Submit</button>
</div>
</div>
</div>
</div>

<div className="absolute top-3 left-3">
<div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-[11px] text-emerald-800">
<svg className="h-3.5 w-3.5 text-emerald-700" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
                  Scan. Share. Win back.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-gray-200 bg-white" id="how">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">How it works</h2>
<p className="mt-3 text-gray-600">Three simple steps to keep guests coming back.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Collect Feedback</h3>
<p className="mt-2 text-sm text-gray-600">
              Customers scan a QR code and answer a quick survey on their phone—no app required.
            </p>
<ul className="mt-4 space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Web browser, 1 min survey
              </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Customizable questions
              </li>
</ul>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Track Insights</h3>
<p className="mt-2 text-sm text-gray-600">
              See return intent, review trends, and verbatim feedback in a clean dashboard.
            </p>
<ul className="mt-4 space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Identify areas of improvement
              </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Review sentiment trends &amp; direct feedback
              </li>
</ul>
</div>

<div className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Win Back Customers</h3>
<p className="mt-2 text-sm text-gray-600">
              Send SMS offers to unhappy guests and automate Google Review requests for happy ones.
            </p>
<ul className="mt-4 space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Targeted SMS win-back flows
              </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Automated Google Review nudges
              </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-200 border-t pt-16 pb-16" id="get-started">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Get started in minutes</h2>
<p className="text-gray-600 mt-3" style={{}}>Designed for busy owners—set up in under 15 minutes and see first feedback within hours.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-indigo-50/50 p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="user-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-800 bg-white">Step 1</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Sign Up</h3>
<p className="mt-2 text-sm text-gray-600">Create your account and customize survey questions for your business type.</p>
</div>

<div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-emerald-50/50 p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-800 bg-white">Step 2</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Place QR Codes</h3>
<p className="mt-2 text-sm text-gray-600">Print and display at checkout, tables, or service areas. Templates included.</p>
</div>

<div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-violet-50/50 p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-800 bg-white">Step 3</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-gray-900">Start Collecting</h3>
<p className="mt-2 text-sm text-gray-600">Guests scan, share feedback, and your insights start populating instantly.</p>
</div>

<div className="rounded-xl border border-gray-200 bg-gradient-to-b from-white to-rose-50/50 p-6 hover:shadow-sm hover:border-gray-300 transition">
<div className="flex items-center gap-2">
<div className="h-10 w-10 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<span className="text-[11px] px-2 py-0.5 rounded-full border border-gray-200 text-gray-800 bg-white">Step 4</span>
</div>
<h3 className="text-lg font-semibold text-gray-900 tracking-tight mt-4" style={{}}>Get Results</h3>
<p className="text-sm text-gray-600 mt-2" style={{}}>Identify top issues, auto-send SMS offers and increase positive reviews with no effort required.</p>
</div>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center justify-center text-sm font-semibold tracking-tight bg-gray-900 text-white px-5 py-3 rounded-md hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300" href="#pricing">
            Start Free Trial
          </a>
</div>
</div>
</section>

<section className="bg-gray-50 pt-16 pb-16" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-start">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Core features</h2>
<p className="mt-3 text-gray-600">Everything you need to capture feedback and turn it into revenue.</p>
<div className="mt-6 space-y-4">

<div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
<div className="h-9 w-9 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div className="">
<div className="font-semibold tracking-tight">Guest Feedback Surveys</div>
<p className="text-sm text-gray-600">QR-based, customizable questions that take under a minute to complete.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
<div className="h-9 w-9 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="">
<div className="font-semibold tracking-tight">Dashboard Analytics</div>
<p className="text-sm text-gray-600">Win Back list, KPIs, return intent %, review trends, and feedback insights.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
<div className="h-9 w-9 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="message-square-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="M7 11h10"></path><path d="M7 15h6"></path><path d="M7 7h8"></path></svg>
</div>
<div className="">
<div className="font-semibold tracking-tight">CRM + SMS</div>
<p className="text-sm text-gray-600">Central contact list with automated win-back campaigns and templates.</p>
</div>
</div>
<div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4">
<div className="h-9 w-9 rounded-md bg-gray-900 text-white flex items-center justify-center">
<svg className="h-5 w-5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
<div className="">
<div className="font-semibold tracking-tight">AI Insights</div>
<p className="text-sm text-gray-600">Turn Accounting &amp; POS data into simplified insights &amp; actionable plans</p>
</div>
</div>
</div>

</div>

<div className="relative">
<div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6">
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-semibold text-gray-900 tracking-tight">Dashboard</div>
<div className="text-xs text-gray-500" style={{}}>Last 30 days</div>
</div>
<div className="inline-flex items-center gap-2">
<span className="text-[11px] text-emerald-700 bg-emerald-50 border-emerald-200 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>+17% MoM</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 gap-x-3 gap-y-3">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Responses</div>
<div className="mt-1 text-xl font-semibold tracking-tight">1,284</div>
<div className="mt-1 text-[11px] text-emerald-700">+8.3%</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Return intent</div>
<div className="mt-1 text-xl font-semibold tracking-tight">86%</div>
<div className="mt-1 text-[11px] text-emerald-700">+3 pts</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Recovered revenue</div>
<div className="mt-1 text-xl font-semibold tracking-tight">$8.2k</div>
<div className="mt-1 text-[11px] text-emerald-700">12x ROI</div>
</div>
</div>

<div className="mt-5">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-gray-900" style={{}}>Recovered revenue over time</div>
<div className="flex items-center gap-2">
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">7d</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 bg-gray-900 text-white">30d</button>
<button className="text-xs px-2 py-1 rounded-md border border-gray-200 hover:bg-gray-50">90d</button>
</div>
</div>
<div className="h-32 rounded-lg border border-dashed border-gray-200 grid grid-cols-12 items-end gap-1 p-2">
<div className="bg-indigo-100 rounded-sm" style={{height: '42%'}}></div>
<div className="bg-indigo-200 rounded-sm" style={{height: '55%'}}></div>
<div className="bg-indigo-300 rounded-sm" style={{height: '58%'}}></div>
<div className="bg-indigo-200 rounded-sm" style={{height: '60%'}}></div>
<div className="bg-indigo-300 rounded-sm" style={{height: '64%'}}></div>
<div className="bg-indigo-400 rounded-sm" style={{height: '70%'}}></div>
<div className="bg-indigo-300 rounded-sm" style={{height: '66%'}}></div>
<div className="bg-indigo-400 rounded-sm" style={{height: '72%'}}></div>
<div className="bg-indigo-500 rounded-sm" style={{height: '78%'}}></div>
<div className="bg-indigo-400 rounded-sm" style={{height: '74%'}}></div>
<div className="bg-indigo-500 rounded-sm" style={{height: '80%'}}></div>
<div className="bg-indigo-600 rounded-sm" style={{height: '86%'}}></div>
</div>
</div>

<div className="mt-5">
<div className="text-sm font-medium text-gray-900 mb-2">Recent feedback</div>
<div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
<div className="bg-white/50 px-3 py-2 text-xs text-gray-500 flex items-center justify-between">
<span className="">Newest first</span>
<div className="inline-flex gap-1">
<span className="px-2 py-0.5 rounded-full border border-gray-200">All</span>
<span className="px-2 py-0.5 rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">Positive</span>
<span className="text-amber-700 bg-amber-50 border-amber-200 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>Neutral</span><span className="text-rose-700 bg-rose-50 border-rose-200 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>Negative</span>
</div>
</div>
<div className="p-3 flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="smile" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(4, 120, 87)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="min-w-0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-900 truncate">“Great service, fast and friendly.”</div>
<span className="text-[11px] text-gray-500">2m ago</span>
</div>
<div className="text-xs text-gray-600" style={{}}>Return intent: Yes • Nudged to Google Review</div>
</div>
</div>
<div className="p-3 flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="frown" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(190, 18, 60)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<div className="min-w-0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-900 truncate">“Food was cold and took too long.”</div>
<span className="text-[11px] text-gray-500">18m ago</span>
</div>
<div className="text-xs text-gray-600" style={{}}>Return intent: No • SMS offer sent</div>
</div>
</div>
<div className="p-3 flex items-start gap-3">
<div className="h-8 w-8 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(180, 83, 9)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="8" x2="16" y1="15" y2="15"></line><circle className="" cx="12" cy="12" r="10"></circle><path d="M9 10h.01"></path><path d="M15 10h.01"></path></svg>
</div>
<div className="min-w-0">
<div className="flex items-center justify-between">
<div className="text-sm font-medium text-gray-900 truncate">“Music was a bit loud, otherwise fine.”</div>
<span className="text-[11px] text-gray-500">1h ago</span>
</div>
<div className="text-xs text-gray-600" style={{}}>Return intent: Not Sure • SMS offer sent</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-3 right-3">
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-gray-200 bg-white" id="pricing">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight" style={{}}>Simple pricing</h2>
<p className="mt-3 text-gray-600">Start free for 30 days. No contracts. Cancel anytime.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="text-sm font-medium text-gray-800">Monthly</div>
</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl font-semibold tracking-tight">$149</div>
<div className="text-sm text-gray-600">/ month</div>
</div>
<div className="mt-2 text-sm text-gray-600">Includes 1 free trial month</div>
<ul className="mt-6 space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Unlimited feedback surveys
              </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Dashboard analytics &amp; Win Back list
              </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                CRM + SMS campaigns
              </li>
</ul>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
<span className="">Subscribe with Stripe</span>
<span className="text-[10px] font-medium bg-white/10 px-1.5 py-0.5 rounded">Secure</span>
</button>
<div className="flex gap-2 text-xs text-gray-600 mt-3 gap-x-2 gap-y-2 items-center">
<svg className="h-3.5 w-3.5" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="              12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
              Plus one-time $79 setup fee.
           </div>
</div>

<div className="hover:shadow-md transition bg-gradient-to-b from-white to-emerald-50/50 border-emerald-200 border ring-1 ring-emerald-100 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="flex items-center justify-between flex-wrap gap-2">
<div className="text-sm font-medium text-gray-800">Annual</div>
<span className="inline-flex items-center text-[13px] font-semibold text-emerald-700 bg-emerald-50 border-emerald-200 border rounded-full px-3.5 py-1.5 shadow-sm">Save 26%</span>
</div>
<div className="mt-4 flex items-baseline gap-2">
<div className="text-4xl font-semibold tracking-tight">$110</div>
<div className="text-sm text-gray-600">/ month</div>
</div>
<div className="mt-2 text-sm text-gray-600">Billed annually at $1,320</div>
<ul className="mt-6 space-y-2 text-sm text-gray-700">
<li className="flex gap-2 gap-x-2 gap-y-2 items-start">
<svg className="h-4 w-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
      Setup Fee Waived
    </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
      Includes 1 free trial month
    </li>
<li aria-hidden="true" className="flex items-start gap-2 invisible">
<svg className="h-4 w-4 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
      Spacer
    </li>
</ul>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-tight bg-gray-900 text-white px-4 py-2.5 rounded-md hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
<span className="">Pay annually</span>
<span className="text-[10px] font-medium bg-white/10 px-1.5 py-0.5 rounded">Best value</span>
</button>
</div>
</div></div>

<div className="hover:shadow-md transition bg-gradient-to-b from-white to-indigo-50/50 max-w-3xl border-gray-200 border ring-emerald-100 ring-1 rounded-2xl mt-10 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-sm">
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 text-[10px] text-indigo-700 bg-indigo-50 border-indigo-200 border rounded-full pt-0.5 pr-2 pb-0.5 pl-2" style={{}}>
      Highly Recommended
    <svg className="h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg></span>
</div>
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-xs font-medium text-gray-700 mb-2">
<svg className="lucide lucide-bot h-4 w-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
        Add-On Service
      </div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">AI Insights</h3>
<p className="mt-2 text-sm text-gray-600 max-w-2xl">
        Monthly analysis of your Accounting + POS data to deliver clear insights, prioritized recommendations, and action items to grow profits.
      </p>
<ul className="mt-4 space-y-2 text-sm text-gray-700">
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
          Monthly profit opportunities + action plan
        </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
          One-time Google/Yelp review sentiment summary
        </li>
<li className="flex items-start gap-2">
<svg className="h-4 w-4 text-green-600 mt-0.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
          Partner-provided SEO report included
        </li>
</ul>
</div>
<div className="w-full md:w-auto">
<div className="inline-flex items-center gap-2 mb-2">
<span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-800 bg-emerald-50 border-emerald-200 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>
          Add‑on
        <svg className="h-3.5 w-3." data-lucide="bolt" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m13 3-8 14h7l-1 6 8-14h-7z"></path></svg></span>
</div>
<div className="flex items-baseline gap-2">
<div className="text-3xl font-semibold tracking-tight">$99</div>
<div className="text-sm text-gray-600">/ month</div>
</div>
<button className="mt-3 inline-flex w-full md:w-auto items-center justify-center text-sm font-semibold tracking-tight bg-gray-900 text-white px-4 py-2.5 rounded-md border border-gray-900 hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300">
<svg className="lucide mr-2 h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        Add AI Insights to Your Plan
      </button>
</div>
</div>
</div>
</section>

<section className="sm:p-8 bg-gray-50 border-gray-200 border rounded-2xl mt-16 pt-6 pr-6 pb-6 pl-6" id="roi">
<div className="max-w-7xl mx-auto">
<div className="flex items-start justify-between gap-6 flex-col lg:flex-row">

<div className="w-full lg:w-1/2">
<div className="mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">Estimate your ROI</h3>
<p className="text-sm text-gray-600 mt-2" style={{}}>Use your averages to see potential recovered revenue.</p>
</div>
<div className="space-y-4">

<div className="">
<label className="block text-sm font-medium text-gray-800" htmlFor="adc">Average daily customers</label>
<div className="mt-1 relative rounded-md">
<input aria-describedby="adc-help" className="block w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900 text-sm" id="adc" inputmode="numeric" min="0" type="number" value="100"/>
</div>
<p className="mt-1 text-xs text-gray-500" id="adc-help">Typical daily guest count across all days you are open.</p>
</div>

<div className="">
<label className="block text-sm font-medium text-gray-800" htmlFor="ats">Average ticket size</label>
<div className="mt-1 relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 text-sm">$</div>
<input aria-describedby="ats-help" className="block w-full rounded-md border-gray-300 pl-7 focus:border-gray-900 focus:ring-gray-900 text-sm" id="ats" inputmode="decimal" min="0" step="0.01" type="number" value="20"/>
</div>
<p className="mt-1 text-xs text-gray-500" id="ats-help">Average order value per guest.</p>
</div>

<div className="">
<div className="flex items-center justify-between">
<label className="block text-sm font-medium text-gray-800" htmlFor="adoption">% survey adoption</label>
<input aria-label="Survey adoption percent input" className="w-20 rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900 text-sm text-right" id="adoptionInput" max="100" min="0" step="1" type="number" value="30"/>
</div>
<div className="mt-2">
<input aria-describedby="adoption-help" className="w-full accent-gray-900" id="adoption" max="100" min="0" step="1" type="range" value="35"/>
</div>
<p className="mt-1 text-xs text-gray-500" id="adoption-help">Percent of guests who complete the 1‑minute survey.</p>
</div>
</div>

<details className="mt-5 rounded-lg border border-gray-200 bg-white p-4 open:shadow-sm">
<summary className="cursor-pointer text-sm font-medium text-gray-800" style={{}}>Model assumptions</summary>
<div className="mt-3 text-xs text-gray-600 space-y-1">
<p>- Monthly customers = Average daily customers × 30</p>
<p>- Survey responses = Monthly customers × Adoption %</p>
<p>- Of responses, 40% are unhappy/neutral and receive win-back SMS</p>
<p>- Win-back conversion = 35% of unhappy/neutral responders</p>
<p>- Recovered revenue = Recovered customers × Average ticket size</p>
<p>- ROI uses $149 monthly plan cost</p>
</div>
</details>
</div>

<div className="w-full lg:w-1/2">
<div className="bg-white border-gray-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight text-gray-900">Your estimate</div>
<div className="text-xs text-gray-500">Based on your inputs</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-4">
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Monthly customers</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiMonthlyCustomers">3,000</div>
<div className="mt-1 text-[11px] text-gray-600">Avg daily × 30</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Total monthly revenue</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiMonthlyRevenue">$60,000</div>
<div className="mt-1 text-[11px] text-gray-600">Before Mango AI impact</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase text-gray-500 tracking-wide" style={{}}>MONTHLY Survey responses</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiResponses">1,050</div>
<div className="mt-1 text-[11px] text-gray-600">Customers × adoption %</div>
</div>
<div className="rounded-lg border border-gray-200 p-3">
<div className="text-[10px] uppercase tracking-wide text-gray-500">Recovered revenue</div>
<div className="mt-1 text-xl font-semibold tracking-tight" id="kpiRecoveredRevenue">$2,791</div>
<div className="mt-1 text-[11px] text-emerald-700" id="kpiRecoveredSub">Net after $149 plan</div>
</div>
</div>

<div className="bg-gradient-to-b from-gray-50 to-white border-gray-200 border rounded-lg mt-5 pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-medium text-gray-900">Estimated monthly ROI</div>
<div className="text-xs text-gray-500" id="roiNote">Using $149/mo plan</div>
</div>
<div className="text-2xl font-semibold tracking-tight text-gray-900" id="roiMultiple">20x</div>
</div>
<div className="mt-3">
<div className="overflow-hidden bg-gray-100 w-full h-2 rounded-full">
<div className="h-full rounded-full bg-emerald-500 transition-all" id="roiBar" style={{width: '65.7718%'}}></div>
</div>
<div className="text-[11px] text-gray-500 mt-2" style={{}}>Estimate only. Actuals will vary based on accuracy of assumptions.</div>
</div>
</div>
</div>
</div>


<div className="mt-5 flex flex-col sm:flex-row gap-2">
</div>
</div>
</div>
</section>


<section className="relative isolate">
<div className="absolute inset-x-0 -top-6 h-6 bg-gradient-to-b from-gray-200/60 to-transparent pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="rounded-2xl border border-gray-200 bg-gray-900 text-white p-6 sm:p-10 overflow-hidden">
<div className="grid md:grid-cols-2 gap-6 items-center">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight">Ready to turn feedback into revenue?</h3>
<p className="text-gray-300 mt-2" style={{}}>Get real results in less than 1 day. Try it out, risk-free.</p>
</div>
<div className="flex md:justify-end items-center gap-3">
<a className="inline-flex items-center justify-center text-sm font-semibold tracking-tight bg-white text-gray-900 px-5 py-3 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" href="#pricing">
                Start Free Trial
              </a>
</div>
</div>
</div>
</div>
</section>


<footer className="border-t border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gray-900 text-white flex items-center justify-center tracking-tight font-semibold">MA</div>
<span className="text-sm font-medium text-gray-800">tomo ai</span>
</div>
<nav className="flex items-center gap-4 text-sm">
<a className="text-gray-600 hover:text-gray-900" href="#how">How it works</a>
<a className="text-gray-600 hover:text-gray-900" href="#features">Features</a>
<a className="text-gray-600 hover:text-gray-900" href="#pricing">Pricing</a>
<a className="text-gray-600 hover:text-gray-900" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-6 text-[11px] text-gray-500 text-center sm:text-left">
          © <span id="year">2025</span> Mango AI, Inc. All rights reserved.
        </div>
</div>
</footer>



    </>
  );
}
