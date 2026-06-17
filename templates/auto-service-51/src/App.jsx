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
navy: '#1A2A4A',
orange: '#E85D04',
offwhite: '#F8F8F6',
ink: '#1C1C1E',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const links = menu.querySelectorAll('a');

            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-offwhite/90 backdrop-blur-md border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex-shrink-0">
<a className="text-xl lg:text-2xl font-semibold tracking-tighter text-navy flex items-center" href="#">
                        PNEUSERVIS<span className="text-orange">.</span>KOLESÁR
                    </a>
</div>
<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#ako-to-funguje">Ako to funguje</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#rezervacia">Rezervácia</a>
<a className="text-sm font-medium text-gray-600 hover:text-navy transition-colors" href="#kontakt">Kontakt</a>
</nav>
<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-navy hover:text-orange transition-colors" href="tel:0900123456">0900 123 456</a>
<a className="bg-orange hover:bg-[#d45403] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm" href="#rezervacia">
                        Rezervovať termín
                    </a>
</div>
<div className="md:hidden flex items-center">
<button aria-label="Menu" className="text-gray-600 hover:text-navy focus:outline-none p-2" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="hidden md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50" href="#sluzby">Služby</a>
<a className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50" href="#ako-to-funguje">Ako to funguje</a>
<a className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50" href="#rezervacia">Rezervácia</a>
<a className="block px-3 py-4 text-base font-medium text-gray-800 border-b border-gray-50" href="#kontakt">Kontakt</a>
<div className="pt-4 px-3">
<a className="block w-full text-center bg-orange text-white font-medium py-3.5 rounded-lg" href="#rezervacia">
                        Rezervovať termín
                    </a>
</div>
</div>
</div>
</header>

<section className="bg-navy pt-28 pb-12 lg:pt-36 lg:pb-20 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/5 text-xs font-semibold mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
</span>
                        Otvorené termíny na túto sezónu
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] mb-6">
                        Prezujte sa bez čakania na telefón.
                    </h1>
<p className="text-lg lg:text-xl text-white/70 mb-8 max-w-lg leading-relaxed font-normal">
                        Rezervujte si termín online za 60 sekúnd – kedykoľvek, aj cez víkend. Presne na čas a bez stresu.
                    </p>

<div className="flex flex-col w-full sm:max-w-md gap-4">
<a className="w-full text-center bg-orange hover:bg-[#d45403] text-white text-base lg:text-lg font-medium px-8 py-4 rounded-xl transition-all shadow-lg shadow-orange/20 flex justify-center items-center gap-2" href="#rezervacia">
                            Rezervovať termín
                            <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full text-center text-white/60 hover:text-white text-base font-medium py-3 rounded-xl transition-colors flex justify-center items-center gap-2" href="tel:0900123456">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                            Alebo zavolajte: 0900 123 456
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-white/10 w-full flex flex-col sm:flex-row items-start sm:items-center gap-y-4 gap-x-8 text-sm text-white/60 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange text-lg" icon="solar:star-bold"></iconify-icon>
<span className="text-white">4.9/5</span> hodnotenie
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/40 text-lg" icon="solar:tag-price-linear"></iconify-icon>
                            Prezutie od 25€
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/40 text-lg" icon="solar:map-point-linear"></iconify-icon>
                            Bratislava - Ružinov
                        </div>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent rounded-2xl z-10 pointer-events-none"></div>
