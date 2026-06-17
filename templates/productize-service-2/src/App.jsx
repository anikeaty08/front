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



      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && window.lucide.createIcons) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<div className="min-h-screen flex flex-col bg-slate-50">
<div className="flex-1 flex flex-col">
<div className="pointer-events-none absolute inset-x-0 top-0 h-96 overflow-hidden">
<div className="mx-auto h-full max-w-5xl">
<div className="h-full w-full rounded-full bg-gradient-to-r from-sky-400/20 via-blue-400/10 to-indigo-400/20 blur-3xl"></div>
</div>
</div>

<header className="relative z-20 border-b border-slate-200/80 backdrop-blur bg-white/80">
<div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-gradient-to-br from-sky-400/90 via-blue-500/90 to-indigo-500/90 flex items-center justify-center shadow-lg shadow-blue-500/20">
<span className="text-xs font-semibold tracking-tight text-white">Pr</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-900 leading-none">PRODUCTIZELY</span>
<span className="leading-tight text-xs text-slate-500 mt-0.5" style={{}}>The Productization Playbook</span>
</div>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-medium tracking-tight text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-colors" href="#buy">
<span>Get the book – $97</span>
</a>
</div>
</div>
</header>

<main className="relative z-10 flex-1">

<section className="border-b border-slate-200 bg-gradient-to-b from-sky-50/50 via-slate-50 to-slate-50" id="top">
<div className="sm:px-6 lg:px-8 sm:pt-14 sm:pb-16 max-w-6xl mr-auto ml-auto pt-14 pr-4 pb-16 pl-4 space-y-4 gap-x-y-1 gap-y-1">
<div className="flex justify-center">
<div className="inline-flex uppercase text-xs text-sky-700 tracking-[0.2em] bg-white/80 border-sky-200 border rounded-full pt-1 pr-4 pb-1 pl-4 items-center">How To Productize Your Business</div>
</div>
<div className="text-center max-w-4xl mr-auto ml-auto space-y-2 gap-x-y-1 gap-y-1 items-center justify-center">
<h1 className="leading-[1.1] sm:text-4xl lg:text-3xl text-xl font-semibold text-slate-900 tracking-tight mt-6">How To Turn Your Agency Into A Simple Repeatable Offer That Sells Via Ads &amp; Only Needs You To Deliver So You Can Keep More Of The Money You Make While Working From Anywhere In The World</h1>
<p className="leading-relaxed text-sm text-slate-600 tracking-tight text-center max-w-3xl mt-6 mr-auto ml-auto">This book is a peek behind the curtain on how agencies, service businesses, and consulting firms will be run in the next 3-5 years. Keeping all the margin, ditching team overhead, and earning more from less. We're giving it to you now so you beat the crowd.</p>
</div>
<div className="mt-12 lg:mt-16 grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 items-start">

<div className="">
<div className="rounded-2xl border border-slate-200 bg-white shadow-sm px-6 py-6">
<p className="text-sm font-medium tracking-tight text-slate-900 border-b border-slate-100 pb-4 mb-5">
                      In the next few scrolls, you’ll see exactly:
                    </p>
<div className="space-y-8">

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600">
<svg className="lucide lucide-x h-3.5 w-3.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">Why you can't run profitable ads with your current business model</h3>
<p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                            Custom services kill ad profitability. You can't scale what's not systematized. This is the real reason your ads don't work—and the fix that changes everything.
                          </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">The three-phase system that builds an ad-profitable, fully automated business</h3>
<p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                            It's not productize OR monetize OR systemize. It's all three in a specific order. Productize turns your service into a product. Monetize builds a 24/7 sales funnel. Systemize automates fulfillment.
                          </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">How to onboard clients without you ever being involved</h3>
<p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                            This is where the real freedom comes in. Your fulfillment is documented, templated, and AI-assisted. Clients get onboarded. Work gets done. You're traveling.
                          </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 mt-1">
