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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#1b7df0',
green: '#0e8c4f'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-strong">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full border border-blue-200 flex items-center justify-center bg-blue-50 text-blue-600">
<i className="w-4 h-4" data-lucide="wind"></i>
</div>
<span className="text-xl font-medium tracking-tight text-slate-900">Premium HVAC</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-base font-normal text-slate-500">
<a className="hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="hover:text-blue-600 transition-colors" href="#about">About Us</a>
<a className="hover:text-blue-600 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-blue-600 transition-colors" href="#faq">FAQ</a>
</div>
<button className="bg-blue-600 text-white px-6 py-3 rounded-full text-base font-medium transition-colors flex items-center gap-2 hover:bg-blue-700 shadow-sm shadow-blue-600/20">
                Get a Quote
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center lg:justify-start pt-28 pb-20 overflow-hidden border-b border-slate-200 bg-white">
<div className="absolute inset-0 z-0">
<img alt="Modern Air Conditioning System" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent md:w-3/4"></div>
<div className="absolute inset-0 bg-white/10"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/80 backdrop-blur-md text-sm font-medium mb-8 text-blue-800 shadow-sm">
<div className="flex text-blue-600 gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="border-l border-blue-300 pl-2">Top Rated Sydney Installers</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05] mb-8 text-slate-900">
                    Uncompromising Comfort <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">For Your Home.</span>
</h1>
<ul className="flex flex-col gap-5 mb-10 text-slate-700">
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="text-blue-600 w-4 h-4" data-lucide="shield-check"></i>
</div>
<span className="font-normal text-xl tracking-tight">Licensed Master Technicians</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="text-blue-600 w-4 h-4" data-lucide="calendar-days"></i>
</div>
<span className="font-normal text-xl tracking-tight">Next-Day Installation Available</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="text-blue-600 w-4 h-4" data-lucide="banknote"></i>
</div>
<span className="font-normal text-xl tracking-tight">Upfront Pricing, No Hidden Nasties</span>
</li>
<li className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
<i className="text-blue-600 w-4 h-4" data-lucide="award"></i>
</div>
<span className="font-normal text-xl tracking-tight">Lifetime Workmanship Guarantee</span>
</li>
</ul>
<div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors flex justify-center items-center gap-2 hover:bg-blue-700 shadow-md shadow-blue-600/20" href="tel:0492738361">
<i className="w-5 h-5" data-lucide="phone"></i>
                        0492 738 361
                    </a>
<button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-medium transition-colors flex justify-center items-center gap-2 hover:border-blue-600 hover:text-blue-600 shadow-sm" type="button">
                        Get Your Free Quote
                    </button>
</div>
</div>

<div className="w-full max-w-md mx-auto lg:ml-auto">
<div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative">
<div className="absolute -inset-1 bg-gradient-to-tr from-blue-200 to-transparent blur-xl rounded-2xl opacity-60"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Need an AC Sorted?</h3>
<p className="text-base text-slate-500 mb-8">Drop your details below and we'll give you a buzz back fast.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-600">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-600">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-600">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-600">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors" placeholder="0400 000 000" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-600">What do you need?</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors appearance-none cursor-pointer">
<option className="bg-white text-slate-900">AC Repair &amp; Breakdown</option>
<option className="bg-white text-slate-900">New System Install</option>
<option className="bg-white text-slate-900">General Servicing</option>
<option className="bg-white text-slate-900">Ductwork repairs</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full mt-4 text-white bg-blue-600 hover:bg-blue-700 py-4 rounded-xl text-base font-medium transition-colors flex justify-center items-center gap-2 shadow-sm" type="button">
                                Send Details <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<div className="border-b border-slate-200 py-6 bg-blue-600 overflow-hidden flex relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-blue-600 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-600 to-transparent z-10"></div>
<div className="flex gap-16 items-center animate-[marquee_20s_linear_infinite] px-4 min-w-full">
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="wind"></i> Keep Cool All Summer
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="settings"></i> Top Quality Installs
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="shield-check"></i> Fully Insured Installers
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="crown"></i> Honest Pricing
            </div>

<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="wind"></i> Keep Cool All Summer
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="settings"></i> Top Quality Installs
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="shield-check"></i> Fully Insured Installers
            </div>
<div className="flex items-center gap-4 font-medium text-sm tracking-widest uppercase text-white/90">
<i className="w-5 h-5" data-lucide="crown"></i> Honest Pricing
            </div>
