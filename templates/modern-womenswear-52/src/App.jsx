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
      

<div className="bg-[#A48F7F] py-2 text-center relative z-50 text-white">
<div className="container mx-auto px-4 flex justify-center items-center gap-2">
<span className="text-xs font-medium tracking-wide">Free Shipping on all orders over $60</span>
<span className="w-1 h-1 rounded-full bg-white/50"></span>
<a className="text-xs font-medium underline underline-offset-4 transition-all decoration-white/50 hover:decoration-white" href="#">Shop New Arrivals</a>
</div>
</div>

<nav className="sticky top-0 w-full z-40 backdrop-blur-md border-b transition-all duration-300 bg-white/95 border-zinc-100">
<div className="max-w-[1400px] mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">

<div className="flex items-center gap-4 md:hidden">
<button className="p-1 rounded-full transition-colors hover:bg-zinc-50">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="p-1 rounded-full transition-colors hover:bg-zinc-50">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-[#A48F7F] transition-colors relative group text-black" href="#">
                    New In
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-[#A48F7F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-[#A48F7F] transition-colors" href="#">Apparel</a>
<a className="hover:text-[#A48F7F] transition-colors" href="#">Dresses</a>
<a className="hover:text-[#A48F7F] transition-colors text-rose-500" href="#">Sale</a>
</div>

<a className="absolute left-1/2 -translate-x-1/2 text-2xl md:text-3xl font-serif font-medium tracking-tight text-zinc-900" href="#">
                MOOD.
            </a>

<div className="flex items-center gap-2 md:gap-6">
<div className="hidden md:flex items-center gap-2 border-r pr-6 mr-2 border-zinc-200">
<iconify-icon className="text-zinc-400" icon="solar:globe-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-zinc-500">Global (USD)</span>
</div>
<button className="hidden md:block p-1 hover:text-[#A48F7F] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="p-1 hover:text-[#A48F7F] transition-colors">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="p-1 hover:text-[#A48F7F] transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 w-4 h-4 bg-[#A48F7F] text-[10px] flex items-center justify-center rounded-full text-white">2</span>
</button>
</div>
</div>
</nav>

<header className="relative bg-[#F8F5F2] overflow-hidden">
<div className="max-w-[1440px] mx-auto flex flex-col md:flex-row h-auto md:h-[650px]">

<div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-20 py-16 md:py-0 order-2 md:order-1 fade-in-up">
<span className="uppercase text-xs font-bold text-[#A48F7F] tracking-[0.2em] mb-4">The Spring Edit</span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 text-zinc-900">
                    Effortless <br/>
<span className="font-light italic">Elegance</span>
</h1>
<p className="text-base md:text-lg mb-8 max-w-md font-light leading-relaxed text-zinc-600">
                    Discover the new collection designed for the modern woman. Versatile pieces that take you from work to weekend with ease.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-[#A48F7F] transition-colors duration-300 text-center min-w-[160px] bg-zinc-900 text-white" href="#">
                        Shop The Collection
                    </a>
<a className="px-8 py-3.5 border text-sm font-medium tracking-wide transition-colors duration-300 text-center min-w-[160px] bg-white border-zinc-300 text-zinc-900 hover:border-zinc-900" href="#">
                        View Lookbook
                    </a>
</div>
</div>

<div className="w-full md:w-1/2 h-[500px] md:h-full relative order-1 md:order-2 group overflow-hidden">
<img alt="Spring Collection" className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</header>

<section className="py-12 border-b border-zinc-100">
<div className="max-w-[1400px] mx-auto px-4 overflow-x-auto no-scrollbar">
<div className="flex md:justify-center gap-8 min-w-max">
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border group-hover:border-[#A48F7F] transition-colors border-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs md:text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-700">Dresses</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border group-hover:border-[#A48F7F] transition-colors border-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs md:text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-700">Tops</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border group-hover:border-[#A48F7F] transition-colors border-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs md:text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-700">Denim</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border group-hover:border-[#A48F7F] transition-colors border-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs md:text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-700">Workwear</span>
</a>
<a className="group flex flex-col items-center gap-3" href="#">
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border group-hover:border-[#A48F7F] transition-colors border-zinc-200">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs md:text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-700">Outerwear</span>
</a>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="md:px-8 max-w-[1400px] mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col items-center text-center mb-12 fade-in-up">
<h2 className="text-3xl md:text-4xl font-serif mb-3 text-zinc-900">This Week's Favorites</h2>
<p className="text-zinc-500 text-sm md:text-base max-w-2xl">Curated styles that are trending now. Versatile staples for every occasion.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 aspect-3-4 bg-[#f5f5f5]">
<img alt="Dress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-white text-zinc-900">New In</div>
<button className="absolute bottom-4 left-4 right-4 backdrop-blur-sm py-3 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-zinc-900 hover:bg-zinc-900 hover:text-white">
                            Quick View
                        </button>
</div>
<h3 className="text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-900">Aria Linen Midi Dress</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-zinc-500">$59.90</span>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-3 h-3 rounded-full bg-[#E5D0C5] border cursor-pointer border-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-[#8E9B90] border cursor-pointer border-zinc-200"></div>
<div className="w-3 h-3 rounded-full border cursor-pointer bg-black border-zinc-200"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 aspect-3-4 bg-[#f5f5f5]">
<img alt="Blouse" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-[#A48F7F] px-2 py-1 text-[10px] font-bold tracking-wider uppercase text-white">Best Seller</div>
<button className="absolute bottom-4 left-4 right-4 backdrop-blur-sm py-3 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-zinc-900 hover:bg-zinc-900 hover:text-white">
                            Quick View
                        </button>
</div>
<h3 className="text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-900">Siena Pleated Blouse</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-zinc-500">$35.90</span>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-3 h-3 rounded-full border cursor-pointer bg-white border-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-[#D4C4B7] border cursor-pointer border-zinc-200"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 aspect-3-4 bg-[#f5f5f5]">
<img alt="Pants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 left-4 right-4 backdrop-blur-sm py-3 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-zinc-900 hover:bg-zinc-900 hover:text-white">
                            Quick View
                        </button>
</div>
<h3 className="text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-900">Luna Wide Leg Trousers</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-zinc-500">$49.90</span>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-3 h-3 rounded-full bg-[#333] border cursor-pointer border-zinc-200"></div>
<div className="w-3 h-3 rounded-full bg-[#A48F7F] border cursor-pointer border-zinc-200"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden mb-4 aspect-3-4 bg-[#f5f5f5]">
<img alt="Dress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold tracking-wider uppercase bg-red-400 text-white">Sale</div>
<button className="absolute bottom-4 left-4 right-4 backdrop-blur-sm py-3 text-xs font-bold uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-white/90 text-zinc-900 hover:bg-zinc-900 hover:text-white">
                            Quick View
                        </button>
</div>
<h3 className="text-sm font-medium group-hover:text-[#A48F7F] transition-colors text-zinc-900">Flora Wrap Midi</h3>
<div className="flex items-center gap-2 mt-1">
<span className="text-sm text-red-500 font-medium">$42.00</span>
<span className="text-xs line-through text-zinc-400">$65.00</span>
</div>
<div className="flex gap-1.5 mt-2">
<div className="w-3 h-3 rounded-full bg-[#E8DCC4] border cursor-pointer border-zinc-200"></div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b pb-1 hover:text-[#A48F7F] hover:border-[#A48F7F] transition-colors border-black" href="#">
                    View All New Arrivals
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 bg-[#F7F7F7]">
<div className="relative h-[500px] md:h-[600px] overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col items-start text-white">
<span className="text-xs font-bold tracking-[0.2em] uppercase mb-3">Workwear Edit</span>
<h3 className="text-3xl md:text-5xl font-serif mb-6">9 to 5, Redefined.</h3>
<a className="px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#A48F7F] transition-colors bg-white text-black hover:text-white" href="#">
                    Shop Workwear
                 </a>
</div>
</div>
<div className="relative h-[500px] md:h-[600px] overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1529139574466-a302d2052505?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col items-start text-white">
<span className="text-xs font-bold tracking-[0.2em] uppercase mb-3">Occasion Wear</span>
<h3 className="text-3xl md:text-5xl font-serif mb-6">The Guest List.</h3>
<a className="px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-[#A48F7F] transition-colors bg-white text-black hover:text-white" href="#">
                    Shop Dresses
                 </a>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-[1400px] mx-auto px-4 md:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl md:text-4xl font-serif mb-2 text-zinc-900">#MOODCommunity</h2>
<p className="text-zinc-500 text-sm">Join the movement. Tag us to be featured.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-[#A48F7F] transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="18"></iconify-icon>
                    @mood.official
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4">
<div className="aspect-square overflow-hidden group relative rounded-sm bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-bold"></iconify-icon>
</div>
</div>
<div className="aspect-square overflow-hidden group relative rounded-sm bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-bold"></iconify-icon>
</div>
</div>
<div className="aspect-square overflow-hidden group relative rounded-sm hidden md:block bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1496217590455-aa63a8350eea?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-bold"></iconify-icon>
</div>
</div>
<div className="aspect-square overflow-hidden group relative rounded-sm bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-bold"></iconify-icon>
</div>
</div>
<div className="aspect-square overflow-hidden group relative rounded-sm bg-zinc-100">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1485230946086-1d99d529c7ad?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center bg-black/20">
<iconify-icon className="text-2xl text-white" icon="solar:instagram-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#FBF8F6] py-16">
<div className="max-w-[1400px] mx-auto px-4 md:px-8">
<div className="grid md:grid-cols-4 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-zinc-200">
<div className="px-4 py-4 md:py-0">
<div className="mb-3 text-[#A48F7F]">
<iconify-icon icon="solar:box-minimalistic-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-1 text-zinc-900">Free Shipping</h4>
<p className="text-xs text-zinc-500 leading-relaxed">On all orders over $60. Delivered to your doorstep.</p>
</div>
<div className="px-4 py-4 md:py-0">
<div className="mb-3 text-[#A48F7F]">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-1 text-zinc-900">Easy Returns</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Shop with confidence. 30-day return policy.</p>
</div>
<div className="px-4 py-4 md:py-0">
<div className="mb-3 text-[#A48F7F]">
<iconify-icon icon="solar:star-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-1 text-zinc-900">Quality First</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Thoughtfully designed for durability and style.</p>
</div>
<div className="px-4 py-4 md:py-0">
<div className="mb-3 text-[#A48F7F]">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h4 className="font-serif text-lg mb-1 text-zinc-900">Community Rewards</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Earn points as you shop and unlock perks.</p>
</div>
</div>
</div>
</section>

<footer className="border-t pt-16 pb-8 bg-white border-zinc-100">
<div className="max-w-[1400px] mx-auto px-4 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<h5 className="font-serif text-xl mb-4">Let's be friends</h5>
<p className="text-xs text-zinc-500 mb-4">Sign up for our newsletter and get 10% off your first order.</p>
<form className="flex flex-col gap-2">
<input className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-[#A48F7F] transition-colors bg-zinc-50 border-zinc-200" placeholder="Your email address" type="email"/>
<button className="px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#A48F7F] transition-colors bg-zinc-900 text-white">
                            Subscribe
                        </button>
</form>
</div>

<div className="">
<h5 className="text-xs font-bold uppercase tracking-widest mb-6">Shop</h5>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-[#A48F7F] transition-colors" href="#">New Arrivals</a></li>
<li className=""><a className="hover:text-[#A48F7F] transition-colors" href="#">Dresses</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Tops</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Bottoms</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Sale</a></li>
</ul>
</div>
<div className="">
<h5 className="text-xs font-bold uppercase tracking-widest mb-6">Support</h5>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-bold uppercase tracking-widest mb-6">Company</h5>
<ul className="flex flex-col gap-3 text-sm text-zinc-500">
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#A48F7F] transition-colors" href="#">Stores</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t gap-4 border-zinc-100">
<div className="flex items-center gap-6">
<a className="transition-colors text-zinc-400 hover:text-zinc-900" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-zinc-400 hover:text-zinc-900" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-zinc-400 hover:text-zinc-900" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
<a className="transition-colors text-zinc-400 hover:text-zinc-900" href="#">
<iconify-icon icon="solar:pin-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-4 text-xs text-zinc-400">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Service</a>
<span>© 2024 MOOD.</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
