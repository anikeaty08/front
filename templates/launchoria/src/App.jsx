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
      

<nav className="fixed top-0 w-full bg-zinc-950/70 backdrop-blur-xl z-50 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="font-medium text-lg tracking-tighter text-zinc-50 uppercase">
                Launchoria
            </div>
<a className="text-xs font-medium text-zinc-950 bg-zinc-50 hover:bg-zinc-200 transition-colors px-4 py-1.5 rounded-full" href="#book">
                Book Call
            </a>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative overflow-hidden" style={{background: 'radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.08) 0%, transparent 70%)'}}>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-900/30 bg-sky-900/10 text-xs text-sky-300 mb-8">
<iconify-icon className="text-sky-400" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                For Accounting Firms Doing $500K+
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium text-zinc-50 tracking-tighter max-w-4xl mr-auto mb-8 ml-auto">Add $50K-$100K in Annual Revenue. <span className="text-zinc-600">On Autopilot.</span></h1>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                An AI-driven, done-for-you client acquisition system. Stop relying on unpredictable referrals and build a scalable pipeline of high-margin clients.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto text-sm font-medium text-zinc-950 bg-zinc-50 hover:bg-zinc-200 transition-all px-8 py-3 rounded-full text-center" href="#book">
                    Get Started
                </a>
<a className="w-full sm:w-auto text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors px-8 py-3 rounded-full text-center flex items-center justify-center gap-2" href="#how-it-works">
                    Explore the system <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:mb-24">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-4">Referrals are great.<br/>Until they dry up.</h2>
<p className="text-sm md:text-base text-zinc-400 max-w-xl">You're great at what you do, but relying on word-of-mouth limits your growth and strips you of control.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">

<div className="col-span-1 md:col-span-2 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 relative overflow-hidden group hover:bg-zinc-900/40 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity text-sky-500">
<iconify-icon className="text-6xl" icon="solar:graph-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end pt-12">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">Unpredictable Pipeline</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">You don't know where the next client is coming from, making it impossible to forecast revenue or hire confidently.</p>
</div>
</div>

<div className="col-span-1 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 group hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-500 mb-6" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-2">Messy Work</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Referrals often bring businesses with disorganized books and a reluctance to pay your true worth.</p>
</div>

<div className="col-span-1 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 group hover:bg-zinc-900/40 transition-colors">
<iconify-icon className="text-2xl text-zinc-500 mb-6" icon="solar:hourglass-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-50 mb-2">Time Wasters</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Hours spent on discovery calls with prospects who aren't qualified or can't afford your services.</p>
</div>

<div className="col-span-1 md:col-span-2 p-8 rounded-3xl border border-white/5 bg-zinc-900/20 relative overflow-hidden group hover:bg-zinc-900/40 transition-colors">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity text-sky-500">
<iconify-icon className="text-6xl" icon="solar:route-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-end pt-12">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">The $500K Plateau</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">You've hit a ceiling. Without a proactive acquisition system, scaling past this point requires more hours than you have.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-zinc-950" id="how-it-works">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

<div className="lg:w-1/3">
<div className="sticky top-32">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-6">The Acquisition Engine.</h2>
<p className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed">
                        We deploy an intelligent system tailored for accounting firms. It builds authority, captures intent, and uses AI to qualify prospects before they ever reach your calendar.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-sky-500 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Predictable pipeline
                        </div>
<div className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-sky-500 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 100% Done-for-you
                        </div>
<div className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-sky-500 text-base" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Only serious prospects
                        </div>
</div>
</div>
</div>

<div className="lg:w-2/3 space-y-8">

<div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-zinc-900/10 flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-zinc-50 font-medium text-sm">01</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">Attract &amp; Target</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We launch highly targeted ad campaigns aimed precisely at the businesses you want to serve. No generic messaging. We speak directly to the pain points of high-revenue business owners.</p>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-zinc-900/10 flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-zinc-50 font-medium text-sm">02</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">AI Filtration</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Our AI engages prospects instantly, asking qualifying questions about revenue, specific needs, and urgency to weed out bad fits and time wasters before they take up your time.</p>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-zinc-900/10 flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 border border-white/10 text-zinc-50 font-medium text-sm">03</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">Automated Booking</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Only right-fit prospects who pass the criteria are sent to your calendar. You wake up to qualified appointments booked directly into your schedule seamlessly.</p>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl border border-sky-900/20 bg-sky-900/5 flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20 text-sky-400 font-medium text-sm">04</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-zinc-50 mb-3">Close &amp; Scale</h3>
<p className="text-sm text-zinc-400 leading-relaxed">You step into calls with high-intent business owners ready to upgrade their accounting operations. You close the deal, increase your margins, and scale predictably.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative">
<div className="absolute inset-0 bg-zinc-900/20 -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-10">Everything included.</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<iconify-icon className="text-xl text-sky-500 shrink-0 mt-1" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<h4 className="text-sm font-medium text-zinc-200 mb-1">Ad Creation &amp; Copywriting</h4>
<p className="text-xs text-zinc-500">End-to-end design and media buying targeted at your ideal ICP.</p>
</div>
</li>
<li className="flex gap-4">
<iconify-icon className="text-xl text-sky-500 shrink-0 mt-1" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="">
<h4 className="text-sm font-medium text-zinc-200 mb-1">High-Converting Funnels</h4>
<p className="text-xs text-zinc-500">Landing pages optimized specifically for accounting client acquisition.</p>
</div>
</li>
<li className="flex gap-4">
<iconify-icon className="text-xl text-sky-500 shrink-0 mt-1" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-1">AI Qualification Agents</h4>
<p className="text-xs text-zinc-500">Intelligent prescreening to ensure you only talk to decision-makers.</p>
</div>
</li>
<li className="flex gap-4">
<iconify-icon className="text-xl text-sky-500 shrink-0 mt-1" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h4 className="text-sm font-medium text-zinc-200 mb-1">Automated Nurture Sequences</h4>
<p className="text-xs text-zinc-500">Email and SMS follow-ups to keep prospects warm until they book.</p>
</div>
</li>
</ul>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-zinc-950">
<div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-6 uppercase tracking-wider">
                        Requirements
                    </div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-50 mb-6">Who this is for.</h2>
