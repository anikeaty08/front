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
      

<div className="w-full h-0.5 bg-slate-900/10"></div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a aria-label="UK Roofers Journal" className="flex items-center space-x-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight">UR</div>
<div className="text-slate-900 text-[15px] sm:text-[16px] font-medium tracking-tight group-hover:opacity-80 transition">UK Roofers Journal</div>
</a>

<nav className="hidden md:flex items-center space-x-6">
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#explore">Explore</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#categories">Categories</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#publish">Publish</a>
<a className="text-sm text-slate-700 hover:text-slate-900 hover:underline underline-offset-4" href="#about">About</a>
</nav>

<div className="flex items-center space-x-3">
<div className="hidden sm:flex items-center relative">
<svg className="absolute left-3 h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<input className="pl-9 pr-3 py-2 w-64 rounded-md border border-slate-200 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 hover:border-slate-300" placeholder="Search articles, companies..." type="search"/>
</div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-3.5 py-2 rounded-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" href="#publish">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Submit Post
            </a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 hover:bg-slate-50">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-slate-100"></div>
<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-slate-100"></div>
</div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4 -rotate-x-10">
<div className="grid lg:grid-cols-2 gap-10 gap-x-10 gap-y-10 items-center">
<div className="">
<p className="text-xs font-medium text-slate-600 tracking-wide uppercase">Business Blog</p>
<h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">The UK Roofers Journal</h1>
<p className="mt-4 text-slate-600 leading-7 text-[15px]">Insights, case studies, and guides from roofing companies across the UK. Publish your stories, projects, and expertise to reach property managers, homeowners, and contractors.</p>
<div className="flex flex-wrap mt-6 gap-x-3 gap-y-3 items-center">
<a className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2.5 rounded-md hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" href="#publish">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
                Publish your article
              </a>
<a className="inline-flex items-center gap-2 text-slate-900 text-sm px-4 py-2.5 rounded-md border border-slate-200 hover:bg-slate-50 focus:outline-none" href="#explore">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
                Explore articles
              </a>
</div>
<div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 7l9 6 9-6-9-4-9 4v10l9 4 9-4V7"></path></svg>
                1,200+ subscribers
              </div>
<div className="hidden sm:flex items-center gap-2">
<svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m3 7 9 6 9-6"></path><path className="" d="M21 7v10l-9 4-9-4V7"></path></svg>
                300+ published posts
              </div>
</div>
</div>
<div className="relative">
<div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
<img alt="UK Rooftops" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3bfeb9dd-b8b1-4a15-8725-9f622bc5d3ad_1600w.jpg"/>
</div>
<div className="absolute -bottom-5 -right-5 hidden md:block">
<div className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 w-64">
<div className="flex items-center gap-3">
<img alt="Author avatar" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-sm font-medium text-slate-900 tracking-tight">Trade Insight</p>
<p className="text-xs text-slate-600">Weekly column</p>
</div>
</div>
<p className="mt-3 text-[13px] text-slate-600">“Best practices for slate repairs in coastal towns.”</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-200 border-t pt-8 pb-8" id="explore">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured</h2>
<p className="mt-1 text-[15px] text-slate-600">Handpicked articles from our editorial team.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#">
            View all
            <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<img alt="Roof project" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&amp;w=1640&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18"></path><path d="M6 7v10"></path><path d="M18 7v10"></path><path d="M3 17h18"></path><path d="M8 7V3h8v4"></path></svg>
                  Slate
                </span>
<span className="text-slate-400">•</span>
<span>London</span>
</div>
<h3 className="mt-2 text-[18px] sm:text-[19px] font-semibold tracking-tight text-slate-900 group-hover:underline">Victorian townhouse: full slate re-roof with leadwork</h3>
<p className="mt-2 text-[13.5px] text-slate-600 line-clamp-2">A complete guide to assessing timbers, replacing slate, and detailing lead valleys for period homes in conservation areas.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">Harper Roofing</p>
</div>
<div className="text-xs text-slate-500">8 min read</div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<img alt="Commercial roofing" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                  Flat Roof
                </span>
<span className="text-slate-400">•</span>
<span className="">Manchester</span>
</div>
<h3 className="mt-2 text-[18px] sm:text-[19px] font-semibold tracking-tight text-slate-900 group-hover:underline">EPDM vs. Torch-on felt: costs, lifespan, and warranty</h3>
<p className="mt-2 text-[13.5px] text-slate-600 line-clamp-2">What facility managers should know before selecting a membrane for commercial units and schools.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">NorthWest Coverings</p>
</div>
<div className="text-xs text-slate-500">6 min read</div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<img alt="Safety" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&amp;w=1640&amp;auto=format&amp;fit=crop"/>
<div className="p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path></svg>
                  Safety
                </span>
