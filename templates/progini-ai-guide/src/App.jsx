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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#3CA3E0]/15 blur-[120px]"></div>
<div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] rounded-full bg-[#5BBAF2]/10 blur-[120px]"></div>
</div>

<nav className="relative z-20 border-b border-slate-200/50 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex-shrink-0 flex items-center">
<span className="text-xl font-medium"><span className="text-slate-900">Pro</span><span className="text-[#3CA3E0]">Gini</span></span>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-base font-normal text-slate-600 hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="rounded-full bg-slate-900 px-4 py-2 text-base font-normal text-white shadow-sm hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" href="#form-section">Get Started</a>
</div>
</div>
</div>
</nav>

<main className="relative z-10 pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-[#3CA3E0]/20 bg-[#3CA3E0]/5 px-3 py-1 text-sm font-normal text-[#2A8EC8] mb-8 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>New 2024 AI Guide for Moms</span>
</div>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                Turn naptime into income. <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CA3E0] to-[#5BBAF2]">Zero tech experience needed.</span>
</h1>
<p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-600 font-light mb-10 leading-relaxed">
                The ProGini AI Guide provides 30 simple, step-by-step blueprints using our 17 ProGini AI tools. Designed specifically for busy stay-at-home moms wanting to build a flexible income stream.
            </p>

<div className="mx-auto max-w-md bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-8 text-left relative overflow-hidden" id="form-section">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CA3E0] to-[#5BBAF2]"></div>
<h2 className="text-xl font-medium text-slate-900 mb-2">Start your journey today</h2>
<p className="text-base font-light text-slate-500 mb-6">Get lifetime access to the guide for a $27 one-time payment, plus 30 days of ProGini AI tools free.</p>
<form className="space-y-4">
<div>
<label className="block text-sm font-normal text-slate-700 mb-1" htmlFor="email">Email Address</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<i className="text-slate-400 w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#3CA3E0] text-base transition-all bg-slate-50 focus:bg-white" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-slate-700 mb-1" htmlFor="phone">Phone Number <span className="text-slate-400 font-light">(Optional, for SMS tips)</span></label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<i className="text-slate-400 w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 text-slate-900 ring-1 ring-inset ring-slate-200 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#3CA3E0] text-base transition-all bg-slate-50 focus:bg-white" id="phone" name="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="pt-4 space-y-3">
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#3CA3E0] px-4 py-3 text-base font-normal text-white shadow-sm hover:bg-[#2A8EC8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3CA3E0] transition-all" type="button">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                            Buy Lifetime Guide - $27
                        </button>
<p className="text-center text-sm font-light text-slate-500 leading-relaxed pt-1">
                            Includes 30-day free trial of 17 ProGini AI tools.<br/>
<span className="text-slate-400">Optional $19/month renewal afterwards. Cancel anytime.</span>
</p>
</div>
</form>
<div className="mt-6 pt-4 border-t border-slate-100">
<p className="text-center text-sm font-light text-slate-500 flex items-center justify-center gap-1.5">
<i className="w-4 h-4" data-lucide="lock" strokeWidth="1.5"></i>
                        Secure, encrypted checkout.
                    </p>
</div>
</div>

<div className="mt-16 pt-8 border-t border-slate-200/60">
<p className="text-sm font-normal text-slate-500 uppercase tracking-widest mb-6 text-center">Empowering moms globally</p>
<div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-50 grayscale">
<span className="text-xl font-medium text-slate-700 flex items-center gap-2"><i className="w-6 h-6" data-lucide="globe" strokeWidth="1.5"></i> Remote</span>
<span className="text-xl font-medium text-slate-700 flex items-center gap-2"><i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i> StayHome</span>
<span className="text-xl font-medium text-slate-700 flex items-center gap-2"><i className="w-6 h-6" data-lucide="wallet" strokeWidth="1.5"></i> Earnify</span>
<span className="text-xl font-medium text-slate-700 flex items-center gap-2"><i className="w-6 h-6" data-lucide="users" strokeWidth="1.5"></i> MomCollab</span>
</div>
</div>
</div>
</main>

<section className="relative z-10 py-16 sm:py-24 bg-white border-y border-slate-100">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-4">Everything is laid out for you.</h2>
<p className="text-lg font-light text-slate-600">We removed the guesswork. The ProGini guide is structured for short bursts of focused work, perfectly aligning with a busy mom's schedule.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:border-slate-200">
<div className="w-12 h-12 rounded-xl bg-[#3CA3E0]/15 flex items-center justify-center text-[#3CA3E0] mb-6">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">30 Step-by-Step Plans</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">Daily actionable steps that take you from setting up accounts to landing your first client or sale, clearly explained.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:border-slate-200">
<div className="w-12 h-12 rounded-xl bg-[#5BBAF2]/15 flex items-center justify-center text-[#42A9E5] mb-6">
<i className="w-6 h-6" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">17 ProGini AI Tools</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">Access our exclusive suite of 17 powerful AI tools. Included free for your first 30 days, then optionally renew for just $19/month.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-md hover:border-slate-200">
<div className="w-12 h-12 rounded-xl bg-[#2A8EC8]/10 flex items-center justify-center text-[#2A8EC8] mb-6">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Work on Your Time</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">No strict hours. Complete the steps during nap times, early mornings, or evenings. Total flexibility.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
<div className="mb-12 lg:mb-0">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-slate-900 mb-6">You don't need to be a computer genius.</h2>
<p className="text-lg font-light text-slate-600 mb-8 leading-relaxed">
                        Many moms feel intimidated by "AI" or tech in general. The ProGini Guide translates complex concepts into plain English. If you can send an email or use social media, you can use these tools to generate income.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CA3E0]/15 flex items-center justify-center mt-0.5">
