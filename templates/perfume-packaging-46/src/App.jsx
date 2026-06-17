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
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#3b82f6',
600: '#2563eb', // Primary Blue
700: '#1d4ed8',
800: '#1e40af',
900: '#0f172a', // Deep Navy/Slate
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
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
      

<div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 pr-2 hidden md:flex">

<a className="group relative flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-lg rounded-xl transition-all duration-300 hover:-translate-x-1 hover:border-[#25D366]" href="#">
<iconify-icon className="text-slate-500 group-hover:text-[#25D366] transition-colors" icon="solar:chat-round-call-linear" width="24"></iconify-icon>

<div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-xl">
                WhatsApp Us
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</a>

<a className="group relative flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-lg rounded-xl transition-all duration-300 hover:-translate-x-1 hover:border-brand-600" href="tel:+8612345678900">
<iconify-icon className="text-slate-500 group-hover:text-brand-600 transition-colors" icon="solar:phone-calling-linear" width="24"></iconify-icon>

<div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-xl">
                +86 123 4567 8900
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</a>

<a className="group relative flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm hover:shadow-lg rounded-xl transition-all duration-300 hover:-translate-x-1 hover:border-orange-500" href="mailto:sales@anranglass.com">
<iconify-icon className="text-slate-500 group-hover:text-orange-500 transition-colors" icon="solar:letter-linear" width="24"></iconify-icon>

<div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-x-2 group-hover:translate-x-0 shadow-xl">
                sales@anranglass.com
                <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</a>
</div>

<nav className="fixed top-0 w-full z-40 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2.5 z-50" href="#">
<div className="w-9 h-9 bg-brand-600 text-white flex items-center justify-center rounded-lg shadow-lg shadow-brand-200">
<span className="font-serif italic text-xl">A</span>
</div>
<div className="flex flex-col">
<span className="text-lg tracking-tighter font-semibold text-slate-900 uppercase leading-none">Anran Glass</span>
<span className="text-[0.6rem] tracking-widest text-brand-600 font-medium uppercase mt-0.5">Est. 2009</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-1">

<div className="group relative px-4 py-6">
<button className="flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-brand-600 transition-colors">
                        Products
                        <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full -left-12 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 opacity-0 visibility-hidden transform translate-y-2 transition-all duration-200 grid grid-cols-2 gap-6">
<a className="block space-y-1 p-3 hover:bg-slate-50 rounded-xl transition-colors" href="#">
<div className="flex items-center gap-2 text-brand-600 mb-1">
<iconify-icon icon="solar:bottle-perfume-linear" width="18"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Glass Bottles</span>
</div>
<p className="text-xs text-slate-500">Premium flint glass, polished &amp; private molds.</p>
</a>
<a className="block space-y-1 p-3 hover:bg-slate-50 rounded-xl transition-colors" href="#">
<div className="flex items-center gap-2 text-brand-600 mb-1">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Caps &amp; Closures</span>
</div>
<p className="text-xs text-slate-500">Zamac, wood, and magnetic alloy caps.</p>
</a>
<a className="block space-y-1 p-3 hover:bg-slate-50 rounded-xl transition-colors" href="#">
<div className="flex items-center gap-2 text-brand-600 mb-1">
<iconify-icon icon="solar:gift-linear" width="18"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Gift Sets</span>
</div>
<p className="text-xs text-slate-500">Rigid boxes and full packaging solutions.</p>
</a>
<a className="block space-y-1 p-3 hover:bg-slate-50 rounded-xl transition-colors" href="#">
<div className="flex items-center gap-2 text-brand-600 mb-1">
<iconify-icon icon="solar:star-shine-linear" width="18"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Accessories</span>
</div>
<p className="text-xs text-slate-500">Pumps, collars, and decorative plates.</p>
</a>
</div>
</div>

<div className="group relative px-4 py-6">
<button className="flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-brand-600 transition-colors">
                        Services
                        <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 opacity-0 visibility-hidden transform translate-y-2 transition-all duration-200">
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-sm text-slate-600 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
                            3D Design &amp; Rendering
                        </a>
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-sm text-slate-600 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
                            Mold Development
                        </a>
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-sm text-slate-600 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:paint-roller-linear"></iconify-icon>
                            Decoration &amp; Coating
                        </a>
