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
      
<div className="min-h-screen flex flex-col">

<header className="bg-white/70 w-full border-neutral-200/70 border-b backdrop-blur">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 px-4 sm:px-6 lg:px-0">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-2xl bg-black flex items-center justify-center">

<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12L9 4H15L21 12L15 20H9L3 12Z"></path>
<path d="M9 4L15 20"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight" style={{}}>MAKENODE</span>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<button className="inline-flex items-center gap-1 text-neutral-900">
<span>Home</span>
<span className="h-1 w-1 rounded-full bg-neutral-900"></span>
</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">How it works</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">Technologies</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors">Resources</button>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border border-neutral-900 text-xs sm:text-sm font-medium px-4 py-2 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors">
            Get instant quote
          </button>
<button className="inline-flex md:hidden items-center justify-center rounded-full border border-neutral-200 h-9 w-9">

<svg className="h-4 w-4 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6H20"></path>
<path d="M4 12H20"></path>
<path d="M4 18H20"></path>
</svg>
</button>
</div>
</div>
</header>

<main className="flex-1">
<section className="w-full border-b border-neutral-200/70">
<div className="sm:px-6 lg:px-0 sm:py-14 lg:py-16 grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4 gap-x-10 gap-y-10 items-center">

<div className="relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900">
<img alt="Engineers collaborating around 3D printed parts" className="h-full w-full object-cover opacity-90" src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>
</div>

<div className="pointer-events-none">

<div className="absolute -top-3 left-6 sm:left-10 bg-white/95 border border-neutral-200 rounded-full shadow-sm px-3 py-1 flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-neutral-700">Live 3D workspace</span>
</div>

<div className="absolute top-6 -right-1 sm:-right-6 w-52 sm:w-60 bg-white/95 border border-neutral-200 rounded-2xl shadow-md p-3 sm:p-4 flex flex-col gap-2">
<div className="flex items-center justify-between">
<p className="text-xs font-semibold tracking-tight text-neutral-900">Version control</p>
<span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-neutral-900 text-white">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="2"></circle>
<circle cx="18" cy="6" r="2"></circle>
<circle cx="6" cy="18" r="2"></circle>
<path d="M8 6H16"></path>
<path d="M6 8V16"></path>
</svg>
</span>
</div>
<p className="text-xs text-neutral-500">Track design iterations and switch between manufacturable variants instantly.</p>
</div>

<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 border-neutral-200 rounded-full shadow-md px-3 sm:px-4 py-1.5 flex items-center gap-2 sm:gap-3">

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-900 text-white">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5Z"></path>
</svg>
</div>

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-50 text-neutral-700 border border-neutral-200">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<ellipse cx="12" cy="12" rx="9" ry="4"></ellipse>
<ellipse cx="12" cy="12" rx="4" ry="9"></ellipse>
</svg>
</div>

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-50 text-neutral-700 border border-neutral-200">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17L17 3L21 7L7 21L3 17Z"></path>
<path d="M6 18L7 19"></path>
<path d="M9 15L10 16"></path>
<path d="M12 12L13 13"></path>
<path d="M15 9L16 10"></path>
</svg>
</div>
<span className="hidden sm:inline text-xs text-neutral-500">Annotation mode active</span>
</div>
</div>
</div>

<div className="space-y-6">
<p className="inline-flex items-center gap-2 text-xs md:text-sm font-medium rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-neutral-600">
              Industrial collaboration for 3D parts
            </p>
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-neutral-900">
              A shared workspace<br/>
              for manufacturing‑ready<br/>
              3D models.
            </h1>
<p className="text-base sm:text-lg text-neutral-500 max-w-xl">
              Makenode’s collaborative canvas lets product teams review 3D files, manage versions, and leave contextual feedback directly on the model—before committing to production with Partify.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium px-6 py-3 shadow-sm hover:bg-neutral-800 transition-colors">
                Try the workspace MVP
              </button>