<span className="text-slate-400">•</span>
<span>Leeds</span>
</div>
<h3 className="mt-2 text-[18px] sm:text-[19px] font-semibold tracking-tight text-slate-900 group-hover:underline">Working at height: 2025 PPE checklist and standards</h3>
<p className="mt-2 text-[13.5px] text-slate-600 line-clamp-2">Updated guidance on harnesses, edge protection, and compliance for domestic and commercial sites.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">Hill &amp; Ridge</p>
</div>
<div className="text-xs text-slate-500">9 min read</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-slate-200 border-t pt-4 pb-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center gap-2">
<span className="text-sm text-slate-600 mr-2">Filter by:</span>

<details className="relative group">
<summary className="list-none inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 text-sm hover:bg-slate-50 cursor-pointer">
<svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"></path><path d="M12 7v5l3 3"></path></svg>
              Regions
              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="absolute z-30 mt-2 w-72 rounded-lg border border-slate-200 bg-white shadow-lg p-3">
<div className="grid grid-cols-2 gap-2">

<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                  London
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  North West
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Midlands
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Scotland
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Wales
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  South West
                </label>
</div>
<div className="mt-3 flex items-center justify-between">
<button className="text-sm text-slate-700 hover:text-slate-900 underline underline-offset-4">Clear</button>
<button className="inline-flex items-center gap-2 text-sm bg-slate-900 text-white px-3 py-1.5 rounded-md hover:bg-slate-800">
                  Apply
                </button>
</div>
</div>
</details>

<details className="relative">
<summary className="list-none inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 text-sm hover:bg-slate-50 cursor-pointer">
<svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18M3 12h18M3 17h18"></path></svg>
              Types
              <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="absolute z-30 mt-2 w-80 rounded-lg border border-slate-200 bg-white shadow-lg p-3">
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Slate &amp; Tile
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Flat Roofing
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Leadwork
                </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                  Roofline &amp; Gutters
                </label>
</div>
</div>
</details>

<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm hover:bg-slate-50">
<svg className="h-4 w-4 text-amber-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20"></path><path d="M17 5H9a4 4 0 0 0-4 4v8"></path></svg>
            Grants &amp; Funding
          </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm hover:bg-slate-50">
<svg className="h-4 w-4 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4 14 6-6 2 2 4-4 4 4"></path><path d="M2 20h20"></path></svg>
            Case Studies
          </button>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 text-sm hover:bg-slate-50">
<svg className="h-4 w-4 text-sky-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m7 11 2-2 4 4 6-6"></path><path d="M21 16v4H3v-4"></path></svg>
            How-to Guides
          </button>
</div>
</div>
</section>

<main className="py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">

<section className="lg:col-span-8 space-y-6">

<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<div className="grid sm:grid-cols-5">
<div className="sm:col-span-2">
<img alt="Roof tiles" className="h-full w-full object-cover sm:h-48" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="sm:col-span-3 p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">How-to</span>
<span className="text-slate-400">•</span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"></path><path d="M12 7v5l3 3"></path></svg>
                    Bristol
                  </span>
<span className="text-slate-400">•</span>
<span className="">7 min read</span>
</div>
<h3 className="mt-1.5 text-[19px] font-semibold tracking-tight group-hover:underline">How to diagnose and fix ridge tile failures after storms</h3>
<p className="mt-1.5 text-[13.5px] text-slate-600 line-clamp-2">From mortar testing to mechanical fixings, here’s how to secure exposed ridges and prevent repeat callouts.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">Beacon Roofing</p>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" href="#">
                    Read
                    <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</article>
<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<div className="grid sm:grid-cols-5">
<div className="sm:col-span-2">
<img alt="Solar roof" className="h-full w-full object-cover sm:h-48" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="sm:col-span-3 p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">Sustainability</span>
<span className="text-slate-400">•</span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"></path><path d="M12 7v5l3 3"></path></svg>
                    Brighton
                  </span>
<span className="text-slate-400">•</span>
<span>11 min read</span>
</div>
<h3 className="mt-1.5 text-[19px] font-semibold tracking-tight group-hover:underline">Integrating PV with slate: flashing details that don’t leak</h3>
<p className="mt-1.5 text-[13.5px] text-slate-600 line-clamp-2">Practical detailing for in-roof systems, airflow routing, and warranties UK clients expect.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">South Shore Roofing</p>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" href="#">
                    Read
                    <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</article>
