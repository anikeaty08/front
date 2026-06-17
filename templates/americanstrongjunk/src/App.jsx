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
colors: {
brand: {
navy: '#0f172a',
red: '#dc2626', // Strong American Red
gray: '#64748b'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm', 'bg-white/90');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-white/90');
                navbar.classList.add('border-transparent');
            }
        });

        // Mobile menu toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Smooth reveal animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
            observer.observe(element);
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
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" id="aura-video" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1771556045/hf_20260220_025023_411eb1e6-3cc6-472d-823a-3c21b8ac72b1_bvhdg5.mp4"></video></div>

<nav className="fixed w-full top-0 z-50 transition-all duration-300 border-b bg-white/80 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center cursor-pointer" onclick="window.scrollTo(0,0)">


<img alt="American Strong Hauling &amp; Junk Removal" className="w-900 h-14 max-w-4xl object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ac7bffd6-a814-48d1-bf08-3c18b121fb9d_800w.png"/>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-red transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-slate-900 flex items-center gap-1 hover:text-brand-red transition-colors" href="tel:7145535841">
<iconify-icon className="" icon="lucide:phone" strokeWidth="2" width="16"></iconify-icon>
                        (714) 553-5841
                    </a>
<a className="bg-brand-red text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-red-700 transition-all shadow-sm hover:shadow-md hover:scale-105 active:scale-95" href="#contact">
                        Get Free Quote
                    </a>
</div>

<button className="md:hidden text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-6 flex-col gap-4" id="mobile-menu">
<a className="text-base font-medium text-slate-600 py-2 block" href="#services">Services</a>
<a className="text-base font-medium text-slate-600 py-2 block" href="#why-us">Why Us</a>
<a className="text-base font-medium text-slate-600 py-2 block" href="#reviews">Reviews</a>
<div className="h-px bg-slate-100 my-2"></div>
<a className="text-base font-medium text-slate-900 flex items-center gap-2 py-2" href="tel:7145535841">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
                (714) 553-5841
            </a>
<a className="bg-brand-red text-center text-white text-sm font-medium px-5 py-3 rounded w-full block mt-2" href="#contact">
                Get Free Quote
            </a>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden bg-white pt-32 pb-20 relative">

<div className="absolute inset-0 bg-grid-slate [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-on-scroll is-visible">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
<div className="flex text-yellow-400 text-xs">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">5.0 Rating (10+ Reviews)</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                        Junk Removal.<br/>
<span className="text-brand-red">Done Right.</span>
</h1>

<p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
                        Professional residential &amp; commercial hauling services you can trust. Serving homeowners and businesses in Corona with care.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex items-center justify-center px-6 py-3.5 bg-brand-red text-white font-medium rounded-lg hover:bg-red-700 transition-all shadow-lg shadow-red-500/20 hover:shadow-xl hover:-translate-y-0.5" href="#contact">
                            Get a Free Estimate
                            <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3.5 bg-white border border-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all hover:border-slate-300" href="tel:7145535841">
<iconify-icon className="mr-2.5 text-slate-400" icon="lucide:phone" strokeWidth="2" width="18"></iconify-icon>
                            (714) 553-5841
                        </a>
</div>

<div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="lucide:check-circle" strokeWidth="2" width="18"></iconify-icon>
<span className="">Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="lucide:clock" strokeWidth="2" width="18"></iconify-icon>
<span className="">On-Time Guarantee</span>
</div>
</div>
</div>

<div className="relative reveal-on-scroll delay-100 lg:order-last order-first is-visible">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100 group"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1771556045/hf_20260220_025023_411eb1e6-3cc6-472d-823a-3c21b8ac72b1_bvhdg5.mp4"></video>

<img alt="American Strong Hauling Truck" className="transform group-hover:scale-105 transition-transform duration-700 w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aceb7087-ddcf-47a8-92d1-fc1cd1453a8b_1600w.jpg"/>
</div>