<button className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800">
<span>View collaboration demo</span>

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="border-t border-neutral-200/70 bg-white">
<div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200 text-xs sm:text-sm">
<div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-4">
<div className="">
<p className="font-semibold tracking-tight text-neutral-900">A World Of Materials</p>
<p className="text-neutral-500 mt-1">Plastics, metals, elastomers, and composites for prototypes and end‑use parts.</p>
</div>
<svg className="h-4 w-4 text-neutral-900 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</div>
<div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-4">
<div>
<p className="font-semibold tracking-tight text-neutral-900">Production‑Grade Quality</p>
<p className="text-neutral-500 mt-1">Tight tolerances, full inspection reports, and traceable batches.</p>
</div>
<svg className="h-4 w-4 text-neutral-900 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</div>
<div className="flex items-center justify-between gap-2 px-4 sm:px-6 py-4">
<div>
<p className="font-semibold tracking-tight text-neutral-900">Faster Lead Times</p>
<p className="text-neutral-500 mt-1">Parts shipped in as fast as 3–5 business days worldwide.</p>
</div>
<svg className="h-4 w-4 text-neutral-900 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</div>
<div className="hidden lg:flex items-center justify-between gap-2 px-4 sm:px-6 py-4">
<div>
<p className="font-semibold tracking-tight text-neutral-900">Dedicated Engineers</p>
<p className="text-neutral-500 mt-1">DFM feedback from quote to production ramp‑up.</p>
</div>
<svg className="h-4 w-4 text-neutral-900 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="w-full bg-neutral-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

<div className="max-w-xl space-y-4">
<p className="inline-flex items-center gap-2 text-xs md:text-sm font-medium rounded-full border border-neutral-200 bg-white px-3 py-1 text-neutral-600">
                MVP preview
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                Makenode Collaborating Workspace
              </h2>
<p className="text-base sm:text-lg text-neutral-500">
                A browser‑based 3D workspace where engineers, designers, and manufacturing partners can review models together, manage file versions, and leave anchored comments directly on the geometry.
              </p>
<div className="grid sm:grid-cols-2 gap-4 pt-2">
<div className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col gap-2">
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8L12 3L3 8V16L12 21L21 16Z"></path>
<path d="M3.3 7.8L12 12L20.7 7.8"></path>
<path d="M12 21V12"></path>
</svg>
</span>
<span>Full‑screen 3D canvas</span>
</div>
<p className="text-sm text-neutral-500">
                    A neutral, high‑contrast viewer built for rotating, panning, and zooming around detailed assemblies.
                  </p>
</div>
<div className="rounded-2xl bg-white border border-neutral-200 p-4 flex flex-col gap-2">
<div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 text-white">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H15"></path>
<path d="M9 11H13"></path>
<path d="M5 5V4C5 3.4 5.4 3 6 3H8"></path>
<path d="M16 3H18C18.6 3 19 3.4 19 4V6"></path>
<path d="M19 10V15.5L16 18H8C7.4 18 7 17.6 7 17V16"></path>
</svg>
</span>
<span>Contextual annotations</span>
</div>
<p className="text-sm text-neutral-500">
                    Drop comment markers on the model, discuss changes, and keep feedback visible for every stakeholder.
                  </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 pt-4">
<button className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 hover:bg-neutral-800 transition-colors">
                  Explore MVP spec
                </button>
<button className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
<span>See annotation flow</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</button>
</div>
</div>

<div className="relative flex-1 min-w-[18rem]">
<div className="aspect-[4/3] rounded-3xl bg-neutral-900 overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-800">

<div className="absolute inset-8 sm:inset-10 rounded-[2rem] border border-neutral-700/60 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 flex items-center justify-center">
<div className="relative w-3/4 h-3/4">
<div className="absolute inset-4 rounded-2xl border border-emerald-400/40"></div>
<div className="absolute left-6 top-8 h-16 w-24 rounded-xl bg-emerald-400/70 blur-sm"></div>
<div className="absolute right-8 bottom-10 h-20 w-28 rounded-xl bg-emerald-300/70 blur-sm"></div>
<div className="absolute inset-6 border border-dashed border-neutral-700/60 rounded-2xl"></div>
</div>

<div className="absolute left-1/3 top-1/3 flex items-start gap-2">
<div className="h-3 w-3 rounded-full border-2 border-white bg-neutral-900"></div>
<div className="bg-white rounded-2xl shadow-lg p-3 w-40">
<p className="text-xs font-semibold tracking-tight text-neutral-900 mb-1">Add Comment</p>
<div className="h-10 rounded-lg border border-neutral-200 bg-neutral-50 mb-2"></div>
<div className="flex justify-end gap-2">
<span className="text-[0.7rem] font-medium text-neutral-700">Cancel</span>
<span className="inline-flex items-center rounded-full bg-neutral-900 text-white text-[0.7rem] font-medium px-2 py-1">
                            Save
                          </span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-3 left-3 right-3 rounded-2xl bg-neutral-950/80 border border-neutral-800/80 backdrop-blur flex items-center justify-between px-4 py-2">
