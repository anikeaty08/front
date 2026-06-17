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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si" width="100%"></iframe></div></div>
<div className="overflow-hidden min-h-screen relative">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-40 -left-32 h-72 w-72 md:h-96 md:w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute top-40 right-[-6rem] h-80 w-80 md:h-[22rem] md:w-[22rem] rounded-full bg-sky-500/20 blur-3xl">
</div>
<div className="absolute bottom-[-8rem] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl">
</div>
</div>

<header className="bg-neutral-950/80 border-neutral-900/80 border-b backdrop-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex sm:py-5 pt-4 pb-4 items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl border border-neutral-700/70 bg-neutral-900/80">
<span className="text-sm font-semibold text-emerald-400 tracking-tight">DS</span>
</div>
<div className="flex flex-col">
<span className="sm:text-base text-sm font-semibold tracking-tight">AI Vaping</span>
<span className="hidden text-[0.7rem] uppercase sm:block font-medium text-neutral-400 tracking-[0.18em]">Intelligence</span>
</div>
</div>
<nav className="hidden md:flex text-sm text-neutral-300 font-geist-mono gap-x-7 gap-y-7 items-center">
<a className="hover:text-neutral-50 transition-colors" href="#how-it-works">HOW IT WORKS</a>
<a className="hover:text-neutral-50 transition-colors" href="#features">FEATURES</a>
<a className="hover:text-neutral-50 transition-colors" href="#pricing">PRICING</a>
<a className="hover:text-neutral-50 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden items-center gap-3 md:flex">
<button className="rounded-xl border border-neutral-700 bg-neutral-900/60 px-3.5 py-1.5 text-sm font-medium tracking-tight text-neutral-200 hover:border-neutral-500 hover:text-neutral-50 hover:bg-neutral-900 transition-colors">
                Log in
              </button>
<a className="inline-flex items-center justify-center hover:bg-emerald-300 transition-colors text-sm font-medium text-neutral-950 tracking-tight bg-emerald-400 rounded-xl pt-1.5 pr-3.5 pb-1.5 pl-3.5 shadow-[0_18px_45px_rgba(16,185,129,0.55)]" href="#pricing">Subscribe</a>
</div>

<button className="inline-flex items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 p-2 text-neutral-300 hover:border-neutral-600 hover:text-neutral-50 md:hidden">
<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line strokeLinecap="round" x1="4" x2="20" y1="6" y2="6"></line>
<line strokeLinecap="round" x1="4" x2="20" y1="12" y2="12"></line>
<line strokeLinecap="round" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>

<div className="flex flex-wrap items-center gap-4 pb-4 text-xs text-neutral-300/90 md:hidden">
<a className="hover:text-neutral-50" href="#problem">Problem</a>
<span className="h-3 w-px bg-neutral-800"></span>
<a className="hover:text-neutral-50" href="#solution">Solution</a>
        span className="h-3 w-px bg-neutral-800"&gt;
        <a className="hover:text-50" href="#features">Features</a>
<span className="h-3 w-px bg-neutral-800"></span>
<a className="hover:text-neutral-50" href="#pricing">Pricing</a>
<span className="h-3 w-px bg-neutral-800"></span>
<a className="hover:text-neutral-50" href="#faq">FAQ</a>
</div>
</div>
</header>
<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

<section className="sm:pt-14 sm:pb-18 lg:pt-20 lg:pb-24 grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.35fr)] pt-10 pb-14 gap-x-10 gap-y-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-200 glass-card">
<span className="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]"></span>
<span className="font-medium tracking-tight">AI mentor for vaping e‑commerce growth</span>
</div>
<h1 className="sm:text-4xl lg:text-5xl xl:text-[2.9rem] text-3xl font-semibold tracking-tight font-poppins mt-5">
<span className="text-neutral-50">Real-Time<br/> Vape Intelligence.</span><br/>
<span className="text-emerald-300">Powered by AI.</span>
</h1>
<p className="sm:text-base leading-relaxed text-sm text-neutral-300/90 max-w-xl mt-4">The DS Vaping AI Platform is the premier SaaS intelligence and growth platform, fusing cutting-edge AI with the proven playbooks of the world’s most successful vape entrepreneurs. Instantly master your market, ensure proactive compliance, and deploy high-performing content and campaigns on autopilot.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center rounded-2xl bg-emerald-400 px-4 py-2.5 text-sm font-medium tracking-tight text-neutral-950 hover:bg-emerald-300 transition-colors shadow-[0_22px_60px_rgba(16,185,129,0.70)]" href="#pricing">
            View plans
            <svg className="ml-1.5 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M9 7H17V15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<button className="inline-flex hover:border-neutral-500 hover:text-neutral-50 hover:bg-neutral-900 transition-colors text-sm font-medium text-neutral-200 tracking-tight bg-neutral-900/70 border-neutral-700 border rounded-2xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 items-center justify-center">Book a Strategy Call</button>
