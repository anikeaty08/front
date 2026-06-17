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



        lucide.createIcons();
    
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">viirtue</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-violet-600 transition-colors" href="#">Solutions</a>
<a className="hover:text-violet-600 transition-colors" href="#">VoIP &amp; UCaaS</a>
<a className="text-violet-600" href="#">Partner Program</a>
<a className="hover:text-violet-600 transition-colors" href="#">Company</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Login</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white transition-all bg-slate-900 rounded-full hover:bg-slate-800 shadow-sm hover:shadow-md ring-1 ring-slate-900 ring-offset-2" href="#">
                    Request Demo
                </a>
</div>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] glass-orb rounded-full opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] glass-orb rounded-full opacity-40 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Flagship Partner Model
                </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Your Brand. <br/>
                    Your Margin. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Your Future.</span>
</h1>
<p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                    White Label is for partners who want to build an asset. You control the branding, billing, and support while keeping the maximum margin available.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-white transition-all bg-violet-600 rounded-lg hover:bg-violet-700 shadow-lg shadow-violet-200 hover:shadow-violet-300" href="#">
                        Apply for White Label
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3.5 text-sm font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 shadow-sm" href="#">
                        View Requirements
                    </a>
</div>
<div className="flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">VL</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">IT</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">MSP</div>
</div>
<p>Trusted by high-growth MSPs &amp; ITSPs</p>
</div>
</div>

<div className="relative hidden lg:block perspective-1000">

<div className="glass-card rounded-xl shadow-2xl p-6 transform rotate-y-6 rotate-x-6 transition-transform duration-700 hover:rotate-0">

<div className="flex items-center justify-between border-b border-slate-200/60 pb-4 mb-4">
<div className="flex items-center gap-3">

<div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="hexagon"></i>
</div>
<div className="flex flex-col">
<div className="h-2.5 w-24 bg-slate-800 rounded mb-1"></div>
<div className="h-2 w-16 bg-slate-300 rounded"></div>
</div>
</div>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
<div className="w-2 h-2 rounded-full bg-slate-300"></div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white/50 p-3 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 font-medium uppercase mb-1">Monthly Rev</div>
<div className="text-lg font-semibold text-slate-900">$24,500</div>
<div className="text-[10px] text-emerald-600 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> 12%
                            </div>
</div>
<div className="bg-white/50 p-3 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 font-medium uppercase mb-1">Margin</div>
<div className="text-lg font-semibold text-slate-900">74%</div>
<div className="text-[10px] text-emerald-600 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="check"></i> Optimized
                            </div>
</div>
<div className="bg-white/50 p-3 rounded-lg border border-slate-100">
<div className="text-[10px] text-slate-500 font-medium uppercase mb-1">Active Seats</div>
<div className="text-lg font-semibold text-slate-900">1,240</div>
<div className="text-[10px] text-slate-400 mt-1">Deploying...</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600">
<i className="w-4 h-4" data-lucide="brush"></i>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Branding Config</div>
<div className="text-[10px] text-slate-500">Custom Domain &amp; Assets</div>
</div>
</div>
<div className="text-[10px] font-medium bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Active</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="receipt"></i>
</div>
<div>
<div className="text-xs font-semibold text-slate-900">Billing Engine</div>
<div className="text-[10px] text-slate-500">Partner Managed</div>
</div>
</div>
<div className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Self-Service</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 mb-4">True ownership for serious partners</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                The White Label model allows you to purchase <span className="font-medium text-slate-900">ViiBE</span> services at wholesale rates and resell them at retail prices you control. You own the customer relationship end-to-end, building tangible enterprise value in your business.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-2xl">
<span className="text-violet-600 font-semibold tracking-tight text-sm uppercase mb-2 block">Why White Label?</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Maximum control, maximum return.</h2>
<p className="text-lg text-slate-600">Designed for partners ready to invest in operations to capture the lion's share of the margin.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-violet-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-colors">
<i className="w-5 h-5 text-violet-600" data-lucide="paint-bucket"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Total Brand Control</h3>
<p className="text-sm text-slate-600 leading-relaxed">The platform reflects your identity. Your logo on the portal, your domain on the invite, your voice on the support line.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
<i className="w-5 h-5 text-emerald-600" data-lucide="trending-up"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">70-75% Margins</h3>
<p className="text-sm text-slate-600 leading-relaxed">By handling support and billing, you capture the operational margin that other models leave on the table.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
<i className="w-5 h-5 text-blue-600" data-lucide="briefcase"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Asset Value</h3>
<p className="text-sm text-slate-600 leading-relaxed">You own the contracts. When you build a base of recurring revenue on your paper, you're building sellable equity.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
<i className="w-5 h-5 text-indigo-600" data-lucide="sliders"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pricing Autonomy</h3>
<p className="text-sm text-slate-600 leading-relaxed">You set the retail rates. Package services how you see fit to win your specific market segment.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
<i className="w-5 h-5 text-amber-600" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Customer Ownership</h3>
<p className="text-sm text-slate-600 leading-relaxed">No vendor interference. You manage the lifecycle, renewals, and upsells directly.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
<div className="w-10 h-10 bg-rose-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-colors">
<i className="w-5 h-5 text-rose-600" data-lucide="rocket"></i>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Self-Service Scale</h3>
<p className="text-sm text-slate-600 leading-relaxed">Use our automated tools to quote, provision, and deploy without waiting on a channel manager.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div>
<div className="inline-flex items-center gap-2 mb-6 text-violet-600 font-semibold uppercase tracking-wider text-xs">
<i className="w-4 h-4" data-lucide="package-check"></i> The Toolkit
                    </div>
