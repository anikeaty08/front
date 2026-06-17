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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="md:hidden p-2 text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="text-xl tracking-tighter font-semibold uppercase z-50" href="#">
                Aeterna
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#collection">Collection</a>
<a className="hover:text-stone-900 transition-colors" href="#craft">Craftsmanship</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="p-2 text-stone-600 hover:text-stone-900 transition-colors">
<iconify-icon height="22" icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="p-2 text-stone-600 hover:text-stone-900 transition-colors relative">
<iconify-icon height="22" icon="solar:bag-3-linear" width="22"></iconify-icon>
<span className="absolute top-1 right-0 w-2 h-2 bg-amber-700 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-5 flex flex-col gap-8 z-10">
<div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-amber-700">
<span className="w-8 h-[1px] bg-amber-700"></span>
                    Est. 2008
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight font-medium text-stone-900">
                    Crafted for those who walk with purpose.
                </h1>
<p className="text-stone-500 text-lg md:text-xl leading-relaxed max-w-md font-light">
                    Premium shoes, leather wallets, and bags—handcrafted with precision, designed to age beautifully, and built to accompany you for life.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="group inline-flex items-center justify-center gap-2 bg-stone-900 text-stone-50 px-8 py-4 text-sm font-medium tracking-wide hover:bg-stone-800 transition-all duration-300" href="#shop">
                        Explore Collection
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium text-stone-900 border border-stone-300 hover:border-stone-900 transition-colors" href="#craft">
                        Discover Our Craft
                    </a>
</div>
</div>

<div className="md:col-span-7 relative">
<div className="aspect-[4/5] md:aspect-[5/4] relative overflow-hidden bg-stone-200">
<img alt="Premium Leather Shoes" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-stone-300 hidden md:block"></div>
</div>
</div>
</header>

<section className="border-y border-stone-200 bg-white/50">
<div className="max-w-7xl mx-auto py-10 px-6">
<p className="text-center text-xs tracking-widest text-stone-400 uppercase mb-8">As seen in</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">

<span className="text-xl font-serif italic font-semibold">Vogue</span>
<span className="text-xl font-serif font-bold tracking-tight">GQ</span>
<span className="text-xl font-serif font-medium">Esquire</span>
<span className="text-xl font-serif italic">Monocle</span>
<span className="text-xl font-serif font-bold">Hypebeast</span>
</div>
</div>
</section>

<section className="py-24 px-6" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Curated Collections</h2>
<a className="hidden md:flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#">
                    View all
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-200 mb-6">
<img alt="Leather Footwear" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="text-xl font-medium text-stone-900 mb-1">Footwear</h3>
<p className="text-sm text-stone-500">Oxfords, Loafers, Boots</p>
</div>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block md:mt-12" href="#">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-200 mb-6">
<img alt="Leather Wallets" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="text-xl font-medium text-stone-900 mb-1">Small Goods</h3>
<p className="text-sm text-stone-500">Wallets, Cardholders, Belts</p>
</div>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>

<a className="group block" href="#">
<div className="relative aspect-[3/4] overflow-hidden bg-stone-200 mb-6">
<img alt="Leather Bags" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-center">
<div>
<h3 className="text-xl font-medium text-stone-900 mb-1">Carry</h3>
<p className="text-sm text-stone-500">Briefcases, Weekenders</p>
</div>
<div className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="craft">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1">
<div className="aspect-square relative overflow-hidden">
<img alt="Craftsman working on leather" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 max-w-xs shadow-xl hidden md:block border border-stone-100">
<p className="font-serif text-lg italic text-stone-800">"Every stitch tells a story. We create pieces meant to be worn, carried, and remembered."</p>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-4 block">Our Process</span>
<h2 className="text-4xl md:text-5xl font-medium text-stone-900 mb-6 tracking-tight">Where Leather Becomes Legacy</h2>
<p className="text-stone-600 text-lg leading-relaxed mb-8">
                        Our full-grain leather is vegetable-tanned using age-old techniques that respect the environment and the material. Sourced from sustainable tanneries in Tuscany, each hide is hand-selected for its unique character and grain.
                    </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4">
