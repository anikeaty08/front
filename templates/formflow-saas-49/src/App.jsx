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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb', // Electric Blue
700: '#1d4ed8',
900: '#1e3a8a',
}
}
}
}
}

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
      

<div className="sticky top-0 z-50 bg-slate-900 text-white py-3 px-4 text-center border-b border-white/10 backdrop-blur-md bg-opacity-95">
<div className="flex items-center justify-center gap-3 text-xs md:text-sm font-medium tracking-wide">
<span className="hidden md:inline">
<span className="text-orange-400 mr-2">⚡ Limited Time Offer:</span>
          50% off your first 3 months
          <span className="mx-2 opacity-50">|</span>
</span>
<span className="md:hidden">
<span className="text-orange-400">⚡ 50% off:</span>
          3 months
        </span>
<a className="inline-flex items-center px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded border border-white/20 transition-colors" href="#pricing">
          View Plans ↓
        </a>
</div>
</div>

<section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Get 50% Off
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">
            Formflow
          </span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Unlimited forms. Visual logic builder. Real features at starter
          prices.
          <span className="text-slate-900 font-medium">
            Save 50% on your first three months.
          </span>
</p>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600" href="#pricing" id="hero_cta_click">
            Claim Your 50% Off
            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<p className="text-xs text-slate-500 mt-3 mb-1 font-medium">
<span className="text-orange-500">127 businesses</span>
            claimed this offer in the last 48 hours
          </p>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-xs md:text-sm text-slate-500">
<span className="flex items-center">
<span className="iconify text-green-500 mr-1.5" data-icon="lucide:check" data-width="16"></span>
              Unlimited forms on every plan
            </span>
<span className="flex items-center">
<span className="iconify text-green-500 mr-1.5" data-icon="lucide:check" data-width="16"></span>
              Built by marketers, for marketers
            </span>
</div>
<div className="flex items-center gap-4 text-slate-400 mt-6 opacity-90 scale-95 grayscale hover:grayscale-0 transition-all duration-500">
<span className="flex items-center gap-1 text-xs font-medium">
<span className="iconify" data-icon="lucide:cloud" data-width="14"></span>
              AWS Hosted
            </span>
<span className="flex items-center gap-1 text-xs font-medium">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
              Cloudflare Secured
            </span>
<span className="flex items-center gap-1 text-xs font-medium">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
              SSL Encrypted
            </span>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-4 text-xs md:text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:sparkles" data-width="18"></span>
            Unlimited Forms
          </div>
<div className="hidden md:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:palette" data-width="18"></span>
            Full Style Control
          </div>
<div className="hidden md:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:ban" data-width="18"></span>
            No Branding (All Plans)
          </div>
<div className="hidden md:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<span className="iconify text-brand-600" data-icon="lucide:wallet" data-width="18"></span>
            No Surprise Billing
          </div>
</div>
</div>
</div>

<section className="py-20 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">

<div className="bg-slate-100 p-1 rounded-lg inline-flex relative">
<div className="w-1/2 h-full absolute left-0 bg-white rounded-md shadow-sm border border-slate-200 transition-all"></div>
<button className="relative z-10 px-4 py-2 text-sm font-medium text-slate-900 rounded-md">
              Monthly (50% off)
            </button>
<button className="relative z-10 px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">
              Yearly
              <span className="ml-1 text-xs text-green-600 bg-green-100 px-1.5 py-0.5 rounded-full">
                25% off
              </span>
</button>
</div>

<div className="flex items-center gap-3 text-sm font-medium text-slate-500">
<span className="text-slate-900 border-b-2 border-slate-900 pb-0.5 cursor-pointer">
              USD $
            </span>
<span className="hover:text-slate-900 cursor-pointer">GBP £</span>
<span className="hover:text-slate-900 cursor-pointer">EUR €</span>
<span className="hover:text-slate-900 cursor-pointer">AUD $</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="relative p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-semibold text-slate-900">Starter Plan</h3>
<p className="text-sm text-slate-500 mt-1">
              Solos, creators and small businesses
            </p>
<div className="mt-6 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-slate-400 line-through text-lg">$24</span>
<span className="text-green-600 text-xs font-semibold uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                  50% off for 3 months
                </span>
