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
      

<div className="bg-slate-900 text-white text-xs font-medium py-2 text-center tracking-wide">
        Complimentary global shipping on orders over $200
    </div>
<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex items-center md:hidden">
<button className="text-slate-600 hover:text-slate-900 p-2">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<nav className="hidden md:flex space-x-8 flex-1">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Shop</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">New</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
</nav>

<div className="flex-shrink-0 flex justify-center flex-1 md:flex-none">
<a className="text-xl font-semibold tracking-tighter uppercase" href="#">Atelier</a>
</div>

<div className="flex items-center justify-end space-x-4 flex-1">
<button className="text-slate-600 hover:text-slate-900 p-1 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<button className="hidden md:block text-slate-600 hover:text-slate-900 p-1 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear"></iconify-icon>
</button>
<button className="text-slate-600 hover:text-slate-900 p-1 transition-colors relative group">
<iconify-icon className="text-xl" icon="solar:cart-large-2-linear"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-slate-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium group-hover:bg-slate-700 transition-colors">2</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-slate-100">
<img alt="Hero Editorial" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">Define Your Uniform.</h1>
<p className="text-base md:text-lg font-medium text-white/90 mb-10 max-w-lg">Engineered for versatility. Crafted from premium materials to elevate your daily routine.</p>
<a className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-full text-sm font-semibold hover:bg-slate-100 transition-all hover:scale-[1.02]" href="#">
                Explore Collection
            </a>
</div>
</section>

<section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<a className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100" href="#">
<img alt="Men" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white text-lg md:text-xl font-semibold tracking-tight">Men</span>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100" href="#">
<img alt="Women" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white text-lg md:text-xl font-semibold tracking-tight">Women</span>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100" href="#">
<img alt="Outerwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white text-lg md:text-xl font-semibold tracking-tight">Outerwear</span>
</div>
</a>
<a className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100" href="#">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-white text-lg md:text-xl font-semibold tracking-tight">Accessories</span>
</div>
</a>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">New Arrivals</h2>
<p className="text-sm text-slate-500 mt-2">The latest expressions of our design philosophy.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-600 transition-colors group" href="#">
                Shop All <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Product 1" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Product 1 alt" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium py-3 rounded-lg hover:bg-white transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Merino Wool Crew</h3>
<p className="text-xs text-slate-500 mt-1">Oatmeal</p>
</div>
<span className="text-sm font-medium text-slate-900">$145</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Product 2" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Product 2 alt" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium py-3 rounded-lg hover:bg-white transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Structured Cotton Blazer</h3>
<p className="text-xs text-slate-500 mt-1">Navy</p>
</div>
<span className="text-sm font-medium text-slate-900">$295</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
<div className="absolute top-3 left-3 z-10 bg-white px-2 py-1 rounded text-[10px] font-semibold tracking-wider uppercase text-slate-900">Almost Gone</div>
<img alt="Product 3" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Product 3 alt" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100 grayscale" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium py-3 rounded-lg hover:bg-white transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Classic Oxford Shirt</h3>
<p className="text-xs text-slate-500 mt-1">Optic White</p>
</div>
<span className="text-sm font-medium text-slate-900">$110</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Product 4" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Product 4 alt" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" src="https://images.unsplash.com/photo-1594938328870-9623159c8c99?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium py-3 rounded-lg hover:bg-white transition-colors shadow-sm">
                            Quick Add
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Pleated Trouser</h3>
<p className="text-xs text-slate-500 mt-1">Charcoal</p>
</div>
<span className="text-sm font-medium text-slate-900">$185</span>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 md:py-32">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative aspect-[4/5] rounded-2xl overflow-hidden">
<img alt="Craftsmanship" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Designed for longevity. Crafted with intention.</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                        We reject the cycle of fast fashion. Our philosophy is rooted in creating foundational pieces that transcend seasonal trends. Every seam, fabric choice, and silhouette is scrutinized to ensure it holds up to the rigors of daily life while maintaining an effortless elegance.
                    </p>
<div className="grid grid-cols-2 gap-8 mt-10">
<div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-100">
<iconify-icon className="text-xl text-slate-900" icon="solar:leaf-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Sustainable Source</h4>
<p className="text-xs text-slate-500 leading-relaxed">Ethically sourced organic materials designed to reduce environmental impact.</p>
</div>
<div>
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-slate-100">
<iconify-icon className="text-xl text-slate-900" icon="solar:scissors-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-slate-900 mb-2">Artisan Crafted</h4>
<p className="text-xs text-slate-500 leading-relaxed">Produced in small batches by generational artisans in Europe.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-8">Recognized By</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">

