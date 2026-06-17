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
      
<div className="w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-10">
<div className="flex flex-col gap-10 bg-slate-900/80 border border-slate-800 rounded-2xl shadow-xl shadow-black/40 backdrop-blur">

<header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800/70 p-4 sm:p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-xs font-semibold tracking-tight text-slate-950">
              NO
            </div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-400 uppercase">
                NovaOrbit Studio
              </p>
<p className="text-sm text-slate-500">
                Product design &amp; AI‑powered development agency.
              </p>
</div>
</div>
<nav className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
<a className="hover:text-sky-400 transition-colors" href="#services">Services</a>
<a className="hover:text-sky-400 transition-colors" href="#about">About</a>
<a className="hover:text-sky-400 transition-colors" href="#work">Work</a>
<a className="hover:text-sky-400 transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-sky-400 transition-colors" href="#faq">FAQ</a>
<a className="rounded-xl border border-sky-500/70 bg-sky-500/10 text-sky-300 px-3 py-1.5 hover:bg-sky-500/20 transition-colors text-xs font-medium tracking-tight" href="#contact">
              Book a call
            </a>
</nav>
</header>

<section className="relative overflow-hidden" id="hero">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-indigo-500/10 pointer-events-none"></div>
<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 p-4 sm:p-6 lg:p-8 items-center">

<div className="lg:col-span-7 flex flex-col gap-5">
<div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/70 text-xs text-sky-200 px-3 py-1 w-max">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Premium digital products, shipped in weeks — not months.</span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
                We design, build, and launch <span className="text-sky-400">conversion‑ready</span> digital products.
              </h1>
<p className="text-lg text-slate-300 max-w-xl">
                NovaOrbit Studio helps SaaS, fintech, and modern brands ship beautiful, fast, and reliable products with AI‑assisted workflows and world‑class execution.
              </p>
<div className="flex flex-wrap items-center gap-3 mt-2">
<a className="inline-flex items-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-medium tracking-tight text-slate-950 px-4 py-2.5 transition-colors" href="#contact">
<span>Schedule a strategy call</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 text-sm font-medium tracking-tight text-slate-100 px-4 py-2.5 hover:border-sky-400/70 hover:text-sky-200 transition-colors" href="#work">
<span>View recent work</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17 17 7"></path>
<path d="M7 7h10v10"></path>
</svg>
</a>
</div>
<div className="flex flex-wrap gap-6 mt-4 text-sm text-slate-400">
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">Trusted by</p>
<p className="mt-1 text-slate-200">40+ funded startups</p>
</div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">Average ROI</p>
<p className="mt-1 text-slate-200">3.4× in 6 months</p>
</div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">Delivery</p>
<p className="mt-1 text-slate-200">&lt; 6 weeks to launch</p>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 overflow-hidden">
<div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-sky-500/30 blur-3xl"></div>
<div className="absolute bottom-0 -left-10 h-32 w-32 rounded-full bg-indigo-500/30 blur-3xl"></div>
<div className="relative space-y-4">
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">
                    Live product overview
                  </p>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 space-y-3">
<div className="flex items-center justify-between">
<p className="text-xs text-slate-400">Conversion uplift</p>
<p className="text-sm text-emerald-400">+42%</p>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"></div>
</div>
<div className="grid grid-cols-3 gap-3 mt-2">
<div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
<p className="text-xs text-slate-400">Launch time</p>
<p className="text-sm text-slate-100 mt-1">5.8 weeks</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
<p className="text-xs text-slate-400">NPS</p>
<p className="text-sm text-slate-100 mt-1">71</p>
</div>
<div className="rounded-lg border border-slate-800 bg-slate-900/70 p-2">
<p className="text-xs text-slate-400">Churn</p>
<p className="text-sm text-emerald-400 mt-1">‑19%</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
<p className="text-xs text-slate-400 mb-1">AI‑assisted UX flows</p>
<p className="text-sm text-slate-100">
                        Smart, tested user journeys that reduce friction at every step.
                      </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900/70 p-3">
