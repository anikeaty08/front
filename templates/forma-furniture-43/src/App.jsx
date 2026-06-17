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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute hue-rotate-15 opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JUFg0MwEcM3urKc9W7Vg"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-white/80 border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-serif z-50 hover:opacity-70 transition-opacity" href="#">
                FORMA
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
<a className="transition-colors hover:text-slate-900" href="#collection">Collection</a>
<a className="transition-colors hover:text-slate-900" href="#philosophy">Philosophy</a>
<a className="transition-colors hover:text-slate-900" href="#journal">Journal</a>
</div>

<div className="flex items-center space-x-6">
<button className="text-slate-500 hover:text-cyan-500 transition-colors">
<svg aria-hidden="true" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="text-slate-500 hover:text-cyan-500 transition-colors relative">
<svg aria-hidden="true" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 h-2 w-2 bg-cyan-500 rounded-full"></span>
</button>
<button className="hidden md:block border px-5 py-2 text-xs font-medium uppercase tracking-wide rounded-full transition-all duration-300 border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white">
                    Contact Studio
                </button>
</div>
</div>
</nav>

<header className="md:pb-32 md:pl-6 md:pr-6 md:pt-32 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-end">
<div className="md:col-span-7 animate-fade-in">
<span className="text-cyan-500 font-medium tracking-wider text-xs uppercase mb-6 block">Autumn / Winter '24</span>
<h1 className="font-serif text-6xl leading-[0.9] tracking-tight mb-8 md:text-8xl lg:text-8xl text-slate-900">
                    Sculpting <br/> <i className="font-light text-slate-400">Silence</i> &amp; Space.
                </h1>
<div className="flex flex-col md:flex-row gap-8 items-start md:items-center mt-12">
<button className="px-8 py-4 rounded-full text-sm font-medium hover:bg-cyan-500 transition-colors duration-300 flex items-center gap-2 group bg-slate-900 text-white">
                        View New Arrivals
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="flex items-center gap-3 text-slate-500 text-sm">
<svg aria-hidden="true" data-icon="lucide:play-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="border-b border-transparent cursor-pointer transition-colors hover:border-slate-300">Watch the process</span>
</div>
</div>
</div>
<div className="md:col-span-5 relative animate-fade-in delay-200">
<div className="aspect-[4/5] overflow-hidden rounded-sm relative group">
<img alt="Minimalist Chair" className="transform group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[20%] group-hover:grayscale-0 w-full h-full object-cover scale-100" src="https://images.unsplash.com/photo-1567016546367-c27a0d56712e?w=1600&amp;q=80"/>
<div className="absolute bottom-6 left-6 backdrop-blur-sm px-4 py-3 rounded-sm border bg-white/90 border-white/20">
<p className="font-serif text-xl leading-none mb-1">The Lounge Chair 01</p>
<p className="text-xs text-slate-500 uppercase tracking-wide">$1,250 — Solid Oak</p>
</div>
</div>
</div>
</div>
</header>

<section className="border-y pt-10 pb-10 border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="font-serif text-2xl tracking-tight">ArchDigest</span>
<span className="font-serif text-2xl tracking-tight">KINFOLK</span>
<span className="font-serif text-2xl tracking-tight">Monocle</span>
<span className="font-serif text-2xl tracking-tight">HYPEBEAST</span>
<span className="font-serif text-2xl tracking-tight">VogueLiving</span>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="space-y-4 group cursor-default">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 bg-white border-slate-200">
<svg aria-hidden="true" data-icon="lucide:compass" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="font-serif text-2xl text-slate-900">Intentional Design</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">Every curve and joint is considered. We strip away the unnecessary to reveal the essential beauty of form and function.</p>
</div>
<div className="space-y-4 group cursor-default">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 bg-white border-slate-200">
<svg aria-hidden="true" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-slate-900">Artisan Craft</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">Hand-finished by master woodworkers in Kyoto and Copenhagen. We honor traditional joinery techniques.</p>
</div>
<div className="space-y-4 group cursor-default">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300 bg-white border-slate-200">
<svg aria-hidden="true" data-icon="lucide:leaf" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-slate-900">Sustainable Source</h3>
<p className="text-slate-500 text-sm leading-relaxed font-light">We use only FSC-certified timber and natural oils. Our furniture is built to last generations, not seasons.</p>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6" id="collection">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-5xl md:text-6xl mb-6 tracking-tight text-slate-900">Curated Pieces</h2>
<p className="text-slate-500 font-light text-lg">Objects designed to elevate the everyday ritual. Each piece is unique, carrying the grain and story of the tree it came from.</p>
</div>
<a className="text-sm font-medium border-b pb-1 hover:text-cyan-500 hover:border-cyan-500 transition-colors border-slate-900" href="#">
                View Full Catalog
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100">
<img alt="Chair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 px-3 py-1 text-[10px] uppercase tracking-widest font-medium rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-2xl group-hover:text-cyan-500 transition-colors text-slate-900">The Canvas Chair</h3>
<p className="text-slate-500 text-sm mt-1">Ash Wood &amp; Linen</p>
</div>
<span className="text-sm font-medium">$890</span>
</div>
</div>

