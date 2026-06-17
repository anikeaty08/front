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
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl tracking-tighter font-semibold text-slate-900 uppercase" href="#">
                        Amso Group
                    </a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
<a className="bg-slate-900 text-white hover:bg-slate-800 text-sm font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-slate-200" href="#contact">
                        Schedule a call
                    </a>
</div>

<div className="md:hidden">
<button className="text-slate-500 hover:text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Consultation" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
<div className="max-w-2xl fade-in-up">
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-6">
                    Life insurance guidance in Atlanta, GA for families and business owners
                </h1>
<p className="text-lg md:text-xl text-slate-200 font-light tracking-wide mb-8 max-w-xl">
                    Make confident coverage decisions with a simple call. If you are unsure what type of coverage fits your goals, we help you understand options clearly and choose a practical next step.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="bg-white text-slate-900 hover:bg-slate-50 text-base font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-slate-900/20 inline-flex items-center gap-2" href="#contact">
                        Schedule a call
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>
<div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 text-sm text-slate-300 font-medium">
<div className="flex items-center gap-2">
<span className="iconify text-blue-300" data-icon="lucide:shield-check" data-width="18"></span>
                        Licensed insurance professionals
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-300" data-icon="lucide:video" data-width="18"></span>
                        Phone or Zoom meeting
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-300" data-icon="lucide:map-pin" data-width="18"></span>
                        Atlanta based, nationwide service
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">
<img alt="Advisor reviewing documents" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2">
                        A clear next step, not confusion.
                    </h2>
<p className="text-lg text-slate-500 mb-8 font-light">
                        We replace industry jargon with plain conversation, helping you secure the right future for your beneficiaries.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<span className="iconify" data-icon="lucide:target" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Review goals &amp; timeline</h3>
<p className="text-slate-500 mt-1 leading-relaxed">We assess your priorities to determine if term or permanent coverage fits your life stage.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<span className="iconify" data-icon="lucide:file-search" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Identify gaps &amp; changes</h3>
<p className="text-slate-500 mt-1 leading-relaxed">Life changes—marriage, new homes, business growth—often outpace old policies.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-700">
<span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900">Plain language options</h3>
<p className="text-slate-500 mt-1 leading-relaxed">Understand the difference between Whole Life, IUL, and Term without the headache.</p>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="bg-slate-900 text-white hover:bg-slate-800 text-base font-medium py-3 px-8 rounded-full transition-colors shadow-lg shadow-slate-200">
                            Schedule a call
                        </button>
<span className="text-sm text-slate-400">No pressure. No obligation.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Topics we can help you explore
                </h2>
<p className="text-lg text-slate-500 font-light">
                    Comprehensive guidance across the full spectrum of protection and legacy planning.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:hourglass" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Term Life Insurance</h3>
<p className="text-slate-500 leading-relaxed">Cost-effective protection for a specific period of time. Ideal for income replacement.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:infinity" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Whole Life Insurance</h3>
<p className="text-slate-500 leading-relaxed">Permanent coverage that builds cash value over time, offering lifetime guarantees.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:trending-up" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Indexed Universal Life</h3>
<p className="text-slate-500 leading-relaxed">Flexible premiums with growth potential linked to market indices, downside protection included.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:activity" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Long Term Care</h3>
<p className="text-slate-500 leading-relaxed">Strategies to cover nursing or in-home care costs, protecting your retirement assets.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-xl flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:piggy-bank" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Annuity Options</h3>
<p className="text-slate-500 leading-relaxed">Tools designed to generate a steady stream of income during your retirement years.</p>
</div>

<div className="group bg-slate-900 p-8 rounded-2xl shadow-xl transition-all duration-300 flex flex-col justify-center">
<h3 className="text-xl font-semibold text-white mb-4">Not sure where to start?</h3>
<p className="text-slate-300 mb-6">Schedule a call and we will guide you to the right conversation.</p>
<button className="bg-white text-slate-900 font-medium py-3 px-6 rounded-lg w-full hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                        Start here <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<div className="relative pt-8">
<div className="absolute -top-6 left-0 md:left-1/2 md:-translate-x-1/2 bg-white px-4">
<div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-900 font-semibold shadow-sm">1</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-left md:text-center mt-4">Discover</h3>
<p className="text-slate-500 leading-relaxed text-left md:text-center">
                        We learn what you want to protect, your financial timeline, and what matters most to your family or business.
                    </p>