</div>
</div>

<section className="py-24 bg-slate-50/50 relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-3xl">
<h2 className="md:text-6xl text-brand-green text-4xl font-medium text-blue-400 tracking-tight mb-6">Why we're the crew for you</h2>
<p className="text-xl font-normal text-slate-700">Our friendly air conditioning experts are keen to hear from you!</p>
</div>
<div className="">
<button className="hover:bg-[#0b7040] transition-colors xl:text-blue-500 text-lg font-medium rounded-xl px-8 py-4 shadow-sm">
                        Contact Us
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="relative h-[480px] rounded-3xl overflow-hidden group">
<img alt="Technician working" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
<i className="text-white w-6 h-6" data-lucide="gem"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Guaranteed quality services</h3>
<p className="text-base text-slate-200 font-normal leading-relaxed">We deliver air conditioning services which are consistent, quality &amp; dependable.</p>
</div>
</div>

<div className="relative h-[480px] rounded-3xl overflow-hidden group">
<img alt="Technician with equipment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
<i className="text-white w-6 h-6" data-lucide="thumbs-up"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Flexible with a positive attitude</h3>
<p className="text-base text-slate-200 font-normal leading-relaxed">We are prepared to work with changes and to ensure you get exactly what you are after.</p>
</div>
</div>

<div className="relative h-[480px] rounded-3xl overflow-hidden group">
<img alt="Team working together" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
<i className="text-white w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">We stay true to our values</h3>
<p className="text-base text-slate-200 font-normal leading-relaxed">Integrity, Honesty, Respect, Responsibility. We Listen, we care, we provide.</p>
</div>
</div>