<div className="group cursor-pointer lg:mt-12">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100">
<img alt="Table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="font-serif text-2xl group-hover:text-cyan-500 transition-colors text-slate-900">Noguchi Study</h3>
<p className="text-slate-500 text-sm mt-1">Walnut &amp; Glass</p>
</div>
<span className="text-sm font-medium">$1,450</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-slate-100">
<img alt="Lamp" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&amp;q=80"/>
</div>
<div className="flex items-start justify-between">
<div>
<h3 className="font-serif text-2xl group-hover:text-cyan-500 transition-colors text-slate-900">Ceramic Lamp 04</h3>
<p className="text-slate-500 text-sm mt-1">Raw Clay &amp; Brass</p>
</div>
<span className="text-sm font-medium">$320</span>
</div>
</div>
</div>
</section>

<section className="py-32 overflow-hidden bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<img alt="Texture Detail" className="w-full h-auto rounded-sm opacity-90" src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
<div className="w-12 h-12 rounded-full border flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform border-white/30 bg-white/10">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="absolute left-14 top-1/2 -translate-y-1/2 w-48 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
<div className="p-3 rounded-sm text-xs bg-white text-slate-900">
<p className="font-serif text-lg mb-1">Bouclé Fabric</p>
<p className="text-slate-500">Imported from Belgium, stain resistant and incredibly soft.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-serif text-5xl md:text-6xl mb-8 tracking-tight">Materiality First.</h2>
<p className="font-light text-lg mb-10 leading-relaxed text-slate-400">
                        We believe that the tactile experience of furniture is just as important as the visual. Our fabrics are chosen for their depth, durability, and comfort.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 border-t pt-6 border-slate-800">
<span className="font-serif text-2xl text-cyan-400">01</span>
<div className="flex-1">
<h4 className="font-medium text-white">Natural Fibers</h4>
<p className="text-sm text-slate-500 mt-1">Cotton, linen, and wool blends only.</p>
</div>
</div>
<div className="flex items-center gap-4 border-t pt-6 border-slate-800">
<span className="font-serif text-2xl text-cyan-400">02</span>
<div className="flex-1">
<h4 className="font-medium text-white">Hand-Stitched</h4>
<p className="text-sm text-slate-500 mt-1">Precision seams that guarantee longevity.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b pt-24 pb-24 border-slate-100">
<div className="text-center max-w-3xl mr-auto ml-auto pr-6 pl-6">
<div className="flex justify-center">
<svg aria-hidden="true" className="" data-icon="lucide:mail-open" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail-open" data-width="32" fill="none" height="32" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(24, 24, 27)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
</div>
<h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight text-slate-900">Join the Atelier</h2>
<p className="text-slate-500 mb-10 font-light">Receive early access to new collections and editorial stories on design living.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
<input className="flex-1 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder:text-slate-400 bg-slate-50 border-slate-200 text-slate-900" placeholder="email@address.com" type="email"/>
<button className="bg-cyan-500 px-6 py-3 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-cyan-500/20 text-white hover:bg-cyan-600" type="button">
                    Subscribe
                </button>
</form>
<p className="text-xs mt-4 text-slate-400">We respect your inbox. Unsubscribe at any time.</p>
</div>
</section>

<footer className="pt-20 pb-10 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl tracking-tighter font-serif block mb-6" href="#">FORMA</a>
<p className="text-slate-500 text-sm font-light max-w-xs leading-relaxed">
                    A design studio dedicated to the art of slower living through exceptional furniture and objects.
                </p>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm mb-4 text-slate-900">Shop</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-500 transition-colors" href="#">Seating</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Tables</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Lighting</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm mb-4 text-slate-900">Studio</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Craftsmanship</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm mb-4 text-slate-900">Support</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-cyan-500 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-cyan-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm mb-4 text-slate-900">Social</h4>
<div className="flex space-x-4 text-slate-400">
<a className="hover:text-cyan-500 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-cyan-500 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-cyan-500 transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-100">
<p className="text-xs font-light text-slate-400">© 2024 Forma Studio Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs transition-colors text-slate-400 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs transition-colors text-slate-400 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
