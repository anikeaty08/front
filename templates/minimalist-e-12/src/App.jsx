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
      

<div className="bg-neutral-900 text-white text-xs text-center py-2 px-4 font-medium">
        Complimentary shipping and returns on all orders over $150.
    </div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center lg:hidden">
<button className="text-neutral-500 hover:text-neutral-900 focus:outline-none p-2 -ml-2">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="hidden lg:flex items-center space-x-8 w-1/3">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Shop</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Editorial</a>
</div>

<div className="flex-shrink-0 flex justify-center w-1/3 lg:w-auto">
<a className="text-lg font-semibold tracking-tighter uppercase" href="#">Tim Tim</a>
</div>

<div className="flex items-center justify-end space-x-4 sm:space-x-6 w-1/3">
<button className="text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-neutral-900 transition-colors relative flex items-center gap-2">
<span className="text-sm font-medium hidden sm:block">Cart</span>
<iconify-icon className="text-xl" icon="solar:bag-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-neutral-100 text-neutral-900 text-[10px] font-medium w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="order-2 lg:order-1 pr-0 lg:pr-12">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Spring / Summer 24</p>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 leading-tight mb-6">
                    Redefining the standard of daily wear.
                </h1>
<p className="text-base sm:text-lg text-neutral-500 mb-8 max-w-md leading-relaxed">
                    Explore our latest collection of meticulously crafted garments, designed for comfort, utility, and enduring style.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                        Shop Collection
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-neutral-200 text-neutral-900 text-sm font-medium hover:border-neutral-900 transition-colors" href="#">
                        View Lookbook
                    </a>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative aspect-[3/4] sm:aspect-square lg:aspect-[4/5] bg-neutral-100 overflow-hidden">
<img alt="Fashion Model" className="object-cover w-full h-full object-center" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="border-t border-neutral-100">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
<a className="group block p-8 lg:p-12 transition-colors hover:bg-neutral-50" href="#">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium tracking-tight">Womenswear</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Womenswear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</a>
<a className="group block p-8 lg:p-12 transition-colors hover:bg-neutral-50" href="#">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium tracking-tight">Menswear</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="aspect-square bg-neutral-100 overflow-hidden">
<img alt="Menswear" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</a>
<a className="group block p-8 lg:p-12 transition-colors hover:bg-neutral-50 md:col-span-2 lg:col-span-1" href="#">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium tracking-tight">Accessories</h3>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="aspect-[2/1] md:aspect-square bg-neutral-100 overflow-hidden">
<img alt="Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900">Trending Now</h2>
<p className="text-sm text-neutral-500 mt-2">Curated pieces for the current season.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-500 hover:border-neutral-500 transition-colors self-start sm:self-auto" href="#">
                View all products
            </a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer flex flex-col">
<div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden relative">
<img alt="Product" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 text-xs font-medium tracking-tight">New</div>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Relaxed Cotton Shirt</h3>
<p className="text-sm text-neutral-500 mt-1">White</p>
</div>
<p className="text-sm font-medium text-neutral-900">$125</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden relative">
<img alt="Product" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Pleated Wool Trousers</h3>
<p className="text-sm text-neutral-500 mt-1">Charcoal</p>
</div>
<p className="text-sm font-medium text-neutral-900">$180</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden relative">
<img alt="Product" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Oversized Blazer</h3>
<p className="text-sm text-neutral-500 mt-1">Camel</p>
</div>
<p className="text-sm font-medium text-neutral-900">$240</p>
</div>
</div>

<div className="group cursor-pointer flex flex-col">
<div className="aspect-[3/4] bg-neutral-100 mb-4 overflow-hidden relative">
<img alt="Product" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-900 hover:text-white">
<iconify-icon className="text-lg" icon="solar:cart-plus-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start gap-4">
<div>
<h3 className="text-sm font-medium text-neutral-900 group-hover:text-neutral-600 transition-colors">Ribbed Knit Sweater</h3>
<p className="text-sm text-neutral-500 mt-1">Oatmeal</p>
</div>
<p className="text-sm font-medium text-neutral-900">$165</p>
</div>
</div>
</div>
</section>

<section className="py-12 lg:py-0">
<div className="relative w-full h-[60vh] lg:h-[80vh] bg-neutral-900 flex items-center justify-center overflow-hidden">
<img alt="Editorial" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center px-4 max-w-2xl">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Conscious Design.</h2>
<p className="text-neutral-200 text-sm sm:text-base mb-8">We believe in creating pieces that last. Discover our commitment to sustainable materials and ethical production.</p>
<a className="inline-flex items-center justify-center px-6 py-3 bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#">
                    Read our story
                </a>
</div>
</div>
</section>

<section className="border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
<div className="pt-8 md:pt-0 px-4">
<iconify-icon className="text-2xl text-neutral-900 mb-4" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900 mb-2 tracking-tight">Free Worldwide Shipping</h4>
<p className="text-xs text-neutral-500">On all orders over $150.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<iconify-icon className="text-2xl text-neutral-900 mb-4" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900 mb-2 tracking-tight">30-Day Returns</h4>
<p className="text-xs text-neutral-500">Not quite right? Return it easily.</p>
</div>
<div className="pt-8 md:pt-0 px-4">
<iconify-icon className="text-2xl text-neutral-900 mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-900 mb-2 tracking-tight">Secure Checkout</h4>
<p className="text-xs text-neutral-500">Your payment information is safe.</p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter uppercase mb-6 block" href="#">Tim Tim</a>
<p className="text-sm text-neutral-500 mb-6 max-w-sm">Subscribe to receive updates, access to exclusive deals, and more.</p>

<form className="flex items-end border-b border-neutral-300 focus-within:border-neutral-900 transition-colors pb-2 max-w-md" onsubmit="event.preventDefault();">
<input className="w-full bg-transparent outline-none text-sm placeholder-neutral-400 text-neutral-900 pb-1" placeholder="Enter your email address" required="" type="email"/>
<button className="text-neutral-400 hover:text-neutral-900 transition-colors pb-1 pl-2" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>

<div>
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">All Products</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Womenswear</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Menswear</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 gap-4">
<p className="text-xs text-neutral-400">© 2024 TIM TIM. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
