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
      

<div className="bg-zinc-900 text-white text-xs font-medium text-center py-2.5 px-4 tracking-wide w-full">
      DARMOWA DOSTAWA DLA ZAMÓWIEŃ POWYŻEJ 200 PLN ORAZ DARMOWE ZWROTY PRZEZ 30
      DNI
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center md:hidden">
<button className="text-zinc-600 hover:text-zinc-900 p-2 -ml-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>

<div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:static left-0 right-0 pointer-events-none md:pointer-events-auto">
<a className="uppercase pointer-events-auto text-xl font-semibold text-zinc-900 tracking-tighter" href="#">
              ccc
            </a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-zinc-900 border-b-2 border-zinc-900 pb-1 -mb-1" href="#">
              Nowości
            </a>
<a className="hover:text-zinc-900 transition-colors text-sm font-medium text-zinc-500" href="#">
              Mężczyźni
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Kobiety
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Dzieci
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">
              Kolekcje
            </a>
</div>

<div className="flex items-center space-x-4 sm:space-x-5">
<div className="hidden lg:flex items-center bg-zinc-100 rounded-full px-4 py-1.5 focus-within:ring-1 focus-within:ring-zinc-300 transition-shadow">
<iconify-icon className="text-zinc-400" height="18" icon="solar:magnifer-linear" width="18"></iconify-icon>
<input className="bg-transparent border-none text-sm focus:ring-0 w-32 ml-2 text-zinc-800 placeholder-zinc-400 outline-none" placeholder="Szukaj..." type="text"/>
</div>
<button className="text-zinc-600 hover:text-zinc-900 transition-colors lg:hidden">
<iconify-icon height="22" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="text-zinc-600 hover:text-zinc-900 transition-colors hidden sm:block">
<iconify-icon height="22" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
<button className="text-zinc-600 hover:text-zinc-900 transition-colors relative">
<iconify-icon height="22" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
<span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-medium text-white border-2 border-white box-content">
                2
              </span>
</button>
</div>
</div>
</div>
</nav>

<header className="overflow-hidden sm:py-24 lg:py-32 bg-zinc-50 pt-16 pb-16 relative">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
<div className="lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-200/50 text-zinc-700 text-xs font-medium uppercase tracking-wide">
            Nowa Kolekcja 2024
          </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-zinc-900 tracking-tight">
            Ikona powraca.
            <br/>
            Samba OG.
          </h1>
<p className="text-base sm:text-lg text-zinc-500 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            Klasyczny design spotyka nowoczesny komfort. Odkryj nową odsłonę
            legendarnych butów, które zdefiniowały styl ulicy.
          </p>
<div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 transition-colors shadow-sm" href="#catalog">
              Kup teraz
            </a>
<a className="inline-flex justify-center items-center px-8 py-3.5 border border-zinc-200 text-sm font-medium rounded-full text-zinc-900 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm" href="#details">
              Zobacz szczegóły
            </a>
</div>
</div>
<div className="lg:w-1/2 relative w-full max-w-lg mx-auto lg:max-w-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-zinc-200/60 to-zinc-50 rounded-full blur-3xl opacity-60"></div>

<img alt="Inne buty marki Adidas" className="z-10 mix-blend-multiply w-full h-auto object-cover rounded-3xl relative shadow-sm" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80" style={{transform: 'rotate(-8deg) scale(1.05)'}}/>
</div>
</div>
</header>

<main className="sm:px-6 lg:px-8 max-w-[1400px] mr-auto ml-auto pt-20 pr-4 pb-20 pl-4" id="catalog">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-zinc-200 pb-6 mb-10">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">
            Katalog Produktów
          </h2>
<p className="text-sm text-zinc-500 mt-2">
            Znaleziono 124 modele pasujące do kryteriów.
          </p>
</div>
<div className="flex items-center space-x-4 mt-6 md:mt-0 w-full md:w-auto justify-between md:justify-end">
<button className="flex md:hidden items-center text-sm font-medium text-zinc-900 border border-zinc-200 rounded-full px-4 py-2">
<iconify-icon className="mr-2" height="18" icon="solar:filter-linear" width="18"></iconify-icon>
            Filtry
          </button>
<div className="flex items-center bg-zinc-50 rounded-full px-4 py-2 border border-zinc-100">
<span className="text-xs font-medium text-zinc-500 mr-2 uppercase tracking-wide">
              Sortuj
            </span>
