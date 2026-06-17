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
      


<div className="flex-1 flex flex-col" id="__next">

<div className="min-h-screen flex flex-col bg-white text-neutral-900">

<header className="sticky top-0 z-40 border-b backdrop-blur border-neutral-200 bg-white/80">
<div className="sm:px-6 lg:px-8 flex h-16 max-w-6xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a aria-label="Meddies AI home" className="flex items-center gap-2" href="#hero">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight text-white bg-cyan-600 font-sans" style={{}}>
                MD
              </div>
<span className="text-base sm:text-lg font-semibold tracking-tight text-neutral-900 font-sans" style={{}}>
                Meddies<span className="text-cyan-700 font-sans" style={{}}>AI</span>
</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="transition-colors text-neutral-600 hover:text-neutral-900 font-sans" href="#how-it-works" style={{}}>How it works</a>
<a className="transition-colors text-neutral-600 hover:text-neutral-900 font-sans" href="#features" style={{}}>Features</a>
<a className="transition-colors hover:text-neutral-900 text-neutral-600" href="#use-cases">Use cases</a>
<a className="transition-colors text-neutral-600 hover:text-neutral-900 font-sans" href="#faq" style={{}}>FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center justify-center rounded-full border px-4 py-1.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition focus-visible:ring-cyan-500 border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 font-sans" style={{}}>
                Book a demo
              </button>
<button className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition focus-visible:ring-cyan-500 text-white bg-cyan-600 hover:bg-cyan-700 font-sans" style={{}}>
                Get started
              </button>
</div>
</div>
</header>

<main className="flex-1">

<section className="overflow-hidden relative" id="hero">
<div className="sm:px-6 lg:px-8 sm:py-20 lg:py-24 max-w-6xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-900 font-sans font-bold" style={{}}>
                    Clinical AI that finds the root cause, not just symptoms.
                  </h1>
<p className="text-base sm:text-lg leading-relaxed text-neutral-600 font-sans" style={{}}>
                    Meddies AI reads histories, labs, and notes to surface the most likely underlying causes,
                    helping GPs make faster, safer decisions and patients understand their health stories.
                  </p>
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<button className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition focus-visible:ring-cyan-500 text-white bg-cyan-600 hover:bg-cyan-700 font-sans" style={{}}>
                      Try free demo
                    </button>
<button className="inline-flex items-center justify-center rounded-full border px-6 py-2.5 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition focus-visible:ring-cyan-500 border-neutral-200 text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 font-sans" style={{}}>
                      Talk to clinical team
                    </button>
<p className="text-xs text-neutral-500 sm:ml-2 font-sans" style={{}}>
                      No credit card. HIPAA-ready from day one.
                    </p>
</div>
<div className="flex flex-wrap items-center gap-6 pt-4 border-t mt-4 border-neutral-100">
<div className="flex items-center gap-2">

<svg aria-hidden="true" className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-xs text-neutral-600 font-sans" style={{}}>HIPAA-aligned &amp; privacy-first</span>
</div>
<div className="flex flex-col text-xs text-neutral-500">
<span className="font-medium text-neutral-700 font-sans" style={{}}>
                        Trusted by 2,400+ healthcare professionals
                      </span>
<span className="font-sans" style={{}}>Across primary care clinics, virtual care, and integrative practices.</span>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 rounded-3xl blur-2xl bg-cyan-50/60"></div>
<div className="relative rounded-3xl border shadow-sm p-6 sm:p-8 space-y-6 border-neutral-100 bg-white">
<div className="flex items-center justify-between">
<div>
<p className="text-xs uppercase tracking-wide text-neutral-500 font-sans" style={{}}>Root cause summary</p>
<p className="text-sm font-medium mt-1 text-neutral-900 font-sans" style={{}}>
                          Patient: A. Nguyen · 42 · F
                        </p>
</div>
<span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border bg-cyan-50 text-cyan-700 border-cyan-100 font-sans" style={{}}>
                        Low diagnostic risk
                      </span>
</div>
<div className="space-y-3">
<p className="text-xs font-medium tracking-wide text-neutral-500 uppercase font-sans" style={{}}>
                        Most likely underlying drivers
                      </p>
<div className="space-y-2">
<div className="flex items-start justify-between rounded-2xl border px-3 py-2.5 border-neutral-100 bg-neutral-50/80">
<div className="space-y-1">
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                              Insulin resistance &amp; metabolic overload
                            </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                              Supported by long-standing fatigue, central adiposity, fasting glucose trends and lipid panel pattern.
                            </p>
