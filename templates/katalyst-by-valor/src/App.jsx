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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Hero Elements Initial Reveal
            const heroElements = document.querySelectorAll('.hero-reveal');
            heroElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.remove('opacity-0', 'blur-md', 'translate-y-8');
                    // Remove transition classes after animation completes so standard hover states aren't sluggish
                    setTimeout(() => {
                        el.classList.remove('transition-all', 'duration-[800ms]', 'ease-out');
                    }, 800);
                }, 100 + (index * 150));
            });

            // Scroll Elements Staggered Reveal
            let delayCount = 0;
            let resetTimer;
            
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -50px 0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.remove('opacity-0', 'blur-md', 'translate-y-8');
                            setTimeout(() => {
                                entry.target.classList.remove('transition-all', 'duration-[800ms]', 'ease-out');
                            }, 800);
                        }, delayCount * 100);
                        
                        delayCount++;
                        clearTimeout(resetTimer);
                        resetTimer = setTimeout(() => { delayCount = 0; }, 100);
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.scroll-reveal');
            scrollElements.forEach(el => observer.observe(el));
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10 brightness-75 blur-sm" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d73244aa-c23a-4f5d-a2a0-182bb8d04c15_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/[0.04] bg-[#0a0a0a]/70">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="uppercase text-lg font-medium tracking-tighter text-neutral-50">Katalyst</span>
</div>
<div className="hidden md:flex items-center gap-8 text-neutral-500 font-medium">
<a className="transition-colors hover:text-neutral-200" href="#vision">Vision</a>
<a className="transition-colors hover:text-neutral-200" href="#suite">The Suite</a>
<a className="transition-colors hover:text-neutral-200" href="#roadmap">Roadmap</a>
<a className="transition-colors hover:text-neutral-200" href="#pricing">Pricing</a>
</div>
<div>
<a className="px-4 py-1.5 rounded-full font-medium transition-colors bg-neutral-50 text-neutral-950 hover:bg-neutral-200" href="#pricing">Get Started</a>
</div>
</div>
</nav>

<main className="flex-grow overflow-hidden flex flex-col pt-32 pb-24 relative items-center justify-center">

<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="hero-reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-xs font-medium mb-8 tracking-tight text-neutral-300">
<iconify-icon className="text-neutral-50" icon="solar:bolt-linear"></iconify-icon>
                The 8-Week Agency Transformation
            </div>
<h1 className="hero-reveal md:text-7xl leading-[1.1] text-5xl font-semibold tracking-tighter mb-6 text-neutral-50">
                Transform your agency into a <span className="bg-clip-text text-transparent bg-gradient-to-r to-neutral-500 from-neutral-50">hyper-efficient machine.</span>
</h1>
<p className="hero-reveal text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-light text-neutral-400">
                Agencies are bleeding margins on manual tasks. We build high-performance AI systems that handle the execution, so your team can focus exclusively on strategy and closing deals.
            </p>
<div className="hero-reveal flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-sm transition-all bg-neutral-50 text-neutral-950 hover:bg-neutral-200" href="#pricing">
                    View the Investment
                </a>
<a className="w-full sm:w-auto px-6 py-3 border border-white/[0.08] rounded-full font-medium text-sm hover:bg-white/[0.02] transition-all flex items-center justify-center gap-2 text-neutral-50" href="#suite">
                    Explore the Arsenal <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</main>

<section className="border-y border-white/[0.04] bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out max-w-xl">
<h2 className="text-2xl font-medium tracking-tight mb-2 text-neutral-50">The Katalyst Offer</h2>
<p className="text-sm leading-relaxed text-neutral-400">
                    We help your agency replace manual work with high-performance AI systems, achieving operational efficiency worth <span className="font-medium text-neutral-50">$3,000 to $10,000</span> within exactly 8 weeks of implementation.
                </p>