<div className="h-6 w-6 rounded-full bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600">
<svg className="lucide lucide-check h-3.5 w-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900">How this looks in real businesses</h3>
<p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                            Designers scaling from $80k to $250k per year. Coaches earning passive revenue. Consultants running profitable ad campaigns. Same framework. Different industries.
                          </p>
</div>
</div>
</div>
</div>
</div>

<aside className="lg:sticky lg:top-20" id="buy">
<div className="relative rounded-2xl border border-sky-300 bg-white shadow-xl shadow-sky-500/20 overflow-hidden">
<div className="px-5 py-4 bg-gradient-to-b from-sky-600 to-sky-500 text-white">
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-[0.2em] text-sky-100">Now available</p>
<span className="bg-white/20 text-white text-[0.65rem] font-semibold px-2 py-0.5 rounded-full">INSTANT ACCESS</span>
</div>
<h2 className="text-xl font-semibold tracking-tight mt-2" style={{}}>Get The Productize, Monetize, Systemize eBook Today</h2>
<p className="text-sm text-sky-50 mt-2" style={{}}>The complete system to running your productized service business.</p>
</div>
<div className="px-5 py-5 space-y-5">
<div className="space-y-3">
<p className="text-xs uppercase tracking-[0.18em] text-slate-500">The framework inside</p>
<ul className="space-y-2 text-sm text-slate-800">
<li className="flex gap-2 items-start">
<svg className="lucide lucide-box h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="leading-snug">How to package your service into a productized offer (so ads actually work).</span>
</li>
<li className="flex gap-2 items-start">
<svg className="lucide lucide-funnel h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="funnel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
<span className="leading-snug">How to build a 24/7 sales funnel with direct response copywriting.</span>
</li>
<li className="flex gap-2 items-start">
<svg className="lucide lucide-cpu h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="leading-snug">How to automate onboarding with AI assistance.</span>
</li>
<li className="flex gap-2 items-start">
<svg className="lucide lucide-bar-chart-3 h-4 w-4 text-sky-500 mt-0.5 flex-shrink-0" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
<span className="leading-snug">How to run profitable paid campaigns (because you're not burning cash on calls).</span>
</li>
</ul>
</div>
<div className="space-y-3 pt-2 border-t border-slate-100">
<div className="flex items-center justify-between mb-1">
<p className="text-xs uppercase tracking-[0.18em] text-slate-500">One-time payment</p>
<p className="text-2xl font-bold text-slate-900">$97</p>
</div>
<button className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/40 transition duration-300 hover:bg-sky-400 hover:shadow-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">
<span className="mr-2">Download Now</span>
<svg className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[0.7rem] text-slate-500 text-center">
                          Instant delivery to your email.
                        </p>
</div>
</div>
</div>
<div className="mt-4 text-center">
<p className="text-xs text-slate-400">Trusted by founders worldwide</p>
<div className="flex justify-center gap-1 mt-1.5">
<div className="flex gap-0.5">
<svg className="w-3 h-3 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-3 h-3 text-amber-400 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b" id="story">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-16 items-start">

<div className="">
<div className="inline-flex items-center gap-2 mb-4">
<p className="uppercase text-xs font-medium text-sky-600 tracking-[0.2em]" style={{}}>What is this?</p>
</div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-6">
                    This is the system I wish I had when I was stuck working 60 hours a week in my own business.
                  </h2>
<div className="prose prose-slate prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-base prose-strong:text-slate-900 prose-strong:font-semibold space-y-4">
<p className="">Most service founders start the same way. You're good at what you do. Really good. Clients love you. Revenue is solid.</p>
<p className="">But you're trapped. You're doing custom work for every single client. Proposing different scopes. Different timelines. Different prices. Different everything.</p>
<p className="">Your calendar is chaos. Your team needs you in every decision. Scaling feels impossible because you're the bottleneck.</p>
<p className="">And worst of all? You tried running ads to scale faster. But they didn't work. Because here's the truth:</p>
<div className="bg-rose-50 border-rose-400 rounded-r-lg border-l-4 mt-6 mb-6 pt-4 pr-4 pb-4 pl-4">
<p className="text-rose-900 font-medium m-0">You can't run profitable ads on a custom service business.</p>
</div>
<p className="">Why? Because ads bring volume, but your business doesn't handle volume. Every client is custom. Every project takes personalized hand-holding. Your cost to acquire a customer is way higher than your profit per customer. So the ads bleed money.</p>
<p className=""> The problem isn't the ads. The problem is your business model. You're trying to scale a consulting business like it's a consulting business. But consulting doesn't scale profitably at the ad level.</p>
<p className="">E-commerce scales profitably with ads because it's productized. Customers self-serve. Fulfillment is systematized. Margins are healthy even with ad costs. </p>
<p className="">What if instead of custom projects, you had a clear, productized offer? What if instead of 1:1 sales calls, you had a 24/7 sales funnel? What if your team could deliver everything without you?</p>
<p className="">Then you could:</p>
<ul className="list-none pl-0 space-y-2 mt-4 mb-6">
<li className="flex gap-2 items-center"><span className="text-sky-500">✓</span> Run profitable paid ads (because your margins support it)</li>
<li className="flex gap-2 items-center"><span className="text-sky-500">✓</span> Travel anywhere (because your business doesn't depend on your presence)</li>
<li className="flex gap-2 items-center"><span className="text-sky-500">✓</span> Build a lean team (because everything is systematized)</li>
<li className="flex gap-2 items-center"><span className="text-sky-500">✓</span> Have total calendar freedom (because you're not the linchpin)</li>
</ul>
<p className="" style={{}}>That's the shift. From consulting mindset → to a productized mindset.</p>
<p className="">I turned this framework into a book. It's the shortcut I wish I had. Now it's yours.</p>
</div>
</div>

<aside className="hidden lg:block sticky top-24">
<div className="rounded-2xl bg-slate-100 p-1 border border-slate-200">
<div className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
<p className="text-xs uppercase tracking-[0.18em] text-slate-500 mb-4">The Transformation</p>
<div className="space-y-6">
<div className="flex flex-col gap-2 relative pb-6 border-l border-slate-200 pl-6 last:border-0">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-slate-300"></div>
<h4 className="text-sm font-semibold text-slate-900">1. Productize</h4>
<p className="text-xs text-slate-600">Turn messy service into clean product. Defined scope. Clear boundaries.</p>
</div>
<div className="flex flex-col gap-2 relative pb-6 border-l border-slate-200 pl-6 last:border-0">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-sky-300"></div>
<h4 className="text-sm font-semibold text-slate-900">2. Monetize</h4>
<p className="text-xs text-slate-600">Build 24/7 sales funnel. Direct response copy. Money flows without calls.</p>
</div>
<div className="flex flex-col gap-2 relative border-l border-transparent pl-6">
<div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-sky-500"></div>
<h4 className="text-sm font-semibold text-slate-900">3. Systemize</h4>
<p className="text-xs text-slate-600">Document &amp; template fulfillment. Team delivers. You travel.</p>
</div>
</div>
<div className="mt-6 pt-6 border-t border-slate-100">
<a className="block w-full text-center text-xs font-medium text-sky-600 hover:text-sky-700 transition-colors" href="#buy">
                           Download the framework →
                         </a>
</div>
</div>
</div><div className="bg-slate-100 border-slate-200 border rounded-2xl pt-1 pr-1 pb-1 pl-1 mt-6">
<div className="bg-white border-slate-100 border rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-5">
<p className="uppercase text-xs text-slate-500 tracking-[0.18em]" style={{}}>The OFFER Shift</p>
<div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md">
<svg className="text-emerald-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
<span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wide">Profitable</span>
</div>
</div><div className="space-y-5">

<div className="">
<div className="flex justify-between items-end mb-2">
<div className="">
<p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Time To Close</p>
<p className="text-sm font-bold text-slate-900 mt-0.5">48 Hours <span className="text-slate-400 font-normal text-xs line-through ml-1">3 Weeks</span></p>
</div>
<span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5" style={{}}>-90% Decrease</span>
</div>
<div className="relative h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[10%] bg-emerald-500 rounded-full"></div>
<div className="absolute top-0 left-[10%] h-full w-[90%] bg-slate-200 opacity-30"></div>
</div>
</div>

<div className="">
</div>
</div><div className="mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-3 items-start">
<div className="relative flex-shrink-0">
<img className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-50 border border-slate-200" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=100&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-sky-500 rounded-full p-0.5 border border-white">
<svg className="text-white" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="">
<p className="text-xs text-slate-600 leading-relaxed">"I stopped writing custom proposals. I just send my product link. Clients read it and buy. It's magic."</p>
<p className="text-[10px] text-slate-400 font-medium mt-1.5 uppercase tracking-wide">Sarah • Brand Designer</p>
</div>
</div>
</div>
<div className="mt-6 pt-5 border-t border-slate-100">
<div className="flex gap-3 items-start">
<div className="relative flex-shrink-0">
<img className="h-9 w-9 rounded-full object-cover ring-2 ring-slate-50 border border-slate-200" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
<div className="absolute -bottom-1 -right-1 bg-sky-500 rounded-full p-0.5 border border-white">
<svg className="text-white" fill="none" height="8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="">
<p className="text-xs text-slate-600 leading-relaxed">"My ads used to burn cash. After productizing, they print profit. The math finally works."</p>
<p className="text-[10px] text-slate-400 font-medium mt-1.5 uppercase tracking-wide">Justin • Consultant</p>
</div>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</section>

<section className="bg-slate-50 border-slate-200 border-b" id="old-new">
<div className="sm:px-6 lg:px-8 sm:py-16 max-w-6xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="max-w-3xl mx-auto text-center mb-10">
<p className="uppercase text-xs text-sky-600 tracking-[0.2em]" style={{}}>The Old WAY vs The New Way</p>
<h2 className="sm:text-3xl text-2xl font-semibold text-slate-900 tracking-tight mt-3" style={{}}>The Productizely model is a shortcut to your success</h2>
<p className="mt-3 text-base text-slate-600">
                  Same skills. Same clients. Same market. Completely different business model.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">

<div className="rounded-2xl border border-rose-200 bg-white shadow-lg shadow-rose-500/5 h-full">
<div className="px-6 py-5 border-b border-rose-100 bg-rose-50/50 flex items-center justify-between rounded-t-2xl">
<div className="">
<p className="text-xs uppercase tracking-[0.2em] text-rose-700 font-semibold">Old way</p>
<p className="mt-1 text-sm font-medium tracking-tight text-slate-900">
                        "You're stuck in the consulting trap"
                      </p>
</div>
</div>
<div className="p-6 space-y-5">
<div className="">
<p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">The Sales Process</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><span className="text-rose-400">•</span> Every prospect requires a manual discovery call.</li>
<li className="flex gap-2"><span className="text-rose-400">•</span> Proposing different scopes to each prospect.</li>
<li className="flex gap-2"><span className="text-rose-400">•</span> Sales conversations take weeks.</li>
</ul>
</div>
<div className="border-t border-rose-50 pt-4">
<p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">The Advertising Reality</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><span className="text-rose-400">•</span> Ads don't work profitably.</li>
<li className="flex gap-2"><span className="text-rose-400">•</span> Cost to acquire &gt; profit per customer.</li>
<li className="flex gap-2"><span className="text-rose-400">•</span> Scaling with ads feels impossible.</li>
</ul>
</div>
<div className="border-t border-rose-50 pt-4">
<p className="text-xs font-bold text-rose-600 uppercase tracking-wide mb-2">The Lifestyle</p>
<p className="text-sm text-slate-600">Tied to location. Calendar is full. Can't travel. No passive revenue. Burnout is inevitable.</p>
</div>
<div className="mt-4 rounded-lg bg-rose-50 p-3 text-sm text-rose-900 italic border border-rose-100">
                      Result: A business that looks successful from outside but secretly depends on you never taking a break.
                    </div>
</div>
</div>

<div className="rounded-2xl border border-emerald-200 bg-white shadow-lg shadow-emerald-500/5 h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-bl-full"></div>
<div className="px-6 py-5 border-b border-emerald-100 bg-emerald-50/50 flex items-center justify-between rounded-t-2xl">
<div className="">
<p className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-semibold">New way</p>
<p className="text-sm font-medium text-slate-900 tracking-tight mt-1" style={{}}>"The productized model (built for services)"</p>
</div>
</div>
<div className="p-6 space-y-5">
<div className="">
<p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">The Sales Process</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Prospects enter a 24/7 automated sales funnel.</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Copy sells your productized offer.</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Price is fixed (no negotiation).</li>
</ul>
</div>
<div className="border-t border-emerald-50 pt-4">
<p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">The Advertising Reality</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Ads work profitably with healthy margins.</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> 10x returns on ad spend.</li>
<li className="flex gap-2"><span className="text-emerald-500">✓</span> Ads become your primary growth channel.</li>
</ul>
</div>
<div className="border-t border-emerald-50 pt-4">
<p className="text-xs font-bold text-emerald-600 uppercase tracking-wide mb-2">The Lifestyle</p>
<p className="text-sm text-slate-600">Location independent. Calendar is controlled. Travel anywhere. Passive revenue flows.</p>
</div>
<div className="mt-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-900 italic border border-emerald-100">
                      Result: A calm, profitable business that grows because of the systems you built—not your hours.
                    </div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-lg font-medium text-slate-900">
                  "I deliver custom projects" <span className="text-slate-400 mx-2">→</span> <span className="text-sky-600">"I have a productized offer I sell through ads"</span>
</p>
<p className="text-sm text-slate-500 mt-2">That one shift changes everything.</p>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b" id="system">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="max-w-3xl mb-10">
<p className="text-xs uppercase tracking-[0.2em] text-sky-600 mb-2">The complete framework</p>
<h2 className="sm:text-2xl text-2xl font-semibold text-slate-900 tracking-tight">
                  Productize. Monetize. Systemize. That’s the whole game.
                </h2>
<p className="mt-4 text-lg text-slate-700">
                  This isn't theory. It's the exact system that separates service providers making $50k from those making $500k.
                </p>
</div>
<div className="grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-package h-5 w-5 text-sky-600" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 1</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Productize</h3>
<p className="text-sm text-slate-600 mb-4 flex-grow">
                    Turn your service into a product. Identify your core offer, set clear boundaries, and document the process.
                  </p>
<div className="pt-4 border-t border-slate-200">
<p className="text-xs font-medium text-slate-900">The Result:</p>
<p className="text-xs text-slate-500 mt-1">When prospects ask "What do you do?", you have a one-sentence answer.</p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-badge-dollar-sign h-5 w-5 text-sky-600" data-lucide="badge-dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 2</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Monetize</h3>
<p className="text-sm text-slate-600 mb-4 flex-grow">
                    Position and price strategically. Build a 24/7 sales funnel with direct response copywriting so money flows without you.
                  </p>
<div className="pt-4 border-t border-slate-200">
<p className="text-xs font-medium text-slate-900">The Result:</p>
<p className="text-xs text-slate-500 mt-1">You stop explaining yourself. Better clients say yes faster.</p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="h-10 w-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
<svg className="lucide lucide-settings-2 h-5 w-5 text-sky-600" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
</div>
<span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Phase 3</span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Systemize</h3>
<p className="text-sm text-slate-600 mb-4 flex-grow">
                    Build delivery infrastructure. Automate with AI. Delegate to a lean team. Create passive streams.
                  </p>
<div className="pt-4 border-t border-slate-200">
<p className="text-xs font-medium text-slate-900">The Result:</p>
<p className="text-xs text-slate-500 mt-1">Clients are onboarded without you. You can travel for months.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="inside">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="text-center max-w-3xl mx-auto mb-12">
<p className="text-xs uppercase tracking-[0.2em] text-sky-600 mb-2">Everything you actually need</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  A complete framework. Real examples. Your action plan.
                </h2>
</div>
<div className="space-y-4">

<div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="flex gap-4 items-start">
<span className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">01</span>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Part 1: Productize (40 pages)</h3>
<p className="text-sm text-slate-600 mt-1">How to turn your service into a clear, repeatable offer.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">The core offer filter</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Defining scope &amp; boundaries</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Why most offers fail</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="flex gap-4 items-start">
<span className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">02</span>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Part 2: Monetize (40 pages)</h3>
<p className="text-sm text-slate-600 mt-1">How to build a 24/7 sales funnel with direct response copywriting.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center ring-inset text-xs font-medium text-slate-600 bg-slate-50 ring-slate-200 ring-1 rounded-md pt-1 pr-2 pb-1 pl-2" style={{}}>E-com style sales funnel</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Copywriting framework</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Strategic pricing models</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md">
<div className="flex gap-4 items-start">
<span className="flex-shrink-0 h-8 w-8 rounded-lg bg-sky-100 text-sky-700 font-bold text-sm flex items-center justify-center">03</span>
<div className="">
<h3 className="text-lg font-semibold text-slate-900">Part 3: Systemize (45 pages)</h3>
<p className="text-sm text-slate-600 mt-1">How to build delivery systems so your business scales without you.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">AI-assisted onboarding</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Process documentation</span>
<span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">Automation vs. Delegation</span>
</div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Part 4: 30-Day Plan</h3>
<p className="text-xs text-slate-500">Week-by-week implementation actions.</p>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<h3 className="text-sm font-semibold text-slate-900 mb-1">Part 5: 15 Real Examples</h3>
<p className="text-xs text-slate-500">Agencies, coaches, consultants &amp; more.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="max-w-3xl mb-10">
<p className="text-xs uppercase tracking-[0.2em] text-sky-600 mb-2">The life you actually want</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  A business that runs without you. So you can go where you want, when you want.
                </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-trending-up h-6 w-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Profitable Paid Ads</h3>
<p className="mt-2 text-sm text-slate-600">Stop bleeding money. Your margins are healthy enough to run ads profitably and scale predictably.</p>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-globe h-6 w-6" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Location Independence</h3>
<p className="mt-2 text-sm text-slate-600">Work from Bali, Barbados, or your living room. Your clients get served, team delivers, money flows.</p>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-coins h-6 w-6" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900" style={{}}>True Semi-Passive Profits</h3>
<p className="mt-2 text-sm text-slate-600">Systematized fulfillment + AI assistance = money that flows even when you're sleeping or traveling.</p>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-users h-6 w-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Lean Team</h3>
<p className="mt-2 text-sm text-slate-600">You don't need 10 employees. Systems are so clear that 2-3 people can deliver what used to require a bloated team.</p>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-calendar h-6 w-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Calendar Freedom</h3>
<p className="mt-2 text-sm text-slate-600">No more packed calendars. No more client calls determining your day. You control your time.</p>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
<div className="mb-3 text-sky-500">
<svg className="lucide lucide-battery-charging h-6 w-6" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
<h3 className="text-sm font-semibold text-slate-900">Zero Burnout</h3>
<p className="mt-2 text-sm text-slate-600">You're not the bottleneck. Your team doesn't depend on you for every decision. Success isn't exhausting.</p>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-slate-50" id="proof">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.2em] text-sky-600 mb-2">Proof</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  What actually changed when people used this system
                </h2>
</div>
<div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<article className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold text-sm text-slate-900">The Web Designer</span>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Agency</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    "Thought I'd always be custom project based. Built a standardized offer. First time I ran ads, they actually worked. Cost per lead dropped 60%. Now I work 3 days a week and take 2-month trips."
                  </p>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold text-sm text-slate-900">The Coach</span>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Coaching</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    "Was doing 1:1 coaching at $3k/month. The book showed me how to create a group program. One cohort = $48k in 12 weeks. Same expertise, 10x the revenue, half the time."
                  </p>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold text-sm text-slate-900">The Consultant</span>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Consulting</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    "Spent 5 years on hourly billing. Productized my service. First year of ads returned 8x my ad spend. Now I have a team delivering and I'm building side projects."
                  </p>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3">
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold text-sm text-slate-900">The Copywriter</span>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Creative</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    "I could never scale with ads because my business model was broken. Read the book, productized, and built a direct response funnel. Business became 3x more profitable with 1/3 the stress."
                  </p>
</article>
<article className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col gap-3 md:col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-1">
<span className="font-semibold text-sm text-slate-900">The Agency Owner</span>
<span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">Growth</span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                    "We were a 6-person agency doing custom work. Implemented this system, built internal templates and workflows, hired AI tools. Team size stayed at 6. Revenue went from $400k to $1.2M in 18 months. I went from working 70 hours to 35."
                  </p>
</article>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-[0.2em] text-sky-600 mb-2">FAQ</p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                  Questions that usually show up right before the breakthrough.
                </h2>
</div>
<div className="mt-8 space-y-4">
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">How long will it take me to read this?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    2-3 hours if you read straight through. Most people read the framework sections first, then dive into the part most relevant to where they're stuck.
                  </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">Do I need copywriting skills to build the sales funnel?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    No. The Monetize section gives you the direct response frameworks and proven copy templates. You can use them as-is, plug in your specific offer details, and you're done.
                  </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">Can I really travel and run this business remotely?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    Yes, that's the whole point. Once your fulfillment is automated and your team is trained, you don't need to be anywhere. Clients onboard themselves. Your team executes. Money flows.
                  </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">How many people do I actually need on my team?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    Most founders are shocked they need fewer people. A well-systematized business with AI assistance can be run by 2-3 people instead of 8-10. The difference is systems, not headcount.
                  </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">What if my ads don't convert profitably?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    That's usually because your offer isn't productized or your positioning isn't clear. The book walks you through diagnosing this. It's never about ad spend—it's about offer/positioning/pricing.
                  </div>
</details>
<details className="group rounded-2xl border border-slate-200 bg-slate-50 p-4">
<summary className="flex cursor-pointer items-center justify-between gap-3 list-none">
<p className="text-sm font-medium tracking-tight text-slate-900">Will I be able to implement this myself?</p>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="mt-3 text-sm text-slate-700">
                    Yes. The book is designed for solo implementation. Every section has actionable checklists. You read, you implement, you measure.
                  </div>
</details>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-16 sm:py-20">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                  You have two choices. Build this yourself over the next 18 months. Or get the complete system today.
                </h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
                  One costs you $97 and a few hours of reading. The other costs you months of trial, error, and opportunity cost. 
                  This system is the difference between building a business that owns your time and building a business you own.
                </p>
<div className="flex flex-col items-center gap-4">
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/40 transition duration-300 hover:bg-sky-400 hover:shadow-sky-500/50">
<span className="mr-2">Download the Book – $97</span>
<svg className="lucide lucide-arrow-right h-5 w-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-xs text-slate-500 uppercase tracking-wider">Instant Access • 100% Secure</p>
</div>
<div className="mt-16 pt-10 border-t border-slate-800 text-slate-400 text-sm max-w-2xl mx-auto">
<p className="mb-6"><strong className="text-white">P.S.</strong> The people who build the business of their dreams don't have more talent than you. They just have a system. This book is that system.</p>
<p><strong className="text-white">P.P.S.</strong> Every month you stay in consulting mode instead of productized mode costs you thousands in ad efficiency you could be getting. $97 is a rounding error compared to what this system is worth.</p>
</div>
</div>
</section>
</main>
</div>
</div>


    </>
  );
}
