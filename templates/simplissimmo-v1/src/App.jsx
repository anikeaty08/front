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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



        // --- Logic for Address Autocomplete Simulation ---
        const addressInput = document.getElementById('address-input');
        const mapsDropdown = document.getElementById('maps-dropdown');
        const suggestionsList = document.getElementById('suggestions-list');

        // Fake Data for Dynamic Generation
        const suffixes = [
            "Herriot", "Vaillant", "Manet", "Pailleron", "Hugo", "Jaurès", "Gambetta"
        ];
        const cities = [
            "Lyon", "Boulogne-Billancourt", "Paris", "Bordeaux", "Nantes", "Lille", "Marseille"
        ];

        function capitalize(str) {
            return str.replace(/\b\w/g, l => l.toUpperCase());
        }

        addressInput.addEventListener('input', (e) => {
            const val = e.target.value;
            
            if (val.length > 2) {
                // Clear previous suggestions
                suggestionsList.innerHTML = '';
                
                // Generate Fake Dynamic Suggestions based on input
                const cleanVal = capitalize(val.trim());
                const suggestions = [];
                
                // Create 3 variations that look real
                for(let i = 0; i < 3; i++) {
                    const suffix = suffixes[i % suffixes.length];
                    const city = cities[i % cities.length];
                    
                    // Logic: If input ends in a street type (rue, avenue), append a name
                    // Otherwise assume input is the name or number + name
                    let suggestionText;
                    
                    // Simple heuristic for demo: Input + fake suffix + city
                    // Example: "47 rue edouard" -> "47 Rue Edouard Herriot, Lyon"
                    
                    suggestionText = `${cleanVal} ${suffix}, <span class="text-zinc-400">${city}, France</span>`;
                    
                    suggestions.push(suggestionText);
                }

                // Inject into DOM
                suggestions.forEach(text => {
                    const li = document.createElement('li');
                    li.className = "cursor-pointer px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-700 flex items-center gap-2 group transition-colors";
                    li.innerHTML = `
                        <iconify-icon icon="solar:map-point-bold" class="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-white flex-shrink-0" width="16"></iconify-icon>
                        <span class="truncate">${text}</span>
                    `;
                    li.addEventListener('click', () => selectAddress(li));
                    suggestionsList.appendChild(li);
                });

                mapsDropdown.classList.remove('hidden');
            } else {
                mapsDropdown.classList.add('hidden');
            }
        });

        // Hide dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!addressInput.contains(e.target) && !mapsDropdown.contains(e.target)) {
                mapsDropdown.classList.add('hidden');
            }
        });

        // Select an address from the dropdown
        function selectAddress(element) {
            // Get text content only (ignoring HTML tags for value)
            const fullText = element.querySelector('span').textContent;
            addressInput.value = fullText.trim();
            mapsDropdown.classList.add('hidden');
        }

        // --- Logic for Dark Mode Toggle ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlRoot = document.documentElement;

        // Check system preference initially
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            htmlRoot.classList.add('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            htmlRoot.classList.toggle('dark');
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
      

<nav className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 transition-colors duration-300">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-white dark:text-zinc-900">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">Simplissimo</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white md:block transition-colors" href="#fonctionnalites">Fonctionnalités</a>

<button className="flex h-9 w-9 items-center justify-center rounded-full text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 transition-all focus:outline-none" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:moon-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:sun-2-linear" width="20"></iconify-icon>
</button>
<a className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200" href="#">
                    Espace Agence
                </a>
</div>
</div>
</nav>

<main className="relative pt-24 lg:pt-32 pb-16 overflow-hidden">

<div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100 via-zinc-50 to-transparent opacity-70 dark:from-zinc-900 dark:via-zinc-950 dark:to-transparent"></div>
<div className="absolute top-20 right-0 -z-10 h-96 w-96 rounded-full bg-indigo-50/50 blur-3xl filter dark:bg-indigo-900/10"></div>
<div className="absolute bottom-0 left-0 -z-10 h-96 w-96 rounded-full bg-blue-50/50 blur-3xl filter dark:bg-blue-900/10"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">

<div className="flex flex-col justify-center pt-8 animate-fade-in">
<div className="mb-4 inline-flex w-fit items-center gap-1 rounded-full border border-zinc-200 bg-white px-3 py-1 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">Technologie d'estimation V2</span>
</div>
<h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl mb-6 dark:text-white">
                        Générez plus de leads qualifiés pour votre agence.
                    </h1>
<p className="text-lg leading-relaxed text-zinc-500 mb-8 max-w-lg dark:text-zinc-400">
                        Intégrez notre widget d'estimation en marque blanche directement sur votre site. Une expérience fluide, précise et moderne pour capturer vos futurs mandats.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-200/50 transition-all hover:bg-zinc-800 hover:translate-y-[-1px] dark:bg-white dark:text-zinc-900 dark:shadow-none dark:hover:bg-zinc-200">
                            Voir la démo
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:border-zinc-300 dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800">
                            Contacter l'équipe
                        </button>
</div>
</div>

<div className="relative w-full max-w-md mx-auto lg:max-w-none animate-fade-in delay-200">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-zinc-200 to-zinc-100 opacity-50 blur dark:from-zinc-800 dark:to-zinc-900 dark:opacity-40"></div>
<div className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl shadow-zinc-200/50 sm:p-8 dark:bg-zinc-900 dark:border-zinc-800 dark:shadow-zinc-950/50 transition-colors duration-300">
<div className="mb-6 flex items-center justify-between border-b border-zinc-100 pb-4 dark:border-zinc-800">
<h3 className="text-base font-semibold text-zinc-900 dark:text-white">Estimer un bien</h3>
<span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">Étape 1/1</span>
</div>
<form autocomplete="off" className="space-y-5" onsubmit="event.preventDefault();">

<div className="grid grid-cols-2 gap-3">
<div className="relative">
<input checked="" className="peer sr-only" id="maison" name="property_type" type="radio"/>
<label className="cursor-pointer group" htmlFor="maison">
<div className="flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-600">
<iconify-icon className="mb-2 text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white" icon="solar:home-2-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Maison</span>
<div className="check-icon absolute top-2 right-2 opacity-0 transition-all duration-200 scale-90 text-zinc-900 dark:text-white">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
<div className="relative">
<input className="peer sr-only" id="appart" name="property_type" type="radio"/>
<label className="cursor-pointer group" htmlFor="appart">
<div className="flex flex-col items-center justify-center rounded-xl border border-zinc-200 bg-white p-4 transition-all hover:border-zinc-300 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:border-zinc-600">
<iconify-icon className="mb-2 text-zinc-500 group-hover:text-zinc-900 dark:text-zinc-400 dark:group-hover:text-white" icon="solar:city-linear" width="24"></iconify-icon>
<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Appartement</span>
<div className="check-icon absolute top-2 right-2 opacity-0 transition-all duration-200 scale-90 text-zinc-900 dark:text-white">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
</div>

<div className="space-y-1.5 relative">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide dark:text-zinc-400">Adresse du bien</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-zinc-400 group-focus-within:text-zinc-800 dark:group-focus-within:text-zinc-200 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</div>
<input className="block w-full rounded-lg border-0 py-2.5 pl-10 pr-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm sm:leading-6 bg-zinc-50/50 transition-shadow dark:bg-zinc-800/50 dark:ring-zinc-700 dark:text-white dark:focus:ring-white" id="address-input" placeholder="Entrez une adresse..." type="text"/>

<div className="absolute z-10 mt-1 hidden w-full overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-zinc-800 dark:ring-zinc-700" id="maps-dropdown">
<ul className="py-1 text-sm text-zinc-700 dark:text-zinc-200" id="suggestions-list">

</ul>

<div className="border-t border-zinc-100 px-4 py-1.5 text-[10px] text-zinc-400 flex justify-end dark:border-zinc-700 bg-white dark:bg-zinc-800">
<span className="opacity-50">powered by Google</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide dark:text-zinc-400">Surface (m²)</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm bg-zinc-50/50 dark:bg-zinc-800/50 dark:ring-zinc-700 dark:text-white dark:focus:ring-white" placeholder="0" type="number"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide dark:text-zinc-400">Terrain (m²)</label>
<div className="relative">
<input className="block w-full rounded-lg border-0 py-2.5 px-3 text-zinc-900 shadow-sm ring-1 ring-inset ring-zinc-200 placeholder:text-zinc-400 focus:ring-2 focus:ring-inset focus:ring-zinc-900 sm:text-sm bg-zinc-50/50 dark:bg-zinc-800/50 dark:ring-zinc-700 dark:text-white dark:focus:ring-white" placeholder="0" type="number"/>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide dark:text-zinc-400">Nombre de pièces</label>
<div className="flex justify-between gap-2">
<div className="contents">
<input className="room-radio sr-only" id="r1" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r1">1</label>
<input className="room-radio sr-only" id="r2" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r2">2</label>
<input checked="" className="room-radio sr-only" id="r3" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r3">3</label>
<input className="room-radio sr-only" id="r4" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r4">4</label>
<input className="room-radio sr-only" id="r5" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r5">5</label>
<input className="room-radio sr-only" id="r6" name="rooms" type="radio"/>
<label className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-zinc-200 bg-white text-sm font-medium text-zinc-600 shadow-sm hover:border-zinc-300 transition-all dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600" htmlFor="r6">6+</label>
</div>
</div>
</div>

<div className="space-y-2">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wide dark:text-zinc-400">État général</label>
<div className="grid grid-cols-2 gap-2">
<div className="relative">
<input className="peer sr-only" id="cond_renov" name="condition" type="radio"/>
<label className="cursor-pointer group block w-full" htmlFor="cond_renov">
<div className="rounded-lg border border-zinc-200 px-3 py-2 text-center text-xs font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600">
                                                À rénover
                                            </div>
</label>
</div>
<div className="relative">
<input className="peer sr-only" id="cond_works" name="condition" type="radio"/>
<label className="cursor-pointer group block w-full" htmlFor="cond_works">
<div className="rounded-lg border border-zinc-200 px-3 py-2 text-center text-xs font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600">
                                                Travaux à prévoir
                                            </div>
</label>
</div>
<div className="relative">
<input checked="" className="peer sr-only" id="cond_good" name="condition" type="radio"/>
<label className="cursor-pointer group block w-full" htmlFor="cond_good">
<div className="rounded-lg border border-zinc-200 px-3 py-2 text-center text-xs font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600">
                                                Bon état
                                            </div>
</label>
</div>
<div className="relative">
<input className="peer sr-only" id="cond_new" name="condition" type="radio"/>
<label className="cursor-pointer group block w-full" htmlFor="cond_new">
<div className="rounded-lg border border-zinc-200 px-3 py-2 text-center text-xs font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:border-zinc-600">
                                                Rénové / Neuf
                                            </div>
</label>
</div>
</div>
</div>

<button className="group relative mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200" type="submit">
<span>Obtenir mon estimation</span>
<iconify-icon className="transition-transform group-hover:scale-110" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
<div className="absolute inset-0 -z-10 rounded-lg bg-indigo-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-20 dark:bg-white dark:group-hover:opacity-30"></div>
</button>
<p className="text-center text-[10px] text-zinc-400 dark:text-zinc-500">
                                Estimation basée sur les données du marché en temps réel. <br/>Conforme RGPD.
                            </p>
</form>
</div>
</div>
</div>
</div>

<section className="mt-24 border-t border-zinc-200 bg-white py-24 sm:py-32 dark:border-zinc-800 dark:bg-zinc-950 transition-colors duration-300" id="fonctionnalites">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">La puissance de la Data, la simplicité en plus.</h2>
<p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400">Transformez votre site en une machine à capturer des leads grâce à notre technologie d'estimation.</p>
</div>
<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
<div className="flex flex-col items-start animate-fade-in delay-100">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
<iconify-icon className="text-zinc-900 dark:text-white" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">Instantané &amp; Précis</dt>
<dd className="mt-1 flex flex-auto flex-col text-sm leading-7 text-zinc-500 dark:text-zinc-400">
<p className="flex-auto">Algorithme connecté aux bases DVF et Perval. Vos prospects obtiennent une fourchette de prix fiable en moins de 30 secondes.</p>
</dd>
</div>
<div className="flex flex-col items-start animate-fade-in delay-200">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
<iconify-icon className="text-zinc-900 dark:text-white" icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">Design White-Label</dt>
<dd className="mt-1 flex flex-auto flex-col text-sm leading-7 text-zinc-500 dark:text-zinc-400">
<p className="flex-auto">Le widget s'adapte parfaitement à l'identité visuelle de votre agence. Couleurs, polices et formes personnalisables.</p>
</dd>
</div>
<div className="flex flex-col items-start animate-fade-in delay-300">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
<iconify-icon className="text-zinc-900 dark:text-white" icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<dt className="text-base font-semibold leading-7 text-zinc-900 dark:text-white">Conversion Maximisée</dt>
<dd className="mt-1 flex flex-auto flex-col text-sm leading-7 text-zinc-500 dark:text-zinc-400">
<p className="flex-auto">UX optimisée pour réduire les abandons. Recevez les coordonnées complètes du prospect (Email + Tél + Nom Prénom) avant d'afficher le prix.</p>
</dd>
</div>
</dl>
</div>
</div>
</section>

<section className="relative isolate overflow-hidden bg-zinc-900 py-16 sm:py-24 dark:bg-zinc-950/50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mx-auto max-w-2xl text-center">
<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Vous souhaitez installer le module ?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-300">Simplissimo est une solution clé en main que nos experts installent et configurent directemet sur votre site d'agence pour une intégration parfaite.</p>
<div className="mt-10 flex items-center justify-center gap-x-6">
<a className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors" href="#">
                            Je veux être contacté
                        </a>
<a className="text-sm font-semibold leading-6 text-white flex items-center gap-2 group" href="#">
                            Voir la documentation 
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<svg aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] opacity-20" viewbox="0 0 1024 1024">
<circle cx="512" cy="512" fill="url(#gradient)" fillOpacity="0.15" r="512"></circle>
<defs>
<radialgradient id="gradient">
<stop stop-color="#fff"></stop>
<stop offset="1" stop-color="#fff"></stop>
</radialgradient>
</defs>
</svg>
</section>

<footer className="bg-white dark:bg-zinc-950 transition-colors duration-300">
<div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
<div className="flex justify-center space-x-6 md:order-2">
<a className="text-zinc-400 hover:text-zinc-500 dark:hover:text-zinc-300" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:letter-linear" width="22"></iconify-icon>
</a>
</div>
<div className="mt-8 md:order-1 md:mt-0">
<p className="text-center text-xs leading-5 text-zinc-400">© 2024 Simplissimo. Tous droits réservés. Paris, France.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
