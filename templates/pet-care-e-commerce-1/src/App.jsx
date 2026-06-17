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
      

<nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="font-semibold text-lg tracking-tighter text-slate-900 uppercase tracking-widest" href="#">
                    PetProject
                </a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#categories">Essentials</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#consult">Vet Consult</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors hidden sm:block" href="#">Sign In</a>
<a className="inline-flex justify-center items-center bg-slate-900 text-white font-medium text-xs sm:text-sm px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    Shop Now
                </a>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 md:pt-24 md:pb-32 overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                        Welcome to PetProject
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Claim HK$88 Off Your First Vet-Approved Order.
                    </h1>
<p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                        Skip the guesswork. Access curated prescription diets, preventatives, and ongoing wellness essentials. Backed by local clinic partners, trusted since 2010.
                    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
<div className="w-full sm:w-auto flex items-center justify-between gap-4 bg-slate-50 border border-slate-200 rounded-xl p-2 pl-4">
<span className="text-sm font-mono font-medium text-slate-900 tracking-wider">PETPRO88</span>
<button className="inline-flex items-center justify-center bg-white border border-slate-200 text-slate-900 text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors shadow-sm gap-2">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                                Copy Code
                            </button>
</div>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-900 text-white font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-sm" href="#categories">
                            Browse Essentials
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-slate-400" icon="solar:box-linear"></iconify-icon>
                            Free delivery over HK$500
                        </div>
<div className="w-1 h-1 rounded-full bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-slate-400" icon="solar:shield-check-linear"></iconify-icon>
                            Vet-partnered care
                        </div>
</div>
</div>

<div className="relative hidden lg:block h-full min-h-[500px]">
<div className="absolute inset-0 flex items-center justify-center">
<div className="absolute w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl"></div>

<div className="relative w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="flex items-start justify-between mb-8">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:ticket-sale-linear"></iconify-icon>
</div>
<span className="bg-green-50 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full border border-green-100">
                                    Active Offer
                                </span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Welcome Discount</h3>
<p className="text-sm text-slate-500 mb-6">Enjoy HK$88 off your first order of curated pet health essentials.</p>
<div className="bg-slate-50 rounded-xl p-4 border border-slate-100 flex items-center justify-between mb-6">
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Use code at checkout</div>
<div className="text-lg font-mono font-semibold text-slate-900 tracking-widest">PETPRO88</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Valid on all prescription diets
                                </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Valid on preventatives &amp; meds
                                </div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                    Combinable with free shipping
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-slate-50 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-sm font-medium text-slate-500">
<span className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:medal-star-linear"></iconify-icon>
                Established 2010
            </span>
<span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:stethoscope-linear"></iconify-icon>
                Partnered with Local Clinics
            </span>
<span className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-user-linear"></iconify-icon>
                Over 50,000 Pets Served
            </span>
</div>
</div>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">A Simpler Path to Vet-Approved Care</h2>
<p className="text-base text-slate-600">
                    We've streamlined the way you access the essentials your pet actually needs, without the overwhelming clutter of a standard pet store.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-px bg-slate-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">1. Find Your Essentials</h3>
<p className="text-sm text-slate-600 max-w-xs">Browse our carefully curated selection of diets, preventatives, and ongoing medications.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">2. Prescription Check</h3>
<p className="text-sm text-slate-600 max-w-xs">Upload an existing script at checkout. Need one? Easily book a quick consult through our clinic partner.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm mb-6 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">3. Doorstep Delivery</h3>
<p className="text-sm text-slate-600 max-w-xs">Apply your HK$88 welcome code and get everything delivered straight to your home.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white" id="consult">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-medium mb-6">
                        No Prescription? No Problem.
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6 leading-tight">
                        Book a consult today.<br/>Get credited tomorrow.
                    </h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
                        Many pet parents know what their pet needs but haven't sorted the prescription yet. We make that easy. Book a consult with our partner clinic, and your consult fee can be credited back on your first eligible purchase.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Seamless online booking process</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Consult fee credited toward eligible items</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-slate-300">Directly unlocks prescription diets and meds</span>
</li>
</ul>
<a className="inline-flex justify-center items-center bg-white text-slate-900 font-medium text-sm px-6 py-3.5 rounded-xl hover:bg-slate-100 transition-colors shadow-sm" href="#">
                        Learn About Consults
                    </a>
</div>

