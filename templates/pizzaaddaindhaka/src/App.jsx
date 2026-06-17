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
      

<section className="relative bg-red-700 text-white overflow-hidden pt-6 pb-20 md:pb-32 z-0" id="home">

<div className="absolute top-1/4 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>
<div className="absolute bottom-1/4 right-10 w-48 h-48 bg-orange-500 rounded-full blur-[100px] opacity-30 pointer-events-none"></div>

<nav className="container mx-auto px-6 relative z-30 flex justify-between items-center">

<a className="text-3xl font-medium tracking-tighter uppercase font-['Oswald'] text-white" href="#home">PIZZAO</a>

<div className="hidden lg:flex items-center gap-8 font-['Oswald'] uppercase font-medium tracking-tight text-sm">
<a className="text-white hover:text-yellow-400 transition-colors" href="#home">Home</a>
<a className="text-white hover:text-yellow-400 transition-colors" href="#about">About</a>
<a className="text-white hover:text-yellow-400 transition-colors" href="#menu">Menu</a>
<a className="text-white hover:text-yellow-400 transition-colors" href="#chefs">Chefs</a>
<a className="text-white hover:text-yellow-400 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-medium text-sm font-['Oswald'] tracking-tight">1 800 222 000</span>
</div>
<a className="hidden sm:flex items-center gap-2 bg-white text-red-700 hover:bg-zinc-100 transition-colors px-6 py-2 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm" href="#menu">
                    Order Online
                    <iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

<button className="lg:hidden text-white flex items-center justify-center p-2">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<div className="container mx-auto px-6 relative z-20 mt-16 md:mt-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
<span className="font-['Caveat'] text-yellow-400 text-4xl md:text-5xl -mb-4 relative z-10 transform -rotate-2 inline-block">Authentic &amp; Fresh</span>
<h1 className="font-['Oswald'] text-7xl sm:text-8xl md:text-9xl font-semibold uppercase tracking-tighter leading-[0.9] text-white drop-shadow-2xl mb-6">
                    Italian<br/>Taste
                </h1>
<p className="text-red-100 text-base md:text-lg mb-8 max-w-md leading-relaxed">
                    Experience the true taste of Italy with our handcrafted pizzas, made with fresh ingredients and traditional recipes right out of the wood-fired oven.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-yellow-400 text-zinc-900 px-8 py-4 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2" href="#menu">
                        Explore Menu
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-black/20 text-white px-8 py-4 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm hover:bg-black/30 transition-colors flex items-center justify-center gap-2" href="#contact">
                        Book a Table
                    </a>
</div>
</div>
<div className="relative order-1 lg:order-2 flex justify-center items-center w-full max-w-lg mx-auto lg:max-w-none">
<div className="absolute inset-0 bg-yellow-500 rounded-full blur-[80px] opacity-20 transform scale-75"></div>
<img alt="Delicious Pizza" className="w-[85%] sm:w-[70%] lg:w-[90%] aspect-square object-cover rounded-full shadow-2xl relative z-10 transform rotate-12 hover:rotate-0 transition-transform duration-700 ease-out border-8 border-white/10" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 right-4 sm:right-10 lg:bottom-10 lg:-left-10 w-24 h-24 md:w-32 md:h-32 bg-white rounded-full flex flex-col items-center justify-center text-red-700 shadow-2xl transform -rotate-12 z-20">
<span className="font-['Oswald'] text-2xl md:text-4xl font-semibold tracking-tighter uppercase leading-none">30%</span>
<span className="font-['Oswald'] text-xs md:text-sm font-medium tracking-tight uppercase leading-none mt-1">Discount</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white relative z-20">
<div className="container mx-auto px-6 text-center">
<h2 className="font-['Oswald'] text-3xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900 mb-12 md:mb-16">The True Taste Of Italy</h2>
<div className="flex flex-wrap justify-center gap-6 md:gap-16">

