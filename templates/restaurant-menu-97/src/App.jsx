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
      

<header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex items-center gap-2">
<a className="text-2xl font-normal tracking-tight text-zinc-100 uppercase tracking-widest" href="#">Poort 9</a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-lg font-normal text-zinc-400 transition-colors hover:text-zinc-100" href="#menu">Menu</a>
<a className="text-lg font-normal text-zinc-400 transition-colors hover:text-zinc-100" href="#over">Over Ons</a>
<a className="text-lg font-normal text-zinc-400 transition-colors hover:text-zinc-100" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<button className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-lg font-normal text-zinc-100 transition-colors hover:bg-zinc-800 hover:border-zinc-700">
<i className="h-5 w-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span>€ 0,00</span>
</button>
</div>
</div>
</header>
<main>

<section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 -z-10"></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<div className="mx-auto max-w-3xl">
<span className="mb-6 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-lg font-normal text-zinc-300 shadow-sm backdrop-blur-sm">
<span className="mr-2 flex h-2 w-2 rounded-full bg-emerald-500"></span>
                        Nu open voor bestellingen
                    </span>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-zinc-100 mb-8 uppercase">
                        Vers bereid.<br/> Direct uit de poort.
                    </h1>
<p className="text-2xl md:text-3xl text-zinc-400 mb-12 font-light leading-relaxed tracking-tight">
                        Authentieke Italiaanse pizza's, knapperige sandwiches en meer. Bestel online voor afhalen of bezorgen.
                    </p>

<div className="flex items-center justify-center gap-4 mb-8">
<span className="text-xl font-normal text-zinc-100">Afhalen</span>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox" value=""/>
<div className="peer h-8 w-16 rounded-full bg-zinc-800 border border-zinc-700 after:absolute after:left-[4px] after:top-[4px] after:h-6 after:w-6 after:rounded-full after:bg-zinc-300 after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:border-orange-500 peer-checked:after:translate-x-full peer-checked:after:bg-white peer-focus:outline-none"></div>
</label>
<span className="text-xl font-normal text-zinc-500">Bezorgen</span>
</div>
</div>
</div>
</section>

<section className="pb-24" id="menu">
<div className="mx-auto max-w-7xl px-6 lg:px-8">

<div className="sticky top-16 z-40 mb-12 -mx-6 bg-zinc-950/90 px-6 py-4 backdrop-blur-md md:mx-0 md:px-0 border-b border-zinc-800/50">
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<a className="whitespace-nowrap rounded-full bg-zinc-900 border border-zinc-800 px-6 py-2.5 text-lg font-normal text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95" href="#pizzas">Pizza's</a>
<a className="whitespace-nowrap rounded-full bg-zinc-900 border border-zinc-800 px-6 py-2.5 text-lg font-normal text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95" href="#pastas">Pasta's</a>
<a className="whitespace-nowrap rounded-full bg-orange-500 px-6 py-2.5 text-lg font-normal text-white shadow-sm transition-transform active:scale-95" href="#sandwiches">Sandwiches</a>
<a className="whitespace-nowrap rounded-full bg-zinc-900 border border-zinc-800 px-6 py-2.5 text-lg font-normal text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95" href="#panini">Panini</a>
<a className="whitespace-nowrap rounded-full bg-zinc-900 border border-zinc-800 px-6 py-2.5 text-lg font-normal text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95" href="#snacks">Snacks</a>
<a className="whitespace-nowrap rounded-full bg-zinc-900 border border-zinc-800 px-6 py-2.5 text-lg font-normal text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white active:scale-95" href="#drinks">Dranken</a>
</div>
</div>

<div className="mb-24 scroll-mt-36" id="sandwiches">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-8 uppercase tracking-wider">Sandwiches</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Mexicano</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Knapperig broodje met een warme mexicano, afgewerkt met frisse groenten en saus naar keuze.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Martino</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Pittige klassieker met americain préparé, martinosaus, augurk, ui en mosterd op een vers broodje.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Préparé</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Vers broodje belegd met americain préparé, afgewerkt met ui, augurk en frisse groenten.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Kaas</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Vers broodje belegd met jonge, romige kaas en frisse groenten voor een eenvoudige maar heerlijke klassieker.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Ham en Kaas</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Vers broodje belegd met fijne ham en jonge kaas, aangevuld met knapperige groenten.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Kip Curry</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Vers broodje met kipcurry beleg en frisse groenten.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Tonijn</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Luchtige tonijnsalade op een vers broodje, afgewerkt met sla en verse groenten.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Salami</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Smaakvol broodje met gekruide salami, frisse groenten en saus naar keuze.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mb-24 scroll-mt-36" id="panini">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-8 uppercase tracking-wider">Panini</h2>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Ham &amp; Cheese</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Een krokante panini met malse ham, gesmolten kaas en een lichte mosterdsaus voor de perfecte balans van smaken.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Chicken Pesto</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Een warme panini gevuld met sappige kip, romige pesto en gesmolten kaas, een smaakvolle combinatie van hartig en kruidig.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Cheese</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Heerlijk smeltende kaaspanini met een knapperige goudbruine korst, perfect voor kaasliefhebbers.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Mozzarella</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 6,50</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Verse panini met romige mozzarella en sappige tomaat, warm gegrild voor een heerlijke, frisse smaak.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<div className="mb-3 flex items-start justify-between gap-4">
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 uppercase">Mexicano</h3>
<span className="shrink-0 text-xl font-normal text-orange-500">€ 8,00</span>
</div>
<p className="mb-8 text-lg text-zinc-400">Een pittige panini gevuld met gekruide vlees, gesmolten kaas en een vleugje jalapeño, voor wie van een beetje extra spice houdt.</p>
</div>
<div className="mt-auto flex justify-end">
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

