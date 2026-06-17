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
espresso: '#1A1410',
walnut: '#241C17',
parchment: '#F4EFE6',
charcoal: '#2A2A2A',
browngray: '#6B5E54',
brass: '#B08D57',
brasshover: '#9A7B4B',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Lato"', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
widest: '0.15em',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Featured Products Slider Logic
        const slider = document.getElementById('slider');
        const leftBtn = document.getElementById('slideLeft');
        const rightBtn = document.getElementById('slideRight');

        if(slider && leftBtn && rightBtn) {
            // Auto scroll gentle
            let scrollAmount = 0;
            const scrollStep = 1;
            const delay = 30; // ms

            function autoScroll() {
                // If user is hovering, maybe pause? For now, keep simple manual controls primary.
            }

            rightBtn.addEventListener('click', () => {
                slider.scrollBy({ left: 320, behavior: 'smooth' });
            });

            leftBtn.addEventListener('click', () => {
                slider.scrollBy({ left: -320, behavior: 'smooth' });
            });
            
            // Subtle slow auto scroll
            let interval = setInterval(() => {
                 if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                     slider.scrollTo({left: 0, behavior: 'smooth'});
                 } else {
                     slider.scrollBy({ left: 1, behavior: 'auto' });
                 }
            }, 50);

            slider.addEventListener('mouseenter', () => clearInterval(interval));
            slider.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                     if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                         slider.scrollTo({left: 0, behavior: 'smooth'});
                     } else {
                         slider.scrollBy({ left: 1, behavior: 'auto' });
                     }
                }, 50);
            });
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
      

<nav className="sticky top-0 z-50 bg-espresso/95 backdrop-blur-sm border-b border-brass/20 transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden text-parchment hover:text-brass transition-colors">
<i data-lucide="menu"></i>
</button>

<div className="flex flex-col items-center lg:items-start cursor-pointer">
<span className="font-serif text-2xl tracking-tighter text-parchment font-medium">HERITAGE <span className="text-brass">ATELIER</span></span>
<span className="text-[0.6rem] tracking-[0.2em] text-browngray uppercase hidden lg:block">Est. 2024 • Dhaka</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm tracking-wide text-parchment/80">
<a className="hover:text-brass transition-colors" href="#">Watches</a>
<a className="hover:text-brass transition-colors" href="#">Eyewear</a>
<a className="hover:text-brass transition-colors" href="#">Collections</a>
<a className="hover:text-brass transition-colors" href="#">Sellers</a>
</div>

<div className="flex items-center gap-5">

<div className="hidden md:flex items-center bg-walnut border border-browngray/30 rounded-full px-4 py-1.5 focus-within:border-brass/50 transition-colors">
<i className="w-4 h-4 text-browngray" data-lucide="search"></i>
<input className="bg-transparent border-none outline-none text-sm ml-2 text-parchment placeholder-browngray/60 w-32 focus:w-48 transition-all duration-300" placeholder="Search masterpiece..." type="text"/>
</div>

<a className="relative group" href="#">
<i className="w-5 h-5 text-parchment group-hover:text-brass transition-colors" data-lucide="heart"></i>
</a>
<a className="relative group" href="#">
<i className="w-5 h-5 text-parchment group-hover:text-brass transition-colors" data-lucide="shopping-bag"></i>
<span className="absolute -top-1.5 -right-1.5 bg-brass text-espresso text-[0.6rem] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span>
</a>

<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 border border-brass text-brass text-xs uppercase tracking-widest font-semibold hover:bg-brass hover:text-espresso transition-all duration-300 rounded-sm" href="#register">
                    Register Your Shop
                </a>
</div>
</div>
</nav>

<section className="relative min-h-[600px] border-b border-brass/10 overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 h-full">

<div className="flex flex-col justify-center py-20 lg:py-0 pr-0 lg:pr-12 animate-fade-in-up">
<span className="text-brass text-sm uppercase tracking-widest mb-4 font-semibold">Timeless Craftsmanship</span>
<h1 className="font-serif text-5xl lg:text-6xl text-parchment leading-[1.1] mb-6 tracking-tight">
                    Precision in <br/> Every <span className="text-brass italic">Tick</span> &amp; Frame.
                </h1>
<p className="text-browngray text-lg font-light leading-relaxed mb-10 max-w-md">
                    Curating the finest timepieces and eyewear from Dhaka’s most venerable artisans. Heritage is not just kept; it is worn.
                </p>