</div>
<span className="text-xs font-medium text-cyan-700 font-sans" style={{}}>87%</span>
</div>
<div className="flex items-start justify-between rounded-2xl border px-3 py-2.5 border-neutral-100 bg-white">
<div className="space-y-1">
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                              Chronic sleep fragmentation
                            </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                              Fragmented sleep schedule, nocturnal awakenings and morning headaches suggest non-restorative sleep.
                            </p>
</div>
<span className="text-xs font-medium text-cyan-700 font-sans" style={{}}>72%</span>
</div>
<div className="flex items-start justify-between rounded-2xl border px-3 py-2.5 border-neutral-100 bg-white">
<div className="space-y-1">
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                              Subclinical thyroid dysfunction
                            </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                              Symptoms and TSH drift over 24 months warrant repeat labs and autoimmune screening.
                            </p>
</div>
<span className="text-xs font-medium text-cyan-700 font-sans" style={{}}>Consider</span>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-100">
<div className="space-y-1">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide font-sans" style={{}}>
                          Recommended next steps
                        </p>
<ul className="space-y-1 text-xs text-neutral-600">
<li className="font-sans" style={{}}>• Repeat TSH, free T4, anti-TPO</li>
<li className="font-sans" style={{}}>• OGTT with insulin at 0/60/120 min</li>
<li className="font-sans" style={{}}>• 2-week sleep diary + actigraphy</li>
</ul>
</div>
<div className="space-y-1">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide font-sans" style={{}}>
                          Patient-friendly explanation
                        </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                          “Your symptoms likely share a common metabolic and sleep-related origin. Addressing these early may prevent progression to diabetes or cardiovascular disease.”
                        </p>
</div>
</div>
<button className="w-full inline-flex items-center justify-center rounded-2xl border px-4 py-2 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white transition focus-visible:ring-cyan-500 border-neutral-200 text-neutral-900 hover:bg-neutral-50 font-sans" style={{}}>
                      Download clinical PDF
                    </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-neutral-50/60" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl text-neutral-900 font-sans font-bold" style={{}}>
                    From scattered symptoms to clear clinical stories.
                  </h2>
<p className="mt-3 text-sm sm:text-base max-w-xl text-neutral-600 font-sans" style={{}}>
                    Meddies AI quietly works in the background of your consultation, turning structured and unstructured data
                    into prioritized root cause hypotheses you can trust.
                  </p>
</div>
<div className="text-xs sm:text-sm text-neutral-500 max-w-xs font-sans" style={{}}>
                  Built with explainability in mind: every suggestion is traceable back to specific data points and guidelines.
                </div>
</div>
<div className="grid md:grid-cols-3 gap-6 mb-12">

<div className="relative rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M13 4v2a4 4 0 0 1-8 0V4"></path>
<path d="M5 18a6 6 0 0 0 11.6 1.5"></path>
<path d="M4 4h2"></path>
<path d="M8 4h2"></path>
<circle cx="20" cy="10" r="2"></circle>
<path d="M20 12v2a4 4 0 0 1-4 4h-1"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>
                        Step 1
                      </p>
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>Input: Real-world clinical context</p>
</div>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Import EHR notes, labs, vitals, medications, and patient questionnaires. Meddies AI ingests both structured and free text data.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Integrates via FHIR or secure uploads — no workflow disruption.
                  </p>
</div>

<div className="relative rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M10.5 4.5 9 6"></path>
<path d="M13.5 4.5 15 6"></path>
<path d="m9 18-1.5 1.5"></path>
<path d="M15 18l1.5 1.5"></path>
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M7 7h10v10H7z"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>
                        Step 2
                      </p>
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>AI analysis: multi-system reasoning</p>
</div>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Our clinical intelligence engine cross-references patterns against guidelines, cohorts, and longitudinal trajectories to rank likely root causes.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Every suggestion includes confidence scores and supporting evidence.
                  </p>
</div>

<div className="relative rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5Z"></path>
<path d="M5 3v4"></path>
<path d="M3 5h4"></path>
<path d="M19 17v4"></path>
<path d="M17 19h4"></path>
</svg>
</div>
<div>
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>
                        Step 3
                      </p>
<p className="text-sm font-medium text-neutral-900 font-sans" style={{}}>Insights: clear for GPs and patients</p>
</div>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Receive concise, clinically oriented summaries plus patient-friendly explanations and suggested next steps you can edit in seconds.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Export to notes, referrals, or secure patient messaging in one click.
                  </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-2xl border p-5 border-neutral-200 bg-white">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 mb-2 font-sans" style={{}}>
                    Traditional approach
                  </p>