<div className="scroll-mt-36" id="snacks">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-8 uppercase tracking-wider">Snacks</h2>
<div className="flex flex-col">
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Garlic Bread</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 5,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Cheesy Bread</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 5,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Cheesy Garlic Bread</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 5,50</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Ham &amp; Cheese Bread</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 6,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Oven Fries</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 4,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Potato Wedges</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 4,50</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Loaded Fries</span>
<span className="text-base text-zinc-500 uppercase">(Chicken Kebab)</span>
</div>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 8,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Hot Wings (12 + 4)</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 14,50</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Hot Wings (8 + 3)</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 10,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Hot Wings (4 + 2)</span>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 7,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Chickenitos</span>
<span className="text-base text-zinc-500 uppercase">(8 Stuks)</span>
</div>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 7,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Crunchy Chicken</span>
<span className="text-base text-zinc-500 uppercase">(6 Stuks)</span>
</div>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 8,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Chicken Nuggets</span>
<span className="text-base text-zinc-500 uppercase">(8 Stuks)</span>
</div>
<div className="flex items-center gap-6">
<span className="text-xl font-normal text-orange-500">€ 6,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col pr-8">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Chicken Box</span>
<span className="text-base text-zinc-500 uppercase">5 Kipvleugels, 5 Chickenitos en 5 Nuggets</span>
</div>
<div className="flex items-center gap-6 shrink-0">
<span className="text-xl font-normal text-orange-500">€ 14,00</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
<div className="flex items-center justify-between border-b border-zinc-800/50 py-4 last:border-0 hover:bg-zinc-900/30 px-3 -mx-3 rounded-lg transition-colors group cursor-pointer">
<div className="flex flex-col pr-8">
<span className="text-xl font-normal tracking-tight text-zinc-100 uppercase">Triple Box</span>
<span className="text-base text-zinc-500 uppercase">5 Kipvleugels, 5 Chickenitos en portie Potato Wedges</span>
</div>
<div className="flex items-center gap-6 shrink-0">
<span className="text-xl font-normal text-orange-500">€ 12,50</span>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 group-hover:border-zinc-600 group-hover:text-white transition-colors"><i className="h-5 w-5" data-lucide="plus" strokeWidth="1.5"></i></button>
</div>
</div>
</div>
</div>

<div className="scroll-mt-36" id="drinks">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">

<div>
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-8 uppercase tracking-wider">Drinks &amp; Desserts</h2>
<div className="flex flex-col text-lg">
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Coca-Cola</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Coca-Cola Zero</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Fanta</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Mirinda Orange</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Sprite</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Ice Tea</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Ice Tea Peach</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Tropico</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Plat Water</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">2.8</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Cécémel</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4</span>
</div>
</div>
</div>

<div>
<div className="h-12 hidden sm:block"></div> 
<div className="flex flex-col text-lg">
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Koffie</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">3.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">XL Koffie</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Thee</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">3.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Espresso</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">3.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Cappuccino</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Latté</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4.5</span>
</div>
<div className="mt-4 mb-2 h-px bg-zinc-800"></div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Tiramisu</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Appeltaart</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">6</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Chocolade Moes</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Wafel met Suiker</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Wafel met Chocosaus</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">6</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Wafel met Karamel</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">6</span>
</div>
</div>
</div>

<div className="col-span-1 sm:col-span-2 mt-8">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-8 uppercase tracking-wider">Wijn &amp; Bier</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
<div className="flex flex-col text-lg">
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Omer</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Ypra</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Leffe Blond</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Stella Artois</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">4.5</span>
</div>
</div>
<div className="flex flex-col text-lg">
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Glas Rood</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Glas Wit</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5.5</span>
</div>
<div className="flex items-center justify-between py-2 border-b border-zinc-800/30 last:border-0 group cursor-pointer hover:text-white transition-colors text-zinc-300">
<span className="font-normal uppercase">Glas Rosé</span>
<span className="font-normal text-orange-500 ml-4 group-hover:text-orange-400 transition-colors">5.5</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div className="mb-24 scroll-mt-36" id="pizzas">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-6 uppercase tracking-wider">Pizza's</h2>

