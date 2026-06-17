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



        // Loader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            const progress = document.getElementById('loader-progress');
            
            // Simulate loading progress
            progress.style.width = '100%';
            
            setTimeout(() => {
                loader.style.transform = 'translateY(-100%)';
            }, 1500);
        });

        // Hero Carousel Logic
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, 5000); // Change every 5 seconds

        // Reveal Animation Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
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
      

<div id="loader" style={{transform: 'translateY(-100%)'}}>
<div className="mb-4 font-serif italic text-2xl tracking-widest text-white/90">The Carved Collection</div>
<div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-white w-0 transition-all duration-[2000ms] ease-out" id="loader-progress" style={{width: '100%'}}></div>
</div>
<div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/40">Loading Assets</div>
</div>

<div className="grain-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-white/5 bg-[#0f0f0f]/90 backdrop-blur-sm">
<div className="flex md:px-12 max-w-[1920px] mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">

<a className="group flex items-center gap-4" href="#">
<div className="w-10 h-10 border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<span className="font-serif italic text-xl">C</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-medium tracking-widest uppercase">The Carved</span>
<span className="text-[10px] text-white/50 tracking-[0.2em] uppercase">Collection</span>
</div>
</a>

<div className="hidden md:flex gap-16 uppercase cursor-pointer text-xs font-medium text-white/60 tracking-[0.15em] gap-x-16 gap-y-16 items-center" onclick="window.location.href='/shop'" role="button">
<a className="hover:text-white transition-colors" href="/home">Home</a>
<a className="hover:text-white transition-colors" href="/shop">Shop</a>
<a className="hover:text-white transition-colors" href="#">Bespoke</a>
</div>

<div className="flex gap-8 gap-x-8 gap-y-8 items-center">
<button className="text-white/80 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="hover:text-white transition-colors text-white/80 relative" onclick="window.location.href='/shop'" role="button">
<iconify-icon className="" height="20" icon="solar:cart-large-minimalistic-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
</button>
<a className="hidden md:inline-flex px-6 py-2 border border-white/20 text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500" href="#">
                    Inquire
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-screen overflow-hidden">

<div className="absolute inset-0 w-full h-full" id="hero-carousel">

<div className="carousel-slide active">
<img alt="Interior" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
</div>

<div className="carousel-slide">
<img alt="Detail" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&amp;w=2592&amp;auto=format&amp;fit=crop"/>
</div>

<div className="carousel-slide">
<img alt="Texture" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-[#0f0f0f] via-black/20 to-black/30 z-10"></div>

<div className="absolute inset-0 z-10 pointer-events-none opacity-20">
<div className="absolute top-0 left-12 w-[1px] h-full bg-white"></div>
<div className="absolute top-0 right-12 w-[1px] h-full bg-white"></div>
<div className="absolute top-32 left-0 w-full h-[1px] bg-white"></div>
</div>

<div className="flex flex-col h-full z-20 pt-20 pr-12 pl-12 relative justify-center">
<div className="max-w-4xl reveal-element">
<div className="flex items-center gap-4 mb-6">
<span className="h-[1px] w-12 bg-white/70"></span>
<span className="text-xs uppercase tracking-[0.3em] text-white/90">Artisan Woodwork</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-normal leading-[0.9] tracking-tight mb-10 mix-blend-overlay">
                    Sculpted  <span className="italic font-light opacity-90 ml-12">Form.</span>
</h1>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-8">
<a className="group relative px-8 py-4 border border-white text-sm uppercase tracking-[0.2em] overflow-hidden transition-all hover:text-black" href="#">
<span className="relative z-10">Shop Collection</span>
<div className="transform -translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 bg-white absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/shop'" role="button"></div>
</a>
<p className="text-white/70 max-w-xs text-sm font-light leading-relaxed border-l border-white/30 pl-6">
                        Discover products uniquely crafted in the heart of Malawi.
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-12 right-12 z-20 flex flex-col items-center gap-4 text-white/50">
<span className="text-[10px] uppercase tracking-widest rotate-90 origin-right translate-x-2">Scroll</span>
<div className="w-[1px] h-24 bg-white/20 overflow-hidden">
<div className="w-full h-1/2 bg-white animate-bounce"></div>
</div>
</div>
</header>

<section className="relative py-32 px-6 md:px-12 border-b border-white/5">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
<div className="reveal-element">
<h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] mb-12">
                    Geometric Precision <br/>
