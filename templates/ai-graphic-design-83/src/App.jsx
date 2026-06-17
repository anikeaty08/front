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
      

<nav className="border-b border-zinc-100 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500"></div>
<span className="text-xs font-medium tracking-tight text-zinc-500 uppercase">
            Available for Retainer
          </span>
</div>
<div className="text-xs font-medium text-zinc-400">
          Design Partner Profile
        </div>
</div>
</nav>

<header className="border-zinc-100 border-b pt-20 pb-16">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col gap-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 w-fit">
<svg aria-hidden="true" className="iconify text-zinc-500 iconify--lucide" data-icon="lucide:sparkles" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium text-zinc-600">
              Senior Graphic &amp; Web Designer
            </span>
</div>

<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
            Dedicated AI-Powered Design Partner
            <br/>
<span className="text-zinc-400">for ambitious, fast-moving teams.</span>
</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-500 max-w-2xl">
            I help agencies and startups ship 3–5× more design output without
            increasing headcount — using AI-native workflows. I leverage AI for
            60-70% of production to scale output, while applying senior judgment
            to maintain clarity, consistency, and a human touch.
          </p>
<div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-5 mb-2 text-sm font-medium text-zinc-600">
<div className="flex items-center gap-2 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 shadow-sm">
<svg className="shrink-0" fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
              Top Rated Plus on Upwork
            </div>
<div className="flex items-center gap-2">
<svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
              $100K+ earned
            </div>
<div className="flex items-center gap-2">
<svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
              100+ contracts
            </div>
<div className="flex items-center gap-2">
<svg className="text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21h18"></path>
<path d="M5 21V7l8-4 8 4v14"></path>
<path d="M17 21v-8.5a1.5 1.5 0 0 0-1.5-1.5h-5a1.5 1.5 0 0 0-1.5 1.5V21"></path>
</svg>
              Agencies &amp; B2B
            </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                AI-first production velocity
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Scalable visual systems
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Reusable templates &amp; assets
              </li>
</ul>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Minimal direction required
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Founder-level collaboration
              </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg aria-hidden="true" className="iconify text-zinc-900 iconify--lucide" data-icon="lucide:check" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Commercially viable results
              </li>
</ul>
</div>
</div>
</div>
</header>

<section className="bg-white border-zinc-100 border-b pt-24 pb-24">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 gap-x-12 gap-y-12">

<div className="lg:col-span-5">
<div className="sticky top-24">
<div className="transition-shadow hover:shadow-md bg-white border-zinc-200 border ring-zinc-900/5 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">

<div className="flex items-start justify-between mb-6">
<div className="relative group">
<div className="w-20 h-20 rounded-2xl border border-zinc-100 overflow-hidden bg-zinc-50 shadow-inner">
<img alt="Chingiz Khatuev" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54492350-85bc-41af-9e7d-95f6294b0691_320w.png"/>
</div>
<div className="absolute -bottom-1.5 -right-1.5 flex items-center justify-center w-5 h-5 bg-emerald-500 text-white rounded-full ring-2 ring-white" title="Online">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
</div>
</div>
<div className="flex flex-col items-end gap-2">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-700 shadow-sm">
<span className="text-[10px] font-bold uppercase tracking-wide">
                        Top Rated Plus
                      </span>
</div>
</div>
</div>

<div className="space-y-1">
<h3 className="text-xl font-bold text-zinc-900 tracking-tight flex items-center gap-2">
                    Chingiz Khatuev
                    <svg className="text-blue-500" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"></path>
<path d="M0 0h24v24H0z" fill="none"></path>
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</h3>
<p className="text-sm font-medium text-zinc-500">
                    Senior AI-Native Graphic &amp; Web Designer
                  </p>
</div>

<div className="flex flex-wrap items-center gap-4 mt-5 pt-5 border-t border-zinc-100 text-xs font-medium text-zinc-500">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-map-pin text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Bangkok, Thailand
                  </div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-clock text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
                    1:02 PM Local
                  </div>
</div>


<div className="mt-6 pt-2 space-y-3">
<a className="group flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all hover:shadow active:scale-[0.98] text-sm font-semibold text-white bg-zinc-900 w-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 shadow-sm" href="https://www.upwork.com/freelancers/~010a1bf0d25983dea2" target="_blank">
                    Hire on Upwork
                    <svg className="lucide lucide-arrow-up-right group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
