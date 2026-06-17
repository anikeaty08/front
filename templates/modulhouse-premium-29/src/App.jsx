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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

<a className="text-[#F2F2F2] font-serif text-xl tracking-tighter hover:text-[#D4AF37] transition-colors duration-300" href="#">
                MODULHOUSE
            </a>

<div className="hidden md:flex items-center space-x-12">
<a className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300" href="#philosophy">PHILOSOPHY</a>
<a className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300" href="#models">MODELS</a>
<a className="text-sm tracking-wide hover:text-[#F2F2F2] transition-colors duration-300" href="#specs">SPECS</a>
</div>

<div className="hidden md:block">
<a className="btn-gold text-[#121212] font-semibold text-xs tracking-widest uppercase px-8 py-3 rounded-[2px]" href="#contact">
                    Inquire
                </a>
</div>

<button className="md:hidden text-[#F2F2F2]">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-end justify-start">

<div className="absolute inset-0 z-0">
<img alt="Cinematic Modular House" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 w-full">
<div className="max-w-3xl">
<span className="block text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-4">German Engineering</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 tracking-tight font-normal text-[#F2F2F2]">
                    Living, <br/>
<span className="italic text-[#D4AF37] font-light">Refined.</span>
</h1>
<p className="text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10 text-[#B0B0B0]">
                    Immersive matte black architecture designed for the discerning individual. Minimalist luxury meets sustainable modular precision.
                </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="btn-gold text-[#121212] font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-[2px] inline-flex items-center gap-2" href="#models">
                        View Collection
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="text-[#F2F2F2] flex items-center gap-3 group hover:text-[#D4AF37] transition-colors duration-300">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37]">
<iconify-icon className="ml-0.5" icon="lucide:play" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-xs tracking-widest uppercase">Watch Film</span>
</button>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#121212]" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
<div className="md:col-span-7">
<h2 className="text-3xl md:text-5xl font-normal leading-tight tracking-tight mb-8">
                        "Architecture is not just about shelter. It is about framing the <span className="text-[#D4AF37] italic">sublime</span> moments of life."
                    </h2>
</div>
<div className="md:col-span-5 md:pl-8 border-l border-[#333]">
<p className="text-base font-light leading-relaxed mb-6">
                        We strip away the non-essential to reveal the exceptional. ModulHouse combines German structural precision with the warmth of high-end interior design.
                    </p>
<div className="flex items-center gap-8 pt-4">
<div>
<span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">10y</span>
<span className="text-xs uppercase tracking-widest text-[#666]">Warranty</span>
</div>
<div>
<span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">A++</span>
<span className="text-xs uppercase tracking-widest text-[#666]">Energy</span>
</div>
<div>
<span className="block text-2xl md:text-3xl font-serif text-[#F2F2F2]">12w</span>
<span className="text-xs uppercase tracking-widest text-[#666]">Delivery</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1E1E1E]" id="models">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-2 block">The Collection</span>
<h2 className="text-4xl md:text-5xl tracking-tight">Curated Models</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#D4AF37] transition-colors" href="#">
                    View All Specs <iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="img-zoom-container rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6 relative">
