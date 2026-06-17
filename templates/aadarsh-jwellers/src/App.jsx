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
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });

        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe Texts
            document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));
            
            // Observe Images
            document.querySelectorAll('.img-reveal').forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-[1400px] w-full mx-auto px-6 flex items-center justify-between">

<div className="md:hidden">
<button className="p-2 -ml-2 text-neutral-600 hover:text-black transition-colors">
<i data-lucide="menu" height="20" width="20"></i>
</button>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] font-medium text-neutral-600 hover:text-black transition-colors link-underline" href="#shop">Shop</a>
<a className="text-[13px] font-medium text-neutral-600 hover:text-black transition-colors link-underline" href="#collections">Collections</a>
<a className="text-[13px] font-medium text-neutral-600 hover:text-black transition-colors link-underline" href="#about">About</a>
</div>

<a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group" href="#">
<span className="font-serif text-2xl tracking-tighter uppercase font-medium text-neutral-900 group-hover:opacity-80 transition-opacity">Adarsh Jwellers</span>
</a>

<div className="flex items-center gap-5">
<button className="text-neutral-600 hover:text-black transition-transform hover:scale-110 duration-200">
<i data-lucide="search" height="18" width="18"></i>
</button>
<a className="hidden md:block text-neutral-600 hover:text-black transition-transform hover:scale-110 duration-200" href="#">
<i data-lucide="user" height="18" width="18"></i>
</a>
<button className="group relative text-neutral-600 hover:text-black transition-transform hover:scale-110 duration-200">
<i data-lucide="shopping-bag" height="18" width="18"></i>
<span className="absolute -top-1 -right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-neutral-900 text-[9px] font-bold text-white ring-2 ring-white">2</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="w-full h-full img-reveal-container bg-neutral-900">
<img alt="Silver Jewellery Art" className="w-full h-full object-cover opacity-80 animate-img-load" src="https://images.unsplash.com/photo-1630138274768-4693a9289576?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{animation: 'scaleIn 1.5s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'}}/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto mt-16">
<p className="reveal-text text-xs font-semibold tracking-[0.25em] uppercase mb-6 text-white/90">Est. 1998</p>
<h1 className="reveal-text delay-100 font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.9] tracking-tight mb-8">
                The Art of <br/><span className="italic text-white/90">Silver</span>
</h1>
<p className="reveal-text delay-200 text-sm md:text-base font-light text-white/80 max-w-md mx-auto mb-10 leading-relaxed">
                Handcrafted sterling silver jewelry designed for the modern muse. Timeless elegance meets contemporary minimalism.
            </p>
<div className="reveal-text delay-300">
<a className="inline-flex items-center justify-center h-11 px-8 bg-white text-neutral-900 text-[13px] font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors duration-300 rounded-sm" href="#shop">
                    Discover Collection
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce duration-[2s]">
<i data-lucide="chevron-down" height="24" strokeWidth="1" width="24"></i>
</div>
</header>

<section className="py-24 px-6 max-w-[1400px] mx-auto" id="collections">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-text">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-neutral-900 tracking-tight">Curated Categories</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-neutral-500 hover:text-neutral-900 transition-colors mt-4 md:mt-0 group" href="#">
                View All <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 h-auto lg:h-[600px]">

<div className="lg:col-span-6 lg:row-span-2 group relative rounded-sm overflow-hidden cursor-pointer img-reveal-container">
<img alt="Necklaces" className="img-reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-2xl tracking-wide">Necklaces</h3>
<p className="text-[11px] font-medium tracking-widest uppercase mt-2 opacity-80 group-hover:translate-x-2 transition-transform duration-300">Shop Now</p>
</div>
</div>

<div className="lg:col-span-3 lg:row-span-2 group relative rounded-sm overflow-hidden cursor-pointer img-reveal-container">
<img alt="Earrings" className="img-reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617038224558-28ad3fb558a7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-2xl tracking-wide">Earrings</h3>
<p className="text-[11px] font-medium tracking-widest uppercase mt-2 opacity-80 group-hover:translate-x-2 transition-transform duration-300">Shop Now</p>
</div>
</div>

<div className="lg:col-span-3 lg:row-span-1 h-64 lg:h-auto group relative rounded-sm overflow-hidden cursor-pointer img-reveal-container">
<img alt="Rings" className="img-reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=1942&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-2xl tracking-wide">Rings</h3>
</div>
</div>