<div className="flex gap-4">
<button className="bg-parchment text-espresso px-8 py-3.5 rounded-sm font-semibold text-sm uppercase tracking-wide hover:bg-brass transition-colors duration-300">
                        Shop Men
                    </button>
<button className="border border-parchment/30 text-parchment px-8 py-3.5 rounded-sm font-semibold text-sm uppercase tracking-wide hover:border-brass hover:text-brass transition-colors duration-300">
                        Shop Women
                    </button>
</div>
</div>

<div className="relative h-[400px] lg:h-auto overflow-hidden animate-fade-in">
<div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent z-10 lg:bg-gradient-to-l"></div>

<img alt="Luxury Watch Close up" className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-walnut/30">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl text-parchment mb-3 tracking-tight">Curated Collections</h2>
<div className="w-16 h-px bg-brass mx-auto"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative">
<img alt="Men's Watches" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors"></div>
</div>
<div className="p-6 text-center bg-parchment relative z-10 border-t border-gray-200">
<h3 className="font-serif text-xl text-charcoal group-hover:text-brass transition-colors">Men's Watches</h3>
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View Collection <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative">
<img alt="Women's Watches" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 text-center bg-parchment border-t border-gray-200">
<h3 className="font-serif text-xl text-charcoal group-hover:text-brass transition-colors">Women's Watches</h3>
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View Collection <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative">
<img alt="Eyeglasses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 text-center bg-parchment border-t border-gray-200">
<h3 className="font-serif text-xl text-charcoal group-hover:text-brass transition-colors">Optical Frames</h3>
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View Collection <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative">
<img alt="Sunglasses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 text-center bg-parchment border-t border-gray-200">
<h3 className="font-serif text-xl text-charcoal group-hover:text-brass transition-colors">Sunglasses</h3>
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            View Collection <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative bg-[#F9F7F2] flex items-center justify-center">
<div className="text-center p-8">
<div className="w-12 h-12 rounded-full bg-brass/10 flex items-center justify-center mx-auto mb-4 text-brass">
<i className="w-6 h-6" data-lucide="gem"></i>
</div>
<h4 className="font-serif text-lg text-charcoal">Premium Collection</h4>
<p className="text-sm text-browngray mt-2 font-light">Exclusive timepieces for the connoisseur.</p>
</div>
</div>
<div className="p-6 text-center bg-parchment border-t border-gray-200">
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Discover Luxury <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
<a className="group relative overflow-hidden rounded-md border border-white/5 bg-parchment hover:border-brass/60 transition-all duration-300" href="#">
<div className="h-64 overflow-hidden relative bg-[#F9F7F2] flex items-center justify-center">
<div className="text-center p-8">
<div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center mx-auto mb-4 text-charcoal">
<i className="w-6 h-6" data-lucide="tag"></i>
</div>
<h4 className="font-serif text-lg text-charcoal">Budget Picks</h4>
<p className="text-sm text-browngray mt-2 font-light">Style that respects your economy.</p>
</div>
</div>
<div className="p-6 text-center bg-parchment border-t border-gray-200">
<p className="text-xs text-browngray uppercase tracking-widest mt-1 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                            Browse Value <i className="w-3 h-3" data-lucide="arrow-right"></i>
</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-serif text-3xl text-parchment tracking-tight">Market Favorites</h2>
<p className="text-browngray mt-2 font-light">Most coveted pieces this month</p>
</div>
<a className="hidden sm:flex items-center gap-2 text-brass text-sm hover:text-white transition-colors" href="#">
                    View All Products <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group flex flex-col bg-parchment rounded-md overflow-hidden relative hover:shadow-xl hover:shadow-brass/5 transition-all duration-500">
<div className="relative h-64 overflow-hidden bg-[#EBE5D9]">
<span className="absolute top-3 left-3 bg-espresso/90 text-brass text-[0.6rem] font-bold px-2 py-1 uppercase tracking-widest rounded-sm z-10">Wholesale Available</span>
<img alt="Vintage Chronograph" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 flex flex-col gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="arrow-left-right"></i></button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.7rem] text-browngray uppercase tracking-wide">Gulshan Horology</span>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
</div>
</div>
<h3 className="font-serif text-lg text-charcoal font-medium leading-tight mb-2 group-hover:text-brass transition-colors cursor-pointer">The Royal Oak Classic</h3>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200/60">
<span className="font-sans font-semibold text-charcoal">৳ 12,500</span>
<button className="text-brass hover:text-espresso text-sm font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-parchment rounded-md overflow-hidden relative hover:shadow-xl hover:shadow-brass/5 transition-all duration-500">
<div className="relative h-64 overflow-hidden bg-[#EBE5D9]">
<img alt="Aviator Sunglasses" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 flex flex-col gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="arrow-left-right"></i></button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.7rem] text-browngray uppercase tracking-wide">Dhaka Optics</span>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
</div>
</div>
<h3 className="font-serif text-lg text-charcoal font-medium leading-tight mb-2 group-hover:text-brass transition-colors cursor-pointer">Heritage Aviator Gold</h3>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200/60">
<span className="font-sans font-semibold text-charcoal">৳ 2,450</span>
<button className="text-brass hover:text-espresso text-sm font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-parchment rounded-md overflow-hidden relative hover:shadow-xl hover:shadow-brass/5 transition-all duration-500">
<div className="relative h-64 overflow-hidden bg-[#EBE5D9]">
<span className="absolute top-3 left-3 bg-brass text-white text-[0.6rem] font-bold px-2 py-1 uppercase tracking-widest rounded-sm z-10">Best Seller</span>
<img alt="Minimalist Watch" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 flex flex-col gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="arrow-left-right"></i></button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.7rem] text-browngray uppercase tracking-wide">TimeKeeper BD</span>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
<h3 className="font-serif text-lg text-charcoal font-medium leading-tight mb-2 group-hover:text-brass transition-colors cursor-pointer">Minimalist Leather Strap</h3>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200/60">
<span className="font-sans font-semibold text-charcoal">৳ 4,200</span>
<button className="text-brass hover:text-espresso text-sm font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>
</div>
</div>

