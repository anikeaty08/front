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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-widest text-lg z-50" href="#">VANCE.</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-300" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors duration-300" href="#journal">Journal</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Collaboration</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm text-white border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 px-4 py-2 rounded-full transition-all duration-300 items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    Get in Touch
                </button>
<button className="md:hidden text-white text-xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Chef Texture" className="w-full h-full object-cover opacity-30 grayscale" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                Available for Global Residencies
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Elena Vance. <br/>
<span className="gradient-text">Culinary Architect.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
                Bridging the gap between avant-garde technique and ancestral heritage. Creating edible narratives for private events, consulting, and brand partnerships.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group bg-white text-zinc-950 px-8 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all flex items-center gap-2">
                    View Selected Works
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="text-zinc-300 hover:text-white px-8 py-3 text-sm font-medium transition-colors flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                    Chef's Reel
                </button>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-950/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 py-8">
<p className="text-center text-xs text-zinc-600 uppercase tracking-widest mb-6">Awards &amp; Recognition</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg tracking-tighter font-semibold text-white">JAMES BEARD</span>
<span className="text-lg tracking-tighter font-semibold text-white">MICHELIN GUIDE</span>
<span className="text-lg tracking-tighter font-semibold text-white">WORLD'S 50 BEST</span>
<span className="text-lg tracking-tighter font-semibold text-white">NETFLIX</span>
<span className="text-lg tracking-tighter font-semibold text-white">BON APPÉTIT</span>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="philosophy">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Methodology.</h2>
<p className="text-zinc-500 max-w-xl">My approach to food is rooted in research, respect for the ingredient, and the relentless pursuit of flavor extraction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:test-tube-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Molecular Precision</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Utilizing modern lab techniques to isolate flavors and textures that traditional cooking cannot achieve.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Botanical Research</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Foraging and cataloging indigenous flora to reintroduce forgotten tastes to the modern palate.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center text-white mb-6 group-hover:bg-zinc-700 transition-colors">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3">Menu Development</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Crafting cohesive culinary narratives for restaurants, pop-ups, and exclusive private dining experiences.</p>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-zinc-800/20 to-zinc-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

<img alt="Signature Creation" className="relative rounded-xl w-full object-cover shadow-2xl border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1546221535-3057e008c26c?q=80&amp;w=2148&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="space-y-2">
<span className="text-emerald-500 text-xs font-medium tracking-widest uppercase">Current R&amp;D</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">The Sea's Floor</h2>
</div>
<p className="text-zinc-400 leading-relaxed">
                    A textural exploration of the ocean floor. Featuring dehydrated scallop silk, kelp emulsion, and oyster leaf foam. This dish represents 3 months of fermentation experiments with local seaweed varieties.
                </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<span className="block text-2xl font-light text-white mb-1">90</span>
<span className="text-xs text-zinc-600 uppercase tracking-wider">Days Fermentation</span>
</div>
<div>
<span className="block text-2xl font-light text-white mb-1">12</span>
<span className="text-xs text-zinc-600 uppercase tracking-wider">Textures</span>
</div>
</div>
<div className="pt-6">
<a className="inline-flex items-center text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">
                        Read the case study
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6" id="portfolio">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Selected Works</h2>
<div className="flex justify-center gap-6 text-sm text-zinc-500">
<button className="text-white border-b border-white pb-1">Signatures</button>
<button className="hover:text-zinc-300 transition-colors">Concepts</button>
<button className="hover:text-zinc-300 transition-colors">Pastry</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16">

<div className="space-y-8">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Cold &amp; Raw</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Monochrome Beetroot</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2023</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">Beetroot leather, fermented juice, goat milk snow, dill oil.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Wagyu &amp; Coal</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2022</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">A5 Wagyu smoked over binchotan, uni butter, charred onion petal.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Nordic Garden</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2024</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">24 varieties of baby vegetables, edible soil, buttermilk whey.</p>
</div>
</div>

<div className="space-y-8">
<h3 className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Hot &amp; Savory</h3>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Turbot on the Bone</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2023</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">Roasted whole, pil-pil sauce, white asparagus, caviar.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Venison &amp; Pine</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2021</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">Smoked venison loin, pine cone jam, celeriac fondant.</p>
</div>
<div className="group cursor-pointer">
<div className="flex justify-between items-baseline mb-2">
<span className="text-lg text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">Forest Floor Risotto</span>
<span className="text-zinc-600 text-xs border border-zinc-800 rounded px-2 py-0.5">2024</span>
</div>
<p className="text-sm text-zinc-500 line-clamp-2">Acquerello rice, chanterelles, black truffle, spruce oil.</p>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="text-xs text-zinc-500 border border-zinc-800 rounded-full px-4 py-2 hover:bg-zinc-900 transition-colors" href="#">
                Request Full Portfolio (PDF)
            </a>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12 text-center">In The Kitchen</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">

<img alt="Chef Elena Plating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&amp;w=1977&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<p className="text-white font-medium">Service at The Modern</p>
<p className="text-zinc-400 text-xs mt-1">New York, 2023</p>
</div>
</div>
</div>
<div className="md:col-span-1 relative group overflow-hidden rounded-2xl">