<div className="relative">
<select className="text-sm bg-transparent font-medium text-zinc-900 focus:ring-0 cursor-pointer outline-none appearance-none pr-6">
<option>Najpopularniejsze</option>
<option>Cena: rosnąco</option>
<option>Cena: malejąco</option>
<option>Nowości</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex flex-col lg:flex-row gap-12">

<aside className="hidden lg:block w-64 flex-shrink-0 space-y-10">

<div className="border-b border-zinc-100 pb-8">
<h3 className="text-base font-semibold text-zinc-900 mb-5 tracking-tight">
              Kolekcja
            </h3>
<div className="space-y-3.5">
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[3px] bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  Originals
                  <span className="text-zinc-400 text-xs ml-1">(42)</span>
</span>
</label>
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[3px] bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  Performance
                  <span className="text-zinc-400 text-xs ml-1">(56)</span>
</span>
</label>
<label className="flex items-center cursor-pointer group">
<div className="relative flex items-center justify-center w-4 h-4 mr-3">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[3px] bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-opacity" height="14" icon="solar:check-read-linear" style={{strokeWidth: '2'}} width="14"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">
                  Sportswear
                  <span className="text-zinc-400 text-xs ml-1">(26)</span>
</span>
</label>
</div>
</div>

<div className="border-b border-zinc-100 pb-8">
<h3 className="text-base font-semibold text-zinc-900 mb-5 tracking-tight">
              Rozmiar (EU)
            </h3>
<div className="grid grid-cols-4 gap-2">
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs font-medium text-center py-2 border border-zinc-200 rounded text-zinc-600 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all">
                  38
                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all text-xs font-medium text-zinc-600 text-center border-zinc-200 border rounded pt-2 pb-2">
                  39
                </div>
</label>
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="text-xs font-medium text-center py-2 border border-zinc-200 rounded text-zinc-600 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all">
                  40
                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs font-medium text-center py-2 border border-zinc-200 rounded text-zinc-600 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all">
                  41
                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs font-medium text-center py-2 border border-zinc-200 rounded text-zinc-600 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all">
                  42
                </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="text-xs font-medium text-center py-2 border border-zinc-200 rounded text-zinc-600 peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-checked:text-white hover:border-zinc-400 transition-all">
                  43
                </div>
</label>
</div>
</div>

<div className="border-b border-zinc-100 pb-8">
<h3 className="text-base font-semibold text-zinc-900 tracking-tight mb-5">
              Kolor
            </h3>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-7 h-7 rounded-full bg-black ring-1 ring-zinc-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-7 h-7 rounded-full bg-white ring-1 ring-zinc-300 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-7 h-7 rounded-full bg-zinc-400 ring-1 ring-zinc-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-7 h-7 rounded-full bg-red-700 ring-1 ring-zinc-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-7 h-7 rounded-full bg-blue-700 ring-1 ring-zinc-200 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-zinc-900 transition-all"></div>
</label>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-zinc-900 mb-5 tracking-tight">
              Cena
            </h3>
<div className="space-y-5">
<div className="h-1 w-full bg-zinc-200 rounded-full relative">
<div className="absolute h-1 bg-zinc-900 rounded-full left-[20%] right-[30%]"></div>
<div className="absolute h-5 w-5 bg-white border border-zinc-300 rounded-full top-1/2 -translate-y-1/2 left-[20%] -ml-2.5 cursor-grab shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
<div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
</div>
<div className="absolute h-5 w-5 bg-white border border-zinc-300 rounded-full top-1/2 -translate-y-1/2 right-[30%] -mr-2.5 cursor-grab shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
<div className="w-1.5 h-1.5 bg-zinc-900 rounded-full"></div>
</div>
</div>
<div className="flex items-center justify-between gap-4">
<div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm text-zinc-900 font-medium">
                  150 PLN
                </div>
<span className="text-zinc-400">-</span>
<div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-md px-3 py-2 text-sm text-zinc-900 font-medium">
                  650 PLN
                </div>
</div>
</div>
</div>
</aside>

<div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<div className="group relative flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-5">

<div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-widest text-zinc-900 shadow-sm">
                Bestseller
              </div>
