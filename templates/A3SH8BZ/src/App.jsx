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
      
{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Adlive",
"url": "https://www.adlive.ai",
"logo": "https://www.adlive.ai/logo.png",
"sameAs": []
}



{
"@context": "https://schema.org",
"@type": "Product",
"name": "Adlive AI",
"description": "AI agents for Google Ads that cut manual work 60–70% and improve ROAS within your guardrails.",
"brand": {"@type": "Brand", "name": "Adlive"},
"offers": {"@type": "AggregateOffer","priceCurrency":"USD","lowPrice":"0","highPrice":"0","offerCount":"0"}
}



{
"@context": "https://schema.org",
"@type": "BreadcrumbList",
"itemListElement": [
{"@type":"ListItem","position":1,"name":"Home","item":"https://www.adlive.ai/"},
{"@type":"ListItem","position":2,"name":"Features","item":"https://www.adlive.ai/#features"},
{"@type":"ListItem","position":3,"name":"Integrations","item":"https://www.adlive.ai/#integrations"},
{"@type":"ListItem","position":4,"name":"FAQ","item":"https://www.adlive.ai/#faq"}
]
}



{
"@context": "https://schema.org",
"@type": "FAQPage",
"mainEntity": [
{"@type":"Question","name":"How do approval workflows and guardrails work?","acceptedAnswer":{"@type":"Answer","text":"Set thresholds (ROAS, CPA, budget caps) and approval levels. The AI proposes changes and executes automatically within guardrails, or routes to approval when required."}},
{"@type":"Question","name":"Can I override the AI?","acceptedAnswer":{"@type":"Answer","text":"Yes. You can pause automation per campaign, set overrides, and view full change logs with revert options."}},
{"@type":"Question","name":"What attribution models are supported?","acceptedAnswer":{"@type":"Answer","text":"We support GA4 default, data-driven (if eligible), and model comparisons for planning. We’ll reflect your account-level model in reporting."}},
{"@type":"Question","name":"How are negatives handled?","acceptedAnswer":{"@type":"Answer","text":"We recommend and optionally auto-apply negatives at account, campaign, and ad group levels based on intent clustering and search term analysis."}},
{"@type":"Question","name":"Setup time and required data?","acceptedAnswer":{"@type":"Answer","text":"Guided OAuth onboarding takes minutes. Forecasts are better with at least 30 days of spend and conversion data."}},
{"@type":"Question","name":"What data privacy controls are in place?","acceptedAnswer":{"@type":"Answer","text":"Data is encrypted in transit and at rest. We use scoped OAuth, respect role permissions, and minimize data retention. SOC 2 is on our roadmap."}}
]
}

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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 px-3 py-2 rounded-md outline-none ring-2 ring-indigo-500 bg-neutral-900 text-neutral-100 font-quicksand" href="#main" style={{}}>Skip to content</a>
<header className="fixed inset-x-0 top-0 z-50 transition-colors" id="site-header">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-4">
<div className="flex items-center gap-3">
<div className="text-xl tracking-tight font-semibold text-neutral-100 font-quicksand" style={{}}>ADL</div>
<span className="hidden sm:inline-block text-sm text-neutral-400 font-quicksand" style={{}}>Adlive</span>
</div>
<nav aria-label="Primary" className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#how-it-works" style={{}}>How it works</a>
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#features" style={{}}>Features</a>
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#integrations" style={{}}>Integrations</a>
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#outcomes" style={{}}>Outcomes</a>
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#security" style={{}}>Security</a>
<a className="text-sm transition-colors text-neutral-300 hover:text-white font-quicksand" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center justify-center rounded-md bg-indigo-500 text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 hover:bg-indigo-400 text-white font-quicksand" data-open-modal="demo" style={{}}>Book a demo</button>
<button className="inline-flex items-center justify-center rounded-md border text-sm font-medium px-4 py-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 border-indigo-400/40 hover:border-indigo-400 text-indigo-300 hover:text-white font-quicksand" data-open-modal="access" style={{}}>Request access</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5" id="menu-btn" style={{}}>
<i className="w-6 h-6" data-lucide="menu"></i>
<span className="sr-only font-quicksand">Open menu</span>
</button>
</div>
<div className="md:hidden hidden border-t pb-4 border-white/10" id="mobile-nav">
<nav aria-label="Mobile" classflex="" flex-col="" pt-2"="" px-2="">
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#how-it-works" style={{}}>How it works</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#features" style={{}}>Features</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#integrations" style={{}}>Integrations</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#outcomes" style={{}}>Outcomes</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#security" style={{}}>Security</a>
<a className="px-3 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" href="#faq" style={{}}>FAQ</a>
<div className="mt-2 flex gap-2 px-2">
<button className="flex-1 inline-flex items-center justify-center rounded-md bg-indigo-500 text-sm font-medium px-4 py-2 transition-colors hover:bg-indigo-400 text-white font-quicksand" data-open-modal="demo">Book a demo</button>
<button className="flex-1 inline-flex items-center justify-center rounded-md border text-sm font-medium px-4 py-2 transition-colors border-indigo-400/40 hover:border-indigo-400 text-indigo-300 hover:text-white font-quicksand" data-open-modal="access">Request access</button>
</div>
</nav>
</div>
</div>
</header>
<main className="pt-24" id="main">

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<img alt="" className="h-full w-full object-cover opacity-[0.12] mix-blend-screen" src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/50 to-neutral-950" style={{}}></div>
</div>
<div className="relative max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-20 pr-4 pb-20 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl tracking-tight text-white font-quicksand font-medium">AI agents for Google Ads that cut manual work 60–70%.</h1>
<p className="text-lg text-neutral-300 font-quicksand" style={{}}>Adlive analyzes, diagnoses, and optimizes in real time—within your guardrails—to boost ROAS across the Google Ads lifecycle.</p>
<div className="flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-500 text-sm font-medium px-5 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 hover:bg-indigo-400 text-white font-quicksand" data-open-modal="demo" style={{}}>
<i className="w-4 h-4" data-lucide="calendar"></i> Book a demo
                </button>
