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
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6 transition-all duration-300">
<div className="flex items-center justify-between max-w-[1600px] mx-auto">

<div className="flex items-center gap-6">
<button className="group flex items-center gap-2 hover:opacity-70 transition-opacity">
<div className="flex flex-col gap-1.5">
<span className="w-6 h-[1px] bg-white group-hover:w-8 transition-all duration-300"></span>
<span className="w-6 h-[1px] bg-white group-hover:w-4 transition-all duration-300"></span>
</div>
</button>
<button className="hidden md:flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-mono text-xs uppercase tracking-widest">Search</span>
</button>
</div>

<a className="absolute left-1/2 -translate-x-1/2 group" href="#">
<h1 className="font-display text-4xl tracking-widest group-hover:tracking-[0.2em] transition-all duration-500">AGAPE</h1>
</a>

<div className="flex items-center gap-6">
<a className="hidden md:block font-mono text-xs uppercase tracking-widest opacity-70 hover:opacity-100 transition-opacity" href="#">Account</a>
<button className="flex items-center gap-2 group">
<span className="font-mono text-xs opacity-70 group-hover:opacity-100 hidden md:block">[0]</span>
<iconify-icon className="group-hover:text-[#C9A87C] transition-colors" icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen bg-[#000000] text-white overflow-hidden flex flex-col items-center justify-center">

<div className="absolute inset-0 opacity-40">
<img alt="Hero Background" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1523396870177-b760589d9e03?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
<div className="absolute inset-0 bg-black/20"></div>

<div className="relative z-10 text-center px-4 flex flex-col items-center">
<p className="font-mono text-xs md:text-sm text-[#C9A87C] tracking-widest mb-4 md:mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>EST. 2024</p>
<h2 className="font-display text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight mb-6 md:mb-10 opacity-0 animate-fade-in" style={{animationDelay: '0.4s'}}>
                WEAR YOUR<br/><span className="text-transparent stroke-text" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>FAITH</span>
</h2>
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 opacity-0 animate-fade-in" style={{animationDelay: '0.6s'}}>
<a className="group relative px-8 py-3 overflow-hidden border border-white/20 hover:border-[#C9A87C] transition-colors duration-300" href="#collection">
<span className="absolute inset-0 w-full h-full bg-[#C9A87C] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
<span className="relative font-display text-xl tracking-widest z-10 group-hover:text-black transition-colors">SHOP COLLECTION</span>
</a>
<button className="group flex items-center gap-3 hover:opacity-70 transition-opacity">
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C9A87C] transition-colors">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-mono text-xs tracking-widest uppercase">The Film</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 mix-blend-difference">
<span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
<div className="w-[1px] h-12 bg-white/50"></div>
</div>
</header>

<div className="bg-[#2C2C2C] text-white py-3 overflow-hidden whitespace-nowrap border-b border-white/10">
<div className="inline-flex animate-[slide_20s_linear_infinite]">
<span className="font-display text-2xl tracking-widest mx-8">PREMIUM CHRISTIAN STREETWEAR</span>
<span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
<span className="font-display text-2xl tracking-widest mx-8">DESIGNED FOR PURPOSE</span>
<span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
<span className="font-display text-2xl tracking-widest mx-8">LOVE UNCONDITIONALLY</span>
<span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
<span className="font-display text-2xl tracking-widest mx-8">AGAPE &amp; FAITH CO.</span>
<span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
<span className="font-display text-2xl tracking-widest mx-8">PREMIUM CHRISTIAN STREETWEAR</span>
<span className="font-mono text-sm text-[#C9A87C] mx-8">///</span>
<span className="font-display text-2xl tracking-widest mx-8">DESIGNED FOR PURPOSE</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">

<div className="relative group h-[400px] md:h-full w-full overflow-hidden bg-[#E5E5E5]">
<img alt="Man Category" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<div>
<h3 className="font-display text-4xl md:text-5xl text-white tracking-tight mb-2">ESSENTIALS</h3>
<p className="font-mono text-xs text-neutral-300 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">The Foundation Collection</p>
</div>
<button className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-rows-2 gap-4 h-full">