</div>
<div className="scroll-reveal flex-shrink-0 grid grid-cols-2 gap-4">
<div className="border border-white/[0.04] bg-[#0a0a0a] rounded-xl p-4 flex flex-col items-start">
<iconify-icon className="text-xl mb-2 text-neutral-50" icon="solar:timer-linear"></iconify-icon>
<span className="font-medium tracking-tight text-neutral-50">8 Weeks</span>
<span className="text-xs text-neutral-500">Implementation</span>
</div>
<div className="border border-white/[0.04] bg-[#0a0a0a] rounded-xl p-4 flex flex-col items-start">
<iconify-icon className="text-xl mb-2 text-neutral-50" icon="solar:graph-up-linear"></iconify-icon>
<span className="font-medium tracking-tight text-neutral-50">Up to $10k</span>
<span className="text-xs text-neutral-500">Efficiency Gained</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-24" id="vision">
<div className="scroll-reveal">
<div className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-4">The Problem</div>
<h3 className="text-3xl font-medium tracking-tight mb-6 text-neutral-50">Bleeding margins and burnout.</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                From writing personalized cold emails and drafting onboarding contracts to taking meeting notes and digging for qualified leads, human capital is being wasted on low-leverage admin work. This creates an operational bottleneck that caps revenue and prevents scaling.
            </p>
</div>
<div className="scroll-reveal">
<div className="text-xs font-medium text-neutral-500 tracking-tight uppercase mb-4">Our Vision</div>
<h3 className="text-3xl font-medium tracking-tight mb-6 text-neutral-50">Operate like modern SaaS.</h3>
<p className="text-sm leading-relaxed text-neutral-400">
                We envision a future where your agency operates with sleek, automated precision. Allow your team to focus exclusively on high-level strategy and client relationships while AI handles the execution in the background.
            </p>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-t border-white/[0.04]" id="suite">
<div className="max-w-7xl mx-auto px-6">
<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-50">The Automation Suite</h2>
<p className="text-base max-w-2xl text-neutral-400">Our arsenal of AI agents designed to replace manual bottlenecks across your entire operational pipeline.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Lead Enrichment</h4>
<p className="text-sm leading-relaxed text-neutral-400">Prompt the agent with ICP criteria. It scours the web, finds verified leads, qualifies them, and injects them into your CRM.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Email Marketing</h4>
<p className="text-sm leading-relaxed text-neutral-400">AI researches prospects individually and creates hyper-personalized, ready-to-send copy for high-converting mass campaigns.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">AI Cold Caller</h4>
<p className="text-sm leading-relaxed text-neutral-400">An indistinguishably human voice agent that calls, handles objections, navigates gatekeepers, and books meetings. Zero burnout.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:radar-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Autopilot Prospecting</h4>
<p className="text-sm leading-relaxed text-neutral-400">Continuous, around-the-clock discovery and scoring of ideal-fit prospects from LinkedIn and industry databases.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group lg:col-span-2">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:user-speak-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">LinkedIn Brand Builder</h4>
<p className="text-sm leading-relaxed max-w-lg text-neutral-400">AI drafts thought leadership posts in your authentic voice, schedules them, and engages with trending threads to drive inbound leads organically.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Onboarding Contracts</h4>
<p className="text-sm leading-relaxed text-neutral-400">Auto-generated, legally sound, and instantly routed for e-signature the moment a deal is won in your CRM.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Design Automation</h4>
<p className="text-sm leading-relaxed text-neutral-400">Generate brand-perfect proposal decks, social graphics, and reports directly from a brief or data set.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:pen-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Email Composer</h4>
<p className="text-sm leading-relaxed text-neutral-400">Type a plain-language one-liner; AI delivers a fully structured, on-brand email instantly.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group lg:col-span-2 xl:col-span-1">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:microphone-3-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">AI Notes Taker</h4>
<p className="text-sm leading-relaxed text-neutral-400">Invisibly joins meetings, transcribes, extracts action items, assigns owners, and syncs directly to your CRM.</p>
</div>

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-2xl p-6 hover:bg-white/[0.02] transition-colors group lg:col-span-3 xl:col-span-2">
<div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center mb-4 group-hover:text-neutral-50 transition-colors bg-neutral-900 text-neutral-300">
<iconify-icon icon="solar:bill-linear" width="20"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 text-neutral-50">Invoice Generation</h4>
<p className="text-sm leading-relaxed max-w-xl text-neutral-400">Auto-drafts, brands, and dispatches invoices the moment project milestones are hit, complete with payment links and auto-reminders to ensure you get paid faster without the admin overhead.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6" id="roadmap">
<div className="scroll-reveal text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-50">Implementation Roadmap</h2>
<p className="text-base text-neutral-400">The structured 8-week transformation process.</p>
</div>
<div className="relative border-l border-white/[0.08] ml-4 md:ml-0 md:border-none space-y-12">

