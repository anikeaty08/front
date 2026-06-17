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
      
<div className="aura-background-component top-0 w-full h-screen -z-10 absolute brightness-75" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="HQ5zBsLgKKnwGQGSqbLy"></div>

</div></div>

<div className="pointer-events-none absolute inset-0 overflow-hidden">
<div className="absolute left-1/2 top-[-140px] -translate-x-1/2 h-[520px] w-[620px] rounded-full blur-3xl opacity-40" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(244, 63, 94, 0.5) 0%, rgba(219, 39, 119, 0.35) 45%, rgba(147, 51, 234, 0.15) 100%)'}}></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 py-5">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="relative flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-purple-600 shadow-[0_0_15px_rgba(244,63,94,0.4)] group-hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] transition-shadow duration-300">
<svg className="translate-y-[1px]" fill="white" height="18" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight text-white font-geist">Bebu</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
<a className="hover:text-rose-400 transition-colors font-normal font-geist" href="#">Stories</a>
<a className="hover:text-rose-400 transition-colors font-normal font-geist" href="#">Safety</a>
<a className="hover:text-rose-400 transition-colors font-normal font-geist" href="#">Support</a>
<a className="hover:text-rose-400 transition-colors font-normal font-geist" href="#">Premium</a>
</nav>
<div className="flex items-center gap-3">
<a className="text-sm text-white/80 hover:text-white transition-colors font-normal font-geist" href="#">Log in</a>
<a className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/90 transition-colors font-geist" href="#">
            Sign up
          </a>
</div>
</div>
</div>
</header>

<main className="relative z-10">
<section className="mx-auto max-w-5xl px-6 pt-12 md:pt-20 text-center">
<div className="inline-flex gap-2 text-xs text-white/80 bg-white/5 border-white/10 border rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">
<svg className="h-3.5 w-3.5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="font-geist">New: Emotional Intelligence Matching</span>
<span className="mx-1 h-1 w-1 rounded-full bg-white/40"></span>
<span className="text-white/60 font-geist">v2.4 Live</span>
</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-bold tracking-tighter font-geist mt-6" style={{maskImage: 'linear-gradient(150deg, transparent, black 30%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(150deg, transparent, black 30%, black 50%, transparent)'}}>
        Love, Without Limits
      </h1>
<p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl mx-auto font-geist">
        Bebu is more than a dating app. It's a sanctuary for deep emotional connection. Find your partner, find your community, and experience relationships built on empathy.
      </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
<div className="btn-wrapper">
<button aria-label="Start for free" className="btn md:px-5 md:py-3 focus:outline-none pt-2 pr-3 pb-2 pl-3" type="button">
<svg className="btn-svg" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">D</span>
<span className="btn-letter">o</span>
<span className="btn-letter">w</span>
<span className="btn-letter">n</span>
<span className="btn-letter">l</span>
<span className="btn-letter">o</span>
<span className="btn-letter">a</span>
<span className="btn-letter">d</span>
</div>
<div className="txt-2">
<span className="btn-letter">S</span>
<span className="btn-letter">t</span>
<span className="btn-letter">a</span>
<span className="btn-letter">r</span>
<span className="btn-letter">t</span>
<span className="btn-letter"> </span>
<span className="btn-letter">N</span>
<span className="btn-letter">o</span>
<span className="btn-letter">w</span>
</div>
</div>
</button>
</div>
<a className="btn-secondary inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10 transition-colors font-medium font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
          Watch Our Story
        </a>
</div>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-5 text-white/70">
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
<span className="text-sm font-geist">Verified Profiles</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="text-sm font-geist">5M+ Matches</span>
</div>
<div className="inline-flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm font-geist">Editor's Choice</span>
</div>
</div>
</section>

<section className="mt-12 md:mt-16 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="flex mb-6 sm:mb-8 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-rose-300/80 tracking-widest font-geist">(01) Real Connections</p>
<h3 className="mt-2 text-2xl sm:text-3xl tracking-tight font-geist font-medium">Find your safe space.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 btn-secondary rounded-full bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors font-geist" href="#work">
            View Stories
            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 sm:gap-5 overflow-hidden h-[720px] gap-x-4 gap-y-4" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)'}}>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[9/19.5] overflow-hidden">