<div className="group flex flex-col bg-parchment rounded-md overflow-hidden relative hover:shadow-xl hover:shadow-brass/5 transition-all duration-500">
<div className="relative h-64 overflow-hidden bg-[#EBE5D9]">
<span className="absolute top-3 left-3 bg-espresso/90 text-brass text-[0.6rem] font-bold px-2 py-1 uppercase tracking-widest rounded-sm z-10">Wholesale Available</span>
<img alt="Wayfarer" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 flex flex-col gap-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="heart"></i></button>
<button className="w-8 h-8 rounded-full bg-white text-espresso flex items-center justify-center hover:bg-brass hover:text-white transition-colors shadow-sm"><i className="w-4 h-4" data-lucide="arrow-left-right"></i></button>
</div>
</div>
<div className="p-5 flex-1 flex flex-col">
<div className="flex justify-between items-start mb-2">
<span className="text-[0.7rem] text-browngray uppercase tracking-wide">Banani Vision</span>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
</div>
</div>
<h3 className="font-serif text-lg text-charcoal font-medium leading-tight mb-2 group-hover:text-brass transition-colors cursor-pointer">Classic Wayfarer Noir</h3>
<div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-200/60">
<span className="font-sans font-semibold text-charcoal">৳ 1,800</span>
<button className="text-brass hover:text-espresso text-sm font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-walnut border-y border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/black-linen.png\')'}}></div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="flex items-center justify-between mb-10">
<h2 className="font-serif text-3xl text-parchment tracking-tight">Atelier Masterpieces</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-parchment/20 text-parchment flex items-center justify-center hover:bg-brass hover:border-brass hover:text-espresso transition-all" id="slideLeft">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-parchment/20 text-parchment flex items-center justify-center hover:bg-brass hover:border-brass hover:text-espresso transition-all" id="slideRight">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto pb-8 snap-x scroll-smooth no-scrollbar" id="slider" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="relative rounded-md overflow-hidden aspect-[4/5] group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-brass text-xs uppercase tracking-widest mb-1 block">Limited Edition</span>
<h3 className="font-serif text-2xl text-white mb-2">The Midnight Chrono</h3>
<a className="text-parchment text-sm border-b border-brass pb-0.5 hover:text-brass transition-colors" href="#">View Details</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="relative rounded-md overflow-hidden aspect-[4/5] group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-brass text-xs uppercase tracking-widest mb-1 block">Handcrafted</span>
<h3 className="font-serif text-2xl text-white mb-2">Artisan Acetate Frames</h3>
<a className="text-parchment text-sm border-b border-brass pb-0.5 hover:text-brass transition-colors" href="#">View Details</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="relative rounded-md overflow-hidden aspect-[4/5] group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-brass text-xs uppercase tracking-widest mb-1 block">Swiss Movement</span>
<h3 className="font-serif text-2xl text-white mb-2">Diver Pro 300m</h3>
<a className="text-parchment text-sm border-b border-brass pb-0.5 hover:text-brass transition-colors" href="#">View Details</a>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center">
<div className="relative rounded-md overflow-hidden aspect-[4/5] group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-brass text-xs uppercase tracking-widest mb-1 block">Vintage Restoration</span>
<h3 className="font-serif text-2xl text-white mb-2">1960s Omega Seamaster</h3>
<a className="text-parchment text-sm border-b border-brass pb-0.5 hover:text-brass transition-colors" href="#">View Details</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brass text-xs uppercase tracking-widest">Trusted Merchants</span>
<h2 className="font-serif text-3xl text-parchment mt-2">Premier Sellers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-walnut rounded-md p-6 border border-white/5 flex items-center gap-5 hover:border-brass/30 transition-colors">
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brass/20 flex-shrink-0">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-serif text-lg text-parchment">Watch House BD</h3>
<i className="w-4 h-4 text-brass" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-browngray mb-2">Bashundhara City, Dhaka</p>
<div className="flex items-center gap-3">
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
<span className="text-xs text-parchment/60">4.9 (120+ sold)</span>
</div>
</div>
<button className="text-brass border border-brass/30 rounded-full p-2 hover:bg-brass hover:text-espresso transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-walnut rounded-md p-6 border border-white/5 flex items-center gap-5 hover:border-brass/30 transition-colors">
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brass/20 flex-shrink-0">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-serif text-lg text-parchment">Optic World</h3>
<i className="w-4 h-4 text-brass" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-browngray mb-2">Uttara Sector 7</p>
<div className="flex items-center gap-3">
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
</div>
<span className="text-xs text-parchment/60">4.8 (85 sold)</span>
</div>
</div>
<button className="text-brass border border-brass/30 rounded-full p-2 hover:bg-brass hover:text-espresso transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="bg-walnut rounded-md p-6 border border-white/5 flex items-center gap-5 hover:border-brass/30 transition-colors">
<div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brass/20 flex-shrink-0">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 mb-1">
<h3 className="font-serif text-lg text-parchment">Classic Times</h3>
<i className="w-4 h-4 text-brass" data-lucide="badge-check"></i>
</div>
<p className="text-xs text-browngray mb-2">New Market, Dhaka</p>
<div className="flex items-center gap-3">
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
</div>
<span className="text-xs text-parchment/60">4.7 (200+ sold)</span>
</div>
</div>
<button className="text-brass border border-brass/30 rounded-full p-2 hover:bg-brass hover:text-espresso transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-parchment text-espresso">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative grid grid-cols-2 gap-4">
<img className="rounded-md w-full h-64 object-cover transform translate-y-8 grayscale-[50%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="rounded-md w-full h-64 object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute -z-10 top-4 right-4 w-full h-full border border-brass/30 rounded-md transform translate-x-4 translate-y-4"></div>
</div>

