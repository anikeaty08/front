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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white p-4 z-50 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800" id="cookie-banner">
<div className="text-sm">
<p className="font-medium mb-1">We value your privacy</p>
<p className="text-stone-400 text-xs">We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
</div>
<div className="flex gap-3 shrink-0">
<button className="text-xs font-medium px-4 py-2 rounded-md hover:bg-stone-800 transition-colors" onclick="document.getElementById('cookie-banner').style.display='none'">Decline</button>
<button className="bg-white text-stone-900 text-xs font-medium px-4 py-2 rounded-md hover:bg-stone-200 transition-colors" onclick="document.getElementById('cookie-banner').style.display='none'">Accept All</button>
</div>
</div>

<nav className="sticky top-0 w-full bg-[#fcfbf9]/80 backdrop-blur-md border-b border-stone-200 z-40">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">

<a className="flex items-center gap-2 text-amber-800 hover:opacity-80 transition-opacity" href="#home">
<i className="w-8 h-8" data-lucide="croissant" strokeWidth="1.5"></i>
<div className="flex flex-col">
<span className="text-xl tracking-tight font-semibold leading-none">La Petite</span>
<span className="text-sm tracking-tight text-amber-700 font-medium">Pâtisserie</span>
</div>
</a>

<div className="hidden md:flex items-center ml-16 gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors" href="#products">Products &amp; Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors" href="#contact">Contact</a>
</div>
</div>

<div className="flex items-center gap-6">
<a className="relative text-stone-600 hover:text-amber-700 transition-colors" href="#products">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1.5 -right-1.5 bg-amber-700 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</a>
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-amber-700 transition-colors" href="#auth">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
                    Sign In
                </a>
</div>
</div>
</nav>

<a className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all z-40 group" href="https://wa.me/600143238223" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-stone-800 text-xs py-1 px-2 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Chat with us</span>
</a>

<section className="pt-12 pb-24 px-6" id="home">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start max-w-xl">
<span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 text-xs font-medium mb-6">Mother's Day Special</span>
<h1 className="text-5xl tracking-tight font-semibold text-stone-900 mb-6 leading-tight">
                        Loved at <span className="text-amber-700 italic">First Bites.</span>
</h1>
<p className="text-lg text-stone-600 mb-8 leading-relaxed">
                        Exquisite French entremets and premium handcrafted cakes brought to the comfort of your home. Experience the perfect harmony of textures and rich flavours.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="bg-amber-700 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-amber-800 transition-colors inline-flex items-center gap-2" href="#products">
                            Order Now <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="bg-white text-stone-800 border border-stone-200 px-6 py-3 rounded-md text-sm font-medium hover:bg-stone-50 transition-colors" href="#products">
                            View All Products
                        </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 shadow-sm flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-50 to-stone-100"></div>

<div className="relative z-10 flex flex-col items-center text-stone-400">
<i className="w-24 h-24 mb-4 text-amber-200" data-lucide="cake" strokeWidth="1.5"></i>
<span className="text-sm font-medium">Featured: Fraise Élégance</span>
</div>
</div>
</div>
</div>
</section>