<img alt="Video date" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616002411355-49593fd89721?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Feature • Video</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Virtual Dates</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6m-6-6v4.8m0-4.8 6-6m-6 6-6-6 6 6-6 6"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Happy couple" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Success Story</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Sarah &amp; James</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</span>
</div>
</div>
</a>
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Matching algorithm" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">AI Insights</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Compatibility Match</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
</span>
</div>
</div>
</a>
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Community support" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Community</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Support Groups</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</span>
</div>
</div>
</a>
</div>

<div className="flex flex-col gap-4 sm:gap-5">
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Intimate conversation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Safety First</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Verified Dating</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</span>
</div>
</div>
</a>
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Holding hands" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Relationship Goals</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Long Term Partners</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
</span>
</div>
</div>
</a>
<a className="border-gradient group relative overflow-hidden bg-white/5 rounded-3xl" href="#work">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Friends having coffee" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-rose-950/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<p className="text-xs text-rose-200/70 font-geist">Meetups</p>
<div className="mt-1 flex items-center justify-between">
<h4 className="text-base sm:text-lg tracking-tight font-medium text-white font-geist">Local Events</h4>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-rose-600">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
</div>
</div>
</a>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="btn-secondary inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition-colors font-geist" href="#work">
            Download on App Store
            <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</a>
</div>
</div>
</section>

<section className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll sm:px-6 lg:px-8 lg:mt-40 animate max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative">
<div className="text-center">
<p className="uppercase text-sm font-medium text-rose-200/50 tracking-wide">
      Featured in leading lifestyle publications
    </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div className="" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="flex gap-12 justify-center items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-serif font-bold tracking-tighter text-white">VOGUE</span>
<span className="text-xl font-serif font-bold tracking-widest text-white">COSMOPOLITAN</span>
<span className="text-xl font-sans font-black tracking-tight text-white">VICE</span>
<span className="text-xl font-serif font-bold italic text-white">ELLE</span>
<span className="text-xl font-sans font-bold tracking-tight text-white">WIRED</span>
</div>
</div>
</div>
</section>

<section className="mt-16 md:mt-24 relative">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-8">
<p className="text-[11px] sm:text-xs uppercase text-rose-300/60 tracking-widest font-geist">(02) Why Bebu</p>
<h3 className="mt-2 text-3xl sm:text-4xl md:text-5xl tracking-tight font-geist font-medium">Emotional intelligence,<br/>built into the algorithm.</h3>
</div>
<div className="grid gap-8 lg:grid-cols-2 gap-x-8 gap-y-8 items-center">

<div className="border-gradient bg-white/5 rounded-3xl p-8 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-6">
<div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-200">
<svg className="text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                Deep Matching
              </div>
</div>

<div className="relative h-64 rounded-2xl bg-gradient-to-b from-rose-950 to-neutral-900 border border-white/5 mb-6 overflow-hidden">
<div className="absolute inset-0 p-4">
<div className="flex items-center justify-center h-full">
<div className="relative w-full h-full rounded-xl overflow-hidden">
<img className="opacity-50 object-cover w-full h-full mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center gap-4">
<div className="w-16 h-16 rounded-full border-2 border-rose-500 bg-gray-800 bg-[url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64')] bg-cover"></div>
<div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
<div className="w-16 h-16 rounded-full border-2 border-rose-500 bg-gray-800 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64')] bg-cover"></div>
</div>
<div className="absolute bottom-4 left-0 right-0 text-center">
<span className="bg-rose-600/90 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">98% Compatibility</span>
</div>
</div>
</div>
</div>
</div>
<h4 className="text-xl font-medium tracking-tight text-white mb-3 font-geist">Personality Insights</h4>
<p className="text-white/70 text-sm font-geist mb-6">We don't just match photos. We match values, communication styles, and emotional needs for lasting connections.</p>
<a className="inline-flex items-center gap-2 text-sm text-rose-300 hover:text-rose-200 transition-colors font-geist" href="#">
              Learn how it works
              <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="space-y-8">