<div className="relative h-[480px] rounded-3xl overflow-hidden group">
<img alt="Happy team member" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 text-white w-full">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
<i className="text-white w-6 h-6" data-lucide="check-square"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Success-oriented teamwork</h3>
<p className="text-base text-slate-200 font-normal leading-relaxed">Our positive workplace culture reflects on the work we provide for our customers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20">
<div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-blue-600" data-lucide="layout-grid"></i>
</div>
<h2 className="md:text-5xl text-4xl font-medium text-slate-900 tracking-tight mb-6">Our AC Services</h2>
<p className="text-lg md:text-xl text-slate-600 font-normal">Everything you need to keep your home comfortable all year round.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-blue-600 border border-blue-100 bg-white group-hover:bg-blue-50 transition shadow-sm">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Supply &amp; Install</h3>
<p className="text-base mb-10 min-h-[80px] leading-relaxed text-slate-600 font-normal">Got an old clunker or building a new home? We'll sort you out with a reliable new system that runs whisper quiet.</p>
<div className="overflow-hidden rounded-xl border border-slate-200 relative h-48 bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-blue-600 border border-blue-100 bg-white group-hover:bg-blue-50 transition shadow-sm">
<i className="w-6 h-6" data-lucide="settings"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Repairs &amp; Breakdowns</h3>
<p className="text-base mb-10 min-h-[80px] leading-relaxed text-slate-600 font-normal">AC carked it on a 40-degree day? Give us a bell. We're quick at finding the fault and getting you cool again.</p>
<div className="overflow-hidden rounded-xl border border-slate-200 relative h-48 bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="group relative bg-slate-50 border border-slate-200 rounded-3xl p-10 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-8 text-blue-600 border border-blue-100 bg-white group-hover:bg-blue-50 transition shadow-sm">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Servicing &amp; Maintenance</h3>
<p className="text-base mb-10 min-h-[80px] leading-relaxed text-slate-600 font-normal">Keep the air fresh and your system running efficiently. Regular servicing saves you from nasty breakdown bills.</p>
<div className="overflow-hidden rounded-xl border border-slate-200 relative h-48 bg-white">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition duration-500" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 relative overflow-hidden bg-white" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6">How We Work</h2>
<p className="text-lg md:text-xl leading-relaxed text-slate-600 font-normal">A straightforward approach to getting your air con sorted quickly and properly, without the runaround.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">
<div className="hidden md:block absolute top-14 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
<div className="relative bg-slate-50 border border-slate-200 p-10 rounded-3xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white font-medium flex items-center justify-center rounded-xl mb-8 relative z-10 text-lg shadow-md">01</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Free Measure &amp; Quote</h3>
<p className="text-base leading-relaxed mb-8 text-slate-600 font-normal">We'll pop over, take a look at your place, and figure out exactly what size unit you need so you don't waste money.</p>
<ul className="text-sm space-y-4 text-slate-600 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> On-site Chat</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> Accurate Measurements</li>
</ul>
</div>
<div className="relative bg-slate-50 border border-slate-200 p-10 rounded-3xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white font-medium flex items-center justify-center rounded-xl mb-8 relative z-10 text-lg shadow-md">02</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Honest Advice</h3>
<p className="text-base leading-relaxed mb-8 text-slate-600 font-normal">We don't push the most expensive gear. We recommend reliable brands that suit your budget and keep the house cool.</p>
<ul className="text-sm space-y-4 text-slate-600 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> Unit Options Explained</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> Upfront Pricing</li>
</ul>
</div>
<div className="relative bg-slate-50 border border-slate-200 p-10 rounded-3xl hover:border-blue-300 hover:shadow-lg transition-all">
<div className="w-12 h-12 bg-blue-600 text-white font-medium flex items-center justify-center rounded-xl mb-8 relative z-10 text-lg shadow-md">03</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4 tracking-tight">Professional Install</h3>
<p className="text-base leading-relaxed mb-8 text-slate-600 font-normal">Our installers turn up when they say they will, get the job done properly to Aussie standards, and vacuum up before they leave.</p>
<ul className="text-sm space-y-4 text-slate-600 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> Clean Installation</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-600" data-lucide="check-circle"></i> Full System Test</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-4xl font-medium tracking-tight text-slate-900 mb-16">We Sort Out Air Con For</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-300 hover:shadow-md transition-all group cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Family Homes</h3>
<p className="text-base text-slate-600 font-normal">Complete climate control solutions to keep your entire family comfortable year-round.</p>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-300 hover:shadow-md transition-all group cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-8 h-8" data-lucide="hammer"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">New Builds</h3>
<p className="text-base text-slate-600 font-normal">Working alongside builders to integrate perfect ducted or split systems from day one.</p>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-300 hover:shadow-md transition-all group cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-8 h-8" data-lucide="store"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Local Shops</h3>
<p className="text-base text-slate-600 font-normal">Reliable cooling to keep your customers happy and your inventory perfectly climate-controlled.</p>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-300 hover:shadow-md transition-all group cursor-default flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<i className="w-8 h-8" data-lucide="building-2"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3 tracking-tight">Small Offices</h3>
<p className="text-base text-slate-600 font-normal">Efficient commercial systems designed to maintain a productive environment for your team.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-4">What Our Customers Say</h2>
<p className="text-lg text-slate-600 font-normal">Don't just take our word for it.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div>
<div className="flex text-yellow-400 mb-6 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 mb-8 leading-relaxed font-normal">"Absolutely brilliant service. The installers arrived exactly on time, were incredibly polite, and left the place spotless. The new ducted system works perfectly."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-medium text-lg shrink-0">
                            SJ
                        </div>
<div>
<div className="font-medium text-slate-900 text-base">Sarah Jenkins</div>
<div className="text-sm text-slate-500 font-normal">Homeowner, Eastern Suburbs</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex text-yellow-400 mb-6 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 mb-8 leading-relaxed font-normal">"Got three quotes and these guys were the most honest. Didn't try to upsell me. The installation was quick and they took all the old rubbish away. Highly recommend."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-medium text-lg shrink-0">
                            MP
                        </div>
<div className="">
<div className="font-medium text-slate-900 text-base">Mark Patterson</div>
<div className="text-sm text-slate-500 font-normal">Local Business Owner</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
<div className="">
<div className="flex text-yellow-400 mb-6 gap-1">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-slate-700 mb-8 leading-relaxed font-normal">"Our AC died on a 38-degree day. Called Premium HVAC and they had a crew out the next morning. Lifesavers! Very professional and fairly priced."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-medium text-lg shrink-0">
                            DT
                        </div>
