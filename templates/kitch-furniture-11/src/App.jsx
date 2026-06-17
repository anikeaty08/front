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
      

<header className="fixed top-0 inset-x-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter uppercase text-zinc-900 flex items-center gap-1" href="#">
                KITCH
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="hover:text-zinc-900 transition-colors text-sm font-medium text-zinc-500" href="/#">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Materials</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Journal</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Showrooms</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Log in</a>
<a className="group bg-zinc-900 text-zinc-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-900/20 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center gap-2" href="#">
                    Book Consultation
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform duration-300" height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<button className="md:hidden text-zinc-900 p-2 -mr-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="animate-fade-in-up inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/60 mb-8">
<span className="w-2 h-2 rounded-full bg-zinc-400"></span>
<span className="text-xs font-medium text-zinc-600">New: The Nordic Oak Collection</span>
</div>
<h1 className="animate-fade-in-up delay-100 text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-900 mb-6">
                        Architecture for your culinary space.
                    </h1>
<p className="animate-fade-in-up delay-200 text-lg md:text-xl text-zinc-500 font-normal leading-relaxed mb-10 max-w-lg">
                        Bespoke cabinetry and intelligent storage solutions designed to elevate the heart of your home. Engineered in Europe, crafted for life.
                    </p>
<div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="sm:w-auto hover:bg-zinc-800 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/20 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm font-medium text-zinc-50 bg-zinc-900 w-full rounded-full pt-3 pr-6 pb-3 pl-6" href="/#privet">
                            Explore Collections
                        </a>
<a className="group w-full sm:w-auto bg-transparent border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-zinc-200/50 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Watch the film
                        </a>
</div>
</div>
<div className="animate-image-reveal delay-500 relative w-full aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-200">
<img alt="Modern minimalist kitchen" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{objectPosition: 'center 60%'}}/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent"></div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-28 h-28 md:w-36 md:h-36 z-20 bg-white/90 backdrop-blur-md rounded-full shadow-2xl border border-white/50 flex items-center justify-center overflow-hidden transition-transform duration-700 hover:scale-105">

<div className="absolute inset-2 border border-dashed border-zinc-300 rounded-full animate-[spin_12s_linear_infinite]"></div>

<div className="absolute inset-5 border border-zinc-200 rounded-full animate-[spin_8s_linear_infinite_reverse] flex items-center justify-center">
<div className="w-full h-[1px] bg-zinc-200/50"></div>
<div className="h-full w-[1px] absolute bg-zinc-200/50"></div>
</div>

<div className="relative z-10 w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center shadow-inner">
<iconify-icon className="text-white animate-[spin_16s_linear_infinite]" height="20" icon="solar:sun-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y cursor-pointer bg-white border-zinc-100 pt-24 pb-24" onclick="window.location.href='/privet'" role="button">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Uncompromising quality in every detail.</h2>
<p className="text-base text-zinc-500">We believe a kitchen should be as functional as it is beautiful. Our approach combines traditional craftsmanship with precision engineering.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-700">
<iconify-icon height="24" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Bespoke Planning</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every spatial dimension is considered. Our designers work with you to create a layout that optimizes flow and utility.</p>
</div>

<div className="">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-700">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Premium Materials</h3>
<p className="text-sm text-zinc-500 leading-relaxed">From solid sustainable hardwoods to ultra-matte anti-fingerprint surfaces, we source only the finest materials globally.</p>
</div>

<div className="">
<div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 text-zinc-700">
<iconify-icon className="" height="24" icon="solar:ruler-cross-pen-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-2">Precision Installation</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Fitted by our own teams of master carpenters, ensuring absolute perfection down to the final millimeter adjustment.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Design your atmosphere.</h2>
<p className="text-base text-zinc-500 mb-8">Experiment with finishes, hardware, and countertop materials using our interactive studio tool before making a commitment.</p>
<div className="space-y-8 bg-white p-8 rounded-2xl border border-zinc-200/60 shadow-sm">

