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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-2xl font-medium tracking-tight text-white" href="#">AURUM.</a>
<div className="hidden md:flex items-center gap-6 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Shop</a>
<a className="hover:text-white transition-colors" href="#">Personalize</a>
<a className="hover:text-white transition-colors" href="#">Our Story</a>
</div>
</div>
<div className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="text-zinc-400 hover:text-white transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-600 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-900/30 bg-yellow-900/10 text-yellow-500 text-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                New Coordinate Collection Available
            </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                Tell your story <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">etched in gold.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Handcrafted custom jewellery designed to hold your most cherished memories. From coordinates of where you met, to the names of those you love.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start Customizing
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="h-12 px-8 rounded-full border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-900 transition-colors">
                    View Lookbook
                </button>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/5 border-x border-white/5">

<div className="group relative aspect-[4/5] flex flex-col items-center justify-end p-6 border-b border-white/5 md:border-b-0 cursor-pointer bg-zinc-950 hover:bg-[#0a0a0a] transition-colors duration-500">
<img alt="Gold Cuff Bracelet" className="absolute inset-0 w-full h-3/4 object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Bracelets</h3>
<p className="text-sm text-zinc-500 group-hover:text-yellow-500 transition-colors">Shop Coordinates</p>
</div>
</div>

<div className="group relative aspect-[4/5] flex flex-col items-center justify-end p-6 border-b border-white/5 md:border-b-0 cursor-pointer bg-zinc-950 hover:bg-[#0a0a0a] transition-colors duration-500">
<img alt="Vertical Bar Necklace" className="absolute inset-0 w-full h-3/4 object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="relative z-10 text-center">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Necklaces</h3>
<p className="text-sm text-zinc-500 group-hover:text-yellow-500 transition-colors">Engravable Bars</p>
</div>
</div>

<div className="group relative aspect-[4/5] flex flex-col items-center justify-end p-6 border-b border-white/5 md:border-b-0 cursor-pointer bg-zinc-950 hover:bg-[#0a0a0a] transition-colors duration-500">
<img alt="Signet Ring" className="absolute inset-0 w-full h-3/4 object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Rings</h3>
<p className="text-sm text-zinc-500 group-hover:text-yellow-500 transition-colors">Classic Signets</p>
</div>
</div>

<div className="group relative aspect-[4/5] flex flex-col items-center justify-end p-6 border-b border-white/5 md:border-b-0 cursor-pointer bg-zinc-950 hover:bg-[#0a0a0a] transition-colors duration-500">
<img alt="Initial Necklace" className="absolute inset-0 w-full h-3/4 object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="relative z-10 text-center">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Best Sellers</h3>
<p className="text-sm text-zinc-500 group-hover:text-yellow-500 transition-colors">Monograms</p>
</div>
</div>

<div className="group relative aspect-[4/5] col-span-2 md:col-span-1 flex flex-col items-center justify-end p-6 cursor-pointer bg-zinc-950 hover:bg-[#0a0a0a] transition-colors duration-500">

<div className="absolute top-0 right-0 bg-[#8B7355] text-white text-xs font-medium px-4 py-1.5 z-20">
                        New Collection
                    </div>
<img alt="Pet Pendant" className="absolute inset-0 w-full h-3/4 object-contain object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">Paws &amp; Whiskers</h3>
<p className="text-sm text-zinc-500 group-hover:text-yellow-500 transition-colors">Pet Portraits</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-6">Make it meaningful.</h2>
<p className="text-lg text-zinc-400 mb-10 font-light leading-relaxed">
                    Every piece is made to order in our studio. Choose your metal, select your inscription, and wear a moment in time.
                </p>
<div className="space-y-8">
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-1">Precise Coordinates</h4>
<p className="text-zinc-500 text-lg">We convert any address into exact GPS coordinates for engraving.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 text-yellow-500">
<i className="w-5 h-5" data-lucide="pen-tool"></i>
</div>
<div>
<h4 className="text-xl text-white font-medium mb-1">Custom Portraits</h4>
<p className="text-zinc-500 text-lg">Upload a photo of your pet for a hand-drawn sketch engraving.</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 bg-zinc-900/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm relative">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-600/20 rounded-full blur-[80px]"></div>
<div className="space-y-8 relative z-10">
<div className="flex justify-center mb-8">
<img alt="Preview" className="h-48 object-contain drop-shadow-2xl" src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>

<div className="space-y-6">

<div>
<label className="block text-sm text-zinc-400 mb-2">Engraving Text</label>
<div className="relative">
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-yellow-600/50 transition-colors font-mono text-sm" type="text" value="40.7128° N, 74.0060° W"/>
<i className="absolute right-4 top-3.5 w-4 h-4 text-green-500" data-lucide="check"></i>
</div>
</div>

<div>
<label className="block text-sm text-zinc-400 mb-3">Material</label>
<div className="flex gap-3">
<label className="cursor-pointer group">
<input checked="" className="hidden peer" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-600 border-2 border-transparent peer-checked:border-white ring-2 ring-transparent peer-checked:ring-yellow-500/50 transition-all"></div>
<span className="block text-center text-xs mt-2 text-zinc-500 group-hover:text-white">18k Gold</span>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-400 border-2 border-transparent peer-checked:border-white ring-2 ring-transparent peer-checked:ring-gray-400/50 transition-all"></div>
<span className="block text-center text-xs mt-2 text-zinc-500 group-hover:text-white">Silver</span>
</label>
<label className="cursor-pointer group">
<input className="hidden peer" name="material" type="radio"/>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-200 to-red-400 border-2 border-transparent peer-checked:border-white ring-2 ring-transparent peer-checked:ring-red-400/50 transition-all"></div>
<span className="block text-center text-xs mt-2 text-zinc-500 group-hover:text-white">Rose</span>
</label>
</div>
</div>

<div className="pt-2">
<div className="flex justify-between text-sm text-zinc-400 mb-2">
<span>Chain Length</span>
<span className="text-white font-mono">18"</span>
</div>
<div className="h-1 bg-zinc-800 rounded-full w-full relative">
<div className="absolute left-0 top-0 h-full w-2/3 bg-yellow-600 rounded-full"></div>
<div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<button className="w-full py-4 bg-white hover:bg-zinc-200 text-black font-medium rounded-lg mt-4 transition-colors">
                            Add to Cart - $145.00
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 py-24 text-center bg-zinc-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-8">
                "The most thoughtful gift I've ever given. The quality is unmatched and the engraving is perfect."
            </h2>
<div className="flex items-center justify-center gap-3 mb-10">
<div className="flex text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<span className="text-lg text-zinc-400">Over 15,000 5-star reviews</span>
</div>
<a className="inline-block text-white border-b border-white pb-1 hover:text-yellow-500 hover:border-yellow-500 transition-all" href="#">Follow us on Instagram @aurum_jewelry</a>
</div>
</section>

<footer className="bg-black py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h5 className="text-white font-medium mb-4">Shop</h5>
<ul className="space-y-3 text-lg text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Best Sellers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Necklaces</a></li>
<li><a className="hover:text-white transition-colors" href="#">Rings</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-4">Support</h5>
<ul className="space-y-3 text-lg text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranty</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div className="col-span-2">
<h5 className="text-white font-medium mb-4">Join the list</h5>
<p className="text-zinc-500 text-lg mb-4">Unlock 10% off your first order.</p>
<form className="flex gap-2">
<input className="bg-zinc-900 border border-white/10 text-white px-4 py-3 rounded-md w-full focus:outline-none focus:border-zinc-700 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-zinc-200 transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600 pt-8 border-t border-white/5">
<p>© 2024 AURUM. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
