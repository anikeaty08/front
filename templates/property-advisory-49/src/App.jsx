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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
<a className="text-lg font-medium tracking-tighter text-slate-900" href="#">
                PROP<span className="text-slate-400">/</span>ADV
            </a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#process">Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#results">Results</a>
</div>
<a className="inline-flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-slate-800" href="#book">
                Book Fit Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32">

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="mx-auto max-w-3xl px-6 text-center">
<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-slate-600">Taking 5 new clients for October</span>
</div>
<h1 className="mb-6 text-5xl font-medium tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
                Secure a quality investment property in 5 days.
            </h1>
<p className="mx-auto mb-10 max-w-xl text-lg text-slate-500 font-normal leading-relaxed">
                For busy Australian professionals. We handle the search, diligence, and negotiation. If you don't find a property you love in 21 days, we keep working for free.
            </p>
<div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
<a className="inline-flex h-12 items-center gap-2 rounded-lg bg-slate-900 px-8 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-transform hover:-translate-y-0.5" href="#book">
                    Book a 10-Minute Fit Call
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-2 px-4 text-xs font-medium text-slate-500">
<iconify-icon className="text-slate-900" icon="solar:shield-check-linear" width="18"></iconify-icon>
                    Risk-free 21-day guarantee
                </div>
</div>

<div className="mt-16 grid grid-cols-1 gap-4 border-t border-slate-100 pt-8 text-sm text-slate-500 sm:grid-cols-3">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
                    No endless Saturdays
                </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:close-circle-linear"></iconify-icon>
                    No guesswork
                </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-slate-400" icon="solar:check-circle-linear"></iconify-icon>
                    Buying power &amp; speed
                </div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-12">
<div className="mx-auto max-w-6xl px-6">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4">
<div className="text-center">
<div className="text-3xl font-medium tracking-tight text-slate-900">$250M+</div>
<div className="mt-1 text-xs text-slate-500">Property Purchased</div>
</div>
<div className="text-center">
<div className="text-3xl font-medium tracking-tight text-slate-900">5 Days</div>
<div className="mt-1 text-xs text-slate-500">Avg. to Shortlist</div>
</div>
<div className="text-center">
<div className="text-3xl font-medium tracking-tight text-slate-900">120+</div>
<div className="mt-1 text-xs text-slate-500">Professionals Helped</div>
</div>
<div className="text-center">
<div className="text-3xl font-medium tracking-tight text-slate-900">100%</div>
<div className="mt-1 text-xs text-slate-500">Independent Advice</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="process">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-16 md:text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">Your First 5 Days</h2>
<p className="mt-4 text-slate-500">We move fast so you don't miss opportunities. Here is the deliverable.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Curated Shortlist</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        We filter 100+ listings down to the best 1-3. No fluff. Only properties that match your strategy perfectly.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Data-Backed Logic</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        Full due diligence. Rental demand snapshots, capital growth drivers, and comparable sales analysis.
                    </p>
</div>

<div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
<iconify-icon icon="solar:traffic-light-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-2 text-lg font-medium text-slate-900">Clear Advice</h3>
<p className="text-sm leading-relaxed text-slate-500">
                        A binary "Buy" or "Don't Buy" recommendation. We are not afraid to tell you to walk away from a bad deal.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24" id="services">
<div className="mx-auto max-w-6xl px-6">
<div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">Choose your level</h2>
<p className="mt-4 max-w-md text-slate-500">Transparent service tiers designed for where you are in your journey.</p>
</div>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mb-4 text-sm font-medium text-slate-400">Level 1</div>
<h3 className="text-xl font-medium text-slate-900">Buyers Assist</h3>
<p className="mt-2 text-sm text-slate-500">For investors who need one property, fast.</p>
<ul className="my-8 flex-1 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Full market search &amp; shortlist
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Due diligence &amp; valuation
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Negotiation &amp; auction bidding
                        </li>
</ul>
<a className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50" href="#book">
                        Select Assist
                    </a>
</div>

<div className="relative flex flex-col rounded-2xl border border-slate-900 bg-slate-900 p-8 shadow-xl">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white">
                        Most Popular
                    </div>
<div className="mb-4 text-sm font-medium text-slate-400">Level 2</div>
<h3 className="text-xl font-medium text-white">Investor Pro</h3>
<p className="mt-2 text-sm text-slate-400">Strategy + Execution to avoid mistakes.</p>
<ul className="my-8 flex-1 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 shrink-0 text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Buyers Assist
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 shrink-0 text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Personalized Investment Strategy
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 shrink-0 text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Cashflow &amp; growth modelling
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 shrink-0 text-white" icon="solar:check-circle-linear"></iconify-icon>
                            Long-term portfolio map
                        </li>
