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
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: {
50: '#FBF9F5',
100: '#F5F0E6',
200: '#E8DCC5',
300: '#DBC7A3',
400: '#D1B888', // muted gold
500: '#C0A06B',
900: '#5C4827',
},
charcoal: '#1A1A1A',
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
      

<div className="bg-charcoal text-white text-xs py-3 text-center tracking-wide font-medium">
<span className="">Accepting new patients for Summer 2024. Complimentary Virtual Consultations Available.</span>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-charcoal z-50 relative group" href="#">
                LUMIÈRE
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-charcoal transition-all duration-300 group-hover:w-full"></span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-charcoal transition-colors text-sm font-medium text-slate-500" href="#services" style={{}}>Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-charcoal transition-colors" href="#technology">Technology</a>
<a className="hover:text-charcoal transition-colors text-sm font-medium text-slate-500" href="#gallery" style={{}}>Reviews</a>
<a className="hover:text-charcoal transition-colors text-sm font-medium text-slate-500" href="#concierge">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-neutral-200 px-5 py-2.5 rounded-full hover:border-charcoal hover:bg-charcoal hover:text-white transition-all duration-300 group" href="#contact">
<span>Book Consultation</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-charcoal">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-24 pb-32 relative md:pt-2 md:pb-2 lg:pt-0 lg:pb-0">
<div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mr-auto ml-auto pr-0 pb-20 pl-0 gap-x-16 gap-y-16 items-center">
<div className="fade-in-up max-w-2xl pt-0 pr-0 pb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-100 bg-neutral-50 mb-8">
<span className="w-2 h-2 rounded-full bg-neutral-400"></span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">Aesthetic Dentistry</span>
</div>
<h1 className="lg:text-7xl text-charcoal leading-[1.1] text-5xl font-medium tracking-tight mb-8">
                    The architecture <br/>
<span className="italic text-neutral-400 font-serif pt-0 pb-0">of confidence.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-slate-500 max-w-md mb-10">
                    Redefining the dental experience with concierge-level care, advanced technology, and artistry tailored to the sophisticated patient.
                </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-charcoal text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors shadow-lg shadow-neutral-200" href="#contact">
                        Request Appointment
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white border border-neutral-200 text-charcoal rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors" href="#gallery">
                        View Portfolio
                    </a>
</div>
<div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:star" strokeWidth="1.5" width="16"></iconify-icon>
<span>Top 1% Provider</span>
</div>
<div className="w-px h-4 bg-neutral-200"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:award" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Board Certified</span>
</div>
</div>
</div>
<div className="lg:h-[700px] fade-in-up delay-200 overflow-hidden group w-full h-[600px] rounded-2xl relative">

<img alt="Minimalist Modern Architecture" className="transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95] w-full h-full max-w-5xl max-h-96 object-cover absolute top-20 right-0 bottom-20 left-0" src="https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?w=1600&amp;q=80"/>
<div className="bg-white/90 max-w-xs border-white/20 border rounded-xl pt-6 pr-8 pb-6 pl-6 absolute bottom-8 left-8 shadow-xl backdrop-blur">
<p className="font-serif italic text-xl mb-1 text-charcoal">"A transformative experience."</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden">
<img className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-xs font-medium text-slate-500">Sarah J. — Veneers &amp; Whitening</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-charcoal text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-24 items-center">
<div className="relative">
<div className="aspect-[4/5] bg-neutral-800 rounded-lg overflow-hidden relative">
<img alt="High tech dental studio" className="opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1757767503913-8e6025b793a5?w=1600&amp;q=80"/>

<div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg max-w-[200px]">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-white" icon="lucide:scan" width="16"></iconify-icon>
<span className="text-xs font-medium">Digital Workflow</span>
</div>
<p className="text-[10px] text-neutral-300 leading-tight">Precision down to the micron with 3D Guided Surgery.</p>
</div>
</div>
</div>
<div className="">
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4 block">The Facility</span>
<h2 className="lg:text-5xl text-4xl font-medium tracking-tight mb-8" style={{}}>Not a clinic. A sanctuary.</h2>
<p className="text-neutral-400 font-light text-lg mb-10 leading-relaxed">
                        We have reimagined the dental visit. From noise-canceling headphones and ceiling-mounted entertainment to our aromatherapy menu and sedation options, your comfort is our clinical priority.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="lucide:armchair" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium">Massage Chairs</h4>
