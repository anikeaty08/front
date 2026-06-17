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
      

<div className="bg-[#7B8B6F] text-white text-sm py-2.5 text-center font-normal tracking-wide">
        Complimentary shipping on all orders over $75
    </div>

<header className="sticky top-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E4DB]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

<button className="lg:hidden text-[#2D2B2A] hover:text-[#C67D63] transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<nav className="hidden lg:flex gap-10 text-lg">
<a className="text-[#C67D63] transition-colors" href="#">Shop</a>
<a className="hover:text-[#C67D63] transition-colors" href="#">Our Ingredients</a>
<a className="hover:text-[#C67D63] transition-colors" href="#">The Ritual</a>
<a className="hover:text-[#C67D63] transition-colors" href="#">About</a>
</nav>

<a className="font-serif-custom text-3xl tracking-tight lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center" href="#">
<span>SEEDS</span>
<span className="text-xs uppercase tracking-[0.2em] font-sans mt-0.5 text-[#6A6662]">Marrakech</span>
</a>

<div className="flex items-center gap-6">
<button className="hidden lg:block text-[#2D2B2A] hover:text-[#C67D63] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden lg:block text-[#2D2B2A] hover:text-[#C67D63] transition-colors">
<iconify-icon className="text-xl" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-[#2D2B2A] hover:text-[#C67D63] transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bag-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 bg-[#C67D63] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 w-full">

<nav className="flex text-sm text-[#8B857D] font-light mb-10">
<a className="hover:text-[#2D2B2A] transition-colors flex items-center" href="#">
<iconify-icon className="mr-1" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Home
            </a>
<span className="mx-2">/</span>
<span className="text-[#2D2B2A]">Face Care</span>
</nav>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
<div className="lg:w-1/2 flex flex-col justify-center">
<h1 className="font-serif-custom text-4xl lg:text-5xl tracking-tight leading-tight mb-6 text-[#2D2B2A]">
                    Face Care
                </h1>
<p className="text-lg text-[#6A6662] font-light leading-relaxed max-w-lg">
                    Botanical skincare inspired by Moroccan rituals, designed to nourish, restore, and protect your skin using nature's purest ingredients.
                </p>
</div>
<div className="lg:w-1/2 w-full h-[300px] lg:h-[400px] relative overflow-hidden bg-[#E8E4DB]">
<img alt="Face Care Lifestyle" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<div className="sticky top-20 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#E8E4DB]">
<div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-col lg:flex-row justify-between items-center gap-6">

<div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
<span className="text-[#8B857D] uppercase tracking-widest text-xs font-medium mr-2 hidden lg:block">Filter by</span>
<button className="px-5 py-2 rounded-full border border-[#D1CECA] bg-white text-sm text-[#2D2B2A] font-light hover:border-[#C67D63] hover:text-[#C67D63] transition-colors flex items-center gap-2 group">
                    Skin Type
                    <iconify-icon className="text-base text-[#8B857D] group-hover:text-[#C67D63] transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-5 py-2 rounded-full border border-[#D1CECA] bg-white text-sm text-[#2D2B2A] font-light hover:border-[#C67D63] hover:text-[#C67D63] transition-colors flex items-center gap-2 group">
                    Skin Concern
                    <iconify-icon className="text-base text-[#8B857D] group-hover:text-[#C67D63] transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-5 py-2 rounded-full border border-[#D1CECA] bg-white text-sm text-[#2D2B2A] font-light hover:border-[#C67D63] hover:text-[#C67D63] transition-colors flex items-center gap-2 group">
                    Ingredient
                    <iconify-icon className="text-base text-[#8B857D] group-hover:text-[#C67D63] transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="px-5 py-2 rounded-full border border-[#D1CECA] bg-white text-sm text-[#2D2B2A] font-light hover:border-[#C67D63] hover:text-[#C67D63] transition-colors flex items-center gap-2 group">
                    Price
                    <iconify-icon className="text-base text-[#8B857D] group-hover:text-[#C67D63] transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="text-xs text-[#8B857D] underline underline-offset-4 hover:text-[#2D2B2A] transition-colors ml-2 font-light hidden sm:block">
                    Clear Filters
                </button>
</div>

<div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
<span className="text-[#8B857D] uppercase tracking-widest text-xs font-medium">Sort by</span>
<div className="relative flex items-center">
<select className="pl-4 pr-10 py-2 border-b border-[#D1CECA] bg-transparent text-sm text-[#2D2B2A] font-light hover:border-[#2D2B2A] transition-colors cursor-pointer focus:outline-none rounded-none">
<option value="popular">Popular</option>
<option value="price-asc">Price: Low to High</option>
<option value="price-desc">Price: High to Low</option>
<option value="rating">Best Rated</option>
</select>
<iconify-icon className="absolute right-2 text-[#2D2B2A] pointer-events-none text-base" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto w-full border-b border-[#E8E4DB]">
<div className="text-center mb-12">
<span className="text-[#C67D63] uppercase tracking-widest text-xs font-medium mb-4 block">The Guide</span>
<h2 className="font-serif-custom text-3xl lg:text-4xl tracking-tight text-[#2D2B2A] mb-4">Build Your Skincare Ritual</h2>
<p className="text-lg text-[#6A6662] font-light max-w-2xl mx-auto">Follow our four-step philosophy for radiant, balanced skin.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<a className="group block bg-white border border-[#E8E4DB] p-8 lg:p-10 text-center hover:border-[#C67D63] hover:shadow-sm transition-all duration-300" href="#">
<span className="text-[#C67D63] text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">Step 01</span>
<h3 className="font-serif-custom text-2xl text-[#2D2B2A] mb-2 group-hover:text-[#C67D63] transition-colors">Cleanse</h3>
<p className="text-sm text-[#6A6662] font-light">Wash away impurities</p>
</a>

<a className="group block bg-white border border-[#E8E4DB] p-8 lg:p-10 text-center hover:border-[#C67D63] hover:shadow-sm transition-all duration-300" href="#">
<span className="text-[#C67D63] text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">Step 02</span>
<h3 className="font-serif-custom text-2xl text-[#2D2B2A] mb-2 group-hover:text-[#C67D63] transition-colors">Tone</h3>
<p className="text-sm text-[#6A6662] font-light">Balance and prep</p>
</a>

<a className="group block bg-white border border-[#E8E4DB] p-8 lg:p-10 text-center hover:border-[#C67D63] hover:shadow-sm transition-all duration-300" href="#">
<span className="text-[#C67D63] text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">Step 03</span>
<h3 className="font-serif-custom text-2xl text-[#2D2B2A] mb-2 group-hover:text-[#C67D63] transition-colors">Treat</h3>
<p className="text-sm text-[#6A6662] font-light">Target specific concerns</p>
</a>

<a className="group block bg-white border border-[#E8E4DB] p-8 lg:p-10 text-center hover:border-[#C67D63] hover:shadow-sm transition-all duration-300" href="#">
<span className="text-[#C67D63] text-[10px] uppercase tracking-[0.2em] font-medium block mb-4">Step 04</span>
<h3 className="font-serif-custom text-2xl text-[#2D2B2A] mb-2 group-hover:text-[#C67D63] transition-colors">Hydrate</h3>
<p className="text-sm text-[#6A6662] font-light">Lock in moisture</p>
</a>
</div>
</section>

<section className="pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto w-full">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif-custom text-3xl tracking-tight text-[#2D2B2A]">Customer Favorites</h2>
<a className="hidden md:flex items-center gap-2 text-sm text-[#C67D63] hover:text-[#2D2B2A] transition-colors uppercase tracking-wider" href="#">
                Shop All <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">

<span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[#2D2B2A] border border-[#E8E4DB] z-10">Bestseller</span>
<img alt="Face Oil" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>

<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Pure Argan Nourishing Oil</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Deeply hydrates and protects</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-circle-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(128)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$48.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-[#E8E4DB] mb-5 relative flex items-center justify-center overflow-hidden border border-[#E8E4DB]">
<img alt="Discovery Set" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110 opacity-90" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">The Discovery Set</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Miniature rituals for complete care</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(215)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$85.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">
<span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[#2D2B2A] border border-[#E8E4DB] z-10">Bestseller</span>
<img alt="Ghassoul Mask" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Purifying Ghassoul Mask</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Detoxifies and clarifies pores</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-circle-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(76)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$38.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">
<img alt="Face Moisturizer" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Balancing Moisturizer</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Lightweight, all-day hydration</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-circle-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(89)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$42.00</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto w-full border-t border-[#E8E4DB]">
<div className="mb-12">
<h2 className="font-serif-custom text-3xl tracking-tight text-[#2D2B2A]">All Face Care</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">
<img alt="Rose Mist" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Damask Rose Mist</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Soothes redness and refreshes</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(42)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$34.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">

<span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur-sm px-3 py-1.5 text-[#2D2B2A] border border-[#E8E4DB] z-10">New</span>
<img alt="Eye Serum" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Prickly Pear Eye Serum</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Brightens and naturally firms</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(29)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$52.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">
<img alt="Cleansing Oil" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Gentle Cleansing Oil</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Melts away makeup and impurities</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(64)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$28.00</p>
</div>
</div>
</div>

<div className="flex flex-col group cursor-pointer relative">
<div className="aspect-[4/5] bg-white mb-5 relative flex items-center justify-center p-8 overflow-hidden border border-[#E8E4DB]">
<img alt="Night Serum" className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1570194065650-d60fb4b86b43?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute bottom-0 left-0 right-0 p-4 translate-y-[120%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 ease-out">
<button className="w-full bg-[#2D2B2A] text-white py-3.5 text-sm tracking-wide font-light hover:bg-[#C67D63] transition-colors text-center shadow-lg">
                            Add to Cart
                        </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="font-serif-custom text-2xl tracking-tight mb-1 text-[#2D2B2A] group-hover:text-[#C67D63] transition-colors">Radiant Night Serum</h3>
<p className="text-sm text-[#6A6662] font-light mb-3">Restores skin while you sleep</p>
<div className="flex items-center text-[#C19A5B] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-half-circle-bold"></iconify-icon>
<span className="text-xs text-[#8B857D] ml-1.5 font-light">(52)</span>
</div>
<div className="mt-auto pt-2 border-t border-[#E8E4DB] flex justify-between items-center">
<p className="text-lg text-[#2D2B2A] tracking-tight">$65.00</p>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<button className="border border-[#D1CECA] text-[#2D2B2A] px-10 py-3.5 text-sm hover:border-[#2D2B2A] transition-colors bg-transparent uppercase tracking-wider font-light">
                Load More Products
            </button>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white border-t border-[#E8E4DB]">
<div className="max-w-4xl mx-auto text-center mb-16">
<span className="text-[#C67D63] uppercase tracking-widest text-sm font-normal mb-5 block">The Philosophy</span>
<h2 className="font-serif-custom text-4xl lg:text-5xl tracking-tight mb-8 text-[#2D2B2A]">Why Botanical Skincare?</h2>
<p className="text-lg text-[#6A6662] font-light leading-relaxed">
                Our skin absorbs what we put on it. By harnessing the power of natural, unrefined Moroccan ingredients, we provide your skin with bio-compatible nutrients that nourish deeply, restore balance, and protect without the use of harsh synthetic chemicals.
            </p>
</div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center pt-8">

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E4DB] flex items-center justify-center text-[#C67D63] mb-6">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight text-[#2D2B2A] mb-3">Argan Oil</h3>
<p className="text-base text-[#6A6662] font-light leading-relaxed">
                    Liquid gold rich in Vitamin E and essential fatty acids for supreme moisture and barrier protection.
                </p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E4DB] flex items-center justify-center text-[#C67D63] mb-6">
<iconify-icon className="text-2xl" icon="solar:blossom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight text-[#2D2B2A] mb-3">Damask Rose</h3>
<p className="text-base text-[#6A6662] font-light leading-relaxed">
                    A soothing botanical elixir that visibly reduces redness, calms irritation, and refreshes the skin.
                </p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E4DB] flex items-center justify-center text-[#C67D63] mb-6">
<iconify-icon className="text-2xl" icon="solar:waterdrops-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl tracking-tight text-[#2D2B2A] mb-3">Ghassoul Clay</h3>
<p className="text-base text-[#6A6662] font-light leading-relaxed">
                    An ancient, mineral-rich clay that gently detoxifies and purifies pores without stripping moisture.
                </p>
</div>
</div>
</section>

<footer className="bg-[#2D2B2A] text-[#FAF8F5] pt-24 pb-12 px-6 lg:px-12 mt-auto">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

<div>
<a className="font-serif-custom text-3xl tracking-tight flex flex-col items-start mb-8" href="#">
<span>SEEDS</span>
<span className="text-xs uppercase tracking-[0.2em] font-sans mt-0.5 text-[#A39E97]">Marrakech</span>
</a>
<p className="text-lg text-[#A39E97] mb-8 font-light max-w-xs leading-relaxed">
                    Pure botanical skincare inspired by traditional Moroccan beauty rituals.
                </p>
<div className="flex gap-4">
<a className="text-[#A39E97] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="text-[#A39E97] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:facebook"></iconify-icon>
</a>
<a className="text-[#A39E97] hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="mdi:twitter"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-lg font-normal tracking-tight mb-6">Shop</h4>
<ul className="space-y-4 text-lg text-[#A39E97] font-light">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors text-white" href="#">Face Care</a></li>
<li><a className="hover:text-white transition-colors" href="#">Body Care</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-normal tracking-tight mb-6">About</h4>
<ul className="space-y-4 text-lg text-[#A39E97] font-light">
<li><a className="hover:text-white transition-colors" href="#">Our Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Moroccan Ingredients</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-lg font-normal tracking-tight mb-6">The Ritual Newsletter</h4>
<p className="text-lg text-[#A39E97] mb-6 font-light leading-relaxed">
                    Subscribe to receive 10% off your first order, access to exclusive offers, and skincare tips.
                </p>
<form className="flex flex-col gap-4">
<input className="bg-transparent border-b border-[#6A6662] pb-3 text-lg text-white placeholder:text-[#6A6662] focus:outline-none focus:border-white transition-colors rounded-none" placeholder="Your email address" type="email"/>
<button className="text-left text-base uppercase tracking-wider text-[#C19A5B] hover:text-white transition-colors mt-2 w-max" type="submit">
                        Subscribe
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-[#4A4744] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#A39E97] font-light">
<p>© 2024 Seeds Marrakech. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
