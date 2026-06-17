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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EBE5DA] transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-2xl font-bold text-[#2A241E] tracking-tighter" href="#">just-book.</a>
</div>

<nav className="hidden md:flex space-x-10">
<a className="text-sm font-medium text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#services">Odkrywaj usługi</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#how-it-works">Jak to działa</a>
<a className="text-sm font-medium text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#business">Dla Biznesu</a>
</nav>

<div className="flex items-center space-x-6">
<a className="text-sm font-medium text-[#5D554A] hover:text-[#2A241E] transition-colors" href="#">
                        Zaloguj
                    </a>
<a className="inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-sm text-sm font-semibold bg-[#C5A059] hover:bg-[#b08d4b] text-white transition-all transform hover:-translate-y-0.5" href="#business">
                        Dodaj swój salon
                    </a>
</div>
</div>
</div>
</header>
<main className="pt-20">

<section className="lg:pt-32 lg:pb-32 overflow-hidden pt-16 pb-24 relative">
<div className="sm:px-6 lg:px-8 text-center max-w-7xl z-10 mr-auto ml-auto pr-4 pl-4 relative">
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#2A241E] tracking-tight mb-6 leading-tight">
                    Zarezerwuj. Odpocznij. <br className="hidden sm:block"/> Powtórz.
                </h1>
<p className="text-lg sm:text-xl font-light text-[#5D554A] max-w-2xl mx-auto mb-12 font-sans">
                    Najlepsze salony beauty, fizjoterapii i barberzy w Twoim mieście. <br className="hidden sm:block"/> Bez zakładania konta, bez dzwonienia.
                </p>

<div className="bg-white p-3 rounded-2xl sm:rounded-full shadow-2xl shadow-[#2A241E]/5 border border-[#EBE5DA] flex flex-col sm:flex-row items-center max-w-4xl mx-auto gap-2">

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-1 border-b sm:border-b-0 sm:border-r border-[#EBE5DA] relative group">
<iconify-icon className="text-[#C5A059] mr-4 text-xl" icon="solar:magnifer-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-bold text-[#2A241E] uppercase tracking-wider mb-0.5">Co?</label>
<input className="w-full text-base text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Manicure, barber, fizjo..." type="text"/>
</div>
</div>

<div className="flex-1 w-full flex items-center px-4 py-3 sm:py-1 relative group">
<iconify-icon className="text-[#C5A059] mr-4 text-xl" icon="solar:map-point-linear"></iconify-icon>
<div className="text-left w-full">
<label className="block text-xs font-bold text-[#2A241E] uppercase tracking-wider mb-0.5">Gdzie?</label>
<input className="w-full text-base text-[#2A241E] placeholder-[#9CA3AF] focus:outline-none bg-transparent font-medium" placeholder="Warszawa, Centrum..." type="text"/>
</div>
<button className="text-[#C5A059] hover:text-[#2A241E] text-xs font-semibold whitespace-nowrap ml-2 hidden md:block">
<iconify-icon className="inline align-middle text-lg" icon="solar:gps-linear"></iconify-icon>
</button>
</div>

<button className="w-full sm:w-auto bg-[#000053] hover:bg-[#000042] rounded-xl sm:rounded-full px-8 py-4 text-sm font-semibold transition-all shadow-lg text-white whitespace-nowrap">
                        Sprawdź wolne terminy
                    </button>
</div>
</div>

<div className="absolute top-0 right-0 -mr-40 -mt-20 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl z-0"></div>
<div className="absolute bottom-0 left-0 -ml-40 -mb-20 w-96 h-96 bg-[#2D5A27]/5 rounded-full blur-3xl z-0"></div>
</section>

<section className="border-y border-[#EBE5DA] bg-[#FAF9F6] py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
<p className="text-sm font-medium text-[#5D554A] uppercase tracking-wide">Zaufało nam już 500+ profesjonalistów</p>
<div className="flex items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#2A241E]" icon="solar:scissors-square-linear"></iconify-icon>
<span className="font-playfair font-semibold text-lg text-[#2A241E]">HairArt</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#2A241E]" icon="solar:stethoscope-linear"></iconify-icon>
<span className="font-playfair font-semibold text-lg text-[#2A241E]">Physio+</span>
</div>

<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-[#2A241E]" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-playfair font-semibold text-lg text-[#2A241E]">Gentlemen</span>
</div>
</div>
</div>
</section>

<section className="py-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">

<a className="group flex flex-col items-center justify-center p-6 bg-white border border-[#EBE5DA] rounded-xl hover:border-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300" href="#">
<iconify-icon className="text-4xl text-[#5D554A] mb-4 group-hover:text-[#C5A059] transition-colors" icon="solar:scissors-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#2A241E]">Barber &amp; Fryzjer</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white border border-[#EBE5DA] rounded-xl hover:border-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300" href="#">
<iconify-icon className="text-4xl text-[#5D554A] mb-4 group-hover:text-[#C5A059] transition-colors" icon="solar:face-scan-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#2A241E]">Twarz i Ciało</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white border border-[#EBE5DA] rounded-xl hover:border-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300" href="#">
<iconify-icon className="text-4xl text-[#5D554A] mb-4 group-hover:text-[#C5A059] transition-colors" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#2A241E]">Zdrowie i Fizjo</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white border border-[#EBE5DA] rounded-xl hover:border-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300" href="#">
<iconify-icon className="text-4xl text-[#5D554A] mb-4 group-hover:text-[#C5A059] transition-colors" icon="solar:hand-stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#2A241E]">Paznokcie</span>
</a>

<a className="group flex flex-col items-center justify-center p-6 bg-white border border-[#EBE5DA] rounded-xl hover:border-[#C5A059] hover:shadow-lg hover:shadow-[#C5A059]/10 transition-all duration-300 col-span-2 md:col-span-1" href="#">
<iconify-icon className="text-4xl text-[#5D554A] mb-4 group-hover:text-[#C5A059] transition-colors" icon="solar:menu-dots-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-[#2A241E]">Inne</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-[#2A241E] mb-4">3 kroki do relaksu</h2>
<p className="text-[#5D554A]">Prościej się nie da. Technologia, która nie przeszkadza.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-[#EBE5DA] -z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#2A241E] mb-6 shadow-sm">
<iconify-icon className="text-4xl text-[#C5A059]" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2A241E] mb-2">1. Znajdź</h3>
<p className="text-sm text-[#5D554A] max-w-xs">Wybierz usługę i lokalizację. Przeglądaj tylko zweryfikowane salony.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#2A241E] mb-6 shadow-sm">
<iconify-icon className="text-4xl text-[#C5A059]" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2A241E] mb-2">2. Wybierz termin</h3>
<p className="text-sm text-[#5D554A] max-w-xs">Widzisz kalendarz w czasie rzeczywistym. Żadnych telefonów.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[#FDFBF7] border border-[#EBE5DA] flex items-center justify-center text-[#2A241E] mb-6 shadow-sm">
<iconify-icon className="text-4xl text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2A241E] mb-2">3. Gotowe!</h3>
<p className="text-sm text-[#5D554A] max-w-xs">Potwierdzenie SMS i bezpieczna płatność PayU lub na miejscu.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#EBE5DA]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-3xl font-semibold text-[#2A241E]">Premium Wellness</h2>
<p className="mt-2 text-[#5D554A]">Najwyżej oceniane miejsca w Twojej okolicy.</p>
</div>
<a className="hidden sm:flex items-center text-[#C5A059] font-medium hover:text-[#b08d4b] transition-colors" href="#">
                        Zobacz wszystkie <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-[#EBE5DA] hover:shadow-xl transition-all duration-300 group">
<div className="relative h-64">
<img alt="Barber" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2674&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[#2A241E]">
                                Barber Shop
                            </div>
<div className="absolute top-4 right-4 bg-[#2A241E] text-[#C5A059] px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                5.0 <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#2A241E] mb-1">The Royal Cut</h3>
<p className="text-sm text-[#5D554A] mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Warszawa, Śródmieście
                            </p>
<button className="w-full py-3 rounded-lg border border-[#EBE5DA] text-[#2A241E] font-medium hover:bg-[#2A241E] hover:text-white transition-colors">
                                Zarezerwuj
                            </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-[#EBE5DA] hover:shadow-xl transition-all duration-300 group">
<div className="relative h-64">
<img alt="Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[#2A241E]">
                                Fizjoterapia &amp; SPA
                            </div>
<div className="absolute top-4 right-4 bg-[#2A241E] text-[#C5A059] px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                4.9 <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#2A241E] mb-1">Momentum Clinic</h3>
<p className="text-sm text-[#5D554A] mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Kraków, Kazimierz
                            </p>
<button className="w-full py-3 rounded-lg border border-[#EBE5DA] text-[#2A241E] font-medium hover:bg-[#2A241E] hover:text-white transition-colors">
                                Zarezerwuj
                            </button>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-[#EBE5DA] hover:shadow-xl transition-all duration-300 group">
<div className="relative h-64">
<img alt="Cosmetology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-[#2A241E]">
                                Kosmetologia
                            </div>
<div className="absolute top-4 right-4 bg-[#2A241E] text-[#C5A059] px-2.5 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                                5.0 <iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<div className="p-6">
<h3 className="text-xl font-semibold text-[#2A241E] mb-1">Silk Touch Institute</h3>
<p className="text-sm text-[#5D554A] mb-4 flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Wrocław, Krzyki
                            </p>
<button className="w-full py-3 rounded-lg border border-[#EBE5DA] text-[#2A241E] font-medium hover:bg-[#2A241E] hover:text-white transition-colors">
                                Zarezerwuj
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#000053] text-white overflow-hidden relative" id="business">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#C5A059 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">

<div className="relative mb-12 lg:mb-0">
<div className="relative mx-auto bg-[#1a1a6b] rounded-2xl p-2 shadow-2xl border border-white/10 rotate-1 hover:rotate-0 transition-transform duration-700">
<img alt="Dashboard" className="rounded-xl w-full h-auto opacity-90" src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 bg-[#C5A059] text-[#000053] p-6 rounded-xl shadow-xl">
<div className="text-sm font-bold uppercase tracking-wide opacity-80 mb-1">Przychód dzisiaj</div>
<div className="text-3xl font-bold font-playfair">2 850 PLN</div>
</div>
</div>
</div>

<div className="text-left">
<span className="inline-block py-1 px-3 rounded-full bg-[#C5A059]/20 text-[#C5A059] border border-[#C5A059]/30 text-xs font-bold tracking-wide uppercase mb-6">
                            Dla Właścicieli
                        </span>
<h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">Twój salon zasługuje na <br/> <span className="text-[#C5A059]">lepsze zarządzanie.</span></h2>
<p className="text-lg text-gray-300 mb-10 font-light">
                            Automatyzacja, która nie zabija relacji. Dołącz do elity just-book.
                        </p>
<ul className="space-y-6 mb-10">
<li className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">Niższa prowizja</h4>
<p className="text-sm text-gray-400 mt-1">Zostawiasz więcej zysku w kieszeni niż u konkurencji.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:card-transfer-linear"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">Wypłaty PayU w 24h</h4>
<p className="text-sm text-gray-400 mt-1">Płynność finansowa dzięki błyskawicznym przelewom.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon className="text-[#C5A059] text-xl" icon="solar:user-block-linear"></iconify-icon>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">Bez zakładania konta</h4>
<p className="text-sm text-gray-400 mt-1">Klienci rezerwują szybciej, bez zbędnych barier.</p>
</div>
</li>
</ul>
<a className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-lg bg-[#C5A059] hover:bg-[#b08d4b] text-[#000053] transition-all shadow-lg shadow-[#C5A059]/20" href="#">
                            Zacznij darmowy miesiąc
                        </a>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-[#EBE5DA] bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h3 className="text-lg font-semibold text-[#2A241E] mb-8">Popularne wyszukiwania</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Najlepsi Barberzy w Warszawie</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Fizjoterapia Kraków</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Fryzjer Wrocław</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Masaż Gdańsk</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Depilacja Laserowa Poznań</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Barber Shop Łódź</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">SPA Zakopane</a>
<a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Manicure Hybrydowy Katowice</a>
</div>
</div>
</section>

<footer className="bg-[#F2EFE9] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-bold tracking-tighter text-[#2A241E] mb-6 block" href="#">just-book.</a>
<div className="flex items-center gap-4 mb-6">
<button className="bg-[#EBE5DA] p-2 rounded-full text-[#2A241E] hover:bg-[#C5A059] hover:text-white transition-colors">
<iconify-icon className="block" icon="solar:moon-linear"></iconify-icon>
</button>
<span className="text-xs font-semibold uppercase tracking-wide text-[#5D554A]">Tryb Ciemny</span>
</div>
</div>
<div>
<h4 className="text-sm font-bold text-[#2A241E] uppercase tracking-wider mb-4">Platforma</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Dla Klientów</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Dla Biznesu</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Aplikacja Mobilna</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-[#2A241E] uppercase tracking-wider mb-4">Wsparcie</h4>
<ul className="space-y-3">
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Centrum Pomocy</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Regulamin</a></li>
<li><a className="text-sm text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#">Polityka Prywatności</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-bold text-[#2A241E] uppercase tracking-wider mb-4">Kontakt</h4>
<p className="text-sm text-[#5D554A] mb-2">hello@just-book.pl</p>
<p className="text-sm text-[#5D554A]">+48 500 000 000</p>
<div className="flex space-x-4 mt-4">
<a className="text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-[#5D554A] hover:text-[#C5A059] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-[#EBE5DA] pt-8 flex justify-between items-center">
<p className="text-xs text-[#9CA3AF]">© 2023 just-book. Wszystkie prawa zastrzeżone.</p>
</div>
</div>
</footer>
</main>

    </>
  );
}