<button className="inline-flex items-center gap-2 rounded-md border text-sm font-medium px-5 py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 border-indigo-400/40 hover:border-indigo-400 text-indigo-300 hover:text-white font-quicksand" data-open-modal="access" style={{}}>
<i className="w-4 h-4" data-lucide="unlock"></i> Request access (whitelist)
                </button>
<a className="inline-flex items-center gap-2 text-sm underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded text-neutral-300 hover:text-white font-quicksand" href="#how-it-works" style={{}}>
<i className="w-4 h-4" data-lucide="play-circle"></i> See how it works
                </a>
</div>
<div className="pt-6">
<div className="text-xs uppercase tracking-wide text-neutral-400 font-quicksand" style={{}}>Designed with Omnicom Media Group</div>
<div className="mt-2 flex flex-wrap items-center gap-5">
<div className="flex items-center gap-2 text-neutral-400" style={{}}>
<div className="rounded-md border px-2 py-1 text-[11px] border-white/10 text-neutral-300 font-quicksand" style={{}}>OAuth</div>
<span className="text-sm font-quicksand">Google Ads</span>
</div>
<div className="flex items-center gap-2 text-neutral-400" style={{}}><span className="text-sm font-quicksand">GA4</span></div>
<div className="flex items-center gap-2 text-neutral-400" style={{}}><span className="text-sm font-quicksand">SEMrush</span></div>
<div className="flex items-center gap-2 text-neutral-400" style={{}}><span className="text-sm font-quicksand">TrafficGuard</span></div>
<div className="flex items-center gap-2 text-neutral-400" style={{}}><span className="text-sm font-quicksand">Adjust</span></div>
<div className="flex items-center gap-2 text-neutral-400" style={{}}><span className="text-sm font-quicksand">AppsFlyer</span></div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 bg-indigo-500/10 rounded-3xl blur-3xl"></div>
<div className="relative rounded-2xl border backdrop-blur p-4 border-white/10 bg-neutral-900/70" style={{}}>
<div className="flex items-center justify-between border-b pb-3 border-white/10">
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Unified Performance</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-emerald-500/10 text-[11px] text-emerald-300 font-quicksand">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i> Guardrails
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-indigo-500/10 text-[11px] text-indigo-300 font-quicksand">
<i className="w-3.5 h-3.5" data-lucide="zap"></i> Auto
                    </span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-4">
