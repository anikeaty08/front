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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

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
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-[#FAFAF9]/80 backdrop-blur-xl border-b border-transparent">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-stone-900 text-white rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-900 font-display">WantToPay</span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="#outcomes">Why WantToPay</a>
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="#platform">Platform</a>
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="#use-cases">Solutions</a>
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="#developers">Developers</a>
<a className="text-stone-500 hover:text-stone-900 transition-colors" href="#compliance">Compliance</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-stone-600 hover:text-stone-900" href="#contact">Log in</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold rounded-full bg-stone-900 text-white hover:bg-stone-800 transition-all hover:shadow-lg hover:shadow-stone-200" href="#contact">
                    Get API Keys
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 ambient-glow"></div>
<div className="absolute inset-0 bg-grid-subtle opacity-60"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-white border border-stone-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-semibold tracking-wide text-stone-600 uppercase">Astana Hub Participant · Central Asia Focus</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-stone-900 mb-6 leading-[1.05]">
                            Card Issuing API <br/>
<span className="text-stone-400">for Central Asia.</span>
</h1>
<p className="text-xl md:text-2xl text-stone-600 mb-6 font-medium tracking-tight leading-tight">
                            Launch controlled prepaid card programs through API — embedded into your product or internal systems.
                        </p>
<p className="text-base text-stone-500 mb-10 leading-relaxed font-light max-w-lg">
                            WantToPay provides card-issuing infrastructure for businesses building regulated card flows. You integrate our API into your architecture and run card functionality within a closed ecosystem — for corporate spend or customer-facing products.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-all hover:translate-y-[-1px] shadow-lg shadow-stone-200" href="#contact">
                                Request API Access
                            </a>
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full border border-stone-200 bg-white text-stone-600 text-sm font-medium hover:border-stone-300 hover:text-stone-900 transition-all" href="#use-cases">
                                Explore use cases
                            </a>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-stone-200 to-stone-100 rounded-2xl blur opacity-30"></div>
<div className="relative bg-[#1c1917] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform rotate-y-[-5deg] rotate-x-[5deg] transition-transform duration-700 hover:rotate-0">

<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#292524]">
<div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
<div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
<div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
<div className="ml-4 text-[10px] font-mono text-stone-500">issue_card.py</div>
</div>

<div className="p-6 font-mono text-xs md:text-sm leading-relaxed text-stone-300 overflow-x-auto">
<pre><span className="text-stone-500"># Issue a new virtual card</span>
response = client.cards.create(
  type=<span className="code-token-string">"virtual"</span>,
  currency=<span className="code-token-string">"KZT"</span>,
  limit=<span className="code-token-number">500000</span>,
  controls={
    <span className="code-token-key">"mcc_whitelist"</span>: [<span className="code-token-string">"software"</span>, <span className="code-token-string">"advertising"</span>],
    <span className="code-token-key">"single_use"</span>: <span className="code-token-bool">False</span>
  }
)

<span className="text-emerald-500">print</span>(f"Card Issued: {response.id}")
<span className="text-emerald-500">print</span>(f"Status: {response.status}")
</pre>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border border-stone-100 flex items-center gap-3 animate-bounce-slow" style={{animationDuration: '3s'}}>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<div>
<div className="text-xs font-bold text-stone-900">Program Active</div>
<div className="text-[10px] text-stone-500">Monitoring enabled</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="outcomes">
<div className="max-w-[1400px] mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Built for controlled card programs — <br/><span className="text-stone-400">not generic payments.</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-900">
<span className="iconify" data-icon="lucide:rocket" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-stone-900">Faster launch</h3>
<p className="text-sm text-stone-500 leading-relaxed">Bring card functionality to market via API with a defined onboarding flow (KYB → Sandbox → Production).</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-900">
<span className="iconify" data-icon="lucide:settings-2" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-stone-900">Infrastructure-level control</h3>
<p className="text-sm text-stone-500 leading-relaxed">Set program rules, limits, usage restrictions, and monitoring logic at the API layer.</p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded bg-stone-100 flex items-center justify-center text-stone-900">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold text-stone-900">Compliance-ready approach</h3>
<p className="text-sm text-stone-500 leading-relaxed">Design your card program with sanctions screening and transaction monitoring embedded into the infrastructure.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] border-t border-stone-200" id="platform">
<div className="max-w-[1400px] mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Card issuing core via API</h2>
<p className="text-stone-500 text-lg font-light">WantToPay acts as an infrastructure layer covering issuance, transaction flows, and policy controls at API level.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200/60">
<div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">01 — Issuance</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:credit-card" data-width="16"></span>
                                Virtual prepaid card issuance via API
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:refresh-cw" data-width="16"></span>
                                Lifecycle &amp; status management
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:lock" data-width="16"></span>
                                Limit enforcement and controls
                            </li>
