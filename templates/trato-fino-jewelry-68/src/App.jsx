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
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
gold: {
50: '#FBF7E6',
100: '#F5EEC6',
200: '#EAD888',
300: '#DFC24B',
400: '#D4AF37', // Classic Gold
500: '#B4942D',
600: '#8E7523',
900: '#3D320F',
},
onyx: '#050505',
charcoal: '#0A0A0A'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
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
      

<nav className="fixed top-0 w-full z-50 bg-onyx/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>

<a className="text-2xl font-serif tracking-widest text-white hover:text-gold-200 transition-colors duration-300 z-10" href="#">
                TRATO FINO
            </a>

<div className="hidden md:flex items-center space-x-12 text-xs uppercase tracking-widest font-light text-neutral-400">
<a className="hover:text-gold-300 transition-colors" href="#shop">Collections</a>
<a className="hover:text-gold-300 transition-colors" href="#new">New Arrivals</a>
<a className="hover:text-gold-300 transition-colors" href="#sell">Sell Your Jewelry</a>
<a className="hover:text-gold-300 transition-colors" href="#about">Maison</a>
</div>

<div className="flex items-center space-x-6 text-neutral-400">
<button className="hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="hover:text-white transition-colors relative group" onclick="document.getElementById('cart-drawer').classList.remove('translate-x-full')">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Luxury Jewelry Model" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-onyx/30 via-onyx/50 to-onyx"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 fade-in-up">
<p className="text-gold-200 text-xs tracking-[0.3em] uppercase mb-6">Fine Jewelry &amp; Rare Collections</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 tracking-tighter leading-[0.9]">
                Eternal <span className="italic font-light text-neutral-400">Allure</span>
</h1>
<p className="text-neutral-300 text-sm md:text-base font-light max-w-lg mx-auto mb-10 leading-relaxed">
                Discover a curated selection of exquisite pieces designed for the modern connoisseur. Refined elegance meets bold sensuality.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group relative px-8 py-3 overflow-hidden border border-white/20 hover:border-gold-400/50 transition-colors duration-500" href="#shop">
<span className="absolute inset-0 w-full h-full bg-white/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
<span className="relative text-sm text-white tracking-widest uppercase group-hover:text-gold-200">Shop Collection</span>
</a>
<a className="text-sm text-neutral-400 hover:text-white tracking-widest uppercase border-b border-transparent hover:border-white transition-all pb-1" href="#sell">
                    Book Appointment
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-onyx px-6" id="shop">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mb-2">Curated Selections</h2>
<p className="text-neutral-500 text-sm font-light">Handpicked for the distinguished.</p>
</div>
<a className="hidden md:flex items-center text-xs tracking-widest text-gold-400 hover:text-white transition-colors mt-4 md:mt-0" href="#">
                    VIEW ALL
                    <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<img alt="Gold Necklace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-gold-200 transition-colors">The Serpent Choker</h3>
<p className="text-neutral-500 text-xs tracking-wide">18k Gold, Emerald Eyes</p>
</div>
<span className="text-sm font-light text-neutral-300">$4,200</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<img alt="Diamond Ring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4">
<span className="text-[10px] bg-white text-black px-2 py-1 uppercase tracking-widest font-medium">New</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-gold-200 transition-colors">Solstice Band</h3>
<p className="text-neutral-500 text-xs tracking-wide">Platinum, VS1 Diamond</p>
</div>
<span className="text-sm font-light text-neutral-300">$8,500</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<img alt="Earrings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-gold-200 transition-colors">Lunar Drops</h3>
<p className="text-neutral-500 text-xs tracking-wide">White Gold, Pearl</p>
</div>
<span className="text-sm font-light text-neutral-300">$2,100</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-neutral-900 overflow-hidden mb-6">
<img alt="Bracelet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
<button className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Add to Cart</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-white tracking-tight mb-1 group-hover:text-gold-200 transition-colors">Onyx Cuff</h3>
<p className="text-neutral-500 text-xs tracking-wide">24k Gold Overlay</p>
</div>
<span className="text-sm font-light text-neutral-300">$3,400</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-charcoal border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
<img alt="Detail 1" className="col-span-2 w-full h-[400px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 2" className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1602751584552-8ba420552259?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<img alt="Detail 3" className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full lg:w-2/5 space-y-8">
<div>
<span className="text-gold-400 text-xs tracking-widest uppercase mb-2 block">Signature Collection</span>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">The Imperial Signet</h2>
<div className="flex items-center space-x-4 mt-4">
<span className="text-2xl text-white font-light">$12,500</span>
<span className="text-xs text-neutral-500 border border-neutral-800 px-2 py-1">In Stock</span>
</div>
</div>
<p className="text-neutral-400 font-light leading-relaxed">
                        Forged from solid 18k gold and inlaid with rare black onyx. A statement of power and refinement. Each piece is hand-finished by master artisans in our private atelier.
                    </p>

