import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              obs.unobserve(entry.target);
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/60 bg-[#F5F2EA]/80 backdrop-blur">
<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
<div className="text-neutral-900 font-serif-display italic font-medium tracking-tight text-base font-sans">
          Goliath
        </div>
<div className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-neutral-700 md:flex">
<a className="transition-colors hover:text-neutral-900 font-sans" href="#services">Services</a>
<a className="transition-colors hover:text-neutral-900 font-sans" href="#process">Process</a>
<a className="transition-colors hover:text-neutral-900 font-sans" href="#contact">Contact</a>
</div>
<button className="hidden items-center rounded-full border border-neutral-900 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-neutral-50 md:inline-flex font-sans">
          Let’s Talk
        </button>
<button className="md:hidden text-neutral-900">
<svg className="lucide lucide-menu h-5 w-5 stroke-[1.5]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</nav>

<section className="flex min-h-screen text-neutral-900 bg-[#F5F2EA] pt-24 relative items-center">
<div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:px-8 w-full max-w-6xl mr-auto ml-auto pr-4 pl-4 gap-x-16 gap-y-16">

<div className="max-w-2xl space-y-8 reveal active">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 font-sans">
            Expert Advertising
          </p>
<h1 className="text-4xl tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl font-sans font-semibold" style={{}}>
            Turn ad spend into<br/>
            predictable revenue.
          </h1>
<p className="max-w-md text-base font-light leading-relaxed text-neutral-700 sm:text-lg font-sans">
            20+ years of industry experience means I know what works in digital advertising and what doesn’t. Stop guessing, start scaling.
          </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center transition hover:bg-neutral-800 text-sm font-semibold text-neutral-50 bg-neutral-900 rounded-full px-6 py-2.5" href="#contact">
              Let’s Talk
            </a>
<a className="inline-flex items-center justify-center transition hover:bg-neutral-900 hover:text-neutral-50 text-sm font-semibold text-neutral-900 border-neutral-900 border rounded-full px-6 py-2.5" href="#services">
              View Services
            </a>
</div>
</div>

<div className="flex-1 space-y-10 lg:pt-10 reveal delay-100 active">
<p className="leading-relaxed text-sm font-light text-neutral-700">
            David vs. Goliath.
            We help you win.
          </p>
<p className="text-sm font-light leading-relaxed text-neutral-700 font-sans -multi">
            We maximize online advertising to help businesses compete against their Goliaths.
          </p>
<p className="leading-relaxed text-xs font-light text-neutral-600">
            I’m a hands-on Google Ads specialist focused on performance, transparency, and long-term results. No bloated retainers, no junior account managers — just senior-level strategy and execution.
          </p>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-[#F6F3EC] py-10" id="clients">
<div className="mx-auto max-w-6xl space-y-8 px-4 lg:px-8">
<div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-700">
<span className="text-[0.7rem] uppercase tracking-[0.22em] text-neutral-500 font-sans">
            Ad Specializations
          </span>
<div className="flex flex-wrap gap-2">
<button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-800 font-sans">
              Google Search
            </button>
<button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-800 font-sans">
              YouTube
            </button>
<button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-800 font-sans">
              Performance Max
            </button>
<button className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-neutral-800 font-sans">
              Display
            </button>
</div>
</div>
<div className="flex flex-wrap items-center gap-6 text-[0.75rem] font-medium uppercase tracking-[0.22em] text-neutral-500">
<span className="font-sans">Meta Stores</span>
<span className="font-sans">Local Brands</span>
<span className="font-sans">B2B SaaS</span>
<span className="font-sans">DTC Brands</span>
<span className="font-sans">Expert Lawyers</span>
<span className="font-sans">Auto Groups</span>
<span className="font-sans">Non-Profits</span>
<span className="font-sans">Global Orgs</span>
</div>
</div>
</section>

<section className="bg-[#F5F2EA] py-20" id="services">
<div className="mx-auto max-w-6xl px-4 lg:px-8">
<div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
<div className="space-y-3 reveal">
<p className="text-xs font-medium uppercase tracking-[0.22em] text-neutral-500 font-sans">
              Services
            </p>
<h2 className="text-3xl tracking-tight text-neutral-900 sm:text-4xl font-sans font-semibold" style={{}}>
              Services
            </h2>
</div>
<p className="max-w-sm text-sm font-light leading-relaxed text-neutral-700 reveal delay-100 font-sans">
            We partner with you as an extension of your team to build, manage, and scale profitable ad campaigns that support real business growth.
          </p>
</div>
<div className="grid gap-6 md:grid-cols-2">

<article className="reveal group rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6F3EC]">
<svg className="lucide lucide-settings h-4 w-4 stroke-[1.5] text-neutral-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3 15.4 1.65 1.65 0 0 0 1.49 14H1.4a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 3 8.6 1.65 1.65 0 0 0 2.67 6.78l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.49V3.4a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 14 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.09.2.14.42.14.65V10"></path>
</svg>
</div>
<h3 className="mb-2 font-serif-display text-xl tracking-tight text-neutral-900 font-sans">
              Ad Strategy
            </h3>
<p className="mb-4 text-sm font-light leading-relaxed text-neutral-700 font-sans">
              Full-funnel strategy &amp; performance audit. Design a revenue-focused advertising roadmap across Google &amp; paid channels for your brand’s goals.
            </p>
<div className="flex flex-wrap gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-600">
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Workshop</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Audit</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Roadmap</span>
</div>
</article>

<article className="reveal delay-100 group rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6F3EC]">
<svg className="lucide lucide-search h-4 w-4 stroke-[1.5] text-neutral-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<h3 className="mb-2 font-serif-display text-xl tracking-tight text-neutral-900 font-sans">
              Google Ads
            </h3>
<p className="mb-4 text-sm font-light leading-relaxed text-neutral-700 font-sans">
              Always-on campaign setup, structure, &amp; optimization. Become a leader in your category by working with an experienced Google Ads partner.
            </p>
<div className="flex flex-wrap gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-600">
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Search</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Shopping</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">PMax</span>
</div>
</article>

<article className="reveal delay-150 group rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6F3EC]">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 stroke-[1.5] text-neutral-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<rect height="7" rx="1" width="3" x="7" y="8"></rect>
<rect height="10" rx="1" width="3" x="12" y="5"></rect>
<rect height="4" rx="1" width="3" x="17" y="11"></rect>
</svg>
</div>
<h3 className="mb-2 font-serif-display text-xl tracking-tight text-neutral-900 font-sans">
              Analytics &amp; Data
            </h3>
<p className="mb-4 text-sm font-light leading-relaxed text-neutral-700 font-sans">
              All the right Google data foundations and reporting to maximize your ads. Clean, trustable dashboards that measure what actually matters.
            </p>
<div className="flex flex-wrap gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-600">
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">GA4</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Tagging</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Reporting</span>
</div>
</article>

<article className="reveal delay-200 group rounded-xl border border-neutral-200 bg-white p-7 shadow-sm">
<div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#F6F3EC]">
<svg className="lucide lucide-monitor-play h-4 w-4 stroke-[1.5] text-neutral-800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<path d="M12 17v4"></path>
<path d="M8 21h8"></path>
<path d="m10 9 4 3-4 3z"></path>
</svg>
</div>
<h3 className="mb-2 font-serif-display text-xl tracking-tight text-neutral-900 font-sans">
              Ad Coaching
            </h3>
<p className="mb-4 text-sm font-light leading-relaxed text-neutral-700 font-sans">
              Learn Google Ads with a senior expert. Perfect for in‑house teams who want to own their campaigns.
            </p>
<div className="flex flex-wrap gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-neutral-600">
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Training</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Consulting</span>
<span className="rounded-full border border-neutral-300 px-3 py-1 font-sans">Advisory</span>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#F6F3EC] py-16">
<div className="mx-auto max-w-6xl px-4 lg:px-8">
<div className="grid gap-10 md:grid-cols-2">
<div className="reveal space-y-4">
<h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-700 font-sans">
              Why choose Me
            </h3>
<ul className="space-y-3 text-sm font-medium text-neutral-900">
<li className="flex gap-2">
<span className="text-green-600 font-sans">•</span>
<span className="font-sans">Work directly with a senior, not a rotating junior team member.</span>
</li>
<li className="flex gap-2">
<span className="text-green-600 font-sans">•</span>
<span className="font-sans">Clear, consistent communication with focused reports.</span>
</li>
<li className="flex gap-2">
<span className="text-green-600 font-sans">•</span>
<span className="font-sans">Budgets managed as if they were my own.</span>
</li>
<li className="flex gap-2">
<span className="text-green-600 font-sans">•</span>
<span className="font-sans">No long-term contracts — stay because it works.</span>
</li>
</ul>
</div>
<div className="reveal delay-100 space-y-4">
<h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-700 font-sans">
              Other Agencies
            </h3>
<ul className="space-y-3 text-sm font-medium text-neutral-900">
<li className="flex gap-2">
<span className="text-red-500 font-sans">•</span>
<span className="font-sans">Work is passed off to an intern or generalist.</span>
</li>
<li className="flex gap-2">
<span className="text-red-500 font-sans">•</span>
<span className="font-sans">Cluttered decks, vague metrics, and little transparency.</span>
</li>
<li className="flex gap-2">
<span className="text-red-500 font-sans">•</span>
<span className="font-sans">Fee structures that reward spend, not results.</span>
</li>
<li className="flex gap-2">
<span className="text-red-500 font-sans">•</span>
<span className="font-sans">Six‑month contracts before you’ve seen performance.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-white py-20">
<div className="mx-auto max-w-3xl px-4 text-center lg:px-0">
<div className="mb-6 flex justify-center">
<div className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-700 font-sans">
            01
          </div>
</div>
<p className="mb-6 text-2xl leading-relaxed tracking-tight text-neutral-900 font-sans font-semibold" style={{}}>
          “It’s more effective to work directly with an expert. There is no way we could have achieved what we have without Goliath.”
        </p>
<p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 font-sans">
          Jordan Thompson — Head of Growth, Landmark Co.
        </p>
</div>
</section>

<section className="bg-[#F6F3EC] py-20" id="process">
<div className="mx-auto max-w-5xl px-4 lg:px-8">
<div className="mb-12 text-left reveal">
<h2 className="text-3xl tracking-tight text-neutral-900 sm:text-4xl font-sans font-semibold" style={{}}>
            The Process
          </h2>
<p className="mt-2 max-w-xl text-sm font-light text-neutral-700 font-sans">
            We keep things simple so you can stay focused on running your business while we handle performance marketing.
          </p>
</div>
<div className="grid gap-8 md:grid-cols-5">
<div className="flex flex-col items-start space-y-3 text-left reveal">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-xs font-serif-display text-[#F6F3EC] font-sans">
              01
            </div>
<h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 font-sans">
              Chat
            </h3>
<p className="text-xs font-light leading-relaxed text-neutral-600 font-sans">
              Informal call to understand your goals, current setup, and whether we’re a fit.
            </p>
</div>
<div className="flex flex-col items-start space-y-3 text-left reveal delay-100">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-serif-display text-neutral-900 ring-1 ring-neutral-400/60 font-sans">
              02
            </div>
<h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 font-sans">
              Research
            </h3>
<p className="text-xs font-light leading-relaxed text-neutral-600 font-sans">
              Deep dive into your market, audience, and historical performance.
            </p>
</div>
<div className="flex flex-col items-start space-y-3 text-left reveal delay-200">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-serif-display text-neutral-900 ring-1 ring-neutral-400/60 font-sans">
              03
            </div>
<h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 font-sans">
              Strategy
            </h3>
<p className="text-xs font-light leading-relaxed text-neutral-600 font-sans">
              Align on campaign structure, creative needs, and measurement plan.
            </p>
</div>
<div className="flex flex-col items-start space-y-3 text-left reveal delay-300">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-serif-display text-neutral-900 ring-1 ring-neutral-400/60 font-sans">
              04
            </div>
<h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 font-sans">
              Go Live
            </h3>
<p className="text-xs font-light leading-relaxed text-neutral-600 font-sans">
              Launch campaigns and start gathering performance data quickly.
            </p>
</div>
<div className="flex flex-col items-start space-y-3 text-left reveal delay-400">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-serif-display text-neutral-900 ring-1 ring-neutral-400/60 font-sans">
              05
            </div>
<h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-800 font-sans">
              Iterate
            </h3>
<p className="text-xs font-light leading-relaxed text-neutral-600 font-sans">
              Rapid testing, optimization, and clear reporting to keep growing.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F2EA] py-24" id="contact">
<div className="mx-auto max-w-6xl px-4 lg:flex lg:gap-10 lg:px-8">
<div className="mb-10 max-w-md lg:mb-0">
<h2 className="mb-4 text-3xl tracking-tight text-neutral-900 sm:text-4xl font-sans font-semibold" style={{}}>
            Get in<br/>Touch.
          </h2>
<p className="mb-6 text-sm font-light text-neutral-700 font-sans">
            Tell me a bit about your business, your goals, and what you’re currently running. I’ll follow up within 1–2 business days.
          </p>
<div className="rounded-xl border border-neutral-200 bg-white p-5 text-left">
<p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500 font-sans">
              Client Spotlight
            </p>
<p className="mb-3 text-sm font-light text-neutral-800 font-sans">
              “Since hiring Goliath, we’ve seen year‑over‑year growth from paid search without sacrificing profitability.”
            </p>
<p className="text-[0.75rem] font-medium text-neutral-600 font-sans">
              Melissa R.
              VP Marketing, Retail Brand
            </p>
</div>
</div>
<div className="flex-1 rounded-xl border border-neutral-200 bg-white p-6">
<form className="space-y-4 text-left">
<div>
<label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 font-sans">
                Name
              </label>
<input className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white" placeholder="Enter your name" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 font-sans">
                Email
              </label>
<input className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white" placeholder="Enter your email" type="email"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 font-sans">
                Company
              </label>
<input className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white" placeholder="Where do you work?" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium uppercase tracking-[0.2em] text-neutral-600 font-sans">
                What can I help with?
              </label>
<textarea className="w-full rounded-md border border-neutral-300 bg-neutral-50 px-3 py-2 text-sm text-neutral-900 outline-none transition focus:border-neutral-900 focus:bg-white" placeholder="Share a bit about your goals, challenges, and timelines." rows="4"></textarea>
</div>
<button className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-neutral-800 font-sans" type="button">
              Submit Inquiry
            </button>
<p className="pt-2 text-[0.65rem] text-neutral-500 font-sans">
              No spam, no pressure. Just an honest conversation about whether I can help.
            </p>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-[#F6F3EC] py-10 text-neutral-500">
<div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 text-[0.75rem] font-light lg:flex-row lg:items-center lg:justify-between lg:px-8">
<div className="space-y-2">
<p className="text-[0.7rem] uppercase tracking-[0.22em] text-neutral-600 font-sans">
            Goliath
          </p>
<p className="leading-relaxed font-sans">
            Paid search &amp; performance advertising for brands ready to scale with clarity and control.
          </p>
</div>
<div className="flex flex-wrap items-center gap-6">
<nav className="flex gap-4 text-[0.7rem] uppercase tracking-[0.18em]">
<a className="transition-colors hover:text-neutral-800 font-sans" href="#services">Services</a>
<a className="transition-colors hover:text-neutral-800 font-sans" href="#process">Process</a>
<a className="transition-colors hover:text-neutral-800 font-sans" href="#contact">Contact</a>
</nav>
<p className="text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500 font-sans">
            © 2024 Goliath. All rights reserved.
          </p>
</div>
</div>
</footer>


    </>
  );
}