<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:pie-chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Pizza</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Burgers</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Salad</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Fries</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:cup-paper-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Drinks</span>
</div>
<div className="flex flex-col items-center gap-3 cursor-pointer group">
<div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-red-700/20 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all shadow-sm">
<iconify-icon className="text-3xl md:text-4xl" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="font-['Oswald'] uppercase font-medium tracking-tight text-sm text-zinc-900">Chicken</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white relative overflow-hidden pt-0" id="about">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="relative flex items-center justify-center order-2 lg:order-1">
<h2 className="hidden lg:block absolute left-[-80px] top-1/2 -translate-y-1/2 font-['Oswald'] text-9xl font-semibold uppercase tracking-tighter text-yellow-400/80 leading-none" style={{writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'translateY(-50%) rotate(180deg)'}}>Delicious</h2>
<div className="relative w-full max-w-md lg:max-w-lg aspect-square flex justify-center items-center">
<img alt="Pizza Plate" className="w-full h-full object-cover rounded-full shadow-2xl relative z-10" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-4 right-4 md:bottom-10 md:right-10 w-28 h-28 md:w-36 md:h-36 bg-red-700 text-white rounded-[40%] flex flex-col items-center justify-center shadow-xl z-20 transform rotate-[-10deg]">
<span className="font-['Caveat'] text-xl md:text-2xl -mb-1 md:-mb-2">Authentic</span>
<span className="font-['Oswald'] text-2xl md:text-4xl font-medium uppercase tracking-tight">Italian</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 text-center lg:text-left">
<div className="flex items-center justify-center lg:justify-start gap-4 mb-4 md:mb-6">
<div className="h-[1px] w-8 md:w-12 bg-red-700"></div>
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg">Best Italian Food For Your Family</span>
<div className="h-[1px] w-8 md:w-12 bg-red-700"></div>
</div>
<h2 className="font-['Oswald'] text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-tighter text-zinc-900 leading-[1.1] mb-6 md:mb-8">
                        The Amazing Pasta<br/>And Pizza Parlor.
                    </h2>
<p className="text-sm md:text-base leading-relaxed text-zinc-500 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
                        All about quality you can trust. As one of the original founding pizza brands and the 3rd largest pizza chain, our sole mission is making the freshest, tastiest food for our communities.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 md:gap-8 mb-12 md:mb-16">
<a className="bg-zinc-900 text-white px-8 py-3 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm hover:bg-zinc-800 transition-colors w-full sm:w-auto" href="#menu">
                            About Restaurant
                        </a>
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-red-700" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900">1 800 222 000</span>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-left">
<div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm shrink-0">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-base md:text-lg font-medium uppercase tracking-tight text-zinc-900">Fast Delivery</h4>
<p className="text-sm text-zinc-500 mt-1">Within 30 minutes</p>
</div>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm shrink-0">
<iconify-icon className="text-xl" icon="solar:shop-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-base md:text-lg font-medium uppercase tracking-tight text-zinc-900">Pickup Delivery</h4>
<p className="text-sm text-zinc-500 mt-1">Grab your food order</p>
</div>
</div>
<div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
<div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm shrink-0">
<iconify-icon className="text-xl" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-base md:text-lg font-medium uppercase tracking-tight text-zinc-900">Absolute Dining</h4>
<p className="text-sm text-zinc-500 mt-1">Best buffet restaurant</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-zinc-50 relative overflow-hidden border-y border-zinc-100" id="menu">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] overflow-hidden">
<h2 className="font-['Oswald'] text-9xl lg:text-[200px] font-medium uppercase tracking-tighter text-zinc-900 whitespace-nowrap">SIGNATURE</h2>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg mb-2 relative">
                    Our Signature
                    <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-red-700"></div>
</span>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900">Popular Pizza</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8">

<div className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
<img alt="Pizza" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mb-6 shadow-md group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-yellow-400 gap-0.5 text-sm">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-zinc-900 text-white text-xs font-medium px-1.5 py-0.5 rounded ml-2">5.0</span>
</div>
<h3 className="font-['Oswald'] text-xl md:text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-2">Mexican Green Wave</h3>
<div className="flex items-center gap-3">
<span className="text-red-700 font-medium line-through text-sm md:text-base">$25.00</span>
<span className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900">$19.00</span>
</div>
</div>

