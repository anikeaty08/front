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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 flex items-center">
<div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Sparkxx Logo" className="h-8 w-auto brightness-200 contrast-100 grayscale hover:grayscale-0 transition-all duration-300" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/9fd15607-9d32-40bf-a6fa-3d1f57981c13.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#shop">Shop</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#outlets">Outlets</a>
<a className="text-sm font-medium text-white/70 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<button className="text-white/70 hover:text-white transition-colors relative group">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-600 rounded-full text-[10px] flex items-center justify-center font-bold">0</span>
</button>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="" poster="https://sparkxxfnb.com/wp-content/uploads/2025/07/fresh-Realistic-Restaurant-Cocktails-Promotion-Template.mp4">
<source src="https://sparkxxfnb.com/wp-content/uploads/2025/07/fresh-Realistic-Restaurant-Cocktails-Promotion-Template.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#030303]/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 animate-fade-in">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-white/60 text-xs font-medium tracking-wide uppercase">Worldwide Delivery Available</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
                Taste of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Authentic Ghana.</span>
</h1>
<p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
                Innovating Ghanaian snacks for a global market. We craft high-quality, authentic snacks blending tradition with modern excellence.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="group bg-white text-black px-8 py-3.5 rounded-full font-medium tracking-wide transition-all hover:scale-105 flex items-center justify-center gap-2" href="#shop">
                    Shop Now
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full font-medium tracking-wide text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center" href="#about">
                    Our Philosophy
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] relative" id="shop">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-2 tracking-tight">Our Collection</h2>
<p className="text-white/50">Premium snacks crafted with passion.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-orange-500 hover:text-orange-400 transition-colors" href="#">
                    View all products <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-panel rounded-2xl p-6 relative hover:border-orange-500/30 transition-all duration-500">
<div className="absolute top-4 right-4 bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded font-medium">Bestseller</div>
<div className="h-64 flex items-center justify-center overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-orange-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Tainers Original" className="h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/5.png"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Tainers Original</h3>
<p className="text-white/50 text-sm mb-4">Authentic Plantain Chips</p>
<span className="text-lg font-semibold text-white">₵15.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 relative hover:border-orange-500/30 transition-all duration-500">
<div className="h-64 flex items-center justify-center overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Tainers Naturally Sweet" className="h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/2.png"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Naturally Sweet</h3>
<p className="text-white/50 text-sm mb-4">Ripe Plantain Delight</p>
<span className="text-lg font-semibold text-white">₵15.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 text-white border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 relative hover:border-orange-500/30 transition-all duration-500">
<div className="h-64 flex items-center justify-center overflow-hidden mb-6 relative">
<div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Ye Sweet Potato" className="h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/1-1.png"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Ye Sweet Potato</h3>
<p className="text-white/50 text-sm mb-4">Premium Potato Chips</p>
<span className="text-lg font-semibold text-white">₵15.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 text-white border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 relative hover:border-orange-500/30 transition-all duration-500 md:col-span-2 lg:col-span-1">
<div className="h-64 flex items-center justify-center overflow-hidden mb-6 relative">
<img alt="Sprinkles Coconut" className="h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/4-1.png"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-white mb-1">Sprinkles Coconut</h3>
<p className="text-white/50 text-sm mb-4">Toasted Coconut Chips</p>
<span className="text-lg font-semibold text-white">₵25.00</span>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 text-white border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group glass-panel rounded-2xl p-6 relative hover:border-orange-500/30 transition-all duration-500 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row items-center gap-8">
<div className="h-64 w-full md:w-1/2 flex items-center justify-center overflow-hidden relative">
<img alt="Raznuts" className="h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/3-1.png"/>
</div>
<div className="w-full md:w-1/2">
<h3 className="text-2xl font-medium text-white mb-2">Raznuts Coated Peanuts</h3>
<p className="text-white/50 mb-6">Crunchy, flavorful coated peanuts perfect for any occasion. A Sparkxx favorite.</p>
<div className="flex items-center gap-6">
<span className="text-2xl font-semibold text-white">₵20.00</span>
<button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors">
                                Add to Cart
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-panel rounded-3xl overflow-hidden grid md:grid-cols-2 orange-glow">
<div className="relative h-96 md:h-auto">
<img alt="Gift Box" className="absolute inset-0 w-full h-full object-cover" src="https://sparkxxfnb.com/wp-content/uploads/2025/08/IMG_4275-1.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden"></div>
</div>
<div className="p-10 md:p-16 flex flex-col justify-center">
<span className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-4">Gifting Made Special</span>
<h2 className="text-4xl font-semibold text-white mb-6">Looking for the Perfect Gift?</h2>
<p className="text-white/60 mb-8 leading-relaxed">
                        Surprise someone special (or treat yourself!) with a variety box packed with your favorite snacks and a whole lot of love. Perfect for birthdays, celebrations, or just because—and yes, it comes with a sweet, personalized note.
                    </p>
<div>
<a className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors" href="#">
                            Shop Season's Treat
                            <iconify-icon icon="solar:gift-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight">Our Product <br/> Philosophy</h2>