<div className="scroll-reveal relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center group">
<div className="hidden md:block text-right">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Discovery &amp; Architecture</h4>
<p className="text-sm text-neutral-500 mt-1">Weeks 1–2</p>
</div>
<div className="absolute left-0 top-1 md:relative md:top-auto w-2 h-2 -translate-x-[5px] md:translate-x-0 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-neutral-300 transition-colors bg-neutral-700"></div>
<div className="md:hidden mb-2">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Discovery &amp; Architecture</h4>
<p className="text-xs text-neutral-500 mt-1">Weeks 1–2</p>
</div>
<div className="border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 md:p-6 text-sm text-neutral-400">
<ul className="space-y-3">
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Deep-dive audit of your current manual bottlenecks.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Mapping out custom workflows, defining exact ICP, and capturing brand voice.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Connecting Katalyst infrastructure to existing CRM and channels.</li>
</ul>
</div>
</div>

<div className="scroll-reveal relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center group">
<div className="border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 md:p-6 text-sm md:order-1 order-last text-neutral-400">
<ul className="space-y-3">
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Constructing AI agents (Cold Caller, Notes Taker, Email Composer).</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Setting up dynamic templates for contracts, invoices, and design.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Building automated scraping and enrichment pipelines.</li>
</ul>
</div>
<div className="absolute left-0 top-1 md:relative md:top-auto w-2 h-2 -translate-x-[5px] md:translate-x-0 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-neutral-300 transition-colors md:order-2 bg-neutral-700"></div>
<div className="md:hidden mb-2">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Build &amp; Integration</h4>
<p className="text-xs text-neutral-500 mt-1">Weeks 3–4</p>
</div>
<div className="hidden md:block text-left md:order-3">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Build &amp; Integration</h4>
<p className="text-sm text-neutral-500 mt-1">Weeks 3–4</p>
</div>
</div>

<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center group">
<div className="hidden md:block text-right">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Testing &amp; Calibration</h4>
<p className="text-sm text-neutral-500 mt-1">Weeks 5–6</p>
</div>
<div className="absolute left-0 top-1 md:relative md:top-auto w-2 h-2 -translate-x-[5px] md:translate-x-0 rounded-full ring-4 ring-[#0a0a0a] group-hover:bg-neutral-300 transition-colors bg-neutral-700"></div>
<div className="md:hidden mb-2">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Testing &amp; Calibration</h4>
<p className="text-xs text-neutral-500 mt-1">Weeks 5–6</p>
</div>
<div className="border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 md:p-6 text-sm text-neutral-400">
<ul className="space-y-3">
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Internal test runs of all automated systems.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Dialing in the AI Cold Caller script and objection handling.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Refining hyper-personalization engines to sound 100% human.</li>
</ul>
</div>
</div>

