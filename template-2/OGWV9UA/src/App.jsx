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
      
      // Initialize Lucide icons with consistent stroke width
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
        // Update year
        var yr = document.getElementById('yr');
        if (yr) yr.textContent = new Date().getFullYear();
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
      

<div className="min-h-screen">

<header className="sticky top-0 z-40 bg-stone-100/80 backdrop-blur supports-[backdrop-filter]:bg-stone-100/70 border border-transparent ring-1 ring-stone-200/80 shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-3">

<a className="flex items-center gap-3 group" href="#">
<div className="relative grid place-items-center w-10 h-10 ring-1 ring-stone-200/80 transition-all duration-200 group-hover:ring-indigo-400/60 group-hover:shadow bg-white rounded-md shadow-sm">
</div>
<div className="flex flex-col">
<span className="text-[17px] sm:text-lg" style={{fontFamily: `'Varela Round', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`, fontWeight: `600`, letterSpacing: `-0.01em`}}>Nataly Vélez</span>
<span className="text-[11px] text-stone-600">Abogada</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-md text-sm text-stone-700 hover:text-stone-900 hover:bg-white ring-1 ring-stone-200/80 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 hover:bg-white ring-1 ring-stone-200/80 transition-colors text-sm text-stone-700 rounded-md pt-2 pr-3 pb-2 pl-3" href="#practice">Practice</a>
<a className="px-3 py-2 rounded-md text-sm text-stone-700 hover:text-stone-900 hover:bg-white ring-1 ring-stone-200/80 transition-colors" href="#clients">Clients</a>
<a className="px-3 py-2 rounded-md text-sm text-stone-700 hover:text-stone-900 hover:bg-white ring-1 ring-stone-200/80 transition-colors" href="#articles">Articles</a>
<a className="px-3 py-2 rounded-md text-sm text-stone-700 hover:text-stone-900 hover:bg-white ring-1 ring-stone-200/80 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">
<a className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 active:bg-indigo-700 ring-1 ring-indigo-500/10 shadow-sm transition-colors" href="#book">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm">Book Consultation</span>
</a>
</div>
</div>
</div>
</header>

<main className="">

<section className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:pt-14 sm:pb-16 mr-auto ml-auto pt-10 pr-4 pb-14 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

<div className="lg:col-span-7">
<h1 className="sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-3xl text-stone-950 tracking-tight font-manrope mb-4" style={{fontFamily: `'Varela Round', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`, fontWeight: `600`, letterSpacing: `-0.02em`}}>
                  Practical, precise legal counsel for founders and professionals.
                </h1>
<p className="sm:text-lg max-w-2xl text-base text-stone-700 font-merriweather">
                  I help startups and seasoned teams make confident decisions—contracts, business formation, IP strategy, and disputes—delivered with clarity and speed.
                </p>

<div className="mt-6 flex flex-wrap gap-3">
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-7 items-stretch">
<a className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 hover:bg-indigo-600 active:bg-indigo-700 ring-1 ring-indigo-500/10 transition-colors text-white bg-indigo-500 rounded-md pt-3 pr-4 pb-3 pl-4 shadow-sm" href="#book">
<svg className="lucide lucide-calendar-plus w-5 h-5" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
<span className="text-sm sm:text-base">Schedule a 20‑min intro</span>
</a>
</div>

<div className="mt-9" id="practice">
<div className="flex flex-wrap gap-2.5">
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm text-stone-800">
<svg className="lucide lucide-file-signature w-4 h-4 text-indigo-500" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
<span className="text-sm">Contracts & Negotiation</span>
</span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm text-stone-800">
<svg className="lucide lucide-briefcase w-4 h-4 text-indigo-500" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-sm">Business Formation</span>
</span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm text-stone-800">
<svg className="lucide lucide-copyright w-4 h-4 text-indigo-500" data-lucide="copyright" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg>
<span className="text-sm">IP & Brand</span>
</span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm text-stone-800">
<svg className="lucide lucide-gavel w-4 h-4 text-indigo-500" data-lucide="gavel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381"></path><path d="m16 16 6-6"></path><path d="m21.5 10.5-8-8"></path><path d="m8 8 6-6"></path><path d="m8.5 7.5 8 8"></path></svg>
<span className="text-sm">Disputes & Litigation</span>
</span>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative">
<div className="rounded-xl bg-white ring-1 ring-stone-200/80 shadow-sm overflow-hidden">
<div className="aspect-[4/5] w-full">
<img alt="Portrait of Avery Lang, Esq." className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1740&auto=format&fit=crop" />
</div>
</div>