<h3 className="text-sm font-medium mb-3 text-neutral-900 font-sans" style={{}}>
                    Symptom-by-symptom treatment
                  </h3>
<ul className="space-y-2 text-sm text-neutral-600">
<li className="font-sans" style={{}}>• Fragmented view across visits and providers.</li>
<li className="font-sans" style={{}}>• Short appointments leave little time for pattern recognition.</li>
<li className="font-sans" style={{}}>• Difficult to synthesize labs, imaging, and narratives at scale.</li>
</ul>
</div>
<div className="rounded-2xl border p-5 border-cyan-200 bg-cyan-50">
<p className="text-xs font-medium uppercase tracking-wide mb-2 text-cyan-700 font-sans" style={{}}>
                    With Meddies AI
                  </p>
<h3 className="text-sm font-medium mb-3 text-cyan-900 font-sans" style={{}}>
                    Root cause–oriented care
                  </h3>
<ul className="space-y-2 text-sm text-cyan-900/80">
<li className="font-sans" style={{}}>• Synthesizes years of data into a single clinical narrative.</li>
<li className="font-sans" style={{}}>• Flags underlying drivers before they fully manifest.</li>
<li className="font-sans" style={{}}>• Surfaces guideline-aligned next steps for you to confirm.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-white" id="features">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl sm:text-3xl text-neutral-900 font-sans font-bold" style={{}}>
                    Designed for the exam room, not the lab.
                  </h2>
<p className="mt-3 text-sm sm:text-base max-w-xl text-neutral-600 font-sans" style={{}}>
                    Meddies AI combines clinical-grade reasoning with a gentle patient voice, so you can stay fully present while getting a second set of eyes.
                  </p>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<line x1="10" x2="14" y1="2" y2="2"></line>
<line x1="12" x2="15" y1="14" y2="11"></line>
<circle cx="12" cy="14" r="8"></circle>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      30-second analysis
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    From chart open to insight in under 30 seconds, even with years of history and complex lab panels.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Optimized for live consults, not after-hours admin.
                  </p>
</article>
<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 6v12"></path>
<path d="M16.5 8.5 18 10l2.5-2.5"></path>
<path d="M20 15.5 18.5 17 17 15.5"></path>
<path d="M4 19a2 2 0 0 1 2-2h5"></path>
<path d="M4 5a2 2 0 0 1 2 2h5"></path>
<path d="M20 19a2 2 0 0 0-2-2h-5"></path>
<path d="M20 5a2 2 0 0 0-2 2h-5"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Evidence-based insights
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Grounded in published guidelines, population data, and clinician-reviewed rulesets, with clear citations.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    You stay the decision-maker; Meddies stays the assistant.
                  </p>
</article>
<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      GP-focused, not generic AI
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Built with general practitioners, for general practitioners—covering the messy reality of primary care, not just textbook cases.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Supports chronic, multi-system, and undifferentiated presentations.
                  </p>
</article>
<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></path>
<path d="M14 2v6h6"></path>
<path d="M10 9h4"></path>
<path d="M10 13h4"></path>
<path d="M10 17h4"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Patient-friendly reports
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Automatically generate lay-language summaries and visuals you can share in-visit or via portal to strengthen understanding and adherence.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Tailored to reading level and language preferences.
                  </p>
</article>
<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="11" rx="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Privacy-first by design
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Built to align with HIPAA and GDPR: encrypted in transit and at rest, with audit trails and role-based access.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Your data never trains third-party models without explicit agreements.
                  </p>
</article>
<article className="rounded-2xl border p-5 flex flex-col gap-3 border-neutral-200 bg-white">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full flex items-center justify-center border bg-cyan-50 border-cyan-100">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="5" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="16"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
<path d="M7 8v4h10V8"></path>
<path d="M7 16v-4"></path>
<path d="M17 16v-4"></path>
</svg>
</div>
<h3 className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Fits existing workflows
                    </h3>
</div>
<p className="text-sm text-neutral-600 font-sans" style={{}}>
                    Use Meddies AI inside your existing EHR or as a standalone web app, with SSO and granular admin controls.
                  </p>
<p className="text-xs text-neutral-500 font-sans" style={{}}>
                    Minimal IT lift, fully managed cloud deployment.
                  </p>
