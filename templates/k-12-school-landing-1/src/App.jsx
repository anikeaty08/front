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



      document.getElementById('year').textContent = new Date().getFullYear();
    
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
      
<div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">

<header className="w-full border-b border-slate-200 sticky top-0 backdrop-blur-xl bg-white/80 z-30">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 sm:px-6 lg:px-8">

<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-xl bg-indigo-500/90 flex items-center justify-center shadow-md shadow-indigo-500/20">
<span className="text-xs font-semibold tracking-tight leading-none text-white">NA</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-slate-900">
                Nova Academy
              </span>
<span className="text-xs text-slate-500">
                School of Excellence
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#about">
              About
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#programs">
              Programs
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#admissions">
              Admissions
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#campus">
              Campus Life
            </a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#contact">
              Contact
            </a>
</nav>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<svg aria-hidden="true" data-height="16" data-icon="lucide:log-in" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10 17l5-5l-5-5m5 5H3m12-9h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              Parent Portal
            </button>
<a className="inline-flex items-center gap-2 rounded-full bg-indigo-500 px-4 sm:px-5 py-2 text-xs font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-400 transition-colors" href="#admissions">
              Apply Now
              <svg aria-hidden="true" data-height="16" data-icon="lucide:arrow-right" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-slate-50 to-indigo-50">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-32 -left-24 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl"></div>
<div className="absolute bottom-[-6rem] right-0 h-72 w-72 rounded-full bg-sky-300/25 blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-[0.7rem] font-medium text-slate-700 mb-4">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                Admissions now open for 2025–2026
              </div>
<h1 className="sm:text-4xl lg:text-5xl sm:mb-5 text-3xl font-semibold text-slate-900 tracking-tight mb-4">
                Inspiring curious minds,
                <span className="text-indigo-500">shaping bright futures.</span>
</h1>
<p className="text-base sm:text-lg text-slate-600 max-w-xl mb-6 sm:mb-8">
                A welcoming K–12 community focused on strong academics, character, and real‑world skills.
              </p>
<div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
<a className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-400 transition-colors" href="#admissions">
                  Start your application
                </a>
<a className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#visit">
<svg aria-hidden="true" data-height="16" data-icon="lucide:map-pin" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                  Book a campus tour
                </a>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs sm:text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="h-7 w-7 rounded-full bg-indigo-500/90 border border-white flex items-center justify-center text-[0.6rem] font-semibold tracking-tight text-white">
                    A1
                  </div>
<div className="h-7 w-7 rounded-full bg-sky-500/90 border border-white flex items-center justify-center text-[0.6rem] font-semibold tracking-tight text-white">
                    B2
                  </div>
<div className="h-7 w-7 rounded-full bg-emerald-500/90 border border-white flex items-center justify-center text-[0.6rem] font-semibold tracking-tight text-white">
                    C3
                  </div>
</div>
<div className="flex-1">
<p className="text-slate-600">
                    97% of graduates accepted into their top-choice next school.
                  </p>
</div>
</div>
</div>

<div className="relative z-10">
<div className="relative rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl shadow-[0_0_80px_rgba(148,163,184,0.3)] p-4 sm:p-6 lg:p-7 flex flex-col gap-5">

<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-slate-800">
                      Nova by the numbers
                    </p>
<p className="text-xs text-slate-500">
                      Small school, big impact.
                    </p>
</div>
<div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-1">
<svg aria-hidden="true" data-height="14" data-icon="lucide:sparkles" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-[0.7rem] font-medium text-emerald-700">
                      Accredited K–12
                    </span>
</div>
</div>

<div className="grid grid-cols-2 gap-3 sm:gap-4">
<div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 sm:p-4">
<p className="text-xs text-slate-500 mb-1">
                      Student–Teacher Ratio
                    </p>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                      12:1
                    </p>
<p className="text-xs text-slate-500">
                      Personalized attention.
                    </p>
</div>
<div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 sm:p-4">
<p className="text-xs text-slate-500 mb-1">
                      Activities &amp; Clubs
                    </p>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-1">
                      30+
                    </p>
<p className="text-xs text-slate-500">
                      Arts, STEM, and more.
                    </p>
