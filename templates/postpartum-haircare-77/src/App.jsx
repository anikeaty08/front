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
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
// Palette extracted from "Oila" image reference
cream: {
DEFAULT: '#FDFBF7', // Main background
50: '#FFFEFC',
100: '#F9F7F0',
200: '#F0EEE6',
900: '#DCD9D0',
},
olive: {
DEFAULT: '#1E3329', // Primary Dark / Text
light: '#2F483A',
dark: '#14241C',
50: '#F2F5F3',
100: '#E4E9E6',
},
sage: {
DEFAULT: '#D1DCD5', // Secondary backgrounds
light: '#E8EFE9',
dark: '#A3B5A8',
},
coral: {
DEFAULT: '#FF9270', // Buttons / Accents
hover: '#F08160',
light: '#FFDDCF',
},
mustard: {
DEFAULT: '#EBCB8B', // Stars
}
},
backgroundImage: {
'wavy-pattern': "url('data:image/svg+xml,%3Csvg width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\' xmlns=\\'http://www.w3.org/2000/svg\\' %3E%3Cpath d=\\'M20 20 C 10 10 30 10 20 0 C 10 -10 30 -10 20 -20\\' stroke=\\'%23D1DCD5\\' fill=\\'none\\' /%3E%3C/svg%3E')",
}
}
}
}



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
      

<header className="bg-cream/95 backdrop-blur-sm sticky top-0 z-50 border-b border-olive-100">
<nav className="container mx-auto px-6 py-5 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-coral"></div>
<div className="text-3xl font-serif font-bold text-olive tracking-tight">ThickTails</div>
</div>

<div className="hidden md:flex items-center gap-10 text-sm font-medium text-olive/80">
<a className="hover:text-coral transition-colors uppercase tracking-widest text-xs" href="#products">Products</a>
<a className="hover:text-coral transition-colors uppercase tracking-widest text-xs" href="#bundles">Routines</a>
<a className="hover:text-coral transition-colors uppercase tracking-widest text-xs" href="#about">Science</a>
<a className="hover:text-coral transition-colors uppercase tracking-widest text-xs" href="#testimonials">Stories</a>
</div>

<button className="bg-olive text-white px-6 py-3 rounded-none text-xs font-semibold tracking-widest hover:bg-olive-light transition-all uppercase">
                Contact Us
            </button>
</nav>
</header>

<section className="relative pt-12 lg:pt-20 pb-20 overflow-hidden">

<div className="absolute top-0 right-0 w-2/3 h-full bg-sage-light/30 -z-10 rounded-bl-[100px]"></div>
<div className="container mx-auto px-6 max-w-7xl">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 relative z-10">
<span className="text-coral font-medium tracking-widest text-xs uppercase mb-4 block">Postpartum Recovery</span>
<h1 className="text-6xl lg:text-7xl xl:text-8xl font-serif font-medium text-olive leading-[0.95] mb-8 tracking-tight">
                        Postpartum <br/>
<span className="italic font-light">Hair Changes</span>
</h1>
<p className="text-lg text-olive/70 mb-10 max-w-md leading-relaxed font-light">
                        Why shedding after birth is normal — and how to support your hair through recovery with confidence.
                    </p>
<div className="flex flex-col sm:flex-row gap-5">
<button className="bg-coral hover:bg-coral-hover text-white px-10 py-4 text-sm font-semibold tracking-widest shadow-lg shadow-coral/20 transition-all hover:-translate-y-1 uppercase">
                            Shop Now
                        </button>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-cream" src="https://placehold.co/100x100/e2e8f0/cbd5e1?text=U1"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-cream" src="https://placehold.co/100x100/e2e8f0/cbd5e1?text=U2"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-cream" src="https://placehold.co/100x100/e2e8f0/cbd5e1?text=U3"/>
</div>
<div className="flex flex-col">
<div className="flex text-mustard text-[10px] gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<span className="text-xs font-medium text-olive/60">Trusted by mums</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 relative mt-10 lg:mt-0">

<div className="absolute top-10 right-10 w-20 h-20 text-olive opacity-20">
<i className="w-full h-full stroke-[0.5]" data-lucide="flower-2"></i>
</div>