<div className="mb-10 flex flex-wrap gap-4 border-b border-zinc-800 pb-6">
<div className="flex items-center gap-2">
<span className="text-base font-normal uppercase tracking-wider text-zinc-500">Small</span>
<span className="text-xl font-normal text-zinc-300">€ 12,50</span>
</div>
<div className="hidden h-6 w-px bg-zinc-800 sm:block"></div>
<div className="flex items-center gap-2">
<span className="text-base font-normal uppercase tracking-wider text-zinc-500">Medium</span>
<span className="text-xl font-normal text-zinc-300">€ 14,50</span>
</div>
<div className="hidden h-6 w-px bg-zinc-800 sm:block"></div>
<div className="flex items-center gap-2">
<span className="text-base font-normal uppercase tracking-wider text-zinc-500">Large</span>
<span className="text-xl font-normal text-zinc-300">€ 18,50</span>
</div>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Margherita</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">De ultieme klassieker met zachte mozzarella en aromatische oregano op een rijke basis van tomatensaus.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 12,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Funghi</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">Voor de liefhebber van puur natuur, rijkelijk belegd met verse champignons en een vleugje oregano.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 12,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Hawaiian</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">Een zoete en hartige klassieker, rijkelijk belegd met sappige ham en verse ananas.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 12,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>

<div className="mb-24 scroll-mt-36" id="pastas">
<h2 className="text-4xl font-normal tracking-tight text-orange-500 mb-6 uppercase tracking-wider">Pasta's</h2>

<div className="mb-10 flex flex-wrap gap-4 border-b border-zinc-800 pb-6">
<div className="flex items-center gap-2">
<span className="text-base font-normal uppercase tracking-wider text-zinc-500">Small</span>
<span className="text-xl font-normal text-zinc-300">€ 7,50</span>
</div>
<div className="hidden h-6 w-px bg-zinc-800 sm:block"></div>
<div className="flex items-center gap-2">
<span className="text-base font-normal uppercase tracking-wider text-zinc-500">Medium</span>
<span className="text-xl font-normal text-zinc-300">€ 9,50</span>
</div>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Chicken Curry</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">Een ambachtelijke pasta met een romige kerriesaus en sappige stukjes kip.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 7,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Carbonara</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">Romige pasta met krokante spek, ei, Parmezaanse kaas en een vleugje zwarte peper.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 7,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="group flex flex-col justify-between rounded-2xl border border-zinc-800/50 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/80">
<div>
<h3 className="mb-3 text-2xl font-normal tracking-tight text-zinc-100 uppercase">Bolognese</h3>
<p className="mb-8 text-lg leading-relaxed text-zinc-400">Een klassieke pasta met een smaakvolle Bolognese saus, gemaakt met gehakt, tomaten en kruiden.</p>
</div>
<div className="mt-auto flex items-center justify-between">
<span className="text-lg font-normal text-orange-500">Vanaf € 7,50</span>
<button className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white active:scale-95">
<i className="h-6 w-6" data-lucide="plus" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800 bg-zinc-950 pt-16 pb-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
<div>
<h3 className="text-3xl font-normal tracking-tight text-zinc-100 mb-6 uppercase tracking-widest">Poort 9</h3>
<p className="text-xl text-zinc-400 mb-6 font-light">Uw adres voor de lekkerste pizza's, pasta's en vers belegde sandwiches. Met liefde bereid.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-zinc-100 transition-colors" href="#">
<i className="h-6 w-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-zinc-100 transition-colors" href="#">
<i className="h-6 w-6" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-500 hover:text-zinc-100 transition-colors" href="#">
<i className="h-6 w-6" data-lucide="globe" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-xl font-normal text-zinc-100 mb-6 uppercase tracking-wider">Contact &amp; Locatie</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-xl text-zinc-400 font-light">
<i className="h-6 w-6 shrink-0 mt-0.5 text-zinc-500" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Menenstraat 9<br/>8900 Ieper</span>
</li>
<li className="flex items-center gap-3 text-xl text-zinc-400 font-light">
<i className="h-6 w-6 shrink-0 text-zinc-500" data-lucide="globe" strokeWidth="1.5"></i>
<span>www.poort9.be</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xl font-normal text-zinc-100 mb-6 uppercase tracking-wider">Openingstijden</h4>
<ul className="space-y-3 text-xl text-zinc-400 font-light">
<li className="flex justify-between">
<span>Ma - Vr</span>
<span>11:00 - 21:00</span>
</li>
<li className="flex justify-between">
<span>Zaterdag</span>
<span>12:00 - 22:00</span>
</li>
<li className="flex justify-between">
<span className="text-zinc-500">Zondag</span>
<span className="text-zinc-500">Gesloten</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-lg text-zinc-500 font-light">© 2024 Poort 9. Alle rechten voorbehouden.</p>
<div className="flex gap-6">
<a className="text-lg text-zinc-500 hover:text-zinc-300 font-light transition-colors" href="#">Privacybeleid</a>
<a className="text-lg text-zinc-500 hover:text-zinc-300 font-light transition-colors" href="#">Algemene Voorwaarden</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
