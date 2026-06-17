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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFDFD]/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-orange-600 rounded-sm"></div>
                Gold Coast
            </a>
<button className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-slate-800 transition-colors">
                Book Visit
            </button>
</div>
</nav>

<section className="pt-32 pb-16 lg:pt-40 lg:pb-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-5 flex flex-col justify-between h-full relative z-10">
<div className="mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Exclusive Island Living
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95] text-slate-900 mb-8">
                        Your Island.<br/>
<span className="text-slate-400">Your Life.</span>
</h1>
<p className="text-lg text-slate-600 leading-relaxed max-w-md">
                        A fusion of Mediterranean sophistication and contemporary Caribbean charm. Constructed to the highest standards in the heart of Aruba.
                    </p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<p className="text-sm font-medium text-slate-900 mb-4 flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="info"></i>
                        Request Information
                    </p>
<form className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-slate-50 border-0 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="First Name" type="text"/>
<input className="w-full bg-slate-50 border-0 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Last Name" type="text"/>
</div>
<input className="w-full bg-slate-50 border-0 rounded-lg px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="Email Address" type="email"/>
<button className="w-full py-2.5 bg-slate-900 hover:bg-orange-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                            Contact Agent <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>

<div className="lg:col-span-7 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>
<div className="p-4 bg-slate-100 rounded-2xl">
<p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Location</p>
<p className="text-sm font-medium">Malmok, Aruba</p>
</div>
</div>
<div className="space-y-4">
<div className="p-4 bg-orange-50 rounded-2xl">
<p className="text-xs font-semibold uppercase tracking-wider text-orange-600 mb-1">Status</p>
<p className="text-sm font-medium text-orange-900">Now Selling Phase 4</p>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Curated Amenities</h2>
<p className="text-slate-500 mt-2 text-lg">Designed for wellness, leisure, and comfort.</p>
</div>
<a className="text-sm font-medium text-slate-900 border-b border-slate-300 pb-0.5 hover:border-slate-900 transition-colors" href="#">View Master Plan</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-3xl bg-slate-100 h-96">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1572331165267-854da2b00cc6?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-4 text-white">
<i className="w-5 h-5" data-lucide="waves"></i>
</div>
<h3 className="text-white text-xl font-medium">3 Community Pools</h3>
<p className="text-white/80 text-sm mt-1">Resort-style lounging areas</p>
</div>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<i className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-4" data-lucide="shield-check"></i>
<h3 className="font-medium text-slate-900">24/7 Security</h3>
<p className="text-sm text-slate-500 mt-2">Gated community peace of mind.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<i className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-4" data-lucide="dumbbell"></i>
<h3 className="font-medium text-slate-900">Fitness Center</h3>
<p className="text-sm text-slate-500 mt-2">State of the art equipment.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<i className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-4" data-lucide="utensils"></i>
<h3 className="font-medium text-slate-900">Fine Dining</h3>
<p className="text-sm text-slate-500 mt-2">Restaurant on premises.</p>
</div>
<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<i className="w-8 h-8 text-slate-400 group-hover:text-orange-500 transition-colors mb-4" data-lucide="trophy"></i>
<h3 className="font-medium text-slate-900">Tennis Courts</h3>
<p className="text-sm text-slate-500 mt-2">Professional grade courts.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Available Models</h2>
<div className="flex flex-col gap-6">

<div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="md:w-1/3 aspect-[16/10] overflow-hidden rounded-xl relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-slate-900">Duplex</span>
</div>
<div className="md:w-2/3 pr-4 pb-4 md:pb-0">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-slate-900">The Modern Duplex</h3>
<p className="text-slate-500 text-sm mt-1">Perfect for families seeking balance.</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-semibold text-slate-900">$450,000</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-slate-100">
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bedrooms</span>
<span className="font-medium text-slate-700">2 Beds</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bathrooms</span>
<span className="font-medium text-slate-700">2.5 Baths</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Area</span>
<span className="font-medium text-slate-700">126 m²</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Available
                                </span>
<button className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">
                                    View Details <i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="md:w-1/3 aspect-[16/10] overflow-hidden rounded-xl relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-slate-900">Villa</span>
</div>
<div className="md:w-2/3 pr-4 pb-4 md:pb-0">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-slate-900">Villa Daimari</h3>
<p className="text-slate-500 text-sm mt-1">Expansive luxury with private amenities.</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-semibold text-slate-900">$680,000</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-slate-100">
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bedrooms</span>
<span className="font-medium text-slate-700">3 Beds</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bathrooms</span>
<span className="font-medium text-slate-700">2.5 Baths</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Area</span>
<span className="font-medium text-slate-700">200 m²</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-slate-500 text-xs font-medium bg-slate-100 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Waitlist
                                </span>
<button className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">
                                    View Details <i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl p-2 border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300">
<div className="flex flex-col md:flex-row gap-6 md:items-center">
<div className="md:w-1/3 aspect-[16/10] overflow-hidden rounded-xl relative">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2 py-1 rounded text-slate-900">Condo</span>
</div>
<div className="md:w-2/3 pr-4 pb-4 md:pb-0">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-slate-900">Andicuri</h3>
<p className="text-slate-500 text-sm mt-1">Efficient layout for modern living.</p>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-semibold text-slate-900">$295,000</p>
</div>
</div>
<div className="grid grid-cols-3 gap-4 my-6 py-4 border-y border-slate-100">
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bedrooms</span>
<span className="font-medium text-slate-700">1 Beds</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Bathrooms</span>
<span className="font-medium text-slate-700">1 Baths</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 uppercase">Area</span>
<span className="font-medium text-slate-700">60 m²</span>
</div>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-green-600"></div> Available
                                </span>