<p className="text-sm text-zinc-400 mb-8">This system requires operational capacity. We only partner with firms where we can drive massive ROI.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-900/30 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-lg text-zinc-500" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Established firms doing $500K+ annually.
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-900/30 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-lg text-zinc-500" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Capacity for 5-10 new clients monthly.
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 bg-zinc-900/30 p-3 rounded-xl border border-white/5">
<iconify-icon className="text-lg text-zinc-500" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Desire for high-margin, advisory business.
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6" id="book">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-50 mb-4">Book your strategy call.</h2>
<p className="text-sm text-zinc-400 max-w-xl mx-auto">Select a date and time to see if our system is the right fit to scale your firm.</p>
</div>
<div className="border border-white/5 rounded-3xl bg-zinc-950/80 backdrop-blur-xl overflow-hidden shadow-2xl relative w-full" style={{height: '700px'}}>

<div className="calendly-inline-widget w-full h-full" data-processed="true" data-url="https://calendly.com/launchoria/meeting-with-launchoria?background_color=09090b&amp;text_color=fafafa&amp;primary_color=38bdf8" style={{position: 'relative', minWidth: '320px', height: '100%'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe frameborder="0" height="100%" src="https://calendly.com/launchoria/meeting-with-launchoria?embed_domain=&amp;embed_type=Inline&amp;background_color=09090b&amp;text_color=fafafa&amp;primary_color=38bdf8" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-3xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-50 mb-10">Frequently Asked.</h2>
<div className="divide-y divide-white/5 border-y border-white/5">
<details className="group">
<summary className="flex items-center justify-between cursor-pointer py-6 font-medium text-sm text-zinc-200">
                        Will this work for my specific niche?
                        <iconify-icon className="text-lg text-zinc-500 group-open:hidden" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg text-zinc-500 hidden group-open:block" icon="solar:minus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pb-6 text-sm text-zinc-400 leading-relaxed pr-8">
                        Yes. Because we build custom messaging and targeting, the system adapts to whatever niche you serve—whether that's construction, e-commerce, healthcare, or real estate.
                    </div>
</details>
<details className="group">
<summary className="flex items-center justify-between cursor-pointer py-6 font-medium text-sm text-zinc-200">
                        Do I need to manage anything?
                        <iconify-icon className="text-lg text-zinc-500 group-open:hidden" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg text-zinc-500 hidden group-open:block" icon="solar:minus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pb-6 text-sm text-zinc-400 leading-relaxed pr-8">
                        No. This is completely done-for-you. We handle the ads, funnels, AI qualification, and booking system. Your only job is to show up to the calls and close.
                    </div>
</details>
<details className="group">
<summary className="flex items-center justify-between cursor-pointer py-6 font-medium text-sm text-zinc-200">
                        How exactly are clients qualified?
                        <iconify-icon className="text-lg text-zinc-500 group-open:hidden" icon="solar:add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-lg text-zinc-500 hidden group-open:block" icon="solar:minus-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</summary>
<div className="pb-6 text-sm text-zinc-400 leading-relaxed pr-8">
                        Before a prospect can book a slot, our AI asks specific questions regarding their annual revenue, current setup, and needs. If they don't meet your criteria, they don't get a meeting.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-sky-900/10 -z-10"></div>
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-50 mb-6">Stop hoping for referrals.</h2>
<p className="text-base text-zinc-400 mb-10">Take control of your growth. Let's see if our system is a fit for your firm.</p>
<a className="inline-block text-sm font-medium text-zinc-950 bg-zinc-50 hover:bg-zinc-200 transition-all px-10 py-4 rounded-full text-center" href="#book">
                Book a Strategy Call
            </a>
<p className="text-xs text-zinc-500 mt-6">
                30-minute fit check. No pressure.
            </p>
</div>
</section>
<footer className="py-8 border-t border-white/5 text-center">
<div className="text-xs text-zinc-600">
            © 2024 Launchoria. All rights reserved.
        </div>
</footer>

    </>
  );
}