</div>
<div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
<div className="flex items-center gap-2 text-xs text-neutral-300">
<svg className="h-4 w-4 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span>Built for vaping &amp; nicotine compliance</span>
</div>
<div className="h-3 w-px bg-neutral-800"></div>
<div className="flex items-center gap-2 text-xs text-neutral-300">
<span className="h-6 w-6 overflow-hidden rounded-full border border-neutral-700">
<img alt="Founder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</span>
<span className="">Mentoring moves from “gut feel” to
                  <span className="text-emerald-200">live data + AI.</span></span>
</div>
</div>
</div>

<div className="relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
<div className="relative w-full max-w-md rounded-3xl border border-neutral-800 bg-neutral-900/60 glass-card p-4 sm:p-5 shadow-[0_32px_120px_rgba(0,0,0,0.9)]">
<div className="flex gap-3 border-neutral-800 border-b mb-3 pb-3 gap-x-3 gap-y-3 items-center justify-between">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-neutral-400">
                Live vape market snapshot
              </p>
<p className="text-sm font-medium text-neutral-50 tracking-tight mt-1">
                US Disposable Vape Category — Last 30 days
              </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[0.7rem] font-medium text-emerald-200 border border-emerald-400/40">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.9)]"></span>
            Live feed
            </span>
</div>
<div className="space-y-4">

<div className="grid grid-cols-3 gap-3 text-xs">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2.5">
<p className="text-[0.7rem] text-neutral-400">
                  Revenue trend
                </p>
<p className="mt-1 text-base font-semibold tracking-tight text-emerald-300">
                  +18.4%
                </p>
<p className="mt-0.5 text-[0.7rem] text-neutral-400">
                  vs last 30d
                </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2.5">
<p className="text-[0.7rem] text-neutral-400">
                  Emerging flavor
                </p>
<p className="mt-1 text-sm font-semibold tracking-tight text-neutral-50">
                  Frozen Grape
                </p>
<p className="mt-0.5 text-[0.7rem] text-emerald-300">
                  3.2x search lift
                </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 px-3 py-2.5">
<p className="text-[0.7rem] text-neutral-400">Risk alerts</p>
<p className="mt-1 text-base font-semibold tracking-tight text-amber-300">
                  4
                </p>
<p className="mt-0.5 text-[0.7rem] text-amber-200/80">
                  ad policy changes
                </p>
</div>
</div>

<div className="rounded-2xl border border-neutral-800 bg-neutral-900/90 px-3 py-3">
<div className="flex items-center justify-between">
<p className="text-[0.7rem] font-medium tracking-tight text-neutral-300">
                  Conversion impact from AI‑generated assets
                </p>
<span className="text-[0.65rem] text-emerald-200 bg-emerald-500/10 border border-emerald-500/40 rounded-full px-2 py-0.5">+32% uplift</span>
</div>
<div className="mt-3 h-20 w-full">
<div className="flex gap-1 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-900/40 h-full rounded-xl pt-2 pr-2 pb-2 pl-2 gap-x-1 gap-y-1 items-end justify-between">
<div className="w-2 rounded-full bg-emerald-500/25" style={{height: '35%'}}></div>
<div className="w-2 rounded-full bg-emerald-500/40" style={{height: '55%'}}></div>
<div className="w-2 rounded-full bg-emerald-400/60" style={{height: '75%'}}></div>
<div className="w-2 rounded-full bg-emerald-300/80" style={{height: '95%'}}></div>
</div>
</div>
<div className="mt-2 flex items-center justify-between text-[0.65rem] text-neutral-400">
<span className="">Before AI assets</span>
<span>After 4 weeks on VapeScale AI</span>
</div>
</div>

