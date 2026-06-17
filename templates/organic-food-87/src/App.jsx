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
      

<div className="bg-[#1A2E25] text-[#F9F8F6] text-xs text-center py-2 tracking-wide font-medium">
        Free shipping on all orders above ₹999. Pure goodness delivered to your door.
    </div>

<header className="sticky top-0 z-50 transition-all duration-300 bg-[#1A2E25]/95 backdrop-blur-sm border-b border-[#1A2E25]/10">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<nav className="hidden md:flex items-center gap-8">
<a className="text-[#F9F8F6]/80 hover:text-white text-sm font-medium transition-colors" href="#">Home</a>
<a className="text-[#F9F8F6]/80 hover:text-white text-sm font-medium transition-colors" href="#">Our Categories</a>
<a className="text-[#F9F8F6]/80 hover:text-white text-sm font-medium transition-colors" href="#">Best Sellers</a>
</nav>

<div className="transform -translate-x-1/2 absolute left-1/2">
<a className="uppercase text-2xl text-[#F9F8F6] tracking-tighter font-serif" href="#">Rasarth</a>
</div>

<div className="flex items-center gap-6 text-[#F9F8F6]">
<button className="hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="hover:text-white transition-colors hidden sm:block">
<svg aria-hidden="true" data-icon="lucide:user" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</button>
<button className="hover:text-white transition-colors relative">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#F4C430] rounded-full"></span>
</button>

<button className="md:hidden hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center bg-[#E6DCD5]">

<div className="absolute inset-0 z-0">

<img alt="Indian spices and natural ingredients" className="object-center opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e2e88b5-3eb8-4f0b-ae3a-e0b83b26738c_800w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden">
<style className="">
        @keyframes slideShowFade {
            0%, 45% { opacity: 0; }
            50%, 95% { opacity: 1; }
            100% { opacity: 0; }
        }
    </style>

<img alt="Rasarth kitchen preparation" className="absolute inset-0 w-full h-full object-cover object-center" src="default" style={{}}/>

<img alt="Rasarth ingredients close up" className="absolute inset-0 w-full h-full object-cover object-center" src="default" style={{animation: '8s ease-in-out 0s infinite normal none running slideShowFade'}}/>

