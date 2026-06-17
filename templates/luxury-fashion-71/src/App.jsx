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
      

<nav className="absolute top-0 w-full z-50 flex items-center justify-between p-6 md:px-12 text-white">
<div className="text-xs uppercase tracking-widest font-medium cursor-pointer hover:text-zinc-300 transition-colors">Menu</div>

<div className="text-2xl font-serif tracking-tighter uppercase font-medium">Aura</div>
<div className="flex items-center gap-6">
<button aria-label="Account" className="hover:text-zinc-300 transition-colors">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button aria-label="Cart" className="hover:text-zinc-300 transition-colors relative">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute -top-1 -right-2 bg-white text-zinc-900 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium" style={{fontSize: '0.6rem'}}>2</span>
</button>
</div>
</nav>

<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-zinc-900">

<img alt="Cinematic Hero Campaign" className="w-full h-full object-cover opacity-70 scale-105 transform hover:scale-100 transition-transform duration-[10s]" src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white mt-20 px-6 max-w-3xl">
<h1 className="font-serif text-5xl md:text-7xl tracking-tight font-medium mb-8 leading-tight">Elevated.<br/>Uncompromised.</h1>
<p className="text-sm md:text-base font-light tracking-wide mx-auto mb-12 text-zinc-200">Garments engineered for the modern purist. No excess, only essence.</p>
<a className="inline-block bg-white text-zinc-900 text-xs uppercase tracking-widest px-10 py-4 font-medium hover:bg-zinc-200 transition-colors duration-300" href="#collection">Explore Collection</a>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto" id="collection">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-zinc-900">The Autumn Edit</h2>
<a className="text-xs uppercase tracking-widest font-medium border-b border-zinc-900 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors flex items-center gap-2" href="#">
                View Entire Collection <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-200">
<img alt="Cashmere Overcoat" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>

<img alt="Cashmere Texture" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform" src="https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&amp;w=1915&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg tracking-tight font-medium text-zinc-900">Merino Tailored Jacket</h3>
<p className="text-sm text-zinc-500 mt-2 font-light">$1,250</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-200">
<img alt="Heavyweight Knit" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1972&amp;auto=format&amp;fit=crop"/>

<img alt="Knit Texture" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform" src="https://images.unsplash.com/photo-1605020420620-20c943cc4669?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-lg tracking-tight font-medium text-zinc-900">Heavyweight Alpaca Knit</h3>
<p className="text-sm text-zinc-500 mt-2 font-light">$890</p>
</div>

<div className="group cursor-pointer mt-0 md:mt-12 lg:mt-0">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-200">
<img alt="Structured Trench" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<img alt="Trench Texture" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="font-serif text-lg tracking-tight font-medium text-zinc-900">Structured Wool Trench</h3>
<p className="text-sm text-zinc-500 mt-2 font-light">$1,450</p>
</div>

<div className="group cursor-pointer mt-0 md:mt-12 lg:mt-0">
<div className="relative aspect-[3/4] overflow-hidden mb-6 bg-zinc-200">
<img alt="Pleated Trouser" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0" src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>

<img alt="Trouser Texture" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100 scale-105 group-hover:scale-100 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-lg tracking-tight font-medium text-zinc-900">Double Pleated Trouser</h3>
<p className="text-sm text-zinc-500 mt-2 font-light">$550</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-zinc-100 px-6">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-serif text-2xl md:text-3xl tracking-tight font-medium mb-10 text-zinc-900">Quiet Mastery</h2>
<div className="space-y-6 text-sm md:text-base text-zinc-600 font-light leading-relaxed">
<p>We believe in the enduring power of restraint. Our garments are not designed to shout, but to resonate with those who understand the nuance of meticulous construction and exceptional materials.</p>
<p>Every piece is born from a dialogue between heritage craftsmanship and modern utility. Woven in century-old mills and tailored by artisans who treat every stitch as a signature of devotion.</p>
</div>
<div className="mt-12 font-serif text-2xl tracking-tighter italic text-zinc-400">E. Sterling</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-16 text-center text-zinc-900">In Context</h2>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