<div className="grid grid-cols-2 gap-3">
<a className="flex items-center justify-center gap-2 hover:border-zinc-300 hover:text-pink-500 transition-all hover:shadow active:scale-[0.98] group text-xs font-semibold text-zinc-600 bg-white border-zinc-200 border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-sm" href="https://dribbble.com/ching-ching" target="_blank">
                      Dribbble
                    </a>
<a className="flex items-center justify-center gap-2 hover:border-zinc-300 hover:text-blue-600 transition-all hover:shadow active:scale-[0.98] group text-xs font-semibold text-zinc-600 bg-white border-zinc-200 border rounded-lg pt-2 pr-3 pb-2 pl-3 shadow-sm" href="https://www.behance.net/zdezign03e813" target="_blank">
                      Behance
                    </a>
</div>
</div>
</div>

</div>
</div>

<div className="lg:col-span-7 flex flex-col">

<div className="flex items-center gap-3 mb-8">
<div className="h-px w-6 bg-zinc-300"></div>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                About Your Partner
              </span>
</div>

<h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight mb-6 leading-[1.15]">
              Senior design judgment,
              <span className="text-zinc-400">AI-native velocity.</span>
</h2>

<div className="prose prose-zinc prose-sm text-zinc-600 leading-relaxed space-y-5 mb-10">
<p className="">
                I help startups, agencies, and growing businesses ship
                high-quality design faster — using AI-enhanced workflows and
                proven design systems. This approach delivers the same
                senior-level quality you expect, but with fewer billed hours and
                faster delivery cycles.
              </p>
<p className="">
                I combine strong visual thinking with data-driven decisions to
                solve real business problems — not just make things look good.
                You pay for strategic thinking, not routine execution.
              </p>
</div>

<div className="border-y border-zinc-100 mb-12 pt-6 pb-6">
<p className="text-[10px] uppercase font-semibold text-zinc-400 tracking-widest mb-4" style={{}}>
                WORKED ON PROJECTS FOR
              </p>
<div className="flex flex-wrap text-sm font-semibold text-zinc-400 opacity-80 grayscale gap-x-8 gap-y-4 items-center">
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  KPMG
                </span>
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  Pepsi
                </span>
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  Lexus
                </span>
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  Toyota
                </span>
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  OBI
                </span>
<span className="hover:text-zinc-900 hover:grayscale-0 transition-all cursor-default">
                  Haier
                </span>
</div>
</div>

<div className="space-y-6">
<h3 className="text-sm font-bold text-zinc-900 flex items-center gap-2">
<svg className="lucide lucide-sparkles text-amber-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275Z"></path>
<path d="M5 3v4"></path>
<path d="M7 5H3"></path>
<path d="M13 18v4"></path>
<path d="M15 20h-4"></path>
</svg>
                How AI Accelerates Your Project
              </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
<svg className="lucide lucide-zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<span className="text-sm font-semibold text-zinc-900">
                      Rapid Exploration
                    </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed pl-1">
                    I use AI to generate varied concepts instantly, allowing us
                    to find the right art direction in hours, not days.
                  </p>
</div>

<div className="group p-4 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
<svg className="lucide lucide-layers" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
<path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
<path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
</svg>
</div>
<span className="text-sm font-semibold text-zinc-900">
                      Automated Variations
                    </span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed pl-1">
                    Mockups, layout adjustments, and content clarity are
                    automated, saving billable hours for high-value strategy.
                  </p>
</div>
</div>
</div>

<div className="mt-10">
<h3 className="text-sm font-bold text-zinc-900 mb-5">
                Core Capabilities
              </h3>
<ul className="space-y-3">
<li className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-sm font-medium text-zinc-700">
                      Graphic Design (Brand, Pitch Decks, Ads)
                    </span>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-sm font-medium text-zinc-700">
                      UX/UI &amp; Web Design (SaaS, LPs, Apps)
                    </span>
</div>
</li>
<li className="flex items-center justify-between p-3 rounded-lg border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-400"></div>
<span className="text-sm font-medium text-zinc-700">
                      Webflow Development &amp; CMS
                    </span>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white border-zinc-100 border-b pt-20 pb-20">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col gap-10">