<div className="flex items-center gap-3">
<span className="h-6 w-6 rounded-xl bg-white flex items-center justify-center text-[0.6rem] font-semibold tracking-tight text-neutral-900">
                      MN
                    </span>
<div className="flex flex-col">
<span className="text-xs font-medium text-neutral-100 tracking-tight">Makenode Workspace</span>
<span className="text-[0.7rem] text-neutral-500">model_v3_final.stl</span>
</div>
</div>
<div className="flex items-center gap-3">

<div className="flex -space-x-2">
<span className="h-6 w-6 rounded-full bg-emerald-400 border border-neutral-900"></span>
<span className="h-6 w-6 rounded-full bg-indigo-400 border border-neutral-900"></span>
<span className="h-6 w-6 rounded-full bg-amber-400 border border-neutral-900"></span>
</div>

<div className="hidden sm:inline-flex items-center gap-1 rounded-full bg-neutral-900 border border-neutral-700 px-2 py-1">
<span className="text-[0.7rem] text-neutral-200">Owner</span>
<svg className="h-3 w-3 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9"></path>
</svg>
</div>

<div className="inline-flex items-center gap-1 rounded-full bg-white text-neutral-900 text-[0.7rem] font-medium px-2.5 py-1">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<path d="M8.6 13.5L15.4 17.5"></path>
<path d="M15.4 6.5L8.6 10.5"></path>
</svg>
<span>Share</span>
</div>
</div>
</div>

<div className="absolute top-16 left-3 bottom-14 w-40 sm:w-48 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur p-3 flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] font-medium text-neutral-200 tracking-tight">Project Files</span>
<svg className="h-3 w-3 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="9"></circle>
<path d="M12 8V12"></path>
<path d="M12 16H12.01"></path>
</svg>
</div>
<p className="text-[0.7rem] text-neutral-500 line-clamp-2">Kitchen Cabinet Design</p>
<div className="space-y-1.5 flex-1">

<div className="rounded-xl border border-emerald-500/60 bg-emerald-500/10 px-2 py-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.7rem] text-neutral-100">model_v3_final.stl</span>
<svg className="h-3 w-3 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V8H4V4Z"></path>
<path d="M4 11H20V20H4V11Z"></path>
<path d="M10 14H14"></path>
</svg>
</div>
<p className="text-[0.65rem] text-neutral-400 mt-0.5">12.4 MB • Updated today</p>
</div>

<div className="rounded-xl bg-neutral-900/80 px-2 py-1.5 flex items-center justify-between">
<div>
<p className="text-[0.7rem] text-neutral-200">model_v2.stl</p>
<p className="text-[0.65rem] text-neutral-500">10.8 MB</p>
</div>
<svg className="h-3 w-3 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V8H4V4Z"></path>
<path d="M4 11H20V20H4V11Z"></path>
<path d="M10 14H14"></path>
</svg>
</div>
<div className="rounded-xl bg-neutral-900/80 px-2 py-1.5 flex items-center justify-between">
<div>
<p className="text-[0.7rem] text-neutral-200">model_explore.stl</p>
<p className="text-[0.65rem] text-neutral-500">9.1 MB</p>
</div>
<svg className="h-3 w-3 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V8H4V4Z"></path>
<path d="M4 11H20V20H4V11Z"></path>
<path d="M10 14H14"></path>
</svg>
</div>
</div>
<div className="mt-auto">
<div className="inline-flex items-center justify-center w-full rounded-full bg-neutral-100 text-neutral-900 text-[0.7rem] font-medium py-1.5">

<svg className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19"></path>
<path d="M5 12H19"></path>
</svg>
                      Upload new version
                    </div>
</div>
</div>

