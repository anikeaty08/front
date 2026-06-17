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
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif-custom text-2xl tracking-tighter uppercase font-medium text-stone-900" href="#">
                Aura
            </a>
<nav className="hidden md:flex gap-10 text-sm font-medium tracking-wide text-stone-800">
<a className="hover:text-[#B89856] transition-colors duration-300" href="#about">About</a>
<a className="hover:text-[#B89856] transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-[#B89856] transition-colors duration-300" href="#portfolio">Portfolio</a>
<a className="hover:text-[#B89856] transition-colors duration-300" href="#contact">Contact</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center px-7 py-2.5 text-sm font-medium text-white bg-stone-900 hover:bg-[#B89856] transition-colors duration-300" href="#contact">
                Get Free Consultation
            </a>

<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20">
<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950/80"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-10">
<span className="block text-[#B89856] text-xs md:text-sm uppercase tracking-widest font-medium mb-6">Exclusive Spaces</span>
<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
                Design Your Dream Space With Elegance
            </h1>
<p className="text-base md:text-lg font-light text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                We create stylish, functional and luxurious interiors tailored to your lifestyle.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white bg-[#B89856] hover:bg-[#9c8046] transition-colors duration-300" href="#contact">
                    Get Free Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-4 text-sm font-medium text-white border border-white/30 hover:bg-white hover:text-stone-900 transition-colors duration-300" href="#portfolio">
                    View Our Work
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="relative order-2 lg:order-1">
<img alt="Elegant Living Room" className="w-full h-[500px] md:h-[600px] object-cover" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute -bottom-10 -right-10 bg-stone-50 p-10 hidden md:block border border-stone-100">
<div className="text-5xl font-serif-custom text-[#B89856] mb-2 font-medium tracking-tight">15+</div>
<div className="text-xs font-medium tracking-widest uppercase text-stone-900">Years of<br/>Excellence</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">About Us</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-8 leading-tight">
                    Crafting Timeless &amp; Sophisticated Environments
                </h2>
<p className="text-sm md:text-base text-stone-500 mb-6 leading-relaxed">
                    At Aura, we believe that true luxury lies in the flawless integration of aesthetics and function. For over a decade, we have been transforming ordinary rooms into extraordinary living experiences, creating spaces that are both deeply personal and universally stunning.
                </p>
<p className="text-sm md:text-base text-stone-500 mb-10 leading-relaxed">
                    Our tailored approach ensures that every project, from high-end residential to premium commercial spaces, is executed with unparalleled attention to detail, utilizing the finest materials and masterful craftsmanship.
                </p>
<div className="flex items-center gap-5">
<img alt="Principal Designer" className="w-14 h-14 rounded-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<div className="text-sm font-medium text-stone-900">Elena Rostova</div>
<div className="text-xs text-[#B89856] uppercase tracking-widest mt-1">Principal Designer</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-20 max-w-2xl mx-auto">
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">What We Do</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Our Services</h2>
<p className="text-sm md:text-base text-stone-500">Comprehensive design solutions curated to elevate your living and working environments to the highest standards of luxury.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
<div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-stone-900 mb-4">Home Interior</h3>
<p className="text-sm text-stone-500 leading-relaxed">Bespoke residential designs that harmonize grandeur with everyday comfort, creating sanctuaries you'll cherish.</p>
</div>

<div className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
<div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-stone-900 mb-4">Office Design</h3>
<p className="text-sm text-stone-500 leading-relaxed">Inspiring commercial workspaces designed to boost productivity, reflect prestige, and leave a lasting impression.</p>
</div>

<div className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
<div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:cup-hot-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-stone-900 mb-4">Modular Kitchen</h3>
<p className="text-sm text-stone-500 leading-relaxed">State-of-the-art culinary spaces combining elegant aesthetics with intelligent storage and ergonomic mastery.</p>
</div>

<div className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
<div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-stone-900 mb-4">3D Visualization</h3>
<p className="text-sm text-stone-500 leading-relaxed">Immersive, photorealistic 3D renderings that allow you to envision the perfection of your space before execution.</p>
</div>

<div className="bg-white p-10 border border-stone-100 hover:border-[#B89856]/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group">
<div className="w-14 h-14 flex items-center justify-center bg-stone-50 text-stone-900 mb-8 group-hover:bg-[#B89856] group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-stone-900 mb-4">Renovation</h3>
<p className="text-sm text-stone-500 leading-relaxed">Complete structural and aesthetic overhauls to breathe refined new life into outdated or inefficient spaces.</p>
</div>

<div className="bg-stone-900 p-10 flex flex-col items-center justify-center text-center group">
<h3 className="text-xl md:text-2xl font-serif-custom font-medium tracking-tight text-white mb-6">Ready to transform your space?</h3>
<a className="inline-flex items-center gap-3 text-sm text-[#B89856] hover:text-white transition-colors duration-300 font-medium uppercase tracking-widest" href="#contact">
                        Let's Talk <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Portfolio</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-4">Selected Works</h2>
<p className="text-sm md:text-base text-stone-500">A curated exhibition of our most distinguished residential and commercial masterpieces.</p>
</div>
<a className="text-xs md:text-sm font-medium text-stone-900 hover:text-[#B89856] transition-colors inline-flex items-center gap-2 uppercase tracking-widest" href="#contact">
                    View All Projects <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden h-[400px]">
<img alt="Modern Living" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h4 className="text-white font-serif-custom text-2xl font-medium tracking-tight mb-1">Minimalist Penthouse</h4>
<p className="text-stone-300 text-xs uppercase tracking-widest">Residential</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px]">
<img alt="Classic Elegance" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h4 className="text-white font-serif-custom text-2xl font-medium tracking-tight mb-1">Heritage Villa</h4>
<p className="text-stone-300 text-xs uppercase tracking-widest">Estate</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] lg:row-span-2 lg:h-auto">
<img alt="Executive Suite" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h4 className="text-white font-serif-custom text-2xl font-medium tracking-tight mb-1">Apex Corporate</h4>
<p className="text-stone-300 text-xs uppercase tracking-widest">Commercial</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px]">
<img alt="Gourmet Kitchen" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h4 className="text-white font-serif-custom text-2xl font-medium tracking-tight mb-1">Culinary Haven</h4>
<p className="text-stone-300 text-xs uppercase tracking-widest">Modular Kitchen</p>
</div>
</div>