<div className="max-w-2xl">
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">
              Collaboration Model
            </h2>
<p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              For businesses requiring consistent, high-volume output, ad-hoc
              hiring is inefficient. I operate on a monthly retainer model that
              functions like a dedicated team member, eliminating administrative
              friction.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 ring-1 ring-emerald-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900">
                Priority Access
              </h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Skip the queue. You get guaranteed availability and faster
                turnaround times compared to project-based work.
              </p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 ring-1 ring-blue-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:infinity" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900">
                Flat Monthly Rate
              </h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Predictable budgeting with no hourly counting. Focus on the
                value delivered rather than watching the clock.
              </p>
</div>

<div className="group p-6 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-4 ring-1 ring-purple-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:refresh-cw" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 3v5h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M8 16H3v5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900">
                Continuous Iteration
              </h3>
<p className="mt-2 text-sm text-zinc-500 leading-relaxed">
                Design is never finished. We continuously refine, test, and
                improve your assets based on real-world feedback.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-zinc-100 bg-zinc-50/50">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Availability
            </h2>
<p className="mt-4 text-sm text-zinc-500 leading-relaxed">
              Based in Bangkok, I operate on a shifted schedule to ensure
              reliable overlap with US, UK, and EU time zones.
            </p>
<div className="mt-8 p-5 rounded-xl bg-white border border-zinc-200 shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</g>
</svg>
</div>
<div className="">
<div className="text-sm font-semibold text-zinc-900">
                    Bangkok, Thailand
                  </div>
<div className="text-xs text-zinc-500 font-medium">
                    UTC+7 · US/EU Overlay
                  </div>
</div>
</div>
<div className="space-y-3 pt-4 border-t border-zinc-100">
<div className="flex gap-3">
<svg aria-hidden="true" className="iconify text-zinc-400 mt-1 shrink-0 iconify--lucide" data-icon="lucide:clock" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
<polyline fill="none" points="12 6 12 12 16 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
</svg>
<span className="text-xs text-zinc-600 leading-relaxed">
                    Small tasks delivered within 1–2 hours.
                  </span>
</div>
<div className="flex gap-3">
<svg aria-hidden="true" className="iconify text-zinc-400 mt-1 shrink-0 iconify--lucide" data-icon="lucide:video" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m22 8l-6 4l6 4V8Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<rect fill="none" height="12" rx="2" ry="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="14" x="2" y="6"></rect>
</svg>
<span className="text-xs text-zinc-600 leading-relaxed">
                    Dedicated sync hours available.
                  </span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
                How I Work
              </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:list-todo" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M13 6h8m-8 6h8m-8 6h8"></path>
</g>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900">
                    Task Management
                  </h3>
<p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                    We define and prioritize tasks together using Notion,
                    ClickUp, or Asana. Tasks can be reordered at any time to
                    adapt to changing needs.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:infinity" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900">
                    Continuous Flow
                  </h3>
<p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                    Not just task-based. On retainer, I'm continuously available
                    for iterations, feedback, and proactive improvements without
                    hourly counting.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square-text" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<path d="M13 8H7m6 4H7"></path>
</g>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900">
                    Daily Updates
                  </h3>
<p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                    You receive daily progress updates with full visibility into
                    what is in progress and what is coming next, keeping the
                    team aligned.
                  </p>
</div>
</div>

<div className="flex flex-col gap-3">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-zinc-500 shadow-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275Z"></path>
<path d="M5 3v4m2-2H3m13 15v4m2-2h-4"></path>
</g>
</svg>
</div>
<div className="">
<h3 className="text-sm font-semibold text-zinc-900">
                    AI-Enhanced
                  </h3>
<p className="mt-1.5 text-sm text-zinc-500 leading-relaxed">
                    Faster concept exploration and fewer billed hours on routine
                    execution. You pay for senior thinking, not just manual
                    labor.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-white border-zinc-200 border-b pt-24 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-100/40 blur-[120px] rounded-full mix-blend-multiply"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10">

