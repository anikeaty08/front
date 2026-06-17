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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="texture-overlay"></div>

<nav className="fixed bg-[#E0D4C2]/90 w-full z-40 border-[#d9cbb2] border-b top-0 backdrop-blur-sm">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button className="lg:hidden text-[#1F1B16]">
<iconify-icon className="" height="23" icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{color: 'rgb(31, 27, 22)'}} width="24"></iconify-icon>
</button>

<a className="uppercase text-xl font-medium text-[#1F1B16] tracking-tight font-serif" href="/">
</a>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#1F1B16]">
<a className="hover:text-[#B8975E] transition-colors" href="#">Shop</a>
<a className="hover:text-[#B8975E] transition-colors" href="#">Our Story</a>
<a className="hover:text-[#B8975E] transition-colors" href="#">Recipes</a>
<a className="hover:text-[#B8975E] transition-colors" href="#">Find Us</a>
<a className="hover:text-[#B8975E] transition-colors" href="#">Visit &amp; Taste</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-[#1F1B16] hover:text-[#B8975E] transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="hidden md:block text-[#1F1B16] hover:text-[#B8975E] transition-colors">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>
<button className="text-[#1F1B16] hover:text-[#B8975E] transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 bg-[#B33A2B] text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">2</span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Utah Cache Valley Landscape" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#1F1B16]/30 mix-blend-multiply"></div>
<div className="bg-center bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(31, 27, 22, 0.6), transparent), url(\'https: //storage.googleapis.com/msgsndr/AFwkfgypLCWsy7Zz1Rqm/media/697e48e21f68d171db820320.png\')'}}></div><div className="bg-center bg-cover absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(31, 27, 22, 0.6), transparent), url(\'https: //storage.googleapis.com/msgsndr/AFwkfgypLCWsy7Zz1Rqm/media/69968afd905d4785c8cf0668.png\')'}}></div>
</div>

<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<p className="text-white/90 text-xs md:text-sm uppercase tracking-[0.2em] mb-4 font-medium">Family-Owned · Beekeeper Crafted · Mendon, Utah</p>
<h1 className="text-white text-5xl md:text-7xl font-serif tracking-tight mb-6 leading-[1.1]">
                From Our Hives <br/> to Your Table
            </h1>
<p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Honey, honey wine vinegar, and honey wine — crafted with intention since 2014. Great taste. Healthier living. A deeper connection to the land.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#B33A2B] hover:bg-[#9E3327] text-white px-8 py-4 text-sm uppercase tracking-wider font-medium transition-colors duration-300 w-full sm:w-auto text-center" href="#">
                    Shop All Products
                </a>
