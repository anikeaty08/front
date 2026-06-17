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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#5B2D8E',
dark: '#45206D',
light: '#C4A8E0',
},
dark: '#1A1A1A'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function applyJobFilters() {
            const animal = document.getElementById('f-animal').value;
            const type = document.getElementById('f-type').value;
            const field = document.getElementById('f-field').value;
            const location = document.getElementById('f-location').value;
            
            const cards = document.querySelectorAll('.job-listing-card');
            let visibleCount = 0;

            cards.forEach(card => {
                // Handle multiple animals in data attribute (e.g. "pes,kocka")
                const cardAnimals = card.dataset.animal.split(',');
                const matchAnimal = animal === 'all' || cardAnimals.includes(animal) || (animal === 'jine' && card.dataset.animal === 'jine');
                
                const matchType = type === 'all' || card.dataset.type === type;
                const matchField = field === 'all' || card.dataset.field === field;
                // Handle "all" location fallback logic (if job is "Celá ČR", it shows everywhere, or if filter is "all")
                const matchLocation = location === 'all' || card.dataset.location === location || card.dataset.location === 'all';

                if (matchAnimal && matchType && matchField && matchLocation) {
                    card.style.display = 'flex';
                    // Re-trigger fade animation
                    card.classList.remove('fade-in');
                    void card.offsetWidth; // trigger reflow
                    card.classList.add('fade-in');
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            const countEl = document.getElementById('job-count');
            const emptyState = document.getElementById('empty-state');
            const grid = document.getElementById('job-grid');

            if (visibleCount === 0) {
                countEl.textContent = `Zobrazeno 0 nabídek`;
                emptyState.classList.remove('hidden');
                grid.classList.add('hidden');
            } else {
                countEl.textContent = `Zobrazeno ${visibleCount} nabídek`;
                emptyState.classList.add('hidden');
                grid.classList.remove('hidden');
            }
        }

        function resetFilters() {
            document.getElementById('f-animal').value = 'all';
            document.getElementById('f-type').value = 'all';
            document.getElementById('f-field').value = 'all';
            document.getElementById('f-location').value = 'all';
            document.getElementById('f-start').value = 'all';
            applyJobFilters();
        }
        
        // Volitelně: automatické filtrování při změně selectu (odkomentovat pro aktivaci)
        /*
        document.querySelectorAll('select[id^="f-"]').forEach(select => {
            select.addEventListener('change', applyJobFilters);
        });
        */
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#5B2D8E] shadow-md transition-all">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-white" href="/">PetCrew.cz</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-white transition-colors text-sm font-medium text-white/90" href="/">TVŮRCI</a>
<a className="text-white text-sm font-medium border-b-2 border-white pb-0.5" href="#">PRACOVNÍ NABÍDKY</a>
<a className="hover:text-white transition-colors text-sm font-medium text-white/90" href="/">PRO FIRMY</a>
<a className="text-sm font-medium text-white/90 hover:text-white transition-colors" href="#jak-pridat">Jak přidat inzerát</a>
</div>
<div className="hidden md:flex">
<a className="inline-flex items-center justify-center hover:bg-gray-50 transition-all hover:shadow-md text-sm font-medium text-[#5B2D8E] bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm" href="#pridat-inzerat">
                    Přidat inzerát
                </a>
</div>
<div className="md:hidden flex items-center">
<button className="text-white hover:text-white/80 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-brand">
<div className="absolute inset-0 z-0">
<img alt="Práce se zvířaty" className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay" src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&amp;w=2688&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-semibold tracking-wide uppercase mb-6 border border-white/20 backdrop-blur-sm">
                PetJobs
            </span>
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight mb-6 leading-tight max-w-4xl">
                Práce se zvířaty — na jednom místě
            </h1>
<p className="text-lg text-brand-light mb-10 max-w-2xl leading-relaxed">
                Nabídky z jezdeckých stájí, veterinárních klinik, útulků, petshopů a dalších. Žádné hledání po FB skupinách.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-brand bg-white rounded-full hover:bg-gray-50 transition-all shadow-lg" href="#nabidky">
                    Hledám práci
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-transparent border border-white/80 rounded-full hover:bg-white/10 transition-all" href="#pridat-inzerat">
                    Přidám inzerát
                </a>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm" id="nabidky">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Filtruj nabídky:</p>
<div className="flex flex-col lg:flex-row gap-3">
<div className="relative flex-1">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-dark py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors text-sm font-medium cursor-pointer" id="f-animal">
<option value="all">Všechna zvířata</option>
<option value="kun">🐴 Kůň</option>
<option value="pes">🐕 Pes</option>
<option value="kocka">🐈 Kočka</option>
<option value="veterina">🏥 Veterina</option>
<option value="jine">🐾 Jiné</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative flex-1">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-dark py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors text-sm font-medium cursor-pointer" id="f-type">
<option value="all">Typ úvazku: Vše</option>
<option value="hpp">Hlavní pracovní poměr</option>
<option value="brigada">Brigáda / DPP</option>
<option value="staz">Stáž</option>
<option value="dobrovolnictvi">Dobrovolnictví</option>
<option value="working-student">Working student</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative flex-1">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-dark py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors text-sm font-medium cursor-pointer" id="f-field">
<option value="all">Obor: Vše</option>
<option value="pece">Stáj a péče o koně</option>
<option value="klinika">Veterinární klinika</option>
<option value="utulek">Záchranná stanice / Útulek</option>
<option value="petshop">Petshop / Grooming</option>
<option value="farma">Farma</option>
<option value="skola">Jezdecká škola</option>
<option value="ugc">UGC a content tvorba</option>
<option value="jine">Jiné</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative flex-1">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-dark py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors text-sm font-medium cursor-pointer" id="f-location">
<option value="all">Lokace: Celá ČR</option>
<option value="praha">Praha</option>
<option value="brno">Brno</option>
<option value="ostrava">Ostrava</option>
<option value="olomouc">Olomouc</option>
<option value="plzen">Plzeň</option>
<option value="budejovice">České Budějovice</option>
<option value="jine">Jiné</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative flex-1">
<select className="w-full appearance-none bg-gray-50 border border-gray-200 text-dark py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-colors text-sm font-medium cursor-pointer" id="f-start">
<option value="all">Nástup: Vše</option>
<option value="ihned">Ihned</option>
<option value="do-mesice">Do 1 měsíce</option>
<option value="dohodou">Dohodou</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-brand rounded-xl hover:bg-brand-dark transition-all shadow-sm shrink-0" onclick="applyJobFilters()">
                    Hledat
                </button>
</div>
</div>
</div>

<section className="py-12 bg-gray-50/30 min-h-[500px]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
<p className="text-sm text-gray-500 font-medium" id="job-count">Zobrazeno 8 nabídek</p>
<div className="flex items-center space-x-2">
<label className="text-sm text-gray-500">Řadit dle:</label>
<select className="appearance-none bg-transparent text-dark text-sm font-medium focus:outline-none cursor-pointer pr-4 relative">
<option>Nejnovější</option>
<option>Nejvyšší mzdy</option>
</select>
</div>
</div>

<div className="hidden text-center py-20 bg-white rounded-2xl border border-gray-100" id="empty-state">
<iconify-icon className="text-5xl text-gray-300 mb-4" icon="solar:ghost-linear"></iconify-icon>
<h3 className="text-lg font-semibold text-dark mb-2">Žádné nabídky nenalezeny</h3>
<p className="text-sm text-gray-500 mb-4">Zkuste upravit filtry vyhledávání pro více výsledků.</p>
<button className="text-sm text-brand font-medium hover:underline" onclick="resetFilters()">Zrušit filtry</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="job-grid">

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="kun" data-field="pece" data-location="brno" data-type="hpp">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">ZH</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand/10 text-brand border border-brand/10">HPP</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Jezdec / Ošetřovatel koní</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Jezdecký klub Zelený háj</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Brno</span>
<span className="flex items-center">🐴 Kůň</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Ihned</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Hledáme zkušeného jezdce a ošetřovatele pro náš sportovní tým. Denní péče o koně, místování, lonžování a ježdění přidělených koní.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">25 000 – 30 000 Kč/měsíc</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="veterina" data-field="klinika" data-location="praha" data-type="hpp">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">PW</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand/10 text-brand border border-brand/10">HPP</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Veterinární technik/technice</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Veterinární klinika Paw</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Praha</span>
<span className="flex items-center">🏥 Veterina</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Dohodou</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Asistence při vyšetřeních, odběry krve, obsluha hospitalizace a komunikace s klienty. Moderní vybavení a fajn kolektiv.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">28 000 – 35 000 Kč/měsíc</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="pes,kocka" data-field="utulek" data-location="ostrava" data-type="brigada">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">SR</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700 border border-green-100">Brigáda</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Ošetřovatel psů a koček</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Útulek Srdíčko</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Ostrava</span>
<span className="flex items-center">🐕🐈 Pes + Kočka</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Ihned</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Hledáme výpomoc na víkendy a odpoledne. Krmení, úklid kotců, venčení a socializace zvířat v útulku.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">130 Kč/hod</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="kun" data-field="skola" data-location="olomouc" data-type="working-student">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">EQ</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">Working student</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Working student — drezura</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Stáj Equus</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Olomouc</span>
<span className="flex items-center">🐴 Kůň</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Do 1 měsíce</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Jedinečná příležitost učit se od profesionálů. Pomoc ve stáji a příprava koní výměnou za tréninky, ubytování a kapesné.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">Ubytování + odměna</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="pes" data-field="petshop" data-location="praha" data-type="hpp">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">PS</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand/10 text-brand border border-brand/10">HPP</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Groomer psů</h3>
<p className="text-sm font-medium text-gray-500 mb-4">PawSalon Praha</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Praha</span>
<span className="flex items-center">🐕 Pes</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Ihned</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Rozšiřujeme tým prémiového psího salonu. Požadujeme praxi se střihem různých plemen a citlivý přístup ke zvířatům.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">22 000 – 28 000 Kč/měsíc</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="veterina" data-field="klinika" data-location="brno" data-type="staz">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">ZS</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-orange-50 text-orange-700 border border-orange-100">Stáž</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Asistent/ka veterináře</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Klinika Zvířecí svět</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Brno</span>
<span className="flex items-center">🏥 Veterina</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Dohodou</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Ideální pro studenty VETUNI. Placená stáž zahrnuje fixaci pacientů, přípravu sálů a základní péči o hospitalizovaná zvířata.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">15 000 Kč/měsíc</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="jine" data-field="farma" data-location="budejovice" data-type="hpp">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">EK</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-brand/10 text-brand border border-brand/10">HPP</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">Správce farmy se zvířaty</h3>
<p className="text-sm font-medium text-gray-500 mb-4">Ekofarma Kopretina</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> České Budějovice</span>
<span className="flex items-center">🐾 Jiné</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Do 1 měsíce</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Kompletní péče o chod malé farmy (kozy, ovce, lamy, drůbež). Údržba pastvin, krmení a drobná údržba areálu.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">Dohodou</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="job-listing-card fade-in bg-white rounded-2xl border border-gray-100 border-l-4 border-l-brand p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col h-full group" data-animal="kun" data-field="ugc" data-location="all" data-type="brigada">
<div className="flex justify-between items-start mb-4">
<div className="w-12 h-12 rounded-full bg-brand-light/20 flex items-center justify-center text-brand font-semibold tracking-tighter">BP</div>
<span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-green-50 text-green-700 border border-green-100">Brigáda / DPP</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-dark mb-1 group-hover:text-brand transition-colors">UGC tvůrce obsahu — koně</h3>
<p className="text-sm font-medium text-gray-500 mb-4">PetCrew Brand Partner</p>
<div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:map-point-linear"></iconify-icon> Celá ČR</span>
<span className="flex items-center">🐴 Kůň</span>
<span className="flex items-center"><iconify-icon className="mr-1 text-gray-400" icon="solar:clock-circle-linear"></iconify-icon> Ihned</span>
</div>
<p className="text-sm text-gray-600 line-clamp-2 mb-6 flex-1">Hledáme nadšence s vlastním koněm pro tvorbu krátkých videí (TikTok/Reels) propagujících novou značku vybavení.</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
<span className="font-semibold text-dark text-sm">Dohodou</span>
<button className="text-sm font-medium text-brand hover:text-brand-dark transition-colors flex items-center">Zobrazit inzerát <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#C4A8E0] py-24" id="pridat-inzerat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark mb-6">Hledáte spolehlivého člověka ke zvířatům?</h2>
<p className="text-lg text-dark/80 leading-relaxed mb-8">Přidejte inzerát a oslovte stovky lidí kteří milují zvířata — bez zbytečného sdílení po skupinách.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-white">
<h3 className="text-lg font-semibold text-dark mb-2">Základní inzerát</h3>
<p className="text-2xl font-semibold text-brand mb-6">Zdarma</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> Textový inzerát
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> 30 dní aktivní
                            </li>
<li className="flex items-center text-sm text-gray-600">
<iconify-icon className="text-brand mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> Základní kategorie
                            </li>
</ul>
<button className="w-full py-3 text-sm font-semibold text-brand bg-brand/5 rounded-xl hover:bg-brand/10 transition-colors border border-brand/10">
                            Přidat zdarma
                        </button>
</div>

<div className="bg-[#5B2D8E] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10 pointer-events-none"></div>
<h3 className="text-lg font-semibold text-white mb-2 flex items-center">
<iconify-icon className="text-yellow-400 mr-2" icon="solar:star-bold"></iconify-icon> Prémiový inzerát
                        </h3>
<p className="text-2xl font-semibold text-white mb-6">499 Kč</p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center text-sm text-white/90">
<iconify-icon className="text-brand-light mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> Zvýrazněný inzerát
                            </li>
<li className="flex items-center text-sm text-white/90">
<iconify-icon className="text-brand-light mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> 60 dní aktivní
                            </li>
<li className="flex items-center text-sm text-white/90">
<iconify-icon className="text-brand-light mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> Top pozice ve výsledcích
                            </li>
<li className="flex items-center text-sm text-white/90">
<iconify-icon className="text-brand-light mr-2 text-lg" icon="solar:check-circle-bold"></iconify-icon> Sdílení na Instagram PetCrew
                            </li>
</ul>
<button className="w-full py-3 text-sm font-semibold text-brand bg-white rounded-xl hover:bg-gray-50 transition-colors relative z-10">
                            Přidat prémiově
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="jak-pridat">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand mb-4">
<iconify-icon icon="solar:briefcase-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-dark">Jak přidat pracovní nabídku?</h2>
</div>
<div className="relative max-w-4xl mx-auto">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gray-200 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-brand font-semibold text-xl mb-6 relative">
                            1
                            <div className="absolute -inset-2 rounded-full border border-brand/20 animate-pulse hidden md:block"></div>
</div>
<h3 className="text-lg font-semibold text-dark mb-2">Vyplníš formulář</h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">Základní info o pozici, firmě a požadavcích. Zabere to jen pár minut.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-brand font-semibold text-xl mb-6">
                            2
                        </div>
<h3 className="text-lg font-semibold text-dark mb-2">My zkontrolujeme</h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">Každý inzerát ručně schvalujeme do 24 hodin, abychom zaručili kvalitu sítě.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-brand shadow-md flex items-center justify-center text-white font-semibold text-xl mb-6">
                            3
                        </div>
<h3 className="text-lg font-semibold text-dark mb-2">Inzerát je živý</h3>
<p className="text-sm text-gray-500 leading-relaxed px-4">Uchazeči tě mohou ihned kontaktovat přímo přes email nebo telefon.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#5B2D8E]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                Nenašel/našla jsi co hledáš?
            </h2>
<p className="text-lg text-brand-light mb-10">
                Přihlas se k odběru novinek a pošleme ti nové nabídky přímo do emailu.
            </p>
<form className="max-w-md mx-auto relative flex flex-col sm:flex-row gap-3">
<input className="w-full px-5 py-3.5 rounded-xl bg-white text-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-light shadow-sm text-sm font-medium" placeholder="Tvůj email" required="" type="email"/>
<button className="shrink-0 px-6 py-3.5 text-sm font-semibold text-brand bg-brand-light rounded-xl hover:bg-white transition-colors shadow-sm" type="submit">
                    Hlídej nabídky
                </button>
</form>
<p className="text-xs text-white/60 mt-4">
                Odesláním souhlasíš se zasíláním novinek. Odhlásit se můžeš kdykoliv.
            </p>
</div>
</section>

<footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white mb-4 block" href="/">PetCrew.cz</a>
<p className="text-sm text-gray-400 mb-6">První česká platforma spojující tvůrce obsahu se zvířaty a nabídky práce ve zvířecím světě.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Platforma</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Tvůrci</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Pracovní inzeráty</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Pro firmy</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Ceník</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Informace</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">O nás</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">Kontakt</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Sleduj nás</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center" href="#"><iconify-icon className="mr-2" icon="solar:camera-linear"></iconify-icon> Instagram @petcrew.cz</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center" href="#"><iconify-icon className="mr-2" icon="solar:users-group-rounded-linear"></iconify-icon> Facebook</a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center" href="#"><iconify-icon className="mr-2" icon="solar:videocamera-linear"></iconify-icon> TikTok</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">© 2025 PetCrew.cz — Všechna práva vyhrazena</p>
<div className="flex space-x-6">
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Ochrana osobních údajů</a>
<a className="text-xs text-gray-500 hover:text-white transition-colors" href="#">Podmínky užití</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
