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



      // Init Lucide icons once DOM is ready
      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
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
      

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-slate-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-6 w-6 rounded-md bg-slate-900"></div>
<span className="text-sm md:text-base tracking-tight font-medium">OfficeOps</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm">
<a className="text-slate-700 hover:text-slate-900">Solutions</a>
<a className="text-slate-700 hover:text-slate-900">Pricing</a>
<a className="text-slate-700 hover:text-slate-900">Resources</a>
<a className="text-slate-700 hover:text-slate-900">Login</a>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-3.5 h-9 text-sm font-medium">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Get Started
          </button>
</nav>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200">
<i className="w-5 h-5 text-slate-700" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10">
<div className="grid lg:grid-cols-12 gap-8">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
<i className="w-3.5 h-3.5" data-lucide="shield"></i>
            SOC2-ready ops team on demand
          </div>
<h1 className="mt-4 text-4xl md:text-5xl tracking-tight font-semibold text-slate-900">
            Back‑Office as a Service
          </h1>
<p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Focus on what you do best. We handle the rest. From HR to customer support, our proactive team manages your operations 24/7.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 h-10 text-sm font-medium">
<i className="w-4 h-4" data-lucide="slack"></i>
              Add to Slack
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white text-slate-900 px-4 h-10 text-sm font-medium hover:bg-slate-50">
<i className="w-4 h-4" data-lucide="calendar"></i>
              Book a demo
            </button>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-start gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">“They streamlined our ops from day one.”</div>
<p className="text-sm text-slate-600 mt-1">Tickets resolved 36% faster. HR onboarding now takes hours, not weeks.</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4 text-amber-500" data-lucide="star"></i>
                4.9/5 average satisfaction
              </div>
<button className="inline-flex items-center gap-1 text-xs text-slate-700 hover:text-slate-900">
                Read the story
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">HRIS</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">CRM</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">Finance</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">Helpdesk</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">Payroll</span>
</div>
<div className="rounded-lg border border-slate-200 bg-white px-3 py-3 flex items-center gap-2">
<div className="h-6 w-10 rounded-md bg-slate-100"></div>
<span className="text-xs text-slate-700">Legal</span>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="w-full flex justify-center">
<button className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden bg-slate-800 shadow-lg">
<img alt="Demo" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1532581140115-3e355d1ed1de?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/30"></div>
<span className="absolute inset-0 m-auto h-16 w-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow ring-1 ring-slate-200">
<i className="w-7 h-7 text-slate-900" data-lucide="play"></i>
</span>
</button>
</div>
<p className="text-center text-xs text-slate-500 mt-3">See how it works</p>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">HR &amp; Onboarding</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Offer letters</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Compliance</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Contractor mgmt</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Automated hand‑offs</li>
</ul>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<h3 className="text-lg tracking-tight font-semibold">Chat &amp; Customer Experience</h3>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Customer chat</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Playbook workflows</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Escalation support</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Sentiment analysis</li>
</ul>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="text-center">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold">What we run for you</h2>
<p className="mt-2 text-sm text-slate-600">Our always‑on, proactive platform works with your tools.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
<div className="rounded-lg bg-slate-900 text-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-sm"><i className="w-4 h-4" data-lucide="settings"></i>Operations Desk</div>
</div>
<div className="rounded-lg bg-slate-900 text-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-sm"><i className="w-4 h-4" data-lucide="shield-check"></i>Vendor Assurance</div>
</div>
<div className="rounded-lg bg-slate-900 text-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-sm"><i className="w-4 h-4" data-lucide="bot"></i>Uptime</div>
</div>
<div className="rounded-lg bg-slate-900 text-white p-4 shadow-sm">
<div className="flex items-center gap-2 text-sm"><i className="w-4 h-4" data-lucide="megaphone"></i>Social Moderation</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="grid lg:grid-cols-12 gap-10">
<div className="lg:col-span-6">
<h3 className="text-2xl tracking-tight font-semibold">24/7 Coverage</h3>
<p className="mt-3 text-slate-600 text-base">
            Our global team of specialists ensures your operations never sleep. Their playbooks handle incidents across every stack so you’re protected around the clock.
          </p>