</div>
<div className="flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                  $12
                </span>
<span className="text-slate-500 ml-1">/mo</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-medium text-center rounded-lg shadow-md shadow-brand-500/20 transition-all" href="#" id="starter_click">
              Get Starter →
            </a>
<div className="mt-8 space-y-4">
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                What's Included
              </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  1,000 submissions/mo
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  1 seat / 2 guests
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  Unlimited forms
                </li>
</ul>
<div className="h-px bg-slate-100 my-4"></div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Features
              </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:workflow"></span>
                  Visual logic builder
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:message-square"></span>
                  Conversational branching
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:calculator"></span>
                  Calculation engine
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:mail"></span>
                  Email notifications
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:webhook"></span>
                  Unlimited webhooks
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:ghost"></span>
                  Remove Formflow branding
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:download"></span>
                  Data export (CSV/XLSX)
                </li>
</ul>
</div>
</div>

<div className="relative p-8 bg-white border border-brand-200 ring-2 ring-brand-600 ring-offset-2 rounded-2xl shadow-xl z-10 scale-105 md:scale-100 lg:scale-105 hover:scale-105 transition-transform duration-300">
<div className="absolute top-0 right-0 -mt-3 mr-4">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-sm">
                🔥 Most Popular
              </span>
</div>
<h3 className="text-lg font-semibold text-brand-600">Pro Plan</h3>
<p className="text-sm text-slate-500 mt-1">
              Fast-growing businesses choose this
            </p>
<div className="mt-6 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-slate-400 line-through text-lg">$49</span>
<span className="text-green-600 text-xs font-semibold uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                  50% off for 3 months
                </span>
</div>
<div className="flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                  $24.50
                </span>
<span className="text-slate-500 ml-1">/mo</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-medium text-center rounded-lg shadow-md shadow-brand-500/20 transition-all" href="#" id="pro_click">
              Get Pro →
            </a>
<div className="mt-8 space-y-4">
<p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                What's Included
              </p>
<ul className="space-y-3 text-sm text-slate-700 font-medium">
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  7,500 submissions/mo
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  2 seats / 5 guests
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  Unlimited forms
                </li>
</ul>
<div className="h-px bg-slate-100 my-4"></div>
<p className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                Key Features
              </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:plus-circle"></span>
                  Everything from Starter, plus:
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:git-branch-plus"></span>
                  Advanced conditional logic
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:split"></span>
                  FlowSplit A/B testing
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:history"></span>
                  Partial submissions recovery
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:bar-chart-2"></span>
                  Meta Pixel &amp; Conversion API
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:message-circle"></span>
                  SMS notifications enabled
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:globe"></span>
                  Custom domain &amp; SSL
                </li>
</ul>
</div>
</div>

<div className="relative p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300">
<h3 className="text-lg font-semibold text-slate-900">Scale Plan</h3>
<p className="text-sm text-slate-500 mt-1">
              Teams, agencies and advanced workflows
            </p>
<div className="mt-6 mb-6">
<div className="flex items-baseline gap-2">
<span className="text-slate-400 line-through text-lg">$99</span>
<span className="text-green-600 text-xs font-semibold uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                  50% off for 3 months
                </span>
</div>
<div className="flex items-baseline">
<span className="text-4xl font-semibold tracking-tight text-slate-900">
                  $49.50
                </span>
<span className="text-slate-500 ml-1">/mo</span>
</div>
</div>
<a className="block w-full py-2.5 px-4 bg-brand-600 hover:bg-brand-700 text-white font-medium text-center rounded-lg shadow-md shadow-brand-500/20 transition-all" href="#" id="scale_click">
              Get Scale →
            </a>
<div className="mt-8 space-y-4">
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                What's Included
              </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  20,000 submissions/mo
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  3 seats / 15 guests
                </li>
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:check"></span>
                  Unlimited forms
                </li>
</ul>
<div className="h-px bg-slate-100 my-4"></div>
<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Key Features
              </p>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3">
<span className="iconify text-brand-600 shrink-0" data-icon="lucide:plus-circle"></span>
                  Everything from Pro, plus:
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:line-chart"></span>
                  In-flow visual analytics
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:layout-grid"></span>
                  10 workspaces (Coming Q4)
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:zap"></span>
                  High priority support
                </li>
