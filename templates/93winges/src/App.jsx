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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/80 border-zinc-200/60">
<div className="flex h-16 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="uppercase text-sm font-semibold tracking-tight">
                93 WINGES<span className="text-zinc-400">RESIDENCE</span>
</div>
<div className="flex gap-4 items-center">
<a className="text-xs font-medium transition-colors hidden sm:block text-zinc-600 hover:text-zinc-900" href="#contact">
                    Ask a Question
                </a>
<a className="text-xs font-medium px-4 py-2 rounded-full transition-all hover:scale-105 active:scale-95 bg-zinc-900 text-white hover:bg-zinc-800" href="#contact">
                    Schedule Viewing
                </a>
</div>
</div>
</nav>

<header className="bg-zinc-50 max-w-7xl mx-auto pt-32 px-6 pb-20 relative">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex flex-col gap-6 fade-in-up">
<div className="inline-flex items-center gap-2 border rounded-full px-3 py-1 w-fit border-zinc-200 bg-white">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium uppercase tracking-wide text-zinc-600">Active Listing</span>
</div>
<h1 className="text-5xl sm:text-6xl font-medium tracking-tighter leading-[1.1] text-zinc-900">
                    The Patchogue <br/>
<span className="text-zinc-500">Opportunity.</span>
</h1>
<p className="text-lg text-zinc-500 font-normal leading-relaxed max-w-md">
                    Investor opportunity in Patchogue. Single-family ranch on a 0.20-acre lot with strong upside potential. Ideal for fix-and-flip or buy-and-hold strategy.
                </p>
<div className="flex flex-col sm:flex-row gap-8 pt-4 border-t mt-4 border-zinc-200">
<div>
<p className="text-xs uppercase tracking-wider mb-1 text-zinc-400">List Price</p>
<p className="text-2xl font-medium tracking-tight">$400,000</p>
</div>
<div>
<p className="text-xs uppercase tracking-wider mb-1 text-zinc-400">Est. Payment</p>
<p className="text-2xl font-medium text-zinc-500 tracking-tight">~$2,667<span className="text-sm">/mo</span></p>
</div>
</div>
<div className="pt-2">
<a className="group inline-flex items-center gap-2 hover:bg-zinc-800 transition-all hover:shadow-lg hover:shadow-zinc-200/50 active:scale-95 text-sm font-medium text-white bg-zinc-900 rounded-lg px-5 py-2.5" href="#contact">
                        Inquire Now
                        <svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-7 fade-in-up delay-100">
<div className="relative group rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] shadow-zinc-200/50">
<img alt="93 Winges Avenue Exterior" className="transform transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://photos.zillowstatic.com/fp/c8dd7803451651ecf1000f1f4ea9dce5-cc_ft_1536.jpg"/>
<div className="absolute bottom-4 left-4 backdrop-blur-sm px-3 py-1.5 rounded-lg border bg-white/90 border-white/20">
<p className="text-xs font-medium">93 Winges Avenue, Patchogue, NY 11772</p>
</div>
</div>
</div>
</div>
</header>

<section className="px-6 py-12 border-y border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col gap-2 p-4 rounded-xl transition-colors fade-in-up delay-100 hover:bg-zinc-50">
<iconify-icon className="text-zinc-400" icon="solar:bed-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="text-3xl font-medium tracking-tight">4</p>
<p className="text-xs text-zinc-500 font-medium">Bedrooms</p>
</div>
</div>

<div className="flex flex-col gap-2 p-4 rounded-xl transition-colors fade-in-up delay-200 hover:bg-zinc-50">
<iconify-icon className="text-zinc-400" icon="solar:bath-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="text-3xl font-medium tracking-tight">2</p>
<p className="text-xs text-zinc-500 font-medium">Bathrooms</p>
</div>
</div>

<div className="flex flex-col gap-2 p-4 rounded-xl transition-colors fade-in-up delay-300 hover:bg-zinc-50">
<iconify-icon className="text-zinc-400" icon="solar:ruler-angular-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="text-3xl font-medium tracking-tight">1,638</p>
<p className="text-xs text-zinc-500 font-medium">Square Feet</p>
</div>
</div>

