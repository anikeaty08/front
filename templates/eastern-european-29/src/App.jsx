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
      

<nav className="fixed flex text-white mix-blend-difference w-full z-50 pt-4 pr-6 pb-4 pl-6 top-0 items-center justify-between">
<div className="text-lg font-medium tracking-tight">BABA YAGA</div>
<div className="flex gap-6 text-sm font-light">
<a className="hover:underline" href="#">Menu</a>
<a className="hover:underline" href="#">Reservations</a>
<a className="hover:underline" href="#">Info</a>
</div>
<svg className="lucide lucide-utensils w-6 h-6" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
</nav>

<header className="min-h-screen flex flex-col overflow-hidden bg-[#fcfcfc] w-full pt-20 pb-10 relative items-center">

<div className="handwritten z-20 text-2xl text-[#005c28] absolute top-12 -rotate-6">
            authentic soul food
        </div>

<div className="absolute right-8 top-1/3 text-[#005c28] handwritten text-xl rotate-12 z-20 hidden md:block">
            scrollez! 
            <svg className="lucide lucide-arrow-down inline-block w-6 h-6 mt-2" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>

<div className="relative w-full flex flex-col items-center leading-[0.75] select-none pointer-events-none text-[#005c28] z-0">

<div className="w-full text-center text-[22vw] md:text-[18vw] uppercase tracking-tighter font-stretch-extreme -mt-4 md:-mt-10">
                Baba<span className="hidden md:inline">Yaga</span>
</div>
<div className="w-full text-center text-[22vw] md:text-[18vw] uppercase tracking-tighter font-stretch-extreme -mt-4 md:-mt-10">
                Baba<span className="hidden md:inline">Yaga</span>
</div>
<div className="w-full text-center text-[22vw] md:text-[18vw] uppercase tracking-tighter font-stretch-extreme -mt-4 md:-mt-10">
                Baba<span className="hidden md:inline">Yaga</span>
</div>
</div>

<div className="-translate-x-1/2 -translate-y-1/2 md:w-96 md:h-96 flex bg-[#ff4015] w-64 h-64 z-10 absolute top-1/2 left-1/2 shadow-xl rotate-45 items-center justify-center">
<div className="-rotate-45 text-center text-white">
<p className="handwritten text-xl md:text-2xl mb-2 text-[#ebf57c]">Est. 2024</p>
<h2 className="display-font md:text-8xl leading-none text-6xl tracking-tighter font-stretch" style={{}}>LIVE MUSIC EVERY DAY</h2>
<p className="font-inter text-lg md:text-xl mt-4 font-medium">12:00 — 23:00</p>
</div>
</div>
</header>

<section className="relative bg-[#ebf57c] pt-24 pb-32 px-4 md:px-12 border-t-2 border-[#005c28]">

<div className="relative mb-20 text-center">
<h2 className="absolute left-1/2 -translate-x-1/2 top-1 text-[#005c28] opacity-30 text-7xl md:text-9xl font-stretch display-font tracking-tighter uppercase w-full">Zakuski</h2>
<h2 className="relative z-10 text-[#005c28] text-7xl md:text-9xl font-stretch display-font tracking-tighter uppercase">Zakuski</h2>
<p className="relative z-10 mt-4 text-[#005c28] text-xl font-normal max-w-md mx-auto">Small bites to start the conversation.</p>
</div>

<div className="max-w-4xl mx-auto space-y-12">

<article className="bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,92,40,1)] border-2 border-[#005c28]">
<div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-6">
<div className="flex items-center gap-2">
<span className="font-medium text-lg">Pickled Herring &amp; Onions</span>
<svg className="lucide lucide-fish w-4 h-4 text-gray-400" data-lucide="fish" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"></path><path d="M18 12v.5"></path><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"></path><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"></path><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"></path><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"></path></svg>
</div>
<span className="font-mono text-lg font-medium">12€</span>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Herring" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-between">
<p className="text-xl font-light leading-relaxed text-gray-800">
                            Baltic herring fillets marinated in vinegar, served with red onion rings, fresh dill, and warm dark rye bread. A classic start to the meal.
                        </p>
<div className="mt-6 flex gap-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
<span className="">→ Gluten Free Option</span>
<span>→ Sustainable Catch</span>
</div>
</div>
</div>
</article>

<article className="bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,92,40,1)] border-2 border-[#005c28]">
<div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-6">
<div className="flex items-center gap-2">
<span className="font-medium text-lg">Salo on Rye</span>
<svg className="lucide lucide-wheat w-4 h-4 text-gray-400" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
</div>
<span className="font-mono text-lg font-medium">9€</span>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Salo" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-between">
<p className="text-xl font-light leading-relaxed text-gray-800">
                            Thinly sliced cured pork fatback served on crispy garlic-rubbed rye toast with mustard and a shot of cold vodka brine.
                        </p>
