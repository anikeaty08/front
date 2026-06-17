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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-2 group" href="#">
<span className="text-red-600 transition-transform group-hover:scale-110 duration-300">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="32"></iconify-icon>
</span>
<div className="flex flex-col">
<span className="font-heading text-2xl font-bold tracking-tighter text-white leading-none">PEPO'S</span>
<span className="font-heading text-[10px] text-yellow-500 tracking-widest leading-none">AMERICAN DINER</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide" href="#menu">Menu</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide" href="#about">About</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide" href="#contact">Location</a>
<a className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded font-heading font-bold tracking-wider transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]" href="tel:07732842">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        CALL 07 732 842
                    </a>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/60 to-black/30 z-10"></div>
<img alt="Messy Cheesy Burger" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586190848861-99c8a3bd7953?q=80&amp;w=2558&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-4 text-center mt-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm mb-6 animate-pulse">
<span className="text-yellow-400 text-xs font-bold uppercase tracking-widest font-heading flex items-center gap-1">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> 4.2 Rated on Google
                </span>
</div>
<h1 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold text-white mb-6 leading-[0.9] tracking-tight drop-shadow-xl">
                MESSY. CHEESY.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">UNFORGETTABLE.</span>
</h1>
<p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
                Serving Aabra the wildest burgers, loaded fries, and comfort food since day one. Experience the flavor of <span className="text-red-500 font-bold">Pepo's</span>.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded font-heading font-bold text-lg tracking-wider transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg" href="tel:07732842">
                    ORDER NOW
                    <iconify-icon icon="solar:cart-large-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 rounded border border-white/20 hover:bg-white/10 text-white font-heading font-bold text-lg tracking-wider transition-all backdrop-blur-sm flex items-center justify-center gap-2" href="#menu">
                    VIEW MENU
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-gray-400 text-sm bg-black/50 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Open Daily · Closes 12:00 AM
        </div>
</header>

<section className="py-16 bg-[#0a0a0a] border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Pepo's Atmosphere" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white font-heading font-bold text-2xl">GOOD VIBES ONLY</p>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-red-500 font-heading font-bold tracking-widest text-sm uppercase mb-2 block">Our Story</span>
<h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">MORE THAN JUST <br/>A <span className="text-yellow-500">BURGER JOINT</span></h2>
<p className="text-gray-400 mb-6 leading-relaxed">
                    At Pepo's, we believe in two things: generous portions and bold flavors. Located in the heart of Aabra, we've become the go-to spot for those craving authentic American comfort food.
                </p>
<div className="flex gap-8">
<div className="text-center">
<span className="block text-3xl font-heading font-bold text-white">940+</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Reviews</span>
</div>
<div className="text-center">
<span className="block text-3xl font-heading font-bold text-white">4.2</span>
<span className="text-xs text-gray-500 uppercase tracking-wider">Rating</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#050505] relative" id="menu">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<span className="text-red-600 font-heading font-bold tracking-widest text-sm uppercase">Fresh &amp; Tasty</span>
<h2 className="text-5xl md:text-6xl font-heading font-bold text-white mt-2">OUR MENU</h2>
<p className="text-gray-500 mt-4">All prices in LBP</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-red-600 hover:text-white text-gray-400 text-sm font-heading font-bold tracking-wider transition-colors" href="#burgers">BURGERS</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-red-600 hover:text-white text-gray-400 text-sm font-heading font-bold tracking-wider transition-colors" href="#sandwiches">SANDWICHES</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-red-600 hover:text-white text-gray-400 text-sm font-heading font-bold tracking-wider transition-colors" href="#plates">PLATES</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-red-600 hover:text-white text-gray-400 text-sm font-heading font-bold tracking-wider transition-colors" href="#appetizers">APPETIZERS</a>
<a className="px-5 py-2 rounded-full border border-white/10 hover:border-red-600 hover:text-white text-gray-400 text-sm font-heading font-bold tracking-wider transition-colors" href="#pasta">PASTA</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

<div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors" id="burgers">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon></span>
<h3 className="text-3xl font-heading font-bold text-white">BURGERS</h3>
</div>
<div className="space-y-4">

<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Caesar Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">135,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Simple Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">140,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Pepo’s Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">145,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Pepo’s Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">155,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Simple Honey Mustard</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">150,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Fajita Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">165,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Honey Mustard Chicken</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">155,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Honey Mustard Beef</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">165,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Caramelized Burger Chicken</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">165,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Caramelized Burger Beef</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">175,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Simple Mushroom Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">145,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Salads Caesar</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">100,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mac n Cheese Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">175,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mac n Cheese Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">185,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Salads Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">100,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mushroom Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">160,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mushroom Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">170,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mozzarella Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">180,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mozzarella Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">190,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mixed Cheese Chicken Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">190,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mixed Cheese Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">200,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Crunchy Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">190,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Double Beef Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">200,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Vegetarian Burger</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">135,000</span>
</div>
</div>
</div>