<div className="border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-100">
<div className="flex items-center gap-4 md:px-8 first:pl-0">
<div className="bg-amber-50 p-3 rounded-full text-amber-700 shrink-0">
<i className="w-6 h-6" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 tracking-tight">Free Delivery</h3>
<p className="text-sm text-stone-500 mt-1">Within KL &amp; Selangor (3 days notice)</p>
</div>
</div>
<div className="flex items-center gap-4 md:px-8 pt-6 md:pt-0">
<div className="bg-amber-50 p-3 rounded-full text-amber-700 shrink-0">
<i className="w-6 h-6" data-lucide="chef-hat" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 tracking-tight">Made Fresh to Order</h3>
<p className="text-sm text-stone-500 mt-1">Every time, just for you.</p>
</div>
</div>
<div className="flex items-center gap-4 md:px-8 pt-6 md:pt-0">
<div className="bg-amber-50 p-3 rounded-full text-amber-700 shrink-0">
<i className="w-6 h-6" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 tracking-tight">100,000+ Delivered</h3>
<p className="text-sm text-stone-500 mt-1">Trusted by cake lovers.</p>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 px-6 bg-[#fcfbf9]">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-stone-900">Signature Bestsellers</h2>
<p className="text-lg text-stone-600 mt-2">Our most loved creations, crafted with precision.</p>
</div>
<a className="hidden sm:inline-flex text-sm font-medium text-amber-700 hover:text-amber-800 items-center gap-1" href="#products">
                    See all <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">Midnight Ribbon</h3>
<span className="text-sm font-medium text-amber-700">RM105</span>
</div>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">Dark Chocolate, Toasty Nut, and Kitkat.</p>
<button className="mt-auto w-full py-2.5 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">Caffè Noir Indulgence</h3>
<span className="text-sm font-medium text-amber-700">RM100</span>
</div>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">Coffee and Cocoa powder, and White Chocolate.</p>
<button className="mt-auto w-full py-2.5 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-stone-900">Fraise Élégance</h3>
<span className="text-sm font-medium text-amber-700">RM185</span>
</div>
<p className="text-sm text-stone-500 mb-4 line-clamp-2">Fresh Strawberry, Fresh Cream, and Vanilla Sponge.</p>
<button className="mt-auto w-full py-2.5 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl tracking-tight font-semibold text-stone-900 mb-8">Shop by Category</h2>
<div className="grid sm:grid-cols-2 gap-4">
<a className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end p-6 bg-stone-100" href="#products">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-center">
<span className="text-white font-medium text-lg">Chocolatey</span>
<div className="bg-white/20 backdrop-blur p-2 rounded-full text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end p-6 bg-stone-100" href="#products">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-center">
<span className="text-white font-medium text-lg">Fruit Based</span>
<div className="bg-white/20 backdrop-blur p-2 rounded-full text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
<a className="group relative overflow-hidden rounded-xl aspect-[4/3] flex items-end p-6 bg-stone-100 sm:col-span-2" href="#products">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent z-10"></div>
<div className="relative z-20 w-full flex justify-between items-center">
<span className="text-white font-medium text-lg">Small Bites &amp; Pastries</span>
<div className="bg-white/20 backdrop-blur p-2 rounded-full text-white transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</a>
</div>
</div>

<div className="flex flex-col gap-8">

<div className="relative w-full h-48 rounded-xl overflow-hidden bg-stone-200 flex items-center justify-center text-stone-400">
<span className="text-sm font-medium">Storefront / Team Banner Image</span>
</div>

<div className="bg-[#fcfbf9] rounded-xl p-8 border border-stone-100">
<div className="flex items-center gap-1 mb-4 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-stone-700 italic mb-6">"The Midnight Ribbon cake was an absolute masterpiece for my husband's birthday. The harmony of textures is truly what they promise. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-medium text-stone-900">Sarah M.</p>
<p className="text-xs text-stone-500">Verified Customer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fcfbf9]" id="about">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">Our Story</h2>
<p className="text-lg text-stone-600">Turning meaningful moments into unforgettable memories.</p>
</div>
<div className="space-y-16">

<div className="prose prose-stone prose-lg max-w-none text-stone-600">
<p>La Petite Pâtisserie began in 2023 in Kuala Lumpur. Five good friends from Malaysia and China, inspired by the irresistible charm of French desserts, we set out to bring that same magic home. The result is La Petite Pâtisserie — a reimagined experience where you can enjoy exquisite French entremets and premium cakes, all from the comfort of your own home.</p>
<p>There's an art to French desserts — a perfect harmony of textures, rich flavours, and delicate balance. In France, desserts are more than just food; they are a way of life enjoyed at any moment.</p>
</div>

<div className="grid sm:grid-cols-2 gap-8">
<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 mb-6">
<i className="w-5 h-5" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-3">Mission Statement</h3>
<p className="text-base text-stone-600 leading-relaxed">To create handcrafted cakes that turn meaningful moments into unforgettable memories through beauty, flavor, and heartfelt craftsmanship.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-sm">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-700 mb-6">
<i className="w-5 h-5" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-stone-900 mb-3">Vision Statement</h3>
<p className="text-base text-stone-600 leading-relaxed">To become a trusted cake brand known for elegant design, exceptional taste, and a seamless customer experience both online and offline.</p>
</div>
</div>

