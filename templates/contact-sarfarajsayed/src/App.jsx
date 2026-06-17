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
      document.getElementById("year").textContent = new Date().getFullYear();
    
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
      
<div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-slate-50">

<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

<header className="flex items-center justify-between gap-4">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-emerald-400 to-sky-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
<span className="text-base font-semibold tracking-tight text-slate-950">
                AD
              </span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-50 tracking-tight">SARFARAJ HOSSEN</span>
<span className="text-xs font-medium text-slate-400">
                Developer • Programmer • Designer
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
<a className="hover:text-slate-50 transition-colors" href="#about">About</a>
<a className="hover:text-slate-50 transition-colors" href="#projects">Projects</a>
<a className="hover:text-slate-50 transition-colors" href="#experience">Experience</a>
<a className="hover:text-slate-50 transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-4 py-2 text-xs font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900/90 transition-colors">
<svg className="lucide lucide-download w-3.5 h-3.5 stroke-[1.5]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Resume
            </button>
<a className="inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-4 sm:px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-300 transition-colors" href="#contact">
<span>Hire Me</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</header>

<main className="mt-10 sm:mt-14 lg:mt-20 grid gap-10 lg:grid-cols-[minmax(0,3fr),minmax(0,2.2fr)] lg:items-start">

<section className="space-y-8 lg:space-y-10">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-slate-900/60 px-3 py-1 text-xs font-medium text-emerald-300/90">
<div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span>Open to remote &amp; hybrid roles</span>
</div>
<div className="space-y-3">
<h1 className="sm:text-4xl lg:text-5xl text-3xl font-semibold text-slate-50 tracking-tight">
                  Developer, programmer &amp; designer crafting Dart‑powered experiences.
                </h1>
<p className="text-base sm:text-lg font-medium text-slate-300">
                  I build fast, reliable and delightful digital products with a strong focus
                  on clean architecture, subtle motion, and deeply considered user journeys.
                </p>
</div>

<div className="grid grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                    4+
                  </div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    Years experience
                  </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                    18
                  </div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    Shipped projects
                  </div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                    6
                  </div>
<div className="mt-1 text-xs sm:text-sm font-medium text-slate-400">
                    Product teams
                  </div>
</div>
</div>
</div>

<section className="space-y-4" id="about">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                  About
                </h2>
<span className="text-xs font-medium text-slate-500">
                  Code • Design • Strategy
                </span>
</div>
<p className="text-base font-medium text-slate-300">
                I’m a full‑stack developer and product designer with a bias toward Dart and
                reactive systems. I love turning ambiguous ideas into precise interfaces,
                bridging the gap between engineering and design. My work balances
                performance, accessibility, and strong visual identity.
              </p>
<p className="text-base font-medium text-slate-300">
                From architecture diagrams to pixel details, I design flows, prototype
                interactions, build production code, and collaborate closely with teams to
                ship work that feels cohesive and intentional.
              </p>
</section>

<section className="space-y-4">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                Core stack &amp; skills
              </h3>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">

<div className="space-y-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Languages
                  </span>
<div className="space-y-1.5 text-sm font-medium text-slate-200">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
<span>Dart</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
<span>TypeScript</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Python</span>
</div>
</div>
</div>

<div className="space-y-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Frameworks
                  </span>
<div className="space-y-1.5 text-sm font-medium text-slate-200">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span>Flutter</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400"></span>
<span>Next.js</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-amber-400"></span>
<span>Node.js</span>
</div>
</div>
</div>

<div className="space-y-2">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    Design &amp; UX
                  </span>
<div className="space-y-1.5 text-sm font-medium text-slate-200">
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Product design</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
<span>Design systems</span>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1">
<span className="h-1.5 w-1.5 rounded-full bg-sky-300"></span>
<span>Interaction design</span>
</div>
</div>
</div>
</div>
</section>
</section>

<section className="space-y-8 lg:space-y-9">

<div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-950/95 p-5 sm:p-6 shadow-xl shadow-black/40">

<div className="pointer-events-none absolute -top-12 -right-16 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="flex items-start gap-4">

<div className="relative">
<div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-tr from-cyan-400 via-sky-500 to-emerald-400 flex items-center justify-center">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-950">
                      A
                    </span>
</div>
<div className="absolute -bottom-1.5 -right-1.5 rounded-full bg-slate-950 p-1.5 border border-slate-800">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-400"></div>
</div>
</div>

<div className="flex-1 space-y-2">
<div className="flex flex-wrap items-center gap-2">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-50">
                      Arin Dev
                    </h2>
<span className="rounded-full bg-slate-900/80 border border-slate-700/80 px-2 py-0.5 text-[0.65rem] font-medium text-slate-300">
                      Dart‑first engineer
                    </span>