<div className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
<img alt="Pizza" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mb-6 shadow-md group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-yellow-400 gap-0.5 text-sm">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-zinc-900 text-white text-xs font-medium px-1.5 py-0.5 rounded ml-2">4.8</span>
</div>
<h3 className="font-['Oswald'] text-xl md:text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-2">Indi Tandoori Paneer</h3>
<div className="flex items-center gap-3">
<span className="text-red-700 font-medium line-through text-sm md:text-base">$24.00</span>
<span className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900">$18.00</span>
</div>
</div>

<div className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
<img alt="Pizza" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mb-6 shadow-md group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-yellow-400 gap-0.5 text-sm">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-zinc-900 text-white text-xs font-medium px-1.5 py-0.5 rounded ml-2">5.0</span>
</div>
<h3 className="font-['Oswald'] text-xl md:text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-2">Double Chicken Sausage</h3>
<div className="flex items-center gap-3">
<span className="text-red-700 font-medium line-through text-sm md:text-base">$22.00</span>
<span className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900">$20.00</span>
</div>
</div>

<div className="flex flex-col items-center text-center group bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
<img alt="Pizza" className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full mb-6 shadow-md group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="flex items-center gap-1 mb-3">
<div className="flex text-yellow-400 gap-0.5 text-sm">
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-zinc-900 text-white text-xs font-medium px-1.5 py-0.5 rounded ml-2">4.3</span>
</div>
<h3 className="font-['Oswald'] text-xl md:text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-2">Grilled Veal Cooked</h3>
<div className="flex items-center gap-3">
<span className="text-red-700 font-medium line-through text-sm md:text-base">$20.00</span>
<span className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900">$16.00</span>
</div>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="inline-flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm hover:bg-zinc-800 transition-colors shadow-lg" href="#menu">
                    Explore Full Menu
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white">
<div className="container mx-auto px-6">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg mb-2 relative">
                    Delicious Meals
                    <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-red-700"></div>
</span>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900">Exclusive Menu</h2>
</div>
<div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-8 md:gap-y-10">

<div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="flex gap-4 md:gap-6 w-full sm:w-auto">
<div className="relative shrink-0">
<img alt="Pizza" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<span className="absolute -top-1 -left-1 bg-green-500 text-white text-xs font-medium px-1.5 py-0.5 rounded uppercase tracking-wider">New</span>
</div>
<div className="pt-1 md:pt-2">
<div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
<h4 className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight uppercase text-zinc-900">Spring Fling Pizza</h4>
<span className="bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-medium px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
<iconify-icon className="text-red-500" icon="solar:fire-bold" style={{strokeWidth: '1.5'}}></iconify-icon> Must Try
                                </span>
</div>
<p className="text-sm md:text-base text-zinc-500">Tomato sauce, mozzarella, bell peppers, onions.</p>
</div>
</div>
<div className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900 pt-1 sm:pt-2 w-full sm:w-auto text-right sm:text-left">$10.00</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="flex gap-4 md:gap-6 w-full sm:w-auto">
<img alt="Pizza" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm shrink-0" src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="pt-1 md:pt-2">
<h4 className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight uppercase text-zinc-900 mb-1">Korma Special Pizza</h4>
<p className="text-sm md:text-base text-zinc-500">Chicken korma base, cheese, fresh cilantro.</p>
</div>
</div>
<div className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900 pt-1 sm:pt-2 w-full sm:w-auto text-right sm:text-left">$12.00</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="flex gap-4 md:gap-6 w-full sm:w-auto">
<img alt="Pizza" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm shrink-0" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="pt-1 md:pt-2">
<h4 className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight uppercase text-zinc-900 mb-1">Farm Villa Pizza</h4>
<p className="text-sm md:text-base text-zinc-500">Mushrooms, olives, fresh tomatoes, cheese.</p>
</div>
</div>
<div className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900 pt-1 sm:pt-2 w-full sm:w-auto text-right sm:text-left">$18.00</div>
</div>

<div className="flex flex-col sm:flex-row justify-between items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors">
<div className="flex gap-4 md:gap-6 w-full sm:w-auto">
<div className="relative shrink-0">
<img alt="Pizza" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<span className="absolute -top-1 -left-1 bg-red-600 text-white text-xs font-medium px-1.5 py-0.5 rounded uppercase tracking-wider">Hot</span>
</div>
<div className="pt-1 md:pt-2">
<div className="flex flex-wrap items-center gap-2 md:gap-3 mb-1">
<h4 className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight uppercase text-zinc-900">Hot Passion Pizza</h4>
<span className="bg-zinc-100 text-zinc-600 border border-zinc-200 text-xs font-medium px-2 py-0.5 rounded flex items-center gap-1 uppercase tracking-wider">
<iconify-icon className="text-red-500" icon="solar:heart-bold" style={{strokeWidth: '1.5'}}></iconify-icon> Chef Love
                                </span>
