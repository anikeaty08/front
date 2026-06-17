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
      

<header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
<div className="flex h-16 max-w-5xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="uppercase flex text-xl font-medium tracking-tight gap-x-3 gap-y-3 items-center">RevOps Accelerator</div>
<a className="uppercase hover:text-neutral-900 transition-colors text-sm font-normal text-red-400 tracking-widest" href="https://calendly.com/mvw-mattvincentwalker/business-growth-audit">
                Book Diagnostic
            </a>
</div>
</header>
<main className="flex-grow">

<section className="md:pt-32 md:pb-32 border-x max-w-5xl border-neutral-200/60 mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative">

<div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="z-10 max-w-3xl relative">
<div className="inline-flex gap-2 bg-neutral-100 border-neutral-200 border rounded-sm mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="animate-pulse bg-red-500 w-2 h-2 rounded-full"></span>
<span className="text-xs font-mono font-normal text-neutral-600 uppercase tracking-wider">Revenue Optimization</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.05] mb-6">
                    You’re Probably Leaking 2–5% of Your Revenue Right Now
                </h1>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-neutral-600 mb-8 leading-snug max-w-2xl">
                    I’ll Find It — And Fix One High-Impact Leak in 7 Days.
                </h2>
<div className="space-y-4 text-lg md:text-xl text-neutral-500 max-w-xl mb-12">
<p className="">Most $1M–$20M businesses are unknowingly losing $25K–$250K per year in slow follow-up, margin bleed, broken workflows, and operational lag.</p>
<p className="font-normal text-neutral-900">You don’t need more software.<br/>You need clarity and execution.</p>
</div>
<a className="inline-flex items-center justify-center gap-3 bg-neutral-900 text-white px-8 py-4 text-base font-normal uppercase tracking-widest hover:bg-neutral-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="https://calendly.com/mvw-mattvincentwalker/business-growth-audit">
                    Book My Profit Diagnostic Call
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<div className="w-full border-t border-neutral-200"></div>

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 border-x border-neutral-200/60 bg-white">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-4">01 // The Problem</h3>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">If any of this sounds familiar, you’re leaking money:</h2>
</div>
<div className="md:col-span-8">
<ul className="space-y-6">
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">Leads come in… but follow-up isn’t immediate</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">Estimates go out… but there’s no structured bid follow-up</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">Change orders slow down jobs</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">Cash gets delayed</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">Staff does things manually that should be automated</span>
</li>
<li className="flex items-start gap-4">
<i className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" data-lucide="alert-circle" strokeWidth="1.5"></i>
<span className="text-xl text-neutral-600">You don’t actually know your real close rate</span>
</li>
</ul>
<div className="mt-12 bg-neutral-50 border border-neutral-200 p-8 md:p-10 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-neutral-900"></div>
<p className="text-xl md:text-2xl font-medium tracking-tight text-neutral-900 mb-2">That 2–5% margin loss?</p>
<p className="text-xl text-neutral-600 mb-6">On a $5M company, that’s $100K–$250K per year.</p>
<p className="text-base font-mono text-neutral-400 uppercase tracking-widest">Quietly gone.</p>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-neutral-200"></div>

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 border-x border-neutral-200/60">
<div className="text-center max-w-2xl mx-auto mb-16">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-4">02 // The Solution</h3>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4">The 7-Day Profit Leak Diagnostic + Immediate Fix</h2>
<p className="text-xl text-neutral-600">For 7 days, I go deep inside your operation.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-neutral-200 border border-neutral-200 mb-12">

<div className="bg-[#fafafa] p-8 md:p-12">
<h4 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-900 mb-8 border-b border-neutral-200 pb-4">We Identify:</h4>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
                            Where revenue is dying
                        </li>
<li className="flex items-center gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
                            Where margin is leaking
                        </li>
<li className="flex items-center gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
                            Where speed is costing you
                        </li>
<li className="flex items-center gap-3 text-lg text-neutral-600">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
                            Where follow-up is failing
                        </li>
<li className="flex text-lg text-neutral-600 gap-x-3 gap-y-3 items-center">
<i className="w-5 h-5 text-neutral-900" data-lucide="target" strokeWidth="1.5"></i>
                            Where automations increase profit
                        </li>
</ul>
</div>