<div>
<h3 className="text-2xl tracking-tight font-medium text-stone-900 mb-8 text-center border-b border-stone-200 pb-4">Core Values</h3>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex gap-4">
<span className="text-amber-700 font-medium">01</span>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Craftsmanship</h4>
<p className="text-sm text-stone-600">Every cake is carefully designed and decorated with precision and creativity.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-amber-700 font-medium">02</span>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Quality Ingredients</h4>
<p className="text-sm text-stone-600">The company uses fresh, premium ingredients to ensure every cake tastes as good as it looks.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-amber-700 font-medium">03</span>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Customer Care</h4>
<p className="text-sm text-stone-600">We value clear communication, reliability, and a personalized ordering experience.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-amber-700 font-medium">04</span>
<div>
<h4 className="text-base font-medium text-stone-900 mb-1">Celebration</h4>
<p className="text-sm text-stone-600">Every order is made to honor an important event, milestone, or memory.</p>
</div>
</div>
<div className="flex gap-4 md:col-span-2 md:justify-center">
<span className="text-amber-700 font-medium">05</span>
<div className="max-w-sm">
<h4 className="text-base font-medium text-stone-900 mb-1">Trust</h4>
<p className="text-sm text-stone-600">From consultation to delivery, we aim to make customers feel confident and cared for.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="products">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight font-semibold text-stone-900 mb-4">Our Menu</h2>
<p className="text-lg text-stone-600">Handcrafted to perfection.</p>
<div className="mt-4 inline-flex bg-amber-50 text-amber-800 text-xs py-2 px-4 rounded-full font-medium items-center gap-2">
<i className="w-4 h-4" data-lucide="info" strokeWidth="1.5"></i>
                    Note: For peak freshness, consume within 2 days of delivery. Keep refrigerated.
                </div>
</div>

<div className="mb-12">
<h3 className="text-xl font-medium text-stone-900 mb-6 border-b border-stone-100 pb-2">Chocolatey</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<span className="absolute top-2 left-2 bg-white/90 text-[10px] font-medium px-2 py-1 rounded text-stone-600 z-20">Bestseller</span>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-stone-900">Midnight Ribbon</h4>
<span className="text-sm font-medium text-amber-700">RM105.00</span>
</div>
<div className="flex gap-3 text-xs text-stone-500 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="ruler" strokeWidth="1.5"></i> 5"</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="weight" strokeWidth="1.5"></i> 500g+</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users" strokeWidth="1.5"></i> 4-5</span>
</div>
<p className="text-sm text-stone-500 mb-4 flex-grow">Dark Chocolate, Toasty Nut, and Kitkat.</p>
<button className="w-full py-2 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-stone-900">Snowy Tree Delight</h4>
<span className="text-sm font-medium text-amber-700">RM85.00</span>
</div>
<div className="flex gap-3 text-xs text-stone-500 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="ruler" strokeWidth="1.5"></i> 3"</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="weight" strokeWidth="1.5"></i> 350g+</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users" strokeWidth="1.5"></i> 3-4</span>
</div>
<p className="text-sm text-stone-500 mb-4 flex-grow">White Chocolate, Tiger biscuit, and Fresh Fruit.</p>
<button className="w-full py-2 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-stone-900">Black Forest</h4>
<span className="text-sm font-medium text-amber-700">RM115.00</span>
</div>
<div className="flex gap-3 text-xs text-stone-500 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="ruler" strokeWidth="1.5"></i> 6"</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="weight" strokeWidth="1.5"></i> 500g+</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users" strokeWidth="1.5"></i> 4-6</span>
</div>
<p className="text-sm text-stone-500 mb-4 flex-grow">Espresso-Soaked Sponge, Dark Chocolate Ganache, Cocoa Powder, Vanilla.</p>
<button className="w-full py-2 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<span className="absolute top-2 left-2 bg-white/90 text-[10px] font-medium px-2 py-1 rounded text-stone-600 z-20">Bestseller</span>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-stone-900">Caffè Noir Indulgence</h4>
<span className="text-sm font-medium text-amber-700">RM100.00</span>
</div>
<div className="flex gap-3 text-xs text-stone-500 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="ruler" strokeWidth="1.5"></i> 6"</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="weight" strokeWidth="1.5"></i> 500g+</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users" strokeWidth="1.5"></i> 4-6</span>
</div>
<p className="text-sm text-stone-500 mb-4 flex-grow">Coffee and Cocoa powder, and White Chocolate.</p>
<button className="w-full py-2 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>
</div>
</div>
<div className="mb-24">
<h3 className="text-xl font-medium text-stone-900 mb-6 border-b border-stone-100 pb-2">Fruit</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl p-4 shadow-sm border border-stone-100 hover:shadow-md transition-all flex flex-col">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 flex items-center justify-center text-stone-300 relative overflow-hidden">
<div className="absolute inset-0 bg-stone-200/50 group-hover:scale-105 transition-transform duration-500"></div>
<span className="absolute top-2 left-2 bg-white/90 text-[10px] font-medium px-2 py-1 rounded text-stone-600 z-20">Bestseller</span>
<i className="w-8 h-8 relative z-10" data-lucide="image" strokeWidth="1.5"></i>
</div>
<div className="flex justify-between items-start mb-1">
<h4 className="text-base font-medium text-stone-900">Fraise Élégance</h4>
<span className="text-sm font-medium text-amber-700">RM185.00</span>
</div>
<div className="flex gap-3 text-xs text-stone-500 mb-3">
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="ruler" strokeWidth="1.5"></i> 5"</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="weight" strokeWidth="1.5"></i> 450g+</span>
<span className="flex items-center gap-1"><i className="w-3 h-3" data-lucide="users" strokeWidth="1.5"></i> 4-5</span>
</div>
<p className="text-sm text-stone-500 mb-4 flex-grow">Fresh Strawberry, Fresh Cream, and Vanilla Sponge.</p>
<button className="w-full py-2 rounded-md border border-stone-200 text-sm font-medium hover:bg-stone-50 transition-colors">Add to Cart</button>
</div>
</div>
</div>

