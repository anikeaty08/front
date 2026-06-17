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
      

<div className="fixed top-0 left-0 h-1 bg-[#FF7A00] z-50 transition-all duration-300 w-1/3"></div>

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900" href="#">ZLATÁKORUNA</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">Zprávy</a>
<a className="text-gray-900 transition-colors" href="#">Analýzy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Srovnání</a>
<a className="hover:text-gray-900 transition-colors" href="#">Akademie</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</button>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-colors" href="#">
                    Odebírat
                </a>
<button className="md:hidden p-2 text-gray-400">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">

<aside className="hidden lg:block lg:col-span-2 relative">
<div className="sticky top-28">
<h3 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Obsah článku</h3>
<nav className="space-y-3 border-l border-gray-100">
<a className="block pl-4 text-sm text-[#FF7A00] font-medium border-l border-[#FF7A00] -ml-[1px]" href="#kdy-klesnou">Kdy klesnou sazby?</a>
<a className="block pl-4 text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#vliv-cnb">Vliv rozhodnutí ČNB</a>
<a className="block pl-4 text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#srovnani-bank">Aktuální nabídky bank</a>
<a className="block pl-4 text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#fixace">Jakou zvolit fixaci</a>
<a className="block pl-4 text-sm text-gray-500 hover:text-gray-900 transition-colors" href="#faq">Časté dotazy</a>
</nav>

<div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
<p className="text-xs text-gray-500 mb-2">Hledáte hypotéku?</p>
<a className="text-sm font-medium text-[#FF7A00] hover:text-orange-700 flex items-center gap-1 group" href="#">
                            Srovnat nabídky 
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</aside>

<main className="lg:col-span-7 lg:col-start-3">

<details className="lg:hidden mb-8 group bg-gray-50 rounded-xl border border-gray-200 cursor-pointer">
<summary className="flex justify-between items-center p-4 text-sm font-medium text-gray-900">
                        Zobrazit obsah článku
                        <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<nav className="p-4 pt-0 border-t border-gray-200 mt-2 space-y-3">
<a className="block text-sm text-[#FF7A00] font-medium" href="#kdy-klesnou">Kdy klesnou sazby?</a>
<a className="block text-sm text-gray-600" href="#vliv-cnb">Vliv rozhodnutí ČNB</a>
<a className="block text-sm text-gray-600" href="#srovnani-bank">Aktuální nabídky bank</a>
<a className="block text-sm text-gray-600" href="#fixace">Jakou zvolit fixaci</a>
</nav>
</details>

