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



 // Set current year in footer
  document.getElementById('year').textContent = new Date().getFullYear();

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
      

<header className="relative z-50 border-b border-white/10 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/35">
<div className="mx-auto max-w-7xl px-6 py-4">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<div className="flex overflow-hidden text-slate-900 bg-gradient-to-br from-white to-slate-100 w-8 h-8 rounded-lg ring-slate-900/10 ring-1 relative shadow-lg -skew-x-15 items-center justify-center" style={{maskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="absolute inset-0 rounded-lg pointer-events-none" style={{background: 'radial-gradient(85% 65% at 50% -20%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0) 65%), linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 45%)'}}></div>
<div className="absolute inset-0 rounded-lg pointer-events-none" style={{boxShadow: 'inset 0 0.5px 0 rgba(255, 255, 255, 0.85), inset 0 -1.5px 2px rgba(2,6,23,0.12)'}}></div>
<div className="absolute inset-x-2 -bottom-2 h-3 rounded-full pointer-events-none" style={{background: 'radial-gradient(60% 100% at 50% 0%, rgba(2,6,23,0.18), rgba(2,6,23,0) 70%)'}}></div>
<span aria-hidden="true" className="absolute text-lg font-semibold tracking-tighter text-slate-500/50 translate-x-[1px] translate-y-[1.5px] select-none pointer-events-none">E</span>
<span className="bg-clip-text text-lg font-semibold text-transparent tracking-tighter bg-gradient-to-b from-slate-900 to-slate-700 z-10 relative">E</span>
</div>
<span className="text-xl font-semibold text-white tracking-tight -rotate-x-5" style={{maskImage: 'linear-gradient(20deg, transparent, black 5%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(20deg, transparent, black 5%, black 90%, transparent)'}}>Eurevas</span>
</a>
<nav className="hidden md:flex gap-8 text-sm gap-x-8 gap-y-8 items-center">
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-900/70 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" href="#">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-layers h-3 w-3 text-blue-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<span className="text-sm">Solutions</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-900/70 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" href="#">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-package lucide-package-3 w-3 text-purple-400" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg></span>
<span className="text-sm">Products</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-900/70 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" href="#">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10">
<svg ="24"="" className="lucide lucide-book-open h-3 w-3 text-emerald-400" data-lucide="book-open" fillnone"="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</span>
<span className="text-sm">Resources</span>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 text-slate-200 hover:text-white hover:bg-slate-900/70 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" href="#">
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-white/5 border border-white/10">
<svg className="lucide lucide-credit-card h-3 w-3 text-orange-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</span>
<span className="text-sm">Pricing</span>
</a>
</nav>
<div className="flex items-center gap-3">
<a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Sign in</a>

<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
            Get started
            <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 77 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/586fe153-4525-4bc0-b6ff-39cbac276d12_3840w.jpg)] bg-cover relative">

<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>
<div className="absolute top-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-600/20 blur-3xl"></div>
<div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950 -z-10"></div>
<div className="md:pt-32 md:pb-40 text-center max-w-5xl mr-auto ml-auto pt-20 pr-6 pb-24 pl-6 relative">
<div className="inline-flex items-center gap-2 text-xs text-slate-300/90 bg-white/5 border border-white/10 backdrop-blur rounded-full px-3 py-1.5 mb-6">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-blue-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">New: Intelligence Platform</span>
<span className="mx-1 h-1 w-1 rounded-full bg-slate-400/60"></span>
<span className="text-slate-400">Launch Q2 2025</span>
</div>
<h1 className="md:text-6xl lg:text-7xl text-5xl font-semibold text-slate-200 tracking-tight mb-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] blur-none backdrop-blur-none grayscale-0 -translate-x-2 scale-95" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 45%, transparent)'}}>
      Transform Your Marketing Into Revenue Growth
    </h1>
<p className="md:text-lg text-lg font-light text-slate-300/90 max-w-3xl mt-6 mr-auto ml-auto" style={{maskImage: 'linear-gradient(190deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(190deg, transparent, black 20%, black 80%, transparent)'}}>
      Eurevas delivers enterprise-grade marketing solutions that combine AI-powered analytics, real-time optimization, and seamless integration to accelerate your business growth.
    </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="shiny-cta">