<img alt="Dark automotive tire service" className="rounded-2xl shadow-2xl object-cover h-[400px] lg:h-[600px] w-full border border-white/5" loading="lazy" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-navy/95 backdrop-blur-md p-4 rounded-xl shadow-2xl z-20 flex items-center gap-4 border border-white/10 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center text-orange">
<iconify-icon className="text-2xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-white">Potvrdenie ihneď</p>
<p className="text-xs text-white/60">Do SMS a e-mailu</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-navy py-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="flex items-start gap-4 pt-4 md:pt-0">
<iconify-icon className="text-3xl text-orange flex-shrink-0 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h3 className="text-white font-semibold text-base mb-1">Rezervácia 24/7</h3>
<p className="text-white/70 text-sm">Rezervujte si termín aj večer alebo počas víkendu.</p>
</div>
</div>
<div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
<iconify-icon className="text-3xl text-orange flex-shrink-0 mt-1" icon="solar:stopwatch-linear"></iconify-icon>
<div>
<h3 className="text-white font-semibold text-base mb-1">Bez čakania na linke</h3>
<p className="text-white/70 text-sm">Žiadne obsadené tóny. Vyberte si čas a hotovo.</p>
</div>
</div>
<div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-8">
<iconify-icon className="text-3xl text-orange flex-shrink-0 mt-1" icon="solar:shield-check-linear"></iconify-icon>
<div>
<h3 className="text-white font-semibold text-base mb-1">Istota termínu</h3>
<p className="text-white/70 text-sm">Termín vám okamžite potvrdíme a podržíme.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="sluzby">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-4">Čo u nás urobíme</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Kompletný servis pre vaše kolesá s profesionálnym prístupom a modernou technikou.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="w-14 h-14 bg-offwhite group-hover:bg-orange/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-3xl text-navy group-hover:text-orange transition-colors" icon="solar:wheel-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-2 tracking-tight">Prezutie pneumatík</h3>
<p className="text-sm text-gray-500 mb-6">Kompletné prehodenie sád kolies alebo pneumatík na diskoch.</p>
<div className="flex items-end justify-between border-t border-gray-50 pt-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Cena od</span>
<span className="text-lg font-semibold text-navy">25 €</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="w-14 h-14 bg-offwhite group-hover:bg-orange/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-3xl text-navy group-hover:text-orange transition-colors" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-2 tracking-tight">Uskladnenie</h3>
<p className="text-sm text-gray-500 mb-6">Bezpečné uskladnenie vašich pneumatík počas sezóny v suchu.</p>
<div className="flex items-end justify-between border-t border-gray-50 pt-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Cena od</span>
<span className="text-lg font-semibold text-navy">20 € / sezóna</span>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer">
<div className="w-14 h-14 bg-offwhite group-hover:bg-orange/10 rounded-xl flex items-center justify-center mb-6 transition-colors">
<iconify-icon className="text-3xl text-navy group-hover:text-orange transition-colors" icon="solar:scale-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-navy mb-2 tracking-tight">Vyváženie kolies</h3>
<p className="text-sm text-gray-500 mb-6">Precízne vyváženie pre plynulú a bezpečnú jazdu bez vibrácií.</p>
<div className="flex items-end justify-between border-t border-gray-50 pt-4">
<span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Cena od</span>
<span className="text-lg font-semibold text-navy">15 €</span>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white border-y border-gray-100" id="ako-to-funguje">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-4">Ako funguje online rezervácia?</h2>
<p className="text-lg text-gray-600">Žiadne volanie. Žiadne čakanie. Len 60 sekúnd.</p>
</div>
<div className="relative">
<div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-gray-100 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-offwhite rounded-full flex items-center justify-center shadow-sm mb-6 relative">
<span className="text-2xl font-semibold text-orange">1</span>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Vyberiete termín</h3>
<p className="text-sm text-gray-500 px-4">Zvolíte si dátum a čas v kalendári, ktorý vám najviac vyhovuje.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-offwhite rounded-full flex items-center justify-center shadow-sm mb-6 relative">
<span className="text-2xl font-semibold text-orange">2</span>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Vyplníte formulár</h3>
<p className="text-sm text-gray-500 px-4">Zadáte meno, kontakt a typ auta, aby sme vedeli, s čím prídete.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-4 border-offwhite rounded-full flex items-center justify-center shadow-sm mb-6 relative">
<span className="text-2xl font-semibold text-orange">3</span>
</div>
<h3 className="text-xl font-semibold text-navy mb-3 tracking-tight">Prídete na servis</h3>
<p className="text-sm text-gray-500 px-4">My vás čakáme v presný čas. Bez radu, bez zbytočného zdržania.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50 relative" id="rezervacia">
<div className="absolute top-0 left-0 w-full h-64 bg-navy z-0"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Rezervujte si termín</h2>
<p className="text-white/80 text-lg">Vyberte si službu a čas, ktorý vám vyhovuje</p>
</div>
<div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
<div className="p-6 sm:p-10">
<form action="#" className="space-y-8" method="POST">
<div>
<h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
<iconify-icon className="text-orange" icon="solar:user-linear"></iconify-icon>
                                1. Vaše údaje
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">Meno a priezvisko</label>
<input className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white" id="name" name="name" placeholder="Napr. Jozef Novák" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Telefónne číslo</label>
<input className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white" id="phone" name="phone" placeholder="+421 9XX XXX XXX" required="" type="tel"/>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
<iconify-icon className="text-orange" icon="solar:car-linear"></iconify-icon>
                                2. Služba a vozidlo
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="vehicle">Typ vozidla</label>
<select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white text-gray-800" id="vehicle" name="vehicle" required="">
<option disabled="" selected="" value="">Vyberte typ vozidla</option>
<option value="osobne">Osobné auto</option>
<option value="suv">SUV / Offroad</option>
<option value="dodavka">Dodávka</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="service">Služba</label>
<select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white text-gray-800" id="service" name="service" required="">
<option disabled="" selected="" value="">Vyberte službu</option>
<option value="prezutie_disky">Prezutie (kompletné kolesá)</option>
<option value="prezutie_pneu">Prezutie (iba pneumatiky)</option>
<option value="vyvazenie">Iba vyváženie</option>
</select>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold text-navy mb-4 flex items-center gap-2 border-b border-gray-100 pb-2">
<iconify-icon className="text-orange" icon="solar:calendar-linear"></iconify-icon>
                                3. Dátum a čas
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="date">Dátum</label>
<input className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white text-gray-800" id="date" name="date" required="" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="time">Čas</label>
<select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white text-gray-800" id="time" name="time" required="">
<option disabled="" selected="" value="">Vyberte voľný čas</option>
<option value="08:00">08:00</option>
<option value="09:00">09:00</option>
<option value="10:00">10:00</option>
<option value="11:00">11:00</option>
<option value="13:00">13:00</option>
<option value="14:00">14:00</option>
<option value="15:00">15:00</option>
<option value="16:00">16:00</option>
</select>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="notes">Poznámka (nepovinné)</label>
<textarea className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:ring-2 focus:ring-orange/20 focus:border-orange outline-none transition-all bg-gray-50 focus:bg-white resize-none" id="notes" name="notes" placeholder="Napr. potrebujem aj uskladniť pneu..." rows="2"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-orange hover:bg-[#d45403] text-white text-lg font-medium py-4 rounded-xl transition-all shadow-md flex justify-center items-center gap-2" type="button">
                                Potvrdiť rezerváciu
                            </button>