<li className="flex gap-3">
<span className="iconify text-slate-400 shrink-0" data-icon="lucide:users"></span>
                  White glove onboarding
                </li>
</ul>
</div>
</div>
</div>

<div className="mt-12 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-6">
<div className="flex flex-col md:flex-row gap-6 items-start">
<div className="shrink-0">
<div className="h-10 w-10 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">
                Need More? Add power-ups to any plan:
              </h4>
<ul className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  Extra seats ($7/user/mo)
                </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  Custom domains (packs of 3)
                </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  HIPAA mode + BAA ($99/mo)
                </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  Custom SMTP ($19/mo)
                </li>
</ul>
</div>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8 max-w-3xl mx-auto">
          All prices shown are subject to applicable taxes. Offer valid for
          first 3 months on monthly plans, or receive 25% off for entire first
          year on annual plans.
        </p>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Still Paying $59/Month for Features You Should Get By Default?
          </h2>
<p className="text-slate-400 text-lg">
            Most form builders are designed to extract maximum revenue from
            you—not deliver maximum value. Here's what happens when you choose
            wrong:
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="flex gap-5">
<div className="shrink-0 h-12 w-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
<span className="iconify" data-icon="lucide:banknote" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">
                Pricing Bait &amp; Switch
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                You sign up for "free." Then discover you need to upgrade for
                basics like removing their logo or logic. What should cost
                $20/month suddenly costs
                <span className="text-red-400">$59... then $99... then $290.</span>
</p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 h-12 w-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
<span className="iconify" data-icon="lucide:snail" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">
                Forms That Kill Conversion
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Slow load times. Clunky mobile experience. No customization.
                Your forms scream "amateur hour" while your ad spend bleeds out.
                <span className="text-orange-400">
                  Every second of lag = lost leads.
                </span>
</p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 h-12 w-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-300 border border-slate-600/50">
<span className="iconify" data-icon="lucide:lock" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">
                Basic Features Held Hostage
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Want to remove the logo? $59/mo. Email notifications? Another
                $38/mo. File uploads? Paywall. You're nickel-and-dimed for
                everything.
              </p>
</div>
</div>

<div className="flex gap-5">
<div className="shrink-0 h-12 w-12 rounded-lg bg-slate-700/50 flex items-center justify-center text-slate-300 border border-slate-600/50">
<span className="iconify" data-icon="lucide:bot" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">
                Support That Doesn't Exist
              </h3>
<p className="text-slate-400 text-sm leading-relaxed">
                Submit a ticket. Wait 3 weeks. Get a generic AI response.
                Meanwhile, your campaign is broken and leads are bouncing.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Formflow: Forms That Convert Without the Subscription Trap
          </h2>
<p className="text-slate-500 text-lg">
            Build professional, high-converting forms with the features you
            actually need.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<span className="iconify text-brand-600 mb-4" data-icon="lucide:zap" data-width="32"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Lightning-Fast Performance
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Forms that load in under 1 second. Built on AWS infrastructure
              with Cloudflare protection. Your visitors stay engaged, your
              conversions go up.
            </p>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<span className="iconify text-brand-600 mb-4" data-icon="lucide:palette" data-width="32"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Your Brand, Your Way
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Customize everything. Fonts, colors, layout. No "Powered by
              Formflow" badge. No generic clone look. Your brand identity, your
              edge.
            </p>
</div>

<div className="p-6 bg-slate-50 rounded-xl border border-slate-100">
<span className="iconify text-brand-600 mb-4" data-icon="lucide:brain-circuit" data-width="32"></span>
<h3 className="text-lg font-medium text-slate-900 mb-2">
              Visual Logic Builder
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Drag-and-drop conditional logic. No code. No confusion. Create
              dynamic forms that adapt to user answers.
            </p>
</div>
</div>

<div className="max-w-4xl mx-auto text-center">
<div className="relative bg-slate-900 rounded-xl shadow-2xl overflow-hidden aspect-video flex items-center justify-center group cursor-pointer border border-slate-200">

<div className="absolute inset-0 bg-slate-800/50 flex flex-col items-center justify-center">
<div className="h-16 w-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="32"></span>
</div>
<p className="text-white font-medium mt-4">
                See the Visual Builder in Action
              </p>
