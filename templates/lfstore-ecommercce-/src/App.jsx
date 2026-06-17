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
      

<div className="bg-slate-900 text-slate-300 text-[10px] sm:text-xs py-2 px-4 border-b border-slate-800">
<div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
<div className="flex items-center gap-4 sm:gap-6">
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span className="font-medium tracking-wide">+92 307 9055250</span>
</span>
<span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span className="font-medium tracking-wide">luqmanbusinesss1a@gmail.com</span>
</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white" href="#">Help Center</a>
<a className="hover:text-white" href="#">Track Order</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-[1600px] mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">

<div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
<div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">MARKET</span>
<span className="text-[10px] font-semibold text-slate-400 tracking-widest uppercase">Professional</span>
</div>
</div>

<div className="hidden md:flex flex-1 max-w-2xl relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</div>
<input className="w-full bg-slate-100 text-sm pl-10 pr-4 py-3 rounded-xl border-none ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all placeholder:text-slate-400 font-medium" placeholder="Search for products, brands and more..." type="text"/>
<button className="absolute right-2 top-2 bottom-2 bg-white px-3 rounded-lg text-xs font-bold text-slate-900 shadow-sm border border-slate-100 hover:bg-slate-50">Search</button>
</div>

<div className="flex items-center gap-3 sm:gap-6">

<button className="flex items-center gap-3 hover:bg-slate-50 p-1.5 pr-3 rounded-lg group transition-colors" onclick="document.getElementById('loginModal').classList.add('active')">
<div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-slate-900 group-hover:border-slate-300 transition-all">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
</div>
<div className="hidden lg:flex flex-col items-start leading-none">
<span className="text-[10px] font-medium text-slate-500">Account</span>
<span className="text-xs font-bold text-slate-900">Sign In</span>
</div>
</button>

