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
      

<nav className="fixed top-0 w-full z-50 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#0a0a0a]/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">

<button className="md:hidden text-[#0a0a0a]">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<div className="hidden md:flex items-center space-x-8 text-sm tracking-wide font-light">
<a className="hover:text-[#c5a059] transition-colors" href="#shop">Shop</a>
<a className="hover:text-[#c5a059] transition-colors" href="#collections">Collections</a>
<a className="hover:text-[#c5a059] transition-colors" href="#about">House of Luxora</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2">
<a className="font-serif text-2xl md:text-3xl tracking-tighter font-medium text-[#0a0a0a]" href="#">
                    LUXORA MÉXICO
                </a>
</div>

<div className="flex items-center space-x-5 text-[#0a0a0a]">
<button className="hover:text-[#c5a059] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hover:text-[#c5a059] transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</button>
<button className="hover:text-[#c5a059] transition-colors">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</button>
<button className="hover:text-[#c5a059] transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-linear"></iconify-icon>
<span className="absolute -top-1 -right-1.5 bg-[#7b1113] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">

<img alt="Luxury Fashion Model" className="absolute inset-0 w-full h-full object-cover object-top opacity-80" src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30"></div>
<div className="relative z-10 text-center px-6 mt-20 flex flex-col items-center">
<span className="text-[#c5a059] text-xs md:text-sm tracking-[0.2em] uppercase font-light mb-4">Redefining Modern Elegance</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight font-medium text-[#fdfbf7] max-w-4xl leading-tight mb-8">
                Crafted for Power.<br/>Designed for Presence.
            </h1>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="bg-[#fdfbf7] text-[#0a0a0a] px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-[#c5a059] hover:text-white transition-all duration-300 w-full sm:w-auto text-center" href="#shop">
                    Shop Now
                </a>
<a className="border border-[#fdfbf7]/50 text-[#fdfbf7] px-8 py-3.5 text-sm uppercase tracking-widest hover:bg-[#fdfbf7] hover:text-[#0a0a0a] transition-all duration-300 w-full sm:w-auto text-center" href="#collections">
                    Explore Collection
                </a>
</div>
</div>
</header>

<section className="py-24 bg-[#fdfbf7]" id="collections">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#0a0a0a] mb-2">The Collections</h2>
<p className="text-sm text-[#0a0a0a]/60 font-light max-w-md">Discover our meticulously curated categories, designed for those who command attention.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] image-zoom" href="#">
<img alt="Men's Collection" className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#fdfbf7] mb-1">Men's</h3>
<span className="text-xs text-[#c5a059] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Discover <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] image-zoom" href="#">
<img alt="Women's Collection" className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#fdfbf7] mb-1">Women's</h3>
<span className="text-xs text-[#c5a059] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Discover <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] image-zoom" href="#">
<img alt="Streetwear Collection" className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#fdfbf7] mb-1">Streetwear</h3>
<span className="text-xs text-[#c5a059] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Discover <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden bg-[#0a0a0a] image-zoom" href="#">
<img alt="Luxury Essentials" className="w-full h-full object-cover transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1434389670869-c87520fca2ee?q=80&amp;w=2083&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="font-serif text-2xl tracking-tight font-medium text-[#fdfbf7] mb-1">Essentials</h3>
<span className="text-xs text-[#c5a059] tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all">Discover <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#0a0a0a]/5" id="shop">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl tracking-tight font-medium text-[#0a0a0a] mb-4">New Arrivals</h2>
<p className="text-sm font-light text-[#0a0a0a]/60">The latest expressions of modern luxury.</p>
</div>

<div className="flex flex-wrap items-center justify-between mb-10 pb-4 border-b border-[#0a0a0a]/10">
<div className="flex space-x-6 overflow-x-auto no-scrollbar pb-2 w-full md:w-auto">
<button className="text-sm font-medium text-[#0a0a0a] border-b-2 border-[#0a0a0a] pb-1 whitespace-nowrap">All</button>
<button className="text-sm font-light text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors whitespace-nowrap">Ready to Wear</button>
<button className="text-sm font-light text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors whitespace-nowrap">Bags &amp; Accessories</button>
<button className="text-sm font-light text-[#0a0a0a]/50 hover:text-[#0a0a0a] transition-colors whitespace-nowrap">Shoes</button>
</div>
<div className="hidden md:flex items-center space-x-4 mt-4 md:mt-0">
<div className="relative">
<select className="appearance-none bg-transparent text-sm font-light border border-[#0a0a0a]/20 pl-4 pr-10 py-2 focus:outline-none focus:border-[#0a0a0a] cursor-pointer">
<option>Sort by: Featured</option>
<option>Price: High to Low</option>
<option>Price: Low to High</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#0a0a0a]/50 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Silk Evening Gown" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1983&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
<button className="bg-[#fdfbf7] text-[#0a0a0a] text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[#c5a059] hover:text-white transition-colors w-full">Quick Add</button>
</div>
<button className="absolute top-4 right-4 text-[#0a0a0a] hover:text-[#7b1113] transition-colors bg-white/80 p-2 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<span className="text-xs text-[#0a0a0a]/50 uppercase tracking-wider mb-1 block">Women</span>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#0a0a0a]">Crimson Silk Evening Gown</h3>
</div>
<span className="text-sm font-medium text-[#0a0a0a]">₹1,25,000</span>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Tailored Wool Suit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
<button className="bg-[#fdfbf7] text-[#0a0a0a] text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[#c5a059] hover:text-white transition-colors w-full">Quick Add</button>
</div>
<button className="absolute top-4 right-4 text-[#0a0a0a] hover:text-[#7b1113] transition-colors bg-white/80 p-2 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<span className="text-xs text-[#0a0a0a]/50 uppercase tracking-wider mb-1 block">Men</span>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#0a0a0a]">Midnight Wool Two-Piece Suit</h3>
</div>
<span className="text-sm font-medium text-[#0a0a0a]">₹85,500</span>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Leather Tote Bag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1915&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
<button className="bg-[#fdfbf7] text-[#0a0a0a] text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[#c5a059] hover:text-white transition-colors w-full">Quick Add</button>
</div>
<button className="absolute top-4 right-4 text-[#0a0a0a] hover:text-[#7b1113] transition-colors bg-white/80 p-2 rounded-full backdrop-blur-sm">
<iconify-icon className="text-[#7b1113]" icon="solar:heart-bold"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<span className="text-xs text-[#0a0a0a]/50 uppercase tracking-wider mb-1 block">Accessories</span>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#0a0a0a]">Signature Leather Tote</h3>
</div>
<span className="text-sm font-medium text-[#0a0a0a]">₹45,000</span>
</div>
</div>

<div className="group flex flex-col cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
<img alt="Leather Heels" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center bg-gradient-to-t from-black/50 to-transparent">
<button className="bg-[#fdfbf7] text-[#0a0a0a] text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[#c5a059] hover:text-white transition-colors w-full">Quick Add</button>
</div>
<button className="absolute top-4 right-4 text-[#0a0a0a] hover:text-[#7b1113] transition-colors bg-white/80 p-2 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<span className="text-xs text-[#0a0a0a]/50 uppercase tracking-wider mb-1 block">Shoes</span>
<h3 className="font-serif text-lg tracking-tight font-medium text-[#0a0a0a]">Ivory Stiletto Pumps</h3>
</div>
<span className="text-sm font-medium text-[#0a0a0a]">₹32,000</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-[#0a0a0a] text-[#0a0a0a] px-10 py-3 text-sm uppercase tracking-widest hover:bg-[#0a0a0a] hover:text-[#fdfbf7] transition-all duration-300">
                    View All Products
                </button>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] text-[#fdfbf7] py-24">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center">
<div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
<img alt="Detail View 1" className="w-full h-full object-cover aspect-[3/4]" src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>
<img alt="Detail View 2" className="w-full h-full object-cover aspect-[3/4] mt-8" src="https://images.unsplash.com/photo-1618245472855-22b0f4cd2908?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2">
<span className="text-[#c5a059] text-xs tracking-[0.2em] uppercase mb-4 block">Focus on Craft</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium mb-6">The Onyx Velvet Blazer</h2>
<p className="font-light text-sm md:text-base text-[#fdfbf7]/70 mb-8 leading-relaxed">
                    A masterclass in modern tailoring. Hand-stitched in our exclusive workshops, this velvet blazer features sharp peak lapels and a structured shoulder designed to create an imposing, elegant silhouette. Lined with pure silk for effortless wear.
                </p>
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<span className="text-xs uppercase tracking-widest text-[#fdfbf7]/60">Select Size</span>
<a className="text-xs text-[#c5a059] underline underline-offset-4" href="#">Size Guide</a>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 border border-[#fdfbf7]/20 flex items-center justify-center text-sm hover:border-[#c5a059] hover:text-[#c5a059] transition-colors">46</button>
<button className="w-12 h-12 border border-[#c5a059] bg-[#c5a059] text-[#0a0a0a] flex items-center justify-center text-sm font-medium">48</button>
<button className="w-12 h-12 border border-[#fdfbf7]/20 flex items-center justify-center text-sm hover:border-[#c5a059] hover:text-[#c5a059] transition-colors">50</button>
<button className="w-12 h-12 border border-[#fdfbf7]/20 flex items-center justify-center text-sm hover:border-[#c5a059] hover:text-[#c5a059] transition-colors text-white/30 cursor-not-allowed">52</button>
</div>
</div>
<div className="flex gap-4">
<button className="flex-1 bg-[#c5a059] text-[#0a0a0a] px-8 py-4 text-sm uppercase tracking-widest font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                        Add to Bag - ₹98,000
                    </button>
<button className="w-14 border border-[#fdfbf7]/20 flex items-center justify-center hover:border-white transition-colors text-xl">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fdfbf7]" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-5/12 order-2 md:order-1">
<span className="text-[#7b1113] text-xs tracking-widest uppercase font-medium mb-4 block">House of Luxora</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-[#0a0a0a] mb-6 leading-tight">Heritage Meets the Vanguard.</h2>
<p className="font-light text-sm md:text-base text-[#0a0a0a]/70 mb-6 leading-relaxed">
                    LUXORA MÉXICO was born from a desire to bridge the gap between classic sartorial elegance and the raw energy of contemporary fashion. We source only the finest fabrics globally, ensuring every thread speaks of uncompromising quality.
                </p>
<p className="font-light text-sm md:text-base text-[#0a0a0a]/70 mb-10 leading-relaxed">
                    Our designs are not just clothing; they are armor for the modern world. Crafted for those who understand that presence is a subtle art.
                </p>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium text-[#0a0a0a] hover:text-[#c5a059] transition-colors border-b border-[#0a0a0a] hover:border-[#c5a059] pb-1" href="#">
                    Discover Our Story <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="w-full md:w-7/12 order-1 md:order-2 relative">
<div className="aspect-[4/5] bg-gray-200 overflow-hidden">
<img alt="Fashion Workshop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#c5a059] -z-10 hidden md:block"></div>
</div>
</div>
</section>

<section className="py-2 bg-white">
<div className="text-center mb-10 mt-20">
<span className="text-xs uppercase tracking-widest text-[#0a0a0a]/50 mb-2 block">@LuxoraMexico</span>
<h2 className="font-serif text-3xl tracking-tight font-medium text-[#0a0a0a]">The Luxora Lifestyle</h2>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-1 px-1">
<img alt="Gallery 1" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1550614000-4b95d4ebfa24?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 2" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1611042553365-9b101441c135?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 3" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1509631179647-0c5000642f51?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 4" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 5" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<img alt="Gallery 6" className="w-64 h-80 object-cover flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 bg-[#fdfbf7]">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-[#0a0a0a] mb-4">Private Client Services</h2>
<p className="text-sm font-light text-[#0a0a0a]/60 mb-10 max-w-lg mx-auto">
                For bespoke inquiries, styling advice, or assistance with your order, our concierges are at your disposal.
            </p>
<div className="mb-12">
<span className="block text-xs uppercase tracking-widest text-[#0a0a0a]/50 mb-2">Direct Line</span>
<a className="font-serif text-2xl md:text-3xl text-[#0a0a0a] hover:text-[#c5a059] transition-colors" href="tel:+917733012055">+91 77330 12055</a>
</div>
<form className="space-y-8 text-left max-w-lg mx-auto">
<div className="relative">
<input className="peer w-full border-b border-[#0a0a0a]/20 bg-transparent py-2 text-sm text-[#0a0a0a] focus:border-[#0a0a0a] focus:outline-none placeholder-transparent transition-colors" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#0a0a0a]/50 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0a0a0a] uppercase tracking-wider" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full border-b border-[#0a0a0a]/20 bg-transparent py-2 text-sm text-[#0a0a0a] focus:border-[#0a0a0a] focus:outline-none placeholder-transparent transition-colors" id="phone" placeholder="Phone" required="" type="tel"/>
<label className="absolute left-0 -top-3.5 text-xs text-[#0a0a0a]/50 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0a0a0a] uppercase tracking-wider" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<textarea className="peer w-full border-b border-[#0a0a0a]/20 bg-transparent py-2 text-sm text-[#0a0a0a] focus:border-[#0a0a0a] focus:outline-none placeholder-transparent transition-colors resize-none" id="message" placeholder="Message" required="" rows="3"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-[#0a0a0a]/50 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0a0a0a] uppercase tracking-wider" htmlFor="message">Your Inquiry</label>
</div>
<button className="w-full bg-[#0a0a0a] text-[#fdfbf7] px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#c5a059] transition-colors" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="bg-[#0a0a0a] text-[#fdfbf7] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="font-serif text-2xl tracking-tighter font-medium text-[#fdfbf7] mb-6 block" href="#">
                        LUXORA MÉXICO
                    </a>
<p className="text-xs font-light text-[#fdfbf7]/50 max-w-xs leading-relaxed">
                        Redefining modern elegance through uncompromising quality and visionary design.
                    </p>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#c5a059]">Boutique</h4>
<ul className="space-y-4 text-sm font-light text-[#fdfbf7]/70">
<li><a className="hover:text-white transition-colors" href="#">Men's Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Women's Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Streetwear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#c5a059]">Client Care</h4>
<ul className="space-y-4 text-sm font-light text-[#fdfbf7]/70">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
</ul>
</div>

<div>
<h4 className="text-xs uppercase tracking-widest font-medium mb-6 text-[#c5a059]">The Inner Circle</h4>
<p className="text-xs font-light text-[#fdfbf7]/50 mb-4">Subscribe to receive updates on exclusive releases and private events.</p>
<form className="flex border-b border-[#fdfbf7]/30 pb-2 focus-within:border-white transition-colors">
<input className="bg-transparent w-full text-sm outline-none text-[#fdfbf7] placeholder-[#fdfbf7]/30 font-light" placeholder="Email Address" type="email"/>
<button className="text-[#fdfbf7] hover:text-[#c5a059] transition-colors pl-2" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>

<div className="flex space-x-4 mt-8">
<a className="text-[#fdfbf7]/50 hover:text-white transition-colors text-xl" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a>
<a className="text-[#fdfbf7]/50 hover:text-white transition-colors text-xl" href="#"><iconify-icon icon="solar:video-frame-linear"></iconify-icon></a>
<a className="text-[#fdfbf7]/50 hover:text-white transition-colors text-xl" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-[#fdfbf7]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-[#fdfbf7]/40">
<p>© 2024 LUXORA MÉXICO. All Rights Reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
