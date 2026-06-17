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



      // Word-by-word blur animation for heading
      document.addEventListener("DOMContentLoaded", function () {
        const words = document.querySelectorAll(".heading-word");
        const totalDuration = 1200;
        const wordDelay = totalDuration / (words.length || 1);

        words.forEach((word, index) => {
          const delay = index * wordDelay;
          word.style.transition =
            "filter 420ms ease-out, opacity 420ms ease-out, transform 420ms ease-out";
          word.style.filter = "blur(4px)";
          word.style.transform = "translateY(0.25rem)";
          setTimeout(() => {
            word.classList.remove("opacity-0");
            word.classList.remove("blur-sm");
            word.style.filter = "blur(0)";
            word.style.opacity = "1";
            word.style.transform = "translateY(0)";
          }, delay);
        });
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
      
<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">

<div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-100 to-slate-200"></div>
<div className="pointer-events-none absolute -left-32-10 h-[28rem] w-[28rem] rounded-full bg-red-500/10 blur-3xl"></div>
<div className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-sky-400/10 blur-3xl"></div>

<div className="relative z-10 flex h-[100svh] w-full max-w-6xl flex-col justify-between gap-6 rounded-3xl border border-slate-200/40 bg-white/50 p-6 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-xl sm:p-8 lg:p-10">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500 text-xs font-semibold tracking-tight text-white" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              YL
            </div>
<div className="flex flex-col">
<span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                Yun Leong Engineering
              </span>
<span className="text-sm text-slate-500">
                Factory &amp; industrial renovation
              </span>
</div>
</div>
<nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
<a className="rounded-full border border-transparent bg-white/60 px-4 py-1.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:text-slate-900" href="#services">
              Services
            </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#projects">
              Projects
            </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#about">
              About us
            </a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#clients">
              Clients
            </a>
<a className="inline-flex items-center gap-2 rounded-full bg-red-500 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-600" href="#contact">
              Contact
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600/80 text-[0.625rem]">
                24/7
              </span>
</a>
</nav>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 shadow-sm transition hover:bg-white md:hidden">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="14" y1="18" y2="18"></line>
</svg>
</button>
</header>

<main className="grid flex-1 grid-cols-1 items-center gap-10 md:grid-cols-2">

<section className="space-y-6">
<div className="space-y-3">
<p className="inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50/70 px-3 py-1 text-xs font-medium text-red-600 shadow-sm">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-red-500"></span>
                Precision renovation for modern factories
              </p>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.5rem]" id="animated-heading" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span className="heading-word blur-sm opacity-0">
                  Renovating
                </span>
<span className="heading-word blur-sm opacity-0">
                  factories,
                </span>
<span className="heading-word blur-sm opacity-0">
                  upgrading
                </span>
<span className="heading-word blur-sm opacity-0">
                  production,
                </span>
<span className="heading-word blur-sm opacity-0">
                  minimizing
                </span>
<span className="heading-word blur-sm opacity-0">
                  downtime.
                </span>
</h1>
<p className="text-base text-slate-600">
                Yun Leong Engineering specializes in heavy-duty factory
                renovation, M&amp;E upgrades, and production-line reconfiguration
                with safety, compliance, and continuity at the core.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-red-600">
                Get a factory walkthrough
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white">
                Download capability profile
              </button>
</div>
<dl className="mt-4 grid grid-cols-3 gap-4 text-sm text-slate-700">
<div className="space-y-1">
<dt className="text-[0.75rem] text-slate-500">
                  Factory projects delivered
                </dt>
<dd className="text-lg font-semibold text-slate-900">
                  120+
                </dd>
</div>
<div className="space-y-1">
<dt className="text-[0.75rem] text-slate-500">
                  Average shutdown saved
                </dt>
<dd className="text-lg font-semibold text-slate-900">
                  35%
                </dd>
</div>
<div className="space-y-1">
<dt className="text-[0.75rem] text-slate-500">
                  Compliance rating
                </dt>
<dd className="text-lg font-semibold text-slate-900">
                  ISO-ready
                </dd>
</div>
</dl>
</section>

<section className="relative flex h-full items-stretch">
<div className="relative flex w-full flex-col justify-between gap-6 rounded-2xl border border-slate-200/60 bg-white/60 p-5 shadow-[rgba(14,_63,_126,_0.04)_0px_0px_0px_1px,_rgba(42,_51,_69,_0.04)_0px_1px_1px_-0.5px,_rgba(42,_51,_70,_0.04)_0px_3px_3px_-1.5px,_rgba(42,_51,_70,_0.04)_0px_6px_6px_-3px,_rgba(14,_63,_126,_0.04)_0px_12px_12px_-6px,_rgba(14,_63,_126,_0.04)_0px_24px_24px_-12px] backdrop-blur-xl sm:p-6">

<div className="space-y-4" id="services">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Industrial renovation, engineered.
                    </h2>
<p className="mt-1 text-base text-slate-600">
                      From structural upgrades to cleanroom conversions, our
                      teams work inside live plants with strict safety and
                      cleanliness controls.
                    </p>
</div>
<div className="hidden items-center justify-center rounded-full bg-red-50 p-2 text-red-500 md:flex">
<svg className="h-5 w-5" fill="none" id="code-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Factory renovation
                    </h3>
<p className="mt-1 text-base text-slate-600">
                      Heavy-duty flooring, structural works, mezzanine builds,
                      and layout reconfiguration for production lines.
                    </p>
</div>
<div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      M&amp;E &amp; utilities
                    </h3>
<p className="mt-1 text-base text-slate-600">
                      Power, compressed air, process piping, and HVAC upgrades,
                      tailored to high-load industrial environments.
                    </p>
</div>
<div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Compliance &amp; safety
                    </h3>
<p className="mt-1 text-base text-slate-600">
                      Fire safety, clean zones, EHS-compliant works with clear
                      documentation for audits and approvals.
                    </p>
</div>
<div className="rounded-xl border border-slate-200/80 bg-white/80 p-3 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Turnkey delivery
                    </h3>
<p className="mt-1 text-base text-slate-600">
                      Design, engineering, and build, coordinated by a single
                      project team for predictable outcomes.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4">
<div className="flex items-center justify-between gap-3" id="projects">
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      A clear 3-step process
                    </h3>
<p className="text-base text-slate-600">
                      We plan around your shutdown windows to keep production
                      moving.
                    </p>
</div>
<span className="hidden rounded-full bg-red-100 px-2 py-1 text-[0.7rem] font-medium text-red-600 md:inline-flex">
                    Free site assessment
                  </span>
</div>
<ol className="grid grid-cols-3 gap-3 text-xs text-slate-600">
<li className="flex flex-col gap-1 rounded-xl bg-white/80 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-semibold text-white">
                        1
                      </span>
<span className="text-[0.7rem] font-medium text-slate-500">
                        Week 0-1
                      </span>
</div>
<p className="mt-1 text-base">
                      Site survey, risk mapping, and renovation strategy
                      aligned with your production schedule.
                    </p>
</li>
<li className="flex flex-col gap-1 rounded-xl bg-white/80 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-semibold text-white">
                        2
                      </span>
<span className="text-[0.7rem] font-medium text-slate-500">
                        Week 2-4
                      </span>
</div>
<p className="mt-1 text-base">
                      Phased construction, M&amp;E works, and safety
                      integration with live-plant coordination.
                    </p>
</li>
<li className="flex flex-col gap-1 rounded-xl bg-white/80 p-3 shadow-sm">
<div className="flex items-center justify-between">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[0.7rem] font-semibold text-white">
                        3
                      </span>
<span className="text-[0.7rem] font-medium text-slate-500">
                        Week 4+
                      </span>
</div>
<p className="mt-1 text-base">
                      Testing, commissioning, safety sign-off, and as-built
                      documentation for your records.
                    </p>
</li>
</ol>
<div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-3">
<div className="flex flex-wrap items-center gap-2 text-xs">
<span className="text-slate-500">
                      Ready to renovate your factory?
                    </span>
<span className="rounded-full bg-white px-2 py-0.5 text-[0.7rem] font-medium text-slate-700">
                      Lead time: &lt; 10 days from first visit
                    </span>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition hover:bg-black">
                    Schedule a site visit
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v2"></path>
<path d="M16 5v2"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
</main>

<section className="mt-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 sm:p-5" id="about">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                About us
              </h2>
<p className="mt-1 text-base text-slate-600">
                Yun Leong Engineering is a specialist contractor focused on live-plant
                renovation for manufacturing, logistics, and industrial clients. Our
                teams combine civil, structural, and M&amp;E capabilities under one
                roof to reduce coordination risk and downtime.
              </p>
</div>
</div>
</section>
<section className="mt-3 rounded-2xl border border-slate-200/70 bg-white/70 p-4 sm:p-5" id="clients">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                Clients
              </h2>
<p className="mt-1 text-base text-slate-600">
                We support regional manufacturers across electronics, food &amp; beverage,
                logistics hubs, and precision engineering. Typical clients operate
                24/7 lines and require tightly managed shutdowns for upgrades.
              </p>
</div>
</div>
</section>
<section className="mt-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 sm:p-5" id="contact">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<div>
<h2 className="text-lg font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                Contact
              </h2>
<p className="mt-1 text-base text-slate-600">
                Share your factory layout, photos, or shutdown window and we'll
                propose a phased renovation plan.
              </p>
<div className="mt-2 text-base text-slate-700">
<p>Phone: <span className="font-medium text-slate-900">+60-XXX-XXX-XXXX</span></p>
<p>Email: <span className="font-medium text-slate-900">projects@yunleong-eng.com</span></p>
</div>
</div>
</div>
</section>

<footer className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-3 text-xs text-slate-500">
<div className="flex flex-wrap items-center gap-3">
<span>© 2025 Yun Leong Engineering.</span>
<span className="hidden sm:inline">
              Industrial renovation • M&amp;E • Factory upgrades
            </span>
</div>
<div className="flex flex-wrap items-center gap-3">
<span>+60 • Your regional partner for factory upgrades.</span>
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Currently accepting Q3 projects.</span>
</div>
</footer>
</div>
</div>


    </>
  );
}
