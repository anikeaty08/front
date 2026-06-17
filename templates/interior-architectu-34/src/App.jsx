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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-stone-950/70 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-xl tracking-widest font-light uppercase text-stone-100" href="#">
                stylescappe
            </a>
<div className="hidden md:flex items-center space-x-10 text-[0.7rem] tracking-[0.2em] font-medium text-stone-400">
<a className="hover:text-stone-100 transition-colors uppercase" href="#">Projects</a>
<a className="hover:text-stone-100 transition-colors uppercase" href="#">Studio</a>
<a className="hover:text-stone-100 transition-colors uppercase" href="#">Services</a>
<a className="text-stone-100 border-b border-stone-500 pb-1" href="#">CONTACT</a>
</div>
<button className="md:hidden text-stone-100">
<iconify-icon icon="solar:menu-dots-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img alt="Tamil Nadu Luxury Interior" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-950/20 via-stone-950/60 to-stone-950"></div>
</div>
<div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full mt-auto pb-20">
<div className="max-w-4xl">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] text-stone-100 font-light tracking-tight leading-[0.85] serif">
                    Defining <br/> <span className="italic font-light">Elegance</span>
</h1>
<div className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
<p className="text-stone-400 max-w-sm text-sm md:text-base font-light tracking-wide leading-relaxed">
                        Based in Tamil Nadu, stylescappe designs bespoke environments that balance Dravidian heritage with global minimalism.
                    </p>
<div className="flex items-center gap-4">
<span className="text-xs tracking-widest uppercase text-stone-500">Scroll for more</span>
<iconify-icon className="text-stone-500 animate-bounce" icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-950">
<div className="max-w-3xl mx-auto text-center">
<div className="flex justify-center mb-8">
<iconify-icon className="text-stone-700" icon="solar:crown-minimalistic-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-light leading-tight text-stone-200 serif tracking-tight mb-10">
                "Design is the silent ambassador of your lifestyle. We curate spaces that echo your history while embracing the future."
            </h2>
<a className="group inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-stone-400 hover:text-stone-100 transition-all" href="#">
                The studio
                <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="px-6 py-20 bg-stone-950">
<div className="max-w-[1400px] mx-auto">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-[0.65rem] tracking-[0.4em] uppercase text-stone-600 block mb-2">Portfolio</span>
<h3 className="text-3xl md:text-4xl font-light serif text-stone-100 tracking-tight">Selected Artifacts</h3>
</div>
<a className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 hover:text-stone-200 transition-colors" href="#">
                    All Projects 
                    <iconify-icon icon="solar:gallery-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">

<div className="md:col-span-7 group cursor-pointer">
<div className="aspect-[16/10] overflow-hidden bg-stone-900">
<img alt="Chennai Residence" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-center">
<div>
<h4 className="text-xl serif font-light text-stone-200 tracking-tight">Poes Garden Penthouse</h4>
<p className="text-[0.65rem] text-stone-500 uppercase tracking-widest mt-1">Residential — Chennai — 2024</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-stone-400" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer md:mt-24">
<div className="aspect-[4/5] overflow-hidden bg-stone-900">
<img alt="Madurai Estate" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-center">
<div>
<h4 className="text-xl serif font-light text-stone-200 tracking-tight">Temple City Estate</h4>
<p className="text-[0.65rem] text-stone-500 uppercase tracking-widest mt-1">Hospitality — Madurai — 2023</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-stone-400" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden bg-stone-900">
<img alt="Coimbatore Villa" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-center">
<div>
<h4 className="text-xl serif font-light text-stone-200 tracking-tight">Western Ghats Villa</h4>
<p className="text-[0.65rem] text-stone-500 uppercase tracking-widest mt-1">Architecture — Coimbatore — 2024</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-stone-400" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="md:col-span-7 group cursor-pointer md:-mt-24">
<div className="aspect-[16/10] overflow-hidden bg-stone-900">
<img alt="Puducherry Retreat" className="w-full h-full object-cover image-zoom opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-center">
<div>
<h4 className="text-xl serif font-light text-stone-200 tracking-tight">Heritage French Quarter</h4>
<p className="text-[0.65rem] text-stone-500 uppercase tracking-widest mt-1">Renovation — Puducherry — 2023</p>
</div>
<iconify-icon className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-stone-400" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-stone-900/30">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5">
<span className="text-[0.65rem] tracking-[0.4em] uppercase text-stone-500 block mb-6">Expertise</span>
<h3 className="text-4xl md:text-5xl serif font-light leading-tight mb-8 text-stone-100 tracking-tight">Holistic design through a cinematic lens.</h3>
<p className="text-stone-400 font-light text-sm md:text-base leading-relaxed mb-10 max-w-sm">
                    We bridge the gap between architecture and fine art, ensuring every texture and light source serves a purpose.
                </p>