<h3 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">Everything you need to be the carrier.</h3>
<p className="text-slate-600 text-lg mb-10">We provide the infrastructure and software; you provide the brand and service.</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600 group-hover:text-white transition-colors"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="font-medium text-slate-900">Full ViiBE Platform Access</h4>
<p className="text-sm text-slate-600 mt-1">Unrestricted access to our proprietary UCaaS solution.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600 group-hover:text-white transition-colors"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="font-medium text-slate-900">White Label Branding Suite</h4>
<p className="text-sm text-slate-600 mt-1">Tools to upload logos, set colors, and configure domains.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600 group-hover:text-white transition-colors"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="font-medium text-slate-900">Tax Calculation Engine</h4>
<p className="text-sm text-slate-600 mt-1">Integrated taxation tools to simplify compliance (optional add-on).</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-violet-600 group-hover:text-white transition-colors"><i className="w-3.5 h-3.5" data-lucide="check"></i></div>
<div>
<h4 className="font-medium text-slate-900">Partner Admin Portal</h4>
<p className="text-sm text-slate-600 mt-1">Centralized command center for all your customer accounts.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-200">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-violet-100/50 rounded-full blur-2xl"></div>
<h4 className="text-lg font-semibold text-slate-900 mb-6 relative z-10">Support &amp; Enablement</h4>
<ul className="space-y-6 relative z-10">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 text-violet-600 shadow-sm">
<i className="w-4 h-4" data-lucide="graduation-cap"></i>
</div>
<div>
<strong className="text-slate-900 text-sm block mb-1">LMS Certification</strong>
<span className="text-xs text-slate-600 leading-relaxed">Mandatory training tracks for your sales and technical teams to ensure self-sufficiency.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 text-violet-600 shadow-sm">
<i className="w-4 h-4" data-lucide="life-buoy"></i>
</div>
<div>
<strong className="text-slate-900 text-sm block mb-1">Tier 2 Escalation</strong>
<span className="text-xs text-slate-600 leading-relaxed">Your team handles Tier 1 (end-user) support; we back you up with expert Tier 2 engineering.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center shrink-0 text-violet-600 shadow-sm">
<i className="w-4 h-4" data-lucide="rocket"></i>
</div>
<div>
<strong className="text-slate-900 text-sm block mb-1">Dedicated Onboarding</strong>
<span className="text-xs text-slate-600 leading-relaxed">A structured 60-day launch program to get your first customers live and billing.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Partner Requirements</h2>
<p className="text-lg text-slate-600">The White Label model is built for scale. To maintain the integrity of the program, we have specific expectations for our partners.</p>
</div>
<div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-sm relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-violet-600 to-indigo-600"></div>
<h3 className="text-xl font-semibold text-slate-900 mb-8">Core Expectations</h3>
<div className="space-y-8">
<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 font-semibold text-slate-900">1</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Volume Commitment</h4>
<p className="text-slate-600 mt-1">Partners must meet minimum monthly revenue targets to qualify for White Label wholesale pricing.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 font-semibold text-slate-900">2</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Operational Readiness</h4>
<p className="text-slate-600 mt-1">You must have the capability to handle end-user billing, taxation, and Tier 1 technical support.</p>
</div>
</div>
<div className="flex gap-6 items-start">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 font-semibold text-slate-900">3</div>
<div>
<h4 className="text-lg font-medium text-slate-900">Technical Certification</h4>
<p className="text-slate-600 mt-1">Completion of the Viirtue Technical Certification is required before you can provision your first account.</p>
</div>
</div>
</div>

