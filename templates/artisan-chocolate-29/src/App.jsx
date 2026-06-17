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
      

<div className="paper-texture fixed inset-0 z-50 mix-blend-multiply w-full h-full"></div>

<div className="bg-[#3E2723] text-[#F5F1E8] text-xs py-2 text-center tracking-wide font-medium relative z-20">
        Free shipping on all orders over $75. Handcrafted daily.
    </div>

<nav className="sticky top-0 z-40 bg-[#F5F1E8]/95 backdrop-blur-sm border-b border-[#3E2723]/10">
<div className="max-w-7xl mx-auto px-6 py-5">
<div className="flex justify-between items-center">

<label className="lg:hidden cursor-pointer text-[#3E2723]" htmlFor="mobile-menu-toggle">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</label>

<div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-[#6B5B52]">
<a className="hover:text-[#3E2723] transition-colors" href="#">Shop All</a>
<a className="hover:text-[#3E2723] transition-colors" href="#">Truffles</a>
<a className="hover:text-[#3E2723] transition-colors" href="#">Caramels</a>
</div>

<a className="text-2xl lg:text-3xl tracking-tighter text-[#3E2723] font-semibold uppercase relative left-0 lg:left-4" href="#">
                    Artisan<span className="text-[#D4A574]">&amp;</span>Co.
                </a>

<div className="flex items-center gap-6 text-[#3E2723]">
<div className="hidden lg:flex gap-8 text-sm font-medium tracking-wide text-[#6B5B52] mr-4">
<a className="hover:text-[#3E2723] transition-colors" href="#">Our Story</a>
<a className="hover:text-[#3E2723] transition-colors" href="#">Gifting</a>
</div>
<button className="hover:opacity-70 transition-opacity">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="hover:opacity-70 transition-opacity relative group">
<span className="iconify" data-icon="lucide:shopping-bag" data-strokeWidth="1.5" data-width="20"></span>
<span className="absolute -top-1.5 -right-1.5 bg-[#D4A574] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
</button>
</div>
</div>
</div>
</nav>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-[#F5F1E8] z-50 transform -translate-x-full transition-transform duration-300 ease-in-out shadow-2xl border-r border-[#3E2723]/10 lg:hidden" id="mobile-menu">
<div className="p-8 flex flex-col h-full">
<div className="flex justify-between items-center mb-10">
<span className="text-xl font-semibold tracking-tighter text-[#3E2723]">MENU</span>
<label className="cursor-pointer" htmlFor="mobile-menu-toggle">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="24"></span>
</label>
</div>
<div className="flex flex-col gap-6 text-lg text-[#3E2723]">
<a className="border-b border-[#3E2723]/10 pb-2" href="#">Shop All</a>
<a className="border-b border-[#3E2723]/10 pb-2" href="#">Truffles</a>
<a className="border-b border-[#3E2723]/10 pb-2" href="#">Caramels</a>
<a className="border-b border-[#3E2723]/10 pb-2" href="#">Gift Sets</a>
<a className="border-b border-[#3E2723]/10 pb-2" href="#">Our Story</a>
</div>
</div>
</div>

<section className="relative h-[85vh] w-full overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1623249033324-4f40776b16e8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/40 to-transparent"></div>
<div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 lg:pb-32 items-start text-[#F5F1E8]">
<span className="text-[#D4A574] font-medium tracking-widest uppercase text-xs mb-4">Small Batch • Handcrafted • Premium</span>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-6 max-w-3xl">
                The Art of <br/> <i className="font-serif italic text-[#D4A574]">Divine</i> Indulgence.
            </h1>
<p className="text-lg lg:text-xl text-[#F5F1E8]/90 max-w-lg mb-10 font-light leading-relaxed">
                Experience the harmony of ethically sourced cacao and artisan craftsmanship. Made fresh daily in our workshop.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#D4A574] text-[#2C1810] px-8 py-4 rounded-lg font-medium hover:bg-[#c49261] transition-colors text-sm tracking-wide" href="#">
                    Shop Collections
                </a>
<a className="bg-transparent border border-[#F5F1E8]/40 text-[#F5F1E8] px-8 py-4 rounded-lg font-medium hover:bg-[#F5F1E8] hover:text-[#3E2723] transition-all text-sm tracking-wide backdrop-blur-sm" href="#">
                    View Gift Guide
                </a>
</div>
</div>
</section>

<div className="bg-[#F5F1E8] border-b border-[#3E2723]/10">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[#6B5B52]">
<div className="flex items-center gap-3">
<span className="iconify text-[#D4A574]" data-icon="lucide:chef-hat" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm tracking-wide uppercase">Handcrafted Daily</span>
</div>
<div className="hidden md:block w-px h-4 bg-[#3E2723]/20"></div>
<div className="flex items-center gap-3">
<span className="iconify text-[#D4A574]" data-icon="lucide:leaf" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm tracking-wide uppercase">Ethically Sourced</span>
</div>
<div className="hidden md:block w-px h-4 bg-[#3E2723]/20"></div>
<div className="flex items-center gap-3">
<span className="iconify text-[#D4A574]" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm tracking-wide uppercase">Plastic-Free Packaging</span>
</div>
</div>
</div>
</div>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#3E2723] mb-2">Curated Collections</h2>
<p className="text-[#6B5B52]">Explore our most beloved categories.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#D4A574] hover:text-[#3E2723] transition-colors text-sm font-medium border-b border-transparent hover:border-[#3E2723]" href="#">
                    View All Categories <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="group relative block aspect-[3/4] overflow-hidden rounded-xl" href="#">
<img alt="Signature Truffles" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[#D4A574] text-xs font-medium uppercase tracking-widest mb-2 block">Bestseller</span>
<h3 className="text-2xl text-[#F5F1E8] font-medium">Signature Truffles</h3>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden rounded-xl" href="#">
<img alt="Artisan Caramels" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[#D4A574] text-xs font-medium uppercase tracking-widest mb-2 block">Award Winning</span>
<h3 className="text-2xl text-[#F5F1E8] font-medium">Sea Salt Caramels</h3>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden rounded-xl" href="#">
<img alt="Luxury Gift Sets" className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/80 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[#D4A574] text-xs font-medium uppercase tracking-widest mb-2 block">For Occasions</span>
<h3 className="text-2xl text-[#F5F1E8] font-medium">Luxury Gift Sets</h3>
</div>
</a>
</div>
</div>
</section>

<section className="bg-[#3E2723] text-[#F5F1E8] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-96 lg:h-auto min-h-[600px]">
<img alt="Chocolatier at work" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-[#3E2723]/20"></div>
</div>
<div className="flex items-center p-12 lg:p-24">
<div className="max-w-lg">
<span className="font-script text-3xl text-[#D4A574] mb-4 block transform -rotate-2">From Bean to Bar</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-8 leading-tight">Mastery in every<br/>single bite.</h2>
<p className="text-[#F5F1E8]/70 leading-relaxed mb-8 font-light">
                        We believe chocolate is more than just a sweet treat—it's an experience. Our master chocolatiers temper, mold, and hand-finish every piece in our small atelier, ensuring that the snap, shine, and melt are nothing short of perfection.
                    </p>
<div className="flex gap-12 border-t border-[#F5F1E8]/10 pt-8 mb-8">
<div>
<span className="block text-3xl font-serif text-[#D4A574]">100%</span>
<span className="text-xs tracking-widest uppercase text-[#F5F1E8]/60 mt-1 block">Fair Trade</span>
</div>
<div>
<span className="block text-3xl font-serif text-[#D4A574]">24h</span>
<span className="text-xs tracking-widest uppercase text-[#F5F1E8]/60 mt-1 block">Conching Process</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-[#D4A574] hover:text-white transition-colors" href="#">
                        Read Our Story <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-[#3E2723] mb-4">Seasonal Favorites</h2>
<p className="text-[#6B5B52]">Discover the flavors our customers are falling in love with this season.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-lg bg-[#F0EBE0] mb-4">
<img alt="Dark Chocolate Ganache" className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 bg-[#C9ADA7] text-[#2C1810] text-[10px] font-semibold px-2 py-1 rounded tracking-wide uppercase">New</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-[#2C1810] font-serif leading-none mb-1">Noir Ganache</h3>
<p className="text-xs text-[#6B5B52]">70% Dark Chocolate</p>
</div>
<span className="text-[#3E2723] font-medium">$24.00</span>
</div>
<button className="w-full mt-4 border border-[#3E2723]/20 hover:border-[#3E2723] text-[#3E2723] py-2.5 rounded text-xs font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-lg bg-[#F0EBE0] mb-4">
<img alt="Hazelnut Praline" className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-[#2C1810] font-serif leading-none mb-1">Hazelnut Praline</h3>
<p className="text-xs text-[#6B5B52]">Roasted Piedmont Hazelnuts</p>
</div>
<span className="text-[#3E2723] font-medium">$28.00</span>
</div>
<button className="w-full mt-4 border border-[#3E2723]/20 hover:border-[#3E2723] text-[#3E2723] py-2.5 rounded text-xs font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-lg bg-[#F0EBE0] mb-4">
<img alt="Salted Caramel Box" className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="absolute top-3 left-3 bg-[#722F37] text-white text-[10px] font-semibold px-2 py-1 rounded tracking-wide uppercase">Limited</span>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-[#2C1810] font-serif leading-none mb-1">Salted Caramel</h3>
<p className="text-xs text-[#6B5B52]">Fleur de Sel &amp; Butter</p>
</div>
<span className="text-[#3E2723] font-medium">$32.00</span>
</div>
<button className="w-full mt-4 border border-[#3E2723]/20 hover:border-[#3E2723] text-[#3E2723] py-2.5 rounded text-xs font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>

<div className="group">
<div className="relative aspect-square overflow-hidden rounded-lg bg-[#F0EBE0] mb-4">
<img alt="Assorted Box" className="object-cover w-full h-full mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-[#2C1810] font-serif leading-none mb-1">Grand Assortment</h3>
<p className="text-xs text-[#6B5B52]">24 Piece Collection</p>
</div>
<span className="text-[#3E2723] font-medium">$56.00</span>
</div>
<button className="w-full mt-4 border border-[#3E2723]/20 hover:border-[#3E2723] text-[#3E2723] py-2.5 rounded text-xs font-medium uppercase tracking-wide transition-colors">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-7xl mx-auto">
<div className="relative rounded-2xl overflow-hidden bg-[#C9ADA7] min-h-[400px] flex items-center">
<div className="absolute inset-0">
<img alt="Gifting" className="w-full h-full object-cover opacity-20 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative z-10 p-8 md:p-16 max-w-xl">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#3E2723] mb-6">The Perfect Gift for<br/>Every Occasion</h2>
<p className="text-[#2C1810] mb-8 text-lg">Whether it's a wedding, anniversary, or a simple thank you, say it with the language of handcrafted chocolate.</p>
<a className="bg-[#3E2723] text-[#F5F1E8] px-8 py-3.5 rounded-lg text-sm font-medium tracking-wide hover:bg-[#2C1810] transition-colors inline-block shadow-lg shadow-[#3E2723]/20" href="#">
                        Explore Gift Guide
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-[#3E2723]/10">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-10">
<h3 className="text-xl font-medium tracking-tight text-[#3E2723]">@ArtisanAndCo</h3>
<span className="text-[#6B5B52] text-sm">Tag us to be featured</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<img className="aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1481391319762-47dff72954d9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img className="aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1511381939415-e44015466834?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img className="aspect-square object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</section>

<footer className="bg-[#2C1810] text-[#F5F1E8] pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-serif text-[#F5F1E8] mb-6 block" href="#">Artisan<span className="text-[#D4A574]">&amp;</span>Co.</a>
<p className="text-[#F5F1E8]/60 text-sm leading-relaxed mb-6">
                    Handcrafted in small batches using the world's finest cacao. Dedicated to the art of chocolate making.
                </p>
<div className="flex gap-4">
<span className="iconify text-[#D4A574] cursor-pointer hover:text-white transition-colors" data-icon="lucide:instagram" data-width="20"></span>
<span className="iconify text-[#D4A574] cursor-pointer hover:text-white transition-colors" data-icon="lucide:facebook" data-width="20"></span>
<span className="iconify text-[#D4A574] cursor-pointer hover:text-white transition-colors" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#D4A574] mb-6">Shop</h4>
<ul className="space-y-3 text-[#F5F1E8]/70 text-sm">
<li><a className="hover:text-white transition-colors" href="#">All Chocolates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Truffles &amp; Pralines</a></li>
<li><a className="hover:text-white transition-colors" href="#">Caramels</a></li>
<li><a className="hover:text-white transition-colors" href="#">Vegan Collection</a></li>
<li><a className="hover:text-white transition-colors" href="#">Corporate Gifts</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#D4A574] mb-6">Company</h4>
<ul className="space-y-3 text-[#F5F1E8]/70 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Ingredients &amp; Sourcing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#D4A574] mb-6">Newsletter</h4>
<p className="text-[#F5F1E8]/60 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
<form className="flex flex-col gap-2">
<input className="bg-[#F5F1E8]/5 border border-[#F5F1E8]/20 rounded p-3 text-sm text-[#F5F1E8] placeholder-[#F5F1E8]/30 focus:outline-none focus:border-[#D4A574] transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-[#D4A574] text-[#2C1810] py-3 rounded text-sm font-medium hover:bg-[#c49261] transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#F5F1E8]/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#F5F1E8]/40 text-xs">© 2023 Artisan &amp; Co. Chocolates. All rights reserved.</p>
<div className="flex gap-6 text-[#F5F1E8]/40 text-xs">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
