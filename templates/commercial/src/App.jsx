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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-slate-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold tracking-tight text-slate-900 text-sm">SHIELD &amp; SCRIBE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#process">Methodology</a>
<a className="hover:text-slate-900 transition-colors" href="#benefits">Solutions</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-slate-600 hidden sm:block" href="#">Client Login</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-slate-800 transition-colors shadow-sm ring-1 ring-slate-900/5" href="#consult">
                    Get Risk Audit
                </a>
</div>
</div>
</nav>

<section className="md:pt-40 md:pb-28 mesh-bg overflow-hidden pt-32 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2 w-full">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Licensed in all 50 states</span>
</div>
<h1 className="leading-[1.1] md:text-5xl text-4xl font-semibold text-slate-900 tracking-tight text-left mb-8">
        Commercial insurance for <span className="text-slate-400">growth-focused</span> enterprises.
    </h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-xl leading-relaxed">
        We move beyond generic policies. Our proprietary risk modeling secures your balance sheet so you can scale without liability dragging you down.
    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<button className="bg-slate-900 text-white text-base font-medium px-6 py-3 rounded-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
            Start Your Risk Audit
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="bg-white text-slate-700 border border-slate-200 text-base font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            View Coverage Map
        </button>
</div>

<div className="border-slate-200 border-t pt-8"></div>
</div>

<div className="w-full lg:w-1/2 relative perspective-midrange">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 bg-white rotate-y-5 rotate-x-5 hover:rotate-0 transition-transform duration-700 ease-out">
<img alt="Risk Management Dashboard" className="transform w-full h-auto object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef1c0ffe-56df-40ff-91db-1e8f21d53b12_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900/5 to-transparent pointer-events-none"></div>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm border border-white/50 p-4 rounded-xl shadow-lg max-w-[200px]">
<div className="flex items-center gap-2 mb-2">
<div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-semibold text-slate-900">Risk Monitoring Active</span>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-[85%] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-emerald-500/10 rounded-full blur-3xl opacity-70"></div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-900 border-slate-800 pt-24 pb-24" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl md:mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-4">From exposed to empowered</h2>
<p className="text-slate-400">Most brokers sell a policy and disappear. We engineer a protection strategy that evolves with your revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

<div className="relative z-10">
<div className="bg-slate-800 w-24 h-24 rounded-2xl border border-slate-700 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<div className="bg-slate-900 p-3 rounded-xl text-white">
<svg className="" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h20"></path><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path><path className="" d="m4 8 16-4"></path><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"></path></svg>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-slate-800 text-slate-200 text-xs font-semibold px-2 py-1 rounded border border-slate-700">STEP 01</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Discovery</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">The Forensic Audit</h3>
<p className="text-sm leading-relaxed text-slate-400">We don't quote immediately. We analyze your contracts, ops, and previous claims to identify coverage gaps others missed.</p>
</div>

<div className="relative z-10">
<div className="bg-slate-800 w-24 h-24 rounded-2xl border border-slate-700 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<div className="bg-slate-900 p-3 rounded-xl text-white">
<svg className="" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-1"></path><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path></svg>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-slate-800 text-slate-200 text-xs font-semibold px-2 py-1 rounded border border-slate-700">STEP 02</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Architecture</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Custom Policy Structuring</h3>
<p className="text-sm leading-relaxed text-slate-400">We negotiate directly with underwriters to craft bespoke manuscript wordings that align with your specific operational risks.</p>
</div>

<div className="relative z-10">
<div className="bg-slate-800 w-24 h-24 rounded-2xl border border-slate-700 shadow-sm flex items-center justify-center mb-6 mx-auto md:mx-0">
<div className="bg-slate-900 p-3 rounded-xl text-emerald-400">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-2 py-1 rounded border border-emerald-500/20">OUTCOME</span>
<span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Protection</span>
</div>
<h3 className="text-lg font-semibold text-white mb-3">Resilient Growth</h3>
<p className="text-sm leading-relaxed text-slate-400">Your business operates with a defensive moat. Claims are handled by our in-house advocates, not a call center.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="benefits">
<div className="max-w-6xl mx-auto px-6">

<div className="mb-24">
<div className="max-w-2xl mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Optimized for your bottom line</h2>
<p className="text-slate-500">We focus on Total Cost of Risk (TCOR), not just premium price. The result is a leaner, safer balance sheet.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
<div className="text-slate-900 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12v-6"></path><path d="m15 13 5 5-5 5"></path><path d="M4 20h16"></path><path d="m15 4 5 5-5 5"></path><path d="M4 4h16"></path><path d="m4 13 5 5-5 5"></path></svg>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Faster Claims Payouts</h4>
<p className="text-sm text-slate-500">Our advocacy team reduces average claim settlement time by 40%.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
<div className="text-slate-900 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Reduced Premiums</h4>
<p className="text-sm text-slate-500">Strategic deductibles and loss control often lower premiums by 15-25%.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
<div className="text-slate-900 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Compliance Assured</h4>
<p className="text-sm text-slate-500">Automatic certificate issuance ensures you never lose a contract due to paperwork.</p>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all">
<div className="text-slate-900 mb-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Cash Flow Protection</h4>
<p className="text-sm text-slate-500">Prevent catastrophic loss from draining working capital reserves.</p>
</div>
</div>
</div>

