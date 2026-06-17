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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">

<div className="absolute inset-0 w-full h-full noise-bg opacity-[0.07] z-20 mix-blend-overlay"></div>

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/30 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40 animate-blob animation-delay-4000"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-black via-neutral-900/50 to-black z-10"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-gradient-to-br from-fuchsia-600 to-purple-600 rounded-full flex items-center justify-center text-white font-medium tracking-tighter shadow-lg shadow-fuchsia-500/20">M</div>
<span className="font-medium tracking-tight text-lg text-white group-hover:text-fuchsia-400 transition-colors">MELT</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#">Flavors</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#">Sourcing</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" href="#">Locations</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white">
<i data-lucide="search" height="20" width="20"></i>
</button>
<button className="hidden md:flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-fuchsia-400 hover:text-black hover:shadow-[0_0_20px_rgba(232,121,249,0.5)] transition-all hover:scale-105 active:scale-95">
<span>Order Now</span>
<i data-lucide="arrow-right" height="14" width="14"></i>
</button>
<button className="md:hidden p-2 text-white">
<i data-lucide="menu" height="20" width="20"></i>
</button>
</div>
</div>
</nav>

<main className="pt-32 pb-16 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="space-y-8 animate-fade-in relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-fuchsia-300 text-xs font-medium backdrop-blur-md shadow-[0_0_15px_rgba(217,70,239,0.2)]">
<span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse shadow-[0_0_10px_#d946ef]"></span>
                    Neon Summer Collection
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Cold comfort, <br/>
<span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(192,38,211,0.3)]">electrified.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-md leading-relaxed">
                    Small-batch gelato reimagined. Organic dairy meets vivid, botanical flavors. Taste the spectrum.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white h-12 px-8 rounded-full text-sm font-medium hover:brightness-110 transition-all hover:shadow-[0_0_25px_rgba(192,38,211,0.6)] flex items-center justify-center gap-2 border border-white/10">
                        View Flavors
                    </button>
<button className="bg-black/50 backdrop-blur-sm border border-white/20 text-white h-12 px-8 rounded-full text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center gap-2">
<i className="text-cyan-400" data-lucide="play-circle" height="16" width="16"></i>
                        Watch the Process
                    </button>
</div>
<div className="pt-8 flex items-center gap-6 text-neutral-500">
<div className="flex items-center gap-2">
<i className="text-yellow-400 fill-yellow-400/20 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" data-lucide="zap" height="16" width="16"></i>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-300">Flash Frozen</span>
</div>
<div className="flex items-center gap-2">
<i className="text-cyan-400 fill-cyan-400/20 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" data-lucide="droplet" height="16" width="16"></i>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-300">Grass-fed</span>
</div>
<div className="flex items-center gap-2">
<i className="text-fuchsia-500 fill-fuchsia-500/20 drop-shadow-[0_0_8px_rgba(217,70,239,0.5)]" data-lucide="heart" height="16" width="16"></i>
<span className="text-xs font-medium uppercase tracking-wide text-neutral-300">Handmade</span>
</div>
</div>
</div>
<div className="relative animate-scale-in delay-200 z-10">

<div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] animate-float ring-1 ring-white/10">
<img alt="Artisanal Strawberry Gelato" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 opacity-90 brightness-110 contrast-125" src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

