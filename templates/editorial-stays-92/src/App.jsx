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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter text-black z-50" href="#">
                boke.
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#">Journal</a>
<a className="text-sm font-medium text-stone-500 hover:text-black transition-colors" href="#">About</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">
                    Become a Host
                </button>
<div className="w-px h-4 bg-stone-300 hidden md:block"></div>
<button className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span>Sign in</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 md:pt-40 md:pb-32 lg:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs font-medium text-stone-600 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                    New Season Arrivals
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] text-stone-950 font-serif italic">
                    Sanctuary in <br/> <span className="not-italic font-light font-sans tracking-tighter">Wilderness.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 max-w-md leading-relaxed font-light">
                    Discover a curated collection of design-led homes, cabins, and retreats for the thoughtful traveler.
                </p>
<div className="pt-4">
<button className="group flex items-center gap-3 text-stone-900 pb-1 border-b border-stone-900 hover:text-stone-600 hover:border-stone-600 transition-all">
<span className="text-sm font-medium tracking-wide">Explore Stays</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-sm relative">
<img alt="Hero Cabin" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/40 to-transparent text-white">
<p className="text-sm font-medium">Nordic A-Frame</p>
<p className="text-xs opacity-80">Reykjavík, Iceland</p>
</div>
</div>

<div className="absolute -bottom-6 left-0 flex gap-4">
<button className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full hover:bg-stone-100 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center border border-stone-200 rounded-full hover:bg-stone-100 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<div className="sticky top-20 z-30 px-6 pb-6">
<div className="max-w-4xl mx-auto">
<div className="bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-stone-100">

<div className="w-full md:w-1/3 px-6 py-3 md:py-2 hover:bg-stone-50 rounded-full transition-colors cursor-pointer group">
<label className="block text-xs font-medium text-stone-500 mb-0.5">Where</label>
<input className="w-full bg-transparent border-none p-0 text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:ring-0 cursor-pointer" placeholder="Search destinations" type="text"/>
</div>

<div className="w-full md:w-1/3 px-6 py-3 md:py-2 hover:bg-stone-50 rounded-full transition-colors cursor-pointer group">
<label className="block text-xs font-medium text-stone-500 mb-0.5">When</label>
<div className="flex items-center gap-2 text-sm font-medium text-stone-400">
<span>Add dates</span>
</div>
</div>

<div className="w-full md:w-1/3 pl-6 pr-2 py-2 flex items-center justify-between hover:bg-stone-50 rounded-full transition-colors cursor-pointer">
<div className="flex flex-col">
<label className="block text-xs font-medium text-stone-500 mb-0.5">Who</label>
<span className="text-sm font-medium text-stone-400">Add guests</span>
</div>
<button className="h-12 w-12 bg-stone-900 rounded-full text-white flex items-center justify-center shadow-lg hover:bg-stone-800 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="2" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<section className="py-20 px-6 lg:px-12 max-w-screen-2xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-stone-900 mb-2">Curated Collections</h2>
<p className="text-stone-500 font-light">Destinations designed for specific states of mind.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">
                View all
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-100" href="#">
<img alt="Alpine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Alpine</h3>
<p className="text-sm opacity-80 font-light mt-1">High altitude escapes</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-100" href="#">
<img alt="Coastal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Coastal</h3>
<p className="text-sm opacity-80 font-light mt-1">By the water's edge</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-100" href="#">
<img alt="Forest" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Forest</h3>
<p className="text-sm opacity-80 font-light mt-1">Deep in the woods</p>
</div>
</a>

<a className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-stone-100" href="#">
<img alt="Remote" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-lg font-medium tracking-tight">Remote</h3>
<p className="text-sm opacity-80 font-light mt-1">Off the grid living</p>
</div>
</a>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl font-serif italic text-stone-900 mb-10 text-center md:text-left">Editor's Picks</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-sm bg-stone-100 mb-4">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-semibold tracking-wider uppercase px-2 py-1 z-10 rounded-sm text-stone-900 border border-stone-200">
                            Superhost
                        </span>
