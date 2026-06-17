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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<img alt="ReEngage Pro Logo" className="h-8 w-auto" src="https://app.reengage.pro/_next/image?url=%2Flogo.png&amp;w=384&amp;q=75"/>
</div>
<div className="hidden md:flex md:gap-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#safety">Safety</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 md:block" href="#">Log in</a>
<a className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900" href="#">Get Started</a>
</div>
</div>
</nav>
<main className="pt-16">

<section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-32">

<div className="absolute top-0 -z-10 h-full w-full bg-white">
<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-y-[30%] translate-x-[20%] rounded-full bg-blue-50 opacity-50 blur-[80px]"></div>
<div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-emerald-50 opacity-50 blur-[80px]"></div>
</div>
<div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
<div className="mb-8 flex justify-center">
<div className="rounded-full bg-blue-50 px-3 py-1 ring-1 ring-inset ring-blue-700/10">
<span className="flex items-center gap-2 text-sm font-medium text-blue-700">
<i className="h-4 w-4" data-lucide="bell"></i>
                            Attention Email Marketers
                        </span>
</div>
</div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                    One bad campaign can kill <br className="hidden sm:block"/> your sender reputation.
                </h1>
<p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                    That dormant segment is a deliverability risk sitting on untapped revenue. <br className="hidden md:block"/> ReEngage Pro automates the careful, conservative re-engagement process that deliverability experts recommend—but humans can't execute safely at scale.
                </p>
<div className="mt-10 flex flex-col items-center justify-center gap-y-4">
<a className="rounded-xl bg-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 w-full sm:w-auto" href="#">
                        Get Started Free
                    </a>
<p className="text-sm text-slate-500 flex items-center gap-1.5">
<i className="h-4 w-4 text-emerald-500" data-lucide="shield-check"></i>
                        Nothing sends without your approval.
                    </p>
</div>
<p className="mx-auto mt-6 max-w-lg text-sm text-slate-400">
                    Connect your ESP to see your data—campaigns only start when you click "Start Campaign."
                </p>
</div>
</section>

<section className="bg-slate-50 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-base font-medium leading-7 text-blue-600">The Hidden Risk</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">The risk hiding in your ESP</p>
<p className="mt-6 text-lg leading-8 text-slate-600">
                        Every email marketer has dormant subscribers. You know there's money in that segment, but one aggressive blast can land your entire operation in the spam folder.
                    </p>
</div>
<div className="mx-auto mt-16 max-w-5xl">
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">

<div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
<i className="h-6 w-6 text-amber-600" data-lucide="alert-triangle"></i>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-900">Spam Complaints</h3>
<p className="mt-2 text-base text-slate-600">
                                From forgotten subscribers who signed up years ago and don't recognize you anymore.
                            </p>
</div>

<div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
<i className="h-6 w-6 text-red-600" data-lucide="ban"></i>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-900">High Bounce Rates</h3>
<p className="mt-2 text-base text-slate-600">
                                Abandoned email addresses trigger bounces that hurt your overall sender score instantly.
                            </p>
</div>

<div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
<i className="h-6 w-6 text-slate-600" data-lucide="bar-chart-3"></i>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-900">Plummeting Open Rates</h3>
<p className="mt-2 text-base text-slate-600">
                                Gmail and Yahoo judge your entire domain based on how you handle your worst-performing segments.
                            </p>
</div>

<div className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-900/5 transition-all hover:shadow-md">
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50">
<i className="h-6 w-6 text-rose-600" data-lucide="globe"></i>
</div>
<h3 className="mt-4 text-lg font-medium tracking-tight text-slate-900">Domain Reputation Damage</h3>
<p className="mt-2 text-base text-slate-600">
                                The damage doesn't stay contained. It affects your ability to reach your <em>best</em> customers too.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Email them or delete them?</h2>
<p className="mt-6 text-lg leading-8 text-slate-600">The dilemma every email marketer faces.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="rounded-2xl border border-slate-200 bg-white p-8 opacity-75 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Option 1</div>
<h3 className="text-xl font-semibold text-slate-900">Email Them</h3>
<p className="mt-4 text-base text-slate-600">Risk spam complaints, bounces, and reputation damage that affects your entire list.</p>
<div className="mt-6 flex items-center text-red-600 text-sm font-medium">
<i className="mr-2 h-4 w-4" data-lucide="x-circle"></i> High Risk
                        </div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-8 opacity-75 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<div className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Option 2</div>