<div className="relative">

<div className="absolute -top-10 -right-4 w-3/4 h-[400px] bg-sage/30 rounded-t-full rounded-b-lg -z-10"></div>

<div className="relative z-10 overflow-hidden rounded-t-[150px] rounded-b-2xl shadow-xl">
<img alt="Mother and Child" className="w-full h-auto object-cover" src="https://placehold.co/600x700/D1DCD5/2F483A?text=Postpartum+Hair+Care"/>
</div>

<div className="absolute -bottom-10 -left-6 w-32 h-32 bg-cream rounded-full border border-olive/10 flex items-center justify-center p-2 shadow-lg z-20">
<div className="w-full h-full border border-dashed border-olive/30 rounded-full flex flex-col items-center justify-center text-center">
<span className="text-coral font-serif font-bold text-2xl">95%</span>
<span className="text-[10px] uppercase tracking-widest text-olive/60 font-semibold mt-1">Natural</span>
</div>
</div>

<div className="absolute top-1/2 -right-12 -translate-y-1/2 w-40 bg-white p-3 shadow-2xl rounded-lg rotate-3 z-20">
<img className="w-full rounded bg-cream-100" src="https://placehold.co/300x400/f8fafc/cbd5e1?text=Serum"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cream">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center mb-6 relative transition-transform group-hover:scale-110 duration-500">

<div className="absolute inset-1 border-2 border-dashed border-olive/20 rounded-full"></div>
<i className="w-8 h-8 text-olive stroke-1" data-lucide="flask-conical"></i>
</div>
<h3 className="font-serif font-medium text-lg text-olive mb-2">Biological Extracts</h3>
<p className="text-xs text-olive/60 max-w-[150px] leading-relaxed">Dermatologically tested for postpartum scalps.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center mb-6 relative transition-transform group-hover:scale-110 duration-500">
<div className="absolute inset-1 border-2 border-dashed border-olive/20 rounded-full"></div>
<i className="w-8 h-8 text-olive stroke-1" data-lucide="droplets"></i>
</div>
<h3 className="font-serif font-medium text-lg text-olive mb-2">Effective Cleansing</h3>
<p className="text-xs text-olive/60 max-w-[150px] leading-relaxed">Removes buildup without stripping natural oils.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center mb-6 relative transition-transform group-hover:scale-110 duration-500">
<div className="absolute inset-1 border-2 border-dashed border-olive/20 rounded-full"></div>
<i className="w-8 h-8 text-olive stroke-1" data-lucide="leaf"></i>
</div>
<h3 className="font-serif font-medium text-lg text-olive mb-2">Stimulates Healing</h3>
<p className="text-xs text-olive/60 max-w-[150px] leading-relaxed">Active botanical ingredients for regrowth.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-sage-light flex items-center justify-center mb-6 relative transition-transform group-hover:scale-110 duration-500">
<div className="absolute inset-1 border-2 border-dashed border-olive/20 rounded-full"></div>
<i className="w-8 h-8 text-olive stroke-1" data-lucide="check-circle"></i>
</div>
<h3 className="font-serif font-medium text-lg text-olive mb-2">Safety Assured</h3>
<p className="text-xs text-olive/60 max-w-[150px] leading-relaxed">Safe for ongoing use while breastfeeding.</p>
</div>
</div>
<div className="flex justify-center mt-16">
<a className="inline-block border-b border-coral text-coral text-xs font-bold tracking-widest uppercase pb-1 hover:text-olive hover:border-olive transition-all" href="#products">
                    View All Products
                </a>
</div>
</div>
</section>

<section className="py-24 bg-olive text-cream relative overflow-hidden">

<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/noise.png')]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
<div className="lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-white/20 rounded-full scale-105"></div>
<img alt="Happy Woman" className="rounded-full w-full h-auto aspect-square object-cover grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700" src="https://placehold.co/600x400/2F483A/E4E9E6?text=Real+Results"/>
<div className="absolute bottom-10 right-10 bg-coral w-16 h-16 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
<i className="w-6 h-6 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
<div className="lg:w-1/2 text-center lg:text-left">
<h2 className="text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                        See our recovery <br/> <span className="italic text-sage-light">collections &amp; stories</span> for you
                    </h2>
