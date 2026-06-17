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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div></div></div>
<div className="noise-bg"></div>

<nav className="fixed top-0 left-0 right-0 z-40 border-b backdrop-blur-md border-white/5 bg-black/50" style={{}}>
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">Collective</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="transition-colors duration-200 hover:text-white" href="#how-it-works">How it Works</a>
</div>
<a className="group flex items-center gap-2 transition-all hover:bg-neutral-200 text-xs font-medium text-black bg-white rounded pt-1.5 pr-3 pb-1.5 pl-3" href="https://ivory-sumac-e99.notion.site/2ecc7693aa038074a42ed62274e5334d?pvs=105">Join
                the Pilot </a>
</div>
</nav>

<header className="md:pt-48 md:pb-32 max-w-7xl border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-full border mb-8 border-white/10 bg-white/5">
<span className="flex h-1.5 w-1.5 rounded-full bg-violet-500"></span>
<span className="text-xs font-medium text-neutral-300" style={{}}>Accepting applications for Sydney Pilot</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] glow-text text-4xl font-medium text-white tracking-tight mb-8" style={{}}>The future of product building is <span className="text-neutral-400">collective.</span></h1>
<p className="md:text-xl leading-relaxed text-lg text-neutral-400 max-w-2xl">
                What if teachers, social workers, and everyday people could participate in building software products and earn equity? We are rotating teams building real software in public.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center transition focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-900 hover:bg-neutral-200 text-sm font-medium text-black bg-white h-10 rounded pr-6 pl-6" href="https://ivory-sumac-e99.notion.site/2ecc7693aa038074a42ed62274e5334d?pvs=105" rel="noopener noreferrer" target="_blank">
                    Commit your interest
                </a>
<a className="inline-flex items-center justify-center transition focus:outline-none hover:bg-white/5 hover:text-white text-sm font-medium text-neutral-300 bg-transparent h-10 border-white/10 border rounded pr-6 pl-6" href="#manifesto">
                    Read Manifesto
                </a>
</div>
</div>
</header>

<section className="border-white/5 border-b pt-24 pb-24" id="manifesto">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 text-white">
                    The solo founder narrative is a lie.
                </h2>
<div className="space-y-6 text-base leading-relaxed text-neutral-400">
<p className="">
                        Most people can't do it alone. But what if we didn't have to?
                        Software is mostly built by a small, gate-kept group in a few tech hubs, optimized for engagement rather than collective wellbeing.
                    </p>
<p className="">
                        We’re launching a collective product-building initiative where rotating teams of everyday people build real software in public, share ownership, and prove that the future of work belongs to all of us.
                    </p>
</div>
</div>
<div className="glass-panel p-8 rounded-xl">
<div className="flex items-start gap-4 mb-6">
<div className="p-2 rounded border bg-neutral-900 border-neutral-800 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<div>
<h3 className="font-medium mb-1 text-white">Our One-Liner</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                            Collective is an in-person, AI-accelerated product studio where rotating cohorts of designers, engineers, and product thinkers co-create digital products—and share in the value they generate.
                        </p>