<h3 className="text-xl font-semibold text-slate-900">Delete Them</h3>
<p className="mt-4 text-base text-slate-600">Throw away potential revenue from people who might re-engage.</p>
<div className="mt-6 flex items-center text-amber-600 text-sm font-medium">
<i className="mr-2 h-4 w-4" data-lucide="trash-2"></i> Revenue Loss
                        </div>
</div>

<div className="relative rounded-2xl border border-blue-200 bg-blue-50/50 p-8 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500/20">
<div className="absolute -top-3 left-8 inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
                            ReEngage Pro
                        </div>
<div className="mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600">The Third Option</div>
<h3 className="text-xl font-semibold text-slate-900">Safe Recovery</h3>
<p className="mt-4 text-base text-slate-600">Recover revenue without the deliverability risk using automated, human-like pacing.</p>
<div className="mt-6 flex items-center text-emerald-600 text-sm font-medium">
<i className="mr-2 h-4 w-4" data-lucide="check-circle-2"></i> Optimized
                        </div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 py-24 sm:py-32 text-white" id="how-it-works">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl lg:text-center">
<h2 className="text-base font-medium leading-7 text-blue-400">Process</h2>
<p className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">The safe way to recover revenue</p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">

<div className="flex flex-col items-start">
<div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20">
<i className="h-6 w-6 text-white" data-lucide="link"></i>
</div>
<dt className="mt-4 text-lg font-medium leading-7 text-white">1. Connect your ESP</dt>
<dd className="mt-1 text-base leading-7 text-slate-400">Link your Klaviyo, Mailchimp, ActiveCampaign, HubSpot, or Kit account. See your dormant subscriber data.</dd>
</div>

<div className="flex flex-col items-start">
<div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20">
<i className="h-6 w-6 text-white" data-lucide="sparkles"></i>
</div>
<dt className="mt-4 text-lg font-medium leading-7 text-white">2. AI Personalization</dt>
<dd className="mt-1 text-base leading-7 text-slate-400">Different subscribers went dormant for different reasons. Our system creates the right message for each type.</dd>
</div>

<div className="flex flex-col items-start">
<div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20">
<i className="h-6 w-6 text-white" data-lucide="clock"></i>
</div>
<dt className="mt-4 text-lg font-medium leading-7 text-white">3. Impossibly Slow</dt>
<dd className="mt-1 text-base leading-7 text-slate-400">We send one email at a time with random delays, exactly like a human. No inbox provider can flag this as automated.</dd>
</div>

<div className="flex flex-col items-start">
<div className="rounded-lg bg-white/10 p-2 ring-1 ring-white/20">
<i className="h-6 w-6 text-emerald-400" data-lucide="trending-up"></i>
</div>
<dt className="mt-4 text-lg font-medium leading-7 text-white">4. Safe Re-engagement</dt>
<dd className="mt-1 text-base leading-7 text-slate-400">Subscribers re-engage safely. Revenue recovery happens without the deliverability risk.</dd>
</div>
</dl>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="safety">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Your reputation comes first, <br/> revenue comes second</h2>
</div>
<div className="mx-auto mt-16 max-w-7xl">
<div className="grid grid-cols-1 gap-px bg-slate-200/70 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden shadow-sm">
<div className="group bg-white p-8 sm:p-10">
<div className="mb-4 inline-flex items-center rounded-lg bg-slate-50 p-2 ring-1 ring-slate-100">
<i className="h-6 w-6 text-slate-700" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Automatic Monitoring</h3>
<p className="mt-2 text-base text-slate-600">We watch bounce rates, complaints, and your domain reputation in real-time.</p>
</div>
<div className="group bg-white p-8 sm:p-10">
<div className="mb-4 inline-flex items-center rounded-lg bg-slate-50 p-2 ring-1 ring-slate-100">
<i className="h-6 w-6 text-slate-700" data-lucide="shield-alert"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Instant Protection</h3>
<p className="mt-2 text-base text-slate-600">If anything looks risky, we pause automatically—before damage happens.</p>
</div>
<div className="group bg-white p-8 sm:p-10">
<div className="mb-4 inline-flex items-center rounded-lg bg-slate-50 p-2 ring-1 ring-slate-100">
<i className="h-6 w-6 text-slate-700" data-lucide="sliders"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">You Stay in Control</h3>
<p className="mt-2 text-base text-slate-600">Manual override available anytime. Stop, start, or adjust whenever you want.</p>
</div>
<div className="group bg-white p-8 sm:p-10">
<div className="mb-4 inline-flex items-center rounded-lg bg-slate-50 p-2 ring-1 ring-slate-100">
<i className="h-6 w-6 text-slate-700" data-lucide="file-search"></i>
</div>
<h3 className="text-lg font-medium text-slate-900">Immutable Transparency</h3>
<p className="mt-2 text-base text-slate-600">Every decision, safety action, and threshold change is permanently logged.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 py-24 sm:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-12 flex flex-col items-center text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">No surprises, no commitments</h2>
<p className="mt-4 text-lg text-slate-600">Connect your ESP and see how many dormant subscribers you have and how long they've been inactive. <br/> Only start a campaign when you're ready.</p>
</div>
<div className="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">

