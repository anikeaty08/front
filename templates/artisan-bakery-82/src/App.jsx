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
      
<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-zinc-200/60 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-sm font-semibold tracking-tighter uppercase" href="#">VELVET &amp; CRUMB</a>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#collection">Collection</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#custom">Bespoke</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                    Sign In
                </button>
<button className="bg-zinc-900 text-zinc-50 hover:bg-zinc-800 text-xs md:text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2">
<span>Order Now</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-orange-100/40 via-rose-50/20 to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">New Seasonal Menu Available</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Sculpted from <br className="hidden md:block"/> <span className="text-zinc-400">sugar</span> &amp; substance.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Minimalist cake design meeting complex flavor profiles. We craft edible architecture for weddings, events, and quiet indulgences.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-zinc-900 text-white h-12 px-8 rounded-full font-medium text-sm hover:bg-zinc-800 hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                    View Menu
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:chef-hat-heart-linear" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto bg-white border border-zinc-200 text-zinc-700 h-12 px-8 rounded-full font-medium text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all flex items-center justify-center gap-2">
                    Custom Inquiry
                </button>
</div>
</div>

<div className="mt-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl md:translate-y-12 shadow-sm border border-zinc-200/50">
<img alt="Minimalist Cake" className="object-cover w-full h-full grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold text-zinc-900">Earl Grey &amp; Lavender</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Signature Series</p>
</div>
</div>
<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-zinc-200/50 border border-zinc-200/50 z-10">
<img alt="Wedding Cake" className="object-cover w-full h-full grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1626803775151-61d756612f97?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-white/20">
<p className="text-xs font-semibold text-zinc-900">Vanilla Bean &amp; Fig</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Bestseller</p>
</div>
</div>
<div className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl md:translate-y-12 shadow-sm border border-zinc-200/50">
<img alt="Chocolate Cake" className="object-cover w-full h-full grayscale-[10%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold text-zinc-900">Dark Chocolate &amp; Salt</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Seasonal</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">The Methodology</h2>
<p className="text-zinc-500 max-w-lg text-lg font-light">We approach baking not as a chore, but as a chemistry. Precise measurements, premium sourcing, and artistic execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-zinc-800" icon="solar:leaf-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Organic Sourcing</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We partner directly with local farms for eggs, dairy, and seasonal fruits. No preservatives, ever.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-zinc-800" icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Structural Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Every tier is calculated for stability and aesthetics. We draft sketches before the oven turns on.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-colors group">
<div className="h-10 w-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-zinc-800" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">White Glove Delivery</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Climate-controlled transport ensures your centerpiece arrives in pristine condition, anywhere in the city.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="collection">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 mb-4">
<iconify-icon className="text-orange-500" icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Curated Selection</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Essentials Menu</h2>
</div>
<div className="space-y-4">

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562777717-dc6984f65a63?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">The Minimalist Vanilla</h4>
<p className="text-xs text-zinc-500">Swiss meringue buttercream, madagascan vanilla.</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">from $65</span>
<span className="text-[10px] text-zinc-400">6 inch</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Espresso &amp; Hazelnut</h4>
<p className="text-xs text-zinc-500">Coffee infused sponge, roasted hazelnut praline.</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">from $75</span>
<span className="text-[10px] text-zinc-400">6 inch</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Raspberry Rose</h4>
<p className="text-xs text-zinc-500">Floral notes, tart raspberry reduction, white chocolate.</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">from $70</span>
<span className="text-[10px] text-zinc-400">6 inch</span>
</div>
</div>

<div className="group flex items-center justify-between p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-zinc-200 transition-all cursor-pointer">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-zinc-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Lemon Elderflower</h4>
<p className="text-xs text-zinc-500">Zesty lemon curd, light elderflower cream.</p>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-zinc-900">from $68</span>
<span className="text-[10px] text-zinc-400">6 inch</span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center text-xs font-medium text-zinc-500 hover:text-zinc-900 border-b border-transparent hover:border-zinc-900 pb-0.5 transition-all" href="#">
                    Download Full Menu (PDF)
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-50 overflow-hidden relative" id="custom">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Designed for the moment.</h2>
<p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed">
                    We specialize in architectural wedding cakes and bespoke centerpieces. Tell us your vision, palette, and venue, and we will engineer a dessert that complements the aesthetic perfectly.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-50 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 font-light">Complimentary tasting session for orders over $500</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-50 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 font-light">Custom color matching to Pantone swatches</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-50 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-zinc-300 font-light">Floral arrangement coordination</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-80 transition-opacity" href="#">
                    Start a consultation
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-rose-500 rounded-2xl opacity-20 blur-xl"></div>
<div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-8 relative">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Name</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all placeholder:text-zinc-600" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Date</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all placeholder:text-zinc-600" placeholder="MM/DD/YYYY" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</label>
<input className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all placeholder:text-zinc-600" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Event Details</label>
<textarea className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell us about your theme, guest count, and preferences..." rows="3"></textarea>
</div>

<div className="flex items-center gap-3 py-2">
<label className="flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-600 rounded bg-zinc-900 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
<iconify-icon className="text-zinc-900 opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="ml-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">I accept the terms of service</span>
</label>
</div>
<button className="w-full bg-white text-zinc-900 font-medium text-sm py-3 rounded-lg hover:bg-zinc-200 transition-colors" type="button">
                            Request Quote
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12 md:py-20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-bold tracking-tighter uppercase mb-6 block text-zinc-900" href="#">VELVET &amp; CRUMB</a>
<p className="text-xs text-zinc-500 mb-4 max-w-xs">
                    Artisan cakes crafted for the modern palate. Based in New York City, shipping nationwide.
                </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Wedding Cakes</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Birthday Cakes</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Cupcakes &amp; Minis</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Ingredients</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Shipping Policy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Velvet &amp; Crumb Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-zinc-500">Systems Operational</span>
</div>
</div>
</footer>

    </>
  );
}