<div className="space-y-8">

<div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors" id="sandwiches">
<div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:sandwich-linear" width="32"></iconify-icon></span>
<h3 className="text-3xl font-heading font-bold text-white">SANDWICHES</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Caesar</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">125,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Curry</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">130,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Tacos</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">130,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Mexican</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">140,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Sub</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">130,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Francisco</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">130,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Crispy Sandwich</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">150,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Mushroom</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">150,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Mushroom Mixed</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">165,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Pepperoni Sub</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">160,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Fajita</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">175,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mushroom Fajita</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">180,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Double Sub / Tacos / Francisco / Curry</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">220,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Double Sub</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">200,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Fries Sandwich</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">100,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors" id="plates">
<div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon></span>
<h3 className="text-xl font-heading font-bold text-white">PLATES</h3>
</div>
<div className="space-y-4">
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">2 Chicken Breasts</span>
<span className="text-white font-heading font-bold text-sm">230,000</span>
</div>
</div>
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Honey Mustard</span>
<span className="text-white font-heading font-bold text-sm">250,000</span>
</div>
</div>
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Crispy Chicken</span>
<span className="text-white font-heading font-bold text-sm">245,000</span>
</div>
</div>
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Mushroom</span>
<span className="text-white font-heading font-bold text-sm">255,000</span>
</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors" id="pasta">
<div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:bowl-linear" width="24"></iconify-icon></span>
<h3 className="text-xl font-heading font-bold text-white">PASTA</h3>
</div>
<div className="space-y-4">
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Mushroom Pasta</span>
<span className="text-white font-heading font-bold text-sm">220,000</span>
</div>
</div>
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Mac n Cheese</span>
<span className="text-white font-heading font-bold text-sm">250,000</span>
</div>
</div>
<div className="flex flex-col group">
<div className="flex justify-between items-baseline">
<span className="text-gray-200 font-medium text-sm">Chicken Curry Pasta</span>
<span className="text-white font-heading font-bold text-sm">260,000</span>
</div>
</div>
</div>
</div>
</div>

<div className="bg-[#111] border border-white/5 rounded-2xl p-6 sm:p-8 hover:border-white/10 transition-colors" id="appetizers">
<div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:fire-linear" width="24"></iconify-icon></span>
<h3 className="text-xl font-heading font-bold text-white">APPETIZERS</h3>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Fries</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">50,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Large Fries</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">75,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Cheesy Fries</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">120,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Chicken Caesar Salad</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">180,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mushroom Fries</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">160,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Pepperoni Fries</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">160,000</span>
</div>
<div className="flex justify-between items-baseline group">
<span className="text-gray-200 font-medium group-hover:text-red-500 transition-colors">Mozz. Sticks</span>
<div className="flex-grow mx-4 menu-item-dot"></div>
<span className="text-white font-heading font-bold tracking-wide">160,000</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon></span>
<h3 className="text-xl font-heading font-bold text-white">ADD-ONS</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Cheddar</span><span className="text-white font-bold text-sm">15,000</span></div>
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Jalapeño</span><span className="text-white font-bold text-sm">10,000</span></div>
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Beef Patty</span><span className="text-white font-bold text-sm">55,000</span></div>
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Chicken Breast</span><span className="text-white font-bold text-sm">55,000</span></div>
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Mozzarella Patty</span><span className="text-white font-bold text-sm">55,000</span></div>
</div>
</div>
<div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-colors">
<div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
<span className="text-red-600"><iconify-icon icon="solar:cup-linear" width="24"></iconify-icon></span>
<h3 className="text-xl font-heading font-bold text-white">DRINKS</h3>
</div>
<div className="space-y-3">
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Soft Drinks</span><span className="text-white font-bold text-sm">30,000</span></div>
<div className="flex justify-between items-baseline"><span className="text-gray-400 text-sm">Water</span><span className="text-white font-bold text-sm">10,000</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#0a0a0a] border-t border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-4 text-center">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">LOVED BY <span className="text-red-600">AABRA</span></h2>
<div className="flex justify-center items-center gap-2 mb-12">
<div className="flex text-yellow-500">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<span className="text-white font-bold text-xl font-heading">4.2</span>
<span className="text-gray-500 text-sm">(948 Google Reviews)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#151515] p-8 rounded-xl border border-white/5 relative">
<div className="absolute -top-4 left-8 text-red-600 bg-[#151515]">
<iconify-icon icon="solar:quote-up-bold" width="40"></iconify-icon>
</div>
<p className="text-gray-300 italic mb-6">"The Pepo's Beef Burger is hands down the best burger I've had in the area. The cheese pull on the fries is insane! Definitely coming back."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">R</div>
<div className="text-left">
<p className="text-white font-bold text-sm">Rami K.</p>
<p className="text-xs text-yellow-500">★★★★★</p>
</div>
</div>
</div>