<span className="font-serif italic text-neutral-500">Organic Material</span>
</h2>
<div className="w-full h-[1px] bg-white/10 mb-8"></div>
<div className="grid grid-cols-2 gap-8">
<div>
<span className="block text-4xl font-light mb-2">01</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">Hand Carved</p>
</div>
<div>
<span className="block text-4xl font-light mb-2">02</span>
<p className="text-xs uppercase tracking-widest text-neutral-500">Sustainably Sourced</p>
</div>
</div>
</div>
<div className="relative reveal-element delay-100">

<div className="relative w-full aspect-[4/5] md:aspect-square bg-[#1a1a1a]">
<img alt="Product" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 w-32 h-32 border border-white/20 z-10 flex items-center justify-center bg-[#0f0f0f]">
<iconify-icon className="text-white/60 animate-spin-slow" icon="solar:star-fall-minimalistic-linear" style={{animationDuration: '10s'}} width="32"></iconify-icon>
</div>
</div>
<p className="mt-8 text-neutral-400 font-light leading-relaxed max-w-md ml-auto text-right">
                    We adhere to a strict aesthetic of clean lines and raw textures. 
                    Every piece is a testament to the artisan's discipline.
                </p>
</div>
</div>
</section>

<section className="bg-[#141414] border-b border-white/5 text-white">

<div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-white/10">
<span className="text-[10px] uppercase tracking-[0.3em] text-[#8b7e74]">Logistics &amp; Origin</span>
<span className="text-[10px] uppercase tracking-[0.3em] text-white/30">REF: MW-2024</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px] border-b border-white/10">

<div className="md:col-span-3 border-r border-white/10 p-12 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
<div className="relative z-10">
<h3 className="text-6xl font-serif italic mb-2">Origin</h3>
<h3 className="text-6xl font-bold tracking-tighter uppercase text-transparent stroke-text" style={{WebkitTextStroke: '1px white'}}>Malawi</h3>
</div>
<div className="relative z-10">
<iconify-icon className="text-white/20 mb-6" icon="solar:globe-linear" width="64"></iconify-icon>
<p className="text-xs text-neutral-400 font-mono">LAT: -13.2543LONG: 34.3015</p>
</div>
</div>

<div className="md:col-span-5 border-r border-white/10 relative bg-[#0a0a0a] flex items-center justify-center p-12">

<div className="w-full h-full border border-white/5 relative">

<div className="absolute top-1/4 left-0 w-full h-[1px] bg-white/5"></div>
<div className="absolute top-2/4 left-0 w-full h-[1px] bg-white/5"></div>
<div className="absolute top-3/4 left-0 w-full h-[1px] bg-white/5"></div>
<div className="absolute left-1/4 top-0 h-full w-[1px] bg-white/5"></div>
<div className="absolute left-2/4 top-0 h-full w-[1px] bg-white/5"></div>
<div className="absolute left-3/4 top-0 h-full w-[1px] bg-white/5"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#8b7e74] rotate-45 flex items-center justify-center">
<div className="w-2 h-2 bg-white"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest mt-24 text-white/50">
                        Export Hub
                    </div>
</div>
</div>

<div className="md:col-span-4 p-0">

<div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#8b7e74]" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2">Global Shipping</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-mono">
                        Direct freight from Lilongwe to major global ports.
                        Standard Lead Time: 4-6 Weeks.
                    </p>
</div>

<div className="p-8 border-b border-white/10 hover:bg-white/5 transition-colors group cursor-default">
<div className="flex justify-between items-start mb-4">
<iconify-icon className="text-[#8b7e74]" icon="solar:shield-check-linear" width="24"></iconify-icon>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-2">White Glove</h4>
<p className="text-xs text-neutral-400 leading-relaxed font-mono">
                        Premium installation service available upon request.
                        Insurance included on all transit.
                    </p>
</div>

