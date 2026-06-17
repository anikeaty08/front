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
brand: {
black: '#1A1A1A',
gold: '#C9A96E',
cream: '#FAF8F5',
gray: '#8A8A8A'
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<div className="bg-brand-black text-white text-xs py-2 text-center tracking-wide font-light">
<span className="opacity-90">✨ COMPLIMENTARY SHIPPING ON ORDERS +$50 | CODE: <span className="font-medium text-brand-gold">BEAUTY15</span></span>
</div>

<header className="sticky top-0 z-50 w-full border-b border-stone-200/60 glass-panel">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden text-brand-black">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="20"></iconify-icon>
</button>

<div className="hidden lg:flex items-center gap-2 w-1/4">
<iconify-icon className="text-brand-gray" icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
<input className="bg-transparent text-xs placeholder-brand-gray focus:outline-none w-full font-light" placeholder="Search products..." type="text"/>
</div>

<a className="text-2xl lg:text-3xl serif tracking-tight font-medium text-brand-black text-center w-full lg:w-auto" href="#">
                APHORIA
            </a>

<div className="flex items-center justify-end gap-5 w-1/4">
<button className="hidden lg:block relative group">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="hidden lg:block">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="flex items-center gap-1">
<div className="relative">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-black rounded-full text-[8px] text-white flex items-center justify-center">2</span>
</div>
</button>
</div>
</div>

<nav className="hidden lg:flex justify-center border-t border-stone-100 py-3">
<ul className="flex gap-8 text-xs tracking-widest font-normal text-brand-black/80">
<li className="hover:text-brand-gold transition-colors cursor-pointer group relative">
                    SKINCARE
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white border border-stone-100 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4 z-50">
<ul className="space-y-2 text-brand-gray text-[11px] normal-case tracking-normal">
<li className="hover:text-brand-black cursor-pointer">Cleansers</li>
<li className="hover:text-brand-black cursor-pointer">Serums</li>
<li className="hover:text-brand-black cursor-pointer">Moisturizers</li>
<li className="hover:text-brand-black cursor-pointer">Sun Protection</li>
</ul>
</div>
</li>
<li className="hover:text-brand-gold transition-colors cursor-pointer">BODYCARE</li>
<li className="hover:text-brand-gold transition-colors cursor-pointer">MAKEUP</li>
<li className="hover:text-brand-gold transition-colors cursor-pointer">SETS</li>
<li className="hover:text-brand-gold transition-colors cursor-pointer">NEW IN</li>
<li className="text-red-900/80 hover:text-red-900 transition-colors cursor-pointer">SALE</li>
</ul>
</nav>
</header>
<main className="flex-grow">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

<div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-brand-gray mb-8">
<a className="hover:text-brand-black" href="#">Home</a>
<iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
<a className="hover:text-brand-black" href="#">Skincare</a>
<iconify-icon icon="lucide:chevron-right" width="10"></iconify-icon>
<span className="text-brand-black">Hydra Glow Serum</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-4">
<div className="relative w-full aspect-[4/5] bg-[#F0EFED] overflow-hidden rounded-sm group">

<img alt="Hydra Glow Serum" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-brand-black/5 backdrop-blur-md px-3 py-1 rounded-full">
<span className="text-[10px] font-medium tracking-wide">BESTSELLER</span>
</div>
</div>

<div className="grid grid-cols-4 gap-4">
<button className="aspect-square bg-[#F0EFED] rounded-sm border border-brand-black overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="aspect-square bg-[#F0EFED] rounded-sm border border-transparent hover:border-brand-gray/50 overflow-hidden transition-all">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="aspect-square bg-[#F0EFED] rounded-sm border border-transparent hover:border-brand-gray/50 overflow-hidden transition-all">
<img className="w-full h-full object-cover opacity-80 hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</button>
<div className="aspect-square bg-[#F0EFED] rounded-sm border border-transparent flex items-center justify-center cursor-pointer hover:bg-stone-200 transition-colors">
<iconify-icon className="text-brand-black/60" icon="lucide:play-circle" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full">
<div className="border-b border-brand-black/10 pb-6 mb-6">
<div className="flex items-center gap-1 text-brand-gold mb-3 text-xs">
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="12"></iconify-icon>
<span className="text-brand-gray ml-2 font-light text-[11px] underline cursor-pointer hover:text-brand-black transition-colors">124 Reviews</span>
</div>
<h1 className="text-4xl lg:text-5xl tracking-tight text-brand-black font-light mb-2">Hydra Glow Serum</h1>
<p className="text-xl font-light text-brand-black">$45.00</p>
<p className="mt-4 text-sm font-light text-brand-gray leading-relaxed">
                            A powerful Vitamin C serum enriched with hyaluronic acid to deeply hydrate, brighten complexion, and reduce the appearance of fine lines.
                        </p>
</div>

<div className="mb-6">
<span className="text-xs font-medium uppercase tracking-wide text-brand-black mb-3 block">Size</span>
<div className="flex gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="size" type="radio"/>
<div className="px-4 py-2 border border-brand-black/20 rounded-md text-xs transition-all hover:border-brand-black/60">
                                    30ml
                                </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="size" type="radio"/>
<div className="px-4 py-2 border border-brand-black/20 rounded-md text-xs transition-all hover:border-brand-black/60">
                                    50ml (+$20)
                                </div>
</label>
</div>
</div>

<div className="flex gap-4 mb-6">

<div className="flex items-center border border-brand-black/20 rounded-md w-24 justify-between px-3">
<button className="text-brand-black/50 hover:text-brand-black transition-colors">
<iconify-icon icon="lucide:minus" width="14"></iconify-icon>
</button>
<span className="text-sm font-light">1</span>
<button className="text-brand-black/50 hover:text-brand-black transition-colors">
<iconify-icon icon="lucide:plus" width="14"></iconify-icon>
</button>
</div>
<button className="flex-1 bg-brand-black text-white hover:bg-brand-black/90 transition-all rounded-md py-3 text-sm tracking-wide font-medium flex items-center justify-center gap-2">
<span>ADD TO CART</span>
<span className="w-1 h-1 bg-white rounded-full"></span>
<span>$45.00</span>
</button>
<button className="w-12 flex items-center justify-center border border-brand-black/20 rounded-md hover:border-brand-black transition-colors">
<iconify-icon icon="lucide:heart" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-2 bg-stone-100/50 p-3 rounded-md mb-8 border border-stone-200/50">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</div>
<span className="text-[11px] font-medium text-brand-black/80">12 people are viewing this right now</span>
</div>

<div className="space-y-0 border-t border-brand-black/10">
<details className="group py-4 border-b border-brand-black/10 cursor-pointer" open="">
<summary className="flex items-center justify-between text-xs font-medium uppercase tracking-wide select-none">
                                Description
                                <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm font-light text-brand-gray leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
<p className="mb-2">Experience the ultimate glow. Our Hydra Glow Serum combines 15% pure Vitamin C with Hyaluronic Acid to deliver intense hydration while correcting uneven skin tone.</p>
<ul className="list-disc list-inside space-y-1 ml-1 text-brand-gray/90">
<li>Boosts radiance immediately</li>
<li>Visibly reduces dark spots in 4 weeks</li>
<li>Fragrance-free &amp; non-comedogenic</li>
</ul>
</div>
</details>
<details className="group py-4 border-b border-brand-black/10 cursor-pointer">
<summary className="flex items-center justify-between text-xs font-medium uppercase tracking-wide select-none">
                                Ingredients
                                <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-xs font-mono text-brand-gray leading-relaxed">
                                Aqua/Water, Ascorbic Acid, Glycerin, Dimethicone, Sodium Hyaluronate, Tocopherol, Hydrolyzed Hyaluronic Acid.
                            </div>
</details>
<details className="group py-4 border-b border-brand-black/10 cursor-pointer">
<summary className="flex items-center justify-between text-xs font-medium uppercase tracking-wide select-none">
                                Shipping &amp; Returns
                                <span className="transition-transform group-open:rotate-180">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</span>
</summary>
<div className="mt-4 text-sm font-light text-brand-gray leading-relaxed">
                                Free shipping on orders over $50. We accept returns within 30 days of purchase for a full refund.
                            </div>
</details>
</div>

<div className="grid grid-cols-3 gap-2 mt-8 pt-4">
<div className="flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-brand-black/60" icon="lucide:leaf" width="18"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-brand-gray">Vegan</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-brand-black/60" icon="lucide:beaker" width="18"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-brand-gray">Cruelty Free</span>
</div>
<div className="flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-brand-black/60" icon="lucide:shield-check" width="18"></iconify-icon>
<span className="text-[10px] uppercase tracking-wide text-brand-gray">Dermatologist Tested</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-brand-black/5 bg-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl lg:text-3xl tracking-tight text-brand-black font-light">Complete Your Routine</h2>
<a className="text-xs font-medium underline underline-offset-4 decoration-brand-black/30 hover:decoration-brand-black transition-all" href="#">Shop All</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#F0EFED] mb-4 relative overflow-hidden rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-brand-black font-serif tracking-tight">Gentle Foam Cleanser</h3>
<p className="text-xs text-brand-gray mt-1">$28.00</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#F0EFED] mb-4 relative overflow-hidden rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-brand-black font-serif tracking-tight">Revital Eye Cream</h3>
<p className="text-xs text-brand-gray mt-1">$38.00</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#F0EFED] mb-4 relative overflow-hidden rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-brand-black font-serif tracking-tight">Daily Mineral SPF</h3>
<p className="text-xs text-brand-gray mt-1">$32.00</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] bg-[#F0EFED] mb-4 relative overflow-hidden rounded-sm">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</button>
</div>
<h3 className="text-sm font-medium text-brand-black font-serif tracking-tight">The Essentials Set</h3>
<p className="text-xs text-brand-gray mt-1"><span className="line-through mr-1 opacity-50">$106</span> $85.00</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-brand-cream border-t border-brand-black/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center gap-1 text-brand-gold mb-6">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<h3 className="text-2xl lg:text-3xl font-serif italic font-light leading-snug mb-6">"This serum completely changed my skin texture in just two weeks. It's lightweight, absorbs instantly, and the glow is real."</h3>
<div className="flex flex-col items-center gap-1">
<span className="text-xs font-semibold uppercase tracking-wider">Maria G.</span>
<span className="text-[10px] text-brand-gray flex items-center gap-1">
<iconify-icon icon="lucide:check-circle" width="10"></iconify-icon> Verified Buyer
                    </span>
</div>
</div>
</section>

<section className="py-20 border-t border-brand-black/5">
<div className="max-w-lg mx-auto px-6 text-center">
<h2 className="text-2xl tracking-tight mb-2">Join the Club</h2>
<p className="text-sm text-brand-gray font-light mb-6">Unlock 15% off your first order plus exclusive access to new launches.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-transparent border border-brand-black/20 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors font-light" placeholder="Enter your email" type="email"/>
<button className="bg-brand-black text-white px-8 py-3 rounded-md text-sm font-medium tracking-wide hover:bg-brand-black/90 transition-colors" type="button">SUBSCRIBE</button>
</form>
</div>
</section>
</main>

<footer className="bg-brand-black text-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl serif tracking-tight font-medium block mb-6" href="#">APHORIA</a>
<p className="text-xs text-white/60 font-light leading-relaxed mb-6">
                    Redefining beauty with clean, effective ingredients. Luxury skincare accessible to everyone.
                </p>
<div className="flex gap-4">
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="18"></iconify-icon></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Shop</h4>
<ul className="space-y-3 text-xs font-light text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Skincare</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bodycare</a></li>
<li><a className="hover:text-white transition-colors" href="#">Makeup</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sets &amp; Gifts</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Support</h4>
<ul className="space-y-3 text-xs font-light text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-widest mb-6">Legal</h4>
<ul className="space-y-3 text-xs font-light text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-white/40 font-light">© 2024 Aphoria Beauty. All rights reserved.</p>
<div className="flex gap-3 grayscale opacity-40">
<iconify-icon icon="lucide:credit-card" width="20"></iconify-icon>
<iconify-icon icon="lucide:wallet" width="20"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
