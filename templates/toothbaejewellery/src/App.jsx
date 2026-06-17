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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                class: "lucide",
                "stroke-width": 1.5
            }
        });

        // Search Toggle Functionality
        function toggleSearch() {
            const container = document.getElementById('search-container');
            const input = container.querySelector('input');
            
            if (container.classList.contains('h-0')) {
                container.classList.remove('h-0', 'opacity-0');
                container.classList.add('h-24', 'opacity-100'); 
                setTimeout(() => input.focus(), 100);
            } else {
                container.classList.add('h-0', 'opacity-0');
                container.classList.remove('h-24', 'opacity-100');
            }
        }

        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('mobile-overlay');
            const body = document.body;
            
            if (menu.classList.contains('-translate-x-full')) {
                menu.classList.remove('-translate-x-full');
                menu.classList.add('translate-x-0');
                
                overlay.classList.remove('opacity-0', 'pointer-events-none');
                overlay.classList.add('opacity-100', 'pointer-events-auto');
                
                body.style.overflow = 'hidden';
            } else {
                menu.classList.add('-translate-x-full');
                menu.classList.remove('translate-x-0');
                
                overlay.classList.add('opacity-0', 'pointer-events-none');
                overlay.classList.remove('opacity-100', 'pointer-events-auto');
                
                body.style.overflow = '';
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
      

<div className="fixed inset-0 bg-black/40 z-[60] opacity-0 pointer-events-none backdrop-blur-sm" id="mobile-overlay" onclick="toggleMenu()"></div>
<div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] transform -translate-x-full shadow-2xl flex flex-col" id="mobile-menu">
<div className="p-6 flex justify-between items-center border-b border-gray-100">
<h2 className="text-lg font-medium tracking-tight uppercase">Menu</h2>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors" onclick="toggleMenu()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="x"></i>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-8">
<div className="flex flex-col gap-6">
<a className="text-xl font-medium tracking-tight uppercase hover:text-gray-500 transition-colors" href="#">Jewelry+</a>
<a className="text-xl font-medium tracking-tight uppercase hover:text-gray-500 transition-colors" href="#">Hall of Fame</a>
<a className="text-xl font-medium tracking-tight uppercase hover:text-gray-500 transition-colors" href="#">Custom</a>
<a className="text-xl font-medium tracking-tight uppercase hover:text-gray-500 transition-colors" href="#">Flagship</a>
</div>
<div className="h-px bg-gray-100 w-full my-2"></div>
<div className="flex flex-col gap-4">
<a className="text-sm font-medium text-gray-500 uppercase tracking-widest hover:text-black" href="#">Account</a>
<a className="text-sm font-medium text-gray-500 uppercase tracking-widest hover:text-black" href="#">Search</a>
<a className="text-sm font-medium text-gray-500 uppercase tracking-widest hover:text-black" href="#">Help</a>
</div>
</nav>
<div className="p-6 bg-gray-50 border-t border-gray-100">
<p className="text-xs text-gray-400 uppercase tracking-wider text-center">© 2026 Toothbae</p>
</div>
</div>

<header className="fixed top-2 md:top-4 left-0 right-0 z-50 flex flex-col items-center px-2 md:px-4">
<nav className="w-full max-w-7xl bg-white/95 backdrop-blur-md border border-gray-200/50 shadow-sm rounded-xl md:rounded-2xl grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center px-3 py-3 md:px-6 md:py-4 relative z-50">

<div className="flex items-center md:hidden">
<button aria-label="Menu" className="p-2 hover:bg-gray-100 rounded-full transition-colors" onclick="toggleMenu()">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium tracking-widest uppercase hover:text-gray-500 transition-colors" href="#">Jewelry+</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-gray-500 transition-colors" href="#">Hall of Fame</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-gray-500 transition-colors" href="#">Custom</a>
<a className="text-xs font-medium tracking-widest uppercase hover:text-gray-500 transition-colors" href="#">Flagship</a>
</div>

