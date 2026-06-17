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
      

<header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-black/80 border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">

<a className="shrink-0 text-xl font-medium text-[#cfff04] tracking-tight" href="#">
                Chinozlikuz
            </a>

<div className="hidden md:flex flex-1 max-w-2xl relative group">
<div className="flex w-full transition-colors border focus-within:border-[#cfff04] focus-within:bg-black focus-within:ring-1 focus-within:ring-[#cfff04] rounded-xl overflow-hidden bg-neutral-900 hover:bg-neutral-800 border-neutral-800">
<div className="relative flex-1 flex items-center">
<i className="absolute left-3.5 w-5 h-5 transition-colors group-focus-within:text-[#cfff04] text-neutral-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="w-full bg-transparent py-2 pl-10 pr-4 text-base outline-none placeholder-neutral-500 h-10 text-neutral-100" placeholder="Search for cars, apartments, electronics..." type="text"/>
</div>
<div className="w-px my-2 bg-neutral-800"></div>
<div className="relative w-40 hidden lg:flex items-center">
<i className="absolute left-3 w-4 h-4 text-neutral-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<input className="w-full bg-transparent py-2 pl-9 pr-4 text-base outline-none h-10 text-neutral-100" placeholder="Chinoz" type="text" value="Chinoz"/>
</div>
<button className="bg-[#cfff04] px-6 text-base hover:bg-[#bde600] transition-colors text-black">
                        Find
                    </button>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">
<button className="hidden sm:flex transition-colors flex-col items-center gap-0.5 text-neutral-400 hover:text-neutral-100">
<i className="w-5 h-5" data-lucide="heart" strokeWidth="1.5"></i>
<span className="text-xs">Favorites</span>
</button>
<div className="h-6 w-px mx-1 hidden sm:block bg-neutral-800"></div>
<button className="hidden sm:flex text-base transition-colors px-2 text-neutral-300 hover:text-neutral-100">
                    Log in
                </button>
<button className="flex items-center gap-2 text-base bg-[#cfff04] hover:bg-[#bde600] transition-colors px-4 py-2 rounded-xl text-black">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
                    Post Ad
                </button>
</div>
</div>
</header>
<main className="">