<div className="bg-slate-900 rounded-3xl overflow-hidden text-white">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="p-12 flex flex-col justify-center">
<div className="inline-block mb-6">
<span className="bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full border border-indigo-500/30">THE ENGINE</span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Data-driven brokerage</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="bg-slate-800 p-2 rounded-lg h-fit">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-1">Dedicated Advisory Team</h4>
<p className="text-sm text-slate-400 leading-relaxed">You get a senior broker, account executive, and claims advocate. No call centers.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-slate-800 p-2 rounded-lg h-fit">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-1">Predictive Modeling</h4>
<p className="text-sm text-slate-400 leading-relaxed">We benchmark your exposure against 10,000+ peer companies to find hidden gaps.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-slate-800 p-2 rounded-lg h-fit">
<svg className="text-indigo-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l18 0"></path><path d="M5 21v-14l8 -4l8 4v14"></path><path d="M19 10l-5.5 5.5l-5.5 -5.5"></path></svg>
</div>
<div>
<h4 className="text-sm font-semibold mb-1">Renewal Strategy</h4>
<p className="text-sm text-slate-400 leading-relaxed">We start renewals 120 days out, marketing your risk to 30+ carriers to force competition.</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-800 p-12 relative overflow-hidden flex items-center justify-center">

<div className="relative w-full max-w-sm bg-slate-900 rounded-xl shadow-2xl border border-slate-700 p-6">
<div className="flex items-center gap-4 mb-6">
<div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-xs">A+</div>
<div>
<div className="h-2 w-24 bg-slate-700 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-700 rounded"></div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-800 rounded"></div>
<div className="h-2 w-full bg-slate-800 rounded"></div>
<div className="h-2 w-3/4 bg-slate-800 rounded"></div>
</div>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="p-3 bg-slate-800 rounded border border-slate-700">
<div className="text-xs text-slate-400 mb-1">Premium Savings</div>
<div className="text-lg font-semibold text-emerald-400">-18.5%</div>
</div>
<div className="p-3 bg-slate-800 rounded border border-slate-700">
<div className="text-xs text-slate-400 mb-1">Coverage Limit</div>
<div className="text-lg font-semibold text-white">2x</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Verified Impact</h2>
<p className="text-slate-500">Don't just take our word for it. See the results we've delivered for CFOs and Founders.</p>
</div>
<div className="mt-6 md:mt-0 flex gap-8">
<div className="">
<p className="text-3xl font-semibold text-slate-900">$200M+</p>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Claims Settled</p>
</div>
<div>
<p className="text-3xl font-semibold text-slate-900">98%</p>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide">Client Retention</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-800 font-medium mb-6 leading-relaxed">"We outgrew our local broker. Shield &amp; Scribe conducted an audit that found a $5M gap in our cyber liability. They fixed it before we raised our Series B."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">JS</div>
<div>
<p className="text-sm font-semibold text-slate-900">Jennifer S.</p>
<p className="text-xs text-slate-500">CFO, TechFlow Inc</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-800 font-medium mb-6 leading-relaxed">"The claims advocacy is real. When our warehouse flooded, their team was on-site within 4 hours and handled the entire adjuster negotiation."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">MD</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Marcus D.</p>
<p className="text-xs text-slate-500">COO, Logistics Pro</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-slate-800 font-medium mb-6 leading-relaxed">"I was skeptical about switching, but the process was seamless. They handled all the carrier paperwork. Best business decision this year."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-bold text-xs">EK</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Elena K.</p>
<p className="text-xs text-slate-500">Founder, GreenBuild</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-slate-50 to-slate-100 border-slate-200 border-t pt-24 pb-24">
<div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-xl">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">The brokerage difference</h2>
<p className="text-slate-500">Why modern enterprises choose Shield &amp; Scribe over traditional legacy firms.</p>
</div>
<div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-slate-50/50">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead className="">
<tr className="border-b border-slate-200 bg-slate-100/80">
<th className="uppercase text-xs font-semibold text-slate-900 tracking-wider w-1/2 pt-6 pr-6 pb-6 pl-6">Feature</th>
<th className="p-6 text-xs font-semibold text-indigo-700 uppercase tracking-wider bg-indigo-50/60 w-1/4 text-center border-x border-indigo-100">Shield &amp; Scribe</th>
<th className="p-6 text-xs font-semibold text-slate-500 uppercase tracking-wider w-1/4 text-center">Legacy Brokers</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr className="hover:bg-white transition-colors">
<td className="p-6 text-sm font-medium text-slate-900">In-House Claims Advocacy</td>
<td className="p-6 text-center bg-indigo-50/30 border-x border-indigo-100">
<div className="flex justify-center"><svg className="text-indigo-600 w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</td>
<td className="p-6 text-center text-slate-500"><span className="text-xs">Outsourced</span></td>
</tr>
<tr className="hover:bg-white transition-colors">
<td className="p-6 text-sm font-medium text-slate-900">Certificate Turnaround Time</td>
<td className="p-6 text-center bg-indigo-50/30 border-x border-indigo-100">
<span className="text-sm font-semibold text-indigo-900">Instant (Automated)</span>
</td>
<td className="p-6 text-center text-slate-500"><span className="text-xs">24-48 Hours</span></td>
</tr>
<tr className="hover:bg-white transition-colors">
<td className="p-6 text-sm font-medium text-slate-900">Annual Risk Audit</td>
<td className="p-6 text-center bg-indigo-50/30 border-x border-indigo-100">
<div className="flex justify-center"><svg className="text-indigo-600 w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
</td>
<td className="p-6 text-center text-slate-400"><svg className="text-slate-400 w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></td>
</tr>
<tr className="hover:bg-white transition-colors">
<td className="p-6 text-sm font-medium text-slate-900">Proactive Renewal Strategy</td>
<td className="p-6 text-center bg-indigo-50/30 border-x border-indigo-100">
<span className="text-sm font-semibold text-indigo-900">120 Days Out</span>
</td>
<td className="p-6 text-center text-slate-500"><span className="text-xs">30 Days Out</span></td>
</tr>
<tr className="hover:bg-white transition-colors">
<td className="p-6 text-sm font-medium text-slate-900">Carrier Market Access</td>
<td className="p-6 text-center bg-indigo-50/30 border-x border-indigo-100">
<span className="text-sm font-semibold text-indigo-900">Broad (Independent)</span>
</td>
<td className="p-6 text-center text-slate-500"><span className="text-xs">Limited (Captive)</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Common Questions</h2>
<p className="text-slate-500">Risk management is complex. Your questions, answered.</p>
</div>
<div className="space-y-4">

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>Does it cost more to use a specialized broker?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 p-6 pt-0 leading-relaxed text-sm">
                        No. Our compensation comes from the carrier as a standard commission or fee structure. In fact, because we aggressively market your risk to multiple carriers and structure your policy correctly, our clients typically see a reduction in overall costs while improving coverage.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span className="">How difficult is it to switch brokers?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 p-6 pt-0 leading-relaxed text-sm">
                        It's seamless. We handle the Broker of Record (BOR) letters and coordinate directly with your current carriers. Your coverage remains continuous, but the management transfers to us. We do the heavy lifting.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>Do you work with startups or just established enterprises?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 p-6 pt-0 leading-relaxed text-sm">
                        We work with growth-stage companies. Whether you're a Series A startup needing D&amp;O insurance or a manufacturing firm with 500 employees, our team scales the service to your complexity.
                    </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>What industries do you specialize in?</span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-slate-500 p-6 pt-0 leading-relaxed text-sm">
                        While we are generalists, we have deep expertise in Technology, Manufacturing, Construction, and Logistics. These sectors have complex liabilities that require our manuscript policy approach.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white" id="consult">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="bg-slate-900 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
