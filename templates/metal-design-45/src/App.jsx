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
      

<header className="sticky top-0 z-50 bg-white border-b border-black">
<div className="flex flex-col md:flex-row md:items-center items-stretch justify-between">

<div className="md:p-6 md:border-b-0 flex-shrink-0 border-black border-b pt-5 pr-5 pb-5 pl-5">
<a className="flex items-center transition-opacity hover:opacity-80" href="#">
<div className="relative inline-flex md:h-8 h-7 w-auto items-center justify-center group cursor-pointer isolate">
<img alt="Pavol Zlatoš — Metal Design" className="h-full w-auto object-contain transition-all duration-300 group-hover:opacity-40 group-hover:grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<svg aria-hidden="true" className="lucide lucide-upload w-4 h-4 text-black" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</div>
</div>
</a>
</div>

<div className="flex flex-col md:flex-row md:divide-x divide-black w-full md:w-auto text-base">
<nav className="flex divide-x divide-black md:divide-none border-b md:border-b-0 border-black md:border-none">
<a className="flex-1 md:flex-none p-4 md:p-6 hover:bg-neutral-100 text-center uppercase tracking-wide" href="#">Work</a>
<a className="flex-1 md:flex-none p-4 md:p-6 hover:bg-neutral-100 text-center uppercase tracking-wide" href="#">Shop</a>
<a className="flex-1 md:flex-none p-4 md:p-6 hover:bg-neutral-100 text-center uppercase tracking-wide" href="#">Contact</a>
</nav>

<div className="p-4 md:p-6 flex items-center justify-center md:justify-end gap-2 hover:bg-neutral-100 cursor-pointer uppercase tracking-wide">
<span>Cart</span>
<span className="bg-black text-white text-xs px-2 py-0.5 rounded-none">(0)</span>
</div>
</div>
</div>
</header>
<main className="flex-grow w-full">

<section className="border-b border-black">
<div className="p-6 md:p-8">
<h1 className="md:text-6xl uppercase text-4xl font-medium tracking-tighter mb-8">Collections</h1>

<nav className="flex flex-wrap gap-x-8 gap-y-3 text-base md:text-lg uppercase tracking-wide text-neutral-500">
<a className="text-black border-b border-black pb-0.5" href="#">Metal Objects</a>
<a className="hover:text-black transition-colors" href="#">Architectural Elements</a>
<a className="hover:text-black transition-colors" href="#">Parametric Panels</a>
<a className="hover:text-black transition-colors" href="#">Forged Details</a>
<a className="hover:text-black transition-colors" href="#">Custom Work</a>
<a className="hover:text-black transition-colors" href="#">Available</a>
</nav>
</div>
</section>


<section className="bg-black gap-px grid grid-cols-1 md:grid-cols-2 border-b border-black">

<article className="bg-white group relative flex flex-col h-full">
<div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-100 border-b border-black">
<img alt="Forged Steel Texture" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 text-xs font-bold border border-black px-2 py-1 bg-white uppercase">Series A</div>
</div>
<div className="p-6 flex flex-col justify-between flex-grow">
<div className="mb-6">
<h2 className="text-xl md:text-2xl uppercase font-medium tracking-tight mb-2">Forged Panel 01</h2>
<p className="text-neutral-500 text-base uppercase">600 × 800 mm — Raw Steel</p>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium">Custom Build</span>
<a className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 uppercase text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" href="#">
                            View <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="bg-white group relative flex flex-col h-full">
<div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-100 border-b border-black">
<img alt="Hot Metal Glow" className="filter contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover grayscale brightness-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col justify-between flex-grow">
<div className="mb-6">
<h2 className="text-xl md:text-2xl uppercase font-medium tracking-tight mb-2">Thermal Distortion</h2>
<p className="text-neutral-500 text-base uppercase">1200 × 400 mm — Heat Treated</p>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium">€ 2,400.00</span>
<a className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 uppercase text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" href="#">
                            View <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="bg-white group relative flex flex-col h-full">
