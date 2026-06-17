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



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>

</div>

<main className="min-h-screen">

<section className="relative">
<div className="md:pt-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-10 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 items-center">

<div className="">

<div className="flex items-center gap-3">
<div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
<div className="flex -space-x-2 pr-2">
<img alt="Athlete avatar" className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Athlete avatar" className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="Athlete avatar" className="h-6 w-6 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-700">

<svg aria-hidden="true" className="h-4 w-4 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
<span className="font-medium font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                      4.9
                    </span>
<span className="text-slate-500 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                      / 5 · 180+ reviews
                    </span>
</div>
</div>
<span className="hidden md:inline text-sm text-slate-500 font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Trusted by 150+ athletes
                </span>
</div>


<h1 className="md:text-6xl text-4xl font-semibold text-[#002d40] tracking-tight font-manrope mt-6" style={{transition: 'outline 0.1s ease-in-out'}}>
        Swim &amp; Triathlon Coaching for Every Level
      </h1>

<p className="md:mt-5 md:text-xl leading-relaxed text-lg text-slate-700 font-nunito mt-4" style={{transition: 'outline 0.1s ease-in-out'}}>
        Master your technique, build race-day confidence, and unlock
        your best performance with personalized 1:1 coaching, video
        analysis, and tailored training blocks.
      </p>

<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a aria-label="Book a coaching session" className="inline-flex items-center justify-center hover:bg-[#002133] hover:-translate-y-0.5 active:translate-y-0 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002d40] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fa] text-sm font-medium text-white bg-[#019ac0] rounded-md pt-3 pr-5 pb-3 pl-5 shadow-sm font-nunito" href="#book" style={{transition: 'outline 0.1s ease-in-out'}}>

<svg aria-hidden="true" className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
          Book a session
        </a>
<a aria-label="Check services" className="inline-flex items-center justify-center rounded-md border border-[#002d40]/20 bg-white text-[#002d40] px-5 py-3 text-sm font-medium shadow-sm hover:bg-[#019ac0]/10 hover:border-[#019ac0]/30 hover:-translate-y-0.5 active:translate-y-0 transition transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#019ac0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f7fa] font-nunito" href="#services" style={{transition: 'outline 0.1s ease-in-out'}}>
          Check services
          
<svg aria-hidden="true" className="ml-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</a>
</div>

<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Video stroke analysis
                </span>
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Open-water prep
                </span>
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Periodized plans
                </span>
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Beginner to Iron-distance
                </span>
</div>
</div>

<div className="">
<div className="relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm">

<img alt="Lane lines and pool deck for swim technique review" className="sm:h-[460px] w-full h-[380px] object-cover" src="https://images.unsplash.com/photo-1625568223843-b2d083820411?w=1600&amp;q=80"/>
<div className="cursor-pointer absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='https://www.youtube.com/watch?v=7z67WjLY5ro&amp;list=RDMM7z67WjLY5ro&amp;start_radio=1'" role="button"></div>

<button aria-label="Play intro video" className="-translate-x-1/2 -translate-y-1/2 inline-flex sm:h-18 sm:w-18 hover:bg-white hover:shadow-md transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#019ac0] text-[#002d40] bg-white/95 w-16 h-16 border-slate-200 border rounded-full absolute top-1/2 left-1/2 shadow backdrop-blur items-center justify-center">

<svg aria-hidden="true" className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="1.5" style={{color: 'rgb(0, 45, 64)', width: '24px', height: '24px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>

<div className="absolute right-4 top-4 sm:right-6 sm:top-6"></div>
</div>

<div className="mt-3 flex items-center justify-between text-xs text-slate-600">
<span className="font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Technique analysis • Pool &amp; Open water
                </span>
<span className="font-nunito" style={{transition: 'outline 0.1s ease-in-out'}}>
                  HD video • 1:1 breakdown
                </span>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-6">
<div className="relative my-10 md:my-14"></div>
</div>

<section className="relative">
<div className="max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-12 pl-6" id="about">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-8 items-start">
<div className="lg:col-span-2">
<h2 className="text-3xl md:text-4xl font-semibold text-[#002d40] tracking-tight font-manrope">
                About the coach
              </h2>
<p className="mt-4 text-slate-700 leading-relaxed md:text-lg font-nunito">
                Hi, I’m Jordan Ellis—a USAT-certified triathlon and swim coach.
                I help athletes at every level refine technique, build durable
                speed, and race with confidence through individualized plans,
                clear cues, and focused video analysis.
              </p>
<div className="mt-5 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito">
                  USAT certified
                </span>
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito">
                  Former D1 swimmer
                </span>
<span className="inline-flex items-center rounded-full border border-[#002d40]/15 bg-white px-3 py-1 text-xs text-[#002d40] font-nunito">
                  12+ years coaching
                </span>
</div>
</div>
<div>
<div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<img alt="Coach portrait" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<p className="text-sm text-slate-600 font-nunito">Coach</p>
<p className="font-semibold text-slate-900 font-nunito">
                    Jordan Ellis
                  </p>
<p className="mt-2 text-sm text-slate-600 font-nunito">
                    Technique-first coaching for swimmers and triathletes.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