<article className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-sm transition">
<div className="grid sm:grid-cols-5">
<div className="sm:col-span-2">
<img alt="Leadwork" className="h-full w-full object-cover sm:h-48" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="sm:col-span-3 p-4">
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200">Leadwork</span>
<span className="text-slate-400">•</span>
<span className="inline-flex items-center gap-1">
<svg className="h-3.5 w-3.5 text-slate-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"></path><path d="M12 7v5l3 3"></path></svg>
                    York
                  </span>
<span className="text-slate-400">•</span>
<span className="">5 min read</span>
</div>
<h3 className="mt-1.5 text-[19px] font-semibold tracking-tight group-hover:underline">Lead valleys: expansion joints, codes, and patination oil</h3>
<p className="mt-1.5 text-[13.5px] text-slate-600 line-clamp-2">Details for longevity and finish when replacing in conservation areas.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Author" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<p className="text-sm text-slate-700">Humber Leadworks</p>
</div>
<a className="inline-flex items-center gap-1.5 text-sm text-slate-700 hover:text-slate-900" href="#">
                    Read
                    <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
</article>

<div className="flex items-center justify-between border-t border-slate-200 pt-6">
<button className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
              Newer
            </button>
<div className="text-sm text-slate-600">Page 1 of 12</div>
<button className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
              Older
              <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</section>

<aside className="lg:col-span-4 space-y-6">

<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="bell" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(51, 65, 85)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Subscribe</h3>
</div>
<p className="mt-2 text-[13.5px] text-slate-600">Get weekly UK roofing insights in your inbox.</p>
<div className="mt-3 flex">
<input className="flex-1 px-3 py-2 rounded-l-md border border-slate-200 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300" placeholder="you@company.co.uk" type="email"/>
<button className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-3 py-2 rounded-r-md hover:bg-slate-800">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4 20-7Z"></path></svg>
                Join
              </button>
</div>
<p className="mt-2 text-[12px] text-slate-500">No spam. Unsubscribe anytime.</p>
</div>

<div className="rounded-xl border border-slate-200 p-5" id="categories">
<div className="flex items-center gap-2">
<svg className="h-[18px] w-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="7" width="7" x="3" y="3"></rect><rect height="7" width="7" x="14" y="3"></rect><rect height="7" width="7" x="14" y="14"></rect><rect height="7" width="7" x="3" y="14"></rect></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Categories</h3>
</div>
<ul className="mt-3 space-y-2 text-sm">
<li className="flex items-center justify-between">
<a className="text-slate-700 hover:text-slate-900" href="#">Slate &amp; Tile</a>
<span className="text-xs text-slate-500">58</span>
</li>
<li className="flex items-center justify-between">
<a className="text-slate-700 hover:text-slate-900" href="#">Flat Roofing</a>
<span className="text-xs text-slate-500">42</span>
</li>
<li className="flex items-center justify-between">
<a className="text-slate-700 hover:text-slate-900" href="#">Leadwork</a>
<span className="text-xs text-slate-500">25</span>
</li>
<li className="flex items-center justify-between">
<a className="text-slate-700 hover:text-slate-900" href="#">Roofline</a>
<span className="text-xs text-slate-500">37</span>
</li>
<li className="flex items-center justify-between">
<a className="text-slate-700 hover:text-slate-900" href="#">Business &amp; Growth</a>
<span className="text-xs text-slate-500">19</span>
</li>
</ul>
</div>

<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="h-[18px] w-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path><path d="M12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7Z"></path></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Top Contributors</h3>
</div>
<ul className="mt-3 space-y-3">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-800">Harper Roofing</p>
<p className="text-xs text-slate-500">London</p>
</div>
</div>
<span className="text-xs text-slate-500">12 posts</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-800">NorthWest Coverings</p>
<p className="text-xs text-slate-500">Manchester</p>
</div>
</div>
<span className="text-xs text-slate-500">9 posts</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Author" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-slate-800">Hill &amp; Ridge</p>
<p className="text-xs text-slate-500">Leeds</p>
</div>
</div>
<span className="text-xs text-slate-500">8 posts</span>
</li>
</ul>
</div>
</aside>
</div>
</main>

<section className="py-10 border-t border-slate-200 bg-slate-50" id="publish">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Publish your post</h2>
<p className="mt-1 text-[15px] text-slate-600">For UK roofing companies and professionals. Share knowledge, showcase projects, and build trust.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#guidelines">
            Submission guidelines
            <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg>