<div>
<div className="font-medium text-slate-900 text-base">David &amp; Tina</div>
<div className="text-sm text-slate-500 font-normal">Family Home, North Shore</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-slate-200">
<div className="mb-16 border-l-4 border-blue-600 pl-6">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight">The Installer Promise</h2>
<p className="mt-4 max-w-xl text-lg text-slate-600 font-normal">We pride ourselves on doing a cracking job, not talking a bunch of corporate nonsense. Here's what you get with us.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="border border-slate-200 p-10 rounded-3xl transition bg-slate-50 hover:border-blue-300 hover:shadow-lg">
<div className="mb-8 w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-xl text-blue-600 border border-blue-100">
<i className="w-7 h-7" data-lucide="eye"></i>
</div>
<h4 className="text-slate-900 font-medium text-2xl mb-4 tracking-tight">No Bullshit Advice</h4>
<p className="text-base leading-relaxed text-slate-600 font-normal">If your unit just needs a $50 part to fix it, we'll tell you. We won't try to stitch you up with a brand new system if you don't need it.</p>
</div>
<div className="border border-slate-200 p-10 rounded-3xl transition bg-slate-50 hover:border-blue-300 hover:shadow-lg">
<div className="mb-8 w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-xl text-blue-600 border border-blue-100">
<i className="w-7 h-7" data-lucide="pen-tool"></i>
</div>
<h4 className="text-slate-900 font-medium text-2xl mb-4 tracking-tight">Spotless Clean-Up</h4>
<p className="text-base leading-relaxed text-slate-600 font-normal">We wear boot covers and bring our own vacs. Your home isn't a building site, and we don't leave until it's as tidy as when we got there.</p>
</div>
<div className="border border-slate-200 p-10 rounded-3xl transition bg-slate-50 hover:border-blue-300 hover:shadow-lg">
<div className="mb-8 w-14 h-14 bg-white shadow-sm flex items-center justify-center rounded-xl text-blue-600 border border-blue-100">
<i className="w-7 h-7" data-lucide="sliders"></i>
</div>
<h4 className="text-slate-900 font-medium text-2xl mb-4 tracking-tight">Built Tough</h4>
<p className="text-base leading-relaxed text-slate-600 font-normal">We only use quality copper, tough brackets, and solid ducting. Our installs are built to handle the harshest Aussie summers.</p>
</div>
</div>
</section>