<div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">

<div className="border-b border-slate-200 bg-slate-50 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="h-3 w-3 rounded-full bg-slate-300"></div>
<div className="h-3 w-3 rounded-full bg-slate-300"></div>
<div className="h-3 w-3 rounded-full bg-slate-300"></div>
</div>
<div className="ml-4 flex-1 rounded-md bg-white border border-slate-200 py-1 px-3 text-xs text-slate-400 text-center">
                                app.reengage.pro/dashboard
                            </div>
</div>

<div className="flex h-[600px] w-full bg-slate-50">

<div className="w-64 bg-[#1e293b] flex-shrink-0 flex flex-col text-slate-300 p-4 hidden md:flex">
<div className="mb-8 px-2 pt-2">
<img className="h-6 opacity-90 invert brightness-0" src="https://app.reengage.pro/_next/image?url=%2Flogo.png&amp;w=384&amp;q=75"/>
</div>
<div className="space-y-1">
<div className="bg-blue-900/50 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-3">
<i className="h-4 w-4" data-lucide="layout-grid"></i> Dashboard
                                    </div>
<div className="px-3 py-2 text-sm font-medium flex items-center gap-3 hover:text-white cursor-pointer">
<i className="h-4 w-4" data-lucide="mail"></i> Campaigns
                                    </div>
<div className="px-3 py-2 text-sm font-medium flex items-center gap-3 hover:text-white cursor-pointer">
<i className="h-4 w-4" data-lucide="globe"></i> Deliverability
                                    </div>
<div className="px-3 py-2 text-sm font-medium flex items-center gap-3 hover:text-white cursor-pointer">
<i className="h-4 w-4" data-lucide="link"></i> Connections
                                    </div>
<div className="px-3 py-2 text-sm font-medium flex items-center gap-3 hover:text-white cursor-pointer">
<i className="h-4 w-4" data-lucide="shield"></i> Safety
                                    </div>
</div>
</div>

<div className="flex-1 p-8 overflow-y-auto">
<div className="flex justify-between items-center mb-8">
<div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
<div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                        Actively Re-engaging
                                    </div>
<div className="text-sm text-slate-500">
                                        Q1 Winback • 1,203 of 2,847 sent
                                    </div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
<h3 className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-4">Subscribers Re-engaged</h3>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-slate-900">3,694</span>
<span className="text-sm font-medium text-emerald-600 flex items-center">
<i className="h-3 w-3 mr-1" data-lucide="trending-up"></i> +24%
                                            </span>
</div>
<div className="mt-2 text-sm text-slate-500">+219 this week</div>
<div className="mt-6 text-emerald-600 text-sm font-medium flex items-center cursor-pointer hover:underline">
                                            View Campaigns <i className="ml-1 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
<h3 className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-4">Sender Health</h3>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-slate-900">94</span>
<span className="text-sm font-medium text-emerald-600 flex items-center">
<i className="h-3 w-3 mr-1" data-lucide="trending-up"></i> +16
                                            </span>
</div>
<div className="mt-2 text-sm font-medium text-emerald-600">Excellent</div>
<div className="mt-6 text-blue-600 text-sm font-medium flex items-center cursor-pointer hover:underline">
                                            View Details <i className="ml-1 h-3 w-3" data-lucide="arrow-right"></i>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