<img alt="Gazelle Indoor" className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply" src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-4 right-4 p-2 bg-white rounded-full text-zinc-400 hover:text-zinc-900 transition-all opacity-0 group-hover:opacity-100 shadow-sm hover:scale-110">
<iconify-icon className="" height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:underline underline-offset-4 decoration-1 text-base font-medium text-zinc-900">
                  Gazelle Indoor
                </h3>
<p className="text-sm text-zinc-500 mt-1">Buty lifestyle unisex</p>
</div>
<p className="text-base font-semibold text-zinc-900">549 PLN</p>
</div>

<div className="flex space-x-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-blue-800 border border-zinc-200"></div>
<div className="w-3.5 h-3.5 rounded-full bg-red-800 border border-zinc-200"></div>
<div className="w-3.5 h-3.5 rounded-full bg-green-800 border border-zinc-200"></div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-5">
<img alt="Stan Smith" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<button className="absolute top-4 right-4 p-2 bg-white rounded-full text-zinc-400 hover:text-zinc-900 transition-all opacity-0 group-hover:opacity-100 shadow-sm hover:scale-110">
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-base font-medium text-zinc-900 group-hover:underline underline-offset-4 decoration-1">
                  Stan Smith
                </h3>
<p className="text-sm text-zinc-500 mt-1">Klasyka Originals</p>
</div>
<p className="text-base font-semibold text-zinc-900">499 PLN</p>
</div>
<div className="flex space-x-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-white border border-zinc-300 ring-1 ring-offset-1 ring-zinc-300"></div>
<div className="w-3.5 h-3.5 rounded-full bg-black border border-zinc-200"></div>
</div>
</div>

<div className="group relative flex flex-col cursor-pointer">
<div className="relative w-full aspect-[4/5] bg-zinc-100 rounded-2xl overflow-hidden mb-5">
<div className="absolute top-4 left-4 z-10 bg-zinc-900 text-white px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-widest shadow-sm">
                Nowość
              </div>
<img alt="Ultraboost Light" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply w-full h-full object-cover" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{transform: 'scale(0.9)'}}/>
<button className="absolute top-4 right-4 p-2 bg-white rounded-full text-zinc-400 hover:text-zinc-900 transition-all opacity-0 group-hover:opacity-100 shadow-sm hover:scale-110">
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-base font-medium text-zinc-900 group-hover:underline underline-offset-4 decoration-1">
                  Ultraboost Light
                </h3>
<p className="text-sm text-zinc-500 mt-1">Bieganie Performance</p>
</div>
<p className="text-base font-semibold text-zinc-900">849 PLN</p>
</div>
<div className="flex space-x-1.5 mt-3">
<div className="w-3.5 h-3.5 rounded-full bg-red-600 border border-zinc-200"></div>
<div className="w-3.5 h-3.5 rounded-full bg-black border border-zinc-200"></div>
</div>
</div>

<div className="hidden lg:block group relative flex flex-col cursor-pointer opacity-50 grayscale">
<div className="aspect-[4/5] overflow-hidden flex bg-zinc-100 w-full rounded-2xl mb-5 relative items-center justify-center">
<span className="text-sm text-zinc-400 font-medium">
                Więcej produktów...
              </span>
</div>
</div>
</div>
</div>

<div className="mt-16 flex items-center justify-center border-t border-zinc-200 pt-8">
<nav className="flex items-center space-x-2">
<button className="p-2 text-zinc-400 hover:text-zinc-900 disabled:opacity-50 transition-colors" disabled="">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 text-white text-sm font-medium">
            1
          </button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 text-sm font-medium transition-colors">
            2
          </button>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 text-sm font-medium transition-colors">
            3
          </button>
<span className="text-zinc-400 px-1">...</span>
<button className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-600 hover:bg-zinc-100 text-sm font-medium transition-colors">
            8
          </button>
<button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</nav>
</div>
</main>

<section className="border-t border-zinc-200 bg-zinc-50/30 py-16 sm:py-24" id="details">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-8 text-sm text-zinc-500 font-medium flex items-center space-x-2">
<a className="hover:text-zinc-900 transition-colors" href="#">
            Strona główna
          </a>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<a className="hover:text-zinc-900 transition-colors" href="#">
            Mężczyźni
          </a>
