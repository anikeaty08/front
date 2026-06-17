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
      

<div className="bg-[#1C1917] text-white text-xs py-2 text-center tracking-wide font-medium">
        Complimentary shipping on all international orders over $250.
    </div>

<nav className="sticky top-0 z-50 w-full bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#E7E5E4]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-1 hover:opacity-60 transition-opacity">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>

<div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-[#57534E]">
<a className="hover:text-[#1C1917] transition-colors" href="#">Shop</a>
<a className="hover:text-[#1C1917] transition-colors" href="#">Collections</a>
<a className="hover:text-[#1C1917] transition-colors" href="#">About</a>
</div>

<a className="text-3xl font-serif italic tracking-tight font-medium absolute left-1/2 transform -translate-x-1/2" href="#">
                Éclat
            </a>

<div className="flex items-center space-x-6 text-[#1C1917]">
<button className="hover:opacity-60 transition-opacity">
<span className="iconify" data-height="20" data-icon="lucide:search" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="hover:opacity-60 transition-opacity relative">
<span className="iconify" data-height="20" data-icon="lucide:shopping-bag" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A8A29E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#78716C]"></span>
</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] overflow-hidden">
<img alt="Luxury Jewelry Model" className="absolute inset-0 w-full h-full object-cover object-top opacity-90" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=2950&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 md:p-20 flex flex-col items-center justify-end text-center">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-[#57534E] mb-4">The Holiday Collection</span>
<h1 className="text-5xl md:text-7xl font-serif font-light text-[#1C1917] mb-8 tracking-tight leading-tight">
                Timeless forms,<br/>modern sensuality.
            </h1>