<section className="max-w-3xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 border-t border-slate-200" id="faq">
<h2 className="text-4xl md:text-5xl font-medium text-center text-slate-900 mb-6 tracking-tight">Common Questions</h2>
<p className="text-center mb-16 text-lg text-slate-600 font-normal">Straight answers to what everyone asks.</p>
<div className="space-y-4">
<details className="group border border-slate-200 rounded-2xl p-6 [&amp;::-webkit-details-marker]:hidden bg-white shadow-sm hover:border-blue-300 transition">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-slate-900 font-medium text-lg md:text-xl">What's included in an install?</h3>
<span className="transition group-open:rotate-45 text-blue-500">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-6 text-base leading-relaxed text-slate-600 font-normal">
                    We bring the unit, run the pipes, wire it all up to the switchboard, install the ducts (if it's ducted), and run a full test. We also take your old unit to the tip and clean up the rubbish.
                </p>
</details>
<details className="group border border-slate-200 rounded-2xl p-6 transition [&amp;::-webkit-details-marker]:hidden bg-white shadow-sm hover:border-blue-300 open:bg-blue-50/50" open="">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-slate-900 font-medium text-lg md:text-xl">Whereabouts in Sydney do you go?</h3>
<span className="transition group-open:rotate-45 text-blue-500">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-6 text-base leading-relaxed text-slate-600 font-normal">
                    We cover most of Greater Sydney. Give us a yell if you're in the West, North Shore, Eastern Suburbs, or the Shire, and we'll let you know how quick we can get there.
                </p>
</details>
<details className="group border border-slate-200 rounded-2xl p-6 [&amp;::-webkit-details-marker]:hidden bg-white shadow-sm hover:border-blue-300 transition">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-slate-900 font-medium text-lg md:text-xl">How does getting a quote work?</h3>
<span className="transition group-open:rotate-45 text-blue-500">
<i className="w-6 h-6" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-6 text-base leading-relaxed text-slate-600 font-normal">
                    Just give us a ring or fill out the form. We'll come round for a free site check, measure up the rooms, and email you a fixed price quote. No hidden fees, what you see is what you pay.
                </p>
</details>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200">
<div className="max-w-[1300px] mx-auto px-6">
<div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 lg:p-16 border border-slate-200 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start shadow-sm">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
<div className="text-center mb-10">
<h2 className="text-4xl font-medium tracking-tight text-slate-900 mb-3">Free Quote Request</h2>
<p className="text-lg text-slate-500 font-normal">We will call ASAP to book a time</p>
</div>
<form className="space-y-5">
<div className="">
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-base bg-white transition-shadow placeholder-slate-400" placeholder="Name *" type="text"/>
</div>
<div className="">
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-base bg-white transition-shadow placeholder-slate-400" placeholder="Email address *" type="email"/>
</div>
<div>
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-base bg-white transition-shadow placeholder-slate-400" placeholder="Phone *" type="tel"/>
</div>
<div className="">
<input className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-base bg-white transition-shadow placeholder-slate-400" placeholder="Suburb *" type="text"/>
</div>
<div className="">
<textarea className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-base bg-white transition-shadow resize-none placeholder-slate-400" placeholder="Message" rows="4"></textarea>
</div>
<button className="w-full bg-brand-blue hover:bg-blue-600 text-white font-medium py-5 rounded-xl transition-colors text-base tracking-wide mt-2 shadow-sm" type="submit">
                            GET FREE QUOTE
                        </button>
</form>
</div>

<div className="lg:py-10">
<h3 className="text-3xl font-medium tracking-tight text-slate-900 mb-12">Here's what happens next...</h3>
<div className="space-y-0">

<div className="flex gap-6 relative">
<div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center font-medium text-2xl shrink-0 z-10 shadow-sm">1</div>
<div className="pb-10 border-b border-slate-200 w-full pt-1">
<h4 className="text-lg font-medium text-slate-900 mb-3 uppercase tracking-wider">Fill out form</h4>
<p className="text-lg text-slate-600 font-normal leading-relaxed">Fill out the form with your details to give us info on what you're looking for.</p>
</div>
</div>

<div className="flex gap-6 relative pt-10">
<div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center font-medium text-2xl shrink-0 z-10 shadow-sm">2</div>
<div className="pb-10 border-b border-slate-200 w-full pt-1">
<h4 className="text-lg font-medium text-slate-900 mb-3 uppercase tracking-wider">Talk to expert</h4>
<p className="text-lg text-slate-600 font-normal leading-relaxed">One of our experts will be in touch to discuss the most cost-effective solution as well as the expected delivery timeframes.</p>
</div>
</div>

<div className="flex gap-6 relative pt-10">
<div className="w-14 h-14 bg-brand-blue text-white rounded-full flex items-center justify-center font-medium text-2xl shrink-0 z-10 shadow-sm">3</div>
<div className="w-full pt-1">
<h4 className="text-lg font-medium text-slate-900 mb-3 uppercase tracking-wider">Get detailed quote</h4>
<p className="text-lg text-slate-600 font-normal leading-relaxed">You will be presented with a detailed quote and exact timeframes.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 bg-slate-900 text-slate-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full border border-blue-500 flex items-center justify-center bg-blue-600 text-white">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<span className="text-xl font-medium tracking-tight text-white">Premium HVAC</span>
</div>
<p className="text-base max-w-sm leading-relaxed text-slate-400 font-normal">
                        Sydney's reliable air con installers. We rock up on time, do a top-quality job, and make sure your house stays icy cool all summer long.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-lg mb-6">Quick Links</h4>
<ul className="space-y-4 text-base text-slate-400 font-normal">
<li><a className="hover:text-blue-400 transition" href="#services">Services</a></li>
<li><a className="hover:text-blue-400 transition" href="#process">How We Work</a></li>
<li><a className="hover:text-blue-400 transition" href="#about">About Us</a></li>
<li><a className="hover:text-blue-400 transition" href="#testimonials">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-lg mb-6">Get in Touch</h4>
<ul className="space-y-4 text-base mb-8 text-slate-400 font-normal">
<li><a className="hover:text-blue-400 transition flex items-center gap-3" href="tel:0492738361"><i className="w-4 h-4" data-lucide="phone"></i> 0492 738 361</a></li>
<li><a className="hover:text-blue-400 transition" href="#">Book a Quote</a></li>
</ul>
<div className="flex gap-5">
<a className="hover:text-white transition text-slate-500" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="hover:text-white transition text-slate-500" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
</div>
</div>
</div>
<div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-normal text-slate-500">
<p>© 2024 Premium HVAC Sydney. All Rights Reserved.</p>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="transition hover:text-slate-300" href="#">Privacy Policy</a>
<a className="transition hover:text-slate-300" href="#">Terms of Trade</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
