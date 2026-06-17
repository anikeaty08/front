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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-200/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-stone-200/40 rounded-full blur-3xl"></div>
<div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-stone-200/60 bg-stone-50/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-orange-600" data-icon="lucide:bone" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-stone-900 uppercase">Wag &amp; Co.</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#science">Science</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#ingredients">Ingredients</a>
<a className="text-xs font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#reviews">Reviews</a>
</div>
<a className="flex items-center gap-2 text-xs font-medium text-stone-900 bg-white border border-stone-200 px-3 py-1.5 rounded-md shadow-sm hover:border-stone-300 transition-all" href="#waitlist">
                Join Waitlist
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-6xl mx-auto px-6 mb-24">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-left">

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-stone-900 mb-6 leading-[1.1]">
                        The daily vitamin <br/> your dog thinks <br/> is a treat.
                    </h1>
<p className="text-lg text-stone-500 max-w-md mb-10 leading-relaxed">
                        Human-grade ingredients, vet-formulated nutrition, and zero fillers. Support your dog's longevity with science.
                    </p>
<form className="max-w-sm flex gap-2 mb-6" onsubmit="event.preventDefault();">
<div className="relative flex-grow">
<input className="w-full bg-white border border-stone-200 text-stone-900 text-sm rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all placeholder:text-stone-400 shadow-sm" placeholder="enter@email.com" required="" type="email"/>
</div>
<button className="bg-stone-900 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-stone-800 focus:ring-2 focus:ring-offset-1 focus:ring-stone-900 transition-all shadow-md whitespace-nowrap" type="submit">
                            Get Access
                        </button>
</form>
<p className="text-xs text-stone-400 flex items-center gap-2">
<span className="flex -space-x-1.5">
<span className="w-5 h-5 rounded-full bg-stone-300 border border-white"></span>
<span className="w-5 h-5 rounded-full bg-stone-400 border border-white"></span>
<span className="w-5 h-5 rounded-full bg-stone-500 border border-white"></span>
</span>
                        Join 14,000+ dog owners on the waitlist.
                    </p>
</div>

<div className="relative order-first lg:order-last">
<div className="absolute inset-0 bg-orange-200/30 rounded-2xl rotate-3 scale-[0.98] blur-xl -z-10 translate-y-4"></div>
<div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-2xl shadow-stone-200/50 group h-[500px]">

<div className="absolute top-6 left-6 z-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-stone-200/50 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[11px] font-semibold text-stone-900 tracking-wide uppercase">Launching Summer 2024</span>
</div>
</div>

<img alt="Dog eating from a blue bowl" className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-sm border border-stone-200/50 p-4 rounded-xl shadow-lg max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs font-semibold text-stone-900 uppercase tracking-tight">Focus &amp; Calm</span>
</div>
<p className="text-[11px] text-stone-500 leading-snug">"It's the highlight of his morning. The bowl is licked clean."</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-8 bg-white border border-stone-200 rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify" data-icon="lucide:dog" data-width="120"></span>
</div>
<div className="relative z-10 h-full flex flex-col justify-between min-h-[240px]">
<div>
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-2">Cognitive &amp; Joint Support</h3>
<p className="text-stone-500 text-sm max-w-md">Packed with Omega-3s, Glucosamine, and Lion's Mane mushroom to keep your best friend sharp and active for years to come.</p>
</div>
<div className="flex items-center gap-4 mt-8">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-orange-700">D</div>
<div className="w-8 h-8 rounded-full bg-stone-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-stone-700">A</div>
<div className="w-8 h-8 rounded-full bg-stone-800 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">M</div>
</div>
<span className="text-xs font-medium text-stone-400">Approved by top Veterinarians</span>
</div>
</div>
</div>

<div className="md:col-span-4 bg-stone-900 text-white rounded-2xl p-8 shadow-lg flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 z-0"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-4">
<span className="iconify text-stone-400" data-icon="lucide:activity" data-width="24"></span>
<span className="text-xs font-medium text-stone-400 border border-stone-700 rounded-full px-2 py-1">Lab Tested</span>
</div>
<div className="text-5xl font-semibold tracking-tighter mb-1">100%</div>
<p className="text-stone-400 text-sm">Human-grade ingredients.</p>
</div>
</div>

<div className="md:col-span-4 bg-white border border-stone-200 rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<h3 className="text-base font-semibold tracking-tight text-stone-900 mb-4">No Hidden Fillers</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No Artificial Preservatives</span>
</li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No Corn or Soy</span>
</li>
<li className="flex items-center gap-3 text-sm text-stone-600">
<span className="iconify text-red-500" data-icon="lucide:x" data-width="16"></span>
<span>No By-product Meals</span>
</li>
</ul>
</div>

<div className="md:col-span-4 bg-orange-50 border border-orange-100 rounded-2xl p-8 shadow-sm flex flex-col items-center justify-center text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-orange-600">
<span className="iconify" data-icon="lucide:beef" data-width="24"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-stone-900 mb-1">Grass-Fed Beef</h3>
<p className="text-stone-500 text-xs">Sourced from sustainable ranches.</p>
</div>