</div>
<div className="rounded-2xl bg-gradient-to-br from-indigo-500/80 via-indigo-500/60 to-sky-500/70 border border-indigo-300 p-3 sm:p-4 flex flex-col justify-between text-white">
<div>
<p className="text-xs mb-1">
                        Graduation Success
                      </p>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight mb-1">
                        100%
                      </p>
<p className="text-xs text-indigo-50/90">
                        Every senior graduates.
                      </p>
</div>
<div className="flex items-center gap-2 mt-3">
<svg aria-hidden="true" data-height="18" data-icon="lucide:graduation-cap" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
<p className="text-[0.7rem] text-indigo-50/90">
                        Guided college counseling.
                      </p>
</div>
</div>
<div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 sm:p-4 flex flex-col justify-between">
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">
                        Parent Satisfaction
                      </p>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5">
<svg aria-hidden="true" data-height="12" data-icon="lucide:star" data-inline="false" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-[0.65rem] text-emerald-700">
                          4.9/5
                        </span>
</span>
</div>
<p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mt-1 mb-1">
                      96%
                    </p>
<p className="text-xs text-slate-500">
                      Would recommend Nova.
                    </p>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center gap-3 border-t border-slate-200 pt-3 sm:pt-4">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center">
<svg aria-hidden="true" data-height="16" data-icon="lucide:shield-check" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-800">
                        Safe &amp; inclusive campus
                      </p>
<p className="text-xs text-slate-500">
                        Supportive adults in every space.
                      </p>
</div>
</div>
<div className="flex-1 flex justify-end text-[0.7rem] text-slate-500">
<p>
                      Founded 2003 · K–12 · Day &amp; Extended Care
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
<div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
                  A school where every student is known and supported.
                </h2>
<p className="text-base text-slate-600 mb-4">
                  Nova Academy blends strong academics with a caring community so students can grow with confidence.
                </p>
<p className="text-base text-slate-600 mb-6">
                  From early years to graduation, we focus on curiosity, character, and real‑world readiness.
                </p>
<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 mb-1">
                      Holistic Learning
                    </p>
<p className="text-sm text-slate-800">
                      Academics, arts, athletics, and well‑being.
                    </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 mb-1">
                      Modern Curriculum
                    </p>
<p className="text-sm text-slate-800">
                      STEM, projects, and digital literacy.
                    </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500 mb-1">
                      Global Mindset
                    </p>
<p className="text-sm text-slate-800">
                      Languages and real‑world problem solving.
                    </p>
</div>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-4">
<h3 className="text-sm font-semibold tracking-tight text-slate-900">
                  Our core values
                </h3>
<div className="space-y-3">
<div className="flex gap-3">
<div className="mt-1 text-slate-700">
<svg aria-hidden="true" data-height="16" data-icon="lucide:target" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900">
                        Excellence with balance
                      </p>
<p className="text-sm text-slate-600">
                        High expectations with room to explore and enjoy learning.
                      </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 text-slate-700">
<svg aria-hidden="true" data-height="16" data-icon="lucide:heart-handshake" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900">
                        Respect &amp; empathy
                      </p>
<p className="text-sm text-slate-600">
                        Students learn to listen, collaborate, and lead with care.
                      </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 text-slate-700">
<svg aria-hidden="true" data-height="16" data-icon="lucide:lightbulb" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900">
                        Innovation &amp; creativity
                      </p>
<p className="text-sm text-slate-600">
                        Hands‑on projects build confident problem‑solvers.
                      </p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 text-slate-700">
<svg aria-hidden="true" data-height="16" data-icon="lucide:globe-2" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900">
                        Community &amp; service
                      </p>
<p className="text-sm text-slate-600">
                        Service projects connect learning to impact.
                      </p>
</div>
</div>
</div>
<div className="mt-2 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] text-slate-700">
                    K–5 Elementary
                  </span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] text-slate-700">
                    6–8 Middle School
                  </span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[0.7rem] text-slate-700">
                    9–12 Upper School
                  </span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100" id="programs">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                  Academic programs
                </h2>
