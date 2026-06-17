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
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 group" href="#">
<div className="bg-emerald-50 text-emerald-600 p-2 rounded-xl border border-emerald-100 group-hover:bg-emerald-100 transition-colors">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-semibold text-base md:text-lg tracking-tight text-stone-900 leading-none">Miguel's</span>
<span className="text-xs font-medium text-stone-500 tracking-wide uppercase mt-0.5">Tree Services</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#process">How it Works</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#about">About Us</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-semibold text-stone-700 hover:text-emerald-700 transition-colors" href="tel:+16156484292">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    (615) 648-4292
                </a>
<a className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm shadow-emerald-600/20 whitespace-nowrap" href="#estimate">
                    Free Estimate
                </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-stone-950">

<div className="absolute inset-0 z-0">
<img alt="Arborist climbing a large tree" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/30"></div>
<div className="absolute inset-0 bg-noise"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8">
<div className="flex items-center text-amber-400">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="14"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-stone-200">4.9/5 from 107+ Murfreesboro locals</span>
</div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl mb-6 leading-[1.1]">
                Professional Tree Services You Can <span className="text-emerald-400">Trust</span>
</h1>
<p className="text-base md:text-xl text-stone-300 max-w-2xl mb-10 leading-relaxed font-light">
                Safe. Affordable. Fast &amp; Fully Insured. We handle everything from hazardous removals to meticulous landscaping across Murfreesboro, TN.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="group relative flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base transition-all shadow-[0_0_20px_rgba(5,150,105,0.4)] hover:shadow-[0_0_30px_rgba(5,150,105,0.6)]" href="tel:+16156484292">
<iconify-icon className="transition-transform group-hover:rotate-12" icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    Call (615) 648-4292
                </a>
<a className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm font-semibold text-base transition-all" href="#estimate">
                    Get a Free Estimate
                </a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16 pt-8 border-t border-white/10 w-full max-w-4xl">
<div className="flex items-center justify-center gap-2 text-stone-300">
<iconify-icon className="text-emerald-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Fully Insured</span>
</div>
<div className="flex items-center justify-center gap-2 text-stone-300">
<iconify-icon className="text-emerald-400" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Fast Response</span>
</div>
<div className="flex items-center justify-center gap-2 text-stone-300">
<iconify-icon className="text-emerald-400" icon="solar:wad-of-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Fair Pricing</span>
</div>
<div className="flex items-center justify-center gap-2 text-stone-300">
<iconify-icon className="text-emerald-400" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium">Local Experts</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-stone-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">
                    Complete Tree &amp; Landscaping Care
                </h2>
<p className="text-base text-stone-500">
                    Equipped for any size job. From routine maintenance to complex, hazardous removals near powerlines or structures.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group bg-white border border-stone-100 rounded-3xl p-8 hover-lift-shadow transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white">
<iconify-icon icon="solar:danger-triangle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-3">Tree Removal</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Safe, calculated takedowns of dead, diseased, or hazardous trees. We protect your property and landscaping throughout the entire process.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors" href="#estimate">
                        Request Estimate <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white border border-stone-100 rounded-3xl p-8 hover-lift-shadow transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white">
<iconify-icon icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-3">Trimming &amp; Pruning</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Enhance tree health, structural integrity, and aesthetic appeal. We clear deadwood, lift canopies, and ensure proper clearance.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors" href="#estimate">
                        Request Estimate <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white border border-stone-100 rounded-3xl p-8 hover-lift-shadow transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white">
<iconify-icon icon="solar:ruler-cross-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-3">Stump Grinding</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Reclaim your yard space. We grind stumps below grade, leaving the area ready for new sod, planting, or construction.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors" href="#estimate">
                        Request Estimate <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="group bg-white border border-stone-100 rounded-3xl p-8 hover-lift-shadow transition-all duration-300 relative overflow-hidden lg:col-span-2">
<div className="absolute top-0 right-0 p-8 opacity-10">
<iconify-icon icon="solar:siren-rounded-linear" strokeWidth="1.5" width="120"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="flex-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-xs font-semibold tracking-wide uppercase mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span> Urgent Needs
                            </div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-stone-900 mb-3">24/7 Emergency Tree Service</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 max-w-lg">
                                Storm damage? Fallen tree on your roof or driveway? We offer rapid response emergency services to secure your property safely and quickly.
                            </p>
<a className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors" href="tel:+16156484292">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon> Call For Immediate Help
                            </a>
</div>
</div>
</div>

