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
      

<header className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase text-zinc-950" href="#">SLNWR</a>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" href="#capes">Capes</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" href="#aprons">Aprons</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-950 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<button className="text-zinc-950 hover:text-zinc-600 transition-colors">
<iconify-icon className="text-xl" icon="solar:cart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="md:hidden text-zinc-950">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:h-screen lg:flex lg:items-center overflow-hidden bg-white" id="home">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
<div className="max-w-2xl relative z-10">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-medium mb-6">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    The New Standard in Salon Wear
                </span>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-tight mb-6">
                    Waterproof. <br/>
                    Hair-proof. <br/>
<span className="text-zinc-400">Zero Compromise.</span>
</h1>
<p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
                    Extra-large professional capes with an exclusive ten-snap system. Reversible denim aprons built for the modern barber. Upgrade your gear.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center h-12 px-6 rounded-lg bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" href="#capes">
                        Shop Pro Capes
                    </a>
<a className="inline-flex justify-center items-center h-12 px-6 rounded-lg bg-white border border-zinc-200 text-zinc-950 text-sm font-medium hover:bg-zinc-50 transition-colors" href="#aprons">
                        Explore Aprons
                    </a>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-zinc-100 group">
<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full w-full">

<div className="snap-center shrink-0 w-full h-full relative">
<img alt="Barber cutting hair" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="snap-center shrink-0 w-full h-full relative">
<img alt="Barber details" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10"></div>
</div>
</div>
<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-950 text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Featured Releases</h2>
<p className="text-sm text-zinc-400 font-medium">The gear everyone is talking about.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8">

<div className="snap-start shrink-0 w-72 md:w-80 group cursor-pointer">
<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4 relative">
<img alt="Stealth Cape" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 left-4 bg-white text-zinc-950 text-xs font-semibold px-2 py-1 rounded">Bestseller</div>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-zinc-300 transition-colors">The Stealth Pro Cape</h3>
<p className="text-sm text-zinc-400 font-medium">$45.00</p>
</div>

<div className="snap-start shrink-0 w-72 md:w-80 group cursor-pointer">
<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4">
<img alt="Denim Apron" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-zinc-300 transition-colors">Raw Denim Apron</h3>
<p className="text-sm text-zinc-400 font-medium">$85.00</p>
</div>

<div className="snap-start shrink-0 w-72 md:w-80 group cursor-pointer">
<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4">
<img alt="Crimson Cape" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-zinc-300 transition-colors">Crimson Fade Cape</h3>
<p className="text-sm text-zinc-400 font-medium">$45.00</p>
</div>

<div className="snap-start shrink-0 w-72 md:w-80 group cursor-pointer pr-6">
<div className="aspect-[4/5] bg-zinc-900 rounded-xl overflow-hidden mb-4">
<img alt="Slate Apron" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-medium tracking-tight mb-1 group-hover:text-zinc-300 transition-colors">Slate Reversible Apron</h3>
<p className="text-sm text-zinc-400 font-medium">$85.00</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Built for the Craft</h2>
<p className="text-zinc-500 max-w-2xl mx-auto text-base">Select your category. Every piece is engineered for durability, utility, and undeniable style.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<a className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 block" href="#capes">
<img alt="Capes Category" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2">Pro Capes</h3>
<p className="text-white/80 text-sm font-medium flex items-center gap-2">
                            Waterproof • Hair-proof • 10-Snap Option
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</p>
</div>
</a>
<a className="group relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 block" href="#aprons">
<img alt="Aprons Category" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-3xl font-semibold text-white tracking-tight mb-2">Denim Aprons</h3>
<p className="text-white/80 text-sm font-medium flex items-center gap-2">
                            Waterproof • Reversible • Hidden Pockets
                            <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="capes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Professional Capes</h2>
<p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        Say goodbye to cheap materials. Our capes are <strong className="font-semibold text-zinc-900">waterproof, hair-proof, and extra-large</strong>. Featuring an exclusive <strong className="font-semibold text-zinc-900">ten snap option</strong> to fit any client perfectly. See them in action below.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">


<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Onyx Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>