<div className="flex justify-center md:justify-center">
<a className="flex flex-col items-center justify-center cursor-pointer group" href="#">
<h1 className="text-lg md:text-2xl font-medium tracking-tight uppercase leading-none">
                        Toothbae
                    </h1>
</a>
</div>

<div className="flex items-center justify-end gap-1 md:gap-3">

<button className="hidden md:flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-all group mr-1" onclick="toggleSearch()">
<i className="w-4 h-4 stroke-[1.5] text-gray-500 group-hover:text-black" data-lucide="search"></i>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 group-hover:text-black">Search</span>
</button>

<button aria-label="Account" className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="user"></i>
</button>

<button aria-label="Cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5]" data-lucide="shopping-bag"></i>
<span className="absolute top-2 right-1 w-1.5 h-1.5 md:w-2 md:h-2 bg-black rounded-full"></span>
</button>
</div>
</nav>

<div className="w-full max-w-7xl px-1 overflow-hidden h-0 opacity-0 transition-all duration-300 ease-in-out" id="search-container">
<div className="mt-2 bg-white border border-gray-200 shadow-xl rounded-xl p-3 flex gap-2">
<div className="relative flex-grow">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="search"></i>
<input className="w-full bg-gray-50 text-sm pl-10 pr-4 py-3 rounded-lg outline-none focus:ring-1 focus:ring-black/10 placeholder:text-gray-400 font-medium" placeholder="Search for grillz, chains, pendants..." type="text"/>
</div>
<button className="bg-black text-white px-8 py-2 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-gray-900 transition-colors">
                    Search
                </button>
</div>
</div>
</header>

<section className="relative w-full h-[100dvh] flex flex-col items-center justify-center bg-black overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/40 z-10"></div>
<video autoplay="" className="w-full h-full object-cover opacity-80" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/5359717/5359717-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
<img alt="Hero Background" src="https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?q=80&amp;w=2643&amp;auto=format&amp;fit=crop"/>
</video>
</div>
<div className="relative z-20 flex flex-col items-center text-center px-4 mt-16">
<p className="text-sm md:text-xl text-gray-200 uppercase tracking-[0.25em] font-normal mb-6 md:mb-8">
                New Collection
            </p>
<h2 className="text-5xl md:text-8xl lg:text-9xl font-medium text-white tracking-tighter mb-10 md:mb-16">
                ETHEREAL
            </h2>

<a className="group relative inline-block px-12 py-4 md:px-14 md:py-5 transition-all duration-300" href="#">
<span className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/60 group-hover:w-full group-hover:h-full group-hover:border-white transition-all duration-300"></span>
<span className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/60 group-hover:w-full group-hover:h-full group-hover:border-white transition-all duration-300"></span>
<span className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/60 group-hover:w-full group-hover:h-full group-hover:border-white transition-all duration-300"></span>
<span className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/60 group-hover:w-full group-hover:h-full group-hover:border-white transition-all duration-300"></span>
<span className="text-xs md:text-sm font-medium tracking-[0.25em] text-white uppercase">
                    Shop Now
                </span>
</a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
<i className="w-6 h-6 stroke-[1.5] text-white/50" data-lucide="chevron-down"></i>
</div>
</section>

<section className="w-full grid grid-cols-1 md:grid-cols-2">

<div className="order-2 md:order-1 px-6 py-16 md:p-32 bg-white flex flex-col justify-center items-start">
<span className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-widest mb-4 md:mb-6">Just In</span>
<h2 className="text-3xl md:text-6xl font-normal tracking-tight uppercase mb-6 md:mb-8 leading-none">The Custom<br/>Series</h2>
<p className="text-gray-600 text-base md:text-xl tracking-wide mb-10 md:mb-12 max-w-md leading-relaxed">
                Expertly crafted from your imagination. Our latest bespoke grillz feature bold silhouettes and intricate detailing designed to make a statement.
            </p>