<i className="w-4 h-4 text-[#3CA3E0]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Copy &amp; Paste Prompts</h4>
<p className="text-sm font-light text-slate-500 mt-1">We provide the exact words to type into the AI.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CA3E0]/15 flex items-center justify-center mt-0.5">
<i className="w-4 h-4 text-[#3CA3E0]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Visual Setup Guides</h4>
<p className="text-sm font-light text-slate-500 mt-1">Screenshots showing exactly where to click.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#3CA3E0]/15 flex items-center justify-center mt-0.5">
<i className="w-4 h-4 text-[#3CA3E0]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Quick-Start Checklists</h4>
<p className="text-sm font-light text-slate-500 mt-1">Track your progress as you complete each daily step.</p>
</div>
</li>
</ul>
</div>

<div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-2 sm:p-4">
<div className="absolute inset-0 bg-gradient-to-br from-[#3CA3E0]/5 to-white rounded-2xl -z-10"></div>

<div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 mb-4">
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-200"></div>
</div>
<div className="space-y-4 px-2 pb-2">

<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#3CA3E0] text-white flex items-center justify-center font-normal text-sm">01</div>
<div>
<div className="text-base font-normal text-slate-900">Setup AI Workspace</div>
<div className="text-sm font-light text-slate-400">Time: 15 mins</div>
</div>
</div>
<i className="w-5 h-5 text-[#3CA3E0]" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>

<div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-[#3CA3E0]/15 text-[#2A8EC8] flex items-center justify-center font-normal text-sm">02</div>
<div>
<div className="text-base font-normal text-slate-900">Generate First Idea</div>
<div className="text-sm font-light text-slate-400">Time: 20 mins</div>
</div>
</div>
<div className="w-5 h-5 rounded-full border-2 border-slate-200"></div>
</div>

<div className="pt-2">
<div className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-3">Tools Used Today</div>
<div className="flex gap-2">
<div className="px-2 py-1 rounded bg-white border border-slate-200 text-sm font-normal text-slate-600 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="pen-tool" strokeWidth="1.5"></i> Tool A
                                </div>
<div className="px-2 py-1 rounded bg-white border border-slate-200 text-sm font-normal text-slate-600 flex items-center gap-1.5">
<i className="w-4 h-4" data-lucide="image" strokeWidth="1.5"></i> Tool B
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 sm:py-24 bg-slate-900 text-center border-t border-slate-800" id="pricing">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-6">Ready to build your income stream?</h2>
<p className="text-lg font-light text-slate-300 mb-10">Join hundreds of other moms who are using the ProGini method. Get the lifetime guide today and unlock your 30-day free tools trial.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#3CA3E0] px-6 py-3 text-base font-normal text-white shadow-sm hover:bg-[#2A8EC8] transition-all focus:ring-2 focus:ring-offset-2 focus:ring-[#3CA3E0] focus:ring-offset-slate-900" href="#form-section">
<i className="w-5 h-5" data-lucide="shopping-cart" strokeWidth="1.5"></i>
                    Buy Lifetime Guide - $27
                </a>
</div>
<p className="mt-6 text-sm font-light text-slate-400">Includes the 30-step guide and a 30-day free trial of 17 ProGini AI tools (optional $19/mo renewal).</p>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12 relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<span className="text-lg font-medium"><span className="text-slate-900">Pro</span><span className="text-[#3CA3E0]">Gini</span></span>
<span className="text-sm font-light text-slate-500">© 2024. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
