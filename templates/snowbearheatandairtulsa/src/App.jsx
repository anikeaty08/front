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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-sky-500">
<iconify-icon className="text-3xl" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter uppercase text-slate-800" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Snow Bear</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-sky-500 transition-colors" href="#services">Services</a>
<a className="hover:text-sky-500 transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-sky-500 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-sky-500 transition-colors" href="#portfolio">Our Work</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">24/7 Emergency Service</span>
<a className="text-sm font-semibold text-slate-800 hover:text-sky-500 transition-colors" href="tel:+19182369778">+1 918-236-9778</a>
</div>
<a className="bg-sky-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sky-600 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2" href="tel:+19182369778">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span>Call Now</span>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">
<div className="absolute inset-0">
<img alt="HVAC Technician working on air conditioning unit" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium uppercase tracking-wide mb-6 backdrop-blur-sm">
<iconify-icon className="text-sky-400" icon="solar:star-bold"></iconify-icon>
                    Top-Rated Tulsa HVAC Provider
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6" style={{fontFamily: '\'Quicksand\', sans-serif'}}>
                    Cool Relief &amp; Cozy Winters in Tulsa.
                </h1>
<p className="text-lg text-slate-300 mb-8 leading-relaxed font-medium max-w-xl">
                    Fast, transparent, and professional HVAC services. Don't let the unpredictable Oklahoma weather beat you. We bring upfront pricing and expert technicians right to your door.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="bg-sky-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-sky-600 transition-all shadow-lg shadow-sky-500/30 flex items-center justify-center gap-2 group" href="tel:+19182369778">
<iconify-icon className="text-xl group-hover:rotate-12 transition-transform" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        Call +1 918-236-9778
                    </a>
<a className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all flex items-center justify-center" href="#contact">
                        Get a Free Quote
                    </a>
</div>
<div className="flex items-center gap-6 text-sm text-slate-300 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-400 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                        Upfront Pricing
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-400 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
                        Faster Service
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-sky-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Licensed Pro
                    </div>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center">
<span className="text-2xl font-semibold text-slate-800 tracking-tight" style={{fontFamily: '\'Quicksand\', sans-serif'}}>3+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Years Experience</span>
</div>
<div className="flex flex-col items-center justify-center">
<div className="flex items-center gap-1 text-sky-500 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">59+ Google Reviews</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-2xl font-semibold text-slate-800 tracking-tight" style={{fontFamily: '\'Quicksand\', sans-serif'}}>5.0/5</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Average Rating</span>
</div>
<div className="flex flex-col items-center justify-center">
<iconify-icon className="text-2xl text-slate-800" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1">Licensed &amp; Insured</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Why Tulsa Residents Choose Snow Bear</h2>
<p className="text-base text-slate-500 font-medium">We built our reputation on being faster, more transparent, and more reliable than the "big box" competitors.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Honest Upfront Pricing</h3>
<p className="text-sm text-slate-500 leading-relaxed">No hidden fees or surprise charges. We provide fair, transparent quotes before any work begins so you know exactly what to expect.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Licensed &amp; Insured</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our technicians are fully certified professionals. Rest easy knowing your home and HVAC system are in highly trained hands.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Local Tulsa Roots</h3>
<p className="text-sm text-slate-500 leading-relaxed">We aren't a national franchise. We live and work in the Tulsa metro area, meaning we treat our customers like neighbors.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>100% Satisfaction</h3>
<p className="text-sm text-slate-500 leading-relaxed">Your comfort is our priority. We stand behind our craftsmanship and won't leave until your system is running perfectly.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Faster Response Times</h3>
<p className="text-sm text-slate-500 leading-relaxed">When your AC goes out in a 100°F summer, every minute counts. Our streamlined dispatch gets a tech to you quicker.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:user-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Professional Techs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our team arrives clean, courteous, and ready to work. We respect your property and leave our work area spotless.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Our Services</h2>
<p className="text-base text-slate-500 font-medium">Comprehensive heating, cooling, and air quality solutions designed to keep your home comfortable year-round.</p>
</div>
<a className="hidden lg:inline-flex bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact">
                    Request Service
                </a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors group">
<div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:wind-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>AC Repair &amp; Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Emergency cooling repairs and high-efficiency unit replacements. We'll restore your cool relief quickly when the Oklahoma summer hits its peak.</p>
<a className="text-sm font-semibold text-sky-500 hover:text-sky-600 flex items-center gap-1" href="tel:+19182369778">
                            Schedule Repair <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors group">
