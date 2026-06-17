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



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        const mobileLinks = menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Form Handling
        const form = document.getElementById('contact-form');
        const successMsg = document.getElementById('form-success');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Simulate API call / form submission
            setTimeout(() => {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
                form.reset();
            }, 300);
        });

        function resetForm() {
            successMsg.classList.add('hidden');
            form.classList.remove('hidden');
        }
    
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
      

<header className="fixed w-full top-0 z-50 bg-[#1C1C1C]/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-white text-xl sm:text-2xl font-semibold tracking-tighter" href="#">Elworks</a>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#domov">Domov</a>
<a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#sluzby">Služby</a>
<a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#preco-my">Prečo my</a>
<a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#realizacie">Realizácie</a>
<a className="text-gray-300 hover:text-white text-sm font-medium transition-colors" href="#kontakt">Kontakt</a>
</nav>

<div className="hidden md:flex items-center space-x-6">
<a className="text-white text-sm font-semibold tracking-tight hover:text-[#FFD60A] transition-colors flex items-center gap-2" href="tel:+421XXXXXXXXX">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                        +421 XXX XXX XXX
                    </a>
<a className="bg-[#FFD60A] text-[#1C1C1C] hover:bg-yellow-400 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all" href="#kontakt">
                        Nezáväzná ponuka
                    </a>
</div>

<div className="flex items-center md:hidden gap-4">
<a className="text-[#FFD60A] bg-gray-800/50 p-2 rounded-lg flex items-center justify-center" href="tel:+421XXXXXXXXX">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</a>
<button aria-controls="mobile-menu" aria-expanded="false" className="text-gray-300 hover:text-white focus:outline-none p-2" id="mobile-menu-btn" type="button">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#1C1C1C] border-b border-gray-800" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#domov">Domov</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#sluzby">Služby</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#preco-my">Prečo my</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#realizacie">Realizácie</a>
<a className="block px-3 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md" href="#kontakt">Kontakt</a>
<div className="pt-4 mt-2 border-t border-gray-800">
<a className="w-full text-center bg-[#FFD60A] text-[#1C1C1C] px-5 py-3 rounded-lg text-base font-semibold block" href="#kontakt">
                        Nezáväzná ponuka
                    </a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#1C1C1C] overflow-hidden" id="domov">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                        Spoľahlivý elektrikár v <span className="text-[#FFD60A]">Piešťanoch a Vrbovom</span><br/>— rýchlo, férovo, s certifikátom.
                    </h1>
<p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
                        Od drobných opráv až po komplexné elektroinštalácie novostavieb. Pracujeme rýchlo, bezpečne a s dôrazom na najvyššiu kvalitu odvedenej práce.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="bg-[#FFD60A] text-[#1C1C1C] hover:bg-yellow-400 px-6 py-3.5 rounded-lg text-base font-semibold text-center transition-all flex items-center justify-center gap-2" href="#kontakt">
                            Získať nezáväznú ponuku
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-transparent border border-gray-700 text-white hover:border-gray-500 px-6 py-3.5 rounded-lg text-base font-medium text-center transition-all flex items-center justify-center gap-2" href="tel:+421XXXXXXXXX">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            +421 XXX XXX XXX
                        </a>
</div>

<div className="flex flex-wrap items-center gap-y-4 gap-x-8 border-t border-gray-800 pt-8">
<div className="flex items-center gap-2 text-gray-300">
<iconify-icon className="text-[#FFD60A] text-xl" icon="solar:verified-check-linear"></iconify-icon>
<span className="text-sm font-medium">15+ rokov skúseností</span>
</div>
<div className="flex items-center gap-2 text-gray-300">
<iconify-icon className="text-[#FFD60A] text-xl" icon="solar:diploma-linear"></iconify-icon>
<span className="text-sm font-medium">Certifikovaný elektrikár</span>
</div>
<div className="flex items-center gap-2 text-gray-300">
<iconify-icon className="text-[#FFD60A] text-xl" icon="solar:calculator-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium">Bezplatná cenová ponuka</span>
</div>
</div>
</div>