<img alt="Model 40" className="img-zoom w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-[#121212]/90 backdrop-blur px-3 py-1">
<span className="text-[#D4AF37] text-xs tracking-wider">BESTSELLER</span>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-[#D4AF37] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight">Model 40 <span className="text-[#666] text-lg font-serif italic ml-2">The Studio</span></h3>
<span className="text-sm font-light tracking-wide">40m²</span>
</div>
<div className="flex justify-between items-center mt-3 text-sm text-[#666]">
<span>1 Bedroom / 1 Bath</span>
<span>From €85,000</span>
</div>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="img-zoom-container rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6">
<img alt="Model 75" className="img-zoom w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-[#D4AF37] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight">Model 75 <span className="text-[#666] text-lg font-serif italic ml-2">The Loft</span></h3>
<span className="text-sm font-light tracking-wide">75m²</span>
</div>
<div className="flex justify-between items-center mt-3 text-sm text-[#666]">
<span>2 Bedroom / 1.5 Bath</span>
<span>From €145,000</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="img-zoom-container rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6">
<img alt="Model 110" className="img-zoom w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-[#D4AF37] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight">Model 110 <span className="text-[#666] text-lg font-serif italic ml-2">The Villa</span></h3>
<span className="text-sm font-light tracking-wide">110m²</span>
</div>
<div className="flex justify-between items-center mt-3 text-sm text-[#666]">
<span>3 Bedroom / 2 Bath</span>
<span>From €210,000</span>
</div>
</div>

<div className="group cursor-pointer md:mt-12">
<div className="img-zoom-container rounded-[2px] w-full aspect-[16/10] bg-[#121212] mb-6 relative">
<img alt="Bespoke" className="img-zoom w-full h-full object-cover opacity-90 group-hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2100&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#121212]/40 flex items-center justify-center">
<span className="border border-[#F2F2F2] px-6 py-2 text-xs uppercase tracking-widest text-[#F2F2F2]">Consultation Only</span>
</div>
</div>
<div className="flex justify-between items-baseline border-b border-[#333] pb-4 group-hover:border-[#D4AF37] transition-colors duration-500">
<h3 className="text-2xl font-normal tracking-tight">Bespoke <span className="text-[#666] text-lg font-serif italic ml-2">Custom Build</span></h3>
<span className="text-sm font-light tracking-wide">Unlimited</span>
</div>
<div className="flex justify-between items-center mt-3 text-sm text-[#666]">
<span>Architectural Service</span>
<span>Inquire for Price</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212]" id="specs">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#333] pt-12">
<div className="space-y-4">
<iconify-icon className="text-[#D4AF37]" icon="lucide:maximize" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif">Floor-to-Ceiling Glass</h4>
<p className="text-sm text-[#666] leading-relaxed">Triple-glazed, argon-filled safety glass maximizing natural light while ensuring thermal efficiency.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-[#D4AF37]" icon="lucide:layers" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif">Acoustic Isolation</h4>
<p className="text-sm text-[#666] leading-relaxed">Multi-layer wall composition providing studio-grade soundproofing for absolute serenity.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-[#D4AF37]" icon="lucide:cpu" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-xl font-serif">Smart Integration</h4>
<p className="text-sm text-[#666] leading-relaxed">Pre-wired for total home automation. Control lighting, climate, and security from one interface.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121212] relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#1E1E1E] to-transparent opacity-50 z-0"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-[#D4AF37] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block">Begin the Process</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-4">Secure Your Allocation</h2>
<p className="text-[#666] font-light">Limited production slots available for 2024 delivery.</p>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="name">Full Name</label>
<input className="bg-transparent border-b border-[#555] focus:border-[#D4AF37] focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333]" id="name" placeholder="Enter your name" type="text"/>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="email">Email Address</label>
<input className="bg-transparent border-b border-[#555] focus:border-[#D4AF37] focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333]" id="email" placeholder="name@company.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="model">Model Interest</label>
<div className="relative">
<select className="bg-transparent border-b border-[#555] focus:border-[#D4AF37] outline-none w-full py-2 text-[#F2F2F2] text-lg font-light appearance-none rounded-none cursor-pointer" id="model">
<option className="bg-[#1E1E1E]">Model 40 - The Studio</option>
<option className="bg-[#1E1E1E]">Model 75 - The Loft</option>
<option className="bg-[#1E1E1E]">Model 110 - The Villa</option>
<option className="bg-[#1E1E1E]">Bespoke Inquiry</option>
</select>
<div className="absolute right-0 top-3 pointer-events-none text-[#666]">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="group">
<label className="block text-xs uppercase tracking-widest text-[#666] mb-2 group-focus-within:text-[#D4AF37] transition-colors" htmlFor="message">Message</label>
<textarea className="bg-transparent border-b border-[#555] focus:border-[#D4AF37] focus:ring-0 outline-none w-full py-2 text-[#F2F2F2] text-lg font-light transition-colors placeholder-[#333] resize-none" id="message" placeholder="Tell us about your land location..." rows="2"></textarea>
</div>
<div className="pt-8 flex justify-center">
<button className="btn-gold text-[#121212] font-semibold text-sm tracking-widest uppercase px-12 py-4 rounded-[2px] w-full md:w-auto" type="button">
                        Submit Inquiry
                    </button>
</div>
<p className="text-center text-xs text-[#444] mt-4">By submitting, you agree to our privacy policy. Average response time: 24h.</p>
</form>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-[#F2F2F2] font-serif text-2xl tracking-tighter hover:text-[#D4AF37] transition-colors duration-300" href="#">
                    MODULHOUSE
                </a>
<p className="text-[#444] text-xs mt-2 font-light">
                    Berlin • Munich • Zurich
                </p>
</div>
<div className="flex flex-col md:flex-row gap-8 md:gap-12">
<a className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors" href="#">Instagram</a>
<a className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors" href="#">LinkedIn</a>
<a className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors" href="#">Imprint</a>
<a className="text-xs uppercase tracking-widest text-[#666] hover:text-[#F2F2F2] transition-colors" href="#">Privacy</a>
</div>
<div className="text-[#333] text-xs">
                © 2024 ModulHouse GmbH.
            </div>
</div>
</footer>

    </>
  );
}