</div>
<img alt="Formflow Builder" className="w-full h-full object-cover opacity-50" src="https://placehold.co/1200x675/1e293b/FFF?text=Visual+Builder+Demo"/>
</div>
<div className="mt-8">
<p className="text-sm text-slate-500 mb-4">
              Watch how easy it is to build a high-converting form in under 3
              minutes
            </p>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-brand-600 bg-brand-50 rounded-full hover:bg-brand-100 transition-colors" href="#pricing">
              Start Your 50% Off Trial →
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">
          2,000+ Businesses Ditched Typeform &amp; Jotform For Formflow
        </h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-4">
              "First – wow! This software is awesome. I've tried MANY form
              creators, but this is by FAR my favorite. I can foresee me using
              it not only for myself, but my clients as well."
            </p>
<div className="text-xs font-semibold text-slate-900">
              David, Gray Matter Creations
            </div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-4">
              "Formflow is hands down the best form builder on the market! The
              intuitive drag-and-drop builder makes it not only enjoyable to use
              but also incredibly powerful."
            </p>
<div className="text-xs font-semibold text-slate-900">
              Samuel Hanono
            </div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-4">
              "Since using Formflow we have been able to segment customer
              feedback to allow us to personalise our post purchase
              experience... all with no added work for the team."
            </p>
<div className="text-xs font-semibold text-slate-900">
              Frazer Clacherty, UK
            </div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-4">
              "Exceptional app! I've been looking for one with this type of
              functionality for ages. Saves us heaaaps of time. Very intuitive."
            </p>
<div className="text-xs font-semibold text-slate-900">
              NT, Australia
            </div>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 mb-3 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="16" fill="currentColor"></span>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-4">
              "It's incredibly easy to use, and the results are fantastic! I
              haven't found any other software that makes achieving these
              results so effortless."
            </p>
<div className="text-xs font-semibold text-slate-900">
              Paul McCleary
            </div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
          No Surprise Billing. Ever.
        </h2>
<p className="text-slate-500 mt-2 mb-10">
          Credits keep billing simple and fair. You stay in control.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col items-center">
<div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
<span className="iconify" data-icon="lucide:bar-chart" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">Submissions</h3>
<p className="text-xs text-slate-500 mt-1 max-w-xs">
              Never lose data—forms never break. Limits strictly for tiers.
            </p>
</div>
<div className="flex flex-col items-center">
<div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">
              Seats &amp; Workspaces
            </h3>
<p className="text-xs text-slate-500 mt-1 max-w-xs">
              Pay only for collaboration you need. Add seats at $7/user.
            </p>
</div>
<div className="flex flex-col items-center">
<div className="bg-blue-50 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mb-3">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 text-sm">Email &amp; SMS</h3>
<p className="text-xs text-slate-500 mt-1 max-w-xs">
              Monthly credit pools. No sneaky overages.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">
          See Why Smart Businesses Are Switching
        </h2>
<div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
<table className="w-full min-w-[800px] text-sm text-left">
<colgroup>
<col className="w-[30%]"/>
<col className="w-[17.5%] bg-brand-50/30 border-x border-brand-100"/>
<col className="w-[17.5%]"/>
<col className="w-[17.5%]"/>
<col className="w-[17.5%]"/>
</colgroup>
<thead>
<tr className="border-b border-slate-200 bg-slate-50">
<th className="py-4 px-6 font-medium text-slate-500">Feature</th>
<th className="py-4 px-6 font-semibold text-brand-600 bg-brand-50/50 w-1/5">
                  Formflow
                </th>
<th className="py-4 px-6 font-medium text-slate-900 w-1/5">
                  Typeform
                </th>
<th className="py-4 px-6 font-medium text-slate-900 w-1/5">
                  Jotform
                </th>
<th className="py-4 px-6 font-medium text-slate-900 w-1/5">
                  Heyflow
                </th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr>