</ul>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200/60">
<div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">02 — Transaction Flows</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:wallet" data-width="16"></span>
                                Balance operations
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:arrow-left-right" data-width="16"></span>
                                Funding &amp; spending flows
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:eye" data-width="16"></span>
                                Transaction event visibility
                            </li>
</ul>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-stone-200/60">
<div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">03 — Control &amp; Reporting</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:sliders" data-width="16"></span>
                                Program rules and restrictions
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:history" data-width="16"></span>
                                Transaction history
                            </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<span className="iconify mt-0.5 text-stone-400" data-icon="lucide:bar-chart-2" data-width="16"></span>
                                Reporting-ready data streams
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="use-cases">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900">Two ways to use WantToPay</h2>
</div>
<div className="grid lg:grid-cols-2 gap-10">

<div className="group relative rounded-3xl bg-[#FAFAF9] border border-stone-200 p-8 lg:p-12 hover:shadow-lg transition-all duration-300">
<div className="mb-6">
<span className="inline-flex items-center px-2.5 py-1 rounded bg-white border border-stone-200 text-[11px] font-bold text-stone-500 uppercase tracking-wide">B2B Operations</span>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-2">Internal corporate spend</h3>
<p className="text-stone-500 mb-8 font-light">Issue virtual cards for teams. Control spend programmatically.</p>
<ul className="grid grid-cols-2 gap-y-3 gap-x-4 mb-8">
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Operational expenses</li>
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Marketing and ad spend</li>
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>SaaS subscriptions</li>
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Vendor payments</li>
</ul>
<div className="pt-8 border-t border-stone-200">
<div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">How it works</div>
<p className="text-sm text-stone-500 leading-relaxed">Cards are issued via API, rules and limits are applied programmatically, and transaction activity is monitored at infrastructure level.</p>
</div>
</div>

<div className="group relative rounded-3xl bg-[#FAFAF9] border border-stone-200 p-8 lg:p-12 hover:shadow-lg transition-all duration-300">
<div className="mb-6">
<span className="inline-flex items-center px-2.5 py-1 rounded bg-stone-900 border border-stone-900 text-[11px] font-bold text-white uppercase tracking-wide">Controlled Ecosystem</span>
</div>
<h3 className="text-2xl font-semibold text-stone-900 mb-2">Customer-facing card programs</h3>
<p className="text-stone-500 mb-8 font-light">Embed card functionality into your product under your brand.</p>
<div className="bg-blue-50/50 border border-blue-100/60 rounded-xl p-4 mb-8">
<div className="flex gap-3">
<span className="iconify text-blue-600 mt-0.5" data-icon="lucide:info" data-width="16"></span>
<p className="text-xs text-blue-900/80 leading-relaxed">
                                    Cards are issued within a closed product ecosystem and made available only to approved users following identity and risk checks.
                                </p>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Embedded card-based financial flows</li>
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Controlled spending and limits</li>
<li className="text-xs font-medium text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-stone-300"></span>Card-based user scenarios</li>
</ul>
<div className="pt-8 border-t border-stone-200">
<div className="text-[11px] font-bold text-stone-400 uppercase tracking-widest mb-2">How it works</div>
<p className="text-sm text-stone-500 leading-relaxed">Cards are issued via API and linked to user accounts in your system. UX, user journeys, and product logic are implemented on your side.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start justify-between">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Who typically builds on WantToPay</h2>
<p className="text-stone-500 text-lg font-light leading-relaxed">
                            WantToPay is used by companies embedding card functionality into regulated products or operational workflows.
                        </p>
</div>
<div className="max-w-xl flex flex-wrap gap-3">
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">Fintech infrastructure</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">Digital platforms</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">B2B products</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">Corporate spend</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">Marketplaces</span>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-stone-50 text-sm font-medium text-stone-700">Expense orchestration</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAF9] border-t border-stone-200">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">Program controls at infrastructure level</h2>
<p className="text-stone-500 text-lg font-light mb-8">
                            Define how cards can be used — through program rules, limits, and transaction controls directly via API.
                        </p>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-600"><span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span></div>