<div className="flex gap-4">
<a className="px-8 py-3 bg-[#1C1917] text-[#FAFAF9] text-sm font-medium tracking-wide hover:bg-[#44403C] transition-colors duration-300" href="#">
                    Explore Collection
                </a>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E7E5E4] border border-[#E7E5E4]">

<div className="group relative h-[500px] bg-[#FAFAF9] overflow-hidden">
<div className="absolute inset-0 bg-[#F5F5F4] transition-colors duration-500 group-hover:bg-[#F0EFEE]"></div>
<img alt="Rings" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="text-2xl font-serif italic text-[#1C1917] mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">Rings</h3>
<div className="flex items-center text-xs font-medium uppercase tracking-wider text-[#57534E] opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Shop Now <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-[#FAFAF9] overflow-hidden">
<img alt="Necklaces" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="text-2xl font-serif italic text-[#1C1917] mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">Necklaces</h3>
<div className="flex items-center text-xs font-medium uppercase tracking-wider text-[#57534E] opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Shop Now <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group relative h-[500px] bg-[#FAFAF9] overflow-hidden">
<img alt="Earrings" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col justify-end p-8">
<h3 className="text-2xl font-serif italic text-[#1C1917] mb-2 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">Earrings</h3>
<div className="flex items-center text-xs font-medium uppercase tracking-wider text-[#57534E] opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        Shop Now <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="flex items-end justify-between mb-12 border-b border-[#E7E5E4] pb-6">
<div>
<h2 className="text-3xl font-serif font-light tracking-tight text-[#1C1917]">New Arrivals</h2>
<p className="text-sm text-[#78716C] mt-2 font-light">Handcrafted pieces for the modern muse.</p>
</div>
<a className="hidden md:flex items-center text-xs font-medium tracking-wide border-b border-[#1C1917] pb-0.5 hover:opacity-60 transition-opacity" href="#">
                View All
            </a>
</div>
<div className="flex overflow-x-auto space-x-8 hide-scrollbar pb-8">

<div className="min-w-[280px] group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#F5F5F4] overflow-hidden mb-4">
<img alt="Gold Ring" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-medium tracking-wider uppercase">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif italic text-[#1C1917]">L'Aube Signet</h4>
<p className="text-xs text-[#78716C] mt-1">18k Gold Vermeil</p>
</div>
<span className="text-sm font-medium text-[#1C1917]">$145</span>
</div>
</div>

<div className="min-w-[280px] group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#F5F5F4] overflow-hidden mb-4">
<img alt="Pendant" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif italic text-[#1C1917]">Soleil Pendant</h4>
<p className="text-xs text-[#78716C] mt-1">Recycled Silver</p>
</div>
<span className="text-sm font-medium text-[#1C1917]">$110</span>
</div>
</div>

<div className="min-w-[280px] group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#F5F5F4] overflow-hidden mb-4">
<img alt="Earrings" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1589128771249-14cb35e68336?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif italic text-[#1C1917]">Lunar Hoops</h4>
<p className="text-xs text-[#78716C] mt-1">Freshwater Pearl</p>
</div>
<span className="text-sm font-medium text-[#1C1917]">$185</span>
</div>
</div>

<div className="min-w-[280px] group cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-[#F5F5F4] overflow-hidden mb-4">
<img alt="Bracelet" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 h-10 w-10 bg-white flex items-center justify-center rounded-full shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-icon="lucide:plus" data-width="18" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-base font-serif italic text-[#1C1917]">Chain No. 5</h4>
<p className="text-xs text-[#78716C] mt-1">14k Solid Gold</p>
</div>
<span className="text-sm font-medium text-[#1C1917]">$320</span>
</div>
</div>
</div>
</section>

<section className="border-y border-[#E7E5E4] bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row">
<div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#E7E5E4]">
<span className="text-xs font-medium uppercase tracking-[0.2em] text-[#A8A29E] mb-6">The Craft</span>
<h2 className="text-4xl font-serif text-[#1C1917] mb-6 tracking-tight leading-snug">
                    Ethically sourced,<br/>consciously created.
                </h2>
<p className="text-[#57534E] mb-10 leading-relaxed font-light max-w-md">
                    We believe luxury shouldn't cost the earth. Every piece is crafted from 100% recycled precious metals and conflict-free stones, designed to last a lifetime.
                </p>
<div className="space-y-6">
<div className="flex items-start">
<span className="p-2 rounded-full bg-[#F5F5F4] mr-4">
<span className="iconify text-[#44403C]" data-icon="lucide:gem" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<h4 className="text-sm font-medium text-[#1C1917]">Conflict-Free Diamonds</h4>
<p className="text-xs text-[#78716C] mt-1 leading-relaxed">Sourced adhering to the Kimberley Process.</p>
</div>
</div>
<div className="flex items-start">
<span className="p-2 rounded-full bg-[#F5F5F4] mr-4">
<span className="iconify text-[#44403C]" data-icon="lucide:recycle" data-width="20" style={{strokeWidth: '1.5'}}></span>
</span>
<div>
<h4 className="text-sm font-medium text-[#1C1917]">Recycled Metals</h4>
<p className="text-xs text-[#78716C] mt-1 leading-relaxed">Certified recycled gold and sterling silver.</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 h-[600px] relative overflow-hidden">
<img alt="Jewelry Crafting" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2 bg-[#F5F5F4] aspect-square relative flex items-center justify-center p-12">
<img alt="Custom Ring" className="w-4/5 shadow-xl shadow-[#000000]/5 object-cover aspect-[4/5]" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-xs font-medium tracking-wide border border-[#E7E5E4]">
                    The Heirloom Ring
                </div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-4xl font-serif text-[#1C1917] mb-2 tracking-tight">Personalize Your Piece</h2>
<p className="text-[#78716C] mb-8 font-light text-sm">Select your finish and size to create a piece that is uniquely yours.</p>

<div className="mb-8">
<label className="block text-xs font-medium uppercase tracking-wider text-[#1C1917] mb-4">Select Material</label>
<div className="flex gap-3">
<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-[#E5D0A1] ring-2 ring-offset-2 ring-transparent peer-checked:ring-[#1C1917] transition-all hover:scale-110"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#78716C] opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">18k Gold</span>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-[#E5E7EB] ring-2 ring-offset-2 ring-transparent peer-checked:ring-[#1C1917] transition-all hover:scale-110"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#78716C] opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">Silver</span>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-[#EAB8A8] ring-2 ring-offset-2 ring-transparent peer-checked:ring-[#1C1917] transition-all hover:scale-110"></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#78716C] opacity-0 peer-checked:opacity-100 transition-opacity whitespace-nowrap">Rose Gold</span>
</label>
</div>
</div>

<div className="mb-10">
<div className="flex justify-between mb-2">
<label className="text-xs font-medium uppercase tracking-wider text-[#1C1917]">Ring Size (US)</label>
<span className="text-xs font-serif italic text-[#1C1917]" id="size-display">6</span>
</div>
<div className="relative w-full h-1 bg-[#E7E5E4] rounded-full mt-2">
<input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="10" min="4" oninput="document.getElementById('size-display').innerText = this.value" step="0.5" type="range" value="6"/>

<div className="absolute top-1/2 -translate-y-1/2 left-[33%] w-4 h-4 bg-[#1C1917] rounded-full border-2 border-[#FAFAF9] shadow-md pointer-events-none"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] text-[#A8A29E]">
<span>4</span>
<span>10</span>
</div>
</div>
<div className="flex gap-4 border-t border-[#E7E5E4] pt-8">
<button className="flex-1 bg-[#1C1917] text-[#FAFAF9] py-4 text-sm font-medium hover:bg-[#44403C] transition-colors flex items-center justify-center gap-2">
                        Add to Bag — $550
                    </button>
<button className="px-6 border border-[#E7E5E4] text-[#1C1917] hover:bg-[#F5F5F4] transition-colors">
<span className="iconify" data-icon="lucide:heart" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F5F4] py-24 border-t border-[#E7E5E4]">
<div className="max-w-xl mx-auto px-6 text-center">
<span className="iconify mx-auto mb-6 text-[#1C1917]" data-icon="lucide:mail-open" data-width="32" style={{strokeWidth: '1'}}></span>
<h2 className="text-2xl font-serif text-[#1C1917] mb-4">Join the Inner Circle</h2>
<p className="text-sm text-[#78716C] mb-8 font-light">Receive early access to new collections, exclusive events, and 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white border border-[#E7E5E4] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#1C1917] transition-colors" placeholder="Your email address" type="email"/>
<button className="bg-[#1C1917] text-white px-8 py-3 text-sm font-medium hover:bg-[#44403C] transition-colors" type="button">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-[#E7E5E4]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2 md:col-span-1">
<a className="text-2xl font-serif italic font-medium block mb-6" href="#">Éclat</a>
<p className="text-xs text-[#78716C] leading-relaxed max-w-[200px]">
                    Defining modern luxury through sustainable practices and timeless design.
                </p>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-[#1C1917] mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-[#57534E] font-light">
<li><a className="hover:text-[#1C1917] transition-colors" href="#">All Jewelry</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Gift Guide</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-[#1C1917] mb-6">Support</h4>
<ul className="space-y-4 text-sm text-[#57534E] font-light">
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-[#1C1917] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-wider text-[#1C1917] mb-6">Social</h4>
<div className="flex gap-4">
<a className="text-[#57534E] hover:text-[#1C1917] transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-[#57534E] hover:text-[#1C1917] transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-[#57534E] hover:text-[#1C1917] transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#F5F5F4] flex flex-col md:flex-row justify-between items-center text-[10px] text-[#A8A29E] uppercase tracking-wide">
<p>© 2024 Éclat Jewelry. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#78716C]" href="#">Privacy Policy</a>
<a className="hover:text-[#78716C]" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