<div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-white/10 max-w-[220px]">
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] font-semibold text-fuchsia-400 uppercase tracking-wider glow-text">Neon Series</span>
<div className="flex gap-0.5">
<i className="text-yellow-400 fill-yellow-400" data-lucide="star" height="10" width="10"></i>
<i className="text-yellow-400 fill-yellow-400" data-lucide="star" height="10" width="10"></i>
<i className="text-yellow-400 fill-yellow-400" data-lucide="star" height="10" width="10"></i>
<i className="text-yellow-400 fill-yellow-400" data-lucide="star" height="10" width="10"></i>
<i className="text-yellow-400 fill-yellow-400" data-lucide="star" height="10" width="10"></i>
</div>
</div>
<p className="text-sm font-semibold text-white">Electric Strawberry &amp; Basil</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-xs text-neutral-400">$6.50 / Scoop</span>
<button className="w-6 h-6 rounded-full bg-fuchsia-600 flex items-center justify-center text-white hover:bg-fuchsia-500 hover:shadow-[0_0_10px_#d946ef] transition-all">
<i data-lucide="plus" height="12" width="12"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="w-full overflow-hidden bg-white/5 border-y border-white/5 py-4 mb-24 backdrop-blur-md relative z-10">
<div className="flex whitespace-nowrap" style={{animation: 'marquee 20s linear infinite'}}>
<span className="text-fuchsia-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">• Farm to Spoon</span>
<span className="text-cyan-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">• Small Batch Production</span>
<span className="text-fuchsia-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">• Sustainable Packaging</span>
<span className="text-cyan-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">• Natural Ingredients</span>
<span className="text-fuchsia-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">• Farm to Spoon</span>
<span className="text-cyan-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">• Small Batch Production</span>
<span className="text-fuchsia-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">• Sustainable Packaging</span>
<span className="text-cyan-200/80 text-sm font-semibold uppercase tracking-widest mx-8 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">• Natural Ingredients</span>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4 drop-shadow-lg">Curated Flavors</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-sm">Our menu rotates weekly based on what is ripe, fresh, and inspiring.</p>
</div>

<div className="flex bg-neutral-900/80 backdrop-blur-md p-1 rounded-lg border border-white/10 shadow-inner">
<button className="px-4 py-1.5 rounded-md text-xs font-medium bg-white/10 text-white shadow-sm border border-white/10 transition-all shadow-[0_0_10px_rgba(255,255,255,0.1)]">All</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-neutral-500 hover:text-white transition-all">Vegan</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-neutral-500 hover:text-white transition-all">Nut-Free</button>
<button className="px-4 py-1.5 rounded-md text-xs font-medium text-neutral-500 hover:text-white transition-all">Seasonal</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-fuchsia-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(217,70,239,0.2)]">
<div className="aspect-[4/5] overflow-hidden bg-neutral-800 relative">
<img alt="Pistachio" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1579954115563-e72bf1381629?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/20">
<span className="text-[10px] font-semibold uppercase tracking-wider text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">Nutty</span>
</div>
</div>
<div className="p-5 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-white tracking-tight">Sicilian Pistachio</h3>
<span className="text-xs font-medium text-fuchsia-400">$6.50</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-4">Roasted pistachios from Bronte with a hint of sea salt.</p>
<button className="w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2">
                        Add to Order
                    </button>
</div>
</div>

<div className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]">
<div className="aspect-[4/5] overflow-hidden bg-neutral-800 relative">
<img alt="Vanilla" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1557142046-c704a3adf364?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/20">
<span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Classic</span>
</div>
</div>
<div className="p-5 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-white tracking-tight">Madagascar Vanilla</h3>
<span className="text-xs font-medium text-cyan-400">$5.50</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-4">Double-fold vanilla extract speckled with real bean pods.</p>
<button className="w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2">
                        Add to Order
                    </button>
</div>
</div>

<div className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.2)]">
<div className="aspect-[4/5] overflow-hidden bg-neutral-800 relative">
<img alt="Citrus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/20">
<span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 drop-shadow-[0_0_5px_rgba(249,115,22,0.5)]">Vegan</span>
</div>
</div>
<div className="p-5 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-white tracking-tight">Blood Orange Sorbet</h3>
<span className="text-xs font-medium text-orange-400">$5.50</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-4">Zesty citrus blend with organic cane sugar and mint.</p>
<button className="w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2">
                        Add to Order
                    </button>
</div>
</div>