<p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1.5">
<iconify-icon className="text-gray-400" icon="solar:info-circle-linear"></iconify-icon>
                                Potvrdenie dostanete SMS alebo telefonicky do 1 hodiny.
                            </p>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-orange text-xs font-semibold tracking-widest uppercase mb-2 block">Pre majiteľov servisov</span>
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-navy mb-4">Prečo mať online rezerváciu?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
<iconify-icon className="text-3xl text-navy mb-4" icon="solar:phone-calling-rounded-linear"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-2">Menej telefonátov počas sezóny</h3>
<p className="text-sm text-gray-600">Sústredíte sa na prácu na dielni, nie na zdvíhanie neustálych telefonátov od zákazníkov.</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
<iconify-icon className="text-3xl text-navy mb-4" icon="solar:chart-linear"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-2">Lepšie rozloženie zákazníkov</h3>
<p className="text-sm text-gray-600">Systém rovnomerne rozdelí prácu počas dňa, eliminujete návaly a prestoje.</p>
</div>
<div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl">
<iconify-icon className="text-3xl text-navy mb-4" icon="solar:moon-sleep-linear"></iconify-icon>
<h3 className="text-base font-semibold text-navy mb-2">Rezervácie aj večer a cez víkend</h3>
<p className="text-sm text-gray-600">Až 40% rezervácií vzniká mimo pracovných hodín. Zákazník si termín vybaví z pohodlia obývačky.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-offwhite">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-navy mb-4">Čo hovoria naši zákazníci</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-orange mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 italic">"Rezervácia za minútu, bez čakania na linke ako po minulé roky. Prišiel som presne na čas a hneď ma vzali. Paráda."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-navy font-semibold text-sm">TK</div>
<div>
<p className="text-sm font-semibold text-navy">Tomáš K.</p>
<p className="text-xs text-gray-400">Bratislava</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-orange mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 italic">"Konečne pneuservis v 21. storočí. Vyklikala som si termín v nedeľu večer pri telke. Mechanici boli super milí a rýchli."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-navy font-semibold text-sm">MB</div>
<div>
<p className="text-sm font-semibold text-navy">Michaela B.</p>
<p className="text-xs text-gray-400">Pezinok</p>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
<div className="flex text-orange mb-4 gap-0.5">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-sm text-gray-600 mb-6 italic">"Vždy som zabúdal zavolať cez deň, keď mali otvorené. Tento systém je pre mňa záchrana. Ceny férové, prístup profi."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-navy font-semibold text-sm">JH</div>
<div>
<p className="text-sm font-semibold text-navy">Jozef H.</p>
<p className="text-xs text-gray-400">Senec</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pb-16 px-4 sm:px-6 lg:px-8">
<div className="max-w-5xl mx-auto bg-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-orange/10 blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Nezastavujte zákazníkov pred dverami</h2>
<p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto">Dajte im možnosť rezervovať si termín online – 24 hodín denne, 7 dní v týždni. Vyskúšajte si tento koncept.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto text-center bg-orange hover:bg-[#d45403] text-white text-base lg:text-lg font-medium px-10 py-4 rounded-xl transition-all shadow-lg" href="#rezervacia">
                        Vyskúšať rezerváciu
                    </a>