<div className="flex flex-col gap-2 p-4 rounded-xl transition-colors fade-in-up delay-300 hover:bg-zinc-50">
<iconify-icon className="text-zinc-400" icon="solar:home-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div>
<p className="text-3xl font-medium tracking-tight">1949</p>
<p className="text-xs text-zinc-500 font-medium">Year Built</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

<div className="order-2 md:order-1 flex flex-col gap-8 sticky top-24 h-fit">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-4">Investment Potential</h2>
<p className="leading-relaxed font-light text-sm text-zinc-600 mb-4">
                        Located in the heart of Patchogue, this single-family ranch presents a significant value-add opportunity. 
                        Currently configured with 4 bedrooms and 2 baths, the property offers 1,638 square feet of living space on a 6,098 square foot lot.
                    </p>
<p className="leading-relaxed font-light text-sm text-zinc-600">
                        Convenient to highways, shopping, and transportation. This property is being sold as-is and is cash only, making it an ideal candidate for a fix-and-flip project or a long-term rental addition to your portfolio.
                    </p>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm border-zinc-100 bg-white">
<iconify-icon className="text-zinc-900" icon="solar:wallet-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Cash Only</p>
<p className="text-xs text-zinc-500">Sold as-is condition</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm border-zinc-100 bg-white">
<iconify-icon className="text-zinc-900" icon="solar:hammer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Renovation Ready</p>
<p className="text-xs text-zinc-500">Strong upside potential</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 border rounded-lg shadow-sm border-zinc-100 bg-white">
<iconify-icon className="text-zinc-900" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-zinc-900">Patchogue Region</p>
<p className="text-xs text-zinc-500">Suffolk County, NY 11772</p>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2">
<div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-xl shadow-zinc-100/50">
<div className="p-6 border-b border-zinc-100 flex justify-between items-center bg-zinc-50/50">
<div>
<h3 className="text-sm font-semibold text-zinc-900">Price vs. Market</h3>
<p className="text-xs text-zinc-500 mt-1">Listing vs. 11772 Median</p>
</div>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-medium border border-emerald-100">
<iconify-icon icon="solar:tag-price-linear" width="12"></iconify-icon>
                            Value Opportunity
                        </span>
</div>
<div className="p-6 flex flex-col gap-6">

<div className="flex flex-col gap-4">

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-900">93 Winges Ave</span>
<span className="text-sm font-semibold text-zinc-900">$400,000</span>
</div>
<div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-zinc-900 w-[70%] rounded-full"></div>
</div>
<p className="text-[10px] text-zinc-400 mt-1.5">Subject Property</p>
</div>

<div className="group">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-500">Area Median</span>
<span className="text-sm font-medium text-zinc-500">$570,000</span>
</div>
<div className="h-2.5 w-full bg-zinc-100 rounded-full overflow-hidden relative">
<div className="absolute right-0 top-0 bottom-0 w-px bg-zinc-300 dashed"></div>
<div className="h-full bg-zinc-300 w-full rounded-full"></div>
</div>
<p className="text-[10px] text-zinc-400 mt-1.5">Patchogue Median Sales Price</p>
</div>
</div>

<div className="rounded-lg bg-zinc-50 border border-zinc-100 p-4">
<div className="flex items-center gap-3">
<div className="bg-white border border-zinc-200 p-2 rounded-md">
<iconify-icon className="text-emerald-600 block" icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">30% Below Market</p>
<p className="text-xs text-zinc-500">Priced $170k under area median.</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 border-t border-zinc-100 pt-6">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-1">List Price / SqFt</p>
<p className="text-xl font-medium tracking-tight text-zinc-900">$244</p>
</div>
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium mb-1">Median / SqFt</p>
<p className="text-xl font-medium tracking-tight text-zinc-400">$376</p>
</div>
</div>
</div>