<p className="text-base text-slate-600 max-w-xl">
                  Three divisions, one connected journey from kindergarten through graduation.
                </p>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[0.7rem] font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<svg aria-hidden="true" data-height="14" data-icon="lucide:download" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                  Download curriculum
                </button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-5">

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium text-sky-600">
                      Elementary School
                    </p>
<p className="text-xs text-slate-500">
                      K–5 · Strong foundations
                    </p>
</div>
<div className="h-8 w-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
<svg aria-hidden="true" data-height="18" data-icon="lucide:pencil-ruler" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-3">
                  A warm start focused on reading, math, and the joy of discovery.
                </p>
<ul className="text-xs text-slate-600 space-y-1.5 mb-4">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Daily literacy, numeracy, and inquiry‑based science.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Social‑emotional learning in every classroom.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Art, music, PE, and language exposure.
                  </li>
</ul>
<div className="mt-auto">
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-700 hover:text-sky-800 transition-colors">
                    Explore Elementary
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium text-indigo-600">
                      Middle School
                    </p>
<p className="text-xs text-slate-500">
                      6–8 · Identity &amp; challenge
                    </p>
</div>
<div className="h-8 w-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
<svg aria-hidden="true" data-height="18" data-icon="lucide:atom" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9c-4.54-4.52-9.87-6.54-11.9-4.5c-2.04 2.03-.02 7.36 4.5 11.9c4.54 4.52 9.87 6.54 11.9 4.5"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9c-2.03-2.04-7.36-.02-11.9 4.5c-4.52 4.54-6.54 9.87-4.5 11.9c2.03 2.04 7.36.02 11.9-4.5"></path></g></svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-3">
                  A dynamic environment where students stretch, reflect, and take on new responsibilities.
                </p>
<ul className="text-xs text-slate-600 space-y-1.5 mb-4">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    Interdisciplinary projects across subjects.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    Advisory focused on well‑being and leadership.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                    Growing choices in electives, clubs, and sports.
                  </li>
</ul>
<div className="mt-auto">
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 hover:text-indigo-800 transition-colors">
                    Explore Middle School
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col h-full">
<div className="flex items-center justify-between mb-3">
<div>
<p className="text-xs font-medium text-emerald-600">
                      Upper School
                    </p>
<p className="text-xs text-slate-500">
                      9–12 · College &amp; beyond
                    </p>
</div>
<div className="h-8 w-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
<svg aria-hidden="true" data-height="18" data-icon="lucide:layers" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
</div>
<p className="text-sm text-slate-600 mb-3">
                  Deep, challenging coursework plus real‑world experiences.
                </p>
<ul className="text-xs text-slate-600 space-y-1.5 mb-4">
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Honors, advanced courses, and capstone projects.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Internships, service, and community partnerships.
                  </li>
<li className="flex items-start gap-2">
<span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Dedicated college counseling and portfolios.
                  </li>
</ul>
<div className="mt-auto">
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800 transition-colors">
                    Explore Upper School
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:arrow-right" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="campus">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
<div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                  A vibrant campus life beyond the classroom.
                </h2>
<p className="text-base text-slate-600 mb-5">
                  Students explore interests, build friendships, and try new things every day.
                </p>
<div className="grid sm:grid-cols-2 gap-4 mb-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 flex gap-3">
<div className="mt-0.5 text-amber-600">
<svg aria-hidden="true" data-height="18" data-icon="lucide:trophy" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900 mb-1">
                        Athletics &amp; wellness
                      </p>
<p className="text-sm text-slate-600">
                        Competitive teams, intramurals, and fitness programs.
                      </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 flex gap-3">
<div className="mt-0.5 text-pink-500">
<svg aria-hidden="true" data-height="18" data-icon="lucide:palette" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900 mb-1">
                        Arts &amp; expression
                      </p>
<p className="text-sm text-slate-600">
                        Visual arts, theater, music, and digital media.
                      </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 flex gap-3">
<div className="mt-0.5 text-indigo-500">
<svg aria-hidden="true" data-height="18" data-icon="lucide:code-2" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900 mb-1">
                        STEM &amp; clubs
                      </p>
