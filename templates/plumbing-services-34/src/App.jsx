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
      

<nav className="absolute top-0 left-0 w-full z-50 border-b border-white/10 bg-slate-900/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 text-white" href="#">
<img alt="Orchid Plumbing Logo" className="h-10 w-auto object-contain bg-white/10 p-1 rounded" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2021/12/newest-1.png"/>
<span className="text-xl font-medium tracking-tight hidden sm:block">Orchid Plumbing</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-white hover:text-orange-400 transition-colors" href="#">Home</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Shop</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Projects</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Contact</a>
</div>
<a className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-normal transition-all flex items-center gap-2" href="tel:0720379100">
                Call Us
                <iconify-icon height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Plumbing Background" className="w-full h-full object-cover" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2023/11/Plumbing-company-Kenya-1.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-sky-950/95 via-sky-900/80 to-sky-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<span className="text-orange-400 font-normal tracking-wide uppercase text-sm">#Best Plumbers in Nairobi</span>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Expert Plumbers for Home &amp; Commercial Needs.
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    We provide a wide range of professional services, from instant shower installations to emergency leak repairs across all Nairobi estates.
                </p>
<div className="pt-4">
<div className="flex items-center gap-2">
<span className="text-3xl font-medium text-white tracking-tight">4.8</span>
<div className="flex text-orange-500">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<p className="text-slate-300 text-sm">Based on 125+ Google reviews</p>
</div>
</div>

<div className="glass-panel p-8 md:p-10 rounded-2xl text-white">
<h3 className="text-2xl font-medium tracking-tight mb-2">Request a service</h3>
<p className="text-slate-300 text-sm mb-8">Book a free appointment with our Nairobi experts. No fees, no pressure, just honest advice.</p>
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">First name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Last name</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Email Address</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Phone No</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="tel"/>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-normal text-slate-300">Location (Estate)</label>
<input className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm" placeholder="" type="text"/>
</div>
<div className="space-y-1 relative">
<label className="text-xs font-normal text-slate-300">Required Service</label>
<select className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm appearance-none text-white">
<option className="text-slate-900">Plumbing Repair</option>
<option className="text-slate-900">Water Heater Setup</option>
<option className="text-slate-900">Drain &amp; Sewer</option>
</select>
<iconify-icon className="absolute right-0 bottom-3 text-slate-300 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-normal text-slate-300">Write your message</label>
<textarea className="w-full bg-transparent border-b border-slate-400/50 focus:border-white outline-none py-2 transition-colors text-sm resize-none" rows="1"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-normal py-3 rounded-full mt-4 transition-colors" type="button">
                        Request a service
                    </button>
</form>
</div>
</div>
</header>

<div className="bg-sky-950 py-6 overflow-hidden whitespace-nowrap">
<div className="flex items-center gap-12 text-white font-medium text-xl md:text-2xl tracking-tight justify-center">
<span>Residential Plumbing</span>
<span className="text-orange-500">•</span>
<span>Commercial Works</span>
<span className="text-orange-500">•</span>
<span>Instant Showers</span>
<span className="text-orange-500">•</span>
<span>Kitchen &amp; Wardrobes</span>
<span className="text-orange-500">•</span>
<span>Drain Cleaning</span>
</div>
</div>

<section className="bg-slate-50 py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="inline-block bg-sky-100 text-sky-700 text-xs font-medium px-3 py-1 rounded-full mb-6">OUR CORE VALUES</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-sky-950 tracking-tight leading-tight mb-8">
                    What makes Orchid the right choice for you
                </h2>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Quality Services &amp; Products</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Absolute Trustworthiness</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">100% Customer Satisfaction</span>
</div>
<div className="flex items-center gap-4">
<div className="bg-green-500 rounded-full p-1 flex items-center justify-center">
<iconify-icon className="text-white" height="16" icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<span className="text-xl text-sky-900 font-normal tracking-tight">Fast Emergency Response</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Residential plumbing works" className="w-full h-full object-cover" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2023/12/Plumbing-in-Nairobi-3.png"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">OUR SERVICES</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                    One Plumbing Partner for Your Home and Office.
                </h2>