<span className="">Start Free Trial</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors shadow-sm" href="#">
<svg className="lucide lucide-play-circle h-4 w-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
        Watch Demo
      </a>
</div>
<div className="flex flex-col sm:flex-row gap-6 text-slate-400 mt-10 gap-x-6 gap-y-6 items-center justify-center">
<div aria-label="No credit card required" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 hover:bg-slate-900/70 text-slate-200 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" role="button" tabindex="0">
<svg className="lucide lucide-check-circle-2 h-4 w-4 text-emerald-400" data-lucide="check-circle-2" fill="none" height="24" round"-linejoin="round" stroke="currentColor" strokeWidth="2 strokeLinecap=" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">No credit card required</span>
</div>
<div aria-label="Setup in 5 minutes" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 hover:bg-slate-900/70 text-slate-200 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20" role="button" tabindex="0">
<svg className="lucide lucide-zap h-4 w-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm">Setup in 5 minutes</span>
</div>
<div aria-label="Enterprise security" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-4 py-2 hover:bg-slate-900/70 text-slate-200 hover:text-white transition-colors cursor-pointer focus-visible:outline-none-visible:ring-2 focus-visible:ring-white/20" rolebutton"="" tabindex="0">
<svg className="lucide lucide-shield-check h-4 w-4 text-purple-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 11"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm">Enterprise security</span>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 py-16 border-t border-white/10">
<div className="text-center mb-8">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
      Trusted by industry leaders worldwide
    </p>
</div>
<div className="overflow-hidden relative">
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-12 will-change-transform animate-[marquee-left_30s_linear_infinite]">
<div className="flex gap-12 shrink-0">
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">ACME CORP</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">GLOBALTECH</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">INNOVATE</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">NEXUS</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">VERTEX</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">SUMMIT</span>
</div>
</div>
<div className="flex gap-12 shrink-0">
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">ACME CORP</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">GLOBALTECH</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">INNOVATE</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">NEXUS</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">VERTEX</span>
</div>
<div className="w-[140px] h-[40px] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-slate-500 text-xs font-medium">SUMMIT</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid gap-12 lg:grid-cols-2 items-center">

<div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-white/10">
<article className="group relative overflow-hidden bg-white/5 border border-white/10 rounded-2xl shadow-2xl backdrop-blur">
<div className="p-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
<h3 className="text-2xl font-semibold tracking-tight text-white">Real‑Time Analytics Dashboard</h3>
<span className="inline-flex items-center gap-2 text-xs text-emerald-300/90 bg-emerald-500/10 border border-emerald-400/20 rounded-full px-2.5 py-1">
<svg className="lucide lucide-trending-up h-3.5 w-3.5 text-emerald-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                Live Data
              </span>
</div>

<div className="relative h-64 rounded-xl bg-gradient-to-b from-slate-900/60 to-slate-900/30 border border-white/10 mb-8 overflow-hidden">
<div className="absolute inset-0 p-4">