<div className="lg:col-span-7 relative group cursor-pointer overflow-hidden">
<img alt="Editorial Campaign" className="w-full aspect-[4/5] object-cover scale-100 group-hover:scale-105 transition-transform duration-[10s]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute inset-0 bg-zinc-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
<span className="bg-white/95 backdrop-blur-sm text-zinc-900 text-xs uppercase tracking-widest px-8 py-4 font-medium flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        Shop the Look <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-8 lg:gap-16 mt-8 lg:mt-0">
<div className="relative group cursor-pointer overflow-hidden">
<img alt="Detail Profile" className="w-full aspect-square object-cover scale-100 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative group cursor-pointer overflow-hidden w-4/5 self-end">
<img alt="Detail Fabric" className="w-full aspect-square object-cover scale-100 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 bg-zinc-900 text-white">
<div className="aspect-square lg:aspect-auto h-full overflow-hidden">
<img alt="Material Texture" className="w-full h-full object-cover scale-105 transform" src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center px-8 py-24 md:px-20 lg:px-32">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-8">Sourced with Intention</h2>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-6">
                Our foundation rests on the absolute purity of raw materials. We exclusively source rare vicuña, long-staple Egyptian cotton, and un-dyed Mongolian cashmere from ethical collectives.
            </p>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed mb-12">
                Each bolt of fabric passes through fifty distinct stages of refinement before reaching the cutting room, ensuring a drape, weight, and hand-feel that completely defies mass replication.
            </p>
<a className="text-xs uppercase tracking-widest font-medium border-b border-zinc-500 pb-2 w-max hover:text-white hover:border-white transition-colors flex items-center gap-2" href="#">
                Discover the Mills <iconify-icon className="text-base" icon="solar:round-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 border-b border-zinc-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="font-serif text-xl md:text-2xl tracking-tight font-medium mb-16 text-zinc-800 leading-snug">
                "A masterclass in modern tailoring. Aura completely redefines what it means to dress with quiet confidence."
            </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<span className="font-serif text-xl md:text-2xl tracking-tighter uppercase font-medium">Vogue</span>
<span className="font-serif text-xl md:text-2xl tracking-tighter uppercase font-medium">GQ</span>
<span className="font-serif text-xl md:text-2xl tracking-tighter uppercase font-medium">Monocle</span>
<span className="font-serif text-xl md:text-2xl tracking-tighter uppercase font-medium">Esquire</span>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-zinc-50">
<div className="max-w-lg mx-auto">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight font-medium mb-4 text-zinc-900">Join the House</h2>
<p className="text-sm text-zinc-500 font-light mb-12">Receive early access to seasonal allocations, bespoke events, and private archival sales.</p>
<form className="flex flex-col sm:flex-row gap-4">
<div className="relative flex-1">
<iconify-icon className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-transparent border-b border-zinc-300 py-3 pl-8 text-sm focus:outline-none focus:border-zinc-900 transition-colors placeholder:text-zinc-400 text-zinc-900" placeholder="Email Address" required="" type="email"/>
</div>
<button className="bg-zinc-900 text-white text-xs uppercase tracking-widest px-8 py-4 font-medium hover:bg-zinc-800 transition-colors whitespace-nowrap" type="submit">
                    Request Access
                </button>
</form>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16 px-6 md:px-12 text-xs flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-2xl font-serif tracking-tighter uppercase font-medium text-white">Aura</div>
<div className="flex flex-wrap justify-center gap-8 uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
<a className="hover:text-white transition-colors" href="#">Bespoke</a>
<a className="hover:text-white transition-colors" href="#">Client Services</a>
</div>
<div className="font-light tracking-wide">© 2024 Aura. All rights reserved.</div>
</footer>

    </>
  );
}