<div>
<h2 className="font-serif text-4xl text-charcoal mb-6 leading-tight">Preserving the Art of <br/>Time &amp; Vision</h2>
<p className="text-browngray leading-relaxed mb-8">
                    In the bustling lanes of Dhaka, craftsmanship tells a story. We have digitized the heritage of the city's finest horologists and opticians. Every item on our platform is vetted for authenticity, ensuring that you don't just buy a product, but acquire a legacy.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass flex-shrink-0">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-serif font-medium text-charcoal">Verified Sellers</h4>
<p className="text-sm text-browngray mt-1">Strict vetting process for every merchant.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass flex-shrink-0">
<i className="w-5 h-5" data-lucide="box"></i>
</div>
<div>
<h4 className="font-serif font-medium text-charcoal">Secure Packaging</h4>
<p className="text-sm text-browngray mt-1">Premium boxing to protect your investment.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center text-brass flex-shrink-0">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<h4 className="font-serif font-medium text-charcoal">Secure Checkout</h4>
<p className="text-sm text-browngray mt-1">Encrypted transactions for peace of mind.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-espresso border-t border-brass/10">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="font-serif text-3xl text-parchment text-center mb-16">Voices of Patrons</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-walnut p-8 rounded-md border border-white/5 relative">
<i className="fa-solid fa-quote-left text-brass/20 text-4xl absolute top-6 right-6"></i>
<p className="text-parchment/80 font-light italic mb-6">"The watch arrived in pristine condition. It's rare to find such a curated collection of authentic mechanical watches in one place online."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-serif text-sm text-parchment">Rahim Ahmed</h4>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
</div>
</div>