<div>
<span className="block text-stone-900 font-medium">Spend limits and velocity rules</span>
<span className="text-sm text-stone-500">Set daily, monthly, or transaction-level caps.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-600"><span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span></div>
<div>
<span className="block text-stone-900 font-medium">Merchant category controls (MCC)</span>
<span className="text-sm text-stone-500">Whitelist or blacklist specific industries.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-600"><span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span></div>
<div>
<span className="block text-stone-900 font-medium">Sanctions and watchlist screening</span>
<span className="text-sm text-stone-500">Automated compliance checks on every transaction.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-emerald-600"><span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span></div>
<div>
<span className="block text-stone-900 font-medium">Program-level rules</span>
<span className="text-sm text-stone-500">Define default behaviors per use case.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="developers">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Developer-first integration</h2>
<p className="text-stone-500 font-light">A REST API designed for predictable integration into modern architectures. Use sandbox access for testing and move to production after KYB.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 bg-[#FAFAF9] rounded-xl border border-stone-200 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<span className="iconify" data-icon="lucide:brackets" data-width="20"></span>
</div>
<h4 className="text-stone-900 font-medium mb-1">RESTful design</h4>
<p className="text-xs text-stone-500">Predictable JSON payloads</p>
</div>
<div className="p-6 bg-[#FAFAF9] rounded-xl border border-stone-200 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<span className="iconify" data-icon="lucide:key" data-width="20"></span>
</div>
<h4 className="text-stone-900 font-medium mb-1">Access Control</h4>
<p className="text-xs text-stone-500">Token-based authentication</p>
</div>
<div className="p-6 bg-[#FAFAF9] rounded-xl border border-stone-200 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-4 text-stone-700">
<span className="iconify" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<h4 className="text-stone-900 font-medium mb-1">Workflow</h4>
<p className="text-xs text-stone-500">Sandbox → Production environment</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0C0A09] text-white" id="compliance">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Security and compliance <br/>by design.</h2>
<p className="text-lg text-stone-400 leading-relaxed mb-12 max-w-md">
                        WantToPay is designed for controlled card programs where compliance and risk controls are part of the infrastructure layer.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-800 text-emerald-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</span>
<span className="text-stone-300 font-light">AML / KYC modules</span>
</li>
<li className="flex items-start gap-4">
<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-800 text-emerald-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</span>
<span className="text-stone-300 font-light">Sanctions &amp; watchlist screening</span>
</li>
<li className="flex items-start gap-4">
<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-800 text-emerald-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</span>
<span className="text-stone-300 font-light">Transaction monitoring</span>
</li>
<li className="flex items-start gap-4">
<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-800 text-emerald-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
</span>
<span className="text-stone-300 font-light">Merchant category and usage controls</span>
</li>
</ul>
<div className="mt-12 pt-8 border-t border-stone-800">
<p className="text-xs text-stone-500 font-mono">Designed in line with PCI DSS and ISO 27001 security standards.</p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full"></div>
<div className="relative grid grid-cols-2 gap-4">
<div className="p-6 bg-stone-900 rounded-2xl border border-stone-800">
<div className="mb-4 text-stone-500"><span className="iconify" data-icon="lucide:lock" data-width="32"></span></div>
<div className="font-semibold text-lg">Data Safety</div>
<div className="text-xs text-stone-500 mt-2">End-to-end encryption</div>
</div>
<div className="p-6 bg-stone-900 rounded-2xl border border-stone-800 mt-8">
<div className="mb-4 text-stone-500"><span className="iconify" data-icon="lucide:eye-off" data-width="32"></span></div>
<div className="font-semibold text-lg">Privacy</div>
<div className="text-xs text-stone-500 mt-2">Data isolation per tenant</div>
</div>
<div className="p-6 bg-stone-900 rounded-2xl border border-stone-800">
<div className="mb-4 text-stone-500"><span className="iconify" data-icon="lucide:server" data-width="32"></span></div>
<div className="font-semibold text-lg">Uptime</div>
<div className="text-xs text-stone-500 mt-2">Redundant infrastructure</div>
</div>
<div className="p-6 bg-stone-900 rounded-2xl border border-stone-800 mt-8">
<div className="mb-4 text-stone-500"><span className="iconify" data-icon="lucide:activity" data-width="32"></span></div>
<div className="font-semibold text-lg">Fraud</div>
<div className="text-xs text-stone-500 mt-2">Real-time signal detection</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-12">Getting started</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative">