<div className="flex items-center gap-2 rounded-2xl border border-neutral-800 bg-neutral-950/90 px-3 py-2.5 text-xs">
<svg className="h-4 w-4 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7H8L10 4H20V17H4V7Z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M4 21H20" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<p className="text-[0.7rem] text-neutral-300">
                “Launch a compliant, high‑performing product page in 24
                hours, not 3 weeks.”
              </p>
</div>
</div>
</div>

<div className="float-card absolute -bottom-6 -left-1 sm:-left-6 w-40 sm:w-48 rounded-2xl border border-emerald-400/60 bg-neutral-950/90 px-3 py-2.5 text-[0.7rem] text-emerald-50 shadow-[0_20px_80px_rgba(16,185,129,0.6)]">
<p className="font-medium tracking-tight">3.7x ROAS</p>
<p className="mt-0.5 text-[0.65rem] text-emerald-100/80">
            Average uplift after 60 days with Growth &amp; Domination tiers.
          </p>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-neutral-900/80" id="problem">
<div className="grid gap-8 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,2.8fr)] items-start">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
            The problem
          </p>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
            Scaling a vape brand today is
            <span className="text-rose-300">high‑risk guesswork.</span>
</h2>
<p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-300/90">
            Algorithms shift overnight, ad platforms tighten compliance,
            and new flavors land every week. Most teams are juggling
            scattered tools, stale market reports, and creatives that may
            or may not get approved.
          </p>
</div>
<div className="grid gap-3 sm:grid-cols-2 rounded-3xl border border-neutral-800 bg-neutral-950/70 p-4 sm:p-5 glass-card">
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 px-3.5 py-3">
<p className="text-xs font-medium tracking-tight text-neutral-200/90">
              No real‑time market intelligence
            </p>
<p className="mt-1.5 text-xs text-neutral-400">
              Most vaping brands rely on outdated sales reports and hearsay
              instead of live consumer data and category signals.
            </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 px-3.5 py-3">
<p className="text-xs font-medium tracking-tight text-neutral-200/90">
              Compliance landmines everywhere
            </p>
<p className="mt-1.5 text-xs text-neutral-400">
              Creative teams push campaigns without nicotine warnings,
              age‑gating, or retailer policies handled properly.
            </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 px-3.5 py-3">
<p className="text-xs font-medium tracking-tight text-neutral-200/90">
              Slow, expensive creative cycles
            </p>
<p className="mt-1.5 text-xs text-neutral-400">
              Product photos, UGC content, and landing page assets take
              weeks and cost thousands—with no guarantee they convert.
            </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-900/70 px-3.5 py-3">
<p className="text-xs font-medium tracking-tight text-neutral-200/90">
              No proven mentorship in the category
            </p>
<p className="mt-1.5 text-xs text-neutral-400">
              Advice is generic DTC noise, not playbooks from veteran vape
              founders who’ve actually scaled to 7 and 8 figures.
            </p>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-neutral-900/80" id="solution">
<div className="grid gap-10 lg:grid-cols-[minmax(0,2.8fr)_minmax(0,2.2fr)] items-center">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-emerald-300">
            The solution
          </p>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
            An AI mentor that sees the vaping market
            <span className="text-emerald-300">before your competitors do.</span>
</h2>
<p className="mt-3 max-w-xl text-sm sm:text-base text-neutral-300/90">
            VapeScale AI combines real‑time industry intelligence, compliance
            monitoring, and automated creative tools with the distilled
            wisdom of top vape operators—delivered as a subscription
            platform, not a one‑off agency.
          </p>
<div className="mt-5 space-y-3">
<div className="flex gap-3 text-sm text-neutral-200/95">
<span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<p>
<span className="font-medium text-neutral-50">Always‑on market &amp; flavor intelligence</span>
                – know which SKUs, formats, and clouds are trending before
                distributors do.
              </p>
</div>
<div className="flex gap-3 text-sm text-neutral-200/95">
<span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M7 8h10M7 12h6M7 16h4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<p>
<span className="font-medium text-neutral-50">Compliance‑aware ad &amp; creative engines</span>
                – generate product photos, UGC angles, and copy that respect
                platform and regulatory rules.
              </p>