<div className="mt-6 flex items-center gap-3">
<img alt="" className="h-9 w-9 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-9 w-9 rounded-full object-cover -ml-3 ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-9 w-9 rounded-full object-cover -ml-3 ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-3a6b1aefec88?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-sm text-slate-600">Real humans + smart automations</span>
</div>
</div>
<div className="lg:col-span-6">
<div className="rounded-xl border border-slate-200 overflow-hidden">
<div className="divide-y divide-slate-100">
<div className="px-4 py-3 bg-slate-50 text-sm text-slate-700 flex items-center justify-between">
                Incident Intake
                <i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
</div>
<div className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                Live Triage
                <i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                Containment &amp; Actions
                <i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                SLA Tracking
                <i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                Escalations
                <i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
<div className="px-4 py-3 text-sm text-slate-700 flex items-center justify-between">
                Postmortems
                <i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<h3 className="text-center text-xl tracking-tight font-semibold">Works with your stack</h3>
<div className="mt-6 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-12 gap-3">

<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
<div className="h-10 bg-slate-100 rounded-md"></div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-center text-2xl md:text-3xl tracking-tight font-semibold">Operations Console</h3>
<div className="mt-8 grid lg:grid-cols-2 gap-6">

<div className="rounded-xl border border-slate-200 bg-white">
<div className="divide-y divide-slate-100">
<details className="group open:bg-slate-50">
<summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Tickets &amp; tasks</div>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<p className="text-sm text-slate-600">Smart routing and SLA timers keep your team focused.</p>
</div>
</details>
<details className="group">
<summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Automations</div>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<ul className="text-sm text-slate-700 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="zap"></i>Intake triage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-600" data-lucide="git-branch"></i>Decision trees</li>
</ul>
</div>
</details>
<details className="group">
<summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Reporting</div>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<p className="text-sm text-slate-600">Live dashboards across channels with CSAT and SLA performance.</p>
</div>
</details>
<details className="group">
<summary className="cursor-pointer list-none px-4 py-3 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight">Admin &amp; security</div>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4">
<p className="text-sm text-slate-600">Granular roles, audit logs, and least‑privilege workflows.</p>
</div>
</details>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white">
<div className="border-b border-slate-100 flex items-center gap-2 px-2">
<button className="px-3 py-2 text-xs font-medium text-slate-900 border-b-2 border-slate-900">New</button>
<button className="px-3 py-2 text-xs text-slate-600">In Progress</button>
<button className="px-3 py-2 text-xs text-slate-600">Resolved</button>
</div>
<div className="p-4">
<div className="space-y-3">
<div className="flex items-start justify-between rounded-lg border border-slate-100 p-3">
<div>
<div className="text-sm font-medium tracking-tight">Onboard: New AE, South‑EMEA</div>
<p className="text-xs text-slate-600 mt-1">Accounts set‑up, Slack channels, device provisioning</p>
</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">SLA 2h</span>
</div>
<div className="flex items-start justify-between rounded-lg border border-slate-100 p-3">
<div>
<div className="text-sm font-medium tracking-tight">Supplier: SOC2 docs validation</div>
<p className="text-xs text-slate-600 mt-1">Collect, verify, file in GRC</p>
</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">New</span>
</div>
<div className="flex items-start justify-between rounded-lg border border-slate-100 p-3">
<div>
<div className="text-sm font-medium tracking-tight">Refund: Priority customer</div>
<p className="text-xs text-slate-600 mt-1">Escalation from chat to billing</p>
</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">High</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-center text-2xl md:text-3xl tracking-tight font-semibold">Frequently Asked Questions</h3>
<div className="mt-6">
<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
          Filter by your organization
          <i className="w-4 h-4 text-slate-500" data-lucide="chevron-down"></i>
</div>
<div className="mt-4 space-y-2">

<details className="group rounded-lg border border-slate-200 bg-white">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">What’s included in each plan?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
              Every plan includes a dedicated ops lead, shared specialists, and proactive runbooks tailored to your stack.
            </div>
</details>
<details className="group rounded-lg border border-slate-200 bg-white">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">How fast can we start?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
              Typical onboarding takes 5–10 business days including tool access and playbook setup.
            </div>
