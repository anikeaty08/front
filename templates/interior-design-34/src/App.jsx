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



// Simple Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#fdfbf9]/90 backdrop-blur-md border-b border-[#e8d9cb]/30">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="md:text-2xl uppercase text-xl text-[#0d0f0b] tracking-tighter font-serif" href="#">Interior Designer</a>

<div className="hidden md:flex items-center space-x-10 text-xs tracking-widest uppercase font-medium text-[#0d0f0b]/80">
<a className="hover:text-[#C5A065] transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="#portfolio">Portfolio</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="#process">Process</a>
<a className="px-6 py-3 border border-[#0d0f0b] hover:bg-[#0d0f0b] hover:text-white transition-all duration-300" href="#contact">Contact</a>
</div>

<label className="md:hidden cursor-pointer z-50" htmlFor="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</label>
<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>

<div className="fixed inset-0 bg-[#fdfbf9] z-40 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center space-y-8 opacity-0" id="mobile-menu">
<a className="text-2xl font-serif text-[#0d0f0b]" href="#philosophy">Philosophy</a>
<a className="text-2xl font-serif text-[#0d0f0b]" href="#services">Services</a>
<a className="text-2xl font-serif text-[#0d0f0b]" href="#portfolio">Portfolio</a>
<a className="text-2xl font-serif text-[#0d0f0b]" href="#process">Process</a>
<a className="text-lg uppercase tracking-widest border-b border-[#0d0f0b] pb-2" href="#contact">Contact Us</a>
<label className="absolute top-6 right-6 cursor-pointer" htmlFor="mobile-menu-toggle">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</label>
</div>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover object-center brightness-75 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0d0f0b]/30 z-10"></div>
<div className="relative z-20 text-center text-white px-6 reveal-on-scroll">
<p className="text-xs md:text-sm tracking-[0.3em] uppercase mb-6 text-[#f3e5d5]/90 font-light">Warsaw Based Interior Design</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight mb-4 leading-tight">
                Architekt<br/><span className="italic font-light">Wnętrz</span>
</h1>
<p className="text-sm md:text-lg font-light tracking-wide max-w-lg mx-auto mb-10 text-white/90">
                Timeless interiors. Thoughtful design. Creating bespoke spaces that stand the test of time.
            </p>