<button className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">The Dune House</h3>
<div className="flex items-center gap-1 text-stone-500 mt-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Joshua Tree, CA</span>
</div>
</div>
<div className="flex items-center gap-1 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-xs font-semibold">4.96</span>
</div>
</div>
<p className="text-sm mt-3 text-stone-900"><span className="font-semibold">$450</span> <span className="text-stone-500 font-light">/ night</span></p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-sm bg-stone-100 mb-4">
<button className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Modern Glass Cabin</h3>
<div className="flex items-center gap-1 text-stone-500 mt-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Stowe, Vermont</span>
</div>
</div>
<div className="flex items-center gap-1 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-xs font-semibold">4.85</span>
</div>
</div>
<p className="text-sm mt-3 text-stone-900"><span className="font-semibold">$320</span> <span className="text-stone-500 font-light">/ night</span></p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-sm bg-stone-100 mb-4">
<span className="absolute top-3 left-3 bg-stone-900 text-white text-[10px] font-semibold tracking-wider uppercase px-2 py-1 z-10 rounded-sm">
                            Guest Favorite
                        </span>
<button className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Cliffside Villa</h3>
<div className="flex items-center gap-1 text-stone-500 mt-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Santorini, Greece</span>
</div>
</div>
<div className="flex items-center gap-1 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-xs font-semibold">5.0</span>
</div>
</div>
<p className="text-sm mt-3 text-stone-900"><span className="font-semibold">$850</span> <span className="text-stone-500 font-light">/ night</span></p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-square overflow-hidden rounded-sm bg-stone-100 mb-4">
<button className="absolute top-3 right-3 text-white/70 hover:text-white z-10 transition-colors">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</button>
<img alt="Stay" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-medium text-stone-900 group-hover:underline decoration-1 underline-offset-4">Highland Cottage</h3>
<div className="flex items-center gap-1 text-stone-500 mt-1">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="text-xs font-medium">Isle of Skye, Scotland</span>
</div>
</div>
<div className="flex items-center gap-1 bg-stone-50 px-1.5 py-0.5 rounded border border-stone-100">
<iconify-icon className="text-stone-900" icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-xs font-semibold">4.92</span>
</div>
</div>
<p className="text-sm mt-3 text-stone-900"><span className="font-semibold">$210</span> <span className="text-stone-500 font-light">/ night</span></p>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-stone-900 border border-stone-200 rounded-sm hover:bg-stone-50 hover:border-stone-300 transition-all">
                    Show more listings
                </button>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="mb-8 text-stone-400">
<iconify-icon icon="solar:quote-up-square-linear" width="40"></iconify-icon>
</div>
<blockquote className="text-3xl md:text-4xl font-serif italic leading-tight mb-8">
                        "Roam isn't just about booking a bed. It's about finding a space that inspires you, where the architecture and landscape speak the same language."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-700 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium">Elena Fisher</div>
<div className="text-xs text-stone-400 font-light">Architect &amp; Travel Writer</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/3] rounded-sm overflow-hidden opacity-90">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 w-32 h-px bg-stone-700 hidden lg:block"></div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 pt-20 pb-10 border-t border-stone-200">
<div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tighter text-black mb-6 block" href="#">boke.</a>
<p className="text-sm text-stone-500 leading-relaxed font-light mb-6">
                        Curating the world's most extraordinary homes for the modern traveler.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Press</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-6">Support</h4>
<ul className="space-y-4">
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Help Center</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Host Resources</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Trust &amp; Safety</a></li>
<li><a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">Cancellation Options</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900 mb-6">Newsletter</h4>
<p className="text-sm text-stone-500 mb-4 font-light">Travel inspiration, limited offers, and design stories.</p>
<form className="flex flex-col gap-3">
<input className="w-full bg-white border border-stone-200 rounded-sm px-4 py-2 text-sm placeholder:text-stone-400 focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all" placeholder="Email address" type="email"/>
<button className="w-full bg-stone-900 text-white text-sm font-medium py-2 rounded-sm hover:bg-stone-800 transition-colors" type="button">Subscribe</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-200">
<p className="text-xs text-stone-400 font-light">© 2024 boke Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-xs text-stone-400 hover:text-stone-600 font-light" href="#">Privacy</a>
<a className="text-xs text-stone-400 hover:text-stone-600 font-light" href="#">Terms</a>
<a className="text-xs text-stone-400 hover:text-stone-600 font-light" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
