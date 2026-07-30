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



      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
        const y = document.getElementById('y');
        if (y) y.textContent = new Date().getFullYear();
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/80 border-b border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm tracking-tight font-medium group-hover:border-neutral-600 transition-colors font-geist" style={{letterSpacing: `-0.02em`}}>
            GF
          </div>
<span className="text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors font-geist" style={{}}>Ghifari Fazlul Makmur</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4 transition-colors font-geist" href="#work" style={{}}>Work</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4 transition-colors font-geist" href="#process" style={{}}>Process</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4 transition-colors font-geist" href="#about" style={{}}>About</a>
<a className="text-sm text-neutral-300 hover:text-neutral-100 hover:underline underline-offset-4 transition-colors font-geist" href="#contact" style={{}}>Contact</a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 rounded-md px-3 py-1.5 transition-colors font-geist" href="#" style={{}}>
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
            Resume
          </a>
</nav>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 transition-colors">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 pointer-events-none">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-neutral-800"></div>
</div>
</div>
<div className="max-w-7xl sm:px-6 lg:px-8 lg:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 text-xs text-neutral-300 border border-neutral-700 rounded-full px-2.5 py-1 bg-neutral-900/60 font-geist" style={{}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-orange-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Available for freelance from Oct
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl leading-tight text-neutral-50 font-geist font-semibold" style={{fontFamily: `Geist, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial`, letterSpacing: `-0.02em`}}>
              Ghifari Fazlul Makmur
            </h1>
<p className="mt-4 text-[18px] text-neutral-300 max-w-2xl font-geist" style={{}}>
              UI/UX Designer focused on simple, usable products. I turn complex problems into elegant, results-driven interfaces across web and mobile.
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8">
<a className="inline-flex items-center justify-center gap-2 hover:bg-orange-400 active:bg-orange-500/90 transition-colors outline outline-1 -outline-offset-0 outline-orange-500/20 hover:outline-orange-500/40 text-sm font-medium text-neutral-900 font-geist bg-orange-500 rounded-md pt-3 pr-5 pb-3 pl-5" href="#work" style={{}}>
                
                View Work
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#contact" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Contact
              </a>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mt-10">
<div className="flex gap-2 bg-neutral-900/60 border-neutral-800 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="lucide lucide-trophy w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `16px`, height: `16px`, color: `rgb(249, 115, 22)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
<div className="text-xs text-neutral-300 font-geist" style={{}}>10+ projects</div>
</div>
<div className="flex gap-2 bg-neutral-900/60 border-neutral-800 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="lucide lucide-timer w-4 h-4 text-orange-500" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<div className="text-xs text-neutral-300 font-geist" style={{}}>5 yrs exp</div>
</div>
<div className="flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-2">
<svg className="lucide lucide-star w-4 h-4 text-orange-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<div className="text-xs text-neutral-300 font-geist" style={{}}>Top rated</div>
</div>
<div className="hidden sm:flex gap-2 bg-neutral-900/60 border-neutral-800 border rounded-md pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="lucide lucide-globe w-4 h-4 text-orange-500" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="text-xs text-neutral-300 font-geist" style={{}}>Remote-ready</div>
</div>
</div>
</div>
<div className="lg:col-span-6">
<div className="relative">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-transparent to-transparent"></div>
<div className="relative rounded-2xl border border-neutral-800 bg-neutral-900 p-2 sm:p-3">
<div className="rounded-xl overflow-hidden border border-neutral-800">
<img alt="Project preview" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop" style={{}} />
</div>
<div className="flex items-center justify-between px-3 sm:px-4 py-3">
<div className="">
<h3 className="text-base font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Fintech Dashboard</h3>
<p className="text-xs text-neutral-400 font-geist" style={{}}>Design System, Web App</p>
</div>
<a className="inline-flex items-center gap-2 text-xs text-neutral-200 border border-neutral-700 rounded-md px-3 py-1.5 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#work" style={{}}>
                    Open
                    <svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
<img alt="Mobile app preview" className="w-full aspect-[4/3] object-cover" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1600&auto=format&fit=crop" style={{}} />
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 overflow-hidden">
<img alt="Web app preview" className="w-full aspect-[4/3] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f56ad85-7802-45dd-a754-700c9bec23d4_1600w.jpg" style={{}} />
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:px-6 lg:px-8 lg:py-20 mr-auto ml-auto pt-14 pr-4 pb-14 pl-4" id="work">
<div className="flex items-end justify-between">
<div className="">
<h2 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.02em`}}>Selected Work</h2>
<p className="mt-2 text-[18px] text-neutral-300 font-geist" style={{}}>Case studies highlighting strategy, craft, and measurable outcomes.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors font-geist" href="#contact" style={{}}>
          Let’s collaborate
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors">
<div className="relative">
<img alt="Fintech dashboard case cover" className="w-full aspect-[16/10] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1f56ad85-7802-45dd-a754-700c9bec23d4_800w.jpg" style={{}} />
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-neutral-100 bg-neutral-900/80 border border-neutral-800 rounded-full px-2.5 py-1 font-geist" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-orange-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Case Study
            </div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-medium tracking-tight group-hover:text-neutral-50 transition-colors font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Fintech Dashboard Revamp</h3>
