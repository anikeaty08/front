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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="uppercase flex items-center gap-2 text-base font-semibold text-white tracking-tighter" href="#">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
    K. David Construction
  </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-zinc-400">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-sm text-xs font-semibold hover:bg-zinc-200 transition-colors tracking-tight" href="#contact">
    Inquire
    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Interior" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex gap-2 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="uppercase text-xs font-medium text-zinc-300 tracking-wide">Available for 2026 Projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.95] mb-8">
                We build the <br/>
<span className="text-zinc-500">exceptional.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed max-w-xl mx-auto mb-12">
                Specializing in luxury estates, architectural renovations, and custom interiors. Crafted with precision for the discerning few.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                    Start Your Project
                </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 bg-black/50 backdrop-blur-sm text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-white/10 transition-colors" href="#projects">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-zinc-400">Scroll</span>
<div className="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
</div>
</section>

<section className="border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h3 className="text-3xl font-medium text-white tracking-tight">20+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Years Experience</p>
</div>
<div className="">
<h3 className="text-3xl font-medium text-white tracking-tight">100+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Luxury Builds</p>
</div>
<div className="">
<h3 className="text-3xl font-medium text-white tracking-tight">A+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Rating</p>
</div>
<div className="">
<h3 className="text-3xl font-medium text-white tracking-tight">100%</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Client Privacy</p>
</div>
</div>
</section>

<section className="md:py-32 bg-[#050505] pt-24 pb-24" id="expertise">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Our Expertise</h2>
<p className="text-zinc-400 text-sm max-w-md leading-relaxed">Comprehensive high-end construction services tailored to
        specific architectural needs.</p>
</div>
<a className="text-xs font-semibold text-white uppercase tracking-widest border-b border-white/30 pb-1 hover:border-white transition-colors" href="#contact">Full
      Service List</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-sm overflow-hidden">

<div className="md:p-10 transition-colors group bg-[#080808] pt-8 pr-8 pb-8 pl-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Luxury Home Background" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:city-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">New Construction</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
          Ground-up custom luxury homes built with architectural integrity and structural precision.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] pt-8 pr-8 pb-8 pl-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Luxury Spa Bathroom" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9610cf4-c2cf-4832-9db8-f90d8be923b4_800w.png"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 relative">
<iconify-icon className="group-hover:scale-110 transition-transform duration-500 text-3xl text-white mb-6" height="30" icon="solar:bath-linear" style={{color: 'rgb(255, 255, 255)'}} width="30"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Spa Bathrooms</h3>
<p className="leading-relaxed group-hover:text-zinc-300 transition-colors duration-300 text-sm text-zinc-500">Sanctuary-grade bathrooms featuring imported stone, custom
        vanities, and steam systems.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] pt-8 pr-8 pb-8 pl-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 group-hover:opacity-40 transition-opacity duration-700 ease-out opacity-0">
<img alt="Luxury Custom Kitchen" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/493cda14-bb10-4d44-8659-bf547b3c27b5_800w.png"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:chef-hat-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Luxury Kitchens</h3>
<p className="leading-relaxed text-sm text-zinc-500 group-hover:text-zinc-300 transition-colors duration-300">Chef-inspired culinary spaces with bespoke cabinetry and premium
          appliance integration.</p>
</div>
</div>

<div className="md:p-10 transition-colors group md:col-span-2 overflow-hidden bg-[#080808] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Luxury Closet" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b992dbb-bab6-4b44-b24e-01df27be1bc2_1600w.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:closet-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Signature Dream Closets</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors duration-300">Our hallmark service. Boutique-style walk-in closets
          designed with islands, display lighting, and glass-enclosed storage for the ultimate wardrobe experience.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] pt-8 pr-8 pb-8 pl-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Restoration Interior" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Restoration</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Discreet mold remediation and water damage repair, returning
          properties to pristine condition.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] p-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Home Additions" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c31f82d-8de5-4e92-bfd3-f3dd68e825a3_800w.png"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:home-add-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Additions</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Seamless expansions and custom rooms.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] p-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Architectural Roofing" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e50f7573-6870-49eb-b006-9959c580a0fc_800w.png"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:umbrella-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Roofing Systems</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Architectural roofing and waterproofing.</p>
</div>
</div>