<div className="absolute -top-12 -right-12 w-64 h-64 bg-slate-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-pulse"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -z-10 animate-pulse delay-700"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16 reveal-on-scroll is-visible">
<h2 className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Our Services</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Everything we haul away.</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Residential Removal</h4>
<p className="text-slate-600 text-sm leading-relaxed">Whole house cleanouts, garage clearing, and attic emptying. We reclaim your space efficiently.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-100 is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Commercial Cleanouts</h4>
<p className="text-slate-600 text-sm leading-relaxed">Office furniture removal, retail debris, and property management cleanups for businesses.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-200 is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:sofa-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Furniture Removal</h4>
<p className="text-slate-600 text-sm leading-relaxed">Couches, mattresses, tables, and bulky items. We do the heavy lifting safely.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:tv-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Appliance Recycling</h4>
<p className="text-slate-600 text-sm leading-relaxed">Eco-friendly disposal of refrigerators, washers, dryers, and old electronics.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-100 is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon className="" icon="solar:hammer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Construction Debris</h4>
<p className="text-slate-600 text-sm leading-relaxed">Drywall, wood, tile, and concrete removal for renovation projects and job sites.</p>
</div>

<div className="group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll delay-200 is-visible">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-colors">
<iconify-icon icon="solar:stopwatch-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Same-Day Service</h4>
<p className="text-slate-600 text-sm leading-relaxed">In a rush? We offer rapid response times to get your junk gone today.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="why-us">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 reveal-on-scroll is-visible">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Junk Removal Team" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f69b18f4-c36f-4f12-89c5-20a74e0749f6_800w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex items-center gap-2 text-white">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-sm font-medium">Serving Corona, CA &amp; Surrounding Areas</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal-on-scroll delay-100 is-visible">
<h2 className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Why Choose Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Local, reliable, and ready to work.</h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                        At American Strong Hauling, we believe in honest work and fair pricing. We aren't a national franchise with hidden fees. We are your neighbors in Corona, dedicated to keeping our community clean.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Open 24 Hours / 7 Days a week</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Affordable, Upfront Pricing</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Fast Response Times</span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="" icon="solar:check-circle-linear" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-slate-700 font-medium">Friendly, Professional Crew</span>
</li>
</ul>
<div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs text-slate-500 font-medium">MH</div>
<div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs text-slate-500 font-medium">JD</div>
<div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-xs text-slate-500 font-medium">AS</div>
</div>
<div>
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-medium mt-1">Trusted by your neighbors</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 reveal-on-scroll is-visible">
<h2 className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Process</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Simple 3-Step Removal</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0"></div>

<div className="relative z-10 text-center reveal-on-scroll delay-100">
<div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mb-6 shadow-lg shadow-black/20">
<iconify-icon className="text-brand-red" icon="solar:phone-calling-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-2">1. Request Quote</h4>
<p className="text-slate-400 text-sm max-w-xs mx-auto">Call us or book online. We give you a transparent, upfront estimate.</p>
</div>

<div className="relative z-10 text-center reveal-on-scroll delay-200">
<div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mb-6 shadow-lg shadow-black/20">
<iconify-icon className="text-brand-red" icon="solar:delivery-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-2">2. We Arrive</h4>
<p className="text-slate-400 text-sm max-w-xs mx-auto">Our team arrives on time, fully equipped to handle any job size.</p>
</div>

