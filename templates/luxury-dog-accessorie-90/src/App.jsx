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
      

<div className="bg-zinc-900 text-white text-[10px] md:text-xs py-2.5 text-center font-medium tracking-wide flex justify-center items-center gap-2">
<iconify-icon icon="lucide:truck" width="14"></iconify-icon>
<span className="">Free UK delivery on orders over £50</span>
</div>

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-500 w-1/3">
<a className="text-zinc-900 hover:text-zinc-600 transition-colors" href="#">Shop All</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Harnesses</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Collars</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Leads</a>
</div>

<a className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-center w-1/3 flex justify-center lg:justify-center" href="#">
                Paws<span className="text-zinc-400 font-light">Boutique</span>
</a>

<div className="flex items-center justify-end gap-3 md:gap-5 w-auto lg:w-1/3">
<button className="text-zinc-500 hover:text-zinc-900 transition-colors">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon icon="lucide:heart" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="text-zinc-900 hover:text-zinc-700 transition-colors relative group flex items-center gap-2">
<iconify-icon className="" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xs font-medium hidden sm:block">£0.00</span>
<span className="absolute -top-1 -right-1 sm:top-0 sm:right-auto sm:-left-2 w-2 h-2 bg-orange-500 rounded-full ring-2 ring-white"></span>
</button>
</div>
</div>
</nav>

<section className="relative">
<div className="absolute inset-0 bg-zinc-900/10 z-10 pointer-events-none"></div>
<div className="relative h-[600px] md:h-[80vh] w-full overflow-hidden">
<img alt="Golden Retriever in luxury harness" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col text-center z-20 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-white/90 text-xs md:text-sm font-medium tracking-widest uppercase mb-4 animate-fade-in">The Autumn Collection</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 drop-shadow-sm">
                    Walk in Style
                </h1>
<p className="text-white/90 text-lg md:text-xl font-light max-w-lg mb-8 leading-relaxed">
                    Premium, sustainable accessories designed for the modern dog and their human.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-zinc-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-zinc-100 transition-all min-w-[160px]">
                        Shop New In
                    </button>
<button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/20 transition-all min-w-[160px]">
                        Explore Bundles
                    </button>
</div>
</div>
</div>
</section>

<section className="border-b border-zinc-100 bg-white">
<div className="max-w-7xl mx-auto px-6 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-zinc-100 md:divide-zinc-100/0">
<div className="flex flex-col md:flex-row items-center justify-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:package-check" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Dispatched in 24h</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:shield-check" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Lifetime Warranty</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:star" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Rated Excellent 4.9/5</span>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-3">
<iconify-icon className="text-zinc-400" icon="lucide:globe-2" width="20"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Worldwide Shipping</span>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Shop by Category</h2>
<p className="text-zinc-500 mt-2 text-sm">Everything your pup needs for a life of adventure.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">

<a className="group block text-center" href="#">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-4 relative">
<img alt="Harnesses" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605639156481-244775d6f803?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Harnesses</h3>
</a>

<a className="group block text-center" href="#">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-4 relative">
<img alt="Collars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Collars &amp; Leads</h3>
</a>

<a className="group block text-center" href="#">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-4 relative">
<img alt="Wear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Apparel</h3>
</a>

<a className="group block text-center" href="#">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 mb-4 relative">
<img alt="Sleep" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1591946614720-90a587da4a36?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-medium text-zinc-900 group-hover:underline decoration-1 underline-offset-4">Beds &amp; Blankets</h3>
</a>
</div>
</section>

<section className="py-12 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Trending Now</h2>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 transition-all" href="#">View all</a>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-xl bg-white overflow-hidden mb-3 border border-zinc-100">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-sm border border-zinc-100">Bestseller</span>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">The Corduroy Harness</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-zinc-500">Olive Green</p>
<p className="text-sm font-semibold text-zinc-900">£32.00</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-xl bg-white overflow-hidden mb-3 border border-zinc-100">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Adjustable Rope Lead</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-zinc-500">Natural</p>
<p className="text-sm font-semibold text-zinc-900">£28.00</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-xl bg-white overflow-hidden mb-3 border border-zinc-100">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-red-50 text-red-700 px-2 py-1 text-[10px] font-semibold tracking-wide uppercase rounded-sm">-20%</span>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Velvet Bow Tie</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-zinc-500">Burgundy</p>
<div className="flex gap-2 text-sm">
<span className="text-zinc-400 line-through">£15.00</span>
<span className="font-semibold text-red-600">£12.00</span>
</div>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square rounded-xl bg-white overflow-hidden mb-3 border border-zinc-100">
<img alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-1">
<h3 className="text-sm font-medium text-zinc-900">Poop Bag Holder</h3>
<div className="flex items-center justify-between">
<p className="text-sm text-zinc-500">Vegan Leather</p>
<p className="text-sm font-semibold text-zinc-900">£14.00</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
<div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl">
<img alt="Collection" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
</div>
<div className="space-y-6 lg:pl-12">
<span className="text-orange-600 font-medium tracking-wide text-xs uppercase">Limited Edition</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900">The Teddy Collection</h2>
<p className="text-zinc-500 text-lg leading-relaxed font-light">
                    Wrap your furry friend in ultimate comfort. Our Teddy Fleece collection features ultra-soft textures combined with our signature durable hardware. Perfect for chilly morning walks.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all">Shop Collection</button>
<button className="border border-zinc-200 text-zinc-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all">View Lookbook</button>
</div>
</div>
</div>
</section>

<section className="bg-[#FDFBF7] py-20 border-y border-zinc-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="max-w-2xl mx-auto space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-700 mb-2">
<iconify-icon icon="lucide:pencil" width="20"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Make it Personal</h2>
<p className="text-zinc-500">
                    Add a unique touch with our custom engraving service. Available on all leather collars and ID tags.
                </p>