<p className="text-xs text-neutral-500">Relax in premium leather ergonomics.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="lucide:coffee" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium">Beverage Bar</h4>
<p className="text-xs text-neutral-500">Sparkling water, espresso, and herbal teas.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium">Private Suites</h4>
<p className="text-xs text-neutral-500">Soundproofed for your complete privacy.</p>
</div>
<div className="flex flex-col gap-2">
<iconify-icon className="text-white mb-2" icon="lucide:wallet" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium">Transparent Financing</h4>
<p className="text-xs text-neutral-500">Concierge billing and insurance handling.</p>
</div>
</div>
<a className="text-white border-b border-white/30 pb-1 hover:border-white transition-all text-sm" href="#about">Explore our technology</a>
</div>
</div>
</div>
</section>

<section className="border-y bg-neutral-50/50 border-neutral-100 pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-slate-400 mb-8">Featured In</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-50 grayscale transition-all hover:grayscale-0 duration-500">

<span className="text-xl font-serif font-bold tracking-tight">VOGUE</span>
<span className="text-xl font-serif font-bold tracking-tight">ELLE</span>
<span className="text-xl font-serif font-bold tracking-tight">HARPER'S BAZAAR</span>
<span className="text-xl font-sans font-bold tracking-tighter">GQ</span>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-charcoal tracking-tight mb-4">Curated Treatments</h2>
<p className="text-slate-500 max-w-md font-light">Bespoke procedures designed for minimal invasiveness and maximum impact.</p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-charcoal pb-1 border-b border-charcoal/30 hover:border-charcoal transition-all" href="#">
                    View Full Menu
                    <iconify-icon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 border border-neutral-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-neutral-800" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-charcoal mb-3">Porcelain Veneers</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                        Hand-crafted, ultra-thin porcelain shells designed to perfect shape, shade, and alignment. The ultimate smile makeover.
                    </p>
<ul className="space-y-2 mb-8 border-t border-neutral-200 pt-6">
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            Stain Resistant
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            2-Visit Transformation
                        </li>
</ul>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400 group-hover:text-charcoal transition-colors">From $2,500 / tooth</span>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 border border-neutral-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-neutral-800" icon="lucide:scan-face" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-charcoal mb-3">Invisalign® Black Diamond</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                        Discreet orthodontic correction using advanced 3D imaging. Achieve symmetry without compromising your lifestyle.
                    </p>
<ul className="space-y-2 mb-8 border-t border-neutral-200 pt-6">
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            iTero 5D Digital Scanning
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            Accelerated Treatment Plans
                        </li>
</ul>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400 group-hover:text-charcoal transition-colors">Avg. $5,500 - $8,000</span>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-2xl hover:shadow-neutral-200/50 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-8 border border-neutral-100 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-neutral-800" icon="lucide:gem" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-charcoal mb-3">Full Mouth Restoration</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-8">
                        Comprehensive reconstruction using titanium implants and zirconia crowns. Restoring function and aesthetics permanently.
                    </p>
<ul className="space-y-2 mb-8 border-t border-neutral-200 pt-6">
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            Sedation Available
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-600">
<iconify-icon className="text-neutral-400" icon="lucide:check" width="12"></iconify-icon>
                            Lifetime Warranty
                        </li>
</ul>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400 group-hover:text-charcoal transition-colors">Consultation Required</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gold-50/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-neutral-300 mx-auto mb-8" icon="lucide:quote" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-serif italic text-charcoal leading-tight mb-8">
                "I never thought a dental appointment could feel like a spa day. The results are flawless, but the experience was the true luxury."
            </h2>
<div className="flex items-center justify-center gap-4">
<span className="text-sm font-semibold tracking-wide uppercase">Emily R.</span>
<span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
<span className="text-sm text-slate-500">Corporate Attorney</span>
</div>
</div>
</section>


<footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-medium tracking-tighter text-charcoal mb-6 block" href="#">LUMIÈRE</a>
<p className="text-sm text-slate-400 font-light">
                        Elevating dentistry to an art form. <br/>Exclusively in Beverly Hills.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-6">Treatments</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-charcoal transition-colors" href="#">Porcelain Veneers</a></li>
<li><a className="hover:text-charcoal transition-colors" href="#">Invisalign</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-6">Patient Center</h4>
<ul className="space-y-4 text-sm text-slate-500 font-light">
<li><a className="hover:text-charcoal transition-colors" href="#">Virtual Consultation</a></li>
<li><a className="hover:text-charcoal transition-colors" href="#">Financing Options</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-6">Connect</h4>
<div className="flex gap-4 mb-6">
<a className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-slate-600 hover:bg-charcoal hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-slate-600 hover:bg-charcoal hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:facebook" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-slate-600 hover:bg-charcoal hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">© 2024 Lumière Dental Studio. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-charcoal" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-charcoal" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
