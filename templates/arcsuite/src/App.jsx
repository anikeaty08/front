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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons();
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
      <div className="top-0 w-full h-screen -z-10 mix-blend-soft-light brightness-75 bg-cover bg-center absolute" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e20bb1c-a58a-4d37-a2e8-d3598fc1ce28_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 20;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<div className="pointer-events-none absolute inset-x-0 top-0 z-0">
<div className="mx-auto h-56 w-[88%] max-w-7xl bg-gradient-to-b from-indigo-500/20 to-transparent blur-3xl opacity-40 via-blue-500/10" style={{}}></div>
</div>

<header className="fixed z-30 top-0 right-0 left-0">
<nav className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#">
<span className="bg-center text-base font-semibold tracking-tight w-[120px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/568903b7-fc39-42d8-9dc2-51ff77918cbe_1600w.png)] bg-cover invert"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-300" style={{}}>
<a className="hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Product
          </a>
<a className="hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Docs
          </a>
<a className="hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Pricing
          </a>
<a className="hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Customers
          </a>
<a className="hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Changelog
          </a>
</div>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-slate-300 hover:text-slate-100 transition font-sans" href="#" style={{}}>
            Log in
          </a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient before:rounded-full text-sm font-medium text-slate-200 bg-gradient-to-r from-slate-900/20 to-slate-700/50 rounded-full pt-3 pr-4 pb-3 pl-4" href="#" style={{'--fx-filter': 'blur(4px) liquid-glass(2, 10) saturate(1.25)'}}>

  Get started
  

