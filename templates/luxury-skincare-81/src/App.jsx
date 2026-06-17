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
      

<div className="bg-stone-900 text-stone-50 py-2 text-center text-xs font-medium tracking-wide">
        Doprava zdarma nad 1500 Kč — Odesíláme do 24 hodin
    </div>

<nav className="sticky top-0 z-50 w-full border-b border-stone-100 bg-white/80 backdrop-blur-md transition-all">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

<div className="flex lg:hidden">
<button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-stone-700" type="button">
<span className="sr-only">Otevřít menu</span>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 font-serif text-2xl tracking-tighter uppercase text-stone-900" href="#">
                    Lumière
                </a>
</div>

<div className="hidden lg:flex lg:gap-x-10">
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-stone-900 transition-colors" href="#">Péče o pleť</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-stone-900 transition-colors" href="#">Tělo</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-stone-900 transition-colors" href="#">Sady</a>
<a className="text-sm font-medium leading-6 text-stone-600 hover:text-stone-900 transition-colors" href="#">O nás</a>
</div>

<div className="flex flex-1 items-center justify-end gap-x-4">
<a className="group -m-2.5 p-2.5 text-stone-500 hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Hledat</span>
<iconify-icon height="22" icon="solar:magnifer-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
<a className="group -m-2.5 p-2.5 text-stone-500 hover:text-stone-900 transition-colors" href="#">
<span className="sr-only">Účet</span>
<iconify-icon height="22" icon="solar:user-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</a>
<a className="group -m-2.5 p-2.5 text-stone-500 hover:text-stone-900 transition-colors relative" href="#">
<span className="sr-only">Košík</span>
<iconify-icon height="22" icon="solar:bag-3-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="absolute top-2 right-1 h-2 w-2 rounded-full bg-stone-800"></span>
</a>
</div>
</div>
</nav>

<div className="relative isolate overflow-hidden">
<div className="sm:pb-32 lg:flex lg:px-8 lg:py-40 max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-24 pl-6">
<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
<div className="mt-24 sm:mt-32 lg:mt-16">
<a className="inline-flex space-x-6" href="#">
<span className="rounded-full bg-stone-200/50 px-3 py-1 text-xs font-medium leading-6 text-stone-600 ring-1 ring-inset ring-stone-900/10">Nová kolekce 2024</span>
</a>
</div>
<h1 className="mt-8 text-4xl font-normal tracking-tight text-stone-900 sm:text-6xl font-serif leading-[1.1]">
                    Objevte rituál <br/>
<span className="italic text-stone-500">věčné krásy.</span>
</h1>
<p className="mt-6 text-lg leading-8 text-stone-600 font-light">
                    Klinicky ověřená péče, která respektuje přirozenou rovnováhu vaší pleti. Veganské složení, udržitelné balení, viditelné výsledky.
                </p>
<div className="mt-10 flex items-center gap-x-6">
<a className="rounded-none bg-stone-900 px-8 py-3.5 text-sm font-medium text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all duration-300" href="#">
                        Nakupovat
                    </a>
<a className="text-sm font-medium leading-6 text-stone-900 flex items-center gap-2 group" href="#">
                        Náš příběh <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
<div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
<div className="-m-2 rounded-xl bg-stone-900/5 p-2 ring-1 ring-inset ring-stone-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
<img alt="Kosmetické produkty na mramoru" className="lg:w-[40rem] grayscale-[10%] opacity-95 w-[36rem] ring-stone-900/10 ring-1 rounded-md shadow-2xl" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white py-12 sm:py-16 border-y border-stone-100">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 text-center">
<div className="flex flex-col items-center gap-y-3">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-800">
<iconify-icon height="24" icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<dt className="text-sm font-medium leading-7 text-stone-900">100% Přírodní</dt>
<dd className="text-xs leading-6 text-stone-500 max-w-[12rem]">Bez parabenů, silikonů a syntetických vůní.</dd>
</div>
<div className="flex flex-col items-center gap-y-3">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-800">
<iconify-icon height="24" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<dt className="text-sm font-medium leading-7 text-stone-900">Cruelty Free</dt>
<dd className="text-xs leading-6 text-stone-500 max-w-[12rem]">Netestováno na zvířatech, certifikováno Leaping Bunny.</dd>
</div>
<div className="flex flex-col items-center gap-y-3">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-800">
<iconify-icon height="24" icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<dt className="text-sm font-medium leading-7 text-stone-900">Dermatologicky Testováno</dt>
<dd className="text-xs leading-6 text-stone-500 max-w-[12rem]">Bezpečné pro citlivou a reaktivní pleť.</dd>
</div>
<div className="flex flex-col items-center gap-y-3">
<div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-50 text-stone-800">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<dt className="text-sm font-medium leading-7 text-stone-900">Udržitelné balení</dt>
<dd className="text-xs leading-6 text-stone-500 max-w-[12rem]">Sklo a recyklovatelné materiály.</dd>
</div>
</div>
</div>
</div>