<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">The Onyx Pro</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Slate Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Slate Fade</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Olive Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Olive Drab</h3>
<span className="text-sm font-medium text-zinc-500">$48</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Crimson Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Crimson Red</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-zinc-800"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Midnight Blue</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Gold Edition Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Gold Edition</h3>
<span className="text-sm font-medium text-zinc-500">$55</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-zinc-300"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Arctic White</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<img alt="Camo Cape" className="object-cover w-full h-full mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Urban Camo</h3>
<span className="text-sm font-medium text-zinc-500">$48</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-red-900/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Burgundy Pro</h3>
<span className="text-sm font-medium text-zinc-500">$45</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-zinc-900"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Carbon Fiber Weave</h3>
<span className="text-sm font-medium text-zinc-500">$50</span>
</div>
<p className="text-xs text-zinc-500">Extra Large • 10 Snaps</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200" id="aprons">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Denim Aprons</h2>
<p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                        Workwear redesigned. Our aprons are <strong className="font-semibold text-zinc-900">waterproof and fully reversible</strong>, featuring <strong className="font-semibold text-zinc-900">two hidden pockets</strong> on the back for a cleaner front aesthetic. Watch the videos to see the details.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-4">
<img alt="Raw Denim Apron" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Classic Raw Denim</h3>
<span className="text-sm font-medium text-zinc-500">$85</span>
</div>
<p className="text-xs text-zinc-500">Reversible • Hidden Pockets</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-4">
<img alt="Black Wash Apron" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Black Wash</h3>
<span className="text-sm font-medium text-zinc-500">$85</span>
</div>
<p className="text-xs text-zinc-500">Reversible • Hidden Pockets</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-stone-300"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Sandstone Canvas</h3>
<span className="text-sm font-medium text-zinc-500">$90</span>
</div>
<p className="text-xs text-zinc-500">Reversible • Hidden Pockets</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-zinc-700"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Charcoal Denim</h3>
<span className="text-sm font-medium text-zinc-500">$85</span>
</div>
<p className="text-xs text-zinc-500">Reversible • Hidden Pockets</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] bg-zinc-100 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-blue-900/80"></div>
<div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-12 h-12 rounded-full bg-white/90 text-zinc-900 flex items-center justify-center backdrop-blur-sm shadow-lg transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
<div className="flex justify-between items-start mb-1">
<h3 className="text-sm font-semibold tracking-tight text-zinc-900">Indigo Reserve</h3>
<span className="text-sm font-medium text-zinc-500">$95</span>
</div>
<p className="text-xs text-zinc-500">Reversible • Hidden Pockets</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Are the capes truly waterproof and hair-proof?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Yes. We use a proprietary blend of materials that actively repels water and prevents hair from sticking or penetrating the fabric. Your clients stay perfectly clean and dry.</p>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">How does the 10-snap option work?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Our capes feature ten strategically placed heavy-duty snaps along the collar. This provides a secure, tight fit for a wider range of neck sizes—from children to large adults—without needing clips.</p>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">What makes the denim aprons reversible?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">Our aprons are finished perfectly on both sides. We placed two hidden pockets on the back layer so that regardless of which way you wear it, you have a clean front aesthetic but maintain full utility.</p>
</div>

<div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">How should I wash and care for these products?</h3>
<p className="text-sm text-zinc-600 leading-relaxed">For capes, wipe clean or machine wash cold and hang dry. For aprons, hand wash or machine wash cold on a delicate cycle. Do not bleach. Air dry to maintain the waterproof coating.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100">
<img alt="Barber working" className="object-cover w-full h-full grayscale" src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Born from the Chair. Built for the Trade.</h2>
<div className="space-y-6 text-sm md:text-base text-zinc-600 leading-relaxed">
<p>
                        We got tired of replacing cheap capes that leaked water and let hair through. We were frustrated with aprons that looked good but lacked actual utility behind the chair. 
                    </p>
<p>
                        SLNWR was founded by barbers who wanted gear that matches the quality of the haircuts they give. That meant over-engineering everything: extra large sizing, waterproof materials, 10-snap secure collars, and hidden back pockets that keep tools out of the way.
                    </p>
<p>
                        When we talk to professionals in person, the language is simple: our products do what the others pretend to do. We invite you to feel the difference.
                    </p>
</div>
<div className="mt-8">
<img alt="Signature" className="w-32 opacity-80" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-900" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-2xl font-semibold tracking-tighter uppercase text-white mb-6 inline-block" href="#">SLNWR</a>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Premium salon wear engineered for the modern barber and stylist. Uncompromising quality.
                </p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-4">Shop</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#capes">Pro Capes</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#aprons">Denim Aprons</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Accessories</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">New Arrivals</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-4">Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">Wholesale</a></li>
<li><a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-4">Stay Connected</h4>
<p className="text-sm text-zinc-400 mb-4">Join our newsletter for exclusive drops and industry news.</p>
<div className="flex">
<input className="bg-zinc-900 border border-zinc-800 text-white text-sm rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-zinc-600" placeholder="Email address" type="email"/>
<button className="bg-white text-zinc-950 px-4 py-2 text-sm font-medium rounded-r-md hover:bg-zinc-200 transition-colors">Subscribe</button>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-500">© 2023 SLNWR. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:facebook-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:twitter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