<p className="text-white/60 font-light text-lg mb-10 leading-relaxed">
                        Postpartum shedding can feel sudden. We are committed to serving you quality through science-backed, natural solutions that actually work.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<span className="block text-3xl font-serif text-coral mb-1">90</span>
<span className="text-xs uppercase tracking-widest text-white/50">Day Guarantee</span>
</div>
<div>
<span className="block text-3xl font-serif text-coral mb-1">10k+</span>
<span className="text-xs uppercase tracking-widest text-white/50">Mums Helped</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-olive-light border-t border-olive-dark">
<div className="container mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-serif text-cream text-center mb-16">Honest review from users</h2>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="bg-olive p-8 rounded-lg relative">
<div className="flex text-coral text-[10px] gap-0.5 mb-4">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-cream/80 text-sm font-light leading-relaxed italic mb-6">
                        "While truly organic hair dyes don't exist, you can buy safer, non-toxic hair care that lasts. From ThickTails with 100 percent trust and usage I recommend."
                    </p>
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://placehold.co/100x100/1E3329/FDFBF7?text=S"/>
<div>
<p className="text-cream text-xs font-semibold uppercase tracking-wider">Sarah</p>
<p className="text-white/40 text-[10px]">Verified Buyer</p>
</div>
<img className="h-10 w-auto ml-auto mix-blend-screen opacity-50" src="https://placehold.co/50x100/1E3329/FDFBF7?text=Product"/>
</div>
</div>

<div className="bg-olive p-8 rounded-lg relative">
<div className="flex text-coral text-[10px] gap-0.5 mb-4">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
<p className="text-cream/80 text-sm font-light leading-relaxed italic mb-6">
                        "The shedding scared me — this routine helped me feel normal again. After 6 weeks my hairline looked alive again with baby hairs."
                    </p>
<div className="flex items-center gap-4">
<img className="w-10 h-10 rounded-full object-cover border border-white/20" src="https://placehold.co/100x100/1E3329/FDFBF7?text=E"/>
<div>
<p className="text-cream text-xs font-semibold uppercase tracking-wider">Emma</p>
<p className="text-white/40 text-[10px]">Verified Buyer</p>
</div>
<img className="h-10 w-auto ml-auto mix-blend-screen opacity-50" src="https://placehold.co/50x100/1E3329/FDFBF7?text=Product"/>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="bg-coral hover:bg-coral-hover text-white px-8 py-3 text-xs font-bold tracking-widest uppercase transition-colors">
                    View All Reviews
                </button>
</div>
</div>
</section>

<section className="py-24 bg-cream relative" id="products">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<span className="text-coral font-medium tracking-widest text-xs uppercase mb-2 block">Our Collection</span>
<h2 className="text-4xl lg:text-5xl font-serif text-olive">Hair Style <br/> <span className="italic font-light">Beauty Product</span></h2>
</div>
<div className="hidden md:block">
<a className="text-olive text-xs font-bold tracking-widest uppercase border-b border-olive pb-1 hover:text-coral hover:border-coral transition-all" href="#">Shop All</a>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="bg-sage-light/50 rounded-t-[100px] rounded-b-lg p-8 relative mb-6 transition-all group-hover:bg-sage/40 h-[380px] flex items-center justify-center">
<span className="absolute top-4 right-4 bg-white px-2 py-1 text-[10px] font-bold tracking-widest uppercase text-olive rounded-sm">Best Seller</span>
<img className="h-64 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/200x300/f1f5f9/334155?text=Serum"/>
</div>
<div className="text-center">
<h3 className="font-serif text-xl text-olive mb-1">Stimulating Serum</h3>
<p className="text-xs text-olive/60 mb-3">Daily Follicle Activation</p>
<span className="text-lg font-bold text-olive">$23.19</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-cream-200 rounded-t-[100px] rounded-b-lg p-8 relative mb-6 transition-all group-hover:bg-cream-900/40 h-[380px] flex items-center justify-center">
<img className="h-64 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/200x300/f1f5f9/334155?text=Vitamins"/>
</div>
<div className="text-center">
<h3 className="font-serif text-xl text-olive mb-1">Growth Vitamins</h3>
<p className="text-xs text-olive/60 mb-3">Internal Support</p>
<span className="text-lg font-bold text-olive">$28.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-sage-light/50 rounded-t-[100px] rounded-b-lg p-8 relative mb-6 transition-all group-hover:bg-sage/40 h-[380px] flex items-center justify-center">
<img className="h-64 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/200x300/f1f5f9/334155?text=Shampoo"/>
</div>
<div className="text-center">
<h3 className="font-serif text-xl text-olive mb-1">Scalp Balance</h3>
<p className="text-xs text-olive/60 mb-3">Cleansing Duo</p>
<span className="text-lg font-bold text-olive">$32.50</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-cream-200 rounded-t-[100px] rounded-b-lg p-8 relative mb-6 transition-all group-hover:bg-cream-900/40 h-[380px] flex items-center justify-center">
<div className="absolute top-0 right-0 w-16 h-16 bg-coral rounded-bl-3xl flex items-center justify-center text-white text-xs font-bold z-10">
                            -20%
                        </div>