<iconify-icon height="14" icon="solar:alt-arrow-right-linear" width="14"></iconify-icon>
<span className="text-zinc-900">Ultraboost Light</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div className="space-y-4 lg:sticky lg:top-24">
<div className="aspect-[4/3] sm:aspect-square bg-zinc-100 rounded-3xl overflow-hidden flex items-center justify-center p-8 relative">
<img alt="Detail View" className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all shadow-sm">
<iconify-icon height="20" icon="solar:alt-arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-white transition-all shadow-sm">
<iconify-icon height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-4 gap-4">
<div className="aspect-square bg-zinc-100 rounded-xl ring-2 ring-zinc-900 ring-offset-2 overflow-hidden cursor-pointer p-2 flex items-center justify-center">
<img className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="aspect-square bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-300 overflow-hidden cursor-pointer p-2 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
<img className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{transform: 'rotate(90deg)'}}/>
</div>
<div className="aspect-square bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-300 overflow-hidden cursor-pointer p-2 flex items-center justify-center opacity-60 hover:opacity-100 transition-all">
<img className="w-full h-full object-contain mix-blend-multiply" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80" style={{transform: 'rotate(180deg)'}}/>
</div>
<div className="aspect-square bg-zinc-100 rounded-xl border border-transparent hover:border-zinc-300 overflow-hidden cursor-pointer flex items-center justify-center opacity-60 hover:opacity-100 transition-all relative">
<img className="w-full h-full object-cover mix-blend-multiply blur-[2px]" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-md" height="28" icon="solar:play-circle-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col pt-2 lg:pt-8">
<div className="flex justify-between items-start gap-4">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">
                  Ultraboost Light
                </h2>
<p className="text-base text-zinc-500 mt-2 font-medium">
                  Buty do biegania męskie
                </p>
</div>
<p className="text-2xl font-semibold text-zinc-900 whitespace-nowrap">
                849 PLN
              </p>
</div>

<div className="mt-10">
<h3 className="text-sm font-medium text-zinc-900">
                Kolor:
                <span className="text-zinc-500 font-normal ml-1">
                  Solar Red / Core Black
                </span>
</h3>
<div className="flex space-x-3 mt-4">
<button className="w-10 h-10 rounded-full bg-red-600 ring-2 ring-offset-2 ring-zinc-900 focus:outline-none shadow-sm"></button>
<button className="w-10 h-10 rounded-full bg-white border border-zinc-300 hover:ring-2 hover:ring-offset-2 hover:ring-zinc-300 focus:outline-none transition-all shadow-sm flex items-center justify-center">

<div className="w-1/2 h-1/2 bg-black rounded-sm rotate-45 opacity-20"></div>
</button>
<button className="w-10 h-10 rounded-full bg-black border border-zinc-700 hover:ring-2 hover:ring-offset-2 hover:ring-zinc-300 focus:outline-none transition-all shadow-sm"></button>
</div>
</div>

<div className="mt-10">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-medium text-zinc-900">
                  Wybierz rozmiar (EU)
                </h3>
<button className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors flex items-center font-medium">
<iconify-icon className="mr-1.5" height="16" icon="solar:ruler-linear" width="16"></iconify-icon>
                  Tabela rozmiarów
                </button>
</div>
<div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="product_size" type="radio"/>
<div className="flex items-center justify-center py-3.5 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:border-zinc-900 peer-checked:text-white transition-all shadow-sm">
                    41 1/3
                  </div>
</label>
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="product_size" type="radio"/>
<div className="flex items-center justify-center py-3.5 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:border-zinc-900 peer-checked:text-white transition-all shadow-sm">
                    42
                  </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="product_size" type="radio"/>
<div className="flex items-center justify-center py-3.5 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:border-zinc-900 peer-checked:text-white transition-all shadow-sm">
                    42 2/3
                  </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="product_size" type="radio"/>
<div className="flex items-center justify-center py-3.5 border border-zinc-200 rounded-xl text-sm font-medium text-zinc-700 hover:border-zinc-400 peer-checked:bg-zinc-900 peer-checked:border-zinc-900 peer-checked:text-white transition-all shadow-sm">
                    43 1/3
                  </div>
</label>

<label className="cursor-not-allowed relative opacity-40">
<input className="peer sr-only" disabled="" name="product_size" type="radio"/>
<div className="flex items-center justify-center py-3.5 border border-zinc-200 bg-zinc-50 rounded-xl text-sm font-medium text-zinc-400">
                    44
                  </div>
