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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter text-white uppercase" href="#">
                BeezyFitz
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-tight text-neutral-400">
<a className="hover:text-white transition-colors duration-300" href="#">New Arrivals</a>
<a className="hover:text-white transition-colors duration-300" href="#">Collections</a>
<a className="hover:text-white transition-colors duration-300" href="#">Manifesto</a>
<a className="hover:text-white transition-colors duration-300" href="#">Archives</a>
</div>

<div className="flex items-center gap-6">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-neutral-400 hover:text-white transition-colors relative">
<iconify-icon height="20" icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Streetwear Model" className="w-full h-full object-cover grayscale opacity-60" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2520&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
<div className="absolute inset-0 bg-neutral-950/20"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
<p className="text-xs font-medium tracking-[0.2em] text-neutral-400 mb-6 uppercase">The Silence Collection</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9] mb-8">
                ELEVATE YOUR<br/>REALITY.
            </h1>
<p className="text-neutral-300 text-sm md:text-base max-w-lg mx-auto mb-10 leading-relaxed font-light">
                Luxury simplicity meets raw street influence. Built for the ambitious, the disciplined, and the self-made. 
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-3 bg-white text-neutral-950 text-sm font-medium tracking-wide overflow-hidden" href="#">
<span className="relative z-10 group-hover:text-white transition-colors duration-300">SHOP DROP 01</span>
<div className="absolute inset-0 bg-neutral-900 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
<a className="group px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:bg-white/5 transition-colors" href="#">
                    WATCH FILM
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] tracking-widest uppercase">Scroll</span>
<div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<div className="w-full border-y border-white/10 bg-neutral-950 py-3 overflow-hidden">
<div className="flex whitespace-nowrap gap-12 text-xs font-medium tracking-widest text-neutral-500 uppercase">
<span>/// Confidence &amp; Discipline</span>
<span>/// Raw Street Influence</span>
<span>/// Clean Minimal Energy</span>
<span>/// Future Focused</span>
<span>/// Confidence &amp; Discipline</span>
<span>/// Raw Street Influence</span>
<span>/// Clean Minimal Energy</span>
<span>/// Future Focused</span>
<span>/// Confidence &amp; Discipline</span>
<span>/// Raw Street Influence</span>
<span>/// Clean Minimal Energy</span>
<span>/// Future Focused</span>
</div>
</div>

<section className="py-24 px-6 max-w-screen-2xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white mb-2">LATEST ARRIVALS</h2>
<p className="text-neutral-500 text-sm">Engineered for the daily grind.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white hover:text-neutral-400 transition-colors" href="#">
                View All <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Hoodie" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="bg-white/10 backdrop-blur-md p-2 hover:bg-white hover:text-black transition-colors">
<iconify-icon height="18" icon="solar:bag-plus-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:underline decoration-neutral-700 underline-offset-4">Core Oversized Hoodie</h3>
<p className="text-xs text-neutral-500 mt-1">Heavyweight Cotton</p>
</div>
<span className="text-sm font-medium text-white">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Tee" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        New
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:underline decoration-neutral-700 underline-offset-4">Box Fit Graphic Tee</h3>
<p className="text-xs text-neutral-500 mt-1">Monochrome Series</p>
</div>
<span className="text-sm font-medium text-white">$65</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Jacket" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=1897&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:underline decoration-neutral-700 underline-offset-4">Tech Utility Vest</h3>
<p className="text-xs text-neutral-500 mt-1">Water Resistant</p>
</div>
<span className="text-sm font-medium text-white">$150</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-4">
<img alt="Accessories" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:underline decoration-neutral-700 underline-offset-4">Minimalist Cap</h3>
<p className="text-xs text-neutral-500 mt-1">Embroidered Logo</p>
</div>
<span className="text-sm font-medium text-white">$45</span>
</div>
</div>
</div>
</section>

<section className="bg-white text-neutral-950 py-32 px-6">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[0.9] mb-8">
                    NOT LOUD.<br/>JUST BOLD.
                </h2>
<div className="space-y-6 text-neutral-600 text-sm md:text-base leading-relaxed">
<p>
                        We don’t chase waves, we create the current. BeezyFitz was born from the idea that style shouldn't scream for attention. It should command respect through quality, cut, and confidence.
                    </p>
<p>
                        Designed for the self-made. The ones grinding in silence. The ones building the future. This is more than fabric—it's a uniform for your ambition.
                    </p>
</div>
<div className="mt-10 flex gap-8">
<div className="flex flex-col gap-1">
<iconify-icon height="28" icon="solar:shield-star-linear" width="28"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide mt-2">Premium Quality</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon height="28" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide mt-2">Exclusive Batches</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon height="28" icon="solar:globe-linear" width="28"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wide mt-2">Global Vision</span>
</div>
</div>
</div>
<div className="relative h-[600px] w-full bg-neutral-100 overflow-hidden">
<img alt="Lifestyle" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&amp;w=1995&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2">
<p className="text-xs font-bold tracking-tight">EST. 2024</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-screen-2xl mx-auto border-t border-neutral-900">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-white">VISUAL IDENTITY</h2>
<div className="flex gap-2">
<button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 h-auto md:h-[600px]">
<div className="relative group overflow-hidden md:col-span-1 h-[400px] md:h-full bg-neutral-900">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
<p className="text-lg font-medium tracking-tight text-white">Concrete Jungle</p>
<p className="text-xs text-neutral-400">Campaign 01</p>
</div>
</div>
<div className="relative group overflow-hidden md:col-span-2 h-[400px] md:h-full bg-neutral-900">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
<button className="px-6 py-2 border border-white/30 backdrop-blur-sm text-sm text-white hover:bg-white hover:text-black transition-colors">View Lookbook</button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 py-24 px-6 bg-neutral-950">
<div className="max-w-xl mx-auto text-center">
<h3 className="text-2xl font-medium tracking-tighter text-white mb-3">JOIN THE INNER CIRCLE</h3>
<p className="text-neutral-500 text-sm mb-8">Early access to drops, exclusive content, and members-only archives.</p>
<form className="flex flex-col sm:flex-row gap-2" onsubmit="event.preventDefault()">
<input className="flex-1 bg-transparent border border-neutral-800 text-white text-sm px-4 py-3 outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-neutral-950 px-6 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors" type="submit">
                    SUBSCRIBE
                </button>
</form>
<p className="text-[10px] text-neutral-600 mt-4">By signing up, you agree to our Terms &amp; Privacy Policy.</p>
</div>
</section>

<footer className="pt-20 pb-10 px-6 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white uppercase mb-6 block" href="#">
                    BeezyFitz
                </a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                    Modern streetwear built around confidence, ambition, and clean minimal energy. Elevate your standard.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-x-linear" width="19"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-medium">Shop</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">All Products</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">New Arrivals</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Accessories</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Gift Cards</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-medium">Brand</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">About Us</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">The Manifesto</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Careers</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white text-sm font-medium">Support</h4>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">FAQ</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Shipping</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Returns</a>
<a className="text-neutral-500 text-sm hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8 gap-4">
<p className="text-neutral-600 text-xs">© 2024 BeezyFitz. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
