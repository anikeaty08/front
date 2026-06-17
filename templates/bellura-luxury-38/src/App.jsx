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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<div className="bg-[#333] text-white text-xs py-2 text-center tracking-wide font-medium" style={{}}>
        LIVRAISON OFFERTE DÈS 60€ D'ACHAT • QUALITÉ ITALIENNE
    </div>

<header className="sticky top-0 z-50 bg-[#FDFDF8]/90 backdrop-blur-md border-b border-[#E5E5E5] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors">
<svg className="lucide lucide-menu" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<a className="group flex items-center gap-2" href="/">

<svg className="lucide lucide-leaf text-[#C4D4C0] transition-transform group-hover:scale-110" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="font-serif text-3xl tracking-tighter font-semibold text-[#333]" style={{}}>BELLURA</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-[#D4A59A] transition-colors tracking-tight" href="#parfums" style={{}}>PARFUMS</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#C4D4C0] transition-colors tracking-tight" href="#cosmetiques" style={{}}>COSMÉTIQUES</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#A8B5A0] transition-colors tracking-tight" href="#menagers" style={{}}>MÉNAGERS</a>
<a className="text-sm font-medium text-gray-600 hover:text-[#D4C9A8] transition-colors tracking-tight" href="#complements" style={{}}>COMPLÉMENTS</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors tracking-tight" href="#blog" style={{}}>LE JOURNAL</a>
</nav>

<div className="flex items-center gap-5">
<button className="hidden sm:block text-gray-600 hover:text-black transition-colors">
<svg className="lucide lucide-search" data-lucide="search" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<a className="text-gray-600 hover:text-black transition-colors" href="/account">
<svg className="lucide lucide-user" data-lucide="user" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
<a className="relative text-gray-600 hover:text-black transition-colors group" href="/cart">
<svg className="lucide lucide-shopping-bag" data-lucide="shopping-bag" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-[#C4D4C0] rounded-full text-[9px] flex items-center justify-center text-white font-medium" style={{}}>0</span>
</a>
</div>
</div>
</header>
<main className="">

<section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#F5F5ED]">

<div className="absolute inset-0 z-0">
<img alt="Ambiance naturelle Bellura" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-white/10 to-[#FDFDF8]/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 fade-in-up text-center max-w-3xl pr-6 pl-6 relative">
<span className="inline-block py-1 px-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/50 text-xs font-medium uppercase tracking-wider mb-6 text-gray-800" style={{}}>
                    Nouvelle Collection
                </span><h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-[#2A2A2A] tracking-tight font-serif mb-6" style={{}}>Révélez votre <br className=""/> <span className="italic text-[#8A9A80]" style={{}}>essence naturelle</span></h1>
<p className="text-lg md:text-xl text-gray-700 mb-10 max-w-xl mx-auto font-light leading-relaxed" style={{}}>
                    Luxe accessible et qualité italienne. Une gamme authentique respectueuse de votre bien-être.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-3.5 bg-[#C4D4C0] text-white text-sm font-semibold tracking-wide rounded hover:bg-[#b0c2ac] transition-all shadow-sm transform hover:-translate-y-0.5" href="#" style={{}}>
                        DÉCOUVRIR LA COLLECTION
                    </a>
<a className="px-8 py-3.5 bg-transparent border border-[#A8B5A0] text-[#5c6b55] text-sm font-semibold tracking-wide rounded hover:bg-[#FDFDF8]/80 transition-all" href="#" style={{}}>
                        NOTRE HISTOIRE
                    </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl text-[#333] mb-3 tracking-tight" style={{}}>Nos Univers</h2>
<div className="w-12 h-0.5 bg-[#C4D4C0] mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

<a className="group relative h-80 overflow-hidden rounded-lg bg-[#F5F5ED]" href="/parfums">
<div className="absolute inset-0 bg-[#D4A59A]/10 group-hover:bg-[#D4A59A]/20 transition-colors duration-500"></div>
<img alt="Parfums" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
<h3 className="font-serif text-2xl text-[#333] group-hover:text-[#D4A59A] transition-colors" style={{}}>Parfums</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" style={{}}>
                            Explorer <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-lg bg-[#F5F5ED]" href="/cosmetiques">
<div className="absolute inset-0 bg-[#C4D4C0]/10 group-hover:bg-[#C4D4C0]/20 transition-colors duration-500"></div>
<img alt="Cosmétiques" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
<h3 className="font-serif text-2xl text-[#333] group-hover:text-[#8A9A80] transition-colors" style={{}}>Cosmétiques</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" style={{}}>
                            Explorer <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-lg bg-[#F5F5ED]" href="/menagers">
<div className="absolute inset-0 bg-[#A8B5A0]/10 group-hover:bg-[#A8B5A0]/20 transition-colors duration-500"></div>
<img alt="Ménagers" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
<h3 className="font-serif text-2xl text-[#333] group-hover:text-[#6c7a64] transition-colors" style={{}}>Maison</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" style={{}}>
                            Explorer <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-lg bg-[#F5F5ED]" href="/complements">
<div className="absolute inset-0 bg-[#D4C9A8]/10 group-hover:bg-[#D4C9A8]/20 transition-colors duration-500"></div>
<img alt="Compléments" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
<h3 className="font-serif text-2xl text-[#333] group-hover:text-[#9c9273] transition-colors" style={{}}>Bien-être</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" style={{}}>
                            Explorer <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>

<a className="group relative h-80 overflow-hidden rounded-lg bg-[#F5F5ED]" href="/accessoires">
<div className="absolute inset-0 bg-[#F5F5ED]/50 group-hover:bg-[#F5F5ED]/80 transition-colors duration-500"></div>
<img alt="Accessoires" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1596462502278-27bfdd403348?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
<h3 className="font-serif text-2xl text-[#333] group-hover:text-gray-600 transition-colors" style={{}}>Accessoires</h3>
<span className="text-xs font-medium uppercase tracking-wider text-gray-500 flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all" style={{}}>
                            Explorer <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
</a>
</div>
</section>

<section className="bg-white py-24 border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-serif text-4xl text-[#333] tracking-tight mb-2" style={{}}>Les Incontournables</h2>
<p className="text-gray-500 font-light" style={{}}>Les favoris de notre communauté.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-[#8A9A80] hover:text-[#6c7a64] transition-colors" href="/bestsellers" style={{}}>
                        Voir tout <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<article className="group">
<div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-lg overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-[#D4A59A] text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-wide z-10 rounded-sm" style={{}}>Best Seller</span>
<img alt="Extrait de Parfum Jasmin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-2 right-2 opacity-30 font-serif italic text-xs text-white" style={{}}>My Bellura</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#333] py-3 text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:bg-[#C4D4C0] hover:text-white transition-colors" style={{}}>
                                    Ajouter au panier
                                </button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-serif text-lg text-[#333] group-hover:text-[#C4D4C0] transition-colors leading-tight" style={{}}>Extrait de Parfum Jasmin N°127</h3>
<p className="text-xs text-gray-500" style={{}}>Parfums Femme</p>
<div className="pt-1 flex items-center gap-2">
<span className="text-sm font-medium text-[#333]" style={{}}>32,00 €</span>
</div>
</div>
</article>

<article className="group">
<div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-lg overflow-hidden mb-4">
<img alt="Crème Visage Bave d'Escargot" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-2 right-2 opacity-30 font-serif italic text-xs text-gray-400" style={{}}>My Bellura</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#333] py-3 text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:bg-[#C4D4C0] hover:text-white transition-colors" style={{}}>
                                    Ajouter au panier
                                </button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-serif text-lg text-[#333] group-hover:text-[#C4D4C0] transition-colors leading-tight" style={{}}>Crème Visage Anti-Âge</h3>
<p className="text-xs text-gray-500" style={{}}>Soins du visage</p>
<div className="pt-1 flex items-center gap-2">
<span className="text-sm font-medium text-[#333]" style={{}}>45,50 €</span>
</div>
</div>
</article>

<article className="group">
<div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-lg overflow-hidden mb-4">
<img alt="Huile d'Amande Douce" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-2 right-2 opacity-30 font-serif italic text-xs text-gray-600" style={{}}>My Bellura</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#333] py-3 text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:bg-[#C4D4C0] hover:text-white transition-colors" style={{}}>
                                    Ajouter au panier
                                </button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-serif text-lg text-[#333] group-hover:text-[#C4D4C0] transition-colors leading-tight" style={{}}>Huile d'Amande Douce Bio</h3>
<p className="text-xs text-gray-500" style={{}}>Soins du corps</p>
<div className="pt-1 flex items-center gap-2">
<span className="text-sm font-medium text-[#333]" style={{}}>18,90 €</span>
</div>
</div>
</article>

<article className="group">
<div className="relative aspect-[4/5] bg-[#F9F9F9] rounded-lg overflow-hidden mb-4">
<span className="absolute top-3 left-3 bg-[#A8B5A0] text-white text-[10px] font-semibold px-2 py-1 uppercase tracking-wide z-10 rounded-sm" style={{}}>Eco</span>
<img alt="Détergent Multi-usages" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-2 right-2 opacity-30 font-serif italic text-xs text-gray-400" style={{}}>My Bellura</div>
<div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<button className="w-full bg-white/90 backdrop-blur text-[#333] py-3 text-xs font-semibold uppercase tracking-wider rounded shadow-sm hover:bg-[#C4D4C0] hover:text-white transition-colors" style={{}}>
                                    Ajouter au panier
                                </button>
</div>
</div>
<div className="space-y-1">
<h3 className="font-serif text-lg text-[#333] group-hover:text-[#C4D4C0] transition-colors leading-tight" style={{}}>Détergent Multi-surfaces</h3>
<p className="text-xs text-gray-500" style={{}}>Produits Ménagers</p>
<div className="pt-1 flex items-center gap-2">
<span className="text-sm font-medium text-[#333]" style={{}}>12,50 €</span>
</div>
</div>
</article>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[#8A9A80] hover:text-[#6c7a64] border-b border-[#8A9A80] pb-0.5 transition-colors" href="/bestsellers" style={{}}>
                        Voir tous les produits <svg className="lucide lucide-arrow-right" data-lucide="arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-20 bg-[#F5F5ED]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10">
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#C4D4C0]/20 flex items-center justify-center mb-6 group-hover:bg-[#C4D4C0]/30 transition-colors">
<svg className="lucide lucide-sprout text-[#6c7a64]" data-lucide="sprout" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#333]" style={{}}>Authenticité</h3>
<p className="text-sm text-gray-600 leading-relaxed px-4" style={{}}>Des ingrédients naturels sélectionnés avec soin pour votre bien-être.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#D4A59A]/20 flex items-center justify-center mb-6 group-hover:bg-[#D4A59A]/30 transition-colors">
<svg className="lucide lucide-gem text-[#8c6d66]" data-lucide="gem" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#333]" style={{}}>Luxe Accessible</h3>
<p className="text-sm text-gray-600 leading-relaxed px-4" style={{}}>La qualité premium des grandes marques à un prix juste pour tous.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#D4C9A8]/20 flex items-center justify-center mb-6 group-hover:bg-[#D4C9A8]/30 transition-colors">
<svg className="lucide lucide-flag text-[#8a826b]" data-lucide="flag" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#333]" style={{}}>Qualité Italienne</h3>
<p className="text-sm text-gray-600 leading-relaxed px-4" style={{}}>L'excellence du savoir-faire italien dans chaque flacon.</p>
</div>
<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#A8B5A0]/20 flex items-center justify-center mb-6 group-hover:bg-[#A8B5A0]/30 transition-colors">
<svg className="lucide lucide-heart-handshake text-[#5c6b55]" data-lucide="heart-handshake" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-[#333]" style={{}}>Transparence</h3>
<p className="text-sm text-gray-600 leading-relaxed px-4" style={{}}>Une communication honnête sur la composition de nos produits.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#C4D4C0]">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl text-[#2A2A2A] mb-4 tracking-tight" style={{}}>Rejoignez le cercle Bellura</h2>
<p className="text-[#3e4a38] mb-8 font-light" style={{}}>Inscrivez-vous pour recevoir nos conseils beauté et -10% sur votre première commande.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-4 py-3.5 rounded bg-[#FDFDF8] border-none placeholder-gray-400 text-gray-800 focus:ring-2 focus:ring-white/50 outline-none transition-shadow shadow-sm" placeholder="Votre adresse email" type="email"/>
<button className="px-6 py-3.5 bg-[#333] text-white font-medium text-sm tracking-wide rounded hover:bg-black transition-colors shadow-sm" style={{}} type="submit">
                        S'INSCRIRE
                    </button>
</form>
<p className="text-[10px] text-[#4a5844] mt-4" style={{}}>En vous inscrivant, vous acceptez notre politique de confidentialité.</p>
</div>
</section>
</main>

<footer className="bg-[#FDFDF8] border-t border-[#E5E5E5] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="/">
<svg className="lucide lucide-leaf text-[#C4D4C0]" data-lucide="leaf" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="font-serif text-2xl tracking-tighter font-semibold text-[#333]" style={{}}>BELLURA</span>
</a>
<p className="text-sm text-gray-500 leading-relaxed" style={{}}>
                        Des produits de qualité italienne qui respectent votre peau, votre bien-être et l'environnement.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-[#C4D4C0] transition-colors" href="#"><svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-400 hover:text-[#C4D4C0] transition-colors" href="#"><svg className="lucide lucide-facebook" data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-gray-400 hover:text-[#C4D4C0] transition-colors" href="#"><svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>

<div>
<h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-6" style={{}}>Catalogue</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#D4A59A] transition-colors" href="#" style={{}}>Parfums</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Cosmétiques</a></li>
<li><a className="hover:text-[#A8B5A0] transition-colors" href="#" style={{}}>Produits Ménagers</a></li>
<li><a className="hover:text-[#D4C9A8] transition-colors" href="#" style={{}}>Compléments</a></li>
<li><a className="hover:text-black transition-colors" href="#" style={{}}>Accessoires</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-6" style={{}}>La Maison</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>À Propos</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Notre Philosophie</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Blog</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Contact</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Partenariat Chogan</a></li>
</ul>
</div>

<div>
<h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-6" style={{}}>Aide &amp; Info</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>FAQ</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Livraison &amp; Retours</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Mentions Légales</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>Politique de Confidentialité</a></li>
<li><a className="hover:text-[#C4D4C0] transition-colors" href="#" style={{}}>CGV</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400" style={{}}>© 2025 Bellura. Tous droits réservés.</p>
<div className="flex gap-2 opacity-50 grayscale hover:grayscale-0 transition-all">

<div className="w-8 h-5 bg-gray-200 rounded border border-gray-300"></div>
<div className="w-8 h-5 bg-gray-200 rounded border border-gray-300"></div>
<div className="w-8 h-5 bg-gray-200 rounded border border-gray-300"></div>
</div>
</div>
</div>
</footer>



    </>
  );
}