<div className="border-gradient bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center">
<svg className="text-rose-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div className="">
<div className="text-2xl font-medium tracking-tight text-white font-geist">Zero</div>
<p className="text-xs text-white/60 font-geist">Tolerance for harassment. 24/7 moderation.</p>
</div>
</div>
</div>
<div className="border-gradient bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center">
<svg className="text-rose-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="">
<div className="text-2xl font-medium tracking-tight text-white font-geist">2.4 Million</div>
<p className="text-xs text-white/60 font-geist">Daily active conversations.</p>
</div>
</div>
</div>
<div className="border-gradient bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="h-10 w-10 rounded-full bg-rose-500/20 flex items-center justify-center">
<svg className="text-rose-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="">
<div className="text-2xl font-medium tracking-tight text-white font-geist">4.9/5</div>
<p className="text-xs text-white/60 font-geist">Rating on iOS App Store.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 md:mt-24 relative">
<div className="mx-auto max-w-6xl px-6">
<div className="text-center mb-12">
<p className="text-[11px] sm:text-xs uppercase text-rose-300/60 tracking-widest font-geist mb-2">(03) Membership</p>
<h3 className="text-3xl sm:text-4xl md:text-5xl tracking-tight font-geist font-medium">Invest in your happiness</h3>
<p className="mt-4 text-white/70 font-geist">Join free. Upgrade for enhanced discovery and support.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border-gradient bg-white/5 rounded-3xl p-6 backdrop-blur-sm">
<div className="mb-6">
<h4 className="text-lg font-medium text-white tracking-tight font-geist">Bebu Free</h4>
<p className="text-sm text-white/60 mt-1 font-geist">For casual exploration</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white font-geist">$0</span>
<span className="text-sm text-white/60 font-geist">forever</span>
</div>
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors font-geist mb-6" href="#">
              Get started
              <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">10 Matches per day</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Standard filtering</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Secure chat</span>
</div>
</div>
</div>

<div className="relative border-gradient bg-gradient-to-b from-rose-500/10 to-purple-500/10 rounded-3xl p-6 backdrop-blur-sm">
<div className="absolute -top-3 left-1/2 -translate-x-1/2">
<span className="inline-flex gap-2 gap-x-2 gap-y-2 items-center text-xs text-rose-100 bg-rose-500/20 border-rose-500/30 border rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-lg">
<svg className="h-3 w-3" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
                Most Loved
              </span>
</div>
<div className="mb-6">
<h4 className="text-lg font-medium text-white tracking-tight font-geist">Bebu Gold</h4>
<p className="text-sm text-white/60 mt-1 font-geist">Serious about connection</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white font-geist">$12</span>
<span className="text-sm text-white/60 font-geist">/month</span>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm font-medium text-white font-geist bg-gradient-to-b from-rose-500 to-rose-700 w-full rounded-full mb-6 pt-3 pr-4 pb-3 pl-4 shadow-lg shadow-rose-900/20" href="#" style={{maskImage: 'linear-gradient(120deg, transparent, black 35%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(120deg, transparent, black 35%, black 65%, transparent)'}}>
              Try 7 Days Free
              <svg className="h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Unlimited Matches</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">See who likes you</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Advanced Personality Filters</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">5 Super Likes / day</span>
</div>
</div>
</div>

<div className="border-gradient bg-white/5 rounded-3xl p-6 backdrop-blur-sm">
<div className="mb-6">
<h4 className="text-lg font-medium text-white tracking-tight font-geist">Bebu Platinum</h4>
<p className="text-sm text-white/60 mt-1 font-geist">VIP experience</p>
</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-white font-geist">$29</span>
<span className="text-sm text-white/60 font-geist">/month</span>
</div>
<a className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors font-geist mb-6" href="#">
              Upgrade
              <svg className="w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="space-y-3">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Everything in Gold</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Priority Message Delivery</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Profile Boosts</span>