<div className="space-y-4">
<label className="text-xs uppercase tracking-widest text-neutral-500">Material</label>
<div className="flex space-x-4">
<button className="w-10 h-10 rounded-full border border-gold-400/50 bg-[#D4AF37] focus:ring-2 ring-offset-2 ring-offset-onyx ring-gold-400 transition-all"></button>
<button className="w-10 h-10 rounded-full border border-neutral-700 bg-[#E5E4E2] focus:ring-2 ring-offset-2 ring-offset-onyx ring-white transition-all opacity-50 hover:opacity-100"></button>
<button className="w-10 h-10 rounded-full border border-rose-900/50 bg-[#B76E79] focus:ring-2 ring-offset-2 ring-offset-onyx ring-rose-400 transition-all opacity-50 hover:opacity-100"></button>
</div>
</div>
<div className="pt-6 border-t border-white/10 flex gap-4">
<button className="flex-1 py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-gold-100 transition-colors">Add to Cart</button>
<button className="px-6 py-4 border border-white/20 text-white hover:border-gold-400 hover:text-gold-400 transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="sell">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neutral-900/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
<div className="self-center">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-6">Sell Your Treasures</h2>
<p className="text-neutral-400 font-light mb-8 max-w-md leading-relaxed">
                        We offer a private, secure, and transparent service for selling your fine jewelry and luxury timepieces. Schedule a private consultation with our appraisers.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify text-gold-400 mr-3" data-icon="lucide:check" data-width="16"></span>
                            Expert Appraisal
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify text-gold-400 mr-3" data-icon="lucide:check" data-width="16"></span>
                            Immediate Payment Offers
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify text-gold-400 mr-3" data-icon="lucide:check" data-width="16"></span>
                            Discreet &amp; Private Service
                        </li>
</ul>
</div>

<div className="bg-neutral-900/30 backdrop-blur-sm p-8 md:p-12 border border-white/5">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">First Name</label>
<input className="w-full bg-onyx border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-gold-600/50 transition-colors placeholder-neutral-700" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Last Name</label>
<input className="w-full bg-onyx border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-gold-600/50 transition-colors placeholder-neutral-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Email Address</label>
<input className="w-full bg-onyx border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-gold-600/50 transition-colors placeholder-neutral-700" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Item Description</label>
<textarea className="w-full bg-onyx border border-neutral-800 p-3 text-sm text-white focus:outline-none focus:border-gold-600/50 transition-colors placeholder-neutral-700" placeholder="Brand, Model, Condition, etc." rows="3"></textarea>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Preferred Date</label>
<input className="w-full bg-onyx border border-neutral-800 p-3 text-sm text-neutral-400 focus:outline-none focus:border-gold-600/50 transition-colors" type="date"/>
</div>
<div className="flex items-center space-x-3 pt-2">
<input className="appearance-none w-4 h-4 border border-neutral-700 checked:bg-gold-500 rounded-none cursor-pointer" id="terms" type="checkbox"/>
<label className="text-xs text-neutral-500" htmlFor="terms">I agree to the privacy policy and terms.</label>
</div>
<button className="w-full py-4 bg-gold-400/90 text-black font-medium text-xs uppercase tracking-widest hover:bg-gold-300 transition-all mt-4" type="submit">
                            Request Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-onyx text-center border-t border-white/5" id="about">
<div className="max-w-3xl mx-auto px-6">
<span className="iconify mx-auto text-gold-400 mb-6" data-icon="lucide:gem" data-width="32" style={{strokeWidth: '1'}}></span>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-8">Trato Fino</h2>
<p className="text-neutral-400 font-light text-lg leading-relaxed mb-12">
                Born from a desire to redefine modern luxury. We believe jewelry is not just adornment, but an extension of the self—a tangible memory, an investment in beauty. Our pieces are sourced globally and curated with an uncompromising eye for detail.
            </p>
