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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c8c7cf95-9760-4071-87eb-eac8216f91a6_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 bg-black/80 border-neutral-900">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 text-neutral-400 hover:text-neutral-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 z-20 font-geist" href="#">
                MONARCH WORLD
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal text-neutral-500">
<a className="transition-colors font-geist hover:text-neutral-100" href="#new">New Arrivals</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#shop">Shop</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#collections">Collections</a>
<a className="transition-colors font-geist hover:text-neutral-100" href="#journal">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="p-1 text-neutral-500 transition-colors hover:text-neutral-100">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-1 text-neutral-500 transition-colors hidden sm:block hover:text-neutral-100">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-1 text-neutral-500 transition-colors relative group hover:text-neutral-100">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-0 right-0 -mt-1 -mr-1 h-2 w-2 rounded-full group-hover:scale-110 transition-transform bg-neutral-100"></span>
</button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden border-b pt-32 pr-6 pb-16 pl-6 relative border-neutral-900">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="z-10 relative space-y-8">
<div className="inline-flex text-xs font-medium text-neutral-400 tracking-wide font-geist bg-neutral-950 border-neutral-800 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 animate-pulse bg-neutral-100 rounded-full"></span>
                    FALL COLLECTION 2024
                </div>
<h1 className="text-5xl lg:text-7xl tracking-tighter leading-[1.1] font-space-grotesk font-semibold text-neutral-50">
                    Elevate your <br/> <span className="font-semibold text-neutral-600 font-space-grotesk">everyday essence.</span>
</h1>
<p className="text-neutral-500 text-base lg:text-lg max-w-md font-light leading-relaxed font-geist">
                    Monarch World curates objects of permanence. Meticulously designed for the modern connoisseur who values silence over noise.
                </p>
<div className="flex items-center gap-4 pt-4">
<a className="group relative px-6 py-3 text-sm font-medium rounded-md overflow-hidden transition-all bg-neutral-100 text-black hover:bg-neutral-200" href="#shop">
<span className="relative z-10 flex items-center gap-2 font-geist">
                            Explore Collection
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
<a className="px-6 py-3 text-sm font-medium border rounded-md transition-colors font-geist text-neutral-100 border-neutral-800 hover:border-neutral-600" href="#">
                        Our Philosophy
                    </a>
</div>
</div>
<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent rounded-2xl transform rotate-3 scale-95 opacity-50 transition-transform group-hover:rotate-6 duration-700 from-neutral-900"></div>
</div>
</div>
</section>

<section className="py-10 border-b border-neutral-900 bg-neutral-950/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium tracking-widest uppercase mb-8 font-geist text-neutral-600">Trusted by visionaries worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">

<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="20" width="20" x="35" y="5"></rect><polygon points="70,25 80,5 90,25"></polygon></svg>
<svg className="h-6 w-auto" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 Q25,25 40,5 M50,5 L50,25 M70,5 L90,5 M80,5 L80,25" fill="none" stroke="currentColor" strokeWidth="3"></path></svg>
<svg className="h-5 w-auto" fill="currentColor" viewbox="0 0 100 30"><rect height="10" transform="rotate(45 15 15)" width="10" x="10" y="10"></rect><circle cx="50" cy="15" r="8"></circle><rect height="20" width="4" x="80" y="5"></rect></svg>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="shop">
<div className="flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
<div className="">
<h3 className="text-sm font-medium mb-4 tracking-tight font-geist text-neutral-100">Categories</h3>
<ul className="space-y-2.5">
<li className="">
<label className="inline-flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors w-4 h-4 border-neutral-700 border rounded-[4px]"></div>
<iconify-icon className="absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm group-hover:text-neutral-900 transition-colors font-geist text-neutral-400">All Products</span>
</label>
</li>
<li>
<label className="inline-flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors border-neutral-700"></div>
<iconify-icon className="absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm group-hover:text-neutral-900 transition-colors font-geist text-neutral-400">Timepieces</span>
</label>
</li>
<li>
<label className="inline-flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors border-neutral-700"></div>
<iconify-icon className="absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm group-hover:text-neutral-900 transition-colors font-geist text-neutral-400">Leather Goods</span>
</label>
</li>
<li>
<label className="inline-flex items-center group cursor-pointer">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded-[4px] peer-checked:bg-neutral-900 peer-checked:border-neutral-900 transition-colors border-neutral-700"></div>
<iconify-icon className="absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 pointer-events-none text-black" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="ml-3 text-sm group-hover:text-neutral-900 transition-colors font-geist text-neutral-400">Eyewear</span>
</label>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-medium mb-4 tracking-tight font-geist text-neutral-100">Price Range</h3>
<div className="space-y-4">
<input className="w-full appearance-none h-1 rounded-full outline-none bg-neutral-800" max="1000" min="0" type="range" value="400"/>
<div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
<span className="font-geist">$0</span>
<span className="font-geist">$10,000+</span>
</div>
</div>
</div>