<a className="group flex items-center gap-3 text-black" href="#">
<span className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase border-b border-black pb-1 group-hover:border-transparent transition-colors">Shop Now</span>
<i className="w-4 h-4 stroke-[1.5] transition-transform group-hover:translate-x-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="order-1 md:order-2 w-full h-[50vh] md:h-auto bg-gray-100 relative overflow-hidden group">
<img alt="New Arrivals Grillz" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</section>

<section className="w-full bg-white pt-12 md:pt-16">
<div className="px-4 md:px-8 mb-6 md:mb-8 flex justify-between items-end">
<h2 className="text-xl md:text-3xl font-medium tracking-tight uppercase">Latest Drops</h2>
<a className="text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-black" href="#">View All</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border-t border-b border-gray-100">

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Grillz" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Crown of Thorns</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">White Gold</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$11,000</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Grillz" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Diamond St. Mark</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Platinum</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$5,800</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Grillz" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Trinity Heart</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Rose Gold</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$2,700</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Grillz" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Oracle</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Two-Tone</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$5,400</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-28 bg-[#FAFAFA] overflow-hidden">
<div className="container mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-8 md:mb-16">
<div className="max-w-xl">
<h2 className="text-2xl md:text-5xl font-medium tracking-tight uppercase mb-4 md:mb-6">Shop By Category</h2>
<p className="text-gray-500 text-sm md:text-lg tracking-wide">Brilliant design and unparalleled craftsmanship across all collections.</p>
</div>

<div className="hidden md:flex gap-3">
<button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:border-black hover:text-white transition-all">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="w-full overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 md:gap-6 px-4 md:px-8 pb-10">

<div className="snap-center shrink-0 w-[70vw] md:w-[30vw] aspect-[3/4] relative group cursor-pointer overflow-hidden bg-white">
<img alt="Pendants" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase mb-3">Pendants</h3>
<div className="h-px w-full bg-white/30 group-hover:bg-white transition-colors"></div>
<div className="flex justify-between items-center mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-semibold tracking-widest uppercase">Explore</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[70vw] md:w-[30vw] aspect-[3/4] relative group cursor-pointer overflow-hidden bg-white">
<img alt="Rings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase mb-3">Rings</h3>
<div className="h-px w-full bg-white/30 group-hover:bg-white transition-colors"></div>
<div className="flex justify-between items-center mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-semibold tracking-widest uppercase">Explore</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[70vw] md:w-[30vw] aspect-[3/4] relative group cursor-pointer overflow-hidden bg-white">
<img alt="Chains" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white">
<h3 className="text-xl md:text-2xl font-medium tracking-tight uppercase mb-3">Chains</h3>
<div className="h-px w-full bg-white/30 group-hover:bg-white transition-colors"></div>
<div className="flex justify-between items-center mt-4 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-0 md:translate-y-2 group-hover:translate-y-0 duration-300">
<span className="text-xs font-semibold tracking-widest uppercase">Explore</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#111] py-24 md:py-48 flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="relative z-10">
<span className="text-white text-xs font-semibold tracking-[0.3em] uppercase mb-6 md:mb-8 block">Experience the Extraordinary</span>
<h2 className="text-3xl md:text-8xl text-white font-medium tracking-tighter uppercase mb-10 md:mb-16 leading-tight">
                The Flagship
            </h2>
<a className="inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 border border-white/30 text-white uppercase tracking-[0.2em] text-xs md:text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300" href="#">
                Book Appointment
            </a>
</div>
</section>

<section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white text-center px-4">
<h2 className="text-2xl md:text-6xl font-medium text-black uppercase tracking-tight">
            Bespoke Creations
        </h2>
<p className="mt-4 md:mt-6 text-gray-500 text-sm md:text-base tracking-wide max-w-lg mx-auto">One-of-a-kind pieces tailored to your exact specifications.</p>
</section>