<div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-red-400 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:flame-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Heating Services</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Furnace repair, heat pump maintenance, and winter system tune-ups. Ensure your family stays cozy during freezing winter nights.</p>
<a className="text-sm font-semibold text-sky-500 hover:text-sky-600 flex items-center gap-1" href="tel:+19182369778">
                            Schedule Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors group">
<div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-teal-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Indoor Air Quality</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Advanced filtration systems, humidifiers, and duct inspections to reduce allergens and keep the air in your Tulsa home healthy and clean.</p>
<a className="text-sm font-semibold text-sky-500 hover:text-sky-600 flex items-center gap-1" href="#contact">
                            Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-colors group">
<div className="w-16 h-16 shrink-0 bg-white rounded-2xl flex items-center justify-center text-sky-500 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
<iconify-icon className="text-3xl" icon="solar:settings-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-800 tracking-tight mb-2" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Preventative Maintenance</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Seasonal "Snow Bear" tune-ups to extend the life of your equipment, improve efficiency, and prevent costly mid-season breakdowns.</p>
<a className="text-sm font-semibold text-sky-500 hover:text-sky-600 flex items-center gap-1" href="#contact">
                            Get a Tune-Up <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="mt-10 lg:hidden text-center">
<a className="inline-flex bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors w-full justify-center" href="#contact">
                    Request Service
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Trusted by Tulsa Customers</h2>
<p className="text-base text-slate-500 font-medium mb-8">Here's what our customers say about their experience with the Snow Bear team.</p>
<div className="inline-flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-700 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
<div className="flex items-center gap-1">
<span className="text-sky-500 font-semibold">3+</span> Years
                    </div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="flex items-center gap-1">
<span className="text-sky-500 font-semibold">59+</span> Reviews
                    </div>
<div className="w-1 h-1 bg-slate-300 rounded-full"></div>
<div className="flex items-center gap-1">
<span className="text-sky-500 font-semibold">5.0</span> Avg Rating
                    </div>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-sky-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">"Our AC went out on a 102 degree day. Snow Bear was the only company that answered and got someone out same day. The tech was super polite, explained the issue clearly, and gave a fair price upfront. Highly recommend!"</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<div>
<p className="text-sm font-semibold text-slate-800" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Sarah M.</p>
<p className="text-xs text-slate-400">Broken Arrow • AC Repair</p>
</div>
<iconify-icon className="text-lg opacity-80" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-sky-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">"Replaced our entire ancient HVAC system. The crew arrived exactly on time, worked quietly, and cleaned up everything before they left. The new system works perfectly and the price beat two other local quotes."</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<div>
<p className="text-sm font-semibold text-slate-800" style={{fontFamily: '\'Quicksand\', sans-serif'}}>James D.</p>
<p className="text-xs text-slate-400">Midtown Tulsa • Installation</p>
</div>
<iconify-icon className="text-lg opacity-80" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-sky-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">"I use them for seasonal tune-ups. Honest company that doesn't try to upsell you on things you don't need. Very transparent about the condition of my furnace. Will definitely keep using Snow Bear."</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<div>
<p className="text-sm font-semibold text-slate-800" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Robert T.</p>
<p className="text-xs text-slate-400">Jenks • Maintenance</p>
</div>
<iconify-icon className="text-lg opacity-80" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col h-full">
<div className="flex items-center gap-1 text-sky-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 flex-grow">"We were having air quality issues and they installed a new filtration system. The difference is night and day. Professional from the first call to the final walk-through. 5 stars all the way."</p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
<div>
<p className="text-sm font-semibold text-slate-800" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Emily R.</p>
<p className="text-xs text-slate-400">Owasso • Indoor Air Quality</p>
</div>
<iconify-icon className="text-lg opacity-80" icon="logos:google-icon"></iconify-icon>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors shadow-sm" href="https://maps.google.com/?cid=2642087494684231679&amp;g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="logos:google-icon"></iconify-icon>
                    See More Reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-4" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Our Recent Work</h2>
