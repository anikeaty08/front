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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between p-4 px-6">
<div className="text-xl font-semibold tracking-tighter text-zinc-950">
                CMS<span className="text-indigo-600">FLOW</span>
</div>
<div className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
<a className="transition-colors hover:text-indigo-600" href="#features">Features</a>
<a className="transition-colors hover:text-indigo-600" href="#how-it-works">How it Works</a>
<a className="transition-colors hover:text-indigo-600" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="rounded-full bg-zinc-950 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-800">
                    Connect Your CMS
                </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-20 pb-16 md:pt-32">
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="mx-auto mb-6 flex max-w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50/50 px-4 py-1.5 text-xs font-medium text-indigo-700">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
</span>
                Now supporting Squarespace 7.1
            </div>
<h1 className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 md:text-6xl">
                Auto-Publish Content to WordPress, Wix &amp; Squarespace
            </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 md:text-xl">
                Generate, schedule, and publish SEO-optimized content automatically — no manual uploads, no copy-paste. Create once. Publish everywhere.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-medium text-white transition-all hover:bg-indigo-700 sm:w-auto">
                    👉 Connect Your CMS
                </button>
<button className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-8 py-4 text-base font-medium text-zinc-700 transition-all hover:bg-zinc-50 sm:w-auto">
                    👉 See How It Works
                </button>
</div>

<div className="mt-20 flex flex-col items-center justify-center gap-8 md:flex-row">
<div className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
<iconify-icon icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Content AI</p>
<p className="text-sm font-medium text-zinc-900">SEO Optimized Drafts</p>
</div>
</div>
<iconify-icon className="hidden rotate-0 text-zinc-300 md:block" icon="solar:arrow-right-linear" width="32"></iconify-icon>
<iconify-icon className="block rotate-0 text-zinc-300 md:hidden" icon="solar:arrow-down-linear" width="32"></iconify-icon>
<div className="grid grid-cols-3 gap-4">
<div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white shadow-sm">
<iconify-icon icon="logos:wordpress-icon" width="32"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-500">WP</span>
</div>
<div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white shadow-sm">
<iconify-icon icon="logos:wix" width="32"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-500">Wix</span>
</div>
<div className="flex h-20 w-20 flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 bg-white shadow-sm">
<iconify-icon icon="logos:squarespace" width="32"></iconify-icon>
<span className="text-[10px] font-semibold text-zinc-500">SQSP</span>
</div>
</div>
<iconify-icon className="hidden rotate-0 text-zinc-300 md:block" icon="solar:arrow-right-linear" width="32"></iconify-icon>
<iconify-icon className="block rotate-0 text-zinc-300 md:hidden" icon="solar:arrow-down-linear" width="32"></iconify-icon>
<div className="flex items-center gap-4 rounded-2xl border border-indigo-600 bg-indigo-600 p-6 text-white shadow-lg">
<iconify-icon icon="solar:globus-linear" width="28"></iconify-icon>
<div className="text-left">
<p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">Live Status</p>
<p className="text-sm font-medium">Published Site</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-100/50 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">Still publishing manually?</h2>
<p className="mt-4 text-lg text-zinc-600">The manual "copy-paste" workflow is killing your productivity.</p>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-950">Wasted Hours</h3>
<p className="mt-2 text-sm leading-relaxed text-zinc-600">Manually formatting every single blog post takes hours you don't have.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:copy-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-950">Copy-Paste Hell</h3>
<p className="mt-2 text-sm leading-relaxed text-zinc-600">Moving text and images from Google Docs to CMS editors is a nightmare.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:ranking-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-950">SEO Errors</h3>
<p className="mt-2 text-sm leading-relaxed text-zinc-600">Missing meta tags, alt text, and broken links are common during manual uploads.</p>
</div>
<div className="rounded-2xl border border-zinc-200 bg-white p-8">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600">
<iconify-icon icon="solar:calendar-mark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-zinc-950">Ghost Town</h3>
<p className="mt-2 text-sm leading-relaxed text-zinc-600">Busy schedules lead to inconsistent posting, hurting your SEO rankings.</p>
</div>
</div>
</div>
</section>

