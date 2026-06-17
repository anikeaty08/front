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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b', // Custom dark
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
                ONYX
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#features">Technology</a>
<a className="hover:text-white transition-colors" href="#specs">Specs</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="lucide:search" width="18"></iconify-icon>
</button>
<button className="hidden md:flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon icon="lucide:shopping-bag" width="18"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
</button>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Pre-order
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                New Series X Kevlar Cables Available Now
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 max-w-4xl mx-auto leading-[1.1]">
                The last cable you'll <br className="hidden md:block"/> <span className="text-zinc-500">ever need to buy.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Engineered with aerospace-grade aramid fiber. 100W fast charging delivery. Unmatched durability backed by a lifetime warranty.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                    Shop Collection
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-zinc-300 border border-zinc-800 hover:bg-zinc-900 transition-all">
                    View Specifications
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-5xl group">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl aspect-[16/9] overflow-hidden flex items-center justify-center">

<img alt="Premium Cable" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1550041473-d296a1a8ecb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-zinc-700 text-sm font-mono border border-zinc-800 px-4 py-2 rounded bg-zinc-950/80 backdrop-blur">
                            Product Image Asset
                        </span>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-zinc-800/50 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-zinc-500 mb-8 font-medium uppercase tracking-widest">Compatible with ecosystem</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tighter italic">APPLE</span>
<span className="text-xl font-bold tracking-tighter">SAMSUNG</span>
<span className="text-xl font-bold tracking-tighter">GOOGLE</span>
<span className="text-xl font-bold tracking-tighter">ANKER</span>
<span className="text-xl font-bold tracking-tighter italic">SONY</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Engineered for perfection.</h2>
<p className="text-zinc-400 max-w-xl text-lg">We stripped away the unnecessary and focused purely on performance, materials, and longevity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="absolute top-0 right-0 p-12 bg-blue-500/10 w-64 h-64 rounded-full blur-[80px]"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<iconify-icon className="text-white mb-4" icon="lucide:shield-check" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Unbreakable Kevlar® Core</h3>
<p className="text-zinc-400 text-sm max-w-sm">Reinforced with double-braided nylon and a central Kevlar core capable of withstanding 50,000+ bends.</p>
</div>
<div className="w-full h-32 bg-zinc-800/50 rounded-xl border border-zinc-700/50 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1614846027179-88031d24330b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="h-full flex flex-col justify-between">
<div>
<iconify-icon className="text-white mb-4" icon="lucide:zap-off" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">100W Power Delivery</h3>
<p className="text-zinc-400 text-sm">Charge laptops, tablets, and phones at maximum speed.</p>
</div>
<div className="flex items-end justify-end">
<span className="text-6xl font-medium text-zinc-800 group-hover:text-zinc-700 transition-colors tracking-tighter">100W</span>
</div>
</div>
</div>

<div className="rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors">
<div className="h-full flex flex-col justify-between">
<div>
<iconify-icon className="text-white mb-4" icon="lucide:arrow-left-right" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">40Gbps Transfer</h3>
<p className="text-zinc-400 text-sm">Move files in seconds with Thunderbolt 4 support.</p>
</div>

<div className="w-full bg-zinc-800 h-1 mt-auto rounded-full overflow-hidden">
<div className="bg-white w-2/3 h-full rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 relative overflow-hidden group hover:border-zinc-700 transition-colors flex flex-row items-center">
<div className="w-1/2 pr-8 z-10">
<iconify-icon className="text-white mb-4" icon="lucide:smartphone-charging" width="28"></iconify-icon>
<h3 className="text-xl text-white font-medium mb-2">Intelligent Chipset</h3>
<p className="text-zinc-400 text-sm">E-Marker chip regulates voltage to protect your device battery health over time.</p>
</div>
<div className="w-1/2 h-full absolute right-0 top-0 bg-gradient-to-l from-zinc-800 to-transparent">

<div className="w-full h-full flex items-center justify-center opacity-20">
<iconify-icon icon="lucide:cpu" width="120"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800" id="products">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1">
<div className="aspect-square bg-zinc-950 rounded-3xl border border-zinc-800 p-8 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-zinc-950 to-zinc-950 opacity-50"></div>
<img className="relative z-10 w-full h-full object-contain mix-blend-screen drop-shadow-2xl" src="https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&amp;w=1900&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="order-1 md:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-xs text-white mb-6">
                    Best Seller
                </div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">ONYX Series X Cable</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Designed for the modern professional. The Series X features a tangle-free braided exterior, reinforced aluminum alloy connectors, and a satisfying snap-strap for cable management.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                        6ft (1.8m) Length
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                        Soft-touch Silicone Strap included
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="lucide:check-circle"></iconify-icon>
                        5-Year Warranty
                    </li>
</ul>
<div className="flex items-center gap-4 border-t border-zinc-800 pt-8">
<div className="text-2xl font-medium text-white">$29.00</div>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex-1 text-center">
                        Add to Cart
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/50 bg-blue-900/20 text-xs text-blue-400 mb-6">
                    New Arrival
                </div>
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">GaN Prime 65W Charger</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Smaller than a credit card, powerful enough for your MacBook Pro. Powered by Gallium Nitride technology for cooler, faster charging in a compact form factor.
                </p>