<div className="bg-[#FAFAF9] py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="md:flex md:items-center md:justify-between mb-10">
<h2 className="text-2xl font-normal tracking-tight text-stone-900 sm:text-3xl font-serif">Bestsellery</h2>
<a className="hidden text-sm font-medium text-stone-600 hover:text-stone-900 md:block decoration-stone-300 underline underline-offset-4" href="#">
                    Zobrazit vše
                </a>
</div>
<div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

<div className="group relative flex flex-col h-full">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 lg:aspect-none group-hover:opacity-90 transition-opacity lg:h-80 relative">
<img alt="Sérum" className="h-full w-full object-cover object-center lg:h-full lg:w-full mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-2 right-2">
<button className="p-2 rounded-full bg-white/60 hover:bg-white text-stone-900 transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-stone-800 font-medium">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Hydra-Glow Sérum
                                </a>
</h3>
<p className="mt-1 text-xs text-stone-500">Kyselina hyaluronová &amp; Vitamin C</p>
</div>
<p className="text-sm font-medium text-stone-900">1 290 Kč</p>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 lg:aspect-none group-hover:opacity-90 transition-opacity lg:h-80 relative">
<img alt="Cream" className="h-full w-full object-cover object-center lg:h-full lg:w-full mix-blend-multiply" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 right-2">
<button className="p-2 rounded-full bg-white/60 hover:bg-white text-stone-900 transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-stone-800 font-medium">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Noční Regenerační Krém
                                </a>
</h3>
<p className="mt-1 text-xs text-stone-500">Retinol &amp; Ceramidy</p>
</div>
<p className="text-sm font-medium text-stone-900">1 550 Kč</p>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 lg:aspect-none group-hover:opacity-90 transition-opacity lg:h-80 relative">
<img alt="Oil" className="h-full w-full object-cover object-center lg:h-full lg:w-full mix-blend-multiply" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center rounded-sm bg-white/80 backdrop-blur px-2 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-600/10">Bestseller</span>
</div>
<div className="absolute top-2 right-2">
<button className="p-2 rounded-full bg-white/60 hover:bg-white text-stone-900 transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-stone-800 font-medium">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Zlatý Obličejový Olej
                                </a>
</h3>
<p className="mt-1 text-xs text-stone-500">Šípkový olej &amp; Argan</p>
</div>
<p className="text-sm font-medium text-stone-900">990 Kč</p>
</div>
</div>

<div className="group relative flex flex-col h-full">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm bg-stone-100 lg:aspect-none group-hover:opacity-90 transition-opacity lg:h-80 relative">
<img alt="Cleanser" className="h-full w-full object-cover object-center lg:h-full lg:w-full mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-2 right-2">
<button className="p-2 rounded-full bg-white/60 hover:bg-white text-stone-900 transition-colors backdrop-blur-sm">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="mt-4 flex justify-between">
<div>
<h3 className="text-sm text-stone-800 font-medium">
<a href="#">
<span aria-hidden="true" className="absolute inset-0"></span>
                                    Jemný Čistící Gel
                                </a>
</h3>
<p className="mt-1 text-xs text-stone-500">Aloe Vera &amp; Zelený čaj</p>
</div>
<p className="text-sm font-medium text-stone-900">650 Kč</p>
</div>
</div>
</div>
<div className="mt-10 md:hidden">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#">
                    Zobrazit vše
                    <span aria-hidden="true"> →</span>
</a>
</div>
</div>
</div>

<section className="relative bg-stone-900 py-24 sm:py-32">
<div className="absolute inset-0 overflow-hidden">
<img alt="Woman skincare" className="h-full w-full object-cover object-center opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
<h2 className="text-3xl font-normal tracking-tight text-white sm:text-5xl font-serif">Kolekce Anti-Age</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-stone-300">
                Pomalé stárnutí s grácií. Vysoce účinné ingredience, které vyhlazují, zpevňují a navrací pleti mladistvou jiskru.
            </p>
<div className="mt-10 flex justify-center gap-x-6">
<a className="rounded-none bg-white px-8 py-3.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors" href="#">
                    Prozkoumat kolekci
                </a>
</div>
</div>
</section>

<div className="py-24 bg-white">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<div className="rounded-xl bg-stone-50 p-8 sm:p-12 border border-stone-100 text-center">
<iconify-icon className="text-stone-400 mb-4" icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-2xl font-serif text-stone-900 mb-2">Nevíte, co vaše pleť potřebuje?</h3>
<p className="text-stone-500 mb-8 text-sm leading-6">Udělejte si náš 2minutový test a sestavíme vám rutinu na míru.</p>