</a>
</div>
<div className="mt-6 grid lg:grid-cols-3 gap-6">

<form className="lg:col-span-2 space-y-5 bg-white rounded-xl border border-slate-200 p-5">

<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700">Your name</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 hover:border-slate-300" placeholder="Alex Morgan" type="text"/>
</div>
<div className="">
<label className="block text-sm text-slate-700">Company</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 hover:border-slate-300" placeholder="Harper Roofing Ltd" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-slate-700">Email</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 hover:border-slate-300" placeholder="editor@yourcompany.co.uk" type="email"/>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="relative">
<label className="block text-sm text-slate-700">Region</label>
<details className="mt-1 group">
<summary className="list-none flex items-center justify-between w-full px-3 py-2 rounded-md border border-slate-200 text-sm cursor-pointer hover:bg-slate-50">
<span className="text-slate-700">Select a region</span>
<svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="absolute z-30 mt-2 w-full rounded-lg border border-slate-200 bg-white shadow-lg p-2">
<div className="grid grid-cols-2 gap-1">
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">London</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">South East</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">South West</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">Midlands</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">North West</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">North East</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">Scotland</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">Wales</button>
<button className="text-left text-sm px-2 py-1.5 rounded hover:bg-slate-50" type="button">Northern Ireland</button>
</div>
</div>
</details>
</div>

<div className="relative">
<label className="block text-sm text-slate-700">Categories</label>
<details className="mt-1 group">
<summary className="list-none flex cursor-pointer hover:bg-slate-50 text-sm w-full border-slate-200 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center justify-between">
<span className="text-slate-700">Choose categories</span>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="absolute z-30 mt-2 w-full rounded-lg border border-slate-200 bg-white shadow-lg p-3">
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900">
<svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
                        Slate &amp; Tile
                      </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                        Flat Roofing
                      </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                        Leadwork
                      </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                        Business
                      </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                        Safety
                      </label>
<label className="flex items-center gap-2 text-sm text-slate-700 cursor-pointer hover:bg-slate-50 rounded-md p-2">
<input className="peer hidden" type="checkbox"/>
<span className="h-4 w-4 rounded border border-slate-300 flex items-center justify-center peer-checked:bg-slate-900 peer-checked:border-slate-900"><svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></span>
                        Training
                      </label>
</div>
</div>
</details>
</div>
</div>

<div className="">
<label className="block text-sm text-slate-700">Post title</label>
<input className="mt-1 w-full px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 hover:border-slate-300" placeholder="e.g., How to assess storm damage on slate roofs" type="text"/>
</div>

<div className="">
<label className="block text-sm text-slate-700">Cover image</label>
<div className="mt-1 flex items-center justify-between gap-3 rounded-md border border-dashed border-slate-300 p-3">
<div className="flex items-center gap-3">
<div className="h-10 w-14 rounded bg-slate-100 border border-slate-200 flex items-center justify-center">
<svg className="h-5 w-5 text-slate-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="m3 16 5-5 4 4 5-6 4 5"></path></svg>
</div>
<div>
<p className="text-sm text-slate-700">Upload a high-quality image</p>
<p className="text-xs text-slate-500">JPG, PNG — up to 5MB</p>
</div>
</div>
<label className="inline-flex items-center gap-2 bg-white text-slate-700 text-sm px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 cursor-pointer">
                  Browse
                  <input accept="image/*" className="hidden" type="file"/>
</label>
</div>
</div>

<div className="">
<label className="block text-sm text-slate-700">Content</label>
<div className="mt-1 rounded-md border border-slate-200 overflow-hidden">

<div className="flex items-center gap-1 border-b border-slate-200 bg-slate-50/60 px-2 py-1.5">
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white border border-transparent hover:border-slate-200" title="Bold" type="button">
<svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 5h6a4 4 0 1 1 0 8H7z"></path><path d="M13 13H7v6h6a3 3 0 1 0 0-6z"></path></svg>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white border border-transparent hover:border-slate-200" title="Italic" type="button">
<svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="10" y1="4" y2="4"></line><line x1="14" x2="5" y1="20" y2="20"></line><line x1="15" x2="9" y1="4" y2="20"></line></svg>
</button>
<button className="h-8 w-8 inline-flex items-center justify-center rounded-md hover:bg-white border border-transparent hover:border-slate-200" title="Link" type="button">
<svg className="h-4 w-4 text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.07 0l3.54-3.54a5 5 0 0 0-7.07-7.07L10 5"></path><path d="M14 11a5 5 0 0 0-7.07 0L3.39 14.54a5 5 0 1 0 7.07 7.07L14 19"></path></svg>
</button>
<div className="ml-auto flex items-center gap-2 pr-1 text-xs text-slate-500">
<span>Markdown supported</span>
</div>
</div>
<textarea className="w-full px-3 py-2 text-sm focus:outline-none resize-y" placeholder="Write your post here..." rows="10"></textarea>
</div>
</div>