</div>
</div>
<div className="h-px w-full my-6 bg-white/5"></div>
<div className="grid grid-cols-2 gap-4">
<div className="">
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Model</span>
<span className="text-sm text-neutral-300" style={{}}>Rotating Cohorts</span>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Equity</span>
<span className="text-sm text-neutral-300" style={{}}>Shared Ownership</span>
</div>
<div className="">
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Tools</span>
<span className="text-sm text-neutral-300" style={{}}>AI Accelerated</span>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-wider mb-1">Output</span>
<span className="text-sm text-neutral-300" style={{}}>Real Products</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-900/20 pt-24 pb-24" id="how-it-works">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-white">How It Works</h2>
<p className="text-neutral-500">Applying the logic of housing collectives to software.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group transition duration-300 hover:bg-neutral-900/50 hover:border-white/10 bg-neutral-900/30 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative">
<div className="mb-4 text-neutral-300" style={{}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<h3 className="text-sm font-medium text-white mb-2">Real Problem, Real Solution, Real Business</h3>
<p className="leading-relaxed text-sm text-neutral-500">
                        Each cycle starts with a tangible problem. Not a case study, but a product that ships and grows.
                    </p>
</div>

<div className="group relative p-6 rounded-xl border transition duration-300 border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10" style={{}}>
<div className="mb-4 text-neutral-300" style={{}}>
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white">Rotating Cohorts</h3>
<p className="leading-relaxed text-sm text-neutral-500">Small teams (5-10) commit for ~2 months. Each cohort inherits the previous team's artefacts and pushes forward. </p>
</div>

<div className="group relative p-6 rounded-xl border transition duration-300 border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10" style={{}}>
<div className="mb-4 text-neutral-300" style={{}}>
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white">Multidisciplinary Design</h3>
<p className="leading-relaxed text-sm text-neutral-500">Anyone willing to commit - designers, engineers, data people, and domain experts (artists, teachers) mixed together. Roles are fluid.</p>
</div>

<div className="group relative p-6 rounded-xl border transition duration-300 border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10" style={{}}>
<div className="mb-4 text-neutral-300" style={{}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white">AI-Accelerated</h3>
<p className="leading-relaxed text-sm text-neutral-500">We use modern AI tools to rapidly explore, prototype, validate and ship. Go from discovery, idea to product or service in weeks, not years.</p>
</div>

<div className="group relative p-6 rounded-xl border transition duration-300 border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10" style={{}}>
<div className="mb-4 text-neutral-300" style={{}}>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M14 8V6c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-2"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white">Built in Public</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Decision logs, trade-offs, and reflections are open. A public learning archive of how better products are made.
                    </p>
</div>

<div className="group relative p-6 rounded-xl border transition duration-300 border-white/5 bg-neutral-900/30 hover:bg-neutral-900/50 hover:border-white/10" style={{}}>
<div className="mb-4 text-neutral-300" style={{}}>
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<h3 className="text-sm font-medium mb-2 text-white">Shared Value</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Contributors share in the upside. We are prototyping fair models for equity and revenue participation.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-white">Why Now?</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<div className="">
<h3 className="font-medium mb-2 text-white">AI Tooling</h3>
<p className="leading-relaxed text-sm text-neutral-400">Modern code-assist and LLMs make small, rotating multidisciplinary teams productive enough to ship serious products quickly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div className="">
<h3 className="font-medium mb-2 text-white">Shift in Work</h3>
<p className="leading-relaxed text-sm text-neutral-400">More people are freelance, fractional, and portfolio-driven. The 9-5 solo career track is fading, but not everyone can be the solo-founder genius. More people are worried that their jobs will become irrelevant amid the boom in GenAI.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="m16 12-4-4-4 4"></path><path d="M12 16V8"></path></svg>
</div>
<div className="">
<h3 className="font-medium mb-2 text-white">Demand for Meaning</h3>
<p className="leading-relaxed text-sm text-neutral-400">Dreamers, Designer and Builders want work that is ethical, communal, and impactful - not just another growth-at-all-costs app.</p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl border h-fit border-white/5" style={{}}>
<h3 className="text-lg font-medium text-white mb-6">This is not a bootcamp or hackathon!</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="flex-shrink-0 mt-0.5 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
<span className=""> Participants ship a real, public product, not mock briefs.</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="flex-shrink-0 mt-0.5 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
<span className=""> Responsibility continues across cohorts, not just a 48-hour hackathon.</span>
</li>
<li className="flex items-start gap-3 text-sm text-neutral-400">
<svg className="flex-shrink-0 mt-0.5 text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><path d="M20 6 9 17l-5-5"></path></svg>
<span className=""> Authorship and upside are genuinely distributed.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative" id="apply">
<div className="text-center max-w-2xl mr-auto ml-auto pr-6 pl-6">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">Join the First Pilot</h2>
<p className="leading-relaxed text-neutral-400 mb-10">We’re assembling the first experimental cohort in <span className="text-white">Sydney</span>. We're looking for passionate humans, regardless of whether you're a designer, an engineer, a data scientist, a systems thinker, or a "cross-pollinator" ... we're seeking people ready to experiment with a new way of working.
People ready to commit 8 consecutive Saturdays. Is this you?</p>
<form className="md:p-8 cursor-pointer text-left bg-neutral-900/40 border-white/5 border rounded-xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm" onclick="window.location.href='/&lt;iframe src=&quot;https://ivory-sumac-e99.notion.site/ebd//2ecc7693aa038074a42ed62274e5334d&quot; width=&quot;100%&quot; height=&quot;600&quot; frameborder=&quot;0&quot; allowfullscreen /&gt;'" role="button">
<div className="space-y-4 cursor-pointer" https:="https://ivory-sumac-e99.notion.site/2ecc7693aa038074a42ed62274e5334d?pvs=105" onclick="window.location.href=" role="button">
<button className="flex transition hover:bg-neutral-200 cursor-pointer text-sm font-medium text-black bg-white w-full h-10 rounded mt-2 items-center justify-center" https:="https://ivory-sumac-e99.notion.site/2ecc7693aa038074a42ed62274e5334d?pvs=105" onclick="window.location.href=;window.location.href=" type="button">Commit your Interest</button>
</div>
<p className="text-[14px] text-neutral-600 text-center mt-4">
    Early cycles are experiments. We’ll learn what works together.
  </p>
</form>
</div>
</section>

<footer className="bg-black border-white/5 border-t py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="">
<div className="flex items-center gap-2 mb-2">
<svg className="text-zinc-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-xs font-semibold tracking-[0.2em] text-neutral-500 uppercase">Collective</span>
</div>
<p className="text-xs max-w-xs text-neutral-600">
                    Reimagining work in an AI world. Designing beyond the individual user.
                </p>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="transition hover:text-neutral-300" href="#" style={{}}>Manifesto</a>
<a className="transition hover:text-neutral-300" href="#" style={{}}>Sponsor</a>
<a className="transition hover:text-neutral-300" href="#" style={{}}>Twitter</a>
<a className="transition hover:text-neutral-300" href="#" style={{}}>Contact</a>
</div>
</div>
</footer>
    </>
  );
}