</div>
<p className="text-sm sm:text-base font-medium text-slate-300">
                    I specialize in Dart‑powered mobile, web and desktop experiences,
                    combining strong engineering foundations with interface craft.
                  </p>

<div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-400">
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<svg className="lucide lucide-map-pin w-3 h-3 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Remote • GMT+2</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<svg className="lucide lucide-code w-3 h-3 stroke-[1.5]" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span>Full‑stack</span>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2 py-1">
<svg className="lucide lucide-sparkles w-3 h-3 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Product thinking</span>
</div>
</div>
</div>
</div>

<div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-800 pt-4">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors" href="#">
<svg className="lucide lucide-github w-3.5 h-3.5 stroke-[1.5]" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span>@arin-dev</span>
</a>
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-3.5 h-3.5 stroke-[1.5]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span>/in/arin‑dev</span>
</a>
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors" href="#">
<svg className="lucide lucide-globe w-3.5 h-3.5 stroke-[1.5]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span>arin.dev</span>
</a>
</div>
</div>

<section className="space-y-3">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Featured Dart project
                </h3>
<span className="text-xs font-medium text-slate-500">
                  Built with Dart &amp; Flutter
                </span>
</div>
<div className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-950/95 p-4 sm:p-5">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),transparent_55%),radial-gradient(circle_at_bottom,_rgba(45,212,191,0.16),transparent_55%)]"></div>
<div className="relative flex flex-col gap-4 sm:gap-5">
<div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
<div className="flex-1 space-y-2">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 border border-cyan-500/40 px-2.5 py-1">
<svg className="lucide lucide-smartphone w-3.5 h-3.5 stroke-[1.5] text-cyan-300" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-xs font-semibold text-cyan-100">
                          Cross‑platform product
                        </span>
</div>
<h4 className="text-base sm:text-lg font-semibold tracking-tight text-slate-50">
                        FlowDash — realtime task hub for distributed teams
                      </h4>
<p className="text-sm sm:text-base font-medium text-slate-300">
                        A realtime collaboration app built with Dart &amp; Flutter that unifies
                        tasks, sprints, and async standups across mobile, web, and desktop.
                        Designed and implemented from concept to deployment.
                      </p>
</div>
</div>

<div className="flex flex-wrap items-end justify-between gap-3 border-t border-slate-800 pt-3">
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
<svg className="lucide lucide-cpu w-3 h-3 stroke-[1.5] text-cyan-300" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span>Flutter • Riverpod • WebSockets</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
<svg className="lucide lucide-figma w-3 h-3 stroke-[1.5] text-emerald-300" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>
<span>Design system &amp; prototyping</span>
</span>
<span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-2.5 py-1 text-[0.7rem] font-medium text-slate-200">
<svg className="lucide lucide-server w-3 h-3 stroke-[1.5] text-sky-300" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span>Supabase • Edge functions</span>
</span>
</div>
<a className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-colors" href="#">
<span>View case study</span>
<svg className="lucide lucide-arrow-up-right w-3.5 h-3.5 stroke-[1.5]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="projects">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Selected projects
                </h3>
<a className="text-xs font-medium text-slate-400 hover:text-cyan-300 transition-colors" href="#">
                  View full archive
                </a>
</div>
<div className="grid gap-4 sm:gap-5">

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 hover:border-cyan-500/50 hover:bg-slate-950 transition-colors">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl bg-slate-900 p-2">
<svg className="lucide lucide-layout-dashboard w-4 h-4 stroke-[1.5] text-cyan-300" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                          PulseBoard — analytics cockpit
                        </h4>
<span className="text-[0.7rem] font-medium text-slate-400">
                          Web • SaaS
                        </span>
</div>
<p className="text-sm font-medium text-slate-300">
                        A compact analytics dashboard with custom chart components, responsive
                        grid layouts, and a coherent visual language.
                      </p>
<div className="mt-1 flex flex-wrap gap-1.5 text-[0.7rem] font-medium text-slate-400">
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Next.js</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">TypeScript</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Design system</span>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 hover:border-cyan-500/50 hover:bg-slate-950 transition-colors">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl bg-slate-900 p-2">
<svg className="lucide lucide-pen-tool w-4 h-4 stroke-[1.5] text-emerald-300" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                          GlyphKit — design tooling playground
                        </h4>
<span className="text-[0.7rem] font-medium text-slate-400">
                          Experiment • OSS
                        </span>
</div>
<p className="text-sm font-medium text-slate-300">
                        A suite of micro‑tools for designers and developers: typography
                        scales, motion curves, and layout previews tightly integrated into a
                        single interface.
                      </p>
<div className="mt-1 flex flex-wrap gap-1.5 text-[0.7rem] font-medium text-slate-400">
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Flutter Web</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Canvas</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">UX experiments</span>
</div>
</div>
</div>
</article>

