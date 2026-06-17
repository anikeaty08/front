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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="min-h-screen">
<header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
<span className="text-sm font-semibold tracking-tight text-slate-900">PL</span>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">PrimeLedger Capital</p>
<p className="text-xs text-slate-500">Account handling • Banking • Growth</p>
</div>
</div>
<nav className="hidden items-center gap-8 md:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#benefits">Benefits</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#contact">Contact</a>
</nav>
<div className="hidden md:block">
<a className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#contact">
            Get started
          </a>
</div>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 p-3 text-slate-700 md:hidden">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</header>
<main>
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(15,23,42,0.06),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_28%)]"></div>
<div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
<div className="flex flex-col justify-center">
<div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-slate-600">Trusted financial handling for modern business</span>
</div>
<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Smart trading account management, secure banking support, and profitable business solutions
            </h1>
<p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              We help individuals and businesses manage trading activity, streamline financial operations, and build stronger returns with reliable account handling and premium banking service support.
            </p>
<div className="mt-8 flex flex-col gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800" href="#contact">
                Open consultation
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900" href="#services">
                Explore services
              </a>
</div>
<div className="mt-10 grid max-w-lg grid-cols-3 gap-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<p className="text-2xl font-semibold tracking-tight text-slate-950">24/7</p>
<p className="mt-1 text-xs text-slate-500">Account monitoring</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<p className="text-2xl font-semibold tracking-tight text-slate-950">98%</p>
<p className="mt-1 text-xs text-slate-500">Client retention focus</p>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<p className="text-2xl font-semibold tracking-tight text-slate-950">Global</p>
<p className="mt-1 text-xs text-slate-500">Banking assistance</p>
</div>
</div>
</div>
<div className="flex items-center justify-center">
<div className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
<div className="rounded-3xl bg-slate-950 p-6 text-white">
<div className="flex items-start justify-between">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Portfolio overview</p>
<h2 className="mt-3 text-2xl font-semibold tracking-tight">Business performance</h2>
</div>
<div className="rounded-full bg-white/10 px-3 py-1">
<span className="text-xs font-medium text-emerald-300">+12.8% this month</span>
</div>
</div>
<div className="mt-8 grid grid-cols-2 gap-4">
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
<iconify-icon height="22" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Managed trading</p>
</div>
<p className="mt-5 text-2xl font-semibold tracking-tight">$184K</p>
<p className="mt-1 text-xs text-slate-400">Active handled volume</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-sky-400/10 p-2 text-sky-300">
<iconify-icon height="22" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Banking support</p>
</div>
<p className="mt-5 text-2xl font-semibold tracking-tight">$92K</p>
<p className="mt-1 text-xs text-slate-400">Monthly processed flow</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-violet-400/10 p-2 text-violet-300">
<iconify-icon height="22" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Secure operations</p>
</div>
<p className="mt-5 text-2xl font-semibold tracking-tight">Protected</p>
<p className="mt-1 text-xs text-slate-400">Verified handling systems</p>
</div>
<div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-amber-400/10 p-2 text-amber-300">
<iconify-icon height="22" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<p className="text-sm text-slate-300">Profit strategy</p>
</div>
<p className="mt-5 text-2xl font-semibold tracking-tight">High yield</p>
<p className="mt-1 text-xs text-slate-400">Focused business growth</p>
</div>
</div>
<div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Weekly growth target</p>
<p className="mt-1 text-xs text-slate-400">Measured account performance and banking efficiency</p>
</div>
<span className="text-sm font-medium text-emerald-300">78%</span>
</div>
<div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
<div className="h-full w-9/12 rounded-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-400"></div>
</div>
</div>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-slate-200 p-4">
<p className="text-xs text-slate-500">Service mode</p>
<p className="mt-2 text-sm font-medium text-slate-900">Personalized management</p>
</div>
<div className="rounded-2xl border border-slate-200 p-4">
<p className="text-xs text-slate-500">Priority</p>
<p className="mt-2 text-sm font-medium text-slate-900">Stable profitable growth</p>
</div>
<div className="rounded-2xl border border-slate-200 p-4">
<p className="text-xs text-slate-500">Support</p>
<p className="mt-2 text-sm font-medium text-slate-900">Dedicated response team</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-200 bg-slate-50/80">
<div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
<div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Handled accounts</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">500+</p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Client businesses</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">120+</p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Banking workflows</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Fast &amp; secure</p>
</div>
<div>
<p className="text-xs uppercase tracking-[0.2em] text-slate-400">Growth model</p>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Profit focused</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24" id="services">
<div className="max-w-2xl">
<p className="text-sm font-medium text-slate-500">Services</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Built for confident financial handling and business growth</h2>
<p className="mt-4 text-base leading-7 text-slate-600">
            From managed trading accounts to banking coordination and growth planning, our services are designed to simplify complexity and improve results.
          </p>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Trading Account Handling</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Professional oversight, execution support, monitoring, and performance review for active trading operations.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:card-transfer-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Banking Services Support</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Streamlined financial coordination, transfers, account organization, and premium support for smoother banking operations.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:case-round-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Profitable Business Strategy</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Focused planning and practical financial structuring to improve cash flow, stability, and long-term returns.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Risk-Aware Management</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Structured decision support, disciplined allocation, and oversight designed to reduce avoidable financial exposure.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:documents-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Reporting &amp; Transparency</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Clear updates, understandable reporting, and transparent communication across trading and banking activity.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