<span className="text-xl font-serif tracking-widest uppercase">Vogue</span>
<span className="text-2xl font-bold tracking-tighter uppercase">GQ</span>
<span className="text-lg font-medium tracking-widest uppercase">Monocle</span>
<span className="text-xl font-semibold tracking-tight">HYPEBEAST</span>
</div>
<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex space-x-1 mb-4 text-slate-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"The attention to detail is unmatched. These have quickly become the pieces I reach for every single morning. Perfect fit right out of the box."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 mr-3">JD</div>
<span className="text-xs font-medium text-slate-900">James D. <span className="text-slate-400 font-normal block">Verified Buyer</span></span>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm">
<div className="flex space-x-1 mb-4 text-slate-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Finally, a brand that understands minimalism isn't just about simple design, but about the quality of the fabric holding it together."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 mr-3">SW</div>
<span className="text-xs font-medium text-slate-900">Sarah W. <span className="text-slate-400 font-normal block">Verified Buyer</span></span>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hidden md:block">
<div className="flex space-x-1 mb-4 text-slate-900">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 italic">"Worth every penny. The outerwear piece I bought has replaced three other jackets in my closet. Exceptionally versatile."</p>
<div className="flex items-center">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600 mr-3">MR</div>
<span className="text-xs font-medium text-slate-900">Michael R. <span className="text-slate-400 font-normal block">Verified Buyer</span></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 pl-4 sm:pl-6 lg:pl-8 overflow-hidden">
<div className="max-w-7xl mx-auto pr-4 sm:pr-6 lg:pr-8 mb-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Trending Now</h2>
<p className="text-sm text-slate-500 mt-2">Our most loved pieces this week.</p>
</div>
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 pr-4 sm:pr-6 lg:pr-8 snap-x">

<div className="flex-none w-[280px] snap-start group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Trending 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Heavyweight Hoodie</h3>
<div className="flex items-center mt-1 space-x-1 text-slate-900">
<iconify-icon className="text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium">4.9</span>
<span className="text-xs text-slate-400">(128)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$120</span>
</div>
</div>

<div className="flex-none w-[280px] snap-start group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Trending 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Leather Minimal Sneaker</h3>
<div className="flex items-center mt-1 space-x-1 text-slate-900">
<iconify-icon className="text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium">4.8</span>
<span className="text-xs text-slate-400">(84)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$210</span>
</div>
</div>

<div className="flex-none w-[280px] snap-start group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Trending 3" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Everyday Button Down</h3>
<div className="flex items-center mt-1 space-x-1 text-slate-900">
<iconify-icon className="text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium">4.9</span>
<span className="text-xs text-slate-400">(215)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$95</span>
</div>
</div>

<div className="flex-none w-[280px] snap-start group cursor-pointer">
<div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100 mb-4">
<img alt="Trending 4" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-slate-900">Tailored Overcoat</h3>
<div className="flex items-center mt-1 space-x-1 text-slate-900">
<iconify-icon className="text-[10px]" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium">5.0</span>
<span className="text-xs text-slate-400">(42)</span>
</div>
</div>
<span className="text-sm font-medium text-slate-900">$380</span>
</div>
</div>

<div className="flex-none w-4 sm:w-6 lg:w-8"></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="bg-slate-50 rounded-3xl overflow-hidden flex flex-col lg:flex-row">
<div className="lg:w-3/5 relative min-h-[500px] lg:min-h-full">
<img alt="Shop the look" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1511511450040-677116ff389e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-[40%] left-[60%] w-4 h-4 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse cursor-pointer">
<div className="w-2 h-2 bg-slate-900 rounded-full"></div>
</div>
</div>
<div className="lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
<span className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">Editorial</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">The City Edit</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed">Transition seamlessly from morning commute to evening engagements. Curated combinations for unpredictable days.</p>
<h3 className="text-sm font-medium text-slate-900 border-b border-slate-100 pb-2 mb-4">Shop the Look</h3>
<div className="space-y-4">

<a className="flex items-center group p-2 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<div className="w-16 h-20 rounded bg-slate-100 overflow-hidden mr-4 flex-shrink-0">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900">Merino Wool Crew</h4>
<p className="text-xs text-slate-500 mt-1">Oatmeal</p>
</div>
<span className="text-sm font-medium text-slate-900">$145</span>
</a>

<a className="flex items-center group p-2 hover:bg-slate-50 rounded-lg transition-colors" href="#">
<div className="w-16 h-20 rounded bg-slate-100 overflow-hidden mr-4 flex-shrink-0">
<img alt="Item" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900">Pleated Trouser</h4>
<p className="text-xs text-slate-500 mt-1">Charcoal</p>
</div>
<span className="text-sm font-medium text-slate-900">$185</span>
</a>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 px-4">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Join the Atelier</h2>
<p className="text-base text-white/70 mb-10">Subscribe to receive 10% off your first order, plus early access to new releases and exclusive events.</p>
<form className="relative max-w-md mx-auto group">
<input className="w-full bg-transparent border-b border-white/30 text-white text-base py-3 pl-0 pr-12 focus:outline-none focus:border-white transition-colors placeholder:text-white/40" placeholder="Email address" required="" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter uppercase mb-6 block" href="#">Atelier</a>
<p className="text-sm text-slate-500 mb-6 max-w-xs">Redefining modern essentials through purposeful design and uncompromising quality.</p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6 tracking-tight">Shop</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Men's Apparel</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Women's Apparel</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Accessories</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6 tracking-tight">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Track Order</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-6 tracking-tight">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms &amp; Privacy</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<p className="text-xs text-slate-400 mb-4 md:mb-0">© 2024 Atelier. All rights reserved.</p>
<div className="flex space-x-3 text-slate-400">
<iconify-icon className="text-2xl" icon="solar:card-linear"></iconify-icon>

<iconify-icon className="text-2xl" icon="solar:wallet-linear"></iconify-icon>
<iconify-icon className="text-2xl" icon="solar:banknotes-linear"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
