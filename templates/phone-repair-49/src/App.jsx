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


document.write(new Date().getFullYear())
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="https://mayfieldphonerepair.com">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-105">
<iconify-icon height="18" icon="lucide:smartphone-nfc" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">Mayfield Repairs</span>
</a>
<nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-slate-500 uppercase tracking-wide">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#booking">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="tel:0240491735">
<iconify-icon height="14" icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
            02 4049 1735
          </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm" href="#booking">
            Book Repair
          </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(to_bottom,white,transparent)] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="hero-copy fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Same Day Phone Repair Newcastle
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
            Mobile Phone Repairs <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-400">Newcastle NSW.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed font-light">
            Expert iPhone screen repair Mayfield, Samsung battery replacement, and tablet fixes. Visit our shop at 276 Maitland Rd for fast, reliable service.
          </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200/50 group" href="#booking">
              Get a Quote
              <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all" href="tel:0240491735">
<iconify-icon className="mr-2" height="16" icon="lucide:phone-call" width="16"></iconify-icon>
              Call 02 4049 1735
            </a>
</div>
<ul className="flex flex-wrap gap-y-2 gap-x-6 text-xs font-medium text-slate-500 uppercase tracking-wide">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:check-circle" width="16"></iconify-icon>
              Lowest Price Guarantee
            </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="lucide:clock" width="16"></iconify-icon>
              Open 7 Days
            </li>
</ul>
</div>
<div className="relative fade-in-up delay-200">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-200 aspect-[4/3] group">
<img alt="iPhone Screen Repair Mayfield" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<div className="text-xs font-medium opacity-90 uppercase tracking-wider mb-1">Located in Mayfield</div>
<div className="text-lg font-semibold">Premium Quality Parts</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
<div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<div className="text-slate-900 font-semibold text-sm">276 Maitland Rd</div>
<div className="text-slate-500 text-xs">Mayfield, Newcastle</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/80 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="text-slate-500 font-light">From cheap mobile phone repair in Newcastle to complex motherboard diagnostics. We fix it all.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">iPhone Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Professional iPhone screen repair Mayfield. We fix cracked glass, LCDs, and Face ID issues quickly.</p>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 mt-auto" href="https://mayfieldphonerepair.com">
              Read More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:monitor-smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Samsung &amp; Android</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Samsung phone repair Mayfield. Genuine parts for Galaxy S series, Pixel, and other Android devices.</p>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 mt-auto" href="https://mayfieldphonerepair.com">
              Read More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:tablet" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">iPad &amp; Tablet</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">iPad and tablet repair Mayfield. Charging ports, batteries, and broken screens fixed same-day.</p>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 mt-auto" href="https://mayfieldphonerepair.com">
              Read More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</article>

<article className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center mb-6">
<iconify-icon icon="lucide:laptop" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Laptop Repairs</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">Laptop and phone repair Newcastle. MacBook screens, keyboards, Windows boot issues, and data recovery.</p>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 mt-auto" href="https://mayfieldphonerepair.com">
              Read More <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</article>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why Choose Us?</h2>
<p className="text-slate-500 max-w-md font-light">We are Newcastle's trusted tech experts. Fast, affordable, and reliable.</p>
</div>
<div className="flex flex-col gap-1">
<div className="text-sm font-medium text-slate-900">Opening Hours</div>
<div className="text-xs text-slate-500">Mon-Fri: 9am - 5pm</div>
<div className="text-xs text-slate-500">Sat: 10am - 4pm</div>
<div className="text-xs text-slate-500">Sun: 10am - 2pm</div>
</div>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-slate-100 -z-10"></div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:shadow-indigo-100 transition-all">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" icon="lucide:zap" width="32"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Same Day Repair</h3>
<p className="text-sm text-slate-500">Most issues fixed in under an hour. Same day phone repair Newcastle you can count on.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:shadow-indigo-100 transition-all">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" icon="lucide:tag" width="32"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Best Prices</h3>
<p className="text-sm text-slate-500">Cheap mobile phone repair Newcastle without compromising quality. We price match.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:shadow-indigo-100 transition-all">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" icon="lucide:shield-check" width="32"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Warranty Included</h3>
<p className="text-sm text-slate-500">Peace of mind with every repair. We stand by our parts and workmanship.</p>
</div>

<div className="relative group">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:border-indigo-200 group-hover:shadow-indigo-100 transition-all">
<iconify-icon className="text-slate-400 group-hover:text-indigo-500 transition-colors" icon="lucide:calendar-clock" width="32"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Weekend Service</h3>
<p className="text-sm text-slate-500">Open weekends for your convenience. After hours phone repair Newcastle inquiries welcome.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-4 mb-12">
<div className="h-px bg-slate-800 flex-1"></div>
<h2 className="text-xl font-medium tracking-tight">Locals Love Us</h2>
<div className="h-px bg-slate-800 flex-1"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<blockquote className="bg-slate-800/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
<div className="flex text-indigo-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-6 leading-relaxed font-light">“Best place for iPhone screen repair in Mayfield. I dropped my 13 Pro and they fixed it in 30 minutes. Super friendly staff and great price.”</p>
<footer className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/20 flex items-center justify-center font-bold text-xs text-indigo-300">SJ</div>
<div>
<cite className="not-italic font-medium text-white block text-sm">Sarah J.</cite>
<span className="text-xs text-slate-500">Newcastle Resident</span>
</div>
</footer>
</blockquote>
<blockquote className="bg-slate-800/40 p-8 rounded-2xl border border-white/5 backdrop-blur-sm hover:bg-slate-800/60 transition-colors">
<div className="flex text-indigo-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-base text-slate-300 mb-6 leading-relaxed font-light">“Thought my Samsung was a goner after water damage. They cleaned the motherboard and replaced the battery. Cheapest mobile phone repair in Newcastle for the quality.”</p>
<footer className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/20 flex items-center justify-center font-bold text-xs text-indigo-300">MR</div>
<div>
<cite className="not-italic font-medium text-white block text-sm">Mike R.</cite>
<span className="text-xs text-slate-500">Samsung S22 Repair</span>
</div>
</footer>
</blockquote>
</div>
</div>
</section>