</article>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-neutral-50/70">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl text-neutral-900 font-sans font-bold" style={{}}>
                    Trusted in clinics that put relationships first.
                  </h2>
<p className="mt-3 text-sm sm:text-base max-w-xl text-neutral-600 font-sans" style={{}}>
                    Meddies AI supports thousands of decisions a day across primary care, direct care, and virtual-first practices.
                  </p>
</div>
</div>

<div className="grid sm:grid-cols-3 gap-6 mb-10">
<div className="rounded-2xl border p-4 border-neutral-200 bg-white">
<p className="text-2xl text-neutral-900 font-sans font-bold" style={{}}>
                    10,000+
                  </p>
<p className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>
                    complex cases analyzed across cardiometabolic, endocrine, and multi-system conditions.
                  </p>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-white">
<p className="text-2xl text-neutral-900 font-sans font-bold" style={{}}>
                    95%
                  </p>
<p className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>
                    of clinicians report improved clarity on likely underlying drivers at the point of care.
                  </p>
</div>
<div className="rounded-2xl border p-4 border-neutral-200 bg-white">
<p className="text-2xl text-neutral-900 font-sans font-bold" style={{}}>
                    &lt; 30 sec
                  </p>
<p className="text-xs text-neutral-500 mt-1 font-sans" style={{}}>
                    median time to first insight, even with multi-year patient histories.
                  </p>
</div>
</div>

<div className="mb-10">
<p className="text-xs uppercase tracking-wide text-neutral-500 mb-4 font-sans" style={{}}>
                  Trusted by forward-thinking care organizations
                </p>
<div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500">
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-neutral-700 font-sans" style={{}}>CL</span>
<span className="font-sans" style={{}}>Clarity Health Collective</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-neutral-700 font-sans" style={{}}>NW</span>
<span className="font-sans" style={{}}>Northwind Primary Care</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-neutral-700 font-sans" style={{}}>VR</span>
<span className="font-sans" style={{}}>Veridian Virtual Clinics</span>
</div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium tracking-tight text-neutral-700 font-sans" style={{}}>OM</span>
<span className="font-sans" style={{}}>Oakbridge Medical Group</span>
</div>
</div>
</div>

<div className="rounded-3xl border p-5 sm:p-6 border-neutral-200 bg-white">
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
<div className="space-y-3 max-w-xl">
<p className="text-xs font-medium uppercase tracking-wide text-cyan-700 font-sans" style={{}}>
                      Clinician perspective
                    </p>
<p className="text-sm sm:text-base leading-relaxed text-neutral-900 font-sans" style={{}}>
                      “Meddies doesn’t replace my judgment—it clears the fog. It surfaces patterns I might have otherwise chased across three different systems, and it explains them in a way my patients can actually act on.”
                    </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                      Dr. Maya Torres · GP &amp; Medical Director, Northwind Primary Care
                    </p>
</div>
<div className="space-y-3 max-w-xs">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>
                      Patient outcome snapshot
                    </p>
<p className="text-xs text-neutral-600 font-sans" style={{}}>
                      In a cohort of 250 high-utilization patients, clinics using Meddies AI saw a 21% reduction in repeat visits for the same unresolved concern within 90 days.
                    </p>
<p className="text-[11px] text-neutral-400 font-sans" style={{}}>
                      Internal analysis, 2024–2025. Results may vary by clinic context.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-white" id="use-cases">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div className="">
<h2 className="text-2xl sm:text-3xl text-neutral-900 font-sans font-bold" style={{}}>
                    Built for both GPs and patients.
                  </h2>
<p className="mt-3 text-sm sm:text-base max-w-xl text-neutral-600 font-sans" style={{}}>
                    Whether you’re running a busy clinic or advocating for your own health, Meddies AI keeps everyone aligned around the same story.
                  </p>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="rounded-2xl border p-5 border-neutral-200 bg-neutral-50/70">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M13 4v2a4 4 0 0 1-8 0V4"></path>
<path d="M5 18a6 6 0 0 0 11.6 1.5"></path>
<path d="M4 4h2"></path>
<path d="M8 4h2"></path>
<circle cx="20" cy="10" r="2"></circle>
<path d="M20 12v2a4 4 0 0 1-4 4h-1"></path>
</svg>
<p className="text-xs font-medium uppercase tracking-wide text-neutral-600 font-sans" style={{}}>
                        For General Practitioners
                      </p>
