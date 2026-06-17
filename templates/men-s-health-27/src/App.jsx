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



{
"@context": "https://schema.org/",
"@type": "Product",
"name": "ProstaVive",
"image": [
"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bottle-mockup.jpg"
],
"description": "ProstaVive is a natural dietary supplement designed to support healthy prostate function, improve urinary flow, and support deep sleep.",
"brand": {
"@type": "Brand",
"name": "ProstaVive"
},
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.8",
"reviewCount": "1240"
},
"offers": {
"@type": "Offer",
"url": "https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net",
"priceCurrency": "USD",
"price": "39.00",
"priceValidUntil": "2025-12-31",
"availability": "https://schema.org/InStock",
"itemCondition": "https://schema.org/NewCondition"
}
}



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
      

<div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/5 text-cyan-400 text-xs font-medium py-2 text-center tracking-wide px-4 relative overflow-hidden">
<div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
<span className="relative z-10">🇺🇸 MADE IN THE USA • FDA COMPLIANT FACILITY • 180-DAY GUARANTEE</span>
</div>

<header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/10">
<nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
<a aria-label="ProstaVive Home" className="flex items-center gap-2 group" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
<span className="bg-cyan-500/10 border border-cyan-500/50 text-cyan-400 p-1.5 rounded-lg group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="font-bold text-white tracking-tighter text-lg group-hover:text-cyan-400 transition-colors">PROSTA<span className="text-cyan-400">VIVE</span></span>
</a>
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-slate-950 transition-all bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:scale-105 active:scale-95" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                Order Now
            </a>
</nav>
</header>
<main className="">

<section aria-labelledby="hero-title" className="relative pt-12 pb-16 lg:pt-24 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/20 blur-[120px] rounded-full -z-10 opacity-50"></div>
<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-purple-500/20 blur-[100px] rounded-full -z-10 opacity-30"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 text-xs font-medium mb-6 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
</span>
                        High Demand in US
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6" id="hero-title">
                        Maximize Flow. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">Restore Vitality.</span>
</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed">
                        The advanced bio-active blend for men 40+. Optimize prostate size, terminate nighttime wake-ups, and ignite your stamina.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-950 transition-all bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95 w-full sm:w-auto" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                            Check Availability
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<div className="flex items-center justify-center gap-2 text-sm text-slate-400 sm:justify-start px-4 py-3 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                            180-Day Guarantee
                        </div>
</div>
<div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
<div className="flex items-center gap-1.5 text-slate-400">
<svg aria-hidden="true" data-icon="lucide:flask-conical" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            GMP Certified
                        </div>
<div className="flex items-center gap-1.5 text-slate-400">
<svg aria-hidden="true" data-icon="lucide:leaf" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
                            100% Natural
                        </div>
<div className="flex items-center gap-1.5 text-slate-400">
<svg aria-hidden="true" data-icon="lucide:flag" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Made in USA
                        </div>
</div>
</div>

<div className="relative mx-auto w-full max-w-sm lg:max-w-md perspective-1000">

<div aria-label="ProstaVive Bottle Visualization" className="relative z-10 group" role="img">

<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="bg-slate-900 relative rounded-3xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">

<div className="bg-gradient-to-br from-slate-950 to-slate-900 p-8 h-[420px] flex flex-col items-center justify-center relative">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