<div className="grid grid-cols-2 gap-4 mb-10">
<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Size</div>
<div className="text-white font-medium">50% Smaller</div>
</div>
<div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
<div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Ports</div>
<div className="text-white font-medium">2x USB-C, 1x USB-A</div>
</div>
</div>
<div className="flex items-center gap-4 border-t border-zinc-800 pt-8">
<div className="text-2xl font-medium text-white">$45.00</div>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex-1 text-center">
                        Add to Cart
                    </button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-l from-purple-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
<div className="relative aspect-square bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex items-center justify-center">
<img className="w-full h-full object-cover rounded-xl opacity-90" src="https://images.unsplash.com/photo-1620713751799-a65c28542c94?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden" id="specs">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white">Technical Specifications</h2>
<p className="text-zinc-500 mt-2">Transparency in every layer.</p>
</div>
<div className="overflow-hidden rounded-2xl border border-zinc-800">
<table className="w-full text-left text-sm text-zinc-400">
<tbody className="divide-y divide-zinc-800 bg-zinc-950/50">
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white w-1/3">Connector Type</td>
<td className="px-6 py-4">USB-C to USB-C / USB-C to Lightning</td>
</tr>
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white">Max Output</td>
<td className="px-6 py-4">20V / 5A (100W)</td>
</tr>
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white">Data Transfer</td>
<td className="px-6 py-4">480 Mbps (USB 2.0) / 40 Gbps (Pro Model)</td>
</tr>
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white">Material</td>
<td className="px-6 py-4">Double-braided Nylon, Kevlar Core, Aluminum Housing</td>
</tr>
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white">Bend Lifespan</td>
<td className="px-6 py-4">50,000+ Bends</td>
</tr>
<tr className="hover:bg-zinc-900/50 transition-colors">
<td className="px-6 py-4 font-medium text-white">Certifications</td>
<td className="px-6 py-4">MFi, USB-IF, CE, RoHS</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white">In the wild</h2>
<p className="text-zinc-500 mt-2">See how others are powering their workflow.</p>
</div>
<a className="hidden md:flex text-sm text-white border-b border-zinc-700 pb-0.5 hover:border-white transition-colors" href="#">Follow us on Instagram</a>
</div>
<div className="flex overflow-x-auto gap-4 px-6 pb-8 snap-x no-scrollbar">

<div className="snap-center shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-sm font-medium">Remote Work Setup</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-sm font-medium">Coffee Shop Office</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-sm font-medium">Dev Station</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] aspect-[4/5] rounded-2xl overflow-hidden relative group">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 hover:opacity-100" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<p className="text-white text-sm font-medium">Everyday Carry</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-16 text-center">Verified Reviews</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"Finally a cable that doesn't fray after 3 months. The build quality feels incredibly premium and the transfer speeds are legit."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">JD</div>
<div>
<div className="text-white text-xs font-medium">James D.</div>
<div className="text-zinc-500 text-[10px]">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"I replaced all my Apple cables with ONYX. The GaN charger is a game changer for travel. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">SK</div>
<div>
<div className="text-white text-xs font-medium">Sarah K.</div>
<div className="text-zinc-500 text-[10px]">Verified Buyer</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-800">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">"Premium packaging, premium feel. It's the little details like the leather strap that make this worth the price."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-bold text-white">MR</div>
<div>
<div className="text-white text-xs font-medium">Mike R.</div>
<div className="text-zinc-500 text-[10px]">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-white mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">Is this compatible with iPhone 15?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                            Yes, the Series X USB-C cable is fully compatible with the new iPhone 15 series, supporting fast charging and high-speed data transfer.
                        </div>
</details>
</div>

<div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">What does the warranty cover?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                            Our lifetime warranty covers any manufacturing defects or functional failures (like fraying or connection issues) under normal use conditions.
                        </div>
</details>
</div>

<div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
<details className="group">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-zinc-200">How long is shipping?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-zinc-500" icon="lucide:chevron-down"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                            US orders typically arrive within 3-5 business days. International shipping can take 7-14 business days depending on the destination.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 p-12 md:p-20 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-700/30 via-transparent to-transparent"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Upgrade your daily carry.</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-10 text-lg">Join 50,000+ others who have switched to ONYX. Quality you can feel, power you can trust.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all">
                        Shop All Products
                    </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-medium text-white border border-zinc-600 hover:bg-zinc-800 transition-all">
                        Read Our Story
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-800 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2 mb-4" href="#">
<iconify-icon icon="lucide:zap" width="20"></iconify-icon>
                        ONYX
                    </a>
<p className="text-zinc-500 text-sm max-w-xs mb-6">
                        Designing the future of mobile power. Minimalist aesthetics, maximalist performance.
                    </p>
<div className="flex gap-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h3 className="text-white font-medium text-sm mb-4">Shop</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Cables</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chargers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium text-sm mb-4">Support</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium text-sm mb-4">Company</h3>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2024 ONYX Accessories Inc. All rights reserved.</p>
<div className="flex gap-6 text-zinc-600 text-xs">
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
