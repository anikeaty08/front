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
      

<div className="bg-[#D4A5A5] text-xs py-2 text-center tracking-wide font-medium text-white">
        Free Shipping on Orders Above ₹1999 | Use Code: PARI10
    </div>

<header className="sticky top-0 z-50 bg-[#FFFCFA]/90 backdrop-blur-md border-b border-indigo-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 sm:h-20">

<div className="flex items-center sm:hidden">
<button className="p-2 -ml-2 text-neutral-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<nav className="hidden sm:flex space-x-8 text-sm font-medium tracking-wide text-neutral-600">
<a className="hover:text-[#D4A5A5] transition-colors" href="#">New In</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#">Jewellery</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#">Collections</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#">Gifts</a>
</nav>

<div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 sm:static sm:transform-none">
<a className="font-serif text-2xl sm:text-3xl font-medium tracking-widest text-neutral-900" href="#">
                        PARI
                    </a>
</div>

<div className="flex items-center space-x-4 sm:space-x-6">
<button className="hover:text-[#D4A5A5] transition-colors text-neutral-600">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-[#D4A5A5] transition-colors hidden sm:block text-neutral-600">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hover:text-[#D4A5A5] transition-colors relative text-neutral-600">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#D4A5A5] text-[10px] w-4 h-4 flex items-center justify-center rounded-full text-white">2</span>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">

<div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20 order-2 md:order-1 bg-[#F9F5F1]">
<span className="text-[#D4A5A5] uppercase tracking-[0.2em] text-xs font-semibold mb-4">New Collection 2024</span>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 text-neutral-900">
                        Everyday Elegance <br/> <i className="font-light">for the Modern Soul</i>
</h1>
<p className="text-sm md:text-base leading-relaxed mb-8 max-w-md font-light text-neutral-600">
                        Discover affordable luxury crafted with precision. From office chic to festive glam, find pieces that tell your story.
                    </p>
<div className="flex gap-4">
<a className="px-8 py-3 text-sm tracking-widest hover:bg-[#D4A5A5] transition-colors duration-300 bg-neutral-900 text-white" href="#">
                            SHOP NOW
                        </a>
<a className="border px-8 py-3 text-sm tracking-widest transition-colors duration-300 border-neutral-300 hover:border-neutral-900" href="#">
                            VIEW LOOKBOOK
                        </a>
</div>
</div>

<div className="relative h-[400px] md:h-auto order-1 md:order-2 overflow-hidden">
<img alt="Indian model wearing elegant jewellery" className="absolute inset-0 w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-2xl md:text-3xl mb-2 text-neutral-900">Shop by Category</h2>
<div className="w-16 h-0.5 bg-[#D4A5A5] mx-auto"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">

<a className="group relative overflow-hidden rounded-sm aspect-[4/5]" href="#">
<img alt="Earrings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/30 transition-colors bg-black/20"></div>
<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="font-serif text-xl tracking-wide text-white">Earrings</span>
</div>
</a>
<a className="group relative overflow-hidden rounded-sm aspect-[4/5]" href="#">
<img alt="Necklaces" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/30 transition-colors bg-black/20"></div>
<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="font-serif text-xl tracking-wide text-white">Necklaces</span>
</div>
</a>
<a className="group relative overflow-hidden rounded-sm aspect-[4/5]" href="#">
<img alt="Rings" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/30 transition-colors bg-black/20"></div>
<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="font-serif text-xl tracking-wide text-white">Rings</span>
</div>
</a>
<a className="group relative overflow-hidden rounded-sm aspect-[4/5]" href="#">
<img alt="Bracelets" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 group-hover:bg-black/30 transition-colors bg-black/20"></div>
<div className="absolute bottom-6 left-0 right-0 text-center">
<span className="font-serif text-xl tracking-wide text-white">Bracelets</span>
</div>
</a>
</div>
</section>

<section className="md:py-24 pt-16 pb-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex mb-10 items-end justify-between">
<div className="">
<h2 className="font-serif text-2xl md:text-3xl text-neutral-900">Trending Now</h2>
<p className="text-neutral-500 text-sm mt-2">Pieces loved by everyone</p>
</div>
<a className="text-sm font-medium border-b pb-0.5 transition-colors border-neutral-300 hover:border-neutral-800 hover:text-neutral-900" href="#">View All</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group relative">
<div className="relative aspect-square overflow-hidden rounded-sm mb-4 bg-indigo-50">
<img alt="Rose Gold Pendant" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] uppercase tracking-wider font-medium bg-white text-neutral-900">Best Seller</div>
<button className="absolute bottom-3 right-3 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-[#D4A5A5] bg-white text-neutral-800">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg group-hover:text-[#D4A5A5] transition-colors text-neutral-900">Rose Blush Pendant</h3>
<p className="text-xs text-neutral-500 mt-1">18k Rose Gold Plated</p>
</div>
<div className="text-right">
<span className="block text-sm font-semibold text-neutral-900">₹1,499</span>
<span className="block text-xs line-through text-neutral-400">₹2,999</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square overflow-hidden rounded-sm mb-4 bg-indigo-50">
<img alt="Diamond Studs" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-[#D4A5A5] bg-white text-neutral-800">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg group-hover:text-[#D4A5A5] transition-colors text-neutral-900">Eternal Sparkle Studs</h3>
<p className="text-xs text-neutral-500 mt-1">925 Sterling Silver</p>
</div>
<div className="text-right">
<span className="block text-sm font-semibold text-neutral-900">₹2,299</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square overflow-hidden rounded-sm mb-4 bg-indigo-50">
<img alt="Pearl Choker" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-[#D4A5A5] px-2 py-1 text-[10px] uppercase tracking-wider font-medium text-white">New</div>
<button className="absolute bottom-3 right-3 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-[#D4A5A5] bg-white text-neutral-800">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg group-hover:text-[#D4A5A5] transition-colors text-neutral-900">Ivory Pearl Choker</h3>
<p className="text-xs text-neutral-500 mt-1">Freshwater Pearls</p>
</div>
<div className="text-right">
<span className="block text-sm font-semibold text-neutral-900">₹3,499</span>
</div>
</div>
</div>

<div className="group relative">
<div className="relative aspect-square overflow-hidden rounded-sm mb-4 bg-indigo-50">
<img alt="Bracelet" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-3 right-3 p-2 rounded-full shadow-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:text-[#D4A5A5] bg-white text-neutral-800">
<iconify-icon icon="solar:bag-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg group-hover:text-[#D4A5A5] transition-colors text-neutral-900">Infinity Cuff</h3>
<p className="text-xs text-neutral-500 mt-1">Gold Plated Brass</p>
</div>
<div className="text-right">
<span className="block text-sm font-semibold text-neutral-900">₹999</span>
<span className="block text-xs line-through text-neutral-400">₹1,499</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#FDFBF7] border-y border-indigo-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="grid grid-cols-2 gap-2">
<img className="w-full h-full object-cover rounded-sm aspect-[3/4]" src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="grid grid-rows-2 gap-2">
<img className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>

<div className="flex flex-col h-full justify-center">
<div className="flex items-center gap-2 mb-2">
<div className="flex text-[#D4A5A5]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="14"></iconify-icon>
</div>
<span className="text-xs text-neutral-500">(124 Reviews)</span>
</div>
<h2 className="font-serif text-3xl md:text-4xl mb-2 text-neutral-900">The Royal Kundan Set</h2>
<p className="text-neutral-500 mb-6 font-light">Handcrafted perfection for your special moments.</p>
<div className="flex items-end gap-3 mb-6">
<span className="text-2xl font-semibold text-neutral-900">₹4,999</span>
<span className="text-lg line-through mb-1 text-neutral-400">₹8,999</span>
<span className="text-xs px-2 py-1 rounded mb-1 bg-blue-50 text-blue-700">45% OFF</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-neutral-600">
                        Exquisitely designed with semi-precious Kundan stones and pearl drops. This necklace set features an adjustable drawstring (dori) for a comfortable fit. Perfect for weddings and festive occasions.
                    </p>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full shadow-sm text-[#D4A5A5] bg-white">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700">6 Month Warranty</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-full shadow-sm text-[#D4A5A5] bg-white">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-medium text-neutral-700">Luxury Packaging</span>
</div>
</div>

<div className="flex gap-4">
<button className="flex-1 h-12 flex items-center justify-center gap-2 text-sm font-medium tracking-wide hover:bg-[#D4A5A5] transition-colors bg-neutral-900 text-white">
<iconify-icon icon="solar:bag-plus-linear" width="18"></iconify-icon>
                            ADD TO CART
                        </button>
<button className="h-12 w-12 border flex items-center justify-center hover:text-cyan-500 transition-colors border-neutral-200 text-neutral-400 hover:border-cyan-200">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-900">
<img className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-indigo-900 via-indigo-900/40"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 text-center">
<h2 className="font-serif text-4xl md:text-5xl mb-4 text-white">The Wedding Edit</h2>
<p className="max-w-lg mx-auto mb-8 font-light text-sm md:text-base text-indigo-300">
                Curated collections for the bride and her tribe. Shine brightest on the most memorable days.
            </p>
<a className="inline-block border px-10 py-3 text-sm tracking-widest transition-all border-white/40 text-white hover:bg-white hover:text-indigo-900" href="#">
                EXPLORE COLLECTION
            </a>
</div>
</section>

<section className="pt-16 pb-16 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="font-serif text-2xl md:text-3xl text-neutral-900">Loved by Thousands</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F9F9F9] p-8 text-center rounded-sm">
<div className="flex justify-center text-[#D4A5A5] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic mb-6 text-neutral-600">"The finish is absolutely stunning. It looks just like real gold! I wore the Kundan set for my sister's wedding and received so many compliments."</p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<span className="block text-xs font-bold text-neutral-900">Ananya Sharma</span>
<span className="block text-[10px] text-neutral-400">Verified Buyer</span>
</div>
</div>
</div>

<div className="bg-[#F9F9F9] p-8 text-center rounded-sm">
<div className="flex justify-center text-[#D4A5A5] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic mb-6 text-neutral-600">"Packaging was so premium and elegant. It felt like I was opening a luxury gift. The rose gold bracelet is my daily go-to now."</p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<span className="block text-xs font-bold text-neutral-900">Priya Mehta</span>
<span className="block text-[10px] text-neutral-400">Verified Buyer</span>
</div>
</div>
</div>

<div className="bg-[#F9F9F9] p-8 text-center rounded-sm">
<div className="flex justify-center text-[#D4A5A5] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="16"></iconify-icon>
</div>
<p className="text-sm italic mb-6 text-neutral-600">"Great quality at such affordable prices. The delivery was super quick, and the customer support team helped me pick the right size."</p>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<span className="block text-xs font-bold text-neutral-900">Sneha R.</span>
<span className="block text-[10px] text-neutral-400">Verified Buyer</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12">
<div className="flex justify-center items-center gap-2 mb-8">
<iconify-icon className="text-neutral-900" icon="solar:camera-linear" width="20"></iconify-icon>
<h3 className="font-serif text-xl text-neutral-900">@PariJewellers</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0.5">
<div className="relative group aspect-square overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group aspect-square overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group aspect-square overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group aspect-square overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group aspect-square overflow-hidden cursor-pointer hidden lg:block">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
<div className="relative group aspect-square overflow-hidden cursor-pointer hidden lg:block">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/30 text-white">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-8 bg-neutral-900 text-neutral-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-4">
<h2 className="font-serif text-2xl tracking-widest text-white">PARI</h2>
<p className="text-sm font-light leading-relaxed max-w-xs">
                        Crafting affordable luxury for the modern Indian woman. Silver, Gold Plated, and Diamond simulants designed to shine.
                    </p>
<div className="flex gap-4 pt-2">
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="transition-colors hover:text-white" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white">Shop</h3>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Necklaces</a></li>
<li className=""><a className="hover:text-[#D4A5A5] transition-colors" href="#">Earrings</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Rings</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white">Support</h3>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Returns &amp; Exchange</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Jewellery Care</a></li>
<li><a className="hover:text-[#D4A5A5] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-white">The Insider</h3>
<p className="text-sm font-light mb-4">Subscribe for exclusive offers and styling tips.</p>
<form className="space-y-2">
<input className="w-full border text-sm px-4 py-3 focus:outline-none focus:border-[#D4A5A5] transition-colors bg-neutral-800 border-neutral-700 text-white" placeholder="Your email address" type="email"/>
<button className="w-full bg-[#D4A5A5] text-sm font-medium py-3 hover:bg-[#c49292] transition-colors text-white">SUBSCRIBE</button>
</form>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-neutral-500 border-neutral-800">
<p>© 2024 Pari Jewellers. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
