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
      

<header className="w-full py-6 px-4 md:px-8 border-b border-slate-100 flex justify-center md:justify-start max-w-7xl mx-auto">
<div className="font-semibold tracking-tighter text-xl text-slate-900">
            GET OUT RUBBISH
        </div>
</header>

<section className="px-4 md:px-8 pt-12 md:pt-20 pb-16 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 w-full text-center md:text-left">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-tight text-slate-900">
                Fast &amp; Affordable Rubbish Removal in Melbourne – <span className="text-orange-500">Same Day Service</span> Available
            </h1>
<p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
                We remove household, commercial and construction waste quickly and responsibly. Call now for a free quote.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200 shadow-sm" href="#quote-form">
                    Get a Free Quote in 30 Seconds
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200" href="tel:0400000000">
<iconify-icon className="text-lg text-orange-500" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    Call Now – 0400 000 000
                </a>
</div>

<div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-100">
<div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
                    4.8★ Rated
                </div>
<div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                    Fully Insured
                </div>
<div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
                    Eco-Friendly
                </div>
<div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-600 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
                    10+ Years Exp.
                </div>
</div>
</div>
<div className="flex-1 w-full max-w-lg md:max-w-none">

<div className="aspect-[4/3] bg-slate-50 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-slate-400 p-8 text-center shadow-sm">
<iconify-icon className="text-5xl mb-4 text-slate-300" icon="solar:truck-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">[Image: Professional rubbish removal truck and uniformed team on-site]</span>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 md:py-24 px-4 md:px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">
                Trusted by Hundreds of Melbourne Residents &amp; Businesses
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-base leading-relaxed mb-6">
                            "Incredible service! Needed urgent junk removal in Melbourne before moving out. The team arrived within hours, gave a fair upfront price, and cleared everything out faster than I thought possible."
                        </p>
</div>
<div className="font-medium text-slate-900 text-sm">
                        Sarah M. <span className="text-slate-400 font-normal">| Richmond</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-base leading-relaxed mb-6">
                            "We had a huge pile of construction waste removal Melbourne council wouldn't touch. Get Out Rubbish handled it all without a fuss. Highly recommend their affordable rubbish removal."
                        </p>
</div>
<div className="font-medium text-slate-900 text-sm">
                        David L. <span className="text-slate-400 font-normal">| Fitzroy</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
<div>
<div className="flex gap-1 text-orange-400 mb-4">
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-slate-600 text-base leading-relaxed mb-6">
                            "Called them at 8 AM for same day rubbish removal, and my garage was completely empty by noon. The guys were polite, efficient, and left the place spotless. 10/10."
                        </p>
</div>
<div className="font-medium text-slate-900 text-sm">
                        Emma T. <span className="text-slate-400 font-normal">| St Kilda</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8 border-b border-slate-100">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">
                How Our Rubbish Removal Works
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-slate-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Step 1: Call or Request Quote</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        Contact us via phone or our quick online form. Tell us what you need gone and we'll arrange a time.
                    </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:calculator-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Step 2: Upfront Pricing</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        We arrive on-site, assess the volume, and provide a firm, no-obligation transparent price.
                    </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-orange-500 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:broom-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Step 3: Removal &amp; Clean Up</h3>