<div className="p-8 hover:bg-white/5 transition-colors group cursor-pointer">
<div className="flex justify-between items-center">
<span className="text-sm uppercase tracking-widest">View Policy</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element border-b border-white/10 pb-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">Curated <span className="italic font-serif text-[#8b7e74]">Selection</span></h2>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-[#8b7e74] transition-colors" href="#">
                View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12 reveal-element delay-100">

<div className="group cursor-pointer" onclick="window.location.href='/shop'" role="button">
<div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden mb-5">
<img alt="Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-500 uppercase tracking-widest text-[10px]">Living</span>
<h3 className="font-medium text-lg">Display Table</h3>
<span className="text-sm font-mono text-white/60">$385.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden mb-5">
<img alt="Bedside" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1573866926487-a1865558a9cf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-500 uppercase tracking-widest text-[10px]">Bedroom</span>
<h3 className="font-medium text-lg">Bedside Table</h3>
<span className="text-sm font-mono text-white/60">$850.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden mb-5">
<img alt="Display" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 opacity-80 w-full h-full object-cover grayscale cursor-pointer" onclick="window.location.href='/shop'" role="button" src="https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-500 uppercase tracking-widest text-[10px]">Storage</span>
<h3 className="font-medium text-lg">Display Unit</h3>
<span className="text-sm font-mono text-white/60">$555.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden mb-5">
<img alt="Stool" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:add-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1">
<span className="text-neutral-500 uppercase tracking-widest text-[10px]">Seating</span>
<h3 className="font-medium text-lg">Night Stand</h3>
<span className="text-sm font-mono text-white/60">$185.00</span>
</div>
</div>
</div>
</section>

<section className="relative min-h-[80vh] bg-[#111] overflow-hidden flex items-center justify-center border-t border-white/5">

<div className="absolute inset-0 opacity-20">
<svg className="w-full h-full animate-lines" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="100" id="grid" patternunits="userSpaceOnUse" width="100">
<path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="relative z-10 text-center px-6 max-w-3xl reveal-element">
<h2 className="text-6xl md:text-8xl tracking-tight leading-[0.9] mb-8 mix-blend-difference">
                Our Bespoke <br/>
<span className="font-serif italic text-white/80">Furniture</span> <br/>
                Collection
            </h2>
<p className="text-lg text-neutral-400 font-light max-w-xl mx-auto mb-12">
                Discover beautifully hand-crafted furniture pieces. We aim to deliver unique one-off pieces for each setting or occasion.
            </p>
<a className="inline-flex items-center gap-4 px-8 py-3 border border-white hover:bg-white hover:text-black transition-all duration-300" href="#">
<span className="uppercase tracking-[0.2em] text-xs">Start Project</span>
</a>
</div>
</section>

<section className="relative py-0 bg-[#0f0f0f] border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-2">
<div className="relative h-[60vh] md:h-screen group overflow-hidden border-r border-white/5">
<img alt="Gallery Image" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=2758&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-8 left-8">
<span className="text-xs uppercase tracking-widest bg-black/50 backdrop-blur px-3 py-1">Living</span>
</div>
</div>
<div className="relative h-[60vh] md:h-screen group overflow-hidden">
<img alt="Gallery Image 2" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-8 left-8">
<span className="text-xs uppercase tracking-widest bg-black/50 backdrop-blur px-3 py-1">Dining</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#0f0f0f] pt-24 pb-8 px-6 md:px-12 border-t border-white/5">
<div className="max-w-[1920px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">

<div className="md:col-span-1">
<a className="flex items-center gap-3 mb-8" href="#">
<div className="w-8 h-8 border border-white/30 flex items-center justify-center">
<span className="font-serif italic text-lg">C</span>
</div>
<span className="text-sm font-medium tracking-widest uppercase">The Carved</span>
</a>
</div>

<div className="md:col-span-1">
<span className="block text-xs uppercase tracking-widest text-neutral-600 mb-6">Explore</span>
<ul className="flex flex-col gap-4 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bespoke</a></li>
<li><a className="hover:text-white transition-colors" href="#">Artisans</a></li>
</ul>
</div>

<div className="md:col-span-1">
<span className="block text-xs uppercase tracking-widest text-neutral-600 mb-6">Support</span>
<ul className="flex flex-col gap-4 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-1">
<span className="block text-xs uppercase tracking-widest text-neutral-600 mb-6">Newsletter</span>
<div className="flex border-b border-white/20 pb-2">
<input className="bg-transparent w-full outline-none text-sm placeholder-neutral-600 font-mono" placeholder="EMAIL ADDRESS" type="email"/>
<button className="text-white hover:text-[#8b7e74] transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-neutral-600 border-t border-white/5 pt-8 font-mono">
<p>© 2024 The Carved Collection.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