<div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-[#1C1C1C]/40 to-transparent z-10"></div>
<img alt="Profesionálny elektrikár pri práci" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="sluzby">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Naše služby</h2>
<p className="text-gray-600 text-base lg:text-lg">Poskytujeme kompletné elektrikárske služby pre rezidenčných aj komerčných klientov. Spojte sa s nami pre akýkoľvek projekt.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Elektroinštalácie pre domy a byty</h3>
<p className="text-gray-600 text-sm leading-relaxed">Kompletné nové rozvody, zapájanie spotrebičov a modernizácia elektroinštalácie vo vašej domácnosti.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Elektroinštalácie pre firmy</h3>
<p className="text-gray-600 text-sm leading-relaxed">Návrh a realizácia silnoprúdových a slaboprúdových rozvodov pre kancelárie, sklady a prevádzky.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Rozvádzače a istenia</h3>
<p className="text-gray-600 text-sm leading-relaxed">Montáž, výmena a zapájanie elektrických rozvádzačov, ističov a prúdových chráničov.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Revízie elektrických zariadení</h3>
<p className="text-gray-600 text-sm leading-relaxed">Vykonávame odborné prehliadky a skúšky (OPaS) elektrických inštalácií a bleskozvodov.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:settings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Rekonštrukcie elektroinštalácií</h3>
<p className="text-gray-600 text-sm leading-relaxed">Výmena starých hliníkových káblov za nové medené rozvody podľa aktuálnych bezpečnostných noriem.</p>
</div>

<div className="group bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FFD60A]/10 transition-colors">
<iconify-icon className="text-3xl text-gray-700 group-hover:text-[#FFD60A] transition-colors" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Inteligentné inštalácie</h3>
<p className="text-gray-600 text-sm leading-relaxed">Návrh a montáž smart home systémov pre ovládanie osvetlenia, žalúzií a kúrenia na diaľku.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#F4F4F4]" id="preco-my">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Prečo si vybrať nás</h2>
<p className="text-gray-600 text-base lg:text-lg">Zakladáme si na odbornosti, transparentnosti a spokojnosti našich zákazníkov. Tu je dôvod, prečo nám dôverujú stovky klientov.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
<div className="bg-white p-8 rounded-xl border border-gray-100 flex gap-6 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-3xl text-[#1C1C1C]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Certifikovaný a poistený</h3>
<p className="text-gray-600 text-sm leading-relaxed">Pracujeme prísne podľa platných noriem, disponujeme všetkými potrebnými osvedčeniami a máme poistenie zodpovednosti za škodu.</p>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 flex gap-6 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-3xl text-[#1C1C1C]" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Rýchly nástup na prácu</h3>
<p className="text-gray-600 text-sm leading-relaxed">Vážime si váš čas. Pri urgentných situáciách a počiatočných dopytoch si s vami dohodneme termín obhliadky už do 48 hodín.</p>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 flex gap-6 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-3xl text-[#1C1C1C]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Férová a jasná cena</h3>
<p className="text-gray-600 text-sm leading-relaxed">Vždy vopred predložíme detailnú a prehľadnú cenovú ponuku. U nás vás neprekvapia žiadne skryté poplatky navyše.</p>
</div>
</div>
<div className="bg-white p-8 rounded-xl border border-gray-100 flex gap-6 items-start">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-3xl text-[#1C1C1C]" icon="solar:document-add-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight text-[#1C1C1C] mb-2">Záruky na odvedenú prácu</h3>
<p className="text-gray-600 text-sm leading-relaxed">Za kvalitou našej práce si stojíme. Na všetky naše realizácie a dodaný materiál poskytujeme plnú písomnú záruku.</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center bg-white border border-gray-200 text-[#1C1C1C] hover:bg-gray-50 px-8 py-3.5 rounded-lg text-base font-semibold shadow-sm transition-all gap-2" href="#kontakt">
                    Dohodnúť nezáväznú obhliadku
                    <iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="realizacie">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Naše realizácie</h2>
<p className="text-gray-600 text-base lg:text-lg">Ukážky z našich nedávnych projektov. Čistá práca, kvalitné materiály a zmysel pre detail.</p>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
<div className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Zapájanie rozvádzača" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white font-medium text-sm">Montáž hlavného rozvádzača</span>
</div>
</div>
<div className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Inštalácia svietidiel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white font-medium text-sm">Osvetlenie komerčných priestorov</span>
</div>
</div>
<div className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Hrubá inštalácia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white font-medium text-sm">Hrubá elektroinštalácia novostavby</span>
</div>
</div>
<div className="relative group aspect-square rounded-xl overflow-hidden bg-gray-100">
<img alt="Revízia" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<span className="text-white font-medium text-sm">Priemyselná elektroinštalácia</span>
</div>
</div>
</div>
<div className="bg-gray-50 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between border border-gray-100 gap-6">
<div>
<h4 className="text-lg font-semibold tracking-tight text-[#1C1C1C]">Máte záujem o podobnú realizáciu?</h4>
<p className="text-gray-600 text-sm mt-1">Sme pripravení vypočuť si vaše požiadavky a navrhnúť ideálne riešenie.</p>
</div>
<a className="whitespace-nowrap bg-[#1C1C1C] text-white hover:bg-gray-800 px-6 py-3 rounded-lg text-sm font-semibold transition-all" href="#kontakt">
                    Kontaktujte nás
                </a>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Čo hovoria naši zákazníci</h2>
<p className="text-gray-600 text-base lg:text-lg">Spokojnosť klientov je našou najlepšou vizitkou.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border-l-4 border-l-[#FFD60A]">
<div className="flex text-[#FFD60A] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                        "Profesionálny prístup, rýchla práca a veľmi čisté prevedenie. Odporúčam všetkým, ktorí hľadajú spoľahlivého elektrikára na ktorého sa dá spoľahnúť."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm">JK</div>
<div>
<p className="text-sm font-semibold text-[#1C1C1C]">Ján K.</p>
<p className="text-xs text-gray-500">Piešťany</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border-l-4 border-l-[#FFD60A]">
<div className="flex text-[#FFD60A] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                        "Prišli načas, cena bola presne podľa ponuky, žiadne vymýšľanie navyše. Som veľmi spokojná s novými rozvodmi v kuchyni."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm">MS</div>
<div>
<p className="text-sm font-semibold text-[#1C1C1C]">Marta S.</p>
<p className="text-xs text-gray-500">Vrbové</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-100 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.05)] border-l-4 border-l-[#FFD60A]">
<div className="flex text-[#FFD60A] mb-4">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                        "Kompletná elektroinštalácia našej novostavby prebehla bez problémov. Výborná komunikácia. Určite budem kontaktovať aj pri ďalšej zákazke."
                    </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-semibold text-sm">PM</div>
<div>
<p className="text-sm font-semibold text-[#1C1C1C]">Peter M.</p>
<p className="text-xs text-gray-500">okres Piešťany</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1C1C1C]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-6">
                Potrebujete elektrikára? Ozvite sa ešte dnes.
            </h2>
<p className="text-lg text-gray-400 mb-10">
                Bezplatná konzultácia a cenová ponuka bez záväzkov priamo u vás.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#FFD60A] text-[#1C1C1C] hover:bg-yellow-400 px-8 py-4 rounded-lg text-base font-semibold transition-all" href="#kontakt">
                    Napísať nám správu
                </a>
<a className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-4 rounded-lg text-base font-medium transition-all flex items-center justify-center gap-2" href="tel:+421XXXXXXXXX">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    Zavolať: +421 XXX XXX XXX
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[#F4F4F4]" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[#1C1C1C] mb-4">Kontaktujte nás</h2>
<p className="text-gray-600 text-base mb-10">Máte otázky alebo si chcete dohodnúť obhliadku? Vyplňte formulár alebo nás kontaktujte priamo. Sme tu pre vás.</p>
<div className="space-y-8">
<a className="flex items-start gap-4 group" href="tel:+421XXXXXXXXX">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-[#FFD60A] transition-colors">
<iconify-icon className="text-2xl text-[#1C1C1C]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Telefón</p>
<p className="text-xl font-semibold tracking-tight text-[#1C1C1C] group-hover:text-[#FFD60A] transition-colors">+421 XXX XXX XXX</p>
</div>
</a>
<a className="flex items-start gap-4 group" href="mailto:info@elworks.sk">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-[#FFD60A] transition-colors">
<iconify-icon className="text-2xl text-[#1C1C1C]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">E-mail</p>
<p className="text-lg font-medium text-[#1C1C1C] group-hover:text-[#FFD60A] transition-colors">info@elworks.sk</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-[#1C1C1C]" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Región pôsobenia</p>
<p className="text-base font-medium text-[#1C1C1C]">Piešťany, Vrbové a blízke okolie</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-2xl text-[#1C1C1C]" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Pracovná doba</p>
<p className="text-base font-medium text-[#1C1C1C]">Po - Pia: 8:00 - 18:00</p>
<p className="text-sm text-gray-500">Pohotovosť po dohode.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
<form className="space-y-6" id="contact-form">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Vaše meno alebo firma *</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD60A] focus:border-[#FFD60A] outline-none transition-all text-sm" id="name" name="name" placeholder="Ján Novák" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Telefónne číslo *</label>
<input className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD60A] focus:border-[#FFD60A] outline-none transition-all text-sm" id="phone" name="phone" placeholder="+421 9XX XXX XXX" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">Popis problému alebo dopytu</label>
<textarea className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FFD60A] focus:border-[#FFD60A] outline-none transition-all text-sm resize-none" id="message" name="message" placeholder="Dobrý deň, potreboval by som cenovú ponuku na..." rows="4"></textarea>
</div>
<button className="w-full bg-[#FFD60A] text-[#1C1C1C] hover:bg-yellow-400 px-6 py-4 rounded-lg text-base font-semibold transition-all" type="submit">
                            Odoslať dopyt
                        </button>
<p className="text-xs text-center text-gray-400 mt-4">Vaše údaje sú u nás v bezpečí a slúžia len na spätné kontaktovanie.</p>
</form>

<div className="hidden h-full flex flex-col items-center justify-center text-center py-10" id="form-success">
<div className="w-16 h-16 bg-[#FFD60A]/10 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-4xl text-[#1C1C1C]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#1C1C1C] mb-2">Ďakujeme!</h3>
<p className="text-gray-600">Váš dopyt sme úspešne prijali. Ozveme sa vám čo najskôr, zvyčajne do 24 hodín.</p>
<button className="mt-8 text-sm font-medium text-[#1C1C1C] underline hover:text-gray-600" onclick="resetForm()" type="button">Odoslať ďalšiu správu</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#151515] pt-16 pb-8 border-t border-gray-800 text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-gray-800 pb-12">

<div>
<a className="text-white text-2xl font-semibold tracking-tighter inline-block mb-4" href="#">Elworks</a>
<p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        Spoľahlivé elektroinštalácie, revízie a opravy pre domy a firmy v Piešťanoch, Vrbovom a okolí. Kvalita a bezpečnosť na prvom mieste.
                    </p>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Rýchle odkazy</h4>
<ul className="space-y-3">
<li><a className="text-gray-300 hover:text-white text-sm transition-colors" href="#domov">Domov</a></li>
<li><a className="text-gray-300 hover:text-white text-sm transition-colors" href="#sluzby">Naše služby</a></li>
<li><a className="text-gray-300 hover:text-white text-sm transition-colors" href="#preco-my">Prečo si vybrať nás</a></li>
<li><a className="text-gray-300 hover:text-white text-sm transition-colors" href="#realizacie">Realizácie</a></li>
<li><a className="text-gray-300 hover:text-white text-sm transition-colors" href="#kontakt">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Kontakt</h4>
<ul className="space-y-4">
<li>
<a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group" href="tel:+421XXXXXXXXX">
<iconify-icon className="text-lg text-gray-500 group-hover:text-[#FFD60A]" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-medium">+421 XXX XXX XXX</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group" href="mailto:info@elworks.sk">
<iconify-icon className="text-lg text-gray-500 group-hover:text-[#FFD60A]" icon="solar:letter-linear"></iconify-icon>
<span className="text-sm">info@elworks.sk</span>
</a>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-lg text-gray-500 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm">Piešťany a Vrbové, Slovakia</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
<p>© 2023 Elworks. Všetky práva vyhradené.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Ochrana osobných údajov</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