<div className="mt-1 text-stone-900">
<iconify-icon height="24" icon="solar:medal-ribbon-star-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Master Craftsmanship</h4>
<p className="text-sm text-stone-500 mt-1">Hand-stitched finishes and reinforced stress points ensure longevity.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-stone-900">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-stone-900">Ethically Sourced</h4>
<p className="text-sm text-stone-500 mt-1">100% vegetable-tanned leather, free from chrome and harmful chemicals.</p>
</div>
</li>
</ul>
<a className="text-stone-900 font-medium hover:text-amber-700 transition-colors inline-flex items-center gap-2 border-b border-stone-900 pb-0.5 hover:border-amber-700" href="#">
                        Read the full story
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-3 block">Selection</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Timeless Favorites</h2>
<p className="text-stone-500">Pieces that have stood the test of time and terrain.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] uppercase tracking-wider px-2 py-1 font-semibold z-10">Best Seller</span>
<img alt="The Oxford" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center hover:bg-stone-800">
<iconify-icon height="20" icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 text-lg">The Classic Oxford</h3>
<p className="text-stone-500 text-xs mt-1">Full-grain calfskin</p>
</div>
<span className="text-sm font-medium text-stone-900">$295</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
<img alt="The Bifold" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center hover:bg-stone-800">
<iconify-icon height="20" icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 text-lg">The Slim Bifold</h3>
<p className="text-stone-500 text-xs mt-1">Cognac vegetable tan</p>
</div>
<span className="text-sm font-medium text-stone-900">$85</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
<img alt="The Weekender" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center hover:bg-stone-800">
<iconify-icon height="20" icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 text-lg">The Weekender</h3>
<p className="text-stone-500 text-xs mt-1">Weather-resistant canvas</p>
</div>
<span className="text-sm font-medium text-stone-900">$450</span>
</div>
</div>

<div className="group">
<div className="relative aspect-[4/5] bg-stone-100 mb-4 overflow-hidden">
<img alt="The Belt" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
<button className="bg-stone-900 text-white w-10 h-10 flex items-center justify-center hover:bg-stone-800">
<iconify-icon height="20" icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 text-lg">Heritage Belt</h3>
<p className="text-stone-500 text-xs mt-1">Brass hardware</p>
</div>
<span className="text-sm font-medium text-stone-900">$110</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block border border-stone-300 text-stone-900 px-8 py-3 text-sm font-medium hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300" href="#">
                    View All Products
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
<div className="space-y-4">
<div className="text-amber-500 mb-4 inline-block">
<iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Lifetime Guarantee</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        We stand by our work. If a seam breaks or hardware fails, we repair it free of charge. Forever.
                    </p>
</div>
<div className="space-y-4">
<div className="text-amber-500 mb-4 inline-block">
<iconify-icon height="32" icon="solar:clock-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Ages Beautifully</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Our leather develops a rich patina over time, making every scratch and mark a part of your story.
                    </p>
</div>
<div className="space-y-4">
<div className="text-amber-500 mb-4 inline-block">
<iconify-icon height="32" icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">Direct to Consumer</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        By removing the middlemen, we provide luxury grade quality at honest, transparent prices.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-center mb-16 tracking-tight">Voices from the Community</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-stone-100 shadow-sm">
<div className="flex gap-1 text-amber-700 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 leading-relaxed">"The craftsmanship is undeniable. It feels substantial in your hand, smells incredible, and after 6 months, looks even better than day one."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">James D.</p>
<p className="text-xs text-stone-400">Architect, New York</p>
</div>
</div>
</div>

<div className="bg-white p-8 border border-stone-100 shadow-sm">
<div className="flex gap-1 text-amber-700 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 leading-relaxed">"Finally, a brand that values quality over trends. The weekend bag has traveled with me to three continents and hasn't let me down."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Elena R.</p>
<p className="text-xs text-stone-400">Photographer, London</p>
</div>
</div>
</div>

<div className="bg-white p-8 border border-stone-100 shadow-sm hidden lg:block">
<div className="flex gap-1 text-amber-700 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 mb-6 leading-relaxed">"Elegant packaging, fast shipping, but most importantly, a product that feels honest. The leather texture is simply unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">Marcus T.</p>
<p className="text-xs text-stone-400">Designer, Berlin</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-200 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Join the Inner Circle</h2>
<p className="text-stone-500 mb-8 max-w-lg mx-auto">Sign up for early access to new releases, care guides for your leather, and 10% off your first order.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 bg-stone-50 border border-stone-200 px-4 py-3 text-sm focus:outline-none focus:border-stone-400 placeholder:text-stone-400 transition-colors" placeholder="Your email address" type="email"/>
<button className="bg-stone-900 text-white px-8 py-3 text-sm font-medium hover:bg-stone-800 transition-colors" type="button">
                    Subscribe
                </button>
</form>
<p className="text-xs text-stone-400 mt-4">We respect your inbox. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-[#1C1917] text-white pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-medium uppercase mb-6 block" href="#">Aeterna</a>
<p className="text-stone-500 text-sm leading-relaxed mb-6">
                    Defining the intersection of heritage craftsmanship and modern utility.
                </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Footwear</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Leather Bags</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6">Help</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Care Instructions</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-6">About</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-stone-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-600">
<p>© 2024 Aeterna Atelier. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-400" href="#">Privacy Policy</a>
<a className="hover:text-stone-400" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
