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
document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
}
});
});
document.querySelectorAll('.fade-in-section').forEach(section => {
observer.observe(section);
});
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
      

<nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white">
<a className="text-sm font-semibold tracking-[0.2em] uppercase opacity-90 hover:opacity-100 transition-opacity" href="#">
            VØID
        </a>
<div className="flex items-center gap-8">
<a className="hidden md:block text-xs font-medium tracking-widest hover:text-neutral-400 transition-colors" href="#">PROJECTS</a>
<a className="hidden md:block text-xs font-medium tracking-widest hover:text-neutral-400 transition-colors" href="#">STUDIO</a>
<button className="group flex items-center gap-2">
<span className="hidden md:block text-xs font-medium tracking-widest group-hover:text-neutral-400 transition-colors">MENU</span>
<iconify-icon height="20" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Concrete Minimalist Architecture" className="w-full h-full object-cover grayscale-[30%] brightness-[0.6] scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2500&amp;auto=format&amp;fit=crop" style={{animationPlayState: 'paused', transform: 'scale(1.05)'}}/> 
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
</div>

<div className="relative z-10 px-6 md:px-12 w-full max-w-[1920px] mx-auto fade-in-section is-visible">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/20 pt-8">
<div>
<h2 className="text-xs md:text-sm font-medium tracking-[0.2em] text-neutral-400 mb-2">EST. 2024 — TOKYO / LONDON</h2>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[0.9] text-white">
                        SILENCE <br/>
                        IN FORM
                    </h1>
</div>
<div className="max-w-xs mb-2">
<p className="text-sm text-neutral-300 font-light leading-relaxed">
                        We design structures that do not demand attention, but command presence. Luxury defined by subtraction.
                    </p>
<div className="mt-6 flex items-center gap-4 group cursor-pointer">
<span className="text-xs tracking-widest border-b border-transparent group-hover:border-white transition-all pb-0.5">EXPLORE THE SERIES</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-500" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 md:px-12 bg-[#050505]">
<div className="max-w-4xl mx-auto fade-in-section">
<iconify-icon className="text-neutral-600 mb-8" icon="solar:asteroid-linear" width="32"></iconify-icon>
<p className="text-2xl md:text-4xl font-light leading-tight tracking-tight text-neutral-200">
                True luxury is the absence of noise. <span className="text-neutral-600">Our architecture functions like a precision instrument — every line calculated, every material chosen for tactile resonance, every space engineered for calm.</span>
</p>
</div>
</section>

<section className="pb-32 px-6 md:px-12 bg-[#050505]">
<div className="flex justify-between items-end mb-16 fade-in-section">
<h3 className="text-sm tracking-[0.2em] text-neutral-500 uppercase">Selected Works</h3>
<div className="text-xs text-neutral-600 tracking-widest">01 — 04</div>
</div>

<div className="mb-32 group cursor-pointer fade-in-section">
<div className="img-container w-full aspect-[16/9] md:aspect-[2.35/1] relative bg-neutral-900 overflow-hidden">
<img alt="Residence 01" className="img-zoom w-full h-full object-cover grayscale-[20%] brightness-75" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
</div>
<div className="flex flex-col md:flex-row justify-between mt-6 border-b border-neutral-800 pb-6 group-hover:border-neutral-600 transition-colors duration-700">
<div>
<h4 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-1">OBSIDIAN HOUSE</h4>
<p className="text-xs text-neutral-500 tracking-widest">PRIVATE RESIDENCE</p>
</div>
<div className="flex gap-12 mt-4 md:mt-0 text-right md:text-left">
<div>
<span className="block text-[10px] text-neutral-600 uppercase tracking-wider mb-1">Location</span>
<span className="text-sm font-light text-neutral-300">Kyoto, JP</span>
</div>
<div>
<span className="block text-[10px] text-neutral-600 uppercase tracking-wider mb-1">Area</span>
<span className="text-sm font-light text-neutral-300">1,200 m²</span>
</div>
<div className="hidden md:block">
<span className="block text-[10px] text-neutral-600 uppercase tracking-wider mb-1">Year</span>
<span className="text-sm font-light text-neutral-300">2023</span>
</div>
<div className="flex items-center">
<iconify-icon className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

<div className="group cursor-pointer fade-in-section">
<div className="img-container w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden">
<img alt="Interior Detail" className="img-zoom w-full h-full object-cover grayscale-[40%] brightness-[0.8]" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=1500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mt-6 border-b border-neutral-800 pb-4 group-hover:border-neutral-600 transition-colors duration-700">
<div>
<h4 className="text-xl font-light tracking-tight text-white mb-1">AERIE LOFT</h4>
<p className="text-xs text-neutral-500 tracking-widest">INTERIOR</p>
</div>
<div className="text-right">
<span className="text-sm font-light text-neutral-400">New York, US</span>
</div>
</div>
</div>

