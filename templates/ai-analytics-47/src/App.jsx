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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-semibold tracking-tighter text-xl" href="#">InsightFlow</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Docs</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:block transition-colors" href="#">Log in</a>
<a className="bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#">Start Free Trial</a>
</div>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none -z-10" style={{background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(255,255,255,0) 70%)'}}></div>
<div className="absolute -top-24 -right-24 w-[500px] h-[500px] opacity-20 pointer-events-none -z-10" style={{background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(255,255,255,0) 70%)'}}></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] max-w-4xl mx-auto">
                    Turn Your Data Into <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Smart Business Decisions</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                    InsightFlow helps teams analyze complex data instantly using AI-powered insights and real-time analytics.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2" href="#">
                        Start Free Trial
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto perspective-1000">
<div className="relative rounded-2xl bg-white border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] p-2 mx-auto transform hover:-translate-y-2 transition-transform duration-700 ease-out z-10">
<div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex flex-col h-[400px] md:h-[500px]">

<div className="h-12 border-b border-slate-200 flex items-center px-4 gap-4 bg-white">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="bg-slate-100 rounded-md h-6 w-64 mx-auto flex items-center px-3">
<iconify-icon className="text-slate-400 text-xs" icon="solar:magnifer-linear"></iconify-icon>
</div>
</div>

<div className="flex-1 flex p-4 gap-4">

<div className="hidden md:flex w-48 flex-col gap-2 border-r border-slate-200 pr-4">
<div className="h-8 bg-indigo-50 rounded-lg flex items-center px-3 gap-2 text-indigo-600">
<iconify-icon icon="solar:widget-5-linear"></iconify-icon>
<span className="text-xs font-medium">Dashboard</span>
</div>
<div className="h-8 flex items-center px-3 gap-2 text-slate-400">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
<span className="text-xs font-medium">Analytics</span>
</div>
<div className="h-8 flex items-center px-3 gap-2 text-slate-400">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-medium">Audience</span>
</div>
</div>

<div className="flex-1 flex flex-col gap-4">

<div className="grid grid-cols-3 gap-4">
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
<div className="text-xs text-slate-500 font-medium mb-1">Total Revenue</div>
<div className="text-xl font-semibold tracking-tight">$124,500</div>
<div className="text-xs text-emerald-500 flex items-center mt-2 gap-1"><iconify-icon icon="solar:trend-up-linear"></iconify-icon> +14.5%</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
<div className="text-xs text-slate-500 font-medium mb-1">Active Users</div>
<div className="text-xl font-semibold tracking-tight">45.2K</div>
<div className="text-xs text-emerald-500 flex items-center mt-2 gap-1"><iconify-icon icon="solar:trend-up-linear"></iconify-icon> +5.2%</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
<div className="text-xs text-slate-500 font-medium mb-1">Conversion</div>
<div className="text-xl font-semibold tracking-tight">3.8%</div>
<div className="text-xs text-rose-500 flex items-center mt-2 gap-1"><iconify-icon icon="solar:trend-down-linear"></iconify-icon> -1.1%</div>
</div>
</div>

<div className="flex-1 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col relative overflow-hidden">
<div className="text-sm font-medium tracking-tight mb-4">Revenue Growth</div>
<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">
<div className="w-full bg-slate-100 rounded-t-sm h-[30%] relative group hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[45%] relative group hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[35%] relative group hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[60%] relative group hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[80%] relative shadow-[0_0_15px_rgba(99,102,241,0.4)]"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[65%] relative group hover:bg-indigo-100 transition-colors"></div>
<div className="w-full bg-slate-100 rounded-t-sm h-[90%] relative group hover:bg-indigo-100 transition-colors"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none p-4 pb-6" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q20,60 40,70 T80,30 T100,10" fill="none" stroke="rgba(168,85,247,0.5)" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-4 md:-right-12 glass-panel rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3 animate-[bounce_4s_infinite_ease-in-out]">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-slate-500">AI Insight</div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Peak traffic expected at 2 PM</div>
</div>
</div>

<div className="absolute -bottom-8 -left-4 md:-left-12 glass-panel rounded-2xl p-4 shadow-xl z-20 flex items-center gap-3 animate-[bounce_5s_infinite_ease-in-out_reverse]">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-xl" icon="solar:chart-line-up-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs font-medium text-slate-500">Forecasting</div>
<div className="text-sm font-semibold text-slate-900 tracking-tight">Revenue up 24% next month</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-6">Trusted by innovative teams worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-slate-800">
<iconify-icon icon="solar:box-linear"></iconify-icon> ACME CORP
                    </div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-slate-800">
<iconify-icon icon="solar:ghost-linear"></iconify-icon> PHANTOM
                    </div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-slate-800">
<iconify-icon icon="solar:planet-linear"></iconify-icon> GLOBEX
                    </div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-slate-800">
<iconify-icon icon="solar:atom-linear"></iconify-icon> NEURON
                    </div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-slate-800 hidden sm:flex">
<iconify-icon icon="solar:shield-linear"></iconify-icon> AEGIS
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Powerful features to understand your data</h2>
<p className="mt-4 text-base text-slate-500">Everything you need to turn raw numbers into actionable business strategies without needing a data science degree.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">AI Data Insights</h3>
<p className="text-sm text-slate-500 leading-relaxed">Automatically discover patterns and trends hidden inside your business data. Let our AI do the heavy lifting of analysis.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:chart-line-up-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Real-Time Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Monitor your key metrics live with real-time dashboards. React to changes in your business the second they happen.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Smart Forecasting</h3>
<p className="text-sm text-slate-500 leading-relaxed">Predict future growth using AI-driven forecasting models. Plan ahead with confidence based on historical data patterns.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100 overflow-hidden relative">
<div className="absolute inset-0 grid-bg opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-medium mb-6">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
                            Complete Visibility
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">Your entire business,<br/>visualized in one place.</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                            Stop switching between dozens of tabs. InsightFlow connects to all your data sources and builds a unified, beautiful dashboard that tells the full story of your company's performance.
                        </p>
<ul className="space-y-4 mb-8 text-left inline-block md:block">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Interactive charts and graphs
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Custom date ranges and filters
                            </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-indigo-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Export to PDF or CSV instantly
                            </li>
</ul>
</div>
<div className="flex-1 w-full relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-indigo-200 to-purple-200 blur-3xl rounded-full opacity-50 -z-10"></div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 relative">
<div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
<div className="flex justify-between items-center mb-6">
<div className="font-semibold tracking-tight text-slate-900">Activity Overview</div>
<div className="text-xs bg-white border border-slate-200 rounded-md px-2 py-1 text-slate-500 flex items-center gap-1 cursor-pointer">
                                        Last 30 Days <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="h-48 relative border-b border-l border-slate-200 mb-4 flex items-end justify-between px-2 pt-4">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none pb-4">
<div className="border-t border-slate-100 w-full"></div>
<div className="border-t border-slate-100 w-full"></div>
<div className="border-t border-slate-100 w-full"></div>
</div>

<svg className="absolute inset-0 w-full h-full pb-4" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,90 L10,80 L20,85 L30,60 L40,65 L50,40 L60,50 L70,20 L80,30 L90,10 L100,5" fill="none" stroke="#6366f1" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M0,90 L10,80 L20,85 L30,60 L40,65 L50,40 L60,50 L70,20 L80,30 L90,10 L100,5 L100,100 L0,100 Z" fill="rgba(99,102,241,0.1)" stroke="none"></path>
</svg>
</div>

<div className="space-y-3 mt-6">
<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recent Insights</div>
<div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:arrow-up-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Signups spiked by 40%</div>
<div className="text-xs text-slate-500 mt-0.5">Driven by recent organic search growth.</div>
</div>
</div>
<div className="flex gap-3 items-start p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
<div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:bell-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Churn rate alert</div>
<div className="text-xs text-slate-500 mt-0.5">Slight increase in churn for Pro tier users.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">From raw data to decisions in minutes</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-slate-200 -z-10"></div>

<div className="relative flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-lg font-semibold text-slate-900 mb-6">1</div>
<div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon className="text-3xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Connect your data</h3>
<p className="text-sm text-slate-500">Securely link your databases, CRMs, and payment gateways with one click.</p>
</div>

<div className="relative flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-lg font-semibold text-slate-900 mb-6">2</div>
<div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
<iconify-icon className="text-3xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Let AI analyze</h3>
<p className="text-sm text-slate-500">Our models process millions of data points to find correlations and trends.</p>
</div>

<div className="relative flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-lg font-semibold text-slate-900 mb-6">3</div>
<div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
<iconify-icon className="text-3xl" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Get insights instantly</h3>
<p className="text-sm text-slate-500">Receive clear, actionable recommendations to improve your business.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Automated Reports</h4>
<p className="text-sm text-slate-500 mt-1">Schedule beautiful reports to be sent directly to your stakeholders weekly or monthly.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Team Collaboration</h4>
<p className="text-sm text-slate-500 mt-1">Share dashboards, leave comments on specific data points, and align your entire team.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Advanced Data Visualization</h4>
<p className="text-sm text-slate-500 mt-1">Choose from dozens of chart types to represent your data exactly how you want it.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-600 text-lg" icon="solar:bell-bing-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium tracking-tight text-slate-900">Smart Alerts</h4>
<p className="text-sm text-slate-500 mt-1">Set custom thresholds and get notified via Slack or email when metrics drop or spike.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Loved by data-driven teams</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"InsightFlow completely transformed how our team understands business data. We used to spend hours in spreadsheets, now we get answers in seconds."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold text-sm">SJ</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Sarah Jenkins</div>
<div className="text-xs text-slate-500">VP of Operations, TechCorp</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"The AI insights are scary accurate. It predicted a drop in engagement two weeks before it happened, allowing us to pivot our strategy in time."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold text-sm">MR</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Marcus Rowe</div>
<div className="text-xs text-slate-500">Growth Lead, StartupX</div>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 leading-relaxed">"Setup was incredibly easy. Plugged in our Stripe and Postgres data, and we had beautiful, functional dashboards in less than 10 minutes."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-semibold text-sm">EL</div>
<div>
<div className="text-sm font-medium text-slate-900 tracking-tight">Emma Lin</div>
<div className="text-xs text-slate-500">Founder, E-com Plus</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Simple, transparent pricing</h2>
<p className="mt-4 text-base text-slate-500">Start for free, then choose a plan that grows with your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<div className="text-lg font-medium text-slate-900 tracking-tight mb-2">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$12</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-500 mb-6">Perfect for small projects and indie hackers.</p>
<a className="block w-full text-center bg-white text-slate-900 border border-slate-200 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors mb-8" href="#">Get Started</a>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Up to 10,000 events/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 2 Data sources</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Standard dashboards</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> 7-day data retention</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 shadow-xl relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium tracking-wide">MOST POPULAR</div>
<div className="text-lg font-medium text-white tracking-tight mb-2">Growth</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter text-white">$29</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<p className="text-sm text-slate-400 mb-6">For growing teams that need deeper insights.</p>
<a className="block w-full text-center bg-white text-slate-900 py-2.5 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors mb-8 shadow-sm" href="#">Start Free Trial</a>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Up to 100,000 events/mo</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited data sources</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> AI Insights &amp; Forecasting</li>
<li className="flex items-center gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> 1-year data retention</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<div className="text-lg font-medium text-slate-900 tracking-tight mb-2">Scale</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold tracking-tighter text-slate-900">$79</span>
<span className="text-sm text-slate-500">/month</span>
</div>
<p className="text-sm text-slate-500 mb-6">Advanced features for enterprise scale.</p>
<a className="block w-full text-center bg-white text-slate-900 border border-slate-200 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors mb-8" href="#">Contact Sales</a>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Unlimited events</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Custom AI models</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> SSO &amp; Advanced Auth</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Dedicated success manager</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8">Connects seamlessly with your favorite tools</p>
<div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
<div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:hashtag-linear"></iconify-icon> Slack
                    </div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:card-linear"></iconify-icon> Stripe
                    </div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:chart-2-linear"></iconify-icon> Google Analytics
                    </div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:document-linear"></iconify-icon> Notion
                    </div>
<div className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm flex items-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:bolt-linear"></iconify-icon> Zapier
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-white rounded-[2rem] p-12 md:p-20 text-center border border-slate-100 shadow-lg relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">Start Making Data-Driven<br/>Decisions Today</h2>
<p className="text-base text-slate-500 max-w-xl mx-auto mb-10">Join thousands of companies using InsightFlow to grow faster and smarter. Setup takes less than 5 minutes.</p>
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-md hover:shadow-lg" href="#">
                            Start Free Trial
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="mt-4 text-xs text-slate-400">No credit card required. 14-day free trial.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="font-semibold tracking-tighter text-xl text-slate-900 inline-block mb-4" href="#">InsightFlow</a>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                        AI-powered analytics platform designed for modern teams. Understand your data effortlessly.
                    </p>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Product</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Docs</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Company</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Legal</h5>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 InsightFlow Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
