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
      

<div className="bg-zinc-950 text-zinc-300 text-[10px] sm:text-xs text-center py-2.5 tracking-widest font-medium uppercase">
        Complimentary global shipping on all orders over $200
    </div>

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center lg:hidden">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center lg:justify-start flex-1 lg:flex-none">
<a className="text-2xl font-semibold tracking-tighter text-zinc-950 uppercase" href="#">TMPRX</a>
</div>

<nav className="hidden lg:flex space-x-10">
<a className="text-xs font-medium text-zinc-900 tracking-wide uppercase hover:text-amber-600 transition-colors" href="#">Shop</a>
<a className="text-xs font-medium text-zinc-500 tracking-wide uppercase hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="text-xs font-medium text-zinc-500 tracking-wide uppercase hover:text-zinc-900 transition-colors" href="#">Our Story</a>
</nav>

<div className="flex items-center space-x-5 justify-end flex-1 lg:flex-none">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors relative">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-amber-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-medium">1</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-zinc-950 text-white h-[85vh] min-h-[600px] flex items-center overflow-hidden">

<div className="absolute inset-0 opacity-60">
<img alt="Luxury Watch" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/70 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-xl">
<span className="text-amber-500 font-medium tracking-widest text-xs uppercase mb-4 block">The Heritage Series</span>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-none">Mastery in <br/>Every Second.</h1>
<p className="text-zinc-400 text-sm sm:text-base mb-10 font-light max-w-md leading-relaxed">
                    Experience uncompromising craftsmanship. Discover timepieces designed for those who appreciate the subtle art of true horology without the traditional markup.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-xs font-medium bg-white text-zinc-900 hover:bg-zinc-100 transition-all duration-200 uppercase tracking-wide" href="#">
                        Explore Collection
                    </a>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-b border-zinc-100 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="flex flex-col items-center pt-4 md:pt-0">
<iconify-icon className="text-amber-600 mb-3" icon="solar:shield-check-linear" strokeWidth="1.5" width="26"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">5-Year Warranty</h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Guaranteed against all manufacturing defects.</p>
</div>
<div className="flex flex-col items-center pt-4 md:pt-0">
<iconify-icon className="text-amber-600 mb-3" icon="solar:box-linear" strokeWidth="1.5" width="26"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Free Insured Delivery</h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Secure global shipping on all orders.</p>
</div>
<div className="flex flex-col items-center pt-4 md:pt-0">
<iconify-icon className="text-amber-600 mb-3" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="26"></iconify-icon>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Complimentary Returns</h3>
<p className="text-xs text-zinc-500 mt-1 font-light">30-day return policy, no questions asked.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Curated Signatures</h2>
<p className="text-zinc-500 text-sm font-light">Our most sought-after timepieces, redefined.</p>
</div>