<img className="h-64 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500" src="https://placehold.co/200x300/f1f5f9/334155?text=Spray"/>
</div>
<div className="text-center">
<h3 className="font-serif text-xl text-olive mb-1">Thickening Spray</h3>
<p className="text-xs text-olive/60 mb-3">Volume &amp; Confidence</p>
<span className="text-lg font-bold text-olive">$24.00</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sage-light/30">
<div className="container mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-serif text-olive mb-16">Beauty product blogs and tips</h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="relative group cursor-pointer overflow-hidden rounded-lg">
<div className="aspect-[4/5] bg-gray-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/400x500/D1DCD5/2F483A?text=Blog+1"/>
</div>
<div className="absolute inset-0 bg-olive/20 group-hover:bg-olive/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 right-6 text-left">
<p className="text-white text-xs font-bold uppercase tracking-widest mb-2">Guide to Start</p>
<h3 className="text-white font-serif text-xl">Home remedies for broken hair</h3>
</div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg mt-0 md:-mt-8">
<div className="aspect-[4/5] bg-gray-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/400x500/EBCB8B/2F483A?text=Blog+2"/>
</div>
<div className="absolute inset-0 bg-olive/20 group-hover:bg-olive/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 right-6 text-left">
<p className="text-white text-xs font-bold uppercase tracking-widest mb-2">Routine</p>
<h3 className="text-white font-serif text-xl">Best Vitamins for Shedding</h3>
</div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg">
<div className="aspect-[4/5] bg-gray-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://placehold.co/400x500/FF9270/2F483A?text=Blog+3"/>
</div>
<div className="absolute inset-0 bg-olive/20 group-hover:bg-olive/10 transition-colors"></div>
<div className="absolute bottom-6 left-6 right-6 text-left">
<p className="text-white text-xs font-bold uppercase tracking-widest mb-2">Expert Advice</p>
<h3 className="text-white font-serif text-xl">Understanding Telogen Effluvium</h3>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-olive text-cream pt-20 pb-10 border-t border-olive-dark">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-2 h-2 rounded-full bg-coral"></div>
<div className="text-2xl font-serif font-bold tracking-tight">ThickTails</div>
</div>
<p className="text-white/60 text-sm leading-relaxed mb-6">
                        We are commited to serve you the quality. Quality assurance is our commitment.
                    </p>
<div className="flex gap-4">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-coral hover:border-coral transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="facebook"></i>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-coral hover:border-coral transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="instagram"></i>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-coral hover:border-coral transition-colors cursor-pointer">
<i className="w-4 h-4" data-lucide="twitter"></i>
</div>
</div>
</div>
<div>
<h4 className="font-serif text-lg mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/60">
<li><a className="hover:text-coral transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Our Blog</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-white/60">
<li><a className="hover:text-coral transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg mb-6">Support</h4>
<ul className="space-y-4 text-sm text-white/60">
<li><a className="hover:text-coral transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-coral transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
<p>© 2025 ThickTails. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