<td className="py-3 px-6 text-slate-600">Visual Logic Builder</td>
<td className="py-3 px-6 bg-brand-50/20 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</td>
<td className="py-3 px-6 text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</td>
<td className="py-3 px-6 text-slate-300">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</td>
<td className="py-3 px-6 text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</td>
</tr>
<tr>
<td className="py-3 px-6 text-slate-600">Conditional Branching</td>
<td className="py-3 px-6 bg-brand-50/20 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</td>
<td className="py-3 px-6 text-slate-500">$59/mo</td>
<td className="py-3 px-6 text-slate-500">$34/mo</td>
<td className="py-3 px-6 text-slate-500">$79/mo</td>
</tr>
<tr>
<td className="py-3 px-6 text-slate-600">Unlimited Forms</td>
<td className="py-3 px-6 bg-brand-50/20 text-brand-600 font-medium">
                  All Plans
                </td>
<td className="py-3 px-6 text-slate-300">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</td>
<td className="py-3 px-6 text-slate-300">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</td>
<td className="py-3 px-6 text-slate-300">
<span className="iconify" data-icon="lucide:x" data-width="18"></span>
</td>
</tr>
<tr>
<td className="py-3 px-6 text-slate-600">Remove Branding</td>
<td className="py-3 px-6 bg-brand-50/20 text-brand-600 font-medium">
                  Starter+
                </td>
<td className="py-3 px-6 text-slate-500">$59/mo</td>
<td className="py-3 px-6 text-slate-500">$34/mo</td>
<td className="py-3 px-6 text-slate-500">$79/mo</td>
</tr>
<tr>
<td className="py-3 px-6 text-slate-600">Real Human Support</td>
<td className="py-3 px-6 bg-brand-50/20 text-brand-600">
<span className="iconify" data-icon="lucide:check" data-width="18"></span>
</td>
<td className="py-3 px-6 text-slate-500">AI only</td>
<td className="py-3 px-6 text-slate-500">AI only</td>
<td className="py-3 px-6 text-slate-500">Limited</td>
</tr>
<tr className="bg-slate-50/50">
<td className="py-4 px-6 font-semibold text-slate-900">
                  Your First 3 Months
                </td>
<td className="py-4 px-6 bg-brand-50/50 text-brand-600 text-lg font-semibold">
                  $12/mo
                </td>
<td className="py-4 px-6 text-slate-500">$59/mo</td>
<td className="py-4 px-6 text-slate-500">$34/mo</td>
<td className="py-4 px-6 text-slate-500">$79/mo</td>
</tr>
</tbody>
</table>
</div>
<div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg text-center max-w-lg mx-auto transform hover:scale-105 transition-transform">
<p className="text-lg text-green-900 font-semibold">
            💰 Save $420/year vs. Typeform
          </p>
<p className="text-sm text-green-700 mt-1 font-medium">
            That's money you could spend on actual marketing
          </p>
</div>
<p className="text-center text-xs text-slate-400 mt-4">
          Comparison accurate as of December 2025. Competitor plans: Typeform
          Plus, Jotform Bronze, Heyflow Growth. Formflow pricing shown at 50%
          off promotional rate.
        </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">
          Whatever You Need Forms For, Formflow Handles It
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Lead Generation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Capture high-quality leads. Qualify via branching. Route hot
                leads via webhook.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">
                Quizzes &amp; Assessments
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Build scored quizzes with personalized results. Perfect for
                product recommendations.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Client Onboarding</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Collect information upfront. Conditional questions based on
                service type.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:pie-chart" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">
                Surveys &amp; Feedback
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Post-purchase surveys. Employee feedback. Segment responses
                automatically.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:ticket" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">
                Event Registration
              </h3>
<p className="text-sm text-slate-500 leading-relaxed">
                RSVP forms with conditional ticket types. Dietary preferences.
                Session selection.
              </p>
</div>
</div>

<div className="flex gap-4">
<div className="shrink-0 h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<span className="iconify" data-icon="lucide:file-text" data-width="20"></span>
</div>
<div>
<h3 className="font-medium text-slate-900 mb-1">Application Forms</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                Job applications. Program applications. Multi-step with file
                uploads.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-12 tracking-tight">
          Questions? We've Got Answers.
        </h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">
                What's included in ALL plans, even Starter?
              </h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              This is where we're different. EVERY plan includes:
              <strong>unlimited forms</strong>
              , visual logic builder, conversational branching, remove Formflow
              branding, email notifications, and webhooks. The features you need
              aren't locked behind enterprise pricing.
            </div>