<section className="py-24" id="how-it-works">
<div className="mx-auto max-w-7xl px-6">
<h2 className="mb-16 text-center text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">From Draft to Live in 4 Steps</h2>
<div className="grid gap-12 lg:grid-cols-4">
<div className="relative">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-lg">1</div>
<h3 className="mt-6 text-base font-semibold text-zinc-950">Connect CMS</h3>
<p className="mt-2 text-sm text-zinc-600">Securely link your WP, Wix, or Squarespace account in seconds.</p>
</div>
<div className="relative">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-lg">2</div>
<h3 className="mt-6 text-base font-semibold text-zinc-950">Choose Topics</h3>
<p className="mt-2 text-sm text-zinc-600">Enter keywords or select themes for your automated content strategy.</p>
</div>
<div className="relative">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-lg">3</div>
<h3 className="mt-6 text-base font-semibold text-zinc-950">AI Generation</h3>
<p className="mt-2 text-sm text-zinc-600">Our engine crafts high-quality, SEO-ready articles for your niche.</p>
</div>
<div className="relative">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white shadow-lg">4</div>
<h3 className="mt-6 text-base font-semibold text-zinc-950">Auto-Publish</h3>
<p className="mt-2 text-sm text-zinc-600">Content goes live or is saved as a draft based on your set schedule.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 py-24 text-white">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Platform Native Integration</h2>
<p className="mt-4 text-zinc-400">Custom tailored workflows for the tools you already use.</p>
</div>
<div className="grid gap-8 md:grid-cols-3">
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
<iconify-icon className="mb-6" icon="logos:wordpress-icon" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white">WordPress</h3>
<ul className="mt-6 space-y-4 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Supports posts, pages &amp; categories</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Works with Classic &amp; Block editors</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Yoast &amp; RankMath compatibility</li>
</ul>
</div>
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
<iconify-icon className="mb-6" icon="logos:wix" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white">Wix</h3>
<ul className="mt-6 space-y-4 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Direct Wix Blog integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Auto-handles images &amp; gallery</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Zero dashboard usage required</li>
</ul>
</div>
<div className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8">
<iconify-icon className="mb-6" icon="logos:squarespace" width="40"></iconify-icon>
<h3 className="text-lg font-semibold text-white">Squarespace</h3>
<ul className="mt-6 space-y-4 text-sm text-zinc-400">
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Native Blog Post creation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Design consistency matching</li>
<li className="flex items-center gap-3"><iconify-icon className="text-indigo-400" icon="solar:check-circle-linear" width="18"></iconify-icon> Built for creative portfolios</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="features">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">Everything you need for hands-free growth.</h2>
<div className="mt-12 space-y-10">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-950">One-click Integration</h4>
<p className="mt-1 text-sm text-zinc-600">Connect multiple sites in under 30 seconds without touching code.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-950">Auto SEO Optimization</h4>
<p className="mt-1 text-sm text-zinc-600">We automatically generate titles, meta descriptions, and clean slugs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
<iconify-icon icon="solar:calendar-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold text-zinc-950">Smart Scheduling</h4>
<p className="mt-1 text-sm text-zinc-600">Set it and forget it. Recurring posts keep your site active 24/7.</p>
</div>
</div>
</div>
</div>
<div className="rounded-3xl bg-zinc-200/50 p-2">
<div className="h-full rounded-[22px] bg-white border border-zinc-200 p-8 shadow-sm">
<div className="flex items-center justify-between border-b border-zinc-100 pb-6">
<h3 className="text-sm font-semibold text-zinc-950">Active Publisher Queue</h3>
<span className="rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-600">Syncing...</span>
</div>
<div className="mt-6 space-y-4">
<div className="flex items-center justify-between rounded-xl border border-zinc-100 p-4">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:wordpress-icon" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-zinc-900">How to scale SaaS...</p>
<p className="text-[10px] text-zinc-500">Scheduled for Today, 14:00</p>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-xl border border-zinc-100 p-4">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:wix" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-zinc-900">10 SEO Tips for 2024</p>
<p className="text-[10px] text-zinc-500">Drafted</p>
</div>
</div>
<iconify-icon className="text-zinc-400" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center justify-between rounded-xl border border-zinc-100 p-4 bg-zinc-50/50 opacity-60">
<div className="flex items-center gap-3">
<iconify-icon icon="logos:squarespace" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-zinc-900">Design Trends Review</p>
<p className="text-[10px] text-zinc-500">Completed Yesterday</p>
</div>
</div>
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-100/50 py-24" id="pricing">
<div className="mx-auto max-w-7xl px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">Scale your content, not your workload.</h2>
<div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
<div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 md:w-64">
<p className="text-sm font-semibold text-zinc-500">Starter</p>
<p className="mt-2 text-2xl font-semibold text-zinc-950">$29<span className="text-sm font-medium text-zinc-400">/mo</span></p>
<p className="mt-4 text-xs text-zinc-600">Perfect for single blog owners.</p>
</div>
<div className="flex flex-col rounded-2xl border border-indigo-600 bg-white p-6 shadow-xl shadow-indigo-100 md:w-64">
<p className="text-sm font-semibold text-indigo-600">Pro</p>
<p className="mt-2 text-2xl font-semibold text-zinc-950">$79<span className="text-sm font-medium text-zinc-400">/mo</span></p>
<p className="mt-4 text-xs text-zinc-600">Up to 5 sites + priority support.</p>
</div>
<div className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 md:w-64 text-zinc-950">
<p className="text-sm font-semibold text-zinc-500 text-zinc-500">Agency</p>
<p className="mt-2 text-2xl font-semibold text-zinc-950">$199<span className="text-sm font-medium text-zinc-400">/mo</span></p>
<p className="mt-4 text-xs text-zinc-600">Unlimited sites &amp; custom automation.</p>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden py-24">
<div className="mx-auto max-w-5xl px-6">
<div className="relative rounded-3xl bg-indigo-600 px-8 py-16 text-center text-white shadow-2xl">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-20">
<iconify-icon icon="solar:globus-linear" width="300"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Stop Publishing Manually. Start Automating.</h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-indigo-100">
                    Join over 2,000+ creators and agencies who have automated their entire publishing workflow.
                </p>
<button className="mt-10 rounded-xl bg-white px-10 py-4 text-base font-semibold text-indigo-600 transition-all hover:bg-indigo-50">
                    🚀 Automate My Content
                </button>
<p className="mt-6 text-sm text-indigo-200">No credit card required • 14-day free trial</p>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white py-12">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-6 md:flex-row">
<div className="text-lg font-semibold tracking-tighter text-zinc-950">
                    CMS<span className="text-indigo-600">FLOW</span>
</div>
<div className="text-sm text-zinc-500">
                    © 2024 CMSFlow Inc. Built for scale.
                </div>
<div className="flex gap-6 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Support</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