<div className="md:p-10 transition-colors group bg-[#080808] p-8 relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 ease-out">
<img alt="Custom Entertainment Room" className="transition-transform duration-1000 group-hover:scale-110 filter group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e202652-0c50-46b9-a17d-aa3c36230631_800w.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 relative">
<iconify-icon className="text-white mb-6 text-3xl group-hover:scale-110 transition-transform duration-500" icon="solar:tv-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Entertainment</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">Custom cinema and media rooms.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#050505] border-white/5 border-t pt-24 pb-24" id="projects">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-16 text-center">Selected Works</h2>
<div className="space-y-20">

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 relative overflow-hidden rounded-sm">
<img alt="Estate" className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-90 group-hover:brightness-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-5 lg:pl-8">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3 block">New Construction</span>
<h3 className="text-3xl font-medium text-white mb-4 tracking-tight">The Highland Estate</h3>
<p className="text-zinc-400 font-light leading-relaxed mb-8">A 12,000 sq ft modern residence featuring floor-to-ceiling glass, floating staircases, and integrated smart home technology.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors gap-2" href="#">
                            View Project <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5 lg:order-1 order-2 lg:pr-8">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-3 block">Interior Renovation</span>
<h3 className="text-3xl font-medium text-white tracking-tight mb-4">Custom Closet Series</h3>
<p className="leading-relaxed font-light text-zinc-400 mb-8">Custom millwork in light oak, illuminated shoe galleries, and a marble center island for the ultimate private dressing room.</p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors gap-2" href="#">
                            View Project <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 lg:order-2 order-1 overflow-hidden rounded-sm relative">
<img alt="Closet" className="aspect-[4/3] transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-100 w-full object-cover brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff484f06-0b7c-4c04-974b-417db840f995_1600w.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-grid border-y border-white/5 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="relative">
<span className="text-5xl font-light text-white/10 absolute -top-8 -left-4">01</span>
<h4 className="text-lg font-medium text-white mb-3 relative z-10">Consultation</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We meet to understand your vision, requirements, and architectural scope.</p>
</div>
<div className="relative">
<span className="text-5xl font-light text-white/10 absolute -top-8 -left-4">02</span>
<h4 className="text-lg font-medium text-white mb-3 relative z-10">Planning</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Detailed material selection, architectural drawings, and project scheduling.</p>
</div>
<div className="relative">
<span className="text-5xl font-light text-white/10 absolute -top-8 -left-4">03</span>
<h4 className="text-lg font-medium text-white mb-3 relative z-10">Execution</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Construction begins with our master craftsmen and project management.</p>
</div>
<div className="relative">
<span className="text-5xl font-light text-white/10 absolute -top-8 -left-4">04</span>
<h4 className="text-lg font-medium text-white mb-3 relative z-10">Completion</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Final walkthrough, white-glove cleaning, and project handover.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#050505]" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Start the Conversation</h2>
<p className="text-zinc-400 font-light mb-12">Submit your details below for a private consultation regarding your project.</p>

<form action="https://n8n-axze.onrender.com/webhook/bb52669d-713c-480a-b92c-b69434d0ad98" className="text-left bg-zinc-900/30 p-8 rounded-sm border border-white/5 backdrop-blur-sm" method="POST">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" htmlFor="fullName">Name</label>
<input className="w-full bg-black/50 border border-zinc-800 focus:border-white/50 rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-zinc-700" id="fullName" name="fullName" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" htmlFor="email">Email</label>
<input className="w-full bg-black/50 border border-zinc-800 focus:border-white/50 rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-zinc-700" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" htmlFor="phone">Phone</label>
<input className="w-full bg-black/50 border border-zinc-800 focus:border-white/50 rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-zinc-700" id="phone" name="phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" htmlFor="interest">Interest</label>
<div className="relative">
<select className="w-full bg-black/50 border border-zinc-800 focus:border-white/50 rounded-sm px-4 py-3 text-white text-sm outline-none transition-all appearance-none cursor-pointer" id="interest" name="interest">
<option value="New Construction">New Construction</option>
<option value="Dream Closet Design">Dream Closet Design</option>
<option value="Kitchen/Bath Remodel">Kitchen/Bath Remodel</option>
<option value="Restoration Services">Restoration Services</option>
<option value="Other">Other</option>
</select>
<iconify-icon className="absolute right-4 top-3.5 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mb-8">
<label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-black/50 border border-zinc-800 focus:border-white/50 rounded-sm px-4 py-3 text-white text-sm outline-none transition-all placeholder:text-zinc-700 resize-none" id="message" name="message" placeholder="Tell us about your project timeline and requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="submit">
                    Request Consultation
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-sm font-semibold tracking-tight text-white uppercase">K. David Construction</span>
<span className="text-xs text-zinc-600">Built for Distinction.</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