</div>
</div>
<ul className="space-y-2 text-sm text-neutral-700">
<li className="font-sans" style={{}}>• Arrive at likely root causes faster, without scrolling through dozens of tabs.</li>
<li className="font-sans" style={{}}>• See a single narrative that ties together multi-year labs, imaging, and symptoms.</li>
<li className="font-sans" style={{}}>• Reduce “note bloat” with concise, structured summaries ready for your signature.</li>
</ul>
<p className="mt-3 text-xs text-neutral-500 font-sans" style={{}}>
                    Ideal for primary care, internal medicine, integrative and functional practices.
                  </p>
</div>

<div className="rounded-2xl border p-5 border-neutral-200 bg-white">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">

<svg aria-hidden="true" className="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 21s-6.7-4.3-9.1-7.2A5.4 5.4 0 0 1 4.6 4 5.4 5.4 0 0 1 12 6.1 5.4 5.4 0 0 1 19.4 4a5.4 5.4 0 0 1 1.7 9.8C18.7 16.7 12 21 12 21Z"></path>
<path d="M3.5 13 9 11l2.2 2.5L15 10l5.5 3"></path>
</svg>
<p className="text-xs font-medium uppercase tracking-wide text-neutral-600 font-sans" style={{}}>
                        For Patients
                      </p>
</div>
</div>
<ul className="space-y-2 text-sm text-neutral-700">
<li className="font-sans" style={{}}>• Turn confusing lab values and jargon into calm, clear explanations.</li>
<li className="font-sans" style={{}}>• Understand how sleep, stress, nutrition, and medications may interact.</li>
<li className="font-sans" style={{}}>• Arrive at appointments with a structured story of your symptoms and goals.</li>
</ul>
<p className="mt-3 text-xs text-neutral-500 font-sans" style={{}}>
                    Meddies AI supports your clinician; it does not replace personalized medical advice.
                  </p>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-neutral-50/70" id="faq">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div className="">
<h2 className="text-2xl sm:text-3xl text-neutral-900 font-sans font-bold" style={{}}>
                    Questions, answered clearly.
                  </h2>
<p className="mt-3 text-sm sm:text-base max-w-xl text-neutral-600 font-sans" style={{}}>
                    Meddies AI is designed to be clinically conservative, transparent, and easy to introduce to both clinicians and patients.
                  </p>
</div>
</div>

<div className="space-y-3">

<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      How accurate is Meddies AI at identifying root causes?
                    </span>
<span className="ml-3 flex-shrink-0">

<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    In retrospective validation on de-identified cases labeled by specialist panels, Meddies AI’s top three root cause hypotheses aligned with expert consensus in over 95% of cases. In practice, accuracy depends on data completeness and clinician oversight, which is why we design the system to support—not replace—your clinical judgment.
                  </div>
</details>
<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Is Meddies AI safe to use with real patient data?
                    </span>
<span className="ml-3 flex-shrink-0">
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    Yes. Meddies AI is engineered to support HIPAA-aligned deployments, with encryption in transit and at rest, strict access controls, and robust audit logging. We sign Business Associate Agreements (BAAs) with eligible organizations and never use your PHI to train third-party models without explicit contracts.
                  </div>
</details>
<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Does Meddies AI replace my medical judgment?
                    </span>
<span className="ml-3 flex-shrink-0">
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    No. Meddies AI is an assistive tool that surfaces patterns, potential root causes, and structured language. Final diagnoses and treatment decisions always remain with licensed clinicians, and the interface is designed to keep that role distinction explicit.
                  </div>
</details>
<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      How does Meddies AI integrate with my existing EHR?
                    </span>
<span className="ml-3 flex-shrink-0">
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    We offer FHIR-based integrations, secure file import, and a standalone web experience. Our team works with your IT and compliance stakeholders to choose the safest, simplest integration path for your environment.
                  </div>
</details>
<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      Can patients use Meddies AI directly?
                    </span>
<span className="ml-3 flex-shrink-0">
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    Patients can complete structured questionnaires and receive educational summaries when invited by their clinician or clinic. Meddies AI does not offer independent diagnoses or treatment plans to patients without clinician involvement.
                  </div>
</details>
<details className="group rounded-2xl border px-4 py-3 border-neutral-200 bg-white">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-neutral-900 font-sans" style={{}}>
                      What does implementation look like for my clinic?
                    </span>