<div className="p-6 rounded-xl mt-8 relative overflow-hidden bg-neutral-100 text-black">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:crown-star-linear" width="80"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-2 font-geist">Monarch Club</h4>
<p className="text-xs mb-4 leading-relaxed font-geist text-neutral-600">Join for exclusive access to limited editions.</p>
<button className="w-full py-2 text-xs font-semibold rounded transition-colors font-geist bg-black text-neutral-100 hover:bg-neutral-900">
                        Join Now
                    </button>
</div>
</aside>

<div className="flex-1">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl tracking-tight font-space-grotesk font-semibold text-neutral-100">Curated Objects</h2>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-neutral-500 font-geist">Sort by:</span>
<div className="relative group">
<button className="flex items-center gap-1 text-xs font-medium font-geist text-neutral-100">
                                Featured
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<img alt="Watch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&amp;w=1999&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full py-3 backdrop-blur-md text-xs font-semibold rounded shadow-lg border flex items-center justify-center gap-2 transition-colors font-geist bg-black/95 text-neutral-100 border-neutral-900 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                    Add to Cart
                                </button>
</div>

<button className="absolute top-3 right-3 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:text-indigo-500 bg-black/80">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">Obsidian Chronograph</h3>
<span className="text-sm font-medium font-geist text-neutral-100">$2,450</span>
</div>
<p className="text-xs text-neutral-500 font-geist">Swiss Movement, 42mm</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<span className="absolute top-3 left-3 px-2 py-1 text-[10px] font-semibold tracking-wider uppercase rounded-sm z-10 font-geist bg-neutral-100 text-black">Sold Out</span>
<img alt="Perfume" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">No. 5 Essence</h3>
<span className="text-sm font-medium line-through font-geist text-neutral-600">$180</span>
</div>
<p className="text-xs text-neutral-500 font-geist">Sandalwood &amp; Bergamot</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<img alt="Leather Bag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full py-3 backdrop-blur-md text-xs font-semibold rounded shadow-lg border flex items-center justify-center gap-2 transition-colors font-geist bg-black/95 text-neutral-100 border-neutral-900 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">Weekender Tote</h3>
<span className="text-sm font-medium font-geist text-neutral-100">$890</span>
</div>
<p className="text-xs text-neutral-500 font-geist">Full-grain Italian leather</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<span className="absolute top-3 left-3 px-2 py-1 border text-[10px] font-semibold tracking-wider uppercase rounded-sm z-10 font-geist bg-black border-neutral-800 text-neutral-100">New</span>
<img alt="Sunglasses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full py-3 backdrop-blur-md text-xs font-semibold rounded shadow-lg border flex items-center justify-center gap-2 transition-colors font-geist bg-black/95 text-neutral-100 border-neutral-900 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">Aviator 1980</h3>
<span className="text-sm font-medium font-geist text-neutral-100">$320</span>
</div>
<p className="text-xs text-neutral-500 font-geist">Polarized, Gold Frame</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<img alt="Smart Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full py-3 backdrop-blur-md text-xs font-semibold rounded shadow-lg border flex items-center justify-center gap-2 transition-colors font-geist bg-black/95 text-neutral-100 border-neutral-900 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">Ceramic Diffuser</h3>
<span className="text-sm font-medium font-geist text-neutral-100">$125</span>
</div>
<p className="text-xs text-neutral-500 font-geist">Matte Black Finish</p>
</div>
</div>

<div className="group relative flex flex-col gap-3">
<div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-900">
<img alt="Camera" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter saturate-0 group-hover:saturate-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
<button className="w-full py-3 backdrop-blur-md text-xs font-semibold rounded shadow-lg border flex items-center justify-center gap-2 transition-colors font-geist bg-black/95 text-neutral-100 border-neutral-900 hover:bg-neutral-100 hover:text-black">
<iconify-icon icon="solar:cart-plus-linear" width="16"></iconify-icon>
                                    Add to Cart
                                </button>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium tracking-tight font-geist text-neutral-100">Analog M3</h3>