<p className="text-sm text-slate-600">
                        Robotics, coding, debate, and innovation labs.
                      </p>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 flex gap-3">
<div className="mt-0.5 text-emerald-600">
<svg aria-hidden="true" data-height="18" data-icon="lucide:leaf" data-inline="false" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>
<div>
<p className="text-xs font-medium text-slate-900 mb-1">
                        Service &amp; outdoors
                      </p>
<p className="text-sm text-slate-600">
                        Service days, outdoor trips, and nature‑based learning.
                      </p>
</div>
</div>
</div>
<p className="text-xs text-slate-500">
                  Student leadership includes council, peer mentors, club officers, and more.
                </p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium text-slate-900">
                      A day at Nova Academy
                    </p>
<p className="text-xs text-slate-500">
                      Learning, exploring, connecting.
                    </p>
</div>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1">
<svg aria-hidden="true" data-height="14" data-icon="lucide:camera" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
<span className="text-[0.7rem] text-slate-700">
                      Campus highlights
                    </span>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 via-indigo-400/10 to-sky-400/10 border border-indigo-200 aspect-video relative overflow-hidden flex items-end p-3">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.0),_rgba(248,250,252,0.9))]"></div>
<div className="relative">
<p className="text-xs font-medium text-slate-900">
                        Innovation Lab
                      </p>
<p className="text-[0.7rem] text-slate-700">
                        Makerspace, robotics, design thinking.
                      </p>
</div>
</div>
<div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-teal-400/10 border border-emerald-200 aspect-video relative overflow-hidden flex items-end p-3">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba248,250,252,0.0),_rgba(248,250,252,0.9))]"></div>
<div className="relative">
<p className="text-xs font-medium text-slate-900">
                        Athletics Fields
                      </p>
<p className="text-[0.7rem] text-slate-700">
                        Multi‑sport turf and outdoor learning.
                      </p>
</div>
</div>
<div className="rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-400/10 to-pink-400/10 border border-amber-200 aspect-video relative overflow-hidden flex items-end p-3 col-span-2">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.0),_rgba(15,23,42,0.05))]"></div>
<div className="relative flex items-center justify-between w-full gap-3">
<div>
<p className="text-xs font-medium text-slate-900">
                          Performing Arts Center
                        </p>
<p className="text-[0.7rem] text-slate-700">
                          Concerts, plays, and community events.
                        </p>
</div>
<div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-slate-800">
<svg aria-hidden="true" data-height="16" data-icon="lucide:play-circle" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-[0.7rem]">
                          Watch campus video
                        </span>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<p className="text-xs text-slate-600">
                    “Our children are excited to go to school every day.”
                    <span className="text-slate-500">— Nova parent</span>
</p>
<button className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-900 hover:text-slate-700 transition-colors">
                    View events calendar
                    <svg aria-hidden="true" data-height="14" data-icon="lucide:calendar" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100" id="admissions">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
<div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">
                  Admissions &amp; enrollment
                </h2>
<p className="text-base text-slate-600 mb-4">
                  We welcome curious, kind students from many backgrounds. Our team will walk you through each step.
                </p>
<div className="grid sm:grid-cols-3 gap-4 mb-5">
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900 mb-1">
                      Step 1 · Connect
                    </p>
<p className="text-xs text-slate-600">
                      Inquire, attend an info session, or call.
                    </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900 mb-1">
                      Step 2 · Visit
                    </p>
<p className="text-xs text-slate-600">
                      Tour campus and see classes in action.
                    </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<p className="text-xs font-medium text-slate-900 mb-1">
                      Step 3 · Apply
                    </p>
<p className="text-xs text-slate-600">
                      Submit forms, records, and references.
                    </p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3 mb-4">
<a className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 sm:px-6 py-2.5 text-xs sm:text-sm font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-400 transition-colors" href="#contact">
                    Talk to admissions
                  </a>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
<svg aria-hidden="true" data-height="16" data-icon="lucide:file-text" data-inline="false" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
                    Tuition &amp; financial aid
                  </button>
</div>
<p className="text-xs text-slate-500">
                  Nova Academy admits students of any race, color, religion, gender, or national and ethnic origin.
                </p>