<div className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2">
<div>
<p className="text-sm text-slate-800">Mark as sponsored</p>
<p className="text-xs text-slate-500">For paid partnerships and brand content.</p>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<span className="w-10 h-6 bg-slate-200 rounded-full transition-all peer-checked:bg-slate-900"></span>
<span className="absolute left-1 top-1 h-4 w-4 bg-white rounded-full transition-all peer-checked:left-5 border border-slate-300"></span>
</label>
</div>

<div className="flex items-center justify-between pt-2">
<p className="text-xs text-slate-500">By submitting, you agree to our editorial guidelines and terms.</p>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50" type="button">
                  Save draft
                </button>
<button className="inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-4 py-2.5 rounded-md hover:bg-slate-800" type="submit">
<svg className="h-4 w-4 -ml-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4 20-7Z"></path></svg>
                  Submit for review
                </button>
</div>
</div>
</form>

<div className="space-y-4" id="guidelines">
<div className="bg-white rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="h-[18px] w-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M6 12h12"></path></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Submission guidelines</h3>
</div>
<ul className="mt-3 space-y-2 text-[13.5px] text-slate-700">
<li>Original, UK-focused content (700–1,800 words)</li>
<li>Practical detail: tools, materials, codes, and pricing ranges</li>
<li>High-res images with usage rights</li>
<li>Credit your team and suppliers where relevant</li>
</ul>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="h-[18px] w-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v14H3z"></path><path d="M9 21h6"></path></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Editorial process</h3>
</div>
<ol className="mt-3 space-y-2 text-[13.5px] text-slate-700">
<li>1. Submit draft → 2 business days</li>
<li>2. Editor review &amp; fact-check</li>
<li>3. Revisions (optional)</li>
<li>4. Publication &amp; distribution</li>
</ol>
</div>
</div>
</div>
</div>
</section>

<section className="pt-12 pb-12" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About the Journal</h2>
<p className="mt-3 text-[15px] text-slate-600">We’re a UK-focused business publication for roofing professionals. Our mission is to elevate the trade by sharing practical knowledge, celebrating craftsmanship, and helping clients make informed decisions.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-3xl font-semibold tracking-tight">300+</p>
<p className="text-sm text-slate-600">Articles</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-3xl font-semibold tracking-tight">120+</p>
<p className="text-sm text-slate-600">Contributors</p>
</div>
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-3xl font-semibold tracking-tight" style={{}}>1.2k</p>
<p className="text-sm text-slate-600">Subscribers</p>
</div>
</div>
</div>
<div className="space-y-4">
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="h-[18px] w-[18px] text-slate-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8 21h8"></path><path d="M12 17V4"></path><path d="m7 8 5-5 5 5"></path></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Advertise</h3>
</div>
<p className="mt-2 text-[13.5px] text-slate-600">Partner with us to reach UK roofing professionals and property decision-makers.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#">Learn more <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
<div className="rounded-xl border border-slate-200 p-5">
<div className="flex items-center gap-2">
<svg className="w-[18px] h-[18px]" data-icon-replaced="true" data-lucide="square-user-round" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(51, 65, 85)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a6 6 0 0 0-12 0"></path><circle cx="12" cy="11" r="4"></circle><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
<h3 className="text-[17px] font-semibold tracking-tight">Press</h3>
</div>
<p className="mt-2 text-[13.5px] text-slate-600">Contact our editorial team for quotes, interviews, and syndication.</p>
<a className="mt-3 inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900" href="#">Contact <svg className="h-4 w-4 -mr-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
<div>
<a aria-label="UK Roofers Journal" className="flex items-center space-x-2" href="#">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight">UR</div>
<div className="text-slate-900 text-[15px] font-medium tracking-tight">UK Roofers Journal</div>
</a>
<p className="mt-3 text-[13.5px] text-slate-600">A UK roofing business blog. Publish with us.</p>
</div>
<div>
</div></div></div></footer>
    </>
  );
}
