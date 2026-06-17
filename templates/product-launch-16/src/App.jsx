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



      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileBtn && mobileMenu) {
          mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
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
      

<div className="bg-[#E4E9D4] text-[#664D30]">
<div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8 flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="">Livraison dans 54 pays • Retours sous 14 jours</span>
</div>
<div className="hidden sm:flex items-center gap-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Paiements sécurisés</span>
</div>
<div className="hidden md:flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="">Prix en temps réel</span>
</div>
</div>
</div>
<div className="border-t border-[#E4E9D4]"></div>
</div>

<header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-4 py-3">

<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-[#664D30] text-white flex items-center justify-center tracking-tight text-sm font-semibold">DA</div>
<span className="text-lg sm:text-xl tracking-tight font-semibold">Dantokpa Ahì</span>
</a>

<div className="flex-1 hidden md:flex">
<div className="w-full relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#668D84]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-11 pr-4 py-2.5 rounded-lg outline-none ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] transition text-[15px] placeholder:text-[#668D84]" placeholder="Rechercher des produits, marques, vendeurs..." type="text"/>
</div>
</div>

<div className="hidden md:flex items-center gap-2">
<div className="flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition cursor-pointer">
<svg className="lucide lucide-map-pin w-4.5 h-4.5 text-[#668D84]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm">Abidjan</span>
</div>
<div className="flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition cursor-pointer">
<svg className="lucide lucide-banknote w-4.5 h-4.5 text-[#668D84]" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<select className="bg-transparent text-sm focus:outline-none">
<option>FCFA</option>
<option>NGN</option>
<option>KES</option>
<option>ZAR</option>
<option>USD</option>
<option>EUR</option>
</select>
</div>
</div>

<div className="ml-auto flex items-center gap-1">
<button aria-label="Recherche" className="md:hidden p-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] active:scale-[0.98] transition">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-sm">Compte</span>
</button>
<button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-sm">Favoris</span>
</button>
<button className="relative px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path className="" d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1.5 -right-1.5 text-[11px] px-1.5 py-0.5 bg-[#664D30] text-white rounded-full leading-none">2</span>
</button>
<button aria-label="Menu" className="md:hidden p-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<nav className="hidden md:flex items-center gap-2 pb-3">
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Nouveautés</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Électronique</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Mode</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Maison</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Beauté</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Épicerie</a>
<a className="text-sm px-3 py-2 rounded-md hover:bg-[#E4E9D4] ring-1 ring-transparent hover:ring-[#E4E9D4] transition cursor-pointer">Artisanat</a>
<div className="ml-auto flex items-center gap-2">
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition cursor-pointer">Devenir vendeur</a>
<a className="text-sm px-3 py-2 rounded-md bg-[#664D30] text-white hover:bg-[#5A4329] transition cursor-pointer">Commencer</a>
</div>
</nav>
</div>
<div className="border-t border-[#E4E9D4]"></div>

<div className="md:hidden px-4 pb-3">
<div className="w-full relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#668D84]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-11 pr-4 py-2.5 rounded-lg outline-none ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] transition text-[15px] placeholder:text-[#668D84]" placeholder="Recherche..." type="text"/>
</div>
</div>

<div className="md:hidden hidden border-t border-[#E4E9D4]" id="mobileMenu">
<div className="px-4 py-3 grid grid-cols-2 gap-2">
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Nouveautés</a>
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Électronique</a>
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Mode</a>
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Maison</a>
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Beauté</a>
<a className="text-sm px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-center">Artisanat</a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-8 sm:pt-14 sm:pb-12">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full ring-1 ring-inset ring-[#E4E9D4] text-xs mb-4">
<svg className="lucide lucide-star w-4 h-4 text-[#EAB443]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>Fièrement construit pour l’Afrique</span>
</div>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold leading-[1.12]">
              Achetez et vendez sans frontières à travers l’Afrique
            </h1>
<p className="mt-4 text-[15px] text-[#668D84] leading-relaxed">
              Des artisans aux grandes marques, découvrez des produits authentiques,
              des paiements sécurisés et une livraison fiable dans toute la région.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#664D30] text-white hover:bg-[#5A4329] transition">
                Découvrir les tendances
                <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition">
                Vendre sur Dantokpa Ahì
                <svg className="lucide lucide-store ml-2 w-5 h-5" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</a>
</div>
<div className="mt-6 flex items-center gap-6">
<div className="flex -space-x-2">
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="client" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<p className="text-sm text-[#668D84]">+120k vendeurs et 3M d’acheteurs</p>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#E4E9D4]">
<img alt="Marketplace Africaine" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-sm ring-1 ring-[#E4E9D4] p-3 hidden sm:flex items-center gap-3">
<svg className="lucide lucide-badge-check w-5 h-5 text-[#668D84]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-sm">
<div className="font-medium">Vendeurs vérifiés</div>
<div className="text-[#668D84]">KYC + notation communautaire</div>
</div>
</div>
</div>
</div>
</div>
<div className="border-t border-[#E4E9D4]"></div>
</section>

<section className="py-6">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl tracking-tight font-semibold">Catégories populaires</h2>
<a className="text-sm inline-flex items-center text-[#664D30] hover:opacity-80">Tout voir <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
<div className="relative">
<div className="flex gap-3 overflow-x-auto scrollbar-none pb-1">
<button className="min-w-[150px] flex-1 sm:flex-none text-left p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div>
<div className="text-[15px] font-medium">Électronique</div>
<div className="text-xs text-[#668D84]">Smartphones, Accessoires</div>
</div>
</div>
</button>
<button className="min-w-[150px] p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-shirt w-5 h-5" data-lucide="shirt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium">Mode</div>
<div className="text-xs text-[#668D84]">Wax, Kente, bijoux</div>
</div>
</div>
</button>
<button className="min-w-[150px] p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium">Maison</div>
<div className="text-xs text-[#668D84]">Déco, Art</div>
</div>
</div>
</button>
<button className="min-w-[150px] p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-leaf w-5 h-5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium">Beauté</div>
<div className="text-xs text-[#668D84]">Beurres &amp; huiles</div>
</div>
</div>
</button>
<button className="min-w-[150px] p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-shopping-basket w-5 h-5" data-lucide="shopping-basket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 11-1 9"></path><path d="m19 11-4-7"></path><path d="M2 11h20"></path><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"></path><path d="M4.5 15.5h15"></path><path d="m5 11 4-7"></path><path d="m9 11 1 9"></path></svg>
</div>
<div>
<div className="text-[15px] font-medium">Épicerie</div>
<div className="text-xs text-[#668D84]">Café, épices</div>
</div>
</div>
</button>
<button className="min-w-[150px] p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] hover:ring-[#668D84] transition bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-md bg-[#664D30] text-white flex items-center justify-center">
<svg className="lucide lucide-palette w-5 h-5" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div>
<div className="text-[15px] font-medium">Artisanat</div>
<div className="text-xs text-[#668D84]">Tressage, bois</div>
</div>
</div>
</button>
</div>
</div>
</div>
<div className="mt-6 border-t border-[#E4E9D4]"></div>
</section>

<section className="py-8 sm:py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="hidden lg:block lg:col-span-3">
<div className="p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Filtres</h3>
<button className="text-sm hover:opacity-80">Réinitialiser</button>
</div>
<div className="mt-4 border-t border-[#E4E9D4]"></div>

<div className="mt-4">
<div className="text-sm font-medium mb-2">Catégorie</div>
<div className="space-y-2">

<label className="flex items-center gap-3 cursor-pointer">
<span className="relative inline-flex">
<input className="peer appearance-none w-5 h-5 rounded-md ring-1 ring-inset ring-[#E4E9D4] checked:bg-[#664D30] checked:ring-[#664D30] transition" type="checkbox"/>
<span className="pointer-events-none absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
<span className="text-sm">Électronique</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<span className="relative inline-flex">
<input className="peer appearance-none w-5 h-5 rounded-md ring-1 ring-inset ring-[#E4E9D4] checked:bg-[#664D30] checked:ring-[#664D30] transition" type="checkbox"/>
<span className="pointer-events-none absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
<span className="text-sm">Mode</span>
</label>
<label className="flex items-center gap-3 cursor-pointer">
<span className="relative inline-flex">
<input className="peer appearance-none w-5 h-5 rounded-md ring-1 ring-inset ring-[#E4E9D4] checked:bg-[#664D30] checked:ring-[#664D30] transition" type="checkbox"/>
<span className="pointer-events-none absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
<span className="text-sm">Maison</span>
</label>
</div>
</div>

<div className="mt-6">
<div className="text-sm font-medium mb-2">Prix</div>
<div className="flex items-center gap-2">
<input className="w-full px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm" placeholder="Min" type="number"/>
<span className="text-[#668D84]">—</span>
<input className="w-full px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm" placeholder="Max" type="number"/>
</div>
</div>

<div className="mt-6">
<div className="text-sm font-medium mb-2">Pays d’origine</div>
<select className="w-full px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm bg-white">
<option>Tous</option>
<option>Côte d’Ivoire</option>
<option>Nigeria</option>
<option>Kenya</option>
<option>Ghana</option>
<option>Afrique du Sud</option>
</select>
</div>

<div className="mt-6">
<label className="flex items-center gap-3 cursor-pointer">
<span className="relative inline-flex">
<input className="peer appearance-none w-5 h-5 rounded-md ring-1 ring-inset ring-[#E4E9D4] checked:bg-[#664D30] checked:ring-[#664D30] transition" type="checkbox"/>
<span className="pointer-events-none absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
<span className="text-sm">Livraison express</span>
</label>
</div>
<button className="mt-6 w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#664D30] text-white hover:bg-[#5A4329] transition">
                Appliquer les filtres
              </button>
</div>
</aside>

<div className="lg:hidden -mt-2">
<details className="group">
<summary className="list-none">
<div className="flex items-center justify-between px-4 py-3 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sliders-horizontal w-5 h-5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span className="text-sm font-medium">Filtres &amp; Tri</span>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="mt-3 p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white">
<div className="grid grid-cols-2 gap-3">
<select className="px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm">
<option>Trier: Populaires</option>
<option>Prix: Croissant</option>
<option>Prix: Décroissant</option>
<option>Nouveautés</option>
</select>
<select className="px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm">
<option>Catégorie</option>
<option>Électronique</option>
<option>Mode</option>
<option>Maison</option>
</select>
<input className="px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm" placeholder="Prix min" type="number"/>
<input className="px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm" placeholder="Prix max" type="number"/>
<label className="col-span-2 flex items-center gap-3 cursor-pointer">
<span className="relative inline-flex">
<input className="peer appearance-none w-5 h-5 rounded-md ring-1 ring-inset ring-[#E4E9D4] checked:bg-[#664D30] checked:ring-[#664D30] transition" type="checkbox"/>
<span className="pointer-events-none absolute inset-0 hidden peer-checked:flex items-center justify-center text-white">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
</span>
<span className="text-sm">Livraison express</span>
</label>
</div>
</div>
</details>
</div>

<main className="lg:col-span-9">
<div className="flex items-center justify-between">
<h3 className="text-lg tracking-tight font-semibold">Produits recommandés</h3>
<div className="hidden sm:flex items-center gap-2">
<select className="px-3 py-2 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-sm">
<option>Populaires</option>
<option>Prix: Croissant</option>
<option>Prix: Décroissant</option>
<option>Nouveautés</option>
</select>
<div className="hidden md:flex items-center gap-2 text-sm text-[#668D84]">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Stock local et transfrontalier</span>
</div>
</div>
</div>

<div className="mt-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">

<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Tissu wax premium" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<button className="absolute top-2 right-2 p-2 rounded-md bg-white/90 backdrop-blur ring-1 ring-[#E4E9D4] hover:bg-white">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute bottom-2 left-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur ring-1 ring-[#E4E9D4] text-xs">Côte d’Ivoire</div>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Tissu Wax Premium</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">100% coton, motifs traditionnels</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">14 500 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Beurre de karité" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-[#668D84] text-white text-xs">Bio</div>
<button className="absolute top-2 right-2 p-2 rounded-md bg-white/90 backdrop-blur ring-1 ring-[#E4E9D4] hover:bg-white">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Beurre de Karité Non Raffiné</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">Beaume naturel 250g</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">3 900 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Panier tressé" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<button className="absolute top-2 right-2 p-2 rounded-md bg-white/90 backdrop-blur ring-1 ring-[#E4E9D4] hover:bg-white">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Panier Tressé à la Main</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">Osier naturel, taille M</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">9 800 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Café éthiopien" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-white/90 backdrop-blur ring-1 ring-[#E4E9D4] text-xs">Éthiopie</div>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Café Arabica — Torréfaction Moyenne</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">500g moulus</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">6 200 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Bijoux perles" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Collier en Perles de Verre</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">Fait main, multicolore</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">7 300 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Épices africaines" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Assortiment d’Épices Africaines</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">4 x 50g</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">5 400 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Sandalettes cuir" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Sandales en Cuir — Unisexe</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">Tailles 36-45</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">12 900 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
<div className="group rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden hover:shadow-sm transition">
<div className="relative aspect-square">
<img alt="Masques artisanaux" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-3">
<div className="text-[15px] font-medium line-clamp-1">Masque Sculpté — Bois d’ébène</div>
<div className="mt-1 text-sm text-[#668D84] line-clamp-1">Origine Ghana</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-base font-semibold tracking-tight">24 000 FCFA</div>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition text-sm">
<svg className="lucide lucide-shopping-cart w-5 h-5" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                      Ajouter
                    </button>
</div>
</div>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden ring-1 ring-inset ring-[#E4E9D4] bg-white">
<div className="grid md:grid-cols-2">
<div className="p-6">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-[#E4E9D4] text-xs">
<svg className="lucide lucide-zap w-4 h-4 text-[#EAB443]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Offre limitée</span>
</div>
<h4 className="mt-3 text-2xl tracking-tight font-semibold">-20% sur la sélection artisanale</h4>
<p className="mt-2 text-sm text-[#668D84]">Soutenez les créateurs locaux et profitez de remises exclusives.</p>
<div className="mt-4 flex items-center gap-3">
<a className="inline-flex items-center px-4 py-2.5 rounded-lg bg-[#664D30] text-white hover:bg-[#5A4329] transition">
                      J’en profite
                      <svg className="lucide lucide-arrow-right ml-2 w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center px-4 py-2.5 rounded-lg ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition">Règlement</a>
</div>
</div>
<div className="relative">
<div className="aspect-[16/9] md:aspect-auto h-full w-full">
<img alt="Artisanat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</main>
</div>
</div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-4">
<h2 className="text-xl tracking-tight font-semibold">Vendeurs mis en avant</h2>
<a className="text-sm inline-flex items-center text-[#664D30] hover:opacity-80">Découvrir <svg className="lucide lucide-chevron-right w-4 h-4 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white flex items-center gap-4 hover:shadow-sm transition">
<img alt="seller" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="font-medium">Kora Craft</div>
<div className="text-sm text-[#668D84]">Abuja, Nigeria</div>
</div>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-4 h-4 text-[#EAB443]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.8</span>
</div>
</div>
<div className="p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white flex items-center gap-4 hover:shadow-sm transition">
<img alt="seller" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="font-medium">Sanaa Studio</div>
<div className="text-sm text-[#668D84]">Nairobi, Kenya</div>
</div>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-4 h-4 text-[#EAB443]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.9</span>
</div>
</div>
<div className="p-4 rounded-xl ring-1 ring-inset ring-[#E4E9D4] bg-white flex items-center gap-4 hover:shadow-sm transition">
<img alt="seller" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="font-medium">Baobab Market</div>
<div className="text-sm text-[#668D84]">Dakar, Sénégal</div>
</div>
<div className="flex items-center gap-1 text-sm">
<svg className="lucide lucide-star w-4 h-4 text-[#EAB443]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span>4.7</span>
</div>
</div>
</div>
</div>
<div className="mt-8 border-t border-[#E4E9D4]"></div>
</section>

<section className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl ring-1 ring-inset ring-[#E4E9D4] bg-white overflow-hidden">
<div className="grid md:grid-cols-2">
<div className="p-6 sm:p-8">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-[#E4E9D4] text-xs">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>Inscrivez-vous</span>
</div>
<h3 className="mt-3 text-2xl tracking-tight font-semibold">Recevez des offres et nouveaux arrivages</h3>
<p className="mt-2 text-sm text-[#668D84]">Une newsletter mensuelle, pas de spam.</p>
<form className="mt-4 flex flex-col sm:flex-row gap-2">
<input className="flex-1 px-3 py-2.5 rounded-lg ring-1 ring-inset ring-[#E4E9D4] focus:ring-[#664D30] outline-none text-[15px]" placeholder="Votre e-mail" type="email"/>
<button className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#664D30] text-white hover:bg-[#5A4329] transition">
                  S’abonner
                  <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
<div className="relative hidden md:block">
<div className="aspect-[4/3]">
<img alt="Newsletter" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-10 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-[#664D30] text-white flex items-center justify-center tracking-tight text-sm font-semibold">DA</div>
<span className="text-lg tracking-tight font-semibold">Dantokpa Ahì</span>
</div>
<p className="mt-3 text-sm text-[#668D84]">La marketplace panafricaine pour des achats sûrs et des ventes simples.</p>
<div className="mt-4 flex items-center gap-2">
<a className="p-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="p-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="p-2 rounded-md ring-1 ring-inset ring-[#E4E9D4] hover:bg-[#E4E9D4] transition" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div>
<div className="text-sm font-medium mb-3">Acheteurs</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:opacity-80" href="#">Comment acheter</a></li>
<li><a className="hover:opacity-80" href="#">Livraison</a></li>
<li><a className="hover:opacity-80" href="#">Paiements</a></li>
<li><a className="hover:opacity-80" href="#">Assistance</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">Vendeurs</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:opacity-80" href="#">Devenir vendeur</a></li>
<li><a className="hover:opacity-80" href="#">Frais &amp; commissions</a></li>
<li><a className="hover:opacity-80" href="#">Outils</a></li>
<li><a className="hover:opacity-80" href="#">Politiques</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">Entreprise</div>
<ul className="space-y-2 text-sm">
<li><a className="hover:opacity-80" href="#">À propos</a></li>
<li><a className="hover:opacity-80" href="#">Carrières</a></li>
<li><a className="hover:opacity-80" href="#">Presse</a></li>
<li><a className="hover:opacity-80" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-[#E4E9D4] pt-4 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
<div>© 2025 Dantokpa Ahì Technologies. Tous droits réservés.</div>
<div className="flex items-center gap-3">
<a className="hover:opacity-80" href="#">Confidentialité</a>
<span className="text-[#E4E9D4]">•</span>
<a className="hover:opacity-80" href="#">Conditions</a>
<span className="text-[#E4E9D4]">•</span>
<a className="hover:opacity-80" href="#">Cookies</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