<article className="group rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 hover:border-cyan-500/50 hover:bg-slate-950 transition-colors">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-xl bg-slate-900 p-2">
<svg className="lucide lucide-headphones w-4 h-4 stroke-[1.5] text-sky-300" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div className="flex-1 space-y-2">
<div className="flex items-center justify-between gap-2">
<h4 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                          EchoCast — podcast companion
                        </h4>
<span className="text-[0.7rem] font-medium text-slate-400">
                          Mobile
                        </span>
</div>
<p className="text-sm font-medium text-slate-300">
                        A minimal listening companion with offline queues, recommendations,
                        and a gesture‑driven UI optimized for single‑hand use.
                      </p>
<div className="mt-1 flex flex-wrap gap-1.5 text-[0.7rem] font-medium text-slate-400">
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Dart</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Flutter</span>
<span className="rounded-full bg-slate-900/80 px-2 py-0.5">Animations</span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="space-y-4" id="experience">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Experience
                </h3>
<span className="text-xs font-medium text-slate-500">
                  Recent roles
                </span>
</div>
<div className="space-y-3">
<div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="mt-0.5 h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
                    PL
                  </div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-1">
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-50">
                          Product engineer
                        </h4>
<p className="text-xs font-medium text-slate-400">
                          PixelLayer Studio • 2022 — Present
                        </p>
</div>
<span className="text-[0.7rem] font-medium text-slate-400">
                        Dart · Flutter · Next.js
                      </span>
</div>
<p className="mt-2 text-sm font-medium text-slate-300">
                      Designing and building multi‑platform products for early‑stage teams:
                      from prototypes to production apps, with a strong focus on maintainable
                      architecture and design systems.
                    </p>
</div>
</div>
<div className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
<div className="mt-0.5 h-8 w-8 rounded-xl bg-slate-900 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-200">
                    FR
                  </div>
<div className="flex-1">
<div className="flex flex-wrap items-center justify-between gap-1">
<div>
<h4 className="text-sm font-semibold tracking-tight text-slate-50">
                          Freelance dev &amp; designer
                        </h4>
<p className="text-xs font-medium text-slate-400">
                          Independent • 2019 — 2022
                        </p>
</div>
<span className="text-[0.7rem] font-medium text-slate-400">
                        Web • Mobile • Branding
                      </span>
</div>
<p className="mt-2 text-sm font-medium text-slate-300">
                      Partnered with startups and creators to design visual identities,
                      build marketing sites, and ship lightweight apps with modern stacks.
                    </p>
</div>
</div>
</div>
</section>

<section className="space-y-4" id="contact">
<div className="flex items-center justify-between gap-2">
<h3 className="text-sm sm:text-base font-semibold tracking-tight text-slate-50">
                  Let’s work together
                </h3>
<span className="text-xs font-medium text-emerald-300">
                  Currently accepting new projects
                </span>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5 space-y-4">
<p className="text-sm sm:text-base font-medium text-slate-300">
                  I collaborate with teams on product MVPs, design systems, and
                  Dart‑powered apps. Tell me about your problem, timeline, and constraints.
                </p>
<form className="space-y-3">
<div className="grid gap-3 sm:grid-cols-2">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">
                        Name
                      </label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">
                        Email
                      </label>
<input className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300">
                      Project details
                    </label>
<textarea className="w-full rounded-xl border border-slate-800 bg-slate-950/70 px-3 py-2 text-sm font-medium text-slate-100 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-500/50" placeholder="What are you building? What do you need help with?" rows="3"></textarea>
</div>
<div className="flex flex-wrap items-center justify-between gap-3 pt-1">
<p className="text-xs font-medium text-slate-500">
                      Prefer email? Reach out at
                      <span className="text-slate-200">hello@arin.dev</span>
</p>
<button className="inline-flex items-center gap-2 rounded-full bg-cyan-400/90 px-4 sm:px-5 py-2 text-xs font-semibold tracking-tight text-slate-950 shadow-md shadow-cyan-500/40 hover:bg-cyan-300 transition-colors" type="submit">
<svg className="lucide lucide-send w-3.5 h-3.5 stroke-[1.5]" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span>Send message</span>
</button>
</div>
</form>
</div>
</section>
</section>
</main>

<footer className="mt-10 sm:mt-12 border-t border-slate-900 pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500">
<div className="flex items-center gap-2">
<span>© <span id="year">2025</span> Arin Dev.</span>
<span className="hidden sm:inline">All rights reserved.</span>
</div>
<div className="flex items-center gap-3">
<a className="hover:text-cyan-300 transition-colors" href="#about">About</a>
<a className="hover:text-cyan-300 transition-colors" href="#projects">Projects</a>
<a className="hover:text-cyan-300 transition-colors" href="#contact">Contact</a>
</div>
</footer>
</div>
</div>


    </>
  );
}