<div className="space-y-6 text-white/60 text-lg font-light leading-relaxed">
<p>
                            Welcome to Sparkxx Foods &amp; Beverages. We are dedicated to crafting high-quality, authentic Ghanaian snacks that blend tradition with modern innovation.
                        </p>
<p className="border-l-2 border-orange-500 pl-6 text-white">
                            "Our commitment is rooted in preserving Ghanaian flavors while embracing modern production techniques."
                        </p>
<p>
                            Our commitment extends beyond delicious products to sustainable practices and community development.
                        </p>
</div>
<div className="mt-12 grid grid-cols-3 gap-4">
<div className="glass-panel p-4 rounded-xl text-center">
<iconify-icon className="text-orange-500 text-2xl mb-2" icon="solar:leaf-linear"></iconify-icon>
<div className="text-sm font-medium text-white">Natural</div>
</div>
<div className="glass-panel p-4 rounded-xl text-center">
<iconify-icon className="text-orange-500 text-2xl mb-2" icon="solar:heart-linear"></iconify-icon>
<div className="text-sm font-medium text-white">Authentic</div>
</div>
<div className="glass-panel p-4 rounded-xl text-center">
<iconify-icon className="text-orange-500 text-2xl mb-2" icon="solar:global-linear"></iconify-icon>
<div className="text-sm font-medium text-white">Global</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="rounded-2xl overflow-hidden h-64 border border-white/10">
<img alt="Ingredients" className="w-full h-full object-cover opacity-80" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/Untitled-design-14.png"/>
</div>
<div className="rounded-2xl overflow-hidden h-48 border border-white/10 relative group">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/The-Taste-the-Texture-and-that-oh-so-Sweet-Smell-of-a-fresh-batch-of-Original-Tainers-🤤-😋-…-ju.mp4"></video>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden h-48 border border-white/10 relative">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/Untitled-design-1.mp4"></video>
</div>
<div className="rounded-2xl overflow-hidden h-64 border border-white/10">
<img alt="Production" className="w-full h-full object-cover opacity-80" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/Untitled-design-15.png"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#030303] border-t border-white/5" id="outlets">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Find Us Nearby</h2>
<p className="text-white/50">Available at leading outlets across the country.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-orange-600 transition-colors">
<iconify-icon icon="solar:shop-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-6">Malls</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Shoprite
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Melcom
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Silverbird
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Marina
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Sneda &amp; Yenze Mall
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-green-600 transition-colors">
<iconify-icon icon="solar:health-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-6">Pharmacies</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> AddPharma
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Klas Pharmacy
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Equity Pharmacy
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Bedita Pharmacy
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Panacea Pharmacy
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl group hover:bg-white/5 transition-all">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-6 group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:gas-station-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-6">Filling Stations</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Shell
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Total (Baatsona, Osu)
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Goil (Haatso, Mallam)
                        </li>
<li className="flex items-center gap-3 text-white/60 text-sm">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Zen (Odorkor, Sowutuom)
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 bg-black border-y border-white/5 overflow-hidden">
<div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] w-max">

<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/9-1.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/1-2.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/2-3.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/7.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/6.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/5-2.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>

<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/9-1.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-64 rounded-xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/7.png"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon icon="logos:instagram-icon" width="32"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] pt-16 pb-8 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

<div>
<h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Contact Us</h3>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-white/60 text-sm">
<iconify-icon className="text-white mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
                            Atico – Bubuashie Annan Sebrebe Street, 38, Ghana
                        </li>
<li className="flex items-center gap-4 text-white/60 text-sm">
<iconify-icon className="text-white shrink-0" icon="solar:phone-linear"></iconify-icon>
                            +(233) 24 570 8706
                        </li>
<li className="flex items-center gap-4 text-white/60 text-sm">
<iconify-icon className="text-white shrink-0" icon="solar:letter-linear"></iconify-icon>
                            info@sparkxxfnb.com
                        </li>
</ul>
</div>

<div className="flex flex-col items-center text-center">
<img alt="Sparkxx Logo" className="h-16 w-auto brightness-200 contrast-100 grayscale mb-6" src="https://sparkxxfnb.com/wp-content/uploads/2025/07/9fd15607-9d32-40bf-a6fa-3d1f57981c13.png"/>
<p className="text-white/50 text-sm max-w-xs">
                         Sparkxx Foods &amp; Beverages.<br/>
                         Innovating Ghanaian Snacks for a Global Market.
                     </p>
</div>

<div className="flex flex-col items-center md:items-end">
<h3 className="text-white font-semibold text-lg mb-6 tracking-wide">Follow Us</h3>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="https://www.instagram.com/sparkxxfnb/" target="_blank">
<iconify-icon icon="cib:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="https://web.facebook.com/sparkxxfnb7" target="_blank">
<iconify-icon icon="cib:facebook-f"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all" href="https://x.com/sparkxxfnb7" target="_blank">
<iconify-icon icon="cib:twitter"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>Copyright © 2025 SparkxxFnb. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-500 transition-transform hover:-translate-y-1 z-50" href="#">
<iconify-icon icon="cib:whatsapp" width="28"></iconify-icon>
</a>

    </>
  );
}