<div className="absolute -top-[100px] -right-[100px] w-64 h-64 rounded-full bg-indigo-600 blur-3xl"></div>
<div className="absolute -bottom-[100px] -left-[100px] w-64 h-64 rounded-full bg-emerald-600 blur-3xl"></div>
</div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to de-risk your growth?</h2>
<p className="text-slate-400 mb-10 max-w-lg mx-auto text-lg">Schedule a complimentary risk audit. We'll review your current policies and identify gaps within 48 hours. No obligation.</p>
<form className="max-w-md mx-auto flex flex-col gap-4">
<div className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm" placeholder="Enter your work email" required="" type="email"/>
<button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors shadow-lg whitespace-nowrap" type="submit">
                                Book Audit
                            </button>
</div>
<p className="text-xs text-slate-500 mt-2">We respect your inbox. No spam, just strategy.</p>
</form>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
<div>
<div className="flex items-center gap-2 mb-6">
<svg className="text-slate-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold tracking-tight text-slate-900 text-sm">SHIELD &amp; SCRIBE</span>
</div>
<p className="text-slate-500 text-sm max-w-xs">Commercial risk partners for the modern enterprise. Licensed in all 50 states.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">General Liability</a></li>
<li><a className="hover:text-slate-900" href="#">Cyber &amp; Tech E&amp;O</a></li>
<li><a className="hover:text-slate-900" href="#">D&amp;O Management</a></li>
<li><a className="hover:text-slate-900" href="#">Workers Comp</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Claims</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900" href="#">Licenses</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Shield &amp; Scribe Insurance Services LLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-slate-600" href="#">Twitter</a>
<a className="hover:text-slate-600" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