<i className="h-5 w-5 text-blue-600" data-lucide="users"></i>
</div>
<div className="text-sm text-slate-500">Total Subscribers</div>
<div className="text-2xl font-semibold text-slate-900 mt-1">38,247</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center mb-4">
<i className="h-5 w-5 text-amber-600" data-lucide="megaphone"></i>
</div>
<div className="text-sm text-slate-500">Active Campaigns</div>
<div className="text-2xl font-semibold text-slate-900 mt-1">1</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4">
<i className="h-5 w-5 text-emerald-600" data-lucide="bar-chart-2"></i>
</div>
<div className="text-sm text-slate-500">Avg. Engagement</div>
<div className="text-2xl font-semibold text-slate-900 mt-1">18.2%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 sm:py-32" id="faq">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-4xl divide-y divide-slate-900/10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl mb-10">Common questions</h2>
<div className="py-6">
<dt className="text-base font-semibold leading-7 text-slate-900">Will this hurt my deliverability?</dt>
<dd className="mt-2 text-base leading-7 text-slate-600">The opposite. We send impossibly slow with real-time safety monitoring. The system pauses before problems occur.</dd>
</div>
<div className="py-6">
<dt className="text-base font-semibold leading-7 text-slate-900">How is this different from a regular email campaign?</dt>
<dd className="mt-2 text-base leading-7 text-slate-600">Regular campaigns blast your list all at once. We send one email at a time with delays between each send, mimicking human behavior.</dd>
</div>
<div className="py-6">
<dt className="text-base font-semibold leading-7 text-slate-900">What if I don't like what I see after connecting?</dt>
<dd className="mt-2 text-base leading-7 text-slate-600">Disconnect anytime. No campaigns run without your explicit approval.</dd>
</div>
<div className="py-6">
<dt className="text-base font-semibold leading-7 text-slate-900">Which ESPs do you support?</dt>
<dd className="mt-2 text-base leading-7 text-slate-600">Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Kit. More coming soon.</dd>
</div>
<div className="py-6">
<dt className="text-base font-semibold leading-7 text-slate-900">Is there a contract?</dt>
<dd className="mt-2 text-base leading-7 text-slate-600">No. Monthly billing, cancel anytime.</dd>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Built by email deliverability veterans</h2>
<p className="mt-4 text-xl font-medium leading-8 text-slate-900">
                        Created by operators who've managed millions of sends and survived every major deliverability shift from Gmail, Yahoo, and Apple.
                    </p>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-slate-900 py-16 sm:py-24 lg:py-32">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
<div className="max-w-xl lg:max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to safely recover revenue from your dormant list?</h2>
<p className="mt-4 text-lg leading-8 text-slate-300">
                            Nothing sends without your approval. See the potential revenue sitting in your account in 5 minutes.
                        </p>
<div className="mt-8 flex items-center gap-x-6">
<a className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all" href="#">Get Started Free</a>
<span className="text-sm font-medium text-slate-400">No credit card required</span>
</div>
</div>

<div className="relative lg:ml-auto">
<div className="relative rounded-xl bg-slate-800/50 p-8 ring-1 ring-white/10">
<div className="flex items-center gap-4 mb-6">
<div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
<i className="h-6 w-6 text-emerald-400" data-lucide="check"></i>
</div>
<div>
<div className="text-white font-medium">Re-engagement Active</div>
<div className="text-slate-400 text-sm">Processing safe sends...</div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 bg-slate-700 rounded-full w-full overflow-hidden">
<div className="h-full bg-blue-500 w-2/3"></div>
</div>
<div className="flex justify-between text-xs text-slate-400">
<span>Reputation: Excellent</span>
<span>Sending speed: 10/hr</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
<div className="flex justify-center space-x-6 md:order-2">
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="sr-only">Twitter</span>
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
<a className="text-slate-400 hover:text-slate-500" href="#">
<span className="sr-only">LinkedIn</span>
<i className="h-5 w-5" data-lucide="linkedin"></i>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0">
<div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
<img alt="Logo" className="h-6 opacity-80 grayscale hover:grayscale-0 transition-all" src="https://app.reengage.pro/_next/image?url=%2Flogo.png&amp;w=384&amp;q=75"/>
</div>
<p className="text-center text-xs leading-5 text-slate-500 md:text-left">
                        © 2024 ReEngage Pro. All rights reserved.
                    </p>
</div>
</div>
</footer>
</main>


    </>
  );
}