<div className="space-y-3">
<div className="flex items-start gap-3 rounded-md border p-3 border-white/10 bg-neutral-900/60" style={{}}>
<i className="w-4 h-4 mt-0.5 text-amber-400" data-lucide="bell-ring"></i>
<div>
<div className="text-sm text-neutral-200 font-quicksand" style={{}}>Predictive alert: CPA spike forecast in US-Search</div>
<div className="text-xs text-neutral-400 font-quicksand" style={{}}>Action queued: reduce bids 12% off-peak</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-md border p-3 border-white/10 bg-neutral-900/60" style={{}}>
<i className="w-4 h-4 mt-0.5 text-indigo-300" data-lucide="target"></i>
<div>
<div className="text-sm text-neutral-200 font-quicksand" style={{}}>New intent cluster: “winter boots sale”</div>
<div className="text-xs text-neutral-400 font-quicksand" style={{}}>Adds 38 kws · 11 negatives · +6% ROAS est.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-md border p-3 border-white/10 bg-neutral-900/60" style={{}}>
<i className="w-4 h-4 mt-0.5 text-emerald-300" data-lucide="clock"></i>
<div>
<div className="text-sm text-neutral-200 font-quicksand" style={{}}>Hourly spend plan applied</div>
<div className="text-xs text-neutral-400 font-quicksand" style={{}}>Seasonality uplift +14% protected by caps</div>
</div>
</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-neutral-900/60" style={{}}>
<h3 className="text-sm text-neutral-300 font-quicksand" style={{}}>ROAS trend</h3>
<p className="text-xs text-neutral-500 font-quicksand" style={{}}>7-day rolling</p>
<div className="mt-2 rounded-md p-2 bg-neutral-950/60" style={{}}>
<div className="relative">
<div className="w-full">
<div className="relative">
<div className="relative">
<div className="w-full">
<div className="relative">
<div className="w-full">
<div className="relative">
<div className="">
<div className="">
<div className="">
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div className="">
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div>
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative">
<div className="relative h-40">
<canvas className="w-full h-full" id="heroChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div> 
</div>
</div>
</div>
</div>
<div className="mt-3 text-[11px] text-neutral-500 font-quicksand" style={{}}>Works within your defined ROAS thresholds, CPA caps, and approval rules.</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl border p-6 transition-colors border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-amber-300" data-lucide="trash-2"></i>
<h3 className="text-lg tracking-tight font-semibold text-white font-quicksand">Wasted spend</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Fragmented tooling leads to missed negatives and overbidding.</p>
<div className="mt-4 text-sm text-emerald-300 font-quicksand">–Y% wasted spend</div>
</div>
<div className="rounded-xl border p-6 transition-colors border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-indigo-300" data-lucide="timer"></i>
<h3 className="text-lg tracking-tight font-semibold text-white font-quicksand">Slow manual ops</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Hours spent on bids, budgets, keywords—never fully caught up.</p>
<div className="mt-4 text-sm text-emerald-300 font-quicksand">60–70% workload reduction</div>
</div>
<div className="rounded-xl border p-6 transition-colors border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60" style={{}}>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-rose-300" data-lucide="activity"></i>
<h3 className="text-lg tracking-tight font-semibold text-white font-quicksand">Late reactions</h3>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Miss peaks, seasonality, and anomalies without predictive alerts.</p>
<div className="mt-4 text-sm text-emerald-300 font-quicksand">Predictive alerts · &lt;5 min time-to-alert</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8" id="how-it-works">
<div className="flex items-center justify-between">
<h2 className="text-3xl tracking-tight text-white font-quicksand font-medium">How it works</h2>
<div className="hidden sm:flex items-center gap-2 text-xs text-neutral-400 font-quicksand" style={{}}>
<i className="w-3.5 h-3.5" data-lucide="info"></i>
            Not a black box—every action explained and reversible.
          </div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="rounded-xl border p-5 border-white/10 bg-neutral-900/50" style={{}}>
<div className="flex items-center gap-2 text-neutral-300" style={{}}>
<i className="w-4 h-4" data-lucide="plug"></i>
<span className="text-sm font-quicksand">Onboard &amp; Connect</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Guided OAuth setup, missing data flags.</p>
<div className="mt-3 text-xs text-neutral-500 font-quicksand" style={{}}>AI: Validates scopes, maps accounts, checks data quality.</div>
</div>
<div className="rounded-xl border p-5 border-white/10 bg-neutral-900/50" style={{}}>
<div className="flex items-center gap-2 text-neutral-300" style={{}}>
<i className="w-4 h-4" data-lucide="search"></i>
<span className="text-sm font-quicksand">Diagnose</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Compute KPIs, root cause analysis.</p>
<div className="mt-3 text-xs text-neutral-500 font-quicksand" style={{}}>AI: Prioritizes actions with lift/confidence.</div>
</div>
<div className="rounded-xl border p-5 border-white/10 bg-neutral-900/50" style={{}}>
<div className="flex items-center gap-2 text-neutral-300" style={{}}>
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i>
<span className="text-sm font-quicksand">Optimize</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Bids, budgets, keywords, negatives—guardrail-safe.</p>
<div className="mt-3 text-xs text-neutral-500 font-quicksand" style={{}}>AI: Executes and logs with approvals.</div>
</div>
<div className="rounded-xl border p-5 border-white/10 bg-neutral-900/50" style={{}}>
<div className="flex items-center gap-2 text-neutral-300" style={{}}>
<i className="w-4 h-4" data-lucide="line-chart"></i>
<span className="text-sm font-quicksand">Forecast &amp; Plan</span>
</div>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Seasonality, SEMrush intel, flash sale toolkit.</p>
<div className="mt-3 text-xs text-neutral-500 font-quicksand" style={{}}>AI: Simulates impact vs. ROAS/CPA targets.</div>
</div>
</div>
<div className="mt-8 rounded-xl border p-6 flex flex-wrap items-center justify-between gap-4 border-white/10 bg-neutral-900/40" style={{}}>
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Ready to see it in your account?</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-indigo-500 text-sm font-medium px-4 py-2 transition-colors hover:bg-indigo-400 text-white font-quicksand" data-open-modal="demo">
<i className="w-4 h-4" data-lucide="calendar"></i> Book a demo
            </button>
