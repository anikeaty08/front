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



        // Scroll Reveal
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-toggle');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
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
      

<div className="bg-slate-900 text-slate-300 text-[10px] md:text-xs py-2.5 px-6 border-b border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-teal-400 font-semibold uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                    Emergency Care
                </span>
<span className="hidden md:inline text-slate-600">|</span>
<span className="opacity-80">Seen first come, first served each morning</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:+231777911546">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon> +231 777 911 546
                </a>
<span className="hidden md:inline text-slate-700">/</span>
<a className="hover:text-white transition-colors flex items-center gap-1.5" href="tel:+231886911546">
                    +231 886 911 546
                </a>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<div className="w-10 h-10 text-teal-700 bg-teal-50 rounded-lg flex items-center justify-center border border-teal-100 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 shadow-sm">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2C7 2 4.5 5 4.5 9C4.5 13.5 6 15.5 6 15.5C6 15.5 6 21.5 8.5 21.5C10.5 21.5 10.5 17.5 12 17.5C13.5 17.5 13.5 21.5 15.5 21.5C18 21.5 18 15.5 18 15.5C18 15.5 19.5 13.5 19.5 9C19.5 5 17 2 12 2Z"></path>
<path d="M12 6V12"></path>
<path d="M9 9H15"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg md:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">Trinity Dental Clinic</span>
<span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold group-hover:text-teal-600 transition-colors">Monrovia, Liberia</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium text-slate-600">
<a className="hover:text-teal-700 transition-colors" href="#about">About</a>
<a className="hover:text-teal-700 transition-colors" href="#services">Treatments</a>
<a className="hover:text-teal-700 transition-colors" href="#facilities">Facilities</a>
<a className="hover:text-teal-700 transition-colors" href="#supporters">Outreach</a>
<a className="px-5 py-2.5 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors shadow-lg shadow-teal-700/20" href="#contact">
                    Contact Us
                </a>
</div>

<button className="lg:hidden p-2 text-slate-900" id="mobile-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-sm font-medium text-slate-600 py-2 border-b border-slate-50" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 py-2 border-b border-slate-50" href="#services">Treatments</a>
<a className="text-sm font-medium text-slate-600 py-2 border-b border-slate-50" href="#facilities">Facilities</a>
<a className="text-sm font-bold text-teal-700 py-2" href="#contact">Contact Us</a>
</div>
</nav>

<header className="relative w-full h-[600px] bg-slate-900 overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Dental Clinic Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50"></div>
</div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
<div className="max-w-2xl reveal-on-scroll">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white text-[10px] uppercase tracking-widest font-semibold mb-6">
                    Part of ELWA Hospital • Est. 2008
                </span>
<h1 className="text-4xl md:text-6xl text-white font-serif leading-[1.1] mb-6">
                    Compassionate dental care for <span className="italic text-teal-400">everyone.</span>
</h1>
<p className="text-slate-300 text-sm md:text-base font-light leading-relaxed mb-8 max-w-lg">
                    Operated as a not-for-profit clinic to provide world-class dental care to those least able to afford it. Serving the community with dignity and grace.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-slate-200 transition-colors" href="#contact">
                        Get Directions
                    </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-full text-xs font-bold uppercase tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm" href="#services">
                        View Services
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="relative z-20 -mt-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif mb-2">Opening Hours</h3>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex justify-between border-b border-slate-50 pb-2">
<span className="font-medium text-slate-900">Mon – Fri</span>
<span>8:45am - 12:00pm</span>
</li>
<li className="flex justify-between border-b border-slate-50 pb-2">
<span className="font-medium text-slate-900">Lunch</span>
<span>1:00pm - 4:00pm</span>
</li>
<li className="flex justify-between text-slate-400">
<span>Sat &amp; Sun</span>
<span>Closed</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded-xl shadow-xl shadow-slate-200/50 border border-slate-100 reveal-on-scroll delay-200">
<div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif mb-2">Our Location</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Trinity Dental Clinic<br/>
<strong className="text-slate-900">ELWA Hospital</strong><br/>
                    Robertsfield Highway<br/>
                    Paynesville, Monrovia, LIBERIA
                </p>
<a className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wide inline-flex items-center gap-1" href="#contact">
                    See on Map <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-teal-700 text-white p-8 rounded-xl shadow-xl shadow-teal-900/20 reveal-on-scroll delay-300">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-serif mb-2">Our Mission</h3>
<p className="text-sm text-teal-100 leading-relaxed mb-4">
                    We are part of the ministry of SIM, an international evangelical organization. Our goal is to serve the community with love and professional care.
                </p>