</div>
<div className="flex gap-3 text-sm text-neutral-200/95">
<span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/10">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77"></path>
</svg>
</span>
<p className="">
<span className="font-medium text-neutral-50">Embedded founder‑grade mentorship</span>
                – battle‑tested playbooks from elite vape brands encoded as
                prompts, workflows, and growth recipes.
              </p>
</div>
</div>
</div>
<div className="rounded-3xl border border-emerald-500/40 bg-gradient-to-br from-neutral-900/80 via-neutral-950 to-neutral-950 glass-card p-5 sm:p-6">
<p className="text-xs font-medium tracking-tight text-emerald-200 uppercase">
            Intelligence + execution, under one roof
          </p>
<div className="mt-3 grid gap-4 sm:grid-cols-2 text-xs">
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3.5 py-3">
<p className="text-[0.7rem] text-neutral-400">
                Industry intelligence
              </p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-50">
                Live consumer &amp; category insights
              </p>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                Social, search, Reddit &amp; review mining.
              </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3.5 py-3">
<p className="text-[0.7rem] text-neutral-400">Compliance</p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-50">
                Lead &amp; ad policy monitoring
              </p>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                Alerts before platforms flag you.
              </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3.5 py-3">
<p className="text-[0.7rem] text-neutral-400">
                Creative automation
              </p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-50">
                AI product visuals &amp; UGC
              </p>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                Product photos, UGC scripts &amp; avatar videos in minutes.
              </p>
</div>
<div className="rounded-2xl border border-neutral-800 bg-neutral-950/80 px-3.5 py-3">
<p className="text-[0.7rem] text-neutral-400">Mentorship</p>
<p className="mt-1 text-sm font-medium tracking-tight text-neutral-50">
                Vape founder playbooks
              </p>
<p className="mt-1 text-[0.7rem] text-neutral-400">
                Tiered access to strategy rooms &amp; deal flow.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-neutral-900/80" id="how-it-works">
<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
            How it works
          </p>
<h2 className="sm:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight mt-3">
            From sign‑up to scale in
            <span className="text-emerald-300">three focused steps.</span>
</h2>
</div>
<p className="max-w-md text-sm sm:text-base text-neutral-300/90 leading-relaxed">
          Whether you’re launching your first store or optimizing a
          multi‑country portfolio, VapeScale AI maps to your catalog, ad
          stack, and risk profile in days—not months.
        </p>
</div>
<div className="mt-8 grid gap-4 md:grid-cols-3">

<div className="relative rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/70 px-2.5 py-1 text-[0.7rem] text-neutral-300">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[0.65rem] font-medium text-emerald-300 border border-emerald-400/60">1</span>
            Intake &amp; calibration
          </div>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
            Connect your store, stack, and risk profile.
          </p>
<p className="mt-2 text-xs sm:text-sm text-neutral-300/90">
            We pull your core metrics, current ad channels, SKUs, and
            geographies. The system ingests your product catalog and
            historic campaigns to understand what’s working and where
            you’re exposed.
          </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li>• Shopify / WooCommerce / custom integrations</li>
<li>• Current policies, warning labels, and age‑gating</li>
<li>• SKU mapping to flavor, device, and format</li>
</ul>
</div>

<div className="relative rounded-3xl border border-neutral-800 bg-neutral-950/90 p-4 sm:p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-2.5 py-1 text-[0.7rem] text-neutral-300">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[0.65rem] font-medium text-emerald-300 border border-emerald-400/60">2</span>
            Intelligence &amp; mentor setup
          </div>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
            Train your AI mentor on your brand &amp; ambitions.
          </p>
<p className="mt-2 text-xs sm:text-sm text-neutral-300/90">
            Answer a short playbook survey and unlock a tailored intelligence
            workspace: prioritized flavors, target audiences, and revenue
            milestones tied to your tier.
          </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li className="">• Market and gap dashboards configured for your SKUs</li>
<li>• Compliance alert rules tuned to your regions</li>
<li>• Founder‑grade strategy prompts generated for your goals</li>
</ul>
</div>

<div className="relative rounded-3xl border border-emerald-500/50 bg-gradient-to-b from-neutral-900/80 via-neutral-950 to-neutral-950 p-4 sm:p-5">
<div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-2.5 py-1 text-[0.7rem] text-emerald-100">
<span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/20 text-[0.65rem] font-medium border border-emerald-400/70">3</span>
            Always‑on growth engine
          </div>