<svg style={{position: 'absolute', width: '0', height: '0'}}>
</svg>
<div className="fx-container" style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backdropFilter: 'blur(4px) url(#fx-liquid-glass-j7ntgz) saturate(1.25)', background: 'transparent', pointerEvents: 'none', zIndex: '-1', overflow: 'hidden', borderRadius: 'inherit'}}></div>
<svg style={{position: 'absolute', width: '0', height: '0'}}>
</svg>
<div className="fx-container" style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', backdropFilter: 'blur(4px) url(#fx-liquid-glass-6nk7gf) saturate(1.25)', background: 'transparent', pointerEvents: 'none', zIndex: '-1', overflow: 'hidden', borderRadius: 'inherit'}}></div>
</a>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-300 hover:text-slate-100 hover:bg-white/5" style={{}}>
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</header>

<main className="overflow-hidden z-10 relative">
<section className="md:pt-20 max-w-7xl mt-24 mr-auto ml-auto pt-20 pr-6 pl-6">
<div className="max-w-3xl">
<h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold text-white tracking-tighter font-manrope pb-3" style={{maskImage: 'linear-gradient(130deg, transparent, black 15%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 15%, black 45%, transparent)'}}>
            ArcSuite is the fast lane for planning and shipping software
          </h1>
<p className="mt-5 text-base sm:text-lg text-slate-400 font-sans" style={{}}>
            A focused system for modern teams. Coordinate issues, projects, and
            delivery with speed. Automated rituals, AI triage, and seamless
            workflows.
          </p>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8 gap-x-4 gap-y-4 items-start">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] border-gradient before:rounded-full rounded-full relative shadow-[0_8px_40px_rgba(255,255,255,0.15)]" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
</div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">
                  Start building
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</a>
<a className="inline-flex items-center gap-2 hover:bg-white/10 transition border-gradient before:rounded-full text-sm font-medium text-slate-200 bg-gradient-to-r from-slate-900/20 to-slate-700/50 rounded-full pt-3 pr-4 pb-3 pl-4" href="#">
<span className="rounded-md px-2 py-0.5 text-xs font-medium ring-1 font-sans bg-blue-500/15 text-blue-300 ring-blue-400/20" style={{}}>
                New
              </span>
              Arc agent for Slack
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400" style={{}}>
<div className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-users h-4 w-4 text-slate-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              28,421 teams onboarded
            </div>
<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-600" style={{}}></span>
<div className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-activity h-4 w-4 text-slate-300" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
              99.99% uptime
            </div>
<span className="hidden sm:inline-block h-1 w-1 rounded-full bg-slate-600" style={{}}></span>
<div className="inline-flex items-center gap-2 font-sans" style={{}}>
<svg className="lucide lucide-check-circle h-4 w-4 text-slate-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
              2.9M issues shipped
            </div>
</div>
</div>

<div className="md:mt-20 -translate-x-16 mt-20 relative">

<div className="absolute -inset-x-20 -top-12 -bottom-8 md:-inset-x-32 md:-top-20 md:-bottom-12 -z-10">
</div>

<div className="max-w-6xl mr-auto ml-auto">
<div className="shadow-black/40 overflow-hidden border-gradient before:rounded-2xl sm:-translate-y-6 sm:scale-100 lg:translate-x-0 bg-[#0d0f14] rounded-2xl shadow-2xl translate-x-16 scale-75 -rotate-x-20 -rotate-y-10 -rotate-z-5" style={{width: '1200px', height: '700px', transformOrigin: 'top left', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 20%, transparent)'}}>

<div className="flex bg-white/5 border-white/10 border-b pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-500/70" style={{}}></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" style={{}}></span>
<span className="h-2.5 w-2.5 rounded-full bg-blue-500/70" style={{}}></span>
</div>
<div className="text-xs text-slate-400 font-sans" style={{}}>
                  Engineering • ARC-2032
                </div>
<button className="text-slate-300/80 hover:text-slate-100" style={{}}>
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>
<div className="grid grid-cols-12">

<aside className="col-span-3 border-white/10 border-r">
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-3 font-sans" style={{}}>
                      Workspace
                    </div>
<ul className="space-y-1.5">
<li className="">
<a className="group flex items-center justify-between rounded-md px-2 py-2 text-sm text-slate-300 hover:bg-white/5 font-sans" href="#" style={{}}>
                          Inbox
                          <span className="rounded-md bg-indigo-500/15 px-1.5 py-0.5 text-[10px] text-indigo-300 ring-1 ring-indigo-400/20 font-sans" style={{}}>
                            7
                          </span>
</a>
</li>
<li className="">
<a className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-slate-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-flag h-3.5 w-3.5" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
                          Initiatives
                        </a>
</li>
<li className="">
<a className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-slate-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-layers h-3.5 w-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
                          Projects
                        </a>
</li>
<li className="">
<a className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-slate-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-list-checks h-3.5 w-3.5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
                          Issues
                        </a>
</li>
<li className="">
<a className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-slate-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-chart-bar h-3.5 w-3.5" data-lucide="chart-bar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M7 16h8"></path><path d="M7 11h12"></path><path d="M7 6h3"></path></svg>
                          Insights
                        </a>
</li>
</ul>
</div>
<div className="border-t border-white/10 p-4">
<div className="text-xs uppercase tracking-wide text-slate-500 mb-3 font-sans" style={{}}>
                      Teams
                    </div>
<div className="space-y-1">
<button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-slate-300 hover:bg-white/5 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-400" style={{}}></span>
                        Core Platform
                      </button>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-slate-300/80 hover:bg-white/5 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-sky-400" style={{}}></span>
                        Experience
                      </button>
<button className="w-full flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-slate-300/80 hover:bg-white/5 font-sans" style={{}}>
<span className="h-1.5 w-1.5 rounded-full bg-blue-400" style={{}}></span>
                        AI &amp; Agents
                      </button>
</div>
</div>
</aside>

<div className="col-span-9">
<div className="p-7">
<div className="flex items-center gap-2 text-xs text-slate-400" style={{}}>
<span className="rounded-md bg-indigo-500/15 px-2 py-0.5 text-indigo-300 ring-1 ring-indigo-400/20 font-sans" style={{}}>
                        Engineering
                      </span>
<span className="font-sans" style={{}}>›</span>
<span className="rounded-md px-2 py-0.5 ring-1 font-sans bg-blue-500/15 text-blue-300 ring-blue-400/20" style={{}}>
                        Spice Harvester
                      </span>
<span className="font-sans" style={{}}>›</span>
<span className="text-slate-300 font-sans" style={{}}>
                        ARC-2032
                      </span>
</div>
<h2 className="mt-3 text-3xl text-white font-manrope font-semibold tracking-tighter" style={{}}>
                      Optimize Draco encoder path
                    </h2>
<div className="mt-4 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ring-1 font-sans bg-blue-500/15 text-blue-300 ring-blue-400/20" style={{}}>
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                        AI suggestion
                      </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-sky-500/15 px-2.5 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-400/20 font-sans" style={{}}>
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        SLA 6h
                      </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-amber-500/15 px-2.5 py-1 text-xs font-medium text-amber-300 ring-1 ring-amber-400/20 font-sans" style={{}}>
<svg className="lucide lucide-flame h-3.5 w-3.5" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
                        Priority P1
                      </span>
</div>

<div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-[#0b0d12]">
<div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
<div className="text-xs text-slate-400 font-sans" style={{}}>
                          encoder.ts
                        </div>
<div className="flex items-center gap-2">
<button className="text-slate-300/80 hover:text-slate-100" style={{}}>
<svg className="lucide lucide-copy h-4 w-4" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
<button className="text-slate-300/80 hover:text-slate-100" style={{}}>
<svg className="lucide lucide-maximize-2 h-4 w-4" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
</div>
<pre className="p-4 text-[13px] leading-6 text-slate-300 overflow-x-auto" style={{}}><code className="font-sans" style={{}}><span className="text-sky-300 font-sans" style={{}}>export</span> <span className="text-sky-300 font-sans" style={{}}>async</span> <span className="text-indigo-300 font-sans" style={{}}>function</span> <span className="text-slate-200 font-sans" style={{}}>encodeMesh</span>(mesh) {
  <span className="text-sky-300 font-sans" style={{}}>const</span> start = performance.now();
  <span className="text-sky-300 font-sans" style={{}}>const</span> worker = <span className="text-indigo-300 font-sans" style={{}}>new</span> Worker(<span className="font-sans text-blue-300" style={{}}>'/workers/draco.js'</span>);
  <span className="text-sky-300 font-sans" style={{}}>return</span> <span className="text-indigo-300 font-sans" style={{}}>await</span> <span className="text-slate-200 font-sans" style={{}}>invoke</span>(worker, <span className="font-sans text-blue-300" style={{}}>'encode'</span>, { mesh, speed: <span className="text-amber-300 font-sans" style={{}}>7</span> })
    .then(b =&gt; ({ data: b, ms: performance.now() - start }));
}</code></pre>
</div>

<div className="mt-6 grid gap-3 grid-cols-2">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300 font-sans" style={{}}>
                            LLM triage
                          </div>
<span className="text-xs font-sans text-blue-300" style={{}}>
                            8m ago
                          </span>
</div>
<p className="mt-1 text-sm text-slate-400 font-sans" style={{}}>
                          Flagged redundant allocations and proposed a worker
                          pool.
                        </p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div className="text-sm text-slate-300 font-sans" style={{}}>
                            Review
                          </div>
<span className="text-xs text-sky-300 font-sans" style={{}}>
                            2h ago
                          </span>
</div>
<p className="mt-1 text-sm text-slate-400 font-sans" style={{}}>
                          Benchmarks improved by 31% on large meshes.
                        </p>
</div>
</div>
<div className="mt-6 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-400 transition font-sans" style={{}}>
<svg className="lucide lucide-merge h-4 w-4" data-lucide="merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 6 4-4 4 4"></path><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path><path d="m20 22-5-5"></path></svg>
                        Merge change
                      </button>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition font-sans" style={{}}>
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        Comment
                      </button>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
</section><section className="md:pt-24 md:pb-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-300 font-sans">
<svg className="lucide lucide-zap h-3.5 w-3.5" data-lucide="zap" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="httpwww.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
      Powerful Features
    </span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold tracking-tight text-white">
      Supercharge Planning, Delivery, and Operations
    </h2>
<p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
      Everything you need to track, automate, and scale your workflow. Boost velocity, reduce toil, and ship with confidence.
    </p>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10 gap-x-6 gap-y-6">

<article className="lg:col-span-2 group overflow-hidden md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<style>
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

      .font-space-grotesk {
        font-family: 'Space Grotesk', 'Helvetica Neue', sans-serif !important;
      }
    </style>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20">
<div className="absolute right-3 sm:right-6 top-4 sm:top-6 w-[78%] h-[68%] rounded-2xl bg-slate-900/95 backdrop-blur border border-slate-500/30 shadow-xl">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-500/20 bg-slate-950/30">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-green-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-red-500/80"></span>
</div>
<span className="text-[10px] sm:text-xs text-slate-400 font-medium font-space-grotesk">Deploy Dashboard</span>
</div>
<div className="p-3 space-y-3">
<div className="rounded-xl border border-slate-500/20 bg-slate-950/30 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-slate-200 font-space-grotesk">my-app.com</span>
</div>
<span className="px-2 py-0.5 text-[10px] bg-green-500/20 text-green-400 rounded-full font-space-grotesk">Live</span>
</div>
<div className="mt-2 text-[10px] text-slate-400 font-space-grotesk">Deployed 2 minutes ago</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-[10px] text-slate-400 font-space-grotesk">Build time: 45s</span>
<div className="flex items-center gap-1">
<div className="h-1 w-8 rounded-full bg-slate-800">
<div className="h-1 w-full rounded-full bg-slate-500"></div>
</div>
<span className="text-[10px] text-slate-400 font-space-grotesk">100%</span>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-500/10 bg-slate-950/80 p-2">
<div className="text-[9px] font-mono space-y-0.5">
<div className="text-slate-500 font-space-grotesk">✓ Installing dependencies...</div>
<div className="text-slate-500 font-space-grotesk">✓ Building application...</div>
<div className="text-green-400 font-space-grotesk">✓ Deployment successful!</div>
<div className="flex items-center gap-1">
<span className="text-slate-400 font-space-grotesk">→</span>
<span className="w-1 h-2 bg-slate-400 animate-pulse"></span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute left-6 sm:left-12 bottom-10 sm:bottom-12 w-[62%] h-[52%] rounded-2xl bg-slate-900/95 backdrop-blur border border-slate-500/20 shadow-lg">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-500/20">
<span className="text-[10px] sm:text-xs tracking-widest text-slate-400 font-space-grotesk">GIT INTEGRATION</span>
<svg className="text-slate-400" fill="none" height="12" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
</path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</div>
<div className="p-3 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-300 font-space-grotesk">main branch</span>
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
</div>
<div className="text-[10px] text-slate-400 font-space-grotesk">Auto-deploy enabled</div>
<div className="mt-2 space-y-1">
<div className="flex items-center gap-2 text-[10px]">
<div className="h-1 w-1 rounded-full bg-slate-400"></div>
<span className="text-slate-400 font-space-grotesk">feat: add user auth</span>
</div>
<div className="flex items-center gap-2 text-[10px]">
<div className="h-1 w-1 rounded-full bg-slate-500"></div>
<span className="text-slate-500 font-space-grotesk">fix: responsive design</span>
</div>
</div>
</div>
</div>
<div className="absolute top-6 left-4 w-16 h-3 rounded bg-slate-500/30 animate-pulse"></div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">One-Click Deploy
        </h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
        Deploy your applications instantly with automated builds, Git integration, and real-time monitoring. Ship faster
        with zero configuration.
      </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          Start deploying
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl">
</div>
</article>
<article className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 lg:col-span-1 md:p-8 bg-gradient-to-br from-slate-900/70 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20">
<div className="absolute inset-4 rounded-xl border border-slate-500/20 bg-slate-950/30 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300 font-sans">Sprint Automations</p>
<span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-slate-300 ring-1 ring-white/10 font-sans">
            Every Monday
          </span>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-bell" data-lucide="bell" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</span>
<span className="text-xs">Standup reminder</span>
</div>
<span className="text-xs text-sky-300 font-sans">09:00</span>
</li>
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-git-branch" data-lucide="git-branch" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</span>
<span className="text-xs">Auto‑create release</span>
</div>
<span className="text-xs text-emerald-300 font-sans">v2.13</span>
</li>
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-check-circle-2" data-lucide="check-circle-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</span>
<span className="text-xs">SLA checks</span>
</div>
<span className="text-xs text-amber-300 font-sans">6h</span>
</li>
</ul>
</div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Ship Without
          Silos
        </h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">Coordinate projects across teams, repos, and time zones.
        Localize workflows and keep everyone in sync.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          Learn more
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl">
</div>
</article>

<article className="lg:col-span-1 group overflow-hidden md:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20">
<div className="absolute inset-4 rounded-xl border border-slate-500/20 bg-slate-950/30 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300 font-sans">Works with your tools</p>
<span className="inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-0.5 text-[11px] text-slate-300 ring-1 ring-white/10 font-sans">
            14 integrations
          </span>
</div>
<div className="mt-3 grid grid-cols-6 gap-2">
<div className="bg-white/5 h-10 rounded-md ring-white/10 ring-1"></div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-md bg-white/5 ring-1 ring-white/10"></div>
</div>
<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md bg-slate-400/10 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10 font-sans">
<svg className="lucide lucide-plug h-3.5 w-3.5" data-lucide="plug" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22v-5"></path><path d="M9 8V2"></path><path d="M15 8V2"></path><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"></path></svg>
            Webhooks
          </span>
<span className="inline-flex items-center gap-1.5 rounded-md bg-slate-400/10 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10 font-sans">
<svg className="lucide lucide-code-2 h-3.5 w-3.5" data-lucide="code-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
            GraphQL
          </span>
</div>
</div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Collaborate
          Seamlessly</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">Keep design, code, and product in one flow. Connect
        source
        control, chat, docs, and CI with zero friction.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          View integrations
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl">
</div>
</article>
<article className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 lg:col-span-2 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20">
<div className="absolute inset-4 rounded-xl border border-slate-500/20 bg-slate-950/30 p-4 backdrop-blur">
<div className="flex items-center justify-between">
<p className="text-sm text-slate-300 font-sans">Arc Automations</p>
<span className="text-xs text-slate-400 font-sans">10 active</span>
</div>
<ul className="mt-3 space-y-2">
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-bot" data-lucide="bot" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</span>
<span className="text-xs">Triage with AI</span>
</div>
<span className="text-xs font-sans text-slate-300">On</span>
</li>
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-git-pull-request" data-lucide="git-pull-request" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" x2="6" y1="9" y2="21"></line></svg>
</span>
<span className="text-xs">Auto‑assign reviewers</span>
</div>
<span className="text-xs font-sans text-slate-300">On</span>
</li>
<li className="flex items-center justify-between rounded-md bg-white/5 px-3 py-2">
<div className="flex items-center gap-2 text-sm text-slate-300 font-sans">
<span className="inline-flex h-5 w-5 items-center justify-center rounded bg-white/10">
<svg className="lucide lucide-rotate-ccw" data-lucide="rotate-ccw" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</span>
<span className="text-xs">Backport on label</span>
</div>
<span className="text-xs font-sans text-amber-300">Rules: 3</span>
</li>
</ul>
</div>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Automate Delivery
          Workflows</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">Let the system handle the repetitive work—follow‑ups,
        reviews, and reporting—so your team can focus on impact.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          Explore automations
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl">
</div>
</article>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full rounded-full bg-gradient-to-r from-slate-900/20 to-slate-700/50 text-sm font-medium text-slate-200 px-4 py-3 hover:bg-white/10 transition" href="#">
      Explore all features
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section><section className="md:pt-24 md:pb-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-300 font-sans">
<svg className="lucide lucide-star h-3.5 w-3.5" data-lucide="star" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
      Featured Solutions
    </span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold tracking-tight text-white">
      Accelerate Your Development Workflow
    </h2>
<p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
      Powerful tools and integrations designed to streamline planning, deployment, and team collaboration. Ship faster with confidence.
    </p>
</div>
<div className="grid gap-6 lg:grid-cols-3 mt-10">

<article className="lg:col-span-2 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="AI-powered issue triage dashboard" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/714e346a-1e72-4176-bdda-191b1f1fd5ad_1600w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">AI-Powered Issue Triage</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
        Automatically categorize, prioritize, and assign issues with intelligent machine learning. Reduce manual work and keep your team focused on what matters.
      </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          Explore AI features
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
<article className="lg:col-span-1 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Real-time collaboration workspace" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ee3841e8-ef6d-45b3-9f33-9df069f9708a_800w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Real-Time Collaboration</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
        Connect your entire team with seamless integrations, live updates, and unified workflows. Coordinate across time zones effortlessly.
      </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          View integrations
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>

<article className="lg:col-span-1 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Advanced analytics dashboard" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/328d00d1-5437-4deb-ae82-da7e04472755_800w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Advanced Analytics &amp; Insights</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
        Track velocity, identify bottlenecks, and optimize delivery with deep insights. Make data-driven decisions that move the needle.
      </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          View analytics
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColord" strokeLinejoin="round" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
<article className="lg:col-span-2 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Automated deployment pipeline" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/79b08b01-e6d2-46af-8610-971392995cb1_1600w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Automated Deployment Pipeline</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
        Ship code with confidence using automated testing, staging, and deployment workflows. From commit to production in minutes.
      </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
          Explore deployments
          <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full rounded-full bg-gradient-to-r from-slate-900/20 to-slate-700/50 text-sm font-medium text-slate-200 px-4 py-3 hover:bg-white/10 transition" href="#">
      Explore all solutions
      <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section><section className="md:pt-24 md:pb-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6">
<div className="text-center max-w-3xl mx-auto">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1 text-xs text-slate-300 font-sans">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      Customer Success
    </span>
<h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-manrope font-semibold tracking-tight text-white">
      From Oslo to Oregon — teams ship faster with ArcSuite
    </h2>
<p className="mt-3 text-base sm:text-lg text-slate-400 font-sans">
      Purpose-built for clarity, speed, and momentum. Adopted by product-led companies across the globe.
    </p>
</div>
<div className="grid lg:grid-cols-3 mt-10 gap-x-6 gap-y-6">
<article className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Misty forest in Oregon" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8fdbf7db-21c1-4e01-a0fa-c5c8474a68b8_800w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Portland, USA</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
          Trailhead Robotics — Core engineering reduced lead time to 2.1 days with AI-powered triage and automation.
        </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
            Read case study
            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
<article className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Snowy scene in Kyoto" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91604000-6fb7-4b56-9d48-66782de4e287_800w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Kyoto, Japan</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
          Hanami Labs — Mobile team streamlined cross-functional collaboration across three continents effortlessly.
        </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
            Read case study
            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
<article className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/10 md:p-8 bg-gradient-to-br from-slate-900/50 via-slate-900/50 to-slate-800/70 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', maskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(220deg, transparent, black 20%, black 80%, transparent)'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl border border-slate-500/30" style={{maskImage: 'linear-gradient(135deg, white, transparent 60%)'}}></div>
<div className="pointer-events-none absolute inset-0 border-slate-500/10 border rounded-2xl" style={{maskImage: 'linear-gradient(135deg, transparent 60%, white)'}}></div>
<div className="relative h-56 sm:h-64 rounded-2xl bg-gradient-to-br from-slate-950/40 via-slate-900 to-slate-800 ring-1 ring-inset ring-slate-500/20 overflow-hidden">
<img alt="Minimal concrete architecture in Zurich" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4b8d3bda-d11f-4dd0-93f1-31ed9ea16eaf_800w.webp"/>
</div>
<div className="mt-6 sm:mt-8">
<div className="flex items-center gap-3">
<h3 className="text-2xl sm:text-3xl font-manrope font-semibold tracking-tight text-white relative">Zurich, Switzerland</h3>
</div>
<p className="mt-3 text-sm text-slate-400 font-sans relative">
          Alpine Systems — Infrastructure team achieved 99.995% uptime with advanced monitoring and deployment automation.
        </p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-300 font-sans transition" href="#">
            Read case study
            <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
</article>
</div>
<div className="max-w-6xl mx-auto mt-12 space-y-8">
<article className="relative">
<div className="flex pb-4 gap-x-4 gap-y-4 items-baseline">
<div className="flex-1">
<div className="text-xs uppercase tracking-wide text-slate-500 font-sans mb-1">Active workspaces</div>
<div className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-white">38,902</div>
</div>
<p className="text-sm text-slate-400 font-sans">+1,214 this quarter</p>
</div>
<div className="pt-4 text-xs text-slate-500 font-sans">
      Across 127 countries • 94% monthly active rate • Growing 12% QoQ
    </div>
</article>
<div className="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
<article className="relative">
<div className="flex pb-4 gap-x-4 gap-y-4 items-baseline">
<div className="flex-1">
<div className="text-xs uppercase tracking-wide text-slate-500 font-sans mb-1">Issues shipped</div>
<div className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-white">3.4M</div>
</div>
<p className="text-sm text-slate-400 font-sans">Avg. lead time 2.3 days</p>
</div>
<div className="pt-4 text-xs text-slate-500 font-sans">
      28% faster than industry average • 89% closed on schedule • P95 resolution under 6 hours
    </div>
</article>
<div className="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
<article className="relative">
<div className="flex pb-4 gap-x-4 gap-y-4 items-baseline">
<div className="flex-1">
<div className="text-xs uppercase tracking-wide text-slate-500 font-sans mb-1">Reliability</div>
<div className="text-3xl md:text-4xl font-manrope font-semibold tracking-tight text-white">99.995%</div>
</div>
<p className="text-sm text-slate-400 font-sans">SLA-backed uptime</p>
</div>
<div className="pt-4 text-xs text-slate-500 font-sans">
      22 consecutive months above target • Multi-region redundancy • 24/7 monitoring and support
    </div>
</article>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center gap-2 border-gradient before:rounded-full hover:bg-white/10 transition text-sm font-medium text-slate-200 bg-gradient-to-r from-slate-900/20 to-slate-700/50 rounded-full pt-3 pr-4 pb-3 pl-4" href="#">
  View all customer stories
  <svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(226, 232, 240)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section><section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
<div className="pt-20 relative">
<div className="flex items-center justify-center">
<span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10 font-sans">
<svg className="h-3.5 w-3.5 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
        Start Your Journey
      </span>
</div>
<div className="text-center max-w-3xl mt-6 mr-auto ml-auto">
<h2 className="md:text-6xl text-4xl font-semibold text-slate-50 tracking-tight font-manrope">Ready to Ship Faster</h2>
<h2 className="md:text-6xl text-4xl font-semibold text-slate-50 tracking-tight font-manrope mt-1" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}>
        and <span className="bg-clip-text italic text-transparent font-playfair bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300 pr-3">Build Better?</span>
</h2>
<p className="mt-4 text-base md:text-lg text-slate-400 font-sans">
        Join thousands of teams using ArcSuite to streamline workflows and accelerate delivery
      </p>
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] border-gradient before:rounded-full rounded-full my-4 relative shadow-[0_8px_40px_rgba(255,255,255,0.15)]" href="#" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.6)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
</div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style={{borderRadius: '9999px'}}>
<div className="" style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(10, 11, 20, 0.8)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10 font-sans">
                  Get Started Free
                </span>
<span className="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</div>
</a>
<div className="mt-8 flex items-center justify-center gap-6 text-slate-400 flex-wrap">
<a className="group hover:text-slate-200 transition flex items-center gap-2 font-sans" href="mailto:hello@arcsuite.com">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
          hello@arcsuite.com
        </a>
<span className="h-4 w-px bg-white/10"></span>
<a className="group hover:text-slate-200 transition flex items-center gap-2 font-sans" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
          Schedule Demo
        </a>
</div>
<div className="relative mt-14">
<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6">
<span className="block mx-auto w-80 h-10 rounded-full bg-white/20 blur-2xl opacity-70"></span>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>
<footer className="pt-10">
<div className="flex gap-4 flex-wrap items-center justify-between">
<a className="inline-flex items-center gap-2" href="#">
<span className="text-sm font-semibold text-neutral-200 tracking-tight font-sans">ArcSuite</span>
</a>
<div className="flex items-center gap-4 text-slate-400">
<a aria-label="LinkedIn" className="hover:text-slate-200 transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a aria-label="Twitter" className="hover:text-slate-200 transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a aria-label="GitHub" className="hover:text-slate-200 transition" href="#">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
</div>
</div>
<nav className="flex flex-wrap gap-6 text-sm text-slate-400 mt-6 font-sans">
<a className="hover:text-slate-200 transition" href="#">Product</a>
<a className="hover:text-slate-200 transition" href="#">Customers</a>
<a className="hover:text-slate-200 transition" href="#">Pricing</a>
<a className="hover:text-slate-200 transition" href="#">Docs</a>
<a className="hover:text-slate-200 transition" href="#">Changelog</a>
<a className="hover:text-slate-200 transition" href="#">Privacy</a>
<a className="hover:text-slate-200 transition" href="#">Terms</a>
</nav>
<div className="mt-8 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-4 font-sans">
<span>© 2025 ArcSuite. All rights reserved.</span>
<span>Built for modern engineering teams</span>
</div>
</footer>
</section>
</main>





    </>
  );
}
