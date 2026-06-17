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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
                LAXMI
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#projects">Projects</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="tel:+919978600222">076239998366<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></a>
<a className="hover:bg-emerald-600 transition-all flex items-center gap-2 shadow-emerald-200 text-sm font-medium text-white bg-emerald-500 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="https://wa.me/919978600222" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="hidden sm:inline">WhatsApp Us</span>
</a>
</div>
</div>
</nav>

<section className="lg:pt-32 lg:pb-40 overflow-hidden pt-20 pb-32 relative">
<div className="grid lg:grid-cols-2 gap-16 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-xs font-medium mb-8 border border-amber-100/50">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                    25+ Years of Excellence in Surat
                </div>
<div className="z-10 mb-8 relative">
<div className="inline-block relative">

<div className="absolute -inset-2 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 opacity-30 blur-2xl rounded-full"></div>
<h1 className="sm:text-7xl lg:text-8xl bg-clip-text leading-none uppercase text-6xl font-bold text-transparent tracking-tighter bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 pb-1 relative">Laxmi REALTORS</h1>
</div>
</div>
<p className="text-xl font-medium tracking-tight text-slate-700 mb-3">
                    Find Your Perfect Property in Surat.
                </p>
<p className="text-lg text-slate-500 mb-10 leading-relaxed font-light">
                    Trusted real estate experts specializing in premium residential and commercial spaces. Experience transparency, quality, and legacy.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center gap-2" href="https://wa.me/919978600222" target="_blank">
                        Get Details on WhatsApp
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all flex items-center justify-center" href="#projects">
                        View Projects
                    </a>
</div>
</div>
<div className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group border border-slate-100/50">

<img alt="Premium Modern Real Estate" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-200/50">
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">25+</div>
<div className="text-sm text-slate-500 font-medium">Years Experience</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">50+</div>
<div className="text-sm text-slate-500 font-medium">Projects Delivered</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">10k+</div>
<div className="text-sm text-slate-500 font-medium">Happy Families</div>
</div>
<div className="text-center px-4">
<div className="text-3xl font-semibold tracking-tight text-slate-900 mb-1">100%</div>
<div className="text-sm text-slate-500 font-medium">Transparency</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Real Estate Services</h2>
<p className="text-slate-500 font-light">Expert guidance across all property sectors in Surat.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Residential Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Residential</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">Premium apartments, villas, and plots designed for modern family living.</p>
</div>
</div>

<div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Commercial Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon className="text-2xl" icon="solar:city-linear"></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Commercial</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">Strategic office spaces and retail shops to elevate your business presence.</p>
</div>
</div>

<div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Investment Property" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Investment</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">High-ROI property investments in Surat's fastest-growing corridors.</p>
</div>
</div>

<div className="group rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-48 overflow-hidden">
<img alt="Consulting Services" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors shadow-sm">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<div className="p-6 md:p-8 flex-1 flex flex-col">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">Expert market analysis, legal guidance, and precise property valuation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col sm:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Featured Projects</h2>
<p className="text-slate-500 font-light">Discover our latest premium developments shaping the skyline of Surat.</p>
</div>
<a className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1 group" href="https://wa.me/919978600222" target="_blank">
                    Request Full Brochure 
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Residency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Residential</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Residency</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Vesu, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">Ultra-luxurious 4 &amp; 5 BHK apartments with world-class amenities, private elevators, and panoramic city views.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Residency" target="_blank">Inquire Now</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Business Hub" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Commercial</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Business Hub</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Adajan, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">Premium corporate office spaces and high-street retail showrooms designed for maximum footfall and productivity.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Business%20Hub" target="_blank">Inquire Now</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Green Villas" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Residential</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Green Villas</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Dumas Road, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">Exclusive gated community featuring 40 bespoke luxury villas with private pools, lush gardens, and supreme privacy.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Green%20Villas" target="_blank">Inquire Now</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Corporate Park" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Commercial</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Corporate Park</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Piplod, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">A state-of-the-art IT &amp; corporate hub offering smart office solutions, extensive parking, and eco-friendly design.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Corporate%20Park" target="_blank">Inquire Now</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Skyline" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Residential</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Skyline</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Palanpur, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">Contemporary 3 BHK apartments offering the perfect blend of modern architecture and family-centric amenities.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Skyline" target="_blank">Inquire Now</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Laxmi Arcade" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-slate-900">Commercial</div>
</div>
<div className="p-8 flex flex-col flex-1">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Laxmi Arcade</h3>
<p className="text-sm text-slate-500 flex items-center gap-1 font-light">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Varachha, Surat
                                </p>
