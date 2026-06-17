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
      
  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // ROI Slider logic
        const input = document.getElementById('roiDeals');
        const fill = document.getElementById('roiFill');
        const knob = document.getElementById('roiKnob');
        const label = document.getElementById('roiDealsLabel');
        const revenueEl = document.getElementById('roiRevenue');
        const multipleEl = document.getElementById('roiMultiple');

        if (input && fill && knob && label && revenueEl && multipleEl) {
          const dealValue = 25000; // Average deal value
          const testCost = 3000;   // 2-month test total
          const min = parseInt(input.min, 10);
          const max = parseInt(input.max, 10);

          const formatCurrency = (n) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
          const formatMultiple = (n) => `${(Math.round(n * 10) / 10).toFixed(1)}×`;

          const update = () => {
            const value = parseInt(input.value, 10);
            const pct = ((value - min) / (max - min)) * 100;
            fill.style.width = pct + '%';
            knob.style.left = pct + '%';
            label.textContent = String(value);

            const revenue = value * dealValue;
            const multiple = revenue / testCost;

            revenueEl.textContent = formatCurrency(revenue);
            multipleEl.textContent = formatMultiple(multiple);
          };

          input.addEventListener('input', update);
          update();
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://app.spline.design/community/file/3f20b8f2-b198-4d07-ba66-e7ece1a6d207" width="100%"></iframe></div><div className="aura-background-component fixed top-0 w-full h-screen -z-10"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>
</div>

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl" style={{backgroundColor: 'rgba(37,99,235,0.08)'}}></div>
<div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full blur-3xl" style={{backgroundColor: 'rgba(37,99,235,0.06)'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[70%] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.10),transparent_60%)]"></div>
</div>

<header className="sticky top-4 z-50">
<nav className="mx-auto max-w-6xl rounded-3xl border px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between bg-[#1f2937] border-white/10">
<div className="flex items-center gap-3">
<div className="inline-flex h-6 w-6 items-center justify-center rounded-md" style={{backgroundColor: 'rgba(37,99,235,0.15)'}}>
<span className="text-[11px] tracking-tight font-medium" style={{color: '#2563eb'}}>TK</span>
</div>
<span className="text-sm sm:text-base tracking-tight" style={{color: '#e5e7eb'}}>Thy Kingdom Come Productions <span className="text-neutral-500" style={{color: '#9ca3af'}}>x</span> Rootmosaic</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#plan" style={{color: '#9ca3af'}}>The Plan</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#roi" style={{color: '#9ca3af'}}>Your ROI</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#investment" style={{color: '#9ca3af'}}>Investment</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#steps" style={{color: '#9ca3af'}}>Next Steps</a>
<a className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors border-white/10 text-white hover:bg-[#1d4ed8]" href="#steps" style={{backgroundColor: '#2563eb'}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            Approve Phase 1
          </a>
</div>
<div className="md:hidden">
<a className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm transition-colors border-white/10 text-white hover:bg-[#1d4ed8]" href="#steps" style={{backgroundColor: '#2563eb'}}>
<svg className="lucide lucide-check-circle-2 h-4 w-4" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
            Approve
          </a>
</div>
</nav>
</header>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-10 animate-[slideUp_0.7s_ease-out_both]">
<div className="relative overflow-hidden rounded-3xl border ring-1 border-white/10 ring-white/5 bg-[#1f2937]">

<div className="absolute inset-0 opacity-30">
<div className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_20%_-10%,rgba(37,99,235,0.15),transparent),radial-gradient(800px_300px_at_80%_120%,rgba(37,99,235,0.12),transparent)]"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '28px 28px'}}></div>
</div>
<div className="relative sm:p-10 lg:p-16 bg-slate-700/60 pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col gap-6">
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tighter text-white">A Partnership for <span className="underline decoration-2 underline-offset-8" style={{textDecorationColor: '#f59e0b'}}>Predictable Growth</span></h1>
<p className="text-base sm:text-lg tracking-tight" style={{color: '#9ca3af'}}>A Strategic Proposal for Pastor Patrick &amp; Jasmine Ford</p>
<p className="text-sm sm:text-base leading-7 max-w-3xl" style={{color: '#e5e7eb'}}>
              Thank you for your transparency. You’ve built TKC on faith, excellence, and referrals. Now, you’re ready for the next step: a system that creates predictable, scalable growth. This plan is designed to deliver on the one metric that matters most: qualified leads in your inbox that you can turn into sales.
            </p>
<div className="flex items-center gap-3 pt-2">
<a className="inline-flex items-center gap-2 rounded-full text-sm tracking-tight px-5 py-2.5 ring-1 ring-inset transition-colors text-white hover:bg-[#1d4ed8]" href="#plan" style={{backgroundColor: '#2563eb', ringColor: 'rgba(37,99,235,0.35)'}}>
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
                See the Roadmap
              </a>
<a className="inline-flex items-center gap-2 rounded-full text-sm tracking-tight px-5 py-2.5 ring-1 ring-inset transition-colors hover:text-[#2563eb]" href="#roi" style={{backgroundColor: 'transparent', color: '#e5e7eb', borderColor: 'rgba(255,255,255,0.10)'}}>
<svg className="lucide lucide-chart-line h-4 w-4" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                Your ROI
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
<div className="sm:p-10 bg-[#1f2937]/60 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="animate-[slideUp_0.7s_ease-out_0.1s_both] text-center">
<h2 className="sm:text-5xl text-3xl font-light text-white tracking-tighter">What We’re <span className="underline decoration-2 underline-offset-8" style={{textDecorationColor: '#f59e0b'}}>Solving</span> For</h2>
<p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{color: '#9ca3af'}}>Four focus points aligned to the outcomes TKC values most.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