<div className="absolute inset-0 flex justify-center items-center overflow-hidden rounded-xl">
<div className="w-full h-[1.5px] bg-zinc-400 rotate-45 transform origin-center"></div>
</div>
</label>
</div>
</div>

<div className="mt-12 flex flex-col sm:flex-row gap-4">
<button className="flex-1 bg-zinc-900 text-white py-4 px-8 rounded-full text-sm font-semibold hover:bg-zinc-800 hover:shadow-lg transition-all flex items-center justify-center space-x-2 group">
<span>Dodaj do koszyka</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="flex-none py-4 px-6 rounded-full border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50 transition-all flex items-center justify-center font-medium shadow-sm">
<iconify-icon className="mr-2" height="22" icon="solar:heart-linear" width="22"></iconify-icon>
                Zapisz
              </button>
</div>

<div className="mt-12 border-t border-zinc-200 divide-y divide-zinc-100">
<div className="py-5">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-base font-semibold text-zinc-900 tracking-tight">
                    Opis produktu
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-transform transform rotate-180" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="pt-4 pb-2">
<p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    Poczuj niesamowity zwrot energii z każdym krokiem.
                    Najlżejsze Ultraboost w historii wykorzystują innowacyjną
                    technologię Light BOOST, zapewniającą maksymalną amortyzację
                    i komfort podczas biegów na każdym dystansie. Cholewka
                    PRIMEKNIT+ otula stopę niczym skarpetka, gwarantując
                    wsparcie tam, gdzie najbardziej go potrzebujesz.
                  </p>
<ul className="mt-4 space-y-2 text-sm text-zinc-600 list-inside list-disc">
<li>Standardowy krój</li>
<li>Model sznurowany</li>
<li>Tekstylna cholewka adidas PRIMEKNIT+</li>
<li>Tekstylna wyściółka</li>
<li>Podeszwa środkowa Light BOOST</li>
</ul>
</div>
</div>
<div className="py-5">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-base font-semibold text-zinc-900 tracking-tight">
                    Dostawa i zwroty
                  </span>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-transform" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
<div className="py-5">
<button className="flex w-full items-center justify-between text-left focus:outline-none group">
<span className="text-base font-semibold text-zinc-900 tracking-tight">
                    Opinie (48)
                  </span>
<div className="flex items-center ml-auto mr-4 text-zinc-900">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-linear" width="16"></iconify-icon>
</div>
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-transform" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-zinc-800">
<div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 uppercase">
              Produkty
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Buty
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Odzież
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Akcesoria
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Nowości
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Wyprzedaż
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 uppercase">
              Wsparcie
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Pomoc i obsługa klienta
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Śledzenie zamówienia
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Dostawa i zwroty
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Tabele rozmiarów
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Kontakt
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 uppercase">
              O firmie
            </h4>
<ul className="space-y-4">
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  O nas
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Kariera
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Prasa
                </a>
</li>
<li>
<a className="text-sm text-zinc-400 hover:text-white transition-colors" href="#">
                  Zrównoważony rozwój
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-lg font-semibold tracking-tight mb-6 uppercase">
              Bądź na bieżąco
            </h4>
<p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Zapisz się do newslettera, aby otrzymywać informacje o
              ekskluzywnych ofertach i nowych kolekcjach.
            </p>
<div className="flex">
<input className="bg-zinc-900 border border-zinc-700 text-white text-sm rounded-l-md px-4 py-3 w-full focus:outline-none focus:border-zinc-500 placeholder-zinc-500" placeholder="Twój adres e-mail" type="email"/>
<button className="bg-white text-zinc-950 px-4 py-3 rounded-r-md hover:bg-zinc-200 transition-colors flex items-center justify-center">
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xl font-semibold tracking-tighter uppercase text-white">
            adidas
          </div>
<div className="flex space-x-6">
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">
              Polityka prywatności
            </a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">
              Regulamin
            </a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">
              Cookies
            </a>
</div>
<p className="text-xs text-zinc-600">
            © 2024 Sklep Obuwniczy (Prototyp). Wszelkie prawa zastrzeżone.
          </p>
</div>
</div>
</footer>

    </>
  );
}