<button className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:gap-2 transition-all">
                                    View Details <i className="w-4 h-4 text-slate-400" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="relative h-[500px] w-full bg-slate-200">
<iframe allowfullscreen="" className="opacity-60 hover:opacity-100 hover:filter-none transition-all duration-700" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.20146369064!2d-70.0465545!3d12.6071855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8537578502f92d%3A0x8e6e87f865f17105!2sGold%20Coast%20Aruba!5e0!3m2!1sen!2sus!4v1689654123456!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center">
<div className="bg-white/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-xl flex items-center gap-4">
<div className="bg-orange-100 p-2 rounded-lg">
<i className="w-6 h-6 text-orange-600" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-semibold text-slate-900">Explore the Area</h4>
<p className="text-xs text-slate-500">Diamante 300, Noord, Aruba</p>
</div>
</div>
</div>
</div>

<section className="bg-[#0A0A0A] py-24 relative overflow-hidden text-white">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<h2 className="text-4xl font-semibold tracking-tight mb-8">Why Invest in Aruba?</h2>
<div className="space-y-12">

<div className="flex gap-6 group">
<span className="text-4xl font-light text-white/20 group-hover:text-orange-500 transition-colors">01</span>
<div>
<h3 className="text-lg font-medium text-white mb-2">Safety &amp; Stability</h3>
<p className="text-slate-400 leading-relaxed">Ranked as one of the safest destinations in the world. Located outside the hurricane belt for year-round peace of mind.</p>
</div>
</div>

<div className="flex gap-6 group">
<span className="text-4xl font-light text-white/20 group-hover:text-orange-500 transition-colors">02</span>
<div>
<h3 className="text-lg font-medium text-white mb-2">Ownership Freedom</h3>
<p className="text-slate-400 leading-relaxed">No legal restrictions on foreign property ownership. Barrier-less immigration with the United States.</p>
</div>
</div>

<div className="flex gap-6 group">
<span className="text-4xl font-light text-white/20 group-hover:text-orange-500 transition-colors">03</span>
<div>
<h3 className="text-lg font-medium text-white mb-2">The "One Happy Island"</h3>
<p className="text-slate-400 leading-relaxed">Residents are extremely welcoming, with a Happiness Index at 78%. A high quality of life awaits.</p>
</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
<div className="mb-6">
<h3 className="text-xl font-medium">Request Investment Guide</h3>
<p className="text-slate-400 text-sm mt-1">Detailed ROI projections and legal framework.</p>
</div>
<form className="space-y-4">
<input className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Work Email" type="email"/>
<div className="relative">
<select className="w-full bg-transparent border border-white/20 rounded-lg px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 appearance-none">
<option className="bg-slate-900">United States</option>
<option className="bg-slate-900">Canada</option>
<option className="bg-slate-900">Europe</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" data-lucide="chevron-down"></i>
</div>
<button className="w-full bg-white text-slate-900 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors">
                            Download PDF
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Resident Stories</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl relative">
<i className="absolute top-8 right-8 text-slate-200 w-8 h-8" data-lucide="quote"></i>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
                        "Muy cómodo, excelente apartamento con todos los servicios. The location is absolutely perfect."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">AC</div>
<p className="text-sm font-medium text-slate-900">Analia Citerio</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<i className="absolute top-8 right-8 text-slate-200 w-8 h-8" data-lucide="quote"></i>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
                        "Unit was clean and stocked with everything we needed. Grounds were beautiful. On-site restaurant is reasonable."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">DF</div>
<p className="text-sm font-medium text-slate-900">Diane French</p>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<i className="absolute top-8 right-8 text-slate-200 w-8 h-8" data-lucide="quote"></i>
<div className="flex gap-1 mb-6">
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
<i className="w-4 h-4 text-orange-500 fill-orange-500" data-lucide="star"></i>
</div>
<p className="text-slate-700 mb-6 leading-relaxed">
                        "Beautiful property and our house was immaculate. The most well stocked home we've rented."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center text-xs font-bold text-slate-600">TK</div>
<p className="text-sm font-medium text-slate-900">Tori Klass</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 mb-4" href="#">
<div className="w-3 h-3 bg-slate-900 rounded-sm"></div>
                        Gold Coast
                    </a>
<p className="text-slate-500 text-sm leading-relaxed pr-4">
                        Exclusive residential complex in Noord, Aruba. Setting the tone for a luxurious life.
                    </p>
</div>
<div>
<h5 className="font-medium text-slate-900 mb-4 text-sm">Property</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Models</a></li>
<li><a className="hover:text-slate-900" href="#">Amenities</a></li>
<li><a className="hover:text-slate-900" href="#">Master Plan</a></li>
<li><a className="hover:text-slate-900" href="#">Availability</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-slate-900 mb-4 text-sm">Company</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">About Us</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
<li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-slate-900 mb-4 text-sm">Get in Touch</h5>
<p className="text-sm text-slate-500 mb-2">+297 586 2200</p>
<p className="text-sm text-slate-500">info@goldcoastaruba.com</p>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Cas Bon Group. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="instagram"></i>
<i className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="facebook"></i>
<i className="w-4 h-4 text-slate-400 hover:text-slate-900 cursor-pointer" data-lucide="twitter"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