<button className="relative flex items-center gap-3 hover:bg-slate-50 p-1.5 pr-3 rounded-lg group transition-colors">
<div className="relative w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-white group-hover:text-slate-900 group-hover:border-slate-300 transition-all">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 h-4 w-4 bg-slate-900 text-white text-[9px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">2</span>
</div>
<div className="hidden lg:flex flex-col items-start leading-none">
<span className="text-[10px] font-medium text-slate-500">Total</span>
<span className="text-xs font-bold text-slate-900">$2,498.00</span>
</div>
</button>
</div>
</div>
</nav>

<div className="max-w-[1600px] mx-auto p-4 lg:p-6 pb-2">
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-900">

<div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 flex items-center px-8 md:px-20 fade-anim">
<div className="max-w-xl space-y-6 z-10">
<span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-[10px] font-bold tracking-wider uppercase">New Arrival</span>
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Professional Grade <br/> <span className="text-indigo-400">Workstations</span></h2>
<p className="text-slate-400 text-sm md:text-base leading-relaxed">Equip your office with the latest high-performance hardware designed for creators and engineers.</p>
<div className="flex gap-4 pt-2">
<button className="bg-white text-slate-900 px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-100 transition-colors">Shop Now</button>
<button className="bg-transparent border border-slate-700 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors">Learn More</button>
</div>
</div>

<div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mask-image-gradient"></div>
</div>

<div className="absolute bottom-6 right-8 flex gap-2 z-20">
<button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<main className="max-w-[1600px] mx-auto p-4 lg:p-6 flex flex-col lg:flex-row gap-8">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-8">

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:layers-minimalistic-linear" width="16"></iconify-icon> Categories
                </h3>
<ul className="space-y-2.5">
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Laptops &amp; PC</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Smartphones</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Cameras</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Headphones</span>
</label>
</li>
<li>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-offset-0 focus:ring-0 cursor-pointer" type="checkbox"/>
<span className="text-xs font-medium text-slate-600 group-hover:text-slate-900 transition-colors">Accessories</span>
</label>
</li>
</ul>
</div>

<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon> Price Range
                </h3>
<div className="flex items-center gap-2 mb-4">
<div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 flex-1">
<span className="text-[10px] text-slate-400 block mb-0.5">Min</span>
<div className="flex items-center gap-1">
<span className="text-xs font-bold">$</span>
<input className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none p-0" type="number" value="0"/>
</div>
</div>
<span className="text-slate-300">-</span>
<div className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 flex-1">
<span className="text-[10px] text-slate-400 block mb-0.5">Max</span>
<div className="flex items-center gap-1">
<span className="text-xs font-bold">$</span>
<input className="w-full bg-transparent text-xs font-bold text-slate-900 focus:outline-none p-0" type="number" value="5000"/>
</div>
</div>
</div>
<button className="w-full bg-slate-900 text-white text-xs font-bold py-2.5 rounded-lg hover:bg-slate-800 transition-colors">Apply Filter</button>
</div>
</aside>

<div className="flex-1">

<div className="flex items-center justify-between mb-6">
<h2 className="text-lg font-bold text-slate-900">Recommended For You</h2>
<div className="flex items-center gap-2">
<span className="text-xs text-slate-500 font-medium hidden sm:block">Sort by:</span>
<select className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg py-2 px-3 focus:outline-none focus:ring-1 focus:ring-slate-900 cursor-pointer">
<option>Most Popular</option>
<option>Newest Arrivals</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
</select>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col">
<div className="relative bg-slate-50 rounded-xl h-56 flex items-center justify-center mb-4 overflow-hidden">
<div className="absolute top-3 left-3 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md">Best Seller</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-300" icon="solar:laptop-minimalistic-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight line-clamp-2">MacBook Pro 16" M3 Max Chip - Space Black Edition</h3>
<p className="text-xs text-slate-500 mb-3">512GB SSD • 32GB RAM</p>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="text-xs text-slate-400 font-medium line-through">$2,699</span>
<div className="text-lg font-bold text-slate-900">$2,499.00</div>
</div>
<button className="bg-slate-900 text-white p-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/10" onclick="document.getElementById('orderModal').classList.add('active')">
<span className="text-xs font-bold px-1">Order Now</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col">
<div className="relative bg-slate-50 rounded-xl h-56 flex items-center justify-center mb-4 overflow-hidden">
<div className="absolute top-3 left-3 bg-indigo-500 text-white text-[10px] font-bold px-2 py-1 rounded-md">-20% OFF</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-300" icon="solar:camera-square-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight line-clamp-2">Sony Alpha a7 IV Mirrorless Camera Body</h3>
<p className="text-xs text-slate-500 mb-3">33MP Full-Frame Sensor</p>
<div className="mt-auto flex items-end justify-between">
<div>
<span className="text-xs text-slate-400 font-medium line-through">$2,800</span>
<div className="text-lg font-bold text-slate-900">$2,498.00</div>
</div>
<button className="bg-slate-900 text-white p-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/10" onclick="document.getElementById('orderModal').classList.add('active')">
<span className="text-xs font-bold px-1">Order Now</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all group flex flex-col">
<div className="relative bg-slate-50 rounded-xl h-56 flex items-center justify-center mb-4 overflow-hidden">
<button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
<iconify-icon className="text-slate-300 group-hover:scale-110 transition-transform duration-300" icon="solar:headphones-round-sound-linear" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="flex-1 flex flex-col">
<h3 className="text-sm font-bold text-slate-900 mb-1 leading-tight line-clamp-2">Bose QuietComfort Ultra Wireless Noise Cancelling</h3>
<p className="text-xs text-slate-500 mb-3">Spatial Audio • 24hr Battery</p>
<div className="mt-auto flex items-end justify-between">
<div>
<div className="text-lg font-bold text-slate-900">$429.00</div>
</div>
<button className="bg-slate-900 text-white p-2.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-lg shadow-slate-900/10" onclick="document.getElementById('orderModal').classList.add('active')">
<span className="text-xs font-bold px-1">Order Now</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-200 mt-12 py-12">
<div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">MARKET</span>
</div>
<div className="text-xs text-slate-500 space-y-2">
<p className="flex items-center gap-2"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +92 307 9055250</p>
<p className="flex items-center gap-2"><iconify-icon icon="solar:letter-linear"></iconify-icon> luqmanbusinesss1a@gmail.com</p>
</div>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900 mb-4">Customer Care</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li><a className="hover:text-slate-900" href="#">Help Center</a></li>
<li><a className="hover:text-slate-900" href="#">Track Your Order</a></li>
<li><a className="hover:text-slate-900" href="#">Corporate &amp; Bulk Purchasing</a></li>
<li><a className="hover:text-slate-900" href="#">Returns &amp; Refunds</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900 mb-4">About Us</h4>
<ul className="text-xs text-slate-500 space-y-2">
<li><a className="hover:text-slate-900" href="#">Our Story</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-sm text-slate-900 mb-4">Secure Payment</h4>
<div className="flex gap-2 text-slate-400">
<iconify-icon icon="solar:card-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:wallet-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:bill-check-linear" width="32"></iconify-icon>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto px-6 mt-12 pt-8 border-t border-slate-100 text-center text-[10px] text-slate-400">
            © 2023 Professional Market Inc. All rights reserved.
        </div>
</footer>

<div className="modal fixed inset-0 z-50 flex items-center justify-center p-4" id="loginModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="document.getElementById('loginModal').classList.remove('active')"></div>
<div className="modal-content relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
<div className="flex">

<div className="hidden sm:block w-1/3 bg-slate-900 p-6 flex flex-col justify-between">
<div className="text-white">
<iconify-icon className="mb-4" icon="solar:shop-linear" width="32"></iconify-icon>
<h3 className="text-lg font-bold leading-tight">Welcome Back</h3>
</div>
<p className="text-[10px] text-slate-400">Access your orders, wishlist and recommendations.</p>
</div>

<div className="flex-1 p-8">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-slate-900">Log In</h2>
<button className="text-slate-400 hover:text-slate-900" onclick="document.getElementById('loginModal').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">Email Address</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:letter-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900" placeholder="luqmanbusinesss1a@gmail.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-900 uppercase tracking-wide">Password</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400" icon="solar:lock-password-linear" width="16"></iconify-icon>
<input className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded text-slate-900 border-slate-300 focus:ring-0" type="checkbox"/>
<span className="text-slate-600">Remember me</span>
</label>
<a className="font-semibold text-slate-900 hover:underline" href="#">Forgot password?</a>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20" type="button">Sign In</button>
</form>
<div className="mt-6 text-center text-xs text-slate-500">
                        Don't have an account? <a className="font-bold text-slate-900 hover:underline" href="#">Register now</a>
</div>
</div>
</div>
</div>
</div>

<div className="modal fixed inset-0 z-50 flex items-center justify-center p-4" id="orderModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="document.getElementById('orderModal').classList.remove('active')"></div>
<div className="modal-content relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
<div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
<h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
<iconify-icon icon="solar:bag-check-linear" width="20"></iconify-icon> Complete Your Order
                </h2>
<button className="text-slate-400 hover:text-slate-900" onclick="document.getElementById('orderModal').classList.remove('active')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 lg:p-8">
<div className="grid md:grid-cols-2 gap-8">

<div className="space-y-5">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-100 pb-2">Shipping Information</h3>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500">First Name</label>
<input className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-slate-900 focus:outline-none" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500">Last Name</label>
<input className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-slate-900 focus:outline-none" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500">Phone Number</label>
<input className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" readonly="" type="text" value="+92 307 9055250"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500">Email Address</label>
<input className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500 cursor-not-allowed" readonly="" type="text" value="luqmanbusinesss1a@gmail.com"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-bold text-slate-500">Delivery Address</label>
<textarea className="w-full p-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-slate-900 focus:outline-none resize-none" rows="2"></textarea>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-5 space-y-4">
<h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide pb-2">Order Summary</h3>

<div className="flex gap-3 items-start pb-4 border-b border-slate-200">
<div className="w-12 h-12 bg-white rounded border border-slate-200 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-bold text-slate-900 line-clamp-2">MacBook Pro 16" M3 Max Chip - Space Black</p>
<p className="text-[10px] text-slate-500">Qty: 1</p>
</div>
<div className="text-xs font-bold text-slate-900">$2,499.00</div>
</div>

<div className="space-y-2 pt-2">
<div className="flex justify-between text-xs text-slate-500">
<span>Subtotal</span>
<span>$2,499.00</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Shipping</span>
<span className="text-green-600 font-bold">Free</span>
</div>
<div className="flex justify-between text-xs text-slate-500">
<span>Tax (Estimated)</span>
<span>$120.00</span>
</div>
<div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-200 mt-2">
<span>Order Total</span>
<span>$2,619.00</span>
</div>
</div>
<button className="w-full bg-slate-900 text-white py-3 rounded-lg text-sm font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 mt-4 flex items-center justify-center gap-2">
                            Place Order <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-[10px] text-center text-slate-400 mt-2">Secure encrypted transaction</p>
</div>
</div>
</div>
</div>
</div>

    </>
  );
}