<p className="text-lg text-slate-500 leading-relaxed">
                    Simplify your plumbing needs with one trusted Nairobi provider that handles residential and commercial jobs with professionalism, speed, and care.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">01.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:home-angle-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Residential Plumbing</h3>
<p className="text-slate-500 leading-relaxed text-sm">Experience excellence in every drop. From fixing leaks to installing new fixtures, we handle it all with precision.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">02.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:buildings-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Commercial Works</h3>
<p className="text-slate-500 leading-relaxed text-sm">Tired of plumbing nightmares at your commercial property? We successfully tackle challenging plumbing projects.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">03.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:waterdrops-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Water Heater Services</h3>
<p className="text-slate-500 leading-relaxed text-sm">Reliable solutions for all your water heating needs. Say goodbye to cold showers and embrace uninterrupted hot water.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">04.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:washing-machine-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Kitchens &amp; Wardrobes</h3>
<p className="text-slate-500 leading-relaxed text-sm">Building a new home or remodeling? Our plumbers are always on standby for professional kitchen piping assistance.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">05.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:routing-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Drain and Sewer</h3>
<p className="text-slate-500 leading-relaxed text-sm">Complete pipe, drain cleaning, and underground pipe replacements to detect and prevent major flow issues.</p>
</div>

<div className="bg-slate-50 hover:bg-white p-8 rounded-xl border border-transparent hover:border-slate-100 hover:shadow-xl transition-all duration-300 group">
<span className="text-sky-800 font-normal text-sm mb-4 block">06.</span>
<div className="mb-6">
<iconify-icon className="text-sky-700" height="40" icon="solar:bath-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-sky-950 mb-3 group-hover:text-orange-500 transition-colors">Instant Showers</h3>
<p className="text-slate-500 leading-relaxed text-sm">Looking to upgrade? We supply, replace and install advanced instant water heater showers professionally.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">OUR SHOP</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight mb-4">
                        Where Quality Meets Experience
                    </h2>
<p className="text-lg text-slate-500 max-w-2xl">
                        We are a top plumbing company in Nairobi selling high-quality equipment, instant showers, and water boilers directly to you.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sky-700 font-normal hover:text-orange-500 transition-colors border-b border-sky-700 hover:border-orange-500 pb-0.5" href="#">
                    View full shop
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
<div className="relative h-[300px] p-6 bg-slate-50 flex items-center justify-center">
<span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded font-normal">Sale!</span>
<img alt="Midea Storage Tank" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2023/12/water-heaters-Kenya-2-300x300.jpeg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Water Heaters</span>
<h3 className="text-lg font-medium tracking-tight text-sky-950 mb-2 leading-tight flex-grow">15 Litres Undersink Water Heater Midea Storage Tank</h3>
<div className="flex items-center gap-3 mt-4 mb-6">
<span className="text-slate-400 line-through text-sm">KSh 24,000</span>
<span className="text-sky-900 font-medium text-lg">KSh 23,500</span>
</div>
<button className="w-full border border-slate-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white text-sky-950 font-normal py-2.5 rounded-lg transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-large-2-linear" width="18"></iconify-icon>
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
<div className="relative h-[300px] p-6 bg-slate-50 flex items-center justify-center">
<span className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded font-normal">Sale!</span>
<img alt="Alpha Instant Shower" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2023/12/Alpha-AS-2i-Silent-pump-with-rain-shower-1-300x300.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Instant Showers</span>
<h3 className="text-lg font-medium tracking-tight text-sky-950 mb-2 leading-tight flex-grow">Alpha Instant Shower AS2i Silent Pump Plus Rain Shower</h3>
<div className="flex items-center gap-3 mt-4 mb-6">
<span className="text-slate-400 line-through text-sm">KSh 61,500</span>
<span className="text-sky-900 font-medium text-lg">KSh 60,000</span>
</div>
<button className="w-full border border-slate-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white text-sky-950 font-normal py-2.5 rounded-lg transition-all flex items-center justify-center gap-2">
<iconify-icon height="18" icon="solar:cart-large-2-linear" width="18"></iconify-icon>
                            Add to cart
                        </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col group">