<img alt="Plating Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-1 relative group overflow-hidden rounded-2xl">

<img alt="Raw Ingredients" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1585325701165-351af916e581?q=80&amp;w=2150&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 relative group overflow-hidden rounded-2xl">

<img alt="Kitchen Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1629118641977-1606d91f4227?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                    @vance.culinary
                </div>
</div>
</div>
</section>

<div className="py-12 border-y border-white/5 bg-zinc-900/10 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
<div className="flex gap-12 whitespace-nowrap overflow-hidden">

<div className="flex gap-16 min-w-full animate-marquee items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:knife-linear"></iconify-icon></div>
<span className="text-zinc-300 font-medium">Custom Forged Steel from Japan</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:chef-hat-linear"></iconify-icon></div>
<span className="text-zinc-300 font-medium">Concept Development</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:flame-linear"></iconify-icon></div>
<span className="text-zinc-300 font-medium">Open Fire Cooking</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:users-group-rounded-linear"></iconify-icon></div>
<span className="text-zinc-300 font-medium">Staff Training &amp; Systems</span>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center"><iconify-icon className="text-zinc-400" icon="solar:knife-linear"></iconify-icon></div>
<span className="text-zinc-300 font-medium">Custom Forged Steel from Japan</span>
</div>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-zinc-800">
<div className="text-center px-4">
<span className="block text-4xl font-medium text-white mb-2 tracking-tight">15</span>
<span className="text-sm text-zinc-500">Years Cooking</span>
</div>
<div className="text-center px-4">
<span className="block text-4xl font-medium text-white mb-2 tracking-tight">8</span>
<span className="text-sm text-zinc-500">Global Residencies</span>
</div>
<div className="text-center px-4">
<span className="block text-4xl font-medium text-white mb-2 tracking-tight">3</span>
<span className="text-sm text-zinc-500">Concepts Launched</span>
</div>
<div className="text-center px-4">
<span className="block text-4xl font-medium text-white mb-2 tracking-tight">1k+</span>
<span className="text-sm text-zinc-500">Recipes Developed</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-zinc-700 mb-8" icon="solar:quote-up-linear"></iconify-icon>
<blockquote className="text-2xl md:text-3xl font-light text-white leading-normal mb-8">
                "Elena possesses that rare combination of wild creativity and disciplined restraint. She doesn't just cook; she engineers experiences."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<img alt="Chef Mentor" className="w-10 h-10 rounded-full grayscale opacity-80" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div className="text-left">
<div className="text-sm font-medium text-white">Chef Marco Pierre</div>
<div className="text-xs text-zinc-500">Executive Chef, The Azure</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
<h2 className="text-2xl font-medium text-white text-center mb-2">Work with Elena</h2>
<p className="text-zinc-500 text-center text-sm mb-8">For private dining, consulting, or brand partnerships.</p>
<form className="space-y-5">
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Inquiry Type</label>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:bg-zinc-900 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                                    Private Dining
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:bg-zinc-900 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                                    Consulting
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:bg-zinc-900 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                                    Residency
                                </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="type" type="radio"/>
<div className="text-center py-3 rounded-lg border border-zinc-800 bg-zinc-950 text-xs text-zinc-400 hover:bg-zinc-900 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all">
                                    Press/Media
                                </div>
</label>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="contact@email.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1">Project Details</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none" placeholder="Tell me about the event, timeline, or concept..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3 rounded-xl hover:bg-zinc-200 transition-colors mt-4" type="button">
                        Send Inquiry
                    </button>
</form>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-white/5 to-zinc-500/5 rounded-full blur-3xl -z-10"></div>
</section>

<div className="border-t border-white/5 py-16 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h3 className="text-white font-medium mb-1">From the Test Kitchen</h3>
<p className="text-sm text-zinc-500">Weekly R&amp;D notes, techniques, and ingredient sourcing.</p>
</div>
<div className="flex w-full md:w-auto gap-2">
<input className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm w-full md:w-64 focus:outline-none focus:border-zinc-600 text-white placeholder:text-zinc-600" placeholder="email@address.com" type="email"/>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<footer className="bg-black border-t border-white/5 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-medium tracking-widest text-lg block mb-6" href="#">VANCE.</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Culinary consultancy and private dining experiences rooted in nature and innovation.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Private Dining</a></li>
<li><a className="hover:text-white transition-colors" href="#">Menu Development</a></li>
<li><a className="hover:text-white transition-colors" href="#">Restaurant Consulting</a></li>
<li><a className="hover:text-white transition-colors" href="#">Staff Training</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Latest Projects</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className="flex justify-between max-w-[200px]"><span>The Modern, NY</span> <span className="text-zinc-600">2023</span></li>
<li className="flex justify-between max-w-[200px]"><span>Noma, CPH</span> <span className="text-zinc-600">2022</span></li>
<li className="flex justify-between max-w-[200px]"><span>Azurmendi, ES</span> <span className="text-zinc-600">2021</span></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="mailto:elena@vance.com">elena@vance.com</a></li>
<li>Based in New York, NY</li>
<li className="pt-2"><a className="hover:text-white transition-colors" href="#">Download Media Kit</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-zinc-600">
                    © 2024 Elena Vance Culinary. All rights reserved.
                </div>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