<div className="lg:col-span-3 lg:row-span-1 h-64 lg:h-auto group relative rounded-sm overflow-hidden cursor-pointer img-reveal-container">
<img alt="Bracelets" className="img-reveal w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-serif text-2xl tracking-wide">Bracelets</h3>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50 border-y border-neutral-100" id="shop">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16 reveal-text">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">New Arrivals</span>
<h2 className="font-serif text-4xl md:text-5xl mt-3 text-neutral-900 tracking-tight">The Essentials</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm mb-4 img-reveal-container">
<img alt="Silver Ring" className="img-reveal w-full h-full object-cover" src="https://images.unsplash.com/photo-1596944924616-00bd11225150?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-900 hover:text-white">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-lg text-neutral-900">Lunar Band</h3>
<p className="text-xs text-neutral-500 mt-1 mb-2">Sterling Silver 925</p>
<span className="text-sm font-medium text-neutral-900">$85.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm mb-4 img-reveal-container">
<span className="absolute top-3 left-3 bg-neutral-900 text-white text-[9px] font-bold uppercase px-2 py-1 tracking-wider z-10">Best Seller</span>
<img alt="Silver Necklace" className="img-reveal w-full h-full object-cover" src="https://images.unsplash.com/photo-1602751584552-8ba43d5c38f4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-900 hover:text-white">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-lg text-neutral-900">Celestial Pendant</h3>
<p className="text-xs text-neutral-500 mt-1 mb-2">Oxidized Silver</p>
<span className="text-sm font-medium text-neutral-900">$120.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm mb-4 img-reveal-container">
<img alt="Silver Earrings" className="img-reveal w-full h-full object-cover" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-900 hover:text-white">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-lg text-neutral-900">Drop Earrings</h3>
<p className="text-xs text-neutral-500 mt-1 mb-2">Hammered Finish</p>
<span className="text-sm font-medium text-neutral-900">$95.00</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-sm mb-4 img-reveal-container">
<img alt="Silver Chain" className="img-reveal w-full h-full object-cover" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neutral-900 hover:text-white">
<i data-lucide="plus" height="18" width="18"></i>
</button>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-lg text-neutral-900">Minimalist Chain</h3>
<p className="text-xs text-neutral-500 mt-1 mb-2">Sterling Silver 925</p>
<span className="text-sm font-medium text-neutral-900">$65.00</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border-b border-neutral-300 pb-1 text-sm font-medium text-neutral-900 hover:border-black transition-colors" href="#">Shop All Products</a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative img-reveal-container rounded-sm overflow-hidden aspect-[4/5]">
<img alt="Artisan Craftsmanship" className="img-reveal w-full h-full object-cover" src="https://images.unsplash.com/photo-1590736686282-b7b5c87f87bf?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6">
<span className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400">Our Heritage</span>
<h2 className="font-serif text-4xl md:text-5xl text-neutral-900 leading-tight">Crafting timeless<br/>elegance since 1998</h2>
<p className="text-neutral-500 text-sm md:text-base font-light leading-relaxed">
                    Adarsh Jwellers represents the intersection of traditional craftsmanship and modern design. Each piece is meticulously handcrafted in our atelier, ensuring the highest purity of silver and attention to detail.
                </p>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-neutral-100 mt-8">
<div>
<h4 className="font-serif text-2xl text-neutral-900">925</h4>
<p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">Sterling Purity</p>
</div>
<div>
<h4 className="font-serif text-2xl text-neutral-900">Handmade</h4>
<p className="text-[11px] uppercase tracking-wider text-neutral-400 mt-1">Ethical Craft</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-20 pb-8">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="space-y-6">
<span className="font-serif text-2xl tracking-tight">Adarsh Jwellers</span>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                        Timeless silver jewelry for those who appreciate the beauty in details.
                    </p>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-500">Shop</h4>
<ul className="space-y-3 text-sm font-light text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rings</a></li>
<li><a className="hover:text-white transition-colors" href="#">Necklaces</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-500">Support</h4>
<ul className="space-y-3 text-sm font-light text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-neutral-500">Newsletter</h4>
<div className="flex gap-2 border-b border-neutral-700 pb-2">
<input className="bg-transparent w-full text-sm text-white placeholder:text-neutral-500 focus:outline-none" placeholder="Email Address" type="email"/>
<button className="text-neutral-400 hover:text-white transition-colors text-xs uppercase font-medium">Join</button>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500 font-light">
<p>© 2024 Adarsh Jwellers. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<div className="flex gap-4 ml-4 border-l border-neutral-800 pl-4">
<i data-lucide="instagram" height="16" width="16"></i>
<i data-lucide="facebook" height="16" width="16"></i>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