<p className="text-xs text-slate-400 mb-1">Modern dev stack</p>
<p className="text-sm text-slate-100">
                        Performant, secure frontends engineered for scale from day one.
                      </p>
</div>
</div>
<p className="text-xs text-slate-500">
                    All visuals are representative mocks generated with royalty‑free assets.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="features">
<div className="flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                  Capabilities
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mt-1">
                  Everything you need to ship a premium product.
                </h2>
<p className="text-lg text-slate-300 mt-2 max-w-2xl">
                  From first sketch to live deployment, we help you design, build, and iterate on digital experiences that customers love.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="7" rx="1" width="7" x="3" y="14"></rect>
<rect height="7" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Product strategy &amp; UX architecture
                </h3>
<p className="text-base text-slate-300">
                  Clarify your product vision, map critical user journeys, and define the roadmap that keeps your team aligned.
                </p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="m8 21 4-4 4 4"></path>
<path d="M18.5 12 19 7l-4-.5"></path>
<path d="m5.5 12-.5-5 4-.5"></path>
<circle cx="12" cy="11" r="2"></circle>
<path d="M9 4V2h6v2"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Premium UI &amp; visual identity
                </h3>
<p className="text-base text-slate-300">
                  Modern, minimal interfaces with a consistent design system so every screen feels cohesive and on‑brand.
                </p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
<path d="m13 2-2 20"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Frontend engineering &amp; integrations
                </h3>
<p className="text-base text-slate-300">
                  High‑performance, responsive frontends with clean code, analytics, and third‑party integrations built in.
                </p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3a3 3 0 0 0-3 3 3 3 0 0 0-3 3c0 1 .5 1.9 1.3 2.4A3.5 3.5 0 0 0 4 15a3 3 0 0 0 3 3 2.5 2.5 0 0 0 4 1.5"></path>
<path d="M15 3a3 3 0 0 1 3 3 3 3 0 0 1 3 3c0 1-.5 1.9-1.3 2.4.2.5.3 1 .3 1.6a3 3 0 0 1-3 3 2.5 2.5 0 0 1-4 1.5"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  AI‑powered workflows
                </h3>
<p className="text-base text-slate-300">
                  We embed AI into research, UX, and development to shorten cycles while maintaining quality and control.
                </p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Experimentation &amp; CRO
                </h3>
<p className="text-base text-slate-300">
                  Data‑driven A/B tests, heatmaps, and funnel analysis that continuously optimize activation and retention.
                </p>
</div>

<div className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-300">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Embedded product teams
                </h3>
<p className="text-base text-slate-300">
                  Designers and engineers who work like an internal team—async‑first, transparent, and outcome‑driven.
                </p>
</div>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 space-y-4">
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                About us
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                A small, senior team obsessed with outcomes—not deliverables.
              </h2>
<p className="text-lg text-slate-300">
                NovaOrbit Studio was founded by product leaders and engineers who have shipped at scale in SaaS, fintech, and developer‑tools companies.
              </p>
<p className="text-base text-slate-300">
                We partner with founders, marketing leaders, and product teams to create interfaces that feel effortless, differentiate your brand, and move key metrics.
              </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">
                    Mission
                  </p>
<p className="text-base text-slate-100 mt-1">
                    Help modern teams launch confident, fast digital experiences that feel premium on every device.
                  </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase">
                    Vision
                  </p>
<p className="text-base text-slate-100 mt-1">
                    A world where thoughtful product design and engineering are accessible to every ambitious company.
                  </p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative rounded-2xl border border-slate-800 bg-slate-900/70 p-4 sm:p-5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-indigo-500/30"></div>
<div className="relative space-y-4">
<div className="flex items-center justify-between gap-2">
<p className="text-xs font-medium tracking-tight text-slate-300 uppercase">
                      Studio snapshot
                    </p>
