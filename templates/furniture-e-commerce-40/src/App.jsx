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
      

<div className="bg-[#1A3C34] text-white py-3 px-4 text-center text-base">
<p className="font-medium tracking-wide">
        Livraison gratuite dès 899 $ d'achat en ligne.
        <a className="underline underline-offset-4 decoration-1 opacity-90 hover:opacity-100" href="#">
          Plus de détails ici*
        </a>
</p>
</div>

<header className="sticky transition-all duration-300 md:pl-12 md:pr-12 md:pt-8 md:pb-8 bg-[#dfdbd1]/95 z-50 border-transparent border-b pt-6 pr-12 pb-4 pl-12 top-0 backdrop-blur-sm">
<div className="flex bg-[#dfdbd1] max-w-[1800px] mr-auto ml-auto items-center justify-between">

<a className="border-[1.5px] border-[#1F1F1F] px-4 py-2 hover:bg-[#1F1F1F] hover:text-white transition-colors duration-300" href="#">
<span className="font-sans text-xl tracking-[0.25em] font-semibold uppercase">
            LUSINE
          </span>
</a>

<nav className="hidden lg:flex items-center space-x-10 text-lg font-medium text-gray-600">
<div className="group relative flex items-center cursor-pointer gap-1 hover:text-black transition-colors">
<span className="">Pièces</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="group relative flex items-center cursor-pointer gap-1 hover:text-black transition-colors">
<span className="">Assises</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="group relative flex items-center cursor-pointer gap-1 hover:text-black transition-colors">
<span className="">Tables</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="group relative flex items-center cursor-pointer gap-1 hover:text-black transition-colors">
<span className="">Lits</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="group relative flex items-center cursor-pointer gap-1 hover:text-black transition-colors">
<span className="">Déco</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</div>
<div className="group relative flex items-center cursor-pointer gap-1 text-[#C0562F] hover:text-[#A04625] transition-colors">
<span className="">Soldes</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</nav>

<div className="flex items-center space-x-6 text-[#1F1F1F]">
<div className="hidden md:flex items-center gap-2 cursor-pointer font-medium hover:opacity-70">
<span className="text-lg">FR</span>
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
<a className="hover:opacity-70 transition-opacity" href="#">
<svg className="lucide lucide-user w-6 h-6 stroke-[1.5]" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</a>
<a className="hover:opacity-70 transition-opacity" href="#">
<svg className="lucide lucide-search w-6 h-6 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
</a>
<a className="relative hover:opacity-70 transition-opacity" href="#">
<svg className="lucide lucide-shopping-bag w-6 h-6 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 10a4 4 0 0 1-8 0"></path>
<path d="M3.103 6.034h17.794"></path>
<path className="" d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path>
</svg>
<span className="absolute -top-1 -right-1 bg-[#1A3C34] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
</a>
</div>
</div>
</header>

<main className="md:pt-12 md:pl-10 md:pr-10 max-w-[1920px] mr-auto ml-auto pt-12 pr-5 pb-10 pl-5 gap-x-2 gap-y-10">

<div className="flex flex-col text-left mb-16 items-start justify-start">
<h1 className="md:text-7xl text-5xl text-slate-950 tracking-tight font-serif mb-4">
          Divans et chaises
        </h1>
<p className="md:text-2xl text-xl font-normal text-gray-600 max-w-2xl mb-8">
          Confortables, élégants, et entièrement modulaires.
        </p>

<div className="flex items-center gap-3">
<button className="flex items-center justify-between gap-2 px-5 py-2 bg-[#F3EFE8] rounded-full hover:bg-[#E5E0D8] transition-colors text-base font-medium text-[#1F1F1F]">
<span className="">Type</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>
<button className="flex items-center justify-between gap-2 px-5 py-2 bg-[#F3EFE8] rounded-full hover:bg-[#E5E0D8] transition-colors text-base font-medium text-[#1F1F1F]">
<span className="">Couleur</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-500 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 md:gap-y-12 px-0 scale-100 gap-x-2 gap-y-10">

<div className="group cursor-pointer relative">
<div className="aspect-square overflow-hidden bg-[#F6F6F6] rounded-none mb-5 relative">