<a className="w-full sm:w-auto text-center text-white hover:text-orange text-base font-medium px-8 py-4 transition-colors" href="tel:0900123456">
                        Zavolajte nám: 0900 123 456
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-[#0b1324] pt-16 pb-8 border-t border-white/5" id="kontakt">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white flex items-center mb-4" href="#">
                        PNEUSERVIS<span className="text-orange">.</span>KOLESÁR
                    </a>
<p className="text-sm text-gray-400 mb-6">Moderný pneuservis, kde nemusíte čakať. Rezervujte si termín online kedykoľvek.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Rýchle odkazy</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover:text-white transition-colors" href="#sluzby">Naše služby</a></li>
<li><a className="hover:text-white transition-colors" href="#ako-to-funguje">Ako funguje rezervácia</a></li>
<li><a className="hover:text-white transition-colors text-orange" href="#rezervacia">Rezervovať termín</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kontakt</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            0900 123 456
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                            info@pneuserviskolesar.sk
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-lg mt-0.5" icon="solar:map-point-linear"></iconify-icon>
                            Priemyselná 12<br/>821 09 Bratislava
                        </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Otváracie hodiny</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li className="flex justify-between"><span>Po - Pia:</span> <span>8:00 - 18:00</span></li>
<li className="flex justify-between"><span>Sobota:</span> <span>9:00 - 13:00</span></li>
<li className="flex justify-between text-gray-500"><span>Nedeľa:</span> <span>Zatvorené</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">
                    © 2026 Pneuservis Kolesár. Demo projekt online rezervácie.
                </p>
<div className="flex gap-4 text-xs text-gray-500">
<a className="hover:text-white transition-colors" href="#">GDPR a súkromie</a>
<a className="hover:text-white transition-colors" href="#">Obchodné podmienky</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