<div className="animate-[slideUp_0.7s_ease-out_0.15s_both] rounded-2xl border p-5 sm:p-6 border-white/10 bg-[#1f2937]">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-goal h-5 w-5" data-lucide="goal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13V2l8 4-8 4"></path><path d="M20.561 10.222a9 9 0 1 1-12.55-5.29"></path><path d="M8.002 9.997a5 5 0 1 0 8.9 2.02"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white">The Goal</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>Generate 2+ additional installs per month to provide stability for hiring full-time installers.</p>
</div>
</div>
</div>

<div className="animate-[slideUp_0.7s_ease-out_0.2s_both] rounded-2xl border p-5 sm:p-6 border-white/10 bg-[#1f2937]">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-trending-up h-5 w-5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white">The Opportunity</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>Leverage your exceptional 80% close rate by feeding your pipeline with qualified, targeted leads.</p>
</div>
</div>
</div>

<div className="animate-[slideUp_0.7s_ease-out_0.25s_both] rounded-2xl border p-5 sm:p-6 border-white/10 bg-[#1f2937]">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-inbox h-5 w-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium tracking-tight text-white">The Need</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>A practical, done-for-you system that delivers tangible results, not vanity metrics like traffic or followers.</p>
</div>
</div>
</div>

<div className="animate-[slideUp_0.7s_ease-out_0.3s_both] rounded-2xl border p-5 sm:p-6 border-white/10 bg-[#1f2937]">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', ringColor: 'rgba(245,158,11,0.20)'}}>
<svg className="lucide lucide-binoculars h-5 w-5" data-lucide="binoculars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10h4"></path><path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"></path><path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"></path><path d="M 22 16 L 2 16"></path><path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"></path><path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"></path></svg>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-white">The Vision</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>Establish TKC as the household name for transformative LED video walls — first in DFW, then nationwide.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16" id="plan">
<div className="animate-[slideUp_0.7s_ease-out_0.05s_both] text-center">
<h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-white">The <span className="underline decoration-2 underline-offset-8" style={{textDecorationColor: '#f59e0b'}}>Roadmap</span>: Prove, Then <span className="underline decoration-2 underline-offset-8" style={{textDecorationColor: '#f59e0b'}}>Scale</span></h2>
<p className="mt-3 text-sm sm:text-base max-w-2xl mx-auto" style={{color: '#9ca3af'}}>Three focused phases to validate, expand, and scale.</p>
</div>
<div className="relative mt-10">

<div className="absolute left-8 top-0 bottom-0 hidden md:block">
<div className="h-full w-px bg-gradient-to-b from-transparent to-transparent via-white/10"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