<a className="text-xs font-bold text-white/80 hover:text-white uppercase tracking-wide inline-flex items-center gap-1" href="https://www.sim.org" target="_blank">
                    Learn about SIM <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 reveal-on-scroll">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
<img alt="Trinity Dental Clinic Exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white font-serif italic">Moved to new modern facilities in 2019</p>
</div>
</div>
</div>
<div className="md:w-1/2 reveal-on-scroll delay-100">
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Who We Are</span>
<h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">Serving Monrovia since 2008 with <span className="font-serif italic text-slate-500">integrity.</span></h2>
<div className="space-y-4 text-slate-600 font-light leading-relaxed text-sm md:text-base">
<p>
                        The Trinity Dental Clinic is part of the ministry of SIM, an international, interdenominational Evangelical Christian mission organization. Established in 2008, we expanded and moved to our current state-of-the-art location in 2019.
                    </p>
<p>
                        We operate as a 'Not for Profit' clinic, specifically designed to provide high-quality dental care to those least able to afford it in our community.
                    </p>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-2 gap-8">
<div>
<span className="block text-3xl font-serif text-slate-900">15+</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Years of Service</span>
</div>
<div>
<span className="block text-3xl font-serif text-slate-900">8</span>
<span className="text-[10px] uppercase tracking-widest text-slate-500">Treatment Rooms</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block">What We Do</span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-serif">Our Treatments</h2>
<div className="w-12 h-px bg-teal-300 mx-auto mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors group reveal-on-scroll">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-50 transition-colors">
<iconify-icon icon="solar:clipboard-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">General Care</h3>
<ul className="text-xs text-slate-500 space-y-2">
<li>• Examinations</li>
<li>• Digital Radiographs (X-rays)</li>
<li>• Hygiene &amp; Cleaning</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors group reveal-on-scroll delay-100">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-50 transition-colors">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Restorative</h3>
<ul className="text-xs text-slate-500 space-y-2">
<li>• Tooth coloured fillings</li>
<li>• Root canal treatment</li>
<li>• Re-cementation (Crowns/Bridges)</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors group reveal-on-scroll delay-200">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-50 transition-colors">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Surgical &amp; Trauma</h3>
<ul className="text-xs text-slate-500 space-y-2">
<li>• Simple &amp; Surgical Extractions</li>
<li>• Fixing broken jaws</li>
<li>• Assessment of Tumours</li>
</ul>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-100 hover:border-teal-200 transition-colors group reveal-on-scroll delay-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-4 text-teal-600 group-hover:bg-teal-50 transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Prosthetics</h3>
<ul className="text-xs text-slate-500 space-y-2">
<li>• Acrylic (plastic) dentures</li>
<li>• Denture repairs</li>
<li>• Bespoke Denture Lab</li>
</ul>
</div>
</div>

<div className="mt-12 bg-amber-50 border border-amber-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 reveal-on-scroll">
<div className="p-2 bg-amber-100 text-amber-700 rounded-full shrink-0">
<iconify-icon icon="solar:info-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-bold uppercase tracking-wide text-amber-900 mb-2">Important Patient Information</h4>
<p className="text-sm text-amber-800/80 leading-relaxed mb-2">
                        We strive to provide the best essential care, however, please note that we are <strong>not able</strong> to provide the following services at this time:
                    </p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex px-2 py-1 bg-white/50 rounded text-xs text-amber-900">New crowns or bridges</span>
<span className="inline-flex px-2 py-1 bg-white/50 rounded text-xs text-amber-900">Dentures with metal framework</span>
<span className="inline-flex px-2 py-1 bg-white/50 rounded text-xs text-amber-900">Orthodontic appliances (Braces)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="facilities">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="text-teal-600 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Our Clinic</span>
<h2 className="text-3xl md:text-4xl text-slate-900 font-serif mb-6">Modern Facilities</h2>
<p className="text-slate-600 font-light leading-relaxed mb-8">
                        We are equipped to handle complex cases in a safe, sterile environment. Our facilities are designed to meet international standards for cross-infection control.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