</div>

<div className="relative pt-8">
<div className="absolute -top-6 left-0 md:left-1/2 md:-translate-x-1/2 bg-white px-4">
<div className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-900 font-semibold shadow-sm">2</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-left md:text-center mt-4">Review</h3>
<p className="text-slate-500 leading-relaxed text-left md:text-center">
                        We explain relevant options, pricing, and key tradeoffs in plain language so you understand what you are buying.
                    </p>
</div>

<div className="relative pt-8">
<div className="absolute -top-6 left-0 md:left-1/2 md:-translate-x-1/2 bg-white px-4">
<div className="w-12 h-12 rounded-full border border-slate-900 bg-slate-900 flex items-center justify-center text-white font-semibold shadow-lg">3</div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 text-left md:text-center mt-4">Next Steps</h3>
<p className="text-slate-500 leading-relaxed text-left md:text-center">
                        If you choose to proceed, we outline the application process and guide you through approval to policy delivery.
                    </p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center text-slate-900 font-medium border-b border-slate-900 pb-0.5 hover:text-blue-800 hover:border-blue-800 transition-colors" href="#contact">
                    Learn more about our process <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-1">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                        Built for real life decisions.
                    </h2>
<p className="text-lg text-slate-500 mb-10 font-light">
                        Life insurance isn't just a transaction; it's a foundational layer of a secure financial plan. We serve clients at pivotal moments.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="iconify text-blue-900 mt-1" data-icon="lucide:users" data-width="20"></span>
<div>
<h4 className="font-medium text-slate-900">Families &amp; New Parents</h4>
<p className="text-sm text-slate-500 mt-1">Protecting income and securing a future for children.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-blue-900 mt-1" data-icon="lucide:home" data-width="20"></span>
<div>
<h4 className="font-medium text-slate-900">Homeowners</h4>
<p className="text-sm text-slate-500 mt-1">Ensuring mortgage protection and asset stability.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-blue-900 mt-1" data-icon="lucide:briefcase" data-width="20"></span>
<div>
<h4 className="font-medium text-slate-900">Business Owners</h4>
<p className="text-sm text-slate-500 mt-1">Key person insurance, buy-sell agreements, and succession.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="iconify text-blue-900 mt-1" data-icon="lucide:refresh-cw" data-width="20"></span>
<div>
<h4 className="font-medium text-slate-900">Policy Reviews</h4>
<p className="text-sm text-slate-500 mt-1">Evaluating old coverage after marriage, a move, or job change.</p>
</div>
</li>
</ul>
</div>
<div className="order-2">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/60 aspect-[4/5] lg:aspect-square">
<img alt="Family lifestyle" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/60 to-transparent p-8">
<p className="text-white font-medium text-lg">"Protection allows you to live with confidence."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23000000\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">
                Atlanta based, local and nationwide support
            </h2>
<p className="text-lg text-slate-500 mb-8 font-light max-w-2xl mx-auto">
                While our roots are in Atlanta, GA, we are licensed to serve eligible clients across the country via secure virtual consultations.
            </p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">Atlanta, GA</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">Sandy Springs</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">Buckhead</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">Alpharetta</span>
<span className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-slate-700 text-sm font-medium">Nationwide (Eligible States)</span>
</div>
<div className="mt-10">
<button className="text-slate-900 border border-slate-300 hover:border-slate-900 bg-transparent font-medium py-3 px-8 rounded-full transition-all duration-300">
                    Check eligibility
                </button>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        Education first, always.
                    </h2>
<p className="text-slate-300 text-lg font-light leading-relaxed">
                        We believe that a confused client never buys, and an educated client buys with confidence. Our role is advisory, not sales-driven.
                    </p>
