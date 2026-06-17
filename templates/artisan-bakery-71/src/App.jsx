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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="group flex flex-col items-start" href="#">
<span className="text-xl md:text-2xl font-medium tracking-tight text-[#670C0B] serif uppercase group-hover:opacity-80 transition-opacity">Ideal Bakery</span>
<span className="text-[0.65rem] tracking-[0.2em] text-[#D4822E] uppercase">Hill Park • Karachi</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-[#670C0B] transition-colors" href="#about">Our Story</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#670C0B] transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#670C0B] transition-colors" href="#specialties">Specialties</a>
<a className="text-sm font-medium text-stone-600 hover:text-[#670C0B] transition-colors" href="#contact">Locations</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#670C0B] hover:text-[#D4822E] transition-colors" href="https://wa.me/920000000000">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>Order: +92 21 3453...</span>
</a>
<button className="bg-[#670C0B] text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-[#80100F] transition-all shadow-lg shadow-red-900/20 flex items-center gap-2">
<span>ORDER ONLINE</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#0D1134]">

<div className="absolute inset-0 z-0">
<img alt="Freshly baked artisan bread" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D1134] via-[#0D1134]/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0D1134]/90 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4822E]/20 border border-[#D4822E]/30 text-[#D4822E] text-xs font-medium mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:medal-ribbon-star-linear" width="16"></iconify-icon>
<span>Serving Karachi Since 19XX</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6 drop-shadow-sm">
                    Crafting <span className="italic text-[#D4822E]">Karachi's</span> <br/> Finest Baked Delights.
                </h1>
<p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-lg">
                    Experience the perfect blend of traditional warmth and modern artisanal excellence. From our oven to your table, fresh every morning.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#D4822E] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#b86e24] transition-all shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2">
                        Explore Full Menu
                    </button>
<button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                        Order on WhatsApp
                    </button>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
<span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<span className="text-[#670C0B] font-medium tracking-wider text-xs uppercase mb-2 block">Our Heritage</span>
<h2 className="text-4xl md:text-5xl font-medium text-[#212529] mb-6 tracking-tight leading-tight">More than just a bakery,<br/> a <span className="text-[#D4822E] serif italic">family tradition.</span></h2>
<p className="text-stone-600 leading-relaxed mb-6 font-light">
                        Located in the heart of Hill Park, Ideal Bakery has been a staple of Karachi's culinary landscape for decades. We believe in the purity of ingredients, the patience of fermentation, and the joy of sharing good food.
                    </p>
<p className="text-stone-600 leading-relaxed mb-10 font-light">
                        Our chefs blend time-honored recipes with contemporary techniques to create pastries, breads, and sweets that evoke nostalgia while surprising the palate.
                    </p>

<div className="grid grid-cols-3 gap-8 border-t border-stone-200 pt-8">
<div>
<span className="block text-3xl font-medium text-[#0D1134] serif">30+</span>
<span className="text-xs text-stone-500 uppercase tracking-wide mt-1 block">Years of Service</span>
</div>
<div>
<span className="block text-3xl font-medium text-[#0D1134] serif">500+</span>
<span className="text-xs text-stone-500 uppercase tracking-wide mt-1 block">Daily Customers</span>
</div>
<div>
<span className="block text-3xl font-medium text-[#0D1134] serif">100%</span>
<span className="text-xs text-stone-500 uppercase tracking-wide mt-1 block">Halal &amp; Fresh</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 grid grid-cols-2 gap-4 relative">
<div className="space-y-4 translate-y-8">
<div className="img-zoom-container rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Baker kneading dough" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&amp;w=1926&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="img-zoom-container rounded-2xl overflow-hidden aspect-[3/4]">
<img alt="Artisan cakes" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626803775151-61d756612fcd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-full shadow-xl">
<div className="border border-dashed border-[#670C0B] rounded-full w-24 h-24 flex items-center justify-center flex-col text-center">
<span className="text-[#670C0B] text-xs font-bold uppercase tracking-widest">Est.</span>
<span className="text-2xl font-medium serif text-[#0D1134]">19XX</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-[#212529] mb-2 tracking-tight">Curated Collections</h2>
<p className="text-stone-500 font-light">Explore our signature ranges crafted for every occasion.</p>
</div>
<a className="group flex items-center gap-1 text-[#670C0B] text-sm font-medium mt-4 md:mt-0" href="#">
                    View Full Menu 
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative h-96 rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Celebration Cakes" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=1989&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white serif tracking-wide mb-1">Celebration Cakes</h3>
<div className="w-full h-[1px] bg-white/30 group-hover:bg-[#D4822E] transition-colors duration-300"></div>
<p className="text-white/80 text-xs mt-2 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Custom designs for your special moments</p>
</div>
</a>

<a className="group relative h-96 rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Artisan Breads" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white serif tracking-wide mb-1">Fresh Breads</h3>
<div className="w-full h-[1px] bg-white/30 group-hover:bg-[#D4822E] transition-colors duration-300"></div>
<p className="text-white/80 text-xs mt-2 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Sourdough, multigrain &amp; daily loaves</p>
</div>
</a>

<a className="group relative h-96 rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Traditional Sweets" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599785209796-786432b228bc?q=80&amp;w=2066&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white serif tracking-wide mb-1">Mithai &amp; Sweets</h3>
<div className="w-full h-[1px] bg-white/30 group-hover:bg-[#D4822E] transition-colors duration-300"></div>
<p className="text-white/80 text-xs mt-2 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Authentic flavors of tradition</p>
</div>
</a>

<a className="group relative h-96 rounded-xl overflow-hidden cursor-pointer" href="#">
<img alt="Savory Snacks" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white serif tracking-wide mb-1">Savory Delights</h3>
<div className="w-full h-[1px] bg-white/30 group-hover:bg-[#D4822E] transition-colors duration-300"></div>
<p className="text-white/80 text-xs mt-2 font-light translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">Patties, sandwiches &amp; pizzas</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="specialties">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#D4822E] font-medium tracking-wider text-xs uppercase mb-2 block">Our Bestsellers</span>
<h2 className="text-3xl md:text-5xl font-medium text-[#212529] tracking-tight mb-4">Fresh From The Oven</h2>

<div className="flex justify-center gap-2 mt-8 flex-wrap">
<button className="px-5 py-2 rounded-full bg-[#670C0B] text-white text-xs font-medium transition-all">All Items</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-xs font-medium transition-all">Cream Cakes</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-xs font-medium transition-all">Biscuits</button>
<button className="px-5 py-2 rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 text-xs font-medium transition-all">Custom Orders</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-stone-50 aspect-square mb-4">
<span className="absolute top-3 left-3 bg-[#D4822E] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">Best Seller</span>
<img alt="Cake" className="object-cover w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<button className="bg-white text-[#670C0B] p-2 rounded-full shadow-md hover:bg-[#670C0B] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-[#0D1134]">Chocolate Fudge Royale</h3>
<div className="flex items-center justify-between mt-1">
<p className="text-stone-500 text-sm font-light">2.5 lbs</p>
<p className="text-[#670C0B] font-medium">PKR 2,400</p>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-stone-50 aspect-square mb-4">
<img alt="Croissant" className="object-cover w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1623334044303-241021148842?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<button className="bg-white text-[#670C0B] p-2 rounded-full shadow-md hover:bg-[#670C0B] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-[#0D1134]">Butter Croissant</h3>
<div className="flex items-center justify-between mt-1">
<p className="text-stone-500 text-sm font-light">Per piece</p>
<p className="text-[#670C0B] font-medium">PKR 180</p>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-stone-50 aspect-square mb-4">
<img alt="Cookies" className="object-cover w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&amp;w=1965&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<button className="bg-white text-[#670C0B] p-2 rounded-full shadow-md hover:bg-[#670C0B] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-[#0D1134]">Assorted Butter Biscuits</h3>
<div className="flex items-center justify-between mt-1">
<p className="text-stone-500 text-sm font-light">1 kg Box</p>
<p className="text-[#670C0B] font-medium">PKR 1,200</p>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-xl bg-stone-50 aspect-square mb-4">
<span className="absolute top-3 left-3 bg-[#670C0B] text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider z-10">Seasonal</span>
<img alt="Fruit Tart" className="object-cover w-full h-full mix-blend-multiply transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&amp;w=2036&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 right-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
<button className="bg-white text-[#670C0B] p-2 rounded-full shadow-md hover:bg-[#670C0B] hover:text-white transition-colors">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<h3 className="text-lg font-medium text-[#0D1134]">Signature Fruit Tart</h3>
<div className="flex items-center justify-between mt-1">
<p className="text-stone-500 text-sm font-light">Medium</p>
<p className="text-[#670C0B] font-medium">PKR 1,800</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-[#670C0B] border-b border-[#670C0B] pb-0.5 hover:text-[#D4822E] hover:border-[#D4822E] transition-colors text-sm font-medium uppercase tracking-wide" href="#">
                    View Full Catalogue
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1134] text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-[#D4822E] rounded-full filter blur-[120px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group p-6 rounded-2xl border border-white/5 hover:border-[#D4822E]/50 hover:bg-white/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#D4822E]/20 flex items-center justify-center text-[#D4822E] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chef-hat-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 serif">Master Chefs</h3>
<p className="text-stone-300 font-light text-sm leading-relaxed">
                        Our kitchen is led by chefs with decades of experience in continental and traditional baking, ensuring consistency in every bite.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 hover:border-[#D4822E]/50 hover:bg-white/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#D4822E]/20 flex items-center justify-center text-[#D4822E] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 serif">Premium Ingredients</h3>
<p className="text-stone-300 font-light text-sm leading-relaxed">
                        We source only the finest butter, chocolates, and fresh fruits. No compromises on quality, ever.
                    </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 hover:border-[#D4822E]/50 hover:bg-white/5 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#D4822E]/20 flex items-center justify-center text-[#D4822E] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:verified-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 serif">Fresh Daily</h3>
<p className="text-stone-300 font-light text-sm leading-relaxed">
                        Our promise is freshness. We bake in small batches throughout the day to ensure you get oven-fresh products.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 flex flex-col lg:flex-row">

<div className="lg:w-1/3 p-10 lg:p-12 flex flex-col justify-center">
<h2 className="text-3xl font-medium text-[#212529] mb-8 serif">Visit Us</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#670C0B]/10 flex-shrink-0 flex items-center justify-center text-[#670C0B]">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0D1134] uppercase tracking-wide mb-1">Ideal Bakery Hill Park</h4>
<p className="text-stone-500 font-light text-sm">Plot 123, Near Hill Park,<br/>Shaheed-e-Millat Road, Karachi.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#670C0B]/10 flex-shrink-0 flex items-center justify-center text-[#670C0B]">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0D1134] uppercase tracking-wide mb-1">Opening Hours</h4>
<p className="text-stone-500 font-light text-sm">Mon - Sun: 8:00 AM - 12:00 AM<br/>Fresh stock available at 10:00 AM</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#670C0B]/10 flex-shrink-0 flex items-center justify-center text-[#670C0B]">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#0D1134] uppercase tracking-wide mb-1">Contact</h4>
<p className="text-stone-500 font-light text-sm">021-3453XXXX<br/>orders@idealbakers.com.pk</p>
</div>
</div>
</div>
<a className="mt-10 w-full bg-[#25D366] text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20b85a] transition-colors font-medium text-sm" href="https://wa.me/923000000000">
<iconify-icon icon="solar:chat-round-dots-bold" width="20"></iconify-icon>
                        Order on WhatsApp
                    </a>
</div>

<div className="lg:w-2/3 h-80 lg:h-auto bg-stone-200 relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.6480287241364!2d67.0734!3d24.876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDUyJzMzLjYiTiA2N8KwMDQnMjQuMiJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s" style={{border: '0', filter: 'grayscale(0.2) contrast(1.1)'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-[#212529] text-white pt-20 pb-10 border-t border-[#D4822E]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<h3 className="text-2xl font-medium serif text-white">Ideal Bakery</h3>
<p className="text-stone-400 text-sm font-light leading-relaxed">
                        Serving joy since [Year]. We are committed to bringing you the finest baked goods in Karachi, made with love and tradition.
                    </p>
<div className="flex gap-4">
<a className="text-stone-400 hover:text-[#D4822E] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#D4822E] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4822E] mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-stone-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Full Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Cakes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4822E] mb-6">Products</h4>
<ul className="space-y-3 text-sm text-stone-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Fresh Bread</a></li>
<li><a className="hover:text-white transition-colors" href="#">Celebration Cakes</a></li>
<li><a className="hover:text-white transition-colors" href="#">Traditional Sweets</a></li>
<li><a className="hover:text-white transition-colors" href="#">Savory Snacks</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-widest text-[#D4822E] mb-6">Stay Updated</h4>
<p className="text-stone-400 text-xs font-light mb-4">Subscribe for new product announcements and exclusive offers.</p>
<form className="flex flex-col gap-2">
<input className="bg-white/10 border border-white/10 text-white px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:border-[#D4822E] transition-colors" placeholder="Your email address" type="email"/>
<button className="bg-[#D4822E] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#b86e24] transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-stone-500 text-xs font-light">© 2024 Ideal Bakery. All rights reserved.</p>
<div className="flex gap-6 text-xs text-stone-500 font-light">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-green-900/30 hover:scale-110 transition-transform flex items-center justify-center group" href="https://wa.me/923000000000">
<span className="absolute right-14 bg-white text-[#212529] px-3 py-1 rounded-md text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Order Now</span>
<iconify-icon height="28" icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
</a>

    </>
  );
}