<section className="py-24 bg-indigo-50/30" id="booking">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200 flex flex-col lg:flex-row">

<div className="lg:w-5/12 p-10 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute -top-10 -right-10 p-12 opacity-[0.03] pointer-events-none rotate-12">
<iconify-icon height="300" icon="lucide:smartphone" width="300"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-6 tracking-tight">Visit Us In Store</h3>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white text-sm">Address</h4>
<p className="text-slate-400 text-sm leading-relaxed mt-1">
                    276 Maitland Rd,<br/>
                    Mayfield NSW 2304
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<iconify-icon icon="lucide:clock" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white text-sm">Opening Hours</h4>
<ul className="text-slate-400 text-sm leading-relaxed mt-1 space-y-1">
<li className="flex justify-between w-32"><span>Weekdays</span> <span>9am - 5pm</span></li>
<li className="flex justify-between w-32"><span>Saturday</span> <span>10am - 4pm</span></li>
<li className="flex justify-between w-32"><span>Sunday</span> <span>10am - 2pm</span></li>
</ul>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white/10 p-2 rounded-lg">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white text-sm">Email Us</h4>
<a className="text-slate-400 text-sm hover:text-white transition-colors" href="mailto:mayfieldphonerepair@gmail.com">mayfieldphonerepair@gmail.com</a>
</div>
</div>
</div>
<div className="mt-auto pt-8 border-t border-slate-800">
<a className="text-lg font-medium hover:text-indigo-400 transition-colors flex items-center gap-2" href="tel:0240491735">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                02 4049 1735
              </a>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-12">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Book a Repair / Get Quote</h3>
<form action="#" className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider" htmlFor="name">Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm" id="name" placeholder="John Smith" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider" htmlFor="phone">Phone</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm" id="phone" placeholder="0400 000 000" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider" htmlFor="device">Device</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm" id="device">
<option>Select Device...</option>
<option>iPhone</option>
<option>Samsung</option>
<option>iPad / Tablet</option>
<option>Laptop</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider" htmlFor="issue">Issue</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm" id="issue">
<option>Cracked Screen</option>
<option>Battery Replacement</option>
<option>Charging Issue</option>
<option>Water Damage</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-semibold uppercase text-slate-500 tracking-wider" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm resize-none" id="message" placeholder="Please describe the problem..." rows="3"></textarea>
</div>
<button className="w-full px-6 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm mt-2 flex items-center justify-center gap-2 group" type="button">
                Send Request
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:smartphone-nfc" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">Mayfield Repairs</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
              Your local experts for mobile phone and laptop repairs in Newcastle. Quality parts, fast turnaround, and friendly service.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://www.facebook.com/Mayfieldphonerepairs/" target="_blank"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://www.instagram.com/mayfieldcellphonerepairs/" target="_blank"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://www.youtube.com/@mayfieldcellphonerepairs" target="_blank"><iconify-icon icon="lucide:youtube" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://au.pinterest.com/mayfieldphonerepair/" target="_blank"><iconify-icon icon="simple-icons:pinterest" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://www.linkedin.com/company/mayfiled-cell-phone-repairs/" target="_blank"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-indigo-600 transition-colors" href="https://www.tiktok.com/@mayfield.cell.pho" target="_blank"><iconify-icon icon="simple-icons:tiktok" width="18"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
<div>
<h4 className="font-medium text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-slate-500 text-xs">
<li><a className="hover:text-indigo-600 transition-colors" href="https://mayfieldphonerepair.com">iPhone Repair</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="https://mayfieldphonerepair.com">Samsung Repair</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="https://mayfieldphonerepair.com">iPad / Tablet</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="https://mayfieldphonerepair.com">Laptop Repair</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-slate-500 text-xs">
<li><a className="hover:text-indigo-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="https://mayfieldphonerepair.com">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#booking">Contact</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#booking">Book Repair</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-slate-500 text-xs">
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span>276 Maitland Rd, Mayfield</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:phone" width="12"></iconify-icon>
<a className="hover:text-indigo-600 transition-colors" href="tel:0240491735">02 4049 1735</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="lucide:mail" width="12"></iconify-icon>
<a className="hover:text-indigo-600 transition-colors" href="mailto:mayfieldphonerepair@gmail.com">Email Us</a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<div>
            ©  Mayfield Phone Repairs. All rights reserved.
          </div>
<div className="flex gap-6">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