<div className="bg-walnut p-8 rounded-md border border-white/5 relative mt-0 md:-mt-4 shadow-2xl shadow-black/50">
<i className="fa-solid fa-quote-left text-brass/20 text-4xl absolute top-6 right-6"></i>
<p className="text-parchment/80 font-light italic mb-6">"Heritage Atelier is a gem. I found the exact vintage frames I was looking for. The seller was extremely professional."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-serif text-sm text-parchment">Nusrat Jahan</h4>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
</div>
</div>
</div>
</div>

<div className="bg-walnut p-8 rounded-md border border-white/5 relative">
<i className="fa-solid fa-quote-left text-brass/20 text-4xl absolute top-6 right-6"></i>
<p className="text-parchment/80 font-light italic mb-6">"Exceptional quality and swift delivery. The wholesale options are perfect for my small boutique."</p>
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="font-serif text-sm text-parchment">Tanvir Hassan</h4>
<div className="flex text-brass text-[0.6rem]">
<i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="register">
<div className="absolute inset-0 bg-brass/10 z-0"></div>

<div className="absolute inset-0 opacity-20 z-0 mix-blend-overlay" style={{backgroundImage: 'url(\'https://www.transparenttextures.com/patterns/wood-pattern.png\')'}}></div>
<div className="max-w-2xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif text-4xl text-parchment mb-4">Have a shop? Share your <br/> craftsmanship.</h2>
<p className="text-parchment/70 mb-10 font-light text-lg">
                Join a curated community of premier sellers. Connect with buyers who value quality over quantity.
            </p>
<button className="bg-brass text-espresso text-sm font-bold uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-white hover:text-espresso transition-all duration-300 shadow-[0_0_20px_rgba(176,141,87,0.3)]">
                Register Your Shop
            </button>
</div>
</section>

<footer className="bg-walnut pt-20 pb-10 border-t border-white/5 text-parchment/80">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<span className="font-serif text-2xl text-parchment font-medium block mb-6">HERITAGE <span className="text-brass">ATELIER</span></span>
<p className="text-sm font-light text-browngray leading-relaxed mb-6">
                        Bridging the gap between timeless tradition and modern convenience. The premier destination for horology and eyewear in Dhaka.
                    </p>
<div className="flex gap-4">
<a className="text-parchment hover:text-brass transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-parchment hover:text-brass transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-parchment hover:text-brass transition-colors" href="#"><i className="fa-brands fa-whatsapp text-xl"></i></a>
</div>
</div>

<div>
<h4 className="font-serif text-lg text-parchment mb-6">Explore</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-brass transition-colors" href="#">Men's Collection</a></li>
<li><a className="hover:text-brass transition-colors" href="#">Women's Collection</a></li>
<li><a className="hover:text-brass transition-colors" href="#">Luxury Eyewear</a></li>
<li><a className="hover:text-brass transition-colors" href="#">Wholesale Lots</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg text-parchment mb-6">Company</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-brass transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-brass transition-colors" href="#">Our Sellers</a></li>
<li><a className="hover:text-brass transition-colors" href="#">Contact Support</a></li>
<li><a className="text-brass hover:text-white transition-colors" href="#register">Register as Seller</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg text-parchment mb-6">The Ledger</h4>
<p className="text-xs text-browngray mb-4">Subscribe for updates on rare arrivals.</p>
<div className="flex border-b border-browngray pb-2">
<input className="bg-transparent border-none outline-none text-sm w-full placeholder-browngray/50" placeholder="Email Address" type="email"/>
<button className="text-brass hover:text-white uppercase text-xs font-bold tracking-wider">Join</button>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-browngray">
<p>© 2024 Heritage Atelier. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-parchment" href="#">Privacy Policy</a>
<a className="hover:text-parchment" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