</details>

<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">
                What happens after my 50% off period ends?
              </h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              After 3 months, you'll move to regular pricing. No surprises. You
              can cancel anytime. Most customers who try Formflow never leave
              because we give you features that competitors charge 3x more for.
            </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">
                Can I switch plans later?
              </h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              Absolutely. Upgrade or downgrade anytime. If you upgrade during
              your 50% off period, the discount applies to your new plan for the
              remainder of your 3 months.
            </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">
                What happens if I hit my submission limit?
              </h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              Your forms never break. Ever. Submissions queue privately for 14
              days. You can add credit packs or upgrade to unlock them. We don't
              hold data hostage.
            </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">
                How is support different from Typeform/Jotform?
              </h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              We're bootstrapped and founder-led. You get real humans, not AI
              chatbots. Our founder Jason personally invested $600k because he
              was fed up with form builders that don't care.
            </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 shadow-sm [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer">
<h3 className="font-medium text-slate-900">Do you offer refunds?</h3>
<span className="shrink-0 ml-1.5 p-1.5 text-slate-900 bg-white rounded-full group-hover:bg-slate-50 transition">
<span className="iconify group-open:rotate-180 transition-transform" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="px-4 pb-4 text-sm text-slate-500 leading-relaxed">
              Yes. We offer a 21-day money-back guarantee. If Formflow isn't
              right for you, we'll process a refund. No questions asked.
            </div>
</details>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-center px-4">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          Lock In 50% Off Before This Offer Expires
        </h2>
<p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Get unlimited forms, visual logic builder, and real features—starting
          at just $12/mo. Try it for 3 months at half price, then decide.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
<div className="flex items-center text-sm text-slate-300 gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="18"></span>
            Unlimited forms
          </div>
<div className="flex items-center text-sm text-slate-300 gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="18"></span>
            No surprise billing
          </div>
<div className="flex items-center text-sm text-slate-300 gap-2">
<span className="iconify text-green-400" data-icon="lucide:check-circle" data-width="18"></span>
            21-day money-back
          </div>
</div>
<div className="flex flex-col items-center gap-4">
<a className="inline-flex items-center justify-center h-14 px-10 text-lg font-medium text-white transition-all duration-200 bg-brand-600 rounded-full hover:bg-brand-500 shadow-lg shadow-brand-900/50" href="#pricing" id="final_cta_click">
            Claim Your 50% Off Now
            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="20"></span>
</a>
<a className="text-sm text-slate-500 hover:text-white transition-colors" href="#">
            View All Plans &amp; Pricing
          </a>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">How It Works</a></li>
<li><a className="hover:text-brand-600" href="#">Features</a></li>
<li><a className="hover:text-brand-600" href="#">Pricing</a></li>
<li><a className="hover:text-brand-600" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Use Cases</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li>
<a className="hover:text-brand-600" href="#">Lead Generation</a>
</li>
<li><a className="hover:text-brand-600" href="#">Quizzes</a></li>
<li><a className="hover:text-brand-600" href="#">Surveys</a></li>
<li>
<a className="hover:text-brand-600" href="#">Event Registration</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">Help Center</a></li>
<li><a className="hover:text-brand-600" href="#">Contact Us</a></li>
<li>
<a className="hover:text-brand-600" href="#">Facebook Community</a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-brand-600" href="#">Blog</a></li>
<li>
<a className="hover:text-brand-600" href="#">
                  Terms &amp; Conditions
                </a>
</li>
<li>
<a className="hover:text-brand-600" href="#">Privacy Policy</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
            © 2025 Formflow. All rights reserved.
          </p>
</div>
</div>
</footer>
<div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4" id="mobile_sticky_bar">
<div className="flex-1">
<p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
          Limited Offer
        </p>
<p className="text-sm text-slate-900 font-semibold">Get 50% Off - $12/mo</p>
</div>
<a className="px-5 py-2.5 bg-brand-600 text-white text-sm rounded-lg shadow-sm whitespace-nowrap hover:bg-brand-700 font-semibold" href="#pricing" id="mobile_sticky_click">
        Claim Offer
      </a>
</div>

    </>
  );
}
