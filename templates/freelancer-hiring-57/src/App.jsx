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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<header className="sticky top-0 z-40 border-b border-gray-200/70 bg-white/85 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="sr-only">Upwork</span>
<span className="text-2xl font-semibold tracking-tight">
<span className="text-emerald-600">up</span><span className="text-gray-900">work</span>
</span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
<a className="hover:text-gray-900" href="#">Hire freelancers</a>
<a className="hover:text-gray-900" href="#">Find work</a>
<a className="hover:text-gray-900" href="#">Why Upwork</a>
<a className="hover:text-gray-900" href="#">What’s new</a>
<a className="hover:text-gray-900" href="#">Pricing</a>
<a className="hover:text-gray-900" href="#">For enterprise</a>
</nav>
<div className="flex items-center gap-3 sm:gap-4">
<a className="text-sm font-medium text-gray-700 hover:text-gray-900" href="#">Log in</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition-colors" href="#">
              Get started — free
              <i className="h-4 w-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative mt-6 overflow-hidden rounded-3xl border border-gray-200 shadow-sm">

<div className="absolute inset-0">
<img alt="Focused professional at a workstation" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>
</div>

<div className="relative z-10">
<div className="px-6 sm:px-10 lg:px-14">
<div className="py-14 sm:py-20 lg:py-24">
<h1 className="max-w-3xl text-white tracking-tight font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
                Hire proven talent.
                Move faster.
              </h1>
<p className="mt-4 max-w-2xl text-white/80 text-base sm:text-lg">
                Access vetted freelancers across design, engineering, and marketing—on demand, within your budget, and ready to ship.
              </p>

<div className="mt-8 sm:mt-10">
<div className="w-full max-w-2xl rounded-3xl bg-neutral-900/70 backdrop-blur border border-white/10 p-4 sm:p-6">

<div className="mb-4 sm:mb-5 flex items-center rounded-full bg-white/10 p-1 ring-1 ring-white/10">
<button aria-pressed="true" className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/20 shadow-sm">
                      Find talent
                    </button>
<button aria-pressed="false" className="flex-1 rounded-full px-4 py-2 text-sm font-medium text-gray-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                      Browse jobs
                    </button>
</div>

<div className="flex items-stretch gap-3">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-300">
<i className="h-5 w-5" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input aria-label="Search by role, skills, or keywords" className="w-full rounded-full bg-white px-11 pr-40 py-3 text-[15px] leading-tight text-gray-900 placeholder:text-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Try “React developer”, “Figma expert”, “SEO audit”" type="text"/>
<button className="absolute right-2 top-1.5 inline-flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full ring-2 ring-lime-400/90 bg-black">
<i className="h-4 w-4 text-lime-300" data-lucide="search" strokeWidth="1.5"></i>
</span>
                        Search talent
                      </button>
</div>
</div>

<div className="mt-4 flex flex-wrap items-center gap-2">
<span className="text-xs text-gray-300">Trending:</span>
<button className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-100 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                      Web developer
                    </button>
<button className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-100 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                      Figma
                    </button>
<button className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-100 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                      SEO
                    </button>
<button className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-100 hover:bg-white/10 hover:border-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                      AI/ML
                    </button>
</div>

<div className="mt-6 border-t border-white/10 pt-4">
<div className="mb-2 text-[11px] uppercase tracking-wide text-white/50">Trusted by teams at</div>
<div className="grid grid-cols-3 items-center gap-6 text-center">
<div className="text-xs font-medium text-gray-300/90 tracking-[0.08em]">
<span className="inline-flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-sm bg-gray-400/80"></span>
                          Microsoft
                        </span>
</div>
<div className="text-xs font-medium text-gray-300/90 tracking-[0.08em]">airbnb</div>
<div className="text-xs font-medium text-gray-300/90 tracking-[0.08em]">GLASSDOOR</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden lg:block pb-[2px]"></div>
</div>
</div>
</section>




    </>
  );
}
