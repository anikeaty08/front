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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#6B3E26',
secondary: '#D4A373',
cream: '#FAF3E0',
dark: '#3A2418',
muted: '#6F5A4C',
beige: '#E6D8C8',
success: '#5E8C61',
error: '#B85C5C',
surface: '#FFFFFF',
},
fontFamily: {
serif: ['Playfair Display', 'serif'],
sans: ['Lato', 'sans-serif'],
},
spacing: {
'128': '32rem',
},
letterSpacing: {
tighter: '-0.025em',
tight: '-0.015em',
}
}
}
}

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
      

<nav className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-beige shadow-sm transition-all duration-300">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10 h-[60px] flex items-center justify-between">

<button className="lg:hidden text-primary">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="font-serif text-2xl tracking-tighter text-primary font-medium flex items-center gap-2" href="#">
                OASIS
            </a>

<div className="hidden lg:flex items-center gap-8 text-muted text-sm font-medium tracking-wide">
<a className="hover:text-primary transition-colors" href="#home">Home</a>
<a className="hover:text-primary transition-colors" href="#shop">Shop</a>
<a className="hover:text-primary transition-colors" href="#about">Our Story</a>
<a className="hover:text-primary transition-colors" href="#blog">Journal</a>
<a className="hover:text-primary transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4 text-primary">
<button className="hover:scale-110 transition-transform duration-200">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="hover:scale-110 transition-transform duration-200 relative">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>
</button>
<button className="hidden md:block hover:scale-110 transition-transform duration-200">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex items-center" id="home">

<div className="absolute inset-0 z-0">
<img alt="Premium Dates" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-10 w-full">
<div className="max-w-2xl animate-fade-in-up">
<span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Handpicked from the Valley</span>
<h1 className="text-cream font-serif text-5xl lg:text-7xl leading-[1.1] tracking-tight mb-6">
                    Premium Organic <br/> <i className="font-light italic text-secondary">Dates</i> From Nature
                </h1>