<p className="text-slate-600 text-sm leading-relaxed">
                        We load all the rubbish, sort it for recycling, and sweep the area clean before leaving.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8">
                    What We Remove
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="mt-1 text-orange-500">
<iconify-icon className="text-xl" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1 text-base">Household Rubbish</h4>
<p className="text-sm text-slate-600">General waste, whitegoods, electronics, and garage cleanouts.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-orange-500">
<iconify-icon className="text-xl" icon="solar:sofa-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1 text-base">Furniture Removal</h4>
<p className="text-sm text-slate-600">Old couches, mattresses, tables, and bulky items.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-orange-500">
<iconify-icon className="text-xl" icon="solar:cone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1 text-base">Construction Waste</h4>
<p className="text-sm text-slate-600">Timber, rubble, scrap metal, and renovation debris.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 text-orange-500">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-1 text-base">Commercial Cleanouts</h4>
<p className="text-sm text-slate-600">Office furniture, e-waste, and end-of-lease clearing.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-8 lg:text-center">
                    We Leave Your Space Clean &amp; Clutter-Free
                </h2>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-square bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-4 border border-slate-200 relative overflow-hidden text-center">
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md text-slate-900 shadow-sm">Before</div>
<iconify-icon className="text-3xl text-slate-400 mb-2" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-slate-500 font-medium">[Messy Area Image]</span>
</div>
<div className="aspect-square bg-slate-50 rounded-2xl flex flex-col items-center justify-center p-4 border border-slate-200 relative overflow-hidden text-center">
<div className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-md text-white shadow-sm">After</div>
<iconify-icon className="text-3xl text-orange-400 mb-2" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-slate-500 font-medium">[Spotless Area Image]</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-16 md:py-24 px-4 md:px-8" id="quote-form">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="lg:sticky lg:top-12 pt-4">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                    Affordable &amp; Transparent Pricing
                </h2>
<p className="text-slate-600 text-base mb-8 leading-relaxed">
                    Stop searching for affordable rubbish removal near me. We offer the most competitive rates in Melbourne with zero surprises.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-700 text-base font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Free on-site quote
                    </li>
<li className="flex items-center gap-3 text-slate-700 text-base font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        No hidden fees
                    </li>
<li className="flex items-center gap-3 text-slate-700 text-base font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Pay only for what we remove
                    </li>
<li className="flex items-center gap-3 text-slate-700 text-base font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Competitive Melbourne rates
                    </li>
<li className="flex items-center gap-3 text-slate-700 text-base font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Same-day service available
                    </li>
</ul>
<div className="hidden lg:block">
<a className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200 shadow-sm" href="tel:0400000000">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                        Call Us Directly
                    </a>
</div>
</div>

<div className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">
                    Get Your Free Quote
                </h3>
<p className="text-sm text-slate-500 mb-8">Fast response. No obligation.</p>
<form action="#" className="space-y-5" method="POST">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder:text-slate-400" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder:text-slate-400" id="phone" name="phone" placeholder="0400 000 000" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="suburb">Melbourne Suburb</label>
<input className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200 placeholder:text-slate-400" id="suburb" name="suburb" placeholder="e.g. Richmond" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="rubbish-type">Type of Rubbish</label>
<select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-900 text-base rounded-xl px-4 py-3 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-200" id="rubbish-type" name="rubbish-type" required="">
<option disabled="" selected="" value="">Select an option</option>
<option value="household">Household Rubbish</option>
<option value="furniture">Furniture / Appliances</option>
<option value="construction">Construction Waste</option>
<option value="commercial">Office / Commercial</option>
<option value="mixed">Mixed Junk / Other</option>
</select>
</div>
<div className="pt-2">
<button className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200 shadow-sm" type="submit">
                            Get My Free Quote Now
                        </button>
<p className="text-xs text-red-600 text-center mt-3 font-medium flex items-center justify-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Limited Same-Day Spots Available – Act Fast
                        </p>
</div>
</form>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-4 md:px-8 text-center border-t border-slate-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">
                Need Rubbish Gone Today? <br className="hidden md:block"/>We’re Ready.
            </h2>
<p className="text-base text-slate-600 mb-10">
                Fast response. Friendly team. Clean results. Experience the best junk removal Melbourne has to offer.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200 shadow-sm" href="tel:0400000000">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                    Call Now
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-medium text-base transition-colors duration-200" href="#quote-form">
                    Request Free Quote
                </a>
</div>
<p className="text-xs text-slate-400 mt-8">
                © Get Out Rubbish Melbourne. All rights reserved.
            </p>
</div>
</section>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-md border-t border-slate-200 md:hidden z-50">
<a className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white py-3.5 rounded-xl font-medium text-base shadow-lg active:scale-[0.98] transition-transform" href="tel:0400000000">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
            Call for Same Day Service
        </a>
</div>

    </>
  );
}