<div className="relative group h-[300px] md:h-full w-full overflow-hidden bg-[#2C2C2C]">
<img alt="Accessories" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-[#C9A87C] text-8xl opacity-10">ACC</span>
</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">
<h3 className="font-display text-3xl text-white tracking-widest">ACCESSORIES</h3>
<span className="font-mono text-xs text-[#C9A87C]">[ 08 ]</span>
</div>
</div>

<div className="relative group h-[300px] md:h-full w-full overflow-hidden bg-[#E5E5E5]">
<img alt="New Drop" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1550995694-03e854cd53e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/20 group-hover:bg-white/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="font-display text-black text-8xl opacity-5">NEW</span>
</div>
<div className="absolute top-6 right-6 font-mono text-xs text-[#C9A87C] bg-black px-2 py-1 uppercase tracking-widest">Just Dropped</div>
<div className="absolute bottom-6 left-6">
<h3 className="font-display text-3xl text-black tracking-widest">LATEST DROP</h3>
</div>
</div>
</div>
</div>
</section>

<div className="sticky top-[80px] z-40 bg-white/90 backdrop-blur-md border-y border-[#E5E5E5] py-4 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6 overflow-x-auto no-scrollbar w-full md:w-auto">
<button className="font-mono text-xs uppercase tracking-widest text-black border-b border-black pb-1">All Items</button>
<button className="font-mono text-xs uppercase tracking-widest text-[#808080] hover:text-black transition-colors pb-1">T-Shirts</button>
<button className="font-mono text-xs uppercase tracking-widest text-[#808080] hover:text-black transition-colors pb-1">Hoodies</button>
<button className="font-mono text-xs uppercase tracking-widest text-[#808080] hover:text-black transition-colors pb-1">Outerwear</button>
</div>
<div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-4 h-4 border border-[#808080] group-hover:border-black transition-colors">
<input className="peer appearance-none w-full h-full checked:bg-black" type="checkbox"/>
<iconify-icon className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-mono text-xs uppercase tracking-widest text-[#808080] group-hover:text-black">In Stock</span>
</label>
<button className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-black">
                    Filter <iconify-icon icon="solar:sort-vertical-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="py-12 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto" id="collection">
<div className="flex justify-between items-end mb-16">
<div>
<span className="font-mono text-xs text-[#808080] uppercase tracking-widest block mb-2">Foundation Series</span>
<h2 className="font-display text-4xl md:text-5xl text-black tracking-tight">LATEST ARRIVALS</h2>
</div>
<a className="hidden md:flex items-center gap-2 font-mono text-xs uppercase tracking-widest border-b border-transparent hover:border-black transition-all pb-1" href="#">
                View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
<img alt="Oversized Tee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<button className="w-full bg-black text-white font-display text-xl tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">
                            ADD TO CART
                        </button>
</div>

<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className="bg-[#C9A87C] text-white font-mono text-[10px] px-2 py-1 uppercase tracking-wider">New</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-wide group-hover:text-[#808080] transition-colors">OVERSIZED TEE</h3>
<p className="font-body font-light text-sm text-[#808080] mt-1">Heavyweight Cotton</p>
</div>
<span className="font-mono text-sm font-semibold">$45.00</span>
</div>

<div className="flex gap-2 mt-3">
<button className="w-4 h-4 rounded-full bg-black border border-transparent hover:scale-110 transition-transform"></button>
<button className="w-4 h-4 rounded-full bg-[#E5E5E5] border border-[#d4d4d4] hover:scale-110 transition-transform"></button>
<button className="w-4 h-4 rounded-full bg-[#C9A87C] border border-transparent hover:scale-110 transition-transform"></button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
<img alt="Agape Hoodie" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<button className="w-full bg-black text-white font-display text-xl tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">
                            ADD TO CART
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-wide group-hover:text-[#808080] transition-colors">AGAPE HOODIE</h3>
<p className="font-body font-light text-sm text-[#808080] mt-1">French Terry</p>
</div>
<span className="font-mono text-sm font-semibold">$85.00</span>
</div>
<div className="flex gap-2 mt-3">
<button className="w-4 h-4 rounded-full bg-[#2C2C2C] border border-transparent hover:scale-110 transition-transform"></button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
<img alt="Cargo Pant" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&amp;w=1897&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<button className="w-full bg-black text-white font-display text-xl tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">
                            ADD TO CART
                        </button>
</div>
<div className="absolute top-4 left-4">
<span className="bg-black text-white font-mono text-[10px] px-2 py-1 uppercase tracking-wider">Restock</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-wide group-hover:text-[#808080] transition-colors">CARGO PANT</h3>
<p className="font-body font-light text-sm text-[#808080] mt-1">Technical Nylon</p>
</div>
<span className="font-mono text-sm font-semibold">$95.00</span>
</div>
<div className="flex gap-2 mt-3">
<button className="w-4 h-4 rounded-full bg-black border border-transparent hover:scale-110 transition-transform"></button>
<button className="w-4 h-4 rounded-full bg-[#8B7355] border border-transparent hover:scale-110 transition-transform"></button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[3/4] bg-[#F5F5F5] mb-4 overflow-hidden">
<img alt="Signature Cap" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&amp;w=1935&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
<button className="w-full bg-black text-white font-display text-xl tracking-widest py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#2C2C2C]">
                            ADD TO CART
                        </button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-display text-xl tracking-wide group-hover:text-[#808080] transition-colors">SIGNATURE CAP</h3>
<p className="font-body font-light text-sm text-[#808080] mt-1">Embroidered Logo</p>
</div>
<span className="font-mono text-sm font-semibold">$35.00</span>
</div>
<div className="flex gap-2 mt-3">
<button className="w-4 h-4 rounded-full bg-black border border-transparent hover:scale-110 transition-transform"></button>
<button className="w-4 h-4 rounded-full bg-white border border-[#d4d4d4] hover:scale-110 transition-transform"></button>
</div>
</div>
</div>
</section>

<section className="bg-[#000000] text-white py-24 md:py-32 overflow-hidden relative">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C9A87C] rounded-full blur-[150px] opacity-10 translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<iconify-icon className="text-[#C9A87C] mb-8 animate-pulse" icon="solar:star-fall-linear" width="48"></iconify-icon>
<h2 className="font-display text-5xl md:text-7xl leading-none mb-8">
                    DESIGNED TO<br/>
<span className="text-[#808080]">SPEAK WITHOUT</span><br/>
                    WORDS.
                </h2>
<div className="flex gap-4 mb-8">

<div className="flex items-center gap-4 bg-white/5 border border-white/10 p-3 rounded-none w-full max-w-md">
<button className="w-8 h-8 flex items-center justify-center bg-white text-black">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</button>
<div className="flex-1 h-[2px] bg-white/20 relative group cursor-pointer">
<div className="absolute left-0 top-0 h-full w-[30%] bg-[#C9A87C]"></div>
<div className="absolute left-[30%] top-1/2 -translate-y-1/2 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="font-mono text-[10px] text-white/60">01:24</span>
</div>
</div>
</div>
<div className="border-l border-white/20 pl-8 md:pl-16">
<p className="font-body font-light text-lg md:text-xl text-[#E5E5E5] leading-relaxed mb-8">
                    Agape believes that minimalist design can carry deep purpose. Each piece is created to express values without shouting, just silent presence. Our mission is to dress faith with urban elegance, creating authentic connections through unconditional love.
                </p>
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="font-display text-2xl tracking-widest mb-2 text-[#C9A87C]">ETHICAL</h4>
<p className="font-mono text-xs text-white/50 leading-relaxed">Sustainably sourced materials and fair labor practices in every stitch.</p>
</div>
<div>
<h4 className="font-display text-2xl tracking-widest mb-2 text-[#C9A87C]">TIMELESS</h4>
<p className="font-mono text-xs text-white/50 leading-relaxed">Silhouettes designed to transcend trends and seasons.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden bg-[#2C2C2C]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-fixed opacity-40 grayscale mix-blend-luminosity"></div>
<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
<div className="flex justify-between items-start">
<div className="bg-black/80 backdrop-blur-sm text-white p-6 border border-white/10 max-w-sm">
<span className="font-mono text-xs text-[#C9A87C] uppercase tracking-widest mb-2 block">Season 01</span>
<h3 className="font-display text-3xl mb-4">THE URBAN SAINT</h3>
<p className="font-body text-sm font-light text-gray-300 mb-6">Navigating the concrete jungle with grace and purpose.</p>
<a className="font-mono text-xs uppercase underline underline-offset-4 hover:text-[#C9A87C] transition-colors" href="#">View Lookbook</a>
</div>
</div>
<div className="self-end flex gap-4">
<button className="w-12 h-12 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 border-t border-[#E5E5E5] bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4">JOIN THE MOVEMENT</h2>
<p className="font-body text-[#808080] mb-10">Subscribe for exclusive drops, early access, and inspiration.</p>
<form className="flex flex-col md:flex-row gap-4">
<div className="flex-1 relative">
<input className="w-full bg-[#F5F5F5] border border-transparent focus:border-black p-4 font-mono text-xs outline-none transition-all placeholder:text-[#808080] placeholder:tracking-widest" placeholder="EMAIL ADDRESS" type="email"/>
</div>
<button className="bg-black text-white font-display text-xl tracking-widest px-8 py-4 hover:bg-[#C9A87C] transition-colors duration-300" type="submit">
                    SUBSCRIBE
                </button>
</form>
<div className="mt-6 flex items-center justify-center gap-2">
<label className="flex items-center gap-2 cursor-pointer">
<div className="w-3 h-3 border border-[#808080] relative">
<input className="peer appearance-none w-full h-full checked:bg-black" type="checkbox"/>
</div>
<span className="font-mono text-[10px] text-[#808080] uppercase">I agree to the terms &amp; conditions</span>
</label>
</div>
</div>
</section>

<footer className="bg-[#000000] text-white pt-24 pb-12 border-t border-white/10">
<div className="max-w-[1600px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="col-span-1 md:col-span-1">
<h2 className="font-display text-5xl tracking-widest mb-6">AGAPE</h2>
<p className="font-body text-sm text-[#808080] font-light max-w-xs">
                        Premium Christian Streetwear.<br/>
                        Based in Brazil, shipping worldwide.
                    </p>
</div>
<div>
<h4 className="font-mono text-xs text-[#C9A87C] uppercase tracking-widest mb-6">Shop</h4>
<ul className="flex flex-col gap-3 font-body text-sm font-light text-[#E5E5E5]">
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">All Products</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">New Arrivals</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">Accessories</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-[#C9A87C] uppercase tracking-widest mb-6">Info</h4>
<ul className="flex flex-col gap-3 font-body text-sm font-light text-[#E5E5E5]">
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">About Us</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">Sizing Guide</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white hover:underline underline-offset-4 transition-all" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs text-[#C9A87C] uppercase tracking-widest mb-6">Social</h4>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<iconify-icon icon="solar:music-note-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
<p className="font-mono text-[10px] text-[#808080] uppercase tracking-widest">© 2024 Agape &amp; Faith Co. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="font-mono text-[10px] text-[#808080] uppercase tracking-widest hover:text-white" href="#">Privacy</a>
<a className="font-mono text-[10px] text-[#808080] uppercase tracking-widest hover:text-white" href="#">Terms</a>
</div>
</div>
</div>
</footer>

<style>
        .stroke-text {
            -webkit-text-fill-color: transparent;
        }
        @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
    </style>

    </>
  );
}
