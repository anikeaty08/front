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
      

<header className="w-full bg-white relative z-50">
<div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

<div className="flex items-center gap-3">
<div className="grid grid-cols-2 gap-1 text-[#EAB308]">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="solar" data-solar="round-graph-linear" height="16" strokeWidth="2" style={{color: 'rgb(234, 179, 8)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#eab308" strokeLinecap="round" strokeWidth="1.5"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12a9.97 9.97 0 0 1 3-7.141"></path><path d="M5 12a7 7 0 1 0 7-7"></path><path d="M12 16a4 4 0 0 0 0-8"></path></g></svg>
<iconify-icon className="" height="16" icon="solar:sticker-square-outline" strokeWidth="1.5" style={{color: 'rgb(234, 179, 8)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:menu-dots-circle-outline" strokeWidth="1.5" style={{color: 'rgb(234, 179, 8)'}} width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:hamburger-menu-outline" strokeWidth="1.5" style={{color: 'rgb(234, 179, 8)'}} width="16"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight text-[#4A3219] leading-none">ZESTE</span>
<span className="text-[10px] font-medium tracking-[0.2em] text-[#4A3219]/60 uppercase mt-1">Pâtisserie Artisanale</span>
</div>
</div>

<div className="flex items-center gap-6">
<div className="hidden md:flex items-center gap-2 rounded-full border border-[#4A3219]/20 px-5 py-2.5">
<div className="bg-[#EAB308] p-1.5 rounded-full text-[#4A3219] flex items-center justify-center">
<iconify-icon height="16" icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-base font-medium text-[#4A3219]">APPEL: +33 1 23 45 67 89</span>
</div>
<button className="hover:bg-[#D9A006] transition-colors text-base font-medium text-[#4A3219] bg-[#EAB308] rounded-full pt-2.5 pr-8 pb-2.5 pl-8">APPELEZ MAINTENANT</button>
<button className="text-[#EAB308] hover:text-[#D9A006] transition-colors flex items-center justify-center">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="">

<div className="relative bg-white pt-12 pb-8">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center">

<div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start pt-10 lg:pt-0">
<div className="relative w-full max-w-lg">

<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-[#4A3219] bg-[#4A3219] aspect-[4/3] rotate-[-2deg]">
<img alt="Gâteau au Citron" className="opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb0c7657-e523-4679-a4e9-22c9f072e9fd_1600w.png"/>
</div>

<div className="absolute bottom-4 -right-4 h-16 w-16 z-20 drop-shadow-lg">
</div>
</div>
</div>

<div className="w-full lg:w-1/2 mt-20 lg:mt-0 lg:pl-16 relative">

<div className="relative inline-block mb-6">
<span className="font-cursive text-6xl tracking-tight text-[#EAB308] block -mb-4 relative z-10 ml-2">Gâteau</span>
<h1 className="text-7xl lg:text-8xl font-semibold tracking-tight text-[#4A3219] uppercase">Au Citron</h1>

<div className="absolute -top-12 -right-20 lg:-right-32 flex h-32 w-32 items-center justify-center rounded-full bg-[#EAB308] text-[#4A3219] shadow-xl z-20 before:absolute before:inset-2 before:rounded-full before:border-2 before:border-dashed before:border-[#4A3219]/30">
<div className="flex flex-col items-center justify-center relative z-10">
<span className="text-sm font-medium uppercase tracking-widest mb-1 text-[#4A3219]/80">Prix</span>
<span className="leading-none text-4xl font-semibold tracking-tight">27€</span>
<span className="text-lg text-[#4A3219]/60 line-through mt-1">38€</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 mb-8">
<div className="flex gap-1 text-[#EAB308]">
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon height="24" icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon className="" height="24" icon="solar:star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-xl font-semibold text-[#4A3219]">4.8</span>
<a className="text-base text-[#4A3219]/50 underline underline-offset-4 hover:text-[#EAB308] transition-colors" href="#">843 Avis</a>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.08)] max-w-lg mb-10 border border-[#4A3219]/5">
<p className="text-lg leading-relaxed text-[#4A3219]/80">
                            Moelleux, délicatement acidulé et généreux. Notre gâteau au citron signature est préparé à la main avec des citrons de Menton, offrant un équilibre parfait entre la douceur de la pâte et la fraîcheur intense des zestes.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-4">
<button className="rounded-full bg-[#EAB308] px-8 py-3.5 text-base font-medium text-[#4A3219] shadow-md hover:bg-[#D9A006] transition-all">
                            COMMANDER
                        </button>
<button className="rounded-full border-2 border-[#4A3219] px-8 py-3 text-base font-medium text-[#4A3219] hover:bg-[#4A3219] hover:text-white transition-all">
                            DÉCOUVRIR
                        </button>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden leading-none z-10 relative -mt-1">
<svg className="w-full h-auto text-[#FFF8E7] fill-current bg-white block" viewbox="0 0 1440 180">
<path className="" d="M0,128L80,133.3C160,139,320,149,480,138.7C640,128,800,96,960,96C1120,96,1280,128,1360,144L1440,160L1440,180L1360,180C1280,180,1120,180,960,180C800,180,640,180,480,180C320,180,160,180,80,180L0,180Z"></path>
</svg>
</div>

<div className="bg-[#FFF8E7] pt-16 pb-32 px-6 lg:px-8 relative z-0">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-8 pt-20">

<button className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A3219]/40 shadow-md hover:text-[#EAB308] transition-colors z-20">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="relative w-full max-w-[320px] mt-24 lg:mt-0">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-48 z-10">
<div className="h-full w-full rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white transform rotate-[-3deg]">
<img alt="Tartelette Meringuée" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe2bc54e-7a34-41de-b485-5e28668ce144_800w.png"/>
</div>
</div>
<div className="absolute -top-10 -right-4 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-lg border border-[#4A3219]/10">
<span className="text-[10px] font-medium text-[#4A3219]/50 uppercase tracking-wider mb-0.5">Prix</span>
<span className="leading-none text-2xl font-semibold text-[#4A3219] tracking-tight">3€</span>
<span className="text-sm text-[#4A3219]/40 line-through mt-0.5">8€</span>
</div>
<div className="bg-[#4A3219] rounded-[2.5rem] pt-32 pb-8 px-8 text-white flex flex-col shadow-lg">
<span className="font-cursive text-4xl mb-1 text-[#EAB308]">Tartelette</span>
<h3 className="text-4xl font-semibold tracking-tight mb-4">Citron</h3>
<div className="flex items-center gap-2 mb-6 bg-white/10 w-fit px-3 py-1.5 rounded-full">
<div className="flex gap-0.5 text-[#EAB308]">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-base font-medium ml-1">4.6</span>
</div>
<p className="text-lg leading-relaxed text-white/80 mb-8 line-clamp-3">
                                Une pâte sablée croustillante garnie d'un crémeux au citron onctueux et recouverte d'une meringue italienne dorée au chalumeau...
                            </p>
<button className="rounded-full bg-[#EAB308] px-6 py-3 text-base font-medium text-[#4A3219] w-fit hover:bg-[#D9A006] transition-colors">
                                COMMANDER
                            </button>
</div>
</div>

<div className="relative w-full max-w-[320px] mt-32 lg:mt-0">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-48 z-10">
<div className="h-full w-full rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white transform rotate-[2deg]">
<img alt="Cake Citron Pavot" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae524db8-6432-4f74-b3f3-eabe4a590d9a_800w.png"/>
</div>
</div>
<div className="absolute -top-10 -right-4 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-lg border border-[#4A3219]/10">
<span className="text-[10px] font-medium text-[#4A3219]/50 uppercase tracking-wider mb-0.5">Prix</span>
<span className="leading-none text-2xl font-semibold text-[#EAB308] tracking-tight">27€</span>
<span className="text-sm text-[#4A3219]/40 line-through mt-0.5">22€</span>
</div>
<div className="bg-[#EAB308] rounded-[2.5rem] pt-32 pb-8 px-8 text-[#4A3219] flex flex-col shadow-lg">
<span className="font-cursive text-4xl mb-1 text-[#4A3219]">Cake</span>
<h3 className="text-4xl font-semibold tracking-tight mb-4">Fondant</h3>
<div className="flex items-center gap-2 mb-6 bg-[#4A3219]/10 w-fit px-3 py-1.5 rounded-full">
<div className="flex gap-0.5 text-[#4A3219]">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-base font-medium ml-1">5.0</span>
</div>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-8 line-clamp-3">
                                L'incontournable de nos goûters. Un cake ultra moelleux aux graines de pavot, généreusement imbibé de sirop au citron jaune...
                            </p>
<button className="rounded-full bg-[#4A3219] px-6 py-3 text-base font-medium text-[#EAB308] w-fit hover:bg-[#362615] transition-colors">
                                COMMANDER
                            </button>
</div>
</div>

<div className="relative w-full max-w-[320px] mt-32 lg:mt-0">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-48 z-10">
<div className="h-full w-full rounded-3xl overflow-hidden border-8 border-white shadow-xl bg-white transform rotate-[-1deg]">
<img alt="Macarons Citron" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7069ce29-3a7e-4b6b-8635-214932102485_800w.png"/>
</div>
</div>
<div className="absolute -top-10 -right-4 z-20 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white shadow-lg border border-[#4A3219]/10">
<span className="text-[10px] font-medium text-[#4A3219]/50 uppercase tracking-wider mb-0.5">Prix</span>
<span className="leading-none text-2xl font-semibold text-[#4A3219] tracking-tight">25€</span>
<span className="text-sm text-[#4A3219]/40 line-through mt-0.5">15€</span>
</div>
<div className="bg-[#4A3219] rounded-[2.5rem] pt-32 pb-8 px-8 text-white flex flex-col shadow-lg">
<span className="font-cursive text-4xl mb-1 text-[#EAB308]">Macaron</span>
<h3 className="text-4xl font-semibold tracking-tight mb-4">Meringué</h3>
<div className="flex items-center gap-2 mb-6 bg-white/10 w-fit px-3 py-1.5 rounded-full">
<div className="flex gap-0.5 text-[#EAB308]">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-base font-medium ml-1">4.4</span>
</div>
<p className="text-lg leading-relaxed text-white/80 mb-8 line-clamp-3">
                                Coffret de 6 macarons fondants au cœur intense de citron confit, coque craquante aux éclats d'amandes douces...
                            </p>
<button className="rounded-full bg-[#EAB308] px-6 py-3 text-base font-medium text-[#4A3219] w-fit hover:bg-[#D9A006] transition-colors">
                                COMMANDER
                            </button>
</div>
</div>

<button className="hidden lg:flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#4A3219]/40 shadow-md hover:text-[#EAB308] transition-colors z-20">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<section className="bg-white pt-24 pb-16 px-6 lg:px-8 relative z-10 -mt-8 rounded-t-[3rem] border-t border-[#4A3219]/5 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
<div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 relative">
<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 bg-[#4A3219]">
<img alt="Chef Pâtissier" className="aspect-[4/3] opacity-90 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f2ad61c-628a-4653-a10d-25be9be1579b_1600w.png"/>
</div>

<div className="absolute -bottom-8 -right-8 h-48 w-48 bg-[#EAB308]/20 rounded-full blur-2xl -z-10"></div>
<div className="absolute -top-8 -left-8 h-48 w-48 bg-[#4A3219]/10 rounded-full blur-2xl -z-10"></div>
</div>

<div className="w-full lg:w-1/2">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-2">Héritage</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#4A3219] uppercase mb-8">Notre Histoire</h2>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-6">
                        Ancrée au cœur de la passion pâtissière, la maison Zeste a commencé avec une vision simple : sublimer l'agrume le plus noble pour en révéler toutes les facettes gourmandes. Depuis 2010, nous travaillons des recettes familiales secrètes transmises de génération en génération.
                    </p>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-10">
                        Chaque création est un hommage à notre héritage, confectionnée avec des ingrédients locaux minutieusement sélectionnés, des citrons gorgés de soleil et des méthodes artisanales. Découvrez l'essence même de la pâtisserie française dans chaque bouchée.
                    </p>
<div className="flex items-center gap-5 p-4 rounded-2xl bg-[#FFF8E7] border border-[#4A3219]/5 w-fit">
<img alt="Fondateur" className="w-16 h-16 object-cover border-white border-2 rounded-full shadow-sm" src="https://images.unsplash.com/photo-1694837493970-c197b6fdc62a?w=320&amp;q=80"/>
<div className="">
<h4 className="text-lg font-semibold text-[#4A3219]">Amira </h4>
<span className="text-xs font-medium text-[#4A3219]/60 uppercase tracking-[0.15em]">Fondateur &amp; Chef Pâtissier</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pb-24 px-6 lg:px-8">
<div className="mx-auto max-w-7xl">

<div className="text-center mb-16">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-1">Découvrir</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#4A3219] uppercase">Notre Galerie</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[280px]">

<div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-md border border-[#4A3219]/5">
<img alt="Création Citronnée" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fc376dc-e616-473b-877e-84bab921841c_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#4A3219]/20 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative rounded-3xl overflow-hidden group shadow-md border border-[#4A3219]/5">
<img alt="Préparation Artisanale" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8833cb27-6cb8-4811-a92f-5215c974788a_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#4A3219]/20 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative rounded-3xl overflow-hidden group shadow-md border border-[#4A3219]/5">
<img alt="Pâtisseries Fraîches" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0249fd35-2a20-431b-bc4f-dfe80b9445e8_800w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#4A3219]/20 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="col-span-2 relative rounded-3xl overflow-hidden group shadow-md border border-[#4A3219]/5">
<img alt="Boutique Zeste" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06bbe809-a1c5-470f-bece-067d9dfa701e_1600w.png"/>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-[#4A3219]/20 opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#FFF8E7] py-24 px-6 lg:px-8 border-t border-[#4A3219]/5">
<div className="mx-auto max-w-7xl">

<div className="text-center mb-16">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-1">Avis</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#4A3219] uppercase">Clients</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#4A3219]/5 hover:-translate-y-1 transition-transform duration-300">
<div className="flex gap-1 text-[#EAB308] mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-8 italic">
                            "Le meilleur gâteau au citron que j'ai jamais goûté ! La texture était incroyablement moelleuse et l'acidité parfaitement balancée. Une vraie expérience artisanale."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Utilisateur" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-base font-semibold text-[#4A3219]">Julien Dubois</h4>
<span className="text-sm font-medium text-[#4A3219]/50">Critique Culinaire</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#4A3219]/5 hover:-translate-y-1 transition-transform duration-300">
<div className="flex gap-1 text-[#EAB308] mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-8 italic">
                            "J'ai adoré les tartelettes au citron meringuées. L'ambiance de la boutique et l'accueil en font mon adresse incontournable pour les goûters du dimanche."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Utilisateur" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-base font-semibold text-[#4A3219]">Chloé Martin</h4>
<span className="text-sm font-medium text-[#4A3219]/50">Guide Locale</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#4A3219]/5 hover:-translate-y-1 transition-transform duration-300">
<div className="flex gap-1 text-[#EAB308] mb-6">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg leading-relaxed text-[#4A3219]/80 mb-8 italic">
                            "Le cake fondant est si frais et gourmand ! J'en commande au moins une fois par semaine. L'emballage est toujours soigné et parfait pour offrir."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Utilisateur" className="w-12 h-12 rounded-full object-cover shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-base font-semibold text-[#4A3219]">Thomas Leroy</h4>
<span className="text-sm font-medium text-[#4A3219]/50">Client Fidèle</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-6 lg:px-8 border-t border-[#4A3219]/5">
<div className="mx-auto max-w-7xl">

<div className="text-center mb-16">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-1">Pratique</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#4A3219] uppercase">Livraison &amp; Retrait</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-[#FFF8E7] rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#4A3219]/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-[#EAB308] mb-8 shadow-sm">
<iconify-icon height="40" icon="solar:map-point-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#4A3219] mb-4">Livraison à Domicile</h3>
<p className="text-lg text-[#4A3219]/80 leading-relaxed mb-2">
                            Recevez nos créations directement chez vous.
                        </p>
<span className="inline-block px-4 py-2 bg-[#EAB308]/20 text-[#4A3219] font-medium rounded-full text-sm mt-2">
                            Uniquement Paris &amp; Île-de-France
                        </span>
</div>

<div className="bg-[#FFF8E7] rounded-3xl p-8 md:p-10 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#4A3219]/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
<div className="h-20 w-20 bg-white rounded-full flex items-center justify-center text-[#EAB308] mb-8 shadow-sm">
<iconify-icon height="40" icon="solar:shop-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#4A3219] mb-4">Retrait sur Place</h3>
<p className="text-lg text-[#4A3219]/80 leading-relaxed mb-2">
                            Passez commande et récupérez-la en boutique.
                        </p>
<span className="inline-block px-4 py-2 bg-[#EAB308]/20 text-[#4A3219] font-medium rounded-full text-sm mt-2">
                            Sans frais supplémentaires
                        </span>
</div>
</div>

<div className="mt-16 flex flex-col items-center justify-center text-center">
<p className="text-lg text-[#4A3219]/80 mb-6 font-medium">Pour toute commande, contactez-nous directement :</p>
<button className="flex items-center gap-3 rounded-full bg-[#EAB308] px-8 py-4 text-lg font-medium text-[#4A3219] shadow-lg hover:bg-[#D9A006] hover:scale-105 transition-all duration-300">
<iconify-icon height="28" icon="mdi:whatsapp" width="28"></iconify-icon>
                        COMMANDER VIA WHATSAPP
                    </button>
</div>
</div>
</section>

<section className="bg-[#4A3219] py-24 px-6 lg:px-8 relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-[#EAB308] rounded-full opacity-5 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-[#FFF8E7] rounded-full opacity-5 blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-4xl text-center relative z-10">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-4">Envie d'une Douceur ?</span>
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-white uppercase mb-6">Commandez Votre Gâteau</h2>
<p className="text-lg leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto">
                    Découvrez la véritable pâtisserie artisanale chez vous ou venez nous rendre visite pour un moment gourmand inoubliable. Fraîcheur et savoir-faire garantis.
                </p>
<div className="flex flex-wrap items-center justify-center gap-4">
<button className="rounded-full bg-[#EAB308] px-8 py-4 text-base font-medium text-[#4A3219] shadow-lg hover:bg-[#D9A006] hover:scale-105 transition-all duration-300">
                        COMMANDER EN LIGNE
                    </button>
<button className="hover:bg-[#EAB308] hover:text-[#4A3219] transition-all duration-300 text-base font-medium text-[#EAB308] border-[#EAB308] border-2 rounded-full pt-3.5 pr-8 pb-3.5 pl-8">LIVRAISON À DOMICILE</button>
</div>
</div>
</section>

<section className="lg:px-8 bg-white pt-24 pr-6 pb-24 pl-6">
<div className="mx-auto max-w-7xl">

<div className="text-center mb-12">
<span className="font-cursive text-4xl lg:text-5xl text-[#EAB308] block mb-1">Suivez-nous</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-[#4A3219] uppercase">Sur Instagram</h2>
<a className="inline-block mt-3 text-lg font-medium text-[#4A3219]/60 hover:text-[#EAB308] transition-colors" href="#">@zeste_patisserie</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<a className="group relative aspect-square overflow-hidden rounded-2xl bg-[#FFF8E7] block" href="#">
<img alt="Instagram Post" className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1694837493215-b78d0a8c811e?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 flex gap-4 text-white bg-[#4A3219]/70 opacity-0 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">245</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:chat-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">18</span>
</div>
</div>
</a>

<a className="group relative aspect-square overflow-hidden rounded-2xl bg-[#FFF8E7] block" href="#">
<img alt="Instagram Post" className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1648412009969-de91a17f4340?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 flex gap-4 text-white bg-[#4A3219]/70 opacity-0 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">189</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:chat-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">12</span>
</div>
</div>
</a>

<a className="group relative aspect-square overflow-hidden rounded-2xl bg-[#FFF8E7] block" href="#">
<img alt="Instagram Post" className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1626640164280-5d96dd432e32?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 flex gap-4 text-white bg-[#4A3219]/70 opacity-0 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">312</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" height="24" icon="solar:chat-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">45</span>
</div>
</div>
</a>

<a className="group relative aspect-square overflow-hidden rounded-2xl bg-[#FFF8E7] block hidden md:block" href="#">
<img alt="Instagram Post" className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1665110762283-838c1b814e4d?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 flex gap-4 text-white bg-[#4A3219]/70 opacity-0 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">156</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon height="24" icon="solar:chat-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">8</span>
</div>
</div>
</a>

<a className="group relative aspect-square overflow-hidden rounded-2xl bg-[#FFF8E7] block hidden lg:block" href="#">
<img alt="Instagram Post" className="transition-transform duration-500 group-hover:scale-110 w-full h-full object-cover" src="https://images.unsplash.com/photo-1541781622821-8af65b6b449f?w=800&amp;q=80"/>
<div className="transition-opacity duration-300 group-hover:opacity-100 flex gap-4 text-white bg-[#4A3219]/70 opacity-0 absolute top-0 right-0 bottom-0 left-0 gap-x-4 gap-y-4 items-center justify-center">
<div className="flex items-center gap-1.5">
<iconify-icon className="" height="24" icon="solar:heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">420</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="" height="24" icon="solar:chat-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-sm font-medium">32</span>
</div>
</div>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-[#FFF8E7] border-t border-[#4A3219]/10">
<div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 flex flex-col items-center">

<div className="flex space-x-4 mb-8">
<a className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4A3219] text-[#EAB308] hover:bg-[#362615] transition-colors" href="#">
<iconify-icon className="" height="20" icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4A3219] text-[#EAB308] hover:bg-[#362615] transition-colors" href="#">
<iconify-icon className="" height="20" icon="mdi:twitter" width="20"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4A3219] text-[#EAB308] hover:bg-[#362615] transition-colors" href="#">
<iconify-icon className="" height="20" icon="mdi:youtube" width="20"></iconify-icon>
</a>
<a className="flex h-10 w-10 items-center justify-center rounded-md bg-[#4A3219] text-[#EAB308] hover:bg-[#362615] transition-colors" href="#">
<iconify-icon className="" height="20" icon="mdi:instagram" width="20"></iconify-icon>
</a>
</div>

<nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 text-base font-medium text-[#4A3219]">
<a className="hover:text-[#EAB308] transition-colors" href="#">Accueil</a>
<span className="text-[#4A3219]/30">/</span>
<a className="hover:text-[#EAB308] transition-colors" href="#">À Propos</a>
<span className="text-[#4A3219]/30">/</span>
<a className="hover:text-[#EAB308] transition-colors" href="#">Carte</a>
<span className="text-[#4A3219]/30">/</span>
<a className="hover:text-[#EAB308] transition-colors" href="#">Blog</a>
<span className="text-[#4A3219]/30">/</span>
<a className="hover:text-[#EAB308] transition-colors" href="#">Contact</a>
<span className="text-[#4A3219]/30">/</span>
<a className="hover:text-[#EAB308] transition-colors" href="#">Politique de Retour</a>
</nav>

<p className="text-sm text-[#4A3219]/60 text-center">
                Copyright © 2010-2024 Pâtisserie Zeste. Tous droits réservés.
            </p>
</div>
</footer>

    </>
  );
}