<div className="bg-zinc-50/50 border-t border-zinc-100 p-4 flex items-center justify-between">
<span className="text-[10px] text-zinc-400">Data source: Zillow/Redfin (Last 30d)</span>
<a className="text-xs font-medium text-zinc-900 hover:underline" href="#contact">Request Comps →</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto">
<h3 className="text-2xl font-medium tracking-tight mb-12">Facts &amp; Features</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:armchair-2-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Interior</h4>
</div>
<div className="space-y-4">
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Bedrooms</span>
<span className="text-sm font-medium text-zinc-900">4</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Bathrooms</span>
<span className="text-sm font-medium text-zinc-900">2 (Full)</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Livable Area</span>
<span className="text-sm font-medium text-zinc-900">1,638 sqft</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Heating</span>
<span className="text-sm font-medium text-zinc-900">Baseboard, Hot Water</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Cooling</span>
<span className="text-sm font-medium text-zinc-900">None</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Fireplace</span>
<span className="text-sm font-medium text-zinc-900">No</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Property &amp; Build</h4>
</div>
<div className="space-y-4">
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Year Built</span>
<span className="text-sm font-medium text-zinc-900">1949</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Style</span>
<span className="text-sm font-medium text-zinc-900">Cape Cod</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Materials</span>
<span className="text-sm font-medium text-zinc-900">Brick</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Parcel Number</span>
<span className="text-sm font-medium text-zinc-900">472000326410</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Water/Sewer</span>
<span className="text-sm font-medium text-zinc-900">Public</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Lot Size</span>
<span className="text-sm font-medium text-zinc-900">6,098 sqft</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Parking</span>
<span className="text-sm font-medium text-zinc-900">Driveway</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-zinc-400" icon="solar:map-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-900">Neighborhood</h4>
</div>
<div className="space-y-4">
<div className="flex flex-col gap-1 border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Elementary School</span>
<span className="text-sm font-medium text-zinc-900">Medford Elementary</span>
</div>
<div className="flex flex-col gap-1 border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Middle School</span>
<span className="text-sm font-medium text-zinc-900">Saxton Middle</span>
</div>
<div className="flex flex-col gap-1 border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">High School</span>
<span className="text-sm font-medium text-zinc-900">Patchogue-Medford High</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">Walk Score</span>
<span className="text-sm font-medium text-zinc-900">51 / 100</span>
</div>
<div className="flex justify-between items-baseline border-b border-zinc-100 pb-2">
<span className="text-xs text-zinc-500">HOA</span>
<span className="text-sm font-medium text-zinc-900">No</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-zinc-900 pt-24 px-6 pb-24" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">

<div className="flex flex-col justify-between">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-4">Interested in 93 Winges?</h2>
<p className="font-light text-sm text-zinc-400 max-w-sm mb-12">Connect with the listing agent to schedule a private tour or request more details about this investment opportunity.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-800 border border-zinc-700">
<div className="flex items-start gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center text-white shrink-0">
<span className="font-semibold text-lg">SM</span>
</div>
<div>
<p className="text-lg font-medium text-white">Shleiden D. Mathieu</p>
<p className="text-xs text-zinc-400 uppercase tracking-wide">Real Broker NY LLC</p>
<p className="text-xs text-zinc-500 mt-1">Listing Agent</p>
</div>
</div>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors" href="tel:6315327116">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                (631) 532-7116 <span className="text-zinc-500 text-xs">(Mobile)</span>
</a>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="18"></iconify-icon>
                                (518) 730-4228 <span className="text-zinc-500 text-xs">(Office)</span>
</div>
</div>
</div>
</div>

<form className="flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">First Name</label>
<input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-600" placeholder="Jane" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Last Name</label>
<input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Email Address</label>
<input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-600" placeholder="jane@example.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Phone Number</label>
<input className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-600" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Message</label>
<textarea className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-white placeholder:text-zinc-600 resize-none" rows="4">I am interested in 93 Winges Avenue, Patchogue, NY 11772.</textarea>
</div>
<label className="flex items-center gap-3 cursor-pointer custom-checkbox mt-2 group">
<input className="hidden" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-zinc-800 flex items-center justify-center transition-colors group-hover:border-zinc-500">
<svg className="w-2.5 h-2.5 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path></svg>
</div>
<span className="text-xs text-zinc-400 select-none group-hover:text-zinc-300">I want financing information</span>
</label>
<button className="mt-4 w-full bg-white text-zinc-900 font-medium py-3.5 rounded-lg hover:bg-zinc-100 active:scale-[0.99] transition-all" type="submit">
                        Request Info
                    </button>
</form>
</div>
</div>
</section>

    </>
  );
}