</div>

<div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-5" id="visit">
<p className="text-sm font-semibold tracking-tight text-slate-900 mb-1">
                  Request information
                </p>
<p className="text-xs text-slate-500 mb-4">
                  Share a few details and we’ll follow up within two school days.
                </p>
<form className="space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="block text-xs text-slate-700">Parent / Guardian name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Alex Johnson" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs text-slate-700">Email</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1">
<label className="block text-xs text-slate-700">Student name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Student name" type="text"/>
</div>
<div className="space-y-1">
<label className="block text-xs text-slate-700">Applying for grade</label>
<select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
<option className="bg-slate-50">Select grade</option>
<option className="bg-slate-50">Kindergarten</option>
<option className="bg-slate-50">1</option>
<option className="bg-slate-50">2</option>
<option className="bg-slate-50">3</option>
<option className="bg-slate-50">4</option>
<option className="bg-slate-50">5</option>
<option className="bg-slate-50">6</option>
<option className="bg-slate-50">7</option>
<option className="bg-slate-50">8</option>
<option className="bg-slate-50">9</option>
<option className="bg-slate-50">10</option>
<option className="bg-slate-50">11</option>
<option className="bg-slate-50">12</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="block text-xs text-slate-700">How can we help?</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Share any questions or what you’re looking for in a school." rows="3"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<button className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-5 py-2 text-xs font-medium text-white shadow-sm shadow-indigo-500/40 hover:bg-indigo-400 transition-colors w-full sm:w-auto" type="submit">
                      Submit inquiry
                    </button>
<p className="text-[0.65rem] text-slate-500">
                      Your information is used only for admissions communication.
                    </p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white pb-8 pt-10 sm:pt-12" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-3">
<div className="h-8 w-8 rounded-xl bg-indigo-500/90 flex items-center justify-center shadow-md shadow-indigo-500/20">
<span className="text-xs font-semibold tracking-tight leading-none text-white">NA</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-slate-900">
                      Nova Academy
                    </span>
<span className="text-xs text-slate-500">
                      Inspiring Future Leaders
                    </span>
</div>
</div>
<p className="text-sm text-slate-600 mb-3 max-w-md">
                  123 Aurora Lane, Riverwood, State 00000
                </p>
<p className="text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-800">Phone:</span> (000) 555-1234
                </p>
<p className="text-xs text-slate-500 mb-3">
<span className="font-medium text-slate-800">Email:</span> admissions@novaacademy.edu
                </p>
<div className="flex gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.7rem] text-slate-900 hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" data-height="14" data-icon="lucide:map-pin" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                    Get directions
                  </button>
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[0.7rem] text-slate-900 hover:bg-slate-100 transition-colors">
<svg aria-hidden="true" data-height="14" data-icon="lucide:phone" data-inline="false" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Call office
                  </button>
</div>
</div>
<div>
<p className="text-xs font-semibold tracking-tight text-slate-900 mb-2">
                  Quick links
                </p>
<ul className="space-y-1.5 text-xs text-slate-600">
<li><a className="hover:text-slate-900 transition-colors" href="#about">About Nova</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#programs">Academics</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#campus">Campus Life</a></li>
</ul>
</div>
<div>
<p className="text-xs font-semibold tracking-tight text-slate-900 mb-2">
                  Stay informed
                </p>
<p className="text-xs text-slate-600 mb-2">
                  Join our mailing list for news and admissions updates.
                </p>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2">
<input className="w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" type="email"/>
<button className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-3 py-1.5 text-[0.7rem] font-medium text-white hover:bg-indigo-400 transition-colors">
                      Join
                    </button>
</div>
<p className="text-[0.65rem] text-slate-500">
                    You can unsubscribe at any time.
                  </p>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
<p className="text-[0.65rem] text-slate-500">
                © <span id="year">2025</span> Nova Academy. All rights reserved.
              </p>
<div className="flex flex-wrap gap-3 text-[0.65rem] text-slate-500">
<a className="hover:text-slate-700 transition-colors" href="#">Non-discrimination policy</a>
<a className="hover:text-slate-700 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-700 transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