<div className="flex justify-center space-x-8">
<div className="text-center">
<span className="block text-2xl font-serif text-white">2024</span>
<span className="text-xs text-neutral-600 uppercase tracking-widest">Established</span>
</div>
<div className="w-px bg-neutral-800 h-12"></div>
<div className="text-center">
<span className="block text-2xl font-serif text-white">NYC</span>
<span className="text-xs text-neutral-600 uppercase tracking-widest">Headquarters</span>
</div>
<div className="w-px bg-neutral-800 h-12"></div>
<div className="text-center">
<span className="block text-2xl font-serif text-white">100%</span>
<span className="text-xs text-neutral-600 uppercase tracking-widest">Authenticated</span>
</div>
</div>
</div>
</section>

<footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-serif tracking-widest text-white block mb-6" href="#">TRATO FINO</a>
<p className="text-neutral-500 text-sm font-light mb-6">
                        Refined jewelry for the modern era.
                    </p>
<div className="flex space-x-4 text-neutral-400">
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:instagram" data-width="20"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:facebook" data-width="20"></span>
<span className="iconify hover:text-white cursor-pointer transition-colors" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-gold-200 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Watches</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500 font-light">
<li><a className="hover:text-gold-200 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-gold-200 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs uppercase tracking-widest mb-6">Newsletter</h4>
<form className="flex flex-col space-y-4">
<input className="bg-onyx border border-neutral-800 text-sm p-3 text-white focus:outline-none focus:border-gold-600/50 placeholder-neutral-700" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black text-xs uppercase tracking-widest py-3 hover:bg-neutral-200 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600 font-light">
<p>© 2024 Trato Fino Jewelry. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-y-0 right-0 w-full md:w-[480px] bg-onyx z-[60] transform translate-x-full transition-transform duration-500 ease-in-out border-l border-white/10 shadow-2xl flex flex-col" id="cart-drawer">
<div className="flex items-center justify-between p-6 border-b border-white/5">
<h2 className="text-xl font-serif text-white tracking-tight">Your Selection</h2>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="document.getElementById('cart-drawer').classList.add('translate-x-full')">
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto p-6 space-y-6">
<div className="flex gap-4">
<div className="w-20 h-24 bg-neutral-800 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=987&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm text-white font-medium">The Serpent Choker</h3>
<span className="text-sm text-white">$4,200</span>
</div>
<p className="text-xs text-neutral-500 mb-4">18k Gold</p>
<div className="flex items-center space-x-4">
<div className="flex items-center border border-neutral-800">
<button className="px-2 text-neutral-400 hover:text-white">-</button>
<span className="text-xs text-white px-2">1</span>
<button className="px-2 text-neutral-400 hover:text-white">+</button>
</div>
<button className="text-xs text-neutral-500 underline hover:text-white">Remove</button>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 bg-charcoal p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-sm text-neutral-400 uppercase tracking-widest">Subtotal</span>
<span className="text-lg font-serif text-white">$4,200</span>
</div>
<form className="space-y-4 mb-6">
<h4 className="text-xs text-gold-400 uppercase tracking-widest mb-2">Secure Checkout</h4>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-onyx border border-neutral-700 p-2 text-xs text-white focus:outline-none focus:border-gold-500" placeholder="Name" type="text"/>
<input className="w-full bg-onyx border border-neutral-700 p-2 text-xs text-white focus:outline-none focus:border-gold-500" placeholder="Phone" type="tel"/>
</div>
<input className="w-full bg-onyx border border-neutral-700 p-2 text-xs text-white focus:outline-none focus:border-gold-500" placeholder="Email" type="email"/>
<div className="flex items-center space-x-2">
<span className="iconify text-neutral-500" data-icon="lucide:lock" data-width="12"></span>
<span className="text-[10px] text-neutral-500">Encrypted Transaction</span>
</div>
</form>
<button className="w-full py-4 bg-white text-black text-xs uppercase tracking-widest hover:bg-gold-100 transition-colors font-medium">
                Proceed to Payment
            </button>
</div>
</div>

    </>
  );
}