<div className="bg-[#fcfbf9] rounded-2xl p-8 border border-stone-200 max-w-3xl mx-auto">
<div className="mb-8 text-center">
<h3 className="text-2xl tracking-tight font-semibold text-stone-900">Secure Checkout</h3>
<p className="text-sm text-stone-500 mt-1">Complete your order details below.</p>
</div>
<form className="space-y-8">

<div>
<h4 className="text-base font-medium text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
<span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                            Delivery Address
                        </h4>
<div className="grid gap-4">
<input className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white" placeholder="Full Name" type="text"/>
<input className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white" placeholder="Street Address" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white" placeholder="City" type="text"/>
<select className="custom-select w-full border border-stone-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 bg-white text-stone-700">
<option disabled="" selected="" value="">Select State</option>
<option value="KL">Kuala Lumpur</option>
<option value="Selangor">Selangor</option>
</select>
</div>
<p className="text-xs text-amber-700 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="info" strokeWidth="1.5"></i> Delivery only available within KL &amp; Selangor.
                            </p>
</div>
</div>

<div>
<h4 className="text-base font-medium text-stone-900 mb-4 flex items-center gap-2 border-b border-stone-200 pb-2">
<span className="bg-amber-100 text-amber-800 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                            Payment Method
                        </h4>
<div className="space-y-3">
<label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors bg-white">
<input checked="" className="custom-radio" name="payment" type="radio"/>
<div className="flex-grow">
<span className="text-sm font-medium text-stone-900 block">Credit/Debit Card</span>
</div>
<i className="w-5 h-5 text-stone-400" data-lucide="credit-card" strokeWidth="1.5"></i>
</label>
<label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors bg-white">
<input className="custom-radio" name="payment" type="radio"/>
<div className="flex-grow">
<span className="text-sm font-medium text-stone-900 block">Online Banking (FPX)</span>
</div>
<i className="w-5 h-5 text-stone-400" data-lucide="building-2" strokeWidth="1.5"></i>
</label>
<label className="flex items-center gap-3 p-4 border border-stone-200 rounded-lg cursor-pointer hover:bg-stone-50 transition-colors bg-white">
<input className="custom-radio" name="payment" type="radio"/>
<div className="flex-grow">
<span className="text-sm font-medium text-stone-900 block">E-Wallet</span>
</div>
<i className="w-5 h-5 text-stone-400" data-lucide="smartphone" strokeWidth="1.5"></i>
</label>
</div>
</div>

<div className="bg-stone-50 p-4 rounded-lg border border-stone-200">
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Subtotal</span>
<span className="font-medium text-stone-900">RM105.00</span>
</div>
<div className="flex justify-between text-sm mb-4">
<span className="text-stone-600">Delivery Fee</span>
<span className="font-medium text-green-600">Free</span>
</div>
<div className="flex justify-between text-base font-medium border-t border-stone-200 pt-4">
<span className="text-stone-900">Total</span>
<span className="text-amber-700">RM105.00</span>
</div>
</div>
<button className="w-full bg-amber-700 text-white py-3 rounded-md text-sm font-medium hover:bg-amber-800 transition-colors" type="button">
                        Place Order
                    </button>