<img alt="Modulaire Delano - Grey" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-img-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e075dc14-b4ce-4b8e-ae8a-5202a89eda02_1600w.png"/>

<img alt="Modulaire Delano - Brown" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-img-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99786dd4-640c-468e-b90e-3c56ad9942f8_1600w.png"/>

<img alt="Modulaire Delano - Beige" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-img-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29f2c277-00d2-4c85-9bc7-a82e24ee2738_1600w.png"/>

<img alt="Modulaire Delano - Dark Grey" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-img-index="3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ab67370-3caa-46e5-af60-060d25975209_1600w.png"/>
</div>
<div className="flex flex-col gap-1 pr-1 pl-1 gap-x-1 gap-y-1">
<div className="flex w-full items-baseline justify-between">
<h3 className="text-base font-medium text-[#0B1E3D] tracking-tight">
        Modulaire Delano 4 sièges
      </h3>
<span className="text-sm text-gray-400 font-light">$1795</span>
</div>
<div className="flex gap-2 mt-2 items-center">

<div className="cursor-pointer transition-all duration-200 hover:scale-110 bg-[#b1b2aa] w-6 h-6 border rounded-full shadow-sm" data-color-btn="" data-index="0" onclick="event.stopPropagation();const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');" onmouseenter="const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');"></div>

<div className="cursor-pointer transition-all duration-200 hover:scale-110 bg-[#7a573b] w-6 h-6 border rounded-full shadow-sm" data-color-btn="" data-index="1" onclick="event.stopPropagation();const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');" onmouseenter="const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');"></div>

<div className="cursor-pointer transition-all duration-200 hover:scale-110 bg-[#b6a792] w-6 h-6 border rounded-full shadow-sm" data-color-btn="" data-index="2" onclick="event.stopPropagation();const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');" onmouseenter="const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');"></div>

<div className="cursor-pointer transition-all duration-200 hover:scale-110 bg-[#6c6d68] w-6 h-6 border rounded-full shadow-sm" data-color-btn="" data-index="3" onclick="event.stopPropagation();const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');" onmouseenter="const r=this.closest('.group');const i=this.dataset.index;r.querySelectorAll('[data-img-index]').forEach(e=&gt;e.classList.toggle('hidden',e.dataset.imgIndex!==i));r.querySelectorAll('[data-color-btn]').forEach(b=&gt;{b.classList.remove('border-black');b.classList.add('border-transparent')});this.classList.remove('border-transparent');this.classList.add('border-black');"></div>
</div>
</div>
</div>

<div className="group cursor-pointer" style={{}}>
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative" style={{}}>
<img alt="Sofa Beige" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21b95341-07ff-4920-8e58-f1e4736ebcc8_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#1A3C34] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Nouveau
              </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full" style={{}}>
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Austin 2 sièges
              </h3>