</ul>
<a className="block w-full rounded-lg bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:bg-slate-100" href="#book">
                        Select Pro
                    </a>
</div>

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
<div className="mb-4 text-sm font-medium text-slate-400">Level 3</div>
<h3 className="text-xl font-medium text-slate-900">Investor 360</h3>
<p className="mt-2 text-sm text-slate-500">Hands-off, end-to-end portfolio building.</p>
<ul className="my-8 flex-1 space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Investor Pro
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Ongoing portfolio review
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Property management selection
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="mt-0.5 shrink-0 text-slate-900" icon="solar:check-circle-linear"></iconify-icon>
                            Multi-property scaling plan
                        </li>
</ul>
<a className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium text-slate-900 transition-colors hover:border-slate-300 hover:bg-slate-50" href="#book">
                        Select 360
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-6xl px-6">
<div className="grid gap-12 md:grid-cols-2">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">The Simple Path.</h2>
<p className="mt-4 max-w-md text-slate-500">You are busy. We have a process that removes the noise and gets results.</p>
</div>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900">1</div>
<div>
<h4 className="font-medium text-slate-900">Book a Fit Call</h4>
<p className="mt-1 text-sm text-slate-500">We chat for 15 minutes. We check your budget and goals. If we can't help, we tell you immediately.</p>
</div>
</div>
<div className="h-px w-full bg-slate-100 pl-12"></div>
<div className="flex gap-4">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900">2</div>
<div>
<h4 className="font-medium text-slate-900">We Hunt &amp; Shortlist</h4>
<p className="mt-1 text-sm text-slate-500">We research off-market and on-market deals. We present the top 3 within 5-21 days.</p>
</div>
</div>
<div className="h-px w-full bg-slate-100 pl-12"></div>
<div className="flex gap-4">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-xs font-medium text-slate-900">3</div>
<div>
<h4 className="font-medium text-slate-900">You Buy with Confidence</h4>
<p className="mt-1 text-sm text-slate-500">We negotiate the price, organize building inspections, and guide you to settlement.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24" id="results">
<div className="mx-auto max-w-6xl px-6">
<h2 className="mb-12 text-3xl font-medium tracking-tight text-slate-900">Recent Acquisitions</h2>
<div className="grid gap-6 md:grid-cols-3">

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
<div className="aspect-[4/3] bg-slate-200 relative group">

<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
<iconify-icon className="opacity-20" icon="solar:home-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 rounded bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">Brisbane North</div>
</div>
<div className="p-6">
<div className="mb-4 flex items-baseline justify-between">
<span className="text-sm font-medium text-slate-900">$645k</span>
<span className="text-xs text-green-600">Bought under value</span>
</div>
<p className="text-sm text-slate-500">
<strong>Why:</strong> High gentrification zone. Large block. Cosmetic reno potential.
                        </p>
<div className="mt-4 flex gap-4 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 5.2% Yield</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Found in 6 days</span>
</div>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
<div className="aspect-[4/3] bg-slate-200 relative group">
<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
<iconify-icon className="opacity-20" icon="solar:home-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 rounded bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">Regional VIC</div>
</div>
<div className="p-6">
<div className="mb-4 flex items-baseline justify-between">
<span className="text-sm font-medium text-slate-900">$520k</span>
<span className="text-xs text-green-600">Positive Cashflow</span>
</div>
<p className="text-sm text-slate-500">
<strong>Why:</strong> Tight rental market (0.8% vacancy). Immediate cashflow neutral.
                        </p>
<div className="mt-4 flex gap-4 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 6.1% Yield</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Found in 11 days</span>
</div>
</div>
</div>

<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
<div className="aspect-[4/3] bg-slate-200 relative group">
<div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
<iconify-icon className="opacity-20" icon="solar:home-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 rounded bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 backdrop-blur-sm">Perth Metro</div>
</div>
<div className="p-6">
<div className="mb-4 flex items-baseline justify-between">
<span className="text-sm font-medium text-slate-900">$580k</span>
<span className="text-xs text-green-600">Off-Market</span>
</div>
<p className="text-sm text-slate-500">
<strong>Why:</strong> Secured before listing. 15km from CBD. Infrastructure upgrade nearby.
                        </p>