<p className="text-base text-slate-500 font-medium">Quality craftsmanship you can see. Real photos of our technicians out in the field serving the Tulsa area.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Commercial HVAC Unit Installation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/free-photo/team-replacing-old-air-conditioner_482257-78499.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">AC Unit Installation</span>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="HVAC Technician Tools" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/man-hard-hat-working-roof_1042554-5808.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-center bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 bg-[url(https://img.freepik.com/premium-photo/man-hard-hat-working-roof_1042554-5808.jpg?w=740&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">System Diagnostics</span>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Ductwork and Ventilation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover bg-center" src="https://img.freepik.com/premium-photo/responsible-african-american-worker-repairing-device-cooling-premises-rooftop-with-portable-laptop-hands-busy-man-kneeling-near-air-conditioner-beautiful-sunset-background_161094-16015.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-center bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">Duct Inspection &amp; Repair</span>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Residential AC Unit" className="transition-transform duration-500 group-hover:scale-105 w-full h-full" src="https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-center bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 bg-[url(https://img.freepik.com/free-photo/men-working-with-equipment-full-shot_23-2148921408.jpg?w=800&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">Residential Condenser Replacement</span>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Technician measuring voltage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 bg-[url(https://img.freepik.com/free-photo/engineer-assembling-hvac-unit-manometers_482257-92713.jpg?w=740&amp;q=80)] bg-cover bg-center pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">Electrical Component Repair</span>
</div>
</div>
<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Smart Thermostat Installation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://img.freepik.com/free-photo/worker-refilling-hvac-system-refrigerant_482257-90516.jpg?w=740&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-center bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 bg-[url(https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=740&amp;q=80)] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-white font-medium tracking-wide text-sm bg-sky-500/90 px-3 py-1 rounded-full backdrop-blur-sm">Smart Thermostat Setup</span>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex bg-slate-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#contact">
                    Get Your Project Started
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/50 text-slate-600 text-xs font-semibold uppercase tracking-wide mb-6">
                        About Us
                    </div>
<h2 className="text-3xl font-semibold text-slate-800 tracking-tight mb-6" style={{fontFamily: '\'Quicksand\', sans-serif'}}>About Snow Bear Heat &amp; Air</h2>
<p className="text-base text-slate-600 leading-relaxed mb-6">
                        Snow Bear Heat and Air Tulsa is a premier HVAC provider known for bringing "cool relief" to the Tulsa community. Maintaining a perfect 5.0-star rating, we have built our reputation on being faster, more transparent, and more reliable than the "big box" competitors.
                    </p>
<p className="text-base text-slate-600 leading-relaxed mb-8">
                        Whether it's a 100°F Oklahoma summer day or a freezing winter night, the Snow Bear team is recognized for our professional technicians and fair, upfront pricing. As a local business with deep roots in the community, we treat every home with the care and respect it deserves.
                    </p>
<div className="flex items-center gap-6 pt-6 border-t border-slate-200">
<div>
<p className="text-2xl font-semibold text-sky-500 tracking-tight" style={{fontFamily: '\'Quicksand\', sans-serif'}}>5.0</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Google Rating</p>
</div>
<div className="w-px h-10 bg-slate-200"></div>
<div>
<p className="text-2xl font-semibold text-sky-500 tracking-tight" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Local</p>
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">Tulsa Business</p>
</div>
</div>
</div>

<div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-100">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight mb-6" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Proudly Serving Tulsa &amp; Surrounding Areas</h3>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Tulsa</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Broken Arrow</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Jenks</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Owasso</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Bixby</span>
<span className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-slate-600 font-medium">Sand Springs</span>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-xl text-sky-500 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-800">Business Hours</p>
<p className="text-sm text-slate-500">Monday – Friday: 8:00 AM – 5:00 PM</p>
<p className="text-xs text-red-500 font-medium mt-1">Emergency service available</p>
</div>
</div>
</div>
<div className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-xl text-sky-600" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-800">The Snow Bear Guarantee</h4>
</div>
<p className="text-sm text-slate-600 leading-relaxed">We provide fair, upfront pricing before any work begins, and we guarantee 100% satisfaction on our craftsmanship.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-xl">
<div className="grid lg:grid-cols-5">

<div className="lg:col-span-2 bg-sky-500 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden">