</div>
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-rose-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 12 2 2 4-4"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-white/70 font-geist">Relationship Coaching</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 md:mt-24 relative">
<div className="mx-auto max-w-4xl px-6 text-center">
<div className="border-gradient bg-white/5 rounded-3xl pt-12 pr-12 pb-12 pl-12 backdrop-blur-sm overflow-hidden relative">

<img alt="Background" className="opacity-20 w-full h-full object-cover -z-30 rounded-3xl absolute top-0 right-0 bottom-0 left-0 mix-blend-overlay" src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs text-rose-200 mb-6">
<svg className="h-3.5 w-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
<span className="font-geist">Your soulmate is out there</span>
</div>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4 font-geist">
            Find the love you deserve.
          </h2>
<p className="text-white/70 text-lg mb-8 font-geist max-w-lg mx-auto">
            Join thousands of others who found their safe space and their forever person on Bebu.
          </p>
<div className="flex flex-col sm:flex-row gap-3 gap-x-3 gap-y-3 items-center justify-center">
<a className="inline-flex items-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors font-geist gap-2" href="#">
<svg fill="black" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.653 17.518c-.765 1.115-1.564 2.227-2.753 2.251-1.157.026-1.531-.684-2.86-.684-1.328 0-1.745.666-2.871.691-1.149.023-2.025-1.151-2.76-2.215-1.506-2.175-2.658-6.148-1.112-8.835.766-1.33 2.137-2.172 3.613-2.193 1.139-.02 2.214.766 2.91.766.695 0 1.996-.948 3.367-.808 1.145.117 2.181.829 2.766 1.684-2.422 1.455-2.003 5.202.951 6.344zm-4.305-13.43c.613-.742 1.026-1.774.912-2.809-.883.036-1.954.588-2.587 1.321-.569.65-1.066 1.698-.934 2.704.985.076 1.991-.493 2.609-1.216z"></path></svg>
              App Store
            </a>
<a className="inline-flex items-center rounded-full bg-white/10 border border-white/20 text-white px-6 py-3 text-sm font-medium hover:bg-white/20 transition-colors font-geist gap-2" href="#">
<svg fill="white" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-1.61-.775V2.589a.996.996 0 0 1 1.61-.775z"></path><path d="M13.792 12l3.522 3.522 2.37-1.332a.997.997 0 0 0 0-1.73l-2.37-1.332L13.792 12z" fillOpacity=".75"></path><path d="M17.314 15.522L13.792 12 3.61 22.186 17.314 15.522z" fillOpacity=".5"></path><path d="M3.609 1.814L13.792 12l3.522-3.522L3.609 1.814z" fillOpacity=".5"></path></svg>
              Play Store
            </a>
</div>
</div>
</div>
</section>

<footer className="mt-16 md:mt-24 relative">
<div className="mx-auto max-w-7xl px-6 py-12 border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<a className="flex items-center gap-2 mb-4" href="#">

<div className="flex items-center justify-center w-6 h-6 rounded-lg bg-gradient-to-br from-rose-500 to-purple-600">
<svg className="translate-y-[1px]" fill="white" height="14" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<span className="font-bold tracking-tight font-geist text-white">Bebu</span>
</a>
<p className="text-sm text-white/60 font-geist">Love, without limits.<br/>Emotional support &amp; Dating.</p>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-3 font-geist">App</h4>
<ul className="space-y-2">
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Download</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Safety Center</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Guidelines</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Success Stories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-3 font-geist">Company</h4>
<ul className="space-y-2">
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">About Us</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Careers</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Press</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-white mb-3 font-geist">Legal</h4>
<ul className="space-y-2">
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Terms of Service</a></li>
<li><a className="text-sm text-white/60 hover:text-rose-400 transition-colors font-geist" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/10">
<p className="text-sm text-white/60 font-geist">© 2025 Bebu Inc. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 sm:mt-0">
<a className="text-white/60 hover:text-rose-400 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/60 hover:text-rose-400 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-white/60 hover:text-rose-400 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