<a className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-white pb-2 hover:text-[#f3e5d5] hover:border-[#f3e5d5] transition-all duration-300" href="#portfolio">
                Discover Our Projects
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
<iconify-icon icon="solar:mouse-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-[#fdfbf9] overflow-hidden" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal-on-scroll">
<div className="absolute -top-10 -left-10 w-2/3 h-full border border-[#e8d9cb] z-0 hidden md:block"></div>
<img alt="Aleksandra Stefaniak" className="relative z-10 w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:pl-12 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-[#0d0f0b] mb-8 leading-tight tracking-tight">
                        We design with <span className="italic text-[#C5A065]">precision</span> and passion.
                    </h2>
<div className="w-16 h-[1px] bg-[#0d0f0b] mb-8"></div>
<p className="text-gray-600 mb-6 font-light leading-relaxed text-sm md:text-base">
                        At Architekt Wnętrz Aleksandra Stefaniak, we believe that true luxury lies in the harmony between functionality and aesthetics. Based in Warsaw, our studio specializes in creating residential and showcase interiors that are not only visually stunning but impeccably tailored to your lifestyle.
                    </p>
<p className="text-gray-600 mb-10 font-light leading-relaxed text-sm md:text-base">
                        Our philosophy is rooted in "Contemporary Classics"—styles that withstand the test of time. We layer neutral palettes with rich textures, art, and bespoke details to craft spaces that feel both expansive and intimate.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<span className="block text-3xl font-serif text-[#0d0f0b]">10+</span>
<span className="text-xs uppercase tracking-widest text-gray-500">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-serif text-[#0d0f0b]">100%</span>
<span className="text-xs uppercase tracking-widest text-gray-500">Tailored Design</span>
</div>
</div>
<img alt="Signature" className="h-12 opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f3e5d5]/30" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-xs tracking-[0.2em] uppercase text-[#C5A065] font-semibold mb-3 block">Expertise</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#0d0f0b] tracking-tight">Our Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<iconify-icon icon="solar:ruler-pen-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Interior Design</h3>
<p className="text-xs leading-relaxed text-gray-500 font-light">
                        Comprehensive design from layout proposals to 3D visualizations and technical documentation.
                    </p>
</div>

<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Home Staging</h3>
<p className="text-xs leading-relaxed text-gray-500 font-light">
                        Strategic property preparation for sale or rental to maximize value and aesthetic appeal.
                    </p>
</div>

<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<iconify-icon icon="solar:home-wifi-angle-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Visualizations</h3>
<p className="text-xs leading-relaxed text-gray-500 font-light">
                        High-end photorealistic 3D renderings to help you visualize the potential of your space.
                    </p>
</div>

<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-serif mb-3">Consultation</h3>
<p className="text-xs leading-relaxed text-gray-500 font-light">
                        Pre-purchase analysis, developer collaboration, and remote design advisory.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#fdfbf9]" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end reveal-on-scroll">
<div>
<span className="text-xs tracking-[0.2em] uppercase text-[#C5A065] font-semibold mb-3 block">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#0d0f0b] tracking-tight">Selected Works</h2>
</div>
<div className="mt-6 md:mt-0">
<a className="text-xs tracking-widest uppercase border-b border-[#0d0f0b] pb-1 hover:text-[#C5A065] hover:border-[#C5A065] transition-colors" href="#">View All Projects</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6">

<div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">

<div className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal-on-scroll">
<img alt="Bathroom Interior" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0d0f0b]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-[#C5A065] text-xs tracking-widest uppercase mb-2">Residential</span>
<h3 className="text-white font-serif text-2xl">Mokotów Apartment</h3>
<p className="text-gray-300 font-light text-sm mt-2">Modern classic bathroom renovation.</p>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal-on-scroll">
<img alt="Living Room" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0d0f0b]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-[#C5A065] text-xs tracking-widest uppercase mb-2">Showcase</span>
<h3 className="text-white font-serif text-2xl">Sobieskiego Penthouse</h3>
<p className="text-gray-300 font-light text-sm mt-2">Open plan living with panoramic views.</p>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal-on-scroll">
<img alt="Kitchen" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#0d0f0b]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-[#C5A065] text-xs tracking-widest uppercase mb-2">Renovation</span>
<h3 className="text-white font-serif text-2xl">Minimalist Kitchen</h3>
<p className="text-gray-300 font-light text-sm mt-2">Functional elegance with brass details.</p>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal-on-scroll">
<img alt="Bedroom" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0d0f0b]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-[#C5A065] text-xs tracking-widest uppercase mb-2">Residential</span>
<h3 className="text-white font-serif text-2xl">Master Suite</h3>
<p className="text-gray-300 font-light text-sm mt-2">Serene colors and soft textures.</p>
</div>
</div>

<div className="break-inside-avoid group relative overflow-hidden cursor-pointer reveal-on-scroll">
<img alt="Home Office" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=1992&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0d0f0b]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
<span className="text-[#C5A065] text-xs tracking-widest uppercase mb-2">Commercial</span>
<h3 className="text-white font-serif text-2xl">Legal Office</h3>
<p className="text-gray-300 font-light text-sm mt-2">Professional, classic workspace.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0d0f0b] text-white" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight mb-2">The Process</h2>
<p className="text-gray-400 font-light text-sm">From concept to realization.</p>
</div>
</div>
<div className="relative">

<div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gray-800"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="relative reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">01</span>
</div>
<h3 className="text-xl font-serif mb-3 text-center lg:text-left">Consultation</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed text-center lg:text-left">
                            We begin with a deep dive into your needs, lifestyle, and aesthetic preferences.
                        </p>
</div>

<div className="relative reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">02</span>
</div>
<h3 className="text-xl font-serif mb-3 text-center lg:text-left">Concept &amp; 3D</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed text-center lg:text-left">
                            Development of functional layouts and photorealistic visualizations of the space.
                        </p>
</div>

<div className="relative reveal-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">03</span>
</div>
<h3 className="text-xl font-serif mb-3 text-center lg:text-left">Documentation</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed text-center lg:text-left">
                            Detailed executive drawings, material lists, and technical specifications for contractors.
                        </p>
</div>

<div className="relative reveal-on-scroll" style={{transitionDelay: '400ms'}}>
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">04</span>
</div>
<h3 className="text-xl font-serif mb-3 text-center lg:text-left">Realization</h3>
<p className="text-xs text-gray-400 font-light leading-relaxed text-center lg:text-left">
                            Coordination with craftsmen, supervision, and final styling to bring the vision to life.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f3e5d5] text-[#0d0f0b]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="reveal-on-scroll">
<iconify-icon className="mb-4 text-[#0d0f0b]" icon="solar:star-circle-linear" strokeWidth="1" width="48"></iconify-icon>
<h3 className="text-xl font-serif mb-2">Timeless Aesthetics</h3>
<p className="text-sm font-light text-gray-700">Designs that remain elegant and relevant for years to come.</p>
</div>
<div className="reveal-on-scroll">
<iconify-icon className="mb-4 text-[#0d0f0b]" icon="solar:users-group-rounded-linear" strokeWidth="1" width="48"></iconify-icon>
<h3 className="text-xl font-serif mb-2">Client-Centric</h3>
<p className="text-sm font-light text-gray-700">A collaborative approach that prioritizes your vision and comfort.</p>
</div>
<div className="reveal-on-scroll">
<iconify-icon className="mb-4 text-[#0d0f0b]" icon="solar:shield-check-linear" strokeWidth="1" width="48"></iconify-icon>
<h3 className="text-xl font-serif mb-2">Technical Precision</h3>
<p className="text-sm font-light text-gray-700">Rigorous attention to detail in documentation and execution.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#fdfbf9] relative" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

<div className="relative bg-[#0d0f0b] text-white p-12 lg:p-24 flex flex-col justify-center">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2301&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 reveal-on-scroll">
<h2 className="text-4xl lg:text-6xl font-serif mb-8 tracking-tight">Let's Discuss <br/>Your Project.</h2>
<p className="text-gray-300 font-light mb-12 max-w-md">
                        Ready to transform your space? Contact us for a consultation or to learn more about our design process.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5A065] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div className="">