<div className="">
<label className="block text-xs font-medium text-zinc-900 uppercase tracking-widest mb-3">Cabinet Finish</label>
<div className="flex gap-3">
<button aria-label="Light Oak" className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-zinc-900 ring-2 ring-transparent transition-all focus:outline-none"></button>
<button aria-label="Charcoal Matte" className="w-10 h-10 rounded-full bg-stone-700 border-2 border-transparent hover:border-zinc-300 transition-all focus:outline-none"></button>
<button aria-label="Warm White" className="w-10 h-10 rounded-full bg-neutral-200 border-2 border-transparent hover:border-zinc-300 transition-all focus:outline-none"></button>
<button aria-label="Forest Green" className="w-10 h-10 rounded-full bg-emerald-900 border-2 border-transparent hover:border-zinc-300 transition-all focus:outline-none"></button>
</div>
</div>

<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<label className="text-sm font-medium text-zinc-900">Handleless Design</label>
<button aria-checked="true" className="relative inline-flex h-5 w-9 items-center rounded-full bg-zinc-900 transition-colors focus:outline-none" role="switch">
<span className="translate-x-4 inline-block h-4 w-4 rounded-full bg-white transition-transform"></span>
</button>
</div>

<div className="pt-4 border-t border-zinc-100 opacity-50 pointer-events-none">
<label className="block text-xs font-medium text-zinc-900 uppercase tracking-widest mb-2">Hardware Style</label>
<div className="flex items-center justify-between w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-500">
<span>Knurled Brass Bar</span>
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200">
<img alt="Kitchen island detail" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-2">Featured Modules</h2>
<p className="text-base text-zinc-500">Explore specific components of our systems.</p>
</div>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors flex items-center gap-1 pb-1 border-b border-zinc-900" href="#">
                    View full catalog
                    <iconify-icon height="14" icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block cursor-pointer" href="#">
<div className="w-full aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Tall Cabinets" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight">Tall Storage Systems</h3>
<p className="text-xs text-zinc-500 mt-1">Pantry &amp; Integrated Appliances</p>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors">01</span>
</div>
</a>

<a className="group block cursor-pointer" href="#">
<div className="w-full aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Kitchen Island" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight">Monolithic Islands</h3>
<p className="text-xs text-zinc-500 mt-1">Preparation &amp; Dining</p>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors">02</span>
</div>
</a>

<a className="group block cursor-pointer md:hidden lg:block" href="#">
<div className="w-full aspect-[4/5] bg-zinc-100 rounded-xl overflow-hidden mb-4 relative">
<img alt="Base Units" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-zinc-900 tracking-tight">Base Units</h3>
<p className="text-xs text-zinc-500 mt-1">Drawers &amp; Under-counter</p>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-900 transition-colors">03</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to redefine your space?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">Schedule a complimentary consultation with one of our spatial designers either in a showroom or via video call.</p>
<a className="group inline-flex items-center justify-center gap-2 bg-white text-zinc-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-zinc-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/10 active:translate-y-0 active:scale-[0.98] transition-all duration-300" href="#">
                Book an Appointment
                <iconify-icon className="group-hover:scale-110 transition-transform duration-300" height="18" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-zinc-50 pt-20 pb-10 border-t border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="text-xl font-semibold tracking-tighter uppercase text-zinc-900 mb-6">
                        KITCH
                    </div>
<p className="text-sm text-zinc-500 max-w-xs mb-6">
                        Designing and crafting premium kitchen furniture for modern, mindful living spaces.
                    </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all duration-300" href="#"><iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 hover:-translate-y-0.5 transition-all duration-300" href="#"><iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Cabinetry</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Islands</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Hardware</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Surfaces</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Showrooms</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-zinc-900 uppercase tracking-widest mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Care Guide</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Warranty</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">
                    © 2024 Kitch Furniture Ltd. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-zinc-400 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