<button className="inline-flex items-center gap-2 rounded-md border text-sm font-medium px-4 py-2 transition-colors border-indigo-400/40 hover:border-indigo-400 text-indigo-300 hover:text-white font-quicksand" data-open-modal="access">
<i className="w-4 h-4" data-lucide="unlock"></i> Request access
            </button>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-12" id="features">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="order-2 lg:order-1">
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">Smart Onboarding &amp; Connections</h3>
<p className="mt-2 text-neutral-400 font-quicksand" style={{}}>OAuth with scoped access, guided mapping, and data quality checks.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300" style={{}}>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="check-circle"></i> Missing conversion tags flagged</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="check-circle"></i> Role permissions respected</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="check-circle"></i> Quick account selection and sync</li>
</ul>
</div>
<div className="order-1 lg:order-2 rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<div className="h-48 rounded-md border flex items-center justify-center text-neutral-500 text-sm border-white/10 bg-neutral-950/60 font-quicksand" style={{}}>OAuth flow mock</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<div className="h-48 rounded-md border flex items-center justify-center text-neutral-500 text-sm border-white/10 bg-neutral-950/60 font-quicksand" style={{}}>Unified dashboard mock</div>
</div>
<div>
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">Unified Performance Dashboard</h3>
<p className="mt-2 text-neutral-400 font-quicksand" style={{}}>Cross-campaign view with drilldowns and predictive alerts in one place.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300" style={{}}>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="bell"></i> Priority alerts, not noise</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="git-branch"></i> Change logs with revert</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="filter"></i> Filters by device, geo, hour</li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">AI-Powered Diagnostics</h3>
<p className="mt-2 text-neutral-400 font-quicksand" style={{}}>KPI computation with root cause and prioritized actions.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300" style={{}}>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="search-check"></i> Causal drivers surfaced</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="list-checks"></i> Impact and confidence scoring</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="square-pen"></i> Suggested remediations</li>
</ul>
</div>
<div className="rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<h4 className="text-sm text-neutral-300 font-quicksand" style={{}}>Automated Optimization Engine</h4>
<p className="text-xs text-neutral-500 font-quicksand" style={{}}>Guardrail-safe actions</p>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg border p-3 border-white/10 bg-neutral-950/60" style={{}}>
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Bids</div>
<div className="text-xs text-neutral-500 font-quicksand" style={{}}>Time-of-day · Devices</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-neutral-950/60" style={{}}>
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Budgets</div>
<div className="text-xs text-neutral-500 font-quicksand" style={{}}>Hourly spend plan</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-neutral-950/60" style={{}}>
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Keywords</div>
<div className="text-xs text-neutral-500 font-quicksand" style={{}}>Match rebalancing</div>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-neutral-950/60" style={{}}>
<div className="text-sm text-neutral-300 font-quicksand" style={{}}>Negatives</div>
<div className="text-xs text-neutral-500 font-quicksand" style={{}}>Intent-based</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<h4 className="text-sm text-neutral-300 font-quicksand" style={{}}>Campaign Setup Acceleration</h4>
<ul className="mt-2 text-sm space-y-2 text-neutral-300" style={{}}>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="layout-template"></i> Templates &amp; bulk actions</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="clock"></i> Hourly budget plans</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-indigo-300" data-lucide="repeat"></i> Continuous optimization loop</li>
</ul>
</div>
<div>
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">Strategic Planning &amp; Forecasting</h3>
<p className="mt-2 text-neutral-400 font-quicksand" style={{}}>Ingest seasonality, SEMrush insights, and sale scenarios to plan safely.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300" style={{}}>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="sparkles"></i> Flash sale toolkit</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="compare"></i> Attribution comparisons</li>
<li className="flex gap-2 font-quicksand"><i className="w-4 h-4 text-emerald-300" data-lucide="line-chart"></i> Impact forecasts</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<div className="flex items-center justify-between">
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">Keyword Strategy Optimization</h3>
<div className="text-xs text-neutral-400 font-quicksand" style={{}}>Intent clustering · Match rebalancing · Negatives · Budget alignment</div>
</div>
<div aria-label="Keyword Optimization Tabs" className="mt-4 flex flex-wrap gap-2" role="tablist">
<button aria-controls="ko-panel-1" aria-selected="true" className="ko-tab aria-selected:true inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 bg-white/10 text-white font-quicksand" id="ko-tab-1" role="tab">
<i className="w-4 h-4" data-lucide="scan-search"></i> Analysis
            </button>