<div className="text-left max-w-sm mx-auto space-y-4">
<div className="space-y-3">
<label className="text-xs font-medium text-stone-900 uppercase tracking-wide">Typ pleti</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded-sm flex items-center justify-center mr-3 peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Suchá a citlivá</span>
</label>
<label className="custom-checkbox flex items-center cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded-sm flex items-center justify-center mr-3 peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all">
<svg className="w-3 h-3 text-white hidden pointer-events-none" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Smíšená se sklonem k lesku</span>
</label>
</div>
<button className="w-full mt-6 bg-stone-900 text-white py-3 text-sm font-medium hover:bg-stone-800 transition-colors">
                        Spustit diagnostiku
                    </button>
</div>
</div>
</div>
</div>

<div className="bg-[#FAFAF9] py-24 sm:py-32 border-t border-stone-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
<img alt="Company Logo" className="h-8 self-start" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{filter: 'grayscale(1)', height: '1.5rem'}}/>

<figure className="mt-10 flex flex-auto flex-col justify-between">
<blockquote className="text-xl leading-8 text-stone-900 font-serif italic">
                            “Konečně kosmetika, která plní to, co slibuje. Moje pleť je po měsíci používání hydratační řady jasnější, pružnější a pigmentové skvrny ustupují. Naprostá závislost.”
                        </blockquote>
<figcaption className="mt-10 flex items-center gap-x-6">
<div className="text-sm leading-6">
<div className="font-semibold text-stone-900">Tereza Nováková</div>
<div className="text-stone-500">Ověřený zákazník, 38 let</div>
</div>
</figcaption>
</figure>
</div>
<div className="flex flex-col border-t border-stone-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
<figure className="mt-10 flex flex-auto flex-col justify-between">
<blockquote className="text-xl leading-8 text-stone-900 font-serif italic">
                            “Líbí se mi filosofie značky. Žádné agresivní chemikálie, jen čistá příroda podpořená vědou. Balení je nádherné a krém voní jako lázně.”
                        </blockquote>
<figcaption className="mt-10 flex items-center gap-x-6">
<div className="text-sm leading-6">
<div className="font-semibold text-stone-900">Jana Poláková</div>
<div className="text-stone-500">Ověřený zákazník, 45 let</div>
</div>
</figcaption>
</figure>
</div>
</div>
</div>
</div>

<div className="bg-white py-16 sm:py-24">
<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
<div className="relative isolate overflow-hidden bg-stone-900 px-6 py-24 sm:rounded-none lg:rounded-2xl sm:px-24 xl:py-32">
<h2 className="mx-auto max-w-2xl text-center text-3xl font-serif font-normal tracking-tight text-white sm:text-4xl">
                    Připojte se do klubu Lumière
                </h2>
<p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-stone-300 font-light">
                    Získejte 10% slevu na první nákup a přístup k exkluzivním nabídkám pouze pro členy.
                </p>
<form className="mx-auto mt-10 flex max-w-md gap-x-4">
<label className="sr-only" htmlFor="email-address">Emailová adresa</label>
<input autocomplete="email" className="min-w-0 flex-auto rounded-none border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder:text-stone-400" id="email-address" name="email" placeholder="Váš email" required="" type="email"/>
<button className="flex-none rounded-none bg-white px-3.5 py-2.5 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors" type="submit">
                        Odebírat
                    </button>
</form>
</div>
</div>
</div>

<footer aria-labelledby="footer-heading" className="bg-white border-t border-stone-200">
<h2 className="sr-only" id="footer-heading">Patička</h2>
<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
<div className="xl:grid xl:grid-cols-3 xl:gap-8">
<div className="space-y-8">
<span className="font-serif text-2xl tracking-tighter uppercase text-stone-900">Lumière</span>
<p className="text-sm leading-6 text-stone-500 max-w-xs">
                        Vědecky podložená péče o pleť pro ženy, které chtějí stárnout s grácií. Vyrobeno v ČR.
                    </p>
<div className="flex space-x-6">
<a className="text-stone-400 hover:text-stone-500" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-500" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-stone-900">Obchod</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Pleť</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Tělo</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Sady</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Dárkové karty</a></li>
</ul>
</div>
<div className="mt-10 md:mt-0">
<h3 className="text-sm font-semibold leading-6 text-stone-900">Podpora</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Doprava &amp; Vrácení</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">FAQ</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Kontakt</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Sledování zásilky</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-2 md:gap-8">
<div>
<h3 className="text-sm font-semibold leading-6 text-stone-900">O nás</h3>
<ul className="mt-6 space-y-4" role="list">
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Náš příběh</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Udržitelnost</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Kariéra</a></li>
<li><a className="text-sm leading-6 text-stone-600 hover:text-stone-900" href="#">Blog</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-16 border-t border-stone-900/10 pt-8 sm:mt-20 lg:mt-24">
<p className="text-xs leading-5 text-stone-500">© 2024 Lumière Cosmetics s.r.o. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>

    </>
  );
}