<div className="absolute top-16 right-3 bottom-14 w-40 sm:w-52 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur p-3 flex flex-col gap-3">
<div>
<p className="text-[0.7rem] font-medium text-neutral-200 tracking-tight">Annotations</p>
<p className="text-[0.65rem] text-neutral-500">5 comments on current version</p>
</div>
<div className="space-y-2 flex-1 overflow-hidden">
<div className="flex gap-2">
<span className="h-5 w-5 rounded-full bg-emerald-400"></span>
<div className="flex-1">
<p className="text-[0.7rem] text-neutral-100">Dana • 2h ago</p>
<p className="text-[0.65rem] text-neutral-400 line-clamp-2">Can we thicken this mounting boss by 1.5 mm to handle torque?</p>
</div>
</div>
<div className="flex gap-2">
<span className="h-5 w-5 rounded-full bg-indigo-400"></span>
<div className="flex-1">
<p className="text-[0.7rem] text-neutral-100">Alex • 4h ago</p>
<p className="text-[0.65rem] text-neutral-400 line-clamp-2">Tighten the chamfer tolerance, this will be metal printed.</p>
</div>
</div>
<div className="flex gap-2">
<span className="h-5 w-5 rounded-full bg-amber-400"></span>
<div className="flex-1">
<p className="text-[0.7rem] text-neutral-100">Priya • 1d ago</p>
<p className="text-[0.65rem] text-neutral-400 line-clamp-2">Label this face as cosmetic; we can relax the finish elsewhere.</p>
</div>
</div>
</div>
<div className="pt-1 border-t border-neutral-800/80">
<p className="text-[0.65rem] text-neutral-500">Comments are stored in‑browser for this build of the MVP.</p>
</div>
</div>

<div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-neutral-950/90 border border-neutral-800/90 backdrop-blur px-3 py-1.5 flex items-center gap-2">

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-emerald-500 text-white">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5A8.48 8.48 0 0 1 21 11v.5Z"></path>
</svg>
</div>

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-900 text-neutral-200 border border-neutral-700">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<ellipse cx="12" cy="12" rx="9" ry="4"></ellipse>
<ellipse cx="12" cy="12" rx="4" ry="9"></ellipse>
</svg>
</div>

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-900 text-neutral-200 border border-neutral-700">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17L17 3L21 7L7 21L3 17Z"></path>
<path d="M6 18L7 19"></path>
<path d="M9 15L10 16"></path>
<path d="M12 12L13 13"></path>
<path d="M15 9L16 10"></path>
</svg>
</div>

<div className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-neutral-900 text-neutral-200 border border-neutral-700">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 2V8H9"></path>
<path d="M3.51 15A9 9 0 1 0 5.64 5.64"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-neutral-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
                Explore
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-amber-400"></span>
                Our On‑Demand Manufacturing Services
              </h2>
<p className="mt-2 text-base text-neutral-500">From prototype to low‑volume production, all in one platform.</p>
</div>
<button className="inline-flex items-center gap-2 self-start md:self-auto rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs sm:text-sm font-medium text-neutral-800 shadow-sm hover:bg-neutral-50">
<span>Explore manufacturing capabilities</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
<path d="M12 5L19 12L12 19"></path>
</svg>
</button>
</div>

<div className="flex flex-col gap-4">
<span className="text-xs font-medium text-neutral-500">Processes</span>
<div className="grid md:grid-cols-3 gap-4">

<article className="relative rounded-3xl bg-neutral-900 text-white p-6 sm:p-8 flex flex-col justify-between shadow-lg">
<div className="space-y-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 border border-white/20">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="18" x="3" y="4"></rect>
<path d="M8 20H16"></path>
<path d="M12 16V20"></path>
</svg>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Industrial 3D Printing</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-200 max-w-xs">
                      High‑precision additive manufacturing for functional prototypes and end‑use parts.
                    </p>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    SLS &amp; MJF Nylon
                  </span>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    SLA / DLP Resins
                  </span>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    FDM Prototyping
                  </span>
<span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
                    Metal 3D Printing
                  </span>
</div>
</article>

<article className="rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-indigo-50 border border-neutral-200/70 p-6 sm:p-8 flex flex-col justify-between">
<div className="space-y-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="2" width="10" x="7" y="2"></rect>
<path d="M11 18H13"></path>
</svg>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">CNC Machining</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-xs">
                      Milled and turned metal or plastic components with tight tolerances and consistent finish.
                    </p>
</div>
</div>
</article>

<article className="rounded-3xl bg-gradient-to-br from-cyan-50 via-white to-neutral-50 border border-neutral-200/70 p-6 sm:p-8 flex flex-col justify-between">
<div className="space-y-6">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-cyan-100 text-cyan-600">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M3 9H21"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900">Sheet Metal &amp; Production</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-500 max-w-xs">
                      Laser‑cut, bent, and assembled parts plus bridge production to injection molding.
                    </p>
</div>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="w-full bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 flex items-center justify-center gap-2">
              How Partify
              <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-500 text-white">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
