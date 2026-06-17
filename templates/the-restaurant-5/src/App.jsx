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
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="w-[800px] h-[600px] bg-zinc-800/20 rounded-full blur-[120px] mix-blend-screen opacity-50 [transform:translateY(-20%)]"></div>
</div>

<nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/50 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:star-fall-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    FOOD BENCH
                </div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#">Menu</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Atmosphere</a>
<a className="hover:text-zinc-50 transition-colors" href="#">Private Dining</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-white/10 hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-zinc-300" icon="solar:bag-3-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<a className="bg-zinc-50 text-zinc-950 px-4 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-zinc-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">
                    Reserve Table
                </a>
</div>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start gap-6 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md text-xs font-medium text-zinc-300">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        Now accepting reservations
                    </div>
<h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 leading-[1.1]">
                        Taste<br/>the dimension.
                    </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-md leading-relaxed font-light">
                        Experience gastronomy elevated beyond the plate. A multi-sensory journey blending culinary excellence with spatial design.
                    </p>
<div className="flex items-center gap-4 mt-4">
<button className="bg-zinc-50 text-zinc-950 px-6 py-3 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
                            Explore Menu
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Watch Film
                        </button>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:mx-0 [perspective:1200px]">

<div className="relative w-full aspect-[4/5] [transform-style:preserve-3d] [transform:rotateX(15deg)_rotateY(-15deg)] hover:[transform:rotateX(5deg)_rotateY(-5deg)] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group">

<div className="absolute inset-0 bg-gradient-to-tr from-zinc-900/50 to-zinc-800/20 rounded-3xl [transform:translateZ(-50px)] blur-xl transition-opacity duration-1000 group-hover:opacity-70"></div>

<img alt="Restaurant Interior" className="absolute inset-0 w-full h-full object-cover rounded-3xl border border-white/10 opacity-60 grayscale-[50%] contrast-125 [transform:translateZ(0px)] shadow-2xl" src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-zinc-950 via-transparent to-transparent [transform:translateZ(1px)]"></div>

<div className="absolute inset-4 md:inset-8 rounded-2xl border border-white/20 bg-zinc-900/40 backdrop-blur-md [transform:translateZ(80px)] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
<img alt="Signature Dish" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-zinc-950/90 to-transparent [transform:translateZ(20px)]">
<h3 className="text-xl font-semibold tracking-tight text-zinc-50">Wagyu A5 Striploin</h3>
<p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
                                    Black Truffle, Smoked Celeriac
                                </p>
</div>
</div>

<div className="absolute -top-4 -right-4 bg-zinc-50 text-zinc-950 px-4 py-2 rounded-full font-semibold text-xs [transform:translateZ(120px)] shadow-xl flex items-center gap-1.5 border border-zinc-200">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="2" width="14"></iconify-icon>
                            Signature
                        </div>
<div className="absolute bottom-12 -left-6 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-3 rounded-2xl [transform:translateZ(100px)] shadow-xl flex gap-3 items-center">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-zinc-300" icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-400 font-medium">Head Chef</div>
<div className="text-sm font-semibold text-zinc-100">Alain Dubois</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Curated Selections</h2>
<p className="text-sm text-zinc-400 font-light">A glimpse into our seasonal tasting menu.</p>
</div>
<a className="text-sm font-medium text-zinc-300 hover:text-white transition-colors flex items-center gap-1 border-b border-zinc-700 hover:border-zinc-300 pb-1 w-max" href="#">
                        View Full Menu
                        <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group [perspective:1000px]">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-8deg)] overflow-hidden">
<img alt="Dish 1" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 [transform:translateZ(-1px)]" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full [transform:translateZ(40px)]">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">Aged Duck Breast</h3>
<span className="text-sm font-medium text-zinc-400">$65</span>
</div>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Plum glaze, fermented daikon, crispy skin crumb, smoked duck jus.</p>
</div>
</div>
</div>

<div className="group [perspective:1000px]">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(0deg)] overflow-hidden">
<img alt="Dish 2" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 [transform:translateZ(-1px)]" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full [transform:translateZ(40px)]">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">Charred Octopus</h3>
<span className="text-sm font-medium text-zinc-400">$42</span>
</div>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Romesco essence, fingerling potatoes, preserved lemon, squid ink tuile.</p>
</div>
</div>
</div>

<div className="group [perspective:1000px]">
<div className="relative w-full aspect-[4/5] rounded-2xl bg-zinc-900 border border-white/5 [transform-style:preserve-3d] transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(8deg)] overflow-hidden">
<img alt="Dish 3" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 [transform:translateZ(-1px)]" src="https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 w-full [transform:translateZ(40px)]">
<div className="flex justify-between items-end mb-2">
<h3 className="text-lg font-semibold tracking-tight text-zinc-100">White Asparagus</h3>
<span className="text-sm font-medium text-zinc-400">$38</span>
</div>
<p className="text-xs text-zinc-400 font-light line-clamp-2">Cured egg yolk, brown butter hollandaise, toasted hazelnuts, micro herbs.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="relative w-full aspect-square [perspective:1000px] order-2 lg:order-1">
<div className="absolute inset-0 [transform-style:preserve-3d] [transform:rotateY(10deg)]">

<div className="absolute right-0 top-10 w-4/5 h-4/5 bg-zinc-900 border border-white/5 rounded-3xl [transform:translateZ(-80px)] p-8 flex flex-col justify-end">
<div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-400" icon="solar:glass-water-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-zinc-200">Wine Pairing</h4>
<p className="text-xs text-zinc-500 mt-1">Curated by our sommelier.</p>
</div>

<img alt="Bar Area" className="absolute left-0 bottom-10 w-3/4 h-3/4 object-cover rounded-3xl border border-white/10 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.8)] [transform:translateZ(40px)]" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="order-1 lg:order-2 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<span className="w-6 h-px bg-zinc-700"></span>
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">The Environment</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                            Designed for <br/><span className="text-zinc-500">Intimacy.</span>
</h2>
<p className="text-sm text-zinc-400 leading-relaxed font-light mb-8 max-w-md">
                            Every angle, shadow, and texture has been meticulously crafted to focus your attention on the culinary experience. The space itself acts as a canvas for the evening.
                        </p>

<div className="flex items-center gap-4 bg-zinc-900/50 p-2 rounded-full border border-white/5">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-zinc-800 text-white shadow-sm transition-all">Dining Room</button>
<button className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-zinc-200 transition-all">Chef's Counter</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="font-semibold tracking-tighter text-xl mb-4 text-zinc-100">FOOD BENCH</div>
<p className="text-xs text-zinc-500 font-light">Elevating reality through taste.</p>
</div>
<div>
<h5 className="text-xs font-semibold text-zinc-100 mb-4 tracking-wide uppercase">Location</h5>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li>124 Dimensional Ave</li>
<li>Sector 4, NY 10012</li>
<li className="pt-2"><a className="text-zinc-300 hover:text-white border-b border-zinc-700 hover:border-zinc-300 pb-0.5 transition-colors" href="#">Get Directions</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-zinc-100 mb-4 tracking-wide uppercase">Contact</h5>
<ul className="space-y-2 text-sm text-zinc-400 font-light">
<li>info@foodbench.space</li>
<li>+1 (555) 019-8372</li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold text-zinc-100 mb-4 tracking-wide uppercase">Social</h5>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-zinc-100 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2024 Food Bench Spatial Dining. All rights reserved.</p>
<div className="flex gap-4 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