</div>
<div className="grid gap-8">
<div className="flex gap-4">
<span className="iconify text-blue-400 mt-1" data-icon="lucide:message-circle" data-width="24"></span>
<div>
<h3 className="text-xl font-medium text-white">Clear explanations without jargon</h3>
<p className="text-slate-400 mt-2">We break down complex policy terms into concepts that actually make sense.</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-blue-400 mt-1" data-icon="lucide:heart-handshake" data-width="24"></span>
<div>
<h3 className="text-xl font-medium text-white">A respectful process</h3>
<p className="text-slate-400 mt-2">Never pushy. We present the facts and let you decide the timeline.</p>
</div>
</div>
<div className="flex gap-4">
<span className="iconify text-blue-400 mt-1" data-icon="lucide:footprints" data-width="24"></span>
<div>
<h3 className="text-xl font-medium text-white">Simple next steps</h3>
<p className="text-slate-400 mt-2">We manage the paperwork and carrier communication so you don't have to.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                    Latest insights
                </h2>
<a className="hidden md:inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    View all articles <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-6">
<img alt="Documents" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">How much life insurance do I actually need?</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">A practical guide to calculating income replacement and debt coverage.</p>
<span className="text-sm font-medium text-blue-900 flex items-center">Read article <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span></span>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-6">
<img alt="Family meeting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">Term vs Whole Life: What to know</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Understanding the key differences in cost, value, and long-term utility.</p>
<span className="text-sm font-medium text-blue-900 flex items-center">Read article <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span></span>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden rounded-xl bg-slate-100 mb-6">
<img alt="Checklist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-900 transition-colors mb-2">What to bring to a policy review</h3>
<p className="text-slate-500 text-sm mb-4 line-clamp-2">Prepare for your consultation with this simple document checklist.</p>
<span className="text-sm font-medium text-blue-900 flex items-center">Read article <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span></span>
</article>
</div>
<div className="mt-8 md:hidden">
<a className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">
                    View all articles <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-12 text-center">
                Common Questions
            </h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>How long does the application process take?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed font-light">
                        Depending on the type of policy and carrier, it can take anywhere from a few days (for simplified issue policies) to 4-6 weeks if a medical exam is required. We keep you updated every week.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>Do I need a medical exam?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed font-light">
                        Not always. Many modern carriers offer "accelerated underwriting" which uses data to approve healthy applicants without needles or exams. We can help identify if you qualify.
                    </div>
</details>
<details className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-slate-900 hover:bg-slate-50 transition-colors">
<span>Can I change my policy later?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="20"></span>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 pt-0 leading-relaxed font-light">
                        Yes. Most term policies have a "conversion privilege" allowing you to convert to permanent coverage later without a new medical exam.
                    </div>
</details>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                Ready for clarity?
            </h2>
<p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
                Schedule a call and get a clear next step. No high-pressure sales tactics, just guidance.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-slate-900 hover:bg-blue-50 text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-slate-900/50">
                    Schedule a call
                </button>
<button className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 text-lg font-medium py-4 px-10 rounded-full transition-all duration-300">
                    Email us
                </button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<h3 className="text-white text-lg font-semibold tracking-tight mb-6 uppercase">Amso Group</h3>
<p className="text-sm leading-relaxed mb-4">
                        Premium life insurance guidance for families and business owners.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li>Atlanta, GA</li>
<li>(555) 123-4567</li>
<li>hello@amsogroup.com</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Term Life</a></li>
<li><a className="hover:text-white transition-colors" href="#">Whole Life</a></li>
<li><a className="hover:text-white transition-colors" href="#">Indexed Universal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Business Protection</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-6">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-900 text-xs text-slate-600 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2023 Amso Group, Inc. All rights reserved.</p>
<p className="text-center md:text-right max-w-md">
                    Amso Group, Inc. is a licensed insurance agency. Not affiliated with any government agency. Policy availability varies by state.
                </p>
</div>
</div>
</footer>

    </>
  );
}