<p className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
            Ship assets, iterate, and scale safely.
          </p>
<p className="mt-2 text-xs sm:text-sm text-neutral-200/95">
            Use the studio to generate compliant product imagery, UGC
            scripts, avatar videos, landing pages, and ad sets—backed by
            live category intelligence and automated QA.
          </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-200/90">
<li>• AI Product Image Studio &amp; UGC Lab</li>
<li>• Lead &amp; wholesale pipeline intelligence</li>
<li>• Founder rooms, office hours, and tiered access to strategy</li>
</ul>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-neutral-900/80" id="features">
<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
            Platform capabilities
          </p>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-50">
            Everything modern vape operators need
            <span className="text-emerald-300">in one command center.</span>
</h2>
</div>
<p className="max-w-md text-sm sm:text-base text-neutral-300/90 leading-relaxed">
          Intelligence, compliance, and creative tools talk to each other,
          so every asset you launch is rooted in live data and risk‑aware
          logic.
        </p>
</div>
<div className="mt-8 grid gap-5 lg:grid-cols-3">

<div className="space-y-4">
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-400/40">
<svg className="h-4.5 w-4.5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1118 0 9 9 0 01-18 0z" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M12 7v5l3 2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  Real‑time market &amp; flavor intelligence
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Industry intelligence
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Monitor SKU performance, emerging flavors, formats, and price
              bands across the market, distilled into weekly opportunity
              briefs and instant AI answers.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li className="">• Social &amp; Reddit sentiment tracking</li>
<li>• Search demand &amp; review language insights</li>
<li>• Market gap &amp; white‑space identification</li>
</ul>
</div>
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-400/50">
<svg className="h-4.5 w-4.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M8 10h8M8 14h5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  Compliance &amp; lead safety cockpit
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Lead &amp; compliance guardrails
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Automatic scans of your landing pages, ads, and signup flows
              for nicotine warnings, age‑gating, and policy alignment—
              before platforms penalize you.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li>• Lead validation &amp; region‑based routing</li>
<li>• Ad policy &amp; copy risk scoring</li>
<li>• Slack alerts for high‑risk changes</li>
</ul>
</div>
</div>

<div className="space-y-4">
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/10 border border-fuchsia-400/60">

<svg className="h-4.5 w-4.5 text-fuchsia-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" ry="2" width="18" x="3" y="4"></rect>
<path d="M10 11l2.5 3 2-2.5L19 16" strokeLinecap="round" strokeLinejoin="round"></path>
<circle cx="8" cy="9" r="1"></circle>
</svg>
</div>
<div className="">
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  AI Product Image Studio
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Packaging‑true visuals in minutes
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Drop in your labels and let the studio render scroll‑stopping,
              platform‑ready product images and lifestyle scenes that match
              your brand.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li>• Multi‑angle product &amp; flavor shots</li>
<li>• Lifestyle scenes with smoke &amp; clouds tuned</li>
<li>• Automatic resize for PDP, ads, and social</li>
</ul>
</div>
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-400/60">

<svg className="h-4.5 w-4.5 text-indigo-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="13" x="3" y="5"></rect>
<path d="M16 9l5-3v12l-5-3" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  UGC &amp; avatar video lab
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Scripts, hooks, and avatar hosts
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Generate UGC scripts, storyboard beats, and avatar‑hosted
              explainer videos optimized for vape shoppers and policies—no
              full video team required.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li className="">• TikTok/Reels‑ready hooks and angles</li>
<li>• Avatar explainers for new devices &amp; flavors</li>
<li>• Compliance‑aware captions and overlays</li>
</ul>
</div>
</div>

<div className="space-y-4">
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-400/70">

<svg className="h-4.5 w-4.5 text-amber-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="8"></circle>
<circle cx="12" cy="12" r="4"></circle>
<path d="M22 12h-2M4 12H2M12 2v2M12 20v2" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  AI ad copy &amp; funnel recipes
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Built from winning vape funnels
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Generate compliant, high‑intent ad copy, PDP layouts, and
              email flows mapped to awareness, consideration, and
              re‑purchase.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li>• Social &amp; search ad variants</li>
<li>• Product page outlines optimized for AOV</li>
<li>• Cart recovery &amp; re‑activation flows</li>
</ul>
</div>
<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500/10 border border-teal-400/60">