<div className="md:col-span-4 bg-white border border-stone-200 rounded-2xl p-8 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between">
<div>
<span className="iconify text-stone-900 mb-4" data-icon="lucide:calendar-check" data-width="24"></span>
<h3 className="text-base font-semibold tracking-tight text-stone-900">Monthly Refills</h3>
<p className="text-stone-500 text-sm mt-1">Delivered to your door in compostable pouches.</p>
</div>
<div className="mt-6 w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
<div className="bg-stone-900 w-2/3 h-full rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32" id="science">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-stone-900 mb-2">Why we're different</h2>
<p className="text-stone-500 text-sm">Most treats are junk food. Wag &amp; Co. is fuel.</p>
</div>
<div className="bg-white border border-stone-200 rounded-xl shadow-sm overflow-hidden">
<table className="w-full text-left border-collapse">
<thead>
<tr className="border-b border-stone-100 bg-stone-50/50">
<th className="py-4 px-6 text-xs font-medium text-stone-400 uppercase tracking-wider w-1/3">Standard</th>
<th className="py-4 px-6 text-xs font-medium text-stone-900 uppercase tracking-wider w-1/3 text-center border-l border-r border-stone-100">Most Brands</th>
<th className="py-4 px-6 text-xs font-bold text-orange-600 uppercase tracking-wider w-1/3 text-center bg-orange-50/30">Wag &amp; Co.</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-stone-100">
<td className="py-4 px-6 font-medium text-stone-700">Primary Ingredient</td>
<td className="py-4 px-6 text-center text-stone-500 border-l border-r border-stone-100">Corn/Wheat</td>
<td className="py-4 px-6 text-center font-semibold text-stone-900 bg-orange-50/10">Real Meat</td>
</tr>
<tr className="border-b border-stone-100">
<td className="py-4 px-6 font-medium text-stone-700">Cooking Method</td>
<td className="py-4 px-6 text-center text-stone-500 border-l border-r border-stone-100">High Heat Extrusion</td>
<td className="py-4 px-6 text-center font-semibold text-stone-900 bg-orange-50/10">Air Dried</td>
</tr>
<tr className="border-b border-stone-100">
<td className="py-4 px-6 font-medium text-stone-700">Fillers</td>
<td className="py-4 px-6 text-center text-stone-500 border-l border-r border-stone-100">40-60%</td>
<td className="py-4 px-6 text-center font-semibold text-stone-900 bg-orange-50/10">0%</td>
</tr>
<tr>
<td className="py-4 px-6 font-medium text-stone-700">Sourcing</td>
<td className="py-4 px-6 text-center text-stone-500 border-l border-r border-stone-100">Global/Unknown</td>
<td className="py-4 px-6 text-center font-semibold text-stone-900 bg-orange-50/10">USA &amp; NZ</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32 text-center" id="reviews">
<div className="mb-6 flex justify-center text-orange-400 gap-1">
<span className="iconify" data-icon="lucide:star" data-width="18" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="18" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="18" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="18" fill="currentColor"></span>
<span className="iconify" data-icon="lucide:star" data-width="18" fill="currentColor"></span>
</div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-6 leading-snug">
                "Finally, a treat I don't feel guilty giving to my dog. <br className="hidden md:block"/> His coat is shinier and his energy levels are stable."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<span className="iconify w-full h-full text-stone-400 mt-1" data-icon="lucide:user" data-width="24"></span>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-stone-900">Dr. Sarah Jenkins</p>
<p className="text-xs text-stone-500">Veterinarian, DVM</p>
</div>
</div>
</section>

<section className="border-t border-stone-200 bg-white" id="waitlist">
<div className="max-w-xl mx-auto px-6 py-24 text-center">
<span className="iconify mx-auto text-stone-900 mb-6" data-icon="lucide:paw-print" data-width="32"></span>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-4">Ready to upgrade their bowl?</h2>
<p className="text-stone-500 mb-8">Limited first batch drops soon. Secure your spot.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-stone-200 focus:border-stone-400 transition-all placeholder:text-stone-400" placeholder="Your email address" required="" type="email"/>
<button className="bg-stone-900 text-white font-medium text-sm px-6 py-3 rounded-lg hover:bg-stone-800 focus:ring-2 focus:ring-offset-1 focus:ring-stone-900 transition-all shadow-md whitespace-nowrap" type="submit">
                        Join Waitlist
                    </button>
</form>
<div className="mt-6 flex items-center justify-center gap-6 text-xs text-stone-400">
<div className="flex items-center gap-1.5">
<span className="iconify text-stone-900" data-icon="lucide:check" data-width="12"></span>
<span>Free Shipping</span>
</div>
<div className="flex items-center gap-1.5">
<span className="iconify text-stone-900" data-icon="lucide:check" data-width="12"></span>
<span>Cancel Anytime</span>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-stone-50 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-stone-900" data-icon="lucide:bone" data-width="18"></span>
<span className="text-sm font-semibold tracking-tight text-stone-900 uppercase">Wag &amp; Co.</span>
</div>
<p className="text-xs text-stone-500 max-w-xs">
                        Designing the future of canine nutrition with transparency and science.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide mb-4">Product</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Science</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wide mb-4">Company</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-stone-200 pt-8">
<p className="text-[10px] text-stone-400">© 2024 Wag &amp; Co. Labs Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="14"></span></a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="14"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
