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
      

<nav className="fixed z-50 bg-black/70 w-full border-orange-900 border-b top-0 backdrop-blur-md">
<div className="sm:px-6 lg:px-8 flex h-16 max-w-7xl mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-xl font-merriweather font-bold tracking-tight text-orange-100" href="#">Style Haven.</a>
</div>
<div className="hidden md:flex space-x-8">
<a className="transition hover:text-orange-100 text-sm font-medium text-orange-400 font-pt-serif" href="#home">Home</a>
<a className="transition hover:text-orange-100 text-sm font-medium text-orange-400 font-pt-serif" href="#categories">Categories</a>
<a className="text-sm transition font-pt-serif font-medium text-orange-400 hover:text-orange-100" href="#inspiration">Inspiration</a>
<a className="text-sm transition font-pt-serif font-medium text-orange-400 hover:text-orange-100" href="#featured">Featured</a>
<a className="transition hover:text-orange-100 text-sm font-medium text-orange-400 font-pt-serif" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<button className="transition text-orange-400 hover:text-orange-100">
<iconify-icon icon="solar:magnifier-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="md:hidden transition text-orange-400 hover:text-orange-100">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="lg:pt-36 lg:pb-24 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row max-w-7xl mr-auto ml-auto pt-36 pr-4 pb-24 pl-4 items-center" id="home">
<div className="flex-1 flex flex-col items-start text-center lg:text-left">
<span className="inline-block py-1 px-3 rounded-full text-xs tracking-wide mb-6 uppercase font-pt-serif font-medium bg-amber-950 text-amber-400">Daily Inspiration</span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 font-merriweather font-bold tracking-tight">
                Curated Style for the <span className="text-orange-500 font-merriweather font-bold tracking-tight">Modern Girl</span>
</h1>
<p className="text-base lg:text-lg text-orange-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed font-pt-serif font-medium">
                Discover the latest fashion trends, from chic western wear to elegant modest outfits. Find your vibe and shop the look instantly.
            </p>
<div className="flex flex-wrap gap-4 justify-center lg:justify-start w-full">
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm transition font-pt-serif font-medium bg-orange-100 text-black hover:bg-orange-200" href="#inspiration">
                    Explore Trend
                </a>
<a className="inline-flex items-center justify-center px-6 py-3 rounded-full border text-sm transition font-pt-serif font-medium bg-black text-orange-100 border-orange-800 hover:bg-orange-950" href="#categories">
                    Browse Categories
                </a>
</div>
</div>
<div className="flex-1 w-full">
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5] bg-orange-900">
<img alt="Fashion aesthetic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1440&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-orange-900" id="categories">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-merriweather font-bold tracking-tight">Explore by Vibe</h2>
</div>
<div className="flex overflow-x-auto no-scrollbar gap-4 pb-4">

<button className="flex-none px-6 py-3 rounded-full text-sm transition whitespace-nowrap font-pt-serif font-medium bg-orange-100 text-black">All Styles</button>
<button className="flex-none px-6 py-3 rounded-full border text-sm transition whitespace-nowrap font-pt-serif font-medium bg-black border-orange-800 text-orange-400 hover:border-orange-100 hover:text-orange-100">Casual Wear</button>
<button className="flex-none px-6 py-3 rounded-full border text-sm transition whitespace-nowrap font-pt-serif font-medium bg-black border-orange-800 text-orange-400 hover:border-orange-100 hover:text-orange-100">Party Wear</button>
<button className="flex-none px-6 py-3 rounded-full border text-sm transition whitespace-nowrap font-pt-serif font-medium bg-black border-orange-800 text-orange-400 hover:border-orange-100 hover:text-orange-100">Eastern Dresses</button>
<button className="flex-none px-6 py-3 rounded-full border text-sm transition whitespace-nowrap font-pt-serif font-medium bg-black border-orange-800 text-orange-400 hover:border-orange-100 hover:text-orange-100">Western Outfits</button>
<button className="flex-none px-6 py-3 rounded-full border text-sm transition whitespace-nowrap font-pt-serif font-medium bg-black border-orange-800 text-orange-400 hover:border-orange-100 hover:text-orange-100">Hijab Fashion</button>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="inspiration">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
<div>
<h2 className="text-2xl sm:text-3xl mb-2 font-merriweather font-bold tracking-tight">Trending Pins</h2>
<p className="text-sm text-orange-500 font-pt-serif font-medium">Tap the image to shop the exact pieces.</p>
</div>
<a className="text-sm flex items-center gap-1 transition font-pt-serif font-medium text-orange-100 hover:text-amber-400" href="#">
                View all <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="columns-2 md:columns-3 lg:columns-4 space-y-4 gap-x-4 gap-y-4">

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Casual summer dress" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550614000-4b95d415f9e8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Summer Linen Co-ord</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Shop Now <iconify-icon icon="solar:cart-large-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Modest Hijab Fashion" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Neutral Modest Fit</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Shop Now <iconify-icon icon="solar:cart-large-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Eastern Wear" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Festive Kurta Set</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Daraz Link <iconify-icon icon="solar:arrow-up-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Denim Jacket" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1434389678369-18228b7044c6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Oversized Denim</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Shop Now <iconify-icon icon="solar:cart-large-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Vintage aesthetic" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Vintage Academia</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Shop on Amazon <iconify-icon icon="solar:arrow-up-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-orange-900">
<img alt="Streetwear vibe" className="w-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 from-white/60">
<p className="text-sm mb-1 font-pt-serif font-medium text-black">Gen-Z Streetwear</p>
<button className="mt-2 w-full py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition font-pt-serif font-medium bg-black text-orange-100 hover:bg-amber-950">
                        Shop Now <iconify-icon icon="solar:cart-large-minimalistic-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="featured">
