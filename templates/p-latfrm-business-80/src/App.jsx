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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-xl font-semibold tracking-tighter">
<span className="text-[#0066FF] font-mono">P/</span>LATFRM
                </div>
</div>
<div className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
<span>🇨🇦 Canadian? Use code <span className="text-[#0066FF]">CANADA20</span> for 20% off</span>
</div>
<div className="md:hidden text-xs font-medium text-slate-500">
                Code: CANADA20
            </div>
</div>
</nav>

<div className="pt-16">
<div className="bg-[#FF4500] text-white py-3 px-4 text-center">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-medium">
<span className="flex items-center gap-2"><svg className="lucide lucide-flame" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.148-.22-4.01 1-5.492.596-.715 1.65-1.508 3-2.508C16 3.5 18.48 7.67 18.5 10a5.5 5.5 0 0 1-10.5 1.5 5 5 0 1 0 9.5 3.5"></path></svg> BLACK FRIDAY DEAL - ENDS MONDAY</span>
<span className="hidden sm:inline text-white/80">|</span>
<span>Lifetime sites from $1,000</span>
<span className="hidden sm:inline text-white/80">|</span>
<div className="flex items-center gap-2 bg-white/20 px-2 py-0.5 rounded text-xs font-mono tracking-widest">
                    02:14:56:01
                </div>
</div>
</div>
</div>

<section className="relative pt-16 pb-24 overflow-hidden">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#0A1628] mb-6 leading-[1.1]">
                Pay Once. Own Forever.<br/>
<span className="text-slate-400">No Monthly Hosting Fees.</span>
</h1>
<p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-light">
                The only business platform you buy instead of rent. <br className="hidden sm:block"/>
                Start automation, stop subscription fatigue.
            </p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">