</div>
</div>

<div className="group relative px-4 py-6">
<button className="flex items-center gap-1.5 text-sm font-medium text-slate-500 group-hover:text-brand-600 transition-colors">
                        Markets
                        <iconify-icon className="transition-transform group-hover:rotate-180" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full -left-4 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 opacity-0 visibility-hidden transform translate-y-2 transition-all duration-200">
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-sm text-slate-600 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:globe-linear"></iconify-icon>
                            Global Export
                        </a>
<a className="flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg text-sm text-slate-600 hover:text-brand-600 transition-colors" href="#">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            Middle East Focus
                        </a>
</div>
</div>
<a className="px-4 text-sm font-medium text-slate-500 hover:text-brand-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-brand-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-brand-700 transition-all hover:shadow-lg hover:shadow-brand-200" href="#contact">
<span>Get a Quote</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="lg:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-50 to-transparent -z-10"></div>
<div className="absolute top-20 left-20 w-72 h-72 bg-brand-200 rounded-full blur-[100px] opacity-20 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-xs font-medium text-brand-600 shadow-sm">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear"></iconify-icon>
                    15 Years of Excellence in Perfume Packaging
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Defining Luxury <br/>
<span className="text-brand-600 font-serif italic pr-2">Middle East</span> &amp; <br/>
                    Global Markets.
                </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    Since 2009, Anran Glass has been the trusted partner for prestigious fragrance houses in Dubai, Riyadh, Paris, and beyond. We blend oriental aesthetics with modern manufacturing.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<button className="bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-600 transition-all hover:scale-[1.02] flex items-center gap-2 shadow-xl shadow-slate-200">
                        View Collections
                        <iconify-icon icon="solar:bottle-perfume-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full text-sm font-medium text-slate-600 hover:bg-white transition-all border border-slate-200 bg-white/50 backdrop-blur-sm">
                        Our Process
                    </button>
</div>

<div className="pt-8 border-t border-slate-200/60 flex gap-8">
<div>
<p className="text-2xl font-bold text-slate-900 tracking-tight">15+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Exp.</p>
</div>
<div>
<p className="text-2xl font-bold text-slate-900 tracking-tight">40+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Countries</p>
</div>
<div>
<p className="text-2xl font-bold text-slate-900 tracking-tight">500+</p>
<p className="text-xs text-slate-500 uppercase tracking-wide mt-1">Clients</p>
</div>
</div>
</div>
<div className="relative group perspective-1000">
<div className="absolute inset-4 bg-brand-600 rounded-[2.5rem] rotate-3 opacity-10 group-hover:rotate-6 transition-transform duration-700"></div>
<img alt="Blue Premium Perfume Bottle" className="relative rounded-[2rem] shadow-2xl shadow-brand-900/10 object-cover w-full h-[600px] transition-transform duration-700 hover:scale-[1.01]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-12 -left-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-lg border border-white/50 max-w-xs hidden lg:block animate-float">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Middle East Specialist</h3>
<p className="text-xs text-slate-500 mt-0.5">Expertise in heavy glass &amp; Attar designs.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-serif italic font-bold">Rasasi</span>
<span className="text-lg font-sans font-bold tracking-[0.2em]">AJMAL</span>
<span className="text-lg font-serif font-semibold">Arabian Oud</span>
<span className="text-lg font-sans font-light tracking-widest">AMOUAGE</span>
<span className="text-lg font-mono tracking-tighter font-bold">SWISS ARABIAN</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-600 text-xs font-semibold tracking-wider uppercase mb-3 block">Since 2009</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 mb-6">A Legacy of Quality Across Borders</h2>
<p className="text-slate-500 text-lg">We understand the nuances of different markets. From the heavy, polished glass preferred in the Middle East to the minimalist aesthetics of Europe, our 15 years of expertise ensures your brand resonates with your audience.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Middle East Expertise</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized in producing crystal-clear flint glass bottles with heavy bottoms, perfect for luxury oud and oil-based perfumes.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Quality Assurance</h3>
<p className="text-sm text-slate-500 leading-relaxed">15 years of refining our QC process. Every bottle undergoes rigorous vacuum and optical testing before shipment.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-100 transition-all duration-300 group">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Logistics Mastery</h3>
<p className="text-sm text-slate-500 leading-relaxed">Seamless shipping solutions to Dubai, Jeddah, Doha, and global ports. We handle customs documentation and safe palletizing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="collections">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-2xl">
<span className="text-brand-600 text-xs font-semibold tracking-wider uppercase mb-2 block">Our Collections</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">Craftsmanship in Glass</h2>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-brand-600 mt-4 md:mt-0" href="#">
                    View Full Catalogue 
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300 z-10"></div>
<img alt="Perfume Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-20">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900">Royal Sapphire Series</h3>
<p className="text-xs text-slate-500 mt-1">100ml • Hand-Polished</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300 z-10"></div>
<img alt="Perfume Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-20">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900">Crystal Oud Collection</h3>
<p className="text-xs text-slate-500 mt-1">50ml • Heavy Bottom</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300 z-10"></div>
<img alt="Perfume Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-20">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900">Modern Minimalist</h3>
<p className="text-xs text-slate-500 mt-1">30ml / 50ml / 100ml</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/5 transition-colors duration-300 z-10"></div>
<img alt="Perfume Bottle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-brand-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg z-20">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</div>
<h3 className="text-base font-semibold text-slate-900">Custom Shapes</h3>
<p className="text-xs text-slate-500 mt-1">Bespoke Design Service</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-900 to-transparent opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<span className="text-brand-400 text-xs font-semibold tracking-wider uppercase">Integrated Solutions</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mt-2">One-Stop Manufacturing</h2>
</div>
<div className="space-y-6">

