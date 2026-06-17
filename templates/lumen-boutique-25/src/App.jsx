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
      

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-4 md:hidden">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:static left-0 pointer-events-none md:pointer-events-auto">
<a className="text-lg tracking-tighter font-semibold pointer-events-auto" href="#">LUMEN</a>
</div>
<nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Dresses</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Accessories</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">New Arrivals</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</nav>
<div className="flex items-center gap-5 text-zinc-500">
<button className="hover:text-zinc-900 transition-colors hidden sm:flex items-center">
<iconify-icon height="20" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors hidden sm:flex items-center">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="hover:text-zinc-900 transition-colors relative flex items-center">
<iconify-icon height="20" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute -top-1.5 -right-2 w-4 h-4 bg-zinc-900 text-white flex items-center justify-center rounded-full text-[10px] font-medium">2</span>
</button>
</div>
</div>
</header>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 flex flex-col items-center text-center">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400 mb-6">Spring Collection</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-6 max-w-4xl leading-tight">
            Elevate your everyday <br className="hidden sm:block"/>with curated elegance.
        </h1>
<p className="text-base text-zinc-500 mb-10 max-w-xl">
            Discover our meticulously sourced collection of boutique dresses and artisanal accessories, designed for the modern silhouette.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-md hover:bg-zinc-800 transition-colors shadow-sm" href="#">
                Shop Dresses
            </a>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-md hover:bg-zinc-50 transition-colors shadow-sm" href="#">
                Explore Accessories
            </a>
</div>
<div className="mt-16 w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden relative group bg-zinc-100 shadow-sm border border-zinc-200/50">
<img alt="Fashion Editorial" className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group relative h-[450px] rounded-xl overflow-hidden bg-zinc-100 block border border-zinc-200/50" href="#">
<img alt="Dresses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&amp;w=1983&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">The Dress Edit</h2>
<p className="text-sm text-zinc-300 font-medium">Boutique pieces for every occasion.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</a>
<a className="group relative h-[450px] rounded-xl overflow-hidden bg-zinc-100 block border border-zinc-200/50" href="#">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white mb-1">Fine Accessories</h2>
<p className="text-sm text-zinc-300 font-medium">Jewelry, bags, and subtle details.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Trending Pieces</h2>
<p className="text-sm text-zinc-500 mt-2">Curated selections updated weekly.</p>
</div>
<a className="hidden sm:flex text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors items-center gap-1 group" href="#">
                View all <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-[3/4] w-full rounded-lg bg-zinc-100 overflow-hidden mb-4 relative border border-zinc-200/60">
<img alt="Dress" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-zinc-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">New</div>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Silk Slip Midi Dress</h3>
<p className="text-xs text-zinc-500 mt-1">Noir</p>
</div>
<span className="text-sm font-medium text-zinc-900">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] w-full rounded-lg bg-zinc-100 overflow-hidden mb-4 relative border border-zinc-200/60">
<img alt="Earrings" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Pearl Drop Huggies</h3>
<p className="text-xs text-zinc-500 mt-1">14k Gold Filled</p>
</div>
<span className="text-sm font-medium text-zinc-900">$68</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] w-full rounded-lg bg-zinc-100 overflow-hidden mb-4 relative border border-zinc-200/60">
<img alt="Dress" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-zinc-100/90 backdrop-blur-md text-zinc-600 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">Sold Out</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-500">Linen Wrap Maxi</h3>
<p className="text-xs text-zinc-400 mt-1">Oat</p>
</div>
<span className="text-sm font-medium text-zinc-400 line-through">$180</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] w-full rounded-lg bg-zinc-100 overflow-hidden mb-4 relative border border-zinc-200/60">
<img alt="Bag" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1915&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center text-zinc-900 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:bag-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Structured Mini Tote</h3>
<p className="text-xs text-zinc-500 mt-1">Vegan Leather</p>
</div>
<span className="text-sm font-medium text-zinc-900">$210</span>
</div>
</div>
</div>
<div className="mt-10 sm:hidden flex justify-center">
<a className="text-sm font-medium text-zinc-700 bg-white border border-zinc-200 px-6 py-2.5 rounded-md hover:bg-zinc-50 transition-colors w-full text-center shadow-sm" href="#">View all products</a>
</div>
</section>

<section className="border-t border-zinc-200/60 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 border border-zinc-100">
<iconify-icon className="text-zinc-600" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Complimentary Shipping</h3>
<p className="text-xs text-zinc-500">On all domestic orders over $150.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 border border-zinc-100">
<iconify-icon className="text-zinc-600" icon="solar:refresh-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Seamless Returns</h3>
<p className="text-xs text-zinc-500">30-day return policy for store credit.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-4 border border-zinc-100">
<iconify-icon className="text-zinc-600" icon="solar:shield-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1">Artisanal Quality</h3>
<p className="text-xs text-zinc-500">Ethically sourced, crafted to last.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200/60 bg-[#FAFAFA] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-lg tracking-tighter font-semibold block mb-4">LUMEN</span>
<p className="text-sm text-zinc-500 mb-6 max-w-xs">A modern boutique blending minimalist apparel with statement accessories for the discerning eye.</p>
<form className="flex gap-2 max-w-sm">
<div className="relative flex-1">
<input className="w-full appearance-none rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 transition-shadow shadow-sm" placeholder="Subscribe to our newsletter" type="email"/>
</div>
<button className="flex-shrink-0 bg-zinc-900 text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" type="submit">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">All Dresses</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Jewelry</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Handbags</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Collections</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200/60 gap-4">
<p className="text-xs text-zinc-400">© 2024 Lumen Studio. All rights reserved.</p>
<div className="flex gap-6 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