<div className="bg-[#151515] p-8 rounded-xl border border-white/5 relative">
<div className="absolute -top-4 left-8 text-red-600 bg-[#151515]">
<iconify-icon icon="solar:quote-up-bold" width="40"></iconify-icon>
</div>
<p className="text-gray-300 italic mb-6">"Great service and friendly staff. The atmosphere is perfect for a casual dinner. Highly recommend the Mac n Cheese Burger."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">S</div>
<div className="text-left">
<p className="text-white font-bold text-sm">Sarah M.</p>
<p className="text-xs text-yellow-500">★★★★★</p>
</div>
</div>
</div>

<div className="bg-[#151515] p-8 rounded-xl border border-white/5 relative">
<div className="absolute -top-4 left-8 text-red-600 bg-[#151515]">
<iconify-icon icon="solar:quote-up-bold" width="40"></iconify-icon>
</div>
<p className="text-gray-300 italic mb-6">"My go-to spot for late night cravings. They are open until midnight which is a life saver. The portions are huge!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">J</div>
<div className="text-left">
<p className="text-white font-bold text-sm">Jad H.</p>
<p className="text-xs text-yellow-500">★★★★☆</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-0 bg-[#121212] grid lg:grid-cols-2" id="contact">

<div className="p-10 lg:p-20 flex flex-col justify-center order-2 lg:order-1 border-t lg:border-t-0 lg:border-r border-white/10">
<h2 className="text-4xl font-heading font-bold text-white mb-8">VISIT <span className="text-red-600">PEPO'S</span></h2>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded bg-red-600/10 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white font-heading">LOCATION</h3>
<p className="text-gray-400">HC72+R42, Aabra,<br/>Lebanon</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded bg-red-600/10 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white font-heading">ORDER &amp; DELIVERY</h3>
<a className="text-gray-400 hover:text-white transition-colors text-xl font-bold" href="tel:07732842">07 732 842</a>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded bg-red-600/10 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white font-heading">OPENING HOURS</h3>
<ul className="text-gray-400 text-sm space-y-1 mt-1">
<li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Open Daily</li>
<li>Closes at 12:00 AM</li>
</ul>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded bg-red-600/10 flex items-center justify-center text-red-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:earth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-white font-heading">SOCIAL</h3>
<a className="text-gray-400 hover:text-blue-500 transition-colors" href="https://m.facebook.com" target="_blank">m.facebook.com</a>
</div>
</div>
</div>
</div>

<div className="h-[400px] lg:h-auto w-full relative order-1 lg:order-2 bg-[#202020]">

<iframe allowfullscreen="" className="map-filter absolute inset-0" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.46789456789!2d35.385!3d33.565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMzJzU0LjAiTiAzNcKwMjMnMDYuMCJF!5e0!3m2!1sen!2slb!4v1620000000000!5m2!1sen!2slb" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-6 right-6 flex gap-2">
<a className="bg-white text-black px-4 py-2 rounded font-bold text-sm shadow-xl hover:bg-gray-200 transition-colors flex items-center gap-2" href="https://www.google.com/maps/dir//HC72%2BR42,+Aabra,+Lebanon" target="_blank">
<iconify-icon icon="solar:map-arrow-right-bold" width="16"></iconify-icon> GET DIRECTIONS
                 </a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-12">
<div className="mb-8 md:mb-0 text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<span className="text-red-600"><iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon></span>
<span className="font-heading text-xl font-bold text-white tracking-tighter">PEPO'S</span>
</div>
<p className="text-gray-500 text-sm max-w-xs mx-auto md:mx-0">Messy. Cheesy. Unforgettable. American style diner in Aabra since 2012.</p>
</div>
<div className="flex gap-4">
<a className="px-6 py-2 rounded border border-white/20 text-white hover:bg-white hover:text-black transition-all flex items-center gap-2" href="tel:07732842">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon> CALL US
                    </a>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-xs">© 2024 Pepo's Burger Joint. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-600 hover:text-white text-xs transition-colors" href="#">Privacy Policy</a>
<a className="text-gray-600 hover:text-white text-xs transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