</div>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed flex-1">A dynamic commercial center tailored for emerging businesses, providing premium retail and office spaces in a prime location.</p>
<div className="flex items-center gap-4 mt-auto">
<a className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-3 rounded-xl text-sm font-medium transition-colors" href="https://wa.me/919978600222?text=I%20am%20interested%20in%20Laxmi%20Arcade" target="_blank">Inquire Now</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square rounded-3xl overflow-hidden">
<img alt="About Laxmi Developers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-amber-500 text-white p-8 rounded-3xl max-w-xs shadow-xl hidden md:block">
<p className="text-4xl font-semibold tracking-tight mb-2">25+</p>
<p className="text-sm font-medium text-amber-50 leading-snug">Years of building trust and transforming Surat's skyline.</p>
</div>
</div>
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Why Choose Laxmi Developers?</h2>
<p className="text-slate-500 font-light mb-10 leading-relaxed">We don't just build structures; we create landmarks. Our commitment to quality, timely delivery, and ethical business practices has made us a trusted name in Surat's real estate market.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-1 tracking-tight">Unmatched Trust</h4>
<p className="text-sm text-slate-500 font-light">A legacy of over two decades built on transparency and keeping our promises.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-1 tracking-tight">Premium Quality</h4>
<p className="text-sm text-slate-500 font-light">Using the finest materials and modern architectural designs for lasting value.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-1 tracking-tight">Customer First</h4>
<p className="text-sm text-slate-500 font-light">End-to-end support from site visits to hassle-free possession and beyond.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 text-center mb-16">What Our Clients Say</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Purchasing our dream home with Laxmi Developers was a seamless experience. The construction quality and timely possession exceeded our expectations."</p>
<div className="font-medium text-slate-900 text-sm">- Rajesh Patel</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Their commercial spaces are perfectly designed for modern businesses. The location and amenities have significantly helped our firm's growth."</p>
<div className="font-medium text-slate-900 text-sm">- Amit Shah</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-light leading-relaxed">"Highly professional and transparent team. They guided me perfectly for my property investment in Surat. Truly a trusted name."</p>
<div className="font-medium text-slate-900 text-sm">- Vikram Desai</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden text-white bg-slate-900 rounded-t-[3rem] mt-auto pt-24 pb-12 relative" id="contact">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 border-white/10 border-b mb-20 pb-20 gap-x-16 gap-y-16">
<div className="">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Ready to find your property?</h2>
<p className="text-slate-400 font-light mb-8 max-w-md">Connect with our experts today. We are available on WhatsApp and phone to assist you with your real estate needs.</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2" href="https://wa.me/919978600222" target="_blank">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
                            Chat on WhatsApp
                        </a>
<a className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full text-sm font-medium transition-all flex items-center justify-center gap-2" href="tel:+919978600222">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            Call Us Directly
                        </a>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-8 lg:justify-end">
<div className="">
<h4 className="text-sm font-medium text-slate-300 mb-4 tracking-tight uppercase">Contact Details</h4>
<ul className="space-y-4 text-sm text-slate-400 font-light">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:phone-linear"></iconify-icon>
<span className="">07623998366</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<span className="">info@laxmidevelopers.com</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>Surat, Gujarat, India</span>
</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-slate-300 mb-4 tracking-tight uppercase">Quick Links</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li className=""><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#projects">Featured Projects</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light">
<div className="text-xl font-semibold tracking-tighter text-white flex items-center gap-2">
                    LAXMI
                    <span className="w-1 h-1 rounded-full bg-amber-500"></span>
</div>
<p>© 2023 Laxmi Developers. All rights reserved.</p>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:-translate-y-1 hover:scale-105 transition-all duration-300" href="https://wa.me/919978600222" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-linear"></iconify-icon>
<span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-pulse"></span>
</a>

    </>
  );
}