</div>
<p className="text-sm md:text-base text-zinc-500">Spicy pepperoni, jalapeños, chili flakes.</p>
</div>
</div>
<div className="font-['Oswald'] text-xl md:text-2xl font-medium tracking-tight text-zinc-900 pt-1 sm:pt-2 w-full sm:w-auto text-right sm:text-left">$16.00</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-zinc-50 border-t border-zinc-100 relative overflow-hidden" id="chefs">
<div className="container mx-auto px-6 text-center">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg mb-2 relative">
                    Meet Our Experts
                    <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-red-700"></div>
</span>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900">Our Top Chefs</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

<div className="group flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-zinc-200">
<img alt="Chef Marco" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-zinc-100">
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Oswald'] text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-1">Marco Rossi</h3>
<p className="text-red-700 text-sm font-medium uppercase tracking-widest font-['Oswald']">Master Chef</p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-zinc-200">
<img alt="Chef Sofia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-zinc-100">
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Oswald'] text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-1">Sofia Conti</h3>
<p className="text-red-700 text-sm font-medium uppercase tracking-widest font-['Oswald']">Pastry Chef</p>
</div>

<div className="group flex flex-col items-center text-center">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-sm border border-zinc-200">
<img alt="Chef Antonio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm border border-zinc-100">
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon></a>
<a className="text-zinc-600 hover:text-red-700 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<h3 className="font-['Oswald'] text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-1">Antonio De Luca</h3>
<p className="text-red-700 text-sm font-medium uppercase tracking-widest font-['Oswald']">Pizza Specialist</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] overflow-hidden mt-10 md:mt-20">
<h2 className="font-['Oswald'] text-9xl lg:text-[200px] font-medium uppercase tracking-tighter text-zinc-900 whitespace-nowrap">SATISFIED</h2>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center text-center lg:text-left">

<div className="order-1">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg mb-2 block">Food Lovers</span>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900 leading-none mb-6 md:mb-8">Satisfied<br className="hidden lg:block"/>Customers</h2>
<div className="flex justify-center lg:justify-start gap-4">
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="relative flex justify-center order-2 py-8 lg:py-0">
<div className="bg-white p-2 md:p-3 shadow-lg transform rotate-[-6deg] absolute left-4 md:left-10 opacity-60">
<img alt="Customer" className="w-32 h-40 md:w-48 md:h-56 object-cover grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="bg-white p-2 md:p-3 shadow-xl relative z-10 transform rotate-3">
<img alt="Customer" className="w-40 h-48 md:w-56 md:h-64 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
<span className="font-['Caveat'] text-2xl md:text-4xl text-white drop-shadow-md">Amazing</span>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 order-3">
<div className="lg:writing-vertical-rl lg:transform lg:rotate-180">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg whitespace-nowrap">Matthew Taylor</span>
</div>
<div>
<p className="text-base md:text-lg text-zinc-600 leading-relaxed mb-4 md:mb-6">
                            "Talking about this branch the staff, quality of food, <span className="border-b border-red-700 pb-0.5 text-zinc-800">most importantly</span> the speed of service is just great! Highly recommended restaurant. <span className="border-b border-red-700 pb-0.5 text-zinc-800">Must try take away.</span>"
                        </p>
