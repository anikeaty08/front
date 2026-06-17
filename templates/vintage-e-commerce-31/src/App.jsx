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
      

<div className="bg-stone-900 text-[#FDFBF7] text-xs py-2 text-center font-mono tracking-widest uppercase border-b border-stone-800">
        Free Shipping on Orders Over $100 — World Wide
    </div>

<nav className="sticky top-0 z-50 border-b border-stone-200 bg-[#FDFBF7]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-1 opacity-60 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Catalog</a>
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2">
<a className="font-serif text-2xl tracking-tighter italic text-stone-900" href="#">
                    The Archivist
                </a>
</div>

<div className="flex items-center gap-4">
<button className="p-1 opacity-60 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-1 opacity-60 hover:opacity-100 transition-opacity relative">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-orange-600 rounded-full border border-[#FDFBF7]"></span>
</button>
</div>
</div>
</nav>

<main className="max-w-7xl mx-auto px-6 py-12">

<header className="mb-16 text-center fade-in" style={{animationDelay: '0.1s'}}>
<p className="font-mono text-xs uppercase tracking-widest text-stone-500 mb-3">Est. 1984 — Quality Goods</p>
<h1 className="font-serif text-5xl md:text-7xl text-stone-900 tracking-tight leading-[0.9]">
                Tools for the<br/><span className="italic text-stone-600">Modern Maker</span>
</h1>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<aside className="lg:col-span-3 space-y-10 fade-in" style={{animationDelay: '0.2s'}}>

<div>
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">Department</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li><a className="flex items-center justify-between group hover:text-stone-900" href="#"><span className="underline decoration-transparent group-hover:decoration-stone-300 underline-offset-4 transition-all">Analog Electronics</span> <span className="text-xs text-stone-400 font-mono">12</span></a></li>
<li><a className="flex items-center justify-between group hover:text-stone-900" href="#"><span className="underline decoration-transparent group-hover:decoration-stone-300 underline-offset-4 transition-all">Writing Instruments</span> <span className="text-xs text-stone-400 font-mono">08</span></a></li>
<li><a className="flex items-center justify-between group hover:text-stone-900" href="#"><span className="underline decoration-transparent group-hover:decoration-stone-300 underline-offset-4 transition-all">Leather Goods</span> <span className="text-xs text-stone-400 font-mono">05</span></a></li>
<li><a className="flex items-center justify-between group hover:text-stone-900" href="#"><span className="underline decoration-transparent group-hover:decoration-stone-300 underline-offset-4 transition-all">Desk Accessories</span> <span className="text-xs text-stone-400 font-mono">14</span></a></li>
</ul>
</div>

<div>
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">Price Range</h3>
<div className="pt-2">
<input className="w-full h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" max="1000" min="0" type="range" value="450"/>
<div className="flex justify-between mt-3 font-mono text-xs text-stone-500">
<span>$0</span>
<span>$1,000</span>
</div>
</div>
</div>

<div>
<h3 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-4 border-b border-stone-200 pb-2">Material</h3>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 bg-transparent transition-all peer-checked:bg-stone-900 peer-checked:border-stone-900"></div>
<iconify-icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FDFBF7] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">Solid Brass</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 bg-transparent transition-all peer-checked:bg-stone-900 peer-checked:border-stone-900"></div>
<iconify-icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FDFBF7] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">Walnut Wood</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-stone-300 bg-transparent transition-all peer-checked:bg-stone-900 peer-checked:border-stone-900"></div>
<iconify-icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#FDFBF7] opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">Full-Grain Leather</span>
</label>
</div>
</div>

<div className="bg-stone-100 p-6 border border-stone-200 text-center mt-8">
<iconify-icon className="text-orange-600 mb-2" icon="solar:star-fall-linear" width="24"></iconify-icon>
<h4 className="font-serif text-xl mb-2 text-stone-900">The Membership</h4>
<p className="text-xs text-stone-600 leading-relaxed mb-4">Join our archive society for early access to vintage restoration drops.</p>
<a className="inline-block text-xs font-mono uppercase tracking-widest border-b border-stone-900 pb-0.5 hover:text-orange-700 hover:border-orange-700 transition-colors" href="#">Join Now</a>
</div>
</aside>

<div className="lg:col-span-9">

<div className="flex justify-between items-center mb-6 pb-4 border-b border-stone-200 fade-in" style={{animationDelay: '0.3s'}}>
<span className="text-xs font-mono text-stone-500">Showing 1-6 of 24 items</span>
<div className="flex items-center gap-2">
<span className="text-xs font-mono text-stone-500 uppercase">Sort by:</span>
<div className="relative group">
<button className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider hover:text-stone-600">
                                Featured
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</button>