<svg className="h-4.5 w-4.5 text-teal-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round">
</path>
<circle cx="9" cy="7" r="3"></circle>
<path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M16 3.13a3 3 0 010 5.74" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<div>
<h3 className="text-sm sm:text-base font-medium tracking-tight text-neutral-50">
                  Founder‑grade mentoring &amp; community
                </h3>
<p className="text-[0.7rem] text-neutral-400">
                  Tiered access to operators
                </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-300/90">
              Join curated rooms of vape operators, structured office
              hours, and on‑demand strategy sessions encoded in your AI
              mentor.
            </p>
<ul className="mt-3 space-y-1.5 text-[0.75rem] text-neutral-400">
<li>• Private operator community &amp; channels</li>
<li>• Strategy calls &amp; market breakdowns</li>
<li>• Founder‑only Domination master sessions</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-10 sm:py-14 border-t border-neutral-900/80" id="social-proof">
<div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
<div className="">
<p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-400">
            Social proof
          </p>
<h2 className="sm:text-3xl text-2xl font-semibold text-neutral-50 tracking-tight mt-3">
            Trusted by fast‑growing vape brands
            <span className="text-emerald-300">you’ve on your feed.</span>
</h2>
</div>
<p className="max-w-md text-sm sm:text-base text-neutral-300/90 leading-relaxed">
          From niche disposables to nationwide hardware brands, operators
          use VapeScale AI to push new lines, protect their ad accounts, and
          compress creative timelines.
        </p>
</div>
<div className="mt-8 grid gap-4 md:grid-cols-3">

<div className="md:col-span-3 flex flex-wrap items-center gap-5 rounded-3xl border border-neutral-800 bg-neutral-950/80 px-4 py-3 text-[0.7rem] text-neutral-400">
<span className="text-neutral-500">Trusted by teams behind</span>
<span className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-1 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-neutral-200">CLD Labs</span>
<span className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-1 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-neutral-200">Mist &amp; Co</span>
<span className="rounded-md border border-neutral-800 bg-neutral-900/80 px-2 py-1 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-neutral-200">GhostCloud</span>
</div>

<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 overflow-hidden rounded-full border border-neutral-700">
<img alt="Founder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-50">
                Alex M.
              </p>
<p className="text-[0.7rem] text-neutral-400">
                Co‑founder, CloudMint Labs
              </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-200/95">
            “We used to guess which flavors to push and pray our ads made it
            through review. Now VapeScale AI flags risk before we launch and
            feeds us angles based on actual conversations happening in the
            community.”
          </p>
<p className="mt-2 text-[0.7rem] font-medium text-emerald-300 uppercase tracking-[0.18em]">
            +41% revenue in 90 days
          </p>
</div>

<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 overflow-hidden rounded-full border border-neutral-700">
<img alt="Founder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="">
<p className="text-sm font-medium tracking-tight text-neutral-50">
                Sara K.
              </p>
<p className="text-[0.7rem] text-neutral-400">
                Head of Growth, Driftline Vape
              </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-200/95">
            “Our creative backlog went from three weeks to two days. The AI
            photo studio and UGC lab mean my team spends time picking
            winners, not writing briefs.”
          </p>
<p className="mt-2 text-[0.7rem] font-medium text-emerald-300 uppercase tracking-[0.18em]">
            3.3x blended ROAS
          </p>
</div>

<div className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-4 sm:p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 overflow-hidden rounded-full border border-neutral-700">
<img alt="Founder" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-neutral-50">
                Daniel R.
              </p>
<p className="text-[0.7rem] text-neutral-400">
                CEO, Ember Devices
              </p>
</div>
</div>
<p className="mt-3 text-xs sm:text-sm text-neutral-200/95">
            “The Domination tier basically gives us an internal intel
            division. Monthly competitor breakdowns, opportunity maps, and
            an AI mentor that understands hardware cycles.”
          </p>
<p className="mt-2 text-[0.7rem] font-medium text-emerald-300 uppercase tracking-[0.18em]">
            Launching 2–3 SKUs/month reliably
          </p>
</div>
</div>
</section>