<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out relative pl-8 md:pl-0 md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center group">
<div className="border border-white/[0.04] bg-white/[0.01] rounded-2xl p-5 md:p-6 text-sm md:order-1 order-last text-neutral-400">
<ul className="space-y-3">
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Flipping the switch. Systems go live in day-to-day operations.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-600" icon="solar:check-circle-linear"></iconify-icon> Training core team on how to monitor and prompt agents.</li>
<li className="flex gap-3"><iconify-icon className="shrink-0 mt-0.5 text-neutral-50" icon="solar:check-circle-linear"></iconify-icon> <span className="text-neutral-300">Hitting the guaranteed efficiency metric ($3k–$10k value generated).</span></li>
</ul>
</div>
<div className="absolute left-0 top-1 md:relative md:top-auto w-2 h-2 -translate-x-[5px] md:translate-x-0 rounded-full ring-4 ring-[#0a0a0a] md:order-2 shadow-[0_0_10px_rgba(255,255,255,0.5)] bg-neutral-300"></div>
<div className="md:hidden mb-2">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Deployment &amp; Handover</h4>
<p className="text-xs text-neutral-500 mt-1">Weeks 7–8</p>
</div>
<div className="hidden md:block text-left md:order-3">
<h4 className="text-lg font-medium tracking-tight text-neutral-50">Deployment &amp; Handover</h4>
<p className="text-sm text-neutral-500 mt-1">Weeks 7–8</p>
</div>
</div>

<div className="hidden md:block absolute top-6 bottom-6 left-1/2 w-px bg-white/[0.08] -translate-x-1/2 -z-10"></div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-t border-white/[0.04]" id="pricing">
<div className="max-w-5xl mx-auto px-6">
<div className="scroll-reveal opacity-0 blur-md translate-y-8 transition-all duration-[800ms] ease-out text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-neutral-50">The Investment</h2>
<p className="text-base text-neutral-400">Designed to scale effortlessly with your agency's growth.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 items-center">

<div className="scroll-reveal border border-white/[0.04] bg-[#0a0a0a] rounded-3xl p-8 h-full flex flex-col">
<h3 className="text-xl font-medium tracking-tight mb-2 text-neutral-50">A La Carte</h3>
<p className="text-sm text-neutral-500 mb-6 border-b border-white/[0.04] pb-6">For agencies looking to solve specific bottlenecks.</p>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-neutral-50">$225</span>
<span className="text-sm text-neutral-500">/mo per tool</span>
</div>
<ul className="space-y-4 text-sm mb-8 flex-grow text-neutral-400">
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon> Select any individual tool from the suite</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon> Standard integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-600" icon="solar:check-read-linear"></iconify-icon> Email support</li>
</ul>
<button className="w-full py-3 border border-white/[0.08] rounded-full font-medium text-sm hover:bg-white/[0.02] transition-colors text-neutral-50">
                        Choose Tools
                    </button>
</div>

<div className="scroll-reveal border border-white/[0.1] rounded-3xl p-8 relative h-full flex flex-col shadow-[0_0_40px_rgba(255,255,255,0.02)] bg-neutral-900/20">
<div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 text-xs font-medium rounded-full tracking-tight bg-neutral-50 text-neutral-950">
                        Maximum ROI
                    </div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-neutral-50">The Full Agency Package</h3>
<p className="text-sm mb-6 border-b border-white/[0.04] pb-6 text-neutral-400">Replaces multiple full-time administrative roles.</p>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tighter text-neutral-50">$2,000</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 text-sm mb-8 flex-grow text-neutral-300">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 shrink-0 text-neutral-50" icon="solar:check-read-linear"></iconify-icon>
<span><strong className="font-medium text-neutral-50">Complete Suite:</strong> All Katalyst automations running in sync</span>
</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-50" icon="solar:check-read-linear"></iconify-icon> Full 8-Week Implementation Roadmap</li>
<li className="flex items-center gap-3"><iconify-icon className="text-neutral-50" icon="solar:check-read-linear"></iconify-icon> Custom workflow architecture</li>
</ul>
<button className="w-full py-3 rounded-full font-medium text-sm transition-colors bg-neutral-50 text-neutral-950 hover:bg-neutral-200">
                        Start the Transformation
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-white/[0.04] bg-[#0a0a0a] border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex gap-2 uppercase text-lg font-medium text-neutral-50 tracking-tighter gap-x-2 gap-y-2 items-center">Katalyst</div>
<div className="text-xs text-neutral-600">
                © 2024 Katalyst AI. All rights reserved. Elevating agency operations.
            </div>
<div className="flex items-center gap-4 text-neutral-500">
<a className="transition-colors hover:text-neutral-300" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-neutral-300" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
