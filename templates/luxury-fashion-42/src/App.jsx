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
      

<div className="fixed inset-0 pointer-events-none z-0 bg-pattern opacity-60 mix-blend-multiply"></div>
<div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-[#F4F2ED]/20 via-transparent to-[#F4F2ED] h-full"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-[#F4F2ED]/80 backdrop-blur-md border-b border-stone-200/30">
<div className="md:px-12 flex max-w-[1800px] mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<button className="md:hidden hover:text-[#D02020] transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-strokeWidth="1.2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="hidden md:flex gap-10 text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500">
<a className="hover:text-[#1C1C1C] transition-colors duration-300 relative group" href="#collections">
                    Collections
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D02020] transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-[#1C1C1C] transition-colors duration-300 relative group" href="#philosophy">
                    Maison
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D02020] transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<a className="-translate-x-1/2 md:text-3xl uppercase z-50 group text-2xl font-semibold tracking-tighter absolute left-1/2" href="/#">
                COL<span className="text-[#D02020]">É</span>N
            </a>

<div className="flex items-center gap-6 md:gap-8">
<button className="hidden md:block text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-500 hover:text-[#1C1C1C] transition-colors duration-300">
                    Account
                </button>
<div className="flex gap-4 items-center">
<button className="hover:text-[#D02020] transition-colors duration-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-strokeWidth="1.2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="hover:text-[#D02020] transition-colors duration-300 relative">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-strokeWidth="1.2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#D02020] rounded-full scale-0 transition-transform duration-300 group-hover:scale-100"></span>
</button>
</div>
</div>
</div>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden z-10 pt-20 pr-6 pl-6 relative items-center justify-center">
<div className="text-center max-w-5xl mx-auto relative z-10">

<h1 className="text-[15vw] md:text-[11rem] leading-[0.85] uppercase reveal-up font-semibold text-[#1C1C1C] tracking-tighter mix-blend-darken mb-8">
                COL<span className="text-[#D02020] inline-block transform -skew-x-6 origin-bottom">É</span>N
            </h1>
<div className="flex flex-col gap-8 reveal-up delay-200 gap-x-8 gap-y-8 items-center">
<div className="h-[1px] w-12 bg-[#D02020]"></div>
<p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-stone-500">
                    Parisian Luxury <span className="mx-2 text-[#D02020]">•</span> Modern Expression
                </p>
<a className="mt-8 group inline-flex flex-col items-center gap-2 text-[10px] font-bold tracking-[0.25em] uppercase hover:text-[#D02020] transition-colors duration-500" href="#collections">
<span className="">Explore The Collection</span>
<svg aria-hidden="true" className="iconify transform translate-y-0 group-hover:translate-y-2 transition-transform duration-500 iconify--lucide" data-icon="lucide:arrow-down" data-strokeWidth="1" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-1/4 left-[10%] w-[30vw] h-[40vh] border border-[#D02020]/10 rounded-[2rem] transform -rotate-6"></div>
<div className="absolute bottom-1/4 right-[10%] w-[25vw] h-[35vh] border border-stone-900/5 rounded-[2rem] transform rotate-12"></div>
</div>
</header>

<section className="relative py-32 md:py-48 px-6 md:px-12 bg-white/50 backdrop-blur-sm z-10" id="philosophy">
<div className="max-w-2xl mx-auto text-center">
<span className="block text-[#D02020] text-[10px] font-bold tracking-[0.3em] uppercase mb-8">The Philosophy</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1] mb-12 text-[#1C1C1C]">
                True elegance is a refusal<br/>to conform to the noise.
            </h2>
<p className="text-stone-600 leading-relaxed text-sm md:text-[15px] font-light md:px-8 text-justify-center">
                Born in the heart of Paris, COLÉN represents the intersection of timeless French sophistication and brutalist modern architecture. We craft garments for the confident, the refined, and the unapologetically posh. Every silhouette is a statement of intent; every fabric, a testament to quality.
            </p>
<div className="mt-16">
<img alt="Atelier" className="w-full h-auto grayscale opacity-90 hover:grayscale-0 transition-all duration-1000 ease-out shadow-2xl shadow-stone-200" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<p className="text-[10px] tracking-widest text-stone-400 mt-4 uppercase text-right">Rue Saint-Honoré, Paris</p>
</div>
</div>
</section>

<section className="md:px-12 z-10 pt-24 pr-4 pb-24 pl-4 relative" id="collections">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-stone-200 pb-6">
<h3 className="text-4xl md:text-6xl font-medium tracking-tighter uppercase text-[#1C1C1C]">Archives</h3>
<div className="flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase">
<span className="text-[#D02020]">FW24</span>
<span className="text-stone-400">/</span>
<span className="text-stone-400">SS24</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-12 gap-x-y-24 gap-y-24">

<div className="md:col-span-7 group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-[#EAE8E2]">
<img className="object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]" src="https://images.unsplash.com/photo-1550614000-4b9519e0031c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 group-hover:translate-y-0">
<p className="text-[10px] font-bold tracking-[0.2em] uppercase mb-2 text-[#D02020]">Collection 01</p>
<h4 className="text-3xl font-light tracking-tight">Urban Solitude</h4>
</div>
</div>
</div>

<div className="md:col-span-5 flex flex-col justify-end md:pb-24 group cursor-pointer">
<div className="relative overflow-hidden aspect-[3/4] bg-[#EAE8E2] w-full md:w-[90%] ml-auto">
<img className="object-cover w-full h-full transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)]" src="https://images.unsplash.com/photo-1485230946086-1d99d5246299?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500"></div>
</div>
<div className="text-right mt-6 mr-0 md:mr-[10%]">
<h4 className="text-xl font-medium tracking-tight">Le Soir</h4>
<p className="text-[11px] text-stone-500 mt-1 tracking-wide">Evening Essentials</p>
<span className="inline-block h-[1px] w-8 bg-[#D02020] mt-4"></span>
</div>
</div>

<div className="md:col-span-4 group cursor-pointer md:-mt-32 z-20">
<div className="relative overflow-hidden aspect-[3/4] bg-[#EAE8E2]">
<img className="transform group-hover:scale-100 transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1549437190-6da00e402c0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6">
<h4 className="text-xl font-medium tracking-tight">Structure &amp; Form</h4>
<p className="text-[11px] text-stone-500 mt-1 tracking-wide">Tailoring</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-white relative z-10">
<div className="flex justify-between items-center mb-16">
<h3 className="text-sm font-bold tracking-[0.2em] uppercase text-stone-400">Curated Selection</h3>
<a className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase hover:text-[#D02020] transition-colors" href="#">
                View All
                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group">
<div className="relative aspect-[3/4] bg-[#F9F8F6] mb-6 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<button className="absolute bottom-0 right-0 bg-[#1C1C1C] text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D02020]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium tracking-tight group-hover:text-[#D02020] transition-colors">The Velvet Blazer</h4>
<p className="text-[11px] text-stone-400 mt-1">Midnight Black</p>
</div>
<span className="text-sm font-medium">$890</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] bg-[#F9F8F6] mb-6 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550614000-4b9519e0031c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 right-0 bg-[#1C1C1C] text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D02020]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-medium tracking-tight group-hover:text-[#D02020] transition-colors">Silk Trench</h4>
<p className="text-[11px] text-stone-400 mt-1">Warm Beige</p>
</div>
<span className="text-sm font-medium">$1,250</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[3/4] bg-[#F9F8F6] mb-6 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-0 right-0 bg-[#1C1C1C] text-white p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#D02020]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-base font-medium tracking-tight group-hover:text-[#D02020] transition-colors">Cropped Wool Knit</h4>
<p className="text-[11px] text-stone-400 mt-1">Ivory</p>
</div>
<span className="text-sm font-medium">$420</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1C1C1C] text-[#F4F2ED] overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1">
<div className="relative overflow-hidden aspect-square">
<img className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 opacity-80" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-1 md:order-2 md:pl-12">
<div className="w-12 h-[2px] bg-[#D02020] mb-8"></div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-8">
                    SILENCE 
                    <span className="text-stone-500 italic font-light">IN</span> CHAOS
                </h2>
<p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-md mb-10">
                    Our latest campaign explores the quiet confidence of the modern woman in the urban jungle. Clean lines meet raw textures.
                </p>
<button className="border border-[#F4F2ED] text-[#F4F2ED] px-8 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-[#D02020] hover:border-[#D02020] transition-all duration-300">
                    View Lookbook
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-b border-stone-200 bg-[#F4F2ED]">
<div className="max-w-xl mx-auto text-center">
<h5 className="text-2xl font-medium tracking-tight mb-2 uppercase">Join The COL<span className="text-[#D02020]">É</span>N Circle</h5>
<p className="text-stone-500 text-xs mb-10">Access exclusive drops, private sales, and editorial content.</p>
<form className="flex items-center border-b border-stone-300 pb-2 focus-within:border-[#D02020] transition-colors duration-300">
<input className="flex-grow bg-transparent text-sm font-medium placeholder-stone-400 focus:outline-none uppercase tracking-wider" placeholder="ENTER YOUR EMAIL" type="email"/>
<button className="text-[#1C1C1C] hover:text-[#D02020] transition-colors" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</section>

<footer className="bg-white pt-24 pb-12 px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<a className="text-4xl font-semibold tracking-tighter uppercase block mb-8" href="#">COL<span className="text-[#D02020]">É</span>N</a>
</div>
<div className="space-y-6">
<h6 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Shop</h6>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">New Arrivals</a>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Ready-to-Wear</a>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Accessories</a>
</div>
<div className="space-y-6">
<h6 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Maison</h6>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">About Us</a>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Stores</a>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Careers</a>
</div>
<div className="space-y-6">
<h6 className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-400">Legal</h6>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Privacy Policy</a>
<a className="block text-xs font-medium text-stone-600 hover:text-[#D02020] transition-colors uppercase tracking-wide" href="#">Terms of Use</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100">
<p className="text-[10px] text-stone-400 uppercase tracking-widest">© 2024 COLÉN PARIS.</p>

<p className="mt-4 md:mt-0 text-[10px] font-bold tracking-[0.2em] uppercase text-[#1C1C1C]">
                POWERED BY <span className="mx-2 text-[#D02020]">—</span> VORTEX CREATIVE AGENCY
            </p>
</div>
</footer>

    </>
  );
}