<iconify-icon height="24" icon="solar:user-hand-up-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Dedicated Client Support</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">Responsive assistance, personalized guidance, and dependable service for clients who value professional attention.</p>
</div>
</div>
</section>
<section className="bg-slate-950" id="benefits">
<div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
<div>
<p className="text-sm font-medium text-slate-400">Why choose us</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Stronger systems for better financial outcomes
            </h2>
<p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
              We combine practical financial handling with a growth mindset so your trading activity, banking processes, and business decisions stay aligned.
            </p>
</div>
<div className="grid gap-4">
<div className="flex gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon height="22" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Reliable financial handling</h3>
<p className="mt-2 text-sm leading-6 text-slate-300">Every process is built around consistency, accountability, and organized execution.</p>
</div>
</div>
<div className="flex gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon height="22" icon="solar:lock-keyhole-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Secure service approach</h3>
<p className="mt-2 text-sm leading-6 text-slate-300">Client confidence starts with secure systems, careful management, and protected operations.</p>
</div>
</div>
<div className="flex gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white">
<iconify-icon height="22" icon="solar:dollar-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white">Profit-oriented execution</h3>
<p className="mt-2 text-sm leading-6 text-slate-300">We keep focus on measurable improvement, sustainable returns, and business value creation.</p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24" id="process">
<div className="max-w-2xl">
<p className="text-sm font-medium text-slate-500">How it works</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Simple onboarding, clear handling, visible results</h2>
</div>
<div className="mt-12 grid gap-6 md:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white">1</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Consultation</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">We learn about your account goals, banking needs, and financial priorities.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white">2</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Strategy setup</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">A tailored handling structure is prepared for your trading and business objectives.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-medium text-white">3</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-950">Ongoing management</h3>
<p className="mt-3 text-sm leading-6 text-slate-600">We maintain support, monitor progress, and optimize performance over time.</p>
</div>
</div>
</section>
<section className="bg-slate-50" id="contact">
<div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
<div>
<p className="text-sm font-medium text-slate-500">Contact us</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Let’s build a stronger financial future for your business</h2>
<p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Reach out for a private consultation and discover how our account handling and banking support can help improve your results.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-700">support@primeledgercapital.com</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-700">+1 800 456 2900</span>
</div>
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-900 shadow-sm ring-1 ring-slate-200">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<span className="text-sm text-slate-700">Global client services</span>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<form className="space-y-5">
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Full name</label>
<input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Your name" type="text"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
<input className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Service interest</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm text-slate-900 outline-none transition focus:border-slate-900">
<option>Trading account handling</option>
<option>Banking services support</option>
<option>Profitable business strategy</option>
<option>Full service package</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-500">
<iconify-icon height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
<textarea className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-900" placeholder="Tell us about your needs" rows="5"></textarea>
</div>
<button className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-slate-800" type="submit">
                Request consultation
              </button>
</form>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<div className="flex items-center gap-3">
<div className="rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
<span className="text-sm font-semibold tracking-tight text-slate-900">PL</span>
</div>
<div>
<p className="text-sm font-medium tracking-tight text-slate-900">PrimeLedger Capital</p>
<p className="text-xs text-slate-500">Trusted financial service partner</p>
</div>
</div>
<div className="flex flex-wrap gap-6">
<a className="text-sm text-slate-600 hover:text-slate-900" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#benefits">Benefits</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#process">Process</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
</div>
<p className="text-xs text-slate-500">© 2026 PrimeLedger Capital. All rights reserved.</p>
</div>
</footer>
</div>

    </>
  );
}
