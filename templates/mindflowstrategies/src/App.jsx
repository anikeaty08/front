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



        lucide.createIcons();
    
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
      

<nav className="fixed z-50 glass-nav w-full border-slate-100 border-b">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex gap-2 group cursor-pointer gap-x-2 gap-y-2 items-center">
<span className="text-lg font-medium text-slate-900 tracking-tight">Mindflow Strategies</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-indigo-600 transition-colors text-sm font-medium text-slate-600" href="#problem">The Problem</a>
<a className="hover:text-indigo-600 transition-colors text-sm font-medium text-slate-600" href="#solution">The System</a>
<a className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors" href="#guarantee">Guarantee</a>
</div>

<div className="hidden md:block">
<a className="hover:bg-slate-800 transition-all hover:shadow-md flex items-center gap-2 text-sm font-medium text-white bg-slate-900 rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="https://calendly.com/markos-mindflowstrategies/discovery-call-main">
<span className="cursor-pointer" onclick="window.location.href='https://calendly.com/markos-mindflowstrategies/discovery-call-main'" role="button" style={{}}>Book A Call</span>
</a>
</div>

<div className="md:hidden">
<button className="text-slate-500 hover:text-slate-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="lg:px-8 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col text-center max-w-4xl mr-auto ml-auto items-center">

<div className="inline-flex gap-2 text-xs font-medium text-indigo-600 bg-indigo-50 border-indigo-100 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="inline-flex bg-indigo-500 w-2 h-2 rounded-full relative"></span>
</span>
                    Exclusively for Private Practice Therapists
                </div>
<h1 className="leading-[1.1] lg:text-5xl text-5xl font-semibold text-slate-900 tracking-tight mb-8">Stop relying on directories, insurance panels, and inconsisent referrals<br className=""/> <span className="text-gradient">control your caseload.</span></h1>
<p className="lg:text-2xl leading-relaxed text-xl font-normal text-slate-500 max-w-3xl mb-10">Client flow problems aren't caused by your clinical skills. They come from depending on insurance panels and platforms you can't control. And the best part is, you only pay for the inquiries we deliver.</p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex justify-center items-center hover:bg-indigo-700 transition-all shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 text-base font-medium text-white bg-indigo-600 rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://calendly.com/markos-mindflowstrategies/discovery-call-main">Book A Demo</a>
<a className="inline-flex justify-center items-center hover:border-slate-300 hover:bg-slate-50 transition-all text-base font-medium text-slate-700 bg-white border-slate-200 border rounded-xl pt-4 pr-8 pb-4 pl-8" href="/#solution">
                        See the Strategy
                    </a>
</div>

<div className="overflow-hidden bg-white w-full max-w-5xl border-slate-100 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-2xl">
<div className="text-left bg-slate-50 border-slate-100 border rounded-xl pt-8 pr-8 pb-8 pl-8">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="pt-4 md:pt-0">
<p className="text-sm font-medium text-slate-500 mb-1">Monthly Inquiries</p>
<p className="text-4xl font-semibold text-slate-900 tracking-tight">50<span className="text-indigo-600">+</span></p>
<div className="mt-2 text-xs font-medium text-green-600 flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> Ideal-fit clients
                                </div>
</div>
<div className="pt-4 md:pt-0 md:pl-8">
<p className="text-sm font-medium text-slate-500 mb-1">Time to Full Caseload</p>
<p className="text-4xl font-semibold text-slate-900 tracking-tight">&lt;90 <span className="text-lg text-slate-400 font-normal">days</span></p>
<div className="mt-2 text-xs font-medium text-slate-400 flex items-center gap-1">
                                    Predictable growth
                                </div>