<article className="animate-[slideUp_0.7s_ease-out_0.1s_both] bg-[#1f2937]/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm text-white" style={{backgroundColor: '#2563eb'}}>1</span>
<span className="text-xs" style={{color: '#9ca3af'}}>Months 1–2</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight text-white">Phase 1 – Foundation</h3>
<p className="mt-1 text-sm" style={{color: '#9ca3af'}}>Focus avatar: <span className="text-white">“Deacon Davis”</span></p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg> GoHighLevel CRM Setup</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-funnel h-4 w-4" data-lucide="funnel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg> “Get a Quote” Funnel</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-megaphone h-4 w-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg> Meta Ad Campaign</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-notebook-tabs h-4 w-4" data-lucide="notebook-tabs" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M15 2v20"></path><path d="M15 7h5"></path><path d="M15 12h5"></path><path d="M15 17h5"></path></svg> Notion Workspace</li>
</ul>
<div className="mt-4 rounded-lg border p-4 text-sm" style={{borderColor: 'rgba(37, 99, 235, 0.30)', backgroundColor: 'rgba(37,99,235,0.10)', color: '#c7d2fe'}}>
              Our immediate priority is to build the machine that captures new business.
            </div>
</article>

<article className="animate-[slideUp_0.7s_ease-out_0.15s_both] bg-[#1f2937]/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm text-white" style={{backgroundColor: '#2563eb'}}>2</span>
<span className="text-xs" style={{color: '#9ca3af'}}>Months 3–6</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight text-white">Phase 2 – Expansion</h3>
<p className="mt-1 text-sm" style={{color: '#9ca3af'}}>Focus persona: <span className="text-white">“David” (Business) + Hospitality vertical</span></p>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-target h-4 w-4" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Broaden targeting segments</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg> Creative + offer testing</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> Retargeting &amp; nurture flows</li>
</ul>
<div className="mt-4 rounded-lg border p-4 text-sm" style={{borderColor: 'rgba(255, 255, 255, 0.10)', backgroundColor: 'rgba(255,255,255,0.05)', color: '#e5e7eb'}}>
              Each new install represents <span style={{color: '#2563eb'}}>$25k+</span> per deal, compounding the ROI.
            </div>
</article>

<article className="animate-[slideUp_0.7s_ease-out_0.2s_both] bg-[#1f2937]/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-sm text-white" style={{backgroundColor: '#2563eb'}}>3</span>
<span className="text-xs" style={{color: '#9ca3af'}}>Months 6+</span>
</div>
<h3 className="mt-4 text-xl font-medium tracking-tight text-white">Phase 3 – Growth</h3>
<ul className="mt-4 space-y-2 text-sm">
<li className="flex items-center gap-2"><svg className="lucide lucide-repeat h-4 w-4" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg> Rental Revenue Stream</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-bot h-4 w-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> AI-Powered Lead Qualification</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: '#2563eb'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Scale winning campaigns</li>
</ul>
<div className="mt-4 rounded-lg border p-4 text-sm" style={{borderColor: 'rgba(37, 99, 235, 0.30)', backgroundColor: 'rgba(37,99,235,0.10)', color: '#c7d2fe'}}>
              Rentals create recurring revenue while sales deliver big-ticket installs.
            </div>
</article>
</div>
</div>
</section>

<section className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16" id="roi">
<div className="animate-[slideUp_0.7s_ease-out_both] sm:p-10 bg-[#1f2937]/60 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-white">A Clear Path to <span className="underline decoration-2 underline-offset-8" style={{textDecorationColor: '#f59e0b'}}>Profitability</span></h2>
<p className="mt-3 text-sm sm:text-base" style={{color: '#9ca3af'}}>High-impact clarity on value, goals, and the test investment.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
<div className="text-center bg-[#1f2937]/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="text-sm" style={{color: '#9ca3af'}}>Average Deal Value</div>
<div className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight" style={{color: '#2563eb'}}>~$25,000</div>
</div>
<div className="text-center bg-[#1f2937]/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="text-sm" style={{color: '#9ca3af'}}>Your Goal</div>
<div className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight" style={{color: '#2563eb'}}>$50,000 New Monthly Revenue</div>
</div>
<div className="text-center bg-[#1f2937]/80 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="text-sm" style={{color: '#9ca3af'}}>Phase 1 Investment</div>
<div className="mt-2 text-3xl sm:text-4xl font-medium tracking-tight" style={{color: '#2563eb'}}>$3,000 Total</div>
</div>
</div>