</details>
<details className="group rounded-lg border border-slate-200 bg-white">
<summary className="list-none cursor-pointer px-4 py-3 flex items-center justify-between">
<span className="text-sm font-medium tracking-tight">Do you work with our timezone?</span>
<i className="w-4 h-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-4 pb-4 text-sm text-slate-600">
              Yes, we provide global coverage with follow‑the‑sun shifts for continuous response.
            </div>
</details>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<h3 className="text-center text-2xl md:text-3xl tracking-tight font-semibold">Founding Customer Pricing</h3>
<p className="text-center text-sm text-slate-600 mt-2">Special rates for early partners</p>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="text-xs text-slate-600">Starter</div>
<div className="mt-3 text-3xl tracking-tight font-semibold">$1,250<span className="text-base text-slate-500 font-normal">/mo</span></div>
<p className="text-xs text-slate-600 mt-1">Perfect for small teams</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>HR &amp; onboarding</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Helpdesk triage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Basic reporting</li>
</ul>
<button className="mt-6 w-full h-10 rounded-md border border-slate-200 text-sm font-medium">Get started</button>
</div>

<div className="rounded-xl border-2 border-slate-900 bg-white p-6 shadow-sm">
<div className="flex items-center justify-between">
<div className="text-xs text-slate-600">Growth</div>
<span className="text-[10px] px-2 py-1 rounded-full bg-slate-900 text-white">Popular</span>
</div>
<div className="mt-3 text-3xl tracking-tight font-semibold">$3,500<span className="text-base text-slate-500 font-normal">/mo</span></div>
<p className="text-xs text-slate-600 mt-1">Scale ops with confidence</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>All Starter features</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>24/7 coverage</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Advanced automations</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Dedicated lead</li>
</ul>
<button className="mt-6 w-full h-10 rounded-md bg-slate-900 text-white text-sm font-medium">Talk to sales</button>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="text-xs text-slate-600">Scale</div>
<div className="mt-3 text-3xl tracking-tight font-semibold">Custom</div>
<p className="text-xs text-slate-600 mt-1">For enterprises &amp; complex needs</p>
<ul className="mt-4 space-y-2 text-sm text-slate-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Global workflows</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Compliance support</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>Custom playbooks</li>
</ul>
<button className="mt-6 w-full h-10 rounded-md border border-slate-200 text-sm font-medium">Contact sales</button>
</div>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-4 h-10 text-sm font-medium">
          Download full pricing
          <i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</section>

<section className="bg-slate-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
<div className="text-center">
<h3 className="text-2xl md:text-3xl tracking-tight font-semibold">Ready to transform your operations?</h3>
<p className="mt-2 text-sm text-slate-300">Join hundreds of companies already scaling with OfficeOps.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
<input className="h-10 w-full sm:w-80 rounded-md border border-white/10 bg-white/5 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20" placeholder="you@company.com" type="email"/>
<button className="h-10 px-4 rounded-md bg-white text-slate-900 text-sm font-medium">Request demo</button>
</div>
</div>
<div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
<div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white"></div>
<span className="font-medium tracking-tight">OfficeOps</span>
</div>
<p className="mt-3 text-slate-400">Operate like a world‑class company from day one.</p>
</div>
<div>
<div className="text-slate-200 font-medium">Product</div>
<ul className="mt-3 space-y-2 text-slate-400">
<li>Features</li>
<li>Pricing</li>
<li>Integrations</li>
<li>API</li>
</ul>
</div>
<div>
<div className="text-slate-200 font-medium">Company</div>
<ul className="mt-3 space-y-2 text-slate-400">
<li>About</li>
<li>Careers</li>
<li>Security</li>
<li>Contact</li>
</ul>
</div>
<div>
<div className="text-slate-200 font-medium">Legal</div>
<ul className="mt-3 space-y-2 text-slate-400">
<li>Privacy</li>
<li>Terms</li>
<li>DPA</li>
<li>Compliance</li>
</ul>
</div>
</div>
<div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-400">
<span>© 2025 OfficeOps. All rights reserved.</span>
<button className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="message-circle"></i>
            Get help
          </button>
</div>
</div>
</section>



    </>
  );
}