<div className="group relative p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0066FF] transition-all shadow-sm hover:shadow-md cursor-pointer text-left">
<div className="mb-4 text-[#0066FF]">
<svg className="lucide lucide-briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<h3 className="font-semibold text-[#0A1628]">WE BUILD IT</h3>
<p className="text-sm text-slate-500 mt-1 mb-3">Done for you completely.</p>
<div className="text-sm font-medium text-[#0066FF]">From $1,500 one-time</div>
</div>

<div className="group relative p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0066FF] transition-all shadow-sm hover:shadow-md cursor-pointer text-left">
<div className="absolute top-3 right-3">
<span className="px-2 py-0.5 bg-blue-50 text-[#0066FF] text-[10px] font-bold uppercase tracking-wide rounded-full">New</span>
</div>
<div className="mb-4 text-[#0066FF]">
<svg className="lucide lucide-hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path><path d="M17.64 15 22 10.64"></path><path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V2.46c0-.54-.44-.96-.96-.96h-5.32c-.85 0-1.65.33-2.25.93L10 2.64"></path></svg>
</div>
<h3 className="font-semibold text-[#0A1628]">BUILD TOGETHER</h3>
<p className="text-sm text-slate-500 mt-1 mb-3">We guide, you build.</p>
<div className="text-sm font-medium text-[#0066FF]">From $1,000 one-time</div>
</div>

<div className="group relative p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0066FF] transition-all shadow-sm hover:shadow-md cursor-pointer text-left">
<div className="mb-4 text-[#0066FF]">
<svg className="lucide lucide-bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="font-semibold text-[#0A1628]">HAVE A SITE?</h3>
<p className="text-sm text-slate-500 mt-1 mb-3">Add AI Employees only.</p>
<div className="text-sm font-medium text-[#0066FF]">$195/month</div>
</div>

<div className="group relative p-6 bg-white rounded-xl border border-slate-200 hover:border-[#0066FF] transition-all shadow-sm hover:shadow-md cursor-pointer text-left">
<div className="mb-4 text-[#0066FF]">
<svg className="lucide lucide-arrow-right-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 3 4 4-4 4"></path><path d="M20 7H4"></path><path d="m8 21-4-4 4-4"></path><path d="M4 17h16"></path></svg>
</div>
<h3 className="font-semibold text-[#0A1628]">WORDPRESS?</h3>
<p className="text-sm text-slate-500 mt-1 mb-3">Migrate &amp; save costs.</p>
<div className="text-sm font-medium text-[#0066FF]">Special Deal</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-[#0A1628]">They Charge You Forever. We Don't.</h2>
<p className="mt-4 text-slate-600">The subscription economy is draining your business.</p>
</div>
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
<div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200 p-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
<div>What Others Charge</div>
<div className="text-center">10-Year Cost</div>
<div className="text-right">What You Own</div>
</div>

<div className="divide-y divide-slate-100">
<div className="grid grid-cols-3 p-4 text-sm">
<div className="text-slate-600">Wix: $16-45/mo</div>
<div className="text-center text-slate-900 font-medium">$5,400</div>
<div className="text-right text-slate-400">Nothing</div>
</div>
<div className="grid grid-cols-3 p-4 text-sm">
<div className="text-slate-600">Squarespace: $18-40/mo</div>
<div className="text-center text-slate-900 font-medium">$4,800</div>
<div className="text-right text-slate-400">Nothing</div>
</div>
<div className="grid grid-cols-3 p-4 text-sm">
<div className="text-slate-600">Webflow: $18-49/mo</div>
<div className="text-center text-slate-900 font-medium">$5,880</div>
<div className="text-right text-slate-400">Nothing</div>
</div>

<div className="grid grid-cols-3 p-4 text-sm bg-[#0066FF]/5 border-l-4 border-[#0066FF]">
<div className="font-semibold text-[#0066FF] flex items-center gap-2">
<span className="font-mono">P/</span>LATFRM
                        </div>
<div className="text-center font-bold text-[#0A1628]">$1,500 once</div>
<div className="text-right font-bold text-green-600">EVERYTHING</div>
</div>
</div>
</div>
<div className="mt-8 grid sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3">
<div className="text-[#0066FF]"><svg className="lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<p className="text-sm text-slate-600">Build <span className="font-semibold text-slate-900">UNLIMITED</span> sites in your account</p>
</div>
<div className="flex items-start gap-3">
<div className="text-[#0066FF]"><svg className="lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<p className="text-sm text-slate-600">Partner sites, side hustles - all included</p>
</div>
<div className="flex items-start gap-3">
<div className="text-[#0066FF]"><svg className="lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<p className="text-sm text-slate-600">Others charge $50/mo <span className="font-semibold text-slate-900">PER SITE</span></p>
</div>
<div className="flex items-start gap-3">
<div className="text-[#0066FF]"><svg className="lucide lucide-check-circle-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg></div>
<p className="text-sm text-slate-600">You pay once. Build 100 sites. Same price.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#0A1628]">Choose Your Path to <span className="font-mono text-[#0066FF]">P/</span>LATFRM</h2>
</div>

<div className="mb-20">
<div className="flex items-center gap-3 mb-6">
<span className="bg-[#0066FF] text-white text-xs font-bold px-2 py-1 rounded">PATH 1</span>
<h3 className="text-xl font-semibold text-[#0A1628]">DONE FOR YOU - WE BUILD EVERYTHING</h3>
</div>
<p className="text-slate-600 mb-8">Full service. We handle design, setup, and automation. You relax.</p>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all">
<h4 className="text-lg font-medium text-slate-900">Starter</h4>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-bold tracking-tight text-[#0A1628]">$1,500</span>
<span className="text-lg text-slate-400 line-through">$3,000</span>
</div>
<div className="mt-2 text-sm font-medium text-[#FF4500]">Black Friday: Save $1,500</div>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 2-page custom website</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> We build everything</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Lifetime hosting included</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> All AI employees included</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> We fix breaks forever</li>
</ul>
<button className="mt-8 w-full bg-[#0066FF] hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
                        WE BUILD MY STARTER
                    </button>
</div>

<div className="border-2 border-[#0066FF] rounded-xl p-8 shadow-lg relative">
<div className="absolute top-0 right-0 bg-[#0066FF] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-md">MOST POPULAR</div>
<h4 className="text-lg font-medium text-slate-900">Business</h4>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-bold tracking-tight text-[#0A1628]">$2,000</span>
<span className="text-lg text-slate-400 line-through">$4,500</span>
</div>
<div className="mt-2 text-sm font-medium text-[#FF4500]">Black Friday: Save $2,500</div>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> 5-page custom website</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> We build everything</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Lifetime hosting included</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> All AI employees included</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> <span className="font-semibold text-slate-900">Unlimited DIY sites</span></li>
</ul>
<button className="mt-8 w-full bg-[#0A1628] hover:bg-slate-900 text-white font-medium py-3 rounded-lg transition-colors">
                        WE BUILD MY BUSINESS
                    </button>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-200 mb-20"></div>

<div className="mb-20">
<div className="flex items-center gap-3 mb-6">
<span className="bg-green-100 text-green-700 border border-green-200 text-xs font-bold px-2 py-1 rounded">PATH 2 - NEW</span>
<h3 className="text-xl font-semibold text-[#0A1628]">DONE WITH YOU - BUILD TOGETHER</h3>
</div>
<p className="text-slate-600 mb-8">Perfect for control freaks, learners, and future agency owners. We guide, you create.</p>
<div className="grid md:grid-cols-2 gap-8">

<div className="border border-slate-200 rounded-xl p-8 shadow-sm bg-slate-50/50">
<h4 className="text-lg font-medium text-slate-900">DIY Starter</h4>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-bold tracking-tight text-[#0A1628]">$1,000</span>
<span className="text-lg text-slate-400 line-through">$2,000</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> YOU build with our help</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Weekly 1-hour strategy calls</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Private community channel</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Learn our builder forever</li>
</ul>
<button className="mt-8 w-full bg-white border border-slate-300 hover:bg-slate-50 text-[#0A1628] font-medium py-3 rounded-lg transition-colors">
                        I'LL BUILD IT - $1,000
                    </button>
</div>

<div className="border border-slate-200 rounded-xl p-8 shadow-sm bg-slate-50/50">
<h4 className="text-lg font-medium text-slate-900">DIY Business</h4>
<div className="mt-4 flex items-baseline gap-2">
<span className="text-3xl font-bold tracking-tight text-[#0A1628]">$1,500</span>
<span className="text-lg text-slate-400 line-through">$3,000</span>
</div>
<ul className="mt-8 space-y-4 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Includes all Starter features</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Advanced layout strategy</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Direct Slack support</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> <span className="font-semibold">Agency playbook included</span></li>
</ul>
<button className="mt-8 w-full bg-white border border-slate-300 hover:bg-slate-50 text-[#0A1628] font-medium py-3 rounded-lg transition-colors">
                        I'LL BUILD IT - $1,500
                    </button>
</div>
</div>
</div>
<div className="w-full h-px bg-slate-200 mb-20"></div>

<div className="mb-20 grid md:grid-cols-3 gap-12 items-center">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">PATH 3</span>
<h3 className="text-xl font-semibold text-[#0A1628]">I HAVE A WEBSITE, JUST NEED AI</h3>
</div>
<h2 className="text-3xl font-bold tracking-tight text-[#0A1628] mb-4">The AI Employee Package</h2>
<p className="text-slate-600 mb-6">Keep your current site. We plug in our AI employees to handle calls, texts, and bookings 24/7.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> AI answers every call 24/7</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Texts back missed calls instantly</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> Books appointments automatically</div>
<div className="flex items-center gap-2"><svg className="w-4 h-4 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg> BONUS: Website builder access</div>
</div>
</div>
<div className="border border-slate-200 bg-slate-50 rounded-xl p-8 text-center">
<div className="text-sm text-slate-500 line-through mb-1">$795/month</div>
<div className="text-4xl font-bold text-[#0A1628] mb-2">$195<span className="text-lg font-normal text-slate-500">/mo</span></div>
<div className="text-[#FF4500] text-xs font-bold uppercase tracking-wide mb-6">Locked in forever</div>
<button className="w-full bg-[#0066FF] hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors">
                    ADD AI EMPLOYEE
                </button>
<p className="text-xs text-slate-400 mt-4">No website transfer needed.</p>
</div>
</div>
</section>

<section className="py-20 bg-slate-100">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-[#0A1628]">Still Want to Rent? 🤔 Okay...</h2>
<p className="text-slate-600 mt-2">We get it. Some people love monthly payments.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
<div className="bg-white p-6 rounded-lg border border-slate-200 text-center opacity-75 hover:opacity-100 transition-opacity">
<div className="font-semibold">Starter</div>
<div className="text-2xl font-bold text-slate-900 my-2">$97/mo</div>
<div className="text-xs text-slate-500">Never own it</div>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 text-center opacity-75 hover:opacity-100 transition-opacity">
<div className="font-semibold">Pro</div>
<div className="text-2xl font-bold text-slate-900 my-2">$297/mo</div>
<div className="text-xs text-slate-500">Never own it</div>
</div>
<div className="bg-white p-6 rounded-lg border border-slate-200 text-center opacity-75 hover:opacity-100 transition-opacity">
<div className="font-semibold">Empire</div>
<div className="text-2xl font-bold text-slate-900 my-2">$597/mo</div>
<div className="text-xs text-slate-500">Never own it</div>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-8 mb-12">
<h3 className="font-semibold text-lg mb-4">The Rent-to-Own Credit System</h3>
<p className="text-sm text-slate-600 mb-4">Because we're not monsters. Every month you rent, you earn credits towards a lifetime purchase.</p>
<div className="flex flex-col sm:flex-row gap-4 text-sm">
<div className="bg-slate-50 p-3 rounded border border-slate-100">Months 1-12: <span className="font-semibold text-[#0066FF]">$10 credit</span></div>
<div className="bg-slate-50 p-3 rounded border border-slate-100">Months 13-24: <span className="font-semibold text-[#0066FF]">$20 credit</span></div>
</div>
</div>

<div className="border-2 border-[#0A1628] rounded-xl overflow-hidden">
<div className="bg-[#0A1628] text-white p-4 text-center font-bold tracking-widest uppercase text-sm">Do The Math</div>
<div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-white">
<div className="p-8">
<h4 className="font-semibold text-red-600 mb-4 flex items-center gap-2">Scenario 1: Renting 😔</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex justify-between"><span>Year 1 Cost:</span> <span className="font-medium">$3,564</span></li>
<li className="flex justify-between"><span>Year 5 Cost:</span> <span className="font-medium">$17,820</span></li>
<li className="flex justify-between"><span>Year 10 Cost:</span> <span className="font-medium">$35,640</span></li>
<li className="pt-4 border-t border-slate-100 font-bold text-slate-900 flex justify-between"><span>Owned:</span> <span>Nothing</span></li>
</ul>
</div>
<div className="p-8 bg-blue-50/30">
<h4 className="font-semibold text-[#0066FF] mb-4 flex items-center gap-2">Scenario 2: Lifetime 🧠</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex justify-between"><span>Year 1 Cost:</span> <span className="font-medium">$2,000</span></li>
<li className="flex justify-between"><span>Year 5 Cost:</span> <span className="font-medium">$2,000</span></li>
<li className="flex justify-between"><span>Year 10 Cost:</span> <span className="font-medium">$2,000</span></li>
<li className="pt-4 border-t border-blue-100 font-bold text-slate-900 flex justify-between"><span>Owned:</span> <span>Everything</span></li>
</ul>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="bg-[#0066FF] hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-colors">
                    I CHOOSE LIFETIME
                </button>
</div>
</div>
</section>

<section className="py-20 bg-[#0066FF]/5 border-y border-[#0066FF]/10">
<div className="max-w-4xl mx-auto px-4 text-center">
<div className="inline-flex items-center justify-center p-3 bg-[#0066FF]/10 rounded-full mb-6 text-[#0066FF]">
<svg className="lucide lucide-infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path></svg>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#0A1628] mb-4">The Hidden Benefit Nobody Talks About</h2>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                When you get P/LATFRM, you get our builder. When you get our builder, you can build <span className="font-semibold text-[#0066FF]">UNLIMITED</span> sites.
            </p>
<div className="grid sm:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<h4 className="font-semibold mb-3">For Yourself</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2">✓ Your main business</li>
<li className="flex gap-2">✓ Your side hustle</li>
<li className="flex gap-2">✓ Your kid's project</li>
</ul>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
<h4 className="font-semibold mb-3">For Others (Agency)</h4>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2">✓ Build client sites</li>
<li className="flex gap-2">✓ Keep 100% of profits</li>
<li className="flex gap-2">✓ We even teach you how</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-[#0A1628]">Everything Under The Hood</h2>
<p className="text-slate-600 mt-2">Every plan includes all of this. No upsells.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div>
<h4 className="font-semibold text-[#0A1628] mb-6 border-b border-slate-200 pb-2">AI EMPLOYEES</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Phone answering</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Text automation</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg> Lead qualification</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-[#0A1628] mb-6 border-b border-slate-200 pb-2">BUSINESS TOOLS</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg> Calendar booking</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg> Payment processing</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg> Invoicing &amp; Contracts</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-[#0A1628] mb-6 border-b border-slate-200 pb-2">GROWTH TOOLS</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg> Email campaigns</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M23 7 16 12 23 17 23 7z"></path><rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect></svg> Social planner</li>
<li className="flex gap-3"><svg className="w-5 h-5 text-[#0066FF]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path></svg> Reputation Mgmt</li>
</ul>
</div>
</div>
<div className="mt-12 text-center text-xs text-slate-400">
            Usage costs (pay what you use): Calls 2¢/min | Texts 1.5¢ | Average business pays ~$25/mo in usage.
        </div>
</section>

<section className="py-12 bg-slate-50">
<div className="max-w-3xl mx-auto px-4">
<div className="bg-white border border-slate-200 rounded-lg p-6 md:p-8">
<h3 className="text-lg font-semibold text-[#0A1628] mb-4">"What if P/LATFRM disappears?"</h3>
<p className="text-slate-600 mb-4">Fair question. We're built on top of GoHighLevel - the engine running 60,000+ agencies. Even if aliens abducted us, your data is safe.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex gap-2">✓ Full backup of all your data</li>
<li className="flex gap-2">✓ Direct import available to GoHighLevel</li>
<li className="flex gap-2">✓ Your business never stops</li>
</ul>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center mb-12">
<h2 className="text-3xl font-semibold text-[#0A1628]">Ready? Choose Your Adventure</h2>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<a className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#0066FF] hover:shadow-md transition-all text-center group" href="#">
<div className="text-3xl mb-3">📦</div>
<h3 className="font-semibold text-[#0A1628]">DONE FOR YOU</h3>
<p className="text-xs text-slate-500 mt-1 mb-4">From $1,500</p>
<span className="inline-block px-4 py-2 bg-[#0066FF] text-white text-sm font-medium rounded group-hover:bg-blue-700">START NOW</span>
</a>
<a className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#0066FF] hover:shadow-md transition-all text-center group" href="#">
<div className="text-3xl mb-3">🤝</div>
<h3 className="font-semibold text-[#0A1628]">DONE WITH YOU</h3>
<p className="text-xs text-slate-500 mt-1 mb-4">From $1,000</p>
<span className="inline-block px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded group-hover:bg-slate-50">START BUILDING</span>
</a>
<a className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#0066FF] hover:shadow-md transition-all text-center group" href="#">
<div className="text-3xl mb-3">🤖</div>
<h3 className="font-semibold text-[#0A1628]">AI ONLY</h3>
<p className="text-xs text-slate-500 mt-1 mb-4">$195/month</p>
<span className="inline-block px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded group-hover:bg-slate-50">ADD AI NOW</span>
</a>
<a className="block p-6 bg-white border border-slate-200 rounded-xl hover:border-[#0066FF] hover:shadow-md transition-all text-center group" href="#">
<div className="text-3xl mb-3">💬</div>
<h3 className="font-semibold text-[#0A1628]">NEED HELP?</h3>
<p className="text-xs text-slate-500 mt-1 mb-4">Human or AI</p>
<span className="inline-block px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-medium rounded group-hover:bg-slate-50">CALL NOW</span>
</a>
</div>
</section>

<section className="bg-[#0A1628] py-24 text-center px-4">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-white mb-6">Stop Renting. Start Owning.</h2>
<p className="text-slate-400 mb-8 text-lg">
                Regular price: <span className="line-through opacity-50">$2,000-4,500</span> <br/>
<span className="text-[#FF4500] font-medium">Black Friday: $1,000-2,000</span>
</p>
<button className="bg-[#0066FF] hover:bg-blue-600 text-white text-lg font-semibold px-10 py-4 rounded-lg shadow-lg shadow-blue-900/50 transition-all transform hover:-translate-y-1">
                CLAIM YOUR BLACK FRIDAY DEAL
            </button>
<p className="mt-6 text-sm text-slate-500">Only 8 spots left at this price.</p>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-[#0066FF] font-mono font-semibold">P/</span>
<span className="font-semibold tracking-tight">LATFRM.AI</span>
</div>
<div className="text-slate-500 text-sm">
                © 2025 Find You Media Corporation. Pay once. Own forever.
            </div>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