</svg>
</span>
              Works
            </h2>
<p className="mt-2 text-base text-neutral-500 max-w-xl mx-auto">
              Go from CAD upload to shipped, production‑ready parts in four simple steps.
            </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

<div className="rounded-3xl overflow-hidden bg-neutral-100 relative">
<img alt="Engineers reviewing manufactured parts" className="h-full w-full object-cover" src="https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200"/>

<div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6">
<div className="flex items-center justify-between gap-4 rounded-2xl bg-white/90 backdrop-blur px-4 py-3 shadow-lg">
<div className="flex items-center gap-3">
<img alt="Rebecca" className="h-10 w-10 rounded-full object-cover" src="https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"/>
<div>
<p className="text-sm font-semibold tracking-tight text-neutral-900">Rebecca</p>
<p className="text-xs text-neutral-500">Manufacturing Engineer</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-6 text-xs text-neutral-600">
<div>
<p className="font-medium text-neutral-900">Location</p>
<p>Yogyakarta</p>
</div>
<div>
<p className="font-medium text-neutral-900">Lead time</p>
<p>5 days avg</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 text-white text-xs font-medium px-3 py-1.5">
<span>View project</span>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="space-y-4 sm:space-y-6">
<div className="rounded-3xl border border-neutral-200 bg-neutral-900 text-white p-6 sm:p-7">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2 flex items-center justify-between">
                  Upload CAD &amp; configure parts
                  <button className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 border border-white/30">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19"></path>
</svg>
</button>
</h3>
<p className="text-sm sm:text-base text-neutral-200">
                  Upload your 3D models, choose 3D printing, CNC, or sheet metal, then set materials, finishes, quantities, and required certifications in a few clicks.
                </p>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 flex items-center justify-between">
<div>
<p className="text-base font-semibold tracking-tight text-neutral-900">Get instant pricing &amp; DFM</p>
<p className="mt-1 text-sm text-neutral-500 max-w-md">
                    Our engine analyzes geometry for manufacturability and provides transparent pricing, lead times, and suggestions before you place your order.
                  </p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
<svg className="h-3.5 w-3.5 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19"></path>
<path d="M5 12H19"></path>
</svg>
</button>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 flex items-center justify-between">
<div>
<p className="text-base font-semibold tracking-tight text-neutral-900">Production &amp; quality control</p>
<p className="mt-1 text-sm text-neutral-500 max-w-md">
                    Your order is routed to our vetted manufacturing partners. Every batch is inspected and tracked, with optional CMM reports and certificates.
                  </p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
<svg className="h-3.5 w-3.5 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19"></path>
<path d="M5 12H19"></path>
</svg>
</button>
</div>
<div className="rounded-3xl border border-neutral-200 bg-white p-5 sm:p-6 flex items-center justify-between">
<div>
<p className="text-base font-semibold tracking-tight text-neutral-900">Delivery &amp; reorder at scale</p>
<p className="mt-1 text-sm text-neutral-500 max-w-md">
                    Parts arrive on time, ready to use. Lock in pricing, manage revisions, and reorder instantly for future production runs.
                  </p>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50">
<svg className="h-3.5 w-3.5 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19"></path>
<path d="M5 12H19"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-neutral-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="flex lg:justify-center">
<div className="inline-flex items-center gap-4 rounded-full bg-white shadow-lg px-4 py-3">
<img alt="Engineer portrait" className="h-12 w-12 rounded-full object-cover" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=400"/>
<div>
<p className="text-sm font-semibold tracking-tight text-neutral-900">Alex Chen</p>
<p className="text-xs text-neutral-500">Head of Manufacturing</p>
</div>
</div>
</div>

<div>
<p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 leading-snug">
                We believe modern teams shouldn’t wait weeks for parts. Partify connects engineers to a global network of trusted factories,
                <span className="text-neutral-500">making industrial 3D printing and on‑demand manufacturing as simple as ordering online.</span>
</p>
</div>
</div>

<div className="mt-10 grid sm:grid-cols-2 gap-4">
<div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-7 flex flex-col gap-3">
<p className="text-xs font-medium text-emerald-600">On‑Time Delivery</p>
<p className="text-3xl font-semibold tracking-tight text-neutral-900">96%</p>
<p className="text-sm text-neutral-500">Orders arrive on or before the promised ship date.</p>
</div>
<div className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-7 flex flex-col gap-3">
<p className="text-xs font-medium text-indigo-600">Parts Produced</p>
<p className="text-3xl font-semibold tracking-tight text-neutral-900">1.2M+</p>
<p className="text-sm text-neutral-500">Functional prototypes and production parts delivered globally.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
<div className="">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 flex items-center gap-2">
                Top‑Rated Manufacturing Partners
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-indigo-500"></span>
                for Your Next Build
              </h2>