<article>
<div className="mb-8">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-[#FF7A00] tracking-wide uppercase">
                            Analýza
                        </span>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mt-5 leading-[1.15]">
                            Budoucnost hypoték: Kdy klesnou úrokové sazby pod hranici 4 %?
                        </h1>
<p className="text-lg text-gray-500 mt-4 leading-relaxed font-medium">
                            Centrální banka pozvolna uvolňuje měnovou politiku. Analyzovali jsme výhledy hlavních ekonomů a aktuální kroky komerčních bank, abychom zjistili, kdy se dočkáme levnějších úvěrů na bydlení.
                        </p>
<div className="flex items-center gap-4 mt-6">
<div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">

<img alt="Autor" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div>
<div className="text-sm font-medium text-gray-900">Ing. Martin Novák</div>
<div className="text-xs text-gray-500 flex items-center gap-2 mt-0.5">
<span>24. října 2023</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                                        6 min čtení
                                    </span>
</div>
</div>
</div>
</div>

<figure className="mb-10 group relative overflow-hidden rounded-2xl bg-gray-100 aspect-[16/9]">
<img alt="Architektura a finance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<figcaption className="absolute bottom-3 right-3 text-[10px] text-white/70 bg-black/40 px-2 py-1 rounded backdrop-blur-sm">Foto: Unsplash</figcaption>
</figure>

<div className="w-full h-24 bg-gray-50 border border-gray-100 rounded-xl mb-12 flex flex-col items-center justify-center text-gray-400 group cursor-pointer hover:border-gray-200 transition-colors">
<span className="text-[10px] tracking-widest uppercase mb-1">Reklama</span>
<span className="text-sm font-medium text-gray-300 group-hover:text-gray-400 transition-colors">Zde může být váš banner</span>
</div>

<div className="max-w-[680px] mx-auto text-base text-gray-700 leading-relaxed font-normal">
<p className="mb-6 text-lg text-gray-800 font-medium">
                            Trh s bydlením zažívá po letech stagnace mírné oživení. Klíčovým faktorem, na který čekají desítky tisíc zájemců o vlastní nemovitost, je pokles úrokových sazeb hypoték na psychologickou hranici. Jak daleko od ní jsme?
                        </p>
<p className="mb-6">
                            Česká národní banka (ČNB) započala cyklus snižování úrokových sazeb. Základní repo sazba se sice pohybuje směrem dolů, nicméně komerční banky promítají toto zlevňování do svých hypotečních produktů jen velmi opatrně. Důvodem je cena peněz na mezibankovním trhu s delší splatností a snaha bank udržet si ziskové marže.
                        </p>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mt-12 mb-5" id="kdy-klesnou">
                            Predikce na rok 2024: Kdy se dočkáme zlevnění?
                        </h2>
<p className="mb-6">
                            Většina dotázaných analytiků se shoduje, že <strong className="text-gray-900 font-medium">výraznější zlevnění hypoték můžeme očekávat až ve druhé polovině roku</strong>. „Banky aktuálně testují poptávku. Vidíme individuální slevové akce, ale plošný pokles nabídkových sazeb pod 5 % je zatím výjimečný,“ komentuje situaci hlavní ekonom.
                        </p>

<div className="w-full p-4 my-8 bg-gray-50 border border-gray-100 rounded-xl text-center flex flex-col items-center">
<span className="text-[10px] text-gray-400 tracking-widest uppercase mb-2">Reklama</span>
<div className="w-full max-w-sm h-[250px] bg-white border border-gray-200 rounded flex items-center justify-center text-gray-300 text-sm">
                                300x250 Banner
                            </div>
</div>
<p className="mb-6">
                            Komerční banky si tvoří polštář pro případ nepředvídatelných výkyvů. Zatímco krátkodobé peníze zlevňují, dlouhodobé zdroje, ze kterých se hypotéky financují, reagují na kroky centrální banky pomaleji. Přesto tlak trhu roste.
                        </p>

<blockquote className="my-10 pl-6 border-l-2 border-[#FF7A00]">
<p className="text-xl text-gray-900 font-medium leading-snug">
                                "Očekáváme, že sazby kolem 4,5 % uvidíme stabilně koncem léta. Hranice 4 % padne pravděpodobně až v prvním kvartálu příštího roku, pokud nedojde k nečekanému inflačnímu šoku."
                            </p>
<footer className="mt-4 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<div className="text-sm">
<strong className="text-gray-900 font-medium block">Pavel Sýkora</strong>
<span className="text-gray-500 text-xs">Hlavní analytik, Finanční institut</span>
</div>
</footer>
</blockquote>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mt-12 mb-5" id="vliv-cnb">
                            Jak se zachovat právě teď?
                        </h2>
<p className="mb-6">
                            Pro zájemce o koupi nemovitosti nastává dilema: koupit nyní za vyšší sazbu, ale dříve než začnou ceny nemovitostí opět strmě růst, nebo čekat na levnější hypotéku a riskovat dražší nemovitost? 
                        </p>

<div className="my-8 p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex gap-4 items-start">
<div className="mt-1 text-[#FF7A00] bg-orange-100 p-2 rounded-lg">
<iconify-icon className="text-xl" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Tip experta Zlaté koruny</h4>
<p className="text-sm text-gray-700 leading-relaxed">
                                    Pokud najdete vysněnou nemovitost za dobrou cenu nyní, zvažte kratší fixaci (např. na 1 až 3 roky). Až sazby klesnou, budete moci úvěr refinancovat za výhodnějších podmínek, aniž byste platili vysoké sankce.
                                </p>
</div>
</div>

<div className="my-12 p-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-sm">
<div className="bg-white rounded-[22px] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex-1 text-center sm:text-left">
<h3 className="text-lg font-semibold text-gray-900 mb-2">Chcete zjistit své aktuální možnosti?</h3>
<p className="text-sm text-gray-500">Srovnejte si neveřejné nabídky bank a získejte úrok, který na pobočce nedostanete.</p>
</div>
<a className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-[#FF7A00] rounded-xl hover:bg-orange-600 hover:shadow-md hover:shadow-orange-500/20 transition-all" href="#">
                                    Srovnat hypotéky
                                    <iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mt-12 mb-5" id="srovnani-bank">
                            Aktuální pohled do nabídek bank
                        </h2>
<p className="mb-6">
                            Některé instituce již reagují na vývoj trhu a nabízejí „akční“ sazby pro specifické účely, jako jsou energeticky úsporné nemovitosti (tzv. zelené hypotéky). Běžný klient bez historie v dané bance se však stále setkává se sazbami kolem 5,2 % až 5,6 %.
                        </p>

<div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
<div className="text-2xl font-semibold text-gray-900 mb-1">5,34 %</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Průměrná nabídka</div>
</div>
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
<div className="text-2xl font-semibold text-[#FF7A00] mb-1">4,79 %</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Nejnižší akční sazba</div>
</div>
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center col-span-2 md:col-span-1">
<div className="text-2xl font-semibold text-gray-900 mb-1">6,00 %</div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Zákl. sazba ČNB</div>
</div>
</div>

<div className="my-10 p-6 border border-gray-200 rounded-2xl relative">
<div className="absolute -top-3 left-6 px-2 bg-white text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                                Doporučený partner
                            </div>
<div className="flex flex-col sm:flex-row items-center gap-6">
<div className="w-24 h-12 flex-shrink-0 grayscale opacity-70 flex items-center justify-center">
<span className="font-bold text-xl tracking-tighter text-gray-900">BANKA.cz</span>
</div>
<div className="flex-1 text-center sm:text-left">
<h4 className="text-sm font-semibold text-gray-900 mb-1">Exkluzivní sazba s refinancováním</h4>
<p className="text-xs text-gray-500 leading-relaxed">Garantujeme předschválení úvěru do 24 hodin a odhad nemovitosti zdarma. Pro klienty Zlaté koruny navíc sjednání bez poplatku.</p>
</div>
<a className="inline-flex items-center px-4 py-2 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-gray-900 transition-colors" href="#">
                                    Zjistit více
                                </a>
</div>
</div>
<p className="mb-6">
                            Rozhodnutí o načasování hypotéky je vždy individuální a závisí na konkrétní životní situaci. Ekonomické indikátory naznačují pozvolné zlepšování, ale návrat k sazbám kolem 2 %, které pamatujeme z minulých let, je v dohledné době velmi nepravděpodobný.
                        </p>

<a className="block my-10 group" href="#">
<div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group-hover:bg-gray-100 group-hover:border-gray-200 transition-all">
<div className="w-full sm:w-32 h-24 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0">
<img alt="Související článek" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-[10px] font-medium text-[#FF7A00] uppercase tracking-wider mb-1">Související čtení</span>
<h4 className="text-base font-semibold text-gray-900 leading-tight group-hover:underline decoration-gray-300 underline-offset-2">Stavební spoření dostává ránu. Vyplatí se ještě po změnách státní podpory?</h4>
</div>
</div>
</a>
</div>
</article>

<div className="max-w-[680px] mx-auto mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-wrap gap-2">
<a className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-gray-100 transition-colors" href="#">Hypotéky</a>
<a className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-gray-100 transition-colors" href="#">Úrokové sazby</a>
<a className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-md hover:bg-gray-100 transition-colors" href="#">ČNB</a>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Sdílet</span>
<button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 transition-colors">
<iconify-icon className="text-lg" icon="solar:share-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path></svg>
</button>
</div>
</div>

<div className="max-w-[680px] mx-auto mt-16" id="faq">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-6">Často kladené dotazy</h3>
<div className="space-y-4">
<details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm text-gray-900 hover:bg-gray-50">
                                Kdy bude nejlepší čas vzít si hypotéku v roce 2024?
                                <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                Pokud nepospícháte, analytici doporučují vyčkat na konec léta nebo podzim, kdy by měly sazby klesnout k hranici 4,5 %. Pokud nemovitost potřebujete hned, volte kratší fixaci (1-3 roky).
                            </div>
</details>
<details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
<summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm text-gray-900 hover:bg-gray-50">
                                Co je to refinancování a kdy se vyplatí?
                                <iconify-icon className="text-gray-400 group-open:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-2">
                                Refinancování znamená převedení úvěru do jiné banky za lepších podmínek. Vyplatí se v momentě, kdy tržní sazby klesnou pod vaši aktuální zafixovanou sazbu a končí vám období fixace.
                            </div>
</details>
</div>
</div>
</main>

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-28 space-y-8">

<div className="w-full aspect-square bg-gray-50 border border-gray-100 rounded-2xl flex flex-col items-center justify-center text-gray-400 group cursor-pointer hover:border-gray-200 transition-colors">
<span className="text-[10px] tracking-widest uppercase mb-1">Reklama</span>
<span className="text-sm font-medium text-gray-300">300x300</span>
</div>

<div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
<h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-4">
<iconify-icon className="text-[#FF7A00] text-lg" icon="solar:fire-linear"></iconify-icon>
                            Nejčtenější dnes
                        </h3>
<ul className="space-y-4">
<li className="flex gap-3 items-start group">
<span className="text-[#FF7A00] font-semibold text-sm">1</span>
<a className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 group-hover:underline underline-offset-2" href="#">Penzijní spoření v roce 2024: Kdo přijde o státní příspěvek?</a>
</li>
<li className="flex gap-3 items-start group">
<span className="text-gray-300 font-semibold text-sm">2</span>
<a className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 group-hover:underline underline-offset-2" href="#">Velké srovnání spořicích účtů: Kde vám peníze vydělají nejvíc</a>
</li>
<li className="flex gap-3 items-start group">
<span className="text-gray-300 font-semibold text-sm">3</span>
<a className="text-sm text-gray-700 leading-snug group-hover:text-gray-900 group-hover:underline underline-offset-2" href="#">Kryptoměny ožívají. Bitcoin útočí na nová historická maxima</a>
</li>
</ul>
</div>

<div className="bg-gray-900 rounded-2xl p-6 relative overflow-hidden text-center group">
<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-[#FF7A00] rounded-full flex items-center justify-center mb-3 text-white">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="text-white font-semibold text-base mb-2">Cena veřejnosti 2024</h3>
<p className="text-gray-400 text-xs mb-4">Hlasujte pro nejlepší finanční produkt a vyhrajte iPhone 15.</p>
<a className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 transition-colors" href="#">
                                Chci hlasovat
                            </a>
</div>
</div>
</div>
</aside>
</div>
</div>

<section className="bg-gray-50 border-t border-gray-100 py-16 mt-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="w-full h-24 max-w-4xl mx-auto bg-white border border-gray-200 rounded-xl mb-16 flex flex-col items-center justify-center text-gray-400">
<span className="text-[10px] tracking-widest uppercase mb-1">Reklama</span>
<span className="text-sm font-medium text-gray-300">Zviditelněte svůj produkt zde</span>
</div>
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Doporučené čtení</h2>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-[#FF7A00] hover:text-orange-700 transition-colors" href="#">
                    Všechny články <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<a className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="aspect-[16/9] bg-gray-200 overflow-hidden relative">
<img alt="Peníze" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-gray-900 uppercase tracking-wider">Investice</span>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#FF7A00] transition-colors">Jak porazit inflaci? 5 konzervativních investic pro rok 2024</h3>
<p className="text-sm text-gray-500 line-clamp-2 mt-auto">Hledáte způsob, jak ochránit úspory před znehodnocením, ale nechcete riskovat na akciovém trhu?</p>
</div>
</a>

<a className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="aspect-[16/9] bg-gray-200 overflow-hidden relative">
<img alt="Terminál" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-gray-900 uppercase tracking-wider">Karty</span>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#FF7A00] transition-colors">Prémiové kreditní karty: Která se vyplatí nejvíce?</h3>
<p className="text-sm text-gray-500 line-clamp-2 mt-auto">Letištní salonky, cestovní pojištění a cashback. Srovnali jsme benefity černých karet českých bank.</p>
</div>
</a>

<a className="group hidden sm:flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow" href="#">
<div className="aspect-[16/9] bg-gray-200 overflow-hidden relative">
<img alt="Smlouva" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-semibold text-gray-900 uppercase tracking-wider">Pojištění</span>
</div>
<div className="p-5 flex flex-col flex-1">
<h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2 group-hover:text-[#FF7A00] transition-colors">Životní pojištění není spoření. Nejčastější chyby při sjednávání</h3>
<p className="text-sm text-gray-500 line-clamp-2 mt-auto">Platíte zbytečně moc za krytí, které nepotřebujete? Průvodce správným nastavením pojistky.</p>
</div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-orange-50 text-[#FF7A00] rounded-xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Máte špičkový produkt?</h3>
<p className="text-sm text-gray-500 mb-6">Přihlaste svůj finanční produkt do soutěže Zlatá koruna a získejte prestižní ocenění, kterému klienti důvěřují.</p>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-gray-900 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors w-full sm:w-auto mt-auto" href="#">
                        Přihlásit produkt
                    </a>
</div>
<div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-gray-50 text-gray-700 rounded-xl flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">B2B Spolupráce</h3>
<p className="text-sm text-gray-500 mb-6">Chcete oslovit bonitní publikum se zájmem o finance? Nabízíme prémiové PR články a bannerové pozice.</p>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors w-full sm:w-auto mt-auto" href="#">
                        Nabídka pro partnery
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-xl font-semibold tracking-tighter text-gray-900 opacity-50">ZLATÁKORUNA</div>
<div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#">O nás</a>
<a className="hover:text-gray-900 transition-colors" href="#">Kontakty</a>
<a className="hover:text-gray-900 transition-colors" href="#">Podmínky použití</a>
<a className="hover:text-gray-900 transition-colors" href="#">Ochrana soukromí</a>
</div>
<div className="text-xs text-gray-400">
                © 2023 Zlatá koruna s.r.o.
            </div>
</div>
</footer>

    </>
  );
}