<div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#06b6d4]"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<h3 className="text-4xl font-bold text-white tracking-tighter mb-2 drop-shadow-lg">PROSTA<span className="text-cyan-400">VIVE</span></h3>
<div className="h-0.5 w-12 bg-cyan-500 mb-2 shadow-[0_0_8px_#06b6d4]"></div>
<p className="text-cyan-200/80 text-[10px] tracking-[0.2em] uppercase mb-8">Advanced Male Support</p>
<div className="w-32 h-32 relative flex items-center justify-center mb-8">
<div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="animate-[spin_15s_linear_infinite_reverse] border-blue-500/30 border rounded-full absolute top-2 right-2 bottom-2 left-2"></div>
<div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)]">
<svg aria-hidden="true" data-icon="lucide:shield-plus" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12h6m-3-3v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="space-y-1">
<p className="text-slate-400 text-xs">Dietary Supplement</p>
<p className="text-slate-500 text-[10px]">30 Servings</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="problem-title" className="py-20 bg-slate-950 relative border-y border-white/5">
<div className="max-w-3xl mx-auto px-4 sm:px-6 text-center mb-16 relative z-10">
<span className="text-cyan-400 font-bold tracking-widest text-xs uppercase shadow-cyan-500/50 drop-shadow-md">The Reality</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white tracking-tight" id="problem-title">System Malfunction?</h2>
<p className="mt-4 text-slate-400 text-lg">As men age, biological signals degrade. Ignoring these red flags leads to system failure.</p>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-3 gap-6 relative z-10">

<article className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-cyan-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
<div className="w-12 h-12 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:moon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-200">Sleep Disruption</h3>
<p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400">Multiple system wakes per night. Incomplete rest cycles affecting daily performance.</p>
</article>

<article className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
<div className="w-12 h-12 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-purple-500/50 group-hover:bg-purple-950/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:droplets" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-200">Flow Restriction</h3>
<p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400">Weak output pressure. The sensation of incomplete evacuation and dribbling.</p>
</article>

<article className="group bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-pink-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
<div className="w-12 h-12 bg-slate-800 rounded-xl border border-white/10 flex items-center justify-center mb-6 group-hover:border-pink-500/50 group-hover:bg-pink-950/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:zap-off" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.513 4.856L13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773m-2.787 2.87L10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643M2 2l20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-200">Power Loss</h3>
<p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400">Reduced drive and vitality metrics affecting confidence and intimate relations.</p>
</article>
</div>
</section>

<section aria-labelledby="solution-title" className="py-20 md:py-32 relative overflow-hidden bg-slate-950">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-cyan-400 font-bold tracking-widest text-xs uppercase">The Solution</span>
<h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6" id="solution-title">"Prostate Powerhouse" Matrix</h2>
<p className="text-slate-400 text-lg mb-8">
                            ProstaVive™ deploys a unique matrix of high-potency nutrients designed to reboot healthy blood flow and optimize glandular function.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-slate-300"> Vital mineral for hormonal regulation.</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-slate-300"> Bio-active herb for peak performance.</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-slate-300"> Adaptogen for stress &amp; muscle integrity.</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
<span className="text-slate-300"> Supports hemodynamic flow.</span>
</li>
</ul>
<a className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                            View Full Compound List 
                            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-cyan-500/30 transition-all">
<svg aria-hidden="true" data-icon="lucide:pill" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-semibold text-white">Easy Mix</h4>
<p className="text-xs text-slate-500 mt-1">Soluble powder form.</p>
</div>
<div className="bg-cyan-950/30 p-6 rounded-2xl shadow-lg border border-cyan-500/20 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-semibold text-cyan-100">Rapid Action</h4>
<p className="text-xs text-cyan-500 mt-1">Bio-available.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-emerald-500/30 transition-all">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h4 className="font-semibold text-white">Safe &amp; Pure</h4>
<p className="text-xs text-slate-500 mt-1">No Stimulants.</p>
</div>
<div className="bg-slate-900 p-6 rounded-2xl shadow-lg border border-white/5 hover:border-purple-500/30 transition-all">
<svg aria-hidden="true" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h4 className="font-semibold text-white">100k+ Users</h4>
<p className="text-xs text-slate-500 mt-1">Verified results.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="pricing-title" className="py-20 bg-slate-950 border-t border-white/5" id="pricing">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4" id="pricing-title">Secure Supply</h2>
<p className="text-slate-400 text-lg">Select your protocol. 96% of users optimize with the 180-day cycle.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="bg-slate-900/60 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
<h3 className="text-xl font-medium text-white">30 Day Protocol</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-white">$69</span>
<span className="text-slate-500">/bottle</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-400">
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 1 Bottle</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Small Shipping Fee</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 180-Day Guarantee</li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white text-center rounded-lg font-medium transition-colors border border-white/5" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                            Initialize Order
                        </a>