<div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-stone-100 -z-10"></div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-stone-900 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">01</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Application</h4>
<p className="text-xs text-stone-500">Describe your use case</p>
</div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-stone-900 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">02</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Verification</h4>
<p className="text-xs text-stone-500">KYB verification</p>
</div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-stone-900 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">03</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Contract</h4>
<p className="text-xs text-stone-500">Execution &amp; Signing</p>
</div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-stone-900 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">04</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Sandbox</h4>
<p className="text-xs text-stone-500">Access API environment</p>
</div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-stone-900 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">05</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Integration</h4>
<p className="text-xs text-stone-500">Client-side implementation</p>
</div>

<div className="relative bg-white pt-4 lg:pt-0">
<div className="w-12 h-12 rounded-full border border-stone-200 bg-white text-emerald-600 flex items-center justify-center font-mono text-sm font-bold mb-4 shadow-sm">06</div>
<h4 className="text-sm font-semibold text-stone-900 mb-2">Live</h4>
<p className="text-xs text-stone-500">Production launch</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Request API access</h2>
<p className="text-stone-500 font-light">Describe your use case — we’ll contact you to discuss integration and program configuration.</p>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Contact Person</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="Full Name" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Work Email</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Role</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="e.g. CTO, Product Manager" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Company Name</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="Legal Entity Name" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Jurisdiction</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="e.g. Kazakhstan, Singapore" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Website</label>
<input className="w-full input-minimal text-stone-900 placeholder:text-stone-300" placeholder="https://" type="url"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Expected Markets</label>
<select className="w-full input-minimal text-stone-900 bg-transparent">
<option disabled="" selected="" value="">Select markets</option>
<option>Central Asia</option>
<option>Global (Cross-border)</option>
<option>Specific Country</option>
</select>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Expected Monthly Volume</label>
<select className="w-full input-minimal text-stone-900 bg-transparent">
<option disabled="" selected="" value="">Select range</option>
<option>Pilot (&lt; $10k)</option>
<option>Growth ($10k - $100k)</option>
<option>Scale ($100k+)</option>
</select>
</div>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Use Case Type</label>
<div className="flex flex-col sm:flex-row gap-6">
<label className="flex items-center gap-3 cursor-pointer">
<input className="checkbox-custom text-stone-900" type="checkbox"/>
<span className="text-sm font-medium text-stone-700">Internal Expense Cards</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="checkbox-custom text-stone-900" type="checkbox"/>
<span className="text-sm font-medium text-stone-700">Customer Card Product</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<input className="checkbox-custom text-stone-900" type="checkbox"/>
<span className="text-sm font-medium text-stone-700">Other</span>
</label>
</div>
</div>
<div className="group">
<label className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Project Details</label>
<textarea className="w-full input-minimal text-stone-900 resize-none placeholder:text-stone-300" placeholder="Briefly describe your use case..." rows="2"></textarea>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-stone-900 text-white rounded-xl font-medium text-base hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2" type="button">
                                Submit request
                                <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
<p className="text-center text-[10px] text-stone-400 mt-4">We work with established companies and defined card programs. Each request is reviewed individually.</p>
</div>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-24 pb-12 border-t border-stone-100">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-stone-900 text-white rounded flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="font-bold tracking-tight text-stone-900">WantToPay</span>
</a>
<p className="text-sm text-stone-500 mb-6 max-w-xs leading-relaxed">
                        The financial infrastructure layer for the next generation of internet businesses in Central Asia.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="20"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-stone-900">Platform</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Product</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Use Cases</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Controls</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Security &amp; Compliance</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-stone-900">Resources</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Developers</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">FAQ</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-semibold text-sm text-stone-900">Legal</h4>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">User Agreement</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">Privacy Policy</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">AML / KYC Policy</a>
<a className="text-sm text-stone-500 hover:text-stone-900" href="#">API Terms of Use</a>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-400 font-mono">© 2026 WantToPay Inc. All rights reserved.</p>
<div className="flex gap-8">
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Privacy</a>
<a className="text-xs text-stone-400 hover:text-stone-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