<div className="sm:p-6 animate-[slideUp_0.7s_ease-out_0.05s_both] bg-[#1f2937]/80 border-white/10 border rounded-2xl mt-8 pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
<div className="">
<p className="text-sm" style={{color: '#9ca3af'}}>Adjust expected installs per month</p>
<h3 className="text-lg font-medium tracking-tight text-white">Projected Impact</h3>
</div>
</div>
<div className="text-right">
<div className="text-xs" style={{color: '#9ca3af'}}>Installs / month</div>
<div className="text-xl font-medium tracking-tight" id="roiDealsLabel" style={{color: '#2563eb'}}>2</div>
</div>
</div>

<div className="mt-5">
<div className="relative h-8">

<div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-2 rounded-full bg-white/10 ring-1 ring-inset ring-white/10"></div>

<div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 shadow-[0_0_0_1px_rgba(37,99,235,0.35)] rounded-full" style={{width: '33.3333%', backgroundColor: 'rgb(37, 99, 235)'}}></div>

<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-white shadow-md transition-transform duration-200" id="roiKnob" style={{left: '33.3333%'}}></div>

<input className="absolute inset-0 w-full h-8 appearance-none cursor-pointer bg-transparent" id="roiDeals" max="6" min="0" step="1" type="range" value="2"/>
</div>
<div className="mt-2 flex items-center justify-between text-[11px]" style={{color: '#9ca3af'}}>
<span>0</span>
<span>6</span>
</div>
</div>

