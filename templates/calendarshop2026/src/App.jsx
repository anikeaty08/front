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
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
red: '#d20113',
gold: '#fcc029',
dark: '#111111',
gray: '#32373c',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });

        // Sticky Nav Shadow on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 0) {
                nav.classList.add('shadow-md');
            } else {
                nav.classList.remove('shadow-md');
            }
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
      

<div className="bg-brand-gray text-white py-2 px-4 text-xs font-medium tracking-wide">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<span>Free Local Delivery on orders over R500</span>
<div className="flex gap-4 items-center">
<a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/my-account/">Login</a>
<span className="opacity-20">|</span>
<a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/my-account/">Register</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col group" href="https://calendarshop.co.za/">
<span className="text-xl font-semibold tracking-tight text-brand-dark group-hover:text-brand-red transition-colors">CALENDAR SHOP</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">South African Calendars</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium hover:text-brand-red transition-colors" href="https://calendarshop.co.za/index.php/product-category/2026-range/">2026 Range</a>
<div className="relative group h-20 flex items-center">
<button className="text-sm font-medium hover:text-brand-red transition-colors flex items-center gap-1">
                        Formats
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-100 rounded-[2px] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
<div className="py-2 flex flex-col">
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/a4-calendars/">A4 Calendars</a>
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/a5-calendars/">A5 Calendars</a>
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/a6-calendars/">A6 Calendars</a>
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/desktop-calendars/">Desktop Calendars</a>
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/planner-calendars/">Planners</a>
<a className="px-4 py-2 text-xs font-medium hover:bg-slate-50 hover:text-brand-red" href="https://calendarshop.co.za/index.php/product-category/birthday-calendars/">Birthday</a>
</div>
</div>
</div>
<a className="text-sm font-medium hover:text-brand-red transition-colors" href="https://calendarshop.co.za/index.php/product-category/greeting-cards/">Greeting Cards</a>
<a className="text-sm font-medium hover:text-brand-red transition-colors" href="https://calendarshop.co.za/index.php/product-category/postcards/">Postcards</a>
</div>

<div className="flex items-center gap-5">
<button className="text-slate-600 hover:text-brand-red transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<a className="text-slate-600 hover:text-brand-red transition-colors relative" href="https://calendarshop.co.za/index.php/cart/">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-brand-red text-[8px] font-bold text-white">0</span>
</a>
<button className="lg:hidden text-slate-600" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-white border-b border-slate-100 absolute w-full left-0 top-20 p-6 flex-col gap-4 shadow-lg" id="mobile-menu">
<a className="text-sm font-medium text-slate-800" href="https://calendarshop.co.za/index.php/product-category/2026-range/">2026 Range</a>
<a className="text-sm font-medium text-slate-800" href="https://calendarshop.co.za/index.php/product-category/a4-calendars/">Calendars</a>
<a className="text-sm font-medium text-slate-800" href="https://calendarshop.co.za/index.php/product-category/greeting-cards/">Greeting Cards</a>
<a className="text-sm font-medium text-slate-800" href="https://calendarshop.co.za/index.php/product-category/postcards/">Postcards</a>
</div>
</nav>

<header className="relative w-full h-[600px] flex items-center justify-center overflow-hidden bg-slate-100">

<div className="absolute inset-0 z-0">
<img alt="South African Wildlife" className="w-full h-full object-cover opacity-90 brightness-[0.85]" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full bg-white/10 backdrop-blur-sm text-xs font-medium tracking-widest uppercase mb-6">Since 2016</span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 leading-[1.1]">2026 South African <br/> <span className="text-brand-gold">Collection</span></h1>
<p className="text-lg md:text-xl text-slate-100 font-light mb-10 max-w-2xl mx-auto">Discover the beauty of Africa through our premium wall, desktop, and planner calendars.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center h-12 px-8 bg-brand-red hover:bg-red-700 text-white font-medium rounded-[2px] transition-all duration-300" href="https://calendarshop.co.za/index.php/product-category/2026-range/">
                    View 2026 Range
                </a>
<a className="inline-flex items-center justify-center h-12 px-8 bg-white hover:bg-slate-100 text-brand-dark font-medium rounded-[2px] transition-all duration-300" href="https://calendarshop.co.za/index.php/retail-outlets/">
                    Find Retailer
                </a>
</div>
</div>
</header>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-brand-dark mb-2">Shop by Format</h2>
<p className="text-slate-500 font-light">Choose the perfect size for your space.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-red hover:text-brand-dark transition-colors" href="https://calendarshop.co.za/index.php/product-category/2026-range/">
                View All
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/a4-calendars/">
<img alt="A4 Calendars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">A4 Wall</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/desktop-calendars/">
<img alt="Desktop Calendars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517055729445-b77a06487627?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">Desktop</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/planner-calendars/">
<img alt="Planner Calendars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">Planners</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/greeting-cards/">
<img alt="Greeting Cards" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588528996570-a3297a7e78d9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">Greeting Cards</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/a5-calendars/">
<img alt="A5 Calendars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517411032315-54ef2cb00966?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">A5 Wall</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group relative aspect-[4/3] overflow-hidden rounded-[2px] bg-slate-100" href="https://calendarshop.co.za/index.php/product-category/a6-calendars/">
<img alt="A6 Calendars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1531346878377-a51370e0c59e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white mb-1">A6 Mini</h3>
<div className="flex items-center gap-2 text-brand-gold text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        Shop Now <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12 text-brand-dark">Top Selling Calendars</h2>