<div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-100 border-b border-black">
<img alt="Parametric Metal Pattern" className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex flex-col justify-between flex-grow">
<div className="mb-6">
<h2 className="text-xl md:text-2xl uppercase font-medium tracking-tight mb-2">Grid Structure V2</h2>
<p className="text-neutral-500 text-base uppercase">Variable Dimensions — Aluminum</p>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium">From € 850.00</span>
<a className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 uppercase text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" href="#">
                            View <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>

<article className="bg-white group relative flex flex-col h-full">
<div className="aspect-[4/5] w-full relative overflow-hidden bg-neutral-100 border-b border-black">
<img alt="Geometric Ribs" className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-6 flex flex-col justify-between flex-grow">
<div className="mb-6">
<h2 className="text-xl md:text-2xl uppercase font-medium tracking-tight mb-2">Modular Ribs</h2>
<p className="text-neutral-500 text-base uppercase">400 × 400 mm — Unit</p>
</div>
<div className="flex justify-between items-end">
<span className="text-lg font-medium">Inquire</span>
<a className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2 uppercase text-sm border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors" href="#">
                            View <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</article>
</section>

<section className="border-b border-black flex flex-col md:flex-row">
<div className="p-6 md:p-8 md:w-1/2 border-b md:border-b-0 md:border-r border-black flex items-center">
<h3 className="uppercase text-lg md:text-xl tracking-tight leading-tight">
                    Subscribe for project updates<br/>and new metal works
                </h3>
</div>
<div className="md:w-1/2 flex">
<form className="w-full flex h-16 md:h-auto">
<input className="w-full h-full px-6 md:px-8 bg-transparent text-lg uppercase placeholder:text-neutral-400 outline-none focus:bg-neutral-50" placeholder="EMAIL ADDRESS" type="email"/>
<button className="border-l border-black px-6 md:px-10 h-full hover:bg-black hover:text-white transition-colors uppercase text-sm tracking-wide flex items-center gap-2 whitespace-nowrap" type="submit">
                        Subscribe <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</section>
</main>

<footer className="bg-white text-base">
<div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black border-b border-black">

<div className="p-6 md:p-8 flex flex-col gap-4">
<span className="text-neutral-500 uppercase text-xs tracking-widest mb-2">Studio</span>
<a className="hover:underline" href="#">About</a>
<a className="hover:underline" href="#">Contact</a>
<a className="hover:underline" href="#">Process</a>
<a className="hover:underline" href="#">Materials</a>
</div>

<div className="p-6 md:p-8 flex flex-col gap-4">
<span className="text-neutral-500 uppercase text-xs tracking-widest mb-2">Legal</span>
<a className="hover:underline" href="#">Impressum</a>
<a className="hover:underline" href="#">Privacy Policy</a>
<a className="hover:underline" href="#">Terms of Service</a>
<a className="hover:underline" href="#">Returns</a>
</div>

<div className="p-6 md:p-8 flex flex-col gap-4">
<span className="text-neutral-500 uppercase text-xs tracking-widest mb-2">Social</span>
<a className="flex items-center gap-2 group" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i> Instagram
                </a>
<a className="flex items-center gap-2 group" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i> Twitter/X
                </a>
<a className="flex items-center gap-2 group" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i> LinkedIn
                </a>
</div>

<div className="p-6 md:p-8 flex flex-col justify-between gap-8">
<div className="w-12 h-12 border border-black flex items-center justify-center">
<i className="w-6 h-6" data-lucide="hammer"></i>
</div>
<p className="text-neutral-500 text-sm leading-relaxed">
                    Industrial craftsmanship specializing in bespoke metal structures and parametric facades.
                </p>
</div>
</div>
<div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center text-sm text-neutral-500 uppercase gap-4">
<p>© 2024 Pavol Zlatoš — Metal Design Studio</p>
<div className="flex gap-4">
<span>Bratislava, SK</span>
<span>—</span>
<span>Est. 2018</span>
</div>
</div>
</footer>


    </>
  );
}