</div>
<div className="pt-4 md:pt-0 md:pl-8">
<p className="text-sm font-medium text-slate-500 mb-1">Private Pay Transition</p>
<p className="text-4xl font-semibold text-slate-900 tracking-tight">100<span className="text-lg text-slate-400 font-normal">%</span></p>
<div className="flex text-xs font-medium text-indigo-600 mt-2 gap-x-1 gap-y-1 items-center">
                                    Autonomy achieved
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-slate-50 border-slate-100 pt-24 pb-24" id="problem">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        The "Hope Marketing" Trap
                    </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                        Most therapists are stuck on the "Directory Hamster Wheel." You list on Psychology Today, accept low-paying insurance panels, and hope the phone rings. This leaves you with:
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400 mt-1 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-600">Inconsistent referrals you can't control or scale.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400 mt-1 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-600">Burnout from taking any client just to fill slots.</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x-circle w-5 h-5 text-red-400 mt-1 flex-shrink-0" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
<span className="text-slate-600">Fear of raising rates or dropping insurance panels.</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-white rounded-3xl transform rotate-3"></div>
<div className="relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex items-center gap-4 mb-6 border-b border-slate-50 pb-6">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<svg className="lucide lucide-alert-triangle w-5 h-5" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="">
<p className="font-medium text-slate-900">Current Reality</p>
<p className="text-sm text-slate-500">Dependent on 3rd parties</p>
</div>
</div>
<div className="space-y-4">
<div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
<div className="h-full bg-slate-300 w-[20%]"></div>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Inquiry Volume</span>
<span className="text-slate-900 font-medium">Unpredictable</span>
</div>
<div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden mt-6">
<div className="h-full bg-slate-300 w-[40%]"></div>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Client Fit</span>
<span className="text-slate-900 font-medium">Mixed Bag</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="solution">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mr-auto mb-20 ml-auto">
<span className="uppercase block text-sm font-medium text-indigo-600 tracking-wide mb-3">The ClientFlow Strategy System</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                    Predictable Inquiries. <br/>Full Autonomy.
                </h2>
<p className="text-xl text-slate-500">We replace dependency with a predictable pipeline delivering 50+ ideal-fit client inquiries per month and work on a pay-on-results basis. Fill your practice in under 90 days.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300 bg-slate-50 border-slate-100 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 tracking-tight mb-3">50+ Monthly Inquiries</h3>
<p className="leading-relaxed text-lg text-slate-500">
                        A consistent stream of people who value your work, specifically looking for <em className="">your</em> specialty, ready to book.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Stabilize Your Caseload</h3>
<p className="leading-relaxed text-lg text-slate-500">
                        Say goodbye to the "feast or famine" cycle. Fill your spots with long-term clients who are committed to the process.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-wallet w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Go Full Private Pay</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        With overflow demand, you gain the leverage to drop insurance panels, raise your rates, and work on your own terms.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-950 text-white rounded-none lg:rounded-[3rem] lg:mx-6 overflow-hidden relative" id="guarantee">

<div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[100px] -top-20 -right-20 opacity-30"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900 border border-indigo-700 text-indigo-300 text-xs font-medium mb-8">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Risk Reversal Guarantee
            </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-8">
                We take the risk, not you.
            </h2>
<p className="leading-relaxed text-xl text-indigo-100 mb-12">
                We are so confident in the ClientFlow Strategy System that we back it with a performance guarantee. If the demand we commit to isn’t met, <span className="text-white font-medium border-b border-indigo-500">we step in and restore your fees.</span> You never move backwards.
            </p>
<a className="inline-flex justify-center items-center transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-0.5 text-lg font-medium text-indigo-950 bg-white rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="https://calendly.com/markos-mindflowstrategies/discovery-call-main">
                Apply for ClientFlow Strategy
                <svg className="lucide lucide-chevron-right w-5 h-5 ml-2" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Questions therapists ask us</h2>
<div className="space-y-4">
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<h3 className="font-medium text-slate-900 mb-2">Does this work for niche specialties?</h3>
<p className="text-slate-500">Absolutely. In fact, the system works  when you niche down. Whether you focus on trauma, eating disorders, or couples therapy, we target clients specifically looking for your expertise.</p>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<h3 className="font-medium text-slate-900 mb-2">How much time does this require from me?</h3>
<p className="text-slate-500">The goal is to free up your time, not consume it. Once the system is live, your only job is to field the inquiries and conduct your intake calls.</p>
</div>
<div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
<h3 className="font-medium text-slate-900 mb-2">I want to leave insurance panels. Can this help?</h3>
<p className="text-slate-500" style={{}}>This is the primary use case for our system. By generating volume (50+ inquiries/mo), you can confidently drop low-paying panels knowing you have a private-pay pipeline to replace them.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-slate-100 border-t pt-16 pb-12">
<div className="lg:px-8 flex flex-col md:flex-row gap-8 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-base font-medium text-slate-900 tracking-tight">MindFlow Strategies</span>
</div>
<p className="text-sm text-slate-400">Helping private practice therapists achieve true autonomy. <br className="md:hidden"/>© 2025 MindFlow Strategies</p>
</div>
</footer>


    </>
  );
}