<div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-xl border p-4 border-white/10 bg-[#1f2937]">
<div className="text-xs" style={{color: '#9ca3af'}}>Projected Monthly Revenue</div>
<div className="mt-1 text-2xl font-medium tracking-tight" id="roiRevenue" style={{color: '#e5e7eb'}}>$50,000</div>
</div>
<div className="rounded-xl border p-4 border-white/10 bg-[#1f2937]">
<div className="text-xs" style={{color: '#9ca3af'}}>ROI on Test (2-month total $3,000)</div>
<div className="mt-1 text-2xl font-medium tracking-tight" id="roiMultiple" style={{color: '#e5e7eb'}}>16.7×</div>
</div>
</div>
</div>
<div className="sm:p-6 border rounded-2xl mt-8 pt-5 pr-5 pb-5 pl-5" style={{borderColor: 'rgba(37, 99, 235, 0.30)', backgroundColor: 'rgba(37,99,235,0.10)'}}>
<p className="text-sm sm:text-base" style={{color: '#c7d2fe'}}>
<span className="font-semibold text-white">One closed deal pays for Phase 1 more than 8x over.</span> Two deals = <span className="font-semibold text-white">$50,000</span> return on a <span className="font-semibold text-white">$3,000</span> test.
          </p>
</div>
</div>
</section>

<section className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16" id="investment">
<div className="animate-[slideUp_0.7s_ease-out_both] text-center">
<h2 className="sm:text-5xl text-3xl font-light text-white tracking-tighter">The 2-Month “Prove It” Phase</h2>
<p className="mt-3 text-sm sm:text-base" style={{color: '#9ca3af'}}>Lean, capped, and data-driven to validate the growth engine.</p>
</div>
<div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#1f2937]">
<div className="grid grid-cols-1">

<div className="hidden sm:grid grid-cols-2 gap-4 text-sm border-white/80 border-b pt-4 pr-6 pb-4 pl-6" style={{backgroundColor: 'rgba(255,255,255,0.05)', color: '#9ca3af'}}>
<div className="text-left">Item</div>
<div className="text-right">Cost</div>
</div>

<div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-white/10">
<div className="text-sm" style={{color: '#e5e7eb'}}>One-Time Setup (CRM, Funnel, Ad Build, Reporting)</div>
<div className="text-sm text-right" style={{color: '#e5e7eb'}}>$1,500</div>
</div>
<div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-white/10">
<div className="text-sm" style={{color: '#e5e7eb'}}>Month 1 Ad Spend (Max)</div>
<div className="text-sm text-right" style={{color: '#e5e7eb'}}>$750</div>
</div>
<div className="grid grid-cols-2 gap-4 px-6 py-4 border-b border-white/10">
<div className="text-sm" style={{color: '#e5e7eb'}}>Month 2 Ad Spend (Max)</div>
<div className="text-sm text-right" style={{color: '#e5e7eb'}}>$750</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-4 pr-6 pb-4 pl-6" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
<div className="text-sm font-medium tracking-tight text-white">Total (2 Months)</div>
<div className="text-sm font-medium tracking-tight text-right text-white">$3,000</div>
</div>
</div>
</div>
<p className="mt-3 text-[13px]" style={{color: '#9ca3af'}}>
        Ad spend is capped at $25/day, run in two-week sprints to limit risk while producing data to optimize.
      </p>
</section>

<section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
<div className="animate-[slideUp_0.7s_ease-out_both] text-center">
<h2 className="sm:text-5xl text-3xl font-light text-white tracking-tighter">Our Partnership Guarantee</h2>
<p className="mt-3 text-sm sm:text-base" style={{color: '#9ca3af'}}>Aligned incentives, full transparency, and accountable execution.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-[#1f2937]/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-calendar-check h-5 w-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Checkpoints</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>Weekly Checkpoints for campaign reviews and next steps.</p>
</div>

<div className="bg-[#1f2937]/60 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(37, 99, 235, 0.15)', color: '#2563eb', ringColor: 'rgba(37,99,235,0.20)'}}>
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Transparency</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>24/7 Transparency via a shared Notion workspace with live reporting.</p>
</div>

<div className="ring-1 ring-inset bg-[#1f2937]/60 rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{border: '1px solid #f59e0b', ringColor: 'rgba(245,158,11,0.30)'}}>
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center" style={{backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', ringColor: 'rgba(245,158,11,0.20)'}}>
<svg className="lucide lucide-shield-check h-5 w-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-white">Risk Reversal</h3>
<p className="mt-1.5 text-sm" style={{color: '#e5e7eb'}}>If your inbox does not receive qualified leads within 60 days, 50% of the onboarding fee ($750) is credited toward future work.</p>
</div>
</div>
</section>

<section className="scroll-mt-24 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 mb-16" id="steps">
<div className="animate-[slideUp_0.7s_ease-out_both] sm:p-10 bg-[#1f2937]/60 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<h2 className="text-3xl sm:text-5xl font-light tracking-tighter text-white">Let's Begin</h2>
<p className="mt-3 text-sm sm:text-base" style={{color: '#9ca3af'}}>Three simple steps to launch the growth engine.</p>
</div>
<ol className="mt-8 space-y-3">
<li className="flex items-start gap-3 text-sm sm:text-base">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white" style={{backgroundColor: '#2563eb'}}>1</span>
            Approve the Phase 1 plan.
          </li>
<li className="flex items-start gap-3 text-sm sm:text-base">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white" style={{backgroundColor: '#2563eb'}}>2</span>
            Sign the agreement + pay the onboarding fee.
          </li>
<li className="flex items-start gap-3 text-sm sm:text-base">
<span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs text-white" style={{backgroundColor: '#2563eb'}}>3</span>
            Schedule the kickoff call.
          </li>
</ol>
<div className="mt-8 rounded-2xl border p-5 sm:p-6 border-white/10" style={{backgroundColor: 'rgba(255,255,255,0.05)'}}>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="space-y-2">
<p className="text-sm sm:text-base">
                👉 <span className="font-semibold">Within 3 weeks:</span> qualified leads hitting your inbox.
              </p>
<p className="text-sm sm:text-base">
                👉 <span className="font-semibold">Within 60 days:</span> clear, data-backed proof of a predictable growth engine.
              </p>
</div>
<a className="inline-flex items-center gap-2 rounded-full text-sm tracking-tight px-5 py-3 ring-1 ring-inset transition-colors text-white hover:bg-[#1d4ed8]" href="#steps" style={{backgroundColor: '#2563eb', ringColor: 'rgba(37,99,235,0.35)'}}>
<svg className="lucide lucide-handshake h-5 w-5" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
              Approve Phase 1 &amp; Begin Our Partnership
            </a>
</div>
</div>
</div>
</section>

<footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-10">
<div className="rounded-2xl border px-5 py-4 flex flex-col sm:flex-row items-center justify-between border-white/10 bg-[#1f2937]">
<p className="text-sm tracking-tight" style={{color: '#e5e7eb'}}>TKC &amp; Rootmosaic: A Partnership for Predictable Growth</p>
<div className="mt-2 sm:mt-0 flex items-center gap-4">
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#plan" style={{color: '#9ca3af'}}>The Plan</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#roi" style={{color: '#9ca3af'}}>Your ROI</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#investment" style={{color: '#9ca3af'}}>Investment</a>
<a className="text-sm transition-colors tracking-tight hover:text-[#2563eb]" href="#steps" style={{color: '#9ca3af'}}>Next Steps</a>
</div>
</div>
</footer>
<style>
      @keyframes slideUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>


    </>
  );
}