<h4 className="font-serif text-lg">Visit Us</h4>
<p className="text-sm font-light text-gray-400" style={{}}>Sobieskiego Warszawa, Poland</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5A065] mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div className="">
<h4 className="font-serif text-lg">Call Us</h4>
<p className="hover:text-white transition-colors cursor-pointer text-sm font-light text-gray-400">+48 600 000 000</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#C5A065] mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div className="">
<h4 className="font-serif text-lg">Opening Hours</h4>
<p className="text-gray-400 text-sm font-light">Mon - Fri: 10:00 - 18:00</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-12 lg:p-24 flex flex-col justify-center bg-[#fdfbf9]">
<form className="space-y-10 max-w-md mx-auto w-full reveal-on-scroll">
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#0d0f0b] transition-colors" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none" htmlFor="name">Your Name</label>
</div>
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#0d0f0b] transition-colors" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#0d0f0b] transition-colors" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<label className="text-xs uppercase tracking-widest text-gray-500 mb-4 block">Project Type</label>
<div className="flex flex-wrap gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-gray-300 text-sm text-gray-600 peer-checked:bg-[#0d0f0b] peer-checked:text-white peer-checked:border-[#0d0f0b] transition-all">Residential</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-gray-300 text-sm text-gray-600 peer-checked:bg-[#0d0f0b] peer-checked:text-white peer-checked:border-[#0d0f0b] transition-all">Commercial</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<span className="px-4 py-2 border border-gray-300 text-sm text-gray-600 peer-checked:bg-[#0d0f0b] peer-checked:text-white peer-checked:border-[#0d0f0b] transition-all">Consultation</span>
</label>
</div>
</div>
<div className="relative">
<textarea className="custom-input block w-full bg-transparent border-b border-gray-400 py-2 focus:outline-none focus:border-[#0d0f0b] transition-colors resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-2 text-gray-500 text-sm transition-all duration-300 pointer-events-none" htmlFor="message">Tell us about your project</label>
</div>
<button className="group w-full py-4 bg-[#0d0f0b] text-white uppercase tracking-widest text-xs hover:bg-[#C5A065] transition-colors duration-300 flex items-center justify-center gap-2" type="button">
                        Send Message
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:letter-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#0d0f0b] text-white border-t border-gray-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="">
<h3 className="text-2xl font-serif mb-2">Interior Designer</h3>
<p className="text-xs text-gray-500 tracking-widest uppercase">Architekt Wnętrz</p>
</div>
<div className="flex gap-6 mt-6 md:mt-0">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="w-full h-px bg-gray-800 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between text-xs font-light text-gray-500">
<p>© 2023 Architekt Wnętrz Aleksandra Stefaniak. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
