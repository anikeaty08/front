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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'marquee': 'marquee 25s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                VOLT
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Audio</a>
<a className="hover:text-white transition-colors" href="#">Vision</a>
<a className="hover:text-white transition-colors" href="#">Computing</a>
<a className="hover:text-white transition-colors" href="#">Accessories</a>
</div>

<div className="flex items-center gap-4 text-white">
<button className="hover:text-neutral-400 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="relative group cursor-pointer">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium tracking-wide text-white">NEW ARRIVAL</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white leading-[0.95]">
                    Sonic<span className="text-neutral-600">Pro</span><br/>
                    X1 Wireless.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-md font-light leading-relaxed">
                    Experience sound in its purest form. Active noise cancellation meets studio-grade fidelity in a unibody aluminum chassis.
                </p>
<div className="flex items-center gap-4 pt-4">
<button className="bg-white text-black px-8 py-3 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                        Pre-order Now
                    </button>
<button className="px-8 py-3 rounded-lg text-sm font-medium text-white border border-white/10 hover:border-white/30 transition-colors flex items-center gap-2">
                        Watch Film
                        <iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="relative group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="relative aspect-square md:aspect-[4/3] bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-neutral-800/20 via-transparent to-white/5"></div>
<img alt="Headphones" className="relative w-[80%] h-auto object-contain drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-out transform group-hover:scale-105" src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="backdrop-blur-md bg-black/40 border border-white/10 px-4 py-2 rounded-lg">
<p className="text-xs text-neutral-400">Battery Life</p>
<p className="text-sm text-white font-medium">40 Hours</p>
</div>
<div className="backdrop-blur-md bg-black/40 border border-white/10 px-4 py-2 rounded-lg text-right">
<p className="text-xs text-neutral-400">Connection</p>
<p className="text-sm text-white font-medium">BT 5.3</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-neutral-900/30 overflow-hidden py-3">
<div className="whitespace-nowrap flex gap-8 animate-marquee">
<span className="text-sm text-neutral-400 font-medium tracking-widest uppercase flex items-center gap-8">
                Free Shipping Worldwide <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                30-Day Money Back Guarantee <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                Secure Checkout <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                24/7 Expert Support <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                Free Shipping Worldwide <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                30-Day Money Back Guarantee <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                Secure Checkout <iconify-icon icon="lucide:star" width="12"></iconify-icon>
                24/7 Expert Support <iconify-icon icon="lucide:star" width="12"></iconify-icon>
</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex justify-between items-end mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight">Curated Categories</h2>
<a className="text-sm text-neutral-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                View All <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=2101&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<p className="text-sm text-neutral-400 mb-1">Vision Series</p>
<h3 className="text-3xl text-white font-medium tracking-tight">Virtual Reality</h3>
<button className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-lg text-sm text-white transition-colors">
                        Explore
                    </button>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 flex flex-col justify-between p-8">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium tracking-tight">Workspace</h3>
<p className="text-sm text-neutral-500">Keyboards, Mice &amp; Docks</p>
</div>
<iconify-icon className="text-neutral-600 group-hover:text-white transition-colors" icon="lucide:keyboard" width="24"></iconify-icon>
</div>
<img className="absolute right-0 bottom-0 w-48 h-auto object-cover opacity-50 group-hover:scale-110 transition-transform duration-500 mask-image-gradient" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-colors cursor-pointer">
<div className="h-full flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="lucide:smartphone" width="24"></iconify-icon>
<div>
<h3 className="text-lg text-white font-medium">Mobile</h3>
<p className="text-xs text-neutral-500 mt-1">Cases &amp; Chargers</p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 p-6 hover:border-white/20 transition-colors cursor-pointer">
<div className="h-full flex flex-col justify-between">
<iconify-icon className="text-neutral-400" icon="lucide:watch" width="24"></iconify-icon>
<div>
<h3 className="text-lg text-white font-medium">Wearables</h3>
<p className="text-xs text-neutral-500 mt-1">Smart Watches</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-8 sticky top-16 z-40 bg-neutral-950/95 backdrop-blur-xl py-4 border-b border-white/5">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium border border-white">All</button>
<button className="px-4 py-1.5 rounded-full bg-neutral-900 text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors whitespace-nowrap">New Arrivals</button>
<button className="px-4 py-1.5 rounded-full bg-neutral-900 text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors whitespace-nowrap">Best Sellers</button>
<button className="px-4 py-1.5 rounded-full bg-neutral-900 text-neutral-400 text-xs font-medium border border-white/10 hover:border-white/30 transition-colors whitespace-nowrap">On Sale</button>
</div>
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<label className="flex items-center gap-2 cursor-pointer select-none">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-8 h-4 bg-neutral-800 rounded-full peer-checked:bg-white transition-colors"></div>
<div className="absolute left-0.5 top-0.5 w-3 h-3 bg-neutral-400 rounded-full transition-transform peer-checked:translate-x-4 peer-checked:bg-black"></div>
</div>
                        In Stock Only
                    </label>