<p className="mt-2 text-base text-neutral-500">
                Vetted facilities with industrial 3D printers, CNC machines, and robust quality systems.
              </p>
</div>
<div className="flex gap-2 self-start md:self-auto">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-200 bg-neutral-50">
<svg className="h-4 w-4 text-neutral-900" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 18L9 12L15 6"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-900 bg-neutral-900 text-white">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 18L15 12L9 6"></path>
</svg>
</button>
</div>
</div>

<div className="grid md:grid-cols-4 gap-4 overflow-hidden">

<article className="rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col">
<div className="relative">
<img alt="Rebecca facility" className="h-52 w-full object-cover" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-7 w-7 rounded-full bg-white shadow">
<svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7"></path>
</svg>
</button>
</div>
<div className="p-4 sm:p-5 space-y-1">
<p className="text-xs font-medium text-indigo-600">3D Printing • Preferred Partner</p>
<p className="text-base font-semibold tracking-tight text-neutral-900">NylonLab Yogyakarta</p>
<p className="text-xs text-neutral-500">SLS &amp; MJF • 3–5 day lead time</p>
</div>
</article>

<article className="relative rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col">
<img alt="Sarah facility" className="h-52 w-full object-cover" src="https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-7 w-7 rounded-full bg-white shadow">
<svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7"></path>
</svg>
</button>
<div className="p-4 sm:p-5 space-y-1">
<p className="text-xs font-medium text-indigo-600">Metal 3D Printing • Partner</p>
</div>

<div className="absolute left-4 right-4 bottom-4">
<div className="rounded-2xl bg-neutral-900 text-white p-4 shadow-xl">
<div className="flex items-center gap-1 text-amber-400 text-xs mb-1">
<span>★★★★★</span>
</div>
<p className="text-xs sm:text-sm">
                    “Partify’s metal AM partner helped us move from machined fixtures to lightweight printed jigs in under two weeks. The quality and communication were excellent.”
                  </p>
<p className="mt-2 text-xs text-neutral-300">John D. • Founder, Bright Robotics</p>
</div>
</div>
</article>

<article className="rounded-3xl bg-neutral-50 border border-neutral-200 overflow-hidden flex flex-col">
<div className="relative">
<img alt="Marcopolo facility" className="h-52 w-full object-cover" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"/>
<button className="absolute top-3 right-3 inline-flex items-center justify-center h-7 w-7 rounded-full bg-white shadow">
<svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13L9 17L19 7"></path>
</svg>
</button>
</div>
<div className="p-4 sm:p-5 space-y-1">
<p className="text-xs font-medium text-indigo-600">CNC &amp; Sheet Metal • Preferred Partner</p>
<p className="text-base font-semibold tracking-tight text-neutral-900">Marcopolo Precision</p>
<p className="text-xs text-neutral-500">ISO‑certified • Global shipping</p>
</div>
</article>

<article className="rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-indigo-50 border border-dashed border-neutral-300 flex flex-col items-center justify-center text-center p-6">
<div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-neutral-900 text-white mb-3">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 7A4 4 0 1 1 7 7A4 4 0 0 1 15 7Z"></path>
<path d="M3 21C3.8 17.6 6.4 15 9.8 15H10.2C13.6 15 16.2 17.6 17 21"></path>
<path d="M19 8V14"></path>
<path d="M22 11H16"></path>
</svg>
</div>
<p className="text-base font-semibold tracking-tight text-neutral-900">Become a Manufacturing Partner</p>
<p className="mt-1 text-sm text-neutral-500">Join our global network and receive qualified 3D printing and machining jobs.</p>
</article>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-neutral-200 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="sm:text-sm text-xs text-neutral-500" style={{}}>© 2024 MakeNode. On‑demand manufacturing, powered by a global network.</p>
<div className="flex items-center gap-4 text-xs sm:text-sm text-neutral-500">
<button className="hover:text-neutral-900">Terms</button>
<button className="hover:text-neutral-900">Privacy</button>
<button className="hover:text-neutral-900">Support</button>
</div>
</div>
</footer>
</div>

    </>
  );
}
