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
      

<div className="floating-petal petal-1"></div>
<div className="floating-petal petal-2"></div>
<div className="floating-petal petal-3"></div>

<div className="floating-heart heart-1"></div>
<div className="floating-heart heart-2"></div>
<div className="floating-heart heart-3"></div>

<div className="bokeh-sparkle sparkle-1"></div>
<div className="bokeh-sparkle sparkle-2"></div>
<div className="bokeh-sparkle sparkle-3"></div>
<div className="bokeh-sparkle sparkle-4"></div>

<nav className="w-full border-b border-white/5 bg-[#08101C]/95 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter text-white hover:text-[#CFB56D] transition-colors duration-300" href="#">
                THE ATELIER.
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#CFB56D] transition-colors" href="#about">About</a>
<a className="hover:text-[#CFB56D] transition-colors" href="#services">Services</a>
<a className="hover:text-[#CFB56D] transition-colors" href="#pricing">Pricing</a>
<a className="px-5 py-2 border border-[#CFB56D] text-[#CFB56D] hover:bg-[#CFB56D] hover:text-[#08101C] transition-all duration-300 rounded-sm uppercase text-xs tracking-widest" href="#contact">
                    Book Now
                </a>
</div>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="valentine-vignette film-grain hero-bokeh relative pt-24 pb-20 md:pt-32 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">

<div className="mb-4">
<span className="valentine-tag text-[#d4a574] uppercase tracking-[0.15em] text-xs font-medium">
<i className="w-3 h-3 inline-block mr-1" data-lucide="heart" strokeWidth="1.5" style={{verticalAlign: '-2px'}}></i>
                    Valentine's Week Special
                </span>
</div>
<p className="text-[#CFB56D] uppercase tracking-[0.2em] text-xs mb-6 font-medium">Refined Grooming Standards</p>
<h1 className="hero-glow hero-text-glow font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight leading-[1.1] mb-8">
                Premium Salon &amp; <br className="hidden md:block"/>