</div>

<div className="relative bg-slate-900/90 rounded-2xl p-8 border border-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.15)] transform md:scale-105 z-10 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-black px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.6)]">Best Value</div>
<h3 className="text-xl font-bold text-white">180 Day Protocol</h3>
<div className="mt-4 mb-6">
<span className="text-5xl font-bold text-cyan-400 text-shadow-neon">$39</span>
<span className="text-slate-500">/bottle</span>
</div>
<p className="text-emerald-400 text-sm font-semibold mb-6 bg-emerald-950/30 inline-block px-3 py-1 rounded border border-emerald-500/20">Save $480 Instantly</p>
<ul className="space-y-3 mb-8 text-sm font-medium text-slate-300">
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 6 Bottles</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg> Free US Shipping</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:book" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 2 Free Digital Bonuses</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> 180-Day Guarantee</li>
</ul>
<a className="block w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-center rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all active:scale-95" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                            Initialize Order
                        </a>
</div>

<div className="bg-slate-900/60 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm">
<h3 className="text-xl font-medium text-white">90 Day Protocol</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-bold text-white">$59</span>
<span className="text-slate-500">/bottle</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-400">
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 3 Bottles</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:truck" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg> Free US Shipping</li>
<li className="flex gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 180-Day Guarantee</li>
</ul>
<a className="block w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 text-white text-center rounded-lg font-medium transition-colors border border-white/5" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                            Initialize Order
                        </a>
</div>
</div>
<div className="mt-12 flex justify-center">
<img alt="Secure Payment Methods: Visa, MasterCard, Amex" className="h-8 opacity-40 grayscale invert hover:invert-0 hover:opacity-80 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section aria-labelledby="reviews-title" className="py-20 bg-black border-t border-white/5">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-semibold text-center text-white tracking-tight mb-16" id="reviews-title">Subject Logs: Verified Results</h2>
<div className="grid md:grid-cols-3 gap-6">

<article className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-400 text-sm mb-6">"Urgency levels critical previously. After 3 weeks on the protocol, night cycle is uninterrupted. Vitality restored."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-cyan-400">MR</div>
<div>
<p className="text-sm font-semibold text-white">Mark R.</p>
<p className="text-xs text-slate-500">Austin, Texas</p>
</div>
<span className="ml-auto text-xs text-emerald-400 flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Verified</span>
</div>
</article>

<article className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-400 text-sm mb-6">"Flow metrics optimal. I feel emptied out. Energy levels up 200%. Recommendation: Acquire the 6-bottle bundle."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-cyan-400">DJ</div>
<div>
<p className="text-sm font-semibold text-white">David J.</p>
<p className="text-xs text-slate-500">Tampa, Florida</p>
</div>
<span className="ml-auto text-xs text-emerald-400 flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Verified</span>
</div>
</article>

<article className="bg-slate-900 p-6 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-colors">
<div aria-label="5 out of 5 stars" className="flex items-center gap-1 text-cyan-400 mb-4 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" fill="currentColor" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-slate-400 text-sm mb-6">"Confidence restored. No more interruptions during critical tasks. Partner reports significant mood elevation."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center font-bold text-cyan-400">TS</div>
<div>
<p className="text-sm font-semibold text-white">Tom S.</p>
<p className="text-xs text-slate-500">Denver, Colorado</p>
</div>
<span className="ml-auto text-xs text-emerald-400 flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:shield-check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> Verified</span>
</div>
</article>
</div>
</div>
</section>

<section aria-label="Guarantee" className="py-16 bg-slate-950">
<div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-8">
<div className="shrink-0">