<div className="relative z-10 text-center reveal-on-scroll delay-300">
<div className="w-24 h-24 mx-auto bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 mb-6 shadow-lg shadow-black/20">
<iconify-icon className="text-brand-red" icon="solar:trash-bin-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-semibold mb-2">3. We Haul It</h4>
<p className="text-slate-400 text-sm max-w-xs mx-auto">We load it up, clean the area, and dispose of items responsibly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div className="">
<h2 className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Testimonials</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">What our clients say</h3>
</div>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<div className="flex text-yellow-400 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold-duotone"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">4.6/5 Average</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal-on-scroll">
<div className="flex justify-between items-start mb-6">
<div className="text-yellow-400 flex text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-slate-200" icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"These guys were lifesavers! Needed a garage cleaned out same-day and they showed up within 2 hours. Super professional and fair price."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">MP</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Mike P.</p>
<p className="text-xs text-slate-500">Corona, CA</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal-on-scroll delay-100">
<div className="flex justify-between items-start mb-6">
<div className="text-yellow-400 flex text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-slate-200" icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Highly recommend American Strong. They removed an old spa from my backyard. It was a tough job but they handled it with ease."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">SJ</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Sarah J.</p>
<p className="text-xs text-slate-500">Riverside, CA</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 reveal-on-scroll delay-200">
<div className="flex justify-between items-start mb-6">
<div className="text-yellow-400 flex text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<iconify-icon className="text-slate-200" icon="solar:quote-up-linear" width="24"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Professional, fast, and affordable. The crew was polite and swept up afterwards. Will definitely use them again."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500 text-sm">DT</div>
<div>
<p className="text-sm font-semibold text-slate-900">David T.</p>
<p className="text-xs text-slate-500">Norco, CA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-brand-red relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-slate-900/10 pattern-dots"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Need Junk Gone Today?</h2>
<p className="text-white/90 text-lg mb-10 font-normal">Contact American Strong Hauling. We are ready to serve you 24/7.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-red rounded-full font-bold tracking-wide hover:bg-slate-50 transition-all shadow-xl hover:shadow-2xl animate-pulse hover:animate-none transform hover:scale-105" href="tel:7145535841">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                    Call (714) 553-5841
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal-on-scroll">
<h2 className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Find Us</h2>
<h3 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Our Location</h3>
<p className="text-slate-600 mb-8 leading-relaxed">
                        Based centrally in Corona, CA, we are perfectly positioned to serve the entire Inland Empire. Whether you are in Riverside, Norco, or Eastvale, our team is just a short drive away.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-red flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Headquarters</h4>
<p className="text-slate-600 text-sm">874 Buckeye Cir, Corona, CA 92881</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-red flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Operating Hours</h4>
<p className="text-slate-600 text-sm">Open 24 Hours / 7 Days a Week</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-brand-red flex-shrink-0">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Contact</h4>
<a className="text-slate-600 text-sm hover:text-brand-red transition-colors" href="tel:7145535841">(714) 553-5841</a>
</div>
</div>
</div>
</div>

<div className="relative w-full h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-200 reveal-on-scroll delay-100">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=874+Buckeye+Cir,+Corona,+CA+92881&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white">
<span className="font-bold text-lg">A</span>
</div>
<span className="font-bold text-lg tracking-tight uppercase text-white">American Strong</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Reliable junk removal services in Corona, CA. We make decluttering easy, affordable, and stress-free.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-brand-red hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="text-white font-semibold mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-brand-red" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>874 Buckeye Cir,<br/>Corona, CA 92881</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-red" icon="solar:phone-linear" width="16"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:7145535841">(714) 553-5841</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-red" icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Open 24 Hours</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#why-us">Why Choose Us</a></li>
<li><a className="hover:text-white transition-colors" href="#reviews">Customer Reviews</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Get a Quote</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6">Service Areas</h4>
<div className="flex flex-wrap gap-2 text-xs">
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Corona</span>
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Riverside</span>
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Norco</span>
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Eastvale</span>
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Yorba Linda</span>
<span className="bg-slate-900 px-3 py-1 rounded-full border border-slate-800">Anaheim Hills</span>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-900 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2024 American Strong Hauling and Junk Removal. All rights reserved.</p>
<a className="hover:text-white transition-colors" href="https://americanstronghauling.com">americanstronghauling.com</a>
</div>
</div>
</footer>


    </>
  );
}