<a className="bg-transparent border border-white text-white hover:bg-white hover:text-[#1F1B16] px-8 py-4 text-sm uppercase tracking-wider font-medium transition-all duration-300 w-full sm:w-auto text-center" href="#">
                    Our Story
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 md:py-32 bg-[#E0D4C2] px-6">
<div className="max-w-3xl mx-auto text-center">
<div className="flex justify-center mb-8">
<iconify-icon className="text-[#B8975E]" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-serif text-[#1F1B16] leading-tight mb-8 tracking-tight">
                We're a family-owned agricultural business with a mission to protect honeybees and craft great-tasting, health-focused products.
            </h2>
<p className="text-[#4A433C] text-base md:text-lg leading-relaxed mb-8 font-light">
                Since 2014, we've been transforming raw Utah honey into vinegars, wines, and pure honey that inspire better eating, healthier living, and a deeper connection to the land.
            </p>
<p className="text-[#1F1B16] text-lg font-serif italic">
                Exceptional flavor doesn't have to come with excess calories. That's the Slide Ridge difference.
            </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#B8975E] text-xs uppercase tracking-widest font-semibold">What We Make</span>
<h2 className="text-4xl font-serif text-[#1F1B16] mt-3 mb-2 tracking-tight">Three Product Lines. One Source.</h2>
<p className="text-[#4A433C]">Everything starts with our bees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-[#F5F0E8] aspect-[4/5] mb-6">
<img alt="Honey" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-[#B8975E] text-[11px] uppercase tracking-wider font-semibold mb-2">The Foundation</span>
<h3 className="text-2xl font-serif text-[#1F1B16] mb-3">Pure Utah Honey</h3>
<p className="text-[#4A433C] text-sm leading-relaxed mb-4 max-w-xs">Raw honey. Hot honey. Cream honey. Straight from our 3,000+ hives — pure, unfiltered, and impossibly sweet.</p>
<a className="inline-flex items-center text-[#1F1B16] border-b border-[#1F1B16] pb-0.5 text-sm uppercase tracking-wide hover:text-[#B8975E] hover:border-[#B8975E] transition-colors" href="#">
                            Shop Honey
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-[#F5F0E8] aspect-[4/5] mb-6">
<img alt="Vinegar" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-[#B8975E] text-[11px] uppercase tracking-wider font-semibold mb-2">America's First</span>
<h3 className="text-2xl font-serif text-[#1F1B16] mb-3">Honey Wine Vinegar</h3>
<p className="text-[#4A433C] text-sm leading-relaxed mb-4 max-w-xs">Four bold flavors, two years in the making. Low-calorie vinegar that elevates salads, marinades, and everyday meals.</p>
<a className="inline-flex items-center text-[#1F1B16] border-b border-[#1F1B16] pb-0.5 text-sm uppercase tracking-wide hover:text-[#B8975E] hover:border-[#B8975E] transition-colors" href="#">
                            Shop Vinegar
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden bg-[#F5F0E8] aspect-[4/5] mb-6">
<img alt="Wine" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-[#B8975E] text-[11px] uppercase tracking-wider font-semibold mb-2">Award-Winning</span>
<h3 className="text-2xl font-serif text-[#1F1B16] mb-3">Honey Wine</h3>
<p className="text-[#4A433C] text-sm leading-relaxed mb-4 max-w-xs">Our CaCysir apple-honey wine. Crafted from raw honey and local apples. Selected to christen the USS Utah.</p>
<a className="inline-flex items-center text-[#1F1B16] border-b border-[#1F1B16] pb-0.5 text-sm uppercase tracking-wide hover:text-[#B8975E] hover:border-[#B8975E] transition-colors" href="#">
                            Shop Wine
                            <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F0E8] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-3xl md:text-4xl font-serif text-[#1F1B16] mb-2 tracking-tight">Customer Favorites</h2>
<p className="text-[#4A433C]">Our most-loved products across all three lines.</p>
</div>
<a className="hidden md:inline-flex items-center text-[#3C4F3C] text-sm font-medium hover:text-[#1F1B16] transition-colors mt-4 md:mt-0" href="#">
        View All Products
        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(31,27,22,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="relative bg-[#F9F9F9] rounded aspect-square mb-4 overflow-hidden flex items-center justify-center">
<span className="absolute top-2 left-2 bg-[#B8975E] text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm z-10">Best Seller</span>
<img alt="Nature's Honey Vinegar" className="mix-blend-multiply w-3/4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center text-[#1F1B16] opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<p className="text-[#4A433C] text-xs">Vinegar</p>
<h4 className="text-[#1F1B16] font-medium text-base">Nature's Honey Vinegar</h4>
<p className="text-[#1F1B16] font-semibold text-sm mt-2">$18.00</p>
</div>
</div>

<div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(31,27,22,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="relative bg-[#F9F9F9] rounded aspect-square mb-4 overflow-hidden flex items-center justify-center">
<span className="absolute top-2 left-2 bg-[#B33A2B] text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm z-10">Trending</span>
<img alt="Blazing Bee Hot Honey" className="mix-blend-multiply w-3/4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center text-[#1F1B16] opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<p className="text-[#4A433C] text-xs">Honey</p>
<h4 className="text-[#1F1B16] font-medium text-base">Blazing Bee Hot Honey</h4>
<p className="text-[#1F1B16] font-semibold text-sm mt-2">$14.00</p>
</div>
</div>

<div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(31,27,22,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="aspect-square overflow-hidden flex bg-[#F9F9F9] rounded mb-4 relative items-center justify-center">
<img alt="Raw Honey 12oz" className="mix-blend-multiply w-3/4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center text-[#1F1B16] opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="" icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<p className="text-[#4A433C] text-xs">Honey</p>
<h4 className="text-[#1F1B16] font-medium text-base">Raw Utah Honey (12oz)</h4>
<p className="text-[#1F1B16] font-semibold text-sm mt-2">$12.00</p>
</div>
</div>

<div className="bg-white p-4 rounded-lg shadow-[0_2px_8px_rgba(31,27,22,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
<div className="relative bg-[#F9F9F9] rounded aspect-square mb-4 overflow-hidden flex items-center justify-center">
<span className="absolute top-2 left-2 bg-[#3C4F3C] text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm z-10">Gift</span>
<img alt="Vinegar Sampler" className="mix-blend-multiply w-3/4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-3 right-3 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center text-[#1F1B16] opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:cart-plus-linear" width="18"></iconify-icon>
</button>
</div>
<div className="space-y-1">
<p className="text-[#4A433C] text-xs">Bundles</p>
<h4 className="text-[#1F1B16] font-medium text-base">Vinegar Sampler Pack</h4>
<p className="text-[#1F1B16] font-semibold text-sm mt-2">$45.00</p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-[#3C4F3C] text-sm font-medium hover:text-[#1F1B16] transition-colors" href="#">
        View All Products
        <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-[#F5F0E8] border-y border-[#D4C9B8]">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-serif text-[#1F1B16] mb-6 tracking-tight">Flavor Without Compromise</h2>
<p className="text-[#4A433C] text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
      We believe exceptional food doesn't have to come with excess calories. Our honey wine vinegars deliver bold,
      balanced flavor for salads, marinades, and everyday cooking — without the guilt. Health-focused products that
      actually taste incredible.
    </p>
<a className="inline-block border-2 border-[#3C4F3C] text-[#3C4F3C] px-8 py-3 text-sm uppercase font-medium tracking-wide hover:bg-[#3C4F3C] hover:text-white transition-colors duration-300 rounded" href="#">
      Explore Recipes
    </a>
</div>
</section>

<section className="py-20 bg-[#E0D4C2]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">

<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#B8975E]/10 flex items-center justify-center mb-4 text-[#3C4F3C]">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-[#1F1B16] mb-2">Beekeeper Owned</h3>
<p className="text-[#4A433C] text-sm leading-relaxed">3,000+ hives across Northern Utah. One family. Complete quality control from hive to bottle.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#B8975E]/10 flex items-center justify-center mb-4 text-[#3C4F3C]">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-[#1F1B16] mb-2">Health-Focused</h3>
<p className="text-[#4A433C] text-sm leading-relaxed">Great taste without excess calories. Nutrition and balance at the forefront of everything we make.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#B8975E]/10 flex items-center justify-center mb-4 text-[#3C4F3C]">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-[#1F1B16] mb-2">America's First</h3>
<p className="text-[#4A433C] text-sm leading-relaxed">The first US company to produce honey wine vinegar at FDA-certified scale. Two years per batch.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-[#B8975E]/10 flex items-center justify-center mb-4 text-[#3C4F3C]">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-serif font-semibold text-[#1F1B16] mb-2">Sustaining the Land</h3>
<p className="text-[#4A433C] text-sm leading-relaxed">Protecting honeybees, sourcing local, and stewarding agriculture for future generations.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-1/2">
<div className="aspect-[4/3] overflow-hidden rounded-lg bg-[#F5F0E8]">
<img alt="Beekeeping Family" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
<div className="w-full md:w-1/2">
<span className="text-[#B8975E] text-xs uppercase tracking-widest font-semibold block mb-4">Our Story</span>
<h2 className="text-4xl font-serif text-[#1F1B16] mb-6 tracking-tight">It All Starts with the Bees</h2>
<p className="text-[#4A433C] text-base leading-relaxed mb-6">
                        In 2014, our family set out to protect honeybees and craft food that reflects where it comes from. What began with caring for bees has grown into a thoughtfully crafted collection of honey, wines, and honey wine vinegars — each made with intention, integrity, and balance.
                    </p>
<p className="text-[#4A433C] text-base leading-relaxed mb-8">
                        Today, we're proud to share products that inspire better eating, healthier living, and a deeper connection to the land.
                    </p>
<a className="text-[#1F1B16] font-medium border-b border-[#1F1B16] pb-1 hover:text-[#B8975E] hover:border-[#B8975E] transition-colors inline-flex items-center" href="#">
                        Read Our Story
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-0">
<div className="grid grid-cols-1 md:grid-cols-3">

<a className="group relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden" href="#">
<img alt="Salad Cooking" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif text-2xl italic mb-2">"Vinegar that transforms weeknight cooking"</p>
<span className="text-xs uppercase tracking-wider font-medium border-b border-white pb-1">Shop Vinegar</span>
</div>
</a>

<a className="group relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden" href="#">
<img alt="Hot Honey Pizza" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif text-2xl italic mb-2">"Hot honey that brings the heat"</p>
<span className="text-xs uppercase tracking-wider font-medium border-b border-white pb-1">Shop Honey</span>
</div>
</a>

<a className="group relative aspect-[3/4] md:aspect-auto md:h-[600px] overflow-hidden" href="#">
<img alt="Wine Toast" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/30 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div><img alt="Slide Ridge Honey Wine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/msgsndr/AFwkfgypLCWsy7Zz1Rqm/media/69968d998d9e0e38190934b1.webp"/><div className="group-hover:bg-black/30 transition-colors bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-serif text-2xl italic mb-2">"Wine worth celebrating"</p>
<span className="text-xs uppercase tracking-wider font-medium border-b border-white pb-1">Shop Wine</span>
</div>
</a>
</div>
</section>

<section className="py-16 bg-white border-b border-[#D4C9B8]">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-[#4A433C] text-sm uppercase tracking-widest mb-8">Trusted &amp; Loved</p>
<blockquote className="text-2xl md:text-3xl font-serif text-[#1F1B16] leading-snug mb-6">
                "One of only three companies in the world producing honey wine vinegar. It's completely changed how I cook."
            </blockquote>
</div>
</section>

<section className="flex flex-col md:flex-row">
<div className="flex-1 bg-[#F5F0E8] p-12 md:p-20 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-[#D4C9B8]">
<iconify-icon className="text-[#B8975E] mb-6" icon="solar:map-point-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-serif text-[#1F1B16] mb-3">Find Us Near You</h3>
<p className="text-[#4A433C] mb-8 max-w-sm">Our products are available at retailers throughout Utah. Find a store closest to you.</p>
<a className="bg-transparent border border-[#3C4F3C] text-[#3C4F3C] px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#3C4F3C] hover:text-white transition-colors rounded" href="#">Store Locator</a>
</div>
<div className="flex-1 bg-[#E0D4C2] p-12 md:p-20 flex flex-col justify-center items-start">
<iconify-icon className="text-[#B8975E] mb-6" icon="solar:wineglass-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-serif text-[#1F1B16] mb-3">Visit the Honey House</h3>
<p className="text-[#4A433C] mb-8 max-w-sm">Book a tasting in Mendon, Utah. Meet the bees. Taste everything.</p>
<a className="bg-transparent border border-[#3C4F3C] text-[#3C4F3C] px-6 py-3 text-sm uppercase tracking-wider font-medium hover:bg-[#3C4F3C] hover:text-white transition-colors rounded" href="#">Book a Visit</a>
</div>
</section>

<section className="py-24 bg-[#3C4F3C] text-[#E0D4C2] text-center px-6 relative overflow-hidden">
<div className="relative z-10 max-w-xl mx-auto">
<iconify-icon className="mb-6 opacity-80" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-tight">Join the Hive</h2>
<p className="text-[#E0D4C2]/80 mb-8">Get recipes, harvest updates, and <span className="text-white font-medium">10% off your first order</span>.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#B8975E] focus:ring-1 focus:ring-[#B8975E] rounded" placeholder="Your email address" type="email"/>
<button className="bg-[#B33A2B] text-white px-6 py-3 uppercase tracking-wider text-sm font-medium hover:bg-[#9E3327] transition-colors rounded" type="submit">Subscribe</button>
</form>
<p className="text-xs text-[#E0D4C2]/50 mt-4">We respect your inbox. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-[#1F1B16] text-[#E0D4C2] pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div>
<h4 className="text-white font-serif text-lg mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-[#E0D4C2]/70">
<li><a className="hover:text-[#B8975E] transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Honey</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Honey Wine Vinegar</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Honey Wine</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Bundles &amp; Gifts</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-serif text-lg mb-6">Learn</h4>
<ul className="space-y-3 text-sm text-[#E0D4C2]/70">
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Recipes</a></li>
<li><a className="hover:text-[#B8975E] transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-serif text-lg mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-[#E0D4C2]/70">
<li className=""><a className="hover:text-[#B8975E] transition-colors" href="#">Find Us Local</a></li>
<li className=""><a className="hover:text-[#B8975E] transition-colors" href="#">Visit &amp; Taste</a></li>
<li className=""><a className="hover:text-[#B8975E] transition-colors" href="#">Contact Us</a></li>
</ul>
</div>

<div className="">
<h4 className="text-white font-serif text-lg mb-6">Contact</h4>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#E0D4C2]/40">
<div className="flex flex-col md:flex-row gap-4 text-center md:text-left">
<p>© 2025 Slide Ridge LLC. All Rights Reserved.</p>
<div className="space-x-4">
<a className="hover:text-[#E0D4C2]" href="#">Privacy Policy</a>
<a className="hover:text-[#E0D4C2]" href="#">Terms of Service</a>
</div>
</div>
<div className="flex space-x-4">
<a className="hover:text-[#B8975E] transition-colors" href="#"><iconify-icon className="" icon="solar:camera-minimalistic-linear" width="20"></iconify-icon></a>
<a className="hover:text-[#B8975E] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