</form>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-white" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl tracking-tight font-semibold mb-2">Get in Touch</h2>
<p className="text-stone-400 mb-12">Have a question or need assistance with a custom order? We're here to help.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="bg-stone-800 p-3 rounded-full text-amber-500 shrink-0 h-fit">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-300">Visit Us</h4>
<p className="text-base text-stone-100">Setia Eco Templer Sales Gallery,<br/>No. 1, Jalan Ipoh-Rawang, KM-20,<br/>Taman Rekreasi Templer,<br/>48000 Rawang, Selangor.</p>
<a className="text-amber-500 text-sm mt-2 inline-flex items-center gap-1 hover:text-amber-400" href="https://maps.app.goo.gl/iKV9smnxB4B8dDsA6?g_st=aw" target="_blank">View on Google Maps <i className="w-3 h-3" data-lucide="external-link" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="flex gap-4">
<div className="bg-stone-800 p-3 rounded-full text-amber-500 shrink-0 h-fit">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-300">Contact</h4>
<p className="text-base text-stone-100">(+60) 014-3238223</p>
<a className="text-amber-500 text-sm mt-2 inline-flex items-center gap-1 hover:text-amber-400" href="https://wa.me/600143238223" target="_blank">Message on WhatsApp <i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="flex gap-4">
<div className="bg-stone-800 p-3 rounded-full text-amber-500 shrink-0 h-fit">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-300">Email</h4>
<p className="text-base text-stone-100">hello@lapetitepatisserie.com.my</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-stone-800 p-3 rounded-full text-amber-500 shrink-0 h-fit">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-sm font-medium mb-1 text-stone-300">Business Hours</h4>
<p className="text-base text-stone-100">Tuesday - Sunday: 10:00 AM - 6:00 PM<br/><span className="text-stone-400 text-sm">Closed on Mondays</span></p>
</div>
</div>
</div>
</div>

<div className="bg-stone-800 rounded-2xl p-8">
<h3 className="text-xl font-medium mb-6">Send us an Inquiry</h3>
<form className="space-y-4">
<div>
<label className="block text-sm font-medium text-stone-400 mb-1">Name</label>
<input className="w-full bg-stone-900 border border-stone-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-1">Email</label>
<input className="w-full bg-stone-900 border border-stone-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-1">Subject</label>
<select className="custom-select w-full bg-stone-900 border border-stone-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500">
<option>General Inquiry</option>
<option>Custom Cake Order</option>
<option>Delivery Status</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-400 mb-1">Message</label>
<textarea className="w-full bg-stone-900 border border-stone-700 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" rows="4"></textarea>
</div>
<button className="w-full bg-amber-600 text-white py-3 rounded-md text-sm font-medium hover:bg-amber-500 transition-colors mt-2" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#fcfbf9] border-t border-stone-200" id="auth">
<div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-sm border border-stone-200 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 bg-amber-50 rounded-full text-amber-700 mb-6">
<i className="w-6 h-6" data-lucide="crown" strokeWidth="1.5"></i>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-stone-900 mb-2">Join Our Membership</h2>
<p className="text-sm text-stone-600 mb-8">Create an account to gain points, track orders, and enjoy exclusive member benefits.</p>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-white border border-stone-300 text-stone-700 py-2.5 rounded-md text-sm font-medium hover:bg-stone-50 transition-colors">

<svg className="w-4 h-4" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                    Continue with Google
                </button>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-stone-200"></div>
<span className="flex-shrink-0 mx-4 text-stone-400 text-xs">or</span>
<div className="flex-grow border-t border-stone-200"></div>
</div>
<form className="space-y-4 text-left">
<div>
<label className="block text-xs font-medium text-stone-600 mb-1">Email address</label>
<input className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-600 mb-1">Password</label>
<input className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" type="password"/>
</div>
<button className="w-full bg-stone-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-stone-800 transition-colors" type="button">
                        Sign In
                    </button>
</form>
</div>
<p className="text-xs text-stone-500 mt-6">By signing up, you agree to our <a className="underline hover:text-stone-800" href="#">Terms of Service</a> and <a className="underline hover:text-stone-800" href="#">Privacy Policy</a>.</p>
</div>
</section>

<footer className="bg-white border-t border-stone-200 py-8 px-6 text-center text-sm text-stone-500">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
<p>© 2024 La Petite Pâtisserie Sdn Bhd. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-stone-800" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-stone-800" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>



    </>
  );
}