<span className="font-serif text-lg font-bold">01</span>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 uppercase mb-1">8 Treatment Rooms</h4>
<p className="text-xs text-slate-500 leading-relaxed">Each equipped with basic, but modern up-to-date dental equipment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
<span className="font-serif text-lg font-bold">02</span>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 uppercase mb-1">Central Sterilisation</h4>
<p className="text-xs text-slate-500 leading-relaxed">Providing full sterilisation of all equipment. All staff strictly follow Cross Infection guidelines.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
<span className="font-serif text-lg font-bold">03</span>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 uppercase mb-1">Digital Imaging</h4>
<p className="text-xs text-slate-500 leading-relaxed">Digital X-ray room for intra-oral films, plus a separate Panoramic X-ray unit within the main hospital.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-900 border border-slate-100">
<span className="font-serif text-lg font-bold">04</span>
</div>
<div>
<h4 className="text-sm font-bold text-slate-900 uppercase mb-1">Bespoke Denture Lab</h4>
<p className="text-xs text-slate-500 leading-relaxed">On-site laboratory for the manufacture and repair of acrylic dentures.</p>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-on-scroll delay-100">
<img alt="Treatment Room" className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1516549655169-df83a0929519?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Reception Area" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8 hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Sterilization" className="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="X-Ray Room" className="rounded-lg shadow-lg w-full h-48 object-cover mt-8 hover:scale-[1.02] transition-transform duration-500" src="https://images.unsplash.com/photo-1582719201918-133907a9776d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="supporters">
<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor"></path>
</svg>
</div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<iconify-icon className="text-teal-400 mb-6" icon="solar:radio-minimalistic-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif mb-6">Community &amp; Outreach</h2>
<p className="text-slate-300 font-light text-sm md:text-base leading-relaxed mb-8">
                Beyond the clinic walls, our team broadcasts Dental Health information on <span className="text-white font-semibold">ELWA Radio (94.5FM)</span> every Wednesday at 1:30pm. We also undertake outreach trips to bring basic dental care into rural communities.
            </p>
<div className="inline-block p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
<p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Want to support our work?</p>
<a className="text-xl font-serif text-teal-400 hover:text-white transition-colors border-b border-teal-400/30 hover:border-white pb-1" href="mailto:dental.manager@elwaministries.org">
                    dental.manager@elwaministries.org
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-0 text-slate-400 border-t border-slate-900" id="contact">

<div className="w-full h-[450px] map-container grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.539743190457!2d-10.697488345107201!3d6.240934736993904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf0a019b854b6d83%3A0xfee27e6c01a41925!2sTrinity%20Dental%20Clinic!5e0!3m2!1sen!2sus!4v1743899094374!5m2!1sen!2sus" width="600"></iframe>
</div>
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div>
<div className="flex items-center gap-2 mb-6 text-white">
<svg className="text-teal-500" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M12 2C7 2 4.5 5 4.5 9C4.5 13.5 6 15.5 6 15.5C6 15.5 6 21.5 8.5 21.5C10.5 21.5 10.5 17.5 12 17.5C13.5 17.5 13.5 21.5 15.5 21.5C18 21.5 18 15.5 18 15.5C18 15.5 19.5 13.5 19.5 9C19.5 5 17 2 12 2Z"></path>
<path d="M12 6V12"></path>
<path d="M9 9H15"></path>
</svg>
<h4 className="font-serif text-xl">Trinity Dental Clinic</h4>
</div>
<p className="text-xs leading-relaxed mb-4">
                        A Not-For-Profit clinic providing essential dental care to the people of Liberia. Part of ELWA Hospital.
                    </p>
<div className="flex gap-4">
<span className="p-2 rounded-full bg-slate-900 border border-slate-800"><iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon></span>
<span className="p-2 rounded-full bg-slate-900 border border-slate-800"><iconify-icon icon="solar:global-linear" width="16"></iconify-icon></span>
</div>
</div>
<div>
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-4 text-xs">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-base shrink-0" icon="solar:phone-linear"></iconify-icon>
<div className="flex flex-col gap-1">
<a className="hover:text-white transition-colors" href="tel:+231777911546">+231 777 911 546</a>
<a className="hover:text-white transition-colors" href="tel:+231886911546">+231 886 911 546</a>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-500 text-base shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>ELWA Hospital, Robertsfield Hwy,<br/>Paynesville, Monrovia, LIBERIA</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Hours</h4>
<ul className="space-y-3 text-xs">
<li className="flex justify-between border-b border-slate-900 pb-2">
<span>Monday - Friday</span>
<span className="text-white">8:45am - 4:00pm</span>
</li>
<li className="flex justify-between text-slate-500">
<span>Saturday</span>
<span>Closed</span>
</li>
<li className="flex justify-between text-slate-500">
<span>Sunday</span>
<span>Closed</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-bold uppercase tracking-widest mb-6">Emergencies</h4>
<div className="bg-slate-900 p-4 rounded-lg border border-slate-800">
<p className="text-xs leading-relaxed">
                            Emergencies are seen on a first come, first served basis each morning, or by appointment with our receptionist.
                        </p>
</div>
</div>
</div>
<div className="border-t border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2025 Trinity Dental Clinic - Monrovia, Liberia. All rights reserved.</p>
<p>Supporting ELWA Ministries &amp; SIM</p>
</div>
</div>
</footer>


    </>
  );
}