</div>
<div className="h-4 w-[1px] bg-neutral-800"></div>
<button className="flex items-center gap-2 text-xs text-white font-medium">
                    Filter <iconify-icon icon="lucide:sliders-horizontal" width="12"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 bg-neutral-900/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</button>
</div>
<img alt="Product" className="w-full h-full object-cover mix-blend-normal group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&amp;w=2065&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-white/10 backdrop-blur text-[10px] font-semibold text-white uppercase tracking-wider rounded">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">Nomad Wireless Headphones</h3>
<p className="text-xs text-neutral-500 mt-1">Noise Cancelling, 30h Battery</p>
</div>
<p className="text-sm font-medium text-white">$299</p>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 bg-neutral-900/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</button>
</div>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">Aero Mechanical Keyboard</h3>
<p className="text-xs text-neutral-500 mt-1">Linear Switches, RGB</p>
</div>
<p className="text-sm font-medium text-white">$149</p>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 bg-neutral-900/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</button>
</div>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 bg-red-500/80 backdrop-blur text-[10px] font-semibold text-white uppercase tracking-wider rounded">-20%</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">Flux Laptop Sleeve</h3>
<p className="text-xs text-neutral-500 mt-1">Waterproof, 14-inch</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-white">$45</p>
<p className="text-xs text-neutral-500 line-through">$56</p>
</div>
</div>
</div>

<div className="group">
<div className="relative aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-4 border border-white/5">
<div className="absolute inset-0 bg-neutral-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-2">
<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 bg-neutral-900/80 backdrop-blur text-white rounded-full flex items-center justify-center hover:bg-neutral-800 transition-colors">
<iconify-icon icon="lucide:eye" width="18"></iconify-icon>
</button>
</div>
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-white group-hover:text-neutral-300 transition-colors">Lumen Smart Lamp</h3>
<p className="text-xs text-neutral-500 mt-1">App Controlled, RGBW</p>
</div>
<p className="text-sm font-medium text-white">$89</p>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="px-8 py-3 rounded-lg text-sm text-neutral-400 border border-white/10 hover:border-white/30 hover:text-white transition-all">
                Load More Products
            </button>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/5 bg-neutral-900">
<img className="w-full opacity-80" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center gap-4">
<button className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full">
<iconify-icon icon="lucide:play" width="14"></iconify-icon>
</button>
<div className="flex-1">
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-white rounded-full"></div>
</div>
</div>
<span className="text-xs font-mono text-neutral-400">04:20</span>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Engineered for <br/> <span className="text-neutral-500">absolute precision.</span></h2>
<p className="text-neutral-400 leading-relaxed font-light">
                        Every component is meticulously crafted to ensure the highest standard of quality. From the internal circuitry to the exterior finish, we push the boundaries of what is possible in consumer electronics.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div>
<iconify-icon className="text-white mb-2" icon="lucide:zap" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white">Fast Charging</h4>
<p className="text-xs text-neutral-500 mt-1">0 to 100% in 30 minutes</p>
</div>
<div>
<iconify-icon className="text-white mb-2" icon="lucide:shield-check" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white">Durability</h4>
<p className="text-xs text-neutral-500 mt-1">IP68 Water Resistant</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 text-center">
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Join the Volt Ecosystem</h2>
<p className="text-neutral-500 text-sm mb-8">Get early access to product drops and exclusive content.</p>
<form className="max-w-sm mx-auto flex gap-2">
<input className="flex-1 bg-neutral-900 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-white/30 placeholder-neutral-600" placeholder="email@address.com" type="email"/>
<button className="bg-white text-black px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition-colors">
                Subscribe
            </button>
</form>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-white uppercase mb-6 block" href="#">VOLT</a>
<p className="text-sm text-neutral-500 max-w-xs font-light">
                        Redefining the relationship between humans and technology through design, innovation, and sustainability.
                    </p>
<div className="flex gap-4 mt-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Audio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Support</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
<p>© 2023 Volt Electronics Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