<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-zinc-900 tracking-tight leading-[1.15] mb-6">
            See Exactly What You're Paying For
            <span className="text-zinc-500 block mt-2 text-2xl lg:text-3xl font-medium">
              Transparent Pricing and Reporting
            </span>
</h2>
<p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mx-auto">
            I pride myself on offering transparent pricing for my services. My
            commitment is supported by a meticulous time-tracking system that
            gives you complete visibility into every hour dedicated to your
            project.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-50/50 border border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-purple-600 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-clock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">
              Real-time Logs
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Every minute is accounted for. My time-tracking system records
              distinct blocks of work, so you never have to guess where the
              hours went.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50/50 border border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-pink-600 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-camera" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">
              Visual Proof of Work
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Automatic screenshots taken at 10-minute intervals provide
              granular verification of effort, ensuring total transparency in
              the workflow.
            </p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50/50 border border-zinc-200 hover:bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-file-bar-chart-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="M12 18v-6"></path>
<path d="M8 18v-1"></path>
<path d="M16 18v-3"></path>
</svg>
</div>
<h3 className="text-sm font-semibold text-zinc-900 mb-2">
              Comprehensive Reports
            </h3>
<p className="text-sm text-zinc-500 leading-relaxed">
              Detailed daily or weekly digests keep you well-informed, giving
              you complete visibility into progress, blockers, and next steps.
            </p>
</div>
</div>
</div>
</section>
<section className="overflow-hidden bg-zinc-50 border-zinc-200 border-b pt-32 pb-32 relative">

<div className="absolute inset-0 opacity-40 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-white to-transparent"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">

<div className="mb-8 p-3 rounded-2xl bg-white border border-zinc-200 shadow-sm">
<svg className="lucide lucide-message-square-plus text-zinc-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<line x1="9" x2="15" y1="10" y2="10"></line>
<line x1="12" x2="12" y1="7" y2="13"></line>
</svg>
</div>

<h2 className="text-4xl md:text-5xl font-semibold text-zinc-900 tracking-tight mb-6 max-w-2xl">
            Ready to scale your design output?
          </h2>

<p className="text-lg text-zinc-500 max-w-xl leading-relaxed mb-12">
            If this sounds like the kind of collaboration you’re looking for —
            let’s start with a short call or a 1-week paid test.
          </p>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl gap-x-4 gap-y-4">

<a className="group relative flex items-center gap-5 p-5 bg-white border border-zinc-200 rounded-xl hover:border-blue-400/30 hover:shadow-[0_4px_20px_-4px_rgba(59,130,246,0.1)] transition-all duration-300 text-left" href="https://t.me/dezigner" target="_blank">
<div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100/50 flex items-center justify-center text-blue-600 group-hover:scale-105 group-hover:bg-blue-100 transition-all duration-300">
<svg className="lucide lucide-send" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-0.5">
                  Telegram
                </div>
<div className="text-lg font-medium text-zinc-900">@dezigner</div>
</div>
<div className="text-zinc-300 group-hover:text-blue-500 transition-colors">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>

<a className="group flex items-center gap-5 hover:border-emerald-400/30 hover:shadow-[0_4px_20px_-4px_rgba(16,185,129,0.1)] transition-all duration-300 text-left bg-white border-zinc-200 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative" href="https://wa.me/79245539355" target="_blank">
<div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-100/50 flex items-center justify-center text-emerald-600 group-hover:scale-105 group-hover:bg-emerald-100 transition-all duration-300">
<svg className="lucide lucide-message-circle" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-0.5">
                  WhatsApp
                </div>
<div className="text-lg font-medium text-zinc-900">
                  +7 924 553-93-55
                </div>
</div>
<div className="text-zinc-300 group-hover:text-emerald-500 transition-colors">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
</div>

<p className="mt-8 text-sm text-zinc-400">
            Prefer email?
            <a className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 transition-colors text-zinc-600" href="#">
              khatuevchingiz@gmail.com
            </a>
</p>
</div>
</div>
</section>





<footer className="py-12 border-t border-zinc-100">
<div className="flex flex-col md:flex-row gap-4 max-w-5xl mr-auto ml-auto pr-6 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs text-zinc-400">
          © 2025 Chingiz Khatuev. Design Partner Profile.
        </p>
</div>
</footer>

    </>
  );
}