<p className="text-cream/80 text-lg lg:text-xl font-light mb-8 max-w-lg leading-relaxed">
                    Experience the timeless taste of the desert. Sustainably grown, carefully harvested, and delivered fresh to your doorstep.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-primary hover:bg-[#5a321f] text-white px-8 py-4 rounded-lg text-sm tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03]">
                        Shop Collection
                    </button>
<button className="bg-transparent border border-cream/50 hover:bg-cream hover:text-primary text-cream px-8 py-4 rounded-lg text-sm tracking-wide transition-all duration-300">
                        View Our Farms
                    </button>
</div>
</div>
</div>
</header>

<section className="bg-white py-12 border-b border-beige">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-cream rounded-full text-secondary">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium text-primary mb-1">100% Organic</h4>
<p className="text-muted text-sm leading-relaxed">Certified organic farming with zero pesticides.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-cream rounded-full text-secondary">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium text-primary mb-1">Premium Quality</h4>
<p className="text-muted text-sm leading-relaxed">Handpicked and sorted for the finest texture.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-cream rounded-full text-secondary">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg font-medium text-primary mb-1">Eco Packaging</h4>
<p className="text-muted text-sm leading-relaxed">Sustainable boxes that keep fruit fresh.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cream" id="shop">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-10">
<div>
<h2 className="font-serif text-3xl lg:text-4xl text-primary mb-3">Our Collection</h2>
<p className="text-muted font-light">The finest harvest of the season.</p>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<button className="flex items-center gap-2 text-sm text-primary font-medium border border-beige bg-white px-4 py-2 rounded-lg hover:border-primary transition-colors">
<span>Filter</span>
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
</button>
<div className="relative group">
<button className="flex items-center gap-2 text-sm text-primary font-medium border border-beige bg-white px-4 py-2 rounded-lg hover:border-primary transition-colors">
<span>Sort by: Popular</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10">

<aside className="hidden md:block md:col-span-3 lg:col-span-3 space-y-8">
<div>
<h3 className="font-serif text-lg text-primary mb-4">Categories</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox w-5 h-5 border-2 border-beige rounded appearance-none transition-all" type="checkbox"/>
<span className="text-muted group-hover:text-primary transition-colors text-sm">Medjool Dates</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox w-5 h-5 border-2 border-beige rounded appearance-none transition-all" type="checkbox"/>
<span className="text-muted group-hover:text-primary transition-colors text-sm">Ajwa Dates</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox w-5 h-5 border-2 border-beige rounded appearance-none transition-all" type="checkbox"/>
<span className="text-muted group-hover:text-primary transition-colors text-sm">Deglet Noor</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox w-5 h-5 border-2 border-beige rounded appearance-none transition-all" type="checkbox"/>
<span className="text-muted group-hover:text-primary transition-colors text-sm">Stuffed Dates</span>
</label>
</div>
</div>
<div>
<h3 className="font-serif text-lg text-primary mb-4">Price Range</h3>
<input className="w-full" max="100" min="0" type="range"/>
<div className="flex justify-between text-xs text-muted mt-2 font-medium">
<span>$0</span>
<span>$100+</span>
</div>
</div>
</aside>

<div className="col-span-1 md:col-span-9 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 relative flex flex-col h-full border border-beige/30">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100">
<span className="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10">Organic</span>
<button className="absolute top-3 right-3 text-white mix-blend-difference hover:text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Royal Medjool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<button className="absolute bottom-3 right-3 bg-white text-primary p-2 rounded-full shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<p className="text-xs text-secondary font-medium uppercase tracking-wide">Jordan Valley</p>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-muted font-sans">4.9</span>
</div>
</div>
<h3 className="font-serif text-lg text-primary font-medium mb-1 group-hover:text-secondary transition-colors">Royal Medjool Box</h3>
<div className="flex items-center justify-between mt-auto pt-2">
<span className="text-primary font-semibold text-lg">$24.00</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 relative flex flex-col h-full border border-beige/30">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100">
<img alt="Ajwa Dates" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 bg-white text-primary p-2 rounded-full shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<p className="text-xs text-secondary font-medium uppercase tracking-wide">Madina</p>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-muted font-sans">5.0</span>
</div>
</div>
<h3 className="font-serif text-lg text-primary font-medium mb-1 group-hover:text-secondary transition-colors">Premium Ajwa</h3>
<div className="flex items-center justify-between mt-auto pt-2">
<span className="text-primary font-semibold text-lg">$32.00</span>
</div>
</div>
</div>

<div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 relative flex flex-col h-full border border-beige/30">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-gray-100">
<span className="absolute top-3 left-3 bg-dark/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10">Best Seller</span>
<img alt="Deglet Noor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 bg-white text-primary p-2 rounded-full shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div>
<div className="flex justify-between items-start mb-1">
<p className="text-xs text-secondary font-medium uppercase tracking-wide">Tunisia</p>
<div className="flex items-center gap-1 text-amber-400 text-xs">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<span className="text-muted font-sans">4.8</span>
</div>
</div>
<h3 className="font-serif text-lg text-primary font-medium mb-1 group-hover:text-secondary transition-colors">Golden Deglet Noor</h3>
<div className="flex items-center justify-between mt-auto pt-2">
<span className="text-primary font-semibold text-lg">$18.50</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-beige">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10">
<div className="flex flex-col lg:flex-row gap-12">

<div className="w-full lg:w-1/2 space-y-4">
<div className="w-full aspect-square bg-cream rounded-xl overflow-hidden shadow-sm">
<img alt="Product Main" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden border-2 border-primary cursor-pointer">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-beige cursor-pointer">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1615484477778-ca3b77940c25?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-beige cursor-pointer">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1628151015968-3a4429e9ef04?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<nav className="flex gap-2 text-xs text-muted mb-4">
<a className="hover:text-primary" href="#">Home</a>
<span>/</span>
<a className="hover:text-primary" href="#">Shop</a>
<span>/</span>
<span className="text-primary font-medium">Royal Medjool</span>
</nav>
<h1 className="font-serif text-3xl lg:text-4xl text-primary font-medium mb-3">Royal Medjool Dates</h1>
<div className="flex items-center gap-4 mb-6">
<span className="text-2xl text-primary font-semibold">$24.00</span>
<div className="h-4 w-px bg-beige"></div>
<div className="flex items-center gap-1 text-amber-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
<span className="text-muted ml-2 font-sans text-xs">(124 Reviews)</span>
</div>
</div>
<p className="text-muted leading-relaxed mb-8 font-light">
                        Known as the "King of Dates", our Royal Medjool dates are large, plump, and incredibly soft with a rich, caramel-like flavor. Naturally sweet and packed with fiber, they are the perfect healthy indulgence.
                    </p>

<div className="space-y-6 mb-8">
<div>
<span className="text-sm font-medium text-primary mb-2 block">Weight</span>
<div className="flex gap-3">
<button className="px-4 py-2 border-2 border-primary text-primary rounded-md text-sm font-medium bg-cream/30">500g</button>
<button className="px-4 py-2 border border-beige text-muted rounded-md text-sm hover:border-primary hover:text-primary transition-colors">1kg</button>
<button className="px-4 py-2 border border-beige text-muted rounded-md text-sm hover:border-primary hover:text-primary transition-colors">2kg</button>
</div>
</div>
<div>
<span className="text-sm font-medium text-primary mb-2 block">Quantity</span>
<div className="flex items-center w-32 border border-beige rounded-lg h-10">
<button className="w-10 h-full flex items-center justify-center text-muted hover:text-primary hover:bg-cream rounded-l-lg transition-colors">-</button>
<input className="w-full h-full text-center text-primary font-medium outline-none border-x border-beige text-sm" readonly="" type="text" value="1"/>
<button className="w-10 h-full flex items-center justify-center text-muted hover:text-primary hover:bg-cream rounded-r-lg transition-colors">+</button>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 mb-10">
<button className="flex-1 bg-primary text-white h-12 rounded-lg font-medium tracking-wide hover:bg-[#5a321f] transition-all hover:scale-[1.02] shadow-md flex items-center justify-center gap-2">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
                            Add to Cart
                        </button>
<button className="flex-none w-12 h-12 border border-beige rounded-lg flex items-center justify-center text-primary hover:bg-cream transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
</div>

<div className="border-t border-beige pt-6">
<div className="flex gap-8 border-b border-beige mb-4 pb-2">
<button className="text-primary font-medium border-b-2 border-primary pb-2 -mb-2.5">Description</button>
<button className="text-muted hover:text-primary transition-colors pb-2">Nutrition</button>
<button className="text-muted hover:text-primary transition-colors pb-2">Shipping</button>
</div>
<div className="text-sm text-muted leading-relaxed">
<ul className="list-disc pl-5 space-y-1 mt-4">
<li>Origin: Jordan Valley</li>
<li>Type: Soft, semi-dry</li>
<li>Taste: Sweet caramel notes</li>
<li>Storage: Keep refrigerated for up to 6 months</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cream border-t border-beige">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10">
<h2 className="font-serif text-3xl text-primary mb-8">Shopping Cart</h2>
<div className="flex flex-col lg:flex-row gap-8">

<div className="lg:w-2/3 bg-white rounded-xl shadow-sm p-6">
<div className="hidden md:grid grid-cols-12 text-xs font-medium text-muted uppercase tracking-wider border-b border-beige pb-4 mb-4">
<div className="col-span-6">Product</div>
<div className="col-span-2 text-center">Price</div>
<div className="col-span-2 text-center">Quantity</div>
<div className="col-span-2 text-right">Total</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center border-b border-beige pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
<div className="col-span-1 md:col-span-6 flex gap-4">
<div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h4 className="font-serif text-primary font-medium">Royal Medjool Box</h4>
<p className="text-xs text-muted mt-1">500g</p>
<button className="text-xs text-error mt-2 hover:underline flex items-center gap-1">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Remove
                                </button>
</div>
</div>
<div className="col-span-1 md:col-span-2 text-left md:text-center font-medium text-primary">$24.00</div>
<div className="col-span-1 md:col-span-2 flex justify-start md:justify-center">
<div className="flex items-center w-24 h-8 border border-beige rounded">
<button className="w-8 h-full text-muted hover:bg-cream">-</button>
<input className="w-8 h-full text-center text-xs outline-none" readonly="" type="text" value="2"/>
<button className="w-8 h-full text-muted hover:bg-cream">+</button>
</div>
</div>
<div className="col-span-1 md:col-span-2 text-left md:text-right font-semibold text-primary">$48.00</div>
</div>
</div>

<div className="lg:w-1/3">
<div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
<h3 className="font-serif text-lg text-primary mb-4">Order Summary</h3>
<div className="space-y-3 text-sm text-muted border-b border-beige pb-4 mb-4">
<div className="flex justify-between">
<span>Subtotal</span>
<span className="text-primary">$48.00</span>
</div>
<div className="flex justify-between">
<span>Shipping</span>
<span className="text-success">Free</span>
</div>
<div className="flex justify-between">
<span>Tax</span>
<span className="text-primary">$2.40</span>
</div>
</div>
<div className="flex justify-between text-lg font-semibold text-primary mb-6">
<span>Total</span>
<span>$50.40</span>
</div>
<button className="w-full bg-primary text-white h-12 rounded-lg font-medium tracking-wide hover:bg-[#5a321f] transition-all shadow-md">
                            Proceed to Checkout
                        </button>
<div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted">
<iconify-icon className="text-success" icon="solar:shield-check-linear"></iconify-icon>
                            Secure Checkout
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-beige">
<div className="max-w-[800px] mx-auto px-5">
<div className="text-center mb-10">
<h2 className="font-serif text-3xl text-primary mb-2">Checkout</h2>
<div className="flex items-center justify-center gap-2 text-sm text-muted">
<span className="text-primary font-medium">Shipping</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
<span>Payment</span>
<iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
<span>Review</span>
</div>
</div>
<form className="space-y-8">

<div className="space-y-4">
<h3 className="font-serif text-lg text-primary">Contact Information</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="Email Address" type="email"/>
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="Phone Number" type="tel"/>
</div>
</div>

<div className="space-y-4">
<h3 className="font-serif text-lg text-primary">Shipping Address</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="First Name" type="text"/>
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="Last Name" type="text"/>
</div>
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="Address Line 1" type="text"/>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="City" type="text"/>
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="State/Province" type="text"/>
<input className="col-span-2 md:col-span-1 w-full h-12 px-4 rounded-md border border-beige focus:border-secondary focus:ring-1 focus:ring-secondary outline-none text-primary placeholder:text-muted/60 transition-all bg-cream/20" placeholder="Zip Code" type="text"/>
</div>
</div>

<div className="space-y-4">
<h3 className="font-serif text-lg text-primary">Payment</h3>
<div className="border border-beige rounded-lg overflow-hidden">
<div className="p-4 border-b border-beige bg-cream/30 flex items-center gap-3">
<input checked="" className="accent-primary w-4 h-4" name="payment" type="radio"/>
<span className="text-sm font-medium text-primary">Credit Card</span>
<div className="ml-auto flex gap-2 text-muted">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-4 bg-white grid gap-4">
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary outline-none bg-cream/10" placeholder="Card Number" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary outline-none bg-cream/10" placeholder="MM/YY" type="text"/>
<input className="w-full h-12 px-4 rounded-md border border-beige focus:border-secondary outline-none bg-cream/10" placeholder="CVC" type="text"/>
</div>
</div>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-primary text-white h-12 rounded-lg font-medium tracking-wide hover:bg-[#5a321f] transition-all shadow-md" type="button">
                        Pay $50.40
                    </button>
</div>
</form>
</div>
</section>

<section className="py-20 bg-cream relative overflow-hidden" id="about">
<div className="absolute top-0 right-0 w-1/3 h-full bg-[#E8DCC8] opacity-20 -skew-x-12 transform translate-x-20"></div>
<div className="max-w-[1200px] mx-auto px-5 lg:px-10 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">Our Heritage</span>
<h2 className="font-serif text-4xl text-primary mb-6">Cultivating Tradition <br/>Since 1985</h2>
<p className="text-muted leading-relaxed mb-6 font-light">
                        Nestled in the sun-drenched valleys of the Middle East, our family farms have been dedicated to growing the finest organic dates for three generations. We believe in sustainable farming that honors the earth and provides the purest nutrition.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div>
<span className="block text-3xl font-serif text-primary">35+</span>
<span className="text-sm text-muted">Years of Farming</span>
</div>
<div>
<span className="block text-3xl font-serif text-primary">10k+</span>
<span className="text-sm text-muted">Happy Customers</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-sm font-medium" href="#">
                        Read Full Story <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<img className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-64 object-cover rounded-lg shadow-md" src="https://images.unsplash.com/photo-1506459225024-1428097a7e18?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-dark text-cream pt-20 pb-10">
<div className="max-w-[1200px] mx-auto px-5 lg:px-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<h2 className="font-serif text-2xl tracking-tight mb-6">OASIS</h2>
<p className="text-cream/60 text-sm leading-relaxed mb-6">
                        Bringing the ancient superfood of the desert to modern tables. Organic, ethical, and exquisitely delicious.
                    </p>
<div className="flex gap-4">
<a className="text-cream/60 hover:text-secondary transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-cream/60 hover:text-secondary transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-cream/60 hover:text-secondary transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="font-serif text-lg mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-cream/60">
<li><a className="hover:text-cream transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Medjool Dates</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Ajwa Dates</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Gift Boxes</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6">Company</h4>
<ul className="space-y-3 text-sm text-cream/60">
<li><a className="hover:text-cream transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Wholesale</a></li>
<li><a className="hover:text-cream transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="font-serif text-lg mb-6">Stay Updated</h4>
<p className="text-cream/60 text-sm mb-4">Subscribe for harvest updates and exclusive offers.</p>
<form className="flex gap-2">
<input className="w-full bg-cream/10 border border-cream/20 rounded px-3 py-2 text-sm text-cream outline-none focus:border-secondary transition-colors placeholder:text-cream/40" placeholder="Email address" type="email"/>
<button className="bg-secondary text-dark font-medium px-4 rounded hover:bg-white transition-colors" type="submit">Go</button>
</form>
</div>
</div>
<div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-cream/40 text-xs">© 2023 Oasis Dates. All rights reserved.</p>
<div className="flex gap-6 text-cream/40 text-xs">
<a className="hover:text-cream" href="#">Privacy Policy</a>
<a className="hover:text-cream" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