<div className="absolute right-0 top-full mt-2 w-32 bg-[#FDFBF7] border border-stone-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 flex flex-col py-1">
<a className="px-3 py-2 text-xs hover:bg-stone-100 text-left" href="#">Newest</a>
<a className="px-3 py-2 text-xs hover:bg-stone-100 text-left" href="#">Price: Low</a>
<a className="px-3 py-2 text-xs hover:bg-stone-100 text-left" href="#">Price: High</a>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 fade-in" style={{animationDelay: '0.4s'}}>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Vintage Camera" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-[#FDFBF7] px-2 py-1 border border-stone-200">
<span className="text-[10px] font-mono uppercase tracking-wider">Restored</span>
</div>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white h-10 w-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-orange-800 transition-colors">Model 35mm Rangefinder</h3>
<p className="text-xs text-stone-500 mt-1">Circa 1972</p>
</div>
<span className="font-mono text-sm text-stone-900">$320</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Journal" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white h-10 w-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-orange-800 transition-colors">Architect's Field Journal</h3>
<p className="text-xs text-stone-500 mt-1">Full-grain leather</p>
</div>
<span className="font-mono text-sm text-stone-900">$45</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Typewriter" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-orange-100 px-2 py-1 border border-orange-200 text-orange-900">
<span className="text-[10px] font-mono uppercase tracking-wider">Rare</span>
</div>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white h-10 w-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-orange-800 transition-colors">Olympia Typewriter</h3>
<p className="text-xs text-stone-500 mt-1">Matte black finish</p>
</div>
<span className="font-mono text-sm text-stone-900">$850</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Desk Lamp" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white h-10 w-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-orange-800 transition-colors">Industrial Desk Lamp</h3>
<p className="text-xs text-stone-500 mt-1">Cast iron base</p>
</div>
<span className="font-mono text-sm text-stone-900">$125</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Watch" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<button className="absolute bottom-4 right-4 bg-stone-900 text-white h-10 w-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-700">
<iconify-icon icon="solar:cart-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-stone-900 group-hover:text-orange-800 transition-colors">Field Watch Mk. II</h3>
<p className="text-xs text-stone-500 mt-1">Automatic movement</p>
</div>
<span className="font-mono text-sm text-stone-900">$295</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[4/5] bg-stone-100 overflow-hidden border border-stone-200 mb-4">
<img alt="Compass" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-[#FDFBF7] px-2 py-1 border border-stone-200">
<span className="text-[10px] font-mono uppercase tracking-wider">Sold Out</span>
</div>
<button className="absolute bottom-4 right-4 bg-stone-200 text-stone-400 h-10 w-10 flex items-center justify-center cursor-not-allowed" disabled="">
<iconify-icon icon="solar:slash-circle-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start opacity-60">
<div>
<h3 className="font-serif text-lg text-stone-900">Brass Pocket Compass</h3>
<p className="text-xs text-stone-500 mt-1">Authentic 1940s</p>
</div>
<span className="font-mono text-sm text-stone-900">$65</span>
</div>
</div>
</div>

<div className="mt-16 flex justify-center border-t border-stone-200 pt-8">
<nav className="flex items-center gap-1">
<a className="h-8 w-8 flex items-center justify-center border border-stone-200 hover:border-stone-900 transition-colors text-stone-500 hover:text-stone-900" href="#">
<iconify-icon icon="solar:arrow-left-linear" width="16"></iconify-icon>
</a>
<a className="h-8 w-8 flex items-center justify-center border border-stone-900 bg-stone-900 text-[#FDFBF7] text-xs font-mono" href="#">1</a>
<a className="h-8 w-8 flex items-center justify-center border border-stone-200 hover:border-stone-900 transition-colors text-xs font-mono hover:text-stone-900" href="#">2</a>
<a className="h-8 w-8 flex items-center justify-center border border-stone-200 hover:border-stone-900 transition-colors text-xs font-mono hover:text-stone-900" href="#">3</a>
<span className="h-8 w-8 flex items-center justify-center text-stone-400">...</span>
<a className="h-8 w-8 flex items-center justify-center border border-stone-200 hover:border-stone-900 transition-colors text-stone-500 hover:text-stone-900" href="#">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</nav>
</div>
</div>
</div>
</main>

<footer className="bg-stone-100 border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="space-y-4">
<a className="font-serif text-2xl tracking-tight italic text-stone-900" href="#">The Archivist</a>
<p className="text-xs text-stone-500 leading-relaxed max-w-xs">Curating the finest analog tools and vintage supplies for the thoughtful creator. Based in Portland, Oregon.</p>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Restorations</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Accessories</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-6">Support</h4>
<ul className="space-y-3 text-sm text-stone-600">
<li><a className="hover:text-stone-900 transition-colors" href="#">Shipping Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Returns &amp; Exchange</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Care Guide</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="font-mono text-xs uppercase tracking-widest text-stone-900 mb-6">Newsletter</h4>
<div className="relative">
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-sm focus:outline-none focus:border-stone-900 placeholder:text-stone-400 font-mono" placeholder="Email address" type="email"/>
<button className="absolute right-0 bottom-2 hover:text-orange-700 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
<p className="mt-4 text-[10px] text-stone-400">Join for 10% off your first restoration.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-stone-200 pt-8 gap-4">
<p className="text-[10px] text-stone-400 font-mono uppercase">© 2024 The Archivist Supply Co.</p>
<div className="flex gap-4 opacity-60">
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