<div className="flex items-center gap-6">
<button className="bg-stone-100 text-stone-950 px-8 py-4 text-[0.65rem] font-semibold tracking-[0.2em] uppercase hover:bg-white transition-all flex items-center gap-2">
                        Get Proposals <iconify-icon icon="solar:pen-2-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="lg:col-span-7 flex flex-col border-t border-white/5">

<div className="group py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
<div className="flex items-center gap-8">
<span className="text-[0.6rem] font-medium text-stone-600 tracking-tighter uppercase">01 / Process</span>
<h4 className="text-2xl serif font-light text-stone-300 group-hover:text-stone-100 transition-colors">Conceptual Architecture</h4>
</div>
<iconify-icon className="mt-4 md:mt-0 text-stone-700 group-hover:text-stone-200 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>

<div className="group py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
<div className="flex items-center gap-8">
<span className="text-[0.6rem] font-medium text-stone-600 tracking-tighter uppercase">02 / Curation</span>
<h4 className="text-2xl serif font-light text-stone-300 group-hover:text-stone-100 transition-colors">Art &amp; Furniture Styling</h4>
</div>
<iconify-icon className="mt-4 md:mt-0 text-stone-700 group-hover:text-stone-200 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>

<div className="group py-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
<div className="flex items-center gap-8">
<span className="text-[0.6rem] font-medium text-stone-600 tracking-tighter uppercase">03 / Execution</span>
<h4 className="text-2xl serif font-light text-stone-300 group-hover:text-stone-100 transition-colors">Turnkey Management</h4>
</div>
<iconify-icon className="mt-4 md:mt-0 text-stone-700 group-hover:text-stone-200 transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="relative py-40 bg-stone-950 overflow-hidden text-center">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<h2 className="text-5xl md:text-7xl serif font-light tracking-tight text-stone-100 mb-8 italic">Based in Tamil Nadu, India</h2>
<p className="text-stone-500 text-xs tracking-[0.3em] uppercase mb-12">Serving South India &amp; beyond</p>
<div className="flex flex-wrap justify-center gap-12 text-stone-300 font-light text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-600" icon="solar:map-point-linear" width="18"></iconify-icon>
                    Poes Garden, Chennai
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-600" icon="solar:phone-linear" width="18"></iconify-icon>
                    +91 44 4900 1200
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-600" icon="solar:letter-linear" width="18"></iconify-icon>
                    studio@stylescappe.in
                </div>
</div>
</div>
</section>

<footer className="bg-stone-950 border-t border-white/5 pt-24 pb-12 px-6">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
<div className="md:col-span-5">
<a className="text-4xl text-stone-100 serif tracking-tight mb-8 block" href="#">stylescappe</a>
<p className="text-xs font-light text-stone-500 leading-relaxed max-w-xs mb-8">
                    An interdisciplinary design studio focused on high-end residential and commercial architecture. We believe in the poetry of space.
                </p>
<div className="flex space-x-6">
<a className="text-stone-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:globus-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:mention-square-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="md:col-span-2 flex flex-col space-y-4">
<span className="text-[0.6rem] font-medium tracking-[0.3em] uppercase text-stone-600 mb-2">Explore</span>
<a className="text-xs font-light text-stone-400 hover:text-white transition-colors" href="#">Works</a>
<a className="text-xs font-light text-stone-400 hover:text-white transition-colors" href="#">About Studio</a>
<a className="text-xs font-light text-stone-400 hover:text-white transition-colors" href="#">Exhibitions</a>
<a className="text-xs font-light text-stone-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="md:col-span-5">
<span className="text-[0.6rem] font-medium tracking-[0.3em] uppercase text-stone-600 mb-6 block">Subscribe for insights</span>
<form className="flex border-b border-stone-800 pb-3">
<input className="bg-transparent w-full text-sm text-stone-200 placeholder-stone-700 focus:outline-none font-light" placeholder="Email Address" type="email"/>
<button className="text-stone-500 hover:text-stone-100 transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</form>
<p className="text-[0.6rem] text-stone-700 mt-4 tracking-wider">NO SPAM. ONLY DESIGN INSPIRATION.</p>
</div>
</div>
<div className="max-w-[1400px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
<p className="text-[0.6rem] tracking-[0.3em] uppercase text-stone-600">© 2024 stylescappe. All rights reserved.</p>
<div className="flex space-x-8 mt-6 md:mt-0">
<a className="text-[0.6rem] tracking-[0.3em] uppercase text-stone-700 hover:text-stone-500" href="#">Legal</a>
<a className="text-[0.6rem] tracking-[0.3em] uppercase text-stone-700 hover:text-stone-500" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