<div className="bg-neutral-900 p-8 md:p-12 text-white flex flex-col justify-center relative overflow-hidden">
<i className="absolute -right-10 -bottom-10 w-48 h-48 text-white/5" data-lucide="zap" strokeWidth="1"></i>
<h4 className="text-xl md:text-2xl font-medium tracking-tight mb-6">Then we implement ONE high-impact fix immediately.</h4>
<div className="space-y-2 text-neutral-400 font-mono text-base">
<p>&gt; Not theory.</p>
<p>&gt; Not a report you ignore.</p>
<p className="text-white font-normal">&gt; An actual installed solution.</p>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-neutral-200"></div>

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 border-x border-neutral-200/60 bg-white">
<div className="grid md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-4">03 // Deliverables</h3>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">What You Get</h2>
</div>
<div className="md:col-span-8">
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
<div className="flex items-start gap-3 border border-neutral-200 p-5 bg-[#fafafa]">
<i className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-900">90-minute deep dive call</span>
</div>
<div className="flex items-start gap-3 border border-neutral-200 p-5 bg-[#fafafa]">
<i className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-900">Full revenue &amp; margin map</span>
</div>
<div className="flex items-start gap-3 border border-neutral-200 p-5 bg-[#fafafa]">
<i className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-900">Identified 90-day opportunity <span className="text-neutral-500 font-normal block text-base mt-1">(usually $15K–$50K+)</span></span>
</div>
<div className="flex items-start gap-3 border border-neutral-200 p-5 bg-[#fafafa]">
<i className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-900">One immediate implementation fix</span>
</div>
<div className="flex items-start gap-3 border border-neutral-200 p-5 bg-[#fafafa] sm:col-span-2">
<i className="w-6 h-6 text-neutral-900 flex-shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span className="text-lg font-normal text-neutral-900">Clear execution roadmap</span>
</div>
</div>
<div className="flex items-start gap-4 p-6 bg-neutral-100 border-l-2 border-neutral-900">
<i className="w-8 h-8 text-neutral-900 flex-shrink-0" data-lucide="shield-check" strokeWidth="1.5"></i>
<p className="text-xl font-normal text-neutral-900">
                            If I cannot identify at least $15K–$50K in 90-day opportunity, I refund the fee.
                        </p>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-neutral-200"></div>

<section className="max-w-5xl mx-auto px-6 py-20 md:py-32 border-x border-neutral-200/60">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-12 text-center">04 // Alignment</h3>
<div className="grid md:grid-cols-2 gap-8 md:gap-12">

<div className="">
<h2 className="text-2xl font-medium tracking-tight text-neutral-900 mb-6 border-b border-neutral-200 pb-4">Who This Is For</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-700">Established businesses doing $1M–$20M</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-700">Owners who value speed</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-700">Operators who hate inefficiency</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="chevron-right" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-700">Leaders who know they’re leaving money on the table</span>
</li>
</ul>
</div>

<div className="opacity-70">
<h2 className="text-2xl font-medium tracking-tight text-neutral-500 mb-6 border-b border-neutral-200 pb-4">This is NOT for:</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="x-square" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-500">Startups with no revenue</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="x-square" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-500">People looking for “ideas”</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 text-neutral-400 flex-shrink-0" data-lucide="x-square" strokeWidth="1.5"></i>
<span className="text-lg text-neutral-500">Businesses unwilling to change</span>
</li>
</ul>
</div>
</div>
</section>

<div className="w-full border-t border-neutral-200"></div>

<section className="max-w-5xl mx-auto border-x border-neutral-200/60 bg-white grid md:grid-cols-2">

<div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-neutral-200 flex flex-col justify-center items-center text-center">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-6">Investment</h3>
<div className="md:text-7xl text-6xl font-medium text-neutral-900 tracking-tight mb-4">$1,500</div>
<div className="text-base font-mono font-normal text-neutral-500 tracking-widest uppercase mb-8">Flat Rate</div>
<ul className="text-lg text-neutral-600 space-y-2 mb-8">
<li>No upsell.</li>
<li>No long-term contract.</li>
<li>No nonsense.</li>
</ul>
<p className="text-xl font-normal text-neutral-900">Just clarity and execution.</p>
</div>

<div className="p-8 md:p-16 flex flex-col justify-center bg-[#fafafa]">
<h3 className="text-sm font-mono font-normal uppercase tracking-widest text-neutral-400 mb-8">Why Me</h3>
<div className="space-y-6 text-xl text-neutral-700">
<p>I specialize in systems, AI leverage, and operational architecture.</p>
<p className="font-normal text-neutral-900">
                        I don’t sell software.<br/>
                        I sell margin, speed, and leverage.
                    </p>
<p className="text-neutral-500 italic">And I don’t waste time.</p>
</div>
</div>
</section>

<section className="bg-neutral-900 text-white py-24 md:py-32" id="book">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-tight">
                    If you suspect you’re leaking revenue, let’s confirm it.
                </h2>
<p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto">
                    Book a 30-minute call below.
                </p>
<div className="bg-white/5 border border-white/10 p-8 md:p-12 backdrop-blur-sm max-w-xl mx-auto">
<div className="w-full flex flex-col items-center">
<i className="w-10 h-10 text-neutral-500 mb-6" data-lucide="calendar" strokeWidth="1.5"></i>
<a className="w-full inline-flex items-center justify-center gap-2 bg-white text-neutral-900 px-8 py-5 text-base font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-white" href="https://calendly.com/mvw-mattvincentwalker/business-growth-audit">
                            Book My Profit Diagnostic Call
                        </a>
</div>
</div>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-base font-mono text-neutral-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                        If it’s a fit, we move fast.
                    </div>
<div className="hidden sm:block w-1 h-1 rounded-full bg-neutral-700"></div>
<div className="flex items-center gap-2">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                        If it’s not, you walk away with clarity.
                    </div>
</div>
</div>
</section>
</main>
<footer className="bg-neutral-900 border-t border-white/10 text-neutral-500 py-8 text-center text-sm font-mono uppercase tracking-widest">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div>© 2026 SUPERHUMAN LLC. ALL RIGHTS RESERVED</div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="https://calendly.com/mvw-mattvincentwalker/business-growth-audit">Terms</a>
<a className="hover:text-white transition-colors" href="https://calendly.com/mvw-mattvincentwalker/business-growth-audit">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
