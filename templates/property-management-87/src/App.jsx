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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
},
blue: {
600: '#2563eb',
700: '#1d4ed8',
}
}
}
}
}

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
      

<nav className="fixed w-full z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-medium tracking-tighter text-sm">BH</span>
</div>
<span className="text-slate-900 font-medium tracking-tight text-lg">BookingHost</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#locations">Locations</a>
<a className="hover:text-slate-900 transition-colors" href="#calculator">Calculator</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#login">Owner Login</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10" href="#contact">
                    Get Free Evaluation
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6 animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Managing 1,800+ apartments across Poland
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8 animate-fade-in" style={{animationDelay: '100ms'}}>
                    Maximize your rental income without the hassle.
                </h1>
<p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl animate-fade-in" style={{animationDelay: '200ms'}}>
                    We handle everything from listing optimization to 24/7 guest communication and cleaning. Join Poland's premier property management network generating 10M PLN annually for owners.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '300ms'}}>
<button className="bg-blue-600 text-white text-base font-medium px-8 py-3.5 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
                        Calculate Your Income
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="bg-white text-slate-700 border border-slate-200 text-base font-medium px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
                        Schedule Consultation
                    </button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-20 lg:mt-32">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 py-10">
<div className="flex flex-col gap-1">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">1,800+</span>
<span className="text-sm text-slate-500 font-medium">Apartments Managed</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">10M</span>
<span className="text-sm text-slate-500 font-medium">PLN Net Profit Generated</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-sm text-slate-500 font-medium">Support &amp; Management</span>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">4.9/5</span>
<span className="text-sm text-slate-500 font-medium">Average Guest Rating</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Why owners choose BookingHost</h2>
<p className="text-slate-500 text-lg max-w-2xl">We combine technology with local expertise to deliver higher occupancy rates and premium guest experiences.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Higher Yields</h3>
<p className="text-slate-500 leading-relaxed text-sm">Our dynamic pricing algorithms adjust rates in real-time based on demand, seasonality, and local events to maximize your ROI.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Complete Passive Income</h3>
<p className="text-slate-500 leading-relaxed text-sm">Forget about key exchanges, cleaning coordination, or midnight calls. We handle 100% of the operational workload.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Transparent Reporting</h3>
<p className="text-slate-500 leading-relaxed text-sm">Track your earnings, occupancy, and reviews in real-time through our proprietary owner portal. Total financial transparency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Comprehensive Management</h2>
<p className="text-slate-500 text-lg max-w-xl">From the first photo to the final review, we cover every aspect of short-term rental management.</p>
</div>
<a className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all" href="#contact">
                    See full service details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:camera-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Pro Photography</h4>
<p className="text-sm text-slate-500">High-end staging and photography to make your listing stand out.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">24/7 Communication</h4>
<p className="text-sm text-slate-500">We respond to guest inquiries within minutes, day or night.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:broom-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">5-Star Cleaning</h4>
<p className="text-sm text-slate-500">Hotel-quality cleaning and linen service between every stay.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:key-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Check-in Management</h4>
<p className="text-sm text-slate-500">Seamless key exchange or smart lock management for guests.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:scren-cast-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Listing Optimization</h4>
<p className="text-sm text-slate-500">SEO-optimized descriptions across Airbnb, Booking.com and more.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:hammer-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Maintenance</h4>
<p className="text-sm text-slate-500">Routine checks and coordination of repairs when needed.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:card-recieved-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Payment Processing</h4>
<p className="text-sm text-slate-500">Secure handling of payments and monthly profit transfers.</p>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200/60 flex flex-col gap-4 hover:border-blue-200 transition-colors">
<iconify-icon className="text-slate-900" icon="solar:document-text-linear" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-slate-900 mb-2">Tax &amp; Legal</h4>
<p className="text-sm text-slate-500">Assistance with tourist tax collection and compliance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="calculator">
<div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Estimate your potential revenue</h2>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Discover how much your property could earn with professional management. Our optimization strategies typically increase revenue by 20-40% compared to self-management.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Based on market data from 1,800+ properties
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Includes dynamic pricing uplift
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Net revenue estimation
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors" href="#contact">
                        Get a precise custom valuation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl shadow-black/20">
<div className="flex items-center justify-between mb-8 pb-8 border-b border-slate-100">
<div>
<span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Estimated Monthly Income</span>
<div className="text-4xl font-semibold text-slate-900 mt-1 tracking-tight">4,850 PLN</div>
</div>
<div className="h-12 w-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
</div>
<div className="space-y-8">
<div>
<div className="flex justify-between text-sm font-medium mb-4">
<label>Nightly Rate</label>
<span className="text-blue-600">250 PLN</span>
</div>
<input className="w-full" max="1000" min="100" type="range" value="250"/>
</div>
<div>
<div className="flex justify-between text-sm font-medium mb-4">
<label>Occupancy Rate</label>
<span className="text-blue-600">75%</span>
</div>
<input className="w-full" max="100" min="0" type="range" value="75"/>
</div>
<div className="pt-4">
<button className="w-full bg-slate-900 text-white font-medium py-3 rounded-lg hover:bg-slate-800 transition-all shadow-lg">
                                Start Earning Today
                            </button>
</div>
<p className="text-xs text-center text-slate-400">Estimate only. Actual returns depend on location and property standard.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight mb-4">Onboarding is simple</h2>
<p className="text-slate-500 text-lg">We can have your property listed and earning within 7 days.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-100 -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
<span className="text-2xl font-semibold text-slate-300">01</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Free Evaluation</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">We visit your property to assess its potential and suggest improvements for maximum ROI.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
<span className="text-2xl font-semibold text-slate-300">02</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Setup &amp; Listing</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">We take professional photos, create listings, and set up dynamic pricing strategies.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-100 rounded-full flex items-center justify-center mb-6 shadow-sm z-10">
<span className="text-2xl font-semibold text-blue-600">03</span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Earn Passive Income</h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">We handle guests and maintenance. You receive monthly payments and detailed reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
<div className="grid md:grid-cols-5">
<div className="md:col-span-2 bg-slate-900 p-10 text-white flex flex-col justify-between">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-4">Get your free property evaluation</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-8">Fill out the form and our local expert will contact you within 24 hours with a revenue forecast.</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:phone-linear"></iconify-icon>
                                +48 123 456 789
                            </div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:letter-linear"></iconify-icon>
                                owners@bookinghost.com
                            </div>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear"></iconify-icon>
                                Warsaw, Krakow, Gdansk, Wroclaw
                            </div>
</div>
</div>
<div className="md:col-span-3 p-10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">First Name</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Last Name</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email Address</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Property City</label>
<div className="relative">
<select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm appearance-none">
<option>Warsaw</option>
<option>Krakow</option>
<option>Gdansk</option>
<option>Wroclaw</option>
<option>Poznan</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Apartment Size (m²)</label>
<input className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm" type="number"/>
</div>
<button className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 mt-4" type="button">
                                Request Evaluation
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-bold tracking-tighter text-xs">BH</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">BookingHost</span>
</div>
<p className="text-sm text-slate-500 mb-6">
                        Poland's leading short-term rental management company. Managing 1,800+ apartments with care and precision.
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Management</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Interior Design</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Cleaning</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Locations</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Warsaw</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Krakow</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Gdansk</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Wroclaw</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 BookingHost. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms of Service</a>
<a className="hover:text-slate-900" href="#">GDPR</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