<button aria-controls="ko-panel-2" aria-selected="false" className="ko-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" id="ko-tab-2" role="tab" style={{}}>
<i className="w-4 h-4" data-lucide="target"></i> Intent Clustering
            </button>
<button aria-controls="ko-panel-3" aria-selected="false" className="ko-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" id="ko-tab-3" role="tab" style={{}}>
<i className="w-4 h-4" data-lucide="case-sensitive"></i> Match Types
            </button>
<button aria-controls="ko-panel-4" aria-selected="false" className="ko-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" id="ko-tab-4" role="tab" style={{}}>
<i className="w-4 h-4" data-lucide="minus-circle"></i> Negatives
            </button>
<button aria-controls="ko-panel-5" aria-selected="false" className="ko-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" id="ko-tab-5" role="tab" style={{}}>
<i className="w-4 h-4" data-lucide="wallet"></i> Budget Alignment
            </button>
<button aria-controls="ko-panel-6" aria-selected="false" className="ko-tab inline-flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 text-neutral-300 hover:text-white hover:bg-white/5 font-quicksand" id="ko-tab-6" role="tab" style={{}}>
<i className="w-4 h-4" data-lucide="trending-up"></i> Forecast Impact
            </button>
</div>
<div className="mt-4">
<div aria-labelledby="ko-tab-1" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" id="ko-panel-1" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>We analyze search terms, CTR, CVR, and CPC to find clusters with high waste or missed intent. Recommended actions include adding keywords, consolidating match types, and applying negatives.</p>
</div>
<div aria-labelledby="ko-tab-2" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" hidden="" id="ko-panel-2" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>Intent clusters group semantically related queries. The AI scores each cluster’s incremental ROAS and suggests budget allocation.</p>
</div>
<div aria-labelledby="ko-tab-3" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" hidden="" id="ko-panel-3" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>Match rebalancing moves spend from broad to phrase/exact where appropriate, preserving exploration within your caps.</p>
</div>
<div aria-labelledby="ko-tab-4" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" hidden="" id="ko-panel-4" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>Negative recommendations reduce wasted spend by excluding low-intent terms at the right hierarchy level.</p>
</div>
<div aria-labelledby="ko-tab-5" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" hidden="" id="ko-panel-5" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>Budget alignment shifts investment toward high-intent clusters and dayparts with better marginal ROAS.</p>
</div>
<div aria-labelledby="ko-tab-6" className="ko-panel rounded-lg border p-4 border-white/10 bg-neutral-950/50" hidden="" id="ko-panel-6" role="tabpanel" style={{}}>
<p className="text-sm text-neutral-300 font-quicksand" style={{}}>Impact forecasts estimate uplift ranges and confidence, depending on historical data quality and seasonality.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" id="integrations">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 rounded-2xl border p-6 border-white/10 bg-neutral-900/40" style={{}}>
<h3 className="text-2xl tracking-tight text-white font-quicksand font-medium">Integrations</h3>
<p className="mt-2 text-sm text-neutral-400 font-quicksand" style={{}}>Works within Google Ads API. OAuth with scoped access; respects role permissions. Real-time fraud filtering via TrafficGuard.</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="group rounded-lg border p-3 transition-colors border-white/10 bg-neutral-950/40 hover:bg-neutral-950/70" style={{}}>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-300 font-quicksand" style={{}}>Google Ads</span>
</div></div></div></div></div></section></main>
    </>
  );
}