<p className="mt-1 text-sm text-neutral-300 font-geist" style={{}}>Unified analytics with a cohesive design system, boosting task success by 28%.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>Design System</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>Accessibility</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>KPI +28%</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 rounded-md px-3 py-1.5 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#" style={{}}>
                Read more
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 text-neutral-400">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-framer w-4 h-4" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden hover:border-neutral-700 transition-colors">
<div className="relative">
<img alt="E-commerce app redesign cover" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{}} />
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-neutral-100 bg-neutral-900/80 border border-neutral-800 rounded-full px-2.5 py-1 font-geist" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-orange-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Case Study
            </div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>E‑commerce Redesign</h3>
<p className="mt-1 text-sm text-neutral-300 font-geist" style={{}}>Reduced checkout friction and increased conversion by 16% with progressive disclosure.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>Conversion</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>UX Writing</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>A/B Tests</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors text-sm text-neutral-200 font-geist border-neutral-700 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3" href="#" style={{}}>
                Read more
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 text-neutral-400">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-beaker w-4 h-4" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden hover:border-neutral-700 transition-colors bg-neutral-900 border-neutral-800 border rounded-2xl">
<div className="relative">
<img alt="Mobile banking cover" className="w-full aspect-[16/10] object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f693f1af-ff5f-4c7a-8480-30014bdb75ef_800w.jpg" style={{}} />
<div className="absolute top-3 left-3 inline-flex items-center gap-2 text-[11px] text-neutral-100 bg-neutral-900/80 border border-neutral-800 rounded-full px-2.5 py-1 font-geist" style={{}}>
<svg className="lucide lucide-badge-check w-3.5 h-3.5 text-orange-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
              Case Study
            </div>
</div>
<div className="sm:p-5 pt-4 pr-4 pb-4 pl-4">
<h3 className="text-lg font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Mobile Banking App</h3>
<p className="mt-1 text-sm text-neutral-300 font-geist" style={{}}>Simplified money movement with contextual shortcuts and biometric flows.</p>
<div className="mt-3 flex flex-wrap gap-2">
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>iOS/Android</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>Prototyping</span>
<span className="text-[11px] text-neutral-300 border border-neutral-800 rounded-full px-2 py-1 font-geist" style={{}}>Usability</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 rounded-md px-3 py-1.5 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#" style={{}}>
                Read more
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 text-neutral-400">
<svg className="lucide lucide-figma w-4 h-4" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</div>
</div>
</div>
</article>
</div>
<div className="mt-8 flex items-center justify-center">
<a className="inline-flex items-center gap-2 text-sm text-neutral-200 border border-neutral-700 rounded-md px-4 py-2 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#" style={{}}>
          Browse all projects
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-t border-neutral-800" id="process">
<h2 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.02em`}}>Process</h2>
<p className="mt-2 text-[18px] text-neutral-300 font-geist" style={{}}>Lean, collaborative, outcome‑focused.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-search w-5 h-5 text-orange-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<h3 className="text-base font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Research</h3>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Interviews, audits, and metrics to anchor decisions in user needs.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layout-dashboard w-5 h-5 text-orange-500" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<h3 className="text-base font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Structure</h3>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Flows, IA, and wireframes to clarify paths and reduce friction.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-palette w-5 h-5 text-orange-500" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-base font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Design</h3>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Visual systems and components that scale with consistency.</p>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-center gap-2">
<svg className="lucide lucide-play w-5 h-5 text-orange-500" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<h3 className="text-base font-medium tracking-tight font-geist" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.01em`}}>Prototype</h3>
</div>
<p className="mt-2 text-sm text-neutral-300 font-geist" style={{}}>Interactive prototypes and tests to validate before build.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-t border-neutral-800" id="about">
<div className="grid lg:grid-cols-12 gap-10 items-start">
<div className="lg:col-span-5">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden">
<img alt="Portrait of Ghifari Fazlul Makmur" className="w-full aspect-square object-cover" src="https://images.unsplash.com/photo-1577333715735-8fcb0359d906?w=800&q=80" />
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-2xl sm:text-3xl tracking-tight font-geist font-semibold" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.02em`}}>About</h2>
<p className="mt-3 text-[18px] text-neutral-300 font-geist" style={{}}>
            I’m a UI/UX Designer with a product mindset. I partner with teams to define problems, validate assumptions, and deliver interfaces that move metrics without sacrificing simplicity.
          </p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="text-sm text-neutral-300 font-geist" style={{}}>Focus</div>