<div className="relative group">
<div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<a className="block bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card" href="https://calendarshop.co.za/index.php/product/africa-a4-wall-calendar-2026/">
<div className="relative aspect-[3/4] overflow-hidden">
<img alt="Africa A4" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1547471080-7528185270d4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0 text-brand-red">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="font-medium text-lg mb-1 text-slate-900">Africa</h3>
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">A4 Wall Calendar 2026</p>
<p className="text-brand-red font-semibold">R150.00</p>
</div>
</a>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<a className="block bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card" href="https://calendarshop.co.za/index.php/product/african-wildlife-a4-wall-calendar-2026/">
<div className="relative aspect-[3/4] overflow-hidden">
<img alt="Wildlife" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0 text-brand-red">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="font-medium text-lg mb-1 text-slate-900">African Wildlife</h3>
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">A4 Wall Calendar 2026</p>
<p className="text-brand-red font-semibold">R150.00</p>
</div>
</a>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<a className="block bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card" href="https://calendarshop.co.za/index.php/product/cats-kittens-a4-wall-calendar-2026/">
<div className="relative aspect-[3/4] overflow-hidden">
<img alt="Cats" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0 text-brand-red">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="font-medium text-lg mb-1 text-slate-900">Cats &amp; Kittens</h3>
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">A4 Wall Calendar 2026</p>
<p className="text-brand-red font-semibold">R150.00</p>
</div>
</a>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center">
<a className="block bg-white rounded-[2px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card" href="https://calendarshop.co.za/index.php/product/baby-wildlife-a4-wall-calendar-2026/">
<div className="relative aspect-[3/4] overflow-hidden">
<img alt="Baby Wildlife" className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105" src="https://images.unsplash.com/photo-1456926631375-92c8ce872def?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg opacity-0 group-hover/card:opacity-100 transition-all translate-y-2 group-hover/card:translate-y-0 text-brand-red">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-5">
<h3 className="font-medium text-lg mb-1 text-slate-900">Baby Wildlife</h3>
<p className="text-xs uppercase tracking-wider text-slate-500 mb-2">A4 Wall Calendar 2026</p>
<p className="text-brand-red font-semibold">R150.00</p>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="relative overflow-hidden rounded-[2px] bg-brand-dark text-white p-12 flex flex-col justify-center items-start">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<h3 className="text-3xl font-semibold mb-4 z-10">Find Our Stand</h3>
<p className="text-slate-300 mb-8 font-light z-10 max-w-sm">Locate the nearest retail outlet stocking our 2026 range of calendars.</p>
<a className="z-10 inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors font-medium" href="https://calendarshop.co.za/index.php/retail-outlets/">
                    View Retailers
                    <iconify-icon icon="solar:map-point-linear"></iconify-icon>
</a>
</div>

<div className="rounded-[2px] border border-slate-200 p-12 flex flex-col justify-center items-center text-center">
<h3 className="text-lg font-medium mb-8 text-slate-900">View Our Other Brands</h3>
<div className="flex gap-8 items-center justify-center">
<a className="opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" href="http://corporatecalendars.co.za">

<div className="font-bold text-xl tracking-tight text-slate-800">CORPORATE<br/><span className="text-brand-red">CALENDARS</span></div>
</a>
<div className="w-px h-12 bg-slate-200"></div>
<a className="opacity-50 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0" href="http://kinkyrhino.co.za">

<div className="font-bold text-xl tracking-tight text-slate-800">KINKY<span className="text-pink-500">RHINO</span></div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-brand-gray text-slate-300 py-16 text-sm border-t border-slate-700">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">

<div>
<h4 className="text-white font-semibold mb-6 tracking-wide text-xs uppercase">Account</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/my-account/">Sign In</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/my-account/">Create Account</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/my-account/orders/">Orders</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/wholesale-buyers/">Wholesale Buyers</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6 tracking-wide text-xs uppercase">Company</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/about-us/">About Us</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/our-companies/">Our Companies</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/retail-outlets/">Retail Outlets</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/contact-us/">Contact Us</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="https://calendarshop.co.za/index.php/terms-and-conditions/">Terms &amp; Conditions</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-semibold mb-6 tracking-wide text-xs uppercase">Follow Us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-brand-red transition-colors text-white" href="https://www.facebook.com/Calendar-Shop-34117818868/">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-brand-red transition-colors text-white" href="https://twitter.com/calshopZA">
<iconify-icon icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white font-semibold mb-6 tracking-wide text-xs uppercase">Secure Payment</h4>
<div className="flex items-center gap-2 opacity-70 grayscale">
<iconify-icon icon="logos:visa" width="36"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="36"></iconify-icon>
<iconify-icon icon="logos:payfast" width="60"></iconify-icon>
</div>
</div>
</div>
<div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-slate-500">
<p>© 2025 Calendar Shop. All Rights Reserved.</p>
<p>Unit 31 Constantiaberg Business Park, Princess Vlei Road, Diep River, Cape Town</p>
</div>
</div>
</footer>


    </>
  );
}