<span className="text-sm font-medium font-geist text-neutral-100">$3,100</span>
</div>
<p className="text-xs text-neutral-500 font-geist">35mm Film Camera</p>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-between border-t pt-8 border-neutral-900">
<button className="text-sm text-neutral-500 flex items-center gap-2 disabled:opacity-50 font-geist hover:text-neutral-100" disabled="">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
                        Previous
                    </button>
<div className="flex items-center gap-1">
<button className="w-8 h-8 flex items-center justify-center rounded text-xs font-medium font-geist bg-neutral-100 text-black">1</button>
<button className="w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-colors font-geist hover:bg-neutral-900 text-neutral-400">2</button>
<button className="w-8 h-8 flex items-center justify-center rounded text-xs font-medium transition-colors font-geist hover:bg-neutral-900 text-neutral-400">3</button>
</div>
<button className="text-sm flex items-center gap-2 font-geist text-neutral-100 hover:text-neutral-300">
                        Next
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 text-black">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-neutral-300"></div>
<img alt="Store Interior" className="hover:opacity-100 transition-opacity duration-700 opacity-80 w-full rounded-lg grayscale" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-neutral-300"></div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<iconify-icon className="text-neutral-500" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<h2 className="text-3xl lg:text-5xl tracking-tighter leading-tight font-space-grotesk font-semibold">
                    Defined by  what we omit.
                </h2>
<p className="font-light leading-relaxed max-w-sm font-geist text-neutral-600">
                    Monarch World isn't just a shop. It is a philosophy of reduction. We strip away the unnecessary to reveal the essential beauty of craftsmanship. Every item is hand-selected for its permanence and quiet luxury.
                </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-xl font-medium tracking-tight mb-1 font-geist">100+</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-geist">Artisans</p>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-1 font-geist">Zero</h4>
<p className="text-xs text-neutral-500 uppercase tracking-wider font-geist">Compromises</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-b pt-24 pb-24 border-neutral-900">
<div className="max-w-xl mx-auto px-6 text-center space-y-6">
<h2 className="text-2xl tracking-tight font-space-grotesk font-semibold text-neutral-100">The Monarch Journal</h2>
<p className="text-sm text-neutral-500 font-light font-geist">Insights on design, minimalism, and the art of living well.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 focus:outline-none focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-all placeholder:text-neutral-400 text-sm border rounded-md pt-3 pr-4 pb-3 pl-4 bg-neutral-950 border-neutral-800" placeholder="email@address.com" required="" type="email"/>
<button className="transition-colors flex text-sm font-medium rounded-md pt-3 pr-6 pb-3 pl-6 gap-x-2 gap-y-2 items-center justify-center font-geist hover:bg-neutral-200 text-black bg-neutral-100" type="submit">
                    Subscribe
                    <iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2 space-y-4">
<a className="text-lg font-semibold tracking-tighter uppercase block font-geist" href="#">MONARCH WORLD</a>
<p className="text-sm font-light text-neutral-500 max-w-xs font-geist">
                        Curating the finest in luxury minimalism. <br/>Based in Tokyo &amp; New York.
                    </p>
<div className="flex gap-4 pt-2">
<a className="transition-colors text-neutral-600 hover:text-neutral-100" href="#">
<iconify-icon icon="brandico:twitter" width="16"></iconify-icon> 
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-neutral-600 hover:text-neutral-100" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 font-geist text-neutral-100">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">New Arrivals</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Best Sellers</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Home &amp; Living</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 font-geist text-neutral-100">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">About Us</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Sustainability</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Careers</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Press</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold uppercase tracking-wider mb-4 font-geist text-neutral-100">Support</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">FAQ</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Shipping</a></li>
<li><a className="transition-colors font-geist hover:text-neutral-100" href="#">Returns</a></li>
<li className=""><a className="transition-colors font-geist hover:text-neutral-100" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs font-light border-neutral-900 text-neutral-600">
<p className="font-geist">© 2024 Monarch World Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="font-geist hover:text-neutral-100" href="#">Privacy Policy</a>
<a className="font-geist hover:text-neutral-100" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