<div className="md:hidden p-4 border-b bg-black border-neutral-800">
<div className="flex w-full rounded-xl overflow-hidden border focus-within:border-[#cfff04] focus-within:ring-1 focus-within:ring-[#cfff04] bg-neutral-900 border-neutral-800">
<div className="pl-3 flex items-center justify-center">
<i className="w-5 h-5 text-neutral-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
<input className="w-full bg-transparent py-2.5 px-3 text-base outline-none placeholder-neutral-500 text-neutral-100" placeholder="What are you looking for?" type="text"/>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
<h2 className="text-xl font-medium tracking-tight mb-6 hidden sm:block text-neutral-100">Main Categories</h2>
<div className="grid grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="home" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Real Estate</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="car" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Vehicles</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Electronics</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Jobs</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="shirt" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Fashion</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Home</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">Services</span>
</a>
<a className="flex flex-col items-center gap-2 group" href="#">
<div className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl border flex items-center justify-center group-hover:border-[#cfff04] group-hover:text-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400">
<i className="w-6 h-6 sm:w-8 sm:h-8" data-lucide="layout-grid" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-center group-hover:text-neutral-100 text-neutral-400">More</span>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-24">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-neutral-100">Latest Listings</h2>
<p className="text-base mt-1 text-neutral-400">Freshly posted in your area.</p>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 gap-y-6">

<div className="group flex flex-col rounded-xl border overflow-hidden transition-colors bg-neutral-900 border-neutral-800 hover:border-neutral-700">
<div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
<img alt="Car" className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-2 right-2 backdrop-blur-sm rounded-full p-1.5 hover:text-[#cfff04] transition-colors bg-black/60 text-neutral-300">
<i className="w-4 h-4 block" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
<div className="flex-1">
<h3 className="text-lg font-medium text-[#cfff04] leading-tight mb-1">$14,500</h3>
<a className="text-base line-clamp-2 hover:text-[#cfff04] transition-colors leading-snug text-neutral-200" href="#">Chevrolet Malibu 2020, Excellent Condition</a>
</div>
<div className="flex flex-col gap-1 mt-2">
<p className="text-sm flex items-center gap-1.5 truncate text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Chinoz, Center
                            </p>
<p className="text-sm flex items-center gap-1.5 text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Today, 14:30
                            </p>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border overflow-hidden transition-colors bg-neutral-900 border-neutral-800 hover:border-neutral-700">
<div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
<img alt="Phone" className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-2 right-2 backdrop-blur-sm rounded-full p-1.5 hover:text-[#cfff04] transition-colors bg-black/60 text-neutral-300">
<i className="w-4 h-4 block" data-lucide="heart" strokeWidth="1.5"></i>
</button>
<span className="absolute bottom-2 left-2 bg-[#cfff04] text-xs px-2 py-0.5 rounded-lg text-black">Promoted</span>
</div>
<div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
<div className="flex-1">
<h3 className="text-lg font-medium text-[#cfff04] leading-tight mb-1">8 500 000 UZS</h3>
<a className="text-base line-clamp-2 hover:text-[#cfff04] transition-colors leading-snug text-neutral-200" href="#">iPhone 14 Pro 256GB Deep Purple</a>
</div>
<div className="flex flex-col gap-1 mt-2">
<p className="text-sm flex items-center gap-1.5 truncate text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Tashkent, Yunusabad
                            </p>
<p className="text-sm flex items-center gap-1.5 text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Yesterday, 09:15
                            </p>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border overflow-hidden transition-colors bg-neutral-900 border-neutral-800 hover:border-neutral-700">
<div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
<img alt="Apartment" className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-2 right-2 backdrop-blur-sm rounded-full p-1.5 hover:text-[#cfff04] transition-colors bg-black/60 text-neutral-300">
<i className="w-4 h-4 block" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
<div className="flex-1">
<h3 className="text-lg font-medium text-[#cfff04] leading-tight mb-1">$45,000</h3>
<a className="text-base line-clamp-2 hover:text-[#cfff04] transition-colors leading-snug text-neutral-200" href="#">2-room apartment, 65m², 3rd floor</a>
</div>
<div className="flex flex-col gap-1 mt-2">
<p className="text-sm flex items-center gap-1.5 truncate text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Chinoz, Yangi Hayot
                            </p>
<p className="text-sm flex items-center gap-1.5 text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Today, 11:20
                            </p>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border overflow-hidden transition-colors bg-neutral-900 border-neutral-800 hover:border-neutral-700">
<div className="relative aspect-[4/3] w-full overflow-hidden flex items-center justify-center bg-black">
<i className="w-12 h-12 transition-transform duration-500 group-hover:scale-110 text-neutral-700" data-lucide="laptop" strokeWidth="1.5"></i>
<button className="absolute top-2 right-2 backdrop-blur-sm rounded-full p-1.5 hover:text-[#cfff04] transition-colors bg-black/60 text-neutral-300">
<i className="w-4 h-4 block" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
<div className="flex-1">
<h3 className="text-lg font-medium text-[#cfff04] leading-tight mb-1">12 000 000 UZS</h3>
<a className="text-base line-clamp-2 hover:text-[#cfff04] transition-colors leading-snug text-neutral-200" href="#">MacBook Pro M1 2020 16GB RAM</a>
</div>
<div className="flex flex-col gap-1 mt-2">
<p className="text-sm flex items-center gap-1.5 truncate text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Tashkent, Chilonzor
                            </p>
<p className="text-sm flex items-center gap-1.5 text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Oct 24, 16:45
                            </p>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border overflow-hidden transition-colors bg-neutral-900 border-neutral-800 hover:border-neutral-700">
<div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
<img alt="Furniture" className="object-cover w-full h-full opacity-90 transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute top-2 right-2 backdrop-blur-sm rounded-full p-1.5 hover:text-[#cfff04] transition-colors bg-black/60 text-neutral-300">
<i className="w-4 h-4 block" data-lucide="heart" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-3 sm:p-4 flex flex-col gap-2 flex-1">
<div className="flex-1">
<h3 className="text-lg font-medium text-[#cfff04] leading-tight mb-1">1 200 000 UZS</h3>
<a className="text-base line-clamp-2 hover:text-[#cfff04] transition-colors leading-snug text-neutral-200" href="#">Modern L-shaped Sofa, Gray Color</a>
</div>
<div className="flex flex-col gap-1 mt-2">
<p className="text-sm flex items-center gap-1.5 truncate text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="map-pin" strokeWidth="1.5"></i> Chinoz, Market area
                            </p>
<p className="text-sm flex items-center gap-1.5 text-neutral-400">
<i className="w-3.5 h-3.5" data-lucide="clock" strokeWidth="1.5"></i> Oct 23, 10:00
                            </p>
</div>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="bg-transparent border hover:border-[#cfff04] hover:text-[#cfff04] transition-colors px-8 py-2.5 rounded-xl text-base text-neutral-100 border-neutral-800">
                    Load more listings
                </button>
</div>
</section>

<section className="border-t border-neutral-800 bg-neutral-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 text-neutral-100">Got something to sell?</h2>
<p className="text-base max-w-md mx-auto mb-6 text-neutral-400">Post your ad for free on Chinozlikuz and reach thousands of local buyers instantly.</p>
<button className="bg-[#cfff04] hover:bg-[#bde600] transition-colors px-6 py-3 rounded-xl text-base flex items-center justify-center gap-2 mx-auto text-black">
<i className="w-5 h-5" data-lucide="plus-circle" strokeWidth="1.5"></i>
                    Post an Ad Now
                 </button>
</div>
</section>
</main>

<footer className="border-t pt-12 pb-8 border-neutral-800 bg-black">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 pr-8">
<span className="text-xl font-medium tracking-tight text-[#cfff04] block mb-3">Chinozlikuz</span>
<p className="text-base leading-relaxed mb-6 max-w-sm text-neutral-400">Your reliable local marketplace. Buy, sell, and find anything you need right in your neighborhood.</p>
<div className="flex items-center gap-4">
<a className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-[#cfff04] hover:border-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400" href="#">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-[#cfff04] hover:border-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400" href="#">
<i className="w-5 h-5" data-lucide="camera" strokeWidth="1.5"></i>
</a>
<a className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-[#cfff04] hover:border-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400" href="#">
<i className="w-5 h-5" data-lucide="play" strokeWidth="1.5"></i>
</a>
<a className="h-10 w-10 rounded-full border flex items-center justify-center hover:text-[#cfff04] hover:border-[#cfff04] transition-colors bg-neutral-900 border-neutral-800 text-neutral-400" href="#">
<i className="w-5 h-5" data-lucide="hash" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-base font-medium mb-4 tracking-tight text-neutral-100">Marketplace</h4>
<ul className="space-y-3">
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="#">Real Estate</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="#">Vehicles</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="#">Electronics</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="#">Services</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium mb-4 tracking-tight text-neutral-100">Support</h4>
<ul className="space-y-3">
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/help">Help Center</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/how-it-works">How it works</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/safety">Trust &amp; Safety</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/contact">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-medium mb-4 tracking-tight text-neutral-100">Legal</h4>
<ul className="space-y-3">
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/about">About Us</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/terms">Terms of Service</a></li>
<li><a className="text-base hover:text-[#cfff04] transition-colors text-neutral-400" href="/privacy">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4 border-neutral-800">
<div className="flex items-center gap-2 text-sm text-neutral-500">
<span>© 2024 Chinozlikuz. All rights reserved.</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
