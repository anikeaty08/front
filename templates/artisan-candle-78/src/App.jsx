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
      

<div className="bg-zinc-900 text-white text-xs py-2 text-center tracking-widest uppercase font-medium">
        Complimentary shipping on all orders over $150
    </div>

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center md:hidden">
<button className="text-zinc-800 hover:text-zinc-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Maison</a>
</div>

<div className="flex-shrink-0 flex items-center justify-center">
<a className="text-2xl font-serif font-medium tracking-tight text-zinc-900 uppercase" href="#">
                        Cleopatra
                    </a>
</div>

<div className="flex items-center space-x-6">
<button className="text-zinc-800 hover:text-zinc-600 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<a className="hidden md:block text-zinc-800 hover:text-zinc-600 transition-colors" href="#">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
<button className="text-zinc-800 hover:text-zinc-600 transition-colors relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-zinc-900 rounded-full"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative w-full h-[85vh] overflow-hidden bg-zinc-100">
<img alt="Luxury Perfume" className="absolute inset-0 w-full h-full object-cover object-center opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent"></div>
<div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-24 sm:pb-32 items-center text-center">
<span className="text-white text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 opacity-90">The Royal Collection</span>
<h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight mb-6 leading-[1.1]">
                Essence of <br/> Eternity
            </h1>
<p className="text-zinc-200 text-sm sm:text-base max-w-lg mb-10 font-light leading-relaxed">
                Discover scents crafted for the modern deity. A symphony of rare ingredients blended to perfection in Grasse, France.
            </p>
<a className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-zinc-900 text-sm uppercase tracking-widest overflow-hidden transition-all hover:bg-zinc-200" href="#">
<span className="relative z-10">Explore Fragrances</span>
</a>
</div>
</div>

<div className="w-full bg-white border-b border-zinc-100 overflow-hidden py-4">
<div className="flex items-center space-x-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<span>Authentic Niche Perfume</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Authorized Retailer</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
<span>Worldwide Shipping</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:medal-ribbon-linear" width="16"></iconify-icon>
<span>Premium Quality</span>
</div>

<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<span>Authentic Niche Perfume</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span>Authorized Retailer</span>
</div>
<div className="flex items-center space-x-2 text-zinc-500 text-xs uppercase tracking-widest">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
<span>Worldwide Shipping</span>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl sm:text-4xl font-serif text-zinc-900 tracking-tight">Curated Selection</h2>
<p className="mt-2 text-zinc-500 text-sm">Most covetted scents of the season.</p>
</div>
<a className="hidden sm:flex items-center text-sm text-zinc-900 border-b border-zinc-300 pb-0.5 hover:border-zinc-900 transition-colors" href="#">
                View All
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-50 overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-white/90 backdrop-blur-sm px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-900">Best Seller</span>
</div>
<button className="absolute bottom-4 right-4 bg-white/90 p-2 text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-lg font-serif text-zinc-900 tracking-tight group-hover:text-zinc-600 transition-colors">Santal Noir</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Le Labo Style</p>
<p className="text-sm font-medium text-zinc-900 pt-1">$280.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-50 overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-white/90 p-2 text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-lg font-serif text-zinc-900 tracking-tight group-hover:text-zinc-600 transition-colors">Rose D'Arabie</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Armani Prive</p>
<p className="text-sm font-medium text-zinc-900 pt-1">$310.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-50 overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="bg-zinc-900 text-white px-2 py-1 text-[10px] uppercase tracking-wider">New</span>
</div>
<button className="absolute bottom-4 right-4 bg-white/90 p-2 text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-lg font-serif text-zinc-900 tracking-tight group-hover:text-zinc-600 transition-colors">Oud Wood</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Tom Ford</p>
<p className="text-sm font-medium text-zinc-900 pt-1">$295.00</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-50 overflow-hidden mb-4">
<img alt="Perfume" className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-white/90 p-2 text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-900 hover:text-white">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<h3 className="text-lg font-serif text-zinc-900 tracking-tight group-hover:text-zinc-600 transition-colors">Baccarat Rouge</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wide">Maison Francis</p>
<p className="text-sm font-medium text-zinc-900 pt-1">$350.00</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2">
<div className="relative h-[600px] group overflow-hidden">
<img alt="Woman" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-zinc-900/10 transition-colors"></div>
<div className="absolute bottom-12 left-12 text-white">
<h3 className="text-4xl font-serif tracking-tight mb-4">Pour Elle</h3>
<a className="inline-flex items-center text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-zinc-200 transition-colors" href="#">
                    Shop Women
                </a>
</div>
</div>
<div className="relative h-[600px] group overflow-hidden">
<img alt="Man" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-zinc-900/10 transition-colors"></div>
<div className="absolute bottom-12 left-12 text-white">
<h3 className="text-4xl font-serif tracking-tight mb-4">Pour Homme</h3>
<a className="inline-flex items-center text-sm uppercase tracking-widest border-b border-white pb-1 hover:text-zinc-200 transition-colors" href="#">
                    Shop Men
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl font-serif text-zinc-900 tracking-tight mb-16">The Houses</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-2xl font-serif tracking-widest text-zinc-900">CREED</div>
<div className="text-2xl font-serif tracking-widest text-zinc-900">DIPTYQUE</div>
<div className="text-2xl font-serif tracking-widest text-zinc-900">BYREDO</div>
<div className="text-2xl font-serif tracking-widest text-zinc-900">AMOUAGE</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-200">
<div className="max-w-xl mx-auto px-4 text-center">
<iconify-icon className="text-zinc-400 mb-6" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-serif text-zinc-900 tracking-tight mb-4">Join the Inner Circle</h2>
<p className="text-zinc-500 text-sm mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 appearance-none border border-zinc-300 px-4 py-3 bg-white text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 text-sm rounded-none transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-zinc-900 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-zinc-800 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-zinc-900 text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-serif tracking-tight mb-6 block" href="#">CLEOPATRA</a>
<p className="text-zinc-400 text-sm leading-relaxed">
                    Vietnam's premier destination for authentic niche perfumes. Elevating your presence through the art of scent.
                </p>
<div className="flex space-x-4 mt-6">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-medium tracking-widest uppercase mb-6 text-zinc-500">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Men's Cologne</a></li>
<li><a className="hover:text-white transition-colors" href="#">Women's Perfume</a></li>
<li><a className="hover:text-white transition-colors" href="#">Unisex</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-widest uppercase mb-6 text-zinc-500">Support</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Authenticity Guarantee</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Store Locations</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-widest uppercase mb-6 text-zinc-500">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-3">
<iconify-icon className="flex-shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>123 Le Loi Street, District 1<br/>Ho Chi Minh City, Vietnam</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<span>+84 90 123 4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<span>concierge@cleopatra.vn</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-500">© 2023 Cleopatra Perfume. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-zinc-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
