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
      

<nav className="sticky top-0 z-50 glass-effect border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tighter text-[#2F80ED]">FIXNOW</div>
<div className="hidden md:flex items-center space-gap-8 gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#2F80ED] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2F80ED] transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2F80ED] transition-colors" href="#professionals">Find Pros</a>
<a className="bg-[#2F80ED] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-all shadow-md shadow-blue-200" href="#">Download App</a>
</div>
<button className="md:hidden">
<iconify-icon className="text-2xl text-slate-900" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-12 pb-24 overflow-hidden">
<div className="absolute inset-0 soft-gradient -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 bg-blue-50 text-[#2F80ED] px-4 py-1.5 rounded-full text-xs font-medium">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                    The #1 rated home service app
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-slate-900">
                    Home repairs, <span className="text-[#2F80ED]">simplified.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg">
                    Book trusted professionals for plumbing, electrical, cleaning, and more. Get guaranteed pricing and instant scheduling in under 60 seconds.
                </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl transition-transform hover:scale-105" href="#">
<iconify-icon icon="solar:apple-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<div className="text-left">
<div className="text-[10px] uppercase leading-none opacity-70">Download on</div>
<div className="text-sm font-semibold">App Store</div>
</div>
</a>
<a className="flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl transition-transform hover:scale-105 shadow-sm" href="#">
<iconify-icon icon="solar:play-stream-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<div className="text-left">
<div className="text-[10px] uppercase leading-none opacity-70">Get it on</div>
<div className="text-sm font-semibold">Google Play</div>
</div>
</a>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
</div>
<div className="text-sm text-slate-500">
<span className="font-semibold text-slate-900">24k+</span> homeowners trust FixNow
                    </div>
</div>
</div>
<div className="relative">
<div className="relative z-10 w-full max-w-sm mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-slate-800 aspect-[9/19]">
<div className="bg-white h-full w-full rounded-[2.2rem] overflow-hidden relative">