<div className="absolute right-6 top-6 w-[70%] h-[60%] rounded-xl bg-white/5 border border-white/10 shadow-sm backdrop-blur">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<span className="text-xs font-medium text-slate-200">Revenue Growth</span>
<div className="flex items-center gap-2">
<span className="text-xs text-emerald-400 font-medium">+24.5%</span>
<span className="h-2 w-10 rounded bg-emerald-500/30"></span>
</div>
</div>
<div className="p-3">
<svg className="w-full h-20" viewbox="0 0 300 90">
<defs>
</defs>
<path d="M0,70 L30,65 L60,55 L90,45 L120,40 L150,35 L180,30 L210,25 L240,20 L270,15 L300,10" fill="none" stroke="#60a5fa" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0,70 L30,65 L60,55 L90,45 L120,40 L150,35 L180,30 L210,25 L240,20 L270,15 L300,10 L300,90 L0,90 Z" fill="url(#chartGradient)"></path>
</svg>
</div>
</div>

<div className="absolute left-6 bottom-6 w-[55%] h-[45%] rounded-xl bg-white/5 border border-white/10 shadow-sm backdrop-blur">
<div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
<span className="text-xs font-medium text-slate-200">Key Metrics</span>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Conversions</span>
<span className="text-slate-100 font-medium">2,847</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Engagement</span>
<span className="text-emerald-400 font-medium">+18.2%</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">ROI</span>
<span className="text-blue-400 font-medium">342%</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div>
<h4 className="text-base font-semibold tracking-tight text-white mb-2">Predictive Analytics</h4>
<p className="text-sm text-slate-400">AI-powered forecasting with 95% accuracy for strategic planning.</p>
</div>
<div>
<h4 className="text-base font-semibold tracking-tight text-white mb-2">Custom Dashboards</h4>
<p className="text-sm text-slate-400">Build personalized views tailored to your business metrics.</p>
</div>
</div>

<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-100 hover:text-slate-300 transition-colors" href="#">
              Explore Analytics
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>

<div>
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(01) Intelligence Platform</p>
<h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-6">
          Data-driven decisions at enterprise scale
        </h3>
<p className="text-lg text-slate-300/90 mb-8">
          Transform raw data into actionable insights with our advanced analytics engine. Track performance, predict trends, and optimize campaigns in real-time across all channels.
        </p>

<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-activity h-4 w-4 text-blue-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<h5 className="font-medium text-white mb-1">Real-Time Processing</h5>
<p className="text-sm text-slate-400">Instant data updates with sub-second latency for immediate insights.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-500/15 border border-purple-400/20 flex items-center justify-center mt-0.5">
<svg className="lucide lucide-brain h-4 w-4 text-purple-400" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div>
<h5 className="font-medium text-white mb-1">AI-Powered Insights</h5>
<p className="text-sm text-slate-400">Machine learning algorithms that continuously improve performance.</p>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-6">
<div className="grid grid-cols-2 gap-6">
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-3xl font-semibold text-white">98.7%</span>
</div>
<p className="text-xs text-slate-400">Data accuracy rate</p>
</div>
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-3xl font-semibold text-white">2.4x</span>
</div>
<p className="text-xs text-slate-400">Average ROI increase</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/40">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(02) Platform Capabilities</p>
<h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
        Everything you need to succeed
      </h3>
<p className="text-lg text-slate-300/90 max-w-2xl mx-auto">
        Comprehensive marketing solutions designed for modern enterprises
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-target h-6 w-6 text-blue-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Campaign Automation</h4>
<p className="text-sm text-slate-400 mb-4">Streamline your marketing workflows with intelligent automation that scales with your business.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-users h-6 w-6 text-purple-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Audience Segmentation</h4>
<p className="text-sm text-slate-400 mb-4">Create precise customer segments with advanced AI-driven behavioral analysis.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-purple-400 hover:text-purple-300" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-green-500/15 border border-green-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-bar-chart-3 h-6 w-6 text-green-400" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Performance Tracking</h4>
<p className="text-sm text-slate-400 mb-4">Monitor campaign success with comprehensive metrics and customizable reports.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-green-400 hover:text-green-300" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-mail h-6 w-6 text-orange-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Email Marketing</h4>
<p className="text-sm text-slate-400 mb-4">Design, send, and optimize email campaigns with built-in A/B testing capabilities.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-orange-300 hover:text-orange-200" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-pink-500/15 border border-pink-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-share-2 h-6 w-6 text-pink-400" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Social Integration</h4>
<p className="text-sm text-slate-400 mb-4">Manage all social media channels from one unified platform with scheduling tools.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-pink-400 hover:text-pink-300" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:shadow-lg hover:shadow-black/30 transition-shadow backdrop-blur">
<div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-400/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-shield-check h-6 w-6 text-indigo-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-semibold text-white mb-2">Enterprise Security</h4>
<p className="text-sm text-slate-400 mb-4">Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-indigo-400 hover:text-indigo-300" href="#">
          Learn more
          <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(03) Pricing Plans</p>
<h3 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
        Choose the right plan for your business
      </h3>
<p className="text-lg text-slate-300/90">Flexible pricing that scales with your needs</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
<div className="mb-6">
<h4 className="text-lg font-semibold text-white mb-1">Starter</h4>
<p className="text-sm text-slate-400">For small teams getting started</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">$49</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-6" href="#">
          Start free trial
        </a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Up to 10,000 contacts</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">5 team members</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Basic analytics</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Email support</span>
</div>
</div>
</div>

<div className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white border-2 border-white/15 rounded-2xl p-8 shadow-xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="inline-flex items-center gap-1 text-xs bg-blue-600 text-white rounded-full px-3 py-1 shadow shadow-blue-600/30">
<svg className="lucide lucide-sparkles h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Most Popular
          </span>
</div>
<div className="mb-6">
<h4 className="text-lg font-semibold mb-1">Professional</h4>
<p className="text-sm text-slate-400">For growing businesses</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold">$149</span>
<span className="text-sm text-slate-400">/month</span>
</div>
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 text-sm font-medium hover:from-blue-500 hover:to-blue-400 transition-colors mb-6" href="#">
          Start free trial
        </a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Up to 100,000 contacts</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Unlimited team members</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Advanced analytics &amp; AI</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Priority support</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm">Custom integrations</span>
</div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
<div className="mb-6">
<h4 className="text-lg font-semibold text-white mb-1">Enterprise</h4>
<p className="text-sm text-slate-400">For large organizations</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-semibold text-white">Custom</span>
</div>
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors mb-6" href="#">
          Contact sales
        </a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Unlimited everything</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Dedicated account manager</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">Custom SLAs</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check h-4 w-4 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-sm text-slate-300">24/7 premium support</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-lock h-4 w-4 text-emerald-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-sm text-slate-300">SSO/SAML &amp; SCIM provisioning</span>
</div>
         div className="flex items-center gap-2"&gt;
            <svg className="lucide lucide-server h-4 w-4 text-emerald-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="" viewbox="0 0 24 24" width="" xmlns="http://www.w3.org/2000/svg"><rect ="2"="" height="8" rx="2" width="20" x="2"></rect><rect height="8" rx="2" width="20" x="2" y="14"></rect><path d="M6 6h.01"></path><path d="M6 18h.01"></path></svg>
<span className="text-sm text-slate-300">On‑premise &amp; private cloud options</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/40 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(04) Integrations</p>
<h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Connect your stack in minutes</h3>
<p className="text-lg text-slate-300/90 max-w-2xl mx-auto">Seamlessly plug the tools your teams already love.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="Salesforce" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"/>
</div>
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="HubSpot" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://cdn.worldvectorlogo.com/logos/hubspot-1.svg"/>
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="Slack" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"/>
</div>
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="Google Analytics" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg"/>
</div>
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="Snowflake" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="group bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center hover:bg-white/10 transition-colors">
<img alt="Zapier" className="h-8 opacity-80 group-hover:opacity-100 transition-opacity" src="https://cdn.worldvectorlogo.com/logos/zapier.svg"/>
</div>
</div>
<div className="text-center mt-10">
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">
        View all integrations
        <svg -lucide="arrow-right" className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div></section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(05) Results</p>
<h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Proven outcomes for modern teams</h3>
<p className="text-lg text-slate-300/90 max-w-2xl mx-auto">Teams across the globe trust Eurevas turn insights into revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<figure className="-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
<blockquote className="text-slate-300">“Eurevas centralized our data and unlocked real-time decision making. We’ve never moved faster.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Dana Rivers headshot" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Dana Rivers</p>
<p className="text-xs text-slate-400">VP Growth, GlobalTech</p>
</div>
</figcaption>
</figure>
<figure className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
<blockquote className="text-slate-300">“The AI recommendations improved our ROI by 3x within a quarter. It’s become our daily command center.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Marcus Lee headshot" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Marcus Lee</p>
<p className="text-xs text-slate-400">CMO, Nexus</p>
</div>
</figcaption>
</figure>
<figure className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur">
<blockquote className="text-slate-300">“From security to scalability, Eurevas checks every enterprise box without slowing teams down.”</blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Priya Sharma headshot" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div>
<p className="text-sm text-white font-medium">Priya Sharma</p>
<p className="text-xs text-slate-400">Head of Data, Innovate</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-20 bg-slate-900/40 border-t border-white/10">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-10">
<p className="text-xs uppercase text-slate-400 tracking-widest mb-3">(06) FAQs</p>
<h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">, answered</h3>
</div>
<div className="space-y-4">
<details className="group bg-white/5 border border-white/10 rounded-xl p-5">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">How long does take?
          <span className="ml-4 inline-flex-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/10 text-slate-300 transition-transform group-open:rotate-45">+</span>
</span></summary>
<div className="mt-3 text-slate-300 text-sm leading-relaxed">
          Most teams are live within 5–10 days. Enterprise deployments with custom integrations typically complete in 3–6 weeks.
        </div>
</details>
<details className="group bg-white/5 border border-white/10 rounded-xl p-5">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">Do you offer SOC 2 GDPR compliance?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/10 text-slate-300 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-slate-300 text-sm leading-relaxed">
          Yes. Eurevas is SOC 2 Type II certified and fully compliant with GDPR and CCPA. We also provide DPAs and regional data residency options.
        </div>
</details>

     details className="group bg-white/5 border border-white/10 rounded-xl p-5"&gt;
        <summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">Is there a free trial?</span>
<span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/10 text-slate-300 transition-transform group-open:rotate-45">+</span>
</summary>
<div className="mt-3 text-slate-300 text-sm leading-relaxed">
          We offer a 14‑day free trial with access to core features. No credit card required to get started.
        </div>
</div>
</div>
</section>

<section className="relative py-20">
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-600/10-purple-600/10 to-transparent"></div>
<h3 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">Ready to accelerate your growth?</h3>
<p className="text-lg text-slate-300/90 max-w-2xl mx-auto mb-8">Start your free trial today or talk to our team to see how Eurevas fits your stack.</p>
   div className="flex flex-col sm:flex-row items-center justify-center gap-4"&gt;
      <button className="shiny-cta">
<span>Start Free Trial</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 backdrop-blur px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors" href="#">
        Contact Sales
        <svg className="h-4 w-4" data-lucide="message-square" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org2000/svg"><path="m21 0="" 1="" 1-4="" 15a4="" 4="" 4-4h10a4="" 4h7-4="" 4v5a4="" 4z"=""></path="m21></svg>
</a>
</section>

<footer className="border-t border-white/10 bg-black/30">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-2" href="#">
<div className="flex overflow-hidden text-slate-900 bg-gradient-to-br from-white to-slate-100 w-8 h-8 rounded-lg ring-slate-900/10 ring-1 relative shadow-lg items-center justify-center">
<span className="bg-clip-text text-lg font-semibold text-transparent tracking-tighter bg-gradient-to-b from-slate-900 to-slate-700 z-10 relative">E</span>
</div>
<span className="text-white font-semibold">Eurevas</span>
</a>
<p className="text-sm text-slate-400 mt-4">Enterprise marketing solutions to plan, execute, and optimize at scale.</p>
<div className="flex items-center gap-3 mt-4">
<a aria-label="Twitter" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
            &lt; xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="twitter"&gt;<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6.1-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.8-3.4 3.6-6 6-3.5 1.1 0 3-1 3-1Z"></path>
</a><a aria-label="LinkedIn" className="h- w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
<svg className="h-4 w-4 text-slate-300" data-lucide="linkedin" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="GitHub" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
<svg -width="2" className="h-4 w-4 text-slate-300" data-lucide="github" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.081.2527-2.48-1-3.528-1.15.28-2.35 0-35 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5a5.903 .903 0 0 0-1 3.5C4 12 7 14 10 14a4.8 4.8 0 0 0-1 3.5v4"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-">Product</h4>
<ul className="space-y-2-sm">
<li><a className="text-s-400 hover:text-white transition-colors" href="#"></a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-3"></h4>
<ul className="space-y-2 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Docs</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<lia className="text-slate-400 hover:text-white transition-colors" href="#">Guides
          <li><a className="text-slate-400 hover:text-white transition-colors" href="#">Status</a></li>
</lia></ul>
</div>
<div>
<h4 className="text-white font-medium mb-3">Stay in the loop</h4>
<p className="text-sm text-slate-400 mb-">Get product updates and insights straight to your inbox.</p>
<form className="flex gap-2">
<input className="w-full rounded-lg bg-white/5 border border-white/10 px- py-2 text-sm text-white placeholder:text-slate500 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" required="" type="email"/>
<button className="rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-500 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© <span id="year"></span> Eurevas Inc. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs">
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="text-slate-500 hover:text-slate-300-colors" href="#">Terms</a>
<a className="text-slate-500 hover:text-slate-300 transition-colors" href="#">Security</a>
</div>
</div>
</div>

</footer>
    </>
  );
}