<div className="bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<div className="relative z-10 text-center max-w-3xl px-6 fade-in-up">
<span className="inline-block text-[#F9F8F6] text-xs font-medium tracking-[0.2em] uppercase mb-4 bg-[#1A2E25]/30 backdrop-blur-md px-3 py-1 rounded-full">
                From Soil to Soul
            </span>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl text-[#F9F8F6] tracking-tight font-serif mb-6">
                Honoring the rhythm  of the Indian kitchen.
            </h1>
<p className="text-[#F9F8F6]/90 text-lg md:text-xl font-light mb-10 max-w-xl mx-auto leading-relaxed">
                Cold-pressed oils, hand-pounded spices, and grains harvested with respect. Purity you can taste, trust you can feel.
            </p>
<a className="inline-flex items-center gap-2 bg-[#F4C430] text-[#1A2E25] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#ebd578] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-black/10" href="#favourites">
                Explore Our Favourites
                <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</section>

<section className="py-20 md:py-24 bg-[#F9F8F6]" id="favourites">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-[#1A2E25] mb-2 tracking-tight">Crowd Favourites</h2>
<p className="text-stone-500 font-light">Chosen by families across the country.</p>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-stone-200 text-stone-400 hover:border-[#1A2E25] hover:text-[#1A2E25] transition-colors">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 rounded-full border border-stone-200 text-stone-400 hover:border-[#1A2E25] hover:text-[#1A2E25] transition-colors">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory max-w-[100vw]">

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="relative bg-white rounded-xl aspect-[4/5] overflow-hidden mb-4 border border-stone-100 shadow-sm transition-transform duration-500 hover:shadow-md">
<span className="absolute top-3 left-3 bg-[#8DA399] text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm font-medium z-10">Bestseller</span>
<img alt="Cold Pressed Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-[#1A2E25] leading-tight mb-1 group-hover:text-[#8DA399] transition-colors">Wood Pressed Groundnut Oil</h3>
<p className="text-sm text-stone-500 font-light mb-2">1 Litre</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-[#1A2E25]">₹349</p>
<p className="text-xs text-stone-400 line-through">₹399</p>
</div>
</div>
<div className="mt-3">
<button className="w-full py-2.5 border border-[#1A2E25] text-[#1A2E25] rounded-lg text-sm font-medium hover:bg-[#1A2E25] hover:text-white transition-colors">Add to Cart</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="relative bg-white rounded-xl aspect-[4/5] overflow-hidden mb-4 border border-stone-100 shadow-sm transition-transform duration-500 hover:shadow-md">
<span className="absolute top-3 left-3 bg-[#E6C229] text-[#1A2E25] text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm font-medium z-10">New Harvest</span>
<img alt="Turmeric Powder" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-[#1A2E25] leading-tight mb-1 group-hover:text-[#8DA399] transition-colors">Lakadong Turmeric Powder</h3>
<p className="text-sm text-stone-500 font-light mb-2">250g • High Curcumin</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-[#1A2E25]">₹210</p>
</div>
</div>
<div className="mt-3">
<button className="w-full py-2.5 border border-[#1A2E25] text-[#1A2E25] rounded-lg text-sm font-medium hover:bg-[#1A2E25] hover:text-white transition-colors">Add to Cart</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="relative bg-white rounded-xl aspect-[4/5] overflow-hidden mb-4 border border-stone-100 shadow-sm transition-transform duration-500 hover:shadow-md">
<img alt="Organic Ghee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-[#1A2E25] leading-tight mb-1 group-hover:text-[#8DA399] transition-colors">A2 Cultured Cow Ghee</h3>
<p className="text-sm text-stone-500 font-light mb-2">500ml • Bilona Method</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-[#1A2E25]">₹1150</p>
</div>
</div>
<div className="mt-3">
<button className="w-full py-2.5 border border-[#1A2E25] text-[#1A2E25] rounded-lg text-sm font-medium hover:bg-[#1A2E25] hover:text-white transition-colors">Add to Cart</button>
</div>
</div>

<div className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
<div className="relative bg-white rounded-xl aspect-[4/5] overflow-hidden mb-4 border border-stone-100 shadow-sm transition-transform duration-500 hover:shadow-md">
<img alt="Organic Rice" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-[#1A2E25] leading-tight mb-1 group-hover:text-[#8DA399] transition-colors">Indrayani Hand-Pounded Rice</h3>
<p className="text-sm text-stone-500 font-light mb-2">1kg • Unpolished</p>
</div>
<div className="text-right">
<p className="text-lg font-medium text-[#1A2E25]">₹180</p>
</div>
</div>
<div className="mt-3">
<button className="w-full py-2.5 border border-[#1A2E25] text-[#1A2E25] rounded-lg text-sm font-medium hover:bg-[#1A2E25] hover:text-white transition-colors">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A2E25] text-[#F9F8F6]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#F4C430] text-xs font-medium tracking-[0.2em] uppercase mb-4 block">Our Promise</span>
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-4">The Rasarth Way</h2>
<p className="text-white/60 font-light max-w-2xl mx-auto text-lg">We don't manufacture food. We simply curate what nature has already perfected.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F4C430]/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:droplet" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-serif mb-3">Cold Pressed Only</h3>
<p className="text-white/50 text-sm leading-relaxed">Extracted at low temperatures to retain vital nutrients and original aroma.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F4C430]/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:sprout" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-serif mb-3">Chemical Free</h3>
<p className="text-white/50 text-sm leading-relaxed">Zero pesticides, zero preservatives. Just how our ancestors ate.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F4C430]/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<h3 className="text-xl font-serif mb-3">Regionally Sourced</h3>
<p className="text-white/50 text-sm leading-relaxed">Turmeric from Meghalaya, Saffron from Kashmir, Grains from Maharashtra.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#F4C430]/20 transition-colors">
<svg aria-hidden="true" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-serif mb-3">Farmer Direct</h3>
<p className="text-white/50 text-sm leading-relaxed">Fair pricing for growers. We build relationships, not just supply chains.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F2EFE9] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl overflow-hidden aspect-[9/16] shadow-xl max-w-sm mx-auto">
<img alt="Home cook using Rasarth" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

<div className="absolute bottom-6 left-6 right-6 text-white">
<div className="flex items-center gap-2 mb-2">
<span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-medium tracking-wide">@sneha_eats</span>
</div>
<p className="text-sm font-medium leading-relaxed">"The aroma of this mustard oil takes me back to my grandmother's pickle making days. Absolutely authentic."</p>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
<svg aria-hidden="true" data-icon="lucide:play" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-3xl font-serif text-[#1A2E25] mb-8 lg:mb-12 tracking-tight">Loved by home chefs.</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="w-20 h-24 bg-stone-50 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-serif text-[#1A2E25] text-lg mb-1">Kachi Ghani Mustard Oil</h4>
<p className="text-sm text-stone-500 mb-2">₹240 / 1L</p>
<button className="text-xs font-medium text-[#1A2E25] border-b border-[#1A2E25] pb-0.5 hover:opacity-70">Add to Cart</button>
</div>
</div>

<div className="bg-white p-4 rounded-xl flex items-center gap-4 border border-stone-100 shadow-sm hover:shadow-md transition-all">
<div className="w-20 h-24 bg-stone-50 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h4 className="font-serif text-[#1A2E25] text-lg mb-1">Himalayan Pink Salt</h4>
<p className="text-sm text-stone-500 mb-2">₹120 / 500g</p>
<button className="text-xs font-medium text-[#1A2E25] border-b border-[#1A2E25] pb-0.5 hover:opacity-70">Add to Cart</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F8F6]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-5xl font-serif text-[#1A2E25] tracking-tight">Morning Essentials</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#1A2E25] hover:text-[#8DA399] transition-colors" href="#">
                    Explore All
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-1 h-full min-h-[400px] relative rounded-2xl overflow-hidden group">
<img alt="Morning breakfast" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<p className="font-serif text-2xl leading-tight mb-4">"Start your day with ingredients that wake up your soul."</p>
<span className="text-sm font-light opacity-90 block">Discover our breakfast range</span>
</div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-xl border border-stone-100 hover:border-[#E6C229]/50 transition-colors">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-[#1A2E25] mb-1">Multigrain Millet Mix</h3>
<p className="text-stone-500 text-sm mb-4">Gluten Free • High Fiber</p>
<div className="flex items-center justify-between">
<span className="font-medium text-[#1A2E25]">₹299</span>
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#1A2E25] hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-stone-100 hover:border-[#E6C229]/50 transition-colors">
<div className="aspect-square bg-stone-50 rounded-lg mb-4 overflow-hidden">
<img className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-xl text-[#1A2E25] mb-1">Wild Forest Honey</h3>
<p className="text-stone-500 text-sm mb-4">Raw • Unfiltered</p>
<div className="flex items-center justify-between">
<span className="font-medium text-[#1A2E25]">₹450</span>
<button className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-[#1A2E25] hover:text-white transition-colors">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#1A2E25] border-b border-[#1A2E25] pb-0.5" href="#">Explore All</a>
</div>
</div>
</section>

<section className="py-24 bg-[#E6DCD5]">
<div className="max-w-6xl mx-auto px-6">
<div className="bg-white rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row">
<div className="md:w-1/2 p-12 flex flex-col justify-center order-2 md:order-1">
<span className="text-[#8DA399] text-xs font-bold tracking-widest uppercase mb-4">Starter Kit</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#1A2E25] mb-4">The Essential Indian Kitchen Set</h2>
<p className="text-stone-600 mb-8 font-light leading-relaxed">Everything you need to switch to a healthier lifestyle. Includes wood-pressed oil, turmeric, pink salt, and jaggery powder.</p>
<div className="flex items-center gap-4 mb-8">
<div className="px-4 py-2 bg-stone-50 rounded-lg border border-stone-100">
<span className="block text-xs text-stone-400 uppercase">Save</span>
<span className="text-lg font-medium text-[#1A2E25]">15%</span>
</div>
<div className="px-4 py-2 bg-stone-50 rounded-lg border border-stone-100">
<span className="block text-xs text-stone-400 uppercase">Items</span>
<span className="text-lg font-medium text-[#1A2E25]">4 Pcs</span>
</div>
</div>
<button className="bg-[#F4C430] text-[#1A2E25] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-[#ebd578] transition-colors self-start">
                        Add Bundle to Cart - ₹899
                    </button>
</div>
<div className="md:w-1/2 h-64 md:h-auto bg-stone-100 relative order-1 md:order-2">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="py-12 bg-[#F9F8F6] border-y border-stone-200 overflow-hidden">
<p className="text-center text-xs text-stone-400 uppercase tracking-widest mb-8">Featured In</p>
<div className="relative w-full overflow-hidden">
<div className="flex whitespace-nowrap animate-scroll">

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-40 grayscale hover:opacity-80 transition-opacity">
<span className="text-xl font-serif font-bold">VOGUE</span>
<span className="text-xl font-serif font-bold">ELLE</span>
<span className="text-xl font-serif font-bold">BetterIndia</span>
<span className="text-xl font-serif font-bold">YourStory</span>
<span className="text-xl font-serif font-bold">Grazia</span>
<span className="text-xl font-serif font-bold">VOGUE</span>
<span className="text-xl font-serif font-bold">ELLE</span>
<span className="text-xl font-serif font-bold">BetterIndia</span>
<span className="text-xl font-serif font-bold">YourStory</span>
<span className="text-xl font-serif font-bold">Grazia</span>
</div>
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-40 grayscale hover:opacity-80 transition-opacity absolute top-0 left-full">
<span className="text-xl font-serif font-bold">VOGUE</span>
<span className="text-xl font-serif font-bold">ELLE</span>
<span className="text-xl font-serif font-bold">BetterIndia</span>
<span className="text-xl font-serif font-bold">YourStory</span>
<span className="text-xl font-serif font-bold">Grazia</span>
<span className="text-xl font-serif font-bold">VOGUE</span>
<span className="text-xl font-serif font-bold">ELLE</span>
<span className="text-xl font-serif font-bold">BetterIndia</span>
<span className="text-xl font-serif font-bold">YourStory</span>
<span className="text-xl font-serif font-bold">Grazia</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F2EFE9]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-serif text-[#1A2E25] text-center mb-16 tracking-tight">Stories from Indian Homes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative">
<div className="text-[#F4C430] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed">"The ghee tastes exactly like what my grandmother used to make in the village. It's not just a product, it's nostalgia in a jar."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2E25]">Anjali M.</p>
<p className="text-xs text-stone-400">Pune, Maharashtra</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative mt-0 md:-mt-4">
<div className="text-[#F4C430] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed">"Switched my entire kitchen to Rasarth. The cold-pressed oils are light, and you can really tell the difference in digestion."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2E25]">Rajesh K.</p>
<p className="text-xs text-stone-400">Bangalore, Karnataka</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 relative">
<div className="text-[#F4C430] mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 leading-relaxed">"Honest pricing for the quality they offer. I love the sustainable packaging. Feels good to support a brand with values."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<p className="text-sm font-semibold text-[#1A2E25]">Meera S.</p>
<p className="text-xs text-stone-400">Jaipur, Rajasthan</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F9F8F6]">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-8 text-[#1A2E25]">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<span className="font-medium">@rasarth.organic</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
<div className="aspect-square bg-stone-200 overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="aspect-square bg-stone-200 overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="aspect-square bg-stone-200 overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="aspect-square bg-stone-200 overflow-hidden relative group cursor-pointer">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<svg aria-hidden="true" data-icon="lucide:heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A2E25] text-[#F9F8F6] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-12">

<div className="md:col-span-4">
<a className="text-3xl font-serif tracking-tighter uppercase mb-6 block" href="#">Rasarth</a>
<p className="text-white/60 text-sm font-light leading-relaxed max-w-xs mb-8">
                        Bringing the purity of Indian farms to your kitchen table. Sustainable, authentic, and rooted in tradition.
                    </p>
<div className="flex gap-4">
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-serif text-lg mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-white/60 font-light">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cold Pressed Oils</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ghee &amp; Honey</a></li>
<li><a className="hover:text-white transition-colors" href="#">Spices</a></li>
<li><a className="hover:text-white transition-colors" href="#">Grains</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-serif text-lg mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/60 font-light">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Farming Practices</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="font-serif text-lg mb-6">Join our community</h4>
<p className="text-white/60 text-sm font-light mb-6">Receive recipes, farming updates, and exclusive offers.</p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 flex-grow placeholder:text-white/30" placeholder="Your email address" type="email"/>
<button className="bg-[#F4C430] text-[#1A2E25] px-6 py-3 rounded-lg text-sm font-semibold hover:bg-[#ebd578] transition-colors">Join</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light">
<p>© 2023 Rasarth Organics Pvt Ltd. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Shipping Policy</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