<div className="group bg-white border border-stone-100 rounded-3xl p-8 hover-lift-shadow transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 transition-colors group-hover:bg-emerald-600 text-emerald-600 group-hover:text-white">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-3">Landscaping &amp; Cleanup</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6">
                        Beyond trees, we offer full-service property cleanups, debris removal, and hard-working landscaping services to perfect your outdoor space.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors" href="#estimate">
                        Request Estimate <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 relative overflow-hidden" id="process">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute inset-0 bg-noise"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                    Our No-Hassle Process
                </h2>
<p className="text-base text-stone-400 leading-relaxed">
                    We respect your time and property. From the first call to the final sweep, here is what you can expect when working with Miguel's crew.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative flex flex-col h-full border border-white/5 rounded-3xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
<span className="block text-xs font-medium tracking-widest text-emerald-400 mb-4 uppercase">Step 01</span>
<h3 className="text-lg font-semibold text-white mb-2">Request Quote</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                        Call us or fill out our short online form. We answer quickly and schedule a convenient time.
                    </p>
</div>

<div className="group relative flex flex-col h-full border border-white/5 rounded-3xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
<span className="block text-xs font-medium tracking-widest text-emerald-400 mb-4 uppercase">Step 02</span>
<h3 className="text-lg font-semibold text-white mb-2">Free Assessment</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                        Miguel visits your property, assesses the trees safely, and provides a fair, transparent, honest price.
                    </p>
</div>

<div className="group relative flex flex-col h-full border border-white/5 rounded-3xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
<span className="block text-xs font-medium tracking-widest text-emerald-400 mb-4 uppercase">Step 03</span>
<h3 className="text-lg font-semibold text-white mb-2">Safe Execution</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                        Our skilled, insured crew arrives with the right equipment to perform the work safely and efficiently.
                    </p>
</div>

<div className="group relative flex flex-col h-full border border-white/5 rounded-3xl p-6 bg-white/5 hover:bg-white/10 transition-colors">
<span className="block text-xs font-medium tracking-widest text-emerald-400 mb-4 uppercase">Step 04</span>
<h3 className="text-lg font-semibold text-white mb-2">Meticulous Cleanup</h3>
<p className="text-sm text-stone-400 leading-relaxed">
                        We pride ourselves on leaving your yard cleaner than we found it. No debris left behind.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-b border-stone-200" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
<div className="lg:w-1/2 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-200/50 border border-stone-300/50 text-stone-700 text-xs font-medium tracking-wide mb-6 self-start">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="14"></iconify-icon>
                    Latino-Owned &amp; Operated
                </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Hard Work, Honest Prices, <br className="hidden lg:block"/>Flawless Cleanup.
                </h2>
<p className="text-base text-stone-600 mb-8 leading-relaxed max-w-lg">
                    Miguel’s Tree Services &amp; Landscaping was built on a simple promise: treat every customer's property like our own. As a local Murfreesboro business, our reputation is everything. We don't cut corners on safety, and we never leave a mess behind.
                </p>
<div className="flex flex-col gap-4 mb-10">
<div className="flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<span className="font-semibold text-stone-900 text-sm block">Fair &amp; Honest Pricing</span>
<span className="text-stone-500 text-sm block">No hidden fees, no upselling. Just an honest quote for hard work.</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<span className="font-semibold text-stone-900 text-sm block">Safety First Always</span>
<span className="text-stone-500 text-sm block">Fully insured crew using professional rigging and safety gear.</span>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<div>
<span className="font-semibold text-stone-900 text-sm block">Spotless Cleanup</span>
<span className="text-stone-500 text-sm block">Raking, blowing, and hauling away all debris. Your yard will look pristine.</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full">
<div className="relative rounded-[2rem] overflow-hidden border border-stone-200 bg-white p-2 shadow-xl shadow-stone-200/50">
<img alt="Chainsaw and tree work" className="w-full h-[400px] lg:h-[500px] object-cover rounded-[1.5rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-stone-200 p-4 rounded-2xl shadow-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-stone-900 tracking-tight leading-none">100%</span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-1">Locally Owned</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col items-center text-center mb-16">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">
                    Top Rated in Murfreesboro
                </h2>
<p className="text-base text-stone-500 max-w-xl">
                    Don't just take our word for it. Read what your neighbors are saying about our fair prices and spotless cleanups.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                        "Miguel and his crew were fantastic. They took down a huge oak near our house safely and the price was much fairer than other quotes we got. The cleanup was so good you couldn't tell they were here!"
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-semibold text-stone-600 text-sm">
                            JD
                        </div>
<div>
<div className="text-sm font-semibold text-stone-900">James D.</div>
<div className="text-xs text-stone-500">Murfreesboro, TN</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                        "Called them after a storm dropped a massive limb on our driveway. They were here within hours. Fast, professional, and very polite crew. Highly recommend Miguel to anyone needing tree work."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-semibold text-stone-600 text-sm">
                            SK
                        </div>
