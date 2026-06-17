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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-neutral-900 uppercase">Jibon<span className="text-neutral-400">Aruba</span></div>
<button className="bg-neutral-900 text-white text-xs font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors duration-300">
                Inquire Now
            </button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0">

<img alt="Luxury Villa" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="text-white space-y-6">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-xs font-medium tracking-wide backdrop-blur-sm">
                    PREMIUM REAL ESTATE
                </span>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                    Experience the pinnacle of island living.
                </h1>
<p className="text-lg text-neutral-200 font-light max-w-lg leading-relaxed">
                    Discover our exclusive collection of modern residences in the heart of Aruba. A perfect blend of tropical tranquility and architectural elegance.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-2xl shadow-black/20 lg:ml-auto w-full max-w-md">
<h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">Register your interest</h3>
<p className="text-sm text-neutral-500 mb-6">Fill out the form below to receive our exclusive brochure.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Full Name</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="John Doe" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Phone</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="+1 (555)" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Email</label>
<input className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Message</label>
<textarea className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400 min-h-[100px]" placeholder="I am interested in..."></textarea>
</div>
<button className="w-full bg-neutral-900 text-white font-medium text-sm py-3.5 rounded-lg hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-900/10" type="button">
                        Get More Details
                    </button>
</form>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-4">Exceptional Amenities</h2>
<p className="text-neutral-500 font-light text-sm leading-relaxed">Designed for comfort, convenience, and a luxurious lifestyle. Every detail has been carefully considered to elevate your living experience.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">Private Pool</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">24/7 Security</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:dumbbell" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">Fitness Center</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:trees" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">Tropical Gardens</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:car" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">Private Parking</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:wifi" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">High-Speed Fiber</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:sun" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">Solar Panels</span>
</div>

<div className="flex flex-col items-center text-center group cursor-default">
<div className="w-14 h-14 rounded-2xl bg-neutral-50 flex items-center justify-center text-neutral-800 mb-4 group-hover:bg-neutral-100 transition-colors">
<iconify-icon icon="lucide:utensils" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-900">BBQ Area</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-2">Available Models</h2>
<p className="text-neutral-500 font-light text-sm">Choose the layout that fits your lifestyle perfectly.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Model A" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-neutral-900">The Azure Villa</h3>
<span className="text-sm font-medium text-neutral-900">$450,000</span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-neutral-100 mb-6">
<div className="text-center">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bed" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">3 Beds</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bath" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">2 Baths</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">145 m²</span>
</div>
</div>
<button className="w-full py-3 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                            More details
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Model B" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-neutral-900">The Coral Residence</h3>
<span className="text-sm font-medium text-neutral-900">$525,000</span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-neutral-100 mb-6">
<div className="text-center">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bed" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">3 Beds</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bath" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">3 Baths</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">180 m²</span>
</div>
</div>
<button className="w-full py-3 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                            More details
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-300 group">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Model C" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-neutral-900">The Oasis Estate</h3>
<span className="text-sm font-medium text-neutral-900">$680,000</span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-neutral-100 mb-6">
<div className="text-center">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bed" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">4 Beds</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:bath" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">4 Baths</span>
</div>
<div className="text-center border-l border-neutral-100">
<div className="flex items-center justify-center gap-1.5 text-neutral-400 mb-1">
<iconify-icon icon="lucide:maximize" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-xs text-neutral-600">220 m²</span>
</div>
</div>
<button className="w-full py-3 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                            More details
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full h-[500px] relative bg-neutral-200 group overflow-hidden">

<div className="absolute inset-0 bg-neutral-300 flex items-center justify-center">
<div className="text-center space-y-3">
<iconify-icon className="text-neutral-500" icon="lucide:map-pin" width="32"></iconify-icon>
<p className="text-neutral-600 font-medium">Interactive Map View</p>
<p className="text-xs text-neutral-400">Navigate to explore the location</p>
</div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs border border-white/50">
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Prime Location</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Located in the exclusive northern district, just 5 minutes from the finest beaches.</p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div>
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-8">5 Reasons Why to Invest in Aruba</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Stable Economy</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Aruba has one of the highest standards of living in the Caribbean and a consistently stable economic environment.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">High Rental Demand</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Year-round tourism drives strong demand for short-term vacation rentals, ensuring excellent ROI.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Safety &amp; Infrastructure</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Known as one of the safest islands, with modern infrastructure, utilities, and healthcare systems.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Tax Incentives</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Favorable tax regimes for foreign investors and property owners make investment attractive.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 min-w-[24px] h-6 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check" strokeWidth="2" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-1">Perfect Climate</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Located outside the hurricane belt with sunny weather year-round, protecting your asset value.</p>
</div>
</li>
</ul>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
<h3 className="text-lg font-medium text-neutral-900 mb-2">Speak to an Investment Specialist</h3>
<p className="text-xs text-neutral-500 mb-6">Learn more about ROI and ownership costs.</p>
<form className="space-y-4">
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="Full Name" type="text"/>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="Email Address" type="email"/>
<input className="w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 focus:border-neutral-400 transition-all placeholder:text-neutral-400" placeholder="Phone Number" type="tel"/>
<button className="w-full bg-neutral-900 text-white font-medium text-sm py-3 rounded-lg hover:bg-neutral-800 transition-colors" type="button">
                            Request Consultation
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-16 text-center">What Our Clients Say</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"The entire process was seamless. The team at Jibon Casbon guided us through every step of purchasing our vacation home. Truly professional service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-semibold">SA</div>
<div>
<h4 className="text-sm font-medium text-white">Sarah Anderson</h4>
<p className="text-xs text-neutral-500">Investor, USA</p>
</div>
</div>
</div>

<div className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Excellent quality of construction and attention to detail. We are absolutely in love with the layout and the community amenities."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-semibold">MK</div>
<div>
<h4 className="text-sm font-medium text-white">Michael Klein</h4>
<p className="text-xs text-neutral-500">Homeowner, Germany</p>
</div>
</div>
</div>

<div className="bg-neutral-800/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Investing in Aruba seemed daunting until we met this team. They provided clear data and handled all legalities perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-semibold">DR</div>
<div>
<h4 className="text-sm font-medium text-white">David Ross</h4>
<p className="text-xs text-neutral-500">Investor, Canada</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-2">
<div className="text-xl font-semibold tracking-tight text-neutral-900 uppercase mb-6">Jibon<span className="text-neutral-400">Aruba</span></div>
<p className="text-sm text-neutral-500 leading-relaxed max-w-sm">
                        Leading the way in luxury real estate development. We create spaces that inspire, using sustainable practices and modern design principles to define the future of island living.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Properties</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Amenities</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-6">Contact</h4>
<ul className="space-y-4">
<li className="text-sm text-neutral-500 flex items-start gap-3">
<iconify-icon className="mt-0.5 text-neutral-400" icon="lucide:map-pin"></iconify-icon>
                            L.G. Smith Blvd 120, Oranjestad, Aruba
                        </li>
<li className="text-sm text-neutral-500 flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:phone"></iconify-icon>
                            +297 555 1234
                        </li>
<li className="text-sm text-neutral-500 flex items-center gap-3">
<iconify-icon className="text-neutral-400" icon="lucide:mail"></iconify-icon>
                            info@jiboncasbon.com
                        </li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Jibon Casbon Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