<div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
<button className="px-4 py-2 text-[11px] font-medium border border-zinc-200 text-zinc-900 bg-zinc-50 whitespace-nowrap uppercase tracking-wider">All</button>
<button className="px-4 py-2 text-[11px] font-medium border border-transparent text-zinc-500 hover:text-zinc-900 whitespace-nowrap uppercase tracking-wider transition-colors">Chronograph</button>
<button className="px-4 py-2 text-[11px] font-medium border border-transparent text-zinc-500 hover:text-zinc-900 whitespace-nowrap uppercase tracking-wider transition-colors">Automatic</button>
<div className="h-4 w-px bg-zinc-200 mx-2 hidden md:block"></div>
<button className="flex items-center space-x-1.5 px-2 text-[11px] font-medium text-zinc-900 whitespace-nowrap uppercase tracking-wider">
<iconify-icon icon="solar:sort-from-top-to-bottom-linear" strokeWidth="1.5"></iconify-icon>
<span>Sort</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group relative flex flex-col">
<div className="relative bg-zinc-100 aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-white px-2.5 py-1 text-[9px] font-medium tracking-widest uppercase text-zinc-900 z-10 shadow-sm">Bestseller</span>
<button className="absolute top-3 right-3 text-zinc-400 hover:text-amber-600 transition-colors z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<img alt="The Vanguard Chronograph" className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/40 to-transparent">
<button className="w-full bg-white text-zinc-900 text-xs font-medium py-3 hover:bg-zinc-100 transition-colors tracking-wide">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight"><a href="#"><span className="absolute inset-0"></span>The Vanguard</a></h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Stainless Steel / Midnight</p>
</div>
<p className="text-sm font-medium text-zinc-900">$345</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative bg-zinc-100 aspect-[4/5] overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-red-600 text-white px-2.5 py-1 text-[9px] font-medium tracking-widest uppercase z-10 shadow-sm">Low Stock</span>
<button className="absolute top-3 right-3 text-zinc-400 hover:text-amber-600 transition-colors z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<img alt="Eclipse Automatic" className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/40 to-transparent">
<button className="w-full bg-white text-zinc-900 text-xs font-medium py-3 hover:bg-zinc-100 transition-colors tracking-wide">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight"><a href="#"><span className="absolute inset-0"></span>Eclipse Automatic</a></h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Rose Gold / Leather</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-red-600">$495</p>
<p className="text-xs text-zinc-400 line-through">$650</p>
</div>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative bg-zinc-100 aspect-[4/5] overflow-hidden mb-4">
<button className="absolute top-3 right-3 text-zinc-400 hover:text-amber-600 transition-colors z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<img alt="Aero Diver" className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/40 to-transparent">
<button className="w-full bg-white text-zinc-900 text-xs font-medium py-3 hover:bg-zinc-100 transition-colors tracking-wide">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight"><a href="#"><span className="absolute inset-0"></span>Aero Diver 300</a></h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Brushed Titanium</p>
</div>
<p className="text-sm font-medium text-zinc-900">$520</p>
</div>
</div>

<div className="group relative flex flex-col">
<div className="relative bg-zinc-100 aspect-[4/5] overflow-hidden mb-4">
<button className="absolute top-3 right-3 text-zinc-400 hover:text-amber-600 transition-colors z-10 bg-white/80 p-1.5 rounded-full backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<img alt="Heritage Classic" className="object-cover object-center w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&amp;w=1988&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out bg-gradient-to-t from-black/40 to-transparent">
<button className="w-full bg-white text-zinc-900 text-xs font-medium py-3 hover:bg-zinc-100 transition-colors tracking-wide">Quick Add</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight"><a href="#"><span className="absolute inset-0"></span>Heritage Classic</a></h3>
<p className="text-xs text-zinc-500 mt-1 font-light">Gold Plated / Onyx</p>
</div>
<p className="text-sm font-medium text-zinc-900">$285</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center space-x-2 text-xs font-medium text-zinc-900 hover:text-amber-600 transition-colors group uppercase tracking-wider border-b border-transparent hover:border-amber-600 pb-1" href="#">
<span>View Complete Shop</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="bg-zinc-950 text-white py-20 lg:py-32 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4">
<img alt="Detail View 1" className="w-full aspect-[4/5] object-cover bg-zinc-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Detail View 2" className="w-full aspect-[4/5] object-cover bg-zinc-900 mt-8" src="https://images.unsplash.com/photo-1622434641406-a158123450f9?q=80&amp;w=2004&amp;auto=format&amp;fit=crop"/>
</div>

<div className="max-w-md">
<div className="flex items-center space-x-2 mb-4">
<span className="flex items-center text-amber-500 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</span>
<span className="text-xs text-zinc-400 font-light underline decoration-zinc-700 underline-offset-4 cursor-pointer hover:text-white transition-colors">128 Verified Reviews</span>
</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">The Apex Skeleton</h2>
<p className="text-lg font-light text-zinc-300 mb-6">$850.00</p>
<p className="text-zinc-400 text-sm font-light leading-relaxed mb-8">
                        A masterclass in modern horology. The Apex reveals its intricate automatic movement through a scratch-resistant sapphire crystal dial. Encased in surgical-grade stainless steel with a brushed finish, bridging the gap between classic engineering and contemporary aesthetics.
                    </p>