<div>
<div className="text-sm font-semibold text-stone-900">Sarah K.</div>
<div className="text-xs text-stone-500">Smyrna, TN</div>
</div>
</div>
</div>

<div className="p-8 rounded-3xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:shadow-lg transition-all duration-300">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-stone-700 text-sm leading-relaxed mb-6 italic">
                        "Incredible work ethic. They removed three dead pines and ground the stumps. Watched them work all day—super safe with the rigging. Their prices are honest and they work hard for it."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center font-semibold text-stone-600 text-sm">
                            MR
                        </div>
<div>
<div className="text-sm font-semibold text-stone-900">Marcus R.</div>
<div className="text-xs text-stone-500">Murfreesboro, TN</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 border-t border-stone-200" id="estimate">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2rem] border border-stone-200 shadow-xl overflow-hidden flex flex-col lg:flex-row">

<div className="lg:w-5/12 bg-stone-900 p-10 lg:p-14 flex flex-col justify-between relative overflow-hidden text-white">
<div className="absolute inset-0 bg-noise opacity-50"></div>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-600/30 blur-[60px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Get Your Free Estimate</h2>
<p className="text-stone-400 text-sm leading-relaxed">
                            Fill out the short form, and we'll get back to you quickly to schedule an on-site visit. For emergencies, please call directly.
                        </p>
</div>
<div className="relative z-10 flex flex-col gap-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">Call Us (24/7 Emergencies)</span>
<a className="text-lg font-semibold hover:text-emerald-400 transition-colors" href="tel:+16156484292">(615) 648-4292</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">Service Area</span>
<span className="text-base font-medium">Murfreesboro, TN &amp; Surrounding Areas</span>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs font-medium text-stone-400 uppercase tracking-wide mb-1">Business Hours</span>
<span className="text-base font-medium">Mon-Sat: 7:00 AM - 6:00 PM<br/><span className="text-emerald-400 text-sm">Emergency: 24/7 Available</span></span>
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-14">
<form action="#" className="flex flex-col gap-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-stone-700" htmlFor="name">Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-stone-700" htmlFor="phone">Phone Number</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors" id="phone" name="phone" placeholder="(615) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-stone-700" htmlFor="address">Property Address</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors" id="address" name="address" placeholder="Street Address, Murfreesboro, TN" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-stone-700" htmlFor="service">Service Needed</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-700 focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors cursor-pointer" id="service" name="service" required="">
<option disabled="" selected="" value="">Select an option...</option>
<option value="removal">Tree Removal</option>
<option value="trimming">Tree Trimming &amp; Pruning</option>
<option value="stump">Stump Grinding</option>
<option value="emergency">Emergency Tree Service</option>
<option value="landscaping">Landscaping &amp; Cleanup</option>
<option value="other">Other / Not Sure</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-semibold text-stone-700" htmlFor="details">Brief Description (Optional)</label>
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-colors resize-none" id="details" name="details" placeholder="E.g., Large oak tree near the house needs removal..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-xl shadow-sm transition-all hover:shadow-md mt-2" type="submit">
                            Request My Free Quote
                        </button>
<p className="text-xs text-stone-500 text-center mt-2 flex items-center justify-center gap-1.5">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Your information is secure and will never be shared.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 pt-16 pb-8 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-stone-800 pb-12">
<div className="col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="text-emerald-500">
<iconify-icon icon="solar:leaf-bold" width="24"></iconify-icon>
</div>
<span className="font-semibold text-lg text-white tracking-tight">Miguel's Tree Services</span>
</a>
<p className="text-sm text-stone-400 max-w-xs mb-6 leading-relaxed">
                        Professional, safe, and affordable tree care and landscaping in Murfreesboro, TN. Locally owned and operated.
                    </p>
</div>
<div>
<h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Tree Removal</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Trimming &amp; Pruning</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Stump Grinding</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Emergency Response</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Landscaping</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
<ul className="space-y-3 text-sm text-stone-400">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+16156484292">(615) 648-4292</a>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>Murfreesboro, TN<br/>Serving surrounding areas</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-stone-500">
                    © 2024 Miguel's Tree Services &amp; Landscaping. All rights reserved.
                </span>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-stone-200 md:hidden z-50 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<a className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white py-3.5 rounded-xl font-semibold text-sm shadow-sm active:bg-emerald-700 transition-colors" href="tel:+16156484292">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Call Now
        </a>
<a className="flex-1 flex items-center justify-center gap-2 bg-stone-900 text-white py-3.5 rounded-xl font-semibold text-sm shadow-sm active:bg-stone-800 transition-colors" href="#estimate">
            Get Quote
        </a>
</div>

    </>
  );
}