<div className="bg-red-700 inline-flex text-white p-1.5 md:p-2 rounded gap-0.5">
<iconify-icon className="text-sm md:text-base" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-sm md:text-base" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-sm md:text-base" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-sm md:text-base" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon className="text-sm md:text-base" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-16 relative z-20">
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-zinc-900 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-between p-8 md:p-10 relative group">
<div className="relative z-20 w-full sm:w-1/2 text-center sm:text-left mb-8 sm:mb-0">
<span className="text-zinc-400 font-['Oswald'] uppercase font-medium tracking-tight text-xs md:text-sm mb-2 block">Most Popular</span>
<h3 className="font-['Oswald'] text-3xl md:text-4xl font-medium uppercase tracking-tight text-white leading-[1.1] mb-4 md:mb-6">Special<br/>Delicious</h3>
<button className="bg-white text-zinc-900 px-5 py-2 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-xs md:text-sm hover:bg-zinc-200 transition-colors">Order Now</button>
</div>
<h2 className="absolute left-4 top-1/2 -translate-y-1/2 font-['Oswald'] text-7xl md:text-8xl font-medium uppercase text-white/5 pointer-events-none tracking-tighter">DELI</h2>
<div className="relative sm:absolute sm:right-[-40px] sm:top-1/2 sm:-translate-y-1/2 w-48 h-48 md:w-64 md:h-64 z-10">
<img alt="Pizza" className="w-full h-full object-cover rounded-full shadow-2xl group-hover:rotate-12 transition-transform duration-700" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute -top-2 -left-4 sm:top-4 sm:-left-8 w-16 h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full flex flex-col items-center justify-center text-zinc-900 shadow-lg transform -rotate-12 z-20">
<span className="font-['Oswald'] text-sm md:text-lg font-medium tracking-tight uppercase leading-none">Free</span>
<span className="font-['Oswald'] text-xs font-medium tracking-tight uppercase leading-none mt-0.5">Drinks</span>
</div>
</div>
</div>

<div className="bg-[#f0ece5] rounded-2xl overflow-hidden flex flex-col sm:flex-row items-center justify-between p-8 md:p-10 relative">
<div className="relative sm:absolute sm:left-4 sm:bottom-0 w-full sm:w-1/2 h-48 sm:h-auto z-10 flex items-end justify-center sm:justify-start mb-8 sm:mb-0 order-2 sm:order-1">
<div className="w-40 h-40 bg-zinc-200/50 rounded-full flex items-center justify-center relative">
<iconify-icon className="w-20 h-20 text-zinc-700 opacity-50" icon="solar:shop-linear" style={{fontSize: '80px'}}></iconify-icon>
</div>
</div>
<div className="relative z-20 w-full sm:w-1/2 sm:ml-auto text-center sm:text-right flex flex-col items-center sm:items-end order-1 sm:order-2">
<span className="bg-red-700 text-white font-['Oswald'] uppercase font-medium tracking-tight text-xs px-2 py-1 rounded mb-3 md:mb-4 inline-block">Order over $50</span>
<h3 className="font-['Oswald'] text-3xl md:text-4xl font-medium uppercase tracking-tight text-zinc-900 leading-[1.1] mb-4 md:mb-6">Fastest<br/>Delivery</h3>
<button className="bg-white text-zinc-900 border border-zinc-200 px-5 py-2 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-xs md:text-sm hover:bg-zinc-100 transition-colors shadow-sm">Order Now</button>
</div>
<h2 className="absolute right-4 top-1/2 -translate-y-1/2 font-['Oswald'] text-7xl md:text-8xl font-medium uppercase text-zinc-900/5 pointer-events-none tracking-tighter">FREE</h2>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-t border-zinc-100 relative overflow-hidden" id="contact">
<div className="container mx-auto px-6">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<span className="font-['Oswald'] text-red-700 uppercase font-medium tracking-tight text-sm md:text-lg mb-2 relative">
                    Get In Touch
                    <div className="absolute bottom-[-4px] left-0 right-0 h-[1px] bg-red-700"></div>
</span>
<h2 className="font-['Oswald'] text-4xl md:text-5xl font-medium uppercase tracking-tight text-zinc-900">Contact Us</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