<iconify-icon className="absolute -bottom-10 -left-10 text-[200px] text-white opacity-10 pointer-events-none" icon="solar:snowflake-linear"></iconify-icon>
<div className="relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Get in Touch</h2>
<p className="text-sky-100 text-sm leading-relaxed mb-10">
                                Need service fast? Fill out the form or call us directly. We typically respond to online requests within 24 hours, but for immediate help, calling is best.
                            </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:+19182369778">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-sky-200 font-medium uppercase tracking-wide">Call Us Directly</p>
<p className="text-lg font-semibold tracking-tight">+1 918-236-9778</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:snowbearheatandairtulsa@gmail.com">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-sky-200 font-medium uppercase tracking-wide">Email Us</p>
<p className="text-sm font-medium">snowbearheatandairtulsa@gmail.com</p>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-sky-200 font-medium uppercase tracking-wide">Location</p>
<p className="text-sm font-medium">Tulsa, Oklahoma &amp; Metro Area</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 lg:p-12 bg-white">
<form action="#" className="space-y-6" method="POST">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2" htmlFor="name">Full Name</label>
<input className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm text-slate-800" id="name" name="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm text-slate-800" id="phone" name="phone" placeholder="(918) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2" htmlFor="email">Email Address</label>
<input className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm text-slate-800" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2" htmlFor="service">Service Needed</label>
<select className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm text-slate-800 appearance-none" id="service" name="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="ac-repair">AC Repair</option>
<option value="ac-install">AC Installation</option>
<option value="heating">Heating/Furnace</option>
<option value="maintenance">Preventative Maintenance</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold tracking-wide uppercase text-slate-500 mb-2" htmlFor="message">Message</label>
<textarea className="w-full p-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all text-sm text-slate-800 resize-none" id="message" name="message" placeholder="Briefly describe your issue or project..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2" type="submit">
                                Send Message
                                <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-500 text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Ready to Get Started?</h2>
<p className="text-lg text-sky-100 font-medium mb-10">We are currently accepting new service requests. Thank you for choosing Snow Bear Heat and Air Tulsa for your home comfort needs.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="w-full sm:w-auto bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all shadow-lg flex items-center justify-center gap-2 group" href="tel:+19182369778">
<iconify-icon className="text-xl group-hover:rotate-12 transition-transform" icon="solar:phone-linear" strokeWidth="2"></iconify-icon>
                    Call Now: +1 918-236-9778
                </a>
<a className="w-full sm:w-auto bg-sky-600 border border-sky-400 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-sky-700 transition-all flex items-center justify-center" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="flex flex-wrap justify-center items-center gap-6 text-sm text-sky-100 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> Licensed &amp; Insured
                </div>
<div className="hidden sm:block w-1 h-1 bg-sky-300 rounded-full"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon> Upfront Pricing
                </div>
<div className="hidden sm:block w-1 h-1 bg-sky-300 rounded-full"></div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon> 5.0 Google Rating
                </div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12 border-b border-slate-800 pb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 text-white mb-6">
<iconify-icon className="text-3xl text-sky-500" icon="solar:snowflake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl font-semibold tracking-tighter uppercase" style={{fontFamily: '\'Quicksand\', sans-serif'}}>Snow Bear</span>
</div>
<p className="text-sm leading-relaxed mb-6 max-w-sm">
                        Bringing cool relief and cozy winters to the Tulsa metro area with transparent pricing, professional service, and a 100% satisfaction guarantee.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-lg" href="#">
<iconify-icon icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-lg" href="#">
<iconify-icon icon="mdi:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors text-lg" href="https://maps.google.com/?cid=2642087494684231679&amp;g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ3" rel="noopener noreferrer" target="_blank">
<iconify-icon className="grayscale hover:grayscale-0 transition-all" icon="logos:google-icon"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-sky-400 transition-colors" href="#services">Our Services</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#why-us">Why Choose Us</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#portfolio">Recent Work</a></li>
<li><a className="hover:text-sky-400 transition-colors" href="#reviews">Customer Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold uppercase tracking-wide mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-sky-500 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+19182369778">+1 918-236-9778</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-sky-500 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors break-all" href="mailto:snowbearheatandairtulsa@gmail.com">snowbearheatandairtulsa<br/>@gmail.com</a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-sky-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Tulsa, OK &amp; Surrounding Area</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
<p>© 2023 Snow Bear Heat and Air Tulsa. All rights reserved.</p>
<div className="flex items-center gap-4">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Fully Licensed &amp; Insured</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:home-smile-linear"></iconify-icon> Locally Owned</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
