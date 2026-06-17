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
      
<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 mix-blend-difference text-[#FAFAFA] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300">
<div className="w-1/3 flex items-center gap-4">
<button className="hover:opacity-60 transition-opacity flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<span className="hidden md:block text-xs uppercase tracking-widest mt-1">Menu</span>
</div>
<div className="w-1/3 text-center">
<a className="text-xl md:text-2xl tracking-tighter font-medium uppercase leading-none" href="#">A U R A</a>
</div>
<div className="w-1/3 flex justify-end items-center gap-6">
<button className="hover:opacity-60 transition-opacity flex items-center justify-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="hover:opacity-60 transition-opacity flex items-center justify-center relative">
<iconify-icon icon="solar:bag-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute -top-1 -right-2 text-[0.65rem] bg-[#FAFAFA] text-[#111111] w-4 h-4 rounded-full flex items-center justify-center font-medium">2</span>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Abstract texture" className="w-full h-full object-cover object-center opacity-80 filter grayscale contrast-125" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-12 md:gap-0">
<div className="max-w-xs text-sm text-[#444] leading-relaxed hidden md:block">
<p>Collection 04 explores the tension between structured tailoring and fluid drape. Sourced sustainably, crafted with intention.</p>
<div className="mt-6 flex items-center gap-2 uppercase text-xs tracking-widest font-medium">
<span>Explore</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</div>
</div>
<div className="text-right w-full md:w-auto">
<h1 className="text-7xl md:text-9xl lg:text-[11rem] tracking-tighter font-extralight uppercase leading-[0.85] mix-blend-exclusion text-[#FAFAFA]">
                    Blank<br/>Canvas
                </h1>
</div>
</div>
</header>

<section className="py-32 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center">
<span className="text-xs uppercase tracking-widest text-[#888] mb-8">[ 01 — Philosophy ]</span>
<h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-light max-w-5xl leading-tight md:leading-snug text-[#222]">
            We reduce garments to their purest intention. Eliminating excess to reveal the architecture of form, fabric, and human movement.
        </h2>
</section>

<section className="px-6 md:px-12 pb-32 md:pb-48">
<div className="flex justify-between items-end mb-16 border-b border-[#E5E5E5] pb-8">
<span className="text-xs uppercase tracking-widest text-[#888]">[ 02 — Silhouettes ]</span>
<a className="text-sm font-medium tracking-tight uppercase hover:text-[#888] transition-colors" href="#">View Archive</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-x-8 md:gap-y-32">

<div className="md:col-span-7 group cursor-pointer">
<div className="overflow-hidden bg-[#EAEAEA] aspect-[4/5] relative">
<img alt="Look 1" className="w-full h-full object-cover filter grayscale transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-lg md:text-xl tracking-tight font-medium">Structured Wool Overcoat</h3>
<p className="text-sm text-[#888] mt-1">Italian Merino / Unlined</p>
</div>
<span className="text-sm font-medium">$850</span>
</div>
</div>

<div className="md:col-span-4 md:col-start-9 md:pt-48 group cursor-pointer">
<div className="overflow-hidden bg-[#EAEAEA] aspect-[3/4] relative">
<img alt="Look 2" className="w-full h-full object-cover filter grayscale transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-lg md:text-xl tracking-tight font-medium">Draped Silk Blouse</h3>
<p className="text-sm text-[#888] mt-1">Raw Silk / Asymmetric</p>
</div>
<span className="text-sm font-medium">$420</span>
</div>
</div>

<div className="md:col-span-10 md:col-start-2 group cursor-pointer">
<div className="overflow-hidden bg-[#EAEAEA] aspect-[16/9] md:aspect-[21/9] relative">
<img alt="Look 3" className="w-full h-full object-cover filter grayscale transition-transform duration-1000 group-hover:scale-105 object-top" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex justify-between items-start">
<div>
<h3 className="text-lg md:text-xl tracking-tight font-medium">Pleated Wide Trousers</h3>
<p className="text-sm text-[#888] mt-1">Heavyweight Cotton Twill</p>
</div>
<span className="text-sm font-medium">$380</span>
</div>
</div>
</div>
</section>

<section className="bg-[#111111] text-[#FAFAFA] flex flex-col md:flex-row">
<div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen relative bg-[#222]">
<img alt="Fabric Detail" className="absolute inset-0 w-full h-full object-cover opacity-60 filter grayscale" src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 px-6 md:px-16 py-24 md:py-0 flex flex-col justify-center">
<span className="text-xs uppercase tracking-widest text-[#888] mb-12">[ 03 — Materiality ]</span>
<h2 className="text-4xl md:text-6xl tracking-tight font-light mb-8 leading-tight">Tactile<br/>Obsession</h2>
<p className="text-lg text-[#AAA] font-light leading-relaxed max-w-md mb-12">
                Every thread is a deliberate choice. We partner with heritage mills in Japan and Italy to develop custom textiles that age beautifully and defy seasonal trends. The focus is on weight, drape, and the feeling against the skin.
            </p>

<div className="space-y-6 max-w-md border-t border-[#333] pt-8">
<div className="flex justify-between items-center group cursor-pointer">
<span className="text-lg tracking-tight font-light group-hover:pl-2 transition-all duration-300">Organic Fibers</span>
<iconify-icon className="text-[#666] group-hover:text-[#FAFAFA] transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-center group cursor-pointer border-t border-[#333] pt-6">
<span className="text-lg tracking-tight font-light group-hover:pl-2 transition-all duration-300">Zero-Waste Cutting</span>
<iconify-icon className="text-[#666] group-hover:text-[#FAFAFA] transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-center group cursor-pointer border-t border-[#333] pt-6">
<span className="text-lg tracking-tight font-light group-hover:pl-2 transition-all duration-300">Lifetime Repair</span>
<iconify-icon className="text-[#666] group-hover:text-[#FAFAFA] transition-colors" icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden border-b border-[#E5E5E5] flex items-center bg-[#FAFAFA]">
<div className="whitespace-nowrap flex gap-8 items-center text-[#E5E5E5] select-none">
<h2 className="text-6xl md:text-8xl tracking-tighter font-medium uppercase">Essentials</h2>
<h2 className="text-6xl md:text-8xl tracking-tighter font-extralight uppercase italic">Redefined</h2>
<h2 className="text-6xl md:text-8xl tracking-tighter font-medium uppercase">Essentials</h2>
<h2 className="text-6xl md:text-8xl tracking-tighter font-extralight uppercase italic">Redefined</h2>
<h2 className="text-6xl md:text-8xl tracking-tighter font-medium uppercase">Essentials</h2>
</div>
</section>

<section className="py-32 md:py-40 pl-6 md:pl-12">
<div className="pr-6 md:pr-12 mb-16 flex justify-between items-end">
<span className="text-xs uppercase tracking-widest text-[#888]">[ 04 — Core ]</span>
</div>
<div className="flex overflow-x-auto gap-6 md:gap-12 pb-12 pr-6 md:pr-12 hide-scrollbar snap-x snap-mandatory">

<div className="min-w-[75vw] md:min-w-[400px] snap-center group">
<div className="aspect-[3/4] bg-[#F0F0F0] overflow-hidden mb-6">
<img className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-lg tracking-tight">The Box Tee</h4>
<span className="text-sm text-[#888]">$90</span>
</div>
</div>

<div className="min-w-[75vw] md:min-w-[400px] snap-center group">
<div className="aspect-[3/4] bg-[#F0F0F0] overflow-hidden mb-6">
<img className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-lg tracking-tight">Heavy Hoodie</h4>
<span className="text-sm text-[#888]">$180</span>
</div>
</div>

<div className="min-w-[75vw] md:min-w-[400px] snap-center group">
<div className="aspect-[3/4] bg-[#F0F0F0] overflow-hidden mb-6">
<img className="w-full h-full object-cover filter grayscale group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<h4 className="text-lg tracking-tight">Tailored Short</h4>
<span className="text-sm text-[#888]">$140</span>
</div>
</div>

<div className="min-w-[75vw] md:min-w-[400px] snap-center flex items-center justify-center bg-[#F5F5F5] aspect-[3/4]">
<a className="text-lg tracking-tight border-b border-[#111] pb-1 hover:text-[#888] hover:border-[#888] transition-colors" href="#">Shop All Core</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#F5F5F5]">
<div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-end">
<div className="w-full md:w-1/2">
<span className="text-xs uppercase tracking-widest text-[#888] mb-6 block">[ Registry ]</span>
<h3 className="text-3xl md:text-4xl tracking-tight font-light leading-tight">Join the inner circle. Early access to limited runs and archival sales.</h3>
</div>
<div className="w-full md:w-1/2">

<form className="relative group">
<input className="w-full bg-transparent border-0 border-b border-[#CCC] py-4 pl-0 pr-10 text-lg md:text-xl font-light tracking-tight text-[#111] placeholder-[#888] focus:ring-0 focus:border-[#111] focus:outline-none transition-colors rounded-none appearance-none" placeholder="Email Address" type="email"/>
<button className="absolute right-0 bottom-4 text-[#888] group-hover:text-[#111] transition-colors" type="submit">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 md:px-12 bg-[#FAFAFA] flex flex-col justify-between">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-32">
<div>
<span className="text-xs uppercase tracking-widest text-[#888] mb-6 block">Shop</span>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#888] transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Outerwear</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Knitwear</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Trousers</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#888] mb-6 block">Brand</span>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#888] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Stores</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Journal</a></li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#888] mb-6 block">Support</span>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#888] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<span className="text-xs uppercase tracking-widest text-[#888] mb-6 block">Social</span>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-[#888] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-[#888] transition-colors" href="#">Pinterest</a></li>
</ul>
</div>
</div>
<div className="flex flex-col items-center border-t border-[#E5E5E5] pt-12">
<h1 className="text-[25vw] md:text-[20vw] leading-none tracking-tighter font-medium text-[#111] uppercase select-none opacity-90">
                A U R A
            </h1>
<div className="w-full flex justify-between items-center mt-8 text-xs text-[#888]">
<span>© 2024 Aura Studios.</span>
<span>Terms &amp; Privacy</span>
</div>
</div>
</footer>

    </>
  );
}