<div>
<h3 className="font-['Oswald'] text-2xl md:text-3xl font-medium uppercase tracking-tight text-zinc-900 mb-6">We're here to help you</h3>
<p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-10">Have questions about our menu, reserving a table, or booking a private event? Reach out to us, and our friendly team will be in touch shortly.</p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-red-700 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-lg font-medium uppercase tracking-tight text-zinc-900 mb-1">Our Location</h4>
<p className="text-zinc-500 text-sm">401 Broadway, 24th Floor<br/>New York, NY 10013</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-red-700 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-lg font-medium uppercase tracking-tight text-zinc-900 mb-1">Phone Number</h4>
<p className="text-zinc-500 text-sm">1 800 222 000<br/>+1 234 567 8910</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-14 h-14 rounded-full bg-white border border-zinc-200 flex items-center justify-center shrink-0 text-red-700 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="font-['Oswald'] text-lg font-medium uppercase tracking-tight text-zinc-900 mb-1">Email Address</h4>
<p className="text-zinc-500 text-sm">hello@pizzao.com<br/>support@pizzao.com</p>
</div>
</div>
</div>
</div>

<form className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-sm">
<h3 className="font-['Oswald'] text-2xl font-medium uppercase tracking-tight text-zinc-900 mb-6">Send a Message</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
<div>
<label className="block text-xs font-medium text-zinc-600 mb-2 uppercase tracking-wide font-['Oswald']">First Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-600 mb-2 uppercase tracking-wide font-['Oswald']">Last Name</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="mb-5">
<label className="block text-xs font-medium text-zinc-600 mb-2 uppercase tracking-wide font-['Oswald']">Email Address</label>
<input className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors" placeholder="john@example.com" type="email"/>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-zinc-600 mb-2 uppercase tracking-wide font-['Oswald']">Your Message</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-red-700 focus:ring-1 focus:ring-red-700 transition-colors resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white px-8 py-4 rounded-full font-['Oswald'] uppercase font-medium tracking-tight text-sm hover:bg-zinc-800 transition-colors flex justify-center items-center gap-2" type="submit">
                        Send Message
                        <iconify-icon className="text-lg" icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<div className="relative mt-10 md:mt-20 border-t border-zinc-100">
<footer className="bg-white text-zinc-500 relative z-10 pt-16 pb-8">
<div className="container mx-auto px-6 text-center mb-12 md:mb-16">
<h3 className="font-['Oswald'] text-2xl md:text-3xl lg:text-4xl font-medium uppercase tracking-tight text-zinc-900 leading-snug">
                    Unforgettable Home Delivery Experience <br className="hidden md:block"/>
<span className="text-red-700 border-b-2 border-red-700 pb-1 mt-2 md:mt-0 inline-block">+1 234 567 8910</span>
</h3>
</div>
<div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 border-t border-zinc-100 pt-12 md:pt-16 mb-12">

<div className="text-center sm:text-left">
<a className="inline-block text-3xl font-medium tracking-tighter uppercase font-['Oswald'] text-zinc-900 mb-4" href="#home">PIZZAO</a>
<p className="text-sm">The best pizza in town, made with love and fresh ingredients.</p>
</div>

<div className="text-center sm:text-left">
<h4 className="font-['Oswald'] text-lg font-medium tracking-tight uppercase text-zinc-900 mb-4 md:mb-6">Find our restaurants</h4>
<p className="text-sm mb-1">401 Broadway, 24th Floor</p>
<p className="text-sm">New York, NY 10013</p>
</div>

<div className="text-center sm:text-left">
<h4 className="font-['Oswald'] text-lg font-medium tracking-tight uppercase text-zinc-900 mb-4 md:mb-6">Opening hours</h4>
<p className="text-sm mb-1">Monday – Sunday</p>
<p className="text-sm">9:00 AM to 11:30 PM</p>
</div>

<div className="text-center sm:text-left flex flex-col items-center sm:items-start">
<h4 className="font-['Oswald'] text-lg font-medium tracking-tight uppercase text-zinc-900 mb-4 md:mb-6">Connect with us</h4>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-red-700 hover:text-white hover:border-red-700 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 text-xs md:text-sm">
<div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4 md:mb-0 font-medium">
<a className="hover:text-red-700 transition-colors" href="#home">Home</a>
<a className="hover:text-red-700 transition-colors" href="#about">About</a>
<a className="hover:text-red-700 transition-colors" href="#menu">Menu</a>
<a className="hover:text-red-700 transition-colors" href="#chefs">Chefs</a>
<a className="hover:text-red-700 transition-colors" href="#contact">Contact</a>
</div>
<p>© 2025 Pizzao. All rights reserved.</p>
</div>
</footer>
</div>

    </>
  );
}