<div className="mt-1 text-base font-medium tracking-tight text-neutral-100 font-geist" style={{fontFamily: `Geist, ui-sans-serif`}}>UX Strategy, Design Systems</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="text-sm text-neutral-300 font-geist" style={{}}>Industries</div>
<div className="mt-1 text-base font-medium tracking-tight text-neutral-100 font-geist" style={{fontFamily: `Geist, ui-sans-serif`}}>Fintech, SaaS, E‑commerce</div>
</div>
<div className="rounded-xl border border-neutral-800 bg-neutral-900 p-4">
<div className="text-sm text-neutral-300 font-geist" style={{}}>Collab</div>
<div className="mt-1 text-base font-medium tracking-tight text-neutral-100 font-geist" style={{fontFamily: `Geist, ui-sans-serif`}}>Product + Eng + Marketing</div>
</div>
</div>
<div className="mt-6">
<div className="text-sm text-neutral-300 font-geist" style={{}}>Tools</div>
<div className="mt-2 flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-3 py-1.5 text-xs text-neutral-200 bg-neutral-900 font-geist" style={{}}>
<svg className="lucide lucide-figma w-4 h-4 text-orange-500" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>Figma
              </span>
<span className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-3 py-1.5 text-xs text-neutral-200 bg-neutral-900 font-geist" style={{}}>
<svg className="lucide lucide-framer w-4 h-4 text-orange-500" data-lucide="framer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"></path></svg>Framer
              </span>
<span className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-3 py-1.5 text-xs text-neutral-200 bg-neutral-900 font-geist" style={{}}>
<svg className="lucide lucide-wand-2 w-4 h-4 text-orange-500" data-lucide="wand-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>Design Systems
              </span>
<span className="inline-flex items-center gap-2 border border-neutral-800 rounded-full px-3 py-1.5 text-xs text-neutral-200 bg-neutral-900 font-geist" style={{}}>
<svg className="lucide lucide-beaker w-4 h-4 text-orange-500" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>Testing
              </span>
</div>
</div>
<div className="mt-8 rounded-xl border border-neutral-800 bg-neutral-900 p-5">
<div className="flex items-start gap-3">
<svg className="lucide lucide-quote w-5 h-5 text-orange-500" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<p className="text-sm text-neutral-300 font-geist" style={{}}>
                “Ghifari translated complex requirements into interfaces our users loved. The new flows cut support tickets by 35% within a month.”
              </p>
</div>
<div className="mt-3 text-xs text-neutral-400 font-geist" style={{}}>PM, SaaS Platform</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 lg:py-20 border-t border-neutral-800" id="contact">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h2 className="text-2xl tracking-tight font-geist font-semibold" style={{fontFamily: `Geist, ui-sans-serif`, letterSpacing: `-0.02em`}}>Have a project in mind?</h2>
<p className="mt-2 text-[18px] text-neutral-300 font-geist" style={{}}>I’m open to collaborations, consulting, and freelance work.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-orange-400 active:bg-orange-500/90 transition-colors outline outline-1 outline-orange-500/20 hover:outline-orange-500/40 font-geist" href="mailto:hello@ghifari.design" style={{}}>
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Email me
            </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-800/60 hover:border-neutral-600 transition-colors font-geist" href="#" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book a call
            </a>
</div>
</div>
<div className="mt-6 flex items-center gap-4">
<a aria-label="Dribbble" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 transition-colors" href="#">
<svg className="lucide lucide-dribbble w-4.5 h-4.5" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="Behance" className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-800/60 transition-colors" href="#">
<i className="w-4.5 h-4.5" data-lucide="behance"></i>
</a>
</div>
</div>
</section>

<footer className="border-t border-neutral-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm tracking-tight font-medium font-geist" style={{letterSpacing: `-0.02em`}}>
              GF
            </div>
<div className="text-sm text-neutral-400 font-geist" style={{}}>© <span className="font-geist" id="y" style={{}}>2025</span> Ghifari Fazlul Makmur</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-neutral-100 transition-colors font-geist" href="#work" style={{}}>Work</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors font-geist" href="#process" style={{}}>Process</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors font-geist" href="#about" style={{}}>About</a>
<a className="text-neutral-300 hover:text-neutral-100 transition-colors font-geist" href="#contact" style={{}}>Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