<div className="group relative overflow-hidden h-[400px]">
<img alt="Serene Bedroom" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
<h4 className="text-white font-serif-custom text-2xl font-medium tracking-tight mb-1">The Oasis Suite</h4>
<p className="text-stone-300 text-xs uppercase tracking-widest">Residential</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-950 text-stone-300">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Our Standard</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-white mb-8">Why Partner With Aura?</h2>
<p className="text-stone-400 mb-12 leading-relaxed text-sm md:text-base">We don't merely design spaces; we curate distinct lifestyle experiences. Our unwavering commitment to excellence ensures every project is a masterpiece of form and function.</p>
<div className="space-y-10">
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 flex items-center justify-center border border-stone-800 text-[#B89856] bg-stone-900/50">
<iconify-icon icon="solar:medal-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2 text-base md:text-lg tracking-tight">Uncompromising Quality</h4>
<p className="text-sm text-stone-400 leading-relaxed">We source only the rarest, finest materials and collaborate with elite artisans to guarantee flawless, lasting execution.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 flex items-center justify-center border border-stone-800 text-[#B89856] bg-stone-900/50">
<iconify-icon icon="solar:history-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2 text-base md:text-lg tracking-tight">Decades of Mastery</h4>
<p className="text-sm text-stone-400 leading-relaxed">With extensive experience in luxury design, our seasoned team anticipates challenges and delivers seamless solutions.</p>
</div>
</div>
<div className="flex gap-6">
<div className="w-12 h-12 shrink-0 flex items-center justify-center border border-stone-800 text-[#B89856] bg-stone-900/50">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2 text-base md:text-lg tracking-tight">Transparent Affordability</h4>
<p className="text-sm text-stone-400 leading-relaxed">We provide detailed budgeting, ensuring maximum value and premium quality without obscured costs.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] md:h-[700px]">
<img alt="Quality Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 border border-stone-800 m-6 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-20">
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Client Feedback</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Voices of Elegance</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-10 border border-stone-100 relative">
<iconify-icon className="text-stone-100 absolute top-8 left-8" icon="solar:quote-left-linear" style={{strokeWidth: '1'}} width="60"></iconify-icon>
<p className="text-stone-600 text-sm md:text-base leading-relaxed relative z-10 mb-8 pt-6">"The attention to detail and ability to capture our vision was extraordinary. Our home now feels like a luxury hotel yet retains a beautifully warm, inviting atmosphere."</p>
<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-serif-custom text-lg">MR</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Michael &amp; Sarah R.</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Residential Client</p>
</div>
</div>
</div>

<div className="bg-white p-10 border border-stone-100 relative">
<iconify-icon className="text-stone-100 absolute top-8 left-8" icon="solar:quote-left-linear" style={{strokeWidth: '1'}} width="60"></iconify-icon>
<p className="text-stone-600 text-sm md:text-base leading-relaxed relative z-10 mb-8 pt-6">"They completely revitalized our corporate office. The new layout has improved workflow remarkably, and the sophisticated design constantly impresses our elite clientele."</p>
<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-serif-custom text-lg">JT</div>
<div>
<h4 className="text-sm font-medium text-stone-900">James T.</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">CEO, TechNova</p>
</div>
</div>
</div>

<div className="bg-white p-10 border border-stone-100 relative">
<iconify-icon className="text-stone-100 absolute top-8 left-8" icon="solar:quote-left-linear" style={{strokeWidth: '1'}} width="60"></iconify-icon>
<p className="text-stone-600 text-sm md:text-base leading-relaxed relative z-10 mb-8 pt-6">"From the initial 3D visualizations to the final reveal, the entire process was seamless. The bespoke modular kitchen they designed is truly the magnificent heart of our home."</p>
<div className="flex items-center gap-4 border-t border-stone-100 pt-6">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-serif-custom text-lg">AL</div>
<div>
<h4 className="text-sm font-medium text-stone-900">Anita L.</h4>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Estate Owner</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 lg:gap-8">

<div className="lg:col-span-3 lg:pr-12">
<span className="block text-[#B89856] text-xs uppercase tracking-widest font-medium mb-4">Inquire</span>
<h2 className="font-serif-custom text-3xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6">Start Your Project</h2>
<p className="text-stone-500 text-sm md:text-base mb-10">Fill out the form below and our design directors will contact you to schedule an exclusive consultation.</p>
<form className="space-y-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">First Name</label>
<input className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 placeholder:text-stone-300" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Last Name</label>
<input className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 placeholder:text-stone-300" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Email Address</label>
<input className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 placeholder:text-stone-300" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Service Required</label>
<div className="relative">
<select className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 text-stone-900 appearance-none cursor-pointer">
<option className="text-stone-300" disabled="" selected="" value="">Select a service</option>
<option value="home">Home Interior</option>
<option value="office">Office Design</option>
<option value="kitchen">Modular Kitchen</option>
<option value="renovation">Renovation</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-medium text-stone-900 uppercase tracking-widest mb-3">Project Details</label>
<textarea className="w-full border-b border-stone-200 bg-transparent py-2 text-sm focus:outline-none focus:border-[#B89856] transition-colors duration-300 resize-none placeholder:text-stone-300" placeholder="Tell us about your vision..." required="" rows="4"></textarea>
</div>
<button className="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 text-sm font-medium hover:bg-[#B89856] transition-colors duration-300 mt-4" type="submit">
                        Send Request
                    </button>
</form>
</div>

<div className="lg:col-span-2 bg-stone-50 p-10 lg:p-14 border border-stone-100 flex flex-col justify-between h-full">
<div>
<h3 className="font-serif-custom text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-10">Connect With Us</h3>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#B89856]">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-2 uppercase tracking-widest">Studio Address</h4>
<p className="text-sm text-stone-500 leading-relaxed">City Centre,<br/>Dhanbad, Jharkhand,<br/>India</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#B89856]">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-2 uppercase tracking-widest">Direct Line</h4>
<a className="text-sm text-stone-500 hover:text-[#B89856] transition-colors block" href="tel:9905030934">9905030934</a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="mt-0.5 text-[#B89856]">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-medium text-stone-900 mb-2 uppercase tracking-widest">Email</h4>
<a className="text-sm text-stone-500 hover:text-[#B89856] transition-colors block" href="mailto:hello@auradesign.com">hello@auradesign.com</a>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-10 border-t border-stone-200">
<p className="text-xs text-stone-900 uppercase tracking-widest font-medium mb-6">Immediate Assistance</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm font-medium" href="tel:9905030934">
                            Call Now
                        </a>
<a className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-[#25D366] text-white hover:bg-[#20b858] transition-colors text-sm font-medium gap-2" href="https://wa.me/919905030934" target="_blank">
<svg height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-.1.14-.118l-.54-.26z" fill="currentColor"></path></svg>
                            WhatsApp
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-500 py-12 md:py-16 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="font-serif-custom text-2xl tracking-tighter uppercase font-medium text-white">
                    Aura
                </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:pin-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon></a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide border-t border-stone-900/50 pt-8">
<div>
                    © 2023 Aura Interior Design. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 z-50" href="https://wa.me/919905030934" target="_blank">
<svg height="30" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><path d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.2-.58.2-.1.14-.118l-.54-.26z" fill="currentColor"></path></svg>
</a>

    </>
  );
}