<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Decoration &amp; Finishing</h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed">
                                    Silk screening, hot stamping (Gold/Silver/Rose Gold), frosting, coating, and polishing. We offer the specific decoration techniques favored in the Gulf region.
                                </p>
</div>
</div>

<div className="flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-brand-400">
<iconify-icon icon="solar:cart-large-2-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white">Packaging Assembly</h4>
<p className="text-sm text-slate-400 mt-2 leading-relaxed">
                                    We match caps, pumps, and collars perfectly. We also provide assembly services to reduce your labor costs and ensure a ready-to-fill product.
                                </p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Process 1" className="rounded-2xl object-cover h-56 w-full opacity-90 border border-slate-700/50" src="https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Process 2" className="rounded-2xl object-cover h-56 w-full mt-12 opacity-90 border border-slate-700/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-brand-600 text-white flex items-center justify-center rounded-lg">
<span className="font-serif italic text-lg">A</span>
</div>
<span className="text-lg font-semibold text-slate-900 uppercase tracking-tight">Anran Glass</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Start your project today.</h2>
<p className="text-slate-500 text-lg mb-8 max-w-md">Whether you are launching a new niche brand in Dubai or expanding your line in Europe, our team is ready to assist.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-slate-600 group hover:text-brand-600 transition-colors cursor-pointer">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm font-medium">sales@anranglass.com</span>
</div>
<div className="flex items-center gap-4 text-slate-600 group hover:text-brand-600 transition-colors cursor-pointer">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-medium">+86 123 4567 8900</span>
</div>
<div className="flex items-center gap-4 text-slate-600 group hover:text-brand-600 transition-colors cursor-pointer">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm font-medium">Baiyun District, Guangzhou, China</span>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 transition-all placeholder:text-slate-300" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Company</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 transition-all placeholder:text-slate-300" placeholder="Brand name" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 transition-all placeholder:text-slate-300" placeholder="name@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Market Region</label>
<select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 transition-all appearance-none text-slate-500">
<option>Middle East</option>
<option>Europe</option>
<option>North America</option>
<option>Asia</option>
<option>Other</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-100 focus:border-brand-500 transition-all placeholder:text-slate-300" placeholder="Tell us about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 text-white font-medium py-3 rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
                            Send Inquiry
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
<p className="text-xs text-slate-400">© 2024 Anran Glass Co., Ltd. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-600 transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