<div className="mt-12 bg-blue-50 border border-blue-100 rounded-lg p-5 flex gap-4 items-start">
<i className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" data-lucide="info"></i>
<div>
<p className="text-sm text-blue-900 font-medium">Prefer less responsibility?</p>
<p className="text-sm text-blue-700 mt-1">
                            If you want strong margins but want Viirtue to handle the billing and taxes, explore our <a className="underline hover:text-blue-900 font-medium" href="#">Channel+ Partnership</a> instead.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16 text-center">Division of Responsibilities</h2>
<div className="grid lg:grid-cols-2 gap-12">

<div className="relative">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200">
<i className="w-6 h-6" data-lucide="user"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">You (The Partner)</h3>
<p className="text-sm text-slate-500">Customer Facing</p>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-1">
<ul className="divide-y divide-slate-200/50">
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Sales &amp; Marketing under your brand</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">End-user billing &amp; collections</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Taxation calculation &amp; remittance</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Tier 1 Support (Frontline helpdesk)</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-slate-900 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Onsite installation &amp; hardware</span>
</li>
</ul>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-200">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900">Viirtue</h3>
<p className="text-sm text-slate-500">Infrastructure &amp; Back-end</p>
</div>
</div>
<div className="bg-violet-50/50 rounded-2xl p-1 border border-violet-100">
<ul className="divide-y divide-violet-200/50">
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Platform uptime &amp; reliability</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Feature development &amp; roadmap</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Carrier relationships &amp; porting</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Tier 2 &amp; Tier 3 Engineering Support</span>
</li>
<li className="flex items-start gap-3 p-4">
<i className="w-5 h-5 text-violet-600 shrink-0 mt-0.5" data-lucide="check-circle-2"></i>
<span className="text-slate-700 text-sm font-medium">Security &amp; Compliance</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 text-center mb-16">Path to White Label Launch</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-violet-200 transition-colors">
<div className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-violet-50 transition-colors">01</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Application</h3>
<p className="text-sm text-slate-600 relative z-10">Submit your application. We review your volume potential and operational maturity.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-violet-200 transition-colors">
<div className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-violet-50 transition-colors">02</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Training</h3>
<p className="text-sm text-slate-600 relative z-10">Your team completes self-paced LMS modules on sales, support, and deployment.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-violet-200 transition-colors">
<div className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-violet-50 transition-colors">03</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Configuration</h3>
<p className="text-sm text-slate-600 relative z-10">We help you set up your branding, domains, and pricing in the Partner Admin portal.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-violet-200 transition-colors">
<div className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-violet-50 transition-colors">04</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Pilot Deployment</h3>
<p className="text-sm text-slate-600 relative z-10">You provision your first customer (or internal NFR account) to test the workflow.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative group hover:border-violet-200 transition-colors">
<div className="text-4xl font-bold text-slate-100 absolute top-4 right-4 group-hover:text-violet-50 transition-colors">05</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Go Live</h3>
<p className="text-sm text-slate-600 relative z-10">Launch to your base with full marketing support and sales enablement materials.</p>
</div>