<div className="w-32 h-32 relative flex items-center justify-center">
<div className="absolute inset-0 bg-cyan-500 rounded-full animate-pulse opacity-20 blur-md"></div>
<div className="absolute inset-2 border-2 border-cyan-400 rounded-full flex items-center justify-center bg-slate-900 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
<div className="text-center">
<span className="block text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-blue-500 leading-none">180</span>
<span className="block text-[10px] font-bold text-slate-300 uppercase tracking-wider">Day Guarantee</span>
</div>
</div>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-white mb-2">Risk-Free Protocol</h3>
<p className="text-slate-400 mb-4">You have a full 180 days (6 months) to test ProstaVive. If system optimization is not achieved, initiate a return for a full refund. No questions asked.</p>
<a className="text-cyan-400 font-semibold hover:text-cyan-300 hover:underline decoration-cyan-400/30 underline-offset-4" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">Read full policy</a>
</div>
</div>
</section>

<section aria-labelledby="faq-title" className="py-16 bg-black border-t border-white/5">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-2xl font-semibold text-white text-center mb-10" id="faq-title">System FAQs</h2>
<div className="space-y-4" itemscope="" itemtype="https://schema.org/FAQPage">
<details className="group bg-slate-900 rounded-lg border border-white/5 shadow-sm open:border-cyan-500/50 open:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-200" itemprop="name">
                            How should I execute the protocol?
                            <span className="transition group-open:rotate-180 text-cyan-500">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 text-slate-400 text-sm" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">Mix one scoop into water or beverage daily. Solubility is high. Taste is neutral-pleasant.</div>
</div>
</details>
<details className="group bg-slate-900 rounded-lg border border-white/5 shadow-sm open:border-cyan-500/50 open:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-200" itemprop="name">
                            Is the formula stable and safe?
                            <span className="transition group-open:rotate-180 text-cyan-500">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 text-slate-400 text-sm" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">100% natural matrix. Manufactured in FDA-compliant, GMP-certified US facilities. Zero GMOs. Zero stimulants.</div>
</div>
</details>
<details className="group bg-slate-900 rounded-lg border border-white/5 shadow-sm open:border-cyan-500/50 open:shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all" itemprop="mainEntity" itemscope="" itemtype="https://schema.org/Question">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-slate-200" itemprop="name">
                            Estimated time to results?
                            <span className="transition group-open:rotate-180 text-cyan-500">
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-4 pb-4 text-slate-400 text-sm" itemprop="acceptedAnswer" itemscope="" itemtype="https://schema.org/Answer">
<div itemprop="text">Initial calibration takes 2-3 weeks. Full system optimization requires 3 to 6 months of consistent intake.</div>
</div>
</details>
</div>
</div>
</section>

<section aria-label="Call to Action" className="py-20 relative overflow-hidden text-center px-4">

<div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent z-0 animate-pulse"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">Prevent System Failure</h2>
<p className="text-cyan-200 text-lg mb-8">Join the elite group of men who have optimized their biological performance. Inventory critical.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 transition-all bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
                    Acquire ProstaVive Now
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</section>
</main>

<footer className="bg-black text-slate-500 py-12 border-t border-white/10 text-xs" role="contentinfo">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="text-white font-bold text-lg tracking-tighter">PROSTA<span className="text-cyan-500">VIVE</span></div>
<div className="flex gap-4">
<a className="hover:text-cyan-400 transition" href="#">Privacy Protocol</a>
<a className="hover:text-cyan-400 transition" href="#">Terms of Use</a>
<a className="hover:text-cyan-400 transition" href="#">Contact</a>
</div>
</div>
<div className="space-y-4 text-center md:text-left">
<p className="border border-white/10 p-4 rounded-lg bg-white/5">
<strong>FDA Disclaimer:</strong> These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Information on this site is provided for informational purposes only. It is not meant to substitute for medical advice from your physician or other medical professional.
                </p>
<p>© 2024 ProstaVive Research. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-900/90 backdrop-blur-xl border-t border-cyan-500/20 shadow-[0_-4px_20px_rgba(6,182,212,0.15)] md:hidden z-50">
<a className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold rounded-lg shadow-lg text-lg" href="https://f2b2cc14ubzmip4ksj57zc5x8y.hop.clickbank.net">
            Order ProstaVive
            <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

    </>
  );
}