<div className="relative bg-slate-800 rounded-3xl p-8 border border-slate-700">
<div className="flex flex-col gap-4">
<div className="bg-slate-900 rounded-xl p-5 border border-slate-700 flex gap-4 items-center">
<div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">1. Schedule</h4>
<p className="text-xs text-slate-400">Pick a time that works for you</p>
</div>
</div>
<div className="w-px h-6 bg-slate-700 mx-auto"></div>
<div className="bg-slate-900 rounded-xl p-5 border border-slate-700 flex gap-4 items-center">
<div className="w-12 h-12 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:user-speak-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">2. Chat with Vet</h4>
<p className="text-xs text-slate-400">Discuss symptoms and get script</p>
</div>
</div>
<div className="w-px h-6 bg-slate-700 mx-auto"></div>
<div className="bg-slate-900 rounded-xl p-5 border border-slate-700 flex gap-4 items-center">
<div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-1">3. Get Credited</h4>
<p className="text-xs text-slate-400">Fee credited on eligible purchase</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200" id="categories">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">What do you need today?</h2>
<p className="text-base text-slate-600">
                        Use your HK$88 welcome code across our core categories. Curated for efficacy, approved by vets.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="p-8">
<div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:bowl-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Prescription Diets</h3>
<p className="text-sm text-slate-500 mb-8 line-clamp-2">Targeted nutrition for specific health conditions, from kidney care to digestive support.</p>
<span className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                            Explore Diets <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="p-8">
<div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:shield-plus-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Preventatives</h3>
<p className="text-sm text-slate-500 mb-8 line-clamp-2">Everyday protection against fleas, ticks, and heartworm. Keep them safe month after month.</p>
<span className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                            Explore Preventatives <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>

<a className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300" href="#">
<div className="p-8">
<div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:pill-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Medications</h3>
<p className="text-sm text-slate-500 mb-8 line-clamp-2">Ongoing treatments for chronic conditions, accessible online with your prescription.</p>
<span className="text-sm font-medium text-slate-900 inline-flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                            Explore Medications <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Questions about the offer?</h2>
<div className="space-y-6">
<div className="pb-6 border-b border-slate-100">
<h3 className="text-base font-medium text-slate-900 mb-2">How do I claim the HK$88 off?</h3>
<p className="text-sm text-slate-600">Simply copy the code <strong>PETPRO88</strong> and apply it at checkout. The discount will be applied to your first qualifying order of vet-approved items.</p>
</div>
<div className="pb-6 border-b border-slate-100">
<h3 className="text-base font-medium text-slate-900 mb-2">Can I use the discount if I don't have a prescription yet?</h3>
<p className="text-sm text-slate-600">Yes! You can book your consult first, receive your prescription, and then use the welcome code when you purchase your items. Plus, your consult fee may be credited back.</p>
</div>
<div className="pb-6 border-b border-slate-100">
<h3 className="text-base font-medium text-slate-900 mb-2">Are there any exclusions?</h3>
<p className="text-sm text-slate-600">The offer applies to all core categories including prescription diets, preventatives, and medications for first-time purchasers. Minimum spend may apply.</p>
</div>
<div className="pb-6 border-b border-slate-100">
<h3 className="text-base font-medium text-slate-900 mb-2">Is delivery free?</h3>
<p className="text-sm text-slate-600">Yes, we offer free delivery across Hong Kong for all orders over HK$500.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50 border-t border-blue-100 text-center">
<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Ready to get started?
            </h2>
<p className="text-base text-slate-600 mb-10">
                Join thousands of pet parents who trust PetProject for their vet-approved essentials. Your HK$88 welcome offer is waiting.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="w-full sm:w-auto flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl p-2 pl-4 shadow-sm">
<span className="text-sm font-mono font-medium text-slate-900 tracking-wider">PETPRO88</span>
<button className="inline-flex items-center justify-center bg-slate-100 text-slate-900 text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-200 transition-colors gap-2">
<iconify-icon icon="solar:copy-linear"></iconify-icon>
                        Copy
                    </button>
</div>
<a className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-slate-900 text-white font-medium text-sm px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-sm" href="#categories">
                    Shop Collection
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
<div className="font-semibold text-xl tracking-tighter text-slate-900 uppercase tracking-widest mb-6">
                PetProject
            </div>
<div className="flex flex-wrap justify-center gap-6 mb-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Contact Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Shipping Policy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
</div>
<p className="text-xs text-slate-400">
                © 2023 PetProject. Trusted since 2010. Partnered with local veterinary clinics.
            </p>
</div>
</footer>

    </>
  );
}