<div className="mt-4 flex gap-4 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:graph-up-linear"></iconify-icon> 5.5% Yield</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> Found in 4 days</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-4xl px-6">
<h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-slate-900">From Anxious to Owner</h2>
<div className="grid gap-6 md:grid-cols-2">
<div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
<div className="mb-4 text-slate-900">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-600">
                        "I spent 8 months looking on realestate.com.au and kept missing out. I was terrified of buying a lemon. These guys found me a solid brick home in Brisbane in 9 days. The numbers made sense instantly."
                    </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah J.</div>
<div className="text-xs text-slate-400">Marketing Director, Sydney</div>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
<div className="mb-4 text-slate-900">
<iconify-icon icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="mb-6 text-sm leading-relaxed text-slate-600">
                        "I earn good money but have zero time. I knew I needed to invest but didn't know where. The 'Investor Pro' plan gave me clarity. No pressure, just data. Bought my second one with them last month."
                    </p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-200"></div>
<div>
<div className="text-sm font-medium text-slate-900">Mark T.</div>
<div className="text-xs text-slate-400">Software Engineer, Melbourne</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-6 mb-24 max-w-6xl rounded-2xl border border-slate-200 bg-slate-50 p-8 md:mx-auto md:p-16">
<div className="flex flex-col items-center text-center">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h2 className="mb-4 text-2xl font-medium tracking-tight text-slate-900 md:text-3xl">The 21-Day Promise</h2>
<p className="mb-8 max-w-xl text-slate-600">
                If we don't present you with an investment-grade property you are confident in buying within 21 days of our search starting, <strong>we continue working for free until we do.</strong>
</p>
<p className="text-sm text-slate-500">
                This removes your risk. We are incentivized to be fast, accurate, and effective.
            </p>
</div>
</section>

<section className="py-12">
<div className="mx-auto max-w-2xl px-6">
<h2 className="mb-8 text-2xl font-medium tracking-tight text-slate-900">Common Questions</h2>
<div className="space-y-4">
<details className="group rounded-lg border border-slate-200 bg-white open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900">
                        Do you take kickbacks from developers?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="border-t border-slate-100 p-4 text-sm text-slate-500">
                        Never. We are 100% independent buyer's agents. We work for you, the buyer. We do not sell property; we buy it. We accept no commissions from sellers or developers.
                    </div>
</details>
<details className="group rounded-lg border border-slate-200 bg-white open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900">
                        What if I'm not ready to buy immediately?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="border-t border-slate-100 p-4 text-sm text-slate-500">
                        That's fine. The first step is the Fit Call. We can help you plan your timeline. However, our "5-Day Search" service is designed for those with pre-approval ready to act.
                    </div>
</details>
<details className="group rounded-lg border border-slate-200 bg-white open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900">
                        Can you work with my mortgage broker?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="border-t border-slate-100 p-4 text-sm text-slate-500">
                        Yes. We prefer it. We collaborate closely with your broker to ensure the properties we shortlist match your borrowing capacity perfectly.
                    </div>
</details>
<details className="group rounded-lg border border-slate-200 bg-white open:bg-slate-50">
<summary className="flex cursor-pointer items-center justify-between p-4 font-medium text-slate-900">
                        Why are you limited to 5 clients?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="border-t border-slate-100 p-4 text-sm text-slate-500">
                        Quality control. We do the research manually. We negotiate personally. To maintain our 5-day speed promise, we cap our intake every month.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24" id="book">
<div className="mx-auto max-w-3xl px-6 text-center">
<h2 className="mb-6 text-4xl font-medium tracking-tight text-slate-900">Stop Researching. Start Owning.</h2>
<p className="mx-auto mb-10 max-w-lg text-lg text-slate-500">
                We have 3 spots left for this month. Book a quick call to see if we are a fit. No sales pressure, just honest advice.
            </p>
<a className="inline-flex h-14 items-center gap-2 rounded-lg bg-slate-900 px-8 text-base font-medium text-white shadow-xl shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.02]" href="#">
                Book a 10-Minute Fit Call
                <iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</a>
<div className="mt-6 flex justify-center gap-6 text-xs text-slate-400">
<span className="flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> No obligation</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> 100% Independent</span>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-white py-12">
<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
<div className="text-sm font-medium text-slate-900">PROP/ADV</div>
<div className="text-xs text-slate-400">© 2023 Property Advisory Australia. All rights reserved.</div>
</div>
</footer>

    </>
  );
}