<div className="space-y-4 mb-8">
<div className="flex justify-between py-2.5 border-b border-zinc-800 text-xs">
<span className="text-zinc-500 font-light uppercase tracking-wider">Movement</span>
<span className="text-zinc-200 font-medium">Precision Automatic</span>
</div>
<div className="flex justify-between py-2.5 border-b border-zinc-800 text-xs">
<span className="text-zinc-500 font-light uppercase tracking-wider">Water Resistance</span>
<span className="text-zinc-200 font-medium">10 ATM / 100m</span>
</div>
<div className="flex justify-between py-2.5 border-b border-zinc-800 text-xs">
<span className="text-zinc-500 font-light uppercase tracking-wider">Glass</span>
<span className="text-zinc-200 font-medium">Sapphire Crystal</span>
</div>
</div>
<button className="w-full bg-amber-600 text-white font-medium py-4 text-xs tracking-wide uppercase hover:bg-amber-700 transition-colors flex justify-center items-center space-x-2">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Add to Cart</span>
</button>
<div className="flex justify-center items-center space-x-4 mt-6 text-zinc-500">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-[10px] font-light tracking-wide uppercase">Secure encrypted checkout</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-b border-zinc-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Precision, Demystified.</h2>
<p className="text-zinc-500 text-sm font-light leading-relaxed mb-8">
                Temprix was founded on the belief that exceptional horology shouldn't be gated by exorbitant markups. We source the finest materials directly, assembling timepieces that rival heritage brands in quality, at a fraction of the cost. No middlemen, just pure craftsmanship.
            </p>
<a className="text-xs font-medium text-zinc-900 hover:text-amber-600 transition-colors uppercase tracking-widest border-b border-zinc-900 hover:border-amber-600 pb-1" href="#">Read Our Story</a>
</div>
</section>

<section className="bg-zinc-50 py-20">
<div className="max-w-4xl mx-auto px-4 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3">Join the Inner Circle</h2>
<p className="text-sm text-zinc-500 mb-8 font-light max-w-lg mx-auto">Subscribe to receive 10% off your first timepiece, early access to limited releases, and exclusive content.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-2">
<input className="flex-1 min-w-0 px-4 py-3.5 text-xs bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 transition-colors rounded-none" placeholder="Email address" required="" type="email"/>
<button className="px-8 py-3.5 bg-zinc-900 text-white text-xs font-medium uppercase tracking-wide hover:bg-zinc-800 transition-colors whitespace-nowrap" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<a className="text-xl font-semibold tracking-tighter uppercase text-white mb-6 block" href="#">TMPRX</a>
<p className="text-xs font-light leading-relaxed mb-6 max-w-xs">Redefining modern luxury. Precision-engineered timepieces designed for the contemporary individual.</p>
<div className="flex space-x-5">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-xs font-medium tracking-wider uppercase mb-5">Shop</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">All Watches</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Automatic Series</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Chronographs</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Premium Straps</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs font-medium tracking-wider uppercase mb-5">Support</h4>
<ul className="space-y-3 text-xs font-light">
<li><a className="hover:text-amber-500 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Warranty Info</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs font-medium tracking-wider uppercase mb-5">Contact</h4>
<ul className="space-y-4 text-xs font-light">
<li className="flex items-start space-x-3">
<iconify-icon className="mt-0.5 text-zinc-500" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>123 Horology Avenue<br/>New York, NY 10001</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-zinc-500" icon="solar:letter-linear" width="16"></iconify-icon>
<a className="hover:text-amber-500 transition-colors" href="mailto:concierge@temprix.com">concierge@temprix.com</a>
</li>
</ul>
</div>
</div>

<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] font-light tracking-wide uppercase text-zinc-600">© 2024 Temprix Watches. All rights reserved.</p>
<div className="flex space-x-4 text-zinc-600">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" width="22"></iconify-icon>
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="22"></iconify-icon>
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