<span className="ml-3 flex-shrink-0">
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 group-open:hidden" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 5v14"></path>
<path d="M5 12h14"></path>
</svg>
<svg aria-hidden="true" className="w-4 h-4 text-slate-500 hidden group-open:block" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M5 12h14"></path>
</svg>
</span>
</summary>
<div className="mt-2 text-sm text-neutral-600 font-sans" style={{}}>
                    Most clinics are up and running within 2–4 weeks. We provide onboarding for clinicians and staff, security and compliance documentation, and optional pilot support with shared success metrics.
                  </div>
</details>
</div>
</div>
</section>

<section className="border-t border-neutral-100 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="rounded-3xl border px-5 py-6 sm:px-8 sm:py-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between border-neutral-200 bg-neutral-50/70">
<div className="space-y-3 max-w-xl">
<h2 className="text-xl sm:text-2xl text-neutral-900 font-sans font-bold" style={{}}>
                    See Meddies AI on your own patient stories.
                  </h2>
<p className="text-sm sm:text-base text-neutral-600 font-sans" style={{}}>
                    Share a de-identified case, and our clinical team will walk you through how Meddies surfaces likely root causes and next steps in under 15 minutes.
                  </p>
</div>
<form aria-label="Join Meddies AI waitlist" className="w-full md:max-w-sm space-y-3">
<div className="space-y-1">
<label className="block text-xs font-medium text-neutral-700 font-sans" htmlFor="email" style={{}}>
                      Work email
                    </label>
<input aria-describedby="email-help" className="block w-full rounded-full border px-4 py-2 text-sm placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 focus-visible:ring-cyan-500 border-neutral-200 bg-white text-neutral-900" id="email" placeholder="you@clinic.org" required="" type="email"/>
<p className="text-[11px] text-neutral-500 font-sans" id="email-help" style={{}}>
                      We’ll only use this to coordinate a demo. No spam, ever.
                    </p>
</div>
<button className="w-full inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 transition focus-visible:ring-cyan-500 text-white bg-cyan-600 hover:bg-cyan-700 font-sans" style={{}} type="submit">
                    Request clinical walkthrough
                  </button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 bg-neutral-50/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-1 space-y-3">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md flex items-center justify-center text-xs font-semibold tracking-tight text-white bg-cyan-600 font-sans" style={{}}>
                    MD
                  </div>
<span className="text-base font-semibold tracking-tight text-neutral-900 font-sans" style={{}}>
                    Meddies<span className="text-cyan-700 font-sans" style={{}}>AI</span>
</span>
</div>
<p className="text-xs max-w-xs text-neutral-600 font-sans" style={{}}>
                  Clinical intelligence that helps you and your patients understand the deeper story behind each symptom.
                </p>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>Company</p>
<ul className="space-y-1 text-xs text-neutral-600">
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>About</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Clinical advisory board</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Careers</a></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>Resources</p>
<ul className="space-y-1 text-xs text-neutral-600">
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Security &amp; compliance</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Product overview</a></li>
<li><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Implementation guide</a></li>
</ul>
</div>
<div className="space-y-2">
<p className="text-xs font-medium uppercase tracking-wide text-neutral-500 font-sans" style={{}}>Legal</p>
<ul className="space-y-1 text-xs text-neutral-600">
<li className=""><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Privacy notice</a></li>
<li className=""><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Terms of use</a></li>
<li className=""><a className="hover:text-neutral-900 font-sans" href="#" style={{}}>Data processing</a></li>
</ul>
</div>
</div>
<div className="mt-6 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-neutral-200">
<p className="text-[11px] text-neutral-500 font-sans" style={{}}>
                © <span className="font-sans" style={{}}>2025</span> Meddies AI. All rights reserved. Not a substitute for professional medical advice, diagnosis, or treatment.
              </p>
<div className="flex items-center gap-3">

<a className="p-1.5 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 border-neutral-200 hover:border-neutral-300 hover:bg-white" href="#">

<svg aria-hidden="true" className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M18 4h-3l-3 7-4-4-4 13h19z"></path>
</svg>
<span className="sr-only font-sans" style={{}}>Follow on X</span>
</a>
<a className="p-1.5 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 border-neutral-200 hover:border-neutral-300 hover:bg-white" href="#">

<svg aria-hidden="true" className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
<span className="sr-only font-sans" style={{}}>Connect on LinkedIn</span>
</a>
<a className="p-1.5 rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cyan-500 border-neutral-200 hover:border-neutral-300 hover:bg-white" href="#">

<svg aria-hidden="true" className="w-3.5 h-3.5 text-slate-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
<span className="sr-only font-sans" style={{}}>Contact support</span>
</a>
</div>
</div>
</div>
</footer>
</div>
</div>

    </>
  );
}