<section className="w-full bg-white pb-24 md:pb-32">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 border-t border-b border-gray-100">

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Fractal Grillz" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Fractal Grillz</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Custom Gold</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$3,500</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Saber" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Saber</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">White Gold</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$2,600</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Cave Dweller" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Cave Dweller</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Yellow Gold</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium">$2,350</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="plus"></i>
</button>
</div>
</div>
</div>

<div className="group relative bg-white h-full flex flex-col">
<div className="w-full aspect-[4/5] overflow-hidden relative">
<img alt="Tank Roller" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1610423019881-87421867c4b0?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
</div>
<div className="p-3 md:p-8 flex flex-col flex-grow justify-between">
<div>
<h3 className="text-sm md:text-base font-medium text-gray-900 uppercase tracking-tight">Tank Roller</h3>
<p className="text-xs md:text-sm text-gray-500 mt-1 uppercase tracking-wider">Two-Tone</p>
</div>
<div className="flex justify-between items-end mt-4 md:mt-6">
<p className="text-sm md:text-base font-medium text-gray-500">Inquire</p>
<button className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-gray-100 rounded-full">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#111] text-white py-6 px-4 flex flex-col md:flex-row justify-center gap-6 md:gap-20 items-start md:items-center text-xs font-semibold tracking-widest uppercase border-b border-gray-800">
<div className="flex items-center gap-3">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="package"></i>
<span>Complimentary Global Delivery</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="gift"></i>
<span>Signature Packaging</span>
</div>
<div className="flex items-center gap-3">
<i className="w-4 h-4 stroke-[1.5] text-gray-400" data-lucide="shield-check"></i>
<span>Lifetime Warranty</span>
</div>
</div>

<footer className="bg-[#050505] text-white pt-16 md:pt-24 pb-12 px-6 md:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-24">

<div className="md:col-span-4">
<p className="text-sm text-gray-500 uppercase tracking-widest mb-6">Stay Connected</p>
<h3 className="text-xl md:text-2xl font-normal mb-8 leading-relaxed text-gray-200">
                        Join our exclusive list for early access to new collections and events.
                    </h3>
<form className="flex items-end border-b border-gray-700 pb-3 max-w-sm group focus-within:border-white transition-colors">
<input className="bg-transparent text-white placeholder-gray-600 outline-none w-full text-xs md:text-sm font-medium tracking-wider uppercase py-2" placeholder="EMAIL ADDRESS" type="email"/>
<button className="text-xs font-semibold uppercase tracking-widest text-white hover:text-gray-300 transition-colors ml-4" type="submit">Join</button>
</form>
</div>

<div className="grid grid-cols-2 gap-8 md:col-span-6 md:col-start-7 md:grid-cols-3">
<div>
<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 md:mb-8">Company</h4>
<ul className="space-y-4 md:space-y-5">
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">About</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Stores</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Careers</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 md:mb-8">Support</h4>
<ul className="space-y-4 md:space-y-5">
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Contact</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Shipping</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Returns</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6 md:mb-8">Legal</h4>
<ul className="space-y-4 md:space-y-5">
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Terms</a></li>
<li><a className="text-xs md:text-sm font-medium text-gray-300 hover:text-white uppercase tracking-wider transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 md:pt-10 border-t border-gray-800">
<div className="flex gap-6 md:gap-8 mb-6 md:mb-0">
<a className="text-[10px] md:text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider" href="#">Instagram</a>
<a className="text-[10px] md:text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider" href="#">Tiktok</a>
<a className="text-[10px] md:text-xs font-semibold text-gray-400 hover:text-white uppercase tracking-wider" href="#">Youtube</a>
</div>
<div className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold">
                    © 2026 Toothbae. All Rights Reserved.
                </div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40">
<button className="bg-black text-white rounded-full p-3 md:p-4 hover:scale-110 transition-transform duration-300 shadow-2xl border border-gray-800 group">
<i className="w-5 h-5 md:w-6 md:h-6 fill-current" data-lucide="message-square"></i>
</button>
</div>


    </>
  );
}