<a className="inline-block border-b border-zinc-900 pb-1 text-zinc-900 font-medium text-sm hover:opacity-70 transition-opacity" href="#">Explore Personalisation</a>
</div>
<div className="mt-12 flex justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="" className="h-8 object-contain opacity-0" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png"/> 

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mx-auto">
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100/50 transform rotate-2">
<div className="w-16 h-16 rounded-full border-4 border-zinc-200 mx-auto mb-3 flex items-center justify-center bg-[#D4AF37] text-white font-serif text-xl italic">
                            B
                        </div>
<p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Gold Plated</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100/50 transform -rotate-1 mt-4">
<div className="w-16 h-16 rounded-full border-4 border-zinc-200 mx-auto mb-3 flex items-center justify-center bg-zinc-300 text-zinc-600 font-serif text-xl italic">
                            L
                        </div>
<p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Silver</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100/50 transform rotate-1">
<div className="w-16 h-16 rounded-full border-4 border-zinc-200 mx-auto mb-3 flex items-center justify-center bg-[#B76E79] text-white font-serif text-xl italic">
                            M
                        </div>
<p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Rose Gold</p>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-zinc-100/50 transform -rotate-2 mt-4">
<div className="w-16 h-16 rounded-full border-4 border-zinc-200 mx-auto mb-3 flex items-center justify-center bg-zinc-800 text-white font-serif text-xl italic">
                            K
                        </div>
<p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Matte Black</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 text-center mb-16">Loved by thousands of tails</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Absolutely stunning quality. The harness fits my Cockapoo perfectly and the velvet is so soft. We get compliments on every walk!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Sarah J.</p>
<p className="text-xs text-zinc-400">Owner of Barnaby</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"Fast delivery and beautiful packaging. It felt like opening a gift for myself! The durability of the lead is impressive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="Michael" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Michael T.</p>
<p className="text-xs text-zinc-400">Owner of Luna</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-8 rounded-2xl relative">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-zinc-600 text-sm leading-relaxed mb-6">"I've bought three sets from Paws Boutique now. They wash really well and still look brand new after months of muddy walks."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 overflow-hidden">
<img alt="Emma" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
</div>
<div>
<p className="text-sm font-semibold text-zinc-900">Emma W.</p>
<p className="text-xs text-zinc-400">Owner of Cooper</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-24">
<div className="max-w-7xl mx-auto px-6 mb-8 flex items-end justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight">Join the community</h3>
<p className="text-zinc-500 text-sm mt-1">Tag us <span className="text-zinc-900 font-medium">@pawsboutique</span> to be featured</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
<iconify-icon icon="lucide:instagram" width="16"></iconify-icon>
                Follow us
            </button>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-1 md:gap-4 px-2 md:px-6">
<div className="min-w-[200px] md:min-w-[280px] aspect-square bg-zinc-100 overflow-hidden rounded-lg">
<img alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-[200px] md:min-w-[280px] aspect-square bg-zinc-100 overflow-hidden rounded-lg">
<img alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-[200px] md:min-w-[280px] aspect-square bg-zinc-100 overflow-hidden rounded-lg">
<img alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-[200px] md:min-w-[280px] aspect-square bg-zinc-100 overflow-hidden rounded-lg">
<img alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="min-w-[200px] md:min-w-[280px] aspect-square bg-zinc-100 overflow-hidden rounded-lg">
<img alt="IG" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Join the Pack</h2>
<p className="text-zinc-400 mb-8 font-light">Sign up for exclusive access to new collections, sales, and pet care tips. Plus get 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-3 text-sm outline-none focus:border-white focus:ring-1 focus:ring-white transition-all placeholder:text-zinc-500 text-white" placeholder="Enter your email address" type="email"/>
<button className="bg-white text-zinc-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-100 transition-all" type="button">Subscribe</button>
</form>
<div className="mt-4 flex items-center justify-center gap-2">
<input className="custom-checkbox w-4 h-4 rounded border-zinc-600 bg-zinc-800 checked:bg-white text-black focus:ring-0" id="consent" type="checkbox"/>
<label className="text-xs text-zinc-500 select-none" htmlFor="consent">I agree to the <a className="underline hover:text-white" href="#">Privacy Policy</a></label>
</div>
</div>
</section>

<footer className="bg-white text-zinc-900 py-16 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-8">
<div className="col-span-2 lg:col-span-2 space-y-4 pr-12">
<a className="text-xl font-bold tracking-tighter uppercase block" href="#">
                    Paws<span className="text-zinc-400 font-light">Boutique</span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
                    Elevating the standard of pet accessories. Designed in the UK, loved worldwide. Dedicated to sustainable practices and happy dogs.
                </p>
<div className="flex gap-4 pt-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="lucide:youtube" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-zinc-900 transition-colors text-red-600" href="#">Sale</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Help</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping Info</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Returns &amp; Exchanges</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Size Guide</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Track Order</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">
                © 2023 Paws Boutique Ltd. All rights reserved.
            </p>
<div className="flex flex-wrap gap-2 opacity-80">

<div className="h-6 w-10 bg-zinc-100 rounded flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="lucide:credit-card" width="14"></iconify-icon></div>
<div className="h-6 w-10 bg-zinc-100 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">VISA</div>
<div className="h-6 w-10 bg-zinc-100 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">MC</div>
<div className="h-6 w-10 bg-zinc-100 rounded flex items-center justify-center text-[8px] font-bold text-zinc-500">PP</div>
</div>
</div>
</footer>

    </>
  );
}