<div className="absolute -bottom-5 -left-4 sm:-left-6 md:-left-8">
<div className="inline-flex items-center gap-3 px-4 py-3 rounded-lg bg-white ring-1 ring-stone-200/80 shadow-sm">
<div className="grid place-items-center w-9 h-9 rounded-md bg-indigo-50 ring-1 ring-indigo-200">
<svg className="lucide lucide-handshake w-5 h-5 text-indigo-600" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-sm text-stone-800">200+ clients represented</span>
<span className="text-xs text-stone-600">Startups • Creators • SMBs</span>
</div>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3" id="contact">
</div>
</div>
</div>

<div className="mt-12 border-t border-stone-200"></div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 items-start" id="about">
<div className="lg:col-span-7">
<h2 className="text-2xl tracking-tight text-stone-950 mb-2" style={{fontFamily: `'Varela Round', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`, fontWeight: `600`}}>
                  Why clients choose this practice
                </h2>
<ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
<li className="flex items-start gap-3 p-3 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm">
<svg className="lucide lucide-target w-5 h-5 text-indigo-500 mt-0.5" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="text-sm text-stone-800">
                      Strategy-first guidance aligned with business impact, not just legal theory.
                    </div>
</li>
<li className="flex items-start gap-3 p-3 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm">
<svg className="lucide lucide-file-check-2 w-5 h-5 text-indigo-500 mt-0.5" data-lucide="file-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m3 15 2 2 4-4"></path></svg>
<div className="text-sm text-stone-800">
                      Clean, negotiable templates and redlines that move deals forward.
                    </div>
</li>
<li className="flex items-start gap-3 p-3 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm">
<svg className="lucide lucide-clock-4 w-5 h-5 text-indigo-500 mt-0.5" data-lucide="clock-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="text-sm text-stone-800">
                      Transparent timelines and fixed-fee options for predictable budgeting.
                    </div>
</li>
<li className="flex items-start gap-3 p-3 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm">
<svg className="lucide lucide-lock w-5 h-5 text-indigo-500 mt-0.5" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<div className="text-sm text-stone-800">
                      Your confidentiality is paramount—strict privacy practices by default.
                    </div>
</li>
</ul>
</div>
<div className="lg:col-span-5">
<div className="ring-1 ring-stone-200/80 bg-white rounded-lg pt-4 pr-4 pb-4 pl-4 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-[18px] tracking-tight text-stone-950" style={{fontFamily: `'Varela Round', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`, fontWeight: `600`}}>Currently accepting new matters</h3>
</div>
<p className="mt-2 text-sm text-stone-700">
                    Best fit: SaaS, creative studios, and SMBs seeking contract systems, fundraising readiness, or dispute strategy.
                  </p>
<div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
<a className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 ring-1 ring-indigo-500/10 shadow-sm transition-colors" href="#book">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-sm">Book consult</span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-white text-stone-900 hover:text-stone-950 ring-1 ring-stone-200/80 hover:ring-indigo-400/60 shadow-sm transition-colors" href="#articles">
<svg className="lucide lucide-newspaper w-4 h-4 text-indigo-500" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
<span className="text-sm">Read articles</span>
</a>
</div>
</div>
</div>
</div>

</div>
</section>
</main>

<footer className="border-t border-stone-200/90">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="grid place-items-center w-8 h-8 rounded-md bg-white ring-1 ring-stone-200/80 shadow-sm">
<span className="text-[11px] font-semibold tracking-tight text-stone-800">AL</span>
</div>
<div className="text-sm text-stone-700">
                © <span id="yr">2025</span> Avery Lang, PC. All rights reserved.
              </div>
</div>
<div className="flex items-center gap-3 text-sm">
<a className="px-2.5 py-1.5 rounded-md ring-1 ring-stone-200/80 bg-white text-stone-700 hover:text-stone-900 hover:ring-indigo-400/60 shadow-sm transition-colors" href="#">Privacy</a>
<a className="px-2.5 py-1.5 rounded-md ring-1 ring-stone-200/80 bg-white text-stone-700 hover:text-stone-900 hover:ring-indigo-400/60 shadow-sm transition-colors" href="#">Terms</a>
<a className="px-2.5 py-1.5 rounded-md ring-1 ring-stone-200/80 bg-white text-stone-700 hover:text-stone-900 hover:ring-indigo-400/60 shadow-sm transition-colors" href="#contact">Contact</a>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