<p className="text-xs text-slate-400">
                      Remote‑first • Europe &amp; US
                    </p>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
<p className="text-xs text-slate-400">Projects shipped</p>
<p className="text-lg font-semibold tracking-tight text-slate-50 mt-1">
                        120+
                      </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
<p className="text-xs text-slate-400">Avg. engagement</p>
<p className="text-lg font-semibold tracking-tight text-slate-50 mt-1">
                        10 weeks
                      </p>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
<p className="text-xs text-slate-400">Repeat clients</p>
<p className="text-lg font-semibold tracking-tight text-emerald-400 mt-1">
                        87%
                      </p>
</div>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-sky-500/30 flex items-center justify-center text-xs font-medium tracking-tight text-sky-50">
                      NO
                    </div>
<div className="flex-1">
<p className="text-xs text-slate-400">
                        “We treat every engagement like a long‑term partnership, not a one‑off project.”
                      </p>
<p className="text-xs text-slate-500 mt-1">
                        — NovaOrbit Studio founders
                      </p>
</div>
</div>
<p className="text-xs text-slate-500">
                    Image generated with royalty‑free visuals and anonymized metrics from past projects.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="services">
<div className="flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                  Services
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mt-1">
                  Flexible engagement models built for momentum.
                </h2>
<p className="text-lg text-slate-300 mt-2 max-w-2xl">
                  Choose the format that best matches your stage, from a focused sprint to an embedded product team.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5" id="work">

<article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
<div className="relative h-32 sm:h-36 bg-gradient-to-br from-sky-500/40 via-slate-900 to-indigo-500/40">
<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center opacity-40"></div>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                      Launch Sprint
                    </h3>
<span className="text-xs text-slate-400">4–6 weeks</span>
</div>
<p className="text-base text-slate-300">
                    A focused sprint to design and build a conversion‑ready marketing site or MVP that validates your idea.
                  </p>
<ul className="mt-1 space-y-1.5 text-sm text-slate-400">
<li>• Strategy workshop &amp; UX architecture</li>
<li>• Visual design &amp; responsive implementation</li>
<li>• Analytics, SEO, and basic integrations</li>
</ul>
<div className="flex items-center justify-between mt-2">
<p className="text-sm text-slate-200">
                      Starting at <span className="font-medium tracking-tight text-slate-50">$8.5k</span>
</p>
<a className="text-xs font-medium tracking-tight text-sky-300 hover:text-sky-200" href="#contact">
                      Book this sprint →
                    </a>
</div>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-sky-500/50 bg-slate-900/70 overflow-hidden">
<div className="relative h-32 sm:h-36 bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-400">
<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center opacity-40"></div>
<div className="absolute top-3 left-3 rounded-full bg-slate-950/70 border border-sky-300/50 px-2 py-0.5 text-[0.65rem] text-sky-100 tracking-tight">
                    Most popular
                  </div>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                      Product Partner
                    </h3>
<span className="text-xs text-slate-200">8–12 weeks</span>
</div>
<p className="text-base text-slate-100">
                    A cross‑functional team to own design and frontend development for your core product or key initiative.
                  </p>
<ul className="mt-1 space-y-1.5 text-sm text-slate-200">
<li>• UX, UI, design systems, and prototyping</li>
<li>• Production‑ready frontend &amp; integrations</li>
<li>• Iterative experiments and performance checks</li>
</ul>
<div className="flex items-center justify-between mt-2">
<p className="text-sm text-slate-200">
                      Starting at <span className="font-medium tracking-tight text-slate-50">$18k</span>
</p>
<a className="text-xs font-medium tracking-tight text-sky-50 hover:text-white" href="#contact">
                      Discuss scope →
                    </a>
</div>
</div>
</article>