<div className="p-6 space-y-6">
<div className="flex justify-between items-center">
<iconify-icon className="text-xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
<span className="font-semibold text-sm">Service Details</span>
<iconify-icon className="text-xl" icon="solar:bell-linear"></iconify-icon>
</div>
<div className="h-40 bg-blue-50 rounded-2xl flex items-center justify-center">
<iconify-icon className="text-5xl text-[#2F80ED] opacity-40" icon="solar:mask-h-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="h-4 w-3/4 bg-slate-100 rounded-full"></div>
<div className="h-4 w-1/2 bg-slate-100 rounded-full"></div>
<div className="grid grid-cols-3 gap-2">
<div className="h-10 bg-blue-50 rounded-lg"></div>
<div className="h-10 bg-slate-50 rounded-lg"></div>
<div className="h-10 bg-slate-50 rounded-lg"></div>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-full h-12 bg-[#2F80ED] rounded-xl flex items-center justify-center text-white text-sm font-medium">Book Appointment</div>
</div>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 blur-3xl rounded-full"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full"></div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16">3 simple steps to a fixed home</h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-16 h-16 bg-blue-50 text-[#2F80ED] rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:minimalistic-magnifer-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Search Service</h3>
<p className="text-slate-500 text-sm leading-relaxed">Choose from over 50+ professional home services tailored to your needs.</p>
</div>
<div className="space-y-4">
<div className="w-16 h-16 bg-blue-50 text-[#2F80ED] rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:user-hand-up-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Choose Professional</h3>
<p className="text-slate-500 text-sm leading-relaxed">View profiles, ratings, and transparent pricing. Select the best fit for you.</p>
</div>
<div className="space-y-4">
<div className="w-16 h-16 bg-blue-50 text-[#2F80ED] rounded-2xl flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:calendar-check-linear" style={{fontSize: '2rem'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight">Book Instantly</h3>
<p className="text-slate-500 text-sm leading-relaxed">Select a time that works for you and pay securely through the app.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFC]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div className="space-y-2">
<h2 className="text-3xl font-semibold tracking-tight">Popular Services</h2>
<p className="text-slate-500 text-sm">Quality service delivered at your doorstep.</p>
</div>
<a className="text-[#2F80ED] font-medium text-sm flex items-center gap-1" href="#">View all <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:bath-linear"></iconify-icon>
<div className="text-sm font-medium">Plumbing</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:lightbulb-bolt-linear"></iconify-icon>
<div className="text-sm font-medium">Electrician</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:magic-stick-linear"></iconify-icon>
<div className="text-sm font-medium">Cleaning</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:hammer-linear"></iconify-icon>
<div className="text-sm font-medium">Handyman</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:snowflake-linear"></iconify-icon>
<div className="text-sm font-medium">AC Repair</div>
</div>

<div className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group cursor-pointer text-center">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-[#2F80ED] transition-colors mb-4" icon="solar:paint-roller-linear"></iconify-icon>
<div className="text-sm font-medium">Painting</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-[#F8FAFC] p-8 rounded-3xl space-y-4">
<iconify-icon className="text-3xl text-[#2F80ED]" icon="solar:verified-check-linear"></iconify-icon>
<h4 className="font-semibold tracking-tight">Verified Professionals</h4>
<p className="text-slate-500 text-sm">Every pro undergoes a strict background check.</p>
</div>
<div className="bg-[#F8FAFC] p-8 rounded-3xl space-y-4 mt-8 md:mt-0">
<iconify-icon className="text-3xl text-[#2F80ED]" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-semibold tracking-tight">Secure Payments</h4>
<p className="text-slate-500 text-sm">Your money is held safely until the job is done.</p>
</div>
<div className="bg-[#F8FAFC] p-8 rounded-3xl space-y-4">
<iconify-icon className="text-3xl text-[#2F80ED]" icon="solar:tag-price-linear"></iconify-icon>
<h4 className="font-semibold tracking-tight">Transparent Pricing</h4>
<p className="text-slate-500 text-sm">Know the cost upfront. No hidden fees or surprises.</p>
</div>
<div className="bg-[#F8FAFC] p-8 rounded-3xl space-y-4 mt-8 md:mt-0">
<iconify-icon className="text-3xl text-[#2F80ED]" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="font-semibold tracking-tight">Fast Booking</h4>
<p className="text-slate-500 text-sm">Book a service in seconds for same-day arrival.</p>
</div>
</div>
<div className="space-y-6">
<h2 className="text-4xl font-semibold tracking-tight leading-tight">Peace of mind for every home repair.</h2>
<p className="text-slate-500 leading-relaxed">We understand that your home is your sanctuary. That's why we've built a platform that prioritizes trust, quality, and speed. From leaking faucets to complete home painting, we've got you covered.</p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#2F80ED] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Satisfaction Guarantee on every job
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#2F80ED] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            24/7 Customer Support coverage
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-700">
<iconify-icon className="text-[#2F80ED] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Fully insured and licensed pros
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8FAFC]" id="professionals">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Top Rated Professionals</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden">
<img alt="Pro" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div>
<div className="font-semibold">Alex Rivera</div>
<div className="text-xs text-[#2F80ED] font-medium bg-blue-50 px-2 py-0.5 rounded">Expert Plumber</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#2F80ED]">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<span className="text-sm font-semibold text-slate-900">4.9</span>
<span className="text-xs text-slate-400 font-normal">(124 reviews)</span>
</div>
<p className="text-xs text-slate-500">"Excellent service, Alex fixed my kitchen leak in 30 mins. Highly professional!"</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="text-sm"><span className="text-slate-400">Starting at</span> <span className="font-semibold">$45/hr</span></div>
<button className="text-xs font-semibold text-[#2F80ED]">View Profile</button>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden">
<img alt="Pro" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div>
<div className="font-semibold">Sarah Jenkins</div>
<div className="text-xs text-[#2F80ED] font-medium bg-blue-50 px-2 py-0.5 rounded">Master Electrician</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#2F80ED]">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<span className="text-sm font-semibold text-slate-900">5.0</span>
<span className="text-xs text-slate-400 font-normal">(89 reviews)</span>
</div>
<p className="text-xs text-slate-500">"Sarah installed our smart home lighting system perfectly. Very tidy worker."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="text-sm"><span className="text-slate-400">Starting at</span> <span className="font-semibold">$60/hr</span></div>
<button className="text-xs font-semibold text-[#2F80ED]">View Profile</button>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-4">
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-2xl bg-slate-200 overflow-hidden">
<img alt="Pro" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div>
<div className="font-semibold">Marcus Chen</div>
<div className="text-xs text-[#2F80ED] font-medium bg-blue-50 px-2 py-0.5 rounded">Handyman Pro</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#2F80ED]">
<iconify-icon icon="solar:star-bold" style={{fontSize: '1rem'}}></iconify-icon>
<span className="text-sm font-semibold text-slate-900">4.8</span>
<span className="text-xs text-slate-400 font-normal">(210 reviews)</span>
</div>
<p className="text-xs text-slate-500">"Marcus can fix anything! Helped us with furniture assembly and mounting."</p>
<div className="flex items-center justify-between pt-4 border-t border-slate-50">
<div className="text-sm"><span className="text-slate-400">Starting at</span> <span className="font-semibold">$40/hr</span></div>
<button className="text-xs font-semibold text-[#2F80ED]">View Profile</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Designed for simplicity</h2>
<div className="flex flex-nowrap md:justify-center gap-8 overflow-x-auto pb-8 snap-x">
<div className="min-w-[280px] aspect-[9/19] bg-slate-100 rounded-3xl snap-center border border-slate-200 p-2">
<div className="w-full h-full rounded-2xl bg-[#2F80ED] flex flex-col justify-end p-6">
<div className="text-white text-lg font-semibold tracking-tight mb-2">Home Page</div>
<div className="h-1 w-12 bg-white/40 rounded-full"></div>
</div>
</div>
<div className="min-w-[280px] aspect-[9/19] bg-slate-100 rounded-3xl snap-center border border-slate-200 p-2">
<div className="w-full h-full rounded-2xl bg-slate-900 flex flex-col justify-end p-6">
<div className="text-white text-lg font-semibold tracking-tight mb-2">Pro Profiles</div>
<div className="h-1 w-12 bg-white/40 rounded-full"></div>
</div>
</div>
<div className="min-w-[280px] aspect-[9/19] bg-slate-100 rounded-3xl snap-center border border-slate-200 p-2">
<div className="w-full h-full rounded-2xl bg-blue-500 flex flex-col justify-end p-6">
<div className="text-white text-lg font-semibold tracking-tight mb-2">Live Tracking</div>
<div className="h-1 w-12 bg-white/40 rounded-full"></div>
</div>
</div>
<div className="min-w-[280px] aspect-[9/19] bg-slate-100 rounded-3xl snap-center border border-slate-200 p-2">
<div className="w-full h-full rounded-2xl bg-slate-800 flex flex-col justify-end p-6">
<div className="text-white text-lg font-semibold tracking-tight mb-2">Payments</div>
<div className="h-1 w-12 bg-white/40 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto bg-[#2F80ED] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10">
<iconify-icon icon="solar:home-2-linear" style={{fontSize: '15rem'}}></iconify-icon>
</div>
<div className="relative z-10 space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Ready to fix your home?</h2>
<p className="text-blue-100 text-lg max-w-xl mx-auto">Join thousands of happy homeowners. Download the FixNow app and book your first service today.</p>
<div className="flex flex-wrap justify-center gap-4">
<a className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-xl" href="#">App Store</a>
<a className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold border border-blue-400/30 transition-all hover:bg-blue-700" href="#">Google Play</a>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 space-y-6">
<div className="text-2xl font-semibold tracking-tighter text-[#2F80ED]">FIXNOW</div>
<p className="text-slate-500 text-sm max-w-xs leading-relaxed">
                        The modern way to book home services. Professional, reliable, and always at your service.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#2F80ED] transition-colors" href="#">
<iconify-icon icon="solar:square-academic-cap-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#2F80ED] transition-colors" href="#">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#2F80ED] transition-colors" href="#">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
<div className="space-y-4">
<h5 className="font-semibold text-sm">Services</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#2F80ED]" href="#">Plumbing</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Electrical</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Cleaning</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Handyman</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="font-semibold text-sm">Company</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#2F80ED]" href="#">About Us</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Careers</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Privacy Policy</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h5 className="font-semibold text-sm">Support</h5>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-[#2F80ED]" href="#">Help Center</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Terms of Service</a></li>
<li><a className="hover:text-[#2F80ED]" href="#">Refund Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-50 text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
<div className="text-xs text-slate-400">© 2024 FixNow Technologies Inc. All rights reserved.</div>
<div className="text-xs text-slate-400 flex justify-center gap-6">
<a href="#">Privacy</a>
<a href="#">Terms</a>
<a href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
