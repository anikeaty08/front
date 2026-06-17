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
      

<header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-500 to-rose-500"></div>
<span className="text-slate-900 text-[15px] font-semibold tracking-tight">QUEVO</span>
<div className="h-4 w-px bg-slate-200 mx-2"></div>
<nav className="hidden md:flex items-center gap-2 text-sm text-slate-500">
<span>Unit Planner</span>
<svg aria-hidden="true" className="h-4 w-4 text-slate-400" fill="currentColor" viewbox="0 0 20 20"><path d="M7.05 4.55a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 1 1-1.4-1.4L9.88 10 7.05 7.15a1 1 0 0 1 0-1.4Z"></path></svg>
<span>Sharing the Planet</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-1.5 text-sm text-slate-700 shadow-sm hover:bg-slate-50">
<i className="h-4 w-4 text-orange-500" data-lucide="sparkles"></i>
            AI Assist
          </button>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-1.5 text-sm text-white hover:bg-slate-800">
<i className="h-4 w-4" data-lucide="share-2"></i>
            Share
          </button>
</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] gap-6">

<aside>
<div className="rounded-lg border border-slate-200 bg-white p-5">
<p className="text-[13px] uppercase tracking-wide text-slate-500">Progress</p>
<h2 className="mt-1 text-[22px] tracking-tight font-semibold text-slate-900">Step 2 of 8</h2>
<p className="text-sm text-slate-500 -mt-0.5">Central Idea Development</p>

<div className="mt-5 space-y-2">
<button className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-3 text-left hover:bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-emerald-500" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm font-medium text-slate-800">Theme &amp; Concepts</p>
<p className="text-[12px] text-emerald-600">Completed</p>
</div>
</div>
</button>
<button className="w-full rounded-md border-2 border-orange-300/70 bg-orange-50 px-3.5 py-3 text-left hover:bg-orange-100/60 transition flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-orange-600" data-lucide="zap"></i>
<div>
<p className="text-sm font-medium text-orange-800">Central Idea</p>
<p className="text-[12px] text-orange-600">In progress</p>
</div>
</div>
</button>
<button className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-3 text-left hover:bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Lines of Inquiry</p>
<p className="text-[12px] text-slate-500">Not started</p>
</div>
</div>
</button>
<button className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-3 text-left hover:bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Key Concepts</p>
<p className="text-[12px] text-slate-500">Not started</p>
</div>
</div>
</button>
<button className="w-full rounded-md border border-slate-200 bg-white px-3.5 py-3 text-left hover:bg-slate-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="h-4 w-4 text-slate-400" data-lucide="circle"></i>
<div>
<p className="text-sm font-medium text-slate-800">Learning Experiences</p>
<p className="text-[12px] text-slate-500">Not started</p>
</div>
</div>
</button>
</div>
</div>
</aside>

<section>

<div className="flex items-center gap-2 text-sm text-slate-500">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-orange-500"></span>
<span>Step 2 of 8</span>
</div>
<h1 className="mt-2 text-3xl tracking-tight font-semibold text-slate-900">Central Idea</h1>
<p className="mt-1 text-slate-500 text-[15px]">Validate your conceptually‑rich statement with Quevo</p>

<div className="mt-5 rounded-lg border border-orange-200 bg-orange-50 p-4">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="h-5 w-5 text-orange-600" data-lucide="info"></i>
</div>
<div className="flex-1">
<p className="text-[15px] font-medium text-orange-800">IB PYP Guidelines</p>
<p className="mt-1 text-[14px] leading-6 text-orange-800/90">
                  A strong central idea incorporates both selected concepts and provides a clear focus for inquiry. It should be globally significant and relevant to students' lives.
                </p>
</div>
<a className="text-[13px] text-orange-700 hover:text-orange-800 underline decoration-orange-300 underline-offset-2" href="#">View full guidelines</a>
</div>
</div>

<div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
<p className="text-[15px] font-medium text-slate-800">Your Central Idea</p>
<div className="mt-3 rounded-lg border border-slate-300 focus-within:border-slate-400 bg-white">
<textarea className="w-full resize-y min-h-[120px] rounded-lg px-4 py-3 text-[15px] text-slate-800 placeholder:text-slate-400 outline-none" placeholder="Write your central idea here..."></textarea>
</div>
<div className="mt-4 flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-orange-700">
<i className="h-4 w-4" data-lucide="wand-2"></i>
                Validate with Quevo
              </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50">
<i className="h-4 w-4" data-lucide="refresh-cw"></i>
                Refine
              </button>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<p className="text-[15px] font-medium text-slate-800">AI Suggestions</p>
<button className="inline-flex items-center gap-1.5 text-[13px] text-slate-600 hover:text-slate-800">
<i className="h-4 w-4 text-orange-500" data-lucide="sparkles"></i>
                Generate more
              </button>
</div>
<div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-rose-100 text-rose-700">
<i className="h-3.5 w-3.5" data-lucide="quote"></i>
</span>
<p className="text-[14px] leading-6 text-slate-800">
                    Human actions have consequences that affect the balance of ecosystems, and understanding our responsibilities can promote sustainable choices.
                  </p>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-700">
<i className="h-3.5 w-3.5" data-lucide="quote"></i>
</span>
<p className="text-[14px] leading-6 text-slate-800">
                    Collaboration within communities leads to equitable access to shared resources and strengthens stewardship of the planet.
                  </p>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-indigo-100 text-indigo-700">
<i className="h-3.5 w-3.5" data-lucide="quote"></i>
</span>
<p className="text-[14px] leading-6 text-slate-800">
                    Innovation and ethical decision‑making guide how societies manage limited resources for present and future wellbeing.
                  </p>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4 hover:shadow-sm transition">
<div className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-amber-100 text-amber-700">
<i className="h-3.5 w-3.5" data-lucide="quote"></i>
</span>
<p className="text-[14px] leading-6 text-slate-800">
                    Understanding interdependence helps learners take informed action to protect biodiversity and human rights.
                  </p>
</div>
</div>
</div>
</div>
</section>
</div>
</main>



    </>
  );
}