<article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
<div className="relative h-32 sm:h-36 bg-gradient-to-br from-emerald-500/40 via-slate-900 to-sky-500/40">
<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center opacity-40"></div>
</div>
<div className="p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                      Embedded Support
                    </h3>
<span className="text-xs text-slate-400">3+ months</span>
</div>
<p className="text-base text-slate-300">
                    An ongoing partnership where we join your roadmap and handle design, UX, and frontend delivery.
                  </p>
<ul className="mt-1 space-y-1.5 text-sm text-slate-400">
<li>• Dedicated product designer &amp; engineer</li>
<li>• Backlog grooming and design QA</li>
<li>• Monthly reporting and roadmap reviews</li>
</ul>
<div className="flex items-center justify-between mt-2">
<p className="text-sm text-slate-200">
                      Retainers from <span className="font-medium tracking-tight text-slate-50">$6k / mo</span>
</p>
<a className="text-xs font-medium tracking-tight text-sky-300 hover:text-sky-200" href="#contact">
                      Explore retainers →
                    </a>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="testimonials">
<div className="flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                  Testimonials
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mt-1">
                  Teams stay with us because results compound.
                </h2>
<p className="text-lg text-slate-300 mt-2 max-w-2xl">
                  Our clients are founders and marketing leaders who need a partner that understands both craft and growth.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-[url('https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center"></div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-50">
                        Lena Ortiz
                      </p>
<p className="text-xs text-slate-400">
                        VP Product, Fluxwave
                      </p>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-300">

<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2"></polygon>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2"></polygon>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2"></polygon>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2"></polygon>
</svg>
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.8 5.5 21 7.5 13.5 2 9 9 9 12 2"></polygon>
</svg>
</div>
</div>
<p className="text-base text-slate-200">
                  “We shipped a new onboarding in six weeks that lifted activation by 38%. NovaOrbit felt like part of our internal team from day one.”
                </p>
<p className="text-xs text-slate-500">
                  Project: Product onboarding redesign &amp; frontend implementation.
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-[url('https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center"></div>
<div>
<p className="text-sm font-medium tracking-tight text-slate50">
                        Aaron Patel
                      </p>
<p className="text-xs text-slate-400">
                        Founder, Northstack
                      </p>
</div>
</div>
<div className="flex items-center gap-1 text-amber-300 text-xs">
<span>5.0</span>
</div>
</div>
<p className="text-base text-slate-200">
                  “They translated a vague idea into a concrete launch plan, brand, and site that investors still mention on calls.”
                </p>
<p className="text-xs text-slate-500">
                  Project: Brand refresh, marketing site, and pitch materials.
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-[url('https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1200')] bg-cover bg-center"></div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-50">
                        Mia Zhang
                      </p>
<p className="text-xs text-slate-400">
                        CMO, HelioPay
                      </p>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-300">
<span className="text-xs">★★★★★</span>
</div>
</div>
<p className="text-base text-slate-200">
                  “Their attention to detail in both copy and UI gave us a site that finally matches the quality of our product.”
                </p>
<p className="text-xs text-slate-500">
                  Project: Conversion copy, web design, and frontend build.
                </p>
</div>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="why">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5 space-y-4">
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                Why choose us
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Focused, senior, and obsessed with business impact.
              </h2>
<p className="text-lg text-slate-300">
                We limit the number of active clients so every engagement gets a dedicated, experienced team.
              </p>
<a className="inline-flex items-center gap-2 rounded-xl bg-slate-50 text-slate-950 text-sm font-medium tracking-tight px-4 py-2.5 hover:bg-slate-200 transition-colors" href="#contact">
                Talk to the founders directly
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-300 mb-2">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8"></circle>
<circle cx="12" cy="12" r="3"></circle>
<path d="m6 6 2 2"></path>
<path d="m18 6-2 2"></path>
<path d="m6 18 2-2"></path>
<path d="m18 18-2-2"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Business‑first approach
                </h3>
<p className="text-base text-slate-300 mt-1">
                  We start with metrics and constraints, then design and build only what moves the needle.
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-2">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s7-3 7-10V5l-7-3-7 3v7c0 7 7 10 7 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Senior operators only
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Every project is led by senior designers and engineers with experience at high‑growth companies.
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300 mb-2">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5 9 12"></path>
<path d="m15 9 4.5-4.5"></path>
<path d="M10 12 8 20l4-2 2 2 2-8"></path>
<path d="M4 4 9 9"></path>
<path d="M12 6h.01"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Fast, predictable delivery
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Weekly check‑ins, transparent timelines, and no surprises—just consistent progress.
                </p>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<div className="h-8 w-8 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-300 mb-2">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-4 4"></path>
</svg>
</div>
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Clear ROI tracking
                </h3>
<p className="text-base text-slate-300 mt-1">
                  We tie our work to activation, retention, and revenue so impact is always measurable.
                </p>
</div>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="contact">
<div className="rounded-2xl border border-sky-500/40 bg-gradient-to-br from-sky-950 via-slate-950 to-slate-900 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-6 space-y-4">
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                Work with us
              </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                Ready to launch or refresh your product experience?
              </h2>
<p className="text-lg text-slate-200">
                Share a bit about your company, timeline, and goals. We will reply within one business day with next steps and a suggested starting point.
              </p>
<ul className="text-sm text-slate-300 space-y-1.5 mt-2">
<li>• Free, no‑pressure 30‑minute strategy call</li>
<li>• Clear scope, timing, and pricing outline</li>
<li>• Actionable recommendations—even if we do not work together</li>
</ul>
</div>

<div className="lg:col-span-6">
<form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 sm:p-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="name">Full name</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 placeholder:text-slate-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="name" placeholder="Alex Rivera" type="text"/>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="email">Work email</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 placeholder:text-slate-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="email" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="company">Company</label>
<input className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 placeholder:text-slate-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="company" placeholder="Company name" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="budget">Rough budget</label>
<select className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="budget">
<option className="bg-slate-900">Select range</option>
<option className="bg-slate-900">$5k – $10k</option>
<option className="bg-slate-900">$10k – $25k</option>
<option className="bg-slate-900">$25k – $50k</option>
<option className="bg-slate-900">$50k+</option>
</select>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="timeline">Ideal timeline</label>
<select className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="timeline">
<option className="bg-slate-900">Select timing</option>
<option className="bg-slate-900">0–4 weeks</option>
<option className="bg-slate-900">4–8 weeks</option>
<option className="bg-slate-900">2–3 months</option>
<option className="bg-slate-900">Flexible</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-slate-400 mb-1" htmlFor="details">Project details</label>
<textarea className="w-full rounded-xl border border-slate-700 bg-slate-900/80 text-sm text-slate-100 placeholder:text-slate-500 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-400/70" id="details" placeholder="Tell us about your product, goals, and what success looks like." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-medium tracking-tight text-slate-950 px-4 py-2.5 transition-colors" type="submit">
                  Submit inquiry
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-xs text-slate-500 text-center">
                  We respect your time and inbox. No spam—ever.
                </p>
</form>
</div>
</div>
</section>

<section className="p-4 sm:p-6 lg:p-8 border-t border-slate-800/70" id="faq">
<div className="flex flex-col gap-6">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<p className="text-xs font-medium tracking-tight text-sky-300 uppercase">
                  FAQ
                </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50 mt-1">
                  Answers to common questions.
                </h2>
<p className="text-lg text-slate-300 mt-2 max-w-2xl">
                  If you do not see your question here, include it in your message and we will cover it on our first call.
                </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  What types of companies do you work with?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  We primarily work with B2B SaaS, fintech, and infrastructure / developer‑tools companies, from pre‑seed to Series C. If you have a digital product and care about quality, we can likely help.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  How do you structure pricing?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  For sprints we use fixed‑scope, fixed‑price packages. Longer collaborations are based on monthly retainers. Once we understand your goals and constraints, we will propose one or two clear options.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Do you work with in‑house product teams?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Yes. Many clients already have product managers or engineers. We plug into your existing processes and tools, joining stand‑ups, planning, and reviews as needed.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  What is your typical timeline to launch?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Smaller marketing sites can launch in 3–5 weeks. More complex product work usually runs 8–12 weeks. During our initial call we will outline a draft schedule and key milestones.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Which tools and tech stacks do you use?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  We design in modern collaborative tools and typically ship frontends using contemporary JavaScript frameworks, headless CMSs, and analytics platforms. We adapt to your existing stack when it makes sense.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  Can you help with copywriting and positioning?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Yes. Conversion‑focused copy and messaging architecture are part of almost every engagement. We combine your domain expertise with our outside perspective and research.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  What does collaboration look like week to week?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  Expect a dedicated Slack or email thread, a weekly check‑in, and async progress updates. We share design previews early and often so you can react while changes are still inexpensive.
                </p>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
<h3 className="text-base font-medium tracking-tight text-slate-50">
                  How soon can you start?
                </h3>
<p className="text-base text-slate-300 mt-1">
                  We usually schedule new projects 1–3 weeks in advance. If your timeline is urgent, mention it in the form and we will let you know what is possible.
                </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800/70 p-4 sm:p-6 lg:p-8">
<div className="flex flex-col gap-6">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-xl bg-gradient-to-br from-sky-500 via-indigo-500 to-cyan-400 flex items-center justify-center text-[0.65rem] font-semibold tracking-tight text-slate-950">
                    NO
                  </div>
<span className="text-sm font-medium tracking-tight text-slate-50">
                    NovaOrbit Studio
                  </span>
</div>
<p className="text-base text-slate-400 max-w-sm">
                  A digital product and front‑end agency helping ambitious teams launch premium experiences that convert.
                </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-slate-300">
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-2">
                    Studio
                  </p>
<a className="block hover:text-sky-300" href="#about">About</a>
<a className="block hover:text-sky-300" href="#services">Services</a>
<a className="block hover:text-sky-300" href="#testimonials">Clients</a>
</div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-2">
                    Resources
                  </p>
<a className="block hover:text-sky-300" href="#faq">FAQ</a>
<a className="block hover:text-sky-300" href="#contact">Pricing</a>
<a className="block hover:text-sky-300" href="#contact">Contact</a>
</div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-2">
                    Contact
                  </p>
<p className="text-sm text-slate-300">hello@novaorbit.studio</p>
<p className="text-sm text-slate-400 mt-1">
                    Remote • Europe &amp; US time zones
                  </p>
</div>
<div>
<p className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-2">
                    Social
                  </p>
<div className="flex items-center gap-2">
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.2 2.2.1 4.4-.6 6.2-1.9C4 15.5 2.5 11.5 4 8c2.2 2.6 5.3 4.1 8.7 4-.9-4.2 4-6.6 6.7-3.8 1-.2 2-0.6 2.6-1.1z"></path>
</svg>
</a>
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center text-slate-300 hover:border-sky-400 hover:text-sky-300 transition-colors" href="#">

<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<circle cx="12" cy="12" r="4"></circle>
<path d="M17.5 6.5h.01"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-800/70 pt-4 mt-2">
<p className="text-xs text-slate-500">
                © <span id="year">2024</span> NovaOrbit Studio. All rights reserved.
              </p>
<div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
<a className="hover:text-sky-300" href="#">Privacy</a>
<a className="hover:text-sky-300" href="#">Terms</a>
<span className="inline-flex items-center gap-1 border border-slate-800 rounded-full px-2.5 py-1 bg-slate-900/60">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>Currently accepting new projects</span>
</span>
</div>
</div>
</div>
</footer>
</div>
</div>


    </>
  );
}