<div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-8 rounded-2xl border border-violet-500 shadow-md relative group text-white">
<div className="text-4xl font-bold text-white/20 absolute top-4 right-4">06</div>
<h3 className="text-lg font-semibold text-white mb-2 relative z-10">Scale</h3>
<p className="text-sm text-white/90 relative z-10">Utilize our bulk tools to migrate existing bases and grow your recurring revenue.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] text-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-12 text-center">Is White Label right for you?</h2>
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-sm shadow-2xl">
<div className="grid gap-8">
<div className="flex gap-6">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">You want to build equity</h4>
<p className="text-slate-400">You view your customer base as a long-term asset to be owned, not rented.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">You have support capabilities</h4>
<p className="text-slate-400">You have a helpdesk or technical team ready to field Tier 1 calls.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">You want maximum margin</h4>
<p className="text-slate-400">You prefer doing the operational work in exchange for keeping 70%+ of the revenue.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-8 h-8 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0 mt-1">
<i className="w-4 h-4 text-violet-400" data-lucide="check"></i>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">You are ready to commit</h4>
<p className="text-slate-400">You are willing to commit to revenue targets and training requirements.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="group border border-slate-200 rounded-lg p-6 hover:border-violet-200 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 mb-2 flex justify-between items-center">
                        Does "White Label" mean my customers never see Viirtue?
                        <i className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" data-lucide="chevron-down"></i>
</h3>
<p className="text-slate-600 text-sm leading-relaxed">Correct. Your customers interact with your brand, your domain, and your support team. Viirtue operates strictly in the background.</p>
</div>
<div className="group border border-slate-200 rounded-lg p-6 hover:border-violet-200 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 mb-2 flex justify-between items-center">
                        Who handles taxes?
                        <i className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" data-lucide="chevron-down"></i>
</h3>
<p className="text-slate-600 text-sm leading-relaxed">In the pure White Label model, you are the carrier of record and responsible for taxes. However, we offer integrated tax calculation engines to make this process easier for you.</p>
</div>
<div className="group border border-slate-200 rounded-lg p-6 hover:border-violet-200 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 mb-2 flex justify-between items-center">
                        What if my team gets stuck on a technical issue?
                        <i className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" data-lucide="chevron-down"></i>
</h3>
<p className="text-slate-600 text-sm leading-relaxed">While you handle Tier 1 support, Viirtue provides comprehensive Tier 2 and Tier 3 engineering support to help your team resolve complex issues.</p>
</div>
<div className="group border border-slate-200 rounded-lg p-6 hover:border-violet-200 transition-colors cursor-pointer">
<h3 className="text-lg font-medium text-slate-900 mb-2 flex justify-between items-center">
                        Is there a monthly minimum?
                        <i className="w-5 h-5 text-slate-400 group-hover:text-violet-600 transition-colors" data-lucide="chevron-down"></i>
</h3>
<p className="text-slate-600 text-sm leading-relaxed">Yes, White Label partners typically have a monthly revenue commitment to access wholesale pricing. Contact us for specific details.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Own your success.</h2>
<p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">Join the high-growth MSPs building 75% margin revenue streams with Viirtue White Label.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white transition-all bg-violet-600 rounded-lg hover:bg-violet-700 shadow-lg shadow-violet-200 hover:shadow-violet-300" href="#">
                    Become a Partner
                </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 shadow-sm" href="#">
                    Book a Demo
                </a>
</div>
</div>
</section>

<footer className="bg-[#1e1b4b] text-white pt-20 pb-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="m2 17 10 5 10-5"></path><path d="m2 12 10 5 10-5"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-white">viirtue</span>
</div>
<div className="text-slate-400 text-sm leading-relaxed mb-6">
                        Empowering partners to build thriving telecom businesses with the industry's most flexible platform.
                    </div>
</div>
<div>
<h4 className="font-semibold mb-6 text-violet-100">Company</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-violet-100">Partners</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Channel+</a></li>
<li><a className="text-white" href="#">White Label</a></li>
<li><a className="hover:text-white transition-colors" href="#">Wholesale</a></li>
<li><a className="hover:text-white transition-colors" href="#">Login</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-6 text-violet-100">Legal</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Acceptable Use</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div>© 2024 Viirtue, Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-slate-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-slate-300 transition-colors" href="#">Facebook</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