<span className="text-slate-400 italic">Grooming Experience</span>
</h1>
<p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Where precision meets luxury. We provide a sanctuary for those who appreciate exceptional care, master
                craftsmanship, and a quiet, dignified atmosphere.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="cta-glow w-full sm:w-auto px-8 py-4 bg-[#CFB56D] text-[#08101C] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-300" href="#contact">
                    Book Appointment
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium text-sm tracking-widest uppercase rounded-sm hover:border-[#CFB56D] hover:text-[#CFB56D] transition-colors duration-300 flex items-center justify-center gap-2" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i> Call Us
                </a>
</div>
</div>
</header>

<section className="py-20 border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
                    Elevating the Standard of Personal Care
                </h2>
<div className="w-12 h-0.5 bg-[#CFB56D] mb-8"></div>
</div>
<div className="space-y-6 text-slate-400 leading-relaxed">
<p>
                    Established with a vision to redefine the unisex salon experience, The Atelier bridges the gap
                    between traditional barbering and modern styling. We believe that grooming is not just a routine,
                    but a ritual of self-respect.
                </p>
<p>
                    Our professionals are chosen not just for their technical skill, but for their dedication to hygiene
                    and their ability to listen. We use single-use disposables, hospital-grade sterilization for tools,
                    and premium, skin-friendly products to ensure your safety and comfort are never compromised.
                </p>
<div className="pt-4 flex items-center gap-8">
<div className="flex flex-col">
<span className="font-serif text-3xl text-white">10+</span>
<span className="text-xs uppercase tracking-widest text-[#CFB56D]">Years Exp.</span>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div className="flex flex-col">
<span className="font-serif text-3xl text-white">5k+</span>
<span className="text-xs uppercase tracking-widest text-[#CFB56D]">Clients</span>
</div>
</div>
</div>
</div>
</section>

<section className="corner-accent py-20 bg-[#0B1422]" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Curated Services
                </h2>
<p className="text-slate-400 text-sm tracking-wide">DESIGNED FOR MEN &amp; WOMEN</p>
</div>
<div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group">
<div className="text-[#CFB56D] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
<i className="w-8 h-8" data-lucide="scissors" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-xl font-serif mb-3">Precision Haircuts</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Consultation followed by a tailored cut that suits your face shape and lifestyle. Finished with
                        a wash and style.
                    </p>
</div>

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group">
<div className="text-[#CFB56D] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
<i className="w-8 h-8" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-xl font-serif mb-3">Advanced Facials</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Deep cleansing and rejuvenating treatments using premium organic products to restore skin
                        vitality.
                    </p>
</div>

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group">
<div className="text-[#CFB56D] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
<i className="w-8 h-8" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-xl font-serif mb-3">Hair Spa &amp; Treatment</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Intensive repair therapies for damaged hair, dandruff control, and scalp health enhancement.
                    </p>
</div>

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group">
<div className="text-[#CFB56D] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
<i className="w-8 h-8" data-lucide="palette" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-xl font-serif mb-3">Color Studio</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Ammonia-free global coloring, highlights, balayage, and root touch-ups by certified colorists.
                    </p>
</div>

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group">
<div className="text-[#CFB56D] mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
<i className="w-8 h-8" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-xl font-serif mb-3">Grooming Essentials</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Beard sculpting, threading, waxing, and manicures designed for a polished, professional look.
                    </p>
</div>

<div className="service-card bg-[#0B1422] p-10 hover:bg-[#0F1A2B] transition-colors duration-300 group flex flex-col justify-center items-center text-center">
<h3 className="text-white text-xl font-serif mb-3">View Full Menu</h3>
<a className="text-[#CFB56D] text-sm uppercase tracking-widest border-b border-[#CFB56D] pb-1 hover:text-white hover:border-white transition-all" href="#pricing">Check
                        Prices</a>
</div>
</div>
</div>
</section>

<section className="corner-accent py-20" id="pricing">
<div className="pricing-section max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Transparent
                    Pricing</h2>
<p className="text-slate-400 text-sm">NO HIDDEN CHARGES. TAXES INCLUSIVE.</p>
<p className="text-[#d4a574] text-xs mt-2 uppercase tracking-widest">
<i className="w-3 h-3 inline-block mr-1" data-lucide="heart" strokeWidth="1.5" style={{verticalAlign: '-1px'}}></i>
                    Special Valentine's Week Offers
                </p>
</div>
<div className="space-y-12">

<div>
<h3 className="text-[#CFB56D] text-xs font-bold uppercase tracking-widest mb-6">Hair Services</h3>
<div className="space-y-5">
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Classic Haircut &amp; Wash</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹800 - ₹1,200</span>
<span className="valentine-price">₹650 - ₹950</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Beard Sculpting</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹400</span>
<span className="valentine-price">₹320</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Blow Dry &amp; Styling</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹600 - ₹900</span>
<span className="valentine-price">₹500 - ₹750</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Keratin Treatment</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹4,500+</span>
<span className="valentine-price">₹3,800+</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-[#CFB56D] text-xs font-bold uppercase tracking-widest mb-6">Skin &amp; Wellness</h3>
<div className="space-y-5">
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Express Cleanup</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹1,000</span>
<span className="valentine-price">₹800</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Signature Gold Facial</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹3,500</span>
<span className="valentine-price">₹2,900</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
<div className="price-row flex items-baseline justify-between group">
<span className="text-slate-300 font-medium group-hover:text-white transition-colors">Deluxe Pedicure</span>
<span className="flex-grow border-b border-dashed border-slate-700 mx-4 relative -top-1"></span>
<div className="text-right">
<span className="original-price block text-sm">₹1,200</span>
<span className="valentine-price">₹950</span>
<span className="valentine-price-label">Valentine's Price</span>
</div>
</div>
</div>
</div>
</div>
<p className="text-center text-slate-500 text-xs mt-12 italic">
                * Prices may vary based on hair length and stylist seniority. Consultation is complimentary.
            </p>
<p className="text-center text-[#c4926e] text-xs mt-3">
                ** Valentine's Week Special Pricing valid Feb 7-14, 2026
            </p>
</div>
</section>

<section className="py-20 bg-[#0B1422] border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center">
<div className="space-y-4">
<div className="w-12 h-12 mx-auto bg-[#08101C] border border-[#CFB56D]/30 flex items-center justify-center rounded-sm text-[#CFB56D]">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-serif text-xl">Uncompromised Hygiene</h4>
<p className="text-slate-400 text-sm leading-relaxed px-4">
                        We adhere to medical-grade sterilization protocols. Your safety is the foundation of our
                        service.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 mx-auto bg-[#08101C] border border-[#CFB56D]/30 flex items-center justify-center rounded-sm text-[#CFB56D]">
<i className="w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-serif text-xl">Master Stylists</h4>
<p className="text-slate-400 text-sm leading-relaxed px-4">
                        Our team undergoes quarterly training to stay ahead of global trends while mastering classic
                        techniques.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 mx-auto bg-[#08101C] border border-[#CFB56D]/30 flex items-center justify-center rounded-sm text-[#CFB56D]">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h4 className="text-white font-serif text-xl">Respect for Time</h4>
<p className="text-slate-400 text-sm leading-relaxed px-4">
                        We value your schedule. Appointments start on time, every time, ensuring a stress-free
                        experience.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-[#08101C] via-[#0F1A2B] to-[#08101C] z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl text-white font-medium tracking-tight mb-8">
                Ready for an Upgrade?
            </h2>
<p className="text-slate-300 text-lg mb-10 font-light">
                Experience the difference of a true premium salon. Walk-ins welcome, appointments recommended.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<a className="cta-glow px-8 py-4 bg-[#CFB56D] text-[#08101C] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(207,181,109,0.15)]" href="#">
                    Book Online
                </a>
<a className="px-8 py-4 bg-transparent border border-[#CFB56D] text-[#CFB56D] font-medium text-sm tracking-widest uppercase rounded-sm hover:bg-[#CFB56D] hover:text-[#08101C] transition-colors duration-300 flex items-center justify-center gap-2" href="https://wa.me/1234567890">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i> WhatsApp
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#050B14] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="font-serif text-2xl tracking-tighter text-white block mb-6" href="#">
                        THE ATELIER.
                    </a>
<p className="text-slate-500 text-sm leading-relaxed">
                        A premium unisex salon dedicated to precision, hygiene, and the art of grooming.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Contact</h4>
<ul className="space-y-3 text-slate-400 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#CFB56D]" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>123 Elite Avenue, Downtown,<br/>New York, NY 10001</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#CFB56D]" data-lucide="phone" strokeWidth="1.5"></i>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#CFB56D]" data-lucide="mail" strokeWidth="1.5"></i>
<span><a className="__cf_email__" data-cfemail="d9bab6b7bab0bcabbebc99adb1bcb8adbcb5b0bcabf7bab6b4" href="/cdn-cgi/l/email-protection">[email protected]</a></span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Hours</h4>
<ul className="space-y-3 text-slate-400 text-sm">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-slate-200">9:00 AM - 8:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-slate-200">10:00 AM - 7:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-[#CFB56D]">By Appt. Only</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-slate-400 hover:text-[#CFB56D] hover:border-[#CFB56D] transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-slate-400 hover:text-[#CFB56D] hover:border-[#CFB56D] transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-600 text-xs">
                    © 2023 The Atelier Salon. All rights reserved.
                </p>
<div className="flex gap-6 text-xs text-slate-600">
<a className="hover:text-slate-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div></footer>
    </>
  );
}