<span className="text-sm text-gray-400 font-medium">$1960</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group relative aspect-square w-full h-full bg-[#E5B044] rounded-[2rem] overflow-hidden cursor-pointer">
<img className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7c1f48c-9387-4a66-abde-77e0d0980fdd_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10"></div>
<div className="flex flex-col z-10 h-full pt-6 pr-6 pb-6 pl-6 relative justify-between">
<h3 className="leading-tight text-2xl md:text-3xl font-medium text-white tracking-tight font-serif max-w-sm drop-shadow-md">Le confort que l’on ressent vraiment</h3>
<div className="flex justify-start">
<span className="hover:bg-gray-100 transition-colors text-xs font-semibold text-slate-950 bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm">Magasinez Delano</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Sofa White" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0af5fb01-1672-42be-a248-db2b2b6571c7_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#1A3C34] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Nouveau
              </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">Modulaire Delano 3 sièges</h3>
<span className="text-sm text-gray-400 font-medium">$3200</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Lounge Sofa" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13d0e030-1f8b-49e0-b195-58cd06d5c7da_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#C0562F] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Solde
              </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Tempa 4 sièges
              </h3>
<div className="flex gap-2 text-sm font-medium">
<span className="text-[#C0562F]">$4200</span>
<span className="text-gray-300 line-through">$5000</span>
</div>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Armchair" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1840c1bb-3591-422a-9017-1aac492137bd_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex w-full items-baseline justify-between">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Emma 3 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$3476</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Green Velvet Sofa" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99786dd4-640c-468e-b90e-3c56ad9942f8_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#1A3C34] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Nouveau
              </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Delano 4 sièges
              </h3>
<span className="text-sm text-gray-400 font-medium">$2150</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="White Chair" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1139e521-a013-4119-bb9e-ba559a76708a_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Flex
              </h3>
<span className="text-sm font-medium text-gray-400">$6515</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Modern Couch" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08ebd028-0820-4c94-b39f-d97d3749c2ef_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Sectionnel Dante
              </h3>
<span className="text-sm font-medium text-gray-400">$6995</span>
</div>
<div className="flex gap-2 mt-2 gap-x-2 gap-y-2 items-center"></div>
</div>
</div>

<div className="group md:col-span-2 lg:col-span-2 aspect-video overflow-hidden cursor-pointer col-span-2 bg-[#1F1F1F] w-full h-full rounded-[2rem] relative">
<img className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7a31154-d592-41fd-a522-7801ca0839d5_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="z-10 flex flex-col md:p-10 h-full p-6 relative justify-between items-start">
<h3 className="md:text-3xl -translate-y-4 text-lg text-white tracking-tight font-serif drop-shadow-md">Des coussins qui transforment l’espace</h3>
<div className="flex justify-start">
<span className="hover:bg-gray-100 transition-colors uppercase text-[10px] md:text-xs md:py-2 md:px-5 font-semibold text-[#1F1F1F] tracking-wider bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-sm">Magasiner les coussins</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6823e302-9be8-4fef-8e2d-42dd174b8aaf_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#1A3C34] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                Nouveau
              </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex w-full items-baseline justify-between">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Lowell 2 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$1770</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square overflow-hidden bg-[#F6F6F6] rounded-none mb-5 relative">
<img alt="Grey Chair" className="group-hover:scale-105 transition-transform duration-700 ease-out bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c5d68e4-630a-46ff-b0da-54fd6f066ec6_1600w.png"/>
<div className="absolute top-5 right-5">
<span className="bg-[#C0562F] text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">
      Solde
    </span>
</div>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Esther
              </h3>
<div className="flex gap-2 text-sm font-medium">
<span className="text-[#C0562F]">$5485</span>
<span className="line-through text-gray-300">$7000</span>
</div>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Sofa" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc1ef5e2-ed27-46cf-8088-b078e5d0172c_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex w-full items-baseline justify-between">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Delano 4 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$4895</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2df7fddb-3c94-4c58-a31d-a960921cc08f_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Solano
              </h3>
<span className="text-sm font-medium text-gray-400">$5758</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Sofa" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29f2c277-00d2-4c85-9bc7-a82e24ee2738_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Delano 4 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$6731</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd338872-4a15-4ae7-83d2-03c2288abe78_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Canapé Tampa 2 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$2996</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Sofa" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0d2bcf6-b113-4468-b332-bb7f95c18917_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex w-full items-baseline justify-between">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Lowell 2 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$1770</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>
<div className="group cursor-pointer">
<div className="aspect-square bg-[#F6F6F6] rounded-none overflow-hidden mb-5 relative">
<img alt="Fauteuil" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5be8e4f2-ac80-4f4e-9a69-652f4bffc0ba_1600w.png"/>
</div>
<div className="flex flex-col gap-1 px-1">
<div className="flex justify-between items-baseline w-full">
<h3 className="text-base font-semibold text-[#0B1E3D] tracking-tight">
                Modulaire Maverick 2 sièges
              </h3>
<span className="text-sm font-medium text-gray-400">$1450</span>
</div>
<div className="flex items-center gap-2 mt-2"></div>
</div>
</div>
<div className="group relative md:col-span-2 lg:col-span-2 aspect-video w-full h-full bg-[#1A3C34] rounded-[2rem] overflow-hidden cursor-pointer col-span-2">
<img className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0 scale-100" src="https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&amp;w=1760&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
<div className="flex flex-col md:p-10 bg-center z-10 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa306b13-33c7-4d14-9c1c-c6cc640d68b3_3840w.jpg)] bg-cover pt-8 pr-8 pb-8 pl-8 relative items-start justify-between">
<h3 className="md:text-3xl leading-tight -translate-y-6 text-lg text-white tracking-tight font-serif max-w-sm drop-shadow-md">Pensé pour les vrais moments</h3>
<div className="flex justify-start">
<span className="hover:bg-gray-100 transition-colors uppercase text-[10px] md:text-xs md:px-5 -translate-x-4 font-semibold text-[#1A3C34] tracking-wider bg-white rounded-full pt-2 pr-4 pb-2 pl-4 shadow-sm translate-y-3">Découvrir le modulaire Austin</span>
</div>
</div>
</div>
</div>

<section className="mt-10">
<div className="text-center mb-12">
<h2 className="md:text-4xl text-3xl font-semibold text-[#1F1F1F] tracking-tight font-serif mb-3">
            Nos clients nous aiment
          </h2>
<p className="text-lg font-medium text-gray-500">
            à partir de 18 avis
          </p>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x">

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 1" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b24a935-6446-4d49-bacd-867f6080aa45_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"Je l'ai depuis maintenant 4 ans, je l'hydrate 2 fois par année et il reste vraiment beau. On l'adore!"</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Francois Nicolas F.</p>
</div>

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 2" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0af6796-d369-4cc5-9abf-d005d1ebe03c_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"J'ai le modulaire Maverick chez moi depuis plusieurs années et je l'adore! Il ajoute une touche chaleureuse."</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Cynthia F.</p>
</div>

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 3" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91067631-01a8-472f-8ecc-a10067196245_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"J'adore mon Delano. La qualité du tissu est impressionnante et il est encore plus confortable qu'en photo."</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Annie-Kim C.</p>
</div>

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 4" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bb9dc28-818c-4aa1-9524-892175864688_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"Je cherchais une table distinctive qui s'agencerait bien au style rustique de ma maison. Parfaite!"</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Cynthia F.</p>
</div>

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 5" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92a0414d-a123-45ab-ac4a-21833d6e1337_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"J'ai eu un Maverick 3 morceaux pendant plusieurs années. Je l'aimais tellement que je l'ai racheté!"</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Liliane N.</p>
</div>

<div className="snap-start flex-none w-[300px] md:w-[350px] border border-gray-200 rounded-xl p-5 flex flex-col items-center text-center bg-white shadow-sm">
<div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
<img alt="Customer Review 6" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7985396-fbc0-4418-871e-72f960713a57_800w.jpg"/>
</div>
<div className="flex gap-1 mb-4 text-[#FBBF24]">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base text-gray-600 mb-6 leading-relaxed flex-grow">"D'un aspect peu ordinaire, j'étais un peu sceptique... mais une fois installée, je n'ai plus envie de me lever!"</p>
<p className="text-base font-semibold text-gray-900 mt-auto">Kristina L.</p>
</div>
</div>
</section>
</main>

<footer className="text-black bg-[#dfdbd1] pt-16 pr-6 pb-16 pl-6">
<div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-lg">
<div className="">
<span className="uppercase block text-xl font-semibold tracking-[0.25em] mb-6">
            LUSINE
          </span>
<p className="opacity-70 text-base leading-relaxed">
            Le design moderne accessible à tous. Qualité durable et style
            intemporel.
          </p>
</div>
<div className="">
<h4 className="font-serif text-xl mb-4">Aide</h4>
<ul className="space-y-2 opacity-70 text-base">
<li className="">
<a className="hover:underline" href="#">Contactez-nous</a>
</li>
<li className=""><a className="hover:underline" href="#">Livraison</a></li>
<li><a className="hover:underline" href="#">Retours</a></li>
</ul>
</div>
<div className="">
<h4 className="font-serif text-xl mb-4">À propos</h4>
<ul className="space-y-2 opacity-70 text-base">
<li className="">
<a className="hover:underline" href="#">Notre histoire</a>
</li>
<li><a className="hover:underline" href="#">Carrières</a></li>
<li><a className="hover:underline" href="#">Durabilité</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-xl mb-4">Infolettre</h4>
<div className="flex gap-2 border-b border-black/30 pb-2">
<input className="bg-transparent border-none outline-none w-full placeholder-black/50" placeholder="Votre courriel" type="email"/>
</div>
</div>
</div>
</footer>

    </>
  );
}