<div className="rounded-[2rem] border overflow-hidden shadow-sm flex flex-col lg:flex-row bg-black border-orange-900">
<div className="w-full lg:w-1/2 aspect-square lg:aspect-auto">
<img alt="Featured Outfit" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
<span className="text-amber-500 text-xs tracking-wide uppercase mb-3 font-pt-serif font-medium">Style Guide</span>
<h2 className="text-3xl mb-4 font-merriweather font-bold tracking-tight">The Perfect Brunch Fit</h2>
<p className="text-sm text-orange-500 mb-6 leading-relaxed font-pt-serif font-medium">
                    Elevate your weekend wardrobe with this effortless floral maxi paired with a structured blazer. It strikes the perfect balance between casual comfort and chic sophistication.
                </p>
<div className="mb-8">
<h3 className="text-sm mb-3 font-pt-serif font-medium text-orange-100">Styling Tips:</h3>
<ul className="space-y-2 text-sm text-orange-400">
<li className="flex items-start gap-2 font-pt-serif font-medium">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Add dainty gold jewelry for a subtle sparkle.
                        </li>
<li className="flex items-start gap-2 font-pt-serif font-medium">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Pair with neutral block heels or classic white sneakers.
                        </li>
<li className="flex items-start gap-2 font-pt-serif font-medium">
<iconify-icon className="text-amber-500 mt-0.5" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Throw on a mini shoulder bag to complete the look.
                        </li>
</ul>
</div>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm transition font-pt-serif font-medium bg-orange-100 text-black hover:bg-orange-200" href="#">
                    Shop The Entire Look
                    <iconify-icon icon="solar:arrow-up-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-orange-100 text-black" id="about">
<div className="max-w-2xl mx-auto">
<h2 className="text-3xl mb-6 font-merriweather font-bold tracking-tight">Our Mission </h2>
<p className="text-sm leading-relaxed mb-8 font-pt-serif font-medium text-orange-700">
                At Style Haven, we believe every girl deserves to feel confident and aesthetic in what she wears. Our goal is to simplify fashion by curating trendy, modest, eastern, and western outfits, helping you find exactly what you're looking for without the endless scrolling.
            </p>
<p className="text-xs text-orange-500 uppercase tracking-widest font-pt-serif font-medium">Est. 2024</p>
</div>
</section>

<section className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
<div className="">
<h2 className="text-3xl mb-4 font-merriweather font-bold tracking-tight">Let's Connect</h2>
<p className="text-sm text-orange-500 mb-8 font-pt-serif font-medium">Have a fashion query or brand collaboration in mind? Drop us a message.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm font-pt-serif font-medium text-orange-400">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-900 text-orange-100">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
                        hello@stylehaven.com
                    </div>
<div className="flex items-center gap-4 text-sm font-pt-serif font-medium text-orange-400">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-orange-900 text-orange-100">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
                        Fashion District, NY
                    </div>
</div>
<div className="mt-8 flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition border-orange-800 text-orange-400 hover:text-orange-100 hover:border-orange-100" href="#">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center transition border-orange-800 text-orange-400 hover:text-orange-100 hover:border-orange-100" href="#">
<iconify-icon icon="solar:video-frame-linear" width="18"></iconify-icon> 
</a>
</div>
</div>

<form className="space-y-6">
<div className="">
<input className="w-full bg-transparent border-b py-3 text-sm placeholder-orange-400 focus:outline-none focus:border-orange-900 transition rounded-none border-orange-700 text-orange-100" placeholder="Your Name" type="text"/>
</div>
<div className="">
<input className="w-full bg-transparent border-b py-3 text-sm placeholder-orange-400 focus:outline-none focus:border-orange-900 transition rounded-none border-orange-700 text-orange-100" placeholder="Email Address" type="email"/>
</div>
<div className="">
<textarea className="w-full bg-transparent border-b py-3 text-sm placeholder-orange-400 focus:outline-none focus:border-orange-900 transition rounded-none resize-none border-orange-700 text-orange-100" placeholder="Your Message" rows="3"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded peer-checked:bg-orange-900 peer-checked:border-orange-900 transition border-orange-700"></div>
<iconify-icon className="absolute opacity-0 peer-checked:opacity-100 w-3 h-3 pointer-events-none text-black" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs text-orange-500 group-hover:text-orange-700 transition font-pt-serif font-medium">I agree to receive aesthetic newsletter updates.</span>
</label>
<button className="w-full py-3 rounded-xl text-sm transition font-pt-serif font-medium bg-orange-100 text-black hover:bg-orange-200" type="submit">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="text-center border-orange-900 border-t pt-8 pb-8 cursor-pointer" onclick="window.location.href='http://stylehavenofficial.com'" role="button">
<p className="text-lg tracking-tight mb-2 font-pt-serif font-medium text-orange-100">Style Haven.</p>
<p className="text-xs font-pt-serif font-medium text-orange-600">© 2024 Style Haven. Affiliate links may be present.</p>
</footer>

    </>
  );
}