<section className="py-10 sm:py-16 border-t border-neutral-900/80" id="pricing">
<header className="text-center max-w-3xl mx-auto">
<p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/80 px-3 py-1.5 text-xs text-neutral-300 glass-card">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]"></span>
<span className="font-medium tracking-tight">Tiered subscriptions for every growth stage</span>
</p>
<h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-50">
          Pick the intelligence &amp; mentoring stack
          <span className="text-emerald-300">that matches your ambition.</span>
</h2>
<p className="mt-3 text-sm sm:text-base text-neutral-300/90 max-w-2xl mx-auto">
          All plans include core industry intelligence, lead compliance
          monitoring, and AI creative tools. Higher tiers unlock deeper
          mentorship, custom dashboards, and “unlimited” creation.
        </p>
</header>
<div className="mt-8 grid gap-6 lg:gap-8 lg:grid-cols-3 items-stretch">

<article className="group glass-card sm:p-7 lg:p-8 flex flex-col overflow-hidden bg-neutral-900/60 border-neutral-800/90 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute -inset-40 bg-gradient-to-tr from-sky-500/10 via-transparent to-emerald-400/5"></div>
</div>
<div className="relative flex items-center justify-between gap-3 mb-4">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50 flex items-center gap-2">
<span className="text-base">🥉</span> Intelligence
              </h3>
<p className="mt-1 text-sm sm:text-base text-neutral-300/90">
                Essential vape intelligence &amp; core AI tools.
              </p>
</div>
<span className="inline-flex items-center text-[0.7rem] font-medium text-neutral-300 bg-neutral-900/80 border-neutral-700/80 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5">
                  For emerging brands
                </span>
</div>
<div className="relative mt-2 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                    $497
                  </span>
<span className="text-sm sm:text-base text-neutral-400">
                    /month
                  </span>
</div>
<p className="mt-1 text-xs sm:text-sm text-neutral-400">
              Billed monthly. Cancel anytime. Ideal for brands doing up to
              ~$50k/month.
            </p>
</div>
<ul className="relative space-y-3 text-sm sm:text-base text-neutral-200/90 mb-6 flex-1">
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/70 bg-emerald-500/10 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">Weekly AI intelligence newsletter</span>
</li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/70 bg-emerald-500/10 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">Real-time compliance alerts</span>
</li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-400/70 bg-emerald-500/10 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">Social Media Intelligence</span>
</li>
</ul>
<div className="relative mt-2 pt-4 border-t border-neutral-800/80 text-xs sm:text-sm text-neutral-300/90">
<p>
<span className="font-medium text-neutral-100">Best for:</span>
              Solo founders and new brands validating product‑market fit.
            </p>
</div>
<div className="relative mt-5">
<button className="w-full inline-flex items-center justify-center rounded-2xl bg-neutral-50/95 text-neutral-950 font-medium tracking-tight px-4 py-2.5 text-sm sm:text-base hover:bg-white transition-colors shadow-[0_18px_45px_rgba(0,0,0,0.70 )]" type="button">
                  Start with Intelligence
                </button>
</div>
</article>

<article className="relative group rounded-3xl border border-emerald-400/60 bg-gradient-to-b from-neutral-900/60 via-neutral-900/90 to-neutral-950/90 glass-card p-6 sm:p-7 lg:p-8 shadow-[0_30px_120px_rgba(16,185,129,0.55)] flex flex-col overflow-hidden float-card">
<div className="pointer-events-none absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.45),_transparent_55%)]">
</div>
<div className="pointer-events-none absolute inset-0 opacity-100 bg-[linear-gradient(to_bottom_right,rgba(16,185,129,0.12),transparent,rgba(56,189,248,0.08))]">
</div>
<div className="absolute -top-4 right-4 inline-flex items-center gap-1 rounded-full border border-emerald-400/80 bg-neutral-950/90 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-200 shadow-[0_14px_45px_rgba(16,185,129,0.75)]">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.9)]"></span>
            Most popular
          </div>
<div className="relative flex items-center justify-between gap-3 mb-4">
<div className="">
<h3 className="sm:text-2xl flex items-center gap-2 text-xl font-semibold text-neutral-50 tracking-tight"><span className="text-base">⭐</span> Growth</h3>
<p className="mt-1 text-sm sm:text-base text-neutral-200/95">
                Full‑stack growth intelligence &amp; near‑unlimited
                creation.
              </p>