<div className="relative h-[300px] p-6 bg-slate-50 flex items-center justify-center">
<img alt="Atlantic Water Boiler" className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2023/12/17-300x300.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<span className="text-xs text-slate-400 mb-2 uppercase tracking-wide">Water Boilers</span>
<h3 className="text-lg font-medium tracking-tight text-sky-950 mb-2 leading-tight flex-grow">Atlantic Water Boiler (100Lts)</h3>
<div className="flex items-center gap-3 mt-4 mb-6">
<span className="text-sky-900 font-medium text-lg">KSh 48,000</span>
</div>
<button className="w-full border border-slate-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white text-sky-950 font-normal py-2.5 rounded-lg transition-all flex items-center justify-center gap-2 mt-auto">
<iconify-icon height="18" icon="solar:cart-large-2-linear" width="18"></iconify-icon>
                            Add to cart
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block bg-orange-100 text-orange-600 text-xs font-medium px-3 py-1 rounded-full mb-4">FAQ</span>
<h2 className="text-3xl md:text-4xl font-medium text-sky-950 tracking-tight">
                    Frequently asked questions
                </h2>
<p className="text-slate-500 mt-4 text-lg">Find clear answers to common questions about our services across Nairobi.</p>
</div>
<div className="space-y-4">

<div className="bg-slate-50 border border-slate-100 rounded-lg p-6 shadow-sm">
<div className="flex justify-between items-start cursor-pointer">
<h3 className="font-medium text-sky-950 text-lg tracking-tight">Do you operate in all Nairobi estates?</h3>
<iconify-icon className="text-slate-400 shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
</div>
<p className="mt-3 text-slate-500 leading-relaxed text-sm">
                        Yes, our plumbers or technicians are located in every estate in Nairobi and are ready to provide quality, affordable solutions quickly to minimize damage and keep costs in check.
                    </p>
</div>

<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-medium text-sky-950 text-lg tracking-tight group-hover:text-sky-800">Do you handle plumbing emergencies?</h3>
<iconify-icon className="text-slate-400 shrink-0" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-medium text-sky-950 text-lg tracking-tight group-hover:text-sky-800">Do you supply and install instant showers?</h3>
<iconify-icon className="text-slate-400 shrink-0" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
<div className="bg-white border border-slate-100 rounded-lg p-6 hover:bg-slate-50 transition-colors cursor-pointer group">
<div className="flex justify-between items-center">
<h3 className="font-medium text-sky-950 text-lg tracking-tight group-hover:text-sky-800">Are your materials guaranteed?</h3>
<iconify-icon className="text-slate-400 shrink-0" height="20" icon="solar:add-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-sky-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-3">
<img alt="Orchid Plumbing Logo" className="h-10 w-auto bg-white/10 p-1 rounded" src="https://www.plumbingcompany.co.ke/wp-content/uploads/2021/12/newest-1.png"/>
<span className="text-xl font-medium tracking-tight">Orchid Plumbing</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
                        Nairobi based plumbing contractor providing professional and guaranteed materials and services for residential and commercial clients.
                    </p>
</div>

<div>
<h4 className="font-medium text-white mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> About Orchid</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Testimonials</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Company Profile</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Refund &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 bg-slate-500 rounded-full"></span> Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                            0720379100 / 0792259881
                        </li>
<li className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
                            info@plumbingcompany.co.ke
                        </li>
</ul>
</div>

<div>
<h4 className="font-medium text-white mb-6">Location</h4>
<div className="flex gap-3 text-sm text-slate-400 leading-relaxed">
<iconify-icon className="shrink-0 mt-0.5" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<p>
                            Block C, Westlands Commercial Centre<br/>
                            Nairobi, Kenya
                        </p>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">Copyright © 2024 Orchid Plumbing Company, All Rights Reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon height="18" icon="solar:globus-linear" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