<div className="group relative bg-neutral-900/60 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)]">
<div className="aspect-[4/5] overflow-hidden bg-neutral-800 relative">
<img alt="Chocolate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&amp;w=2608&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute top-3 left-3 bg-black/60 backdrop-blur px-2 py-1 rounded-md border border-white/20">
<span className="text-[10px] font-semibold uppercase tracking-wider text-purple-400 drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">Rich</span>
</div>
</div>
<div className="p-5 relative">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-white tracking-tight">Dark Chocolate Noir</h3>
<span className="text-xs font-medium text-purple-400">$6.50</span>
</div>
<p className="text-xs text-neutral-400 leading-relaxed mb-4">70% single-origin cacao with a touch of espresso.</p>
<button className="w-full py-2 rounded-lg border border-white/10 text-xs font-medium text-neutral-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2">
                        Add to Order
                    </button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-black/40 backdrop-blur-md relative overflow-hidden z-10">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
<div className="p-12 md:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10">
<div className="w-12 h-12 bg-fuchsia-900/30 rounded-xl border border-fuchsia-500/20 flex items-center justify-center mb-8 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.15)]">
<i data-lucide="package" height="24" width="24"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">Delivered to your door</h3>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Packed in dry ice within sustainable, insulated coolers. Guaranteed frozen arrival or your money back. We ship nationwide every Tuesday.
                </p>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-fuchsia-400 transition-colors group" href="#">
                    Check shipping zones
                    <i className="ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" height="16" width="16"></i>
</a>
</div>
<div className="p-12 md:p-24 flex flex-col justify-center bg-white/[0.02]">
<div className="w-12 h-12 bg-cyan-900/30 rounded-xl border border-cyan-500/20 flex items-center justify-center mb-8 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
<i data-lucide="award" height="24" width="24"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">The Melt Club</h3>
<p className="text-neutral-400 mb-8 leading-relaxed">
                    Join our monthly subscription for exclusive flavors, free shipping, and early access to seasonal drops. Cancel anytime.
                </p>

<div className="space-y-3 mb-8">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-neutral-700 bg-neutral-900 flex items-center justify-center group-hover:border-cyan-500 transition-colors">
<i className="text-cyan-400 opacity-0 group-hover:opacity-100 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]" data-lucide="check" height="12" width="12"></i>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Monthly Pints (4x)</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-5 h-5 rounded border border-cyan-500 bg-cyan-500/20 flex items-center justify-center shadow-[0_0_10px_rgba(34,211,238,0.3)]">
<i className="text-cyan-400" data-lucide="check" height="12" width="12"></i>
</div>
<span className="text-sm text-white font-medium">Seasonal Flight (6x) - <span className="text-fuchsia-400 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">Popular</span></span>
</label>
</div>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-cyan-400 transition-colors group" href="#">
                    View subscription plans
                    <i className="ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" height="16" width="16"></i>
</a>
</div>
</div>
</section>

<footer className="bg-black pt-24 pb-12 border-t border-white/10 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-gradient-to-br from-white to-neutral-400 rounded-full flex items-center justify-center text-black text-xs font-bold">M</div>
<span className="font-medium tracking-tight text-white">MELT</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Crafting frozen moments of joy since 2024. Designed with simplicity and taste in mind.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#"><i data-lucide="instagram" height="18" width="18"></i></a>
<a className="text-neutral-500 hover:text-cyan-400 transition-colors" href="#"><i data-lucide="twitter" height="18" width="18"></i></a>
<a className="text-neutral-500 hover:text-purple-400 transition-colors" href="#"><i data-lucide="facebook" height="18" width="18"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">All Flavors</a></li>
<li><a className="text-sm text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">Bundles</a></li>
<li><a className="text-sm text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">Gift Cards</a></li>
<li><a className="text-sm text-neutral-500 hover:text-fuchsia-400 transition-colors" href="#">Merch</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Our Story</a></li>
<li><a className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Ingredients</a></li>
<li><a className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-cyan-400 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div className="col-span-2 lg:col-span-2">
<h4 className="font-medium text-sm text-white mb-4">Stay in the loop</h4>
<p className="text-sm text-neutral-500 mb-4">Get the latest scoops and exclusive offers.</p>
<form className="flex gap-2">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500 transition-all placeholder:text-neutral-600" placeholder="email@example.com" type="email"/>
<button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-fuchsia-400 hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] transition-all">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
<span className="text-xs text-neutral-600">© 2024 Melt Gelato Co. All rights reserved.</span>
<div className="flex gap-6">
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-600 hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