</div>
<span className="inline-flex items-center rounded-full border border-emerald-300/60 bg-emerald-400/10 px-2.5 py-1 text-[0.7rem] font-medium text-emerald-100">
                  Scale faster
                </span>
</div>
<div className="relative mt-2 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                    $997
                  </span>
<span className="text-sm sm:text-base text-emerald-100">
                    /month
                  </span>
</div>
<p className="mt-1 text-xs sm:text-sm text-neutral-200/95">
              Billed monthly. Most teams recover investment in first 30–45
              days.
            </p>
</div>
<div className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-neutral-950/60 border border-emerald-400/40 px-3 py-1 text-[0.7rem] font-medium text-emerald-100">
<svg className="h-3.5 w-3.5 text-emerald-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07l1.77-1.77M17.3 6.7l1.77-1.77">
</path>
</svg>
<span className="">Unlock almost unlimited AI content engines</span>
</div>
<ul className="relative space-y-3 text-sm sm:text-base text-neutral-50 mb-6 flex-1">
<li className="font-medium text-neutral-100">
              Everything in <span className="text-emerald-200">Intelligence</span>, plus:
            </li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-300/80 bg-emerald-400/15 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">Access to 500 enriched leads</span>
</li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-emerald-300/80 bg-emerald-400/15 flex items-center justify-center">
<svg className="h-3 w-3 text-emerald-200" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">AI product photography</span>
</li>
</ul>
<div className="relative mt-2 pt-4 border-t border-emerald-400/40 text-xs sm:text-sm text-emerald-50">
<p>
<span className="font-medium text-emerald-100">Best for:</span>
              Established brands scaling beyond $50k–$250k/month who want
              aggressive but safe growth.
            </p>
</div>
<div className="relative mt-5 space-y-2">
<button className="w-full inline-flex items-center justify-center rounded-2xl bg-emerald-400 text-neutral-900 font-medium tracking-tight px-4 py-2.5 text-sm sm:text-base hover:bg-emerald-300 transition-colors shadow-[0_24px_70px_rgba(16,185,129,0.75 )]" type="button">
                  Scale with Growth
                </button>
<p className="text-[0.7rem] sm:text-xs text-emerald-100/90 text-center">
              Includes white‑glove onboarding &amp; first campaign blueprint.
            </p>
</div>
</article>

<article className="relative group rounded-3xl border border-neutral-800/90 bg-neutral-950/80 glass-card p-6 sm:p-7 lg:p-8 shadow-[0_24px_90px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<div className="absolute -inset-40 bg-gradient-to-tr from-amber-500/16 via-transparent to-emerald-400/12"></div>
</div>
<div className="relative flex items-center justify-between gap-3 mb-4">
<div className="">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-50 flex items-center gap-2">
<span className="text-base">💎</span> Dominate
              </h3>
<p className="mt-1 text-sm sm:text-base text-neutral-200/95">
                Custom intelligence, unlimited everything, VIP strategy.
              </p>
</div>
<span className="inline-flex items-center rounded-full border border-amber-400/80 bg-amber-500/10 px-2.5 py-1 text-[0.7rem] font-medium text-amber-100">
                  Elite brands
                </span>
</div>
<div className="relative mt-2 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-50">
                    $1,997
                  </span>
<span className="text-sm sm:text-base text-neutral-400">
                    /month
                  </span>
</div>
<p className="mt-1 text-xs sm:text-sm text-neutral-300/90">
              Billed monthly. Limited seats per region to preserve
              advantage.
            </p>
</div>
<ul className="relative space-y-3 text-sm sm:text-base text-neutral-100 mb-6 flex-1">
<li className="font-medium text-neutral-100">
              Everything in <span className="text-emerald-200">Growth Engine</span>,
              plus:
            </li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-amber-300/80 bg-amber-400/10 flex items-center justify-center">
<svg className="h-3 w-3 text-amber-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span className="">Access to 100 leads per month</span>
</li>
<li className="flex gap-3">
<span className="mt-1 h-4 w-4 rounded-full border border-amber-300/80 bg-amber-400/10 flex items-center justify-center">
<svg className="h-3 w-3 text-amber-100" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h7l2 3h9v13H3z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
<span>Custom market intelligence dashboard</span>
</li>
</ul>
</article>
</div>
</section>
</main>
</div>
    </>
  );
}