<div className="mt-6 flex gap-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
<span>→ Traditional</span>
<span>→ Spicy Mustard</span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="relative bg-[#ffa39e] pt-24 pb-32 px-4 md:px-12 border-t-2 border-[#005c28]">

<div className="relative mb-20 text-center">
<h2 className="absolute left-1/2 -translate-x-1/2 top-1 text-[#005c28] opacity-20 text-7xl md:text-9xl font-stretch display-font tracking-tighter uppercase w-full">Glavnoye</h2>
<h2 className="relative z-10 text-[#005c28] text-7xl md:text-9xl font-stretch display-font tracking-tighter uppercase">Glavnoye</h2>
<p className="relative z-10 mt-4 text-[#005c28] text-xl font-normal max-w-md mx-auto">Hearty dishes from the motherland.</p>
</div>
<div className="max-w-4xl mx-auto space-y-12">

<article className="bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,92,40,1)] border-2 border-[#005c28]">
<div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-6">
<div className="flex items-center gap-2">
<span className="font-medium text-lg">Classic Borscht</span>
<svg className="lucide lucide-soup w-4 h-4 text-gray-400" data-lucide="soup" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"></path><path d="M7 21h10"></path><path d="M19.5 12 22 6"></path><path d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"></path><path d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"></path><path d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"></path></svg>
</div>
<span className="font-mono text-lg font-medium">16€</span>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Borscht" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1550259114-ad7188f0a967?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-between">
<p className="text-xl font-light leading-relaxed text-gray-800">
                            Deep red beetroot soup simmered with beef broth, cabbage, potatoes, and carrots. Served with a generous dollop of smetana (sour cream) and pampushki (garlic buns).
                        </p>
<div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
<span className="">→ Vegetarian Option Available</span>
<span>→ Family Recipe</span>
</div>
</div>
</div>
</article>

<article className="bg-white p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,92,40,1)] border-2 border-[#005c28]">
<div className="flex justify-between items-baseline border-b border-gray-200 pb-3 mb-6">
<div className="flex items-center gap-2">
<span className="font-medium text-lg">Siberian Pelmeni</span>
<svg className="lucide lucide-circle-dot w-4 h-4 text-gray-400" data-lucide="circle-dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</div>
<span className="font-mono text-lg font-medium">18€</span>
</div>
<div className="flex flex-col md:flex-row gap-8">
<div className="w-full md:w-1/3 aspect-[4/3] bg-gray-100 overflow-hidden border border-gray-200">
<img alt="Pelmeni" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-between">
<p className="text-xl font-light leading-relaxed text-gray-800">
                            Hand-wrapped dumplings filled with a mixture of minced beef and pork. Served boiled with butter and vinegar, or fried with caramelized onions.
                        </p>
<div className="mt-6 flex gap-4 text-sm text-gray-500 font-medium uppercase tracking-wide">
<span className="">→ Handmade Daily</span>
<span>→ 15 Pieces</span>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="md:px-12 text-[#ebf57c] bg-[#005c28] border-[#ebf57c] border-t-2 pt-24 pr-4 pb-12 pl-4 relative">
<div className="relative mb-16 text-center">
<h2 className="md:text-9xl display-font uppercase text-7xl text-[#ebf57c] tracking-tighter font-stretch">Napitki</h2>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
<div className="border-[#ebf57c] border pt-6 pr-6 pb-6 pl-6">
<h3 className="text-4xl tracking-tight font-stretch mb-4">VODKA</h3>
<ul className="space-y-4 text-sm font-light">
<li className="flex justify-between"><span className="">Beluga Noble</span> <span className="">8€</span></li>
<li className="flex justify-between"><span>Russian Standard</span> <span className="">6€</span></li>
<li className="flex justify-between"><span>Horseradish Infusion</span> <span>5€</span></li>
</ul>
</div>
<div className="border-[#ebf57c] border pt-6 pr-6 pb-6 pl-6">
<h3 className="font-stretch text-4xl mb-4 tracking-tight">WINE</h3>
<ul className="space-y-4 text-sm font-light">
<li className="flex justify-between"><span>Georgian Saperavi</span> <span>9€</span></li>
<li className="flex justify-between"><span>Moldovan Cabernet</span> <span>8€</span></li>
<li className="flex justify-between"><span>Crimean Sparkling</span> <span>7€</span></li>
</ul>
</div>
</div>
<footer className="flex flex-col md:flex-row justify-between items-end border-t border-[#ebf57c] pt-8">
<div className="font-stretch text-6xl md:text-8xl leading-none tracking-tighter mb-8 md:mb-0">
      BABAYAGA
    </div>
<div className="text-right font-light text-lg">
<p>Krakowska 42, Warsaw</p>
<p>+48 22 123 4567</p>
<div className="flex gap-4 justify-end mt-4">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</div>
</div>
</footer>
</section>


    </>
  );
}