<div className="group cursor-pointer fade-in-section md:mt-24"> 
<div className="img-container w-full aspect-[4/3] bg-neutral-900 relative overflow-hidden">
<img alt="Concrete Structure" className="img-zoom w-full h-full object-cover grayscale-[50%] contrast-[1.1] brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start mt-6 border-b border-neutral-800 pb-4 group-hover:border-neutral-600 transition-colors duration-700">
<div>
<h4 className="text-xl font-light tracking-tight text-white mb-1">THE MONOLITH</h4>
<p className="text-xs text-neutral-500 tracking-widest">CULTURAL</p>
</div>
<div className="text-right">
<span className="text-sm font-light text-neutral-400">Berlin, DE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#0a0a0a] border-t border-neutral-900">
<div className="flex flex-col md:flex-row gap-16 md:gap-32 fade-in-section">
<div className="md:w-1/3">
<h3 className="text-3xl font-light tracking-tight text-white mb-6">TECHNICAL<br/>CAPABILITIES</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
                    We bridge the gap between abstract art and structural engineering. Our industrial projects serve as the proving ground for our residential innovations.
                </p>
<div className="mt-8 inline-flex items-center gap-2 text-xs tracking-widest border border-neutral-800 px-6 py-3 rounded-none hover:bg-neutral-900 transition-colors cursor-pointer text-neutral-300">
                    DOWNLOAD FIRM PROFILE
                    <iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</div>
</div>
<div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-500 group">
<iconify-icon className="text-neutral-600 mb-4 group-hover:text-white transition-colors" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
<h4 className="text-lg font-normal text-neutral-200 mb-2">Computational Design</h4>
<p className="text-xs text-neutral-500 leading-normal">
                        Advanced algorithmic modeling to optimize structural integrity and material efficiency.
                    </p>
</div>

<div className="border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-500 group">
<iconify-icon className="text-neutral-600 mb-4 group-hover:text-white transition-colors" icon="solar:buildings-2-linear" width="24"></iconify-icon>
<h4 className="text-lg font-normal text-neutral-200 mb-2">Urban Integration</h4>
<p className="text-xs text-neutral-500 leading-normal">
                        Seamless insertion of modern forms into historical or dense urban fabrics.
                    </p>
</div>

<div className="border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-500 group">
<iconify-icon className="text-neutral-600 mb-4 group-hover:text-white transition-colors" icon="solar:leaf-linear" width="24"></iconify-icon>
<h4 className="text-lg font-normal text-neutral-200 mb-2">Sustainable Systems</h4>
<p className="text-xs text-neutral-500 leading-normal">
                        Passive energy regulation and carbon-neutral material sourcing strategies.
                    </p>
</div>

<div className="border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-500 group">
<iconify-icon className="text-neutral-600 mb-4 group-hover:text-white transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h4 className="text-lg font-normal text-neutral-200 mb-2">Project Stewardship</h4>
<p className="text-xs text-neutral-500 leading-normal">
                        End-to-end oversight ensuring the built reality matches the rendered vision perfectly.
                    </p>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 md:px-12 bg-[#050505] border-t border-neutral-900 flex flex-col justify-between min-h-[50vh]">
<div className="fade-in-section">
<p className="text-xs tracking-[0.2em] text-neutral-500 uppercase mb-8">Inquiries</p>
<a className="block text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-neutral-300 hover:text-white transition-colors mb-4" href="mailto:hello@void.arch">
                hello@void.arch
            </a>
<p className="text-sm text-neutral-500 font-light">
                By appointment only.
            </p>
</div>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 fade-in-section">
<div className="flex gap-8">
<a className="text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-wider" href="#">Instagram</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-wider" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors uppercase tracking-wider" href="#">Are.na</a>
</div>
<div className="text-right">
<div className="flex items-center gap-2 justify-end mb-2">
<iconify-icon className="text-neutral-600" icon="solar:copyright-linear" width="14"></iconify-icon>
<span className="text-[10px] text-neutral-600 tracking-widest">2024 VØID ARCHITECTS</span>
</div>
<div className="flex items-center gap-4 justify-end">
<a className="text-[10px] text-neutral-700 hover:text-neutral-500 transition-colors uppercase tracking-widest" href="#">Privacy</a>
<a className="text-[10px] text-neutral-700 hover:text-neutral-500 transition-colors uppercase tracking-widest" href="#">Legal</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
